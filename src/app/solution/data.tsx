"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SolutionData {
  results: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export default function Data() {
  const [data, setData] = useState<SolutionData | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-website.sooritechnology.com.np/solution-app/solution")
      .then((res) => res.json())
      .then((fetchedData: SolutionData) => {
        setData(fetchedData);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div>
      <h1>Solution</h1>
      <p>This is the solution page</p>
      {data.results.map((result) => (
        <Link href={`solution/${result.id}`} key={result.id}>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
        </Link>
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
