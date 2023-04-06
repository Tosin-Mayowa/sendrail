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
                    mt="5px"
                    mb="15px"
                    p={isSmallerScreen ? "10px" : "20px 10px"}
                    w="100%"
                    gridTemplateColumns="repeat(8,1fr)"
                    placeItems="center"
                    background="#07052912"
                    borderRadius="10px"
                    color="#000000"
                    fontSize={isSmallerScreen ? "10px" : "18px"}
                    fontWeight="500"
                    textAlign="center"
                >
                    {
                        tableHeadings.map((head) => (
                            <Text key={head}>
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
                                        key={data?.delivery_status}  // will be changed after connecting to BE
                                    >
                                        <Grid
                                            p={isSmallerScreen ? "10px" : "15px 10px"}
                                            minW="100%"
                                            w={isSmallerThan480 ? "auto" : "100%"}
                                            gridTemplateColumns={isSmallerThan480 ? "repeat(8,30%)" : "repeat(8,1fr)"}
                                            placeItems="center"
                                            // background="#07052912"
                                            borderBottom="1px solid #07052912"
                                            // borderRadius="10px"
                                            color="#ABA7A7"
                                            fontSize={isSmallerScreen ? "10px" : "14px"}
                                            fontWeight="500"
                                            textAlign="center"
                                            overflowX={isSmallerThan480 ? "scroll" : "hidden"}
                                            onClick={() => {
                                                if (isSmallerScreen) {
                                                    setData(data)
                                                    onOpen()
                                                }
                                            }}
                                            className='table-row'
                                        >
                                            <Flex w="100%" justifyContent="center" alignItems="center" position="relative">
                                                {
                                                    selectable && data?.order_status === "Unassigned" && data?.delivery_status === "Pending" &&
                                                    <Flex position="absolute" left="0">
                                                        <CustomCheckbox size="lg" />
                                                    </Flex>
                                                }
                                                <Text>{data?.destination}</Text>
                                            </Flex>
                                            <Text>{data?.rider ? data?.rider : "-"}</Text>
                                            <OrderStatus status={data?.order_status} />
                                            <Text>{data?.date}</Text>
                                            <Text>{data?.departure}</Text>
                                            <Text>{data?.arrival}</Text>
                                            <DeliveryStatus status={data?.delivery_status} />
                                            <Flex w="100%" justifyContent="center" alignItems="center" position="relative" zIndex={20}>
                                                <Text color="#CD0B3A">{data?.time_delay ? data?.time_delay : "-"}</Text>
                                                <Flex position="absolute" right="0">
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
                                                data?.order_status === "Unassigned" && data?.delivery_status === "Pending" &&
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