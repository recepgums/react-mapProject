/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Touch,Button,Animated,TouchableWithoutFeedback } from 'react-native';
import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomUpPanel from "./components/Slide";


export default class App extends React.Component {
  state = {
    animation:new Animated.Value(187),
    width_animation:new Animated.Value(0.15),
    viewState : true,
    height:200,
   };
  
  startAnimation = ()=>{
    if(this.state.viewState == true){
          Animated.timing(this.state.animation,{
          toValue:0,
          duration:100
        }).start();
        Animated.timing(this.state.width_animation,{
          toValue:1,
          duration:0
        }).start(()=>{
      this.setState({viewState : false})
    });
    }else{
       Animated.timing(this.state.animation,{
          toValue:187,
          duration:0
        }).start();
        Animated.timing(this.state.width_animation,{
          toValue:0.15,
          duration:50
        }).start(()=>{
      this.setState({viewState : true})
    });
    }
    }
  renderBottomUpPanelContent = () =>
          <View>
               <FlatList style={{ backgroundColor: 'red', opacity: 0.7, flex:1}}
                    data={DATA}
                    renderItem={({item}) =>
                                <Text style={{color:'white', padding:20}}>{item}</Text>
                               }
                />
          </View>
render(){
  const animatedStyles={
      transform:[
        {
        translateY:this.state.animation,
        }
      ],
      genislik:[{
        flex:this.state.width_animation
      }],
    }
  return (
     <View style={styles.container}>
        <View style={styles.map_container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 33.9637451,
              longitude: 35.2433205,
              latitudeDelta: 30.015,
            longitudeDelta: 30.0121,
            }}
          >
        </MapView>
      </View>
<BottomUpPanel
                      content={this.renderBottomUpPanelContent}
                      icon={this.renderBottomUpPanelIcon}
                      topEnd={400}
                      startHeight={35}
                      headerText={"Projects/Sites"}
                      headerTextStyle={{color:"white", 
                                       fontSize: 17}}
                      bottomUpSlideBtn={{display: 'flex',
                                       alignSelf: 'flex-start',
                                       backgroundColor: 'gray',
                                       alignItems: 'center',
                                       borderTopColor: 'white',
                                       borderTopWidth: 0}}>
      </BottomUpPanel>        

      
      {/*<View style={{ flexDirection:'row', justifyContent:'center'}}>
        <TouchableWithoutFeedback  onPress={this.startAnimation}>
          <Animated.View style={[styles.div,animatedStyles.transform,animatedStyles.genislik]}>
           
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>*/}
   </View>
  );
};
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   height:800,
   width:500
 },
 map_container: {
   flex: 3
 },
 div:{
   height:200,
   width:200,
   backgroundColor:'gray'
 }
});
