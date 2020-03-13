import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,TouchableOpacity,ScrollView } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export default class SectionedMultiSelectContent extends React.Component {

render(){
  
  return (
    <View style={styles.headerContainer}>
            <Text style={{ marginLeft: 10 }}>{this.props.title}</Text>
            <SectionedMultiSelect
              showCancelButton={true}
              showDropDowns={true}
              items={this.props.data}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.props.onSelectedItemsChange}
              selectedItems={this.props.selectedItems}
            />
          </View>
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
})


/*

<SectionedMultiSelect
              styles={{
                selectToggle: {
                  backgroundColor: '#8BC540',
                  alignItems: 'center',
                  alignContent: 'center',
                  height: 50,
                  marginBottom: 12,
                },
              }}
              renderSelectText={() => {
                return (
                  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Icon type="AntDesign" name="chevron-circle-down" size={15} color="white" />
                    <Text style={{ color: '#F5F4F4' }}>Site Model</Text>
                  </View>

                );
              }}

*/ 