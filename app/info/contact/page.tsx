import Link from 'next/link'


function ContactPage() {
  return (
    <div>
      <h1 className="text-7x1">Contact Page</h1>
      <Link href="/about" className='text-xl text-blue-500 inline-block mt-8'>
        back home
      </Link>
    </div>
  )
}

export default ContactPage