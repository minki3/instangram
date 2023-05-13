"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          onClick={() => signIn(id, { callbackUrl })}
          key={name}
          text={`Sign in with ${name}`}
          size="big"
        />
      ))}
    </>
  );
}
