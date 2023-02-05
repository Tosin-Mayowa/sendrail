
import React from "react";
import {
  Flex,
  GridItem,
  Image,
  useTheme,
  Text,
  Box,
  useMediaQuery,

} from "@chakra-ui/react";

interface Props {
  card: {
    title: string,
    count: number,
    url: string
  }
}
const Dashcard: React.FC<Props> = ({ card }: Props) => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 480px)");
  const theme = useTheme();
  return (
    <GridItem
      w="100%"
      bg={theme.colors.primary.main}
      borderRadius="5px"
      cursor="pointer"
    >
      <Flex
        justifyContent="space-between"
        p="10px"
        alignItems="center"
        px={!isSmallerScreen ? "20px" : ""}
      >
        <Box
          my="8px"
          fontSize={isSmallerScreen ? "18" : "21px"}
        >
          <Text lineHeight="26px" fontWeight="500" color="#fff">
            {card?.title}
          </Text>
          <Text
            my="13px"
            fontWeight="600"
            color="#fff"
          >
            {card?.count}
          </Text>
        </Box>
        <Box
          borderRadius="50%"
          padding="12px"
          width={isSmallerScreen ? "44px" : "56px"}
          height={isSmallerScreen ? "44px" : "56px"}
          bg="#fff"
        >
          <Image src={card?.url} alt="Order" />
        </Box>
      </Flex>
    </GridItem>
  );
}

export default Dashcard;