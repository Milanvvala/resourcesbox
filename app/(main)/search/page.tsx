import { db } from "@/lib/db"
import ItemList from "./ItemList"

export default async function page() {
  const data = await db.resource.findMany()
  return (
    <>
      <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Best Resources
          </h1>
          <p className="text-muted-foreground">Find your dream job.</p>
        </div>
        <section>
          <div className="space-y-4">
            {data.map((i) => {
              return <ItemList item={i} key={i.id} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}
