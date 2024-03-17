'use client'
import {createContext, useContext, useState } from "react"

const pledgeContext = createContext(null)
 export const usePledgeContext = () => useContext(pledgeContext)

const PledgeProvider = ({children}) =>{
    const dataProvider = [{
        "id": "1",
        "label": "of $100,000 backed",
        "number": 0
      },
      {
        "id": "2",
        "label": "total backers",
        "number": 0
      },
      {
        "id": "3",
        "label": "days left",
        "number": 56
      }]
    const [goals, setGoals] = useState(dataProvider)
    return (
        <pledgeContext.Provider value={{goals, setGoals}}>
            {children}
        </pledgeContext.Provider>
    )
}

export default PledgeProvider