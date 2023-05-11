import { Text, Image, Flex, Box, Highlight,Button } from '@chakra-ui/react'
import React from 'react'
type Props = {
  srcs?: any
  boxH?: any
  width?: any
  lineHeight?:any
}
export const Line=({srcs,boxH,width,lineHeight}:Props)=>{

    return (
      <Box width={width} height={boxH} className="Box">
        {srcs?.map((src, indx) => (
          <Image
            key={indx}
            src={src}
            alt=""
            objectFit="cover"
            width={width}
            height={width}
            zIndex="2"
          />
        ))}

        <Box className="Inner" height={lineHeight}></Box>
      </Box>
    )
}
