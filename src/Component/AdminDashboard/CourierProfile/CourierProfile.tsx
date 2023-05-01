




import { Flex, Box, Text, Input, Image, Select, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import CourierDocs from '../CourierDocs/CourierDocs'
import GuarantorInfo from '../CouriersGuarantor/GuarantorInfo'
import '../AddCourier/Courier.css'
import Back from '../../../Asset/Settings/back.png'

import Bus from '../../../Asset/Rider/bus.png'
import Bicycle from '../../../Asset/Rider/bicycle.png'
import Car from '../../../Asset/Rider/car.png'
import Bike from '../../../Asset/Rider/bike.png'
import Bike2 from '../../../Asset/Rider/pfrider.png'

const CourierProfile = () => {
  const [isDocsProfile, setIsDocsProfile] = useState<boolean>(false)
  const [isGuarantorP, setIsGuarantorP] = useState<boolean>(false)
  const profile=true;
  return (
    <Flex flexDir="column">
      {/* Back icon */}
      {isDocsProfile || isGuarantorP ? (
        <Flex
          flexDir="column"
          alignItems="flex-start"
          justifySelf="flex-start"
          justifyContent="space-between"
          width="14.0625rem"
          height="6.3125rem">
          <Image
            cursor="pointer"
            //   onClick={() => {
            //     setSecurity(true)
            //     setShowPass(false)
            //   }}
            src={Back}
            alt=""
            width="40px"
            height="40px"
            objectFit="cover"
          />
        </Flex>
      ) : (
        ''
      )}
      {/* end back icon */}
      {/* Container */}
      {!isDocsProfile ? (
        <Box
          mt={isDocsProfile || isGuarantorP || !isGuarantorP ? '28px' : '15px'}
          width="58.9375rem"
          height="78.6875rem"
          display="flex"
          alignSelf="center"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
          padding="3rem 5.5rem"
          boxSizing="border-box"
          background="rgba(7, 5, 41, 0.07)"
          borderRadius="20px">
          {/* inner flex */}
          <Flex
            flexDir="column"
             justifyContent="space-between"
            width="47.9375rem"
            height="66.9375rem">
            {/* start headerg */}
            <Flex flexDir="column">
              <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                Personal Information
              </Text>
              <Flex width="47.9375rem" justifyContent="space-between" alignItems="flex-start">
              <Box className="Wrapper">
                <Input type="file" className="my_upload" />
              </Box>
             <Image src={Bike2} alignSelf="flex-end" alt="" width="56px" height="56px" objectFit="cover" />
              </Flex>
            </Flex>
            {/* end header */}

            {/* input flex */}
            <Flex  flexDir="column" width="47.9375rem" height="54rem" justifyContent="space-between">
              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Name
                  </Text>
                  <Input
                    placeholder="Enter full name"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    focusBorderColor="primary.main"
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                   Type
                  </Text>
                   <Input
                    mt="4px"
                    padding="0px 12px"
                    placeholder="Rider"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
              </Flex>
              {/* end 1st  */}
              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Phone Number
                  </Text>
                  <Input
                    mt="4px"
                    padding="0px 12px"
                    placeholder="08082766754"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Email Address
                  </Text>
                  <Input
                    mt="4px"
                    placeholder="toui@gmail.com"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
              </Flex>
              {/* end 2nd */}
              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Date of birth
                  </Text>
                  <Input
                    mt="4px"
                    placeholder="20-10-1999"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    padding="0px 12px"
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Gender
                  </Text>
                  <Input
                    mt="4px"
                    placeholder="Male"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
              </Flex>
              {/* end 3rd */}

              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Residential Address
                  </Text>
                  <Input
                    placeholder="Owode, 12 adeniyi street"
                    mt="4px"
                    padding="0px 12px "
                    _placeholder={{
                      color: 'text.100'
                    }}
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    City
                  </Text>
                  <Input
                    mt="4px"
                    placeholder="Ikeja"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
              </Flex>
              {/* end 4th */}

              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    State
                  </Text>
                  <Input
                    placeholder="Lagos"
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Country
                  </Text>
                  <Input
                    placeholder="Nigeria"
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
              </Flex>

              {/* end 5th */}


              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Username
                  </Text>
                  <Input
                    placeholder="Enter a username"
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Account password
                  </Text>
                  <Input
                    placeholder="**********"
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    focusBorderColor="primary.main"
                  />
                </Flex>
              </Flex>
              {/* end of 6th */}

              <Flex width="100%" justifyContent="space-between">
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Account number
                  </Text>
                  <Input
                    placeholder="Enter an account number"
                    mt="4px"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
                <Flex flexDir="column" width="20.625rem" height="5.125rem">
                  <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                    Bank account
                  </Text>
                  <Input
                    mt="4px"
                    placeholder="Enter a bank"
                    padding="0px 12px "
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    color="text.100"
                    focusBorderColor="primary.main"
                    _placeholder={{
                      color: 'text.100'
                    }}
                  />
                </Flex>
              </Flex>
              {/* end 7th */}

              
            </Flex>
            {/* end input flex */}

            
          </Flex>
          {/* end inner flex */}
          <Button
     
            alignSelf="flex-end"
            width="2.75rem"
            height="2.75rem"
            color="#fff"
            background="primary.main"
            borderRadius="4px"
            padding="0.625rem"
            onClick={() => setIsDocsProfile(true)}
            _hover={{
              background: 'primary.main'
            }}>
            {'>'}
          </Button>
        </Box>
      ) : !isGuarantorP ? (
        <CourierDocs setIsDocsProfile={setIsDocsProfile} profile={profile} setIsGuarantorP={setIsGuarantorP} />
      ) : (
        <GuarantorInfo setIsGuarantorP={setIsGuarantorP} profile={profile} />
      )}
      {/* end container */}
     
    </Flex>
  )
}

export default CourierProfile
