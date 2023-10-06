//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
// create a component

const ContactAddedScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.scView}>
        <TouchableOpacity onPress={()=> props.navigation.goBack()}>
            <Icon name='west' style={{left: -60, fontSize: responsiveFontSize(4),color:"#33295d",}}></Icon>
        </TouchableOpacity>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.txt1}> Contact has been added successfully!</Text>
        </View>
        <View style={styles.parent}>
            <View style={styles.child}>
                <View style={styles.viewS2}>
                    <Icon name= 'verified' style={styles.compCS}></Icon> 
                    <Text style={styles.contactAddedTxt}>Contact Added!</Text>
                    <Text style={styles.subTxt}>An Invitation has been sent to the Contact Added with App link to download the App through the link.</Text>
                    <TouchableOpacity style={{alignItems:'center'}} 
                        onPress={() => props.navigation.navigate('appNavigator', {screen: 'dashboardScreen'})}>
                        <Text style={{color:'white',marginTop:20}}>[TWILLO API]</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default ContactAddedScreen;
