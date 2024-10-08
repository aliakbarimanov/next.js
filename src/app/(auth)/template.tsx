"use client"

import { useState } from "react";

import Link from "next/link"

import { usePathname } from "next/navigation";

//! metadata is not working client side
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Registration", href: "/registration" },
  { name: "Profile", href: "/profile" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //! usePathname is working only clinet side
  const pathname = usePathname();

  const [username, setUsername] = useState("");

  return (
    <html lang="en">
      <div>
        {navLinks.map((link) => {

          const isActive = pathname.startsWith(link.href);

          return (
            <Link href={link.href} key={link.name} className={isActive ? "px-10 text-red-700" : ""}>{link.name}</Link>
          )
        })}
      </div>
      <input type="text" className="border-slate-950" value={username} onChange={e => setUsername(e.target.value)} />
      <body>{children}</body>
    </html>
  )
}
