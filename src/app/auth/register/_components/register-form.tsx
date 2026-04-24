"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1, "Name is required!").max(32),
    email: z.email().max(128),
    password1: z.string().min(8).max(128),
    password2: z.string().min(8).max(128),
    birthdate: z.optional(z.date()),
    phone: z.optional(
        z.string().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, {
            message: "Enter a valid phone number.",
        }),
    ),
    address: z.string().min(8).max(128),
    zipCode: z.string().min(5).max(12),
    creditCardNumber: z
        .string()
        .regex(
            /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            { message: "Enter a valid credit card number." },
        ),
});

export default function RegisterForm() {
    return <div>Bajsbajs</div>;
}
