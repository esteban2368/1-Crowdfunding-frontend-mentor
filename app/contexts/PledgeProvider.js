'use client'
import {createContext, useContext, useState } from "react"

const pledgeContext = createContext(null)
 export const usePledgeContext = () => useContext(pledgeContext)

const PledgeProvider = ({children}) =>{
    const [backed, setBacked] = useState(0)
    const [backers, setBackers] = useState(0)
    const [leftDays, setLeftDays] = useState(101)
    const countPledge = (value) =>{
      setBacked(prevState =>{
        let newPledges = prevState;
        newPledges += value
        return newPledges
      })
    }
    return (
        <pledgeContext.Provider value={{backed, backers, leftDays, countPledge}}>
            {children}
        </pledgeContext.Provider>
    )
}

export default PledgeProvider