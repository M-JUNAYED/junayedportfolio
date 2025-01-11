import SkillPage from '@/component/Client/SkillPage';
import MasterLayout from '@/component/Layout/MasterLayout';
import React from 'react'

const  page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skill`, { cache: 'no-store' });
    const result = await response.json();
    return (
        <MasterLayout>
            <SkillPage data={result.status ? result.data : []}/>
        </MasterLayout>
    )
}

export default page