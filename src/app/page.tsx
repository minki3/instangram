import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOption);
  const user = session?.user;
  console.log("1", user);

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className=" w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
