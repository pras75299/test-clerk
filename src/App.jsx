import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
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
          <div className="mt-4">
            <UserProfile />
          </div>
        </SignedIn>
      </header>
    </>
  );
}

export default App;
