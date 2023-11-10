import React from 'react'
import Link from "next/link"
import Image from "next/image";
import Logo from "./Vector.jpg";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Vector Logo'
        width={40}
        quality={100}
        placeholder='blur'
      ></Image>
      <h1>Hello Vector App</h1>
      <Link href="./">Dashboard</Link>
      <br />
      <Link href="./tickets">Tickets</Link>
      <br />
      <Link href="./tickets/create">Create Ticket</Link>
    </nav>
  )
}
