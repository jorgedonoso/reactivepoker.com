import Link from "next/link"
import { withRouter } from 'next/router'

const links = [
    { label: "Poker Rules", path: "/poker-rules" },
    { label: "Jacks or Better", path: "/jacks-or-better" },
    { label: "Card Counting", path: "/card-counting" }
]

const Navigation = ({ router }) =>
    <nav className="fixed-bottom d-md-none bg-dark text-center">
        <div className="d-flex">
            {links.map(
                (link, $key) => {
                    let isActive = "text-secondary";
                    if (router.pathname == link.path) {
                        isActive = "text-danger bg-light";
                    }
                    return <Link key={$key} href={link.path}>
                        <a className={"p-4 font-weight-bold flex-fill " + isActive}>
                            {link.label}
                        </a>
                    </Link>
                }
            )}
        </div>
    </nav>

export default withRouter(Navigation)