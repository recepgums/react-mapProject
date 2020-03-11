/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { ThemeProvider, Button } from 'react-native-elements';
import BottomDrawer from 'rn-bottom-drawer';
import { SearchBar } from 'react-native-elements';
import MapView from "react-native-map-clustering";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Marker} from "react-native-maps";
import SitesContent from "./components/SitesContent";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {aaa} from "./components/ProjectsContent";
import { Dropdown } from 'react-native-material-dropdown';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView 
} from 'react-native';

const TAB_BAR_HEIGHT = -75;



const items = [{
    name: 'Country',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Turkey',
        id: 200,
        longitude:35.6667,
        latitude:39.1667

      },
      {
        name: 'Indonesia',
        id: 17,
      },
      {
        name: 'China',
        id: 13,
      }
    ],
  }];
const items2 = [{
    name: 'City',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'İstanbul',
        id: 100,
        longitude:28.979530,
        latitude:41.015137
      },
      {
        name: 'Ankara',
        id: 17,
      },
      {
        name: 'Antalya',
        id: 13,
      }
    ],
  }];
const items3 = [{
    name: 'Province',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'İç Anadolu',
        id: 10,
      },
      {
        name: 'Marmara',
        id: 17,
      },
      {
        name: 'Ege',
        id: 13,
      }
    ],
  }];
const proje_selecting_bar =[
    {
      value:'Project 1'
    },
    {
      value:'Project 2'
    },
    {
      value:'Project 3'
    }
  ];
const theme = {
  Button: {
    titleStyle: {
      color: 'black',
    },
    buttonStyle: {
      backgroundColor: 'grey',
      backgroundColor:'#f5eeed',
      borderRadius:10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
    }
  },
};
export const search2="sads";

export default class App extends React.Component {


  state = {
    modalVisible:false,
    current_tab:1,
    current_region:'',
    region_btn_clr:'#77f',
    region_txt_clr:'black',
    model_btn_clr:'white',
    model_txt_clr:'black',
    cluster_btn_clr:'white',
    cluster_txt_clr:'black',
    selectedItems: [],
    isSitesSelected:true,
    regionLatitude:39.706467,
    project_btn_color:'gray',
    project_text_color:'white',
    sites_btn_color:'white',
    sites_text_color:'gray',
    search: '',
    checked: [],
    expanded: [],
    kubilay: false,
    coordinate:[
      {
        latitude: 40.928431,
        longitude: 39.706467,
        description:'sadsa',
      },
      {
        latitude: 39.928431,
        longitude: 39.706467,
        description:'sadsa',
      },
      {
        latitude: 39.828431,
        longitude: 39.706467,
        description:'sadsa',
      },
      {
        latitude: 38.828431,
        longitude: 38.706467,
        description:'sadsa',
      },
      {
        latitude: 38.728431,
        longitude: 38.746467,
        description:'sadsa',
      },
    ]
  };


  onPressRegionTab=()=>{
    this.setState({
      region_btn_clr:'#77f',
      model_btn_clr:'white',
      cluster_btn_clr:'white',
      current_tab:1
    })
  }
  onPressModalTab=()=>{
    this.setState({
      region_btn_clr:'white',
      model_btn_clr:'#77f',
      cluster_btn_clr:'white',
      current_tab:2
    })
  }
  onPressClusterTab=()=>{
    
    this.setState({
      region_btn_clr:'white',
      model_btn_clr:'white',
      cluster_btn_clr:'#77f',
      current_tab:3
    })
  }


  updateSearch = search => {
    this.setState({ search });
  };
  
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    
    //console.log(selectedItems)
  };
  
  onPressDetail = () => {
    this.setState({
        kubilay : true
    });
  };
  animate = () => {
    const region ={latitude: 43.706467,longitude: 40.928431,latitudeDelta: 51.04,longitudeDelta: 50.05} 
    if(this.state.selectedItems==200){
      this.mapView.animateToRegion({latitude: items[0].children[0].latitude,longitude: items[0].children[0].longitude,latitudeDelta: 21.04,longitudeDelta: 20.05})
    }else{
      this.mapView.animateToRegion({latitude: items2[0].children[0].latitude,longitude: items2[0].children[0].longitude,latitudeDelta: 11.04,longitudeDelta: 10.05})
    }
    
  }
  
  
  renderHeader_3_dropdown = ()=>{
    if(this.state.current_tab==1){
     
      return(
        <>
              <View style={styles.headerContainer}>
              <Text style={{marginLeft:10}}>Country</Text>
              <SectionedMultiSelect 
              showCancelButton={true}
              showDropDowns={true}
              items={items}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />
              </View>
  
              <View style={styles.headerContainer}>
              <Text>Province</Text>
              <SectionedMultiSelect
              showCancelButton={true}
              showDropDowns={true}
              items={items3}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />
              </View>
  
              <View style={styles.headerContainer}>
              <Text>City</Text>
              <SectionedMultiSelect
              showCancelButton={true}
              showDropDowns={true}
              items={items2}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />           
                  
              </View>
              
        </>
      )
    }
    else if(this.state.current_tab==2){
     
      return(
        <>
              <View style={styles.headerContainer}>
              <Text style={{marginLeft:10}}>Model</Text>
              <SectionedMultiSelect 
              showCancelButton={true}
              showDropDowns={true}
              items={items}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />
              </View>
  
              <View style={styles.headerContainer}>
              <Text>Model2</Text>
              <SectionedMultiSelect
              showCancelButton={true}
              showDropDowns={true}
              items={items3}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />
              </View>
  
              <View style={styles.headerContainer}>
              <Text>Model3</Text>
              <SectionedMultiSelect
              showCancelButton={true}
              showDropDowns={true}
              items={items2}
              uniqueKey="id"
              subKey="children"
              showChips={false}
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              />           
                  
              </View>
              
        </>
      )
    }
    return(
      <>
            <View style={styles.headerContainer}>
            <Text style={{marginLeft:10}}>Cluster</Text>
            <SectionedMultiSelect 
            showCancelButton={true}
            showDropDowns={true}
            items={items}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>
  
            <View style={styles.headerContainer}>
            <Text>Cluster1</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items3}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>
  
            <View style={styles.headerContainer}>
            <Text>Cluster2</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items2}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />           
                
            </View>
            
      </>
    )
  
  }
  


renderHeader_4_dropdown = ()=>{
  if(this.state.current_tab==1){
   
    return(
      <>
            <View style={styles.headerContainer}>
            <Text style={{marginLeft:10}}>Country</Text>
            <SectionedMultiSelect 
            showCancelButton={true}
            showDropDowns={true}
            items={items}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>

            <View style={styles.headerContainer}>
            <Text>Province</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items3}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>

            <View style={styles.headerContainer}>
            <Text>City</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items2}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />           
                
            </View>
            
      </>
    )
  }
  else if(this.state.current_tab==2){
   
    return(
      <>
            <View style={styles.headerContainer}>
            <Text style={{marginLeft:10}}>Model</Text>
            <SectionedMultiSelect 
            showCancelButton={true}
            showDropDowns={true}
            items={items}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>

            <View style={styles.headerContainer}>
            <Text>Model2</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items3}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>

            <View style={styles.headerContainer}>
            <Text>Model3</Text>
            <SectionedMultiSelect
            showCancelButton={true}
            showDropDowns={true}
            items={items2}
            uniqueKey="id"
            subKey="children"
            showChips={false}
            showDropDowns={true}
            readOnlyHeadings={false}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />           
                
            </View>
            
      </>
    )
  }
  return(
    <>
          <View style={styles.headerContainer}>
          <Text style={{marginLeft:10}}>Cluster</Text>
          <SectionedMultiSelect 
          showCancelButton={true}
          showDropDowns={true}
          items={items}
          uniqueKey="id"
          subKey="children"
          showChips={false}
          showDropDowns={true}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          />
          </View>

          <View style={styles.headerContainer}>
          <Text>Cluster1</Text>
          <SectionedMultiSelect
          showCancelButton={true}
          showDropDowns={true}
          items={items3}
          uniqueKey="id"
          subKey="children"
          showChips={false}
          showDropDowns={true}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          />
          </View>

          <View style={styles.headerContainer}>
          <Text>Cluster2</Text>
          <SectionedMultiSelect
          showCancelButton={true}
          showDropDowns={true}
          items={items2}
          uniqueKey="id"
          subKey="children"
          showChips={false}
          showDropDowns={true}
          readOnlyHeadings={false}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          />           
              
          </View>
          
    </>
  )

}


  renderContent = () => {
    const { search } = this.state;
    return (
      <>
      <View style={{alignItems:'center'}}>
        <View style={styles.shortLine} />
      </View>
      <View style={styles.drawerContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
        <SearchBar
          platform="android"
          placeholder= "Search text..."
          onChangeText={this.updateSearch}
          value={this.search}
          containerStyle={{marginLeft:5,backgroundColor: '#f5eeed', borderRadius: 10, flex:0.95, height:30,shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.8,
          elevation: 6,
          shadowRadius: 15 ,
          shadowOffset : { width: 1, height: 13},}}
          inputStyle={{fontSize: 15}}
          inputContainerStyle={{marginTop: -10}}
          leftIconContainerStyle={{marginTop: -5}}
      />
      </ScrollView>
        <ThemeProvider  theme={theme}>
          <Button
          icon = {
            <Icon
              name="expand"
              size={15}
              color="black"
            />
          }
          onPress={this.animate}
          />
        </ThemeProvider> 
        
      </View>     
      <View>
        <View style={styles.line} />
      </View>
      
      <SitesContent coordinate={this.state.coordinate} search={this.state.search} />
      </>
    )
  }

  render() {  
  return (
    <View  style={styles.container}>


     


      <View style={styles.header2}>
        <View style={[styles.headerContainer,{marginTop:20}]}>
        <TouchableOpacity
        onPress={this.onPressRegionTab}
         style={{marginBottom:15,height:35,width:120,marginRight:1,backgroundColor:this.state.region_btn_clr,borderBottomColor:'black',borderRadius:2,borderWidth:0.5,}}><Text style={{color:this.state.region_txt_clr,textAlign:'center'}}> Region </Text>
       </TouchableOpacity>
        </View>
        <View style={[styles.headerContainer,{marginTop:20}]}>
        <TouchableOpacity
        onPress={this.onPressModalTab}
         style={{marginBottom:15,height:35,width:120,marginRight:1,backgroundColor:this.state.model_btn_clr,borderBottomColor:'black',borderRadius:2,borderWidth:0.5}}><Text style={{color:this.state.model_txt_clr,textAlign:'center'}}> Model </Text>
       </TouchableOpacity>
        </View>
        <View style={[styles.headerContainer,{marginTop:20}]}>
        <TouchableOpacity
        onPress={this.onPressClusterTab}
         style={{marginBottom:15,height:35,width:120,backgroundColor:this.state.cluster_btn_clr,borderBottomColor:'black',borderRadius:2,borderWidth:0.5}}><Text style={{color:this.state.cluster_txt_clr,textAlign:'center'}}> Cluster </Text>
       </TouchableOpacity>
        </View>
      </View>
    <View style={styles.header}>
        {this.renderHeader_4_dropdown()}
        </View>
        <View style={styles.header}>
          {this.renderHeader_3_dropdown()}
          {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/}






            
            <View style={styles.headerContainer}>
            {/* <TouchableOpacity style={{backgroundColor:"#ccf"}}><Text>dsads</Text></TouchableOpacity> */}
            <Button
            onPress={this.animate}
             icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title={"Go"} />
                
            </View>
    </View>
   
    <View style={styles.body}>
  <MapView 

    mapRef={ref => this.mapView = ref}
    showsUserLocation={true}
    followsUserLocation={true}
    clusterColor={'#44F'} 
    initialRegion={{latitude: 39.706467,longitude: 40.928431,latitudeDelta: 11.04,longitudeDelta: 0.05,}} 
    style={{ flex: 1 }}
    showsUserLocation={true}
  >


    {
    this.state.coordinate.map(function(data, index){
       return (
         <Marker key={index} coordinate={data} title={"sd"} description={this.state.coordinate[index].description} /> 
       )
     }.bind(this))
   }
{/*     
     */}

  </MapView>
  <View style={{position: 'absolute',alignSelf: 'flex-end',backgroundColor:'white',paddingHorizontal: 5,justifyContent:'center',marginTop:5}}>
  <Dropdown
    renderBase={() => (
      <Icon
              name="bars"
              size={25}
              
            />
    )}
        label='Favorite Fruit'
        data={proje_selecting_bar}
        pickerStyle={{
          width: 128,
      
          left: null,
          right: 0,
      
          marginRight: 8,
          marginTop: 24
        }}
      />
    </View>
    </View>
    <BottomDrawer
        containerHeight={370}
        offset={TAB_BAR_HEIGHT}
        startUp = {false}
      >
        {this.renderContent()}
      </BottomDrawer>
</View>      
    );
  }
};
 
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
  marginHorizontal:10,
  marginTop: 10,
  flexDirection:'row',
  justifyContent:'space-between'
},
header: {
    flex: 1.2,
    flexDirection:'row',
    backgroundColor: 'white',
    justifyContent:'space-around',
    shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13}
  
},
header2: {
  flex: 0.7,
  flexDirection:'row',
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13}

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
  borderRadius: 150/2
},
circleGreen: {
  backgroundColor: 'green',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
circleYellow: {
  backgroundColor: 'yellow',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
circleRed: {
  backgroundColor: 'red',
  width: 15,
  height: 15,
  borderRadius: 150/2
},
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
});