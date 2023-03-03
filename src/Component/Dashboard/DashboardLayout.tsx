import { Box, Grid, GridItem, Tabs, useDisclosure, useMediaQuery, useTheme } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/hooks/useAuth';
import DashHeader from './DashHeader';
import Logout from './LogoutModal';
import SideBar from './SideBar';

function DashboardLayout({ children }: { children: JSX.Element }): JSX.Element {
    const { auth } = useAuth();
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate()
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [opened, setOpened] = useState<boolean>(false);
    const routes: string[] =
        [
            "/dashboard", "/shipment", "/customer", "/rider", "/payroll", "/transactions", "/manage-link", "/settings"
        ]
    const [tabIndex, setIndex] = useState<number>(routes.findIndex(e => e === location.pathname));
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()


    const handleTabChange = (index) => {
        if (index === 8 && !opened) {
            onOpen();
            setOpened(true)// supposed to open logout modal
        } else if (index === 8 && opened) {
            setOpened(false)
        } else {
            setIndex(index)
            navigate(routes[index])
        }
    }
    return (
        <Tabs index={tabIndex} onChange={handleTabChange}>
            <Grid
                gridTemplateColumns={isSmallerScreen ? "100%" : "18% 82%"}
            >
                {
                    !isSmallerScreen &&
                    <GridItem
                        bg={theme.colors.primary.main}
                    >
                        <SideBar />
                    </GridItem>
                }
                <GridItem position="relative">
                    <Logout isOpen={isOpen} onClose={onClose} />
                    <DashHeader auth={auth} />
                    <Box
                        mt={isSmallerScreen ? "90px" : "80px"}
                        padding={isSmallerScreen ? "0px 10px" : "10px 40px"}
                    >
                        {children}
                    </Box>
                </GridItem>
            </Grid>
        </Tabs>
    )
}

export default DashboardLayout