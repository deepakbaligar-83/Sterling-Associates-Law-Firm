import Image from "next/image";

export default function TeamProfile({ name, title, img, bio }: { name: string; title: string; img?: string; bio?: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full ring-2 ring-[--accent]/30">
        <Image src={img || "/next.svg"} alt={name} width={112} height={112} className="object-cover" />
      </div>
      <h3 className="mt-3 text-base font-semibold text-[--navy] dark:text-white">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
      {bio && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{bio}</p>}
    </div>
  );
}
