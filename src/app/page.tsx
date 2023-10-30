
export default async function Home() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1 className='bg-red-300 font-bold'>
        {data}
      </h1>
    </main>
  );
}
