// This is a client component, so we want to add this huge client directive
'use client'
// Inside of the loading one we are going to use a span
function loading() {
  return (
    <span className="text-xl capitalize">Loading tours...</span>
  )
}

export default loading
