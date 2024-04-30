import { db } from "@/lib/db"
import ItemList from "./ItemList"
import Sidebar from "./Filters"

export default async function page() {
  const data = await db.resource.findMany()
  return (
    <>
      <main className="m-auto my-10 space-y-10 px-5">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Best Resources
          </h1>
          <p className="text-muted-foreground">Find your dream job.</p>
        </div>
        <section className="flex flex-col md:flex-row gap-4">
          <Sidebar />
          <div className="grow grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((i) => {
              return <ItemList item={i} key={i.id} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}
