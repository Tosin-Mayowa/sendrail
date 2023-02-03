import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import Chart from "react-apexcharts";

const Revenue = (): JSX.Element => {
    return (
        <Box
            maxWidth="100%"
            border="1px solid #ABA7A7"
            borderRadius="9px"

            style={{
                aspectRatio: "5/4",
            }}
        >
            <Flex justifyContent="space-between" p="15px">
                <Text fontSize="16px" fontWeight="600">Revenue</Text>
                <GoKebabVertical size={20} cursor="pointer" />
            </Flex>
            <Chart
                options={{
                    colors: ["#F9C567"],
                    chart: {
                        id: "basic-bar",
                    },
                    xaxis: {
                        categories: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thur",
                            "Fri",
                            "Sat",
                            "Sun",
                        ],
                    },
                }}
                series={[
                    {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 80],
                    },
                ]}
                type="line"
                width="100%"
                height="270"
            />
        </Box>
    )
}

export default Revenue