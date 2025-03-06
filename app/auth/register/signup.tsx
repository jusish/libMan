// app/components/auth/login.tsx
import { SignupForm } from "@/components/auth/signup-form";
import { GalleryVerticalEnd, SeparatorHorizontal, SeparatorVertical } from "lucide-react"

export const Signup = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        libMan
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <SignupForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/6192594_3125989.svg"
                    alt="Image"
                    className="absolute h-full w-full"
                />
            </div>
        </div>
    )

};