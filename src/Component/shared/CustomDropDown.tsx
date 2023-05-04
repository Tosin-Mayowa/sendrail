// Not yet usable
import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

interface Types {
    button?: JSX.Element,
    data: any,
    variant?: number,
}
const CustomDropDown = ({ button, data, variant }: Types): JSX.Element => {
    const [open, setOpen] = useState(false)
    const toggleRef = useRef()
    const listRef = useRef()

    const handleClickOutside = e => {
        if (
            !e.target.classList.contains("select-toggle-btn") ||
            !e.target.classList.contains("select-list")
        ) {
            e.stopPropagation()
            setOpen(false)
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside)
    }, [])
    return (
        <Grid>
            <Box onClick={() => setOpen(!open)} className='select-toggle-btn'>
                {button}
            </Box>
            {
                open &&
                <div className='select-list'>
                    Coming up
                </div>
            }
        </Grid>
    )
}

export default CustomDropDown

CustomDropDown.defaultProps = {
    button: null,
    variant: 1
}