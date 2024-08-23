import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <Link href="/login">
        <button className="bg-[#032031] border-[#17A8FC] border text-white py-2 px-4 rounded">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-[#032031] border-[#17A8FC] border text-white py-2 px-4 rounded ml-4">
          Signup
        </button>
      </Link>
      <Link href="/UserRegistration">
        <button className="bg-[#032031] border-[#17A8FC] border text-white py-2 px-4 rounded ml-4">
          Registeration
        </button>
      </Link>
    </div>
  );
}
