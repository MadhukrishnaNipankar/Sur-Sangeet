import searchContext from "./SearchContext";
import { useState } from "react";

import React from 'react'

export default function SearchState(props) {
    const [searchQuery, setsearchQuery] = useState("")

    return (
        <searchContext.Provider value={{searchQuery,setsearchQuery}}>
            {props.children}
        </searchContext.Provider>
    )
}
