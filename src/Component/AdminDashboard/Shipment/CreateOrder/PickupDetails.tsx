import { CalendarIcon, CheckIcon, SmallAddIcon, SmallCloseIcon, TimeIcon } from '@chakra-ui/icons';
import {
    Button, Flex, FormControl, FormLabel, Grid, Input, InputGroup, InputRightElement, Select, Text, useMediaQuery
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';

function PickupDetails({ setSection }: { setSection: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [files, setFiles] = useState([])
    const [parcelCount, setParcelCount] = useState<number>(1)
    const fileRef = useRef<HTMLInputElement>(null)

    return (
        <Grid
            w="100%"
            padding={{ base: "15px", md: "32px 48px" }}
            borderRadius="20px"
            backgroundColor="#07052912"
            color="#595956"
        >
            <Text
                fontWeight="500"
                fontSize="20px"
            >
                Add pick-up details
            </Text>
            <form style={{ width: "100%" }}>
                <Grid
                    gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"}
                    rowGap="32px"
                    columnGap="24px"
                    my="32px"
                    placeItems="center"
                    fontWeight="500"
                    fontSize="16px"
                >
                    <FormControl>
                        <FormLabel mb="8px">Customer&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Enter a full name"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Customer&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Enter phone number'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Pick-Up location</FormLabel>
                        <Input
                            type='text'
                            placeholder='Enter a location'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Customer&#39;s Pick -Up Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Schedule For Pick-Up <Text as="span" color="#AAAAAA">(optional)</Text></FormLabel>
                        <InputGroup>
                            <Input
                                type='text'
                                placeholder='Enter a date'
                                background="#fff"

                                onFocus={(e) => (e.target.type = 'date')}
                                onBlur={(e) => (e.target.type = 'text')}
                            />
                            <InputRightElement children={<CalendarIcon color='#ABA7A7' />} />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Schedule For Pick-Up <Text as="span" color="#AAAAAA">(optional)</Text></FormLabel>
                        <InputGroup>
                            <Input
                                type='text'
                                placeholder='Enter a time'
                                background="#fff"

                                onFocus={(e) => (e.target.type = 'time')}
                                onBlur={(e) => (e.target.type = 'text')}
                            />
                            <InputRightElement children={<TimeIcon color='#ABA7A7' />} />
                        </InputGroup>
                    </FormControl>
                    <Flex
                        gridColumn="1/3"
                        columnGap="8px"
                        width="100%"
                        background="#FFFFFF"
                        height="97px"
                        borderRadius="10px"
                        padding={{ sm: "", md: "16px" }}
                    >
                        {
                            files?.map(e => (
                                <Grid
                                    key={e}
                                    position="relative"
                                    placeItems="center"
                                    background={e ? `url(${URL.createObjectURL(e)})` : "#ABA7A7"}
                                    backgroundPosition="center"
                                    backgroundSize="cover"
                                    backgroundRepeat="no-repeat"
                                    w="max-content"
                                    borderRadius="10px"
                                    h="100%"
                                    style={{
                                        aspectRatio: "9/8"
                                    }}
                                >
                                    <SmallCloseIcon
                                        boxSize={23}
                                        padding="2px"
                                        borderRadius="50%"
                                        border="1px dotted red"
                                        color="red"
                                        background="rgba(0,0,0,0.2)"
                                        position="absolute"
                                        top="-10px"
                                        right="0"
                                        cursor="pointer"

                                        onClick={() => {
                                            let newFile = files.filter(i => i !== e)
                                            setFiles(newFile)
                                        }}
                                    />
                                </Grid>
                            ))
                        }
                        {files.length != 5 &&
                            <Flex h="100%" alignItems="center" columnGap="8px">
                                <Grid
                                    placeItems="center"
                                    border="1px dashed #ABA7A7"
                                    w="max-content"
                                    borderRadius="10px"
                                    cursor="pointer"
                                    h="100%"
                                    style={{
                                        aspectRatio: "9/8"
                                    }}
                                    onClick={() => { fileRef.current.click() }}
                                >
                                    <SmallAddIcon boxSize={25} />
                                </Grid>
                                <Text color="#ABA7A7">
                                    Click to browse or drop an image file
                                </Text>
                            </Flex>
                        }
                        <Input
                            type="file"
                            ref={fileRef}
                            accept="image/*"
                            display="none"
                            onChange={(e) => {
                                setFiles([...files, e.target.files[0]]);
                                e.target.value = "";
                            }}
                        />
                    </Flex>


                    <Text
                        gridColumn={isSmallerScreen ? "" : "1/3"}
                        justifySelf="flex-start"
                        fontWeight="500"
                        fontSize="20px"
                    >
                        Parcel details
                    </Text>
                    {
                        Array(parcelCount).fill(0).map((_, i) => i + 1).map((item) => (
                            <ParcelDetails />
                        ))
                    }
                    {
                        parcelCount !== 5 &&
                        <Flex
                            mt="10px"
                            fontSize="16px"
                            justifySelf="flex-start"
                            cursor="pointer"

                            onClick={() => {
                                setParcelCount(parcelCount + 1)
                            }}
                        >
                            <SmallAddIcon boxSize="25px" /><Text>Add another Parcel</Text>
                        </Flex>
                    }


                    <Button
                        gridColumn={!isSmallerScreen ? "1/3" : ""}
                        w="max-content"
                        borderRadius="4px"
                        onClick={() => { setSection("add-drop-off") }}
                        size="lg"
                        justifySelf="right"
                        background="#06008926"
                        color="#fff"

                        _hover={{}}
                    >
                        Next
                    </Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default PickupDetails

const ParcelDetails = () => {
    return (
        <>
            <FormControl>
                <FormLabel mb="8px">Parcel contents</FormLabel>
                <Input
                    type='text'
                    placeholder="Enter a parcel contents"
                    background="#fff"
                />
            </FormControl>
            <Grid
                w="100%"
                px="20px"
                gridTemplateColumns="25% 57%"
                columnGap="40px"
            >
                <FormControl>
                    <FormLabel mb="8px">No of parcel</FormLabel>
                    <Input
                        type='number'
                        min="1"
                        max="5"
                        placeholder="1"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel mb="8px">Select an option</FormLabel>
                    <Select
                        border="none"
                        icon={<MdArrowDropDown />}
                        placeholder="Category"
                        width="100%"
                        backgroundColor="#fff"
                    >
                        <option>Category 1</option>
                        <option>Category 2</option>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}