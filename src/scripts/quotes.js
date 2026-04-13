import { useEffect, useState } from "react";




export default async function quotes() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.quotable.io/random?tags=wisdom')
            .then(res => res.json())
            .then(data => {
                setQuote(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching quote:", err);
                setLoading(false);
            });
    }, []); 

    return quote;
}