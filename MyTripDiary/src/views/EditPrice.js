import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, TextInput, Text } from 'react-native-rapi-ui';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

/** Defines styles used in the screen. */
const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingTop: 16,
        flex: 1,
    },
    textStyle: {
        fontSize: 16,
    },
    textInputStyle: {
        // This doesn't work. cant change the textinput styling for some reason
        size: 30,
        height: 100,
        borderWidth: 3,
        borderRadius: 0,
    },
    checkmarkStyle: {
        flexDirection: 'row',
        alignContent: 'center', 
        paddingRight: 16,
    },
});

/** Displays EditPrice screen. */
export default function ({ navigation, route }) {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Edit price: </Text>
                <TextInput 
                    keyboardType='numeric' 
                    leftContent={
                        <Text>$</Text> 
                    } 
                    style={styles.textInputStyle}>{parseFloat(route.params.priceKey)}
                </TextInput>
                <View style={styles.checkmarkStyle}>
                    <Entypo name="cross" onPress={() => navigation.goBack()} size={40} color="black" />
                    <Ionicons name="checkmark" onPress={() => 
                        // Save value of edited price to firebase

                        // Navigate back
                        navigation.goBack()} 
                        size={40} color="black" /> 
                </View>
                

            </View>        
        </Layout>
    );
}