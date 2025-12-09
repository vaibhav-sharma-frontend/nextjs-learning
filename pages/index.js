import { useSession, signIn, signOut } from "next-auth/react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const session = useSession();
  console.log({ session });

  if (session.data === null) return <button onClick={signIn}>Login </button>;
  return (
    <div className={styles.container}>
      <h2>Authentication</h2>
      <p>Hello {session?.data?.user?.name}</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
