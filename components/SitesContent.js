import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,TouchableOpacity,ScrollView } from 'react-native';
import { search2, App} from "./../App";
import TreeView from 'react-native-final-tree-view';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import BottomDrawer from 'rn-bottom-drawer';
const TAB_BAR_HEIGHT = -75;

export default class SitesContent extends React.Component {
  state = {
    progress_state: this.props.current_active_step,
    current_description: this.props.current_description,
    current_title: this.props.current_title,
    current_marker: 0,
    };
render(){
  return (
    <BottomDrawer containerHeight={370} offset={TAB_BAR_HEIGHT} startUp={false}>
    <View style={{flex:1,alignItems:'center'}}>
        <View style={styles.shortLine} />
        <View>
            <View style={styles.line} />
        </View>
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





var styles = StyleSheet.create({
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