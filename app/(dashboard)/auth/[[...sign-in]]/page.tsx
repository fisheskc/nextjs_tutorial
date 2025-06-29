
// For the SignInPage, the param is sign-in & we know that is a string
// This is a dynamic one & therefore, we will have two sets of square brackets, 
const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  // We want to console.log the params, this is dynamic & if we use sign in, we need to place this in the square brackets, 
  // then we also need to set up the second set of square brackets. We then need to look for the value.
  // Sign in is going to be the first one, so since arrays are zero index based, this is going to be zero.
  // If we want to access one, two, three, we need to use one & then we need to take the same value below 
  // & we just access it. We will set up the sign in page & we will provide this in the browser.
  console.log(params['sign-in'][1]);
  return <div>SignInPage :{params['sign-in'][1]}</div>;
};
export default SignInPage;