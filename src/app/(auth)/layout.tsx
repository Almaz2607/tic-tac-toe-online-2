"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      {children}
    </div>
  );
}
