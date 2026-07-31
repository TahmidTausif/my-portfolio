import ContactInfo from '@/components/ContactInfo';
import ContactEmail from '@/components/ContactMail';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen'>
            <ContactInfo/>
            <ContactEmail/>
        </div>
    );
};

export default page;