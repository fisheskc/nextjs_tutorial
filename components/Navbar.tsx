// import HomePage from '../app/page';
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="max-w-3x1 py-4 flex justify-center gap-x-4">
      <Link href='/'>Home</Link> 
      <Link href='/counter'>Counter</Link>
      <Link href='/tours'>Tours</Link>
      <Link href='/actions'>Actions</Link>
    </nav>
  )
}

export default Navbar
