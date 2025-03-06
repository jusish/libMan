import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Reset({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Reset Password</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter a new password for your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" placeholder="Strong password" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Confirm Password</Label>
                    </div>
                    <Input id="password" type="password" placeholder="Type password Again" required />
                </div>
                <a href="/dashboard">
                    <Button type="submit" className="w-full">
                        Change Password
                    </Button>
                </a>

            </div>
            <div className="text-center text-sm">
                Do you want to go back?{" "}
                <a href="/auth/login" className="underline underline-offset-4">
                    Back
                </a>
            </div>

        </form>
    )
}
