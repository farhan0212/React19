import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { useState } from "react";
import ProfileInput from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState<string>("");
  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileInput name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
