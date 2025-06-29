// Delete user is to be kept as reference
import { deleteUser, removeUser } from "@/utils/actions";

// This component is looking for the prop ID.
// This is going to be the user id & we need to provide a type which will be a string.
// This will be a sever component
// We create the input, but we do not display the input. Effectively, we hide the input
// We set type equals to hidden
function DeleteButton({id}:{id:string}) {
  // We will pass in the edit
  // We use bind, we get our server action, we pass whatever values in our case ID & then we pass in this function (removeUserWithId)
  // As a result, we will not pass in the ID into our HTML
const removeUserWithId = removeUser.bind(null, id)
    // We will render the form & call the server action
    // Where we have the form, remember we have the action & we want to set it equal to delete user
    // We want to pass in the user ID
    // We need to make sure that we pass in that input hidden
    // Name is something we are going to use in our action, in our server action
    // The value will be equal to our user id
    return (
    <form action={removeUserWithId}>
      <input type="hidden" name='name' value='shakeAndBaked' />
        <button type="submit" className='bg-red-500 text-white text-xs rounded p-2'>
            Delete
        </button>
    </form>
  )
}

export default DeleteButton