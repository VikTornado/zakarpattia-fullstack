const allProjects = [
{
  id: 1,
  title_en: "Salt Deposit in Tereblya",
  title_uk: "Соляне родовище в Тереблі",
  category: "Investment",
  description_en:
    "Development of a salt processing plant and tourism facilities based on Tereblya salt deposit.",
  description_uk:
    "Розвиток заводу з переробки солі та туристичної інфраструктури на базі соляного родовища в Тереблі.",
  location: "Tereblya, Transcarpathia",
  budget: null,
  pdf_link: "https://viktornado.github.io/zakarpattia-presentation/pdfs/salt-deposit-tereblya.pdf"
},
  {
    id: 2,
    title_en: "Green Hydrogen of Transcarpathia",
    title_uk: "Зелений водень Закарпаття",
    category: "Investment",
    description_en:
      "Hydrogen plant with 100 MW capacity, scalable to 1.5 GW, potentially linked to the EU hydrogen corridor.",
    description_uk:
      "Водневий завод потужністю 100 МВт з масштабуванням до 1,5 ГВт і потенційним підключенням до водневої магістралі ЄС.",
    location: "Transcarpathia region",
    budget: null,
  },
  {
    id: 3,
    title_en: "Menchul Meadow Cheese Revival",
    title_uk: "Відродження Менчулівського сиру",
    category: "Economic",
    description_en:
      "Restoration of meadow farms with mobile dairies to revive traditional cheese-making.",
    description_uk:
      "Відновлення полонинських господарств з мобільними сироварнями для збереження традиційного сироваріння.",
    location: "Rakhiv district",
    budget: null,
  },
  {
    id: 4,
    title_en: "Smart Energy-Efficient Housing",
    title_uk: "Розумне енергоефективне житло",
    category: "Social",
    description_en:
      "Construction of smart buildings for IDPs and military families using energy-efficient technologies.",
    description_uk:
      "Будівництво смарт-будинків для ВПО та військових з використанням енергоефективних технологій.",
    location: "Transcarpathia",
    budget: null,
  },
  {
    id: 5,
    title_en: "Rehabilitation Center",
    title_uk: "Реабілітаційний центр",
    category: "Medical",
    description_en:
      "Modern center for 200 people/day with automation and climate control for comprehensive recovery.",
    description_uk:
      "Сучасний центр на 200 осіб на день з автоматизацією та клімат-контролем для комплексної реабілітації.",
    location: "Uzhhorod",
    budget: 325000000,
  },
  {
    id: 6,
    title_en: "Waste Sorting and Recycling Cluster",
    title_uk: "Кластер з переробки та сортування відходів",
    category: "Investment",
    description_en:
      "A cluster with multiple factories for solid waste processing, including thermal and solar energy production.",
    description_uk:
      "Кластер з кількома заводами з переробки ТПВ, включаючи виробництво теплової та сонячної енергії.",
    location: "Transcarpathia region",
    budget: 36260750,
  },
  {
    id: 7,
    title_en: "Sheep Breeding Development",
    title_uk: "Розвиток вівчарства",
    category: "Economic",
    description_en:
      "Support for farmers and cooperatives, breeding programs, and fodder provision for wintering.",
    description_uk:
      "Підтримка фермерів, кооперативів, програми розведення, забезпечення кормами на зиму.",
    location: "Transcarpathia",
    budget: 1700000,
  },
  {
    id: 8,
    title_en: "Safe Transcarpathia",
    title_uk: "Безпечне Закарпаття",
    category: "Security",
    description_en:
      "Establishment of a regional situation center and infrastructure for rapid response and monitoring.",
    description_uk:
      "Створення регіонального ситуаційного центру та інфраструктури для оперативного реагування та моніторингу.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 9,
    title_en: "Help Transcarpathia Portal",
    title_uk: 'Інформаційний портал "Help Transcarpathia"',
    category: "Innovation",
    description_en:
      "Digital portal with access to regional services, resources, and aid coordination for citizens and partners.",
    description_uk:
      "Цифровий портал з доступом до регіональних сервісів, ресурсів і координації допомоги для громадян і партнерів.",
    location: "Online / Regional",
    budget: null,
  },
  {
    id: 10,
    title_en: "Development of Electric Public Transport",
    title_uk: "Розвиток електричного громадського транспорту",
    category: "Social",
    description_en:
      "Uzhhorod electric bus project with 10+ stations to reduce emissions and modernize transit.",
    description_uk:
      "Проєкт електробусів в Ужгороді з 10+ станціями для зменшення викидів і модернізації транспорту.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 11,
    title_en: "Parks and Recreational Areas",
    title_uk: "Парки та рекреаційні зони",
    category: "Social",
    description_en:
      "Development of multi-purpose recreational parks aligned with European Green Deal.",
    description_uk:
      "Створення багатофункціональних рекреаційних парків відповідно до Європейського зеленого курсу.",
    location: "Transcarpathia",
    budget: null,
  },
  {
    id: 12,
    title_en: "Sewage Treatment Reconstruction",
    title_uk: "Реконструкція очисних споруд",
    category: "Social",
    description_en:
      "Reconstruction of sewage systems with biogas production and energy savings.",
    description_uk:
      "Реконструкція очисних споруд з виробництвом біогазу та енергоефективністю.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 13,
    title_en: "Transcarpathian Regional Philharmonic",
    title_uk: "Закарпатська обласна філармонія",
    category: "Social",
    description_en:
      "Restoration of a historic concert hall built in 1904 with a Riger-Kloss organ.",
    description_uk:
      "Реставрація історичної концертної зали 1904 року з органом Riger-Kloss.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 14,
    title_en: 'Theater of Dolls "BAVKA"',
    title_uk: 'Театр ляльок "БАВКА"',
    category: "Social",
    description_en:
      "Cultural project including baby theater and small stage activities for children.",
    description_uk:
      "Культурний проєкт з бебі-театром та виставами для дітей на малій сцені.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 15,
    title_en: "Uzhhorod Skansen Museum",
    title_uk: "Ужгородський скансен-музей",
    category: "Social",
    description_en:
      "Expansion and promotion of open-air museum showing diverse ethnic heritage.",
    description_uk:
      "Розвиток скансену, що демонструє багатокультурну спадщину Закарпаття.",
    location: "Uzhhorod",
    budget: null,
  },
  {
    id: 16,
    title_en: "Museum of Local Lore with AI",
    title_uk: "Краєзнавчий музей з інтерактивом",
    category: "Social",
    description_en:
      "Integration of AI, animations, and multimedia into the Tyvodar Lehotsky Museum.",
    description_uk:
      "Інтеграція ШІ, анімацій і мультимедіа до музею ім. Тиводара Легоцького.",
    location: "Uzhhorod Castle",
    budget: null,
  },
  {
    id: 17,
    title_en: "Restoration of Uzhhorod Castle Walls",
    title_uk: "Відновлення Ужгородського замку",
    category: "Social",
    description_en:
      "Restoration of northern walls and creation of panoramic observation deck.",
    description_uk:
      "Відновлення північної стіни замку та облаштування оглядового майданчика.",
    location: "Uzhhorod Castle",
    budget: null,
  },
  {
    id: 18,
    title_en: "Energy Help Program",
    title_uk: "Програма підтримки бізнесу в енергокризу",
    category: "Economic",
    description_en:
      "Subsidies for entrepreneurs to purchase alternative energy sources during energy crisis.",
    description_uk:
      "Субсидії підприємцям на альтернативні джерела енергії під час енергокризи.",
    location: "Transcarpathia",
    budget: 300000,
  },
  {
    id: 19,
    title_en: "Bank of Land",
    title_uk: "Банк земель",
    category: "Economic",
    description_en:
      "Land management and allocation for relocated enterprises and industrial parks.",
    description_uk:
      "Управління землею та передача ділянок для релокованих підприємств і індустріальних парків.",
    location: "Transcarpathia region",
    budget: null,
  },
  {
    id: 20,
    title_en: "Housing for IDPs and Military",
    title_uk: "Житло для ВПО та військових",
    category: "Social",
    description_en:
      "Construction of housing with superficies contracts for families affected by war.",
    description_uk:
      "Будівництво житла на умовах суперфіцію для сімей, постраждалих від війни.",
    location: "Various communities in Transcarpathia",
    budget: null,
  },
];

export default allProjects;
