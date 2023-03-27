import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  useTheme,Flex
} from '@chakra-ui/react'
import React,{useState} from 'react';

const ResetPasswordModal = ({ setSecurity }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const theme = useTheme()
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false)
  const [otpSuccess, setOtpSuccess] = useState<boolean>(false)
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box
        width="565px"
        height="325px"
        background="rgba(7, 5, 41, 0.07)"
        border-radius="20px"
        display="flex"
        flexDir="column"
        >
      <Text
       color=""
                    fontWeight="500"
                    fontSize="16px"
                    
                    lineHeight="22px"
      >Reset Password</Text>
      </Box>
    </Flex>
  )
}

export default ResetPasswordModal;

