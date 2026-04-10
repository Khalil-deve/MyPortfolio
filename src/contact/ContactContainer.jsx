import React from 'react';
import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

export default function ContactContainer(){
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            <ContactUs />
            <ContactInfo />
        </div>
    )
}