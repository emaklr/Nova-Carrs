import '../styles/globals.css';
import { MyProvider } from '../context/MyContext';

export const metadata = {
  title: 'RiteWheel',
  description: 'Car exploration and booking platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
