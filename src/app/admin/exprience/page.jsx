import AdminExprience from '@/component/Admin/AdminExprience';
import AdminLayout from '@/component/Layout/AdminLayout'
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exprience`, { cache: 'no-store' });
  const result = await res.json();
  return (
    <AdminLayout>
      <AdminExprience data={result.status ? result.data : []}/>
    </AdminLayout>
  )
}

export default page