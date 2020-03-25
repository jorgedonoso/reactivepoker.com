import { useState, useEffect } from 'react'

export default () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        setMenuData([
            { label: "Poker Rules", path: "/poker-rules", icon: "book", ctaLabel: "Practice Poker Rules" },
            { label: "Jacks or Better", path: "/jacks-or-better", icon: "map-signs", ctaLabel: "Play Jacks or Better" },
            { label: "Card Counting", path: "/card-counting", icon: "balance-scale-right", ctaLabel: "Practice Card Counting" },
            { label: "Terms of Service", path: "/terms-of-service", icon: "exclamation-triangle", excludeFromMobile: true }
        ])
    }, []);

    return { menuData };
}