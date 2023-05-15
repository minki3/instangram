import { User } from "@/model/User";
import Avatar from "./Avatar";

interface Props {
  user: User;
}

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-sm text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        about ・ help ・ api ・ location ・ terms ・ jobs ・ language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @copyrigth instangram from METAL
      </p>
    </>
  );
}
