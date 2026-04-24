import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
    const session = await auth.api.getSession({ headers: await headers() });
    return <div>{session ? <div>Hello, {session.user.name}</div> : <div>Not logged in</div>}</div>;
}
