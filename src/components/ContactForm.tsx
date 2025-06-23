import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-t from-deep-space to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          СВЯЗАТЬСЯ С НАМИ
        </h2>

        <p className="text-xl text-gray-300 text-center mb-12">
          Поделитесь своим мнением об искусственном интеллекте
        </p>

        <div className="bg-gradient-to-br from-dark-navy/80 to-glow-purple/20 p-8 rounded-2xl border border-neon-cyan/30 card-glow">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User className="w-5 h-5 text-neon-cyan" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-electric-blue/50 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-electric-blue/50 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <div className="absolute left-4 top-6">
                  <MessageSquare className="w-5 h-5 text-neon-cyan" />
                </div>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-deep-space/50 border border-electric-blue/50 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-cyan to-electric-blue px-8 py-4 rounded-lg font-orbitron font-bold text-deep-space text-lg hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                ОТПРАВИТЬ СООБЩЕНИЕ
              </button>
            </form>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-neon-green" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-neon-green mb-4">
                Сообщение отправлено!
              </h3>
              <p className="text-gray-300">
                Спасибо за ваш отзыв. Мы обязательно с вами свяжемся.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
