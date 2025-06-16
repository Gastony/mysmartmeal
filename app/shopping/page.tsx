"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Plus, Trash2, Download, Share, RotateCcw } from "lucide-react"
import { mockShoppingList } from "@/lib/data"

export default function ShoppingPage() {
  const [shoppingList, setShoppingList] = useState(mockShoppingList)
  const [newItem, setNewItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "produce", "meat", "dairy", "pantry", "frozen", "bakery", "other"]

  const toggleItem = (id: string) => {
    setShoppingList((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const addItem = () => {
    if (newItem.trim()) {
      const item = {
        id: Date.now().toString(),
        name: newItem,
        category: "other",
        quantity: "1",
        unit: "item",
        completed: false,
        fromRecipe: null,
      }
      setShoppingList((prev) => [...prev, item])
      setNewItem("")
    }
  }

  const removeItem = (id: string) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id))
  }

  const regenerateList = () => {
    // Logic to regenerate shopping list from meal plan
    console.log("Regenerating shopping list from meal plan...")
  }

  const filteredItems = shoppingList.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

  const completedCount = shoppingList.filter((item) => item.completed).length
  const totalCount = shoppingList.length

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      const category = item.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(item)
      return acc
    },
    {} as Record<string, typeof shoppingList>,
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping List</h1>
            <p className="text-gray-600">Your grocery list for this week</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={regenerateList} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Regenerate
            </Button>
            <Button variant="outline" className="gap-2">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Shopping Progress</h3>
                <p className="text-gray-600">
                  {completedCount} of {totalCount} items completed
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%
                </div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Items:</span>
                        <span className="font-medium">{totalCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed:</span>
                        <span className="font-medium text-green-600">{completedCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Remaining:</span>
                        <span className="font-medium text-orange-600">{totalCount - completedCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shopping List */}
          <div className="lg:col-span-3">
            {/* Add Item */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Item
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add new item..."
                    onKeyDown={(e) => e.key === "Enter" && addItem()}
                  />
                  <Button onClick={addItem}>Add</Button>
                </div>
              </CardContent>
            </Card>

            {/* Items by Category */}
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([category, items]) => (
                <Card key={category}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <span className="capitalize">{category}</span>
                      <Badge variant="outline">
                        {items.length} item{items.length !== 1 ? "s" : ""}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border ${
                            item.completed ? "bg-green-50 border-green-200" : "bg-white"
                          }`}
                        >
                          <Checkbox checked={item.completed} onCheckedChange={() => toggleItem(item.id)} />
                          <div className="flex-1">
                            <div className={`font-medium ${item.completed ? "line-through text-gray-500" : ""}`}>
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.quantity} {item.unit}
                              {item.fromRecipe && (
                                <span className="ml-2">
                                  • from <span className="font-medium">{item.fromRecipe}</span>
                                </span>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                  <p className="text-gray-600 mb-4">
                    {selectedCategory === "all"
                      ? "Your shopping list is empty. Add some items or generate from your meal plan."
                      : `No items in the ${selectedCategory} category.`}
                  </p>
                  <Button onClick={() => setSelectedCategory("all")}>View All Items</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
