import { Button, Grid, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
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
        minW="25%"
        position="fixed"
        borderRadius="20px"
        p="15px"
        background="#fff"
        color="#070529"
      >
        <Text my="20px" color="#656566" fontSize="24px" fontWeight="500">Are you sure you want to logout?</Text>
        <Grid placeItems="center" gridTemplateColumns="1fr 1fr" fontSize="14px" color="#070529E5">
          <Button
            variant="outline"
            w="50%"

            onClick={Cancel}
          >Cancel</Button>
          <Button
            variant="solid"
            w="50%"
            color="#fff"
            background="#070529E5"

            _hover={{}}

            onClick={logout}
          >Yes</Button>
        </Grid>
      </ModalContent>
    </Modal>
  )
}

Logout.defaultProps = {
  logout: () => { },
}

export default Logout