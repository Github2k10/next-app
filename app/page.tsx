// app/page.tsx

"use client"; // This directive makes the component a client component

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/posts'); // Use relative URL
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch:', error);
      } finally {
        setLoading(false); // Set loading to false when fetch completes
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  // Log data for debugging
  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display fetched data */}
    </div>
  );
}
