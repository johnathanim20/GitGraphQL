import React, { useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import {parseProfile} from '../parsers/parseProfile.js';
import { API_KEY } from "@env";
export function Following ({navigation}) {
    return (
      <View style={{
        backgroundColor: '#00FFE4',
      }}>
        <Text>Following Screen</Text>
        </View>
    );
  }
  