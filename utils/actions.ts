'use server'
// We are looking for the FS promises module.
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

 // This is the server action & it needs to be async. That is one of the requirements
 // Inside of it, we do want to place this use server, since we are inside of the server component
 // We want to export the function, since we want to access it
 // We can access those values
 // We actually want to add the ID, but since we are using TypeScript, we can use the ID string
type User = {
    id:string;
    firstName:string;
    lastName:string;
}

export const createUser = async(prevState: any, formData: FormData) => {
  'use server'
  console.log(prevState)
  // If you do not have the string, Typescript will complain, because potentially this can be null.
  // That is why we use this as a string
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  // We tend to call this rawData because we have not done any validations yet.
  // This is where a library like Zod can be used. Where we also validate the data
  // or we can do it ourselves.
  // const rawData = Object.fromEntries(formData)
  // We will have that object with whatever we have in a first name & last name
  // This is just temporary - id:Date.now()
  const newUser:User = {firstName, lastName, id:Date.now().toString()}

    try {
        // throw new Error('something went wrong')
        // We will use await, saveUser & provide the new user
        // We save the user
        await saveUser(newUser)
        revalidatePath('/actions')
        return 'user created successfully...'
    } catch(error) {
        // If not, then we are going to log the error to the console.
        // It is actually going to trigger the catch
        console.log(error)
        return 'failed to create a user...'
    }
    
    // some logic
    // redirect('/')
}

// Backend logic where we want to save the user in our file, but since we do not want to override this,
// we actually want to fetch the users first. At the moment the file is empty, but everytime we will submit the form,
// we will add more users.
// The reason why we are exporting this, we will use this in the user's list file.
// This is as a server component & we return an array of users.
// It is a generic, we just provide the user type
// We have two options, if we have some data, we will parse. If not, then we will just return an empty array.
export const fetchUsers = async():Promise<User []> => {
    // We want to read the file. We already created the file & it is in the route.
   const result = await readFile('users.json', {encoding:'utf8'});
   // We check with the ternary operator, if we have some values. We use parse & we provide the result
   // Then we would return an empty array
   const users = result ? JSON.parse(result) : []
   // Either it is going to be an array of users or an empty array
   return users
}

   // We have fetched the users. When do we want to unlock that?
   // There is also going to be a save user function
   // In that save user function, we will provide this new user
   // Whatever we get back from the form, we will save it in our file.
   // We are looking for user & the type is also going to be equal to user
   // From the function, we techically do not return anything
   // We want to get all the users with the help of fetchUsers
   // Whatever we have in the file
   // Once we invoke the saveUser & provide a new user value, this value is actually going
   // to be added to users JSON
   export const saveUser = async (user:User) => {
    const users = await fetchUsers()
    // We add the new user to the array. We provide the user we are getting as an argument.
    users.push(user)
    // Then the last step is to use await & then write the file.
    await writeFile('users.json', JSON.stringify(users))
   }
   // There is no useFormStatus
   // formData is our first argument & is equal to our type
   // First option, how can we pass the user id
   // We have access to the value 
   export const deleteUser = async(formData:FormData) => {
    const id = formData.get('id') as string;
     const users = await fetchUsers()
    // We add the new user to the array. We provide the user we are getting as an argument.
    // We are not going to add this to a list, effectively, we will filter the list.
    // We want to return the items where the user ID does not match the ID that we are passing in
    // If the user does match, we return this item
    // If it does match, then we remove it from the list.
    // We get the users, we filter them, & instead of passing in the users, we use updated users.
    const updatedUsers = users.filter((user) => user.id !== id)
    // Then the last step is to use await & then write the file.
    await writeFile('users.json', JSON.stringify(updatedUsers))
    // Remember, we do not want to read the file
    revalidatePath('/actions')
   }
   // The first is one going to be the ID & we set up the types
   // If you have an object, you will set up an object & every property will have some kind of type since we are using typeScript
   // formData is going to be our second argument
   // We will be accessing the name
   export const removeUser = async(id:string, formData:FormData) => {
    // We want to access the name as a string
    // This should be shake and bake if everything is correct
        const name = formData.get('name') as string
        console.log(name)

           const users = await fetchUsers()
    // We add the new user to the array. We provide the user we are getting as an argument.
    // We are not going to add this to a list, effectively, we will filter the list.
    // We want to return the items where the user ID does not match the ID that we are passing in
    // If the user does match, we return this item
    // If it does match, then we remove it from the list.
    // We get the users, we filter them, & instead of passing in the users, we use updated users.
    const updatedUsers = users.filter((user) => user.id !== id)
    // Then the last step is to use await & then write the file.
    await writeFile('users.json', JSON.stringify(updatedUsers))
    // Remember, we do not want to read the file
    revalidatePath('/actions')
   }