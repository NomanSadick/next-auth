

import { doSignOut } from "../actions"


const Signout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form action={doSignOut}>
        <button type="submit">Sign Out</button>
    </form>
    </div>
  )
}

export default Signout