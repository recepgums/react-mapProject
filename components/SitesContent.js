import React from 'react';
import {View,Text} from 'react-native';
import {  App} from "../App";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import BottomDrawer from 'rn-bottom-drawer';
export default class SitesContent extends React.Component {


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

            </BottomDrawer>
        );
    };
}