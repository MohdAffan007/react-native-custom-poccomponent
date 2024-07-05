import { FlatList, NativeModules, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function YourSelectedPlans({ route }) {
    const { selectedApps } = route.params;
    const { TestConnectNative } = NativeModules
    const rootTag = route?.params?.rootTag;
    const Connectivity = NativeModules?.Connectivity
    const navigation = useNavigation();


    const renderItemApps = ({ item }) => {
        const isSelected = selectedApps.includes(item.id);
        return (
            <View
                style={[styles.itemApps]}
            >
                <Text style={styles.titleApps}>{item.title}</Text>
            </View>
        );
    };

    const handleConfirm = () => {

        const selectedAppsDataAndroid = selectedApps
        const selectedAppsJson = JSON.stringify(selectedAppsDataAndroid);

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
    };


    return (
        <View style={[styles.container, { backgroundColor: 'black' }]}>

            <View style={{ backgroundColor: 'black', height: "100%", justifyContent: 'space-between' }}>
                <View >
                    <View style={{ backgroundColor: 'white', marginTop: 30, borderRadius: 8, padding: 5, margin: 20 }}>
                        <Text style={{ marginHorizontal: 20, marginTop: 15 }}>Flexi Plus</Text>
                        <Text style={{ marginHorizontal: 20, marginTop: 5 }}>{`${selectedApps.length} apps | upto 4 devices at a time`}</Text>
                        <Text style={{ marginHorizontal: 20, marginTop: 5 }}>Watch on Tv, Laptop & Mobile</Text>

                        <FlatList
                            data={selectedApps}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItemApps}
                            contentContainerStyle={styles.listContainer}
                            numColumns={3}
                        />
                        <Text style={{ marginHorizontal: 20, color: 'grey' }}>You can change 1 app every month </Text>
                    </View>
                    <Text style={{ marginHorizontal: 20, marginTop: 5, color: 'white', fontSize: 12 }}>*Amazon Prime lite with Tata Play Binge includes HD (720p) streaming on 2 devices (TV/Mobile) and FREE 1-day delivery</Text>
                    <Text style={{ marginHorizontal: 20, marginTop: 5, color: 'white', fontSize: 12 }}>*Sun Nxt willl be availble on TV only</Text>
                    <Text style={{ marginHorizontal: 20, marginTop: 5, color: 'white', fontSize: 12 }}>*Watch on TV with Amazon Fire Stick, Smart TV or Tata Play Binge+ Set Top Box</Text>

                </View>
                <View style={[styles.enabledButton, { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }]} >
                    <Text>₹199/month</Text>
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
        backgroundColor: 'lavender',
        justifyContent: 'center',
        padding: 20,
        width: 90,
        height: 90,
        margin: 10,
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
        backgroundColor: 'lavender',
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

});