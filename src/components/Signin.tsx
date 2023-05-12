"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

interface Props {
  providers: Record<string, ClientSafeProvider>;
}

export default function Signin({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          onClick={() => signIn(id)}
          key={name}
          text={`Sign in with ${name}`}
          size="big"
        />
      ))}
    </>
  );
}
