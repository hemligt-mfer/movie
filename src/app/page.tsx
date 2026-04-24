import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="p-8 max-w-5xl mx-auto">
      
      {session ? (
        <div className="text-lg">
          Hello, <span className="font-semibold">{session.user.name}</span>
        </div>
      ) : (
        <div className="text-gray-600">
          Not logged in
        </div>
      )}

    </div>
  );
}