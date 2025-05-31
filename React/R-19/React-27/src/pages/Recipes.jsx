import { useContext } from 'react'
import { recipecontext } from '../contexts/RecipeContext'
import { Link } from 'react-router-dom';
import RecipeTemplate from '../components/RecipeTemplate';

const Recipes = () => {
  const {data, setdata } = useContext(recipecontext);

  const reciperender = data.map((recipe)=> (
    <RecipeTemplate key={recipe.id} recipe={recipe} />  ) ) 
  return (
    <div>
      <Link to="/recipes/create-recipe">Create</Link>
      <hr className='my-3' />
      {data.length > 0 ? reciperender : "No Recipe Found"}
    </div>
  )
}

export default Recipes
