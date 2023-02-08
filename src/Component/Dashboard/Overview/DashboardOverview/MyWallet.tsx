import {
    Box, Button, Flex, Text, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import Wallet from "../../../../Asset/Logos/Onboarding/wallet.png";
import { OverviewStates } from '../../../../Contexts/OverviewContext';
import useNumbers from '../../../../hooks/useNumbers'

function MyWallet(): JSX.Element {
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const { dispatchView, balance } = OverviewStates();
    const { formatNormalNumbers } = useNumbers()
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
            <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%" h="100%" gap="15px">
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
                    fontWeight="600"
                    fontSize="20px"
                >
                    My Wallet
                </Text>
                <Text
                    fontWeight="500"
                    fontSize="16px"
                >
                    Available Balance
                </Text>
                <Text
                    fontWeight="500"
                    fontSize="28px"
                >
                    N{formatNormalNumbers(balance)}
                </Text>
                <Flex
                    w="100%"
                    justifyContent="space-around"
                    fontSize="14px"
                    fontWeight="500"
                >
                    <Button
                        padding="8px 24px"
                        background="rgba(7, 5, 41, 0.9)"
                        borderRadius="8px"
                        color="#fff"

                        _hover={{
                            boxShadow: "0px 2px 2px 0px #070529a0"
                        }}

                        onClick={() => dispatchView({ type: "change_overview_view", current_view: "deposit-1" })}
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

                        onClick={() => dispatchView({ type: "change_overview_view", current_view: "withdraw-1" })}
                    >
                        Withdraw
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MyWallet