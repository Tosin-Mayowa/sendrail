import Chart from "react-apexcharts";
import React, { useState } from 'react'
import { Box, Flex, Select, Stack } from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

const BarChartOverview: React.FC = () => {
    const [state, setState] = useState<any>({
        options: {
            colors: ["#F9C567"],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 80],
            },
        ],
    });
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
                <Stack spacing={3}>
                    <Select variant='filled' placeholder='Select an Option' icon={<MdArrowDropDown />}>
                        <option value='Daily Overview'>Daily Overview</option>
                        <option value='Weekly Overview'>Weekly Overview</option>
                        <option value='Monthly Overview'>Monthly Overview</option>
                    </Select>
                </Stack>
                <GoKebabVertical size={20} cursor="pointer" />
            </Flex>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="100%"
                height="270"
            />
        </Box>
    )
}

export default BarChartOverview