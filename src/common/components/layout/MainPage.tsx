interface MainPageProps {
  title: string;
  children: React.ReactNode;
}

export default function MainPage({ title, children }: MainPageProps) {
  return (
    <div className="h-full flex flex-col gap-4">
      <h2 className="text-2xl text-on-background font-bold p-4">{title}</h2>
      {children}
    </div>
  );
}
