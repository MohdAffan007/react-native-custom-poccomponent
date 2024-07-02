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
    ScrollView
  } from "react-native";
export default function SelectPlans({route}) {
  const {TestConnectNative} = NativeModules
  const rootTag=route?.params?.rootTag;
    const Connectivity = NativeModules?.Connectivity
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
        const isSelected = selectedApps.includes(item.id);
        return (
          <TouchableOpacity
            style={[styles.itemApps, isSelected && styles.selectedApp]}
            onPress={() => handleSelectApp(item.id)}
          >
            <Text style={styles.titleApps}>{item.title}</Text>
          </TouchableOpacity>
        );
      };

      // const handleConfirm = () => {

      //   TestConnectNative?.goToSecondViewController?.(rootTag,"Heloooo")
      // };
      
      const handleConfirm = () => {
        // if (isConfirmButtonEnabled) {
        //     const selectedAppsData = mockDataApps.filter(app => selectedApps.includes(app.id));
        //     const selectedAppsJson = JSON.stringify(selectedAppsData);
        //     TestConnectNative?.goToSecondViewController?.(rootTag, selectedAppsJson);
        // }
    };

    const isConfirmButtonEnabled = selectedApps.length >= 6;
      return (
        <ScrollView>
        <SafeAreaView style={[styles.container, { }]}>
        <View style={{backgroundColor:'black', padding:20}}>
          <View style={{backgroundColor:'white', marginTop:10, borderRadius:8, padding:5}}>
            <FlatList
          data={mockDataApps}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItemApps}
          contentContainerStyle={styles.listContainer}
          numColumns={3}
        />
        <TouchableOpacity
                style={[styles.confirmButton, isConfirmButtonEnabled && styles.enabledButton]}
                disabled={!isConfirmButtonEnabled}
                onPress={handleConfirm}
              >
                <Text style={{color:'black'}}>Confirm & Proceed</Text>
              </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
        </ScrollView>
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
        paddingVertical: 16,
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
        backgroundColor: 'lavender',
    justifyContent:'center',
        padding: 20,
        width: 90,
        height:90,
        margin:10,
        alignItems:'center'
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      titleApps: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      confirmButton: {
        backgroundColor: 'gray',
        alignItems: 'center',
        borderRadius: 3,
        paddingVertical: 10,
        margin: 15,
      },
      enabledButton: {
        backgroundColor: 'lavender',
      },
      selectedApp: {
        borderWidth: 2,
        borderColor: 'blue', 
      },
      
    });