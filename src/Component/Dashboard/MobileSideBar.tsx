import {
    Box, Drawer, DrawerContent, DrawerOverlay, Flex, Tab, TabList, Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineSwitcher, AiTwotoneSetting } from 'react-icons/ai'
import { FaRegEnvelopeOpen } from 'react-icons/fa'
import { HiLink, HiUserGroup } from 'react-icons/hi'
import { MdLogin } from 'react-icons/md'
import { RiEBike2Fill } from 'react-icons/ri'
import { TbLayersSubtract, TbLayoutNavbar } from 'react-icons/tb'
import logo from '../../Asset/Logos/Onboarding/signup.png'
import { DashboardStates } from '../../Contexts/DashboardContext'

interface Props {
    onClose: () => void,
    isOpen: boolean
}
function MobileSideBar({ onClose, isOpen }: Props): JSX.Element {
    const [tab] = useState<any>([
        {
            icon: <FaRegEnvelopeOpen size="18px" />,
            text: "Dashboard"
        },
        {
            icon: <AiOutlineSwitcher size="18px" />,
            text: "Shipment"
        },
        {
            icon: <HiUserGroup size="18px" />,
            text: "Customer"
        },
        {
            icon: <RiEBike2Fill size="18px" />,
            text: "Rider"
        },
        {
            icon: <TbLayoutNavbar size="18px" />,
            text: "Payroll"
        },
        {
            icon: <TbLayersSubtract size="18px" />,
            text: "Transactions"
        },
        {
            icon: <HiLink size="18px" />,
            text: "Manage Link"
        },
        {
            icon: <AiTwotoneSetting size="18px" />,
            text: "Settings"
        },
        {
            icon: <MdLogin size="18px" />,
            text: "Logout"
        }
    ])
    const { dispatchView } = DashboardStates()

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

                                    onClick={() => { dispatchView({ type: "clear_views" }); onClose() }}
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