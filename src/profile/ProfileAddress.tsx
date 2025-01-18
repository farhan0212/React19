import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>profile Address</h2>
      <p>Hello {profile}</p>
    </>
  );
}
