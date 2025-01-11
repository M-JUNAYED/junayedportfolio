import HomePage from "@/component/Client/HomePage";
import MasterLayout from "@/component/Layout/MasterLayout";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, { cache: 'no-store' });
  const result = await response.json();
  
  return (
    <MasterLayout>
      <HomePage data={result.status ? result.data : []} />
    </MasterLayout>
  );
}
