import {useState} from "react";

export function useStateBoolean  (initialState:boolean):[boolean, () => void, () => void] {
    const [state, setState] = useState<boolean>(initialState)

    const handleOnState = () => setState(true)
    const handleOffState = () => setState(false)
    
    return [state,handleOnState,handleOffState]
};