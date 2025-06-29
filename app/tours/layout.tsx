// In here, we still want to access the children
// Children in this case represents, pages inside the tours segment
// The main one, the parent, & then the rest of the pages that are inside
// We will set it equal to React & ReactNode since we are using TypeScript
// Inside of the div, we come up with the layout we want to share in these pages
// w-1/2 Will span half the size of the parent
function ToursLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <header className="py-2 w-1/2 bg-slate-500 mb-4">
            <h1 className="text-3x1 text-white text-center">
                Nested Layout
            </h1>
        </header>
        {children}
    </div>
  )
}

export default ToursLayout
