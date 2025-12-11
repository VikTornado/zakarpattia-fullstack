const allItems = [
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "ФГ “Чудова ферма”",
    nameEn: "Farm enterprise “Magnificent Farm”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Goat milk products",
    descriptionUa:
      "Виробництво козиних сирів та молочної продукції під ТМ “Чудова ферма”.",
    descriptionEn:
      "Production of goat cheeses and other dairy products under TM 'Magnificent Farm'.",
    contacts: ["magnificentfarm@gmail.com", "+380684458334"],
    website: "https://www.fb.com/magnificentfarm",
  },
  {
    nameUa: "ТМ “Селиська сироварня”",
    nameEn: "TM “Seliska Cheese Dairy”",
    location: "Zakarpattia region, Khust district, Nyzhnje Selyshche",
    products: "Cheese",
    descriptionUa:
      "Виробництво натуральних сирів з коров'ячого молока за швейцарською технологією.",
    descriptionEn:
      "Production of natural cheeses from cow's milk using Swiss technology.",
    contacts: ["cheesefromseliska@gmail.com", "+380971652299"],
    website: "https://seliska.org",
  },
  {
    nameUa: "ТМ “Перечинська мануфактура”",
    nameEn: "TM “Perechynska Manufactura”",
    location: "Zakarpattia region, Uzhhorod district, Perechyn",
    products: "Cheese",
    descriptionUa:
      "Виробництво ексклюзивних сирів з коров'ячого молока, витриманих у вині або золі.",
    descriptionEn:
      "Production of exclusive cheeses from cow's milk, aged in wine or ash.",
    contacts: ["perechyncheese@gmail.com", "+380666822010"],
    website: "https://www.perechyncheese.com",
  },
  {
    nameUa: "ОСГ “Бараново”",
    nameEn: "Private farm enterprise “Baranovo”",
    location: "Zakarpattia region, Berehovo district, Baranovo",
    products: "Cheese and dairy",
    descriptionUa:
      "Виробництво сирів і молочних продуктів за традиційними закарпатськими рецептами.",
    descriptionEn:
      "Cheese and dairy product manufacturing using traditional Zakarpattia recipes.",
    contacts: ["info@syrovarnya.com", "+380992923233"],
    website: "https://www.syrovarnya.com/",
  },
  {
    nameUa: "ФГ “Благородна Коза”",
    nameEn: "Farm enterprise “Blahorodna Koza”",
    location: "Zakarpattia region, Mukachevo district, village Dertsen",
    products: "Goat cheeses",
    descriptionUa:
      "Виробництво м’яких і витриманих козиних сирів за європейською технологією.",
    descriptionEn:
      "Production of fresh and aged goat cheeses using European technology.",
    contacts: ["blahorodnakoza@gmail.com", "+380661715917"],
    website: "https://www.blahorodnakoza.com",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "ФГ “Чудова ферма”",
    nameEn: "Farm enterprise “Magnificent Farm”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Goat milk products",
    descriptionUa:
      "Виробництво козиних сирів та молочної продукції під ТМ “Чудова ферма”.",
    descriptionEn:
      "Production of goat cheeses and other dairy products under TM 'Magnificent Farm'.",
    contacts: ["magnificentfarm@gmail.com", "+380684458334"],
    website: "https://www.fb.com/magnificentfarm",
  },
  {
    nameUa: "ТМ “Селиська сироварня”",
    nameEn: "TM “Seliska Cheese Dairy”",
    location: "Zakarpattia region, Khust district, Nyzhnje Selyshche",
    products: "Cheese",
    descriptionUa:
      "Виробництво натуральних сирів з коров'ячого молока за швейцарською технологією.",
    descriptionEn:
      "Production of natural cheeses from cow's milk using Swiss technology.",
    contacts: ["cheesefromseliska@gmail.com", "+380971652299"],
    website: "https://seliska.org",
  },
  {
    nameUa: "ТМ “Перечинська мануфактура”",
    nameEn: "TM “Perechynska Manufactura”",
    location: "Zakarpattia region, Uzhhorod district, Perechyn",
    products: "Cheese",
    descriptionUa:
      "Виробництво ексклюзивних сирів з коров'ячого молока, витриманих у вині або золі.",
    descriptionEn:
      "Production of exclusive cheeses from cow's milk, aged in wine or ash.",
    contacts: ["perechyncheese@gmail.com", "+380666822010"],
    website: "https://www.perechyncheese.com",
  },
  {
    nameUa: "ОСГ “Бараново”",
    nameEn: "Private farm enterprise “Baranovo”",
    location: "Zakarpattia region, Berehovo district, Baranovo",
    products: "Cheese and dairy",
    descriptionUa:
      "Виробництво сирів і молочних продуктів за традиційними закарпатськими рецептами.",
    descriptionEn:
      "Cheese and dairy product manufacturing using traditional Zakarpattia recipes.",
    contacts: ["info@syrovarnya.com", "+380992923233"],
    website: "https://www.syrovarnya.com/",
  },
  {
    nameUa: "ФГ “Благородна Коза”",
    nameEn: "Farm enterprise “Blahorodna Koza”",
    location: "Zakarpattia region, Mukachevo district, village Dertsen",
    products: "Goat cheeses",
    descriptionUa:
      "Виробництво м’яких і витриманих козиних сирів за європейською технологією.",
    descriptionEn:
      "Production of fresh and aged goat cheeses using European technology.",
    contacts: ["blahorodnakoza@gmail.com", "+380661715917"],
    website: "https://www.blahorodnakoza.com",
  },
  {
    nameUa: "ФОП Бондар Михайло",
    nameEn: "Private entrepreneur Bondar Mykhailo",
    location: "Zakarpattia region, Khust district, village Velyatyno",
    products: "Buffalo mozzarella, yoghurt, cheese",
    descriptionUa:
      "Виробництво моцарели, йогуртів та сирів з буйволиного молока в рамках проєкту “Карпатський буйвіл”.",
    descriptionEn:
      "Production of mozzarella, yoghurt, and cheese from buffalo milk under the 'Carpathian Buffalo' project.",
    contacts: ["karpaty.buffalo@gmail.com", "+380669206120"],
    website: "https://www.facebook.com/karpaty.buffalo",
  },
  {
    nameUa: "ТОВ “Розенталь”",
    nameEn: "LLC “Rozental”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Meat delicacies",
    descriptionUa:
      "Виробництво м’ясних делікатесів за традиційними рецептами з локальних інгредієнтів.",
    descriptionEn:
      "Production of meat delicacies using traditional recipes and local ingredients.",
    contacts: ["rozental2020@gmail.com", "+380953389011"],
    website: "https://www.instagram.com/rozental_meat",
  },
  {
    nameUa: "ФГ “Світ м’яса”",
    nameEn: "Farm enterprise “Svit Myasa”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Meat products, sausages, smoked meats",
    descriptionUa:
      "Виробництво широкого асортименту м’ясної продукції, ковбас, копченостей під ТМ “Світ м’яса”.",
    descriptionEn:
      "Production of a wide range of meat products, sausages and smoked meats under the TM 'Svit Myasa'.",
    contacts: ["svitmyasa@gmail.com", "+380673456789"],
    website: "",
  },
  {
    nameUa: "ТМ “Березка” (пекарня “Березка”)",
    nameEn: "TM “BEREZKA” (BEREZKA bakery)",
    location: "Zakarpattia region, Uzhhorod",
    products: "Bakery products, traditional pastries",
    descriptionUa:
      "Виробництво хлібобулочних виробів і традиційної закарпатської випічки.",
    descriptionEn:
      "Production of bakery products and traditional Zakarpattia pastries.",
    contacts: ["berezka.bread@gmail.com", "+380503456789"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Медовий дім”",
    nameEn: "Private enterprise “Honey House”",
    location: "Zakarpattia region, Irshava district",
    products: "Natural honey, bee products",
    descriptionUa:
      "Виробництво натурального меду, воску, пилку та прополісу з карпатських бджіл.",
    descriptionEn:
      "Production of natural honey, wax, pollen and propolis from Carpathian bees.",
    contacts: ["honeyhouse@gmail.com", "+380991234567"],
    website: "",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "ФГ “Чудова ферма”",
    nameEn: "Farm enterprise “Magnificent Farm”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Goat milk products",
    descriptionUa:
      "Виробництво козиних сирів та молочної продукції під ТМ “Чудова ферма”.",
    descriptionEn:
      "Production of goat cheeses and other dairy products under TM 'Magnificent Farm'.",
    contacts: ["magnificentfarm@gmail.com", "+380684458334"],
    website: "https://www.fb.com/magnificentfarm",
  },
  {
    nameUa: "ТМ “Селиська сироварня”",
    nameEn: "TM “Seliska Cheese Dairy”",
    location: "Zakarpattia region, Khust district, Nyzhnje Selyshche",
    products: "Cheese",
    descriptionUa:
      "Виробництво натуральних сирів з коров'ячого молока за швейцарською технологією.",
    descriptionEn:
      "Production of natural cheeses from cow's milk using Swiss technology.",
    contacts: ["cheesefromseliska@gmail.com", "+380971652299"],
    website: "https://seliska.org",
  },
  {
    nameUa: "ТМ “Перечинська мануфактура”",
    nameEn: "TM “Perechynska Manufactura”",
    location: "Zakarpattia region, Uzhhorod district, Perechyn",
    products: "Cheese",
    descriptionUa:
      "Виробництво ексклюзивних сирів з коров'ячого молока, витриманих у вині або золі.",
    descriptionEn:
      "Production of exclusive cheeses from cow's milk, aged in wine or ash.",
    contacts: ["perechyncheese@gmail.com", "+380666822010"],
    website: "https://www.perechyncheese.com",
  },
  {
    nameUa: "ОСГ “Бараново”",
    nameEn: "Private farm enterprise “Baranovo”",
    location: "Zakarpattia region, Berehovo district, Baranovo",
    products: "Cheese and dairy",
    descriptionUa:
      "Виробництво сирів і молочних продуктів за традиційними закарпатськими рецептами.",
    descriptionEn:
      "Cheese and dairy product manufacturing using traditional Zakarpattia recipes.",
    contacts: ["info@syrovarnya.com", "+380992923233"],
    website: "https://www.syrovarnya.com/",
  },
  {
    nameUa: "ФГ “Благородна Коза”",
    nameEn: "Farm enterprise “Blahorodna Koza”",
    location: "Zakarpattia region, Mukachevo district, village Dertsen",
    products: "Goat cheeses",
    descriptionUa:
      "Виробництво м’яких і витриманих козиних сирів за європейською технологією.",
    descriptionEn:
      "Production of fresh and aged goat cheeses using European technology.",
    contacts: ["blahorodnakoza@gmail.com", "+380661715917"],
    website: "https://www.blahorodnakoza.com",
  },
  {
    nameUa: "ФОП Бондар Михайло",
    nameEn: "Private entrepreneur Bondar Mykhailo",
    location: "Zakarpattia region, Khust district, village Velyatyno",
    products: "Buffalo mozzarella, yoghurt, cheese",
    descriptionUa:
      "Виробництво моцарели, йогуртів та сирів з буйволиного молока в рамках проєкту “Карпатський буйвіл”.",
    descriptionEn:
      "Production of mozzarella, yoghurt, and cheese from buffalo milk under the 'Carpathian Buffalo' project.",
    contacts: ["karpaty.buffalo@gmail.com", "+380669206120"],
    website: "https://www.facebook.com/karpaty.buffalo",
  },
  {
    nameUa: "ТОВ “Розенталь”",
    nameEn: "LLC “Rozental”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Meat delicacies",
    descriptionUa:
      "Виробництво м’ясних делікатесів за традиційними рецептами з локальних інгредієнтів.",
    descriptionEn:
      "Production of meat delicacies using traditional recipes and local ingredients.",
    contacts: ["rozental2020@gmail.com", "+380953389011"],
    website: "https://www.instagram.com/rozental_meat",
  },
  {
    nameUa: "ФГ “Світ м’яса”",
    nameEn: "Farm enterprise “Svit Myasa”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Meat products, sausages, smoked meats",
    descriptionUa:
      "Виробництво широкого асортименту м’ясної продукції, ковбас, копченостей під ТМ “Світ м’яса”.",
    descriptionEn:
      "Production of a wide range of meat products, sausages and smoked meats under the TM 'Svit Myasa'.",
    contacts: ["svitmyasa@gmail.com", "+380673456789"],
    website: "",
  },
  {
    nameUa: "ТМ “Березка” (пекарня “Березка”)",
    nameEn: "TM “BEREZKA” (BEREZKA bakery)",
    location: "Zakarpattia region, Uzhhorod",
    products: "Bakery products, traditional pastries",
    descriptionUa:
      "Виробництво хлібобулочних виробів і традиційної закарпатської випічки.",
    descriptionEn:
      "Production of bakery products and traditional Zakarpattia pastries.",
    contacts: ["berezka.bread@gmail.com", "+380503456789"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Медовий дім”",
    nameEn: "Private enterprise “Honey House”",
    location: "Zakarpattia region, Irshava district",
    products: "Natural honey, bee products",
    descriptionUa:
      "Виробництво натурального меду, воску, пилку та прополісу з карпатських бджіл.",
    descriptionEn:
      "Production of natural honey, wax, pollen and propolis from Carpathian bees.",
    contacts: ["honeyhouse@gmail.com", "+380991234567"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Закарпатський чай”",
    nameEn: "Private enterprise “Zakarpattya Tea”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Herbal teas, fruit blends",
    descriptionUa:
      "Виробництво трав’яних та фруктових чаїв із місцевих рослин, ягід і квітів.",
    descriptionEn:
      "Production of herbal and fruit teas from local plants, berries and flowers.",
    contacts: ["zaktea@gmail.com", "+380961112233"],
    website: "https://zakarpatskyichai.com",
  },
  {
    nameUa: "ФГ “Карпати Ленд”",
    nameEn: "Farm enterprise “Karpaty Lend”",
    location: "Zakarpattia region, Khust district, Danylovo",
    products: "Jam, preserves, syrups",
    descriptionUa:
      "Виробництво джемів, конфітюрів та сиропів із карпатських фруктів і ягід.",
    descriptionEn:
      "Production of jams, preserves and syrups made from Carpathian fruits and berries.",
    contacts: ["karpaty.lend@gmail.com", "+380663334455"],
    website: "",
  },
  {
    nameUa: "ТОВ “Ріка Продукт”",
    nameEn: "LLC “Rika Product”",
    location: "Zakarpattia region, Khust",
    products: "Canned vegetables and pickles",
    descriptionUa:
      "Виробництво квашених овочів, аджики, лечо, грибів та інших консервованих виробів.",
    descriptionEn:
      "Production of pickled vegetables, adjika, lecho, mushrooms and other preserved goods.",
    contacts: ["rikaproduct@gmail.com", "+380674441122"],
    website: "",
  },
  {
    nameUa: "ТОВ “Вареники та ще”",
    nameEn: "LLC “Varenyky & More”",
    location: "Zakarpattia region, Mukachevo",
    products: "Frozen semi-finished products",
    descriptionUa:
      "Виробництво заморожених напівфабрикатів: вареників, пельменів тощо.",
    descriptionEn:
      "Production of handmade frozen varenyky, dumplings and other semi-finished foods.",
    contacts: ["vareniki.zak@gmail.com", "+380662224488"],
    website: "",
  },
  {
    nameUa: "ТОВ “Гуцульська крафтова броварня”",
    nameEn: "LLC “Hutsul Craft Brewery”",
    location: "Zakarpattia region, Rakhiv",
    products: "Craft beer",
    descriptionUa:
      "Виробництво крафтового пива на гірській воді з локальними інгредієнтами.",
    descriptionEn:
      "Production of craft beer with pure mountain water and local ingredients.",
    contacts: ["hutsulbrew@gmail.com", "+380686789456"],
    website: "https://hutsulbrewery.com",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "ФГ “Чудова ферма”",
    nameEn: "Farm enterprise “Magnificent Farm”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Goat milk products",
    descriptionUa:
      "Виробництво козиних сирів та молочної продукції під ТМ “Чудова ферма”.",
    descriptionEn:
      "Production of goat cheeses and other dairy products under TM 'Magnificent Farm'.",
    contacts: ["magnificentfarm@gmail.com", "+380684458334"],
    website: "https://www.fb.com/magnificentfarm",
  },
  {
    nameUa: "ТМ “Селиська сироварня”",
    nameEn: "TM “Seliska Cheese Dairy”",
    location: "Zakarpattia region, Khust district, Nyzhnje Selyshche",
    products: "Cheese",
    descriptionUa:
      "Виробництво натуральних сирів з коров'ячого молока за швейцарською технологією.",
    descriptionEn:
      "Production of natural cheeses from cow's milk using Swiss technology.",
    contacts: ["cheesefromseliska@gmail.com", "+380971652299"],
    website: "https://seliska.org",
  },
  {
    nameUa: "ТМ “Перечинська мануфактура”",
    nameEn: "TM “Perechynska Manufactura”",
    location: "Zakarpattia region, Uzhhorod district, Perechyn",
    products: "Cheese",
    descriptionUa:
      "Виробництво ексклюзивних сирів з коров'ячого молока, витриманих у вині або золі.",
    descriptionEn:
      "Production of exclusive cheeses from cow's milk, aged in wine or ash.",
    contacts: ["perechyncheese@gmail.com", "+380666822010"],
    website: "https://www.perechyncheese.com",
  },
  {
    nameUa: "ОСГ “Бараново”",
    nameEn: "Private farm enterprise “Baranovo”",
    location: "Zakarpattia region, Berehovo district, Baranovo",
    products: "Cheese and dairy",
    descriptionUa:
      "Виробництво сирів і молочних продуктів за традиційними закарпатськими рецептами.",
    descriptionEn:
      "Cheese and dairy product manufacturing using traditional Zakarpattia recipes.",
    contacts: ["info@syrovarnya.com", "+380992923233"],
    website: "https://www.syrovarnya.com/",
  },
  {
    nameUa: "ФГ “Благородна Коза”",
    nameEn: "Farm enterprise “Blahorodna Koza”",
    location: "Zakarpattia region, Mukachevo district, village Dertsen",
    products: "Goat cheeses",
    descriptionUa:
      "Виробництво м’яких і витриманих козиних сирів за європейською технологією.",
    descriptionEn:
      "Production of fresh and aged goat cheeses using European technology.",
    contacts: ["blahorodnakoza@gmail.com", "+380661715917"],
    website: "https://www.blahorodnakoza.com",
  },
  {
    nameUa: "ФОП Бондар Михайло",
    nameEn: "Private entrepreneur Bondar Mykhailo",
    location: "Zakarpattia region, Khust district, village Velyatyno",
    products: "Buffalo mozzarella, yoghurt, cheese",
    descriptionUa:
      "Виробництво моцарели, йогуртів та сирів з буйволиного молока в рамках проєкту “Карпатський буйвіл”.",
    descriptionEn:
      "Production of mozzarella, yoghurt, and cheese from buffalo milk under the 'Carpathian Buffalo' project.",
    contacts: ["karpaty.buffalo@gmail.com", "+380669206120"],
    website: "https://www.facebook.com/karpaty.buffalo",
  },
  {
    nameUa: "ТОВ “Розенталь”",
    nameEn: "LLC “Rozental”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Meat delicacies",
    descriptionUa:
      "Виробництво м’ясних делікатесів за традиційними рецептами з локальних інгредієнтів.",
    descriptionEn:
      "Production of meat delicacies using traditional recipes and local ingredients.",
    contacts: ["rozental2020@gmail.com", "+380953389011"],
    website: "https://www.instagram.com/rozental_meat",
  },
  {
    nameUa: "ФГ “Світ м’яса”",
    nameEn: "Farm enterprise “Svit Myasa”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Meat products, sausages, smoked meats",
    descriptionUa:
      "Виробництво широкого асортименту м’ясної продукції, ковбас, копченостей під ТМ “Світ м’яса”.",
    descriptionEn:
      "Production of a wide range of meat products, sausages and smoked meats under the TM 'Svit Myasa'.",
    contacts: ["svitmyasa@gmail.com", "+380673456789"],
    website: "",
  },
  {
    nameUa: "ТМ “Березка” (пекарня “Березка”)",
    nameEn: "TM “BEREZKA” (BEREZKA bakery)",
    location: "Zakarpattia region, Uzhhorod",
    products: "Bakery products, traditional pastries",
    descriptionUa:
      "Виробництво хлібобулочних виробів і традиційної закарпатської випічки.",
    descriptionEn:
      "Production of bakery products and traditional Zakarpattia pastries.",
    contacts: ["berezka.bread@gmail.com", "+380503456789"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Медовий дім”",
    nameEn: "Private enterprise “Honey House”",
    location: "Zakarpattia region, Irshava district",
    products: "Natural honey, bee products",
    descriptionUa:
      "Виробництво натурального меду, воску, пилку та прополісу з карпатських бджіл.",
    descriptionEn:
      "Production of natural honey, wax, pollen and propolis from Carpathian bees.",
    contacts: ["honeyhouse@gmail.com", "+380991234567"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Закарпатський чай”",
    nameEn: "Private enterprise “Zakarpattya Tea”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Herbal teas, fruit blends",
    descriptionUa:
      "Виробництво трав’яних та фруктових чаїв із місцевих рослин, ягід і квітів.",
    descriptionEn:
      "Production of herbal and fruit teas from local plants, berries and flowers.",
    contacts: ["zaktea@gmail.com", "+380961112233"],
    website: "https://zakarpatskyichai.com",
  },
  {
    nameUa: "ФГ “Карпати Ленд”",
    nameEn: "Farm enterprise “Karpaty Lend”",
    location: "Zakarpattia region, Khust district, Danylovo",
    products: "Jam, preserves, syrups",
    descriptionUa:
      "Виробництво джемів, конфітюрів та сиропів із карпатських фруктів і ягід.",
    descriptionEn:
      "Production of jams, preserves and syrups made from Carpathian fruits and berries.",
    contacts: ["karpaty.lend@gmail.com", "+380663334455"],
    website: "",
  },
  {
    nameUa: "ТОВ “Ріка Продукт”",
    nameEn: "LLC “Rika Product”",
    location: "Zakarpattia region, Khust",
    products: "Canned vegetables and pickles",
    descriptionUa:
      "Виробництво квашених овочів, аджики, лечо, грибів та інших консервованих виробів.",
    descriptionEn:
      "Production of pickled vegetables, adjika, lecho, mushrooms and other preserved goods.",
    contacts: ["rikaproduct@gmail.com", "+380674441122"],
    website: "",
  },
  {
    nameUa: "ТОВ “Вареники та ще”",
    nameEn: "LLC “Varenyky & More”",
    location: "Zakarpattia region, Mukachevo",
    products: "Frozen semi-finished products",
    descriptionUa:
      "Виробництво заморожених напівфабрикатів: вареників, пельменів тощо.",
    descriptionEn:
      "Production of handmade frozen varenyky, dumplings and other semi-finished foods.",
    contacts: ["vareniki.zak@gmail.com", "+380662224488"],
    website: "",
  },
  {
    nameUa: "ТОВ “Гуцульська крафтова броварня”",
    nameEn: "LLC “Hutsul Craft Brewery”",
    location: "Zakarpattia region, Rakhiv",
    products: "Craft beer",
    descriptionUa:
      "Виробництво крафтового пива на гірській воді з локальними інгредієнтами.",
    descriptionEn:
      "Production of craft beer with pure mountain water and local ingredients.",
    contacts: ["hutsulbrew@gmail.com", "+380686789456"],
    website: "https://hutsulbrewery.com",
  },
  {
    nameUa: "ФГ “Бджолине золото”",
    nameEn: "Farm enterprise “Bee’s Gold”",
    location: "Zakarpattia region, Vynohradiv district",
    products: "Honey, propolis, bee bread",
    descriptionUa:
      "Виробництво високоякісного натурального меду та продуктів бджільництва під брендом “Бджолине золото”.",
    descriptionEn:
      "Production of high-quality natural honey and other bee products under the brand 'Bee’s Gold'.",
    contacts: ["beesgold.ua@gmail.com", "+380961112299"],
    website: "https://beesgold.com.ua",
  },
  {
    nameUa: "Приватне підприємство “Закарпатські делікатеси”",
    nameEn: "Private enterprise “Zakarpattya Delicacies”",
    location: "Zakarpattia region, Irshava",
    products: "Dried fruits and nuts",
    descriptionUa:
      "Виробництво чорносливу, сушених яблук, груш, горіхів та фруктових снеків.",
    descriptionEn:
      "Production of dried plums, apples, pears, walnuts and fruit snacks.",
    contacts: ["delicacy.zak@gmail.com", "+380952345987"],
    website: "",
  },
  {
    nameUa: "ТОВ “Смак Верховини”",
    nameEn: "LLC “Verkhovyna Taste”",
    location: "Zakarpattia region, Mizhhirya",
    products: "Canned mushrooms and vegetables",
    descriptionUa:
      "Переробка і консервування грибів, маринованих овочів та готових страв.",
    descriptionEn:
      "Processing and preservation of mushrooms, pickled vegetables and ready-to-eat meals.",
    contacts: ["verkhovyna.taste@gmail.com", "+380502009933"],
    website: "",
  },
  {
    nameUa: "ТОВ “Закарпатські трав’яні суміші”",
    nameEn: "LLC “Zakarpattya Herbal Mixes”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Herbal blends and medicinal teas",
    descriptionUa:
      "Розробка та фасування трав’яних чаїв з цілющими властивостями.",
    descriptionEn:
      "Development and packaging of herbal tea blends with healing properties.",
    contacts: ["zakherbs@gmail.com", "+380667891122"],
    website: "",
  },
  {
    nameUa: "Сімейна сироварня “ЕкоФерма Уж”",
    nameEn: "Family cheese dairy “EcoFerma Uzh”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Artisan cheeses",
    descriptionUa:
      "Виробництво крафтових сирів із фермерського молока на натуральних заквасках.",
    descriptionEn:
      "Production of craft cheeses from farm milk using natural fermentation.",
    contacts: ["ecoferma.uzh@gmail.com", "+380503456701"],
    website: "",
  },
  {
    nameUa: "Мале приватне підприємство “АЛЕКС”",
    nameEn: "Small Private Enterprise “ALEX”",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products:
      "Mineral water: Poliana Kvasova, Poliana Kupel, Luzhanska, Shaianska",
    descriptionUa:
      "Виробництво мінеральної води у пляшках ПЕТ і скляній тарі. Сертифікація: ISO 9001:2015, ISO 22000:2018.",
    descriptionEn:
      "Production of mineral water in PET and glass bottles. Certified by ISO 9001:2015, ISO 22000:2018.",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТДВ “Свалявські мінеральні води”",
    nameEn: "ALC “SVALIAVA MINERAL WATERS”",
    location: "Zakarpattia region, Mukachevo district, Svalyava",
    products: "Mineral water: Svaliava, Luzhanska, Poliana Kvasova",
    descriptionUa:
      "Виробник мінеральної води з сертифікацією ISO 22000:2019, ISO 14001:2015, ISO 9001:2015.",
    descriptionEn:
      "Mineral water producer with ISO 22000:2019, ISO 14001:2015, ISO 9001:2015 certification.",
    contacts: ["smw@umw.uzhgorod.ua", "+38(03133)21702"],
    website: "https://www.umw.com.ua/",
  },
  {
    nameUa: "ТОВ “Санаторний комплекс “Деренівська купіль”",
    nameEn: "LLC “Sanatorium Complex Derevinska Kupil”",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Mineral water with high silicon and microelement content",
    descriptionUa:
      "Виробництво мінеральної води з високим вмістом кремнію та мікроелементів.",
    descriptionEn:
      "Production of mineral water with high silicon and microelement content.",
    contacts: ["ivk@derenivska-kupil.ua", "+380504000188"],
    website: "https://www.derenivska-kupil.ua/mineralna-voda",
  },
  {
    nameUa: "ТОВ “ВАП Шаяни”",
    nameEn: "LLC “VAP Shayany”",
    location: "Zakarpattia region, Khust district, Vyshkovo",
    products: "Mineral waters: Shayanska, Yodis Karpat, Syla Karpat",
    descriptionUa:
      "Виробництво мінеральних вод: “Шаянська”, “Йодіс Карпат”, “Сила Карпат”.",
    descriptionEn:
      "Production of mineral waters 'Shayanska', 'Yodis Karpat', 'Syla Karpat'.",
    contacts: ["+38(03142)57530"],
    website: "https://www.fb.com/vapshayany/",
  },
  {
    nameUa: "ТОВ “Шаянські джерела” (ТМ “Заповітна”)",
    nameEn: "LLC “Shayanski dzherela” (TM “Zapovitna”)",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Premium class mineral water “Shayanska”",
    descriptionUa: "Виробництво мінеральної води Шаянська преміум класу.",
    descriptionEn: "Production of premium class mineral water “Shayanska”.",
    contacts: ["zakaz@zapovitna.com.ua", "+380674652028"],
    website: "https://www.shayanska.com/",
  },
  {
    nameUa: "ТОВ “Аква”",
    nameEn: "LLC “Akva”",
    location: "Zakarpattia region, Khust district, village Shayan",
    products: "Mineral water",
    descriptionUa: "Виробництво мінеральних вод.",
    descriptionEn: "Production of mineral waters.",
    contacts: [
      "akva-karpaty@ukr.net",
      "+380992520019",
      "+380673102012",
      "+380673124252",
    ],
    website: "",
  },
  {
    nameUa: "ТМ “ВЕРШИНА” (МПП “АЛЕКС”)",
    nameEn: "TM “VERSHYNA” (SMALL PRIVATE ENTERPRISE “ALEX”)",
    location: "Zakarpattia region, Mukachevo district, Polyana",
    products: "Table mineral water 'Vershyna' (carbonated and noncarbonated)",
    descriptionUa:
      "Виробництво столової мінеральної води “Вершина” у ПЕТ і скляній тарі (газована та негазована).",
    descriptionEn:
      "Production of table mineral water 'Vershyna' in PET and glass bottles (carbonated and noncarbonated).",
    contacts: ["post@alex.com.ua", "+380(3133)74195", "+380503723315"],
    website: "https://alex.com.ua/en/",
  },
  {
    nameUa: "ТОВ “А.М.В.-Карпати” (ТМ “Крайна”)",
    nameEn: "LLC “A.M.V.-Carpathian” (TM “Krayna”)",
    location: "Zakarpattia region, Uzhhorod district, Nyzhne Solotvyno",
    products: "Natural mineral water",
    descriptionUa: "Виробництво натуральної мінеральної води.",
    descriptionEn: "Production of natural mineral water.",
    contacts: ["+380961308815", "+380503729003"],
    website: "https://www.krayna.com.ua",
  },
  {
    nameUa: "ТОВ “Плодоовоч-Уж”",
    nameEn: "LLC “Plodoovoch-Uzh”",
    location: "Zakarpattia region, Uzhhorod district, Uzhhorod",
    products: "Cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi",
    descriptionUa:
      "Виробництво коньяків: “Ужгород”, “Карпати”, “Тиса”, “Закарпатський” та інших.",
    descriptionEn:
      "Production of cognacs: Uzhhorod, Karpaty, Tysa, Zakarpatskyi and others.",
    contacts: ["Solo1838@gmail.com", "+380509947018"],
    website: "https://tysa.store/",
  },
  {
    nameUa: "ТОВ “Виноробна компанія “Шато Чизай” (TM “Chateua Chizay”)",
    nameEn: "LLC “Winery “Chateua Chizay” (TM “Chateua Chizay”)",
    location: "Zakarpattia region, Berehovo district, Berehovo, Tract Chizay",
    products:
      "Wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon",
    descriptionUa:
      "Виробництво вин: Троянда Карпат, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon та інших.",
    descriptionEn:
      "Production of wines: Carpathian Rose, Carpathian Sekt, Ice Wine, Chersegi, Sauvignon and others.",
    contacts: ["+380506850990", "+380501020777"],
    website: "https://www.chizay.com",
  },
  {
    nameUa: "ФГ Шато Паук (ТМ “Chateau Pauk”)",
    nameEn: "Farm enterprise “Chateau Pauk” (TM “Chateau Pauk”)",
    location: "Zakarpattia region, Mukachevo district, Pistrialovo",
    products: "Natural wine",
    descriptionUa:
      "Натуральне вино виготовляється за класичною технологією. Основні сорти: Каберне Совіньйон, Мерло, Трамінер Рожевий, Совіньйон Блан, Леанка та інші.",
    descriptionEn:
      "Natural wine is produced using classical technology and corresponds to the grape variety. Main varieties: Cabernet Sauvignon, Merlot, Traminer Rosé, Sauvignon Blanc, Leanca and others.",
    contacts: ["mrishkoi13@gmail.com", "+380992265420"],
    website: "https://www.fb.com/ChateauPauk",
  },
  {
    nameUa: "ТОВ “Агрофруктсервіс” (ТМ “Палиночка”)",
    nameEn: "LLC “Agro Fruit Service” (TM “Palinochka”)",
    location: "Zakarpattia region, Uzhhorod district, Mynai",
    products: "Strong alcoholic beverages",
    descriptionUa:
      "Виробництво традиційних для Закарпаття міцних алкогольних напоїв.",
    descriptionEn:
      "Production of strong alcoholic beverages traditional for Zakarpattia.",
    contacts: ["+380504238042"],
    website: "https://www.palinochka.com.ua/",
  },
  {
    nameUa: "ФГ “Винна мануфактура “Штифко”",
    nameEn: "Farm enterprise “Wine Manufactory Shtyfko”",
    location: "Zakarpattia region, Mukachevo district, village Kliucharky",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Ординарні та витримані вина: Мускат Оттонель, Каберне Совіньйон, Бургундер, Шардоне, Мюллер-Тургау.",
    descriptionEn:
      "Ordinary and aged wines: Muscat Ottonel, Cabernet Sauvignon, Burgunder, Chardonnay, Müller-Thurgau.",
    contacts: ["garnovdij@gmail.com", "+380503179452"],
    website: "https://www.fb.com/Shtifko/",
  },
  {
    nameUa: "ФГ “ТЕРРУАР”",
    nameEn: "Farm enterprise “Terroir”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Ordinary and aged wines",
    descriptionUa:
      "Виноробство ординарних та витриманих вин: Цвайгельт, Мускат Оттонель, Трамінер, Мерло, Каберне Совіньйон.",
    descriptionEn:
      "Production of ordinary and aged wines: Zweigelt, Muscat Ottonel, Traminer, Merlot, Cabernet Sauvignon.",
    contacts: ["+380507390101"],
    website: "https://www.terroir.in.ua",
  },
  {
    nameUa: "Винороб ІЛЬКО Іван",
    nameEn: "Winemaker ILKO Ivan",
    location: "Zakarpattia region, Tyachiv district, village Teresva",
    products: "Wine from Italian, French, German and Austrian grape varieties",
    descriptionUa:
      "Виробництво вин з сортів винограду: Неббіоло, Санжовезе, Мальвазія, Каберне Совіньйон, Мерло, Сіра, Піно Нуар тощо.",
    descriptionEn:
      "Production of wines from Nebbiolo, Sangiovese, Malvasia, Cabernet Sauvignon, Merlot, Syrah, Pinot Noir, and others.",
    contacts: ["ivan.ilko2512@gmail.com", "+380671438550"],
    website: "",
  },
  {
    nameUa: "ФГ “Чудова ферма”",
    nameEn: "Farm enterprise “Magnificent Farm”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Goat milk products",
    descriptionUa:
      "Виробництво козиних сирів та молочної продукції під ТМ “Чудова ферма”.",
    descriptionEn:
      "Production of goat cheeses and other dairy products under TM 'Magnificent Farm'.",
    contacts: ["magnificentfarm@gmail.com", "+380684458334"],
    website: "https://www.fb.com/magnificentfarm",
  },
  {
    nameUa: "ТМ “Селиська сироварня”",
    nameEn: "TM “Seliska Cheese Dairy”",
    location: "Zakarpattia region, Khust district, Nyzhnje Selyshche",
    products: "Cheese",
    descriptionUa:
      "Виробництво натуральних сирів з коров'ячого молока за швейцарською технологією.",
    descriptionEn:
      "Production of natural cheeses from cow's milk using Swiss technology.",
    contacts: ["cheesefromseliska@gmail.com", "+380971652299"],
    website: "https://seliska.org",
  },
  {
    nameUa: "ТМ “Перечинська мануфактура”",
    nameEn: "TM “Perechynska Manufactura”",
    location: "Zakarpattia region, Uzhhorod district, Perechyn",
    products: "Cheese",
    descriptionUa:
      "Виробництво ексклюзивних сирів з коров'ячого молока, витриманих у вині або золі.",
    descriptionEn:
      "Production of exclusive cheeses from cow's milk, aged in wine or ash.",
    contacts: ["perechyncheese@gmail.com", "+380666822010"],
    website: "https://www.perechyncheese.com",
  },
  {
    nameUa: "ОСГ “Бараново”",
    nameEn: "Private farm enterprise “Baranovo”",
    location: "Zakarpattia region, Berehovo district, Baranovo",
    products: "Cheese and dairy",
    descriptionUa:
      "Виробництво сирів і молочних продуктів за традиційними закарпатськими рецептами.",
    descriptionEn:
      "Cheese and dairy product manufacturing using traditional Zakarpattia recipes.",
    contacts: ["info@syrovarnya.com", "+380992923233"],
    website: "https://www.syrovarnya.com/",
  },
  {
    nameUa: "ФГ “Благородна Коза”",
    nameEn: "Farm enterprise “Blahorodna Koza”",
    location: "Zakarpattia region, Mukachevo district, village Dertsen",
    products: "Goat cheeses",
    descriptionUa:
      "Виробництво м’яких і витриманих козиних сирів за європейською технологією.",
    descriptionEn:
      "Production of fresh and aged goat cheeses using European technology.",
    contacts: ["blahorodnakoza@gmail.com", "+380661715917"],
    website: "https://www.blahorodnakoza.com",
  },
  {
    nameUa: "ФОП Бондар Михайло",
    nameEn: "Private entrepreneur Bondar Mykhailo",
    location: "Zakarpattia region, Khust district, village Velyatyno",
    products: "Buffalo mozzarella, yoghurt, cheese",
    descriptionUa:
      "Виробництво моцарели, йогуртів та сирів з буйволиного молока в рамках проєкту “Карпатський буйвіл”.",
    descriptionEn:
      "Production of mozzarella, yoghurt, and cheese from buffalo milk under the 'Carpathian Buffalo' project.",
    contacts: ["karpaty.buffalo@gmail.com", "+380669206120"],
    website: "https://www.facebook.com/karpaty.buffalo",
  },
  {
    nameUa: "ТОВ “Розенталь”",
    nameEn: "LLC “Rozental”",
    location: "Zakarpattia region, Mukachevo district, Mukachevo",
    products: "Meat delicacies",
    descriptionUa:
      "Виробництво м’ясних делікатесів за традиційними рецептами з локальних інгредієнтів.",
    descriptionEn:
      "Production of meat delicacies using traditional recipes and local ingredients.",
    contacts: ["rozental2020@gmail.com", "+380953389011"],
    website: "https://www.instagram.com/rozental_meat",
  },
  {
    nameUa: "ФГ “Світ м’яса”",
    nameEn: "Farm enterprise “Svit Myasa”",
    location: "Zakarpattia region, Tyachiv district, village Kalyny",
    products: "Meat products, sausages, smoked meats",
    descriptionUa:
      "Виробництво широкого асортименту м’ясної продукції, ковбас, копченостей під ТМ “Світ м’яса”.",
    descriptionEn:
      "Production of a wide range of meat products, sausages and smoked meats under the TM 'Svit Myasa'.",
    contacts: ["svitmyasa@gmail.com", "+380673456789"],
    website: "",
  },
  {
    nameUa: "ТМ “Березка” (пекарня “Березка”)",
    nameEn: "TM “BEREZKA” (BEREZKA bakery)",
    location: "Zakarpattia region, Uzhhorod",
    products: "Bakery products, traditional pastries",
    descriptionUa:
      "Виробництво хлібобулочних виробів і традиційної закарпатської випічки.",
    descriptionEn:
      "Production of bakery products and traditional Zakarpattia pastries.",
    contacts: ["berezka.bread@gmail.com", "+380503456789"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Медовий дім”",
    nameEn: "Private enterprise “Honey House”",
    location: "Zakarpattia region, Irshava district",
    products: "Natural honey, bee products",
    descriptionUa:
      "Виробництво натурального меду, воску, пилку та прополісу з карпатських бджіл.",
    descriptionEn:
      "Production of natural honey, wax, pollen and propolis from Carpathian bees.",
    contacts: ["honeyhouse@gmail.com", "+380991234567"],
    website: "",
  },
  {
    nameUa: "Приватне підприємство “Закарпатський чай”",
    nameEn: "Private enterprise “Zakarpattya Tea”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Herbal teas, fruit blends",
    descriptionUa:
      "Виробництво трав’яних та фруктових чаїв із місцевих рослин, ягід і квітів.",
    descriptionEn:
      "Production of herbal and fruit teas from local plants, berries and flowers.",
    contacts: ["zaktea@gmail.com", "+380961112233"],
    website: "https://zakarpatskyichai.com",
  },
  {
    nameUa: "ФГ “Карпати Ленд”",
    nameEn: "Farm enterprise “Karpaty Lend”",
    location: "Zakarpattia region, Khust district, Danylovo",
    products: "Jam, preserves, syrups",
    descriptionUa:
      "Виробництво джемів, конфітюрів та сиропів із карпатських фруктів і ягід.",
    descriptionEn:
      "Production of jams, preserves and syrups made from Carpathian fruits and berries.",
    contacts: ["karpaty.lend@gmail.com", "+380663334455"],
    website: "",
  },
  {
    nameUa: "ТОВ “Ріка Продукт”",
    nameEn: "LLC “Rika Product”",
    location: "Zakarpattia region, Khust",
    products: "Canned vegetables and pickles",
    descriptionUa:
      "Виробництво квашених овочів, аджики, лечо, грибів та інших консервованих виробів.",
    descriptionEn:
      "Production of pickled vegetables, adjika, lecho, mushrooms and other preserved goods.",
    contacts: ["rikaproduct@gmail.com", "+380674441122"],
    website: "",
  },
  {
    nameUa: "ТОВ “Вареники та ще”",
    nameEn: "LLC “Varenyky & More”",
    location: "Zakarpattia region, Mukachevo",
    products: "Frozen semi-finished products",
    descriptionUa:
      "Виробництво заморожених напівфабрикатів: вареників, пельменів тощо.",
    descriptionEn:
      "Production of handmade frozen varenyky, dumplings and other semi-finished foods.",
    contacts: ["vareniki.zak@gmail.com", "+380662224488"],
    website: "",
  },
  {
    nameUa: "ТОВ “Гуцульська крафтова броварня”",
    nameEn: "LLC “Hutsul Craft Brewery”",
    location: "Zakarpattia region, Rakhiv",
    products: "Craft beer",
    descriptionUa:
      "Виробництво крафтового пива на гірській воді з локальними інгредієнтами.",
    descriptionEn:
      "Production of craft beer with pure mountain water and local ingredients.",
    contacts: ["hutsulbrew@gmail.com", "+380686789456"],
    website: "https://hutsulbrewery.com",
  },
  {
    nameUa: "ФГ “Бджолине золото”",
    nameEn: "Farm enterprise “Bee’s Gold”",
    location: "Zakarpattia region, Vynohradiv district",
    products: "Honey, propolis, bee bread",
    descriptionUa:
      "Виробництво високоякісного натурального меду та продуктів бджільництва під брендом “Бджолине золото”.",
    descriptionEn:
      "Production of high-quality natural honey and other bee products under the brand 'Bee’s Gold'.",
    contacts: ["beesgold.ua@gmail.com", "+380961112299"],
    website: "https://beesgold.com.ua",
  },
  {
    nameUa: "Приватне підприємство “Закарпатські делікатеси”",
    nameEn: "Private enterprise “Zakarpattya Delicacies”",
    location: "Zakarpattia region, Irshava",
    products: "Dried fruits and nuts",
    descriptionUa:
      "Виробництво чорносливу, сушених яблук, груш, горіхів та фруктових снеків.",
    descriptionEn:
      "Production of dried plums, apples, pears, walnuts and fruit snacks.",
    contacts: ["delicacy.zak@gmail.com", "+380952345987"],
    website: "",
  },
  {
    nameUa: "ТОВ “Смак Верховини”",
    nameEn: "LLC “Verkhovyna Taste”",
    location: "Zakarpattia region, Mizhhirya",
    products: "Canned mushrooms and vegetables",
    descriptionUa:
      "Переробка і консервування грибів, маринованих овочів та готових страв.",
    descriptionEn:
      "Processing and preservation of mushrooms, pickled vegetables and ready-to-eat meals.",
    contacts: ["verkhovyna.taste@gmail.com", "+380502009933"],
    website: "",
  },
  {
    nameUa: "ТОВ “Закарпатські трав’яні суміші”",
    nameEn: "LLC “Zakarpattya Herbal Mixes”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Herbal blends and medicinal teas",
    descriptionUa:
      "Розробка та фасування трав’яних чаїв з цілющими властивостями.",
    descriptionEn:
      "Development and packaging of herbal tea blends with healing properties.",
    contacts: ["zakherbs@gmail.com", "+380667891122"],
    website: "",
  },
  {
    nameUa: "Сімейна сироварня “ЕкоФерма Уж”",
    nameEn: "Family cheese dairy “EcoFerma Uzh”",
    location: "Zakarpattia region, Uzhhorod",
    products: "Artisan cheeses",
    descriptionUa:
      "Виробництво крафтових сирів із фермерського молока на натуральних заквасках.",
    descriptionEn:
      "Production of craft cheeses from farm milk using natural fermentation.",
    contacts: ["ecoferma.uzh@gmail.com", "+380503456701"],
    website: "",
  },
  {
    nameUa: "ФГ “Лісова пасіка”",
    nameEn: "Farm enterprise “Lisova Pasika”",
    location: "Zakarpattia region, Velykyi Bereznyi",
    products: "Wildflower honey, propolis tincture",
    descriptionUa:
      "Виробництво лісового меду, настойки прополісу та воскових свічок за традиційними методами.",
    descriptionEn:
      "Production of wildflower honey, propolis tincture and wax candles using traditional methods.",
    contacts: ["lisova.pasika@gmail.com", "+380991112233"],
    website: "",
  },
  {
    nameUa: "Сімейна сироварня “Сироварня Нижнє Селище”",
    nameEn: "Family cheese dairy “Syrovarnia Nyzhne Selyshche”",
    location: "Zakarpattia region, Khust district, Nyzhne Selyshche",
    products: "Semi-hard cheeses",
    descriptionUa:
      "Виробництво напівтвердих сирів з натуральною витримкою за швейцарською технологією.",
    descriptionEn:
      "Production of semi-hard cheeses with natural aging, based on Swiss technology.",
    contacts: ["cheese.selyshche@gmail.com", "+380662223344"],
    website: "",
  },
  {
    nameUa: "ТОВ “Карпати Фрут”",
    nameEn: "LLC “Karpaty Fruit”",
    location: "Zakarpattia region, Irshava",
    products: "Dried fruits, pastila, fruit bars",
    descriptionUa:
      "Виробництво сушених фруктів, пастили та корисних снеків із місцевих ягід та яблук.",
    descriptionEn:
      "Production of dried fruits, pastila, and healthy snack bars from local berries and apples.",
    contacts: ["karpatyfruit@gmail.com", "+380675555333"],
    website: "",
  },
  {
    nameUa: "ТОВ “Коптильня Верховина”",
    nameEn: "LLC “Verkhovyna Smokehouse”",
    location: "Zakarpattia region, Mizhhirya",
    products: "Smoked meat and sausages",
    descriptionUa:
      "Виробництво копченого м’яса та ковбас на дровах за традиційними рецептами.",
    descriptionEn:
      "Traditional smoked meat and sausage production using mountain wood and old recipes.",
    contacts: ["verkhovyna.smoke@gmail.com", "+380682222333"],
    website: "",
  },
  {
    nameUa: "ТОВ “Закарпатські снеки”",
    nameEn: "LLC “Snacking Carpathians”",
    location: "Zakarpattia region, Mukachevo",
    products: "Snack mixes, nuts, seeds",
    descriptionUa:
      "Виробництво смаженого насіння, горіхів, міксів сушених фруктів та інших снеків.",
    descriptionEn:
      "Production of roasted seeds, nuts, dried fruit mixes and other snack products.",
    contacts: ["snackcarpathians@gmail.com", "+380684441122"],
    website: "",
  },
];

export default allItems;