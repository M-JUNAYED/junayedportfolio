import AdminContact from '@/component/Admin/AdminContact'
import AdminLayout from '@/component/Layout/AdminLayout'
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/contact`, { cache: 'no-store' });
  const result = await res.json();
  return (
    <AdminLayout>
      <AdminContact contacts={result.status ? result.data : []}/>
    </AdminLayout>
  )
}

export default page