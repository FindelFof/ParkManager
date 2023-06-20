import React, { useState } from "react";
import {Box, Center, Image, Pressable, Text, VStack} from "native-base";
import {FontAwesome5} from "undefined";


export default function FindCarScreen({ navigation }) {
    return (
        <Center w="100%" backgroundColor="white" h={"100%"}>
                <Image alignSelf="center" source={require('../../assets/searching.gif')} alt="Parking" size="2xl"/>


                <VStack space={4} mt="10">
                    <Pressable onPress={() => navigation.navigate("FindPark")}>
                        <Box
                            bg={{
                            linearGradient: {
                                colors: ['lightBlue.300', 'primary.50'],
                                start: [0, 0],
                                end: [1, 0]
                            }
                        }} p="12" rounded="xl" _text={{
                            fontSize: 'md',
                            fontWeight: 'medium',
                            color: 'warmGray.50',
                            textAlign: 'center'
                        }}>
                            Votre Véhicule est garé :

                            <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                <FontAwesome5 name="parking" size={20} color="white" /> Place : P-11
                            </Text>
                            <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
                                <FontAwesome5 name="building" size={20} color="white" /> Étage : 1
                            </Text>
                        </Box>
                    </Pressable>

                </VStack>
        </Center>
    );

}