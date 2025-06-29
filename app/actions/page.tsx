import Form from '@/components/Form';
import UsersList from '@/components/UsersList'
// We first use our form component
// We can setup the server actions inside of the page component
function ActionsPage() {
  return (
    <>
      <Form />
      <UsersList />
    </>
  )
}

export default ActionsPage
