import React, {useState} from "react";
import {
    Box,
    FlatList,
    HStack,
    Text,
    VStack,
    Pressable,
    ScrollView,
    Button,
    Input,
    useDisclose,
    Actionsheet,
    FormControl,
    Toast
} from "native-base";
import {FontAwesome5} from "@expo/vector-icons";
import {ImageBackground, SafeAreaView} from "react-native";
import {findPark,assignParkingSpot} from "../services";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FindParkScreen({navigation}) {

    const {
        isOpen, onOpen, onClose
    } = useDisclose();

    const [selectedFloor, setSelectedFloor] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [occupationTime, setOccupationTime] = useState('');
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handlePress = (value) => {
        setSelectedItemId(value);
        onOpen();
    };
    const handleSearch = async () => {
        try {
            const searchResults = await findPark(parseInt(selectedFloor));
            setSearchResult(searchResults);
        } catch (error) {
            console.error("Erreur lors de la recherche de places disponibles:", error.message);

        }
    };
    const handleOccupationTimeChange = (value) => {
        setOccupationTime(value);
    };
    const handleFormSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');
            console.log(token)

            if (token) {
                const spotId =selectedItemId;
                const occupancyTime = occupationTime;

                console.log(spotId,userId,occupancyTime)

                await assignParkingSpot(spotId, occupancyTime, userId);
                Toast.show({description: 'Place de parking attribuée avec succès'});
                onClose();
                await handleSearch();
            } else {
                console.error('Token de connexion non trouvé');
            }
        } catch (error) {
            console.error('Erreur lors de l\'attribution de la place de parking:', error.message);
        }
        onClose();
    };



    return (<SafeAreaView style={{flex: 1, margin: 10, alignItems: "center"}}>
            <Box mt={10} alignItems={"center"}>
                <FontAwesome5 name="parking" size={55} color="black"/>

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
                            keyboardType="numeric"
                        />
                    </Box>
                    <Button color={"primary.50"} onPress={handleSearch}>Rechercher</Button>
                </VStack>
            </Box>
            <Box mt={5} w="90%">
                <FlatList
                    ListEmptyComponent={emptyC}
                    data={searchResult}
                    renderItem={({item, index}) => (
                        <HStack space={5} mb={2} flex={1} alignContent={"space-around"} alignItems={"center"}
                                alignSelf={"center"}>
                            {index % 2 === 0 && (<>
                                    <Pressable onPress={() => handlePress(item.id)} rounded="8" borderWidth="2" borderColor="blue.400"
                                               maxW="96" shadow="3" bg="blue.400" p="5">
                                        <Box p={2} borderRadius={8} justifyContent="center" alignItems="left">
                                            <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                <FontAwesome5 name="parking" size={20} color="white"/> Place
                                                : P-{item.spot_number}
                                            </Text>
                                            <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                <FontAwesome5 name="building" size={20} color="white"/> Étage
                                                :  {item.floor}
                                            </Text>
                                        </Box>
                                    </Pressable>
                                    {index + 1 < searchResult.length && (
                                        <Pressable onPress={() => handlePress(item.id)} rounded="8" borderWidth="2" maxW="96"
                                                   borderColor={"blue.400"} shadow="3" bg="blue.400" p="5">
                                            <Box p={2} borderRadius={8} justifyContent="center" alignItems="left">
                                                <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                    <FontAwesome5 name="parking" size={20} color="white"/> Place
                                                    : P-{searchResult[index + 1].spot_number}
                                                </Text>
                                                <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                                    <FontAwesome5 name="building" size={20} color="white"/> Étage
                                                    : {searchResult[index + 1].floor}
                                                </Text>
                                            </Box>
                                        </Pressable>)}
                                </>)}
                        </HStack>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Box>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
                        Utiliser cette place de parking
                    </Text>
                </Box>
                <FormControl w={"90%"}>
                    <FormControl.Label>Temps d'occupation</FormControl.Label>
                    <Input
                        value={occupationTime}
                        onChangeText={handleOccupationTimeChange}
                        placeholder="Entrez le temps d'occupation"
                        keyboardType="numeric"
                    />

                </FormControl>
                <Button mt={2} onPress={handleFormSubmit}>Valider</Button>
            </Actionsheet.Content>
        </Actionsheet>
        </SafeAreaView>);
}
const emptyC = () => {
    return (
        <Text alignSelf={"center"}>Aucune place disponible à cette étage</Text>

    );
};