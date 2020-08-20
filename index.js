/* eslint-disable prettier/prettier */
//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';


//create a component
const App = () => {
    return (
        <View>
            <Text>Sudhanshu</Text>
        </View>
    );
};

// Render it to the device
AppRegistry.registerComponent('albums',() => App);
