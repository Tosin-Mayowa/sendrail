import {
  Box, Button, FormControl, FormLabel, Grid, Input, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getWithExpiry, setWithExpiry } from '../../../../lib/localStorage'
import PaymentConfirmModal from '../../../shared/PaymentConfirmModal'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import SearchBar from '../../../shared/SearchBar'
import DashboardLayout from '../../DashboardLayout'

function Index(): JSX.Element {
  const balance = getWithExpiry("balance") || 1250
  const navigate = useNavigate()
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
  const paymentConfirmModal = useDisclosure()
  const [isPaymentModalOpen, onPaymentModalOpen, onPaymentModalClose]: [isPaymentModalOpen: boolean, onPaymentModalOpen: () => void, onPaymentModalClose: () => void] = [paymentConfirmModal.isOpen, paymentConfirmModal.onOpen, paymentConfirmModal.onClose]

  const withdrawCallback = () => {
    if (balance - 60000 > 0) { setWithExpiry("balance", balance - 60000) } else { setWithExpiry("balance", 0) } // Will be the amount in production
    navigate("/dashboard")
  }
  return (
    <DashboardLayout>
      <Grid
        placeItems="center"
      >
        <PaymentConfirmModal isPaymentModalOpen={isPaymentModalOpen} onPaymentModalClose={onPaymentModalClose} callback={withdrawCallback} />
        <Box w="100%" mt={{ base: "10px", md: "42px" }}>
          <RoundedBackButton color='#040320' />
        </Box>
        <Text as="h1" w="100%" fontSize={{ sm: "18px", md: "24px" }} fontWeight="600" m={{ base: "10px  0px", md: "42px 0px 48px" }} color="#000">
          Withdraw
        </Text>
        <Grid
          placeItems="center"
          w={isSmallerScreen ? "100%  " : "80%"}
          my="15px"
          padding="30px"
          backgroundColor="#07052912"
          borderRadius="20px"
        >
          <SearchBar placeholder='Search by bank' width='100%' />
          <form style={{ width: "100%" }}>
            <Grid gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"} gap="25px" my="15px" placeItems="center">
              <FormControl>
                <FormLabel color="#ABA7A7">Bank</FormLabel>
                <Input
                  type='text'
                  placeholder="Access Bank"
                  border="1px solid #ABA7A7"
                  background="#fff"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#ABA7A7">Account Number</FormLabel>
                <Input
                  type='number'
                  placeholder='0092023****'
                  border="1px solid #ABA7A7"
                  background="#fff"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#ABA7A7">Amount</FormLabel>
                <Input
                  type='number'
                  placeholder='60,000'
                  border="1px solid #ABA7A7"
                  background="#fff"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#ABA7A7">Transaction PIN</FormLabel>
                <Input
                  type='number'
                  placeholder='****'
                  border="1px solid #ABA7A7"
                  background="#fff"
                />
              </FormControl>
              <Button
                gridColumn={!isSmallerScreen ? "1/3" : ""}
                w="max-content"
                border="1px solid #ABA7A7"
                borderRadius="4px"
                onClick={onPaymentModalOpen}
              >
                Next
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default Index