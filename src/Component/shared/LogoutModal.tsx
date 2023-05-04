import {
  Box,
  Button, Flex, Modal, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  logout?: () => void // will be the actual logout function
}

function Logout({
  isOpen,
  onClose,
  logout
}: Props): JSX.Element {

  const Cancel = () => {
    onClose()
  }

  return (
    <Modal
      blockScrollOnMount
      isOpen={isOpen}
      onClose={Cancel}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        textAlign="center"
        ml="276px"
        minW="433px"
        h="284px"
        position="fixed"
        borderRadius="10px"
        border="1px solid #EFEFF0"
        p="62px 78px"
        background="#fff"
        color="#070529"
      >
        <Box>
          <Text mb="64px" color="#656566" fontSize="24px" fontWeight="500">Are you sure you want to logout?</Text>
          <Flex w="100%" justifyContent="flex-end" fontSize="14px" color="#070529E5" columnGap="30px">
            <Button
              variant="outline"
              w="max-content"
              p="8px 24px"

              onClick={Cancel}
            >Cancel</Button>
            <Button
              variant="solid"
              w="max-content"
              color="#fff"
              background="#070529E5"
              p="8px 24px"

              _hover={{}}

              onClick={logout}
            >Yes</Button>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  )
}

Logout.defaultProps = {
  logout: () => { },
}

export default Logout