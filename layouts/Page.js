import Navigation from "./shared/Navigation"
import MobileNavigation from "./shared/MobileNavigation"
import Footer from "./shared/Footer"
import Head from 'next/head'
import "bootstrap-css-only/css/bootstrap.min.css"
import "animate.css/animate.min.css"
import Title from "../components/Title"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faMapSigns, faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'

// Configure FontAwesome library.
library.add(faBook, faMapSigns, faBalanceScaleRight)

export default ({ children, title }) => (
    <>
        <Head>
            <title>Reactive Poker</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Navigation></Navigation>
        <div className="container animated fadeIn">
            <Title>{title}</Title>
            {children}
            <Footer></Footer>
        </div>
        <MobileNavigation></MobileNavigation>
        <style jsx global>{`
            body{ 
                background-color: #fff!important;
                background-image: -webkit-linear-gradient(30deg,#fff 30%,#ccc 70%);
                background-height: 100vh;
                background-attachment:fixed;
            }
            .bg-dark{
                background-color: #000!important;
            }
            `}
        </style>
    </>
)