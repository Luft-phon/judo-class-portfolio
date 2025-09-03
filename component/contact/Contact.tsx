import { useState, ChangeEvent, FormEvent } from "react";
import "./contact.css";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!result.ok) throw new Error("Unable to call API")
      if (result.ok) {
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{ color: "var(--black)" }}>Họ tên</label>
        <input
          type="text"
          name="fullname"
          placeholder="Nguyễn Văn A"
          required
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label style={{ color: "var(--black)" }}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label style={{ color: "var(--black)" }}>Số điện thoại</label>
        <input
          type="tel"
          name="phone"
          placeholder="+84 234 23432"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label style={{ color: "var(--black)" }}>Lời nhắn</label>
        <textarea
          name="message"
          placeholder="Mô tả ..."
          rows={3}
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
