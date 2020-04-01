const emergencyList = [
    {
      "Timestamp": "30/03/2020 21:14:43",
      "name": "79 Pet Shop",
      "area": "Bardez: MMC - Mapusa Municipal Council",
      "Other Location": "",
      "type": "Animal Care",
      "phone": 9158797979,
      "locations": "Bardez: MMC - Mapusa Municipal Council",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:15:17",
      "name": "79 Pet Shop",
      "area": "Bardez: Calangute",
      "Other Location": "",
      "type": "Animal Care",
      "phone": 9545000079,
      "locations": "Bardez: Calangute",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:18:13",
      "name": "79 Pet Shop",
      "area": "Mormugao: MMC - Mormugao Municipal Council - Vasco",
      "Other Location": "",
      "type": "Animal Care",
      "phone": 8006797979,
      "locations": "Mormugao: MMC - Mormugao Municipal Council - Vasco",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:18:55",
      "name": "79 Pet Shop",
      "area": "Salcete: MMc - Margao Municipal Council",
      "Other Location": "",
      "type": "Animal Care",
      "phone": 9158797979,
      "locations": "Salcete: MMc - Margao Municipal Council",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:42:31",
      "name": "79 Pet Shop",
      "area": "",
      "Other Location": "Porvorim",
      "type": "Animal Care",
      "phone": 8006797979,
      "locations": "Porvorim",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:44:50",
      "name": "WVS",
      "area": "Bardez: Assagao",
      "Other Location": "NORTH GOA ASSAGAO",
      "type": "Animal Care",
      "phone": 9552557632,
      "locations": "Bardez: AssagaoNORTH GOA ASSAGAO",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:45:55",
      "name": "DOG TEMPLE",
      "area": "Pernem: Mandrem",
      "Other Location": "NORTH GOA MANDREM",
      "type": "Animal Care",
      "phone": 7057854775,
      "locations": "Pernem: MandremNORTH GOA MANDREM",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:47:20",
      "name": "GOA GPRS",
      "area": "",
      "Other Location": "SOUTH GOA QUEPEM",
      "type": "Animal Care",
      "phone": 7720890457,
      "locations": "SOUTH GOA QUEPEM",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:48:07",
      "name": "ANIMAL SHELTER",
      "area": "",
      "Other Location": "SOUTH GOA AGONDA",
      "type": "Animal Care",
      "phone": 7261984543,
      "locations": "SOUTH GOA AGONDA",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:49:37",
      "name": "H.O.M.E.",
      "area": "",
      "Other Location": "NORTH GOA BARDEZ",
      "type": "Animal Care",
      "phone": 7722071000,
      "locations": "NORTH GOA BARDEZ",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:51:04",
      "name": "PAWS",
      "area": "",
      "Other Location": "CENTRAL GOA PANAJIM",
      "type": "Animal Care",
      "phone": "08322225850",
      "locations": "CENTRAL GOA PANAJIM",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:51:39",
      "name": "PEOPLE FOR ANIMALS",
      "area": "",
      "Other Location": "SOTH GOA PONDA",
      "type": "Animal Care",
      "phone": "08232532514",
      "locations": "SOTH GOA PONDA",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:52:33",
      "name": "DHYAN FOUNDATION(FOR CATTLE)",
      "area": "",
      "Other Location": "ACROSS GOA",
      "type": "Animal Care",
      "phone": 7499465317,
      "locations": "ACROSS GOA",
      "district": "All Goa"
    },
    {
      "Timestamp": "30/03/2020 21:53:20",
      "name": "WAG",
      "area": "",
      "Other Location": "NORTH GOA BARDEZ",
      "type": "Animal Care",
      "phone": 8806640133,
      "locations": "NORTH GOA BARDEZ",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:54:02",
      "name": "ANIMAL RESCUE CENTER",
      "area": "",
      "Other Location": "SOUTH GOA CANCONA",
      "type": "Animal Care",
      "phone": "08322644171",
      "locations": "SOUTH GOA CANCONA",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:54:44",
      "name": "S.O.S. MONSOON",
      "area": "",
      "Other Location": "SOUTH GOA SALCETE",
      "type": "Animal Care",
      "phone": 9960920263,
      "locations": "SOUTH GOA SALCETE",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:55:22",
      "name": "CAT SANCTUARY",
      "area": "",
      "Other Location": "NORTH GOA BARDEZ",
      "type": "Animal Care",
      "phone": 7057367617,
      "locations": "NORTH GOA BARDEZ",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 21:56:11",
      "name": "GOA ANIMAL WELFARE TRUST",
      "area": "",
      "Other Location": "SOUTH GOA QUEPEM",
      "type": "Animal Care",
      "phone": "08322653677",
      "locations": "SOUTH GOA QUEPEM",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 21:56:59",
      "name": "SOUTH GOA WELFARE TRUST FOR ANIMALS",
      "area": "",
      "Other Location": "SOUTH GOA MARGAO",
      "type": "Animal Care",
      "phone": 9860221957,
      "locations": "SOUTH GOA MARGAO",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:01:07",
      "name": "mahesh rivankar",
      "area": "Salcete: Navelim",
      "Other Location": "",
      "type": "Emergency Shelter",
      "phone": 9423389814,
      "locations": "Salcete: Navelim",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:03:41",
      "name": "surendra kerkar",
      "area": "",
      "Other Location": "mormugao mangor",
      "type": "Emergency Shelter",
      "phone": 9422455852,
      "locations": "mormugao mangor",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:05:57",
      "name": "rosario carvalho",
      "area": "",
      "Other Location": "borimol quepem",
      "type": "Emergency Shelter",
      "phone": 9822183796,
      "locations": "borimol quepem",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:07:58",
      "name": "prasanna madkaikar",
      "area": "Sanguem: Uguem",
      "Other Location": "",
      "type": "Emergency Shelter",
      "phone": 9765492528,
      "locations": "Sanguem: Uguem",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:09:48",
      "name": "pranav bhat",
      "area": "",
      "Other Location": "ponda farmagudi",
      "type": "Emergency Shelter",
      "phone": 9049654260,
      "locations": "ponda farmagudi",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:11:48",
      "name": "Mukesh dhamikar",
      "area": "",
      "Other Location": "dharbandora sesa Goa",
      "type": "Emergency Shelter",
      "phone": 9527612521,
      "locations": "dharbandora sesa Goa",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:13:11",
      "name": "padmanabh desai",
      "area": "",
      "Other Location": "cancona",
      "type": "Emergency Shelter",
      "phone": 8550954759,
      "locations": "cancona",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:13:14",
      "name": "Shri Bhanu N. Goltekar",
      "area": "Bardez",
      "Other Location": "",
      "type": "Complaint",
      "phone": 9158472363,
      "locations": "Bardez",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:14:32",
      "name": "dr geeta nagvekar",
      "area": "",
      "Other Location": "bardez mapusa",
      "type": "Emergency Shelter",
      "phone": 7972041105,
      "locations": "bardez mapusa",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:15:05",
      "name": "Smt. Pallavi S. Mandrekar",
      "area": "Bardez",
      "Other Location": "",
      "type": "Complaint",
      "phone": 9764364599,
      "locations": "Bardez",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:15:55",
      "name": "dasharat gawas",
      "area": "",
      "Other Location": "cancona community hall",
      "type": "Emergency Shelter",
      "phone": 9763524283,
      "locations": "cancona community hall",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:17:02",
      "name": "rohan kaskar",
      "area": "",
      "Other Location": "pernem subranwado",
      "type": "Emergency Shelter",
      "phone": 9657104353,
      "locations": "pernem subranwado",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:18:12",
      "name": "kabir shirgaonkar",
      "area": "Bicholim: Naroa",
      "Other Location": "",
      "type": "Emergency Shelter",
      "phone": 8669006132,
      "locations": "Bicholim: Naroa",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:18:41",
      "name": "Goa Govt",
      "area": "",
      "Other Location": "North District",
      "type": "Food Bus",
      "phone": 9422890077,
      "locations": "North District",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:19:12",
      "name": "kabir shirgaonkar",
      "area": "",
      "Other Location": "sattari codiem",
      "type": "Emergency Shelter",
      "phone": 8669006132,
      "locations": "sattari codiem",
      "district": "North Goa"
    },
    {
      "Timestamp": "30/03/2020 22:19:40",
      "name": "Goa Govt.",
      "area": "",
      "Other Location": "South District",
      "type": "Food Bus",
      "phone": 9423890066,
      "locations": "South District",
      "district": "South Goa"
    },
    {
      "Timestamp": "30/03/2020 22:20:12",
      "name": "aleixo vaz",
      "area": "",
      "Other Location": "tiswadi Miramar",
      "type": "Emergency Shelter",
      "phone": 9422456826,
      "locations": "tiswadi Miramar",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:21:34",
      "name": "Shri Bhanu N Goltekar, Inspector",
      "area": "",
      "Other Location": "Bardez Taluka",
      "type": "Complaint",
      "phone": 9158472363,
      "locations": "Bardez Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:22:19",
      "name": "Smt. Pallavi S Mandrekar, Inspector",
      "area": "",
      "Other Location": "Bardez Taluka",
      "type": "Complaint",
      "phone": 9764364599,
      "locations": "Bardez Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:23:25",
      "name": "Smt. Seema SS Gudekar, Inspector",
      "area": "",
      "Other Location": "Tiswadi Taluka",
      "type": "Complaint",
      "phone": 9823619636,
      "locations": "Tiswadi Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:24:21",
      "name": "Kum. Maria Cynthiya Gomes, Inspector",
      "area": "",
      "Other Location": "Tiswadi Taluka",
      "type": "Complaint",
      "phone": 9822587071,
      "locations": "Tiswadi Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:25:17",
      "name": "Smt, Sarita Verenkar, Inspector",
      "area": "",
      "Other Location": "Ponda Taluka",
      "type": "Complaint",
      "phone": 9421150638,
      "locations": "Ponda Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:26:05",
      "name": "Ruban Toraskar, Inspector",
      "area": "",
      "Other Location": "Ponda Taluka",
      "type": "Complaint",
      "phone": 7507141726,
      "locations": "Ponda Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:26:52",
      "name": "Rajesh Arlekar, Inspector",
      "area": "",
      "Other Location": "Pernem Taluka",
      "type": "Complaint",
      "phone": 9923313039,
      "locations": "Pernem Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:27:47",
      "name": "Shri Tulsidas Dabholkar, Inspector",
      "area": "",
      "Other Location": "Bicholim Taluka",
      "type": "Complaint",
      "phone": 9545724414,
      "locations": "Bicholim Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:28:38",
      "name": "Shri Darshan Harmalkar, Inspector",
      "area": "",
      "Other Location": "Sattari Taluka",
      "type": "Complaint",
      "phone": 8390851356,
      "locations": "Sattari Taluka",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 14:29:27",
      "name": "Shri Arun Kumar R. Pillai, Inspector",
      "area": "",
      "Other Location": "Salcete Taluka",
      "type": "Complaint",
      "phone": 9746835201,
      "locations": "Salcete Taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:30:21",
      "name": "Smt. Maria D'Costa, Inspector",
      "area": "",
      "Other Location": "Salcete Taluka",
      "type": "Complaint",
      "phone": 9850452471,
      "locations": "Salcete Taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:31:13",
      "name": "Shri Ramkrishna Salgaonkar, Inspector",
      "area": "",
      "Other Location": "Mormugao taluka",
      "type": "Complaint",
      "phone": 9011339585,
      "locations": "Mormugao taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:31:58",
      "name": "Shri Krishnanath Palekar, Inspector",
      "area": "",
      "Other Location": "Mormugao taluka",
      "type": "Complaint",
      "phone": 9689065998,
      "locations": "Mormugao taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:32:57",
      "name": "Shri Gorakh Rajadhyax, Inspector",
      "area": "",
      "Other Location": "Quepem Taluka",
      "type": "Complaint",
      "phone": 9764480254,
      "locations": "Quepem Taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:34:00",
      "name": "Shri Jeevan Manjrekar",
      "area": "",
      "Other Location": "Cancona taluka",
      "type": "Complaint",
      "phone": 9881347873,
      "locations": "Cancona taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:34:55",
      "name": "Shri Jeevan Manjrekar (Add. Charge)",
      "area": "",
      "Other Location": "Sanguem Taluka",
      "type": "Complaint",
      "phone": 9881347873,
      "locations": "Sanguem Taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 14:35:42",
      "name": "Smt. Priya Gaonkar, Inspector",
      "area": "",
      "Other Location": "Dharbandora taluka",
      "type": "Complaint",
      "phone": 9423164307,
      "locations": "Dharbandora taluka",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 19:57:10",
      "name": "Aastha Society",
      "area": "porvorim",
      "Other Location": "",
      "type": "Food Bus",
      "phone": "08322266388",
      "locations": "porvorim",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 19:58:23",
      "name": "Aastha Society",
      "area": "porvorim",
      "Other Location": "",
      "type": "Food Bus",
      "phone": "08322265588",
      "locations": "porvorim",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 19:58:58",
      "name": "Aastha Society",
      "area": "porvorim",
      "Other Location": "",
      "type": "Food Bus",
      "phone": 9049755333,
      "locations": "porvorim",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 20:00:13",
      "name": "Digvijit",
      "area": "Salcete: MMc - Margao Municipal Council",
      "Other Location": "",
      "type": "Food Bus",
      "phone": 8669767017,
      "locations": "Salcete: MMc - Margao Municipal Council",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 20:01:11",
      "name": "Digvijit",
      "area": "Salcete: MMc - Margao Municipal Council",
      "Other Location": "",
      "type": "Food Bus",
      "phone": 9767844883,
      "locations": "Salcete: MMc - Margao Municipal Council",
      "district": "South Goa"
    },
    {
      "Timestamp": "31/03/2020 20:02:16",
      "name": "Amar Bosale",
      "area": "",
      "Other Location": "St. Estevam",
      "type": "Food Bus",
      "phone": 7821880175,
      "locations": "St. Estevam",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 20:03:04",
      "name": "Pranay Fadte",
      "area": "",
      "Other Location": "St. Estevam",
      "type": "Food Bus",
      "phone": 7744836105,
      "locations": "St. Estevam",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 20:03:46",
      "name": "Donald Fernandez",
      "area": "Bardez: Sangolda",
      "Other Location": "",
      "type": "Food Bus",
      "phone": 8380097564,
      "locations": "Bardez: Sangolda",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 20:05:17",
      "name": "Dr. Ketan Bhatikar",
      "area": "",
      "Other Location": "Ponda",
      "type": "Food Bus",
      "phone": 9158999363,
      "locations": "Ponda",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 21:22:33",
      "name": "Ranis Paws N Claws",
      "area": "porvorim",
      "Other Location": "",
      "type": "Animal Care",
      "phone": 8698777999,
      "locations": "porvorim",
      "district": "North Goa"
    },
    {
      "Timestamp": "31/03/2020 21:44:19",
      "name": "Yuva panjim",
      "area": "Tiswadi: CCP - Corporation of the City of Panaji",
      "Other Location": "",
      "type": "Food Bus",
      "phone": 9921788055,
      "locations": "Tiswadi: CCP - Corporation of the City of Panaji",
      "district": "North Goa"
    }
  ];