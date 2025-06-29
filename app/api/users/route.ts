import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';
// By default we have access to response & request objects, web APIs. We can also use next request
// & next response if we want more functionality. These just wrap around the web APIs & provide more features.
// Since we are using typeScript, we need to provide the type.
// For example, we can use this request in order to access the URL query parameters.
export const GET = async (request: NextRequest) => {
    // const { searchParams } = new URL(req.url)
    // We include backend logic where we want to fetch the users & we want to include them in our JSON response.
    // const id = searchParams.get('id')
    // If we want to have access to the ID, first we want to use req & URL.
    console.log(request.nextUrl.searchParams.get('id'));
    const users = await fetchUsers();
    // This is what we are going to be sending back to Response object D, web API
    // We can provide some data
    // For example, we can use message & API route 
    // Where we have the message, we provide our user share.
    // When we look in the browser, we have our users array
    return NextResponse.redirect(new URL('/', request.url));
    // return Response.json({users})
}
// We do need to access the request parameter. We will turn this into a JSON, whatever we are getting
// Request is the default one
export const POST = async (request: Request) => {
    const user = await request.json();
    // console.log(user)
    // We are spreading out all of the properties that we are passing, first name & last name
    const newUser = { ...user, id: Date.now().toString() };
    await saveUser(newUser);
    return Response.json({ msg: 'user created' });
}