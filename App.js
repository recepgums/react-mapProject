/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { ThemeProvider, Button } from 'react-native-elements';
import TreeView from 'react-native-final-tree-view';
import BottomDrawer from 'rn-bottom-drawer';
import { SearchBar } from 'react-native-elements';
//import ProjectsContents from './components/ProjectsContents';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Marker } from "react-native-maps";

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function getIndicator(isExpanded, hasChildrenNodes) {
  if (!hasChildrenNodes) {
    return '-'
  } else if (isExpanded) {
    return '\\/'
  } else {
    return '>'
  }
}

const TAB_BAR_HEIGHT = -75;

const family = [
  {
    id: 'Grandparent',
    name: 'Türkiye',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Trabzon',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'Cluster 1',
            age: 10,
            children: [
              {
                id: 'Erick2',
                name: 'Site 1',
                age: 10,
              },
              {
                id: 'Rose',
                name: 'Site 2',
                age: 12,
              },
            ],
          },
          {
            id: 'Rose2',
            name: 'Cluster 2',
            age: 12,
          },
          {
            id: 'David',
            name: 'Cluster 3',
            age: 12,
          },
        ],
      },
    ],
  },
  {
    id: 'Grandparent2',
    name: 'Türkiye',
    age: 78,
    children: [
      {
        id: 'Me2',
        name: 'Trabzon',
        age: 30,
        children: [
          {
            id: 'Erick3',
            name: 'Cluster 1',
            age: 10,
            children: [
              {
                id: 'Erick4',
                name: 'Site 1',
                age: 10,
              },
              {
                id: 'Rose22',
                name: 'Site 2',
                age: 12,
              },
            ],
          },
          {
            id: 'Rose32',
            name: 'Cluster 2',
            age: 12,
          },
          {
            id: 'David3',
            name: 'Cluster 3',
            age: 12,
          },
        ],
      },
    ],
  },
]

const theme = {
  Button: {
    titleStyle: {
      color: 'black',
    },
    buttonStyle: {
      backgroundColor: 'grey',
      backgroundColor:'#f5eeed',
      borderRadius:10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
    }
  },
};

export default class App extends React.Component {
  state = {
    isSitesSelected:true,
    project_btn_color:'gray',
    project_text_color:'white',
    sites_btn_color:'white',
    sites_text_color:'gray',
    search: '',
    checked: [],
    expanded: [],
    kubilay: false,
    coordinate:[
      {
        latitude: 40.928431,
        longitude: 39.706467
      },
      {
        latitude: 39.928431,
        longitude: 39.706467
      },
      {
        latitude: 39.828431,
        longitude: 39.706467
      }
    ]
  };

  updateSearch = search => {
    this.setState({ search });
  };
  
  
  onPressDetail = () => {
    this.setState({
        kubilay : true
    });
  };

  sites_click= ()=>{
    if(this.state.isSitesSelected)
    this.setState({
    project_btn_color:'white',
    project_text_color:'gray',
    sites_btn_color:'gray',
    sites_text_color:'white',
    isSitesSelected:false
    });
  };
   protects_click= ()=>{
    if(!this.state.isSitesSelected)
    this.setState({
    project_btn_color:'gray',
    project_text_color:'white',
    sites_btn_color:'white',
    sites_text_color:'gray',
    isSitesSelected:true
    });
  };
  renderContent = () => {
    const { search } = this.state;
    return (
      <>
      <View style={{alignItems:'center'}}>
        <View style={styles.shortLine} />
      </View>
      <View style={styles.drawerContainer}>
        <SearchBar
          platform="android"
          placeholder= "Search text..."
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{marginLeft:5,backgroundColor: '#f5eeed', borderRadius: 10, width:350, height:30,shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.8,
          elevation: 6,
          shadowRadius: 15 ,
          shadowOffset : { width: 1, height: 13},}}
          inputStyle={{fontSize: 15}}
          inputContainerStyle={{marginTop: -10}}
          leftIconContainerStyle={{marginTop: -5}}
      />
        <ThemeProvider theme={theme}>
          <Button
          icon = {
            <Icon
              name="expand"
              size={15}
              color="black"
            />
          }
          onPress={this.onPressDetail}
          />
        </ThemeProvider> 
      </View>     
      <View>
        <View style={styles.line} />
      </View>
      <View style={styles.buttons}>
            <TouchableOpacity 
            onPress={this.protects_click}
            style={[styles.active_button,{backgroundColor:this.state.project_btn_color}]}>
                <Text style={{color:this.state.project_text_color,fontSize:20}}>
                    Projects
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={this.sites_click}
            style={[styles.deactive_button,{backgroundColor:this.state.sites_btn_color}]}>
                <Text style={{color:this.state.sites_text_color,fontSize:20}}>
                    Sites
                </Text>
            </TouchableOpacity>
        </View>
      
      <View style={{marginLeft:15,marginTop:10}}> 
        <View style={{height:135}}>
          <ScrollView>
            <TreeView
            initialExpanded={this.state.kubilay}
            data={family} // defined above
            renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
              return (
                <View>
                  <Text
                    style={{
                      marginLeft: 25 * level,
                    }}
                  >
                    {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                  </Text>
                </View>
              )
            }}
            />
          </ScrollView>
        </View>
      </View>
      </>
    )
  }

  render() {  
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <View style={styles.headerContainer}>
            <View style={styles.circleBlue}>
            </View>
              <Text style={styles.sectionDescription}>
                Completed
              </Text>
            </View>
            <View style={styles.headerContainer}>
            <View style={styles.circleGreen}>
            </View>             
              <Text style={styles.sectionDescription}>
                Normal
              </Text>
            </View>
            <View style={styles.headerContainer}>
            <View style={styles.circleYellow}>
            </View>
              <Text style={styles.sectionDescription}>
                Warning
              </Text>
            </View>
            <View style={styles.headerContainer}>
            <View style={styles.circleRed}>
            </View>
              <Text style={styles.sectionDescription}>
                Block
              </Text>
            </View>
    </View>
    <View style={styles.body}>
  <MapView 
  showsUserLocation={true}
  followsUserLocation={true}
  clusterColor={'#44F'} 
  initialRegion={{latitude: 39.706467,longitude: 40.928431,latitudeDelta: 11.04,longitudeDelta: 0.05,}} 
  style={{ flex: 1 }}
  showsUserLocation={true}
  >
    {
    this.state.coordinate.map(function(data, index){
       return (
         <Marker key={index} coordinate={data} /> 
       )
     }.bind(this))
   }
    
  </MapView>
    </View>
    <BottomDrawer
        containerHeight={370}
        offset={TAB_BAR_HEIGHT}
        startUp = {false}
      >
        {this.renderContent()}
      </BottomDrawer>
</View>      
    );
  }
};
 
var styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'column',
},
headerContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
drawerContainer: {
  marginHorizontal:10,
  marginTop: 10,
  flexDirection:'row',
  justifyContent:'space-between'
},
header: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
    justifyContent:'space-around',
    shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13}
  
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
  borderRadius: 150/2
},
circleGreen: {
  backgroundColor: 'green',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
circleYellow: {
  backgroundColor: 'yellow',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
circleRed: {
  backgroundColor: 'red',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
    active_button:{
        flex:1,
        borderRadius:5,
        borderWidth:1,
        alignItems:'center',
        height:35,
        marginLeft:10

    },
    deactive_button:{
       flex:1,
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        alignItems:'center',
        height:35,
        marginLeft:10
        
    },
    buttons:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'center',

    },
});