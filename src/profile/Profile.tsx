import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>profile</h2>
      <p>Hello {profile}</p>
    </>
  );
}
