import React, { useState, useEffect} from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text, View, Button } from 'react-native';
import {parseRepository} from '../parsers/parseRepository.js'
import { API_KEY } from "@env";

export function Repository () {
  var parsed;
  const [data, setData] = useState(null);
  useEffect(() => {
    const postMethod = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({query: `{ 
          user(login:"johnathanim20") {
            repositories(privacy:PUBLIC, first:100){
              nodes{
                name
                owner {
                  login
                }
                description
              }
            }
          }
        }`})
    };
    fetch('https://api.github.com/graphql', postMethod)
    .then(res=> {
      if(!res.ok) {
        throw Error("ERROR");
      }
      return res.json();
    })
    .then(response => {
      console.log(response);
      parsed = new parseRepository(response);
      setData(parsed);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  
  return (
    <View style={{
      container: {
        paddingTop: 0,
        paddingHorizontal: 0,
      }
    }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style = {{flex:1}}>Repo Name</DataTable.Title>
          <DataTable.Title style = {{flex:1.5}}>Username</DataTable.Title>
          <DataTable.Title style = {{flex:1}}>Description</DataTable.Title>
        </DataTable.Header>
        {
          data && data.name.map((entry, name) => {
              return(
                <DataTable.Row key = {name}>
                  <DataTable.Cell style = {{flex:1}}>{entry.name}</DataTable.Cell>
                  <DataTable.Cell style = {{flex:2}}>{entry.owner.login}</DataTable.Cell>
                  <Text style = {{flex:2, justifyContent: 'center'}}>{entry.description}</Text>
                </DataTable.Row>
              )
          })
        }     
      </DataTable>
    </View>
  );
}
