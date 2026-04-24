import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { nextCookies } from "better-auth/next-js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { toast } from "sonner";

dotenv.config();

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        requireEmailVerification: true,
        resetPasswordTokenExpiresIn: 60 * 30,
        sendResetPassword: async ({ user, url }) => {
            console.log(`Password reset url: ${url}`);
            // Todo: Send email to the user.
        },
    },
    plugins: [nextCookies()],
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: async ({ user, url }) => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });
            transporter.sendMail(
                {
                    from: "adam.lundvall@gmail.com",
                    to: user.email,
                    subject: "Verify your email address",
                    text: `Click the link to verify your email: ${url}`,
                },
                function (error, info) {
                    if (error) {
                        toast.error("Couldn't send email." + error.message);
                    } else {
                        toast.success("Email sent: " + info.response);
                    }
                },
            );
        },
    },
});
