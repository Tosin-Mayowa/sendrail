import { Box, Grid, GridItem, Tabs, useDisclosure, useMediaQuery, useTheme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/hooks/useAuth';
import DashHeader from '../shared/DashboardHeader';
import Logout from '../shared/LogoutModal';
import SideBar from './SideBar';
import '../../Style/dashboard.css'

function DashboardWrapper({
    children,
    section,
    routes,
    sidebar_tabs
}: {
    children: JSX.Element,
    section?: string,
    routes: string[],
    sidebar_tabs: {
        icon: JSX.Element,
        text: string
    }[]
}): JSX.Element {

    const { auth } = useAuth();
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate()
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [opened, setOpened] = useState<boolean>(false);
    const [tabIndex, setIndex] = useState<number>(routes.findIndex(e => e === location.pathname));
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()


    const handleTabChange = (index) => {
        if (section && routes.findIndex(i => i === section) === index) {
            return
        }
        if (index === routes.length && !opened) {
            onOpen();
            setOpened(true)// supposed to open logout modal
        } else if (index === routes.length && opened) {
            setOpened(false)
        } else {
            setIndex(index)
            navigate(routes[index])
        }
    }

    useEffect(() => {
        if (section) {
            return setIndex(routes.findIndex(i => i === section))
        }
    }, [section])
    return (
        <Tabs index={tabIndex} onChange={handleTabChange}>
            <Grid
                gridTemplateColumns={{ base: "100%", md: "18% 82%" }}
            >
                {
                    !isSmallerScreen &&
                    <GridItem
                        bg={theme.colors.primary.main}
                    >
                        <SideBar tab={sidebar_tabs} />
                    </GridItem>
                }
                <GridItem position="relative">
                    <Logout isOpen={isOpen} onClose={onClose} />
                    <DashHeader auth={auth} tab={sidebar_tabs} />
                    <Box
                        mt={{ base: "90px", md: "80px" }}
                        padding={{ base: "0px 10px", md: "10px 10px 10px 40px" }}
                    >
                        <Box
                            w="100%"
                            maxH="calc(100vh - 80px)"
                            overflowY="auto"
                            className="main-section"
                            pr="10px"
                            pb="40px"
                        >
                            {children}
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Tabs >
    )
}

DashboardWrapper.defaultProps = {
    section: null
}

export default DashboardWrapper