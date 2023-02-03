import { Box, Checkbox, CheckboxGroup, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Circle from "../../../Asset/Logos/Onboarding/circle.png";
import Flag from "../../../Asset/Logos/Onboarding/flag.png";
import LineL from "../../../Asset/Logos/Onboarding/LineL.png";
import LineR from "../../../Asset/Logos/Onboarding/lineR.png";
import Bike from "../../../Asset/Logos/Onboarding/bike.png";

const InTransit = (): JSX.Element => {
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
                            height="auto"
                            px="20px"
                            my="5px"
                            border="1px solid #ABA7A7"
                            borderRadius="12px"
                            key={item}
                        >
                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                flexWrap="wrap"
                                my="20px"
                            >
                                <Text
                                    fontWeight="600"
                                    color=" #000"
                                    fontSize="20px"
                                >
                                    Jon Toe
                                </Text>
                                <CheckboxGroup colorScheme="#070529">
                                    <Stack
                                        spacing={["5px", "10px"]}
                                        direction={["column", "row"]}
                                        fontSize="10px"
                                    >
                                        <Checkbox size="md" value="Pick up">
                                            Pick up
                                        </Checkbox>
                                        <Checkbox size="md" value="Delivered">
                                            Delivered
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </Flex>
                            <Grid
                                w="100%"
                                gridTemplateColumns="6% 54% 6% 28% 6%"
                                my="30px"
                            >
                                <Image
                                    src={Circle}
                                    alt="elipse"
                                    style={{
                                        aspectRatio: "1/1"
                                    }}
                                    mt="-5px"
                                />
                                <Image
                                    src={LineL}
                                    width="100%"
                                    height="6px"
                                    alt="line"
                                />
                                <Image
                                    src={Bike}
                                    alt="bike"
                                    style={{
                                        aspectRatio: "1/1"
                                    }}
                                    mt="-5px"
                                />
                                <Image
                                    src={LineR}
                                    alt="line"
                                    width="100%"
                                    height="6px"
                                />
                                <Image
                                    src={Flag}
                                    alt="flag"
                                    style={{
                                        aspectRatio: "1/1"
                                    }}
                                    mt="-5px"
                                />
                            </Grid>
                            <Flex
                                justifyContent="space-between"
                                color="#595956"
                                fontSize="11px"
                                lineHeight="12px"
                                my="10px"
                            >
                                <Text>
                                    10:15am, jan 10
                                    <br />
                                    Oshodi Brown Street
                                </Text>
                                <Text>
                                    10:15am, jan 10
                                    <br />
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