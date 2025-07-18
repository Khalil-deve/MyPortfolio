import FooterLeftContent from "./FooterLeftContent";
import FooterRightContent from "./FooterRightContent";

export default function FooterContent(){
    return(
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <FooterLeftContent />
            <FooterRightContent />
            </div>
        </div>
    )
}