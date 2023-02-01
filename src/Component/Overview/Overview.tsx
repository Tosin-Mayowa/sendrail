import React,{useState} from "react";
import {
  Flex,
  Grid,
  Button,
  useTheme,
  Text,
  Box,
  Stack,
  Checkbox,
  CheckboxGroup,
  Image
} from "@chakra-ui/react";
import Circle from "../../Asset/Logos/Onboarding/circle.png";
import Flag from "../../Asset/Logos/Onboarding/flag.png";
import LineL from "../../Asset/Logos/Onboarding/LineL.png";
import LineR from "../../Asset/Logos/Onboarding/lineR.png";
import Bike from "../../Asset/Logos/Onboarding/bike.png";
import Boxp from "../../Asset/Logos/Onboarding/Boxplus.png";
import Group from "../../Asset/Logos/Onboarding/Group.png";
import Bus from "../../Asset/Logos/Onboarding/Bus.png";
import Pend from "../../Asset/Logos/Onboarding/pend.png";
import { copyTextToClipboard } from "../../lib/utilities";
import Dashcard from "../DashCard/Dashcard";
const Overview=()=>{
 const theme = useTheme();
 const [isCopied,setIsCopied]=useState(false);
 const url=" https://onboard. sendrail.com/dummyco";
 const cardDetails = [
   { title: "Order", count: 1, url: Boxp },
   { title: "Pending", count: 1, url: Pend },
   { title: "In transit", count: 1, url: Bus },
   { title: "Delivered", count: 1, url: Group },
 ];
  const handleCopy = () => {
    copyTextToClipboard(url).then(
      ()=>{
        setIsCopied(true);
        setTimeout(() => setIsCopied(false),2000);
      }
    ).catch(
      (error)=>{
        console.log('error',error)
      }
    )
  };
    return (
      <>
        <Flex width="100%">
          <Box
            fontWeight="600"
            fontSize="24px"
            lineHeight="29px"
            color="#000000"
            mt="118px"
            ml="7%"
          >
            Dashboard Overview
          </Box>
        </Flex>

        <Grid
          mt="46px"
          ml="1%"
          mr="3%"
          width="96%"
          templateColumns="repeat(4, 1fr)"
          gap="10px"
        >
          {cardDetails?.map((card) => (
            <Dashcard key={card.title} card={card} />
          ))}
        </Grid>
        <Flex ml="2%" mt="40px">
          <Box
            border=" 1px solid #ABA7A7"
            width="660px"
            height="206px"
            padding="22px 10px 22px 8px"
            borderRadius="9px"
          >
            <Text fontSize="16px" lineHeight="20px" color="#000000">
              Onboarding Link
            </Text>
            <Text fontSize="16px" lineHeight="20px" mt="20px" color=" #595956">
              Share your logistic imbedded link for customers to be able to
              onboard directly from you.{" "}
            </Text>
            <Box
              width="632px"
              height="41px"
              color="#F9C567"
              bg="rgba(7, 5, 41, 0.07)"
              padding="8px 130px"
              mt="15px"
            >
              {url}
            </Box>
            <Button
              width="74px"
              height="34px"
              fontSize="12px"
              fontWeight="500"
              color="#fff"
              lineHeight="20px"
              padding="7px 21px"
              bg="#070529"
              mt="14px"
              onClick={handleCopy}
            >
              {isCopied ? "Copied" : "Copy"}
            </Button>
          </Box>
          <Flex ml="20px" flexDir="column" alignContent="flex-start">
            <Text
              fontWeight="600"
              color=" #1F1F1F"
              fontSize="20px"
              lineHeight="30px"
              textAlign="center"
            >
              Delivery in Transit
            </Text>
            <Flex flexDir="column">
              <Box
                width="346px"
                height="184px"
                mt="43px"
                px="20px"
                border="1px solid #ABA7A7"
                borderRadius="12px"
              >
                <Flex justifyContent="space-between">
                  <Text
                    mt="20px"
                    fontWeight="600"
                    color=" #000"
                    fontSize="20px"
                    lineHeight="30px"
                    textAlign="center"
                  >
                    Jon Toe
                  </Text>
                  <CheckboxGroup colorScheme="#070529">
                    <Stack
                      spacing={["5px", "10px"]}
                      direction={["column", "row"]}
                      mt="26px"
                    >
                      <Checkbox size="md" fontSize="10px" value="Pick up">
                        Pick up
                      </Checkbox>
                      <Checkbox size="md" fontSize="10px" value="Delivered">
                        Delivered
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Flex>
                <Flex mt="15px">
                  <Image
                    src={Circle}
                    mt="32px"
                    alt="elipse"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineL}
                    mt="37px"
                    width="170px"
                    height="6px"
                    alt="line"
                  />
                  <Image
                    src={Bike}
                    mt="32px"
                    alt="bike"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineR}
                    mt="37px"
                    alt="line"
                    width="100px"
                    height="6px"
                  />
                  <Image
                    src={Flag}
                    mt="34px"
                    alt="flag"
                    width="10px"
                    height="10px"
                  />
                </Flex>
              </Box>
              <Box
                width="346px"
                height="184px"
                mt="43px"
                px="20px"
                border="1px solid #ABA7A7"
                borderRadius="12px"
              >
                <Flex justifyContent="space-between">
                  <Text
                    mt="20px"
                    fontWeight="600"
                    color=" #000"
                    fontSize="20px"
                    lineHeight="30px"
                    textAlign="center"
                  >
                    Jon Toe
                  </Text>
                  <CheckboxGroup colorScheme="#070529">
                    <Stack
                      spacing={["5px", "10px"]}
                      direction={["column", "row"]}
                      mt="26px"
                    >
                      <Checkbox size="md" fontSize="10px" value="Pick up">
                        Pick up
                      </Checkbox>
                      <Checkbox size="md" fontSize="10px" value="Delivered">
                        Delivered
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Flex>
                <Flex mt="15px">
                  <Image
                    src={Circle}
                    mt="32px"
                    alt="elipse"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineL}
                    mt="37px"
                    width="170px"
                    height="6px"
                    alt="line"
                  />
                  <Image
                    src={Bike}
                    mt="32px"
                    alt="bike"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineR}
                    mt="37px"
                    alt="line"
                    width="100px"
                    height="6px"
                  />
                  <Image
                    src={Flag}
                    mt="34px"
                    alt="flag"
                    width="10px"
                    height="10px"
                  />
                </Flex>
              </Box>
              <Box
                width="346px"
                height="184px"
                mt="43px"
                px="20px"
                border="1px solid #ABA7A7"
                borderRadius="12px"
              >
                <Flex justifyContent="space-between">
                  <Text
                    mt="20px"
                    fontWeight="600"
                    color=" #000"
                    fontSize="20px"
                    lineHeight="30px"
                    textAlign="center"
                  >
                    Jon Toe
                  </Text>
                  <CheckboxGroup colorScheme="#070529">
                    <Stack
                      spacing={["5px", "10px"]}
                      direction={["column", "row"]}
                      mt="26px"
                    >
                      <Checkbox size="md" fontSize="10px" value="Pick up">
                        Pick up
                      </Checkbox>
                      <Checkbox size="md" fontSize="10px" value="Delivered">
                        Delivered
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Flex>
                <Flex mt="15px">
                  <Image
                    src={Circle}
                    mt="32px"
                    alt="elipse"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineL}
                    mt="37px"
                    width="170px"
                    height="6px"
                    alt="line"
                  />
                  <Image
                    src={Bike}
                    mt="32px"
                    alt="bike"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineR}
                    mt="37px"
                    alt="line"
                    width="100px"
                    height="6px"
                  />
                  <Image
                    src={Flag}
                    mt="34px"
                    alt="flag"
                    width="10px"
                    height="10px"
                  />
                </Flex>
              </Box>
              <Box
                width="346px"
                height="184px"
                mt="43px"
                px="20px"
                border="1px solid #ABA7A7"
                borderRadius="12px"
              >
                <Flex justifyContent="space-between">
                  <Text
                    mt="20px"
                    fontWeight="600"
                    color=" #000"
                    fontSize="20px"
                    lineHeight="30px"
                    textAlign="center"
                  >
                    Jon Toe
                  </Text>
                  <CheckboxGroup colorScheme="#070529">
                    <Stack
                      spacing={["5px", "10px"]}
                      direction={["column", "row"]}
                      mt="26px"
                    >
                      <Checkbox size="md" fontSize="10px" value="Pick up">
                        Pick up
                      </Checkbox>
                      <Checkbox size="md" fontSize="10px" value="Delivered">
                        Delivered
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </Flex>
                <Flex mt="15px">
                  <Image
                    src={Circle}
                    mt="32px"
                    alt="elipse"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineL}
                    mt="37px"
                    width="170px"
                    height="6px"
                    alt="line"
                  />
                  <Image
                    src={Bike}
                    mt="32px"
                    alt="bike"
                    width="16px"
                    height="16px"
                  />
                  <Image
                    src={LineR}
                    mt="37px"
                    alt="line"
                    width="100px"
                    height="6px"
                  />
                  <Image
                    src={Flag}
                    mt="34px"
                    alt="flag"
                    width="10px"
                    height="10px"
                  />
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
}

export default Overview;