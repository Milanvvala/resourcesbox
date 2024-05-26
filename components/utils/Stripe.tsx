import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "sonner"
import { createStripeCheckoutSession } from "@/lib/stripe-action"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

const tiers = [
  {
    name: "Get More Credits",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$5", annually: "$60" },
    description: "Support your child with their homework",
    features: ["100 credits", "Ask me anything", "Covers 100 conversations"],
    mostPopular: false
  }
]

export default function StripeSubscription() {
  async function handleCheckout() {
    console.log('handle checkout')
    try {
      const lineItems = [
        {
          price: "price_1PGuXqSFX9j46wJY2VLJK7OE",
          quantity: 1
        }
      ]

      const { sessionId, checkoutError } = await createStripeCheckoutSession(
        lineItems
      )
      console.log(sessionId, checkoutError, 'session details')

      if (!sessionId || checkoutError) {
        throw new Error(checkoutError || "Failed to create checkout session!")
      }

      const stripe = await stripePromise
      console.log(stripe)
      if (!stripe) throw new Error("Failed to load Stripe!")
      const { error } = await stripe.redirectToCheckout({ sessionId })

      if (error) {
        if (error instanceof Error) throw new Error(error.message)
      } else {
        throw error
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to create checkout session!")
    }
  }
  return (
    <div>
      <div className="mx-auto w-full max-w-md">
        <div className="isolate grid grid-cols-1 gap-8 px-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular
                  ? "ring-2 ring-primary"
                  : "ring-1 ring-muted-foreground",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={cn(
                    tier.mostPopular ? "text-primary" : "text-muted-foreground",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full  px-2.5 py-1 text-xs font-semibold ">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm ">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight ">
                  {tier.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 ">/month</span>
              </p>
              <button
                onClick={handleCheckout}
                aria-describedby={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "  shadow-sm "
                    : " ring-1 ring-inset  emerald-300",
                  "mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                )}
              >
                Get started today
              </button>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none " aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
