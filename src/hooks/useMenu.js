import { useState, useEffect } from 'react'

export default () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        setMenuData([
            { label: "Poker Rules", path: "/poker-rules" },
            { label: "Jacks or Better", path: "/jacks-or-better" },
            { label: "Card Counting", path: "/card-counting" },
            { label: "Terms of Service", path: "/terms-of-service", excludeFromMobile: true }
        ])
    }, []);

    return { menuData };
}