import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,TouchableOpacity,ScrollView } from 'react-native';
import { search2, App} from "./../App";
import TreeView from 'react-native-final-tree-view';
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
const family2 = [
  {
    id: 'Grandparent',
    name: 'Trabzon',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Sürmeli',
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
    name: 'İstanbul',
    age: 78,
    children: [
      {
        id: 'Me2',
        name: 'Eyüp',
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

function getIndicator(isExpanded, hasChildrenNodes) {
  if (!hasChildrenNodes) {
    return '-'
  } else if (isExpanded) {
    return '\\/'
  } else {
    return '>'
  }
}
export default class SitesContent extends React.Component {
    state = {
    arama:search2,
    konum_x:40.928431,
    isSitesSelected:true,
    project_btn_color:'gray',
    project_text_color:'white',
    sites_btn_color:'white',
    sites_text_color:'gray',
    search:this.props.search,
    checked: [],
    expanded: [],
    };
    sites_click= ()=>{
    if(this.state.isSitesSelected)
    this.setState({
    project_btn_color:'white',
    project_text_color:'gray',
    sites_btn_color:'gray',
    sites_text_color:'white',
    isSitesSelected:false,
    arama:'xxxx'
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
content= ()=>{
    if(this.state.isSitesSelected){
        return(
        <>
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
                    {getIndicator(isExpanded, hasChildrenNodes)} {node.name}{this.state.arama}
                  </Text>
                </View>
              )
            }}
            
            />
        </>
    )
    }
    return(
        <>
        <TreeView
            initialExpanded={this.state.kubilay}
            data={family2} // defined above
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
        </>
    )
    

};
render(){
    const konumx= this.state.konum_x;
  return (
    <>
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
            {this.content()}
            <Text> {this.state.search}</Text>
          </ScrollView>
        </View>
      </View>
    </>
        );    
    };
}
var styles = StyleSheet.create({

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
})