"use client"
import Dashboard from "@/components/DashBoard/DashBoard";

export default function Home() {
  return (
    <main className="p-16 bg-[#202024] min-h-screen ">
      <div className="h-30 w-full bg-[#121214] absolute top-0">
      </div>
        <Dashboard/>
    </main>
  )
}