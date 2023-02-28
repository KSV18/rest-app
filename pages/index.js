import React, { useState } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import SplitPane from "react-split-pane";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    
  
    return (
        <ApolloProvider client={client}>
          <div className="search" style={{marginTop:1}}>
                <br></br>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    placeholder="Local Restaurants"
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            <SplitPane
                // paneStyle={{backgroundImage: "url(talavera-2.jpg", backgroundRepeat: "repeat" }} 
                pane1Style={{width:"75%"}}
                pane2Style={{ marginRight:20,width:"25%"}}
                split="vertical"
                minSize={100}
                maxSize={-100}
                
            >
            <RestaurantList search={query} /> 
            <Cart> </Cart>
            </SplitPane>
        </ApolloProvider>
    );
  }
  export default Home;
  