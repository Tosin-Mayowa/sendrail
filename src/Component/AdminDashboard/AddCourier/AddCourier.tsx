import {
  Flex,
  Box,
  Text,
  Input,
  Image,
Select,Button
} from '@chakra-ui/react'
import React,{useState} from 'react'
import CourierDocs from '../CourierDocs/CourierDocs'
import GuarantorInfo from '../CouriersGuarantor/GuarantorInfo'
import './Courier.css'
import Back from '../../../Asset/Settings/back.png'

import Bus from '../../../Asset/Rider/bus.png'
import Bicycle from '../../../Asset/Rider/bicycle.png'
import Car from '../../../Asset/Rider/car.png'
import Bike from '../../../Asset/Rider/bike.png'


const AddCourier = () => {
  const [isDocs,setIsDocs]=useState<boolean>(false);
  const [isGuarantor, setIsGuarantor] = useState<boolean>(false);
  return (
    <Flex flexDir="column">
      {/* Back icon */}
      {isDocs || isGuarantor ? (
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
      {!isDocs ? (
        <Box
          mt={isDocs || isGuarantor || !isGuarantor ? '28px' : '15px'}
          width="58.9375rem"
          display="flex"
          alignSelf="center"
          flexDirection="column"
          justifyContent="center"
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
            height="75.4375rem">
            {/* start headerg */}
            <Flex flexDir="column">
              <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                Personal Information
              </Text>
              <Box className="Wrapper">
                <Input type="file" className="my_upload" />
              </Box>
            </Flex>
            {/* end header */}

            {/* input flex */}
            <Flex flexDir="column" width="47.9375rem" height="54rem" justifyContent="space-between">
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
                    Industry
                  </Text>
                  <Select
                    placeholder="Select an industry"
                    mt="4px"
                    width="100%"
                    height="3.5rem"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize={{ base: '10px', md: '12px', lg: '18px' }}
                    lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                    bg="#fff"
                    color="#000000"
                    focusBorderColor="primary.main">
                    <option value="individual">Individual</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
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
                    placeholder="Enter phone number "
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
                    placeholder="Enter email"
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
                    placeholder="Enter date of birth"
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
                    placeholder="Enter gender"
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
                    placeholder="Enter address"
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
                    placeholder="Enter a city"
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
                    placeholder="Enter a state"
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
                    placeholder="Enter a country"
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
              {/* end 6th */}

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
            </Flex>
            {/* end input flex */}

            <Flex
              width="16.75rem"
              height="5.375rem"
              flexDirection="column"
              justifyContent="space-between">
              <Text color="text.50" fontWeight="500" fontSize="18px" lineHeight="22px">
                Transportation type
              </Text>
              <Flex width="100%" justifyContent="space-between">
                <Image src={Bike} alt="Bike" width="32px" height="18.67px" />
                <Image src={Bus} alt="Bus" width="26.67px" height="25.34px" />
                <Image src={Car} alt="Car" width="28px" height="20px" />
                <Image src={Bicycle} alt="Bicycle" width="26.67px" height="24px" />
              </Flex>
            </Flex>
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
            onClick={() => setIsDocs(true)}
            _hover={{
              background: 'primary.main'
            }}>
            {'>'}
          </Button>
        </Box>
      ) : !isGuarantor ? (
        <CourierDocs setIsDocs={setIsDocs} setIsGuarantor={setIsGuarantor} />
      ) : (
        <GuarantorInfo setIsGuarantor={setIsGuarantor} />
      )}
      {/* end container */}
      {isGuarantor ? (
        <Flex flexDir="column" mt="3rem" width="11.0625rem" height="9.875rem" justifyContent="space-between">
          <Button
            fontSize="calc(0.625rem + 0.41667vw)"
            width="8.625rem"
            height="3.375rem"
            color="#fff"
            background="rgba(6, 0, 137, 0.15)"
            borderRadius="8px"
            padding="1rem 2rem"
            onClick={() => setIsDocs(true)}
            textAlign="center"
            _hover={{
              background: 'rgba(6, 0, 137, 0.15)'
            }}>
            Save rider
          </Button>
          <Button
            fontSize="calc(0.75rem + 0.41667vw)"
            border="1px solid #ABA7A7"
            width="11.0625rem"
            height="3.5rem"
            color="#000"
            background="#fff"
            borderRadius="8px"
            padding="1rem 2rem"
            onClick={() => setIsDocs(true)}
            _hover={{
              background: '#fff'
            }}>
            Copy link
          </Button>
        </Flex>
      ) : (
        ''
      )}
    </Flex>
  )
}

export default AddCourier;
