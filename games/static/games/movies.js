var moviesArray = ["CITIZEN KANE",
"VERTIGO",
"2001: A SPACE ODYSSEY",
"TOKYO STORY",
"The RULES OF THE GAME",
"The GODFATHER",
"SUNRISE",
"SEVEN SAMURAI",
"The SEARCHERS",
"APOCALYPSE NOW",
"BICYCLE THIEVES",
"BATTLESHIP POTEMKIN",
"BREATHLESS",
"TAXI DRIVER",
"The PASSION OF JOAN OF ARC",
"The MAN WITH A MOVIE CAMERA",
"RASHOMON",
"PERSONA",
"The GODFATHER PART II",
"RAGING BULL",
"the 400 BLOWS",
"LAWRENCE OF ARABIA",
"ANDREI RUBLEV",
"PSYCHO",
"the MIRROR",
"CITY LIGHTS",
"la DOLCE VITA",
"SOME LIKE IT HOT",
"SUNSET BLVD.",
"BLADE RUNNER",
"TOUCH OF EVIL",
"ORDET",
"CASABLANCA",
"The GENERAL",
"CONTEMPT",
"AU HASARD BALTHAZAR",
"REAR WINDOW",
"MODERN TIMES",
"METROPOLIS",
"The NIGHT OF THE HUNTER",
"LA GRANDE ILLUSION",
"CHINATOWN",
"M",
"PLAYTIME",
"BARRY LYNDON",
"IN THE MOOD FOR LOVE",
"The THIRD MAN",
"DR. STRANGELOVE OR: HOW I LEARNED TO STOP WORRYING AND LOVE THE BOMB",
"FANNY AND ALEXANDER",
"The APARTMENT",
"SHOAH",
"STALKER",
"UGETSU MONOGATARI",
"PATHER PANCHALI",
"WILD STRAWBERRIES",
"The BATTLE OF ALGIERS",
"ONCE UPON A TIME IN THE WEST",
"LA STRADA",
"NORTH BY NORTHWEST",
"LATE SPRING",
"MULHOLLAND DR.",
"The WILD BUNCH",
"RIO BRAVO",
"The LEOPARD",
"The GOLD RUSH",
"AMARCORD",
"The SEVENTH SEAL",
"PIERROT LE FOU",
"GOODFELLAS",
"BLUE VELVET",
"A CLOCKWORK ORANGE",
"GERTRUD",
"The CONFORMIST",
"NASHVILLE",
"PICKPOCKET",
"VOYAGE IN ITALY",
"ANNIE HALL",
"CLOSE-UP",
"IT'S A WONDERFUL LIFE",
"LAST YEAR AT MARIENBAD",
"PULP FICTION",
"SANS SOLEIL",
"The MAGNIFICENT AMBERSONS",
"A MAN ESCAPED",
"JAWS",
"SANSHO THE BAILIFF",
"AGUIRRE: THE WRATH OF GOD",
"A BRIGHTER SUMMER DAY",
"The MAN WHO SHOT LIBERTY VALANCE",
"GREED",
"The WIZARD OF OZ",
"NTOLERANCE",
"GONE WITH THE WIND",
"The SHINING",
"STAR WARS",
"TO BE OR NOT TO BE",
"HIROSHIMA MON AMOUR",
"BLOWUP",
"MANHATTAN",
"ALL ABOUT EVE",
"BRINGING UP BABY",
"The MOTHER AND THE WHORE",
"The WOMAN UNDER THE INFLUENCE",
"ONCE UPON A TIME IN AMERICA",
"SHERLOCK JR.",
"NOTORIOUS",
"the LADY EVE",
"IKIRU",
"The SPIRIT OF THE BEEHIVE",
"NOSFERATU",
"E.T. THE EXTRA-TERRESTRIAL",
"VIVRE SA VIE",
"BADLANDS",
"A MATTER OF LIFE AND DEATH",
"ALIEN",
"YI YI",
"ALI: FEAR EATS THE SOUL",
"The EXTERMINATING ANGEL",
"DON'T LOOK NOW",
"DO THE RIGHT THING",
"ONE FLEW OVER THE CUCKOO'S NEST",
"DAYS OF HEAVEN",
"MY DARLING CLEMENTINE",
"SPRING IN A SMALL TOWN",
"COME AND SEE",
"The GOOD, THE BAD AND THE UGLY",
"DUCK SOUP",
"ROSEMARY'S BABY",
"DOUBLE INDEMNITY",
"TROUBLE IN PARADISE",
"PARTIE DE CAMPAGNE",
"The LIFE AND DEATH OF COLONEL BLIMP",
"BRIEF ENCOUNTER",
"STAGECOACH",
"KING KONG",
"HIS GIRL FRIDAY",
"ON THE WATERFRONT",
"BEAU TRAVAIL",
"The DISCREET CHARM OF THE BOURGEOISIE",
"The UMBRELLAS OF CHERBOURG",
"NIGHT AND FOG",
"The GOSPEL ACCORDING TO ST. MATTHEW",
"The RED SHOES",
"A CITY OF SADNESS",
"The CONVERSATION",
"The TRAVELLING PLAYERS",
"The GRAPES OF WRATH",
"The GREAT DICTATOR",
"The DEER HUNTER",
"NANOOK OF THE NORTH",
"The LAST LAUGH",
"The PASSENGER",
"EARTH",
"MOUCHETTE",
"PERFORMANCE",
"IMITATION OF LIFE",
"CLOSE ENCOUNTERS OF THE THIRD KIND",
"VAMPYR",
"SWEET SMELL OF SUCCESS",
"BRAZIL",
"RAN",
"OUT OF THE PAST",
"The RIVER",
"The BEST YEARS OF OUR LIVES",
"BLACK NARCISSUS",
"DEKALOG",
"UMBERTO D.",
"ROCCO AND HIS BROTHERS",
"The CABINET OF DR. CALIGARI",
"CRIES AND WHISPERS",
"CHUNGKING EXPRESS",
"The BIRDS",
"DIARY OF A COUNTRY PRIEST",
"MEET ME IN ST. LOUIS",
"PAISAN",
"NIGHTS OF CABIRIA",
"BELLE DE JOUR",
"RAIDERS OF THE LOST ARK",
"The THIN BLUE LINE",
"CELINE AND JULIE GO BOATING",
"ASHES AND DIAMONDS",
"SOLARIS",
"CHIMES AT MIDNIGHT",
"MCCABE & MRS. MILLER",
"The COLOUR OF POMEGRANATE",
"FARGO",
"BONNIE AND CLYDE",
"WINGS OF DESIRE",
"SULLIVAN'S TRAVELS",
"KES",
"The BAND WAGON",
"PATHS OF GLORY",
"The BIG LEBOWSKI",
"SPIRITED AWAY",
"FACES",
"MEAN STREETS",
"BREAKING THE WAVES",
"RED RIVER",
"MESHES OF THE AFTERNOON",
"WAVELENGTH",
"The THIN RED LINE",
"The TREASURE OF THE SIERRA MADRE",
"KIND HEARTS AND CORONETS",
"DEATH IN VENICE",
"The TEXAS CHAINSAW MASSACRE",
"IVAN THE TERRIBLE, PART 2",
"CRIMES AND MISDEMEANORS",
"THREE COLOURS: BLUE",
"NIGHT OF THE LIVING DEAD",
"The EXORCIST",
"The PIANO",
"F FOR FAKE",
"The GRADUATE",
"MY NEIGHBOUR TOTORO",
"The AUTUMN AFTERNOON",
"The PARIS",
"The MUSIC ROOM",
"MEMORIES OF UNDERDEVELOPMENT",
"UNDERGROUND",
"The BIRTH OF A NATION",
"SCHINDLER'S LIST",
"TWO OR THREE THINGS I KNOW ABOUT HER",
"GROUNDHOG DAY",
"ERASERHEAD",
"The CROWD",
"The QUIET MAN",
"ONLY ANGELS HAVE WINGS",
"FLOATING CLOUDS",
"The EMPIRE STRIKES BACK",
"ZERO FOR CONDUCT",
"TOUKI BOUKI",
"GERMANY YEAR ZERO",
"The WORLD OF APU",
"IVAN THE TERRIBLE, PART 1",
"PANDORA'S BOX",
"HUSBANDS",
"BLACK GOD, WHITE DEVIL",
"TO KILL A MOCKINGBIRD",
"The MALTESE FALCON",
"BROKEN BLOSSOMS",
"FREAKS",
"TABU",
"DAY OF WRATH",
"HAROLD AND MAUDE",
"JOHNNY GUITAR",
"The WAGES OF FEAR",
"The SHOP AROUND THE CORNER",
"THRONE OF BLOOD",
"CINEMA PARADISO",
"IN A LONELY PLACE",
"VIDEODROME",
"MY NIGHT AT MAUD'S",
"The BIG SLEEP",
"A TOUCH OF ZEN",
"WERCKMEISTER HARMONIES",
"The LIFE OF OHARU",
"THREE COLOURS: RED",
"UNFORGIVEN",
"The STORY OF THE LAST CHRYSANTHEMUMS",
"IN THE REALM OF THE SENSES",
"LOVE STREAMS",
"RESERVOIR DOGS",
"The LAST PICTURE SHOW",
"The PHILADELPHIA STORY",
"WEST SIDE STORY",
"IT HAPPENED ONE NIGHT",
"DISTANT VOICES, STILL LIVES",
"BERLIN ALEXANDERPLATZ",
"KINGS OF THE ROAD",
"The BRIDGE ON THE RIVER KWAI",
"MAGNOLIA",
"BACK TO THE FUTURE",
"MIDNIGHT COWBOY",
"KILLER OF SHEEP",
"The SACRIFICE",
"ORPHEUS",
"LISTEN TO BRITAIN",
"THIS IS SPINAL TAP",
"PEEPING TOM",
"MONSIEUR VERDOUX",
"A CANTERBURY TALE",
"OCTOBER",
"RED DESERT",
"The TIME TO LIVE AND THE TIME TO DIE",
"DON'T LOOK BACK",
"HOW GREEN WAS MY VALLEY",
"RUSSIAN ARK",
"I AM CUBA",
"The MATRIX",
"I KNOW WHERE I'M GOING!",
"NETWORK",
"The DOUBLE LIFE OF VERONIQUE",
"1900",
"DOG DAY AFTERNOON",
"DAWN OF THE DEAD",
"SCENES FROM A MARRIAGE",
"DAYS OF BEING WILD",
"The PUPPETMASTER",
"CHELSEA GIRLS",
"I WAS BORN, BUT...",
"The KING OF COMEDY",
"The SORROW AND THE PITY",
"WRITTEN ON THE WIND",
"HEAT",
"MAN OF ARAN",
"MARNIE",
"ALL THAT HEAVEN ALLOWS",
"SNOW WHITE AND THE SEVEN DWARFS",
"The HOUR OF THE FURNACES",
"A STAR IS BORN",
"WHERE IS THE FRIEND'S HOME?",
"EL",
"The KID",
"WEEK-END",
"The THING",
"HOUR OF THE WOLF",
"OPENING NIGHT",
"NOSTALGHIA",
"EYES WITHOUT A FACE",
"MAKE WAY FOR TOMORROW",
"KOYAANISQATSI",
"The GREEN RAY",
"MR. HULOT'S HOLIDAY",
"STRANGER THAN PARADISE",
"The CRIME OF MONSIEUR LANGE",
"BRIDE OF FRANKENSTEIN",
"PYAASA",
"FESTEN",
"KISS ME DEADLY",
"EASY RIDER",
"ALL ABOUT MY MOTHER",
"The HOUSE IS BLACK",
"THROUGH THE OLIVE TREES",
"ARMY OF SHADOWS",
"IF...",
"CABARET",
"HIGH AND LOW",
"AMADEUS",
"IVAN'S CHILDHOOD",
"CHRONICLE OF A SUMMER",
"SHADOWS",
"YOJIMBO",
"FIVE EASY PIECES",
"ALIENS",
"The KILLING OF A CHINESE BOOKIE",
"LOST HIGHWAY",
"LANDSCAPE IN THE MIST",
"LAST TANGO IN PARIS",
"The SHAWSHANK REDEMPTION",
"ETERNAL SUNSHINE OF THE SPOTLESS MIND",
"The TENANT",
"GREY GARDENS",
"The CLOUD-CAPPED STAR",
"SHADOWS OF OUR FORGOTTEN ANCESTORS",
"HOOP DREAMS",
"FITZCARRALDO",
"The CRANES ARE FLYING",
"The PALM BEACH STORY",
"SHOOT THE PIANO PLAYER",
"The GLEANERS & I",
"BUTCH CASSIDY AND THE SUNDANCE KID",
"FRENCH CANCAN",
"WANDA",
"FANTASIA",
"The TERMINATOR",
"THERE WILL BE BLOOD",
"The INNOCENTS",
"MURIEL",
"HAPPY TOGETHER",
"DOCTOR ZHIVAGO",
"TOY STORY",
"SALVATORE GIULIANO",
"The TREE OF LIFE",
"KAGEMUSHA",
"DERSU UZALA",
"STRANGERS ON A TRAIN",
"GIMME SHELTER",
"MONTY PYTHON'S LIFE OF BRIAN",
"IN A YEAR WITH 13 MOONS",
"TRIUMPH OF THE WILL",
"BARREN LIVES",
"SHORT CUTS",
"The YOUNG GIRLS OF ROCHEFORT",
"DAY FOR NIGHT",
"The ASPHALT JUNGLE",
"The HUSTLER",
"TIE XI QU: WEST OF THE TRACKS",
"RAISE THE RED LANTERN",
"ALEXANDER NEVSKY",
"CLOSELY WATCHED TRAINS",
"STROMBOLI",
"TOOTSIE",
"DAISIES",
"The SOUND OF MUSIC",
"CROUCHING TIGER, HIDDEN DRAGON",
"The TREE OF WOODEN CLOGS",
"The LONG GOODBYE",
"WOMAN IN THE DUNES",
"LAND WITHOUT BREAD",
"DOWN BY LAW",
"The ENIGMA OF KASPAR HAUSER",
"SALESMAN",
"WITHNAIL & I",
"EYES WIDE SHUT",
"CHARULATA",
"The AWFUL TRUTH",
"TOP HAT",
"ALPHAVILLE",
"LOLA",
"HEAVEN'S GATE",
"MON ONCLE",
"HIGH NOON",
"TRAINSPOTTING",
"TROPICAL MALADY",
"A NIGHT AT THE OPERA",
"TERRA EM TRANSE",
"INDIA SONG",
"The LADY FROM SHANGHAI",
"FAREWELL, MY CONCUBINE",
"TALE OF TALES",
"QUINCE TREE OF THE SUN",
"PROVIDENCE",
"The CAMERAMAN",
"FIGHT CLUB",
"ACCATTONE",
"DEAD RINGERS",
"PINOCCHIO",
"TITICUT FOLLIES",
"The WIND",
"A TASTE OF CHERRY",
"The RED CIRCLE",
"The FLOWERS OF ST. FRANCIS",
"DR. MABUSE, THE GAMBLER",
"MIRACLE IN MILAN",
"CASINO",
"WINTER LIGHT",
"The DEAD",
"CITY OF GOD",
"YELLOW EARTH",
"TWO-LANE BLACKTOP",
"The SILENCE",
"FELLINI SATYRICON",
"A HARD DAY'S NIGHT",
"ROSETTA",
"TRISTANA",
"The WIND WILL CARRY US",
"The SILENCE OF THE LAMBS",
"BARTON FINK",
"POINT BLANK",
"An AFFAIR TO REMEMBER",
"FLOWERS OF SHANGHAI",
"MAD MAX 2",
"The SERVANT",
"SAFE",
"LAURA",
"The SCARLET EMPRESS",
"EARLY SUMMER",
"The DEVIL, PROBABLY",
"WALKABOUT",
"The PHANTOM OF LIBERTY",
"PLATFORM",
"DELIVERANCE",
"BLISSFULLY YOURS",
"The BLUE ANGEL",
"CARRIE",
"REBECCA",
"SHANE",
"SUSPIRIA",
"GREAT EXPECTATIONS",
"PAT GARRETT AND BILLY THE KID",
"TO HAVE AND HAVE NOT",
"HALLOWEEN",
"ALL THE PRESIDENT'S MEN",
"STRIKE",
"HANNAH AND HER SISTERS",
"A MOMENT OF INNOCENCE",
"SENSO",
"ALICE IN THE CITIES",
"FAUST",
"REPULSION",
"SCORPIO RISING",
"The DEVILS",
"SCARFACE",
"NAKED",
"BEN-HUR",
"BOOGIE NIGHTS",
"NOUVELLE VAGUE",
"LIMELIGHT",
"The RISE TO POWER OF LOUIS XIV",
"The ROUND-UP",
"BRING ME THE HEAD OF ALFREDO GARCIA",
"The KILLING",
"The BIG HEAT",
"ALL THAT JAZZ",
"ROCKY",
"The FRENCH CONNECTION",
"SHADOW OF A DOUBT",
"TEOREMA",
"EDVARD MUNCH",
"APARAJITO",
"TALK TO HER",
"YOUNG FRANKENSTEIN",
"The ELEPHANT MAN",
"THAT OBSCURE OBJECT OF DESIRE",
"DIE HARD",
"BOUDU SAVED FROM DROWNING",
"STEAMBOAT BILL, JR.",
"REBEL WITHOUT A CAUSE",
"TERMINATOR 2: JUDGMENT DAY",
"The TIN DRUM",
"The AFRICAN QUEEN",
"YEELEN",
"The SEASONS",
"FUNNY GAMES",
"FORREST GUMP",
"SOME CAME RUNNING",
"PUNCH-DRUNK LOVE",
"WAGON MASTER",
"The TESTAMENT OF DR. MABUSE",
"LOVE ME TONIGHT",
"12 ANGRY MEN",
"FRANKENSTEIN",
"CAT PEOPLE",
"PASSION",
"The MARRIAGE OF MARIA BRAUN",
"The WEDDING MARCH",
"BEING THERE",
"FELLINI'S ROMA",
"The MANCHURIAN CANDIDATE",
"BAMBI",
"YOUNG MR. LINCOLN",
"ROBOCOP",
"MY OWN PRIVATE IDAHO",
"FERRIS BUELLER'S DAY OFF",
"TWENTY YEARS LATER",
"SPLENDOR IN THE GRASS",
"IN VANDA'S ROOM",
"The EMPEROR'S NAKED ARMY MARCHES ON",
"XALA",
"DEAD MAN",
"SPARTACUS",
"RAISING ARIZONA",
"CLAIRE'S KNEE",
"OLYMPIA",
"The 39 STEPS",
"OUR HOSPITALITY",
"A PLACE IN THE SUN",
"PICNIC AT HANGING ROCK",
"LIMITE",
"THEY LIVE BY NIGHT",
"BIGGER THAN LIFE",
"The PURPLE ROSE OF CAIRO",
"DAZED AND CONFUSED",
"MONTY PYTHON AND THE HOLY GRAIL",
"MY LIFE AS A DOG",
"A SHORT FILM ABOUT KILLING",
"BREAKFAST AT TIFFANY'S",
"WALL-E",
"GUN CRAZY",
"DANCER IN THE DARK",
"The HOLY MOUNTAIN",
"The AGE OF INNOCENCE",
"ELEPHANT",
"AMELIE",
"LOCAL HERO",
"MY FRIEND IVAN LAPSHIN",
"LOVES OF A BLONDE",
"The IDIOTS",
"ALL QUIET ON THE WESTERN FRONT",
"UNCLE BOONMEE WHO CAN RECALL HIS PAST LIVES",
"LANCELOT DU LAC",
"The FLY",
"MOTHER AND SON",
"ANTONIO DAS MORTES",
"MILLER'S CROSSING",
"SONGS FROM THE SECOND FLOOR",
"TITANIC",
"RED SORGHUM",
"WHITE HEAT",
"The PARTY",
"THELMA & LOUISE",
"An ANGEL AT MY TABLE",
"A.I. ARTIFICIAL INTELLIGENCE",
"DETOUR",
"INVASION OF THE BODY SNATCHERS",
"The CHRONICLE OF ANNA MAGDALENA BACH",
"MR. SMITH GOES TO WASHINGTON",
"EUROPA '51",
"SHOCK CORRIDOR",
"The DAMNED",
"The KILLER",
"The LUSTY MEN",
"BLOOD SIMPLE",
"The MIRACLE OF MORGAN'S CREEK",
"The VIRGIN SPRING",
"FULL METAL JACKET",
"The LAST BOLSHEVIK",
"W.R.: MYSTERIES OF THE ORGANISM",
"HARAKIRI",
"The WICKER MAN",
"CODE UNKNOWN",
"FOOLISH WIVES",
"SCARFACE",
"The TURIN HORSE",
"I WALKED WITH A ZOMBIE",
"The LADY VANISHES",
"An AMERICAN IN PARIS",
"MOONFLEET",
"OTHELLO",
"PORT OF SHADOWS",
"MASCULIN FEMININ",
"POSSESSION",
"FORBIDDEN GAMES",
"The RIGHT STUFF",
"FLAMING CREATURES",
"AU REVOIR LES ENFANTS",
"The CIRCUS",
"COOL HAND LUKE",
"The PRODUCERS",
"A WOMAN OF PARIS",
"The SON",
"VIVE L'AMOUR",
"DOGVILLE",
"The GHOST AND MRS. MUIR",
"The MAN WHO WOULD BE KING",
"ZELIG",
"The HART OF LONDON",
"The SUN SHINES BRIGHT",
"The DEATH OF MR. LAZARESCU",
"SECRETS & LIES",
"The LORD OF THE RINGS: THE FELLOWSHIP OF THE RING",
"ABRAHAM'S VALLEY",
"SICILIA!",
"SMILES OF A SUMMER NIGHT",
"LOLITA",
"The NAVIGATOR",
"ASHES OF TIME",
"FASTER, PUSSYCAT! KILL! KILL!",
"THEY WERE EXPENDABLE",
"The ROYAL TENENBAUMS",
"The ICE STORM",
"The LAST EMPEROR",
"MELANCHOLIA",
"HATARI!",
"AKIRA",
"ANATOMY OF A MURDER",
"ORLANDO",
"NOT RECONCILED",
"The BITTER TEARS OF PETRA VON KANT",
"A STREETCAR NAMED DESIRE",
"GUMMO",
"DISTANT",
"BLACK ORPHEUS",
"The LAST DETAIL",
"The BREAKFAST CLUB",
"The PIANO TEACHER",
"OLDBOY",
"SHE WORE A YELLOW RIBBON",
"PRINCESS MONONOKE",
"The PRINCESS BRIDE",
"WHO'S AFRAID OF VIRGINIA WOOLF?",
"REQUIEM FOR A DREAM",
"GRIN WITHOUT A CAT",
"BY THE BLUEST OF SEAS",
"FLOATING WEEDS",
"BROKEBACK MOUNTAIN",
"EDWARD SCISSORHANDS",
"The LADIES MAN",
"EAST OF EDEN",
"The WOMAN NEXT DOOR",
"The TRIAL",
"The END OF SUMMER",
"EVIL DEAD II",
"BLACK GIRL",
"AFTER LIFE",
"RIFIFI",
"TIME OF THE GYPSIES",
"DUMBO",
"OUTER SPACE",
"The TIGER OF ESCHNAPUR",
"ACE IN THE HOLE",
"SATURDAY NIGHT AND SUNDAY MORNING",
"WAR AND PEACE",
"The RED BALLOON",
"AS I WAS MOVING AHEAD OCCASIONALLY I SAW BRIEF GLIMPSES OF BEAUTY",
"NATIONAL LAMPOON'S ANIMAL HOUSE",
"The WILD CHILD",
"The LIVES OF OTHERS",
"The MISFITS",
"SE7EN",
"ROPE",
"DIRTY HARRY",
"MOTHER INDIA",
"The WHITE RIBBON",
"HITLER: A FILM FROM GERMANY",
"The HAWKS AND THE SPARROWS",
"The ADVENTURES OF ROBIN HOOD",
"STREET ANGEL",
"L.A. CONFIDENTIAL",
"CRASH",
"PORTRAIT OF JASON",
"A TALE OF THE WIND",
"DODES'KA-DEN",
"LOST IN TRANSLATION",
"HENRY V",
"FAT CITY",
"OSSESSIONE",
"SATURDAY NIGHT FEVER",
"WHEN WE WERE KINGS",
"REDS",
"EMPIRE",
"AMERICAN GRAFFITI",
"KAAGAZ KE PHOOL",
"ELEPHANT",
"BLUE",
"SUBARNAREKHA",
"JULIET OF THE SPIRITS",
"WOMEN ON THE VERGE OF A NERVOUS BREAKDOWN",
"SIMON OF THE DESERT",
"A SEPARATION",
"SEVENTH HEAVEN",
"The INCREDIBLE SHRINKING MAN",
"ROMAN HOLIDAY",
"ZABRISKIE POINT",
"FROM THE CLOUDS TO THE RESISTANCE",
"Z",
"GET CARTER",
"The BAD AND THE BEAUTIFUL",
"SPIONE",
"PINK FLAMINGOS",
"IT'S A GIFT",
"EXCALIBUR",
"The GOLDEN COACH",
"BRANDED TO KILL",
"RUSHMORE",
"HEIMAT",
"The LADYKILLERS",
"MOTHLIGHT",
"PICKUP ON SOUTH STREET",
"GRIZZLY MAN",
"CHIKAMATSU MONOGATARI",
"SEVEN CHANCES",
"The GREAT ESCAPE",
"NO COUNTRY FOR OLD MEN",
"The ASCENT",
"CAIRO STATION",
"BERLIN: SYMPHONY OF A GREAT CITY",
"42ND STREET",
"3 WOMEN",
"ARABIAN NIGHTS",
"The RIVER",
"The FIREMEN'S BALL",
"NIGHT OF THE DEMON",
"CUL-DE-SAC",
"ARREBATO",
"STARDUST MEMORIES",
"KNIFE IN THE WATER",
"VERONIKA VOSS",
"M*A*S*H",
"The ROCKY HORROR PICTURE SHOW",
"HANA-BI",
"LUDWIG",
"ANGEL",
"VAGABOND",
"MEMENTO",
"The NIGHTMARE BEFORE CHRISTMAS",
"SAUVE QUI PEUT",
"ANATAHAN",
"TWIN PEAKS: FIRE WALK WITH ME",
"CEDDO",
"WE ALL LOVED EACH OTHER SO MUCH",
"The BLUES BROTHERS",
"TAIPEI STORY",
"AND LIFE GOES ON...",
"BIG DEAL ON MADONNA STREET",
"The AGE OF THE EARTH",
"TO LIVE",
"SEVEN WOMEN",
"TRUE HEART SUSIE",
"GRAVE OF THE FIREFLIES",
"DOG STAR MAN",
"ON THE TOWN",
"The Cook, the Thief, His Wife & Her Lover",
"STARSHIP TROOPERS",
"WITNESS",
"FIRES WERE STARTED",
"EXOTICA",
"The THIEF OF BAGDAD",
"UNSERE AFRIKAREISE",
"DUST IN THE WIND",
"COMMUNE",
"The BLOOD OF A POET",
"The FALLEN IDOL",
"ASSAULT ON PRECINCT 13",
"COLOSSAL YOUTH",
"RIO 40 GRAUS",
"The BALLAD OF NARAYAMA",
"NOW, VOYAGER",
"MOROCCO",
"The USUAL SUSPECTS",
"INLAND EMPIRE",
"MILDRED PIERCE",
"INDIA: MATRI BHUMI",
"BOB LE FLAMBEUR",
"BURNT BY THE SUN",
"VENGEANCE IS MINE",
"ODD MAN OUT",
"WHEN A WOMAN ASCENDS THE STAIRS",
"The OUTLAW JOSEY WALES",
"TOPSY-TURVY",
"The LAST TEMPTATION OF CHRIST",
"BLOW OUT",
"NEW YORK, NEW YORK",
"TWO ENGLISH GIRLS",
"RED BEARD",
"AMERICAN BEAUTY",
"The DEATH OF MARIA MALIBRAN",
"SHANGHAI EXPRESS",
"FELLINI'S CASANOVA",
"DRACULA",
"TOUCHEZ PAS AU GRISBI",
"The SWEET HEREAFTER",
"The LONG DAY CLOSES",
"The STRAIGHT STORY",
"KWAIDAN",
"JFK",
"LONE STAR",
"ZORNS LEMMA",
"DEEP END",
"YELLOW SUBMARINE",
"MOULIN ROUGE!",
"The NAKED ISLAND",
"The THING FROM ANOTHER WORLD",
"The ACT OF SEEING WITH ONE'S OWN EYES",
"PAN'S LABYRINTH",
"The BIG PARADE",
"AMERICA, AMERICA",
"RYAN'S DAUGHTER",
"FORT APACHE",
"GANDHI",
"SILENT LIGHT",
"RUN LOLA RUN",
"GREGORY'S GIRL",
"AUDITION",
"A DIARY FOR TIMOTHY",
"FORBIDDEN PLANET",
"GILDA",
"The GODFATHER PART III",
"The DARK KNIGHT",
"DIARIES, NOTES AND SKETCHES",
"OUTSKIRTS",
"ZODIAC",
"FINDING NEMO",
"NOSTALGIA FOR THE LIGHT",
"OEDIPUS REX",
"The DOCKS OF NEW YORK",
"The MILKY WAY",
"BROADWAY DANNY ROSE",
"PAKEEZAH",
"JU DOU",
"NEWS FROM HOME",
"DUEL",
"The AMERICAN FRIEND",
"The ADVENTURES OF PRINCE ACHMED",
"The GO-BETWEEN",
"CARO DIARIO",
"MIDNIGHT RUN",
"LIEBELEI",
"BEFORE SUNSET",
"VAN GOGH",
"AVATAR",
"The CRIMINAL LIFE OF ARCHIBALDO DE LA CRUZ",
"The INSIDER",
"LATE AUTUMN",
"HEAVEN CAN WAIT",
"The PHANTOM CARRIAGE",
"TEN",
"SYNDROMES AND A CENTURY",
"The BATTLE OF CHILE: PART 2",
"SAWDUST AND TINSEL",
"EL DORADO",
"ATANARJUAT: THE FAST RUNNER",
"SONATINE",
"STILL LIFE",
"The LONELINESS OF THE LONG DISTANCE RUNNER",
"PEOPLE ON SUNDAY",
"The NAKED SPUR",
"SECOND BREATH",
"PINK FLOYD: THE WALL",
"The MATCH FACTORY GIRL",
"STORM OVER ASIA",
"The ONLY SON",
"The MAN WHO FELL TO EARTH",
"MY MAN GODFREY",
"The BAREFOOT CONTESSA",
"AKIRA KUROSAWA'S DREAMS",
"The DEVIL IS A WOMAN",
"OUT OF AFRICA",
"TWO FOR THE ROAD",
"O LUCKY MAN!",
"The MAGNIFICENT SEVEN",
"The UNBEARABLE LIGHTNESS OF BEING",
"MACUNAIMA",
"4 MONTHS, 3 WEEKS AND 2 DAYS",
"MY LITTLE LOVES",
"GOODBYE SOUTH, GOODBYE",
"FEMALE TROUBLE",
"DEEP RED",
"79 PRIMAVERAS",
"HOLIDAY",
"SHOESHINE",
"MEMORIES OF MURDER",
"The YEAR OF LIVING DANGEROUSLY",
"LAND OF SILENCE AND DARKNESS",
"Mad Max: Fury Road",
"Inside Out",
"Selma",
"Brooklyn",
"Spotlight",
"Star Wars: Episode VII - The Force Awakens",
"It Follows",
"Shaun the Sheep Movie",
"Room",
"Mission: Impossible Rogue Nation",
"Paddington",
"The Martian",
"Timbuktu",
"Creed",
"Amy",
"GETT: The Trial of Viviane Amsalem",
"Seymour: An Introduction",
"Phoenix",
"What We Do In The Shadows",
"About Elly",
"45 Years",
"Carol",
"Spy",
"Sicario",
"Iris",
"Kurt Cobain: Montage Of Heck",
"'71",
"Ex Machina",
"Red Army",
"Bridge of Spies",
"The Look of Silence",
"Tangerine",
"Wild Tales",
"Appropriate Behavior",
"Son of Saul",
"Heart of a Dog",
"Finders Keepers",
"Listen To Me Marlon",
"Anomalisa",
"Mustang",
"The Gift",
"The Diary Of A Teenage Girl",
"Jafar Panahi's Taxi",
"The Second Mother",
"Hitchcock/Truffaut",
"Girlhood",
"The Salt of the Earth",
"Best Of Enemies",
"Theeb",
"Black Souls",
"The Big Short",
"Going Clear: Scientology and the Prison of Belief",
"The Wonders",
"99 Homes",
"Love & Mercy",
"Boy and the World",
"We Are Still Here",
"A Most Violent Year",
"The Wrecking Crew",
"Slow West",
"The Duke Of Burgundy",
"Grandma",
"The End Of The Tour",
"I'll See You in My Dreams",
"Monkey Kingdom",
"The Lady In The Van",
"The Forbidden Room",
"The Hunting Ground",
"Straight Outta Compton",
"Steve Jobs",
"Coming Home",
"Beasts of No Nation",
"The Black Panthers: Vanguard Of The Revolution",
"Breathe",
"Clouds of Sils Maria",
"Still Alice",
"James White",
"The Revenant",
"Mississippi Grind",
"Trainwreck",
"Cartel Land",
"The Walk",
"Mommy",
"Queen of Earth",
"Dope",
"Sunshine Superman",
"Mr. Holmes",
"The Peanuts Movie",
"Janis: Little Girl Blue",
"Kumiko, the Treasure Hunter",
"White God",
"Far From the Madding Crowd",
"The Tribe",
"Cinderella",
"Amour Fou",
"When Marnie Was There",
"Bone Tomahawk",
"A Pigeon Sat on a Branch Reflecting on Existence",
"Jauja",
"Boyhood",
"Mr. Turner",
"The Babadook",
"The LEGO Movie",
"Life Itself",
"Whiplash",
"Nightcrawler",
"Gloria",
"Leviathan",
"Snowpiercer",
"Two Days, One Night",
"Citizenfour",
"The Tale of the Princess Kaguya",
"Birdman",
"Starred Up",
"The Grand Budapest Hotel",
"Jodorowsky's Dune",
"X-Men: Days of Future Past",
"Guardians of the Galaxy",
"The Missing Picture",
"Song Of The Sea",
"We Are the Best!",
"Ida",
"Live Die Repeat: Edge of Tomorrow",
"Blue Ruin",
"Dawn Of The Planet Of The Apes",
"Elaine Stritch: Shoot Me",
"The Overnighters",
"Love Is Strange",
"Gone Girl",
"The Lunchbox",
"The Imitation Game",
"A Summer's Tale",
"Wild",
"Captain America: The Winter Soldier",
"A Girl Walks Home Alone at Night",
"Locke",
"Finding Vivian Maier",
"20,000 Days on Earth",
"The Rocket",
"Frank",
"Particle Fever",
"How to Train Your Dragon 2",
"Force Majeure",
"Last Days in Vietnam",
"National Gallery",
"The Dance of Reality",
"Pride",
"Foxcatcher",
"Big Hero 6",
"Manakamana",
"The Last of the Unjust",
"Stranger by the Lake",
"The Drop",
"Child's Pose",
"The Normal Heart",
"In Bloom",
"Dear White People",
"The Wind Rises",
"A Most Wanted Man",
"The Internet's Own Boy: The Story of Aaron Swartz",
"Calvary",
"Obvious Child",
"Le Week-End",
"Diplomacy",
"Omar",
"The Guest",
"Tim's Vermeer",
"Under the Skin",
"Mistaken for Strangers",
"Venus in Fur",
"22 Jump Street",
"Chef",
"Only Lovers Left Alive",
"The Skeleton Twins",
"Art and Craft",
"To Be Takei",
"12 O'clock Boys",
"Top Five",
"Cheap Thrills",
"John Wick",
"The Immigrant",
"The Dog",
"Winter Sleep",
"The Kill Team",
"Night Moves",
"The Good Lie",
"Bears",
"Joe",
"Alan Partridge",
"Coherence",
"Wetlands",
"Like Father, Like Son",
"Cold in July",
"Adieu au langage",
"A Field in England",
"The Trip To Italy",
"The Theory of Everything",
"Begin Again",
"Gravity",
"12 Years a Slave",
"Before Midnight",
"Short Term 12",
"Mud",
"Her",
"Dallas Buyers Club",
"20 Feet From Stardom",
"Zero Dark Thirty",
"American Hustle",
"Wadjda",
"Blackfish",
"All Is Lost",
"Inside Llewyn Davis",
"Captain Phillips",
"Enough Said",
"The Square",
"Sound City",
"Fruitvale Station",
"56 Up",
"The Act Of Killing",
"The Selfish Giant",
"Nebraska",
"Call Me Kuchu",
"Let The Fire Burn",
"Frances Ha",
"The Hunger Games: Catching Fire",
"A Hijacking",
"Muscle Shoals",
"Stories We Tell",
"Blue Jasmine",
"The Hunt",
"Room 237",
"The Spectacular Now",
"Philomena",
"Cutie And The Boxer",
"Behind the Candelabra",
"Lore",
"Blancanieves",
"I Am Divine",
"Frozen",
"The Crash Reel",
"No",
"Rush",
"War Witch",
"Star Trek Into Darkness",
"The World's End",
"The Gatekeepers",
"Blue Is The Warmest Color",
"In a World...",
"Museum Hours",
"The Sapphires",
"After Tiller",
"We Steal Secrets: The Story Of Wikileaks",
"A Band Called Death",
"Drug War",
"A Touch of Sin",
"The Great Beauty",
"Still Mine",
"Our Children",
"Mother Of George",
"Gimme The Loot",
"The Conjuring",
"Beyond The Hills",
"Caesar Must Die",
"Inequality For All",
"A Place at the Table",
"In the House",
"The Way Way Back",
"The Angels' Share",
"This Is the End",
"What Maisie Knew",
"Side Effects",
"My Brother The Devil",
"Fill the Void",
"Iron Man 3",
"Hannah Arendt",
"Prisoners",
"Much Ado About Nothing",
"The Punk Singer",
"Upstream Color",
"The Attack",
"Computer Chess",
"Sightseers",
"Happy People: A Year in the Taiga",
"Warm Bodies",
"The Armstrong Lie",
"Saving Mr. Banks",
"We Are What We Are",
"The Patience Stone",
"The Place Beyond The Pines",
"At Berkeley",
"Kon Tiki",
"Yossi",
"Dirty Wars",
"Berberian Sound Studio",
"Drinking Buddies",
"Don Jon",
"The Wolf of Wall Street"];
