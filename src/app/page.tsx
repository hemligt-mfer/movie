import LogoutButton from "@/components/logout-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
    const session = await auth.api.getSession({ headers: await headers() });
    return (
        <div>
            <div>{session ? <div>Hello, {session.user.name}</div> : <div>Not logged in</div>}</div>
            <LogoutButton />
        </div>
    );
}
