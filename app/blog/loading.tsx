export default function Loading() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <main className="w-full max-w-6xl px-12 pb-16 tracking-wide max-sm:px-4 pt-24">
        <div className="flex flex-col gap-8 animate-pulse">
          <div className="h-8 w-32 rounded-full bg-zinc-800/80" />
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="h-24 w-full lg:w-1/2 rounded-2xl bg-zinc-800/60" />
            <div className="h-10 w-full lg:w-1/3 rounded-full bg-zinc-800/60" />
          </div>
          <div className="mt-6 flex flex-col gap-6">
            <div className="h-40 w-full rounded-3xl bg-zinc-800/50" />
            <div className="h-40 w-full rounded-3xl bg-zinc-800/50" />
            <div className="h-40 w-full rounded-3xl bg-zinc-800/50" />
          </div>
        </div>
      </main>
    </div>
  );
}
