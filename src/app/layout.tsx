import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Kuber's genealogy",
  description: "Welcome to kuber's genealogy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col mx-auto bg-[#E4E6EB] pt-[4rem]">
        <Header />
        <main className="flex w-full h-[calc(100vh-4.2rem)]  ">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
