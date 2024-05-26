//   https://stripe.com/docs/checkout/quickstart?client=next
// -> "stripe:listen": "stripe listen --forward-to localhost:3000/api/webhooks/stripe"
// -> Test Cards
//   Success : 4242424242424242 Decline : 4000000000000002 Require Authentication : 4000002500003155
// https://stripe.com/docs/testing

export const config = {
  plans: [
    // priceId: process.env.NODE_ENV === "development" ? "test_price_id_1234" : "prod_price_id_1234",
    {
      name: "Basic",
      description: "Basic Plan yo!",
      price: "$1/month",
      stripePriceId: "price_1PGuXqSFX9j46wJY2VLJK7OE"
    },
    {
      name: "Pro",
      description: "Pro Plan yo!",
      price: "$3/month",
      stripePriceId: "price_1PGuZsSFX9j46wJYAr7UpKw4"
    }
  ]
}
// export interface Organization {
//   name: string, timezone?: string, logoURL?: string | null, subscription?: OrganizationSubscription, customerId?: string
// }
// enum OrganizationPlanStatus { AwaitingPayment = "awaitingPayment", Paid = "paid" }
// interface OrganizationSubscription {
//   id: string, priceId: string, status: OrganizationPlanStatus
//   currency: string | null, interval: string | null, intervalCount: number | null, createdAt: UnixTimestamp
//   periodStartsAt: UnixTimestamp, periodEndsAt: UnixTimestamp
//   trialStartsAt: UnixTimestamp | null, trialEndsAt: UnixTimestamp | null
// }

// -> Stripe Links  GET api/webhooks/stripe/getproducts  POST api/webhooks/stripe/payment  POST api/webhooks/stripe/subscription

//stripe payments
// import { User } from "@prisma/client"
// interface userDataType { customer?: string createCustomer?: Boolean email?: string }
// export async function StripePayments(props: StripeProps) {
//   let userData: userDataType = {}
//   if (user?.customerId) { userData.customer = user.customerId } else {
//     // userData.customer_creation = "always"
//     userData.createCustomer = true
//     if (user?.email) { userData.email = user.email }
//   }