import { doSignInFacebook, doSignInGoogle, doSignInLinkedIn } from "../actions";

// import { doSignInGoogle, doSignInLinkedIn, doSignInFacebook } from "../actions";
const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={doSignInGoogle}>
        <button className="bg-orange-400 p-2 rounded-md m-1" type="submit">
          Sign In With Google
        </button>
      </form>

      <form action={doSignInLinkedIn}>
        <button className="bg-orange-400 p-2 rounded-md m-1" type="submit">
        Sign In With LinkedIn
        </button>
      </form>

      <form action={doSignInFacebook}>
        <button className="bg-orange-400 p-2 rounded-md m-1" type="submit">
        Sign In With Facebook
        </button>
      </form>
    </div>
  );
};

export default Signin;
