import {Box, Button, Center, Heading, HStack, Image, Pressable, Text, VStack} from "native-base";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export default function ParkingSpot({navigation}) {

    return (
        <Center  w="100%" backgroundColor="white" h={"100%"}>
            <Heading>
                Bienvenue !
            </Heading>
            <Image source={require("../../assets/searching.gif")} alt="Parking" size="2xl" />
            <Heading mt="1" mb="4" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                Choisissez une action!
            </Heading>
            <Pressable onPress={() => navigation.navigate("FindPark")}>
            <Box
                w={"90%"}
                bg={{
                    linearGradient: {
                        colors: ['primary.50', 'secondary.50'],
                        start: [0, 0],
                        end: [1, 0],
                    },
                }}
                p="12"
                rounded="lg"
                _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
            >
                <FontAwesome5 name="parking" size={55} color="white" >
                    <Text fontSize={12} textTransform="uppercase" color={"white"}> Rechercher une place libre</Text>
                </FontAwesome5>

            </Box>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("FindCar")}>

            <Box
                w={"90%"}
                mt={10}
                bg={{
                    linearGradient: {
                        colors: ['primary.50', 'secondary.50'],
                        start: [0, 0],
                        end: [1, 0],
                    },
                }}
                p="12"
                rounded="lg"
                _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
            ><FontAwesome5 name="car" size={55} color="white">
                <Text px={"15"} fontSize={12} textTransform="uppercase"  color={"white"}> Rechercher son vehicule</Text>
            </FontAwesome5>
            </Box>
        </Pressable>
        </Center>
    );
}
