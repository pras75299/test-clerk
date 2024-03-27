import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
          <h1 className="text-3xl font-bold underline">
            Hello User you are not signed in!
          </h1>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <h1 className="text-3xl font-bold">Hello User you are signed in!</h1>
        </SignedIn>
      </header>
    </>
  );
}

export default App;
