import { Brain } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-dark-navy to-glow-purple opacity-90"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan opacity-10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-electric-blue opacity-10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <Brain className="w-24 h-24 text-neon-cyan neon-glow animate-pulse-glow" />
        </div>

        <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6 gradient-text neon-glow animate-fade-in">
          ИСКУССТВЕННЫЙ
        </h1>
        <h2
          className="font-orbitron text-4xl md:text-6xl font-bold mb-8 text-white neon-glow animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          ИНТЕЛЛЕКТ
        </h2>

        <div
          className="text-2xl md:text-3xl font-inter font-light text-neon-cyan mb-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          ДРУГ ИЛИ ВРАГ?
        </div>

        <p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Еще недавно искусственный интеллект казался чем-то из фильмов про
          будущее, а теперь он уже повсюду — в телефонах, в банках, даже в наших
          холодильниках.
        </p>

        <div
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <button className="bg-gradient-to-r from-neon-cyan to-electric-blue px-8 py-4 rounded-lg font-orbitron font-bold text-deep-space text-lg hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105">
            ИССЛЕДОВАТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
