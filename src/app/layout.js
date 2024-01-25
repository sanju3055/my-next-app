
import NavBar from '@/components/NavBar';
import './globals.css';
import { montserrat } from './fonts';
import Provider from '@/components/Provider';

export const metadata={
  title:"Patil........Store",
  description:"You can shop shirts from this website",
  keywords:["dress","shirts"]
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-grey-100 ${montserrat.className}`}>
        <Provider>
            <NavBar />
            {children}
        </Provider>
      </body>
    </html>
  );
}
