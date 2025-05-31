import { Link } from 'react-router-dom';

const RecipeTemplate = (props) => {
  const {id, image, title, chef, desc} = props.recipe;
  return (
    <Link
    className='shadow-lg duration-300 hover:scale-50'
    to={`/recipes/details/${id}`} >
      <img src='https://prashantcorner.com/cdn/shop/files/RasgullaSR-1_f6196154-1993-44e5-af5b-51e2ada24d3d.png?v=1720595119' alt='' />
      <h1>{title}</h1>
      <small>{chef}</small>
      <p>
        {desc.substr(0, 30)}...{" "}
        <small className='text-blue-400' >more</small>
      </p>
    </Link>
  )
}

export default RecipeTemplate
