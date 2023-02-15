import React from 'react'
import { DashboardStates } from '../../../../Contexts/DashboardContext'
import { AmountDetails } from './AmountDetails'
import { NewCard } from './NewCard'
import { NoCard } from './NoCard'

interface AddProps {
    onOpen: () => void,
    cards_details: {
        cards: {
            image: string,
            name: string,
            card: string,
            bank: string,
            key: number
        }[],
        setCards: any
    },
    onPaymentModalOpen: () => void
}
const AddCard: React.FC<AddProps> = ({ onOpen, cards_details, onPaymentModalOpen }) => {
    const { views } = DashboardStates();

    const fetchView = () => {
        if (views?.overview?.current_view === "deposit-2") {
            return <NewCard onOpen={onOpen} cards_details={cards_details} />
        } if (views?.overview?.current_view === "deposit-3") {
            return <AmountDetails onPaymentModalOpen={onPaymentModalOpen} />
        }
        return <NoCard />
    }
    return (
        fetchView()
    )
}

export default AddCard