// Copyright 2017 Karl Castleton
    
  var last=0;
  function setClicks() {
      for (var i in notes) {
        obj=document.getElementById(notes[i].area);
        if (obj!=null) {
           obj.addEventListener("click",clicked, false);
        } else {
          console.log(notes[i].area+" not found in svg");
        }
      }
  }
  
  function clicked() {
    for (var i in notes) {
      if (notes[i].area==this.id) {
          currency=notes[i].currency;
          console.log("Currency "+currency+" selected");
          note=notes[i].note;
          document.getElementById('note').innerHTML=note;
          document.getElementById('example').src=currency+".jpg"
           if (last==0) {
              obj=document.getElementById('first');
              obj.value=currency;
              update();
              last=1;
          } else {
              obj=document.getElementById('second');
              obj.value=currency;
              update();
              last=0;
          }
          doCalcClicked(currency);
         return;
      }
    } 
    console.log("Could not find area "+id);      
  }

  function doCalcClicked(id) {
    for (var i in notes) {
      if (notes[i].currency==id) {
          currency=notes[i].currency;
          note=notes[i].note;
          document.getElementById('note').innerHTML=note;
          document.getElementById('example').src=currency+".jpg"
          return;
      }
    } 
    console.log("Could not find area "+id);      
  }  
  
function generateDropdown(id) {
  // Assumes that you are given a select tag id
  obj=document.getElementById(id);
  html="";
  for (i=0;i<names.length/2;i++)
    html+="<option value='"+names[i*2]+"'>"+names[i*2+1]+"</option>";
  obj.innerHTML=html;  
}

function updateFirst() {
    c1=document.getElementById('first').value;
    doCalcClicked(c1);
    update();
}

function updateSecond() {
    c2=document.getElementById('second').value;
    doCalcClicked(c2);
    update();
}

function update() {
  c1=document.getElementById('first').value;
  c2=document.getElementById('second').value;
  r1=rates.rates[c1];
  r2=rates.rates[c2];	
  a=document.getElementById('amount').value;
  na=Math.trunc(a*r2*100/r1)/100;
  document.getElementById('newAmount').value=na;
}

// eval the rates from the query
eval(
'rates={'+
  '"disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",'+
  '"license": "https://openexchangerates.org/license",'+
  '"timestamp": 1505570403,'+
  '"base": "USD",'+
  '"rates": {'+
    '"AED": 3.673018,'+
    '"AFN": 68.6555,'+
    '"ALL": 111.94,'+
    '"AMD": 479.33149,'+
    '"ANG": 1.780573,'+
    '"AOA": 165.9215,'+
    '"ARS": 16.975,'+
    '"AUD": 1.249511,'+
    '"AWG": 1.795504,'+
    '"AZN": 1.7,'+
    '"BAM": 1.637148,'+
    '"BBD": 2,'+
    '"BDT": 80.812667,'+
    '"BGN": 1.63577,'+
    '"BHD": 0.377011,'+
    '"BIF": 1746.05,'+
    '"BMD": 1,'+
    '"BND": 1.345637,'+
    '"BOB": 6.967312,'+
    '"BRL": 3.11035,'+
    '"BSD": 1,'+
    '"BTC": 0.000270833133,'+
    '"BTN": 64.108502,'+
    '"BWP": 10.188712,'+
    '"BYN": 1.940118,'+
    '"BZD": 2.016369,'+
    '"CAD": 1.21973,'+
    '"CDF": 1560,'+
    '"CHF": 0.95976,'+
    '"CLF": 0.02317,'+
    '"CLP": 623.7,'+
    '"CNH": 6.547717,'+
    '"CNY": 6.55425,'+
    '"COP": 2896,'+
    '"CRC": 577.04,'+
    '"CUC": 1,'+
    '"CUP": 25.5,'+
    '"CVE": 92.5,'+
    '"CZK": 21.845,'+
    '"DJF": 178.57,'+
    '"DKK": 6.229181,'+
    '"DOP": 47.290669,'+
    '"DZD": 111.071,'+
    '"EGP": 17.642,'+
    '"ERN": 15.334495,'+
    '"ETB": 23.45501,'+
    '"EUR": 0.83717,'+
    '"FJD": 2.011699,'+
    '"FKP": 0.735845,'+
    '"GBP": 0.735845,'+
    '"GEL": 2.464823,'+
    '"GGP": 0.735845,'+
    '"GHS": 4.436479,'+
    '"GIP": 0.735845,'+
    '"GMD": 46.038333,'+
    '"GNF": 8970,'+
    '"GTQ": 7.295961,'+
    '"GYD": 208.08,'+
    '"HKD": 7.8192,'+
    '"HNL": 23.406512,'+
    '"HRK": 6.26,'+
    '"HTG": 63.067879,'+
    '"HUF": 258.95,'+
    '"IDR": 13240.945514,'+
    '"ILS": 3.521735,'+
    '"IMP": 0.735845,'+
    '"INR": 64.1499,'+
    '"IQD": 1169.175369,'+
    '"IRR": 33310,'+
    '"ISK": 106.48,'+
    '"JEP": 0.735845,'+
    '"JMD": 130.81281,'+
    '"JOD": 0.7086,'+
    '"JPY": 110.855,'+
    '"KES": 103.08048,'+
    '"KGS": 68.628367,'+
    '"KHR": 4056.4,'+
    '"KMF": 412.025,'+
    '"KPW": 900,'+
    '"KRW": 1133.17,'+
    '"KWD": 0.301284,'+
    '"KYD": 0.833535,'+
    '"KZT": 339.74,'+
    '"LAK": 8291.3,'+
    '"LBP": 1508.7,'+
    '"LKR": 152.95,'+
    '"LRD": 117.002232,'+
    '"LSL": 13.1995,'+
    '"LYD": 1.3625,'+
    '"MAD": 9.343101,'+
    '"MDL": 17.599529,'+
    '"MGA": 2966.95,'+
    '"MKD": 51.537325,'+
    '"MMK": 1357.45,'+
    '"MNT": 2451.286351,'+
    '"MOP": 8.052724,'+
    '"MRO": 365.08315,'+
    '"MUR": 33.42,'+
    '"MVR": 15.405061,'+
    '"MWK": 725.595,'+
    '"MXN": 17.6574,'+
    '"MYR": 4.189975,'+
    '"MZN": 61.499992,'+
    '"NAD": 13.1995,'+
    '"NGN": 360.2,'+
    '"NIO": 30.37668,'+
    '"NOK": 7.850835,'+
    '"NPR": 102.620712,'+
    '"NZD": 1.37165,'+
    '"OMR": 0.38503,'+
    '"PAB": 1,'+
    '"PEN": 3.2485,'+
    '"PGK": 3.195665,'+
    '"PHP": 51.289,'+
    '"PKR": 105.405465,'+
    '"PLN": 3.57735,'+
    '"PYG": 5655.4,'+
    '"QAR": 3.709985,'+
    '"RON": 3.851882,'+
    '"RSD": 99.674799,'+
    '"RUB": 57.6,'+
    '"RWF": 832.65994,'+
    '"SAR": 3.7504,'+
    '"SBD": 7.786907,'+
    '"SCR": 13.6,'+
    '"SDG": 6.678951,'+
    '"SEK": 7.966872,'+
    '"SGD": 1.345307,'+
    '"SHP": 0.735845,'+
    '"SLL": 7548.403327,'+
    '"SOS": 579.535007,'+
    '"SRD": 7.438,'+
    '"SSP": 125.881,'+
    '"STD": 20526.921644,'+
    '"SVC": 8.752337,'+
    '"SYP": 514.98999,'+
    '"SZL": 13.1955,'+
    '"THB": 33.0985,'+
    '"TJS": 8.800293,'+
    '"TMT": 3.50998,'+
    '"TND": 2.445393,'+
    '"TOP": 2.215709,'+
    '"TRY": 3.437727,'+
    '"TTD": 6.749059,'+
    '"TWD": 30.0675,'+
    '"TZS": 2245.3,'+
    '"UAH": 26.212642,'+
    '"UGX": 3596.15,'+
    '"USD": 1,'+
    '"UYU": 29.015056,'+
    '"UZS": 8094.8,'+
    '"VEF": 9.985022,'+
    '"VND": 22715.156208,'+
    '"VUV": 103.882847,'+
    '"WST": 2.509521,'+
    '"XAF": 549.147764,'+
    '"XAG": 0.05686676,'+
    '"XAU": 0.00075752,'+
    '"XCD": 2.70255,'+
    '"XDR": 0.702343,'+
    '"XOF": 549.147764,'+
    '"XPD": 0.00108288,'+
    '"XPF": 99.900999,'+
    '"XPT": 0.00103094,'+
    '"YER": 250.325,'+
    '"ZAR": 13.166559,'+
    '"ZMW": 9.495,'+
    '"ZWL": 322.355011'+
  '}'+
'}');

  
  var names=Array(
"AED","United Arab Emirates Dirham",
"AFN","Afghan Afghani",
"ALL","Albanian Lek",
"AMD","Armenian Dram",
"ANG","Netherlands Antillean Guilder",
"AOA","Angolan Kwanza",
"ARS","Argentine Peso",
"AUD","Australian Dollar",
"AWG","Aruban Florin",
"AZN","Azerbaijani Manat",
"BAM","Bosnia-Herzegovina Convertible Mark",
"BBD","Barbadian Dollar",
"BDT","Bangladeshi Taka",
"BGN","Bulgarian Lev",
"BHD","Bahraini Dinar",
"BIF","Burundian Franc",
"BMD","Bermudan Dollar",
"BND","Brunei Dollar",
"BOB","Bolivian Boliviano",
"BRL","Brazilian Real",
"BSD","Bahamian Dollar",
"BTC","Bitcoin",
"BTN","Bhutanese Ngultrum",
"BWP","Botswanan Pula",
"BYN","Belarusian Ruble",
"BYR","Belarusian Ruble (pre-2016)",
"BZD","Belize Dollar",
"CAD","Canadian Dollar",
"CDF","Congolese Franc",
"CHF","Swiss Franc",
"CLF","Chilean Unit of Account (UF)",
"CLP","Chilean Peso",
"CNH","Chinese Yuan (Offshore)",
"CNY","Chinese Yuan",
"COP","Colombian Peso",
"CRC","Costa Rican Colón",
"CUC","Cuban Convertible Peso",
"CUP","Cuban Peso",
"CVE","Cape Verdean Escudo",
"CZK","Czech Republic Koruna",
"DJF","Djiboutian Franc",
"DKK","Danish Krone",
"DOP","Dominican Peso",
"DZD","Algerian Dinar",
"EEK","Estonian Kroon",
"EGP","Egyptian Pound",
"ERN","Eritrean Nakfa",
"ETB","Ethiopian Birr",
"EUR","Euro",
"FJD","Fijian Dollar",
"FKP","Falkland Islands Pound",
"GBP","British Pound Sterling",
"GEL","Georgian Lari",
"GGP","Guernsey Pound",
"GHS","Ghanaian Cedi",
"GIP","Gibraltar Pound",
"GMD","Gambian Dalasi",
"GNF","Guinean Franc",
"GTQ","Guatemalan Quetzal",
"GYD","Guyanaese Dollar",
"HKD","Hong Kong Dollar",
"HNL","Honduran Lempira",
"HRK","Croatian Kuna",
"HTG","Haitian Gourde",
"HUF","Hungarian Forint",
"IDR","Indonesian Rupiah",
"ILS","Israeli New Sheqel",
"IMP","Manx pound",
"INR","Indian Rupee",
"IQD","Iraqi Dinar",
"IRR","Iranian Rial",
"ISK","Icelandic Króna",
"JEP","Jersey Pound",
"JMD","Jamaican Dollar",
"JOD","Jordanian Dinar",
"JPY","Japanese Yen",
"KES","Kenyan Shilling",
"KGS","Kyrgystani Som",
"KHR","Cambodian Riel",
"KMF","Comorian Franc",
"KPW","North Korean Won",
"KRW","South Korean Won",
"KWD","Kuwaiti Dinar",
"KYD","Cayman Islands Dollar",
"KZT","Kazakhstani Tenge",
"LAK","Laotian Kip",
"LBP","Lebanese Pound",
"LKR","Sri Lankan Rupee",
"LRD","Liberian Dollar",
"LSL","Lesotho Loti",
"LYD","Libyan Dinar",
"MAD","Moroccan Dirham",
"MDL","Moldovan Leu",
"MGA","Malagasy Ariary",
"MKD","Macedonian Denar",
"MMK","Myanma Kyat",
"MNT","Mongolian Tugrik",
"MOP","Macanese Pataca",
"MRO","Mauritanian Ouguiya",
"MTL","Maltese Lira",
"MUR","Mauritian Rupee",
"MVR","Maldivian Rufiyaa",
"MWK","Malawian Kwacha",
"MXN","Mexican Peso",
"MYR","Malaysian Ringgit",
"MZN","Mozambican Metical",
"NAD","Namibian Dollar",
"NGN","Nigerian Naira",
"NIO","Nicaraguan Córdoba",
"NOK","Norwegian Krone",
"NPR","Nepalese Rupee",
"NZD","New Zealand Dollar",
"OMR","Omani Rial",
"PAB","Panamanian Balboa",
"PEN","Peruvian Nuevo Sol",
"PGK","Papua New Guinean Kina",
"PHP","Philippine Peso",
"PKR","Pakistani Rupee",
"PLN","Polish Zloty",
"PYG","Paraguayan Guarani",
"QAR","Qatari Rial",
"RON","Romanian Leu",
"RSD","Serbian Dinar",
"RUB","Russian Ruble",
"RWF","Rwandan Franc",
"SAR","Saudi Riyal",
"SBD","Solomon Islands Dollar",
"SCR","Seychellois Rupee",
"SDG","Sudanese Pound",
"SEK","Swedish Krona",
"SGD","Singapore Dollar",
"SHP","Saint Helena Pound",
"SLL","Sierra Leonean Leone",
"SOS","Somali Shilling",
"SRD","Surinamese Dollar",
"SSP","South Sudanese Pound",
"STD","São Tomé and Príncipe Dobra",
"SVC","Salvadoran Colón",
"SYP","Syrian Pound",
"SZL","Swazi Lilangeni",
"THB","Thai Baht",
"TJS","Tajikistani Somoni",
"TMT","Turkmenistani Manat",
"TND","Tunisian Dinar",
"TOP","Tongan Paʻanga",
"TRY","Turkish Lira",
"TTD","Trinidad and Tobago Dollar",
"TWD","New Taiwan Dollar",
"TZS","Tanzanian Shilling",
"UAH","Ukrainian Hryvnia",
"UGX","Ugandan Shilling",
"USD","United States Dollar",
"UYU","Uruguayan Peso",
"UZS","Uzbekistan Som",
"VEF","Venezuelan Bolívar Fuerte",
"VND","Vietnamese Dong",
"VUV","Vanuatu Vatu",
"WST","Samoan Tala",
"XAF","CFA Franc BEAC",
"XAG","Silver (troy ounce)",
"XAU","Gold (troy ounce)",
"XCD","East Caribbean Dollar",
"XDR","Special Drawing Rights",
"XOF","CFA Franc BCEAO",
"XPD","Palladium Ounce",
"XPF","CFP Franc",
"XPT","Platinum Ounce",
"YER","Yemeni Rial",
"ZAR","South African Rand",
"ZMK","Zambian Kwacha (pre-2013)",
"ZMW","Zambian Kwacha");

