import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
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
    },
    checkmarkStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
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
                    {/* Cross - Cancel */}
                    <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="#b3e5fc">
                        <Entypo name="cross" size={60} color="black"/>
                    </TouchableHighlight>

                    {/* Tick - Save changes */}
                    <TouchableHighlight onPress={() => 
                            // Save value of edited price to firebase

                            // Navigate back
                            navigation.goBack()}
                        underlayColor="#b3e5fc">
                        <Ionicons name="checkmark" size={60} color="black"/>
                    </TouchableHighlight>
                    
                     
                </View>
                

            </View>        
        </Layout>
    );
}