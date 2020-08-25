// Setup a data layer to track the shopping cart

import React, { createContext, useContext, useReducer } from "react";


//This is the data layer
export const StateContext = createContext()

// This is the provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// THIS IS HOW IT IA USED INSIDE A COMPONENT 
export const useStateValue = () => useContext(StateContext)
