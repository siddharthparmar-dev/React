import { useEffect, useState } from "react";

function useCurrencyData(currencyVal){

    const [data,setData] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyVal}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currencyVal]))
        console.log(data);
        
    }, [currencyVal])
    console.log(data);
    return data;
    
}

export  default useCurrencyData;