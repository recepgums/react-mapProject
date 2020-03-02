/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,Button,TouchableOpacity,TextInput } from 'react-native';
state={
    project_btn_color:'white',
    project_text_color:'gray,',
    sites_btn_color:'gray',
    sites_text_color:'white'
};

export default class ContentOfSlide extends React.Component {
render(){
  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <TextInput style={styles.search_box} placeholder={"Search here..."} />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:state.project_text_color}}>
                    Projects
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:state.sites_text_color}}>
                    Sites
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tree}>

        </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    search:{
        flex:1,
        marginTop:5,
    },
    search_box:{
      borderWidth:1,
      borderRadius:10,
      width:400,
      height:30
    },
    button:{
        flex:1,
        backgroundColor:'gray',
        borderRadius:15,
        borderWidth:1,
        alignItems:'center'
    },
    buttons:{
        marginTop:5,
        flexDirection:'row',
        justifyContent:'center',
    },
    tree:{
        marginTop:10,
        
    }

});
