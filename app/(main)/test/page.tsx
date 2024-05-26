'use client'
import { Button } from "@/components/comps"
import StripeSubscription from "@/components/utils/Stripe"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

interface PageProps {}

export default function page(props: PageProps) {
  return (
    <main className="m-auto my-10  space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>

        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="hidden sm:flex" size={"sm"} variant={"link"}>
                Sign In
                {/* <Link href={"/create"}>Submit Tool</Link> */}
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <StripeSubscription />
      </div>
    </main>
  )
}
