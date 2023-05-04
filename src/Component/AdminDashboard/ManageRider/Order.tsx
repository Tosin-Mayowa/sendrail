import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Flex,
  Box,
  Button,Text
} from '@chakra-ui/react'
import { DrawerContents } from './DrawerContents';
import {DrawerHead} from './DrawerHead'
import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
export default function Order({ item,phn,msg }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button
        ref={btnRef}
        variant="link"
        height="3.0625rem"
        borderRadius="10px 10px 0px 0px"
        fontSize="14px"
        color="text.300"
        lineHeight="17px"
        _hover={{
          textDecoration: 'none'
        }}
        onClick={onOpen}>
        Assign to order
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <Flex flexDir="column" height="87.875rem" overflow="scroll">
            <Flex flexDir="column">
              <DrawerHead item={item} phn={phn} msg={msg} onClose={onClose} />
            </Flex>

            <Flex flexDir="column" height="72.25rem">
              <DrawerContents />
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}