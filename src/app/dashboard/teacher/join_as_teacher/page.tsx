

import Main from '@/components/trainer-dashboard/main'
import Navbar from '@/components/trainer-dashboard/NavBar';
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
