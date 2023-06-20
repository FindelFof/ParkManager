import React from "react";
import 'react-native-gesture-handler';
import {Drawer, NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
const LinearGradient = require('expo-linear-gradient').LinearGradient;
import StackNav from "./source/Navigation";
import {theme} from "./source/components/helpers.js";
import DrawerNav from "./source/Navigation";

const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};
export default function App() {
    return (
        <NavigationContainer>
                {
                    <NativeBaseProvider theme={theme} config={config}>
                        <DrawerNav/>
                    </NativeBaseProvider>
                }
        </NavigationContainer>
    );
}