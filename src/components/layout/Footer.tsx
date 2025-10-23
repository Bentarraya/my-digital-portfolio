export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex h-24 items-center justify-center">
        <p className="text-balance text-center text-sm leading-loose text-foreground">
          © {new Date().getFullYear()} Muhammad Bentar Raya Triadmodjo. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
