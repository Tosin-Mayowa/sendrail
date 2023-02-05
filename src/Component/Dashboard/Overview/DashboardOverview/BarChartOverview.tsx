import Chart from "react-apexcharts";
import React from 'react'
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Select, Stack, useMediaQuery } from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

const BarChartOverview = (): JSX.Element => {
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    return (
        <Box
            width={isSmallerThan480 ? "100%" : "50%"}
            border="1px solid #ABA7A7"
            borderRadius="9px"

            style={{
                aspectRatio: "5/4",
            }}
        >
            <Flex justifyContent="space-between" p="15px" alignItems="center" >
                <Stack spacing={3}>
                    <Select variant='filled' placeholder='Select an Option' icon={<MdArrowDropDown />}>
                        <option value='Daily Overview'>Daily Overview</option>
                        <option value='Weekly Overview'>Weekly Overview</option>
                        <option value='Monthly Overview'>Monthly Overview</option>
                    </Select>
                </Stack>
                <Menu>
                    <MenuButton>
                        <GoKebabVertical size={20} cursor="pointer" />
                    </MenuButton>
                    <MenuList
                        zIndex="20"
                        borderRadius="0px"
                        width="80px"
                        fontSize="14px"
                        fontWeight="500"
                    >
                        <MenuItem>Custom date</MenuItem>
                    </MenuList>
                </Menu>
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
                type="bar"
                width="100%"
                height="270"
            />
        </Box>
    )
}

export default BarChartOverview