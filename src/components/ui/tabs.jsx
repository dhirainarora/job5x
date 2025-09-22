import React, { useState } from "react";

export function Tabs({ defaultValue, children }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active, setActive })
      )}
    </div>
  );
}

export function TabsList({ children, setActive }) {
  return (
    <div className="flex gap-2 border-b mb-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setActive })
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, active, setActive }) {
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 font-medium ${
        active === value
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, active, children }) {
  if (value !== active) return null;
  return <div>{children}</div>;
}
