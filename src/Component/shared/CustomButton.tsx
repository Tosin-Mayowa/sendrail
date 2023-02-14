import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
    text: string,
    variant?: "filled" | "outlined",
    size?: string,
    onclick: () => void,
    disabled?: boolean
}
function CustomButton({
    text, variant, onclick, size, disabled
}: Props): JSX.Element {
    let background: string
    let color: string
    let border: string;
    if (variant === "filled") {
        background = "#070529"
        color = "#fff"
        border = "none"
    } else if (variant === "outlined") {
        background = "#fff"
        color = "#070529"
        border = "2px solid #070529"
    }
    return (
        <Button
            variant={variant}
            padding="8px 24px"
            borderRadius="8px"
            background={background}
            color={color}
            border={border}
            size={size}
            isDisabled={disabled}

            _hover={{
                boxShadow: "0px 2px 5px 0px #070529a0"
            }}

            onClick={onclick}
        >
            {text}
        </Button>
    )
}

CustomButton.defaultProps = {
    variant: "filled",
    size: "md",
    disabled: false
}

export default CustomButton