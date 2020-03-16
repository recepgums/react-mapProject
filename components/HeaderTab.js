import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


export default class HeaderTab extends React.Component {

    state = {
        region_btn_clr: "#5bc0de",
        model_btn_clr: 'white',
        cluster_btn_clr: 'white',
        current_tab: 1
    }
    clickRegion = () => {
        this.props.tabClick
        this.setState({
            region_btn_clr: this.props.region_btn_clr,
            model_btn_clr: this.props.model_btn_clr,
            cluster_btn_clr: this.props.cluster_btn_clr,
            current_tab: this.props.current_tab,

        })
    }

    render() {
        return (
            <View style={[styles.headerContainer, {marginTop: 20}]}>
                <TouchableOpacity
                    onPress={this.clickRegion}
                    style={{
                        marginBottom: 15,
                        height: 35,
                        width: 120,
                        marginRight: 1,
                        backgroundColor: this.state.region_btn_clr,
                        borderBottomColor: 'black',
                        borderRadius: 2,
                        borderWidth: 0.5,
                    }}><Text style={{color: this.state.region_txt_clr, textAlign: 'center'}}> Region </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    headerContainer: {
        textAlignVertical: 'top',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});