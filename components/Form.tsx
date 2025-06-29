'use client'
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

import { createUser } from "@/utils/actions";

const SubmitButton = () => {
  // We also have this option of invoking useFormStatus
  const {pending} = useFormStatus()
  // This is what we are going to render. So we are returning a button type submit
  // So if the value pending is equal to true, then we will disable the button
  // Inside of the button, we check for the value & we setup the ternary operator
  // If not, then we will just use submit
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
        {pending?'submitting...' : 'submit'}
   </button>
  )
}



function Form() {
  // We are getting back the current state
  // Instead of passing createUser, we want to pass in the formAction
  // Whatever we return from createUser will be that current state
  // On the initial render it is actually null 
  // TypeScript is now complaining, why is that? Once we set up this useformState, 
  // we pass our server actioh into the hook
  const [message, formAction] = useActionState(createUser, null)
  // We are looking for the message
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2x1 capitalize mb-4">create user</h2>
      <input type="text" name="firstName" defaultValue="peter" required className={inputStyle} />
      <input type="text" name="lastName" defaultValue="smith" required className={inputStyle} />
      <SubmitButton />
    </form>
  )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form
