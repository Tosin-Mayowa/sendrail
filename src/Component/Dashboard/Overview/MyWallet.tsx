import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Wallet from "../../../Asset/Logos/Onboarding/wallet.png";

function MyWallet(): JSX.Element {
  return (
    <Box
      width="50%"
      border="1px solid #ABA7A7"
      borderRadius="9px"
      backgroundImage={`url(${Wallet})`}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      style={{
        aspectRatio: "5/4",
      }}>
      <Center>
        <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
          <Text my="18px" fontWeight="600" fontSize="20px">
            My Wallet
          </Text>
          <Text my="12px" fontWeight="500" fontSize="16px">
            Available Balance
          </Text>
          <Text my="16px" fontWeight="500" fontSize="28px">
            N250.000
          </Text>
          <Flex w="100%" justifyContent="space-around" fontSize="14px" fontWeight="500" mt="10px">
            <Button
              padding="8px 24px"
              background="rgba(7, 5, 41, 0.9)"
              borderRadius="8px"
              color="#fff"
              _hover={{
                boxShadow: "0px 2px 2px 0px #070529a0",
              }}>
              Deposit
            </Button>
            <Button
              padding="8px 24px"
              background="rgba(7, 5, 41, 0.9)"
              borderRadius="8px"
              color="#fff"
              _hover={{
                boxShadow: "0px 2px 2px 0px #070529a0",
              }}>
              Withdraw
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default MyWallet;
