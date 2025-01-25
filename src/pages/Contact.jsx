import ContactCard from "../components/ContactCard";
import { contactLinks } from "../routes/contactLink";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F172A] p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-3xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-[#9CA3AF]">
          Im always open to collaboration or answering questions. Feel free to
          reach out!
        </p>
      </div>

      {/* Contact Links Section */}
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {contactLinks.map((contact) => {
          return (
            <ContactCard
              key={contact.key}
              title={contact.title}
              icon={contact.Icon}
              url={contact.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
