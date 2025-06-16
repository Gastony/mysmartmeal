// Mock data for the SmartMeal application

export interface Recipe {
  id: string
  name: string
  description: string
  category: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: string
  rating: number
  image: string
  ingredients: string[]
  instructions: string[]
  tags: string[]
}

export interface FamilyMember {
  id: string
  name: string
  role: string
  avatar: string
  preferences: string[]
}

export interface ShoppingItem {
  id: string
  name: string
  category: string
  quantity: string
  unit: string
  completed: boolean
  fromRecipe: string | null
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    name: "Mediterranean Chicken Bowl",
    description: "A healthy and flavorful bowl with grilled chicken, quinoa, and fresh vegetables",
    category: "main-course",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["chicken breast", "quinoa", "cucumber", "tomatoes", "feta cheese", "olive oil"],
    instructions: ["Cook quinoa", "Grill chicken", "Chop vegetables", "Assemble bowl"],
    tags: ["healthy", "quick", "mediterranean", "high-protein"],
  },
  {
    id: "2",
    name: "Spicy Thai Curry",
    description: "Aromatic coconut curry with vegetables and your choice of protein",
    category: "main-course",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    difficulty: "medium",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["coconut milk", "curry paste", "vegetables", "rice", "lime"],
    instructions: ["Prepare vegetables", "Make curry base", "Simmer", "Serve with rice"],
    tags: ["spicy", "vegetarian", "thai", "comfort-food"],
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Classic Caesar salad with homemade dressing and croutons",
    category: "salads",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "easy",
    rating: 4.2,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["romaine lettuce", "parmesan cheese", "croutons", "caesar dressing"],
    instructions: ["Wash lettuce", "Make dressing", "Toss salad", "Add toppings"],
    tags: ["quick", "vegetarian", "salad", "classic"],
  },
  {
    id: "4",
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy homemade chocolate chip cookies",
    category: "desserts",
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: "easy",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["flour", "butter", "sugar", "chocolate chips", "eggs"],
    instructions: ["Mix dry ingredients", "Cream butter and sugar", "Combine", "Bake"],
    tags: ["sweet", "dessert", "baking", "comfort-food"],
  },
  {
    id: "5",
    name: "Avocado Toast",
    description: "Simple and nutritious breakfast with smashed avocado on sourdough",
    category: "breakfast",
    prepTime: 5,
    cookTime: 2,
    servings: 2,
    difficulty: "easy",
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["sourdough bread", "avocado", "lime", "salt", "pepper"],
    instructions: ["Toast bread", "Mash avocado", "Season", "Spread on toast"],
    tags: ["quick", "healthy", "vegetarian", "breakfast"],
  },
  {
    id: "6",
    name: "Beef Stir Fry",
    description: "Quick and easy stir fry with tender beef and crisp vegetables",
    category: "main-course",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "medium",
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=400",
    ingredients: ["beef strips", "mixed vegetables", "soy sauce", "garlic", "ginger"],
    instructions: ["Marinate beef", "Heat wok", "Stir fry beef", "Add vegetables", "Season"],
    tags: ["quick", "high-protein", "asian", "stir-fry"],
  },
]

export const familyMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Sarah",
    role: "Mom",
    avatar: "/placeholder.svg?height=40&width=40",
    preferences: ["healthy", "quick", "vegetarian"],
  },
  {
    id: "2",
    name: "Mike",
    role: "Dad",
    avatar: "/placeholder.svg?height=40&width=40",
    preferences: ["meat", "spicy", "comfort-food"],
  },
  {
    id: "3",
    name: "Emma",
    role: "Daughter",
    avatar: "/placeholder.svg?height=40&width=40",
    preferences: ["sweet", "pasta", "mild"],
  },
  {
    id: "4",
    name: "Jake",
    role: "Son",
    avatar: "/placeholder.svg?height=40&width=40",
    preferences: ["pizza", "burgers", "snacks"],
  },
]

export const mockMealPlan = {
  monday: {
    breakfast: {
      recipeId: "5",
      assignedTo: "1",
      recipe: mockRecipes.find((r) => r.id === "5"),
    },
    lunch: {
      recipeId: "3",
      assignedTo: "2",
      recipe: mockRecipes.find((r) => r.id === "3"),
    },
    dinner: {
      recipeId: "1",
      assignedTo: "1",
      recipe: mockRecipes.find((r) => r.id === "1"),
    },
  },
  tuesday: {
    breakfast: {
      recipeId: "5",
      assignedTo: "2",
      recipe: mockRecipes.find((r) => r.id === "5"),
    },
    dinner: {
      recipeId: "2",
      assignedTo: "1",
      recipe: mockRecipes.find((r) => r.id === "2"),
    },
  },
  wednesday: {
    dinner: {
      recipeId: "6",
      assignedTo: "2",
      recipe: mockRecipes.find((r) => r.id === "6"),
    },
  },
  thursday: {},
  friday: {},
  saturday: {},
  sunday: {},
}

export const mockShoppingList: ShoppingItem[] = [
  {
    id: "1",
    name: "Chicken Breast",
    category: "meat",
    quantity: "2",
    unit: "lbs",
    completed: false,
    fromRecipe: "Mediterranean Chicken Bowl",
  },
  {
    id: "2",
    name: "Quinoa",
    category: "pantry",
    quantity: "1",
    unit: "bag",
    completed: true,
    fromRecipe: "Mediterranean Chicken Bowl",
  },
  {
    id: "3",
    name: "Cucumber",
    category: "produce",
    quantity: "2",
    unit: "pieces",
    completed: false,
    fromRecipe: "Mediterranean Chicken Bowl",
  },
  {
    id: "4",
    name: "Tomatoes",
    category: "produce",
    quantity: "4",
    unit: "pieces",
    completed: false,
    fromRecipe: "Mediterranean Chicken Bowl",
  },
  {
    id: "5",
    name: "Feta Cheese",
    category: "dairy",
    quantity: "1",
    unit: "container",
    completed: false,
    fromRecipe: "Mediterranean Chicken Bowl",
  },
  {
    id: "6",
    name: "Coconut Milk",
    category: "pantry",
    quantity: "2",
    unit: "cans",
    completed: false,
    fromRecipe: "Spicy Thai Curry",
  },
  {
    id: "7",
    name: "Curry Paste",
    category: "pantry",
    quantity: "1",
    unit: "jar",
    completed: true,
    fromRecipe: "Spicy Thai Curry",
  },
  {
    id: "8",
    name: "Mixed Vegetables",
    category: "frozen",
    quantity: "1",
    unit: "bag",
    completed: false,
    fromRecipe: "Spicy Thai Curry",
  },
  {
    id: "9",
    name: "Avocados",
    category: "produce",
    quantity: "4",
    unit: "pieces",
    completed: false,
    fromRecipe: "Avocado Toast",
  },
  {
    id: "10",
    name: "Sourdough Bread",
    category: "bakery",
    quantity: "1",
    unit: "loaf",
    completed: false,
    fromRecipe: "Avocado Toast",
  },
  {
    id: "11",
    name: "Milk",
    category: "dairy",
    quantity: "1",
    unit: "gallon",
    completed: false,
    fromRecipe: null,
  },
  {
    id: "12",
    name: "Eggs",
    category: "dairy",
    quantity: "1",
    unit: "dozen",
    completed: true,
    fromRecipe: null,
  },
]
