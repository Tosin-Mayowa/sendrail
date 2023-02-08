import {
  Box, Checkbox, CheckboxGroup, Flex, Grid, Stack, Text, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import Circle from "../../../../Asset/Logos/Onboarding/circle.png";
import Flag from "../../../../Asset/Logos/Onboarding/flag.png";
import LineL from "../../../../Asset/Logos/Onboarding/LineL.png";
import LineR from "../../../../Asset/Logos/Onboarding/lineR.png";
import Bike from "../../../../Asset/Logos/Onboarding/bike.png";
import "../styles/intransit.css"

function InTransit(): JSX.Element {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
  return (
    <Flex
      flexDir="column"
      alignContent="flex-start"
      m={isSmallerThan480 ? "0px" : "0px 20px"}
      width={isSmallerThan480 ? "100%" : ""}
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
      <Flex
        flexDir={isSmallerThan480 || !isSmallerScreen ? "column" : "row"}
        flexWrap="wrap"
        justifyContent="center"
      >
        {
          Array(5).fill(0).map((_, i) => i + 1).map((item) => (
            <Box
              width={isSmallerThan480 || !isSmallerScreen ? "100%" : "48%"}
              mx={isSmallerThan480 || !isSmallerScreen ? "" : "5px"}
              height="auto"
              px="20px"
              my="5px"
              border="1px solid #ABA7A7"
              borderRadius="12px"
              key={item}
              className="card-wrapper"
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                my="20px"
              >
                <Text
                  fontWeight="600"
                  fontSize="20px"
                  className='card-title'
                >
                  Jon Toe
                </Text>
                <CheckboxGroup>
                  <Stack
                    spacing={["5px", "10px"]}
                    direction={["column", "row"]}
                    fontSize="10px"
                  >
                    <Checkbox size="md">
                      Pick up
                    </Checkbox>
                    <Checkbox size="md">
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
                <Box
                  bgImage={`url(${Circle})`}
                  className='circle'
                  style={{
                    aspectRatio: "1/1"
                  }}
                  mt="-5px"
                />
                <Box
                  bgImage={`url(${LineL})`}
                  className='line-l'
                  width="100%"
                  height="6px"
                />
                <Box
                  bgImage={`url(${Bike})`}
                  className='bike'
                  style={{
                    aspectRatio: "1/1"
                  }}
                  mt="-5px"
                />
                <Box
                  bgImage={`url(${LineR})`}
                  className='line-r'
                  width="100%"
                  height="6px"
                />
                <Box
                  bgImage={`url(${Flag})`}
                  className='flag'
                  style={{
                    aspectRatio: "1/1"
                  }}
                  mt="-5px"
                />
                {/* 
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
                                /><Image
                                    src={Flag}
                                    alt="flag"
                                    style={{
                                        aspectRatio: "1/1"
                                    }}
                                    mt="-5px"
                                /> */}
              </Grid>
              <Flex
                justifyContent="space-between"
                color="#070529"
                fontSize="12px"
                lineHeight="12px"
                my="10px"
                className='card-details'
              >
                <Flex flexDirection="column">
                  <Text as="span" color="#ABA7A7" my="5px">10:15am, jan 10</Text>
                  <Text>Oshodi Brown Street</Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text as="span" color="#ABA7A7" my="5px">10:15am, jan 10</Text>
                  <Text>Oshodi Brown Street</Text>
                </Flex>
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </Flex>
  )
}

export default InTransit;
