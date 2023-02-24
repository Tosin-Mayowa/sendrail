import { SmallAddIcon } from '@chakra-ui/icons';
import {
    Box, Button, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Grid, Image, Input, Select, Stack, Text, useMediaQuery
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';

function ParcelDetails({ setSection }: { setSection: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const file = useRef<HTMLInputElement>(null)
    const [categories] = useState<string[]>([
        "Computer Accessories",
        "Skin Care",
        "Clothing",
        "Food",
        "Health",
        "Phone",
        "Jewelries Accessories",
        "Electronics"
    ])
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
        <Grid
            placeItems="center"
            w={isSmallerScreen ? "100%" : "80%"}
            my="15px"
            padding="30px"
            borderRadius="10px"
            backgroundColor="#07052912"
        >
            <Text
                color="#595956"
                fontWeight="500"
                fontSize="24px"
            >
                Parcel Details
            </Text>
            <form style={{ width: "100%" }}>
                <Grid
                    w="100%"
                    placeItems="center"
                >
                    <Flex
                        w={isSmallerScreen ? "90%" : "50%"}
                        my="15px"
                        alignItems="center"
                        justifyContent="center"
                        background="#fff"
                        color="#ABA7A7"
                        borderRadius="10px"
                        overflow="hidden"
                        cursor="pointer"
                        transition="0.2s"

                        style={{ aspectRatio: "5/3" }}

                        _hover={{
                            transform: "scale(0.98)"
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
                                <>
                                    <SmallAddIcon boxSize="30px" />
                                    <Text>Upload Parcel Image</Text>
                                </>
                            )
                        }
                    </Flex>
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
                    <Box w={isSmallerScreen ? "90%" : "70%"} color="#ABA7A7">
                        <Grid
                            gridTemplateColumns={isSmallerScreen ? "1fr" : "20% 80%"}
                            alignItems="flex-end"
                            rowGap="10px"
                        >
                            <FormControl>
                                <FormLabel>No of parcel</FormLabel>
                                <Stack spacing={3}>
                                    <Select variant='filled' w="max-content" icon={<MdArrowDropDown />} background="#fff">
                                        {
                                            Array(10).fill(0).map((_, i) => i + 1).map((item) => (
                                                <option key={item} value={item} label={String(item)} />
                                            ))
                                        }
                                    </Select>
                                </Stack>
                            </FormControl>
                            <FormControl>
                                <Stack spacing={3}>
                                    <Select variant='filled' w="100%" icon={<MdArrowDropDown />} placeholder='Category' background="#fff">
                                        {
                                            categories?.map((item) => (
                                                <option key={item} value={item} label={String(item)} />
                                            ))
                                        }
                                    </Select>
                                </Stack>
                            </FormControl>
                        </Grid>
                        <Text fontSize="18px" my="20px">
                            Select a payment method
                        </Text>
                        <CheckboxGroup>
                            <Stack
                                spacing={["15px"]}
                                direction={["column"]}
                                fontSize="16px"
                            >
                                <Checkbox size="md" defaultChecked>
                                    Payment on delivery
                                </Checkbox>
                                <Checkbox size="md" defaultChecked>
                                    Online payment
                                </Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Button
                        w="max-content"
                        border="1px solid #ABA7A7"
                        borderRadius="4px"
                        my="20px"
                        onClick={() => { setSection("confirm-parcel-details") }}
                    >
                        Next
                    </Button>
                </Grid>
            </form >
        </Grid >
    )
}

export default ParcelDetails