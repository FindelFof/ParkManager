import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    FindCarScreen,
    FindParkScreen,
    HomeScreen,
    LoginScreen,
    ParkingSpotScreen, RegisterParkScreen,
    RegisterScreen,
} from "./screens";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
            initialRouteName={HomeScreen}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="ParkingSpot" component={ParkingSpotScreen}/>
            <Stack.Screen name="FindPark" component={FindParkScreen}/>
            <Stack.Screen name="FindCar" component={FindCarScreen}/>
            <Stack.Screen name="Park" component={RegisterParkScreen}/>
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
        <Drawer.Navigator>
            <StackNav/>
        </Drawer.Navigator>

    );
}

export default StackNav