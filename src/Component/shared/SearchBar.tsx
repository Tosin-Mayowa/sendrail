import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

type Props = {
    placeholder: string,
    width: string,
    // then probably a callback for onchange, There will be a component for displaying search results or it can be here too.. Something like chakra's search
}
const SearchBar = ({ placeholder, width }: Props): JSX.Element => {

    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
            />
            <Input
                boxShadow="0px 4px 20px rgba(6, 0, 137, 0.1)"
                backgroundColor="#fff"
                width={width}
                fontWeight="500"
                fontSize="12px"
                lineHeight="14px"
                outline="none"
                border="none"
                placeholder={placeholder}
            />
        </InputGroup>
    )
}

export default SearchBar