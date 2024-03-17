const formartCurrency = (number, maxDigits = 0 , style="currency", currency='USD') => {
    return new Intl.NumberFormat('en-US' , {
        style: style,
        currency: currency,
        maximumFractionDigits: maxDigits
    } ).format(number)
}

export default formartCurrency