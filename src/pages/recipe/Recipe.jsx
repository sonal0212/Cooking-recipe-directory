import { useFetch } from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}
      {isPending && <p className="loading">Loading ...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p className="recipe-cookingtime">
            Takes {recipe.cookingTime} to cook.
          </p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <h4 className="steps">Steps</h4>
          <p className="method-list">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
