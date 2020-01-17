import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const api="http://192.168.1.6:3000/graphql"
const yotube=(url)=> {
	return fetch(url, options).then(response=>response.json())
    }
 const login =(user)=> {
   console.log("datos para guardar:",user)
    const client = new ApolloClient({
        link: new HttpLink({ uri: api }),
        cache: new InMemoryCache()
      });

    return (
        client
        .mutate({
          mutation: gql`
            mutation Login($input:LoginInput){
                Login(input:$input){
                id
                names
                nickname
                photo
                }
            }
          `,
          variables: {
            "input": user
          }
        })
    )
}

export {login,yotube}