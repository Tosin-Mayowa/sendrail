import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Flex, Grid, Input, InputGroup, InputLeftElement, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiBell } from 'react-icons/fi'
import NotificationsModal from './NotificationsModal'

const DashHeader = (): JSX.Element => {
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    return (
        <Flex
            position="fixed"
            right="0"
            width="81%"
            alignItems="center"
            zIndex="3"
            background="#fff"
            borderBottom="1px solid rgba(220, 219, 234, 0.4)"
            height="80px"
            pl="40px"
            pr="25px"
        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input
                    boxShadow="0px 4px 20px rgba(6, 0, 137, 0.1)"
                    width="40%"
                    fontWeight="500"
                    fontSize="12px"
                    lineHeight="14px"
                    outline="none"
                    border="none"
                    placeholder="Search by tracking number or location ..."
                />
            </InputGroup>
            <Flex alignItems="center" gap="20px">
                <Grid
                    placeItems="center"
                    gridTemplateColumns="1fr 1fr"
                    gap="4px"
                    h="max-content"
                    padding="7px 10px"
                    background="#AAAAAA"
                    borderRadius="12px"
                    cursor="pointer"
                    onClick={onOpen}
                >
                    <FiBell width="12" height="13px" color="#fff" />
                    <Text
                        fontWeight="400"
                        fontSize="12px"
                        lineHeight="14px"
                        color="#FFFFFF"
                    >
                        0
                    </Text>
                </Grid>
                <NotificationsModal isOpen={isOpen} onClose={onClose} />
                <Flex gap="10px">
                    <Avatar
                        size="md"
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                    />
                    <Flex flexDir="column">
                        <Text
                            fontSize="16px"
                            lineHeight="26px"
                            fontWeight="500"
                            color="#7C7C88"
                            flexWrap="nowrap"
                            whiteSpace="nowrap"
                        >
                            John Toe
                        </Text>
                        <Text
                            fontSize="12px"
                            lineHeight="14px"
                            fontWeight="450"
                            color="#7C7C88"
                        >
                            Admin
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashHeader