// app/blocks/layout.tsx
export default function BlocksLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar navigation could be added here */}
        <main className="flex-1">{children}</main>
      </div>
    );
  }