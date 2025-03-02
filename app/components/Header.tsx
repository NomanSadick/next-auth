import { auth, signIn, signOut } from "@/auth";

import Image from "next/image";
import Link from "next/link";
import Signout from "./Signout";
import Signin from "./Signin";
const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {session?.user ? (
        <div className="flex">
          <p>{session?.user?.name}</p> |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <Signout />
        </div>
      ) : (
        <Signin />
        // <p>Ask to login</p>
      )}
    </div>
  );
};

export default Header;

