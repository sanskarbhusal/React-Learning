// There are 33 entries in this array. So, read data accordigly
const countriesData = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Dari"],
    population: 38928346,
    flag: "https://flagpedia.net/data/flags/w580/af.png",
    currency: "Afghan afghani",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2877797,
    flag: "https://flagpedia.net/data/flags/w580/al.png",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic", "Tamazight"],
    population: 43851044,
    flag: "https://flagpedia.net/data/flags/w580/dz.png",
    currency: "Algerian dinar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 77265,
    flag: "https://flagpedia.net/data/flags/w580/ad.png",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 32866268,
    flag: "https://flagpedia.net/data/flags/w580/ao.png",
    currency: "Angolan kwanza",
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 97928,
    flag: "https://flagpedia.net/data/flags/w580/ag.png",
    currency: "East Caribbean dollar",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish"],
    population: 45376763,
    flag: "https://flagpedia.net/data/flags/w580/ar.png",
    currency: "Argentine peso",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian"],
    population: 2963234,
    flag: "https://flagpedia.net/data/flags/w580/am.png",
    currency: "Armenian dram",
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 25687041,
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    currency: "Australian dollar",
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 9006398,
    flag: "https://flagpedia.net/data/flags/w580/at.png",
    currency: "Euro",
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 10139175,
    flag: "https://flagpedia.net/data/flags/w580/az.png",
    currency: "Azerbaijani manat",
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 393248,
    flag: "https://flagpedia.net/data/flags/w580/bs.png",
    currency: "Bahamian dollar",
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1701583,
    flag: "https://flagpedia.net/data/flags/w580/bh.png",
    currency: "Bahraini dinar",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 169429969,
    flag: "https://flagpedia.net/data/flags/w580/bd.png",
    currency: "Bangladeshi taka",
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    languages: ["English"],
    population: 287371,
    flag: "https://flagpedia.net/data/flags/w580/bb.png",
    currency: "Barbadian dollar",
  },
  {
    name: "Belarus",
    capital: "Minsk",
    languages: ["Belarusian", "Russian"],
    population: 9449321,
    flag: "https://flagpedia.net/data/flags/w580/by.png",
    currency: "Belarusian ruble",
  },
  {
    name: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    population: 11589616,
    flag: "https://flagpedia.net/data/flags/w580/be.png",
    currency: "Euro",
  },
  {
    name: "Belize",
    capital: "Belmopan",
    languages: ["English"],
    population: 397621,
    flag: "https://flagpedia.net/data/flags/w580/bz.png",
    currency: "Belize dollar",
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    languages: ["French"],
    population: 12123198,
    flag: "https://flagpedia.net/data/flags/w580/bj.png",
    currency: "West African CFA franc",
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    languages: ["Dzongkha"],
    population: 771612,
    flag: "https://flagpedia.net/data/flags/w580/bt.png",
    currency: "Bhutanese ngultrum",
  },
  {
    name: "Bolivia",
    capital: "Sucre",
    languages: ["Spanish", "Quechua", "Aymara"],
    population: 11673029,
    flag: "https://flagpedia.net/data/flags/w580/bo.png",
    currency: "Bolivian boliviano",
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    languages: ["Bosnian", "Croatian", "Serbian"],
    population: 3280815,
    flag: "https://flagpedia.net/data/flags/w580/ba.png",
    currency: "Bosnia and Herzegovina convertible mark",
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    languages: ["English", "Tswana"],
    population: 2351625,
    flag: "https://flagpedia.net/data/flags/w580/bw.png",
    currency: "Botswana pula",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: ["Portuguese"],
    population: 212559409,
    flag: "https://flagpedia.net/data/flags/w580/br.png",
    currency: "Brazilian real",
  },
  {
    name: "Brunei",
    capital: "Bandar Seri Begawan",
    languages: ["Malay"],
    population: 437483,
    flag: "https://flagpedia.net/data/flags/w580/bn.png",
    currency: "Brunei dollar",
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    languages: ["Bulgarian"],
    population: 6927288,
    flag: "https://flagpedia.net/data/flags/w580/bg.png",
    currency: "Bulgarian lev",
  },
  {
    name: "Burkina Faso",
    capital: "Ouagadougou",
    languages: ["French"],
    population: 20903278,
    flag: "https://flagpedia.net/data/flags/w580/bf.png",
    currency: "West African CFA franc",
  },
  {
    name: "Burundi",
    capital: "Gitega",
    languages: ["Kirundi", "French", "English"],
    population: 11890781,
    flag: "https://flagpedia.net/data/flags/w580/bi.png",
    currency: "Burundian franc",
  },
  {
    name: "Cambodia",
    capital: "Phnom Penh",
    languages: ["Khmer"],
    population: 16718971,
    flag: "https://flagpedia.net/data/flags/w580/kh.png",
    currency: "Cambodian riel",
  },
  {
    name: "Cameroon",
    capital: "Yaoundé",
    languages: ["English", "French"],
    population: 26545864,
    flag: "https://flagpedia.net/data/flags/w580/cm.png",
    currency: "Central African CFA franc",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    languages: ["English", "French"],
    population: 38005238,
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    currency: "Canadian dollar",
  },
  {
    name: "Cape Verde",
    capital: "Praia",
    languages: ["Portuguese"],
    population: 555988,
    flag: "https://flagpedia.net/data/flags/w580/cv.png",
    currency: "Cape Verdean escudo",
  },
  {
    name: "Central African Republic",
    capital: "Bangui",
    languages: ["French", "Sango"],
    population: 4829764,
    flag: "https://flagpedia.net/data/flags/w580/cf.png",
    currency: "Central African CFA franc",
  },
];
export default countriesData;
