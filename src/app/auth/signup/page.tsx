import Image from "next/image";
import styles from "@bwsite/styles/signuppage.module.css";

export default async function Page() {
  return (
    <div>
      <Image src={"/background.png"} alt="background" width={1920} height={1080} className="absolute -z-10 w-full h-full object-cover" />
      <div className="md:bg-background md:w-1/2 md:translate-x-full h-dvh rounded-l-3xl flex flex-col justify-center items-center shadow-r-3xl">
        <div className="bg-background shadow-topdown-boxes rounded-3xl p-10 flex flex-col">
          <h1 className="font-extrabold text-5xl text-center">Sign Up</h1>
          <div className="flex flex-col gap-2 mt-4 items-center">
            <input type="text" placeholder="username" className={`${styles.input}`} autoComplete="username" />
            <input type="text" placeholder="Email" className={`${styles.input}`} autoComplete="email" />
            <input type="password" placeholder="Password" className={`${styles.input}`} autoComplete="current-password" />
            <input type="password" placeholder="Confirm Password" className={`${styles.input}`} autoComplete="current-password" />
            <button className="bg-primary text-white rounded-xl px-4 py-2 font-bold w-2/4 mt-2">Sign Up</button>
          </div>
          <span className="w-full text-center my-2">Already have an account? <a href="/auth/signin" className="underline text-blue-800">Sign In!</a></span>
        </div>
      </div>
    </div>
  )
}