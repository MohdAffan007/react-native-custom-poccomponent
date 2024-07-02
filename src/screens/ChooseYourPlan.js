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
  ScrollView
} from "react-native";

  const mockDataApps = [
    { id: '1', title: 'Prime', },
    { id: '2', title: 'Disney' },
    { id: '3', title: 'Zee',  },
    { id: '4', title: 'Sony',},
    { id: '5', title: 'Netflix',},
    { id: '6', title: 'Colors',},
  ];


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
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);


export default function ChooseYourPlan(props) {

  const navigation = useNavigation();
  // const { action, platform } = props?.initialProps;
  return (
    <ScrollView style={{backgroundColor:'black'}}>
    <View style={[styles.container,{}]}>
      <FlatList
      data={mockDataApps}
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
    <View style={{backgroundColor:'black', marginTop:10, padding:20}}>
      <Text style={{color:'white'}}>FLexi Plans</Text>
      <View style={{backgroundColor:'white', marginTop:20, borderRadius:8, padding:5}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{color:'black'}}>Flexi Plus</Text>
          <Text style={{color:'black'}}>New</Text>
        </View>
        <Text style={{alignSelf:'center', fontSize:15, fontWeight:'bold'}}>Any 6 OTT Apps at 199</Text>
        <Text style={{alignSelf:'center', marginTop:10, color:'black'}}>Watch on 4 devices at a time | TV, laptop & mobile</Text>
        <FlatList
      data={mockDataApps}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItemApps}
      contentContainerStyle={styles.listContainer}
      numColumns={3}
    />
    <Text style={{alignSelf:'center', fontSize:10, color:'black'}}>& Many More Apps</Text>
    <TouchableOpacity style={{ backgroundColor: 'lavender', alignItems:'center', borderRadius:3, paddingVertical:10, margin:15}} onPress={()=>navigation.navigate('SelectPlans')} >
      <Text style={{color:'black'}}>Choose Your Apps</Text>
    </TouchableOpacity>
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
    alignSelf:'center'
  },
  item: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 20,
    width: 100,
    height:100,
    margin:10
  },
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  
});