import Login from "./login";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard')
  }, [])
  return (
    <Login />
  );
}
