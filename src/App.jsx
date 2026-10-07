import React, { useState } from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const recipes = [
    { id: 1, name: "Classic Margherita Pizza", time: "30 mins", difficulty: "Medium", emoji: "🍕", category: "Italian" },
    { id: 2, name: "Creamy Alfredo Pasta", time: "20 mins", difficulty: "Easy", emoji: "🍝", category: "Italian" },
    { id: 3, name: "Avocado Power Salad", time: "10 mins", difficulty: "Easy", emoji: "🥗", category: "Healthy" },
    { id: 4, name: "Berry Pancakes", time: "15 mins", difficulty: "Easy", emoji: "🥞", category: "Breakfast" },
    { id: 5, name: "Spicy Chicken Tacos", time: "25 mins", difficulty: "Medium", emoji: "🌮", category: "Mexican" }
  ];

  // Filter recipes based on user search input
  const filteredRecipes = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '25px' }}>👩‍🍳 ChefBook Recipe Finder</h1>
      
      {/* Search Bar */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <input 
          type="text" 
          placeholder="Search by recipe or category (e.g. Italian, Pasta)..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '12px 20px', width: '80%', maxWidth: '450px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
        />
      </div>

      {/* Recipe Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', transition: 'transform 0.2s' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '10px' }}>{recipe.emoji}</span>
              <span style={{ fontSize: '11px', background: '#e3f2fd', color: '#0d47a1', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{recipe.category}</span>
              <h3 style={{ margin: '15px 0 10px 0', color: '#222', fontSize: '18px' }}>{recipe.name}</h3>
              <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>⏱️ Time: {recipe.time}</p>
              <p style={{ fontSize: '14px', color: '#666', margin: '5px 0 15px 0' }}>📊 Level: {recipe.difficulty}</p>
              <button 
                onClick={() => alert(`Opening recipe instructions for ${recipe.name}!`)}
                style={{ width: '100%', background: '#28a745', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
              >
                View Recipe
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', fontSize: '18px' }}>No recipes found matching "{searchQuery}".</p>
        )}
      </div>
    </div>
  );
}