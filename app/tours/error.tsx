'use client'

function error({error}:{error: Error }) {
    // We can also access the error message, but we will skip this
    console.log(error)
    return (
    <div>There was an error...</div>
  )
}

export default error
