
import ClientLayout from "./clientlayout";

export const metadata = {
  title: "HGZ Growth Group Helper",
  description: "In-house tool for finding your growth group house.",
};

export default function RootLayout({ children }) {
  return (
  <ClientLayout children={children}/>
  );
}
