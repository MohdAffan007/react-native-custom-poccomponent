import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
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
import { manageAppList } from '../assets/mockDataJson/manageapp';

// console.log(manageAppList.a)
const mockDataApps = [
  { id: '1', title: 'Prime', },
  { id: '2', title: 'Disney' },
  { id: '3', title: 'Zee', },
  { id: '4', title: 'Sony', },
  { id: '5', title: 'Netflix', },
  { id: '6', title: 'Colors', },
];

const mockDataApp = [
  { id: '1', imageUrl: 'https://uatmanageapps.tataplay.com/cms-assets/images/devices_banner.png', title: 'Watch on upto 4 devices at a time' },
  { id: '2', imageUrl: 'https://uatmanageapps.tataplay.com/cms-assets/images/cricket_new.png', title: 'Live cricket, tennis and more' },
  { id: '3', imageUrl: 'https://uatmanageapps.tataplay.com/cms-assets/images/live_tv.png', title: 'Live TV channels on the go' },
  { id: '4', imageUrl: 'https://uatmanageapps.tataplay.com/cms-assets/images/gaming_banner.png', title: 'Gaming with all the plans' },
  { id: '5', imageUrl: 'https://uatmanageapps.tataplay.com/cms-assets/images/sign_banner.png', title: 'Single login, single payment' },
]

const renderItemApps = ({ item }) => (
  <View style={styles.itemApps}>
    <Text style={styles.titleApps}>{item.title}</Text>
  </View>
);

const Connectivity = NativeModules?.Connectivity
const handleBackButton = () => {
  BackHandler.exitApp(); // Exit the app when back button is pressed
  // Alternatively, you can use BackHandler to handle custom navigation logic
  // For example:
  // navigation.goBack(); // If using React Navigation
};

const renderItem = ({ item }) => (
  <View style={[styles.item, { alignItems: 'center',  }]}>
    <Image
      style={styles.image}
      source={{ uri: item.imageUrl }}
      resizeMode="cover"
    />
    <Text style={styles.title}>{item.title}</Text>

  </View>
);


export default function ChooseYourPlan({route}) {
  const androidProps=route?.params?.androidProps;
  // console.log('acessToken',androidProps)
  const navigation = useNavigation();
  // const { action, platform } = props?.initialProps;
  return (
    <ScrollView style={{backgroundColor:'black'}}>
      <View style={{ backgroundColor: 'black' }}>
        <View style={[styles.container, {}]}>
          <FlatList
            data={mockDataApp}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
          {/* <Text style={styles.highScoresTitle}>Choose a plan to watch</Text>
      <Text style={styles.highScoresTitle}>
     Some Text
      </Text>
      <TouchableOpacity onPress={handleBackButton}>
        <Text style={styles.backButton}>Back to Android</Text>
      </TouchableOpacity>
      <Text onPress={() => {
        console.log('check it', NativeModules?.Connectivity)
        Connectivity?.goToSecondActivity()
      }} style={{ marginTop: 10 }}>Move to second Native screen</Text>
      <TouchableOpacity  onPress={()=>navigation.navigate('SecondScreen')}>
        <Text>
          Move To Second RN Screen
        </Text>
      </TouchableOpacity> */}
        </View>
        <View style={{ backgroundColor: 'black', marginTop: 5, paddingHorizontal: 20,paddingBottom:20 }}>
          {/* <Text style={{ color: 'white' }}>FLexi Plans</Text> */}
          <View style={{ backgroundColor: 'white', marginTop: 20, borderRadius: 8, backgroundColor: 'rgba(241, 231, 250, 100)', }}>

            <Image
              style={styles.imageFlexi}
              source={require('../assets/images/flexiPlan149.jpg')}
              resizeMode="cover" />

            <TouchableOpacity style={{ backgroundColor: 'rgba(225, 0, 146, 100)', alignItems: 'center', borderRadius: 3, paddingVertical: 10, margin: 15 }} onPress={() => navigation.navigate('SelectPlans', {appList:manageAppList[0].appList, packPrice:149.0,})} >
              <Text style={{ color: 'white' }}>Choose Your Apps</Text>
            </TouchableOpacity>


          </View>
          <View style={{ backgroundColor: 'white', marginTop: 20, borderRadius: 8, backgroundColor: 'rgba(241, 231, 250, 100)', }}>

            <Image
              style={styles.imageFlexi}
              source={require('../assets/images/flexPlan199.jpg')}
              resizeMode="cover" />

            <TouchableOpacity style={{ backgroundColor: 'rgba(225, 0, 146, 100)', alignItems: 'center', borderRadius: 3, paddingVertical: 10, margin: 15 }} onPress={() => navigation.navigate('SelectPlans', {appList:manageAppList[1].appList,packPrice:199.0})} >
              <Text style={{ color: 'white' }}>Choose Your Apps</Text>
            </TouchableOpacity>


          </View>
        </View>
      </View>
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
    alignSelf: 'center'
  },
  item: {
    backgroundColor: 'rgba(34, 0, 70, 100)',
    marginHorizontal: 10,
    padding: 20,
    width: 150,
    height: 150,
    margin: 10
  },
  itemApps: {
    borderRadius: 5,
    backgroundColor: 'lavender',
    justifyContent: 'center',
    padding: 20,
    width: 90,
    height: 90,
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center'
    // alignSelf:'center'
  },
  titleApps: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 20
  },
  imageFlexi: {
    width: '100%',
    height: 200,
    // backgroundColor: 'red',
    borderRadius: 5
  },
  imageFlexi199: {
    width: '100%',
    height: 200,
    // backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20
  }
});