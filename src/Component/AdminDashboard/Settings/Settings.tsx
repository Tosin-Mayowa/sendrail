import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Text } from '@chakra-ui/react'
import React from 'react'
import withLayout from '../../../wrapper/withLayout';
import Profile from '../Profile/Profile'
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import BankInfo from '../BankInfo/BankInfo'
import Security from '../Security/Security'
import BusinessPref from '../BusinessPreferences/BusinessPreferences'
const Settings=()=>{

    return (
      <>
        <Flex>
          <Text ml="5px" color="#000000" fontWeight="600" fontSize="24px" lineHeight="29px">
            Settings
          </Text>
        </Flex>
        <Tabs mt='30px'>
          <TabList>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#595956"
              _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
              Profile
            </Tab>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#595956"
              _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
              Business information
            </Tab>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#595956"
              _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
              Bank information
            </Tab>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#595956"
              _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
              Security
            </Tab>
            <Tab
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#595956"
              _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
              Business preferences
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <BusinessInfo />
            </TabPanel>
            <TabPanel>
              <BankInfo />
            </TabPanel>
            <TabPanel><Security/>
            </TabPanel>
            <TabPanel><BusinessPref/></TabPanel>
          </TabPanels>
        </Tabs>
      </>
    )
}

export default withLayout(Settings);
