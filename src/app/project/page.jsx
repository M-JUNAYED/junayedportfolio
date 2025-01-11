import ProjectPage from '@/component/Client/ProjectPage';
import ServicePage from '@/component/Client/ServicePage';
import MasterLayout from '@/component/Layout/MasterLayout';
import React from 'react'

const  page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, { cache: 'no-store' });
    const result = await response.json();
    return (
        <MasterLayout>
            <ProjectPage data={result.status ? result.data : []}/>
        </MasterLayout>
    )
}

export default page