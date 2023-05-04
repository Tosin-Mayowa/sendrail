import { DownloadIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex, Grid, Image, ListIcon, ListItem, Text, UnorderedList
} from '@chakra-ui/react';
import React from 'react'
import RoundedBackButton from '../../../shared/RoundedBackButton';
import DashboardLayout from '../../DashboardLayout';
import csv_logo from '../../../../Asset/csv_icon.png'
import CustomButton from '../../../shared/CustomButton';

function Index(): JSX.Element {

    return (
        <DashboardLayout section='/shipment'>
            <Grid
                placeItems="center"
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Create Order
                </Text>

                <UnorderedList
                    padding="0px 10px"
                    color="#656566"
                    fontSize="18px"
                >
                    <ListItem mb="20px">The file must be CSV.</ListItem>
                    <ListItem mb="20px">CSV file should contain the following columns - Pick-up location, customer’s name and phone number, parcel details. Drop-off location, recipient’s name and phone number.</ListItem>
                    <ListItem mb="20px">The order of the columns should be same as the order in which they are listed above with the first row as headers.</ListItem>
                </UnorderedList>

                <Flex
                    mt="18px"
                    color="#F9C567"
                    fontSize="18px"
                    fontWeight="500"
                    cursor="pointer"
                    justifySelf="flex-start"
                    alignItems="center"
                    columnGap="20px"
                >
                    <DownloadIcon boxSize="20px" /><Text>Download a sample bulk disburse CSV file </Text>
                </Flex>
                <Flex
                    w="490px"
                    h="308px"
                    my="40px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    justifySelf="flex-start"
                    rowGap="40px"
                    border="1px dashed #ABA7A7"
                    color="#ABA7A7"
                    fontSize="18px"
                    fontWeight="500"
                >
                    <Image src={csv_logo} alt="CSV" boxSize="40px" />
                    <Text>Drop files to attach, or <Text as="span" color="#F9C567" cursor="pointer">Browse</Text></Text>
                </Flex>
                <Flex
                    w="490px"
                    justifySelf="flex-start"
                    justifyContent="flex-end"
                    alignItems="center"
                    columnGap="32px"
                >
                    <Button
                        color="#000000"
                        background="transparent"
                        fontSize="18px"
                        fontWeight="500"
                        padding="8px 24px"
                        borderRadius="8px"
                        border="1px solid #ABA7A7"
                        size="md"
                    >Cancel</Button>
                    <CustomButton text='Upload' size='md' />
                </Flex>
            </Grid>
        </DashboardLayout>
    )
}

export default Index