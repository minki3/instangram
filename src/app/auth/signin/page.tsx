import { handler } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import Signin from "@/components/Signin";

export default async function SignInPage() {
  const session = await getServerSession(handler);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[20%]">
      <Signin providers={providers} />
    </section>
  );
}
