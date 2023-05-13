interface Props {
  image?: string | null;
}

export default function Avatar({ image }: Props) {
  return (
    <div className=" h-9 w-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        className=" rounded-full p-[0.1rem]"
        alt="user image"
        src={image ?? undefined}
      />
    </div>
  );
}
