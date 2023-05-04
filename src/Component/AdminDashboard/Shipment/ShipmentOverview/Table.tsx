import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Flex, Grid, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoKebabVertical } from 'react-icons/go';
import { tableHeadings, TData } from '../../../../data/shipment';
import EmptyData from '../../../shared/EmptyData';
import DeliveryStatus from './DeliveryStatus';
import OrderStatus from './OrderStatus';
import OrderDrawer from './OrderDrawer';
import CustomCheckbox from '../../../shared/CustomCheckbox';

interface Props {
    details: {
        sortedData: TData,
    }
    selectable?: boolean
    history?: boolean
}
function Table({ details, selectable, history }: Props): JSX.Element {
    const { sortedData } = details
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const [drawer_data, setData] = useState(null)

    return (
        <>
            {
                !history &&
                <Grid
                    gridTemplateColumns="repeat(6,2fr) 1fr"
                    mt="5px"
                    mb="15px"
                    p={{ base: "10px", md: "20px 35px" }}
                    w="100%"
                    // justifyContent="space-between"
                    placeItems="center"
                    flexWrap="nowrap"
                    background="#07052912"
                    borderRadius="10px"
                    color="#000000"
                    fontSize={{ base: "10px", md: "18px" }}
                    fontWeight="500"
                    textAlign="center"
                >
                    {
                        tableHeadings.map((head) => (
                            <Text key={head} justifySelf={head === "Destination" ? "flex-start" : head === "Action" ? "flex-end" : "center"} >
                                {head}
                            </Text>
                        ))
                    }
                </Grid>
            }
            <Grid
                w="100%"
                rowGap="10px"
            >
                {history && <Text color="#595956" fontWeight="600" fontSize="16px">January, 2023</Text>}
                {
                    sortedData?.length === 0 ? (
                        <EmptyData />
                    ) :
                        <>
                            {
                                sortedData.map((data) => (
                                    <Menu
                                        key={data?.order_id}  // will be changed after connecting to BE
                                    >
                                        <Grid
                                            gridTemplateColumns="repeat(6,2fr) 1fr"
                                            placeItems="center"
                                            flexWrap="nowrap"
                                            justifyContent="space-between"
                                            p={{ base: "10px", md: "20px 35px" }}
                                            minW="100%"
                                            w={isSmallerThan480 ? "auto" : "100%"}
                                            borderBottom="1px solid #07052912"
                                            color="#ABA7A7"
                                            fontSize={isSmallerScreen ? "10px" : "14px"}
                                            fontWeight="500"
                                            overflowX={isSmallerThan480 ? "scroll" : "hidden"}
                                            onClick={() => {
                                                if (isSmallerScreen) {
                                                    setData(data)
                                                    onOpen()
                                                }
                                            }}
                                            className='table-row'
                                        >
                                            <Flex justifyContent="center" alignItems="center" position="relative" justifySelf="flex-start">
                                                {
                                                    selectable && data?.order_status === "Unassigned" && data?.status === "Pending" &&
                                                    <Flex mr="10px">
                                                        <CustomCheckbox size="lg" />
                                                    </Flex>
                                                }
                                                <Text>{data?.destination}</Text>
                                            </Flex>
                                            <Text>{data?.courier_name ? data?.courier_name : "-"}</Text>
                                            <OrderStatus status={data?.order_status} />
                                            <Text>{data?.order_id}</Text>
                                            <Text>{data?.date}</Text>
                                            <DeliveryStatus status={data?.status} />
                                            <Flex justifyContent="center" alignItems="center" position="relative" zIndex={20} justifySelf="flex-end">
                                                {
                                                    history ?
                                                        <ChevronRightIcon
                                                            boxSize={7}
                                                            color="#000"
                                                            cursor="pointer"
                                                            onClick={() => {
                                                                setData(data)
                                                                onOpen()
                                                            }} />
                                                        :
                                                        <MenuButton>
                                                            <GoKebabVertical size={20} cursor="pointer" color='#323232' />
                                                        </MenuButton>
                                                }
                                            </Flex>
                                        </Grid>
                                        <MenuList
                                            zIndex="21"
                                            borderRadius="0px"
                                            width="10px"
                                            fontSize="14px"
                                            fontWeight="500"

                                        >
                                            <MenuItem padding="10px 15px" onClick={() => {
                                                setData(data)
                                                onOpen()
                                            }}>View Order</MenuItem>
                                            {
                                                data?.order_status === "Unassigned" && data?.status === "Pending" &&
                                                <MenuItem padding="10px 15px">Assign to rider</MenuItem>
                                            }
                                        </MenuList>
                                    </Menu>
                                ))
                            }
                        </>
                }
            </Grid>
            <OrderDrawer isOpen={isOpen} onClose={onClose} details={drawer_data} history={history} />
        </>
    )
}

Table.defaultProps = {
    selectable: false,
    history: false
}

export default Table