/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,Button,TouchableOpacity } from 'react-native';


export default class ContentOfSlide extends React.Component {
render(){
  return (
    <View style={styles.container}>
       <View style={styles.header}>
            <TouchableOpacity style={[styles.button]}>
                <Text>
                    Projects
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text>
                    Projects
                </Text>
            </TouchableOpacity>
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
    header:{
        height:40,
        backgroundColor:'red',
        flexDirection:'row'
    },
    button:{
        borderRadius:40,
        borderColor:'green'
    }

});
