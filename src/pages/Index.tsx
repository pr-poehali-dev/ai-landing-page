import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Survey from "@/components/Survey";
import ContactForm from "@/components/ContactForm";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space via-dark-navy to-glow-purple/30">
      <Hero />
      <Facts />
      <Survey />
      <ContactForm />
      <Conclusion />
    </div>
  );
};

export default Index;
