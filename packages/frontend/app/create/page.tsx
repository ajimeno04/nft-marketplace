"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function CreateNFT() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container py-8 max-w-4xl relative z-10">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            Create New NFT
          </h1>
          <p className="text-gray-400 mt-2">Transform your digital creation into a unique NFT</p>
        </div>

        <Card className="border border-gray-800 bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid gap-6">
              {/* Image Upload Section */}
              <div className="space-y-4">
                <Label className="text-gray-300">NFT Artwork</Label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-900/50">
                  {previewImage ? (
                    <div className="relative w-full max-w-md aspect-square">
                      <Image
                        src={previewImage || "/placeholder.svg"}
                        alt="NFT Preview"
                        fill
                        className="rounded-lg object-cover"
                      />
                      <Button
                        variant="secondary"
                        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70"
                        onClick={() => setPreviewImage(null)}
                      >
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <label className="cursor-pointer text-center">
                      <div className="space-y-4">
                        <div className="mx-auto h-20 w-20 rounded-full bg-gray-800 flex items-center justify-center">
                          <ImageIcon className="h-10 w-10 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg font-medium text-gray-300">Drop your artwork here</p>
                          <p className="text-sm text-gray-500">Supports JPG, PNG, GIF. Max size 50MB.</p>
                          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload File
                          </Button>
                        </div>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                  )}
                </div>
              </div>

              {/* NFT Details Section */}
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter NFT name" className="bg-gray-900 border-gray-700 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-gray-300">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your NFT"
                      className="h-32 bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Collection & Properties */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="collection" className="text-gray-300">
                    Collection
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Select collection" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="cosmic">Cosmic Collection</SelectItem>
                      <SelectItem value="digital">Digital Dreams</SelectItem>
                      <SelectItem value="new">Create New Collection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="blockchain" className="text-gray-300">
                    Blockchain
                  </Label>
                  <Select defaultValue="eth">
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Select blockchain" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="eth">Ethereum</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="sol">Solana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">Pricing</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="price" className="text-gray-300">
                      Price
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter price"
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="royalty" className="text-gray-300">
                      Royalty %
                    </Label>
                    <Input
                      id="royalty"
                      type="number"
                      placeholder="Enter royalty percentage"
                      max="50"
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white"
                size="lg"
              >
                Create NFT
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

