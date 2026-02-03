import { Toaster } from "react-hot-toast";
import SiteLoader from "./components/SiteLoader";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";
import MobileContactHeader from "./components/MobileContactHeader";
import ModernNavbar from "./components/ModernNavbar";
import ContactHeader from "./components/ContactHeader";
import TopAlert from "./components/TopAlert";
import SidebarContact from "./components/SidebarContact";

export default function SiteLayout({ children }) {
  return (
    <div className="">
      <SiteLoader />
      <ScrollAnimator />
      <MobileContactHeader />
      <ContactHeader />
      <TopAlert />
      <ModernNavbar />
      <SidebarContact />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
