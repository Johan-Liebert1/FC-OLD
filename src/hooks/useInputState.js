import { useState } from "react";

function useInputState(initialValue) {
    const [state, setState] = useState(initialValue)

    const handleChange = (event) => {
        setState(event.target.value)
    }

    const reset = () => {
        setState("")
    }

    return [state, handleChange, reset]
}

export default useInputState