import {
  Flex,
  Image,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Select,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import withLayout from '../../../wrapper/withLayout';
import RecievedImg from '../../../Asset/Transactions/received.png';
import SentImg from '../../../Asset/Transactions/sent.png';
import TransModal from './TransModal';
import nhistory from '../../../Asset/Transactions/nhistory.png';
import {currencyFormatter} from '../../../lib/utilities'
const transactions = [
  {
    id: 1,
    title: 'Money Received',
    status: 'successful',
    date: 'January 1 8am',
    amount: '5000',
    bankName: 'First Bank',
    bankAccount: '8979903452',
    salaryID: '000000344009988',
    messageType: 'salary fee',
    transNum: 'MBO1689K15P23G',
    name: 'Micheal sule',
    charges:'0'
  },
  {
    id: 2,
    title: 'Money Sent',
    status: 'successful',
    date: 'January 1 8am',
    amount: '5000',
    bankName: 'First Bank',
    bankAccount: '8979903452',
    salaryID: '000000344009988',
    messageType: 'salary fee',
    transNum: 'MYT009988776',
    name: 'Micheal sule',
    charges:'30'
  },
  {
    id: 3,
    title: 'Money Sent',
    status: 'successful',
    date: 'January 1 8am',
    amount: '5000',
    bankName: 'First Bank',
    bankAccount: '8979903452',
    salaryID: '000000344009988',
    messageType: 'salary fee',
    transNum: 'RTY009988776',
       name:'Micheal sule',
       charges:'25'
  }
]

const options = ['all', 'last week']
const Transactions = () => {
  if(transactions.length===0){
    return (
      <Flex flexDir="column" width="100%">
        <Text mt="32px" fontWeight="600" fontSize="24px" lineHeight="29px" color="#000000">
          Transaction History
        </Text>
        <Flex mt="120px" justifyContent="center">
          <Image src={nhistory} alt="" width='349px' height='459px' />
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex flexDir="column" width="100%">
      <Flex flexDir="column" ml="48px">
        <Text mt="32px" fontWeight="600" fontSize="24px" lineHeight="29px" color="#000000">
          Transaction History
        </Text>

        <Text mt="32px" fontWeight="500" fontSize="20px" lineHeight="22px" color="#ABA7A7">
          January,2023
        </Text>
      </Flex>
      <Box display="flex" mt="70px" width="100%">
        <Box
          display="flex"
          ml="140px"
          justifyContent="flex-end"
          width="100%"
          height="32px"
          alignItems="baseline">
          <InputGroup width="19%">
            <Input
              boxShadow="0px 4px 20px rgba(6, 0, 137, 0.1)"
              backgroundColor="#fff"
              width="200px"
              fontWeight="500"
              fontSize="14px"
              lineHeight="22px"
              placeholder="Search by date"
            />
            <InputRightElement children={<SearchIcon color="gray.300" />} />
          </InputGroup>
          <Flex width="29%" height="32px" alignItems="baseline">
            <Text ml="20px" color="#595956" fontWeight="500" fontSize="14px" lineHeight="22px">
              Sort by:
            </Text>
            <Select
              color="#000"
              fontWeight="500"
              fontSize="14px"
              lineHeight="22px"
              ml="10px"
              textTransform="capitalize"
              width="157px"
              height="32px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px">
              {options?.map((optn, index) => (
                <option key={index} value={optn}>
                  {optn}
                </option>
              ))}
            </Select>
          </Flex>
        </Box>
      </Box>
      <Flex flexDir="column" mt="29px">
        {transactions?.map((transaction) => (
          <Box
            display="flex"
            justifyContent="space-between"
            mt={Number(transaction?.id) > 1 ? '8px' : ''}
            ml="48px"
            padding="16px 42px"
            width="93%"
            height="94px"
            background="rgba(7, 5, 41, 0.07)"
            opacity="0.9"
            borderRadius="10px"
            key={transaction?.id}>
            <Flex>
              <Image
                src={transaction?.title === 'Money Sent' ? SentImg : RecievedImg}
                alt=""
                width="48px"
                height="48px"
                mt="7px"
              />
              <Flex flexDir="column" ml="16px">
                <Text color="#1F1F1F" fontWeight="600" fontSize="18px" lineHeight="29px">
                  {transaction.title}
                </Text>
                <Text color="#1F1F1F" mt="4px" fontWeight="500" fontSize="16px" lineHeight="29px">
                  {transaction?.date}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex flexDir="column">
                <Flex>
                  <Text fontSize="18px" fontWeight="700" lineHeight="29px">
                    {transaction?.title === 'Money Sent' ? '-':'+'}
                  </Text>
                  <Text mt="3px" ml="3px" color="#1F1F1F" 
                  fontWeight="600" fontSize="18px" lineHeight="29px">
                    {currencyFormatter(transaction?.amount)}
                  </Text>
                </Flex>
                <Text color="#000" ml={transaction?.title === 'Money Sent'?"11px":"14px"} fontWeight="500" fontSize="16px" lineHeight="29px">
                  {transaction.status}
                </Text>
              </Flex>
              <TransModal transaction={transaction} />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default withLayout(Transactions)
