import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    BackHandler,
    NativeModules,
    FlatList,
    Image,
    ScrollView
  } from "react-native";

export default function SelectPlans({route}) {
  const navigation = useNavigation();
  const appList=route.params.appList.BUCKET1
  const packPrice = route.params.packPrice
  console.log(packPrice,'packPrice')
  const {TestConnectNative} = NativeModules
  const rootTag=route?.params?.rootTag;
    const Connectivity = NativeModules?.Connectivity

    //https://uatmanageapps.tataplay.com/cms-assets/images/{appId}png
    const mockDataApps = [
        { id: '1', title: 'Prime', },
        { id: '2', title: 'Disney' },
        { id: '3', title: 'Zee',  },
        { id: '4', title: 'Sony',},
        { id: '5', title: 'Netflix',},
        { id: '6', title: 'Colors',},
        { id: '7', title: 'Jio',},
        { id: '8', title: 'Sky',},
        { id: '9', title: 'News',},
        { id: '10', title: 'Voot',},
        { id: '11', title: 'Hotstar',},
        { id: '12', title: 'Eros',},
        { id: '13', title: 'HBO',},
        { id: '14', title: 'IBN',},
        { id: '15', title: 'BBC',},
      ];
      const [selectedApps, setSelectedApps] = useState([]);
    
      const handleSelectApp = (id) => {
        setSelectedApps((prevSelectedApps) => {
          if (prevSelectedApps.includes(id)) {
            return prevSelectedApps.filter(appId => appId !== id);
          } else {
            return prevSelectedApps.length < 6 ? [...prevSelectedApps, id] : prevSelectedApps;
          }
        });
      };
    

      const renderItemApps = ({ item }) => {
        const isSelected = selectedApps.includes(item.appName);
        return (
          <View>
          <TouchableOpacity
            style={[styles.itemApps, isSelected && styles.selectedApp]}
            onPress={() => handleSelectApp(item.appName)}
          >
            <Image    style={styles.imageFlexi199}
              source={{uri:(`https://uatmanageapps.tataplay.com/cms-assets/images/${item.appId}.png`)}}
              resizeMode="cover"/>
        
          </TouchableOpacity>
              <Text style={styles.titleApps}>{item.appName}</Text>
              </View>
        );
      };

      // const handleConfirm = () => {

      //   TestConnectNative?.goToSecondViewController?.(rootTag,"Heloooo")
      // };
      

      const handleConfirm = () => {
        if (isConfirmButtonEnabled) {
          const selectedAppsData = appList.filter(app => selectedApps.includes(app.appName));
          navigation.navigate('YourSelectedPlans', { selectedApps: selectedAppsData, selectedAppsJson: JSON.stringify(selectedApps), packPrice:packPrice })
        }
      }
    const isConfirmButtonEnabled = selectedApps.length >= 6;
      return (
        <SafeAreaView style={[styles.container, { backgroundColor:'black'}]}>
        <View style={{backgroundColor:'black', paddingHorizontal:20, paddingBottom:20,}}>
          <ScrollView style={{backgroundColor:'black', borderRadius:8, padding:5, marginBottom:30}}>
            <FlatList
          data={appList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItemApps}
          contentContainerStyle={styles.listContainer}
          numColumns={3}
        />
       
          </ScrollView>
          <TouchableOpacity
                style={[styles.confirmButton, isConfirmButtonEnabled && styles.enabledButton,{position:'absolute', bottom:0, }]}
                disabled={!isConfirmButtonEnabled}
                onPress={handleConfirm}
              >
                <Text style={{color:'white'}}>Confirm & Proceed</Text>
              </TouchableOpacity>
        </View>
        
        </SafeAreaView>
      );
    };
    
    
    const styles = StyleSheet.create({
      // container: {
      //   flex: 1,
      //   // justifyContent: "center",
      //   alignItems: "center",
      //   backgroundColor: "white",
      // },
      highScoresTitle: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
      },
      scores: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
      },
      listContainer: {
      paddingBottom:30,
        alignSelf:'center'
      },
    //   item: {
    //     backgroundColor: 'lavender',
    //     marginHorizontal: 10,
    //     padding: 20,
    //     width: 150,
    //     height:150,
    //     margin:10
    //   },
      itemApps: {
        borderRadius:5,
        // backgroundColor: 'lavender',
    // justifyContent:'center',
        padding: 1,
        width: 60,
        height:60,
        // margin:10,
        marginHorizontal:30,
        marginTop:20,
        alignItems:'center'
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      titleApps: {
        fontSize: 10,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center',
        marginTop:4
      },
      confirmButton: {
        backgroundColor: 'gray',
        alignItems: 'center',
        borderRadius: 3,
        paddingVertical: 10,
        margin: 15,
        width:'100%'
      },
      enabledButton: {
        backgroundColor: 'rgba(225, 0, 146, 100)'
      },
      selectedApp: {
        borderWidth: 2,
        borderColor: 'rgba(225, 0, 146, 100)', 
      },
      imageFlexi199: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        // backgroundColor: 'red',
        // borderRadius: 5,
        // marginTop: 20
      }
    });