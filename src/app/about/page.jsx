import AboutPage from '@/component/Client/AboutPage';
import MasterLayout from '@/component/Layout/MasterLayout';
import React from 'react'

const  page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about`, { cache: 'no-store' });
    const result = await response.json();
    return (
        <MasterLayout>
            <AboutPage data={result.status ? result.data : []}/>
        </MasterLayout>
    )
}

export default page