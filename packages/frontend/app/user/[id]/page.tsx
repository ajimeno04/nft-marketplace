"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCollections } from "@/components/user-collections"
import { UserPurchases } from "@/components/user-purchases"
import { UserSettings } from "@/components/user-settings"
import { Button } from "@/components/ui/button"
import { Edit2, Share2 } from "lucide-react"
import Image from "next/image"

export default function UserProfile({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("collections")

  // Mock user data (replace with actual data fetching in a real application)
  const user = {
    id: params.id,
    name: "Crypto Artist",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Digital artist exploring the boundaries of NFTs and blockchain technology.",
    coverImage: "/placeholder.svg?height=400&width=1200",
  }

  return (
    <div className="min-h-screen">
      {/* User Header */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src={user.coverImage || "/placeholder.svg"} alt="User cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 -mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="flex items-center">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-black"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400 mt-1">{user.bio}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="collections" className="mt-8" onValueChange={setActiveTab}>
          <TabsList className="bg-gray-900/50 border border-stone-200 border-gray-800 dark:border-stone-800">
            <TabsTrigger
              value="collections"
              className="data-[state=active]:bg-stone-900 data-[state=active]:text-stone-50 dark:data-[state=active]:bg-stone-50 dark:data-[state=active]:text-stone-900"
            >
              Collections
            </TabsTrigger>
            <TabsTrigger
              value="purchased"
              className="data-[state=active]:bg-stone-900 data-[state=active]:text-stone-50 dark:data-[state=active]:bg-stone-50 dark:data-[state=active]:text-stone-900"
            >
              Purchased
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-stone-900 data-[state=active]:text-stone-50 dark:data-[state=active]:bg-stone-50 dark:data-[state=active]:text-stone-900"
            >
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="collections" className="mt-6">
            <UserCollections userId={user.id} />
          </TabsContent>
          <TabsContent value="purchased" className="mt-6">
            <UserPurchases userId={user.id} />
          </TabsContent>
          <TabsContent value="settings" className="mt-6">
            <UserSettings userId={user.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

