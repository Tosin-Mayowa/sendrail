import React, { Dispatch, SetStateAction } from 'react'
import { AmountDetails } from './AmountDetails'
import { NewCard } from './NewCard'
import { NoCard } from './NoCard'

interface AddProps {
    details: {
        section: number,
        setSection: Dispatch<SetStateAction<number>>,
        cards: any,
        setCards: any
    }
    onPaymentModalOpen: () => void
}
const AddCard: React.FC<AddProps> = ({ details, onPaymentModalOpen }) => {
    const { section, setSection, cards, setCards } = details;

    const fetchView = () => {
        if (section === 2) {
            return <NewCard cards={cards} setCards={setCards} setSection={setSection} />
        } if (section === 3) {
            return <AmountDetails onPaymentModalOpen={onPaymentModalOpen} />
        }
        return <NoCard setSection={setSection} />
    }
    return (
        fetchView()
    )
}

export default AddCard