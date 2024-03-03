import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function SuccessStripe() {
    return (
        <div className="py-10">
            <h2 className="h-screen">
                <div className="mt-32 md:max-w-[50vw] mx-auto">
                    <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                            Payment done!
                        </h3>

                        <h2 className="mt-4">Check your email to stay up to date with the delivery of your product.</h2>

                        <Button className="mt-4">
                            <Link href="/">
                                Go back
                            </Link>
                        </Button>
                    </div>
                </div>
            </h2>
        </div>
    )
}