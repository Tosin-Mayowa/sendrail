import { Box, Button, Center, Flex, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react'
import Wallet from "../../../../Asset/Logos/Onboarding/wallet.png";
import React, { useReducer } from 'react'
import { setWithExpiry } from '../../../../lib/localStorage';
import { viewReducer } from '../../../../reducers/dashboardViewReducer';
import { OverviewStates } from '../../../../Contexts/OverviewContext';

const MyWallet = (): JSX.Element => {
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const { dispatchView } = OverviewStates();
    return (
        <Box
            width={isSmallerThan480 ? "100%" : "50%"}
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
                <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
                    {/* <Flex w="100%" justifyContent="flex-end" p="15px">
                        <Menu>
                            <MenuButton>
                                <GoKebabVertical size={20} cursor="pointer" />
                            </MenuButton>
                            <MenuList
                                zIndex="20"
                                borderRadius="0px"
                                width="80px"
                                fontSize="14px"
                                fontWeight="500"
                            >
                                <MenuItem>History</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex> */}
                    <Text
                        my="18px"
                        fontWeight="600"
                        fontSize="20px"
                    >
                        My Wallet
                    </Text>
                    <Text
                        my="12px"
                        fontWeight="500"
                        fontSize="16px"
                    >
                        Available Balance
                    </Text>
                    <Text
                        my="16px"
                        fontWeight="500"
                        fontSize="28px"
                    >
                        N250.000
                    </Text>
                    <Flex
                        w="100%"
                        justifyContent="space-around"
                        fontSize="14px"
                        fontWeight="500"
                        mt="10px"
                    >
                        <Button
                            padding="8px 24px"
                            background="rgba(7, 5, 41, 0.9)"
                            borderRadius="8px"
                            color="#fff"

                            _hover={{
                                boxShadow: "0px 2px 2px 0px #070529a0"
                            }}

                            onClick={() => dispatchView({ type: "change_overview_view", current_view: "deposit" })}
                        >
                            Deposit
                        </Button>
                        <Button
                            padding="8px 24px"
                            background="rgba(7, 5, 41, 0.9)"
                            borderRadius="8px"
                            color="#fff"

                            _hover={{
                                boxShadow: "0px 2px 2px 0px #070529a0"
                            }}

                            onClick={() => dispatchView({ type: "change_overview_view", current_view: "withdraw" })}
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