const Event = {
  _TYPES: ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'],
  _DATES: ['2020-01-01', '2021-02-02', '2022-03-03', '2023-04-04'],
  _OFFERS: [
    // Taxi
    {
      type: 'taxi',
      offers: [
        { name: 'Choose the «Comfort» tarif', cost: '100' },
        { name: 'Choose the «Business» tarif', cost: '200' },
        { name: 'Choose the «Elite» tarif', cost: '300' },
      ],
    },

    // Bus
    {
      type: 'bus'
    },

    // Train
    {
      type: 'train',
      offers: [
        { name: 'Choose seats', cost: '50' },
        { name: 'Add meal', cost: '80' },
      ],
    },

    // Ship
    {
      type: 'ship',
      offers: [
        { name: 'Choose a cabin', cost: '120' },
        { name: 'Add meal', cost: '80' },
        { name: 'Turn the wheel in the captain\'s cabin', cost: '1500' },
      ],
    },

    // Drive
    {
      type: 'drive',
      offers: [
        { name: 'Take along a 50-liter canister of fuel', cost: '768' },
        { name: 'Take along a pet', cost: '200' },
      ],
    },

    // Flight
    {
      type: 'flight',
      offers: [
        { name: 'Choose seats', cost: '150' },
        { name: 'Add meal', cost: '180' },
        { name: 'Flying «Business class»', cost: '400' },
        { name: 'Flying «First class»', cost: '1800' },
      ],
    },

    // Check-in
    {
      type: 'check-in',
      offers: [
        { name: 'Choose a hotel room', cost: '50' },
        { name: 'Include breakfast', cost: '100' },
        { name: 'Include "door-to-door" breakfast', cost: '250' },
      ],
    },

    // Sightseeing
    {
      type: 'sightseeing',
    },

    // Restaurant
    {
      type: 'restaurant',
      offers: [
        { name: 'Book a table', cost: '25' },
        { name: 'Personal waiter', cost: '80' },
        { name: 'Personal chef', cost: '330' },
      ],
    },
  ],

  _DESTINATIONS: [
    'Тамбо́в — город в России, административный, экономический и культурный центр Тамбовской области. Также административный центр Тамбовского района, в который сам не входит, являясь городом областного значения, образующим с 7 сельскими населёнными пунктами городской округ город Тамбов. Расположен в центральной части Окско-Донской равнины, на канале реки Цны, в 460 км к юго-востоку от Москвы.',

    'Сахали́н — остров у восточного побережья Азии. Вместе с Курильскими островами целиком входит в состав Сахалинской области. Крупнейший остров России. Омывается Охотским и Японским морями. От материковой Азии отделён Татарским проливом (в самой узкой части — проливе Невельского — имеет ширину 7,3 км и замерзает зимой); от японского острова Хоккайдо — проливом Лаперуза.',

    'Айха́л (якут. Айхал — слава) — посёлок городского типа в Мирнинском районе Якутии, расположен в 60 км южнее города Удачный. Образован в 1961 году в связи с открытием кимберлитовой трубки «Айхал». Население — 13 359 чел. (2023). Кимберлитовая трубка «Айхал» (в переводе с якутского слава) была обнаружена 22 января 1960 года.',

    'Сама́ра (с 27 января 1935 года по 25 января 1991 года — Куйбышев) — город в Среднем Поволжье России, центр Поволжского экономического района и Самарской области, образует городской округ Самара. Город трудовой и боевой славы (2016). Город трудовой доблести (2020).',

    'Волгогра́д (с 1589 до 1925 года — Цари́цын, до 1961 года — Сталингра́д) — город на юго-востоке европейской части России с населением 1 025 662 человек (2023). Административный центр Волгоградской области. Город-герой, важнейший пункт обороны Царицына и Сталинградской битвы. Город областного значения, образует городской округ.'
  ],
};


export {
  Event,
};
