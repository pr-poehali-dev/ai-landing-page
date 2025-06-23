const Conclusion = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-b from-transparent to-deep-space">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12 gradient-text">
          ЗАКЛЮЧЕНИЕ
        </h2>

        <div className="bg-gradient-to-br from-glow-purple/20 to-neon-cyan/10 p-8 md:p-12 rounded-2xl border border-neon-cyan/30 card-glow">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
            ИИ — это всего лишь{" "}
            <span className="text-neon-cyan font-bold">инструмент</span>. Он сам
            по себе не плохой и не хороший. Всё зависит от того, как с ним
            обращаться.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Если использовать технологии с умом, то пользы будет гораздо больше,
            чем вреда.
          </p>

          <div className="bg-gradient-to-r from-neon-green/20 to-electric-blue/20 p-6 rounded-xl border border-neon-green/30 mb-8">
            <p className="text-xl font-orbitron font-bold text-neon-green mb-3">
              ИИ — наш попутчик в будущем
            </p>
            <p className="text-gray-300">
              Главное — следить за тем, чтобы он служил во благо людям, а не
              наоборот.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/30">
              #ИскусственныйИнтеллект
            </span>
            <span className="px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-full border border-electric-blue/30">
              #Технологии
            </span>
            <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30">
              #Будущее
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
