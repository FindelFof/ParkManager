import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    Select,
    Text,
    VStack,
    Toast,
} from "native-base";
import { registerUser } from "../services";

export default function Register({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const handleRegister = callback => {
        if (password !== confirmPassword) {
            return Toast.show({ description: "Les mots de passe ne correspondent pas" });
        }
        if (!username || !password || !role) {
            return Toast.show({ description: "Tous les champs doivent être remplis" });
        }

        registerUser(username, password, role)
            .then(() => {
                navigation.navigate("Login");
            })
            .catch((error) => {
                Toast.show({ description: error.message });
                console.log("Erreur lors de l'inscription", error);
            });
    };

    return (
        <Center w="100%" backgroundColor="white">
            <Box safeArea p="1" py="40" w="96%" maxW="320">
                <Image
                    alignSelf="center"
                    source={require("../../assets/parking.gif")}
                    alt="Parking"
                    size="2xl"
                />
                <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}
                >
                    S'inscrire
                </Heading>
                <Heading
                    mt="1"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                >
                    Créer un nouveau compte!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Nom d'utilisateur</FormControl.Label>
                        <Input value={username} onChangeText={setUsername} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Mot de passe</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Répéter le Mot de passe</FormControl.Label>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Rôle</FormControl.Label>
                        <Select
                            accessibilityLabel="Choisir le rôle"
                            placeholder={"Choisir le rôle"}
                            value={role}
                            onValueChange={setRole}
                        >
                            <Select.Item label={"Public"} value={"public"} />
                            <Select.Item label={"Admin"} value={"admin"} />
                        </Select>
                    </FormControl>
                    <Button backgroundColor={"secondary.50"} mt="2" colorScheme="secondary.50" onPress={handleRegister}>
                        Inscription
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                        >
                            Déjà inscrit ? {" "}
                        </Text>
                        <Link
                            _text={{
                                color: "yellow.400",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Connexion
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}
