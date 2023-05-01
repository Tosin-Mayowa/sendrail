import {
    Box, Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import icon from '../../Asset/order_icon_light.png'
import CustomCheckbox from './CustomCheckbox'
import ModalTopLine from './ModalTopLine'
import { ChevronRightIcon } from '@chakra-ui/icons'


interface Props {
    onClose: () => void,
    isOpen: boolean
}
function CreateOrderModal({
    onClose, isOpen
}: Props): JSX.Element {
    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                ml="276px"
                minW="781px"
                position="fixed"
                borderRadius="20px"
                p="15px"
                background="#fff"
                color="#070529"
            >
                <ModalBody>
                    <ModalTopLine />
                    <Grid
                        my="66px"
                        rowGap="32px"
                        fontSize="24px"
                        fontWeight="500"
                        color="#000000"
                    >
                        <Flex
                            as={Link}
                            to="/create-order"
                            justifyContent="space-between"
                            alignItems="center"
                            border="2px solid #0600891A"
                            p="16px 32px"
                            borderRadius="20px"
                            cursor="pointer"
                        >
                            <Box>
                                <Text>Order</Text>
                                <Text color="#ABA7A7" fontSize="20px">You have access to create a single order.</Text>
                            </Box>
                            <ChevronRightIcon boxSize={35} color="#292D32" />
                        </Flex>
                        <Flex
                            as={Link}
                            to="/create-bulk-order"
                            justifyContent="space-between"
                            alignItems="center"
                            border="2px solid #0600891A"
                            p="16px 32px"
                            borderRadius="20px"
                            cursor="pointer"
                        >
                            <Box>
                                <Text>Bulk Orders</Text>
                                <Text color="#ABA7A7" fontSize="20px">You are able to create as much orders as you want.</Text>
                            </Box>
                            <ChevronRightIcon boxSize={35} color="#292D32" />
                        </Flex>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default CreateOrderModal