import {extendTheme} from "native-base";

export const theme = extendTheme({
    colors: {
        // Add new color
        primary: {
            50: '#0644A8',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#0088CC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E'
        },
        secondary: {
            50:"#FFC100",
        },
        amber: {
            400: '#d97706'
        }
    },

});

export default {theme}

/*import React, { useState } from "react";
import {
    Image,
    Box,
    Center,
    FlatList,
    Flex,
    Heading,
    HStack,
    Spacer,
    Text,
    VStack,
    Stack,
    Pressable,
    ScrollView, Input, Button
} from "native-base";
import {FontAwesome5} from "@expo/vector-icons";
import {ImageBackground, SafeAreaView} from "react-native";
import {findPark} from "../services";

export default function FindParkScreen({ navigation }) {

    const [selectedFloor, setSelectedFloor] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = async () => {
        try {
            const searchResults = await findPark(parseInt(selectedFloor));
            setSearchResult(searchResults);
        } catch (error) {
            console.error("Erreur lors de la recherche de places disponibles:", error.message);

        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Center backgroundColor="coolGray.100" flex={1}>
                <Box mt={10} alignItems="center">
                    <FontAwesome5 name="parking" size={55} color="black" />
                    <Text fontSize={20} justifyContent="center" textTransform="uppercase" color="black">
                        Places disponibles
                    </Text>
                </Box>
                <Box mt={5} w="90%">
                    <VStack space={4}>
                        <Box flexDirection="row" alignItems="center">
                            <Text fontSize="lg" fontWeight="bold" mr={2}>
                                Étage :
                            </Text>
                            <Input
                                flex={1}
                                placeholder="Choisir un étage"
                                value={selectedFloor}
                                onChangeText={(value) => setSelectedFloor(value)}
                            />
                        </Box>
                        <Button onPress={handleSearch}>Rechercher</Button>
                    </VStack>
                </Box>
                <Box mt={5} w="90%">
                    <FlatList
                        data={searchResult}
                        renderItem={({ item, index }) => (
                                <HStack space={2} mb={2}>
                                    {index % 2 === 0 && (
                                        <>
                                            <Pressable onPress={() => console.log("I'm Pressed")} rounded="8"  borderWidth="2" borderColor="blue.400" maxW="96" shadow="3" bg="blue.400" p="5">
                                                <Box flex={1} p={2} borderRadius={8} justifyContent="center" alignItems="left">
                                                    <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                        <FontAwesome5 name="parking" size={20} color="white" /> Place : {item.spot_number}
                                                    </Text>
                                                    <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                        <FontAwesome5 name="building" size={20} color="white" /> Étage : {item.floor}
                                                    </Text>
                                                </Box>
                                            </Pressable>
                                            {index + 1 < data.length && (
                                                <Pressable onPress={() => console.log("I'm Pressed")} rounded="8"  borderWidth="2"  maxW="96" borderColor={"blue.400"} shadow="3" bg="blue.400" p="5">
                                                    <Box flex={1} p={2} borderRadius={8} justifyContent="center" alignItems="left">
                                                        <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                            <FontAwesome5 name="parking" size={20} color="white" /> Place : {data[index + 1].spot_number}
                                                        </Text>
                                                        <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                            <FontAwesome5 name="building" size={20} color="white" /> Étage : {data[index + 1].floor}
                                                        </Text>
                                                    </Box>
                                                </Pressable>
                                            )}
                                        </>
                                    )}
                                </HStack>
                            )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Box>
            </Center>
        </SafeAreaView>
    );
}

*/
