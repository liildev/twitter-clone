import React, { createContext, useState, useContext } from 'react';
export const Context = createContext()
const ThemeTwitter = ({children}) => {
    const [state, setState] = useState(true)
    const value = {state, setState}
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    );
}

export default ThemeTwitter;

export const useTheme = (setter) => {
    const {state, setState} = useContext(Context);
    return setter ? [setState] : [ state, setState ]
}
