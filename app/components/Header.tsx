import { auth, signIn, signOut } from "@/auth";

import Image from "next/image";
import Signout from "./Signout";
import Signin from "./Signin";
const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {session?.user ? (
        <div className="flex flex-col justify-center items-center space-x-2 m-2.5 space-y-4">
          <p>{session?.user?.name}</p> 
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="bg-gray-200 p-2 rounded-lg text-amber-700">
          <Signout />
          </div>
        </div>
      ) : (
        <Signin />
        // <p>Ask to login</p>
      )}
      {/* https://yourwebsite.com/privacy-policy  */}
    </div>
  );
};

export default Header;

