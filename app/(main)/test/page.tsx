interface PageProps {}

export default async function page(props: PageProps) {
  return (
    <main className="m-auto my-10  space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
    </main>
  )
}
