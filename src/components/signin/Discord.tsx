import Image from "next/image";
import styles from '@bwsite/styles/signinpage.module.css'

export default function GoogleSignInButton() {
  return (
    <button className={styles.button}>
      <Image src={"/Discord.svg"} alt="google" width={20} height={20} className='absolute' />
      <span className='text-center w-full'>
        Discord
      </span>
    </button>
  )
}