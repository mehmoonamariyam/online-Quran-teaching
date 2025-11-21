import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ScrollToTop from "../../components/scrolltotop";
import ContactHeader from "../../components/contact/ContactHeader";
import ContactDetail from "../../components/contact/ContactDetail";

const ContactPage = () => {
  return (
    <>
      <div
        className="relative min-h-screen"
        style={{
          backgroundColor: "#F5FAE1",
          backgroundImage: "url('/images/designnn.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-pink-200 opacity-30"></div>
        <Navbar />
        <ContactHeader/>
      </div>
<ContactDetail/>
      
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ContactPage;
