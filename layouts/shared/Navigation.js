import Link from "next/link"
import { withRouter } from 'next/router'
import useMenu from "../../src/hooks/useMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = ({ router }) => {

    let { menuData } = useMenu();

    return <div className="d-none d-md-block">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link href="/"><a className="navbar-brand">Reactive Poker</a></Link>
            <div className="navbar-nav mr-auto">
                {menuData.map(
                    (link, $key) => {
                        let isActive;
                        if (router.pathname == link.path) {
                            isActive = "active";
                        }
                        return <Link prefetch={false} key={$key} href={link.path}>
                            <a className={"nav-item nav-link " + isActive}>
                                <FontAwesomeIcon icon={link.icon} height={18} className="mr-2" />
                                {link.label}
                            </a>
                        </Link>
                    }
                )}
            </div>
            <a className="btn btn-success float-right text-white align-text-bottom" href="https://github.com/jorgedonoso/reactivepoker.com" target="_blank">
                <FontAwesomeIcon icon={{ prefix: "fab", iconName: "github" }} height={18} className="mr-2" /> GitHub Source Code
            </a>
        </nav>
    </div>
}

export default withRouter(Navigation)