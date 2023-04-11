import { Flex, Box, Input, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AccountModal from './AccountModal'
import Nodata from '../../../Asset/Settings/nodata.png';
import SuccessModal from "../SuccessModal/SuccessModal"
const BankInfo = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [bankName,setBankName]=useState<string>('');
  const [acctNum, setAcctNum] = useState<string>('')
  const [bvn, setBvn] = useState<string>('')
  return (
    <>
      <Flex flexDir="column">
        <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
          Bank Information
        </Text>
        <Box
        mt="3rem"
          padding="64px 16px"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          width="66.9rem"
          height="20.625rem"
          bg="rgba(7, 5, 41, 0.07)"
          borderRadius="20px">
          <Text
            textAlign="center"
            fontWeight="500"
            fontSize="18px"
            lineHeight="22px"
            color="#1F1F1F">
            {isEdit?"Account Details":"Add Account"}
          </Text>
          <Flex flexDir="column" width="64.9rem" height="9.25rem" justifyContent="space-between">
            <Flex width="64.9rem" justifyContent="space-between">
              <Flex width="20.3rem" flexDir="column">
                <Text color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Bank Account
                </Text>

                <Input
                  value={isEdit ? 'Wema Bank' : bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  padding="15px 12px 15px 10px"
                  height="3.25rem"
                  background="#FFFFFF"
                  borderRadius="4px"
                />
              </Flex>

              <Flex width="20.3rem" flexDir="column">
                <Text color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Account Number
                </Text>

                <Input
                  value={isEdit ? '0009234567' : acctNum}
                  onChange={(e) => setAcctNum(e.target.value)}
                  padding="15px 12px 15px 10px"
                  height="3.25rem"
                  background="#FFFFFF"
                  borderRadius="4px"
                />
              </Flex>

              <Flex width="20.3rem" flexDir="column">
                <Text color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Bvn
                </Text>

                <Input
                  value={isEdit ? '203****453' : bvn}
                  onChange={(e) => setBvn(e.target.value)}
                  padding="15px 12px 15px 10px"
                  height="3.25rem"
                  background="#FFFFFF"
                  borderRadius="4px"
                />
              </Flex>
            </Flex>
            <Flex alignSelf="flex-end">
              {isEdit ? (
                <Button
                  lineHeight="22px"
                  fontWeight="500"
                  fontSize="14px"
                  color="#595956"
                  padding="8px 24px"
                  flexShrink="0"
                  width="10.2rem"
                  height="2.375rem"
                  background="rgba(6, 0, 137, 0.15)"
                  borderRadius="8px "
                  isDisabled={true}>
                  Done
                </Button>
              ) : (
               <SuccessModal/>
              )}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default BankInfo
