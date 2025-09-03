import "./contactItem.css";

interface ContactItemProps {
  item: {
    icon: React.ReactNode;
    label: string;
    value: string;
  };
}

function ContactItem({ item }: ContactItemProps) {
  return (
    <div className="contact-item">
      <div className="icon">{item.icon}</div>
      <div className="info">
        <h4>{item.label}</h4>
        <p>{item.value}</p>
      </div>
    </div>
  );
}

export default ContactItem;
