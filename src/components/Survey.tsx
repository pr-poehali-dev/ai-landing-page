import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const surveyData = [
    { name: "Положительно", value: 65, color: "#39FF14" },
    { name: "Нейтрально", value: 25, color: "#0099FF" },
    { name: "Негативно", value: 10, color: "#FF1493" },
  ];

  const benefitsData = [
    { category: "Экономия времени", value: 80 },
    { category: "Медицина", value: 75 },
    { category: "Безопасность", value: 70 },
    { category: "Образование", value: 65 },
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-transparent to-dark-navy/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          РЕЗУЛЬТАТЫ ОПРОСА
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Survey Results */}
          <div className="space-y-8">
            <h3 className="font-orbitron text-2xl font-bold text-neon-cyan mb-6">
              Отношение к ИИ
            </h3>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {surveyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {surveyData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                  <span
                    className="font-orbitron font-bold"
                    style={{ color: item.color }}
                  >
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Chart */}
          <div className="space-y-8">
            <h3 className="font-orbitron text-2xl font-bold text-electric-blue mb-6">
              Полезность ИИ по областям
            </h3>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={benefitsData} layout="horizontal">
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="category"
                    tick={{ fill: "#ffffff", fontSize: 12 }}
                    width={100}
                  />
                  <Bar
                    dataKey="value"
                    fill="url(#gradient)"
                    radius={[0, 4, 4, 0]}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00FFFF" />
                      <stop offset="100%" stopColor="#0099FF" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Interactive Poll */}
        <div className="mt-16 bg-gradient-to-r from-glow-purple/20 to-electric-blue/20 p-8 rounded-xl border border-electric-blue/30">
          <h3 className="font-orbitron text-2xl font-bold text-center mb-8 text-neon-cyan">
            А что думаете вы?
          </h3>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "ИИ — наш союзник",
              "Нужно быть осторожными",
              "ИИ опасен для человечества",
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedOption === option
                    ? "border-neon-cyan bg-neon-cyan/20 text-neon-cyan"
                    : "border-gray-600 hover:border-electric-blue text-gray-300 hover:text-electric-blue"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedOption && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-neon-green font-orbitron">
                Спасибо за ваш ответ! 🚀
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
