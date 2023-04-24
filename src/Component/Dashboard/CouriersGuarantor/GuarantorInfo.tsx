import { Flex, Box, Text, Input, Image, Select, Button } from '@chakra-ui/react'
import React from 'react'
 type Props = {
   setIsGuarantorP?: React.Dispatch<React.SetStateAction<boolean>>
   setIsGuarantor?: React.Dispatch<React.SetStateAction<boolean>>
   profile?: boolean
 }
const GuarantorInfo = ({ setIsGuarantor, setIsGuarantorP, profile }: Props) => {
  return (
    <>
      <Box
        mt="48px"
        width="60.5625rem"
        height="81.625rem"
        display="flex"
        alignSelf="center"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        padding="3rem 5.5rem"
        boxSizing="border-box"
        background="rgba(7, 5, 41, 0.07)"
        borderRadius="20px">
        <Flex flexDir="column" justifyContent="space-between" width="47.9375rem" height="69.875rem">
          <Flex flexDir="column" justifyContent="space-between" width="100%" height="33.4375rem">
            {/* header-1 */}
            <Flex flexDir="column" height="10.0625rem">
              <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                Personal Information
              </Text>
              <Box className="Wrapper">
                <Input type="file" className="my_upload" />
              </Box>
            </Flex>
            {/* input flex-1 */}
            <Flex width="100%" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  Name
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter full name "
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
                  Phone Number
                </Text>
                <Input
                  mt="4px"
                  placeholder="Enter phone number"
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
            {/* end inpt 1 */}
            <Flex width="100%" height="5.125rem" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  Residential Address
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter an address"
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
                  {' '}
                  City
                </Text>
                <Input
                  mt="4px"
                  placeholder="Enter a city"
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
            {/* end ipt 2 */}
            <Flex width="100%" height="5.125rem" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  State
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter a state"
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
                  Country
                </Text>
                <Input
                  mt="4px"
                  placeholder="Nigeria"
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
            {/* end inpt 3 */}
          </Flex>

          <Flex flexDir="column" justifyContent="space-between" width="100%" height="33.4375rem">
            {/* header */}
            <Flex flexDir="column">
              <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                Guarantor Information 2
              </Text>
              <Box className="Wrapper">
                <Input type="file" className="my_upload" />
              </Box>
            </Flex>
            {/* input sect-2 */}
            <Flex width="100%" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  Name
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter full name"
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
                  Phone number
                </Text>
                <Input
                  mt="4px"
                  placeholder="Enter phone number"
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
            {/* end of one */}
            <Flex width="100%" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  Residential Address
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter an address"
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
                  placeholder="Enter a City"
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
            {/* end 2 */}
            <Flex width="100%" justifyContent="space-between">
              <Flex flexDir="column" width="20.625rem" height="5.125rem">
                <Text color="text.50" fontWeight="450" fontSize="18px" lineHeight="22px">
                  State
                </Text>
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Enter a state"
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
                  Country
                </Text>
                <Input
                  mt="4px"
                  placeholder="Nigeria"
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
            {/* end 3 */}
            {/* end input flex sect-2 */}
          </Flex>
        </Flex>
        <Button
          alignSelf="flex-end"
          width="2.75rem"
          height="2.75rem"
          color="#fff"
          background="primary.main"
          borderRadius="4px"
          padding="0.625rem"
          onClick={() => setIsGuarantor(false)}
          _hover={{
            background: 'primary.main'
          }}>
          {'<'}
        </Button>
      </Box>
    </>
  )
}

export default GuarantorInfo;