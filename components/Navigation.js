import Link from "next/link"

const links = [
    { label: "Home", path: "/" },
    { label: "Poker Rules", path: "/poker-rules" },
    { label: "Card Counting", path: "/card-counting" },
    { label: "Jacks or Better", path: "/jacks-or-better" },
    { label: "Terms of Service", path: "/terms-of-service" },
]

const Navigation = () => (
    <ul>
        {links.map(
            (link, $key) => <li>
                <Link key={$key} href={link.path}><a>{link.label}</a></Link>
            </li>
        )}
    </ul>
)

export default Navigation