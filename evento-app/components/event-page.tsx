"use client"

import { useState, useEffect } from 'react'
// import { Connection } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin } from 'lucide-react'

export function EventPage() {
  // const [balance, setBalance] = useState<number | null>(null)
  const { publicKey } = useWallet()
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   const getBalance = async () => {
  //     if (publicKey) {
  //       const connection = new Connection("https://api.mainnet-beta.solana.com")
  //       const balance = await connection.getBalance(publicKey)
  //       setBalance(balance / 1000000000) // Convert lamports to SOL
  //     }
  //   }
  //   getBalance()
  // }, [publicKey])

  return (
    <div className="min-h-screen bg-yellow-300 p-4">
      <div className="space-y-4">
        <div className="bg-white border-4 border-black p-4">
          <h1 className="text-4xl font-bold mb-4">Solana Soiree 2024</h1>
          <img src="/placeholder.svg?height=400&width=800" alt="Event banner" className="w-full h-64 object-cover mb-4" />
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span>October 15, 2024 | 7:00 PM UTC</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Metaverse Plaza, Solana City</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white border-4 border-black p-4">
            <h2 className="text-2xl font-bold mb-4">Wallet</h2>
            {/* <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 w-full mb-4" /> */}
            {/* {publicKey && <p className="text-sm">Balance: {balance !== null ? `${balance.toFixed(2)} SOL` : 'Loading...'}</p>} */}
          </div>

          <div className="bg-white border-4 border-black p-4">
            <h2 className="text-2xl font-bold mb-4">Attendees</h2>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gray-300 border-2 border-black">
                  <img src={`https://api.dicebear.com/6.x/personas/svg?seed=${i}`} alt="Avatar" className="w-full h-full" />
                </div>
              ))}
            </div>
            <p className="text-sm mt-2">+42 others attending</p>
          </div>

          <div className="bg-white border-4 border-black p-4">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">RSVP with 1 SOL</Button>
              <Button className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 border-2 border-black">Share Event</Button>
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-4">
          <h2 className="text-2xl font-bold mb-4">Event Chat</h2>
          <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
            <div className="flex items-start space-x-2">
              <div className="w-10 h-10 bg-gray-300 border-2 border-black">
                <img src="https://api.dicebear.com/6.x/personas/svg?seed=Alice" alt="Avatar" className="w-full h-full" />
              </div>
              <div className="bg-gray-100 p-2 border-2 border-black">
                <p className="text-sm">Can't wait for the event! Who's bringing the virtual snacks?</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-10 h-10 bg-gray-300 border-2 border-black">
                <img src="https://api.dicebear.com/6.x/personas/svg?seed=Bob" alt="Avatar" className="w-full h-full" />
              </div>
              <div className="bg-gray-100 p-2 border-2 border-black">
                <p className="text-sm">I've got some NFT cookies ready to share!</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-black"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4">Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}