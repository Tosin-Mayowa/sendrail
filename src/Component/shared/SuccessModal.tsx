import {
    Box, Button, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'
import green_tick from '../../Asset/green-tick.png'
import red_sad from '../../Asset/red_sad.png'

interface Props {
    onClose: () => void,
    isOpen: boolean,
    text?: string,
    type?: "success" | "error"
    callback?: () => void
}
function SuccessModal({
    onClose, isOpen, text, callback, type
}: Props): JSX.Element {
    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={() => { onClose(); callback(); }}
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
                        <Image src={type === "success" ? green_tick : red_sad} alt="" w="20%" />
                        <Text
                            textTransform="uppercase"
                            color={type === "success" ? "#27EA60" : "#F32E2E"}
                        >
                            {type}
                        </Text>
                        <Box
                            color="#4A4A4A"
                            fontSize="22px"
                            fontWeight="700"
                        >
                            {type === "success" && text}
                        </Box>
                        <Button
                            backgroundColor={type === "success" ? "#27EA60" : "#F32E2E"}
                            color="#fff"
                            w="30%"

                            _hover={{

                            }}

                            onClick={() => { onClose(); callback(); }}
                        >
                            {type === "success" ? "Continue" : "Close"}
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
SuccessModal.defaultProps = {
    text: (
        <>
            <Text>
                Thank you for your request.
            </Text>
            <Text>
                We are working hard to find the best service.
            </Text>
        </>
    ),
    callback: () => { },
    type: "success"
}
export default SuccessModal