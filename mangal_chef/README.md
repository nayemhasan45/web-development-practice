# Mangal Chef - Recipe Manager

A modern React application for managing recipes with a beautiful, responsive design built with Tailwind CSS.

## Features

- **Recipe Browser**: Browse through a collection of delicious recipes
- **Want to Cook List**: Add recipes to your cooking wishlist
- **Currently Cooking**: Move recipes from wishlist to active cooking
- **Duplicate Prevention**: Toast notifications prevent duplicate recipe selection
- **Real-time Totals**: Calculate total preparation time and calories
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, modern interface with Tailwind CSS

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Context API** for state management
- **React Toastify** for notifications
- **Responsive Design** for mobile compatibility

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn


## Usage

1. **Browse Recipes**: Scroll through the recipe cards to see available dishes
2. **View Ingredients**: Click on the ingredients section to expand and see all ingredients
3. **Add to Want to Cook**: Click "Want to Cook" button to add recipes to your list
4. **Move to Cooking**: Click "Preparing" button to move recipes to currently cooking
5. **Track Totals**: View total preparation time and calories for both lists

## Features in Detail

### Recipe Management
- Add recipes to "Want to Cook" list
- Move recipes to "Currently Cooking" when ready to prepare
- Prevent duplicate recipe selection with toast notifications
- Real-time calculation of total time and calories

### Responsive Design
- Mobile-first approach
- Sticky sidebar on desktop
- Collapsible mobile menu
- Optimized layouts for all screen sizes

### User Experience
- Smooth animations and transitions
- Toast notifications for user feedback
- Loading states and error handling
- Clean, intuitive interface

## Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary colors (red theme)
- Secondary colors (green theme)

### Recipes
Add or modify recipes in `src/data/recipes.json`:
```json
{
  "recipe_id": 1,
  "recipe_name": "Recipe Name",
  "recipe_image": "image_url",
  "short_description": "Brief description",
  "ingredients": ["ingredient 1", "ingredient 2"],
  "preparing_time": "30 min",
  "calories": "320 calories"
}
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

This project is open source and available under the MIT License.
