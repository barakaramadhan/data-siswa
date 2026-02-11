import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

export default function ProfileApp() {
  const [name, setName] = useState("Eko");
  const [address, setAddress] = useState("Kademangan");

  return (
    <ProfileContext.Provider
      value={{
        name,
        setName,
        address,
        setAddress
      }}
    >
      <ProfileForm />
      <Profile />
      <ProfileAddress />
    </ProfileContext.Provider>
  );
}
