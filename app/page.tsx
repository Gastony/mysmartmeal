import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChefHat, ShoppingCart, Search, Plus, Users, Cloud } from "lucide-react"

export default function Dashboard() {
  const todaysMeal = {
    name: "Mediterranean Chicken Bowl",
    cookTime: "25 min",
    assignedTo: "Sarah",
    image: "/placeholder.svg?height=200&width=300",
  }

  const weeklyStats = {
    plannedMeals: 6,
    totalMeals: 7,
    shoppingItems: 12,
    familyMembers: 4,
  }

  const quickActions = [
    { name: "Add Recipe", icon: Plus, href: "/recipes/add", color: "bg-green-500" },
    { name: "Search Recipes", icon: Search, href: "/recipes", color: "bg-blue-500" },
    { name: "Plan Meals", icon: CalendarDays, href: "/meal-plan", color: "bg-purple-500" },
    { name: "Shopping List", icon: ShoppingCart, href: "/shopping", color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">SmartMeal</h1>
            <p className="text-gray-600">Intelligent meal planning for your family</p>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Weather: 72°F, Sunny</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Planned Meals</p>
                  <p className="text-2xl font-bold">
                    {weeklyStats.plannedMeals}/{weeklyStats.totalMeals}
                  </p>
                </div>
                <CalendarDays className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Shopping Items</p>
                  <p className="text-2xl font-bold">{weeklyStats.shoppingItems}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Family Members</p>
                  <p className="text-2xl font-bold">{weeklyStats.familyMembers}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Recipes</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
                <ChefHat className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Meal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  {"Today's Meal"}
                </CardTitle>
                <CardDescription>What's cooking today?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src={todaysMeal.image || "/placeholder.svg"}
                    alt={todaysMeal.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{todaysMeal.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>⏱️ {todaysMeal.cookTime}</span>
                      <span>👨‍🍳 Assigned to {todaysMeal.assignedTo}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="secondary">Mediterranean</Badge>
                      <Badge variant="secondary">Healthy</Badge>
                      <Badge variant="secondary">Quick</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action) => (
                  <Link key={action.name} href={action.href}>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12">
                      <div className={`p-2 rounded-md ${action.color}`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      {action.name}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates to your meal planning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Plus className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">New recipe added: "Spicy Thai Curry"</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <CalendarDays className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Meal plan updated for this week</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium">Shopping list generated (12 items)</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
