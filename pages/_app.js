import { ToastProvider } from 'react-toast-notifications';
import "../public/styles.css";

export default function MyApp({ Component, pageProps }) {
    return <ToastProvider autoDismissTimeout={3000}>
        <Component {...pageProps} />
    </ToastProvider>;
}