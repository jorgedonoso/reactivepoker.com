import Link from "next/link"
import { withRouter } from 'next/router'
import useMenu from "../../src/hooks/useMenu"

const Navigation = ({ router }) => {

    let { menuData } = useMenu();

    return <nav className="fixed-bottom d-md-none bg-dark text-center">
        <div className="d-flex">
            {menuData.map(
                (link, $key) => {
                    if (!link.excludeFromMobile) {
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
                }
            )}
        </div>
    </nav>
}

export default withRouter(Navigation)