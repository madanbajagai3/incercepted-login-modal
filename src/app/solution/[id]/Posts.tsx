"use client";

import { use, useEffect, useState } from "react";

export default function Posts({ id }:any) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api-website.sooritechnology.com.np/solution-app/solution/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
