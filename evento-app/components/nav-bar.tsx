'use client'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"


export const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">NavBar</h1>
            <div className="flex items-center space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </div>
            <WalletMultiButton />
        </div>
    )
}

