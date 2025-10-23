
export function BackgroundImage() {
  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundColor: "hsl(var(--background-end-hsl))",
      }}
    />
  );
}
