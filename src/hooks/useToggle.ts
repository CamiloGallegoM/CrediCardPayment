import { useState } from "react";

export function useToggleState(initialState:boolean):[boolean, () => void]{
    const [state, setState] = useState<boolean>(initialState);

    const handleToggle = ()=> setState(!state);

    return [state, handleToggle]
};