import {Box, Button, Center, Heading, HStack, Image, VStack} from "native-base";
import React, {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                console.log("Token d'authentification trouvé:", token);
                navigation.navigate("ParkingSpot", {token: token});
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    return <>
    <Center w="100%" backgroundColor="white" h={"100%"}>
            <Box safeArea p="2" py="8" w="90%" maxW="70%">
                <Image alignSelf="center" source={require('../../assets/parking.gif')} alt="Parking" size="2xl"/>
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Bienvenue !
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Enregistrez vous ou Connectez-vous
                </Heading>

                <VStack space={4} mt="10">


                    <Button backgroundColor={"secondary.50"} size="lg" borderRadius={30} mt="2" color={"primary.50"}
                            onPress={() => navigation.navigate("Register")}>
                        Inscription
                    </Button>
                    <Button backgroundColor={"secondary.50"} size="lg" borderRadius={30} mt="2"
                                     color={"primary.50"}
                                     onPress={() => navigation.navigate("Park")}>
                    test park
                    </Button>
                    <Button backgroundColor={"primary.50"} mt="2" borderRadius={30}
                            size={"lg"}
                            onPress={() => navigation.navigate("Login")}>
                        Connexion
                    </Button>
                    <HStack mt="6" justifyContent="center">

                    </HStack>
                </VStack>
            </Box>
        </Center></>;
}