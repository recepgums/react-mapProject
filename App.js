import SitesContent from './components/SitesContent';
import {Button} from 'react-native-elements';
import MapView from 'react-native-map-clustering';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Marker} from 'react-native-maps';
import BottomContent from './components/BottomContent';
import SectionedMultiSelectContent from './components/SectionedMultiSelectContent';
import {Dropdown} from 'react-native-material-dropdown';
import Modal, {ModalContent, SlideAnimation} from 'react-native-modals';
import {
  items,
  items2,
  items3,
  proje_selecting_bar,
  stil,
  coordinate,
} from './components/Variables';
import {View, Text, TouchableOpacity, Picker} from 'react-native';

export default class App extends React.Component {
  state = {
    progress_state: 3,
    current_description: 'Press Any Marker on ',
    current_title: 'For see details...',
    current_marker: 0,
    current_active_step: 0,
    isBottomContentHidden: true,
    selected_project: 'Projects',
    selected_projects_id: [],
    modalVisible: false,
    current_tab: 1,
    current_region: '',
    region_btn_clr: "#5bc0de",
    region_txt_clr: 'black',
    model_btn_clr: 'white',
    model_txt_clr: 'black',
    cluster_btn_clr: 'white',
    cluster_txt_clr: 'black',
    selectedItems: [],
    isSitesSelected: true,
    regionLatitude: 39.706467,
    project_btn_color: 'gray',
    project_text_color: 'white',
    sites_btn_color: 'white',
    sites_text_color: 'gray',
    search: '',
    checked: [],
    expanded: [],
    coordinate: coordinate,
  };
  markerDetail = index => {
    this.setState({
      isBottomContentHidden: false,
      current_description: this.state.coordinate[index].description,
      current_title: this.state.coordinate[index].title,
      current_active_step: this.state.coordinate[index].step,
    });
  };
  onPressRegionTab = () => {
    this.setState({
      region_btn_clr: '#5bc0de',
      model_btn_clr: 'white',
      cluster_btn_clr: 'white',
      current_tab: 1,
    });
  };
  onPressModalTab = () => {
    this.setState({
      region_btn_clr: 'white',
      model_btn_clr: '#5bc0de',
      cluster_btn_clr: 'white',
      current_tab: 2,
    });
  };
  onPressClusterTab = () => {
    this.setState({
      region_btn_clr: 'white',
      model_btn_clr: 'white',
      cluster_btn_clr: '#5bc0de',
      current_tab: 3,
    });
  };
  updateSearch = search => {
    this.setState({search});
  };
  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };
  componentDidMount() {
    console.log('sadsa' + this.state.isBottomContentHidden);
  }
  animate = () => {
    this.setState({
      modalVisible: false,
    });
    const region = {
      latitude: 43.706467,
      longitude: 40.928431,
      latitudeDelta: 51.04,
      longitudeDelta: 50.05,
    };
    if (this.state.selectedItems == 200) {
      this.mapView.animateToRegion({
        latitude: items[0].children[0].latitude,
        longitude: items[0].children[0].longitude,
        latitudeDelta: 21.04,
        longitudeDelta: 20.05,
      });
    } else {
      this.mapView.animateToRegion({
        latitude: items2[0].children[0].latitude,
        longitude: items2[0].children[0].longitude,
        latitudeDelta: 11.04,
        longitudeDelta: 10.05,
      });
    }
  };
  modal_title = () => {
    if (this.state.current_tab == 1) {
      return (
        <>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Region</Text>
        </>
      );
    } else if (this.state.current_tab == 2) {
      return (
        <>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Model</Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Cluster</Text>
        </>
      );
    }
  };
  renderHeader_3_dropdown = () => {
    if (this.state.current_tab == 1) {
      return (
        <>
          <SectionedMultiSelectContent
            title={'Site Model'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items}
          />
          <SectionedMultiSelectContent
            isHidden={false}
            title={'DU Model'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items3}
          />
          <SectionedMultiSelectContent
            isHidden={false}
            title={'Activity'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
        </>
      );
    } else if (this.state.current_tab == 2) {
      return (
        <>
          <SectionedMultiSelectContent
            title={'Site Model'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items}
          />
          <SectionedMultiSelectContent
            title={'DU Model'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items3}
          />
          <SectionedMultiSelectContent
            title={'Activity'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
        </>
      );
    }
    return (
      <>
        <SectionedMultiSelectContent
          title={'Site Model'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items}
        />
        <SectionedMultiSelectContent
          title={'DU Model'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items3}
        />
        <SectionedMultiSelectContent
          title={'Activity'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items2}
        />
        <SectionedMultiSelectContent
          title={'Cluster'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items2}
        />
      </>
    );
  };
  renderHeader_4_dropdown = () => {
    if (this.state.current_tab == 1) {
      return (
        <>
          <SectionedMultiSelectContent
            title={'Country'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items}
          />
          <SectionedMultiSelectContent
            title={'Province'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items3}
          />
          <SectionedMultiSelectContent
            title={'City'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
          <SectionedMultiSelectContent
            title={'Region'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
        </>
      );
    } else if (this.state.current_tab == 2) {
      return (
        <>
          <SectionedMultiSelectContent
            title={'Country'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items}
          />
          <SectionedMultiSelectContent
            title={'Province'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items3}
          />
          <SectionedMultiSelectContent
            title={'City'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
          <SectionedMultiSelectContent
            title={'Region'}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            data={items2}
          />
        </>
      );
    }
    return (
      <>
        <SectionedMultiSelectContent
          title={'Country'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items}
        />
        <SectionedMultiSelectContent
          title={'Province'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items3}
        />
        <SectionedMultiSelectContent
          title={'City'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items2}
        />
        <SectionedMultiSelectContent
          title={'Region'}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          data={items2}
        />
      </>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          height={250}
          visible={this.state.modalVisible}
          onTouchOutside={() => {
            this.setState({modalVisible: false});
          }}
          modalAnimation={
            new SlideAnimation({
              slideFrom: 'left',
            })
          }>
          <View style={{flex: 1}}>
            <View style={{flex: 0.85}}>
              <View style={styles.header}>{this.modal_title()}</View>
              <View style={styles.header}>
                {this.renderHeader_4_dropdown()}
              </View>
                <View style={styles.line} />
              <View style={styles.header}>
                {this.renderHeader_3_dropdown()}
              </View>
            </View>
            <View style={{textAlignVertical: 'center',width:'70%',alignSelf:'center',marginTop:15}}>
                <TouchableOpacity onPress={this.animate} style={{backgroundColor:'#0275d8'}} onPress={()=>{}}>
                    <View>
                        {/*<Icon name="arrow-right" size={15} color="white" style={{ju stifyContent: 'flex-end'}} />*/}
                        <Text style={{color:'white',textAlign:'center',fontSize:25}}>Filter It!</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.header2}>
          <View style={[styles.headerContainer, {marginTop: 20}]}>
            <TouchableOpacity
              onPress={this.onPressRegionTab}
              style={{
                marginBottom: 15,
                height: 35,
                width: 120,
                marginRight: 1,
                backgroundColor: this.state.region_btn_clr,
                borderBottomColor: 'black',
                borderRadius: 2,
                borderWidth: 0.5,
              }}>
              <Text
                style={{color: this.state.region_txt_clr, textAlign: 'center'}}>
                {' '}
                Region{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.headerContainer, {marginTop: 20}]}>
            <TouchableOpacity
              onPress={this.onPressModalTab}
              style={{
                marginBottom: 15,
                height: 35,
                width: 120,
                marginRight: 1,
                backgroundColor: this.state.model_btn_clr,
                borderBottomColor: 'black',
                borderRadius: 2,
                borderWidth: 0.5,
              }}>
              <Text
                style={{color: this.state.model_txt_clr, textAlign: 'center'}}>
                {' '}
                Model{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.headerContainer, {marginTop: 20}]}>
            <TouchableOpacity
              onPress={this.onPressClusterTab}
              style={{
                marginBottom: 15,
                height: 35,
                width: 120,
                backgroundColor: this.state.cluster_btn_clr,
                borderBottomColor: 'black',
                borderRadius: 2,
                borderWidth: 0.5,
              }}>
              <Text
                style={{
                  color: this.state.cluster_txt_clr,
                  textAlign: 'center',
                }}>
                {' '}
                Cluster{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <MapView
            onPress={() => {
              this.setState({isBottomContentHidden: true});
            }}
            mapRef={ref => (this.mapView = ref)}
            showsUserLocation={true}
            followsUserLocation={true}
            clusterColor={'#44F'}
            initialRegion={{
              latitude: 39.706467,
              longitude: 40.928431,
              latitudeDelta: 11.04,
              longitudeDelta: 0.05,
            }}
            style={{flex: 1}}
            showsUserLocation={true}>
            {this.state.coordinate.map(
              function(data, index) {
                return (
                  <Marker
                    onPress={() => {
                      this.markerDetail(index);
                    }}
                    key={index}
                    coordinate={data}
                    title={this.state.coordinate[index].title}
                    description={this.state.coordinate[index].description}
                  />
                );
              }.bind(this),
            )}
          </MapView>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              backgroundColor: 'white',
              paddingHorizontal: 5,
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  modalVisible: true,
                });
              }}>
              <View>
                <Icon
                  style={{marginLeft: 5}}
                  name="filter"
                  size={35}
                  color="black"
                />
                <Text>Filter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              backgroundColor: 'white',
              paddingHorizontal: 5,
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Picker
              selectedValue={this.state.selected_project}
              onValueChange={itemValue =>
                this.setState({selected_project: itemValue})
              }
              mode='dropdown'
              onMagicTap={true}
              style={{width: 100}}>
              {proje_selecting_bar.map((i, index) => (
                <Picker.Item
                  key={{index}}
                  label={i.value}
                  value={i.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <BottomContent
          isHidden={this.state.isBottomContentHidden}
          current_title={this.state.current_title}
          current_description={this.state.current_title}
          current_active_step={this.state.current_active_step}
        />
        <SitesContent
            isHidden={this.state.isBottomContentHidden}
            current_title={this.state.current_title}
            current_description={this.state.current_title}
            current_active_step={this.state.current_active_step}
        />
      </View>
    );
  }
}
var styles = stil;
