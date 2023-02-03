import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { copyTextToClipboard } from '../../../lib/utilities';

const ShareLink: React.FC = () => {
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
            border=" 1px solid #ABA7A7"
            height="206px"
            padding="22px"
            borderRadius="9px"
        >
            <Text fontSize="17px" fontWeight="600">
                Share Link
            </Text>
            <Text fontSize="16px" my="16px">
                Share your logistic imbedded link for customers to be able to
                onboard directly from you.
            </Text>
            <Box
                width="100%"
                fontWeight="700"
                fontSize="20px"
                height="41px"
                color="#F9C567"
                bg="rgba(7, 5, 41, 0.07)"
                padding="8px 130px"
                mt="15px"
            >
                {url}
            </Box>
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