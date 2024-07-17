import { FlatList, Image, NativeModules, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
export default function YourSelectedPlans({ route }) {
  const { selectedApps ,selectedAppsJson,packPrice} = route.params;
  console.log(selectedApps,'selectedAppsssss')
  const { TestConnectNative } = NativeModules
  const rootTag = route?.params?.rootTag;
  const Connectivity = NativeModules?.Connectivity
  const navigation = useNavigation();

  const renderItemApps = ({ item }) => {
    const isSelected = selectedApps.includes(item.id);
    console.log(item,'itemmmmmm')
    return (
      <View
        style={[styles.itemApps]}
      >
        <Image    style={styles.imageFlexi199}
              source={{uri:(`https://uatmanageapps.tataplay.com/cms-assets/images/${item.appId}.png`)}}
              resizeMode="cover"/>
      </View>
    );
  };

  // const handleConfirm = () => {

  //   const selectedAppsDataIos = selectedApps
  //   const selectedAppsJson = JSON.stringify(selectedAppsDataIos);
  //   TestConnectNative?.goToSecondViewController?.(rootTag, selectedAppsJson);

  // };
  const handleConfirm = () => {
    console.log(selectedAppsJson,'selectedAppsJson')
    if (Platform.OS == 'ios') {
        TestConnectNative?.goToSecondViewController?.(rootTag, selectedAppsJson);
    } else {
        Connectivity?.goToSecondActivity(selectedAppsJson)
            .then(response => {
                console.log('Navigation success:', response);
            })
            .catch(error => {
                console.log('Navigation error:', error);
            });
    }
  }

  // const selectedAppsDataIos = selectedApps
  // const selectedAppsJson = JSON.stringify(selectedAppsDataIos);
  // TestConnectNative?.goToSecondViewController?.(rootTag, selectedAppsJson);
  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>

      <View style={{ backgroundColor: 'black', height: "100%", justifyContent: 'space-between' }}>
        <View >
          <View style={{ backgroundColor: 'lavender', marginTop: 30, borderRadius: 8, padding: 5, margin: 20 }}>
            <Text style={{ marginHorizontal: 5, marginTop: 15 }}>Flexi Plus</Text>
            <Text style={{ marginHorizontal: 5, marginTop: 5 }}>6 apps | upto 4 devices at a time</Text>
            <Text style={{ marginHorizontal: 5, marginTop: 5 }}>Watch on Tv, Laptop & Mobile</Text>

            <FlatList
              data={selectedApps}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderItemApps}
              contentContainerStyle={styles.listContainer}
              numColumns={4}
            />
            <Text style={{ marginHorizontal: 20, color: 'grey' }}>You can change 1 app every month </Text>
          </View>
          <Text  style={{ marginHorizontal: 20, marginTop: 5, color:'white', fontSize:12 }}>*Amazon Prime lite with Tata Play Binge includes HD (720p) streaming on 2 devices (TV/Mobile) and FREE 1-day delivery</Text>
          <Text  style={{ marginHorizontal: 20, marginTop: 5, color:'white', fontSize:12 }}>*Sun Nxt willl be availble on TV only</Text>
          <Text  style={{ marginHorizontal: 20, marginTop: 5, color:'white', fontSize:12 }}>*Watch on TV with Amazon Fire Stick, Smart TV or Tata Play Binge+ Set Top Box</Text>
          
        </View>
        <View style={[styles.enabledButton, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }]} >
          <Text style={{color:'white'}}>₹{packPrice}/month</Text>
          <TouchableOpacity onPress={handleConfirm} style={{ backgroundColor: 'purple', padding: 10, borderRadius: 4 }} >
            <Text style={{ color: 'white' }}>Confirm & Proceed</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
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
    alignSelf: 'flex-start'
  },
  itemApps: {
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    width: 70,
    height: 70,
    margin: 5,
    alignItems: 'center',
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
    backgroundColor: 'rgba(29, 0, 61, 100)',
    alignItems: 'center',
    borderRadius: 3,
    paddingVertical: 10,
    height: 90,
    justifyContent: 'center'
    // margin: 15,
  },
  selectedApp: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  imageFlexi199: {
    width: 70,
    height: 70,
  }
});