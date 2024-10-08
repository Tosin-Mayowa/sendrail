import React from 'react'
import {
  Modal,
  Center,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  Flex,Badge,
  ModalFooter,
  Image,
  Box,
  ModalBody,
  ModalCloseButton,
  Button,
 
  useDisclosure
} from '@chakra-ui/react'
import RecievedImg from '../../../Asset/Transactions/received.png'
import SentImg from '../../../Asset/Transactions/sent.png'
import { MoneyReceived, MoneySent, currencyFormatter } from '../../../lib/utilities'
export default function TransModal({ transaction }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        color="#F9C567"
        mt="0px"
        ml="10px"
        fontWeight="600"
        fontSize="16px"
        lineHeight="29px"
        _hover={{
          textDecoration: 'none'
        }}>
        View
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Flex
                flexDir="column"
                alignItems="flex-start"
                justifyContent="space-between"
                width="30.5rem"
                height={transaction.title === 'Money Sent' ? "27.75rem":"25.375rem"}>
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  lineHeight="24px"
                  alignSelf="center"
                  color="#333344">
                  Transaction Details
                </Text>
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  height={transaction.title === 'Money Sent' ? '24.25rem' : '21.875rem'}>
                  <Flex justifyContent="space-between">
                    <Flex
                      width={transaction.title === 'Money Sent' ? '8rem' : '9.875rem'}
                      justifyContent="space-between">
                      <Image
                        src={transaction.title === 'Money Sent' ? SentImg : RecievedImg}
                        alt=""
                        width="32px"
                        height="32px"
                        objectFit="cover"
                      />
                      <Text
                        alignSelf="center"
                        flexShrink="0"
                        fontWeight="500"
                        fontSize="16px"
                        lineHeight="20px"
                        color="#070529">
                        {transaction.title}
                      </Text>
                    </Flex>
                    <Text
                      alignSelf="center"
                      flexShrink="0"
                      fontWeight="700"
                      fontSize="18px"
                      lineHeight="29px"
                      color="#01001B">
                      {transaction.date}
                    </Text>
                  </Flex>
                  <Box
                    width="30.5rem"
                    px="30.5px"
                    height={transaction.title === 'Money Sent' ? '20.25rem' : '17.875rem'}
                    bg="rgba(7, 5, 41, 0.07)"
                    borderRadius="10px">
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="10px 0px 10px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        colorScheme="rgba(0, 163, 65, 0.05)"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.STATUS
                          : MoneyReceived?.STATUS}
                      </Text>
                      <Badge
                        padding="4px 12px"
                        borderRadius="4px"
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#00A341">
                        {transaction.status}
                      </Badge>
                    </Box>
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.SENDER
                          : MoneyReceived?.SENDER}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {transaction?.name}
                      </Text>
                    </Box>

                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.BANKNAME
                          : MoneyReceived?.BANKNAME}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {transaction?.bankName}
                      </Text>
                    </Box>
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.ACCOUNTNUM
                          : MoneyReceived?.ACCOUNTNUM}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {transaction?.bankAccount}
                      </Text>
                    </Box>
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.AMOUNT
                          : MoneyReceived?.AMOUNT}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {currencyFormatter(transaction?.amount)}
                      </Text>
                    </Box>
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom="1px dashed #A0A0AA">
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.MESSAGETYPE
                          : MoneyReceived?.MESSAGETYPE}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {transaction?.messageType}
                      </Text>
                    </Box>
                    <Box
                      width="26.625rem"
                      display="flex"
                      justifyContent="space-between"
                      padding="12px 0px 12px 0px"
                      borderBottom={
                        transaction.title === 'Money Sent' ? '1px dashed #A0A0AA' : 'none'
                      }>
                      <Text
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#01001B">
                        {transaction.title === 'Money Sent'
                          ? MoneySent?.TRANSACTIONID
                          : MoneyReceived?.TRANSACTIONID}
                      </Text>
                      <Text
                        fontWeight="450"
                        fontSize="14px"
                        lineHeight="14px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#656566">
                        {transaction?.transNum}
                      </Text>
                    </Box>

                    {transaction.title === 'Money Sent' ? (
                      <Box
                        width="26.625rem"
                        display="flex"
                        justifyContent="space-between"
                        padding="12px 0px 12px 0px">
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          color="#01001B">
                          {MoneySent?.CHARGES}
                        </Text>
                        <Text
                          fontWeight="450"
                          fontSize="14px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          color="#656566">
                          {currencyFormatter(transaction?.charges)}
                        </Text>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Box>
                </Flex>
              </Flex>
            </Center>

            {/* <Center>
              <Box mt="30px" width="88%">
                <Box
                  width="100%"
                  display="flex"
                  alignItems="baseline"
                  justifyContent="space-between">
                  <Box
                    width="44%"
                    height="87px"
                    background="#FFFFFF"
                    boxShadow="0px 8px 40px rgba(6, 0, 137, 0.1)"
                    borderRadius="9px">
                    <Text
                      mt="18px"
                      fontWeight="450"
                      fontSize="14px"
                      lineHeight="14px"
                      textAlign="center"
                      textTransform="capitalize"
                      color="#656566">
                      
                    </Text>
                    <Text
                      mt="8px"
                      fontWeight="700"
                      fontSize="18px"
                      lineHeight="29px"
                      textAlign="center"
                      color="#01001B">
                     
                    </Text>
                  </Box>
                  <Box
                    width="44%"
                    height="87px"
                    background="#FFFFFF"
                    boxShadow="0px 8px 40px rgba(6, 0, 137, 0.1)"
                    borderRadius="9px">
                    <Text
                      mt="18px"
                      fontWeight="450"
                      fontSize="14px"
                      lineHeight="14px"
                      textAlign="center"
                      textTransform="capitalize"
                      color="#656566">
                      Date
                    </Text>
                    <Text
                      mt="8px"
                      fontWeight="700"
                      fontSize="18px"
                      lineHeight="29px"
                      textAlign="center"
                      color="#01001B">
                      {transaction.date}
                    </Text>
                  </Box>
                </Box>
                <Flex justifyContent="center" alignItems="center" mt="40px">
                  <Image
                    src={transaction.title === 'Money Sent' ? SentImg : RecievedImg}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <Text
                    ml="7px"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="20px"
                    textAlign="center"
                    color="#070529">
                    {transaction.title}
                  </Text>
                </Flex>
                <Center>
                  <Box
                    mt="40px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    padding="18px 32px"
                    width="74%"
                    height={transaction.title === 'Money Sent'?"286px":"248px"}
                    border="1px dashed #A0A0AA"
                    borderRadius="8px">
                    <Box width="100%" display="flex" flexDir="column">
                      <Box
                        width="89%"
                        display="flex"
                        ml="20px"
                        justifyContent="space-between"
                        padding="12px 0px 12px 0px"
                        borderBottom="1px dashed #A0A0AA">
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          colorScheme="rgba(0, 163, 65, 0.05)"
                          color="#01001B">
                          {transaction.title === 'Money Sent'
                            ? MoneySent?.STATUS
                            : MoneyReceived?.STATUS}
                        </Text>
                        <Badge
                          padding="4px 12px"
                          borderRadius="4px"
                          fontWeight="450"
                          fontSize="12px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          color="#00A341">
                          {transaction.status}
                        </Badge>
                      </Box>
                     

                     
                      <Box
                        width="89%"
                        ml="20px"
                        display="flex"
                        justifyContent="space-between"
                        padding="12px 0px 12px 0px"
                        borderBottom="1px dashed #A0A0AA">
                        <Text
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          color="#01001B">
                          {transaction.title === 'Money Sent'
                            ? MoneySent?.AMOUNT
                            : MoneyReceived?.AMOUNT}
                        </Text>
                        <Text
                          fontWeight="450"
                          fontSize="14px"
                          lineHeight="14px"
                          textAlign="center"
                          textTransform="capitalize"
                          color="#656566">
                          {currencyFormatter(transaction?.amount)}
                        </Text>
                      </Box>
                  
                      {transaction.title === 'Money Sent' ? (
                        <Box
                          width="89%"
                          ml="20px"
                          display="flex"
                          justifyContent="space-between"
                          padding="12px 0px 12px 0px">
                          <Text
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="14px"
                            textAlign="center"
                            textTransform="capitalize"
                            color="#01001B">
                            {MoneySent?.CHARGES}
                          </Text>
                          <Text
                            fontWeight="450"
                            fontSize="14px"
                            lineHeight="14px"
                            textAlign="center"
                            textTransform="capitalize"
                            color="#656566">
                            {currencyFormatter(transaction?.charges)}
                          </Text>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </Box>
                </Center>
              </Box>
            </Center> */}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
