import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/helloworld")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>Welcome to Build0! {message}</div>
    </div>
  );
}
