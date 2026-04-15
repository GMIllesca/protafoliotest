export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Hola, soy Gerardo
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Desarrollador web — construyo productos con Next.js, TypeScript y buenas ideas.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#proyectos"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Ver proyectos
          </a>
          <a
            href="mailto:hola@ejemplo.com"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Contacto
          </a>
        </div>
      </div>
    </main>
  );
}
