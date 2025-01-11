import AdminHome from '@/component/Admin/AdminHome';
import AdminLayout from '@/component/Layout/AdminLayout';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, { cache: 'no-store' });
  const result = await res.json();

  return (
    <AdminLayout>
      <AdminHome data={result.status ? result.data : []} />
    </AdminLayout>
  );
}
