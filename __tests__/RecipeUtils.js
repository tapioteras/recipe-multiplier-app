import "react-native"
import React from "react"

import { parseKRuokaRecipe } from "../src/utils/RecipeUtils"

it("converts recipes with multiple categories correctly", () =>
  expect(parseKRuokaRecipe(testData_singleCategory)).toEqual({
    categories: [
      {
        id: 0,
        name: "_",
      },
    ],
    ingredients: [
      {
        amount: 4,
        category: "_",
        name: "roseeviinimäistä juomaa (0% tai 5,5 %)",
        unit: "dl",
      },
      {
        amount: 2,
        category: "_",
        name: "Pirkka Parhaat Russian virvoitusjuomaa",
        unit: "dl",
      },
      {
        amount: 2,
        category: "_",
        name: "Pirkka karpalomehua",
        unit: "dl",
      },
      {
        amount: "",
        category: "_",
        name: "jäitä",
      },
      {
        amount: 2,
        category: "_",
        name: "tuoreita vadelmia",
        unit: "dl",
      },
      {
        amount: 0.5,
        category: "_",
        name: "Pirkka Parhaat suomalaisia vadelmia (pakaste)",
        unit: "rs",
      },
      {
        amount: 0.5,
        category: "_",
        name: "limettiä viipaleina",
        unit: "",
      },
      {
        amount: "",
        category: "_",
        name: "tuoretta minttua",
      },
    ],
    name: "Roseesangria",
    portions: 6,
    steps: [
      "Kaada juomat jäiden kanssa isoon kannuun. Lisää hieman murskatut vadelmat ja limettiviipaleet. Viimeistele juoma tuoreella mintulla ja tarjoa heti.",
    ],
  }))

it("converts recipes with multiple categories correctly", () =>
  expect(parseKRuokaRecipe(testData_multipleCategories)).toEqual({
    categories: [
      {
        id: 0,
        name: "_",
      },
      {
        id: 1,
        name: "Piparjuurimajoneesi",
      },
      {
        id: 2,
        name: "Pikkelöity punasipuli",
      },
      {
        id: 3,
        name: "Koristeluun",
      },
    ],
    ingredients: [
      {
        amount: 16,
        category: "_",
        name: "varhaisperunaa",
        unit: "",
      },
      {
        amount: 2,
        category: "_",
        name: "suolaa",
        unit: "tl",
      },
      {
        amount: 1,
        category: "_",
        name: "rypsiöljyä",
        unit: "rkl",
      },
      {
        amount: "",
        category: "_",
        name: "mustapippuria myllystä",
        unit: "ripaus",
      },
      {
        amount: 1,
        category: "_",
        name: "ruohosipulia",
        unit: "ruukku",
      },
      {
        amount: 0.5,
        category: "_",
        name: "tilliä",
        unit: "ruukkua",
      },
      {
        amount: 160,
        category: "_",
        name: "maustesilliä",
        unit: "g",
      },
      {
        amount: 2,
        category: "_",
        name: "kananmunaa",
        unit: "",
      },
      {
        amount: 100,
        category: "Piparjuurimajoneesi",
        name: "majoneesia",
        unit: "g",
      },
      {
        amount: 1,
        category: "Piparjuurimajoneesi",
        name: "piparjuuritahnaa (esim. Felix)",
        unit: "tl",
      },
      {
        amount: 1,
        category: "Pikkelöity punasipuli",
        name: "punasipuli",
        unit: "",
      },
      {
        amount: 0.75,
        category: "Pikkelöity punasipuli",
        name: "vettä",
        unit: "dl",
      },
      {
        amount: 0.5,
        category: "Pikkelöity punasipuli",
        name: "sokeria",
        unit: "dl",
      },
      {
        amount: 0.25,
        category: "Pikkelöity punasipuli",
        name: "väkiviinaetikkaa",
        unit: "dl",
      },
      {
        amount: 0.5,
        category: "Koristeluun",
        name: "tilliä",
        unit: "ruukkua",
      },
      {
        amount: 4,
        category: "Koristeluun",
        name: "retiisiä",
        unit: "",
      },
    ],
    name: "Grillatut uudet perunat, kananmunaa ja maustesilliä",
    portions: 6,
    steps: [
      "Laita vesi, sokeri ja etikka kattilaan. Kiehauta ja anna pikkeliliemen jäähtyä.\r\n",
      "Leikkaa sipuli ohuiksi renkaiksi. Kaada pikkeliliemi sipuleiden päälle ja anna maustua 2 tuntia\r\n",
      "Sekoita majoneesi ja piparjuuritahna.\r\n",
      "Pese perunat huolellisesti. Keitä perunoita 10 minuuttia. Valuta ja anna jäähtyä hetki. Leikkaa perunat puoliksi ja grillaa noin 10 minuuttia, kunnes ne ovat kypsiä. Mausta suolalla, mustapippurilla, hienonnetulla tillillä ja ruohosipulilla sekä rypsiöljyllä.\r\n",
      "Leikkaa sillit 1 cm paksuiksi viipaleiksi. Keitä kananmunia 9 minuuttia, jäähdytä, kuori ja murskaa. Leikkaa retiisit ohuiksi viipaleiksi.\r\n",
      "Aseta perunat ja sillit kulhoon, pursota majoneesia, lisää murskattu kananmuna ja pikkelöidyt punasipulit. Koristele tillillä ja raasta tuoretta piparjuurta päälle.",
    ],
  }))

const testData_multipleCategories = {
  Id: "11700",
  Name: "Grillatut uudet perunat, kananmunaa ja maustesilliä",
  PieceSize: {
    Unit: "g",
  },
  Portions: {
    Unit: "annosta",
    Amount: "4",
  },
  PreparationTime: {
    Description: "yli 60 min",
    TimeRange: {
      MinTime: 60,
    },
  },
  UserPortions: {
    $: {
      Unit: "henkilölle",
    },
  },
  Categories: [
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Viikonloppu",
      SubId: "160",
    },
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Fiininpi",
      SubId: "162",
    },
    {
      MainName: "Sesongin raaka-aineet",
      MainId: "19",
      SubName: "Varhaisperunat",
      SubId: "169",
    },
    {
      MainName: "Pääraaka-aine",
      MainId: "14",
      SubName: "Peruna",
      SubId: "207",
    },
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Juhannus",
      SubId: "122",
    },
    {
      MainName: "Asiakassegmentointi (K-asiakkaat)",
      MainId: "17",
      SubName: "Nautiskelijat",
      SubId: "146",
    },
    {
      MainName: "Asiakassegmentointi (K-asiakkaat)",
      MainId: "17",
      SubName: "Innostujat",
      SubId: "147",
    },
    {
      MainName: "Asiakassegmentointi (K-asiakkaat)",
      MainId: "17",
      SubName: "Mukavuudenhaluiset ",
      SubId: "149",
    },
    {
      MainName: "Apukategoriat",
      MainId: "18",
      SubName: "Helppo",
      SubId: "153",
    },
    {
      MainName: "Apukategoriat",
      MainId: "18",
      SubName: "Trendikäs ",
      SubId: "156",
    },
    {
      MainName: "Lisäkkeet",
      MainId: "6",
      SubName: "Perunalisäkkeet",
      SubId: "43",
    },
    {
      MainName: "Pääruoat",
      MainId: "4",
      SubName: "Grilliruoat",
      SubId: "73",
    },
    {
      MainName: "Makuja maailmalta",
      MainId: "2",
      SubName: "Skandinavia",
      SubId: "105",
    },
    {
      MainName: "Makuja maailmalta",
      MainId: "2",
      SubName: "Suomi",
      SubId: "106",
    },
    {
      MainName: "Pääraaka-aine",
      MainId: "14",
      SubName: "Kala",
      SubId: "116",
    },
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Kesä",
      SubId: "121",
    },
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Grillaus",
      SubId: "5",
    },
    {
      MainName: "Alkuruoat",
      MainId: "3",
      SubName: "Muut alkuruoat",
      SubId: "19",
    },
    {
      MainName: "Pääruoat",
      MainId: "4",
      SubName: "Kalaruoat",
      SubId: "20",
    },
  ],
  Pictures: ["grillatutuudetperu21"],
  PictureUrls: [
    {
      Id: "grillatutuudetperu21",
      Normal:
        "https://public.keskofiles.com/f/recipe/grillatutuudetperu21?w=1000&h=1000&fit=clip",
      Original: "https://public.keskofiles.com/f/recipe/grillatutuudetperu21",
    },
  ],
  SpecialDiets: [
    {
      Id: "4",
      Name: "Gluteeniton",
    },
  ],
  Ingredients: [
    {
      SubSectionHeading: "_",
      SubSectionIngredients: [
        [
          {
            Name: "varhaisperunaa",
            Amount: "16",
            AmountInfo: "(n. 350 g)",
            PackageRecipe: "false",
            IngredientType: "6525",
            Unit: "",
            IngredientTypeName: "Varhaisperuna",
          },
        ],
        [
          {
            Name: "suolaa",
            Amount: "2",
            PackageRecipe: "false",
            IngredientType: "7049",
            Unit: "tl",
            IngredientTypeName: "Suola",
          },
        ],
        [
          {
            Name: "rypsiöljyä",
            Amount: "1",
            PackageRecipe: "false",
            IngredientType: "6807",
            Unit: "rkl",
            IngredientTypeName: "Rypsiöljy",
          },
        ],
        [
          {
            Name: "mustapippuria myllystä",
            PackageRecipe: "false",
            IngredientType: "6269",
            Unit: "ripaus",
            IngredientTypeName: "Mustapippuri, kokonainen",
          },
        ],
        [
          {
            Name: "ruohosipulia",
            Amount: "1",
            PackageRecipe: "false",
            IngredientType: "6772",
            Unit: "ruukku",
            IngredientTypeName: "Ruohosipuli, tuore",
          },
        ],
        [
          {
            Name: "tilliä",
            Amount: "1/2",
            PackageRecipe: "false",
            IngredientType: "14766",
            Unit: "ruukkua",
            IngredientTypeName: "Tilli, tuore",
          },
        ],
        [
          {
            Name: "maustesilliä",
            Amount: "160",
            PackageRecipe: "false",
            IngredientType: "6186",
            Unit: "g",
            IngredientTypeName: "Maustesilli",
          },
        ],
        [
          {
            Name: "kananmunaa",
            Amount: "2",
            PackageRecipe: "false",
            IngredientType: "5683",
            Unit: "",
            IngredientTypeName: "Kananmuna",
          },
        ],
      ],
    },
    {
      SubSectionHeading: "Piparjuurimajoneesi",
      SubSectionIngredients: [
        [
          {
            Name: "majoneesia",
            Amount: "100",
            PackageRecipe: "false",
            IngredientType: "6058",
            Unit: "g",
            IngredientTypeName: "Majoneesi",
          },
        ],
        [
          {
            Name: "piparjuuritahnaa (esim. Felix)",
            Amount: "1",
            PackageRecipe: "false",
            IngredientType: "6560",
            Unit: "tl",
            IngredientTypeName: "Piparjuuritahna",
          },
        ],
      ],
    },
    {
      SubSectionHeading: "Pikkelöity punasipuli",
      SubSectionIngredients: [
        [
          {
            Name: "punasipuli",
            Amount: "1",
            PackageRecipe: "false",
            IngredientType: "6667",
            Unit: "",
            IngredientTypeName: "Punasipuli",
          },
        ],
        [
          {
            Name: "vettä",
            Amount: "3/4",
            PackageRecipe: "false",
            IngredientType: "15792",
            Unit: "dl",
            IngredientTypeName: "Vesi",
          },
        ],
        [
          {
            Name: "sokeria",
            Amount: "1/2",
            PackageRecipe: "false",
            IngredientType: "6961",
            Unit: "dl",
            IngredientTypeName: "Sokeri",
          },
        ],
        [
          {
            Name: "väkiviinaetikkaa",
            Amount: "1/4",
            PackageRecipe: "false",
            IngredientType: "7367",
            Unit: "dl",
            IngredientTypeName: "Väkiviinaetikka",
          },
        ],
      ],
    },
    {
      SubSectionHeading: "Koristeluun",
      SubSectionIngredients: [
        [
          {
            Name: "tilliä",
            Amount: "1/2",
            PackageRecipe: "false",
            IngredientType: "14766",
            Unit: "ruukkua",
            IngredientTypeName: "Tilli, tuore",
          },
        ],
        [
          {
            Name: "retiisiä",
            Amount: "4",
            PackageRecipe: "false",
            IngredientType: "15826",
            Unit: "",
            IngredientTypeName: "Piparjuuri, tuore",
          },
        ],
      ],
    },
  ],
  Instructions:
    "# Laita vesi, sokeri ja etikka kattilaan. Kiehauta ja anna pikkeliliemen jäähtyä.\r\n# Leikkaa sipuli ohuiksi renkaiksi. Kaada pikkeliliemi sipuleiden päälle ja anna maustua 2 tuntia\r\n# Sekoita majoneesi ja piparjuuritahna.\r\n# Pese perunat huolellisesti. Keitä perunoita 10 minuuttia. Valuta ja anna jäähtyä hetki. Leikkaa perunat puoliksi ja grillaa noin 10 minuuttia, kunnes ne ovat kypsiä. Mausta suolalla, mustapippurilla, hienonnetulla tillillä ja ruohosipulilla sekä rypsiöljyllä.\r\n# Leikkaa sillit 1 cm paksuiksi viipaleiksi. Keitä kananmunia 9 minuuttia, jäähdytä, kuori ja murskaa. Leikkaa retiisit ohuiksi viipaleiksi.\r\n# Aseta perunat ja sillit kulhoon, pursota majoneesia, lisää murskattu kananmuna ja pikkelöidyt punasipulit. Koristele tillillä ja raasta tuoretta piparjuurta päälle.",
  EndNote: "",
  Description:
    "Grillatut uudet peruunat muuttuvat ravintolatason annokseksi sillin ja kananmunan kanssa. Tarjoa esimerkiksi grillatun kalan kanssa. Resepti: Bocuse d'Or Mikko Kaukonen",
  DateCreated: "2021-05-26T14:47:28",
  DateModified: "2021-06-06T22:02:13",
  Stamp: {
    Name: "Kumppani",
    Id: "6",
  },
  RecipeUse: {
    Name: "k-ruoka.fi",
    Id: "1",
  },
  resourceType: "recipe",
  Url: "https://www.k-ruoka.fi/reseptit/grillatut-uudet-perunat-kananmunaa-ja-maustesillia",
  UrlSlug: "grillatut-uudet-perunat-kananmunaa-ja-maustesillia",
  Sort: [1, 1, 11700],
  MainCategory: {
    MainName: "Alkuruoat",
    MainId: "3",
    SubName: "Muut alkuruoat",
    SubId: "19",
  },
  AvailableFilters: {
    sesonki: [
      {
        type: "sesonki",
        value: "juhannus",
      },
      {
        type: "sesonki",
        value: "grillikausi",
      },
    ],
    paaraakaaine: [
      {
        type: "paaraakaaine",
        value: "kala",
      },
    ],
    erityisruokavalio: [
      {
        type: "erityisruokavalio",
        value: "gluteeniton",
      },
    ],
  },
  Rating: {
    targetId: "11700",
    targetNamespace: "recipe",
    average: 3.45455,
    commentCount: 1,
    distributions: {
      main: {
        1: 2,
        2: 1,
        3: 3,
        4: 0,
        5: 5,
      },
      hilarity: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      usefulness: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    },
    distribution: {
      1: 2,
      2: 1,
      3: 3,
      4: 0,
      5: 5,
    },
    averages: {
      main: 3.45455,
      hilarity: 0,
      usefulness: 0,
    },
  },
}

const testData_singleCategory = {
  Id: "11613",
  Name: "Roseesangria",
  PieceSize: {
    Unit: "ml",
    Amount: "200",
  },
  Portions: {
    Unit: "annosta",
    Amount: "4",
  },
  PreparationTime: {
    Description: "alle 15 min",
    TimeRange: {
      MinTime: 5,
      MaxTime: 15,
    },
  },
  UserPortions: {
    $: {
      Unit: "henkilölle",
    },
  },
  Categories: [
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Grillaus",
      SubId: "5",
    },
    {
      MainName: "Juomat",
      MainId: "9",
      SubName: "Kylmät juomat ja boolit",
      SubId: "59",
    },
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Kesä",
      SubId: "121",
    },
    {
      MainName: "Apukategoriat",
      MainId: "18",
      SubName: "Trendikäs ",
      SubId: "156",
    },
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Viikonloppu",
      SubId: "160",
    },
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Juhlat",
      SubId: "164",
    },
    {
      MainName: "Sesonki",
      MainId: "1",
      SubName: "Juhannus",
      SubId: "122",
    },
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Brunssi",
      SubId: "131",
    },
    {
      MainName: "Teema",
      MainId: "15",
      SubName: "Piknik",
      SubId: "132",
    },
    {
      MainName: "Asiakassegmentointi (K-asiakkaat)",
      MainId: "17",
      SubName: "Nautiskelijat",
      SubId: "146",
    },
    {
      MainName: "Asiakassegmentointi (K-asiakkaat)",
      MainId: "17",
      SubName: "Innostujat",
      SubId: "147",
    },
    {
      MainName: "Apukategoriat",
      MainId: "18",
      SubName: "Helppo",
      SubId: "153",
    },
  ],
  Pictures: ["Roseesangria_KR8_21"],
  PictureUrls: [
    {
      Id: "Roseesangria_KR8_21",
      Normal:
        "https://public.keskofiles.com/f/recipe/Roseesangria_KR8_21?w=1000&h=1000&fit=clip",
      Original: "https://public.keskofiles.com/f/recipe/Roseesangria_KR8_21",
    },
  ],
  SpecialDiets: [
    {
      Id: "2",
      Name: "Laktoositon",
    },
    {
      Id: "3",
      Name: "Maidoton",
    },
    {
      Id: "4",
      Name: "Gluteeniton",
    },
    {
      Id: "6",
      Name: "Kasvis (lakto-ovo)",
    },
    {
      Id: "7",
      Name: "Kananmunaton",
    },
  ],
  Ingredients: [
    {
      SubSectionHeading: "_",
      SubSectionIngredients: [
        [
          {
            Name: "roseeviinimäistä juomaa (0% tai 5,5 %)",
            Amount: "4",
            PackageRecipe: "false",
            IngredientType: "17044",
            Unit: "dl",
            IngredientTypeName: "Roseeviinimäinen juoma, 5,5 %",
          },
        ],
        [
          {
            Name: "Pirkka Parhaat Russian virvoitusjuomaa",
            Ean: "6410405164575",
            Amount: "2",
            PackageRecipe: "false",
            IngredientType: "11465",
            Unit: "dl",
            IngredientTypeName: "Mikseri, russian",
          },
        ],
        [
          {
            Name: "Pirkka karpalomehua",
            Ean: "6410405107442",
            Amount: "2",
            PackageRecipe: "false",
            IngredientType: "5721",
            Unit: "dl",
            IngredientTypeName: "Mehu, karpalo",
          },
        ],
        [
          {
            Name: "jäitä",
            PackageRecipe: "false",
            IngredientType: "5607",
            IngredientTypeName: "Jääpalapussi",
          },
        ],
        [
          {
            Name: "tuoreita vadelmia",
            Amount: "2",
            PackageRecipe: "false",
            IngredientType: "7239",
            Unit: "dl",
            IngredientTypeName: "Vadelma, tuore",
          },
          {
            Name: "Pirkka Parhaat suomalaisia vadelmia (pakaste)",
            Ean: "6410405181091",
            Amount: "1/2",
            AmountInfo: "(à 175 g)",
            PackageRecipe: "false",
            IngredientType: "7237",
            Unit: "rs",
            IngredientTypeName: "Vadelma, pakaste",
          },
        ],
        [
          {
            Name: "limettiä viipaleina",
            Amount: "1/2",
            PackageRecipe: "false",
            IngredientType: "5997",
            Unit: "",
            IngredientTypeName: "Limetti",
          },
        ],
        [
          {
            Name: "tuoretta minttua",
            PackageRecipe: "false",
            IngredientType: "15789",
            IngredientTypeName: "Minttu",
          },
        ],
      ],
    },
  ],
  Instructions:
    "# Kaada juomat jäiden kanssa isoon kannuun. Lisää hieman murskatut vadelmat ja limettiviipaleet. Viimeistele juoma tuoreella mintulla ja tarjoa heti.",
  EndNote:
    "Valitse juomaan hieman makea roseeviinimäinen juoma. Jos juoma on hyvin kuivaa, lisää ripaus sokeria. *Annoshinnat on laskettu K-citymarket-ketjun hintatason mukaan 8/2021. Tuoretuotteiden hinnat vaihtelevat sesongeittain.",
  Description:
    "Raikas roseesangria syntyy helposti alkoholittomana tai mietona versiona ruokakaupan juomista. Viimeistele kauniin värinen kesäjuoma vadelmilla, limellä ja mintulla. Noin 1,05€/annos.",
  DateCreated: "2021-04-19T08:46:05",
  DateModified: "2021-06-23T13:12:43",
  Stamp: {
    Name: "Testattu K-koekeittiössä",
    Id: "1",
  },
  RecipeUse: {
    Name: "k-ruoka.fi",
    Id: "1",
  },
  resourceType: "recipe",
  Url: "https://www.k-ruoka.fi/reseptit/roseesangria",
  UrlSlug: "roseesangria",
  Sort: [1, 1, 11613],
  MainCategory: {
    MainName: "Juomat",
    MainId: "9",
    SubName: "Kylmät juomat ja boolit",
    SubId: "59",
  },
  AvailableFilters: {
    sesonki: [
      {
        type: "sesonki",
        value: "grillikausi",
      },
      {
        type: "sesonki",
        value: "juhannus",
      },
    ],
    erityisruokavalio: [
      {
        type: "erityisruokavalio",
        value: "laktoositon",
      },
      {
        type: "erityisruokavalio",
        value: "maidoton",
      },
      {
        type: "erityisruokavalio",
        value: "gluteeniton",
      },
      {
        type: "erityisruokavalio",
        value: "kasvis",
      },
      {
        type: "erityisruokavalio",
        value: "kananmunaton",
      },
    ],
  },
  Rating: {
    targetId: "11613",
    targetNamespace: "recipe",
    average: 5,
    commentCount: 0,
    distributions: {
      main: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 1,
      },
      hilarity: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      usefulness: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    },
    distribution: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    },
    averages: {
      main: 5,
      hilarity: 0,
      usefulness: 0,
    },
  },
}
