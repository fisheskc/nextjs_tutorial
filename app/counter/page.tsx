// We will use section to demonstrate, the static content we are going to send from the sever
// We can nest the client component inside of the sever component
import Counter from "@/components/Counter"

function CounterPage() {
  return (
    <section>
        <h1 className="text-6x1 mb-16">Page Content</h1>
        <Counter />
    </section>
  )
}

export default CounterPage
