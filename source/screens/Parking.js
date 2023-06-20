import {Box, Button, Center, Input, Text, VStack} from "native-base";
import {useState} from "react";
import {savePark} from "../services";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Parking (){
    const [parkingNumber, setParkingNumber] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("");

    const handleSaveParking = async () => {
        try {
            const token = await AsyncStorage.getItem('token');


            if (token) {
                const parkingSpotData = {
                    spot_number: parkingNumber,
                    floor: selectedFloor,
                };
                console.log(parkingSpotData)

                const response = await savePark(parkingSpotData, token);
                if (response) {
                    console.log("Place de parking enregistrée :", response);
                } else {
                    console.error("Erreur lors de l'enregistrement de la place de parking");
                }
            } else {
                console.error("Token de connexion non trouvé");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de la requête :", error.message);
        }
    };

    return(<Center  w="100%" backgroundColor="white" h={"100%"}>
        <Box mt={5} w="90%">
            <VStack space={4}>
                <Box flexDirection="row" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold" mr={2}>
                        Numéro de parking:
                    </Text>
                    <Input
                        flex={1}
                        placeholder="Entrez le numéro de parking"
                        value={parkingNumber}
                        onChangeText={(value) => setParkingNumber(value)}
                    />
                </Box>
                <Box flexDirection="row" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold" mr={2}>
                        Étage :
                    </Text>
                    <Input
                        flex={1}
                        placeholder="Choisissez l'étage"
                        value={selectedFloor}
                        onChangeText={(value) => setSelectedFloor(value)}
                    />
                </Box>
                <Button onPress={handleSaveParking}>Enregistrer</Button>
            </VStack>
        </Box>
        </Center>

);
 }