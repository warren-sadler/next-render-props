"use client";

import { Suspense, useState } from "react";

interface MyNameProps {
  renderProp: (name: string) => Promise<JSX.Element>;
}

export function MyName({ renderProp }: MyNameProps) {
  const [name, myName] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          style={{ color: "black" }}
          onChange={(e) => myName(e.target.value)}
        />
      </div>
      <Suspense fallback={<p>Loading...</p>}>{renderProp(name)}</Suspense>
    </>
  );
}
