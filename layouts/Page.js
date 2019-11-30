import Navigation from "./shared/Navigation"
import Footer from "./shared/Footer"
import Head from 'next/head'
import "bootstrap-css-only/css/bootstrap.min.css"

export default ({ children, title }) => (
    <>
        <Head>
            <title>Reactive Poker</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Navigation></Navigation>
        <div className="container">
            <h1 className="display-1 text-center my-4">{title}</h1>
            {children}
            <Footer></Footer>
        </div>
    </>
)