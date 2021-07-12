import "react-native"
import React from "react"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import { parseKRuokaRecipe } from "../src/utils/RecipeUtils"

it("converts recipes with multiple categories correctly", () =>
  expect(parseKRuokaRecipe(testData_multipleCategories)).toEqual({
    name: "Grillatut uudet perunat, kananmunaa ja maustesilliä",
    portions: 6,
    categories: [
      { id: 0, name: "Piparjuurimajoneesi" },
      { id: 1, name: "Pikkelöity punasipuli" },
      { id: 2, name: "Koristeluun" },
    ],
    steps: [
      "Laita vesi, sokeri ja etikka kattilaan. Kiehauta ja anna pikkeliliemen jäähtyä.\r\n",
      "Leikkaa sipuli ohuiksi renkaiksi. Kaada pikkeliliemi sipuleiden päälle ja anna maustua 2 tuntia\r\n",
      "Sekoita majoneesi ja piparjuuritahna.\r\n",
      "Pese perunat huolellisesti. Keitä perunoita 10 minuuttia. Valuta ja anna jäähtyä hetki. Leikkaa perunat puoliksi ja grillaa noin 10 minuuttia, kunnes ne ovat kypsiä. Mausta suolalla, mustapippurilla, hienonnetulla tillillä ja ruohosipulilla sekä rypsiöljyllä.\r\n",
      "Leikkaa sillit 1 cm paksuiksi viipaleiksi. Keitä kananmunia 9 minuuttia, jäähdytä, kuori ja murskaa. Leikkaa retiisit ohuiksi viipaleiksi.\r\n",
      "Aseta perunat ja sillit kulhoon, pursota majoneesia, lisää murskattu kananmuna ja pikkelöidyt punasipulit. Koristele tillillä ja raasta tuoretta piparjuurta päälle.",
    ],
    ingredients: [
      { name: "varhaisperunaa", amount: 16, unit: "", category: "_" },
      { name: "suolaa", amount: 2, unit: "tl", category: "_" },
      { name: "rypsiöljyä", amount: 1, unit: "rkl", category: "_" },
      {
        name: "mustapippuria myllystä",
        amount: "",
        unit: "ripaus",
        category: "_",
      },
      { name: "ruohosipulia", amount: 1, unit: "ruukku", category: "_" },
      { name: "tilliä", amount: 0.5, unit: "ruukkua", category: "_" },
      { name: "maustesilliä", amount: 160, unit: "g", category: "_" },
      { name: "kananmunaa", amount: 2, unit: "", category: "_" },
      {
        name: "majoneesia",
        amount: 100,
        unit: "g",
        category: "Piparjuurimajoneesi",
      },
      {
        name: "piparjuuritahnaa (esim. Felix)",
        amount: 1,
        unit: "tl",
        category: "Piparjuurimajoneesi",
      },
      {
        name: "punasipuli",
        amount: 1,
        unit: "",
        category: "Pikkelöity punasipuli",
      },
      {
        name: "vettä",
        amount: 0.75,
        unit: "dl",
        category: "Pikkelöity punasipuli",
      },
      {
        name: "sokeria",
        amount: 0.5,
        unit: "dl",
        category: "Pikkelöity punasipuli",
      },
      {
        name: "väkiviinaetikkaa",
        amount: 0.25,
        unit: "dl",
        category: "Pikkelöity punasipuli",
      },
      {
        name: "tilliä",
        amount: 0.5,
        unit: "ruukkua",
        category: "Koristeluun",
      },
      { name: "retiisiä", amount: 4, unit: "", category: "Koristeluun" },
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
