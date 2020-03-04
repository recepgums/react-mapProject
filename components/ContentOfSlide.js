/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,
Button,TouchableOpacity,Picker,} from 'react-native';
import TreeView from 'react-native-final-tree-view';
import { SearchBar } from 'react-native-elements';
//import CheckBox from 'react-native-check-box'
//import { CheckBox } from 'react-native-elements';
state={
    project_btn_color:'gray',
    project_text_color:'white',
    sites_btn_color:'white',
    sites_text_color:'gray',

    data: [
    {
      id: 'Parent1',
      name: 'Parent1',
      children: [
        {
          id: 'child1',
          name: 'child1',
          children: [
            {
              id: 'child11',
              name: 'child11',
              children: [
                {
                  id: 'child111',
                  name: 'child111',
                },
              ],
            },
            {
              id: 'child12',
              name: 'child12',
            },
          ],
        },
      ],
    },
    {
      id: 'Parent2',
      name: 'Parent2',
      children: [
        {
          id: 'child2',
          name: 'child2',
          children: [
            {
              id: 'child21',
              name: 'child21',
            },
            {
              id: 'child22',
              name: 'child22',
            },
          ],
        },
      ],
    },
  ],
};

getIndicator = (isExpanded, hasChildrenNodes) => {
  if (hasChildrenNodes) {
    return '>';
  } else if (isExpanded) {
    return true;
  } else {
    return false;
  }
}


export default class ContentOfSlide extends React.Component {
  
render(){
  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <SearchBar
             platform="android"
            placeholder= "Search text..."
            containerStyle={{marginTop:1,backgroundColor: '#f5eeed', borderRadius: 10, marginBottom:5, height:30,shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOpacity: 0.8,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},}}
            inputStyle={{fontSize: 15}}
            inputContainerStyle={{marginTop: -10}}
            leftIconContainerStyle={{marginTop: -5}}
            />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={[styles.active_button,{backgroundColor:state.project_btn_color}]}>
                <Text style={{color:state.project_text_color,fontSize:20}}>
                    Projects
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.deactive_button,{backgroundColor:state.sites_btn_color}]}>
                <Text style={{color:state.sites_text_color,fontSize:20,color:'gray'}}>
                    Sites
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tree}>
            <TreeView 
        data={state.data}
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <View style={{justifyContent:'center'}}>
                <Text
                  style={{
                    marginLeft: 25 * level,
                    fontSize: 18,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                </Text>
            </View>
          );
        }}
      />
        </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    search:{
        marginTop:5,
        alignItems:'center'
    },
    search_box:{
      marginLeft:5,
      backgroundColor:'red'
    },
    active_button:{
        flex:1,
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        height:30

    },
    deactive_button:{
       flex:1,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        height:30,
        
    },
    buttons:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'center',

    },
    tree:{
        marginLeft:5,
        marginTop:10,
    },
    CheckBox:{
    }

});
