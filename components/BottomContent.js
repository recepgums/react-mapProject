import React from 'react';
import {View,Text} from 'react-native';
import {  App} from "../App";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import BottomDrawer from 'rn-bottom-drawer';
export default class BottomContent extends React.Component {
  

  state = {
    progress_state: this.props.current_active_step,
    current_description: this.props.current_description,
    current_title: this.props.current_title,
    current_marker: 0,
    };
componentDidMount(){
}
  render() {
  const isHidden=this.props.isHidden || false;
  if(isHidden){
    return null;
  }
  return (
    <BottomDrawer containerHeight={320} offset={-75} startUp={true}>
    <View style={{flex:1,alignItems:'center'}}>
        <View />
        <View style={{flex:1,marginBottom:5}}>
          <ProgressSteps 
            key={this.props.current_active_step}
            activeStep={this.props.current_active_step} 
            progressBarColor='#dc143c' 
            labelColor='black'
            disabledStepNumColor='darkslategrey'
            completedProgressBarColor='#6495ed'
            completedStepIconColor='green'
            activeStepIconBorderColor='#dc143c'
            activeLabelColor='#dc143c'
            borderWidth={3} 
          >
            <ProgressStep label="SS" >
                  <View style={{ alignItems: 'center' }}>
                </View>
            </ProgressStep>
            <ProgressStep label="SD">
                <View style={{ alignItems: 'center' }}>
                    
                </View>
            </ProgressStep>
            <ProgressStep label="DO">
                <View style={{ alignItems: 'center' }}>
                    
                </View>
            </ProgressStep>
            <ProgressStep label="INS">
                <View style={{ alignItems: 'center' }}>
                    
                </View>
            </ProgressStep>
            <ProgressStep label="INT">
                <View style={{ alignItems: 'center' }}>
                    
                </View>
            </ProgressStep>
            <ProgressStep label="DT">
                <View style={{ alignItems: 'center' }}>
                    
                </View>
            </ProgressStep>
        </ProgressSteps> 
      </View>
     
    </View>
    <View style={{flex:2}}>
      <View style={{textAlign:'center',alignSelf: 'center'}}>
            <View>
              <Text style={{fontSize:20,textAlign:'center',marginTop:10}}>
                {this.state.current_title}
                </Text>
            </View>
            <View>
              <Text style={{textAlign:'center',marginTop:7}}>
                {this.state.current_description}
                </Text>
                <Text style={{textAlign:'center',marginTop:7}}>
                {this.state.progress_state}
                  </Text>
              </View>
        </View>   
    </View>
    </BottomDrawer>
        );    
    };
}