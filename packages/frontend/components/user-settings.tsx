"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function UserSettings({ userId }: { userId: string }) {
  // Mock initial data (replace with actual data fetching)
  const [userData, setUserData] = useState({
    name: "Crypto Artist",
    email: "artist@example.com",
    bio: "Digital artist exploring the boundaries of NFTs and blockchain technology.",
    notifications: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setUserData((prev) => ({ ...prev, notifications: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., API call to update user data)
    console.log("Updated user data:", userData)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Account Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            Display Name
          </Label>
          <Input
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleInputChange}
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-gray-300">
            Bio
          </Label>
          <Textarea
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            className="bg-gray-900 border-gray-700 text-white h-32"
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications" className="text-gray-300">
            Email Notifications
          </Label>
          <Switch id="notifications" checked={userData.notifications} onCheckedChange={handleSwitchChange} />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white"
        >
          Save Changes
        </Button>
      </form>
    </div>
  )
}

