import AboutMe from '@/components/AboutMe';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen'>
            <AboutMe/>
            <ExperienceSection/>
            <EducationSection/>
            
        </div>
    );
};

export default page;
