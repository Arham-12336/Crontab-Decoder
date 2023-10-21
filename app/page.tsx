import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/decoder" : "new-user";
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The Best Crontab Decoder app, period</h1>
        <p className="text-2xl text-white/60 mb-4">
          Configure and decode the crontab configuration on your finger
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-400 px-4 py-4 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
