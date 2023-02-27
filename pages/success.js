
import React, { useState, useEffect, useContext } from "react";
import { Router, useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Badge,
} from "reactstrap";

import AppContext from "../components/context";
import { route } from "next/dist/next-server/server/router";

function Success() {

  const router = useRouter();
  const appContext = useContext(AppContext);

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img src="http://localhost:1337/uploads/5a60a9d26a764e7cba1099d8b157b5e9.png" />
            </div>
            <div className="wrapper">  
                <h2>Thank you for registering</h2>
                
            <center><Button
            style={{ marginTop: "20px",width: 100}}
            href="/login"
            className="btn btn-warning"
            >Login
            </Button></center>
            </div>
            
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
            background-color: white;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #ffc028;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
}

export default Success;