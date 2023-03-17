import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Image, Input, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
// import { Link } from 'react-router-dom'
import DashboardLayout from '../../DashboardLayout'

const Index = (): JSX.Element => {
    const [extras, setExtras] = useState(1)
    const file = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string>(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const Extra = () => (
        <Grid
            gridTemplateColumns={{ base: "1fr 1fr", md: "66% 28%" }}
            columnGap={{ base: "20px", md: "32px" }}
        >
            <Box w="100%">
                <Text>
                    Extra portion
                </Text>
                <Input
                    background="#FFFFFF"
                    type="text"
                    border="none"
                    placeholder="Placeholder"
                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                    width="100%"
                    fontSize={{ base: "10px", md: "16px" }}
                    height={{ base: "30px", md: "42px" }}
                    outline="none"
                    borderRadius="4px"

                    _placeholder={{
                        color: "initial",
                    }}
                    _focus={{
                        outline: "2px solid #F9C567",
                        outlineOffset: "-1px"
                    }}
                />
            </Box>
            <Box w="100%">
                <Text>
                    Price per extra
                </Text>
                <Input
                    background="#FFFFFF"
                    type="text"
                    border="none"
                    placeholder="₦ Placeholder"
                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                    width="100%"
                    fontSize={{ base: "10px", md: "16px" }}
                    height={{ base: "30px", md: "42px" }}
                    outline="none"
                    borderRadius="4px"

                    _placeholder={{
                        color: "initial",
                    }}
                    _focus={{
                        outline: "2px solid #F9C567",
                        outlineOffset: "-1px"
                    }}
                />
            </Box>
        </Grid>
    )

    useEffect(() => {
        if (selectedFile) {
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setPreview(null);
        }
    }, [selectedFile]);
    return (
        <DashboardLayout section='/manage-link'>
            <Grid
                placeItems="center"
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Manage Link
                </Text>
                <Grid
                    placeItems="center"
                    w={{ base: "100%", md: "80%" }}
                    padding={{ base: "15px", md: "48px 80px" }}
                    borderRadius="20px"
                    backgroundColor="#07052912"
                    color="#595956"
                    fontSize="20px"
                >
                    <Text fontSize={{ base: "18px", md: "24px" }} mb={{ base: "10px", md: "64px" }}>
                        Create Food Menu
                    </Text>
                    <Grid
                        w="100%"
                        rowGap={{ base: "20px", md: "32px" }}
                        color="#ABA7A7"
                        fontSize={{ base: "14px", md: "18px" }}
                        fontWeight="500"
                    >
                        <Grid
                            gridTemplateColumns={{ base: "1fr 1fr", md: "66% 28%" }}
                            columnGap={{ base: "20px", md: "32px" }}
                        >
                            <Box w="100%">
                                <Text>
                                    Food Combo
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="Placeholder"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "initial",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Price per plate
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="₦ Placeholder"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "initial",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                        </Grid>
                        {
                            Array(extras).fill(0).map((_, i) => i + 1).map((item) => (
                                <Extra key={item} />
                            ))
                        }
                    </Grid>
                    <Flex
                        mt="18px"
                        color="#F9C567"
                        fontSize="16px"
                        justifySelf="flex-start"
                        cursor="pointer"

                        onClick={() => {
                            setExtras(extras + 1)
                        }}
                    >
                        <SmallAddIcon boxSize="25px" /><Text>Add Extra portion</Text>
                    </Flex>
                    <Text
                        color="#000000"
                        m={{ base: "15px", md: "26px 0px 16px" }}
                    >
                        Upload food image
                    </Text>
                    <Input
                        type="file"
                        ref={file}
                        accept="image/*"
                        display="none"
                        onChange={(e) => {
                            setSelectedFile(e.target.files[0]);
                            e.target.value = "";
                        }}
                    />
                    <Grid
                        placeItems="center"
                        w={{ base: "80%", md: "389px" }}
                        h={{ base: "200px", md: "202px" }}
                        background="#FFFFFF"
                        overflow="hidden"
                        borderRadius="10px"
                        cursor="pointer"
                        transition="0.1s"
                        color="#ABA7A7"

                        _hover={{
                            transform: "scale(0.97)"
                        }}

                        onClick={() => file.current.click()}
                    >
                        {
                            preview ? (
                                <Image
                                    src={preview}
                                    height="100%"
                                    width="auto"
                                    transition="0.2s"
                                />
                            ) : (
                                <SmallAddIcon boxSize="35px" />
                            )
                        }
                    </Grid>
                    <Flex justifyContent={{ base: "center", md: "flex-end" }} w="100%" mt="48px">
                        <CustomButton text='Done' disabled />
                    </Flex>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default Index