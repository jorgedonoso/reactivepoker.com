import Link from "next/link"
import { withRouter } from 'next/router'
import useMenu from "../../src/hooks/useMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = ({ router }) => {

    let { menuData } = useMenu();

    // Bootstrap's "flex-fill" is no good.
    const styles = { flex: 1 }

    return <nav className="fixed-bottom d-md-none bg-dark text-center">
        <div className="d-flex justify-content-around">
            {menuData.map(
                (link, $key) => {
                    if (!link.excludeFromMobile) {
                        let isActive = "text-secondary";
                        if (router.pathname == link.path) {
                            isActive = "text-danger";
                        }
                        return <Link prefetch={false} key={$key} href={link.path}>
                            <a className={"py-3 " + isActive} style={styles}>
                                <FontAwesomeIcon icon={link.icon} height={24} className="d-block mx-auto" />
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