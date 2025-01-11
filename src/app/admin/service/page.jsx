import AdminService from '@/component/Admin/AdminService';
import AdminLayout from '@/component/Layout/AdminLayout'
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, { cache: 'no-store' });
  const result = await res.json();
  return (
    <AdminLayout>
      <AdminService data={result.status ? result.data : []} />
    </AdminLayout>
  )
}

export default page