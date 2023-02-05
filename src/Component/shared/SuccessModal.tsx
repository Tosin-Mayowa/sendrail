import { Button, Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import green_tick from '../../Asset/green-tick.png'
interface Props {
    onClose: () => void,
    isOpen: boolean,
    text?: string
}
const SuccessModal: React.FC<Props> = ({ onClose, isOpen, text = `Thank you for your request. We are working hard to find the best service.` }) => {
    return (
        <Modal
            blockScrollOnMount={true}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                minW="45%"
                position="fixed"
                borderRadius="20px"
                p="15px"
                background="#fff"
                color="#070529"

                style={{
                    aspectRatio: "3/2"
                }}
            >
                <ModalBody>
                    <Flex flexDirection="column" justifyContent="center" h="100%" placeItems="center" textAlign="center" gap="20px">
                        <Image src={green_tick} alt="Success" w="20%" />
                        <Text
                            color="#27AE60"
                            fontSize="22px"
                            fontWeight="700"
                        >
                            {text}
                        </Text>
                        <Button
                            backgroundColor="#27EA60"
                            color="#fff"
                            w="30%"

                            _hover={{

                            }}

                            onClick={onClose}
                        >
                            Continue
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SuccessModal