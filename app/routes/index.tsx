export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing{' '}
          <code className="font-mono font-bold">app/routes/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto  lg:p-0"
            href="https://vercel.com?utm_source=create-remix&utm_medium=appdir-template&utm_campaign=create-remix"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <img
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-radial before:dark:from-sky-900 before:dark:to-transparent before:dark:opacity-40 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/remix.png"
          alt="Remix Logo"
          width={180}
          height={37}
        />
      </div>
      <p className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
        Bondly
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400">
        A simple Remix app
      </p>
      <a
        className="rounded-lg bg-sky-500 px-5 py-2 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        href="/clients"
      >
        Clients
      </a>
    </main>
  );
}
