import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

export default function ContactContainer(){
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <ContactUs />
            <ContactInfo />
        </div>
    )
}