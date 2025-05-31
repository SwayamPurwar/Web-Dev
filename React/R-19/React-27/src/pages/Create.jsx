import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { recipecontext } from '../contexts/RecipeContext';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext)
  const {
    register,
    handleSubmit,
    reset,
    formState : {errors},
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success("New Recipe Added");
    reset();
    navigate(-1);
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input {...register("image")} type="url" placeholder='Image' />
      <input {...register("title")} type="text" placeholder='Title' />
      <input {...register("chef")} type="text" placeholder='Chef Name' />

      <textarea 
      {...register("desc")} placeholder='enter description here' >
      </textarea>
      <textarea 
      {...register("ingr")} placeholder='enter ingredients here' >
      </textarea>
      <textarea 
      {...register("inst")} placeholder='enter instructions here' >
      </textarea>
      <select {...register("category")} >
        <option value="Cat-1">Category - 1</option>
        <option value="Cat-2">Category - 2</option>
        <option value="Cat-3">Category - 3</option>
      </select>
      <button>Register Recipe</button>
    </form>
  )
}

export default Create
