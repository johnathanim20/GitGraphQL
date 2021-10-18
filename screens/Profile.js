import React, { useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import {parseProfile} from '../parsers/parseProfile.js';
import { API_KEY } from "@env";

export function Profile ({navigation}) {
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
            avatarUrl
            name
            login
            bio
            websiteUrl
            email
            createdAt
            followers{
              totalCount
            }
            following{
              totalCount
            }
            repositories(privacy:PUBLIC, first:100){
              totalCount
              nodes{
                name
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
      parsed = new parseProfile(response);
      setData(parsed);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  console.log(data);
  return (
    <View style={{
      backgroundColor: '#00FFE4',
    }}>
        {data && <Text>Avatar URL: {data.avatar_url}</Text>}
        {data &&<Text>Name : {data.name}</Text>}
        {data &&<Text>Username : {data.username}</Text>}
        {data &&<Text>Bio : {data.bio}</Text>}
        {data &&<Text>Website : {data.website}</Text>}
        {data &&<Text>Email : {data.email}</Text>}
        {data &&<Text>Public Repo Count: {data.repositories} </Text>}
        <Button onPress = {() => navigation.navigate('Repository')}
        title = "View Repositories"></Button>
        {data && <Text>Follower Count:{data.followers}  </Text>}
        <Button
        onPress = {() => navigation.navigate('Home')}
        title = "View Followers"></Button>
        {data &&<Text>Following Count: {data.following} </Text>}
        <Button
        onPress = {() => navigation.navigate('Home')}
        title = "View Following"></Button>
        {data &&<Text>Profile Creation Date : {data.created_at}</Text>}
      </View>
  );
}

