import { border, Checkbox } from '@chakra-ui/react'
import React from 'react'

interface Props {
    checked?: boolean,
    border_color?: string,
    onChange?: () => void,
    size: "sm" | "md" | "lg"
}
const CustomCheckbox = ({ checked, border_color, onChange, size }: Props) => {
    return (<>
        {
            checked ?
                <Checkbox border={border_color} w="max-content" borderRadius="3px" checked onChange={onChange} />
                :
                <Checkbox border={border_color} w="max-content" borderRadius="3px" onChange={onChange} size={size} />
        }
    </>
    )
}

CustomCheckbox.defaultProps = {
    checked: false,
    border_color: "#ABA7A7",
    onChange: () => { console.log("Checkbox clicked") },
    size: "lg"
}

export default CustomCheckbox