import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import withLayout from '../../../wrapper/withLayout'
import AddCourier from '../AddCourier/AddCourier'
import CourierProfile from '../CourierProfile/CourierProfile'
import ManageRider from '../ManageRider/ManageRider'
const Courier = () => {
const [indx,setIndx]=useState(0);
console.log(indx)

  return (
    <>
      <Flex>
        <Text ml="5px" color="#000000" fontWeight="600" fontSize="24px" lineHeight="29px">
          Courier
        </Text>
      </Flex>
      <Tabs mt="30px" index={indx} onChange={(index) => setIndx(index)}>
        <TabList>
          <Tab
            fontWeight="500"
            fontSize="16px"
            lineHeight="22px"
            color="#595956"
            _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
            Add Rider
          </Tab>
          <Tab
            fontWeight="500"
            fontSize="16px"
            lineHeight="22px"
            color="#595956"
            _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
            Courier's Profile
          </Tab>
          <Tab
            fontWeight="500"
            fontSize="16px"
            lineHeight="22px"
            color="#595956"
            _selected={{ color: '#1F1F1F', borderBottom: ' 4px solid #F9C567' }}>
            Manage Rider
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
            <AddCourier />
          </TabPanel>
          <TabPanel>
            <CourierProfile />
          </TabPanel>
          <TabPanel>
            <ManageRider setIndx={setIndx} />
          </TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default withLayout(Courier);
