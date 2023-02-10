import { Button, Grid, Modal, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { DashboardStates } from '../../Contexts/DashboardContext'

interface Props {
  logout?: () => void // will be the actual logout function
}
function Logout({
  logout
}: Props): JSX.Element {
  const { views } = DashboardStates()
  const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()

  useEffect(() => {
    if (views.current_view === "logout") onOpen()
  }, [views.current_view])

  return (
    <Modal
      blockScrollOnMount
      isOpen={isOpen}
      onClose={onClose}
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

            onClick={onClose}
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