import { ChevronRightIcon } from '@chakra-ui/icons';
import {
 Checkbox, Flex, Grid, Text, useMediaQuery 
} from '@chakra-ui/react'
import React from 'react'
import { GoKebabVertical } from 'react-icons/go';
import { tableHeadings, TData } from '../../../../data/shipment';
import EmptyData from '../../../shared/EmptyData';
import DeliveryStatus from './DeliveryStatus';
import OrderStatus from './OrderStatus';

interface Props {
    details: {
        sortedData: TData,
    }
    selectable?: boolean
    history?: boolean
}
function Table({ details, selectable, history }: Props): JSX.Element {
    const { sortedData } = details
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

    return (
        <>
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
            <Grid
                w="100%"
                rowGap="10px"
            >
                {
                    sortedData?.length === 0 ? (
                        <EmptyData />
                    ) :
                        <>
                            {
                                sortedData.map((data) => (
                                    <Grid
                                        key={data.delivery_status}  // will be changed after connecting to BE
                                        p={isSmallerScreen ? "10px" : "15px 10px"}
                                        minW="100%"
                                        w={isSmallerThan480 ? "auto" : "100%"}
                                        gridTemplateColumns={isSmallerThan480 ? "repeat(8,30%)" : "repeat(8,1fr)"}
                                        placeItems="center"
                                        background="#07052912"
                                        borderRadius="10px"
                                        color="#000000"
                                        fontSize={isSmallerScreen ? "10px" : "14px"}
                                        fontWeight="500"
                                        textAlign="center"
                                        overflowX={isSmallerThan480 ? "scroll" : "hidden"}
                                        className='table-row'
                                    >
                                        <Flex w="100%" justifyContent="center" alignItems="center" position="relative">
                                            {
                                                selectable && data.order_status === "Unassigned" &&
                                                <Flex position="absolute" left="0">
                                                    <Checkbox border="1px solid #000000aa" size="md" borderRadius="3px" />
                                                </Flex>
                                            }
                                            <Text>{data.destination}</Text>
                                        </Flex>
                                        <Text>{data.rider ? data.rider : "-"}</Text>
                                        <OrderStatus status={data.order_status} />
                                        <Text>{data.date}</Text>
                                        <Text>{data.departure}</Text>
                                        <Text>{data.arrival}</Text>
                                        <DeliveryStatus status={data.delivery_status} />
                                        <Flex w="100%" justifyContent="center" alignItems="center" position="relative">
                                            <Text color="#CD0B3A">{data.time_delay ? data.time_delay : "-"}</Text>
                                            <Flex position="absolute" right="0">
                                                {
                                                    history ?
                                                        <ChevronRightIcon boxSize={10} color="#F9C567" />
                                                        :
                                                        <GoKebabVertical size={20} cursor="pointer" />
                                                }
                                            </Flex>
                                        </Flex>
                                    </Grid>
                                ))
                            }
                        </>
                }
            </Grid>
        </>
    )
}

Table.defaultProps = {
    selectable: false,
    history: false
}

export default Table