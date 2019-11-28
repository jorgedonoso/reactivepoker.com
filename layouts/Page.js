import Navigation from "../components/Navigation"
import Head from 'next/head'

export default ({ children }) => (
    <>
        <Head>
            <title>Reactive Poker</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation></Navigation>
        {children}
    </>
)