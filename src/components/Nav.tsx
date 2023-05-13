"use client";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";

const CATEGORYS = [
  { icon: <AiOutlineHome />, link: "/", fillIcon: <AiFillHome /> },
  { icon: <RiSearchLine />, link: "/search", fillIcon: <RiSearchFill /> },
  { icon: <BsPlusSquare />, link: "/new", fillIcon: <BsPlusSquareFill /> },
];

export default function Nav() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <section className=" flex items-center p-5 border justify-between">
      <Link href="/">
        <h1 className=" text-2xl font-bold cursor-pointer">instangram</h1>
      </Link>
      <section className="flex items-center gap-3">
        {CATEGORYS.map((item) => {
          const { icon, link, fillIcon } = item;
          return link === pathname ? (
            <Link key={link} href={link} className="text-2xl">
              {fillIcon}
            </Link>
          ) : (
            <Link key={link} href={link} className="text-2xl">
              {icon}
            </Link>
          );
        })}
        {user && (
          <Link href={`/user/${user.username}`}>
            <Avatar image={user.image} />
          </Link>
        )}
        {session ? (
          <ColorButton text="Sign out" onClick={() => signOut()} size="small" />
        ) : (
          <ColorButton text="Sign in" onClick={() => signIn()} size="small" />
        )}
      </section>
    </section>
  );
}
