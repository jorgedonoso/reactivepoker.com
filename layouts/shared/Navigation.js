import Link from "next/link"
import { withRouter } from 'next/router'

const links = [
    { label: "Poker Rules", path: "/poker-rules" },
    { label: "Jacks or Better", path: "/jacks-or-better" },
    { label: "Card Counting", path: "/card-counting" },
    { label: "Terms of Service", path: "/terms-of-service" }
]

const Navigation = ({ router }) =>
    <div className="d-none d-md-block">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link href="/"><a className="navbar-brand">Reactive Poker</a></Link>
            <div className="navbar-nav">
                {links.map(
                    (link, $key) => {
                        let isActive;
                        if (router.pathname == link.path) {
                            isActive = "active";
                        }
                        return <Link key={$key} href={link.path}><a className={"nav-item nav-link " + isActive}>{link.label}</a></Link>
                    }
                )}
            </div>
        </nav>
    </div>

export default withRouter(Navigation)