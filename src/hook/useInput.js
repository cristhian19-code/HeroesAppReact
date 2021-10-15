import { useState } from "react"

export const useInput = (initialState={}) => {
    const [input, setInput] = useState(initialState);

    const handleChangeInput = ({target})=>{
        setInput({
            ...input,
            [target.name]: target.value
        })
    }

    const reset = ()=>{
        setInput(initialState)
    }

    return{
        input,
        handleChangeInput,
        reset
    }

}
