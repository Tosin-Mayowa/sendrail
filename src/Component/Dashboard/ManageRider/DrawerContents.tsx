import { Text, Image, Flex, Box } from '@chakra-ui/react';
import React from 'react';
export const DrawerContents=()=>{

    return (
      <>
        {/* main box */}
        <Flex flexDir="column" width="100%">
          {/* content head */}
          <Flex width="100%" height="4.1875rem" background="rgba(7, 5, 41, 0.07)">
            <Flex>
              <Flex></Flex>
              <Flex></Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
          {/*end content head */}

          {/* content measure dist */}
          <Flex></Flex>
          {/*end content measure dist */}

          {/* content status */}
          <Flex></Flex>
          {/*end content status */}

          {/* content movement */}
          <Flex></Flex>
          {/*end content movement */}
        </Flex>
        {/* end main box */}
      </>
    )
}