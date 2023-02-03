import { Box, Checkbox, CheckboxGroup, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Circle from "../../../Asset/Logos/Onboarding/circle.png";
import Flag from "../../../Asset/Logos/Onboarding/flag.png";
import LineL from "../../../Asset/Logos/Onboarding/LineL.png";
import LineR from "../../../Asset/Logos/Onboarding/lineR.png";
import Bike from "../../../Asset/Logos/Onboarding/bike.png";

const InTransit: React.FC = () => {
    return (
        <Flex
            flexDir="column"
            alignContent="flex-start"
            m="0px 20px"
        >
            <Text
                fontWeight="700"
                color=" #1F1F1F"
                fontSize="20px"
                lineHeight="30px"
                textAlign="center"
                mb="10px"
            >
                Delivery in Transit
            </Text>
            <Flex flexDir="column">
                {
                    Array(5).fill(Math.random).map((item) => (
                        <Box
                            width="100%"
                            height="184px"
                            px="20px"
                            my="5px"
                            border="1px solid #ABA7A7"
                            borderRadius="12px"
                            key={item}
                        >
                            <Flex justifyContent="space-between">
                                <Text
                                    mt="20px"
                                    fontWeight="600"
                                    color=" #000"
                                    fontSize="20px"
                                    lineHeight="30px"
                                    textAlign="center"
                                >
                                    Jon Toe
                                </Text>
                                <CheckboxGroup colorScheme="#070529">
                                    <Stack
                                        spacing={["5px", "10px"]}
                                        direction={["column", "row"]}
                                        mt="26px"
                                    >
                                        <Checkbox size="md" fontSize="10px" value="Pick up">
                                            Pick up
                                        </Checkbox>
                                        <Checkbox size="md" fontSize="10px" value="Delivered">
                                            Delivered
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </Flex>
                            <Flex mt="15px">
                                <Image
                                    src={Circle}
                                    mt="32px"
                                    alt="elipse"
                                    width="16px"
                                    height="16px"
                                />
                                <Image
                                    src={LineL}
                                    mt="37px"
                                    width="170px"
                                    height="6px"
                                    alt="line"
                                />
                                <Image
                                    src={Bike}
                                    mt="32px"
                                    alt="bike"
                                    width="16px"
                                    height="16px"
                                />
                                <Image
                                    src={LineR}
                                    mt="37px"
                                    alt="line"
                                    width="100px"
                                    height="6px"
                                />
                                <Image
                                    src={Flag}
                                    mt="34px"
                                    alt="flag"
                                    width="10px"
                                    height="10px"
                                />
                            </Flex>
                            <Flex mt="20px" justifyContent="space-between">
                                <Text fontSize="11px" lineHeight="12px" color="#595956">
                                    10:15am, jan 10
                                </Text>
                                <Text fontSize="11px" lineHeight="12px" color="#595956">
                                    10:15am, jan 10
                                </Text>
                            </Flex>
                            <Flex mt="5px" justifyContent="space-between">
                                <Text fontSize="11px" lineHeight="12px" color="#595956">
                                    Oshodi Brown Street
                                </Text>
                                <Text fontSize="11px" lineHeight="12px" color="#595956">
                                    Oshodi Brown Street
                                </Text>
                            </Flex>
                        </Box>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default InTransit