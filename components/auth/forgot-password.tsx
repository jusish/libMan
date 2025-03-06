import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTPDemo } from "./input_otp";

export function Forgot_Password({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Enter Code</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter 6-digit code set on <strong>ishimwe***t@gmail.com</strong>
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3 items-center justify-center w-full h-full">
          <InputOTPDemo/>
        </div>

        <Button type="submit" className="w-full">
          Verify Code{" "}
        </Button>
        
      </div>
      <div className="text-center text-sm">
        Do you want to go back?{" "}
        <a href="/auth/login" className="underline underline-offset-4">
          Back
        </a>
      </div>
    </form>
  );
}
