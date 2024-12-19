import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Here is Home</h1>
      <Image src='/assets/images/logo.svg' width={200} height={2000} alt="Logo" />
    </main>
  )
}
