import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/saina_construction",
    icon: <FaInstagram size={16} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/saina.construction",
    icon: <FaFacebook size={16} />,
  },
  {
    label: "Gmail",
    href: "mailto:Tuyarah@gmail.com",
    icon: <FaEnvelope size={16} />,
  },
];

const contactItems = [
  {
    icon: <FaPhone size={14} />,
    text: "86254874",
    href: "tel:86254874",
  },
  {
    icon: <FaEnvelope size={14} />,
    text: "Tuyarah@gmail.com",
    href: "mailto:Tuyarah@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size={14} />,
    text: "Улаанбаатар хот",
    href: null,
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 font-sans">
      
      <div className="h-1 w-full bg-orange-600" />

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-black tracking-widest uppercase text-white">
              Tuyarah<span className="text-orange-500"></span>
            </div>
            <p className="text-xs tracking-widest text-zinc-500 uppercase">
              Барилга · Засвар · Угсралт
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mt-1">
              Мэргэжлийн барилгын үйлчилгээ. Чанартай, найдвартай, цаг
              хугацаандаа.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-4">
              Холбоо барих
            </h4>
            <ul className="flex flex-col gap-3">
              {contactItems.map(({ icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded text-orange-500 shrink-0">
                    {icon}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-zinc-300 hover:text-orange-400 transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-300">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-4">
              Сошиал медиа
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-zinc-800 border border-zinc-700 rounded text-zinc-400 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-zinc-600 mt-4 leading-relaxed">
              Дагаарай, холбоо барьж,
              <br />
              санал хүсэлтээ илгээгээрэй.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
          <span>© 2025 Tuyarah Construction. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span className="text-zinc-700">Чанар · Итгэл · Туршлага</span>
        </div>
      </div>
    </footer>
  );
}