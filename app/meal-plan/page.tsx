"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Plus, RotateCcw, ShoppingCart } from "lucide-react"
import { mockMealPlan, mockRecipes, familyMembers } from "@/lib/data"

export default function MealPlanPage() {
  const [selectedWeek, setSelectedWeek] = useState("current")
  const [mealPlan, setMealPlan] = useState(mockMealPlan)

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const mealTypes = ["breakfast", "lunch", "dinner"]

  const assignMeal = (day: string, mealType: string, recipeId: string, assignedTo: string) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: {
          recipeId,
          assignedTo,
          recipe: mockRecipes.find((r) => r.id === recipeId),
        },
      },
    }))
  }

  const generateShoppingList = () => {
    // Logic to generate shopping list from meal plan
    console.log("Generating shopping list...")
  }

  const autoSchedule = () => {
    // Logic to automatically schedule meals based on preferences
    console.log("Auto-scheduling meals...")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Meal Planner</h1>
            <p className="text-gray-600">Plan your family meals for the week</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={autoSchedule} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Auto Schedule
            </Button>
            <Button onClick={generateShoppingList} className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Generate Shopping List
            </Button>
          </div>
        </div>

        {/* Week Selector */}
        <div className="flex items-center gap-4 mb-6">
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="previous">Previous Week</SelectItem>
              <SelectItem value="current">Current Week</SelectItem>
              <SelectItem value="next">Next Week</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-sm text-gray-600">December 16-22, 2024</div>
        </div>

        {/* Family Members */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Family Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {familyMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{member.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meal Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {daysOfWeek.map((day) => (
            <Card key={day} className="min-h-[600px]">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{day}</CardTitle>
                <CardDescription className="text-sm">
                  {day === "Monday" && "Dec 16"}
                  {day === "Tuesday" && "Dec 17"}
                  {day === "Wednesday" && "Dec 18"}
                  {day === "Thursday" && "Dec 19"}
                  {day === "Friday" && "Dec 20"}
                  {day === "Saturday" && "Dec 21"}
                  {day === "Sunday" && "Dec 22"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mealTypes.map((mealType) => {
                  const meal = mealPlan[day.toLowerCase()]?.[mealType]
                  const assignedMember = familyMembers.find((m) => m.id === meal?.assignedTo)

                  return (
                    <div key={mealType} className="border rounded-lg p-3 bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium capitalize text-sm">{mealType}</h4>
                        {!meal && (
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Plus className="w-3 h-3" />
                          </Button>
                        )}
                      </div>

                      {meal ? (
                        <div className="space-y-2">
                          <div className="aspect-video relative overflow-hidden rounded">
                            <img
                              src={meal.recipe?.image || "/placeholder.svg?height=80&width=120"}
                              alt={meal.recipe?.name || "Meal"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-sm line-clamp-2">{meal.recipe?.name || "Unknown Recipe"}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                              <Clock className="w-3 h-3" />
                              {meal.recipe?.prepTime || 0}m
                            </div>
                            {assignedMember && (
                              <div className="flex items-center gap-1 mt-2">
                                <Avatar className="w-5 h-5">
                                  <AvatarImage src={assignedMember.avatar || "/placeholder.svg"} />
                                  <AvatarFallback className="text-xs">{assignedMember.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-gray-600">{assignedMember.name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4 text-gray-400">
                          <Plus className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="text-xs">Add meal</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Weekly Summary</CardTitle>
            <CardDescription>Overview of your meal planning progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">Meals Planned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Empty Slots</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">45</div>
                <div className="text-sm text-gray-600">Shopping Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Family Members</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
