import { useState, useEffect } from 'react'

export default () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        setMenuData([
            { label: "Poker Rules", path: "/poker-rules", icon: "book" },
            { label: "Jacks or Better", path: "/jacks-or-better", icon: "map-signs" },
            { label: "Card Counting", path: "/card-counting", icon: "balance-scale-right" },
            { label: "Terms of Service", path: "/terms-of-service", excludeFromMobile: true }
        ])
    }, []);

    return { menuData };
}