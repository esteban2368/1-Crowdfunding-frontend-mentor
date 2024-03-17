'user client'
import PledgeProvider from '../contexts/PledgeProvider'

const Providers = ({children})=> {
    return (
        <PledgeProvider>{children}</PledgeProvider>
    )
}
export default Providers