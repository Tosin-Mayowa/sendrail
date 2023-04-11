import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
// import { Link } from 'react-router-dom'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'

function Index(): JSX.Element {
    const file = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string>(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (selectedFile) {
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setPreview(null);
        }
    }, [selectedFile]);

    return (
        <DashboardLayout section="/manage-link">
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
                    w={{ base: "100%", md: "746px" }}
                    my={{ base: "10px", md: "15px" }}
                    padding={{ base: "15px", md: "48px 32px" }}
                    borderRadius="20px"
                    backgroundColor="#07052912"
                    color="#595956"
                    fontSize={{ base: "18px", md: "20px" }}
                >
                    <Text fontSize={{ base: "18px", md: "24px" }} mb={{ base: "10px", md: "64px" }}>
                        Create Grocery Item
                    </Text>
                    <Grid
                        w="100%"
                        rowGap={{ base: "20px", md: "32px" }}
                        color="#ABA7A7"
                        fontSize={{ base: "14px", md: "18px" }}
                        fontWeight="500"
                    >
                        <Grid
                            gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr" }}
                            rowGap={{ base: "20px", md: "32px" }}
                            columnGap={{ base: "20px", md: "32px" }}
                        >
                            <Box w="100%">
                                <Text>
                                    Product name
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="Indomie"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Size
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="120g x 20pcs"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Brand
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="Indomie super pack"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">

                                <Text>
                                    Category
                                </Text>
                                <Select
                                    icon={<MdArrowDropDown />}
                                    mx="0px"
                                    background="#FFFFFF"
                                    placeholder="120g x 20pcs"
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                >
                                    <option>150g x 24pcs</option>
                                </Select>
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Flavor(Optional)
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
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Product Code
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="1233345"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">
                                <Text>
                                    Price per pack
                                </Text>
                                <Input
                                    background="#FFFFFF"
                                    type="text"
                                    border="none"
                                    placeholder="Indomie super pack"
                                    padding={{ base: "10px", md: "10px 12px 10px 10px" }}
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                />
                            </Box>
                            <Box w="100%">

                                <Text>
                                    Consumer Type
                                </Text>
                                <Select
                                    icon={<MdArrowDropDown />}
                                    mx="0px"
                                    background="#FFFFFF"
                                    placeholder="Select an option"
                                    width="100%"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    height={{ base: "30px", md: "42px" }}
                                    outline="none"
                                    borderRadius="4px"

                                    _placeholder={{
                                        color: "#AAAAAA",
                                    }}
                                    _focus={{
                                        outline: "2px solid #F9C567",
                                        outlineOffset: "-1px"
                                    }}
                                >
                                    <option>Empty</option>
                                </Select>
                            </Box>
                        </Grid>
                    </Grid>
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