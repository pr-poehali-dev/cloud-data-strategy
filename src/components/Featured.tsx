const habitats = [
  {
    emoji: "🌊",
    name: "Водная среда",
    description: "Океаны, реки, озёра и болота — место обитания рыб, китов, коралловых рифов и тысяч видов водорослей.",
    examples: "Нильский крокодил, Голубой кит, Пресноводный окунь",
  },
  {
    emoji: "🌿",
    name: "Наземная среда",
    description: "Леса, степи, пустыни и тундры — самая разнообразная среда, где обитает большинство животных и растений.",
    examples: "Бурый медведь, Африканский слон, Сибирский тигр",
  },
  {
    emoji: "🌱",
    name: "Почвенная среда",
    description: "Верхний слой земли, богатый органикой — дом для червей, грибов, бактерий и корней растений.",
    examples: "Дождевой червь, Крот, Медведка",
  },
  {
    emoji: "🦋",
    name: "Воздушная среда",
    description: "Атмосфера Земли — пространство для полёта птиц, насекомых и переноса спор растений.",
    examples: "Орлан-белохвост, Монарх-бабочка, Стриж",
  },
  {
    emoji: "🦠",
    name: "Организменная среда",
    description: "Живые организмы как среда — паразиты и симбионты живут внутри или на поверхности других существ.",
    examples: "Солитёр, Клещ, Бактерии кишечника",
  },
  {
    emoji: "🏔️",
    name: "Горная среда",
    description: "Высокогорья с суровым климатом — приют для редких и выносливых видов, адаптированных к холоду и разреженному воздуху.",
    examples: "Снежный барс, Як, Горный козёл",
  },
];

export default function Featured() {
  return (
    <div id="habitats" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Классификация</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-3xl">
            Пять основных сред обитания, в которых существует жизнь на Земле
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {habitats.map((habitat) => (
            <div
              key={habitat.name}
              className="border border-neutral-200 p-6 hover:border-neutral-900 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4">{habitat.emoji}</div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2 uppercase tracking-wide text-sm">
                {habitat.name}
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {habitat.description}
              </p>
              <p className="text-xs text-neutral-400 uppercase tracking-wide">
                Примеры: {habitat.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
