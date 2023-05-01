import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,Text
} from '@chakra-ui/react';
import React,{useState} from 'react';

const ResetPasswordModal=()=>{
 const { isOpen, onOpen, onClose } = useDisclosure();
 const [emailSuccess,setEmailSuccess]=useState<boolean>(false);
 const [otpSuccess,setOtpSuccess]=useState<boolean>(false);
 return (
   <>
     <Button
       variant="link"
       alignSelf="center"
       color="#F9AB21"
       fontWeight="500"
       fontSize="18px"
       lineHeight="22px"
       onClick={onOpen}
       _hover={{
         color :'#F9AB21',
         textDecoration: 'none'
       }}>
       Reset Password
     </Button>

     {!emailSuccess?<Modal isOpen={isOpen} onClose={onClose} isCentered>
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Modal Title</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
           <Text>Hello</Text>
         </ModalBody>

         <ModalFooter>
           <Button colorScheme="blue" mr={3} onClick={onClose}>
             Close
           </Button>
           <Button variant="ghost">Secondary Action</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>:!otpSuccess?<Modal isOpen={isOpen} onClose={onClose} isCentered>
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Modal Title</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
           <Text>Hello</Text>
         </ModalBody>

         <ModalFooter>
           <Button colorScheme="blue" mr={3} onClick={onClose}>
             Close
           </Button>
           <Button variant="ghost">Secondary Action</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>:<Modal isOpen={isOpen} onClose={onClose} isCentered>
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Modal Title</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
           <Text>new password</Text>
         </ModalBody>

         <ModalFooter>
           <Button colorScheme="blue" mr={3} onClick={onClose}>
             Close
           </Button>
           <Button variant="ghost">Secondary Action</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>}
   </>
 )
}

export default ResetPasswordModal;

