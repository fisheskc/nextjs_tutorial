import Link from "next/link";
import Image from 'next/image'
const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async() => {
    // As far as the functionality, we do want to add a little delay just 
    // because we are going to work on the loading component.
    // This is not normally something you will add to your request
    // In this case, we are going to add a big delay of 3000
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // Fetch is looking for the URL
    const response =  await fetch(url)
    // As far as the type, it is going to be tour & array
    // We are still getting back the data
    const data:Tour[] = await response.json();
    return data
}

// We need to add async in front of the server component
async function ToursPage() {
    // It is actually going to be on the server, we are looking for tours
    // We iterate over the data, we should have access to all of the properties.
    // We should have a list of tours in the browser.
    // We still want to get the data in our tours page
    // We will invoke our custom fetch tours function
    // If everything is correct, we are still going to get back to tours
    const data = await fetchTours()
  return (
    <section>
      <h1 className="text-3x1 mb-4">Tours</h1>
      <div className="grid md: grid-cols-2 gap-8">
      {data.map((tour) => {
        return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="hover:text-blue-500"
             >
              <div className="relative h-48 mb-2">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  // Up to 768, this is going to be a 100%, 50vw = 50% & the rest of time it is going to be 33.
                  // This just helps NextJS to pick the correct size
                  sizes='(max-width:768) 100vw, (max-width:1200px) 50vw, 333vw'
                  priority
                  className='object-cover rounded'
                /> 
              </div>
                <h2>{tour.name}</h2>
            </Link>
        )
        
      })}
      </div>
    </section>
  )
}

export default ToursPage
