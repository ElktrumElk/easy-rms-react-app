import { useEffect, useState } from "react";


export default function quotes() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    let j = 0;
    useEffect(() => {
        j += 1

        if (j <= 1) {
            fetch('https://my-quote-api-ivory.vercel.app/api/quotes/random')
                .then(res => res.json())
                .then(data => {
                    setQuote(data);
                    setLoading(false);

                })
                .catch(err => {
                    console.error("Error fetching quote:", err);
                    setQuote({quote: 'Eduction is all about learning new thing'});
                    setLoading(false);
                });
        }

    }, []);

    return quote;
}