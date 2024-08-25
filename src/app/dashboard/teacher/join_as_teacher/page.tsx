
import Topbar from '@/Components/trainer-dashboard/Topbar';
import Main from '@/Components/trainer-dashboard/main'
import Navbar from '@/Components/trainer-dashboard/NavBar';
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main/>
    </main>
    </>
  );
}
