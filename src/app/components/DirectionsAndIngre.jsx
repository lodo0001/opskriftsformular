"use client";
import { useState } from "react";

export default function DirectionsAndIngre() {
  const [directions, setDirections] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  //   funktion til når man tilføjer en ingredient
  function addIngredient() {
    if (!ingredient.trim()) return;

    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  }

  //   funktion til når man sletter en ingredient
  function deleteIngredient(indexToRemove) {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="flex justify-between">
      {/* kode til directions */}
      <div className="grid">
        <h1 className="text-[#142AA6] font-bold">Directions:</h1>
        <textarea
          placeholder="Step 1..."
          name="directions"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
          className="border p-4 w-xl"
        />
      </div>

      {/* kode til listen */}
      <div className="grid">
        <p className="text-[#142AA6] font-bold">Ingredient list:</p>

        {ingredients.length === 0 ? (
          <p></p>
        ) : (
          <ul>
            {ingredients.map((item, i) => (
              <li key={i} className="flex gap-2 items-center">
                <span>{item}</span>

                <button
                  type="button"
                  onClick={() => deleteIngredient(i)}
                  className="text-[#142AA6]"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* ingredient input */}
      <div>
        <h1 className="text-[#142AA6] font-bold">Add ingredient here</h1>

        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="flour 200gram.."
          className="border p-2 flex-1"
        />

        <button type="button" onClick={addIngredient}>
          +
        </button>

        <input
          type="hidden"
          name="ingredients"
          value={JSON.stringify(ingredients)}
        />
      </div>
    </div>
  );
}
