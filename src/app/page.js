import Footer from "@/components/global/footer/footer";
import Header from "@/components/global/header/header";
import MiddleSection   from "@/components/global/MiddleSection/MiddleSection";
import PartnerSection from  "@/components/global/PartnerSection/PartnerSection";       
import SignupSelectionPage from "@/components/global/SignupSelectionPage/SignupSelectionPage";  
              
import SigninSelectionPage from "@/components/global/SigninSelectionPage/SigninSelectionPage";
import AdminDashboard from "@/components/global/AdminDashboard/AdminDashboard";
import CustomerDashboard from "@/components/global/CustomerDashboard/CustomerDashboard";
import RiderDashboard from "@/components/global/RiderDashboard/RiderDashboard";
import KitchenDashboard from "@/components/global/KitchenDashboard/KitchenDashboard";
export default function Home() {
  return (
    <>
      <RiderDashboard/>
    </>
  );
}

