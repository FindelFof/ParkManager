import { Box, Button, Center, FormControl, Heading, HStack, Image, Input, Link, Text, VStack,Toast } from "native-base";
import React, { useState } from "react";
import { loginUser } from "../services";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleLogin = async () => {
        try {
            const data = await loginUser(username.toLowerCase(), password);
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('userId', data.id.toString());
            console.log("Token d'authentification:", data.token);
            navigation.navigate("ParkingSpot",{token:data.token});
        } catch (error) {
            Toast.show({description: "Erreur de connexion: username ou mot de passe incorrect."});
            console.log(error.message);
        }
    };

    return (
        <Center w="100%" backgroundColor="white">
            <Box safeArea p="2" py="40" w="90%" maxW="300">
                <Image source={require("../../assets/parking.gif")} alt="Parking" size="2xl" />
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Connexion
                </Heading>
                <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Connectez-vous pour continuer!
                </Heading>

                <VStack space={4} mt="5">
                    <FormControl>
                        <FormControl.Label>Nom d'utilisateur</FormControl.Label>
                        <Input borderRadius={30} size={"lg"} value={username} onChangeText={setUsername} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Mot de passe</FormControl.Label>
                        <Input borderRadius={30} size={"lg"} type="password" value={password} onChangeText={setPassword} />
                    </FormControl>

                    <Button borderRadius={30} mt="2" size={"lg"} backgroundColor={"primary.50"} colorScheme="yellow" onPress={handleLogin}>
                        Connexion
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                            Pas de compte ? {" "}
                        </Text>
                        <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate("Register")}>
                            S'inscrire
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}
