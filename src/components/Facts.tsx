import { CheckCircle, AlertTriangle } from "lucide-react";

const Facts = () => {
  const benefits = [
    {
      title: "Экономия времени",
      description: "Умные помощники подсказывают дорогу и переводят языки",
    },
    {
      title: "Медицинская помощь",
      description: "ИИ помогает врачам точнее ставить диагнозы",
    },
    {
      title: "Безопасность",
      description: "Автобусы без водителей снижают количество аварий",
    },
  ];

  const concerns = [
    {
      title: "Рабочие места",
      description: "Машины могут занять места людей",
    },
    {
      title: "Приватность",
      description: "Вопросы хранения личной информации",
    },
    {
      title: "Контроль",
      description: "Риск вредных решений от ИИ",
    },
  ];

  return (
    <div className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          ФАКТЫ ОБ ИИ
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="font-orbitron text-2xl font-bold text-neon-green flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              ПОЛЬЗА ИИ
            </h3>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-neon-green/10 to-transparent p-6 rounded-lg border border-neon-green/30 card-glow hover:border-neon-green/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="font-orbitron text-xl font-bold text-neon-green mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Concerns */}
          <div className="space-y-8">
            <h3 className="font-orbitron text-2xl font-bold text-neon-magenta flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              ОПАСЕНИЯ
            </h3>

            {concerns.map((concern, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-neon-magenta/10 to-transparent p-6 rounded-lg border border-neon-magenta/30 hover:border-neon-magenta/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
              >
                <h4 className="font-orbitron text-xl font-bold text-neon-magenta mb-3">
                  {concern.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {concern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
