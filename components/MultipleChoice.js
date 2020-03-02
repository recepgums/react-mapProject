/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Touch,Button,Animated,TouchableWithoutFeedback } from 'react-native';


export default class MultipleChoice extends React.Component {
    state = {
    animation:new Animated.Value(180),
    width_animation:new Animated.Value(0.1)
   };
  
  startAnimation = ()=>{
     Animated
     .timing(this.state.animation,{
       toValue:0,
       duration:500
     }).start();

     Animated
     .timing(this.state.width_animation,{
       toValue:1,
       duration:500
     }).start();
   };
render(){
  const animatedStyles={
      transform:[
        {
        translateY:this.state.animation,
        }
      ],
      genislik:[{
        flex:this.state.width_animation
      }]
    }
  return (
    <View style={styles.container}>
        <View style={{ flexDirection:'column', justifyContent:'center'}}>
        <TouchableWithoutFeedback  onPress={this.startAnimation}>
          <Animated.View style={[styles.div,animatedStyles.transform,animatedStyles.genislik]}>
          <Text>dsads</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:200,
        backgroundColor:'gray'
    }
});
