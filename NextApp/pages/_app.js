import "../styles/globals.css";
import { MyProvider } from '../context/MyContext';

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
