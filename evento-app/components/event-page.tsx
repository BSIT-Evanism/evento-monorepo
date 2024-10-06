"use client"

import { useState, useEffect } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, MessageSquare, Users } from 'lucide-react'

export function EventPage() {
  const [balance, setBalance] = useState<number | null>(null)
  const { publicKey } = useWallet()
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const connection = new Connection("https://api.mainnet-beta.solana.com")
        const balance = await connection.getBalance(publicKey)
        setBalance(balance / 1000000000) // Convert lamports to SOL
      }
    }
    getBalance()
  }, [publicKey])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3 md:grid-rows-3">
        <Card className="md:col-span-2 md:row-span-2">
          <CardHeader>
            <CardTitle>Solana Soiree 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg?height=400&width=800" alt="Event banner" className="w-full h-64 object-cover rounded-lg mb-4" />
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4" />
              <span>October 15, 2024 | 7:00 PM UTC</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Metaverse Plaza, Solana City</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-4" />
            {publicKey && <p className="text-sm">Balance: {balance !== null ? `${balance.toFixed(2)} SOL` : 'Loading...'}</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex -space-x-2 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <Avatar key={i} className="inline-block border-2 border-background">
                  <AvatarImage src={`https://api.dicebear.com/6.x/personas/svg?seed=${i}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm mt-2">+42 others attending</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Event Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/6.x/personas/svg?seed=Alice" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-2">
                  <p className="text-sm">Can't wait for the event! Who's bringing the virtual snacks?</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/6.x/personas/svg?seed=Bob" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg p-2">
                  <p className="text-sm">I've got some NFT cookies ready to share!</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">RSVP with 1 SOL</Button>
            <Button variant="outline" className="w-full">Share Event</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}