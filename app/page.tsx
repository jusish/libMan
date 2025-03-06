import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-indigo-600">libMan</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Manage books, track borrowings, and streamline your library experience
          effortlessly.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex gap-4 mt-6">
        <Link href="/auth/login">
          <Button variant={"secondary"} className="py-6 px-9 cursor-pointer">Login</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="py-6 px-9 cursor-pointer">Sign Up</Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
        <FeatureCard
          title="Catalog Management"
          description="Easily organize and search for books with our smart catalog system."
        />
        <FeatureCard
          title="Borrow & Return"
          description="Track book loans and returns seamlessly with automated reminders."
        />
        <FeatureCard
          title="User Accounts"
          description="Allow users to manage their borrowed books and track due dates."
        />
        <FeatureCard
          title="Analytics Dashboard"
          description="Get insights into book usage and library performance with detailed reports."
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
