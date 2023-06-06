import { createContext, useState } from "react";

const ResultContext = createContext();

export const ContextProvider = ({children}) => {
    const [results, setResults] = useState(JSON.parse(localStorage.getItem('results')));
    const [userSearch, setUserSearch] = useState(localStorage.getItem('userSearch'));
    const [selectedShowDetail, setSelectedShowDetail] = useState(JSON.parse(localStorage.getItem('selectedShow')));
    const value = {
        results,
        setResults,
        userSearch,
        setUserSearch,
        selectedShowDetail,
        setSelectedShowDetail,
    }
    return (
        <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
    )
}

export default ResultContext;