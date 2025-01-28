const ContactCard = ({ title, url, icon, key }) => {
  return (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-primary-color text-primary-text p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:text-white hover:bg-accent"
    >
      {icon}
      <span className="text-lg font-semibold">{title}</span>
    </a>
  );
};

export default ContactCard;
