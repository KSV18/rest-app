import {gql,useQuery} from '@apollo/client';
import {useContext, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap';
import { AccordionCollapse } from 'react-bootstrap';

import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  Table,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem} from "reactstrap";


function OrderList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const GET_ORDERS = gql`
    query {
      orders {
        id
        address
        city
        amount
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ORDERS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.orders}`)



let searchQuery = data.orders.filter((res) =>{
    return res.address.includes(props.search)
  })

let orderId = searchQuery[0].id
let order = data.orders.dishes;

//Toggle for Accordion
function CustomToggle({children, eventKey}){
  const decoratedOnClick = useAccordionButton(eventKey,() =>
  console.log('custom'),);
return (
  <Button
    style={{width:500}}
    className="btn btn-warning" 
    onClick={decoratedOnClick}
    >{children}
    </Button>
);
};


// definet renderer for Orders
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <div className='center'>
    <Row xs='3' key={res.id}>
    <Accordion defaultActiveKey="1">
      <Card>
        <CardTitle>
          <CustomToggle eventKey="0">Order {res.id}</CustomToggle>
        </CardTitle>
        <AccordionCollapse eventKey="0">
          <CardBody>
            Address:<div className='add'> 
                      {res.address}<br></br>
                      {res.city}<br></br>
                    </div>
            Amount:<div className='add'> 
                    {res.amount}<br></br>
                    </div>
            Dishes:<div>
                  {/* {order.map((res) => (
                    <p>[{res.name}]</p>
                  ))} */}
            </div>
          </CardBody>
        </AccordionCollapse>
      </Card>
    </Accordion>
    </Row>
    <style jsx global>
    {`
    .center {
      margin: auto;
      width: 50%;
      padding: 10px;
    }

    .add {
      margin-left:65px;
      margin-top:-20px;
      background-color: #f0f0f0;
      width:120px;
      border-radius: 2px;
      padding: 5px 10px;
    }
      
    `}
  </style>
  </div>
  ))

  return(
//contains orders
    <Container>
    <Col xs='20'>
      {restList}
    </Col>
    <Row xs='3'>
    {}
    </Row>
    </Container>
 
  )
} else {
  return <h1> No Orders Found</h1>
}
}
   export default OrderList