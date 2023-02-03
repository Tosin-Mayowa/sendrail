
import React from "react";
import {
  Flex,
  GridItem,
  Image,
  useTheme,
  Text,
  Box,

} from "@chakra-ui/react";


const Dashcard = ({ card }) => {
  const theme = useTheme();
  return (
    <GridItem
      w="100%"
      height="112px"
      bg={theme.colors.primary.main}
      borderRadius="5px"
      cursor="pointer"
    >
      <Flex justifyContent="space-around">
        <Box mt="17px">
          <Text fontSize="21px" lineHeight="26px" fontWeight="500" color="#fff">
            {card?.title}
          </Text>
          <Text
            mt="25px"
            fontSize="21px"
            lineHeight="26px"
            fontWeight="600"
            color="#fff"
          >
            {card?.count}
          </Text>
        </Box>
        <Box
          borderRadius="50%"
          padding="12px"
          my="28px"
          width="56px"
          height="56px"
          bg="#fff"
        >
          <Image src={card?.url} alt="Order" />
        </Box>
      </Flex>
    </GridItem>
  );
}

export default Dashcard;