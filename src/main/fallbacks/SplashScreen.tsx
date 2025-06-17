export default function SplashScreen() {
  return (
    <div className="h-screen bg-background flex flex-col justify-center items-center gap-16">
      <div className="w-10 h-10 border-4 border-primary border-t-accent rounded-full animate-spin" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  );
}
