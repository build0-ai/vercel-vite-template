import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/welcome")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);
  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen items-center justify-center transition-opacity duration-1000 ease-in-out",
        message ? "opacity-100" : "opacity-0"
      )}
    >
      <img src="/build0.png" alt="Build0" className="w-10 h-10" />
      <div className="text-2xl font-bold mt-2">{message}</div>
    </div>
  );
}
