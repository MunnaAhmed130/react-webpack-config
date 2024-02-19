import { useState } from "react";

const shieldRecipe = {
  leather: 2,
  iron: 1,
  moonstone: 4,
};

const gauntletRecipe = {
  ...shieldRecipe,
  firestone: 1,
  moonstone: 3,
};

console.log(shieldRecipe);
console.log(gauntletRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipes:</h3>

      <button onClick={() => setRecipe(shieldRecipe)}>Shield Recipe</button>
      <button onClick={() => setRecipe(gauntletRecipe)}>Gauntlet Recipe</button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
