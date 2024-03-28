const validateElement = (element, expressionRegular) =>{
    const regex = new RegExp(expressionRegular, "g")
    return regex.test(element)
}
export default validateElement