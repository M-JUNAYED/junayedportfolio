import AdminAbout from '@/component/Admin/AdminAbout'
import AdminLayout from '@/component/Layout/AdminLayout'
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about`, { cache: 'no-store' });
  const result = await res.json();
  return (
    <AdminLayout>
      <AdminAbout  data={result.status ? result.data : []}/>
    </AdminLayout>
  )
}

export default page