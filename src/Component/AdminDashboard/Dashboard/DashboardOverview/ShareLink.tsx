import {
  Box, Button, Text, useMediaQuery
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { copyTextToClipboard } from '../../../../lib/utilities';

function ShareLink(): JSX.Element {
  const [isSmallerScreen] = useMediaQuery("(max-width: 480px)");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const url = " https://onboard.sendrail.com/dummyco";
  const handleCopy = () => {
    copyTextToClipboard(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Box
      w="100%"
      border=" 1px solid #ABA7A7"
      height="auto"
      padding={isSmallerScreen ? "14px" : "22px"}
      borderRadius="9px"
    >
      <Text fontSize="17px" fontWeight="600">
        Share Link
      </Text>
      <Text fontSize={isSmallerScreen ? "14px" : "16px"} my={isSmallerScreen ? "6px" : "16px"}>
        Share your logistic imbedded link for customers to be able to
        onboard directly from you.
      </Text>
      <Text
        width="100%"
        fontWeight="700"
        fontSize={isSmallerScreen ? "13px" : "20px"}
        color="#F9C567"
        bg="rgba(7, 5, 41, 0.07)"
        padding="8px"
        mt={isSmallerScreen ? "0px" : "15px"}
        textAlign="center"
      >
        {url}
      </Text>
      <Button
        width="74px"
        height="34px"
        fontSize="12px"
        fontWeight="500"
        color="#fff"
        lineHeight="20px"
        padding="7px 21px"
        bg="#070529"
        mt="14px"
        transition="0.1s"
        onClick={handleCopy}

        _hover={{
          boxShadow: "0px 2px 2px 0px #070529a0"
        }}
      >
        {isCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  )
}

export default ShareLink
