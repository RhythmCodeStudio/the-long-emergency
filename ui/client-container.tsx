"use client";

interface ClientContainerProps {
  component: React.ReactNode;
}

export default function ClientContainer({ component }: ClientContainerProps) {
  return (
    <div className="w-full">
      {component}
    </div>
  );
}