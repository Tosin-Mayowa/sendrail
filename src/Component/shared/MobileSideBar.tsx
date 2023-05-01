import {
    Box, Drawer, DrawerContent, DrawerOverlay, Flex, Tab, TabList, Text
} from '@chakra-ui/react'
import React from 'react'
import logo from '../../Asset/Logos/Onboarding/signup.png'

interface Props {
    onClose: () => void,
    isOpen: boolean,
    tab: {
        icon: JSX.Element,
        text: string
    }[]
}
function MobileSideBar({ onClose, isOpen, tab }: Props): JSX.Element {

    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
                <Box
                    w="100%"
                    h="25vh"
                    background={`url(${logo})`}
                    backgroundColor="rgba(0,0,0,0.5)"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundBlendMode="darken"
                />
                <Box
                    background="#070529"
                    height="75vh"
                    border="none"
                >
                    <TabList>
                        <Flex
                            w="100%"
                            minH="100%"
                            h="auto"
                            flexDirection="column"
                        >
                            {tab.map((item) => (
                                <Tab
                                    p="10px 35px"
                                    width="100%"
                                    fontWeight="500"
                                    color="#fff"
                                    fontSize="20px"
                                    textAlign="left"
                                    key={item.text}

                                    _selected={{
                                        color: "#F9C567"
                                    }}

                                    onClick={onClose}
                                >
                                    <Flex
                                        placeItems="center"
                                        w="100%"
                                    >
                                        {item.icon}
                                        <Text whiteSpace="nowrap" ml="8px">
                                            {item.text}
                                        </Text>
                                    </Flex>
                                </Tab>
                            ))}
                        </Flex>
                    </TabList>
                </Box>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileSideBar