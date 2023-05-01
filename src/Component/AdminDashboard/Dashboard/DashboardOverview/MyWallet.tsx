import {
    Box, Flex, Text, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Wallet from "../../../../Asset/Logos/Onboarding/wallet.png";
import useNumbers from '../../../../lib/hooks/useNumbers'
import { getWithExpiry } from '../../../../lib/localStorage';
import CustomButton from '../../../shared/CustomButton';

function MyWallet(): JSX.Element {
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const balance = getWithExpiry("balance") || 1250
    const navigate = useNavigate()
    const { formatSmallNumbers } = useNumbers()
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
                    N{formatSmallNumbers(balance)}
                </Text>
                <Flex
                    w="100%"
                    justifyContent="space-around"
                    fontSize="14px"
                    fontWeight="500"
                >
                    <CustomButton text='Deposit' onclick={() => { navigate("/deposit") }} />
                    <CustomButton text='Withdraw' onclick={() => { navigate("/withdraw") }} />
                </Flex>
            </Flex>
        </Box>
    )
}

export default MyWallet