import { createContext } from "react";

export const Biocontext = createContext();


export const Bioprovider = ({children}) =>
{

    const myName = "Manoj" ;
    const myAge = 25;

    return <Biocontext.Provider value={{myName,myAge}}>
                {children}
            </Biocontext.Provider>;
};