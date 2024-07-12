"use client";
import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../../../utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className=" w-full mx-auto rounded-none md:rounded-md p-4 md:p-8 shadow-input bg-white dark:bg-slate-800/75 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Get in touch
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Name" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="Email" type="email" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" placeholder="Your message" type="text"  />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-mtext-white dark:to-mtext-white/70 to-neutral-600 block dark:bg-mtext-white/60 w-full text-custom-dark rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send Message &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
