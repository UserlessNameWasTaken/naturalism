const authorTexts = import.meta.glob("../assets/tx/*.txt", { query: "?raw", import: "default", eager: true, });

export const authors = [
  {
    id: "emile-zola",
    name: "Émile Zola",
    lifespan: "1840-1902",
    description: authorTexts["../assets/tx/emilezola.txt"],
    works: ["Germinal", "Thérèse Raquin", "Nana", "L’Assommoir", "J’accuse"],
    work_descriptions: {
      "Germinal": "A story set in 1860s France during a strike. This story emphasizes that activism can leave 'seeds' of hope for changes the future.",
      "Thérèse Raquin": "A dark story about the suppressed emotions of a woman that lead to murder and eventually a mutual suicide.", 
      "Nana": "A story about a woman who uses her charm to ruin aristocracy, before eventually dying to disease.", 
      "L’Assommoir": "A story a hard-working woman's tragic downfall due to external circumstances. Highlights the effects of alcoholism, poverty, and industrialization on the working class.", 
      "J’accuse": "An open letter by Emile Zola directly attacking the French government, accusing them of corruption and covering up evidence."
    },
    work_links: {
      "Germinal": "https://rowanlitandthesocial.wordpress.com/wp-content/uploads/2016/06/zola-germinal-edited-version.pdf",
      "Thérèse Raquin": "https://dn720909.ca.archive.org/0/items/thereseraquindra0000zola/thereseraquindra0000zola.pdf", 
      "Nana": "https://archive.org/details/in.ernet.dli.2015.125765/page/n15/mode/2up", 
      "L’Assommoir": "https://archive.org/details/lassommoir0000zola_z1n5", 
      "J’accuse": "https://ia801609.us.archive.org/24/items/IAccuse/zola_emile_i_accuse.pdf"
    }
  },
  {
    id: "stephen-crane",
    name: "Stephen Crane",
    lifespan: "1871-1900",
    description: authorTexts["../assets/tx/stephencrane.txt"],
    works: ["The Red Badge of Courage", "Maggie: A Girl of the Streets"],
    work_descriptions: {
        "The Red Badge of Courage": "A Civil War Novel following the main character Henry Fleming. It describes his initial fear, developed courage, and the 'red badge' he earned from it.", 
        "Maggie: A Girl of the Streets": "A novella describing the life of Maggie Johnson, especially its troubles, and what led to her terrible situation.",
    },
    work_links: {
        "The Red Badge of Courage": "https://americanenglish.state.gov/files/ae/resource_files/the-red-badge-of-courage-chapters-1-22.pdf", 
        "Maggie: A Girl of the Streets": "https://ia800805.us.archive.org/25/items/maggiegirlofstre00cranrich/maggiegirlofstre00cranrich.pdf",
    }
  },
  {
    id: "frank-norris",
    name: "Frank Norris",
    lifespan: "1870-1902",
    description: authorTexts["../assets/tx/franknorris.txt"],
    works: ["McTeague", "The Octopus", "The Pit"],
    work_descriptions: {
      "McTeague": "A story about a dentist's descent due to losing their job, and an increasingly problematic relationship with money.", 
      "The Octopus": "A novel that describes the conflict between Calfornian farmers and railroad companies, highlighting the monopolistic and invasive nature of the companies.",
      "The Pit": "A novel picturing the rise and fall of a Chicago businessman named Curtis Jadwin. More specifically, Jadwin's fall was caused by uncontrollable external circumstances.",
    },                                                                    
    work_links: {
      "McTeague": "https://archive.org/details/mcteaguestory00norrrich", 
      "The Octopus": "https://dn710104.ca.archive.org/0/items/octopus00norr/octopus00norr.pdf",
      "The Pit": "https://archive.org/details/pit0000fran_r1x5"
    }
  },
  {
    id: "theodore-dreiser",
    name: "Theodore Dreiser",
    lifespan: "1871-1945",
    description: authorTexts["../assets/tx/theodoredreiser.txt"],
    works: ["Sister Carrie", "An American Tragedy", "Jennie Gerhardt"],
    work_descriptions: {
      "Sister Carrie": "A novel exploring concepts of social mobility, ambition, and the search for a better life.", 
      "An American Tragedy": "A novel detailing the murder of a woman due to unhealthy ambitions and wealth-seeking.", 
      "Jennie Gerhardt": "A novel navigating love and societal classes, specifically for a poor, young woman.",
    },
    work_links: {
      "Sister Carrie": "https://ia800103.us.archive.org/5/items/ost-english-sistercarrie00dreiiala/sistercarrie00dreiiala.pdf", 
      "An American Tragedy": "https://ia800700.us.archive.org/31/items/americantragedy0000unse_s0s9/americantragedy0000unse_s0s9.pdf", 
      "Jennie Gerhardt": "https://www.gutenberg.org/files/28988/28988-h/28988-h.htm"
    },
  },
  {
    id: "jack-london",
    name: "Jack London", 
    lifespan: "1867-1916",
    description: authorTexts["../assets/tx/jacklondon.txt"],
    works: ["The Call of the Wild", "White Fang"],
    work_descriptions: {
      "The Call of the Wild" : "A story about a sled dog learning to survive through embracing his insticts.", 
      "White Fang": "A story about a wolfdog's journey from the wilderness to domestication, to dogrings and eventually saving his family.",
    },
    work_links: {
      "The Call of the Wild" : "https://ia801609.us.archive.org/34/items/callofthewild00lond/callofthewild00lond.pdf", 
      "White Fang": "https://ia600108.us.archive.org/1/items/whitefang00lond/whitefang00lond.pdf",
    },
  },
  {
    id: "edith-wharton",
    name: "Edith Wharton",
    lifespan: "1862-1937",
    description: authorTexts["../assets/tx/edithwharton.txt"],
    works: ["The House of Mirth", "Ethan Frome"],
    work_descriptions: {
      "The House of Mirth": "A novel about the downfall of a woman in Gilded Age New York, who couldn't find a source of income to ",
      "Ethan Frome": "A novella about a farmer who is trapped in a relationship with a sick woman, where feelings aren't shared.",
    },
    work_links: {
      "The House of Mirth": "https://dn721900.ca.archive.org/0/items/houseofmirth01whar/houseofmirth01whar.pdf",
      "Ethan Frome": "https://www.gutenberg.org/files/4517/4517-h/4517-h.htm",
    },
  },
  {
    id: "hamlin-garland",
    name: "Hamlin Garland",
    lifespan: "1860-1940",
    description: authorTexts["../assets/tx/hamlingarland.txt"],
    works: ["Main-Travelled Roads"],
    work_descriptions: {
      "Main Travelled Roads": "A collection of short stories that illustrate the struggles of 19th century farmers in Midwestern America.",
    },
    work_links: {
      "Main Travelled Roads": "https://archive.org/details/dli.ernet.235262",
    },
  },
  {
    id: "kate-chopin",
    name: "Kate Chopin",
    lifespan: "1850-1904",
    description: authorTexts["../assets/tx/katechopin.txt"],
    works: ["The Awakening"],
    work_descriptions: {
      "The Awakening": "A feminist novel about a woman, Edna Pontelier, who defies traditional social norms in 19th Century Louisiana.", 
    },
    work_links: {
      "The Awakening": "https://archive.org/details/awakening0000chop_v1b6", 
    },
  },
  {
    id: "henry-james",
    name: "Henry James",
    lifespan: "1843-1916",
    description: authorTexts["../assets/tx/henryjames.txt"],
    works: ["The Portrait of a Lady", "The Turn of the Screw"],
    work_descriptions: {
      "The Portrait of a Lady": "A story about a young woman travelling to Europe and marrying a man, only for that marriage to lead to misery and loss of freedom.",
      "The Turn of the Screw": "A novella about a governess who tries to save children she believes are haunted by previous employess of an estate.",
    },
    work_links: {
      "The Portrait of a Lady": "https://ia801602.us.archive.org/18/items/portraitofalady01jameuoft/portraitofalady01jameuoft.pdf",
      "The Turn of the Screw": "https://archive.org/details/in.ernet.dli.2015.95031",
    },
  },
  {
    id: "mark-twain",
    name: "Mark Twain",
    lifespan: "1835-1910",
    description: authorTexts["../assets/tx/marktwain.txt"],
    works: ["Adventures of Huckleberry Finn"],
    work_descriptions: {
      "Adventures of Huckleberry Finn": "A classic novel about a young boy, Huckleberry Finn, and an escaped slave named Jim following the Mississipi River",
    },
    work_links: {
      "Adventures of Huckleberry Finn": "https://archive.org/details/adventuresofhuck00twai",
    },
  },
  {
    id: "upton-sinclair",
    name: "Upton Sinclair",
    lifespan: "1878-1968",
    description: authorTexts["../assets/tx/uptonsinclair.txt"],
    works: ["The Jungle"],
    work_descriptions: {
      "The Jungle": "A novel about the terrible working conditions and poverty issues for Lithuanian immigrants in the Chicago meatpacking business. "
    },
    work_links: {
      "The Jungle": "https://archive.org/details/jungle01sinc"
    },
  },
  {
    id: "ellen-glasgow",
    name: "Ellen Glasgow",
    lifespan: "1873-1945",
    description: authorTexts["../assets/tx/ellenglasgow.txt"],
    works: ["Barren Ground"],
    work_descriptions: {
      "Barren Ground": "A novel about the life of an abandoned pregnant woman in rural Virginia, turning her 'barren ground' into a successful farm.",
    },
    work_links: {
      "Barren Ground": "https://archive.org/details/in.ernet.dli.2015.76258/2015.76258.Barren-Ground",
    },
  },
  {
    id: "john-steinbeck",
    name: "John Steinbeck",
    lifespan: "1902-1968",
    description: authorTexts["../assets/tx/johnsteinbeck.txt"],
    works: ["The Grapes of Wrath, Of Mice and Men"],
    work_descriptions: {
      "The Grapes of Wrath": "A story about a family who, forced out of their original home, migrated to California for work, facing poverty, loss, and other dangers.",
      "Of Mice and Men": "A novella about two ranch workers, one with an intellectual disability and extreme strength, and their journey.",
    },
    work_links: {
      "The Grapes of Wrath": "https://ia801802.us.archive.org/13/items/english-collections-1/Grapes%20of%20Wrath%2C%20The%20-%20John%20Steinbeck.pdf",
      "Of Mice and Men": "https://ia801708.us.archive.org/28/items/in.ernet.dli.2015.507266/2015.507266.Of-Mice.pdf",
    },
  },
  {
    id: "richard-wright",
    name: "Richard Wright",
    lifespan: "1908-1960",
    description: authorTexts["../assets/tx/richardwright.txt"],
    works: ["Native Son"],
    work_descriptions: {
      "Native Son": "A novel about the tragic situation of Bigger Thomas, a young black man in 1930s Chicago, and the racist and destitute environment.",
    },
    work_links: {
      "Native Son": "https://archive.org/details/in.ernet.dli.2015.149739",
    },
  },
];