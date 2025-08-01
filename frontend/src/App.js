// src/App.js
import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import MainPage from "./MainPage";

 function App() {
  return (
    <>
      <SignedIn>
        <MainPage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default App;
