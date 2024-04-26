import { db } from "@/lib/db"
import ProductList from "./ProductList"

export default async function page() {
  const data = await db.product.findMany()

  return (
    <>
      <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Developer jobs
          </h1>
          <p className="text-muted-foreground">Find your dream job.</p>
        </div>
        <section>
          <div className="space-y-4">
            {data.map((p) => {
              return <ProductList product={p} key={p.id} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}
