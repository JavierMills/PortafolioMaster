import HomeBtn from "../components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-center py-16 px-32">
        <HomeBtn />
        {children}
    </main>
  );
}
