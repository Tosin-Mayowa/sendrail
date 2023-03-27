import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Avatar, Box, Flex, Grid, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { FiBell } from 'react-icons/fi'
import SearchBar from '../shared/SearchBar'
import MobileSideBar from './MobileSideBar'
import NotificationsModal from './NotificationsModal'

function DashHeader({ auth }: { auth: any }): JSX.Element {
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const Drawer = useDisclosure()
    const [isOpenDrawer, onOpenDrawer, onCloseDrawer]: [isOpenDrawer: boolean, onOpenDrawer: () => void, onCloseDrawer: () => void] = [Drawer.isOpen, Drawer.onOpen, Drawer.onClose]

    return (
        <Flex
            position="fixed"
            right="0"
            width={isSmallerScreen ? "100%" : "82%"}
            alignItems="center"
            zIndex="3"
            background="#fff"
            borderBottom="1px solid rgba(220, 219, 234, 0.4)"
            height="80px"
            px={isSmallerScreen ? "10px" : "30px"}
        >
            {
                isSmallerScreen &&
                <>
                    <Box color="#070529" onClick={onOpenDrawer}>
                        <HamburgerIcon boxSize={35} mx="5px" />
                    </Box>
                    <MobileSideBar isOpen={isOpenDrawer} onClose={onCloseDrawer} />
                </>
            }
            <SearchBar placeholder='Search by tracking number or location ...' width={isSmallerScreen ? "90%" : "40%"} />
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
                    {
                        !isSmallerScreen ?
                            <>
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
                                        {auth?.user?.first_name ? `${auth?.user?.first_name} ${auth?.user?.last_name}` : "John Toe"}
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
                            </>
                            :
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar
                                        size="md"
                                        name="Ryan Florence"
                                        src="https://bit.ly/ryan-florence"
                                    />
                                </PopoverTrigger>
                                <PopoverContent w="100%">
                                    <PopoverArrow />
                                    <PopoverBody>
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
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashHeader;
