import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { font } from "./font";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
