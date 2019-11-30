import Link from "next/link"

const links = [
    { label: "Home", path: "/" },
    { label: "Poker Rules", path: "/poker-rules" },
    { label: "Jacks or Better", path: "/jacks-or-better" },
    { label: "Card Counting", path: "/card-counting" },
    { label: "Terms of Service", path: "/terms-of-service" }
]

const Navigation = () =>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link href="/"><a className="navbar-brand">RP</a></Link>
        <div className="navbar-nav">
            {links.map(
                (link, $key) =>
                    <Link key={$key} href={link.path}><a className="nav-item nav-link">{link.label}</a></Link>
            )}
        </div>
    </nav>


export default Navigation