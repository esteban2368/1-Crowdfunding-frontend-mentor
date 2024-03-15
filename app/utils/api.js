export const getData = async (endpoint) =>{
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`)
      return res.json()
      
    } catch (error) {
      console.error("Error data fetching:", error)
      return null
    }
  }
