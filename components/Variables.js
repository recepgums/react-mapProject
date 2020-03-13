import React from 'react';
import {StyleSheet} from 'react-native';

export const items = [{
        name: 'Country',
        id: 0,
        // these are the children or 'sub items'
        children: [
        {
            name: 'Turkey',
            id: 200,
            longitude: 35.6667,
            latitude: 39.1667
    
        },
        {
            name: 'Indonesia',
            id: 17,
        },
        {
            name: 'China',
            id: 13,
        }
        ],
    }];
export const items2 = [{
name: 'City',
id: 0,
// these are the children or 'sub items'
children: [
    {
    name: 'İstanbul',
    id: 100,
    longitude: 28.979530,
    latitude: 41.015137
    },
    {
    name: 'Ankara',
    id: 17,
    },
    {
    name: 'Antalya',
    id: 13,
    }
],
}];
export const items3 = [{
    name: 'Province',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'İç Anadolu',
        id: 10,
      },
      {
        name: 'Marmara',
        id: 17,
      },
      {
        name: 'Ege',
        id: 13,
      }
    ],
  }];
 export const proje_selecting_bar = [
    {
      value: 'Project 1'
    },
    {
      value: 'Project 2'
    },
    {
      value: 'Project 3'
    }
  ];
export  const stil=StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    headerContainer: {
      textAlignVertical: 'top',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawerContainer: {
      marginHorizontal: 10,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    header: {
      flex: 1.2,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: { width: 1, height: 13 }
  
    },
    header2: {
      flex: 0.7,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15,
      shadowOffset: { width: 1, height: 13 }
  
    },
    body: {
      flex: 13, // veya .25
      backgroundColor: '#CCC',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    shortLine: {
      marginTop: 10,
      width: 35,
      height: 6,
      backgroundColor: 'grey',
      opacity: .3
    },
    line: {
      marginTop: 10,
      height: 1.5,
      backgroundColor: 'grey',
      opacity: .3
    },
    circleBlue: {
      backgroundColor: 'blue',
      width: 15,
      height: 15,
      borderRadius: 150 / 2
    },
    circleGreen: {
      backgroundColor: 'green',
      width: 15,
      height: 15,
      borderRadius: 150 / 2
    },
    circleYellow: {
      backgroundColor: 'yellow',
      width: 15,
      height: 15,
      borderRadius: 150 / 2
    },
    circleRed: {
      backgroundColor: 'red',
      width: 15,
      height: 15,
      borderRadius: 150 / 2
    },
    active_button: {
      flex: 1,
      borderRadius: 5,
      borderWidth: 1,
      alignItems: 'center',
      height: 35,
      marginLeft: 10
  
    },
    deactive_button: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      alignItems: 'center',
      height: 35,
      marginLeft: 10
  
    },
    buttons: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
  
    },
  });
export const coordinate= [
    {
      latitude: 40.928431,
      longitude: 39.706467,
      title: "State: SiteCode021",
      description: "City: SiteName021",
      step: 1
    },
    {
      latitude: 39.928431,
      longitude: 39.706467,
      title: "Title-2",
      description: "Description-2",
      step: 2
    },
    {
      latitude: 39.828431,
      longitude: 39.706467,
      title: "Title-3",
      description: "Description-3",
      step: 3
    },
    {
      latitude: 38.828431,
      longitude: 38.706467,
      title: "Title-4",
      description: "Description-4",
      step: 4
    },
    {
      latitude: 38.728431,
      longitude: 38.746467,
      title: "Title-5",
      description: "Description-5",
      step: 5
    },
  ]