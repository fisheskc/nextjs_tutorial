import { fetchUsers } from "@/utils/actions";
import DeleteButton from './DeleteButton'

async function UserList() {
  const users = await fetchUsers()
  // We iterate over the user list
  // The length can be empty initially, & therefore the length is equal to zero.
  // If there is nothing in the array, we will display the paragraph
  // We iterate over the user with map
  return (
    <div className="mt-4">
      {users.length? 
      <div className="max-w-lg">
        {users.map((user) => {
          return (
            <h4 key={user.id} className="capitalize text-lg flex justify-between items-center mb-2">
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          )
        })}
      </div>:<p>No users found...</p>}
    </div>
  )
}

export default UserList
