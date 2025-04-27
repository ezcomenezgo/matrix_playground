import Matrix from './components/matrix'

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Matrix />
      </main>
    </div>
  )
}
