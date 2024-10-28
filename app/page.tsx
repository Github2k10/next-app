
export default async function Home() {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();

  console.log(data);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
