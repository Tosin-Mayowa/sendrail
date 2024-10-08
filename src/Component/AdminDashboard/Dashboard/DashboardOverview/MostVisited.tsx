import {
 Box, Progress, Text, useMediaQuery 
} from '@chakra-ui/react'
import React, { useState } from 'react'

function MostVisited(): JSX.Element {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  const [locations] = useState<any>([
    {
      location: "Ikorodu",
      freq: 92
    },
    {
      location: "Oshodi",
      freq: 80
    },
    {
      location: "Island",
      freq: 79
    },
  ])
  return (
    <Box
      width={isSmallerThan480 ? "100%" : "50%"}
      border="1px solid #ABA7A7"
      borderRadius="9px"
      p="20px"

      style={{
        aspectRatio: "5/4",
      }}
    >
      <Text
        color="#000"
        fontWeight="600"
        fontSize="18px"
        lineHeight="13px"
      >
        Most visited locations
      </Text>
      {
        locations?.map((item) => (
          <Box key={item.location}>
            <Box
              mt="40px"
              display="flex"
              justifyContent="space-between"
              pb="20px"
            >
              <Text
                color="#000"
                fontWeight="500"
                fontSize="16px"
                lineHeight="14px"
              >
                {item.location}
              </Text>
              <Text
                color="#000"
                fontWeight="500"
                fontSize="16px"
                lineHeight="14px"
              >
                {item.freq}%
              </Text>
            </Box>
            <Progress value={item.freq} size='xs' colorScheme="green" />
          </Box>
        ))
      }
    </Box>
  )
}

export default MostVisited