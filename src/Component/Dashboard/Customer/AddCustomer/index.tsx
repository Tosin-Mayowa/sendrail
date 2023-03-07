import { LinkIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Image, Input, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import camera from '../../../../Asset/camera_icon.png'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'
import "../styles.css"

const Index = () => {
    const file = useRef<HTMLInputElement>(null)
    const [isSmallerScreen] = useMediaQuery("(max-width: 580px)");
    const [preview, setPreview] = useState<string>(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputs] = useState(["Name", "Type", "Phone Number", "Email Address", "Gender", "Address", "State", "Country"])// Just to get the UI done

    useEffect(() => {
        if (selectedFile) {
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setPreview(null);
        }
    }, [selectedFile]);
    return (
        <DashboardLayout section='/customer'>
            <Grid
                placeItems="center"
                w="100%"
                maxH="calc(100vh - 80px)"
                overflowY="scroll"
                className="add-customers-scroll"
                pr="10px"
            >
                <Box w="100%">
                    <RoundedBackButton color="#000" />
                    <Text as="h1" w="100%" fontSize={{ sm: "18px", md: "24px" }} fontWeight="600" my="25px" color="#000">
                        Add Customers
                    </Text>
                </Box>
                <Grid
                    // placeItems="center"
                    w={{ base: "100%", md: "80%" }}
                    my={{ base: "10px", md: "25px" }}
                    fontSize="18px"
                    fontWeight="500"
                    padding={{ base: "20px", md: "32px 48px" }}
                    borderRadius="20px"
                    backgroundColor="#07052912"
                    color="#ABA7A7"

                >
                    {
                        !isSmallerScreen &&
                        <Text
                            fontSize={{ base: "20px", md: "24px" }}
                            color="#656566"
                        >
                            Add Customer
                        </Text>
                    }
                    <Grid
                        w="100px"
                        h="100px"
                        background={preview ? `url(${preview})` : "#ABA7A7"}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        borderRadius="50%"
                        my={{ base: "20px", md: "40px" }}
                        cursor="pointer"
                        transition="0.2s"

                        _hover={{
                            transform: "scale(0.95)"
                        }}

                        onClick={() => file.current.click()}
                    >
                        {/* {!preview && */}
                        <Grid
                            position="relative"
                            placeItems="center"
                            alignSelf="flex-end"
                            justifySelf="flex-end"
                            background={preview ? "transparent" : "#FFFFFF"}
                            w="32px"
                            h="32px"
                            borderRadius="50%"
                            right="15px"
                            bottom="15px"
                        >
                            <Image src={camera} alt="" />
                        </Grid>
                        {/* } */}
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
                    </Grid>
                    <Grid
                        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        columnGap="25px"
                        rowGap="30px"
                    >
                        {
                            inputs.map((text) => (
                                <Box key={text}>
                                    <Text>{text}</Text>
                                    <Input
                                        type="text"
                                        placeholder="Placeholder"
                                        color="#1F1F1F"
                                        background="#fff"
                                        height="52px"
                                        padding=" 15px 12px 15px 10px"
                                        borderRadius="4px"
                                        outline="none"
                                        border="none"

                                        className='add-customer-input'
                                    />
                                </Box>
                            ))
                        }
                    </Grid>
                    <Grid my="30px" rowGap="30px" w={{ base: "100%", md: "max-content" }}>
                        <CustomButton text='Save Customer' size='lg' />
                        <Button
                            leftIcon={<LinkIcon />}
                            color="#000000"
                            background="transparent"
                            fontSize="18px"
                            fontWeight="500"
                            padding="8px 24px"
                            borderRadius="8px"
                            border="1px solid #ABA7A7"
                            size="lg"
                        >Copy link</Button>
                    </Grid>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default Index