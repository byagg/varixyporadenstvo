export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-ploy-background-primary text-ploy-text-primary flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl">
          404
        </h1>
        <p className="text-lg md:text-xl text-ploy-text-secondary max-w-md mx-auto">
          Táto stránka neexistuje.
        </p>
        <a
          href="/"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-ploy-button-primary-background px-8 py-3 font-bold text-black transition-colors hover:bg-ploy-button-primary-background/90"
        >
          späť na úvod
        </a>
      </div>
    </div>
  );
}
