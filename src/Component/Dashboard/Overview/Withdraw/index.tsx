import {
  Box, Button, FormControl, FormLabel, Grid, Input, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { DashboardStates } from '../../../../Contexts/DashboardContext'
import { OverviewStates } from '../../../../Contexts/OverviewContext'
import PaymentConfirmModal from '../../../shared/PaymentConfirmModal'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import SearchBar from '../../../shared/SearchBar'

function Index(): JSX.Element {
  const {
    balance, setBalance
  } = OverviewStates()
  const {
    views, dispatchView
  } = DashboardStates()
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
  const paymentConfirmModal = useDisclosure()
  const [isPaymentModalOpen, onPaymentModalOpen, onPaymentModalClose]: [isPaymentModalOpen: boolean, onPaymentModalOpen: () => void, onPaymentModalClose: () => void] = [paymentConfirmModal.isOpen, paymentConfirmModal.onOpen, paymentConfirmModal.onClose]

  const withdrawCallback = () => {
    if (balance - 60000 > 0) { setBalance(balance - 60000) } else { setBalance(0) } // Will be the amount in production
    dispatchView({ type: "change_view", current_view: "overview" })
  }
  return (
    <Grid
      placeItems="center"
      padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
    >
      <PaymentConfirmModal isPaymentModalOpen={isPaymentModalOpen} onPaymentModalClose={onPaymentModalClose} callback={withdrawCallback} />
      <Box w="100%">
        <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_view", current_view: views.initial_view }) }} />
      </Box>
      <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
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
  )
}

export default Index