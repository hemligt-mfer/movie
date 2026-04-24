"use client";

import { ComponentProps } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = ComponentProps<typeof Button>;

export default function LogoutButton({ children, disabled, ...props }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        const { error } = await authClient.signOut();
        setLoading(false);

        if (error) {
            toast.error(error.message || "An unknown error occurred.");
        }

        router.push("/");
        router.refresh();
    }

    return (
        <Button disabled={loading || disabled} onClick={handleClick} {...props}>
            {children || "Sign out"}
        </Button>
    );
}
