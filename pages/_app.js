import { ToastProvider } from 'react-toast-notifications';
import "../public/styles.css";

export default function MyApp({ Component, pageProps }) {
    return <ToastProvider autoDismissTimeout={5000}>
        <Component {...pageProps} />
    </ToastProvider>;
}