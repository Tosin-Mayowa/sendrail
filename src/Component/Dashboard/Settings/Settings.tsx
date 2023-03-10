import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Text } from '@chakra-ui/react'
import React from 'react'
import withLayout from '../../../wrapper/withLayout';
import Profile from '../Profile/Profile'
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import BankInfo from '../BankInfo/BankInfo'
const Settings=()=>{

    return (
      <>
        <Flex>
          <Text>Hello</Text>
        </Flex>
        <Tabs>
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
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </TabPanels>
        </Tabs>
      </>
    )
}

export default withLayout(Settings);
