import Image from "next/image"

export default function Logo() {
  return (
    <div className="relative h-6 w-auto flex justify-center items-center">
      {/* Light mode logo */}
      <Image
        src="/logos/black-logo.svg"
        alt="Logo Light"
        width={150}
        height={40}
        className="block dark:hidden h-full w-auto"
        priority
      />

      {/* Dark mode logo */}
      <Image
        src="/logos/white-logo.svg"
        alt="Logo Dark"
        width={150}
        height={40}
        className="hidden dark:block h-full w-auto"
        priority
      />
    </div>
  )
}
