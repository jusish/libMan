// app/components/auth/login.tsx
import { Reset } from "@/components/auth/reset-password";
import { GalleryVerticalEnd, SeparatorVertical } from "lucide-react"

export const PasswordReset = () => {
    return (
        <div className="justify-center items-center">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-center">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        libMan
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <Reset />
                    </div>
                </div>
            </div>
        </div>
    )

};