import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { OverviewStates } from '../../../../Contexts/OverviewContext'


interface AddProps {
    onOpen: () => void
}
const AddCard: React.FC<AddProps> = ({ onOpen }) => {
    const [view, setView] = useState<string | null>("")
    console.log(view)
    const fetchView = () => {
        if (view === "details") {
            return <NewCard onOpen={onOpen} />
        }
        return <NoCard setView={setView} />
    }
    return (
        fetchView()
    )
}

const NewCard = ({ onOpen }): JSX.Element => {
    return (
        <form>
            <Grid gridTemplateColumns="1fr 1fr" gap="15px" my="15px" placeItems="center">
                <FormControl>
                    <FormLabel color="#ABA7A7">Email</FormLabel>
                    <Input
                        type='email'
                        placeholder="admin@sendrails.com"
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Card</FormLabel>
                    <Input
                        type='text'
                        placeholder='5399 9219 3291 1819'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">MM/YY</FormLabel>
                    <Input
                        type='text'
                        placeholder='12/29'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">CCV</FormLabel>
                    <Input
                        type='text'
                        placeholder='123'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <Button
                    gridColumn="1/3"
                    w="max-content"
                    border="1px solid #ABA7A7"
                    borderRadius="4px"
                    onClick={onOpen}
                >
                    Next
                </Button>
            </Grid>
        </form>
    )
}

const NoCard = ({ setView }): JSX.Element => {

    return (
        <Grid placeItems="center">
            <Grid
                placeItems="center"
                backgroundColor="#FFFFFF"
                w="70%"
                color="#F9C567"
                fontWeight="700"
                fontSize="18px"
                padding="45px"
                borderRadius="10px"
                gridTemplateColumns="auto auto"
                justifyContent="center"
                cursor="pointer"

                onClick={() => setView("details")}
            >
                <SmallAddIcon boxSize="25px" /><Text>Add A Debit Card For This Transaction</Text>
            </Grid>
        </Grid>
    )
}

export default AddCard