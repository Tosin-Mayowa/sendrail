import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Wallet from "../../../Asset/Logos/Onboarding/wallet.png";
import React from 'react'

const MyWallet: React.FC = () => {
    return (
        <Box
            width="100%"
            border="1px solid #ABA7A7"
            borderRadius="9px"
            backgroundImage={`url(${Wallet})`}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"

            style={{
                aspectRatio: "5/4"
            }}
        >
            <Center>
                <Flex flexDir="column">
                    <Text
                        mt="36px"
                        color="#000"
                        fontWeight="600"
                        fontSize="20px"
                        lineHeight="25px"
                        textAlign="center"
                    >
                        My Wallet
                    </Text>
                    <Text
                        mt="24px"
                        color="#000"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="19px"
                        textAlign="center"
                    >
                        Available Balance
                    </Text>
                    <Text
                        mt="32px"
                        fontWeight="500"
                        fontSize="28px"
                        lineHeight="34px"
                        textAlign="center"
                    >
                        N250.000
                    </Text>
                    <Flex mt="50px" justifyContent="space-between">
                        <Button
                            padding="8px 24px"
                            width="98px"
                            height="38px"
                            background="rgba(7, 5, 41, 0.9)"
                            borderRadius="8px"
                            color="#fff"
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="22px"

                            _hover={{
                                boxShadow: "0px 2px 2px 0px #070529a0"
                            }}
                        >
                            Deposit
                        </Button>
                        <Button
                            fontWeight="500"
                            fontSize="14px"
                            lineHeight="22px"
                            ml="40px"
                            padding="8px 24px"
                            width="112px"
                            height="38px"
                            background="rgba(7, 5, 41, 0.9)"
                            borderRadius="8px"
                            color="#fff"

                            _hover={{
                                boxShadow: "0px 2px 2px 0px #070529a0"
                            }}
                        >
                            Withdraw
                        </Button>
                    </Flex>
                </Flex>
            </Center>
        </Box>
    )
}

export default MyWallet