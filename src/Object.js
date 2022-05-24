let obj = [
  {
    id : "1",
    name : "Ray",
    lastName : "Bradbury",
    born : 1942,  
    bornDate : 22,
    bornMonth : "Aug",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndGfPav_QnrVpRHGN9i-2D6tRpDsVRMOKT97zc_evpQ3-F2Dp",
    desc : "Ray Douglas Bradbury was an American author and screenwriter. One of the most celebrated 20th-century American writers, he worked in a variety of modes, including fantasy, science fiction, horror, mystery, and realistic fiction.",
    jobs : "Bradbury was mainly known for his novel Fahrenheit 451 (1953) and his short-story collections The Martian Chronicles (1950) and The Illustrated Man (1951).",
    location : "Illinois, United States",
    bookObj : [
      {
        bookId : "1",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/bd7db7397f7d83052f829816ecc7f00420220121123310819848iaLdiqnX9.jpg.webp",
        bookName : "Dandelion Wine",
        bookRating : 5,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        published : 2021,
        bookPage : 320,
        nashriyot : "Эксмо",
        bookInfo : `
        Яркое, фантастическое лето 1928 года: двенадцатилетний Дуглас Сполдинг ведет записи о событиях того лета, которые складываются в отдельные истории, гротескные искажения ординарных будней маленького городка, где живут Дуглас и его семья. Там все кажется не тем, чем является, а сила детского воображения создает новую реальность, которую не отличить от вымысла. Выросший из отдельных рассказов, филигранных в своей лиричности, роман "Вино из одуванчиков" – классическая хроника детства Рэя Брэдбери, окно в творческий мир писателя, создавшего такие шедевры мировой литературы, как "Марсианские хроники" и "451 градус по Фаренгейту".`,
        
        bookInfoTwo : `

        Здесь навсегда останется Ваше сердце. Войдите в светлый мир двенадцатилетнего мальчика и проживите с ним одно лето, наполненное событиями радостными и печальными, загадочными и тревожными; лето, когда каждый день совершаются удивительные открытия, главное из которых — ты живой, ты дышишь, ты чувствуешь! Старики — мудрецы, постигшие жизнь. Дети — мудрецы, постигающие жизнь. Богатый мир детей вбирает в себя все от кузнечиков до магии, которая у Рэя Брэдбери реально действует. Дети любят бояться. Они постоянно ищут приключения на свою голову, шатаясь по Оврагу в неурочный час. После фильма ужасов возвращаются через Овраг (воплощение зла, почти живое существо) и не хотят, чтобы их город превратился в идеальный мир «ванильный творожок». Они постигают жизнь и законы бытия и собираются жить вечно (ну или почти).
        `,
        bookPrice : "69 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "2",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5a9d8bf5b7a4b35f3110dde8673bdda22022051022162188381pCLUVWWOWc.jpg.webp",
        bookName : "Farewell Summer",
        bookRating : 0,
        bookGenre : "jahon",
        bookPage : 224,
        published : 2020,
        bookSenario : "Tarixiy",
        nashriyot : "Эксмо",
        bookInfo : `
        Роман Рэя Брэдбери, опубликованный 17 октября 2006 года. Является продолжением повести 1957 года «Вино из одуванчиков». `,
        
        bookInfoTwo : `

        Эти две книги, вместе с романом «Надвигается беда» 1962 года, представляют собой трилогию воспоминаний Брэдбери о детстве, проведённом в Уокигане.
        `,
        bookPrice : "79 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "3",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/1f3202d820180a39f736f20fce790de82021100217521374425HC12z9cj5t.jpg.webp",
        bookName : "Dandelion Wine",
        bookRating : 5,
        bookGenre : "jahon",
        bookPage : 352,
        published : 2021,
        bookSenario : "Tarixiy",
        nashriyot : "Эксмо",  
        bookInfo : `
        Войдите в светлый мир двенадцатилетнего мальчика и проживите с ним одно лето, наполненное событиями радостными и печальными, загадочными и тревожными; лето, когда каждый день совершаются удивительные открытия, главное из которых — ты живой, ты дышишь, ты чувствуешь!`,
        
        bookInfoTwo : `

        «Вино из одуванчиков» Рэя Брэдбери — классическое произведение, вошедшее в золотой фонд мировой литературы.
        `,
        bookPrice : "59 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"      
      },
      {
        bookId : "4",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/662548dada72a36a0c52c675797272fe2022042616435663053Lxg3AqGOZZ.jpg.webp",
        bookName : "Farengeyt bo'yicha 451 daraja",
        bookRating : 5,
        bookGenre : "jahon",
        bookPage : 224,
        published : 2021,
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ҳаёт тезлашган, бир хиллик тенглик деб аталадиган, одамлар бир-бирини эшитмайдиган, фикрлашдан тўхтаган, ҳурлик маҳв этилган…  Бу жамиятда китоблар ақл кушандаси саналади, тақиқлар туфайли одамлар аста-секин улардан воз кечади, адабиётдан қўрқади.`,
        
        bookInfoTwo : `

        Улар фақат қулоқларидаги “чиғаноқ”лардан тараладиган маънисиз мусиқадан маст, рекламалардан сарҳуш  яшайди.
        Китоблар тақиқланган яқин келажакдаги хаёлий Америка жамияти ҳақида ҳикоя қилувчи ушбу асар бош қаҳрамони Гай Монтэг – ўт ўчирувчи. Номи ўт ўчирувчи, аммо китобларни  улар топилган уйлар билан қўшиб ёқиш унинг аъмолидир. Аммо куни келиб, у ўз касбининг тўғрилигига шубҳаланиб қолди  ва аста-секин фикрлашни истаётганини сезди, ана шундан бошланган исён ортидан у ўзи яшаб турган жамиятдаги тутумни, тартиботни савол остига ола бошлади.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },
  {
    id : "2",
    name : "Dan",
    lastName : "Brown",
    born : 1964 ,  
    bornDate : 22,
    bornMonth : "June",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6jdYkC4pZlZYxz6wssMxmXK0WW2rtOhUwKtLftidmbEiaPJA",
    desc : "Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno, and Origin. His novels are treasure hunts which usually take place over a period of 24 hours.",
    jobs : "The Robert Langdon novels are deeply engaged with Christian themes and historical fiction, and have generated controversy as a result. Brown states on his website that his books are not anti-Christian and he is on a 'constant spiritual journey' himself.",
    location : "New Hampshire, United States",
    bookObj : [
      {
        bookId : "5",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/0084ae4bc24c0795d1e6a4f58444d39b2022042720371385007LUUTHneFRs.jpg.webp",
        bookName : "Ibtido",
        bookRating : 4,
        bookPage : 670,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        2017 йил чоп этилиб бутун дунё бўйлаб жуда кўплаб шов-шув ва жиддий баҳс-мунозараларга сабаб бўлган, «Да Винчи сири» асари муаллифи Ден Брауннинг яна бир машҳур романи энди ўзбек тилида!!!`,
        
        bookInfoTwo : `

        Бу асар 2017 йил октябр ойида АҚШ да чоп этилишига қарамай, 2 ой ичида дунёнинг 30 дан ортиқ тилига таржима қилинди ва дунё бестселлерлари сирасига кирган ҳисобланади.
        «Ибтидо» - америкалик муаллиф Ден Браун қаламига мансуб триллер асар бўлиб, Роберт Ленгдон сериясида «Инферно»дан кейинги бешинчи китоб ҳисобланади. Асар воқеалари асосан Испанияда, қисман Дубай ва Будапештда юз беради. 2018 йил Август ойида асар «New York Times»нинг энг яхши сотилган китоблар рўйхатидан биринчи ўринни эгаллади ҳамда 23 ҳафта мобайнида рўйхатдан тушмади.
        `,
        bookPrice : "69 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "6",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/680aef021cb2454116eb738550f81cb02020022015024962143ZW8TLxtWh6.jpg.webp",
        bookName : "Da Vinci Code",
        bookRating : 5,
        bookPage : 376,
        published : 2020,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        "Да Винчи сири” илк бор (2003 йил) савдога чиққан ҳафтанинг ўзидаёқ савдо кўрсаткичи билан “The New York Times” газетасида, “The Wall Street Journal” ва “San-Fransisko” йилномаларида биринчи ўринни, кейинчалик мамлакатдаги энг йирик сотувчилар рейтингида юқори ўринни эгаллаган.`,
        
        bookInfoTwo : `

        Ушбу асар жаҳоннинг 44 тилига таржима қилинган бўлиб, бугунги кунга қадар бутун дунё бўйлаб 81 миллиондан ортиқ нусхада сотилган асар. Фақат угина машҳур рассом Леонардо да Винчи асарларида яширинган сирли кодни аниқлай олади... Ёлғиз у куч-қудрат берувчи диний қадамжолар, муқаддас қадриятларнинг ақл бовар қилмайдиган салоҳиятини англайди... Инсоният асрлар давомида бош қотирган улкан ва сирли жумбоқ калитини танҳо у топиши мумкин... «Да Винчи сири» романида муаллиф ўз ижодий изланишларини, тажрибаларини жамлаб, асар бош қаҳрамони, иконография ва дин тарихи мутахассиси, Гарвард университети профессори Роберт Лэнгдонда акс эттирди.
        `,
        bookPrice : "35 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "7",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/9edcc1391c208ba0b503fe9a225742512022031017552535635uyGcOPkAZE.jpg.webp",
        bookName : "Digital Fortress",
        bookRating : 5,
        bookPage : 480,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "АСТ",
        bookInfo : `
        Автор супербестселлера десятилетия предлагает вам взломать еще один код — сверхсложный, таящий в себе опасность и угрозу для всего мира! Но... кто придумал этот код?!`,
        
        bookInfoTwo : `

        Чего он добивается?! Зачем вступил в безжалостную игру с Агентством национальной безопасности США?! Оружие загадочного врага — всего лишь набор символов и букв. За расшифровку берется лучший криптограф Америки Сьюзан Флетчер. И то, что она обнаруживает, ставит под угрозу не только важнейшие разработки спецслужб США, но и судьбы миллионов людей... С этой секунды на Сьюзан начинается настоящая охота...
        `,
        bookPrice : "159 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "8",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/53c6a98e1c9f8da6f2918b19701a33392020050901130987293LkIasTTzB7.jpg.webp",
        bookName : "Inferno",
        bookRating : 5,
        bookPage : 607,
        published : 2018,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "АСТ",
        bookInfo : `
        Профессор Лэнгдон очнулся в больнице. Последние два дня пропали из его памяти, что дало старт странным событиям… За Лэнгдоном ведется охота. Но почему?`,
        
        bookInfoTwo : `

        Теперь ему предстоит перемещаться из города в город, чтобы спасти свою жизнь, узнать, что же произошло за эти два дня, и разгадать загадку, зашифрованную в «Божественной комедии» Данте, чтобы спасти человечество от надвигающейся беды по имени «Инферно».«Инферно» – четвертая по счету книга о приключениях профессора Роберта Лэнгдона – специалиста по Средневековью
        `,
        bookPrice : "109 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },
  {
    id : "3",
    name : "Mark",
    lastName : "Manson",
    born : 1984,  
    bornDate : 9,
    bornMonth : "March",
    died : 2012,
    diedDate : 5,
    diedMonth : "June",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdIm6hPApyMKPveMUu53NvQgr6clW6a90JttO2WB7X9GAYvlZ",
    desc : "Mark Manson is an American self-help author and blogger. As of 2019 he had authored three books, two of which, The Subtle Art of Not Giving a Fuck, and Everything Is Fucked: A Book About Hope, were The New York Times bestsellers. His books have sold over 13 million copies.",
    jobs : "Mark Manson was raised in Austin, Texas, in the United States.[2] He moved to Boston, Massachusetts to study, and graduated from Boston University in 2007.",
    location : "Остин, США",
    bookObj : [
      {
        bookId : "9",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/6e16656a6ee1de7232164767ccfa79202022042720485117146X2bgyDuYei.jpg.webp",
        bookName : "Beparvolikning nozik san’ati",
        bookRating : 5,
        bookPage : 192,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        "New York Times" бестселлери 6 миллиондан ортиқ нусхада сотилган
        Сўнгги йилларда Мэнсон анча оммалашган блоги орқали ўзимиз ва атрофимиздаги олам ҳақидаги ёлғон тасаввурларимиз ва уларни тўғрилаш ҳақида ёзди.`,
        
        bookInfoTwo : `

        Ниҳоят, у ўзининг аччиқ ҳақиқатларини қўлингиздаги китобга жамлади.
        Ушбу китобда  муаллиф бахтли бўлишнинг калити мудом “ижобий” фикрлашни тўхтатиб, воқеликни тан олиш ва унга тик боришда, деб кўрсатади. “Йиллар мобайнида бизга ижобий фикрлаш – бахтли ва муваффақиятли ҳаётнинг калити, дея уқтириб келдилар. Ортиқ бундай бўлмайди. Ижобийликка тупуринг,” – дейди Марк Мэнсон.
        `,
        bookPrice : "29 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "10",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/698d51a19d8a121ce581499d7b7016682021022718405066509C1CXkjDhKC.jpg.webp",
        bookName : "The Subtle Art of Not Giving a F*ck",
        bookRating : 0,
        bookPage : 191,
        published : 2020,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Бошқа нашриётлар",
        bookInfo : `
        Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее - будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе "Тысяча и один способ быть счастливым", а фото во френдленте создают впечатление, что окружающие живут лучше и интереснее, чем мы.`,
        
        bookInfoTwo : `

        Однако наша зацикленность на позитиве и успехе лишь напоминает о том, чего мы не достигли, о мечтах, которые не сбылись. Как же стать по-настоящему счастливым? Популярный блогер Марк Мэнсон предлагает свой, оригинальный подход к этому вопросу. Его жизненная философия проста - необходимо научиться искусству пофигизма. Определив то, до чего вам действительно есть дело, нужно уметь наплевать на все второстепенное, забить на трудности, послать к черту чужое мнение и быть готовым взглянуть в лицо неудачам и показать им средний палец.
        `,
        bookPrice : "99 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "11",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bd8105c2a.jpg.webp",
        bookName : "Everything Is Fucked",
        bookRating : 5,
        bookPage : 374,
        published : 2019,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Бошқа нашриётлар",
        bookInfo : `
        Популярнейший в мире блогер-скептик Марк Мэнсон продолжает обучать всех желающих «тонкому искусству пофигизма» в своей новой книге с воодушевляющим названием «Все хреново». И несмотря ни на что – это книга о надежде!`,
        
        bookInfoTwo : `

        Никогда еще в человеческой истории мы не жили так хорошо: победили кучу болезней, получили доступ к мировым знаниям и окружили себя комфортом технологий. Однако чем лучше становится жизнь, тем больше мы тревожимся и переживаем. Живем с ощущением, что все хреново. Планета нагревается, экономическое неравенство зашкаливает, политики воруют и врут. Нашей неуверенностью в будущем, отчаянием и надеждой, что все будет нормально, умело пользуются все кому не лень — от маркетологов, впаривающих нам очередную ненужную хрень, до религиозных и политических деятелей. Что же делать?
        `,
        bookPrice : "99 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "12",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a4fd466fcbec6a26185a4fe62885b4b42020120811580885091h8Mv1UDVyE.jpg.webp",
        bookName : "Hammasi rasvo",
        bookRating : 5,
        bookPage : 240,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Muharrir",
        bookInfo : `
        Биз жуда қизиқ даврда яшамоқдамиз. Шу пайтга қадар инсон боласи кўрмаган қулайликларга эгамиз, бой-бадавлатмиз тўрт мучамиз соғ, тинч замондамиз яашаяпмиз, лекин, шундай бўлса-да  кўпчиликни умидсизлик қуршаб олмоқда.`,
        
        bookInfoTwo : `

        Қай биримиз глобал исиш муаммолардан қўрқамиз,  кимлардир ҳукуматдан норози, иқтисодий буҳронлардан таҳликага тушаётганларимиз ҳам сон-саноқсиз. Бу ҳол одамларда қўрқувни,  келажакка умидсизлик кайфиятини, негатив фикрларни туғдирмоқда.
        Мутолаасига киришаётганимиз ушбу китоб айни муаммоларни ечишда бизга ёрдам беради - руҳиятимиздаги ўзгаришларни психологик таҳлил қилади, сиёсий жараёнларга баҳо беришни ўргатади, глобал ўйинлар, бизнес ҳийлалар ҳақида жуда қизиқарли, ҳайратланарли маълумотларни тақдим этади. Хуллас, муаллиф ушбу асари орқали инсонларни умидсизликка, ялтироқ нарсаларга алданмасликка, ҳаётнинг моҳиятини англаб яшашга чақиради.
        `,
        bookPrice : "45 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]    
  },
  {
    id : "4",
    name : "Omina",
    lastName : "Shenliko'g'li",
    born : 1950,  
    bornDate : 1,
    bornMonth : "Jan",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://ziyouz.uz/wp-content/uploads/2019/02/amina-senlikoglu.jpg",
    desc : `Амина Шенликўғлу (Emine Şenlikoğlu) 1950 йил 1 январда Туркиянинг Адапазари шаҳрида туғилган. Асл исми Эмине Ўзжан Шенликўғлу (Emine Özkan Şenlikoğlu) дир
    Оз муддат Қоҳирадаги Ал-Азҳар Университетида ўқиган. 1984 йилдан «Мактуб» (Mektup) журналини чиқаришни бошлаган.
    «Ёшликнинг иймонини сўроқлар билан ўғирладилар» (Gençliğin İmanını Sorularla Çaldılar) китоби учун 8 йилу 3 ой ҳибсда ўтирган.`,
    jobs : "«Маҳкум туйғулар» (Mahkûm Duygular, 1985), «Руҳим ойнаси» (Ruhumun Penceresi, 1991) шеърий тўпламлари, «Мария» (Maria, 1993), «Мен кимнинг қурбониман» (Ben Kimin Kurbanıyım, 1993), «Сўнгги пушмон фойда этар» (Son Pişmanlık Fayda Eder, 1997) романлари, «Йиғлатган йиллар» (Ağlatan Yıllar, 1991) хотира-китоби, «Виждон азоби» (Vicdan Azabı, 1992) тўпламлари машҳур.",
    location : "Istanbul, Turkiya",
    bookObj : [
      {
        bookId : "13",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c1ce30b51.jpg.webp",
        bookName : "Imomning maneken qizi",
        bookRating : 5,
        bookPage : 171,
        published : 2018,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Qaqnus Media",
        bookInfo : `
        Омина Шенликўғли 1953 йилда Туркиянинг Гиресун вилояти, Дарали Анбаралан қишлоғида туғилган. Кичик ёшиданоқ Адабозорига, у ердан эса оиласи билан биргаликда Истанбулга келиб жойлашади.`,
        
        bookInfoTwo : `

        Ёшлик чоғидан турли йўналишлардаги таҳсил билан бир қаторда христианлик дини ва "Инжил" китоби бўйича илмий изланишлар билан шуғалланади. Кейинги йилларда кўпроқ Исломий билимлар олиб, фиқҳ ва ақоидда мустаҳкам билимга эга бўлди. Диний олим ва журналист Ражаб Ўзкан билан турмуш қуриб, икки фарзанднинг онаси бўлади.  Омина Шенликўғли 1985 йилдан бери "Мактуб" номли журналнинг нашр ишлари бошқарувчиси бўлиб ишлаб келмоқда.
        `,
        bookPrice : "25 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "14",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/8dd48d6a2e2cad213179a3992c0be53c2021060416491314436zFM6ZKB5DC.jpg.webp",
        bookName : "Miryám",
        bookRating : 5,
        bookPage : 288,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Сизга “Насроний атиргули”, “Виждон азоби”, “Имомнинг манекен қизи”, “Дор остидаги аёл”, “Жоҳилистон келини” каби асарлари билан таниш бўлган туркиялик адиб Омина Шенликўғлининг яна бир машҳур асарини — “Мария” китобини ўзбек тилида тақдим этмоқдамиз.`,
        
        bookInfoTwo : `

        Бу адибнинг қайси асарини ўқиманг, ҳаммасида инсонни камолотга чорлайдиган, эътиқодни мустаҳкамлайдиган панд-насиҳатларни учратасиз. Айниқса, қўлингиздаги асарни — “МАРИЯ”ни ҳеч бир муболағасиз эътиқод улуғланган буюк обида дейишингиз аниқ. Ушбу асарни адиб ҳаётий воқеа асосида — бош қаҳрамоннинг ҳикояси бўйича ёзган. Асар воқеалари Германия ва Туркияда бўлиб ўтган. Асарнинг асосий қаҳрамони насроний қиз — Мария асар бошида ирқчи ва ҳатто миллатчи шахс сифатида кўзга ташланади. Лекин вақт ўтиши билан бошқа ирқ ва миллат вакиллари ҳам ўзлари каби инсон эканлигини англайди.
        `,
        bookPrice : "49 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "15",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/fb2e203234df6dee15934e448ee889712021122120093310159Ljkt6fzQov.jpg.webp",
        bookName : "Ishqqa yengilmayman",
        bookRating : 5,
        bookPage : 272,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Дунёга келишининг ўзи курашдан иборат бўлган одам боласи то умри охирлагунига қадар мудом икки қутб ўртасида муаллақ яшайди. Қайси томонни танлашига қараб у яхши, ёмон, ноинсоф, виждонли, манфаатпараст, олижаноб шу каби сифатлар билан танилади.`,
        
        bookInfoTwo : `

        Қўлингиздаги асар ҳам инсон қийматини белгилайдиган танлов ҳақида. Бош қаҳрамон - Юнус худосизликдан то Аллоҳни танишгача бўлган йўлга чиқади. Сафар давомида жуда кўп қадриятлари, ишонган ва таянган ҳақиқатларини қайта кўриб чиқади, ўзини таниш изтироби ва лаззатидан баҳраманд бўлади. Онаси ва суйган қизи Асуман унинг ҳаётидаги асосий аёл инсонлардир. Бири Юнусни енгил, аммо худосиз яшашга ундаса, иккинчиси мураккаб, аммо Яратганни таниш ва иймон келтириш бахти билан шарафланган ҳаётга чорлайди.
        `,
        bookPrice : "49 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "16",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/07042ac7d03d3b9911a00da43ce0079a2021100615291775507jRqVXHfC86.jpg.webp",
        bookName : "Mingboshining qizi",
        bookRating : 5,
        bookPage : 224,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Кириллица",
        bookInfo : `
        Мазкур романдаги тасвирланган ҳаёт- миллионлаб одамларнинг кўзимиз ўнгида кечирган ҳаётларидир. Афсуски, керакли ишларни қила олмадик. Айрим халқлар ўз итларининг муаммоларини ҳам дунёга кўтариб чиқишди. Бизлар эса биродарларимизнинг дарду ҳасратларини дунёга эълон қилиш нима эканлигини билишга ҳам қодир бўлолмадик.`,
        
        bookInfoTwo : `

        Ёки воқеаларнинг зиммамизга юклайдиган масъулият кучини "оҳу воҳ"лар билан ўтказиб юбордик. "Мингбошининг қизи" асари ҳақиқий ҳаётдан огоҳлантиришдир. 1996-йили Қоҳирада ёзилган. 10 йилдан сўнг қайта кўриб чиқилган ҳамда мавжуд хатолар тузатилган. Шу даражада ҳаққонийки, ким аниқ қарашни билса, бу ҳаёт узра ҳамон туманларнинг борлигини кўра олади. "Ушбу роман шу қадар ҳақиқатки, агар тарих тўғри ёзилганида эди, унинг дунёга қараш учун юзи бўлмас эди"
        `,
        bookPrice : "45 000 сум",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },
  {
    id : "5",
    name : "Mixail",
    lastName : "Bulgakov",
    born : 1891,  
    bornDate : 15,
    bornMonth : "May",
    died : 1940,
    diedDate : 10,
    diedMonth : "March ",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQHKuqvWAqmst9Bkd0ZOaBu8Dz8H_y3AK2UyOgCc6PoOKsPuSKb6jv_g0NN_ouHdSrV",
    desc : "Mikhail Afanasyevich Bulgakov was a Soviet writer, medical doctor, and playwright active in the first half of the 20th century. He is best known for his novel The Master and Margarita, published posthumously, which has been called one of the masterpieces of the 20th century.",
    jobs : "He is also known for his novel The White Guard; his plays Ivan Vasilievich, Flight (also called The Run), and The Days of the Turbins; and other works of the 1920s and 1930s. He wrote mostly about the horrors of the Russian Civil War and about the fate of Russian intellectuals and officers of the Tsarist Army caught up in revolution and Civil War.",
    location : "Kyiv, Ukraine",
    bookObj : [
      {
        bookId : "17",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5b112ff4b5bb1ff96595eadf48d07ce52020070415161428933kzrjaVcHgE.jpg.webp",
        bookName : "Ityurak",
        bookRating : 5,
        bookPage : 144,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Aksariyat yozuvchilar hayot haqiqatlarini aytishda ramziylikdan foydalanadilar. Bulgakovning mazkur asarini o'qirkanmiz, sho'ro jamiyatining kirdikorlari fantastika tarzida fosh etilganiga guvoh bo'lamiz. Olim Preobrajenskiy itga odam miyasini ko'chirib o'tqazadi va jonivor Sharikov deb nom qo'yilgan odamsifat maxluqqa - ongli, ammo ityurak bir mavjudotga aylanadi.`,
        
        bookInfoTwo : `

        O'sha davrda bu obrazni aslida bolsheviklar '' dohiy''- sining timsoli, deb baholashgan. Hozirgi zamonda esa ''ilm-fan yutuqlari''ning-sun'iy urchitish yo'li bilan turli jonivorlar va hattoki inson klonini yaratishga urunishlarning oqibatida yuzaga keladigan halokat - har xil zombi-yu manqurtlar, mutantlar paydo bo'lishi mumkinligi anglashiladi. Asarni dastlabki mutolaada tushunmaslik va Bulgakov maqsadiga yetb bormaslik tabiiy. Kitobni qayta qo'limizga olarkanmiz, undagi ba'zi obrazlarni atrofimzda ko'ramiz. Kim edig-u, kim bo'ldik yoki kim bo'lamiz- hec bo'lmaganda o'zimizga taftish qilish payti keldi..
        `,
        bookPrice : "25 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "18",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bfe53b0ac.jpg.webp",
        bookName : "Usta va Margarita",
        bookRating : 0,
        bookPage : 384,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "O`zbekiston milliy ensiklopediyasi",
        bookInfo : `
        "Ўзбекистон Миллий Энциклопедияси" нашриёти. 380 бет.`,
        
        bookInfoTwo : `

        Mixail Afanasevich Bulgakov (1891.3(15). 5, Kiev - 1940.10.3, Moskva) — rus yozuvchisi. Kiev universitetining tibbiyot fakultetini tamomlagan (1916). Ilk to‘plami «Iblisnoma»da (1925) jamlangan hajviyoti o‘sha davr matbuotida katta shov-shuvga sabab bo‘ladi. «Oq gvardiya» (1925— 27) tugallanmagan romani mavzui asosida «Turbinlar kuni» pesasini yozadi (1926 yilda sahnalashtirilgan). Bu asarlarida «Qochish» (1926-28; 1957 yilda sahnalashtirilgan) pesasidagi kabi eski rus ziyolilari kayfiyatidagi keskin o‘zgarish, «oqlar» harakati g‘oyasi, muhojirlik yo‘lining samarasizligi aks etgan.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "19",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/89d4402dc03d3b7318bbac10203034ab2022040121100654971aEm38HyUEV.jpg.webp",
        bookName : "Yosh vrach kundaligi",
        bookRating : 5,
        bookPage : 128,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Shifokorda bilim va tajriba uyg‘un bo‘lsagina muvaffaqiyatga erisha oladi. Mixail Bulgakovning «Yosh vrach kundaligi» asarini mutolaa qilar ekansiz, shifokorda ana shu ikki omil bilan birga qatʼiyat, jasorat va o‘z vaqtida to‘g‘ri qaror qabul qila olish ko‘nikmasining shakllanishi birlamchi ahamiyat kasb etishiga amin bo‘lasiz.`,
        
        bookInfoTwo : `

        Asarda XX asr boshida rus jamiyatidagi oddiy odamlar qiyofasi butun bo‘y-basti bilan namoyon bo‘ladi: sodda, ishonuvchan, samimiy. Shuningdek, kamchiliklar ham ro‘y-rost qalamga olingan. Ko‘prik ostida ko‘zi yorigan ayolni shifokor: «Farzandingni dunyoga keltirish uchun shu yerdan boshqa joy topa olmadingmi?» deb koyiganida, ayol: «Dard tutib turganida qaynotam ot-arava bermadi, vrachlik punkti unchalik uzoq emas, piyoda yetib ol», deb aytdi, deya javob beradi. Bu turmush tarzining yigirmanchi asrga xos ko‘rinishlaridan biri edi. Muxtasar aytganda, fan-texnika va axborot texnologiyalari taraqqiyoti virtual va ayni damda soxtakor munosabatlarni avj oldirgan bugungi kunda samimiy munosabatlarga qurilgan ushbu asarni o‘qish kishiga o‘zgacha maroq va kayfiyat beradi!
        `,
        bookPrice : "20 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "20",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bf1b31655.jpg.webp",
        bookName : "Usta va Margarita",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        «Уста ва Маргарита» романи ғаройиб биносининг бунёд этилишида Булгаков истеъдодининг уч тури баб-баравар ёинки деярли баб-баравар хизмат кўрсатди`,
        
        bookInfoTwo : `

        Уларнинг ҳар жиҳатдан чатишиб, ягона дарё оқимига қўшилуви асарнинг энг яхши саҳифаларини ташкил қилганким, бу айни вақтнинг ўзида нафақат романнинг, умуман олганда Булгаков бадиий сўз санъатининг улкан ютуғидир.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },
  {
    id : "6",
    name : "Artur",
    lastName : "Doyl",
    born : 1859,  
    bornDate : 22,
    bornMonth : "May",
    died : 1930,
    diedDate : 7,
    diedMonth : "July",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Conan_doyle.jpg/1200px-Conan_doyle.jpg",
    desc : "Sir Arthur Ignatius Conan Doyle KStJ DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction.",
    jobs : "Doyle was a prolific writer; other than Holmes stories, his works include fantasy and science fiction stories about Professor Challenger and humorous stories about the Napoleonic soldier Brigadier Gerard, as well as plays, romances, poetry, non-fiction, and historical novels.",
    location : "Edinburgh, United Kingdom",
    bookObj : [
      {
        bookId : "21",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/86a1793f65aeef4aeef4b479fc9b2bca2022050416353211659Le8cSbRMpT.jpg.webp",
        bookName : "Baskervillar iti",
        bookRating : 5,
        bookPage : 528,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Китоб",
        bookInfo : `
        Бош қаҳрамони изкувар Шерлок Холмс бўлган детектив жанрдаги «Тўртлар белгиси» (1890), «Баскервиллар ити» (1901 – 1902). «Даҳшатлар водийси» (1914 – 1915) саргузашт қиссалари ва «Шерлок Холмс саргузаштлари» (1891 – 1892), «Шерзо Холмс ҳақида хотиралар» (1892-1893) ҳикоялар тўпламлари деярли бутун жаҳон тилларига таржима қилинган.`,
        
        bookInfoTwo : `

        Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Тўпламда ёзувчининг машҳур изқувар Шерлок Холмсга бағишланган энг сара икки қиссаси ва Конан Дойлнинг ўзи энг яхши асарларидан 3-рақамлиси деб атаган «Раққос одамчалар» асари, шунингдек, бошқа сара ҳикоялари танлаб олинган.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "22",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15be25d83c2.jpg.webp",
        bookName : "Boskom vodiysining siri",
        bookRating : 0,
        bookPage : 160,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Aртур Конан Дойлнинг «Шерлок Холмс ҳақида ҳикоялар»и нафақат Европада, балки бутун дунёга машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу биринчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар ҳаётий далилларга бой ҳикоя ва қиссалари жой олган. «Боском водийсининг сири» ҳикоясидаги сирли воқеалар одамларни даҳшатга солади.`,
        
        bookInfoTwo : `

        Фақат бугина эмас, машҳур изқуварлар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра кичик ҳажмда 3 том кўринишда тўлиқ вариантда чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этмоқчи бўлган тўпламнинг илк томи, яъни сиз кутган ҳикояларнинг дебочасидир. Ўйлаймизки, мазкур тўплам сизга манзур бўлади
        `,
        bookPrice : "25 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "23",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c262944fb.jpg.webp",
        bookName : "Internatda sodir bo‘lgan voqea",
        bookRating : 0,
        bookPage : 160,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Давр-Пресс",
        bookInfo : `
        Артур Дойлнинг "Шерлок Холмс ҳақида ҳикоялар"и нафақат Европада, балки бутун дунёда машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу иккинчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар, ҳаётий далилларга бой ҳикоя ва қиссалари жой олган. Бу тўпламдан ўрин олган "Интернатда содир бўлган воқеа" ҳикоясидаги қизиқ ва ажабтовур воқеалар кишиларни интернетнинг сирларидан воқиф қилгандек гўё.`,
        
        bookInfoTwo : `

        Фақат бугина эмас, машҳур изқуварлар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли ҳаётий саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра, кичик ҳажмдаги 3 та китоб шаклида чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этиб келаётган тўпламнинг иккинчиси, яъни сиз интиқ кутган ҳикояларнинг мантиқий давомидир.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "24",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15be25a3d9a.jpg.webp",
        bookName : "Sherlok Xolms o‘lim to‘shagida",
        bookRating : 5,
        bookPage : 176,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Давр-Пресс",
        bookInfo : `
        Артур Конан Дойлнинг "Шерлок Холмс ҳақидаги ҳикоялари"и нафақат Европада, балки бутун дунёга машҳур. Ва айни пайтда юртимиз китобсеварларига ҳам яхши таниш. Бу учинчи тўпламда ёзувчининг детектив, илмий фантастика, саргузашт воқеалар ҳаётий далилларга бой ҳикоя ва қиссалари жой олган.`,
        
        bookInfoTwo : `

        "Шерлок Холмс ўлим тўшагида" ҳикоясидаги сирли воқеалар одамларни даҳшатга солади. Фақат бугина эмас, машҳур изқувар Шерлок Холмс ва доктор Уотсоннинг қатор жиноятларни фош қилишдаги бир-биридан қизиқарли саргузаштларини мазкур китобдан билиб олишингиз мумкин. Детектив воқеаларга бой мазкур тўплам Сиз азиз китобхонлар илтимосига кўра кичик ҳажмда 3 том кўринишда тўлиқ вариантда чоп этилмоқда. Қўлингиздаги мазкур китоб биз туҳфа этмоқчи бўлган тўпламнинг сўнгги томи, яъни сиз кутган ҳикояларнинг охиридир. Ўйлаймизки, тўплам сизга манзур бўлади. 
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },
  {
    id : "7",
    name : "Ahmad",
    lastName : "Qozonchi",
    born :  1936,  
    bornDate : 5,
    bornMonth : "Aug",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://ziyouz.uz/wp-content/uploads/2019/02/ahmadt-lutfi.jpg",
    desc : "Аҳмад Лутфий Қозончи (Prof. Dr. Ahmet Lütfi Kazancı) 1936 йили Туркиянинг Чурум туманида туғилган. Бошланғич мактабни ва имом-хатиб лицейини шу туманда битирган. 1964 йили Истанбул Олий Ислом институтини муваффақиятли тамомлаб, Чурум, Сиирт, Испарта шаҳар ва туманларида дин хизматларида ишлаган. 1977 йили Бурса Олий Ислом институтига араб тили ва адабиёти бўйича асистент бўлиб ишга кирган. Ҳозир Бурсадаги Улудоғ университетининг Илоҳиёт факултетида Ислом тарихи бўлимида хизмат қилаётир. Профессор.",
    jobs : "Дин тарихига, диний масалаларга, ҳазрати Пайғамбар (с.а.в.) ва саҳобаларининг ҳаётларига бағшланган йигирмадан ортиқ номдаги (30 жилдга яқин) китобларнинг муаллифидир. Булардан ташқари яна тўртта роман ҳам ёзган.",
    location : "Istanbul, Turkey",
    bookObj : [
      {
        bookId : "25",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/044ffea3713f482873e2d5fe094620662020051316451661444gtAsiIJXus.jpg.webp",
        bookName : "Saodat asri qissalari",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Saodat yoʼlining eng ulugʼ va eng soʼnggi rahbari, Olloh taoloning eng sevgili quli va elchisi hazrati Muxammad Mustafo sollallohu alayhi vasallam (s.a.v.) janoblariiing goʼzal, barkamol, oʼrnakli hayotlarini butun borligʼicha aynan tasvirlash, ashobining unga nisbatan muhabbatini, vafodorlik tuygʼularini mukammal koʼrsatish, dushmanlarining kin va hasadga toʼla xatti-harakatlarini toʼlasicha ifodalab berish, fikrimizcha, hech bir insonning qoʼlidan kelmaydi.`,
        
        bookInfoTwo : `

        Masalan, Аbu Bakr hazratlarining Janobi Rasulullohga (s.a.v.) boʼlgan mehr-muhabbati, Аbu Jahldagi kin va hasad ummon kabi cheksiz-chegarasizdir. Hozirga qadar aytilgan gaplar ham, aytilajak gaplar xam shu ummondan bir necha qatradir, xolos.
        Yuz yillarcha davom etgan tussiz, masʼuliyatsiz hayot, bu hayot ichidagi yaxshi-yomon, ibrat olish mumkin boʼlgan eʼtiqod, axloq, odat va anʼanalar... undan keyin ilohiy amr xilpiratgan Tavhid sanjogʼi va haq bilan botil orasida yuzaga kelgan buyuk kurash...
        Qoʼlingizdagi kitob Sarvari anbiyo janoblariniig (s.a.v.) tugʼilishdan to oʼlimlariga qadar kechgan hayotlarini aks ettiradi. Undan keyingi — nubuvvat va risolat vazifasini olgandan to Parvardigoriga qovushgunlariga qadar oʼtgan vaqt «Saodat davri» deyiladi.
        `,
        bookPrice : "249 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "26",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a226e450e214f350856e2980b6e55ac920220224212707842711PD2UOc7G6.jpg.webp",
        bookName : "Hazrati Abu Bakr",
        bookRating : 4.3,
        bookPage : 304,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ushbu kitob orqali siz Nabiy sollallohu alayhi va sallamning suyukli do‘stlari, ulug‘ sahobalardan biri Abu Bakr Siddiq roziyallohu anhuning ibratli hayotlari bilan yaqindan tanishasiz.`,
        
        bookInfoTwo : `

        U zotning Islomni yoyishda Rasululloh alayhissalomga Allohning izni ila ko‘mak berishlari, o‘z davrida sahobalar va keyingilarga o‘rnak bo‘lishlari tahsinga sazovordir. To‘g‘riso‘z va halol bo‘lganliklari uchun “Siddiq” cufatiga munosib ko‘rilgan Abu Bakr roziyallohu anhuning vafotlariga qadar kechgan muhim voqea-hodisalar ushbu kitobning mazmun-mohiyatini tashkil etadi.
        `,
        bookPrice : "89 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "27",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/a87ff679a2f3e71d9181a67b7542122c2021051111123884567MSasAjM5Je.jpg.webp",
        bookName : "So‘nggi to‘fon",
        bookRating : 5,
        bookPage : 208,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Ахмад Лутфи Козончи аввалги асарларида бўлгани син гари «Сўнгти туфон» романида хам мактаб ўқувчиси Хасан ва унинг муштипар онасининг бошидан кечирганлари оркали Аллох хар бир бандасига хамиша мехрибон эканлигини таъкид лайди. Жабрдийда онанинг, бегунох боланинг илтижоси изсиз кетмаслиги Лутфуллох амаки инг улар кўрсатиши оркали гавдалантиради.`,
        
        bookInfoTwo : `

        беминнат мурувват«Сунгги туфон рамзий-мажозий маънони англатади. Роман да Турсунга ўхшаган ёвуз, мехрсиз кимсалар ҳар бир хонадон учун, жамият учун бамисоли гуфон дейилади.Инсонга чукур эхтиром билан битилган «Сунгги туфон» романини ўқиган хар бир кишининг калбини инсоний туйгу дар, уйлар камраб олади.
        `,
        bookPrice : "19 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "28",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/39dcaf7a053dc372fbc391d4e6b5d69320211207223220250207sboQ07Xjr.jpg.webp",
        bookName : "O'gay ona",
        bookRating : 5,
        bookPage : 176,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Янги Аср Авлоди",
        bookInfo : `
        Nega endi o'n sakkizga kirgan, husni odobi beqiyos go'zal bo'lgan qiz ko'plab sovchilar orasida xotini o'lgan ikki bolali erkakni tanlaydi va unga turmushga chiqdi?`,
        
        bookInfoTwo : `

        Ahmad Lutfiy Qozonchining "O'gay ona " asarida mana shu haqida hikoya qilinadi. Butun oilsi, qarindosh-urug'i qizni bu qaroridan qaytarishga urinishadi. Nega aynan ikki bolali erkak. Balki yigitning katta boyligi bordir, balki qiz uni ko'rib yoqtirib qolgandir. Yo'q asl sabab boshqa...
        `,
        bookPrice : "19 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ] 
  },
  {
    id : "8",
    name : "Joanna",
    lastName : "Rouling",
    born : 1965,  
    bornDate : 31,
    bornMonth : "July",
    died : 2013,
    diedDate : 24,
    diedMonth : "May",
    books : 34,
    audio : 13,
    genre : "jahon",
    img : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80",
    desc : "Joanne Rowling CH OBE HonFRSE FRCPE FRSL, also known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote a seven-volume children's fantasy series, Harry Potter, published from 1997 to 2007.",
    jobs : "Born in Yate, Rowling graduated with a degree in French from the University of Exeter in 1987 and began working temp jobs as a bilingual secretary. In 1990, the idea for the characters of Harry Potter came to her while she waited on a delayed train; later that year, her mother died of multiple sclerosis.",
    location : "Yate, United Kingdom",
    bookObj : [
      {
        bookId : "29",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/586f9b4035e5997f77635b13cc04984c2022050413390782248fkpwdXX3zG.jpg.webp",
        bookName : "Garri Potter va afsonaviy tosh",
        bookRating : 5,
        bookPage : 368,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Адабиёт учқунлари",
        bookInfo : `
        Жоанна Кетлин Роулинг: Гарри Поттер ва афсонавий тош`,
        
        bookInfoTwo : `

        Ona tilimizda bitilgan bolalar adabiyotini boyitish ishlariga qo'ldan kelgancha hissa qo'shish maqsadida jahon adabiyotining durdonalari sanaladigan ayrim asarlarni о 'zbek tiliga tarjima qilib borishga ahd qildim va ishni Buyuk Britaniyalik bolalar yozuvchisi Joanna Ketlin Rouling qalamiga mansub yetti qismli «Garri Potter» asaridan boshladim. Ushbu asar juda mashhur bo'lib, ko'plab jahon tillariga tarjima qilinganidan xabaringiz bor, albatta. Shunday ekan, yoshlarimizning o'z zamondoshlaridan ortda qolishiga yo'l qo'yib bo'lmasligi haqida о’ylab, Mariya Viktorovna Spivak tomonidan rus tiliga tarjima qilingan «Garri Potter» romanlar turkumini davlat tilimizga, о'zbek tiliga о'girdim.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "30",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bf0e7d0ab.jpg.webp",
        bookName : "Garri Potter va maxfiy xona",
        bookRating : 5,
        bookPage : 376,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Асарни ўқир экансиз машиналар учадиган, дарахтлар уришадиган, ўргимчаклар гапирадиган, хатлар қичқирадиган ушбу ўқув йилида рўй берган кўплаб ташвишли воқеалар гувоҳи бўласиз... "Адад плюс" МЧЖ. 398 бет.`,
        
        bookInfoTwo : `

        Harry Potter va maxfiy hujra (boshqa nomi Harry Potter va maxfiy xona; inglizcha: Harry Potter and the Chamber of Secrets) ingliz yozuvchisi J. K. Rowling qalamiga mansub fentezi janrdagi roman boʻlib, Harry Potter romanlar turkumining ikkinchi qismidir. Roman voqealari Harryning „Hogwarts jodugarlik va afsungarlik maktabi“dagi ikkinchi yiliga toʻgʻri keladi hamda shu vaqt mobaynida maktab koridorlari devorlarida „maxfiy hujra“ ochiqligi va „Slytherinning merosxoʻri“ barcha oʻquvchilarni oʻldirishi toʻgʻrisida ogohlantiruvchi xabarlar ketma-ketligini oʻz ichiga oladi.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "31",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c04c99683.jpg.webp",
        bookName : "Garri Potter va azkaban mahbusi",
        bookRating : 5,
        bookPage : 432,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Адабиёт учқунлари",
        bookInfo : `
        Жоанна Кетлин Роулинг: Гарри Поттер ва азкабан маҳбуси`,
        
        bookInfoTwo : `

        Sirius Blek ismli hammaga ma'lum jinoyatchi sehrgarlar olamidagi mudhish qamoqxona - Azkabanda o'n ikki yil o'tirdi. O'n uch kishining qotili sifatida ayblangan ushbu mahbusni hamma Lord Voldemortning sadoqatli xizmatkori deb biladi.
        `,
        bookPrice : "29 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "32",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15c167e6240.jpg.webp",
        bookName : "Garri Potter va olov kuboki",
        bookRating : 5,
        bookPage : 720,
        published : 2021,
        bookGenre : "jahon",
        bookSenario : "Tarixiy",
        nashriyot : "Kamalak",
        bookInfo : `
        "Гарри Поттер" романлар туркумининг ушбу қисмида бу йил "Хогварс" да Уч сеҳргар беллашуви бўлиб ўтади. Сеҳргарлар оламида ниҳоятда қизиқарли саналадиган ушбу тадбирда Европадаги учта йирик мактаб: "Хогварс", "Белстек" ва "Дурмштранг" ўқувчилари орасидан саралаб олинган чемпионликка даъвогарлар иштирок этади. Бу беллашувнинг оқибатлари ҳақида эса асарни ўқиш давомида билиб оласиз.`,
        
        bookInfoTwo : `

        Harry Potter va Alanga kubogi (boshqa nomi Harry Potter va Olov kubogi; inglizcha: Harry Potter and the Goblet of Fire) ingliz yozuvchisi J. K. Rowling qalamiga mansub fentezi janridagi roman boʻlib, Harry Potter romanlari turkumiga mansub toʻrtinchi kitobdir. Roman „Hogwarts jodugarlik va afsungarlik maktabi“da toʻrtinchi yil sifatida tahsil olayotgan yosh sehrgar hisoblanmish Harry Potterning Triwizard turnirida ishtirok etishga majbur boʻlganligi bilan bogʻliq voqealar haqida hikoya qiladi.
        `,
        bookPrice : "39 000 so'm",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]  
  },
  {
    id: "9",
    name: "Muhammad Sodiq",
    lastName: "Muhammad Yusuf",
    born: 1952,
    bornDate: 15,
    bornMonth: "Apr",
    died: 2015,
    diedDate: 10,
    diedMonth: "Mar",
    books: 34,
    audio: 13,
    genre: "diniy",
    img: "http://sammuslim.uz/uploads/rasm/1014754656.jpg",
    desc: `1952-yil 15-aprelda Andijon viloyati Asaka tumani, Niyozbotir qishlogʻida tugʻilgan.
    1970-yilda Buxorodagi Mir Arab madrasasiga oʻqishga qabul qilindi. Keyinchalik Toshkent islom institutida tahsil olib, 1975-yilda tamomladi.
    1976-yilda Liviyadagi Islom universitetiga qabul qilindi va 1980-yilda tamomladi.
    1980-1986 yillarda Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi xalqaro aloqalar boʻlimi xodimi va Toshkent islom instituti oʻqituvchisi boʻlgan.
    1986-1989 - Toshkent islom instituti rektori.
    1989-1993 - Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi raisi, Oliy Sovet deputati.
    1993-2001 - Liviyadagi Islom universiteti oʻqituvchisi.
    2001-2015 - Oʻzbekiston musulmonlari idorasi ulamolar kengashi aʼzosi.
    2015-yil 10-mart kuni yurak infarktidan vafot etdi
    `,

    jobs: `1993-2001 - Liviyadagi Islom universiteti oʻqituvchisi.
    qori, tarjimon
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "33",
        bookImg: "https://imgur.com/qmxuZi2.png",
        bookName: "Xilol",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 376,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Қуръонни инсоният учун қиёматгача боқий ҳидоят маёғи, барчани ожиз қолдирувчи баёни ва икки дунё саодатига элтувчи дастурул амал қилиб нозил этган Аллоҳ таолога беадад ҳамду санолар бўлсин!`,

        bookInfoTwo: `

      Қуръонни Роббул оламиндан қабул қилиб олган, уни бутун оламларга омонат ила етказган, ҳам ўқишни, ҳам уқишни ўргатган, ҳаётга тамомила татбиқ этиб кўрсатган севимли Пайғамбаримиз, Аллоҳ таолонинг ҳабиби Муҳаммад Аминга энг пок ва энг юксак салавоту дурудлар бўлсин!
      `,
        bookPrice: "6 000 so’m",
        audioTime: "4:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "34",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Halol-harom_750-500_web-500x750.jpg",
        bookName: "Xalol ochiq oydin Xarom ochiq oydin",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Бандаларига Расулуллоҳ соллаллоҳу алайҳи васалламнинг ҳадисларини Исломнинг иккинчи масдари қилиб берган Аллоҳ таолога битмас-туганмас ҳамду санолар бўлсин!
        Умматларига ҳадис нималигини батафсил тушунтириб, ундаги таълимотлар қандай амалга оширилишини кўрсатиб берган маҳбуб Пайғамбаримиз Муҳаммад Мустафога мукаммал ва батамом салавоту дурудлар бўлсин!`,

        bookInfoTwo: `
        Аммо баъду: «Исломнинг мадори бўлган ҳадислар» деган умумий номдаги силсиламизнинг биринчи қисмида Набий соллаллоҳу алайҳи васалламнинг «Албатта, амаллар ниятларга боғлиқдир» деган ҳадислари хусусида ожизона сўз юритдик. 
        Энди мазкур силсиланинг иккинчи қисмида Расулуллоҳ соллаллоҳу алайҳи васалламнинг «Албатта, ҳалол очиқ-ойдиндир» деган ҳадиси шарифлари ҳақида яна ожизона баҳс қилиш ниятидамиз. Бу ишни Аллоҳ таолонинг Ўзи бизга осон ва равон, файз-баракотли ҳамда унумли ва хайрли қилсин!
      `,
        bookPrice: "15 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "35",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/001_hilol_nashr/001_diniy/baxtiyor-oila-lotin-web-500x750.png",
        bookName: "Baxtiyor oila",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitob Islom dinining oilaviy munosabatlarga oid ahkomlarining keng va batafsil sharhi bo‘lib, musulmon kishi oilaviy hayotga oid bilishi lozim bo‘lgan barcha masalalarni ao‘z ichiga oladi. Kitobda insonga ikki dunyo saodati yo‘lini ko‘rsatib bergan Islom dinining baxtli, saodatli oila qurish, er-xotinning huquqlari, burch va majburiyatlari, ota-onaga, qaynota-qaynonaga munosabat, kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.`,

        bookInfoTwo: `
        Ushbu kitob Islom dinining oilaviy munosabatlarga oid ahkomlarining keng va batafsil sharhi bo‘lib, musulmon kishi oilaviy hayotga oid bilishi lozim bo‘lgan barcha masalalarni ao‘z ichiga oladi. Kitobda insonga ikki dunyo saodati yo‘lini ko‘rsatib bergan Islom dinining baxtli, saodatli oila qurish, er-xotinning huquqlari, burch va majburiyatlari, ota-onaga, qaynota-qaynonaga munosabat, kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "36",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Din_nasixat_500-750-500x750.jpg",
        bookName:
          "Дин насиҳатдир. Беҳуда ишларни тарк қилиш киши исломининг ҳуснидандир",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 176,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиламизнинг биринчи ва иккинчи рисолаларида Мужтаҳид уламолар томонидан Исломнинг мадори деб тан олинган Набий соллаллоҳу алайҳи васалламнинг иккита ҳадиси шарифларини имконимиз борича ўрганган эдик. Ушбу рисолада Аллоҳ таолонинг Ўзидан ёрдам сўраган ҳолимизда аввал бошлаган ишимизни баҳоли қудрат давом эттириш ниятидамиз. Бу ожизона ишимизда Ҳақ субҳанаҳу ва таолонинг Ўзи мададкор бўлсин!`,
        bookInfoTwo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиланинг аввалги икки рисоласида «Албатта, амаллар ниятларга боғлиқдир» ва «Ҳалол очиқ-ойдиндир» ҳадислари ба қадри имкон шарҳ қилинди. Мазкур икки ҳадиси шариф ҳам ўзида мусулмон банда ҳаётининг жуда кўп соҳаларини қамраб олгани учун уларда фиқҳ, руҳий тарбия ва бошқа соҳаларда сўз юритишга тўғри келди. Жамият ҳаётидаги турли ҳолатларга оид масалалар юзасидан баҳслар олиб борилди. Ушбу рисоламиздан ўрин оладиган ва сиз азизлар билан бирга ўрганмоқчи бўлиб турган ҳадиси шарифлардаги баҳс юритиладиган мавзулар аҳамият жиҳатидан аввалги икки ҳадиси шарифнинг савиясига яқин бўлса ҳам, қамров жиҳатидан ҳар бир ҳадиснинг мавзуси билан чекланади. Мисол учун, ушбу рисоладаги биринчи ҳадис насиҳатга, яъни холисликка бағишланган. Бошқалари ҳам шунга ўхшаш.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },






  
  {
    id: "10",
    name: "Imom Abu Homid Muhammad",
    lastName: "ibn Muhammad al-G‘azzoliy",
    born: 1058,
    bornDate: 2,
    bornMonth: "July",
    died: 1111,
    diedDate: 10,
    diedMonth: "March",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://static10.tgstat.ru/channels/_0/e5/e50befff6f58906ba4812c6dc56833cf.jpg",
    desc: `
    "Gʻazzoliy" taxallusi haqida turli fikr bor. Baʼzi olimlar gʻazzol (ip yigiruvchi) oilasida tugʻilgan, shu sababdan Gʻazzoliy taxallusini olgan desa, boshqalari esa Gʻazola (Tus yaqinidagi qishloq)da tugʻilgan, shuning uchun taxallusi Gʻazoliy deb hisoblaydilar. Nishopur (Sharqiy Eron) va Bagʻdodda taʼlim olgan. "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
    `,

    jobs: `
    Gʻazzoliy oʻz asarlarida islom ilohiyotini falsafiy jihatdan asoslashga harakat qilgan. Gʻazzoliy xudoni aql orqali anglash mumkin emas, uni maxsus ruhiy, jismoniy harakatlar — sigʻinish va ibodatlar orqali anglash mumkin deb hisobladi. Sunniylik aqidalarini tasavvuf ideallari bilan birga qoʻshib talqin qilgan. Gʻ. fikricha, insonning Alloh buyurgan amallardan oʻziga maqbulini tanlab olishi oʻz ixtiyo-ridadir, shu bois mazkur xatti-hara-katlari oldindan belgilab qoʻyili-shiga qaramay ular uchun aynan in-sonning oʻzi masʼuldir. Gʻazzoliyga koʻra, jon xudo singari fazodan tashqari-da, olam xudo tomonidan yaratilgan. Gʻ.ning diniy tizimi tasavvufni anʼanaviy islom bilan birlashtirdi. Gʻazzoliy gʻoyalari islom tafakkuriga va oʻrta asr Yevropa falsafasiga taʼsir koʻrsatdi. Gʻazzoliyni zamondoshlari "Hujjat ul-islom" ("Islom dalili") deb ulugʻlashgan.
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "37",
        bookImg:
          "https://hilolnashr.uz/image/cache/catalog/Hilol_Nashr_boshqa/ey-farzand-web-500x750.jpg",
        bookName: "Ey farzand",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `

        «Айюҳал валад» жумласи «Эй фарзанд!» деб таржима қилинади. «Нима учун шогирдга «фарзанд», деб мурожаат қилинмоқда?» деган саволга жавоб шуки, шогирд устозга нисбатан фарзанд мақомидадир. Устоз эса шогирдга нисбатан ота мақомидадир. Буни Имом Ғаззолий ўзининг машҳур «Иҳёу улумиддин» асарида шундай тасдиқлайди: «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "13 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "38",
        bookImg:
          "https://assets.asaxiy.uz/product/items/desktop/90dff152c5d140d9b424846b6efc2bdb2020102712203352028z5YW3HgCEn.jpg.webp",
        bookName: "TAVBA KITOBI",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Jamiki maxluqoti ichra insonni mukarram etib yaratgan, insonlar ichida bizni musulmonlar jumlasidan qilgan Alloh taologa hamdlar bo‘lsin!
        Insonni jaholatdan ma’rifatg‘a. zulmdan adolatga, halokatdan iajotga boshlagan hidoyat elchisi Payg‘ambarimiz Muhammad alayhissalomga durud va salovotlar aytamiz.
        "Odam farzandlarining barchasi ko‘p xato qilguvchidir. Xato qilguvchilarning yaxshisi tavba qiluvchilaridir",- deb marhamat qiladi so‘zlaguvchilarining eng rostgo‘yi Rasululloh sallAllohu alayhi vasallam.
        Demak, xato qilish, adashish bandaga xos tabiat. Undan qochib qutilishning iloji yo‘q.
        `,

        bookInfoTwo: `  
        Jamiki maxluqoti ichra insonni mukarram etib yaratgan, insonlar ichida bizni musulmonlar jumlasidan qilgan Alloh taologa hamdlar bo‘lsin!
        Insonni jaholatdan ma’rifatg‘a. zulmdan adolatga, halokatdan iajotga boshlagan hidoyat elchisi Payg‘ambarimiz Muhammad alayhissalomga durud va salovotlar aytamiz.
        "Odam farzandlarining barchasi ko‘p xato qilguvchidir. Xato qilguvchilarning yaxshisi tavba qiluvchilaridir",- deb marhamat qiladi so‘zlaguvchilarining eng rostgo‘yi Rasululloh sallAllohu alayhi vasallam.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "39",
        bookImg:
          "https://kitobxon.com/img_knigi/3102.jpg",
        bookName: "Qalblar kashfiyot",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
         Farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.`,

        bookInfoTwo: `
        Kelin va kuyov tanlash, aqiyqa, farzand tarbiyasi, silai rahm, taloq, idda va shu kabi ko‘plab dolzarb mavzulardagi ta’limotlari orqali bugungi kunda qator muammolar muhokama qilinadi, oyatlar, hadislar hamda salaf solihlarning hayoti misolida musulmonning baxtli oilaviy hayot dasturi ko‘rsatib beriladi.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "40",
        bookImg:
          "https://olcha.uz/image/340x340/products/S9jLh590TqpVNU7RZz0Hqx7RC1JwLg3ZzBdJrxTRHDkbNvnULtjTxC6Jjeyu.jpeg",
        bookName:
          "Abu homid g'azzoliy",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 176,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиламизнинг биринчи ва иккинчи рисолаларида Мужтаҳид уламолар томонидан Исломнинг мадори деб тан олинган Набий соллаллоҳу алайҳи васалламнинг иккита ҳадиси шарифларини имконимиз борича ўрганган эдик. Ушбу рисолада Аллоҳ таолонинг Ўзидан ёрдам сўраган ҳолимизда аввал бошлаган ишимизни баҳоли қудрат давом эттириш ниятидамиз. Бу ожизона ишимизда Ҳақ субҳанаҳу ва таолонинг Ўзи мададкор бўлсин!`,
        bookInfoTwo: `
        «Исломнинг мадори бўлган ҳадислар шарҳи» деб номланган силсиланинг аввалги икки рисоласида «Албатта, амаллар ниятларга боғлиқдир» ва «Ҳалол очиқ-ойдиндир» ҳадислари ба қадри имкон шарҳ қилинди. Мазкур икки ҳадиси шариф ҳам ўзида мусулмон банда ҳаётининг жуда кўп соҳаларини қамраб олгани учун уларда фиқҳ, руҳий тарбия ва бошқа соҳаларда сўз юритишга тўғри келди. Жамият ҳаётидаги турли ҳолатларга оид масалалар юзасидан баҳслар олиб борилди. Ушбу рисоламиздан ўрин оладиган ва сиз азизлар билан бирга ўрганмоқчи бўлиб турган ҳадиси шарифлардаги баҳс юритиладиган мавзулар аҳамият жиҳатидан аввалги икки ҳадиси шарифнинг савиясига яқин бўлса ҳам, қамров жиҳатидан ҳар бир ҳадиснинг мавзуси билан чекланади. Мисол учун, ушбу рисоладаги биринчи ҳадис насиҳатга, яъни холисликка бағишланган. Бошқалари ҳам шунга ўхшаш.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },










  {
    id: "11",
    name: "Mubashshir",
    lastName: "Ahmad",
    born: 1058,
    bornDate: 2,
    bornMonth: "July",
    died: 1111,
    diedDate: 10,
    diedMonth: "March",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://yt3.ggpht.com/s9C_tQwcccN7PmoZ_1Zme1rWHiFqpPfxUDBXEpsZxV153AscOp6dKgeR7-dk-R8Y9TdqT8DVQAs=s900-c-k-c0x00ffffff-no-rj",
    desc: `
    Mubashshir Ahmad 1974-yil Namangan shahrida tug'ilgan. 1991-1996 yillarda Toshkent islom instituti va Misrdagi “Al-Azhar” universitetlarida ta'lim olgan. “O'zbekiston musulmonlari” (hozirgi “Hidoyat”), “Fikrat” jurnallarida va “Islom nuri” gazetasida xizmat qilgan. 1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "41",
        bookImg:
          "https://assets.asaxiy.uz/product/items/desktop/602d1305678a8d5fdb372271e980da6a2021092616434177567LtzPlZuLQW.jpg.webp",
        bookName: "Olim, odam va olam",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "42",
        bookImg:
          "https://imgur.com/RUdsbVE.png",
        bookName: "Elous sunan",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hanafiy fiqhida oʻzining moʻtabarligi bilan alohida ajralib turadigan kitoblardan biri, hindistonlik mashhur ulamo “Hakimul umma”, yaʼni “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,

        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
        Mazkur kitoblarning taqdimoti 16-aprel kuni soat 11:00 da “Mezana” ilm markazi Yunusobod filialida  boʻlib oʻtadi. Tadbirda loyiha rahbari ustoz Mubashshir Ahmad va tarjimonlar guruhi rahbari ustoz Abdulhodiy Gʻiyos domlalar ishtirok etishad.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "43",
        bookImg:
          "https://imgur.com/0YhMuhg.png",
        bookName: "Ey komil inson",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "44",
        bookImg:
          "https://imgur.com/K5CkKCi.png",
        bookName:
          "Oylada sevgi subhatlari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },








  
  {
    id: "12",
    name: "Abdumannon",
    lastName: "Abdulloh",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/CHuEVn9NTTM/maxresdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "45",
        bookImg:
          "https://imgur.com/J6bNZ2H.png",
        bookName: "Tijorat",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "46",
        bookImg:
          "https://imgur.com/h28NpbI.png",
        bookName: "Nafs tarbiyasi",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hanafiy fiqhida oʻzining moʻtabarligi bilan alohida ajralib turadigan kitoblardan biri, hindistonlik mashhur ulamo “Hakimul umma”, yaʼni “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,

        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
        Mazkur kitoblarning taqdimoti 16-aprel kuni soat 11:00 da “Mezana” ilm markazi Yunusobod filialida  boʻlib oʻtadi. Tadbirda loyiha rahbari ustoz Mubashshir Ahmad va tarjimonlar guruhi rahbari ustoz Abdulhodiy Gʻiyos domlalar ishtirok etishad.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "47",
        bookImg:
          "https://imgur.com/fJ2h0CC.png",
        bookName: "Rasululloh Sollallohu Alayhi Vasallam suhbatdoshlari",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "48",
        bookImg:
          "https://imgur.com/70zfY1F.png",
        bookName:
          "Rasululloh s.a.v ahli ayollari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },





  
  {
    id: "13",
    name: "Alixonto'ra",
    lastName: "Sog'uniy",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://ziyouz.uz/wp-content/uploads/2013/10/alixontora-soguniy.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "49",
        bookImg:
          "https://imgur.com/dNEGnp9.png",
        bookName: "Tarixi Muhammadiy",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
         «Муаллимнинг биринчи вазифаларидан бири мутааллимларга нисбатан шафқатли бўлиш ва уларни ўз фарзандидек кўришдир. Расулуллоҳ соллаллоҳу алайҳи васаллам: «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "50",
        bookImg:
          "https://imgur.com/rQmYjhZ.png",
        bookName: "Rosululloh sollallohu alayhi vasallam suhbatdoshlari",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        Mazkur kitob 22 jilddan iborat boʻlib, unda fiqhiy masalalarning barchasi qamrab olingan. Nashriyotimiz mazkur kitobning toʻrt juzini chop etib, siz azizlarning hukmingizga havola qilish arafasida turibdi.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "51",
        bookImg:
          "https://imgur.com/ollx5ey.png",
        bookName: "Hikmat muminning yoqotkanidur",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "52",
        bookImg:
          "https://imgur.com/xvWYIYF.png",
        bookName:
          "Rasululloh sollallohu alayhi va sallamning to'rt vorisi",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        Bu ezgu niyatingiz amalga oshishi uchun ushbu kitobdan har kuni bor-yo'g'i 15 daqiqa oilangiz davrasida mutolaani yo'lga qo'ysangiz bas.
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },
























  


  
  {
    id: "14",
    name: "Sunatulloh",
    lastName: "Abdulbosit",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/RTA1yGwS6RQ/maxresdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "53",
        bookImg:
          "https://imgur.com/zBfBUuu.png",
        bookName: "Maktuboti Rabboniy",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "54",
        bookImg:
          "https://imgur.com/xY27olM.png",
        bookName: "Avrodi Qur'oniy",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "55",
        bookImg:
          "https://imgur.com/OdG7Tb0.png",
        bookName: "Hanna",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "56",
        bookImg:
          "https://imgur.com/807ej59.png",
        bookName:
          "Gunohi kabiralar",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },








  
  
  
  {
    id: "15",
    name: "Shayx Zulfiqor",
    lastName: "Ahmad Naqshbandiy",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://i.ytimg.com/vi/ikzS9usGC04/hqdefault.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "57",
        bookImg:
          "https://imgur.com/jp98CpY.png",
        bookName: "Ilohiy ishq",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "58",
        bookImg:
          "https://imgur.com/jwL1m9t.png",
        bookName: "Qazo nomozlar oyid masalalar",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "59",
        bookImg:
          "https://imgur.com/7uFxzB4.png",
        bookName: "Hazrati Oisha",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "60",
        bookImg:
          "https://imgur.com/CwFWJtX.png",
        bookName:
          "Seni jannatda kutaman",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },



























  
  
  {
    id: "16",
    name: "Elif",
    lastName: "Shafaq",
    born: 1782,
    bornDate: 2,
    bornMonth: "July",
    died: "Life",
    diedDate: "...",
    diedMonth: "...",
    books: 34,
    audio: 13,
    genre: "Diniy",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Elif_Shafak_photo.jpg",
    desc: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    jobs: `
    1996-yildan hozirgacha Toshkent islom institutida fiqh, usulul fiqh, faroiz va tasavvuf fanlaridan dars berib keladi. "QAQNUS MEDIA" nashriyoti bosh direktori va azon.uz sayti muassisi. Imom G'azzoliyning 8 jildli “Ihyau ulumid-din" kitobi tarjimasiga boshchilik 
    `,

    location: "Toshkent, Uzbekistan",
    bookObj: [
      {
        bookId: "61",
        bookImg:
          "https://imgur.com/G0k2pDX.png",
        bookName: "Yuz haromdan bir halol yaxshi",
        bookRating: 4.1,
        bookGenre: "Diniy",
        bookSenario: "Diniy",
        published: 2020,
        bookPage: 88,
        nashriyot: "Nihol nashr",
        bookInfo: `
        Рисолада мусулмон оилада фарзанд тарбияси учун тавсия қилинган энг тўғри йўллардан бири баён қилинган. Шунингдек, ҳар бир толиби илм ўрганиши керак бўлган илм турлари белгилаб берилган. Шу билан бирга, мударрис ўзида касб қилиши зарур бўлган сифатлар айтиб ўтилган, муаллим ва шогирд орасидаги алоқа қандай бўлиши кераклиги ҳам кенг изоҳлаб берилган`,

        bookInfoTwo: `
        «Мен сизларга ота фарзандига бўлгани кабиман», деганлар. Баъзи ривоятларда: «Ота ўрнида сизларга таълим бераман», деганлар. 
      `,
        bookPrice: "29 000 so’m",
        audioTime: "1:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "62",
        bookImg:
          "https://imgur.com/1QOVmWL.png",
        bookName: "Sharaf",
        bookRating: 4.3,
        bookGenre: "Diniy",
        bookPage: 168,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        “Ummat donishmandi” deya taʼriflangan Shayx Ashraf Ali Tahonaviy rahimahullohning tavsiyasi va nazorati ostida, u zotning shogirdi va jiyani boʻlgan Shayx Zafar Ahmad Usmoniy Tahonaviy tomonidan taʼlif etilgan “Eʼlous sunan” kitobi nashr etildi.
        `,
        bookInfoTwo: `  
        "Nizomiya" madrasasi (Bagʻdod)da islom huquqshunosligidan dars bergan. Mudarrislikdan voz kechib, 11 yil zohidlikda hayot kechirgan, ilm bilan mashgʻul boʻlgan. 1105-yilda Nishopurga kelib, yana madrasada mudarrislik qildi, ammo bu hol uzoqqa choʻzilmadi. Tusga koʻchib borib 300 ga yaqin talabaga xususiy tarzda dars berdi. Uning fiqhga doir "Bosit", "Vojiz", "Vosit", aqidaga doir "Qavoid al-Aqoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin.
      `,
        bookPrice: "15 000 so’m",
        audioTime: "3:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "63",
        bookImg:
          "https://imgur.com/id1L5Pn.png",
        bookName: "Mo'minlarning onalari",
        bookRating: 4.4,
        bookGenre: "Diniy",
        bookPage: 376,
        published: 2021,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Ushbu kitobda arablarning Islomgacha bo'lgan hayotidan tortib fil egalari qissasigacha, Payg'ambarimizning tug'ilishlari: payg'ambarlik alomatlari va bu vaqtga qadar bo'lib o'tgan voqealar;`,

        bookInfoTwo: `
        Muhammad alayhissalomgacha vahiyning kelishi; musulmonlarga azob-uqubatlar yetkazilishi; Isro va Meroj voqeasi; Madinai munavvaraga hijrat; qiblaning o'zgarishi; Ifq hodisasi; Makka fathi; Vidolashuv haji hamda Olamlar sarvarining 
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "64",
        bookImg:
          "https://imgur.com/JzCrn6d.png",
        bookName:
          "Rosululloh sollallohu alayhi vasallam ayollari",
        bookRating: 3.9,
        bookGenre: "Diniy",
        bookPage: 128,
        published: 2022,
        bookSenario: "Diniy",
        nashriyot: "Nihol nashr",
        bookInfo: `
        Hayot ichra oila hayotimiz ham o'tib ketmoqda. Uni huzur-halovatli, mazmunli, maroqli o'tkazish har ota-onaning orzusi.`,
        bookInfoTwo: `
        qoid" ("Aqidalarning qoidalari"), "ar-Risolat al-qudsiya" ("Qudsiya risolasi"), mutasavviflar uchun "Ihya ulum ad-din" ("Diniy ilmlarni tiriltirish"), "Mukoshafat ul-qulub" ("Qalblar kashfiyoti") asarlari mashhur. Shuningdek, "Tahofut al-falasifa" ("Faylasuflarni rad etish"), "Kimyo-i-saodat" ("Saodat kimyosi"), "Maqosid al-falasifa" ("Faylasuflarning maqsadlari") asarlari olim ijodida muayyan oʻrinni egallaydi. Bu asarlarda Forobiy, Ibn Sino, Abu Hayyon atTavhidiy qarashlarining taʼsirini koʻrish mumkin
      `,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
    ],
  },{
    id : "17",
    name : "Allan",
    lastName : "Dib",
    born : 1971,
    bornDate : 5,
    bornMonth : "Sen",
    died : "",
    diedDate : "",
    diedMonth : "",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://i.imgur.com/wO94q60.jpeg",
    desc : "Allan Dib is an Australian serial entrepreneur, business coach and public speaker. He has started and grown numerous businesses in many branches, mostly IT and marketing, with one of them earning a spot on the coveted Business Review Weekly Fast 100 list just four years after being founded. An instant bestseller, “The 1-Page Marketing Plan” is Dib’s only published work so far.",
    jobs : "Allan Dib is an Australian serial entrepreneur, business coach and public speaker. He has started and grown numerous businesses in many branches, mostly IT and marketing, with one of them earning a spot on the coveted Business Review Weekly Fast 100 list just four years after being founded. An instant bestseller, “The 1-Page Marketing Plan” is Dib’s only published work so far.",
    location : "Melbourne, Victoria, Australia",
    bookObj : [
      {
        bookId : "65",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/664dd858db942cad06f24ff25df567162022042720281594396HWiEJBfmvs.jpg.webp",
        bookName : "Bir varaqli marketing reja",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 376,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Diqqat: agar pulni yomon ko'rsangiz, bu kitobni o'qimang.`,

        bookInfoTwo : `
        Muvaffaqiyatli biznes sohibi boʻlish uchun tasodifiy harakatlardan tiyilib, puxta reja asosida ishlash kerak. Odatda marketing reja tuzish murakkab va koʻp vaqt oladigan jarayon. Shu bois aksar ishbilarmonlar unga yetarli vaqt ajratmaydi.

        Oʻzining “Bir varaqli marketing reja” kitobida tadbirkor va marketolog Allan Dib marketing reja qanday qilib oson va tez bitkazishni oʻrgatadi. U birgina sahifaga sigʻadi, toʻqqiz katakdan iborat boʻladi. Uning yordamida siz murakkab marketing rejangizni tuzib, boshlovchidan soha ustasiga aylanishingiz mumkin.
        temuriyiradigan marketing reja tuzishning oson va tezkor usulidir.


        Ushbu yangi kitobda siz quyidagilarni bilib olasiz:

        • Qanday qilib yangi mijozlar topish va mavjudlaridan koʻproq foyda olish;

        • “Katta biznes”larga moʻljallangan marketing kichik va oʻrta biznes strategiyalarini oʻldirishi sabablari;

        • Tom maʼnoda bir sahifali shaxsiy marketing reja tuzishdagi oddiy bosqichli jarayon. Shunchaki kitobni oʻqib, boblar soʻngidagi bir varaqli marketing rejaning kataklarini toʻldirib keting.

        • Qanday qilib raqiblarni yengish va oʻzingizni mijoz uchun yagona tanlovga aylantirish;

        • Qanday qilib toʻgʻridan toʻgʻri javob marketing sirlaridan foydalangan holda, kichik byudjet bilan katta natijalarga erishish;

        • Qanday qilib mahsulot va xizmatlaringizga yuqori narx qoʻyish va mijozlar roziligini olish.
        `,
        bookPrice : "75 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "66",
        bookImg : "https://m.media-amazon.com/images/I/51lnCQrRLyL.jpg",
        bookName : "El Plan de Marketing de 1-Página",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 234,
        published : 2019,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Para crear un negocio exitoso tienes que dejar de hacer acciones aleatorias de marketing y seguir un plan riguroso que garantice el rápido crecimiento de tu empresa. Tradicionalmente, crear un buen plan de marketing ha sido un proceso complejo que consume mucho tiempo, razón por la cual muchos deciden no hacerlo.`,

        bookInfoTwo : `

        En El Plan de Marketing de 1-Página, el emprendedor en serie y mercadólogo rebelde Allan Dib revela un nuevo enfoque en la implementación del marketing que facilita y simplifica la creación de un plan. Es literalmente una sola página dividida en nueve cuadrados. Con ella, tendrás la oportunidad de crear un mapa para así construir un sofisticado plan de marketing y partir desde cero hasta convertirte en un héroe.

        Aunque sólo estés comenzando o si ya eres un emprendedor con experiencia, El Plan de Marketing de 1-Página es la manera más fácil y rápida de crear un plan que impulsará el crecimiento de tu negocio.

        Con este innovador libro descubrirás:

        Cómo conseguir nuevos clientes o prospectos, y cómo ganar más dinero con los que ya tienes.
        Por qué el marketing de los “grandes negocios” puede destruir tu negocio y definir qué estrategias realmente funcionan para pequeñas y medianas empresas.
        Cómo cerrar una venta sin necesidad de acosar a los clientes y sin parecer tener mucha necesidad, dándole la vuelta a la situación para que sean ellos quienes busquen ansiosamente tus servicios.
        Un sencillo proceso paso a paso para crear su propio plan de marketing que consta de una sola página. Simplemente llena cada uno de los cuadros que conformarán tu Plan de Marketing de 1-Página.
        Cómo aniquilar a la competencia y hacer que seas la única opción.
        Cómo conseguir resultados increíbles con un presupuesto pequeño, utilizando los secretos del marketing de respuesta directa.
        Cómo cobrar precios altos por tus productos y servicios, y lograr que tus clientes te lo agradezcan.
        `,
        bookPrice : "32 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "67",
        bookImg : "https://imgur.com/AJ3NriS.png",
        bookName : "Votre plan marketing en 1 page: Gagnez de nouveaux clients en organisant votre plan marketing sur une simple fiche (French Edition)",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2019,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Pour mener votre entreprise au sommet, cessez de gaspiller votre argent dans des actions marketing aléatoires et mettez en place un plan fiable pour une croissance rapide !
        `,

        bookInfoTwo : `
        La création d'un plan marketing est un processus long et difficile, trop souvent négligé. Dans Votre plan marketing en 1 page, Allan Dib vous dévoile comment rédiger votre propre plan, de façon simple et rapide, sur une seule fiche composée de neuf cases à compléter.

        Dans cet ouvrage novateur, vous découvrirez notamment :

        • comment attirer de nouveaux clients, et comment rentabiliser vos clients existants ;

        • comment appliquer une méthode simple, étape par étape, pour créer un plan marketing personnalisé qui tiendra littéralement en une page ;

        • comment balayer la concurrence et devenir la seule solution évidente pour vos clients ;

        • comment obtenir des résultats étonnants avec un budget réduit, grâce aux astuces du marketing direct.

        Que vous soyez décideur marketing, chef d’entreprise débutant ou expérimenté, Votre plan marketing en 1 page est la méthode la plus simple et la plus rapide pour accélérer la croissance de votre entreprise.
        `,
        bookPrice : "225 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "68",
        bookImg : "https://m.media-amazon.com/images/I/51b1SKwrM0L.jpg",
        bookName : "“Il Marketing Plan vincente: Il metodo in una pagina per il vostro successo (Italian Edition)",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 267,
        published : 2017,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Per avviare un’impresa di successo dovete smettere di intraprendere azioni di marketing casuali e iniziare a seguire un piano affidabile per una rapida crescita del business.`,

        bookInfoTwo : `

        Creare un marketing plan è sempre stato considerato un processo difficile, che richiede un grande investimento di tempo, e proprio per questo viene spesso ignorato. In questo libro l’imprenditore seriale, nonché marketer ribelle Allan Dib, illustra un’innovativa tecnica di marketing che permette di creare un marketing plan in modo semplice e veloce. Il risultato è il marketing plan in una sola pagina, suddivisa in nove quadranti da compilare. Nei tre ‘atti’ del libro impariamo a scegliere il mercato di riferimento, a interessare i clienti, a creare il messaggio e convertire i lead in vendite, creando customer experience di alto livello. Alla fine di questo viaggio, ogni operatore di marketing o piccolo imprenditore saprà esattamente come predisporre il miglior marketing plan per il proprio segmento di mercato.
        `,
        bookPrice : "290 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "18",
    name : "Kel",
    lastName : "Nyuport",
    born : 1982,
    bornDate : 5,
    bornMonth : "Okt",
    died : "",
    diedDate : "",
    diedMonth : "",
    books : 24,
    audio : 9,
    genre : "biznes",
    img : "https://kitobman.uz/media/5515a8556bb3f7db5a8e52f6.webp",
    desc : "Kalvin C. Nyuport (1982 yilda tug'ilgan)-amerikalik badiiy bo'lmagan muallif va Jorjtaun universiteti kompyuter fanlari dotsenti.",
    jobs : "Jorjtaun universiteti dotsenti. Dartmut kollejida bakalavr darajasini va Massachusets texnologiya institutida kompyuter fanlari bo‘yicha doktorlik darajasini oldi. Maktab o‘quvchilari va talabalari uchun uchta original maslahatlar to‘plami muallifi: Qanday qilib o‘rta maktab yulduzi bo‘lish, qanday qilib to‘g‘ri talaba bo‘lish va kollejda birinchi bo‘lish (Kollejda qanday g‘alaba qozonish mumkin). Talabalar va bitiruvchilarning muvaffaqiyat hikoyalariga bag'ishlangan mashhur Study Hacks blogini boshqaradi",
    location : "Melbourne, Victoria, Australia",
    bookObj : [
      {
        bookId : "69",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/621fbd17da27241c58015eabe4164a522022042721305642246eQJCATLbnw.jpg.webp",
        bookName : "Diqqat: Chalg‘ituvchi dunyoda muvaffaqiyat sirlari",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 376,
        nashriyot : "Nihol nashr",
        bookInfo : `
        AQSHlik professor Kel Nyuportning «Diqqat: Chalg‘ituvchi dunyoda muvaffaqiyat sirlari» kitobi ilk marotaba o‘zbek tiliga tarjima qilindi. Kitob uchun oldindan buyurtma e’lon qilinmoqda.
        `,

        bookInfoTwo : `
        Ishda, o‘qishda diqqatingizni jamlay olmaysizmi? Doim telegram, instagram va boshqa ijtimoiy tarmoqlar sizni chalg‘itadimi? Demak, AQSHlik professor Kel Nyuportning maslahatlari aynan siz uchun. Diqqatni jamlab, chalg‘imasdan o‘z faoliyati bilan shug‘ullanish muammoga aylangan zamonda professor o‘zining ilmiy asosga ega maslahatlari bilan sizga yordamga keladi.

        Kitobda eng muhim mavzu, keraksiz kichik narsalarga chalg‘imasdan, diqqatni murakkab va muhim vazifalarga jalb qilish haqida yozilgan. Kitobda ta’kidlanishicha zamonaviy dunyoda diqqatini jamlab, bir vazifa ustida ishlay bilgan odamlargina haqiqiy yutuqlarga erisholadi.

        Kitobni o‘qib turib, siz ijtimoiy tarmoqlar, messenjerlarning bizning hayotdagi o‘rni va ahamiyati haqida o‘zingizga savollar berib boshlaysiz.
        `,
        bookPrice : "35 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "70",
        bookImg : "https://cdn1.ozone.ru/multimedia/wc1200/1016798069.jpg",
        bookName : "Bu mahsulot zaxirada yo‘q",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2017,
        bookPage : 320,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Ishga diqqatni jamlay olmaysizmi? Elektron pochta, ijtimoiy tarmoqlar va yangiliklar tasmalarini tekshirish orqali doimo chalg'iyapsizmi? Etakchi IT-mutaxassislardan maslahat olish va boshingiz bilan ishga kirishish vaqti keldi.
        `,

        bookInfoTwo : `
        Eng qimmatli ko'nikmalardan birini o'zlashtiring - arzimas narsalar bilan chalg'imasdan, diqqatni murakkab vazifaga qaratish qobiliyati. Bu murakkab ma'lumotlar bilan shug'ullanish va eng qisqa vaqt ichida eng yaxshi natijalarga erishishning yagona yo'li. Ishga botish bizning 21-asrning tobora raqobatbardosh iqtisodiyotida super kuchdir.
        `,
        bookPrice : "143 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "71",
        bookImg : "https://imgur.com/AJ3NriS.png",
        bookName : "Digital Minimalism",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2019,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Цифровой минимализм строится на утверждении: чем меньше, тем лучше. По отношению к нашим взаимосвязям с цифровыми инструментами — это ключ к фокусу в нашем невероятно шумном мире.
        `,

        bookInfoTwo : `
        С этой книгой вы познакомитесь с цифровыми минималистами, которые испытали чрезвычайно позитивные изменения, безжалостно сокращая свое пребывание онлайн, фокусируясь на небольшом количестве особо ценных для себя дел. Минималисты проводят в интернете намного меньше времени, чем все остальные. Их образ жизни можно посчитать крайностью, но они в ответ возразят: крайность — это то, сколько времени любой другой человек проводит перед экраном.

        Эти люди поняли, что ключ к процветанию в нашем высокотехнологичном мире заключается в том, чтобы тратить на использование технологий минимум времени.
        `,
        bookPrice : "89 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "72",
        bookImg : "https://imgur.com/08kjeAJpg",
        bookName : "How to Become a Straight-A Student",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 227,
        published : 2018,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Most college students believe that straight A’s can be achieved only through cramming and painful all-nighters at the library. But Cal Newport knows that real straight-A students don’t study harder — they study smarter.
        `,

        bookInfoTwo : `
        A breakthrough approach to acing academic assignments, from quizzes and exams to essays and papers, How to Become a Straight — A Student reveals for the first time the proven study secrets of real straight-A students across the country and weaves them into a simple, practical system that anyone can master.

        You will learn how to:
        Streamline and maximize your study time
        Conquer procrastination
        Absorb the material quickly and effectively
        Know which reading assignments are critical—and which are not
        Target the paper topics that wow professors
        Provide A+ answers on exams
        Write stellar prose without the agony

        A strategic blueprint for success that promises more free time, more fun, and top-tier results, How to Become a Straight-A Student is the only study guide written by students for students — with the insider knowledge and real-world methods to help you master the college system and rise to the top of the class.
        `,
        bookPrice : "265 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "19",
    name : "Toni",
    lastName : "Shey",
    born : 1973,
    bornDate : 12,
    bornMonth : "Dec",
    died : "",
    diedDate : "",
    diedMonth : "",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Tony_hsieh.jpg/250px-Tony_hsieh.jpg",
    desc : "Тони Шей “Zappos”га 1999 йилда, компания ташкил топганидан икки ой ўтгач, маслаҳатчи ва инвестор сифатида жалб қилинган. У “Zappos”нинг тўлиқ таркибига 2000 йил қўшилди.Заппос ялпи товарлар савдоси 2000 йилда 1.6 миллион долларни ташкил қилган бўлса, Тони Шей раҳбарлигида 2008 йилга келиб 1 миллиард доллардан ошди.",
    location : "Bridgeport, Connecticut, USA",
    bookObj : [
      {
        bookId : "73",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/ec47a5de1ebd60f559fee4afd739d59b2022031115422626431DicnyEB51t.jpg.webp",
        bookName : "Baxt yetkazish. Milliard dollarlik internet do‘kon tarixi",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 376,
        nashriyot : "Nihol nashr",
        bookInfo : `
        “Zappos” онлайн савдо компаниясини ўзининг корпоратив маданияти, қадриятлари билан ноёб компаниялардан бири саналади, айни шу хусусиятлари туфайли у юқори суръатда ўсди.
        `,

        bookInfoTwo : `
        “Zappos” “Fortune” журналининг 2009 йилда эълон қилган “Ишлаш учун энг яхши компаниялар” рўйхатидаги дебютини юқори рейтинг билан бошлади. Худди шу йили уни «Amazon”  1,2 миллиард доллардан ортиққа сотиб олди.
        “Бахт улашиш” китобида “Zappos” Бош ижрочи директори ва асосчиларидан бири Тони Шей ўзининг бизнесдаги фаолиятини қандай қилиб чувалчанг фермасидан бошлаб, пицца бизнеси, «LinkExchange» ва “Zappos”гача олиб келгани бу борада орттирган тажрибасини ўқувчилар билан ўртоқлашади. Бир нафасда ўқиб чиқиладиган ушбу китоб корпоратив маданият муваффақият калити эканлиги, атрофингиздаги инсонларга бахт улашиш орқали янада бахтлироқ бўлишингиз мумкинлигини кўрсатади. Китоб “New York Times” ҳамда “Wall Street Journal”нинг бестселлер асарлар рўйхатидан жой олган.
        `,
        bookPrice : "75 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "74",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5e15bbfac4092.jpg.webp",
        bookName : "Delivering happiness",
        bookRating : 3,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2019,
        bookPage : 304,
        nashriyot : "Nihol nashr",
        bookInfo : `'
        О том, как Тони Шей стал бизнесменом, начав в девять лет с… фермы по разведению червей.
        `,

        bookInfoTwo : `
        И о тех обстоятельствах, благодаря которым созданная им (несколько позже) компания Zappos была в итоге куплена Amazon за 1.2 миллиарда долларов (а до того Шей продал еще один созданный им бизнес компании Microsoft, тоже за внушительные деньги).

        Это одна из самых веселых и жизнерадостных деловых книг - благодаря писательскому таланту автора, и одна из самых впечатляющих и полезных - благодаря его предпринимательскому гению
        `,
        bookPrice : "149 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "75",
        bookImg : "https://m.media-amazon.com/images/P/B07ZHMQVPX.01._SCLZZZZZZZ_SX500_.jpg",
        bookName : "The Power of WOW",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2019,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        From its birth during the Dot Com Boom in 1999 to its acquisition by Amazon in 2009, Zappos, the customer service company that just happens to sell things online, continues to turn heads with its disruptively entrepreneurial spirit and radically innovative employees. Ever unfolding throughout two decades, Zappos continues to outlive the seemingly inevitable short lifespan of the average corporate company. How do they do it?
        `,

        bookInfoTwo : `
        In The Power of WOW, the essential follow-up to Tony Hsieh's Delivering Happiness, Zapponians from every part of the business share powerful stories and lessons that they have learned in business and life––from delivering empathetic customer service in the face of devastating circumstances to creating a self-organized organizational structure using Market-Based Dynamics and everything in between.

        Fast-paced and filled with authentic, diverse voices, The Power of WOW gives readers an exclusive and immersive understanding of how one company is finding resilience. This glimpse inside the world of Zappos shows how a self-organized company is opening up avenues for passionate individuals to unleash their undiscovered strengths in the workplace and evolve the business from the inside out.
        `,
        bookPrice : "210 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
    ]
  },

  {
    id : "20",
    name : "John G",
    lastName : "Miller",
    born : 1958,
    bornDate : 5,
    bornMonth : "Sen",
    died : "",
    diedDate : "",
    diedMonth : "",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/14746/large_70_14746.jpg",
    desc : "John Miller was born in 1958 in Ithaca, N.Y. His dad, Jimmy Miller, was the Cornell University wrestling coach and a small-town pastor. This is probably why John finds it so natural to coach and teach!",
    jobs : "At 18, John asked 16-year-old, Karen, on a date and they married in June 1980. After being hired by Cargill off the Cornell U. campus to be a “grain trader,” John and Karen lived in three states in five years, finally settling in Minneapolis, MN. In early 1986, John began a new career providing leadership and sales management training to Twin Cities’ corporations from all industries.",
    location : "Ithaca, New York, USA",
    bookObj : [
      {
        bookId : "76",
        bookImg : "",
        bookName : "SOS! Savol ortidagi savol",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 104,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Odamda mas’uliyat hissi bo‘lmasligi aybni birovga to‘nkash, o‘zini jabrdiyda his etib norozi bo‘lish, oxir-oqibat ishni ortga surishga sabab bo‘ladi. Shaxsiy javobgarliksiz hech bir kompaniya yoki inson erkin bozorda muvaffaqiyatli raqobatlashishi, o‘z oldiga qo‘ygan maqsad-vazifalariga erishishi, mukammal xizmat ko‘rsatishi, ajoyib jamoaviy ishda qatnashishi va odamlarni professional o‘stirishi ehtimoldan juda yiroq.
        `,

        bookInfoTwo : `
        Jon G. Millerning fikricha, kompaniyalar jabr ko‘rayotgan bu muammolarni kimnidir ayblash orqali hal qilib bo‘lmaydi. Masalaning chinakam yechimi har birimiz shaxsiy javobgarlikni his etganimizdagina topiladi. Miller o‘zining ushbu kitobida “Nima uchun hammasini biz bajarishimiz kerak?” yoki “Aybdor kim o‘zi?” singari salbiy va noto‘g‘ri berilgan savollar odamlarda mas’uliyat yetishmasligidan darak beradi, deydi. “Vaziyatni yaxshilash uchun nima qila olaman?” yoki “Men qanday hissa qo‘shishim mumkin?” kabi to‘g‘ri savollar esa hayotimiz va jamoamizni ham o‘zgartirib yuboradi.
        `,
        bookPrice : "25 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "77",
        bookImg : "https://m.media-amazon.com/images/P/0399152334.01._SCLZZZZZZZ_SX500_.jpg",
        bookName : "QBQ! The Question Behind the Question",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2004,
        bookPage : 376,
        nashriyot : "Nihol nashr",
        bookInfo : `
        This is a standalone audio CD.
        `,

        bookInfoTwo : `
        This is a quick but deep book that explores the role of personal accountability in one's work and personal life. In his own work experience, Miller found that many people look for others to blame their problems and conflicts on. He proposes that instead of asking who is to blame for the situation, we should ask, "What can I do to improve the situation?" Only by being able to ask this "question behind the question" can we take ownership of the problem and start working toward a solution...
        `,
        bookPrice : "21 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "78",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/41ap-0WZ6FL._SX331_BO1,204,203,200_.jpg",
        bookName : "Outstanding!",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2016,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Every day outstanding organizations do things and promote values that ensure they will retain customers, grow revenues, increase market share, and build their reputations. People in these organizations hold values and take actions-- individually and collectively--that are not always easy or obvious but are fundamentally powerful.
        `,

        bookInfoTwo : `
        Informed by his own commitment to the concept of personal accountability and enlivened by compelling true stories from exceptional organizations, in this insightful and accessible book John Miller identifies the principles and behaviors that distinguish such organizations from the pack and provides readers with ways to integrate them into their own work.

        With its pithy entries that carry significant impact, Outstanding is by turns a playbook, a guide, and an inspiration. It is filled with practical ideas that can--and should--be used every single day by individuals and teams from the boardroom to the stockroom for creating a distinguished organization with which customers and stakeholders will want to work.
        `,
        bookPrice : "225 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "79",
        bookImg : "https://m.media-amazon.com/images/I/51+rP8gEtOL.jpg",
        bookName : "Flipping the Switch.",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 267,
        published : 2005,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        n his bestselling book QBQ! The Question Behind the Question, John G. Miller revealed how personal accountability helps to create opportunity, overcome obstacles, and achieve goals by eliminating blame, complaining, and procrastination. The result? Stronger organizations, more dynamic teams, and healthier relationships.
        `,

        bookInfoTwo : `
        Now Miller takes readers to the next level to show how they can use the power of the QBQ! and personal accountability every day.

        When a light switch is flipped the flow of energy that is released reaches the lightbulb in an instant, bringing it to life. Similarly, asking the right kind of question-a QBQ-is the first step to empowering what Miller calls the Advantage Principles-five essential practices that will lead to a richer experience in every aspect of life:
        `,
        bookPrice : "19 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },

  {
    id : "21",
    name : "Uolter Ayzekson",
    lastName : "Miller",
    born : 1952,
    bornDate : 20,
    bornMonth : "May",
    died : "2012",
    diedDate : "",
    diedMonth : "",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Walter_Isaacson_VF_2012_Shankbone_2.JPG/800px-Walter_Isaacson_VF_2012_Shankbone_2.JPG",
    desc : "Walter Seff Isaacson (born May 20, 1952) is an American author, journalist, and professor. He has been the President and CEO of the Aspen Institute, a nonpartisan policy studies organization based in Washington, D.C., the chair and CEO of CNN, and the editor of Time.",
    jobs : "Born in New Orleans, Louisiana, he attended Harvard University and the University of Oxford as a Rhodes scholar at Pembroke College. He is the co-author with Evan Thomas of The Wise Men: Six Friends and the World They Made (1986) and the author of Kissinger: A Biography (1992), Benjamin Franklin: An American Life (2003), Einstein: His Life and Universe (2007), American Sketches (2009), Steve Jobs (2011), The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution (2014), Leonardo da Vinci (2017) and The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race (2021).",
    location : "New Orleans, Louisiana, U.S.A",
    bookObj : [
      {
        bookId : "80",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/62afaf4f661699d406da07f417694ab02020090113252448908XTd2lc78nx.jpg.webp",
        bookName : "Stiv Jobs",
        bookRating : 4.0,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 104,
        nashriyot : "Nihol nashr",
        bookInfo : `
        «Asaxiy Books» лойиҳасида яна бир ажойиб янгилик. Уолтер Айзексоннинг «Стив Жобс» асари илк маротаба ўзбек тилида чоп этилди.
        `,

        bookInfoTwo : `
        Замонавий дунёнинг энг йирик бизнесменларидан бири, инноватор, Apple компаниясининг асосчиси Стив Жобснинг муваффақият тарихи ҳақида ёзилган ушбу китоб бир неча йил давомида жаҳон даражасидаги бестселлерга айланиб улгурди.
        Китобда сиз отаси ташлаб кетган, онаси рад этган бола қандай қилиб дунёнинг энг катта компаниясига асос солиши тарихини ўрганасиз. Бу оғир табиатли, лекин дунёни ўзгача кўз билан кўра олган, уни ўзгартиришни хоҳлаган, информацион технологиялари революциясига сабабчи бўлган инсоннинг ҳаёти ҳақидаги китобдир.
        `,
        bookPrice : "69 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "81",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/41ebrOdwO3L._SX327_BO1,204,203,200_.jpg",
        bookName : "The Code Breaker",
        bookRating : 5.6,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 376,
        nashriyot : "Nihol nashr",
        bookInfo : `
        A Best Book of 2021 by Bloomberg BusinessWeek, Time, and The Washington Post
        `,

        bookInfoTwo : `
        The bestselling author of Leonardo da Vinci and Steve Jobs returns with a “compelling” (The Washington Post) account of how Nobel Prize winner Jennifer Doudna and her colleagues launched a revolution that will allow us to cure diseases, fend off viruses, and have healthier babies.
        `,
        bookPrice : "23 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "82",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/6a29abdb708700ba95723d29fd9230712021030517571876237cFrOSsF5ry.jpg.webp",
        bookName : "Leonardo Da Vinci",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2020,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Автор книг о Джобсе и Эйнштейне на сей раз обратился к биографии титана Ренессанса – Леонардо да Винчи.
        `,

        bookInfoTwo : `
        Айзексон прежде всего обращает внимание на редкое сочетание пытливого ума ученого и фантазии художника. Свои познания в анатомии, математике, оптике он применял и изобретая летательные аппараты или катапульты, и рассчитывая перспективу в “Тайной вечере” или наделяя Мону Лизу ее загадочной улыбкой. На стыке науки и искусств и рождались шедевры Леонардо. Леонардо был гением, но это еще не все: он был олицетворением всемирного разума, стремившегося постичь весь сотворенный мир и осмыслить место человека в нем.
        `,
        bookPrice : "109 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "83",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/51ZVtaiqUVL._SX328_BO1,204,203,200_.jpg",
        bookName : "Benjamin Franklin",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 267,
        published : 2004,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        In this authoritative and engrossing full-scale biography, Walter Isaacson, bestselling author of Einstein and Steve Jobs, shows how the most fascinating of America's founders helped define our national character.
        `,

        bookInfoTwo: `
        Benjamin Franklin is the founding father who winks at us, the one who seems made of flesh rather than marble. In a sweeping narrative that follows Franklin’s life from Boston to Philadelphia to London and Paris and back, Walter Isaacson chronicles the adventures of the runaway apprentice who became, over the course of his eighty-four-year life, America’s best writer, inventor, media baron, scientist, diplomat, and business strategist, as well as one of its most practical and ingenious political leaders.
        `,
        bookPrice : "19 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },
  {
    id : "22",
    name : "John G",
    lastName : "Miller",
    born : 1813,
    bornDate : 1,
    bornMonth : "July",
    died : "1887",
    diedDate : 20,
    diedMonth : "Mart",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Annenkov.jpg/220px-Annenkov.jpg",
    desc : "Па́вел Васи́льевич А́нненков — русский литературный критик, историк литературы и мемуарист из дворянского рода Анненковых. Старший брат генерала Ивана Анненкова.",
    jobs : "Annenkov was born into a wealthy landowning family in Moscow. He attended the philological faculty of St Petersburg University. In the late 1830s he met Vissarion Belinsky, Alexander Herzen, Mikhail Bakunin and Ivan Turgenev, with whom he became lifelong friends. In the 1840s he went abroad and formed a close relationship with Nikolai Gogol.",
    location : "Москва, Россия",
    bookObj : [
      {
        bookId : "84",
        bookImg : "https://assets.asaxiy.uz/product/main_image/desktop//605f3f06dc83c.png.webp",
        bookName : "Million dollarlik xatolar",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 304,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Қўлингиздаги ушбу китоб айни пайтдаги тадбиркор томонидан ёзилган.
        `,

        bookInfoTwo : `
        Ушбу китоб орқали сиз амалдаги тадбиркорнинг билим ва тажрибаларига эга бўласиз. Албатта, фаолият давомида бизнесни барбод қилишга оид омиллар етарлича топилади. Ушбу китоб сизларни ана шу хатолар билан бирма-бир таништиради. Чунки тадбиркорлик фаолиятини юритаётган инсон ана шу хатоларга дуч келиши аниқ. Шундай экан, ушбу китоб Сизларга яқин кўмакчи бўлади, деб ўйлаймиз
        `,
        bookPrice : "25 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "85",
        bookImg : "https://avatars.mds.yandex.net/get-mpic/1539743/img_id3377776038642248420.jpeg/orig",
        bookName : "Literary memories",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2015,
        bookPage : 713,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Классик русской литературы Федор Михайлович Достоевский обладал характером взрывным.
        `,

        bookInfoTwo : `
        За свою творческую жизнь он нажил, по вине собственной невоздержанности, столько врагов, что, казалось, еще чуть - и негде будет ему печататься. Уже на исходе дней, в 1880 году, писатель стал жертвой очередного скандала. Речь шла о днях его молодости, когда Достоевского после литературного дебюта (а дебютировал он повестью "Бедные люди") приняли в кружок Белинского, где объявили гением.
        `,
        bookPrice : "21 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "86",
        bookImg : "https://cdn1.ozone.ru/s3/multimedia-s/wc1200/6016894360.jpg",
        bookName : "Life and works of Pushkin",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 257,
        published : 2014,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Биография А.С. Пушкина, созданная Павлом Васильевичем Анненковым (1813 —1887), до сих пор считается лучшей, непревзойденной работой в пушкинистике.
        `,

        bookInfoTwo : `
        Встречаясь с друзьями и современниками поэта, по крупицам собирая бесценные сведения и документы, Анненков беззаветно трудился несколько лет. Этот труд принес П.В. Анненкову почетное звание "первого пушкиниста России", а вышедшая из-под его пера биография и сегодня влияет, прямо или косвенно, на положение дел в науке о Пушкине. Без лукавства и домысливания, без помпезности и прикрас биограф воссоздал портрет одного из величайших деятелей русской культуры.
        Для тех, кто делает первые шаги в изучении пушкинского наследия, книга П.В. Аненнкова станет надежной опорой. Для тех же, кто давно и усердно интересуется жизнью и творчеством Пушкина, — "золотым стандартом", с которым сверять свои достижения и лестно, и небесполезно.
        `,
        bookPrice : "34 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "87",
        bookImg : "https://cdn1.ozone.ru/multimedia/wc1200/1000082198.jpg",
        bookName : "Paris letters",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 267,
        published : 2005,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Издание 1983 года. Сохранность хорошая.
        `,

        bookInfoTwo : `
        Под редакцией Б. Ф. Егорова.
        В сборник вошли "Письма из-за границы", "Парижские письма", "Февраль и март в Париже 1848 года" П. В. Анненкова. В приложениях содержатся "Путевые записки", "Записки о французской революции 1848 года" автора, а также статьи И. Н. Конобеевской, В. А. Смирнова о творчестве П. В. Анненкова.
        Содержит иллюстрации.
        `,
        bookPrice : "14 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },
  {
    id : "23",
    name : "Malcolm",
    lastName : "Gladwell",
    born : 1963,
    bornDate : 3,
    bornMonth : "Sen",
    died : "",
    diedDate : "",
    diedMonth : "M",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Malcolmgladwell.jpg/180px-Malcolmgladwell.jpg",
    desc : "Малкольм Гладуэлл (англ. Malcolm Gladwell; род. 3 сентября 1963, Хэмпшир) — канадский журналист, поп-социолог. С 1987 по 1996 год работал журналистом в Washington Post, возглавлял нью-йоркское бюро газеты. С 1996 года является штатным автором культового журнала The New Yorker. Приобрел известность благодаря своим книгам «Переломный момент» (англ. The Tipping Point, 2000), «Озарение» (англ. Blink, 2005), «Гении и аутсайдеры» (англ. Outliers: The Story of Success, 2008) и «Что видела собака» (англ. What the Dog Saw: And Other Adventures, 2009).",
    jobs : "Книги и статьи Малкольма Гладуэлла часто касаются неожиданных последствий исследований в социальных науках и находят широкое применение в научной работе, в частности в областях социологии, психологии и социальной психологии.",
    location : "Hampshire, United Kingdom, Kanada",
    bookObj : [
      {
        bookId : "88",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/8643c8e2107ba86c47371e037059c4b72022042721314581215ZQqQTOB55O.jpg.webp",
        bookName : "Zukkolar va landavurlar",
        bookRating : 5,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 104,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Бу фоний дунё ҳаётини адолатли деб бўлмайди. Негаки, унда пул, ҳокимият, шон-шуҳрат ва омад одамларнинг барчасига тенг тақсимланган эмас. Нега айрим одамларнинг ҳамма нарсаси бор, бошқаларда эса ҳеч вақо йўқ? Омаднинг сабабларини фақат инсоннинг табиат инъом этган шахсий фазилатлари билан боғлаш тўғримикин?
        `,

        bookInfoTwo : `
        Малколм Гладуэлл ҳар доим мутлоқо тасодиф ҳисоблаб келинган муваффақиятларнинг замирида ётган яширин қонуниятларни топган биринчи инсондир. Бу қонуниятлар нега аксарият буюк хоккейчилар фақат январда туғилганлигини ва ҳеч қачон октябрда туғилмаслигини, нима учун математикани осиёлик талабалар бошқалардан кўра осонроқ ўзлаштиришини, нега Нью-Йоркнинг энг обрўли адвокати бўлиш учун албатта яҳудий бўлиш лозимлигини тушунтириб беради. Бу китоб Билл Гейтс, «Битлз» ва Моцарт каби шахсларни нима боғлаб туришини ҳамда улар нега ўз тенгдошларидан ўзиб кетганлигини кўрсатади.

        «Зукколар ва ландавурлар» — «қандай қилиб муваффақиятли инсон бўлиш» бўйича қўлланма эмас. Бу сиз ўзингизга фойдали тарзда фойдаланишингиз мумкин бўлган ҳаёт қонуниятлари оламига завқли бир саёҳатдир.

        Бир неча йил давомида “New York Times” ва “Amazon” бестселлерлари рўйхатидан тушмаган ушбу китобни кўплаб мутахассислар муваффақият ҳақидаги энг жиддий китоб деб талқин этишган.

        Китоб талабаларга, ўқитувчиларга, ўқувчиларга, тадбиркорларга, умуман муваффақият қонунларини кашф этиш, ўз ишида профессионал бўлишни, бирор бир соҳани ўрганишни хоҳлайдиганларга тавсия этилади.
        `,
        bookPrice : "39 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "89",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/5fef3eff51dc719c4a9f565a742d78f220220510202924330048jQot1rYXY.jpg.webp",
        bookName : "Geniuses and outsiders. Why is everything for some and nothing for others?",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2019,
        bookPage : 256,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Жизнь несправедлива. Деньги, власть, слава и успех распределяются среди людей крайне неравномерно. Но почему одним все, а другим ничего? Правильно ли сводить причины успеха только лишь к личным качествам, дарованным природой? Малкольм Гладуэлл первый, кто обнаружил скрытые законы за тем, что всегда казалось исключительно волей случая.
        `,

        bookInfoTwo : `
        Эти законы объясняют, почему выдающиеся хоккеисты рождаются, как правило, в январе и практически никогда в октябре; почему азиатским школьникам математика дается легче, чем другим; почему, чтобы стать престижным нью-йоркским адвокатом, нужно быть евреем. Книга показывает, что есть общего у Билла Гейтса, "Битлз" и Моцарта и почему им удалось переплюнуть сверстников.
        "Гении и аутсайдеры" - не пособие "как стать успешным". Это увлекательное путешествие в мир законов жизни, которые вы можете использовать себе на пользу.
        `,
        bookPrice : "65 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "90",
        bookImg : "https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6071494248.jpg",
        bookName : "Crucial moment",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 343,
        published : 2016,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Как возникает мода? Почему происходит рост и спад уровня преступности? Как книги неизвестных авторов становятся бестселлерами?
        `,

        bookInfoTwo : `
        Каким образом распространяется среди подростков пристрастие к курению? Чтобы понять, как возникает феномен толпы и многие другие массовые явления, характерные для сего­дняшней жизни, надо рассматривать их как эпидемии. Идеи, товары, информация и типы поведения распространяются точно так же, как вирусы.
        `,
        bookPrice : "12 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "91",
        bookImg : "https://cdn1.ozone.ru/multimedia/wc1200/1010248129.jpg",
        bookName : "Insight",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 267,
        published : 2010,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Полицейские расстреляли невинного человека. Специалисты за год исследований не смогли установить поддельность статуи. На пост президента США в 1921 году был избран Уоррен Гардинг — посредственный и незадачливый политик.
        `,

        bookInfoTwo : `
        Почему произошли эти роковые ошибки? Можно ли было избежать их? В своей увлекательной книге «Озарение» Малкольм Гладуэлл, автор бестселлера «Гении и аутсайдеры», анализирует процесс принятия решений. На богатом материале из области искусства, науки, дизайна, медицины, политики и бизнеса он раскрывает закономерности бессознательных решений и анализирует факторы, искажающие этот процесс.
        `,
        bookPrice : "17 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },
  {
    id : "24",
    name : "Henri",
    lastName : "Ford",
    born : 1863,
    bornDate : 30,
    bornMonth : "July",
    died : "1947",
    diedDate : 7,
    diedMonth : "April",
    books : 34,
    audio : 13,
    genre : "biznes",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/220px-Henry_ford_1919.jpg",
    desc : "Henry Ford (July 30, 1863 – April 7, 1947) was an American industrialist, business magnate, founder of the Ford Motor Company, and chief developer of the assembly line technique of mass production. By creating the first automobile that middle-class Americans could afford, he converted the automobile from an expensive luxury into an accessible conveyance that profoundly impacted the landscape of the 20th century.",
    jobs : "Ford was also widely known for his pacifism during the first years of World War I, and later for promoting antisemitic content, including The Protocols of the Elders of Zion, through his newspaper The Dearborn Independent, and the book The International Jew.",
    location : "Springwells Township, Michigan, U.S.A",
    bookObj : [
      {
        bookId : "92",
        bookImg : "https://assets.asaxiy.uz/product/items/desktop/01083da2df15d6ebfe62186418a768632020110619522239966wtsBWUg1qj.jpg.webp",
        bookName : "Mening hayotim",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2021,
        bookPage : 104,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Дунёнинг юзлаб мамлакатларида минглаб марта миллионлаб ададларда нашр этилган бу автобиографик китобни XX асрнинг буюк менежерларидан бири, ишлаб чиқаришда оқим-конвейер йўлини жорий этган, АҚШ автомобиль саноатининг “отаси”, миллиардер Ҳенри Форд ёзган.
        `,

        bookInfoTwo : `
        Форд ҳаётининг тилсимлари, муваффақиятининг сирлари ҳақида кўплаб асарлар битилган. Бу китоб унинг ўзи ёзган, ёрқин, тимсолли, қатъият ва илҳом билан битилган асардир. Форднинг бу ҳаётномаси тарихий қимматидан ташқари, бугун ҳам ислоҳотлар ўтказаётган ва ўз иши ҳамда ҳаётини ижодий ўзгартиришга чоғлаган иқтисодчилар, инженерлар, конструкторлар, руҳшунослар, социологлар, бизнес ташкилотчилари ва раҳбарлари, ҳаётда муваффақиятга эришаман деган ҳар бир одам учун долзарб асардир.
        `,
        bookPrice : "59 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "93",
        bookImg : "https://15.img.avito.st/640x480/12711110315.jpg",
        bookName : "International Jewry",
        bookRating : 4.1,
        bookGenre : "biznes",
        bookSenario : "Biznes",
        published : 2008,
        bookPage : 374,
        nashriyot : "Nihol nashr",
        bookInfo : `
        Предлагаем к продаже легендарную книгу всемирно известного промышленника - Генри Форда «Международное еврейство. Важнейшая проблема мира».
        `,

        bookInfoTwo : `
        Долгое время Генри Форд был ярым антисемитом и сторонником правых взглядов, и даже сотрудничало с Ку-Клукс-Кланом для борьбы с профсоюзом. В этой книге, Форд описывает основные элементы манипуляции евреями разных государственных структур и обычного народа. В последствии эта книга была высоко оценена лично Гитлером, что привело компанию Форда к сотрудничеству с Третьим Рейхом.
        `,
        bookPrice : "16 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },

      {
        bookId : "94",
        bookImg : "https://images-na.ssl-images-amazon.com/images/I/51LmBqSifzL._SX311_BO1,204,203,200_.jpg",
        bookName : "Quotations of Henry Ford",
        bookRating : 5.5,
        bookGenre : "biznes",
        bookPage : 297,
        published : 2006,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        Will be * from US.
        `,

        bookInfoTwo : `
        Used books may not include companion materials, may have some shelf wear, may contain highlighting/notes, may not include CDs or access codes. 100% * *.
        `,
        bookPrice : "87 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      },
      {
        bookId : "95",
        bookImg : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347999186i/7895604.jpg",
        bookName : "The case against the little white slave",
        bookRating : 3.9,
        bookGenre : "mustaqillik",
        bookPage : 80,
        published : 2003,
        bookSenario : "Biznes",
        nashriyot : "Nihol nashr",
        bookInfo : `
        This book was Henry Ford's personal attempt to thwart the public's growing love affair with cigarettes.
        `,

        bookInfoTwo : `
        It features a letter from Ford's friend, inventor Thomas Edison, which reads "Friend Ford, The injurious agent in cigarettes comes principally from the burning paper wrapper. The substance thereby formed, is called "Acrolein." It has a violent action on the nerve centers, producing degeneration of the cells of the brain, which is quite rapid among boys.
        `,
        bookPrice : "65 000 so’m",
        audioTime : "6:23 soat",
        electron : "pdf, epub"
      }
    ]
  },{
    id: "25",
    name: "Maksvell",
    lastName: "Jhon",
    born: 1978,
    bornDate: 5,
    bornMonth: "Aug",
    died: 2006,
    diedDate: 24,
    diedMonth: "May",
    books: 23,
    audio: 13,
    genre: "biznes",
    img: "https://cdn1.ozone.ru/multimedia/wc125/1000081681.jpg",
    desc: `Джон Максвелл - один из ведущих мыслителей, писателей и лекторов по вопросам личностного и корпоративного развития, пользующийся огромной популярностью как в США, так и в других странах. Является автором более десяти книг, среди которых: "Воспитай в себе лидера", "Создай команду лидеров", "Позиция победителя", "Путешествие от успеха к успеху" и другие.`,
    location: "USA, Washington",
    bookObj: [
      {
        bookId: "96",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1014571733.jpg",
        bookName: "Liderstva",
        bookRating: 4.3,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 216,
        bookPage: 376,
        nashriyot: "Nihol nashr",
        bookInfo: `Джон Максвелл, лучший автор бестселлеров по версии New York Times, помогает читателям сделать первый шаг к жизни со смыслом. Все, что для этого нужно, - это сознательность и готовность действовать.`,

        bookInfoTwo: `Джон Максвелл, лучший автор бестселлеров по версии New York Times, помогает читателям сделать первый шаг к жизни со смыслом. Все, что для этого нужно, - это сознательность и готовность действовать. Нельзя изменить мир, если сидеть и ничего не делать. Все великие достижения начинались с первого шага. Иногда он дается легко, иногда - с огромным трудом, но вы должны его сделать, если хотите к чему-то прийти в своей жизни.`,
        bookPrice: "54 000 so'm",
        audioTime: "7:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "97",
        bookImg: "https://cdn1.ozone.ru/multimedia/c360/1037901521.jpg",
        bookName: "Zakon",
        bookRating: 4.5,
        bookGenre: "biznes",
        bookPage: 426,
        published: 2019,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `
        21 закон, который должен соблюдать каждый, кто хочет стать лидером!`,

        bookInfoTwo: `Если вы еще не знакомы с принципами лидерства, эта книга станет для вас трамплином к великому будущему. Если вы уже опытный руководитель, она поможет вам еще больше повысить личную эффективность.

        В каждой главе знаменитый Джон Максвелл раскрывает суть очередного закона лидерства, показывая на примере чужих успехов и неудач, как нужно применять этот закон в своей жизни.`,
        bookPrice: "34 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "98",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1032390560.jpg",
        bookName: "Kak Obrashatsya s Lyudmi",
        bookRating: 3.7,
        bookGenre: "biznes",
        bookPage: 567,
        published: 2020,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Им может овладеть каждый. Максвелл демонстрирует свой безотказный метод, включающий 5 принципов и 5 практических правил, которые позволят вам уверенно устанавливать контакт как с конкретными людьми, так и с целой аудиторией.`,

        bookInfoTwo: `Всемирно признанный эксперт в области лидерства уверен, что если вы хотите добиться чего-то в жизни, вам необходимо научиться контактировать с людьми. Он считает коммуникабельность главным фактором достижения успеха. Вы должны уметь эффективно взаимодействовать с окружающими - и для этого существует искусство общения.`,
        bookPrice: "27 000 so’m",
        audioTime: "6:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "99",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1011666082.jpg",
        bookName: "Uchites u Velikix",
        bookRating: 3.9,
        bookGenre: "biznes",
        bookPage: 206,
        published: 2015,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `А что, если бы вам представилась возможность встретиться с величайшими библейскими персонажами? Какие уроки они могли бы вам преподать? Чему бы вы могли у них научиться?`,

        bookInfoTwo: `А что, если бы вам представилась возможность встретиться с величайшими библейскими персонажами? Какие уроки они могли бы вам преподать? Чему бы вы могли у них научиться? Джон Максвелл целых пятьдесят лет изучал Библию, чтобы написать эту книгу и поделиться со всеми нами историями жизни ее героев, которые участвовали в эпохальных битвах, давали советы могущественным владыкам, а также переносили тяжкие испытания — и в результате полностью преображались духовно, ментально и эмоционально. Истории величайших пророков древности и сейчас могут стать бесценными уроками, способными научить нас лидерству, раскрытию нашей подлинной сущности и духовности.`,
        bookPrice: "34 000 so’m",
        audioTime: "6:34 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "26",
    name: "Brian",
    lastName: " Tracy",
    born: 1944,
    bornDate: 27,
    bornMonth: "November",
    died: 2006,
    diedDate: 24,
    diedMonth: "May",
    books: 11,
    audio: 10,
    genre: "biznes",
    img: "https://images.uznayvse.ru/main_catalog_image/p/images/celebs/brian-tracy_medium.jpg",
    desc: `Мужчина не только создал несколько успешных компаний и умело курирует ими, он также является отличным преподавателем, который, основываясь на собственный опыт, делится с начинающими бизнесменами секретами успеха. Для тех, кто не может посетить его семинары, Брайан написал порядка сорока книг, в которых подробно описаны все советы по саморазвитию, совершенствованию и становлению успешной личности.`,
    location: "USA, New York",
    bookObj: [
      {
        bookId: "100",
        bookImg: "https://kniga.biz.ua/images/goods/big/4157.jpg",
        bookName: "Viydi Iz zoni Komforta",
        bookRating: 4,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2016,
        bookPage: 426,
        nashriyot: "Nihol nashr",
        bookInfo: `Книга № 1 по саморазвитию. Она переведена на 40 языков. Куплено более 1 200 000 экземпляров. С этой книги начался мировой успех Брайана Трейси — одного из ведущих специалистов в мире по личному развитию.`,

        bookInfoTwo: `Галилей когда-то написал: «Человека нельзя ничему научить, можно лишь помочь ему найти это в себе». Практические советы, данные в книге, позволят обнаружить резервы, о которых вы и не подозревали, и правильно определять приоритеты своих дел, грамотно планировать распорядок дня, всегда работать с максимальной отдачей.`,
        bookPrice: "42 000 so'm",
        audioTime: "5:12 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "101",
        bookImg: "https://kniga.biz.ua/images/goods/big/1211.jpg",
        bookName: "Dastijenie Maksimuma",
        bookRating: 4.6,
        bookGenre: "biznes",
        bookPage: 183,
        published: 2017,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Эта книга — для амбициозных людей, желающих ускорить свое продвижение вперед. Брайан Трейси вывел 12 общих законов, которые необходимо помнить каждому, кто хочет взобраться на вершину успеха.`,

        bookInfoTwo: `Вы узнаете, как притягивать к себе нужных людей, ценные идеи и благоприятные возможности, которые помогут вам всегда достигать поставленных целей.`,
        bookPrice: "18 000 so’m",
        audioTime: "3:43 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "102",
        bookImg: "https://kniga.biz.ua/images/goods/big/5881.jpg",
        bookName: "Zrobite Zaraz",
        bookRating: 3.9,
        bookGenre: "biznes",
        bookPage: 337,
        published: 2016,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `У книзі представлено результат більш ніж тридцятирічного вивчення питань ефективного розподілу часу. Вона розповідає про те, як добиватися вирішення складних завдань, виходячи із зони комфорту.`,

        bookInfoTwo: `Люди, що працюють ефективно, дисципліновано вибирають з усіх поставлених перед ними завдань найважливішу. Вони, вміючи змусити себе зїсти жабу, якою б супротивної вона не була, встигають робити значно більше.`,
        bookPrice: "17 000 so’m",
        audioTime: "2:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "103",
        bookImg: "https://kniga.biz.ua/images/goods/big/5504.jpg",
        bookName: "Kak upravlyayut Luchsie",
        bookRating: 4.4,
        bookGenre: "biznes",
        bookPage: 245,
        published: 2015,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Практичное руководство для лидеров и менеджеров, основанное на опыте лучших руководителей.`,

        bookInfoTwo: `Лидерство — критически важный навык, обеспечивающий успех любой компании или отдельного подразделения. В этой книге бизнес-гуру Брайан Трейси предлагает стратегии лучших топ-менеджеров и собственников компаний, которые позволяют им добиваться поразительных результатов на конкурентных рынках.`,
        bookPrice: "47 000 so’m",
        audioTime: "4:14 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "27",
    name: "Barrall",
    lastName: "Irene",
    born: 1944,
    bornDate: 27,
    bornMonth: "November",
    died: 2006,
    diedDate: 24,
    diedMonth: "May",
    books: 11,
    audio: 10,
    genre: "biznes",
    img: "http://www.pearsonlongman.com/lifestyle/images/Irene-Barrall.png",
    desc: `Irene Barrall has enjoyed a successful career as a teacher, author and teacher trainer and has worked in a variety of interesting countries.  Prior to teaching, she gained valuable business insight through her work in marketing and banking. Publications for Pearson include the award winning Intelligent Business series and the Lifestyle series. She has also written material for electronic media and graded readers as well as prize winning fiction and is a school governor in charge of literacy development.`,
    location: "India, Dehli",
    bookObj: [
      {
        bookId: "104",
        bookImg: "https://cdn1.ozone.ru/multimedia/c360/1009455070.jpg",
        bookName: "Intelligent Bussiness",
        bookRating: 4.5,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2009,
        bookPage: 333,
        nashriyot: "Nihol nashr",
        bookInfo: `Topic-based Coursebook provides an accessible introduction to key concepts in today's business world;
        Informative and up-to-date authentic material from the Economist;`,

        bookInfoTwo: `Topic-based Coursebook provides an accessible introduction to key concepts in today's business world;
        Informative and up-to-date authentic material from the Economist;
        Fully benchmarked alongside the Cambridge ВЕС exam suite and Common European Framework;
        Workbook with extensive exam practice and ВЕС Preliminary Practice Test;
        Thorough writing support in dedicated Style Guide booklet.`,
        bookPrice: "56 000 so'm",
        audioTime: "7:12 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "105",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1008841723.jpg",
        bookName: "LifeStyle",
        bookRating: 4.3,
        bookGenre: "biznes",
        bookPage: 232,
        published: 2011,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Lifestyle is designed to meet the everyday language requirements of people who need English for work, travel and socializing. As well as dealing with how people communicate at work, it also helps learners interact effectively outside of the work environment, enabling them to 'get things done' in a variety of situations.`,

        bookInfoTwo: `- Functional language is presented in a cross-cultural context helping learners to build successful business and social relationships and avoid communication breakdown.
        - Built on a solid syllabus of grammar, vocabulary, speaking and listening, the course is straightforward and easy to use with clear learning aims.
        - Regular Review units recycle language throughout the course.Lifestyle Elementary Coursebook/CD-Rom Pack`,
        bookPrice: "24 000 so’m",
        audioTime: "4:43 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "106",
        bookImg: "https://kniga.biz.ua/images/goods/big/5881.jpg",
        bookName: "Zrobite Zaraz",
        bookRating: 3.9,
        bookGenre: "biznes",
        bookPage: 337,
        published: 2016,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `У книзі представлено результат більш ніж тридцятирічного вивчення питань ефективного розподілу часу. Вона розповідає про те, як добиватися вирішення складних завдань, виходячи із зони комфорту.`,

        bookInfoTwo: `Люди, що працюють ефективно, дисципліновано вибирають з усіх поставлених перед ними завдань найважливішу. Вони, вміючи змусити себе зїсти жабу, якою б супротивної вона не була, встигають робити значно більше.`,
        bookPrice: "17 000 so’m",
        audioTime: "2:23 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "107",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1032390560.jpg",
        bookName: "Kontakt",
        bookRating: 4.7,
        bookGenre: "biznes",
        bookPage: 345,
        published: 2009,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Им может овладеть каждый. Максвелл демонстрирует свой безотказный метод, включающий 5 принципов и 5 практических правил, которые позволят вам уверенно устанавливать контакт как с конкретными людьми, так и с целой аудиторией.`,

        bookInfoTwo: `Им может овладеть каждый. Максвелл демонстрирует свой безотказный метод, включающий 5 принципов и 5 практических правил, которые позволят вам уверенно устанавливать контакт как с конкретными людьми, так и с целой аудиторией.


        Начните прямо сегодня использовать мастерство общения для улучшения личных и профессиональных отношений!`,
        bookPrice: "47 000 so’m",
        audioTime: "4:14 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "28",
    name: "Djosh",
    lastName: "Kaufman",
    born: 1982,
    bornDate: 23,
    bornMonth: "Septemner",
    died: "",
    diedDate: "",
    diedMonth: "",
    books: 22,
    audio: 12,
    genre: "biznes",
    img: "https://www.mann-ivanov-ferber.ru/assets/images/authors/joshkaufman/photo.jpg",
    desc: `Джош Кауфман — известный американский бизнес-тренер и автор международного бестселлера «Сам себе MBA», переведенного на 12 языков. Джош сознательно отказался от классического бизнес-образования и разработал уникальный многодисциплинарный подход к обучению, который помог миллионам читателей по всему миру изучить основные бизнес-концепции самостоятельно, а потенциальным студентам — сэкономить миллионы долларов на оплату малоэффективного обучения`,
    location: "USA California",
    bookObj: [
      {
        bookId: "108",
        bookImg:
          "https://s1.livelib.ru/boocover/1001429108/200x305/b0bf/boocover.jpg",
        bookName: "Sam Sebe MBA",
        bookRating: 4.1,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2015,
        bookPage: 464,
        nashriyot: "Nihol nashr",
        bookInfo: `Книга больше для начинающих практиков малого и среднего бизнеса. Надеюсь пригодится аналитикам для понимания как работает бизнес.`,

        bookInfoTwo: `Если коротко пробежаться, то в упрощенном формате автор рассказывает (или пересказывает) тот курс, который некоторые проходили пять лет. Здесь не будет заумных анализов маржинальности, раскладки на атомы движения денежных потоков - все просто и доступно, для того чтобы сделать акцент на важных процессах - маркетинг, продажи, контроль финансов, создание ценности, принятие решений и конечно же работа с людьми.`,
        bookPrice: "44 000 so'm",
        audioTime: "6:43 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "109",
        bookImg:
          "https://s1.livelib.ru/boocover/1002965105/200x305/9d8e/boocover.jpg",
        bookName: "Kak nauchitsya chemu ugodno",
        bookRating: 3.6,
        bookGenre: "biznes",
        bookPage: 384,
        published: 2019,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Автор книги, Джош Кауфман, утверждает, что за 20 часов правильно организованных занятий можно научиться любому делу. Лучшее доказательство тому — он сам.`,

        bookInfoTwo: `Лучшее доказательство тому — он сам. Самоучка, не получивший классического бизнес-образования, Джош — успешный предприниматель, выдающийся бизнес-тренер, основатель и руководитель интернет-проекта PersonalMBA.com. Разработанный им метод универсален. Хотите изучить иностранный язык, сочинить роман, написать портрет, открыть собственное дело или освоить азы управления самолетом? Потратьте на обучение всего 20 часов, и вы будете потрясены результатами.`,
        bookPrice: "33 000 so’m",
        audioTime: "4:18 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "110",
        bookImg:
          "https://s1.livelib.ru/boocover/1004565895/200x305/8876/boocover.jpg",
        bookName: "How to Fight a Hydra",
        bookRating: 3.6,
        bookGenre: "biznes",
        bookPage: 432,
        published: 2018,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Вы можете посоветовать похожие книги по сюжету, жанру, стилю или настроению. Предложенные вами книги другие пользователи увидят здесь, в блоке «Похожие книги». Посоветовать книгу`,

        bookInfoTwo: `Вы можете посоветовать похожие книги по сюжету, жанру, стилю или настроению. Предложенные вами книги другие пользователи увидят здесь, в блоке «Похожие книги».`,
        bookPrice: "25 000 so’m",
        audioTime: "3:16 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "111",
        bookImg:
          "https://s1.livelib.ru/boocover/1006844263/200x305/e2b6/boocover.jpg",
        bookName: "Vot ono Schastye",
        bookRating: 3.5,
        bookGenre: "biznes",
        bookPage: 543,
        published: 2021,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Ирландский прозаик и драматург Найлл Уильямс известен  у себя на родине и за ее пределами. Спектакли по его пьесам с успехом идут на театральных сценах; романы, начиная с дебютных "Четырех писем о любви", становятся бестселлерами и переводятся на многие языки.`,

        bookInfoTwo: `Для меня это первая встреча с его творчеством, за которую спасибо Шаши Мартыновой и Фантому. В такой последовательности: все, что переводит Шаши обязательно к прочтению, фантомовские книги желательны. "Вот оно счастье" - это, в общем, не о счастье. Мучительная болезнь и смерть мамы  рассказчика, смерть любимой женщины его друга, постепенное старение и дряхление бабушки с дедом,  распад сельской общины, который влечет за собой безусловное благо электрификации.…`,
        bookPrice: "47 000 so’m",
        audioTime: "4:14 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "29",
    name: "Kreynston",
    lastName: "Krinstensen",
    born: 1952,
    bornDate: 6,
    bornMonth: "Aprel",
    died: 2020,
    diedDate: 23,
    diedMonth: "January",
    books: 25,
    audio: 14,
    genre: "biznes",
    img: "https://www.mann-ivanov-ferber.ru/assets/images/authors/joshkaufman/photo.jpg",
    desc: `Клейтон Кристенсен родился 6 апреля 1952 года в Солт-Лейк-Сити, штат Юта, и был вторым из восьми детей Роберта М. Кристенсена (1926–1976) и его жены Верды Мэй Кристенсен (урожденная Фуллер; 1922–2004). Вырос в районе Роуз-Парк в Солт-Лейк-Сити и учился в Западной средней школе, где был президентом студенческого сообщества. Кристенсен, его братья и сестры воспитывались как члены Церкви СПД. Будучи высоким (2.03 м), Кристенсен был заядлым баскетболистом, и играл на позиции центрового в студенческой баскетбольной команде во время учебы в Оксфордском университете.`,
    location: "USA New Jercy",
    bookObj: [
      {
        bookId: "112",
        bookImg:
          "https://assets.asaxiy.uz/product/items/desktop/5e15c26930ab2.jpg.webp",
        bookName: "Strategiya Jizni",
        bookRating: 4.6,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2018,
        bookPage: 543,
        nashriyot: "Nihol nashr",
        bookInfo: `Книга, которую вы держите в руках, - о жизни. О такой жизни, о которой можно только мечтать. О такой жизни, которую вы можете прожить. Давайте услышим Клейтона Кристенсена! Давайте прочитаем его книгу как инструкцию! Давайте, наконец, займемся тем, что так давно откладывали, - стратегией собственной жизни!`,

        bookInfoTwo: `Почему так часто погоня за должностями и зарплатами не приносит счастья? Почему близкие не понимают нас? Почему цели, к которым мы стремимся, часто не приносят ничего, кроме разочарования? Эти и многие другие вопросы возникли у гуру менеджмента Клейтона Кристенсена после нескольких встреч выпускников Гарвардской школы бизнеса. Он обнаружил, что за внешними атрибутами успеха большинство его коллег глубоко несчастны. Но почему же эти умные люди, разрабатывающие стратегии огромных корпораций, не справились со стратегией своей жизни? Вместо того чтобы давать готовые советы, Кристенсен и его соавторы предлагают нам использовать известные теории менеджмента, которые очень просто спроецировать на свою жизнь. На примере известных компаний в книге показано, какие ошибки мы совершаем, неправильно распределяя свои ресурсы. Авторы рассматривают все стороны жизни, от которых зависит наше счастье.`,
        bookPrice: "43 000 so'm",
        audioTime: "8:43 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "113",
        bookImg:
          "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/c/o/cover_1_1_145.jpg",
        bookName: "Diplom Innovatora",
        bookRating: 4.2,
        bookGenre: "biznes",
        bookPage: 412,
        published: 2017,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Предлагаем вашему вниманию книгу «Дилема інноватора. Як нові технології нищать сильні компанії» на украинском языке от издательства «Yakaboo Publishing»!`,

        bookInfoTwo: `В начале каждой великой идеи — не меньшее вдохновение. Каким был бы наш мир без упавшего на Ньютона яблока? Теперь сложно сказать. Но сегодня нам бы точно не хватало технологий Apple, автомобилей Tesla и товаров с Amazon.com. К появлению этих вещей имеет отношение книга «Дилема інноватора», однажды попав в руки Джобсу, Маску, Безосу и многим другим выдающимся людям, идеи которых сегодня задают темп и направление миру.`,
        bookPrice: "37 000 so’m",
        audioTime: "4:22 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "114",
        bookImg:
          "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/5/7/577884_front_1.png",
        bookName: "Kak uluchshit svoy Biznes",
        bookRating: 4.4,
        bookGenre: "biznes",
        bookPage: 532,
        published: 2012,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Вы можете посоветовать похожие книги по сюжету, жанру, стилю или настроению. Предложенные вами книги другие пользователи увидят здесь, в блоке «Похожие книги». Посоветовать книгу`,

        bookInfoTwo: `Вы можете посоветовать похожие книги по сюжету, жанру, стилю или настроению. Предложенные вами книги другие пользователи увидят здесь, в блоке «Похожие книги».`,
        bookPrice: "25 000 so’m",
        audioTime: "3:16 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "115",
        bookImg:
          "https://img.yakaboo.ua/media/catalog/product/cache/1/image/546x/c239772940bfb0468bd568cd18249fe5/4/4/444962",
        bookName: "Life Swap",
        bookRating: 3.9,
        bookGenre: "biznes",
        bookPage: 212,
        published: 2007,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Ирландский прозаик и драматург Найлл Уильямс известен  у себя на родине и за ее пределами. Спектакли по его пьесам с успехом идут на театральных сценах; романы, начиная с дебютных "Четырех писем о любви", становятся бестселлерами и переводятся на многие языки.`,

        bookInfoTwo: `Для меня это первая встреча с его творчеством, за которую спасибо Шаши Мартыновой и Фантому. В такой последовательности: все, что переводит Шаши обязательно к прочтению, фантомовские книги желательны. "Вот оно счастье" - это, в общем, не о счастье. Мучительная болезнь и смерть мамы  рассказчика, смерть любимой женщины его друга, постепенное старение и дряхление бабушки с дедом,  распад сельской общины, который влечет за собой безусловное благо электрификации.…`,
        bookPrice: "19 000 so’m",
        audioTime: "2:14 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "30",
    name: "Feris",
    lastName: "Timmoti",
    born: 1977,
    bornDate: 2,
    bornMonth: "May",
    died: "",
    diedDate: "",
    diedMonth: "December",
    books: 54,
    audio: 33,
    genre: "biznes",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/TimFerriss.jpg",
    desc: `В апреле 2007 года издательство Random House выпустило книгу об эффективном управлении собственным временем «The 4-Hour Workweek», её полное название на русский переводится примерно как: «Как работать по 4 часа в неделю, не торча в офисе „от звонка до звонка“, и при этом жить где угодно и богатеть». В этой книге автор рассказывает, как управлять собой и эффективно делегировать рабочие и домашние задачи, а также избегать информационной перегрузки, разработав свой собственный «стиль жизни».[8] Также он выступает за наём виртуальных помощников из развивающихся стран, таких как Индия.`,
    location: "USA New York",
    bookObj: [
      {
        bookId: "116",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-2/wc1200/6223999346.jpg",
        bookName: "Kak Rabotat 4 chasa v nedelyu",
        bookRating: 4.1,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2022,
        bookPage: 324,
        nashriyot: "Nihol nashr",
        bookInfo: `Книга рассказывает о секретах «новых богатых» — представителей новой субкультуры, которые отказались от «синдрома отложенной жизни» и научились вести роскошную жизнь «здесь и сейчас», управляя своим временем и большую часть жизни путешествуя по свету.`,

        bookInfoTwo: `увеличить свой доход в десятки раз;
        отказаться от традиционной карьеры в пользу коротких периодов энергичной работы, чередующихся с длинными отпусками;
        отдать на аутсорсинг неприятную часть жизни, а в сэкономленное время делать то, что хочешь.
        управлять бизнесом из любой точки мира.`,
        bookPrice: "76 000 so'm",
        audioTime: "4:21 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "117",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-0/wc1200/6122006088.jpg",
        bookName: "Instrumenti gigantov",
        bookRating: 3.6,
        bookGenre: "biznes",
        bookPage: 215,
        published: 2019,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `На протяжении двадцати лет Тим Феррис, автор бестселлера «Как работать по 4 часа в неделю», коллекционировал приемы и секреты повышения продуктивности тех выдающихся людей, с которыми ему доводилось встречаться, от успешных предпринимателей и спортсменов мирового класса до всемирно известных писателей и звезд шоу-бизнеса.`,

        bookInfoTwo: `Как находить и тестировать новые бизнес-идеи по технологии легендарного предпринимателя и инвестора Кремниевой долины Марка Андреессена.
        Как подобрать простые утренние ритуалы, которые помогут вам начать новый день.
        Как превращать слабости и недостатки в преимущества и достоинства по методике режиссера и продюсера Роберта Родригеса, прозванного «голливудским волшебником».`,
        bookPrice: "102 000 so’m",
        audioTime: "3:22 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "118",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-8/wc1200/6090457172.jpg",
        bookName: "Vixodnie vsyu nedelyu",
        bookRating: 4,
        bookGenre: "biznes",
        bookPage: 707,
        published: 2015,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Рикардо Семлер. "ВЫХОДНЫЕ ВСЮ НЕДЕЛЮ. Бросая вызов традиционному менеджменту" / Мягкая обл, 240 стр./ Продолжение культового бестселлера "Маверик. История успеха самой необычной компании в мире". Эта книга стала предтечей супербестселлера Тимоти Ферриса "Как работать по 4 часа в неделю". Р. Семлер рассказывает о том, как его компании удалось добиться успеха, нарушив практически все принципы традиционного менеджмента и поставив свободу сотрудников выше корпоративных целей.`,

        bookInfoTwo: `Тимоти Феррис. "КАК РАБОТАТЬ 4 ЧАСА В НЕДЕЛЮ и при этом не торчать в офисе "от звонка до звонка", жить где угодно и богатеть" / Тверд. переплет, 424 стр./ Второе издание супербестселлера содержит более 100 новых ресурсов, инструментов и "фишек" для тех, кто хочет работать по 4 часа в неделю и рассказывает о секретах "новых богатых", которые отказались от "синдрома отложенной жизни" и научились вести жизнь "здесь и сейчас".`,
        bookPrice: "245 000 so’m",
        audioTime: "3:47 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "119",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6230015693.jpg",
        bookName: "7 Navikov",
        bookRating: 34.4,
        bookGenre: "biznes",
        bookPage: 312,
        published: 2022,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Легкий стиль, ненавязчивый рассказ о проблемах «взрослого» мира, в который вступает подросток, и о способах их решения, много юмора, отличные стильные иллюстрации. По нашему мнению, это лучшая книга по практической психологии для тинэйджеров.`,

        bookInfoTwo: `«В отличие от моих книг, книга моего сына Шона обращается напрямую к тинейджерам, она легко написана и очень привлекательна визуально (и, Боже мой, Шон, я никогда не думал, что ты услышал хоть слово из того, что я тебе говорил). Пусть это прозвучит пристрастно, но это замечательная книга, ее обязательно нужно прочесть!» (Стивен Кови, автор книги «7 навыков высокоэффективных людей»)`,
        bookPrice: "87 000 so’m",
        audioTime: "4:14 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "31",
    name: "Godin",
    lastName: "Set",
    born: 1960,
    bornDate: 10,
    bornMonth: "June",
    died: "",
    diedDate: "",
    diedMonth: "",
    books: 69,
    audio: 37,
    genre: "biznes",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Seth_Godin_in_2009.jpg/399px-Seth_Godin_in_2009.jpg",
    desc: `В 1982 году Сет окончил Университет Тафтс с ученой степенью в области информатики и философии. Позже его обвиняли в использовании лазейки в системе обучения, потому что он пропускал сложные занятия по инженерным дисциплинам в пользу уроков по философии. Степень магистра делового администрирования (MBA) по маркетингу Сет получил в Стенфордской Бизнес Школе. С 1983 по 1986 год он работал бренд-менеджером в «Spinnaker Software». Некоторое время Сет непрерывно ездил из Калифорнии в Бостон и обратно, чтобы работать на двух своих работах и одновременно получить степень магистра.`,
    location: "USA New York",
    bookObj: [
      {
        bookId: "120",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1005803129.jpg",
        bookName: "Fioletovaya KArova",
        bookRating: 4.5,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2011,
        bookPage: 524,
        nashriyot: "Nihol nashr",
        bookInfo: `Вам не придется тратить огромные деньги на рекламу, если ваше предложение клиентам будет уникальным, а ваш маркетинг - вирусным. Все, что отличается от большинства,.`,

        bookInfoTwo: `
        Вам не придется тратить огромные деньги на рекламу, если ваше предложение клиентам будет уникальным, а ваш маркетинг - вирусным. Все, что отличается от большинства, привлекает внимание и выделяет вас среди остальных. Ведь даже нетипичная расцветка может спровоцировать небывалый интерес - представьте, к примеру, фиоле`,
        bookPrice: "202 000 so'm",
        audioTime: "6:21 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "121",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6280672484.jpg",
        bookName: "Sila vnutri sebya",
        bookRating: 4.8,
        bookGenre: "biznes",
        bookPage: 423,
        published: 2019,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Дипак Чопра - ведущий специалист в области интегративной медицины и Рудольф Танзи - нейробиолог-новатор, открывший гены, которые вызывают болезнь Альцгеймера, представляют свою новую революционную работу, посвященную иммунитету, его влиянию на наше здоровье и способности человеческого организма к самоисцелению. Вы узнаете: - Как связь разума и тела влияет на наш иммунитет и помогает нам исцелиться; - Как научиться справляться с острым и хроническим стрессами.`,

        bookInfoTwo: `Как, следуя 7-дневному плану, активизировать защитные силы организма и запустить процесс самоисцеления организма. И многое другое! «Стресс совершенно точно влияет и на иммунитет, и на нашу восприимчивость к заболеваниям. В своей книге Дипак Чопра и Рудольф Танзи используют холистический подход наряду с последними научными открытиями, для того чтобы разобраться в этой взаимосвязи и укрепить наше здоровье». - Эрик Тополь, доктор медицины, профессор Научно-исследовательского института Скриппса, специалист по молекулярной медицине, автор книги «Будущее медицины. Ваше здоровье в ваших руках» Дипак Чопра - доктор медицинских наук, основатель Фонда Чопры и сооснователь Центра здоровья Чопры, всемирно известный специалист в области интегративной медицины и личной трансформации. Автор более восьмидесяти пяти книг, переведенных на сорок три языка. Журнал The New Times назвал Дипака Чопру «одним из ста героев столетия».`,
        bookPrice: "134 000 so’m",
        audioTime: "8:22 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "122",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-1/wc1200/6084701917.jpg",
        bookName: "Karlos Kastaneda",
        bookRating: 4.3,
        bookGenre: "biznes",
        bookPage: 483,
        published: 2021,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `В этом томе — третья и четвертая книги Карлоса Кастанеды: культовая «Путешествие в Икстлан», за которую автор получил степень доктора философии по антропологии, и магическая «Сказки о силе». О книге «Путешествие в Икстлан» Тот, кто ступил на Путь Воина, путь с сердцем, уже никогда не станет простым обывателем.`,

        bookInfoTwo: `Дон Хуан открывает Карлосу аспекты этого Пути — искусство быть недостижимым, стирание личной истории, концепцию «смерти как советчика», принятие ответственности за свои поступки. В «Путешествии в Икстлан» мы впервые встречаемся с союзниками — устрашающими неорганическими существами, которых маг, имеющий достаточно личной силы, может превратить в незаменимых помощников. Прислушайтесь к совету: для более точного восприятия Учения Толтеков начните знакомство с ним с книги «Путешествие в Икстлан», и лишь потом вернитесь к первым двум, ибо было бы слишком грустно, с одной стороны, испугаться неточного описания Пути и отбросить его, с другой — не ознакомиться с теми важнейшими положениями Учения, которые попали именно в первые две книги..`,
        bookPrice: "82 000 so’m",
        audioTime: "4:03 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "123",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6087297879.jpg",
        bookName: "German Gesse",
        bookRating: 3.9,
        bookGenre: "biznes",
        bookPage: 202,
        published: 2021,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `"Сиддхартха" — жемчужина прозы Германа Гессе, на страницах которой нашли свое отражение путешествия писателя по Индии, а также его интерес к восточным религиям.`,

        bookInfoTwo: `"Сиддхартха" — жемчужина прозы Германа Гессе, на страницах которой нашли свое отражение путешествия писателя по Индии, а также его интерес к восточным религиям. Местом действия является Индия времен Сиддхартхи Гаутамы — основателя одной из наиболее глубоких и мудрых религий человечества — буддизма. В этой небольшой книге Гессе удалось объяснить европейцам ее суть, создать идеальную систему — некий свод взаимосвязанных правил — как нужно жить, как следует исправлять свои ошибки, как найти свое истинное "я". Эту притчу стоит читать и перечитывать не из-за сюжета и в поиске новых знаний, а из-за того глубинного понимания мира, ощущения единения с окружающими, которое она дает.`,
        bookPrice: "79 000 so’m",
        audioTime: "5:28 soat",
        electron: "pdf, bepub",
      },
    ],
  },

  {
    id: "32",
    name: "Maykl",
    lastName: "Gerber",
    born: 1936,
    bornDate: 19,
    bornMonth: "January",
    died: "",
    diedDate: "",
    diedMonth: "",
    books: 49,
    audio: 24,
    genre: "biznes",
    img: "https://www.olbuss.ru/upload/iblock/afc/a647e1d6fdbd4518516a96207fc79316.jpg",
    desc: `Американский предприниматель, гуру малого бизнеса и автор нескольких бестселлеров, в том числе книг «E-Myth Revisited» и «E-Myth Mastery».
    Основатель, председатель правления и генеральный директор компании E-Myth Worldwide, которую он учредил в 1977 г., чтобы помогать предпринимателям и владельцам малых предприятий правильно организовать их деятельность. C тех пор компания обеспечила владельцев более 25 тыс. малых предприятий инструментами и методами радикальной перестройки как их бизнеса, так и жизни.`,
    location: "Canada",
    bookObj: [
      {
        bookId: "124",
        bookImg: "https://cdn1.ozone.ru/multimedia/wc1200/1023483299.jpg",
        bookName: "Maliy Biznes",
        bookRating: 4.2,
        bookGenre: "biznes",
        bookSenario: "biznes",
        published: 2019,
        bookPage: 345,
        nashriyot: "Nihol nashr",
        bookInfo: `Описание
        Книга Майкла Гербера, которого считают ведущим специалистом в области малого бизнеса, позволяет по-новому взглянуть на проблемы, связанные с организацией и развитием малых предприятий.`,

        bookInfoTwo: `Книга Майкла Гербера, которого считают ведущим специалистом в области малого бизнеса, позволяет по-новому взглянуть на проблемы, связанные с организацией и развитием малых предприятий. Автор показывает, как общепринятые стереотипы могут воспрепятствовать успешному бизнесу, ведет своих читателей через главные этапы развития малого предприятия — от основания и становления до зрелости. Большой интерес представляет описание технологий франчайзинга для повышения эффективности и предсказуемости бизнеса. Рассказ об этапах предпринимательской деятельности оформлен в виде диалога с начинающим предпринимателем, в ходе которого обсуждаются вопросы, как правильно организовывать, развивать и совершенствовать свое дело, не изменяя привычного образа жизни.`,
        bookPrice: "125 000 so'm",
        audioTime: "6:21 soat",
        electron: "pdf, bepub",
      },
      {
        bookId: "125",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6089736274.jpg",
        bookName: "Shto dalshe",
        bookRating: 4.4,
        bookGenre: "biznes",
        bookPage: 512,
        published: 2019,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Новая книга К.Кристенсена и его коллег дает подробный ответ на вопрос: «Как распознать инновации, которые станут “подрывными”?».
        Аналитический инструментарий, предложенный в книге, позволяет оценивать стратегические решения компаний; определять, кто победит в грядущей конкурентной битв.`,

        bookInfoTwo: `Аналитический инструментарий, предложенный в книге, позволяет оценивать стратегические решения компаний; определять, кто победит в грядущей конкурентной битве; предвидеть изменения в отрасли. Авторы показывают, как пользоваться этим инструментарием, на примере пяти отраслей: авиации, образования, производства полупроводников, здравоохранения и телекоммуникаций.
        Книга предназначена для руководителей бизнеса, отраслевых аналитиков, инвесторов — для всех, чей успех зависит от умения делать прогнозы.`,
        bookPrice: "105 000 so’m",
        audioTime: "3:09 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "126",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6248698236.jpg",
        bookName: "Mishlenie Budushevo",
        bookRating: 4.7,
        bookGenre: "biznes",
        bookPage: 391,
        published: 2021,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `Мы живем во времена кардинальных перемен, интенсивной глобализации, роста потока информации, которую необходимо адекватно воспринимать и интерпретировать.`,

        bookInfoTwo: `Мы наблюдаем все более острое столкновение цивилизаций и культур при одновременном их взаимопроникновении и взаимовлиянии. Эти перемены требуют новых форм обучения и мышления в школе, бизнесе, профессиях. Известный психолог Говард Гарднер описывает типы мышления, обязательные для человека нового века. Люди, не научившиеся мыслить по новому, будут вынуждены сдаться на милость сил, которые они не в состоянии осмыслить. Это значит, что они не смогут добиться успеха в профессиональной, общественной и личной жизни. Человек же, овладевший данными типами мышления, будет полностью готов к встрече с будущим — даже с тем, которое он не может предвидеть.`,
        bookPrice: "109 000 so’m",
        audioTime: "6:00 soat",
        electron: "pdf, epub",
      },
      {
        bookId: "127",
        bookImg: "https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6248692943.jpg",
        bookName: "Pazitivniy time management",
        bookRating: 4.9,
        bookGenre: "biznes",
        bookPage: 461,
        published: 2021,
        bookSenario: "biznes",
        nashriyot: "Nihol nashr",
        bookInfo: `"Тайм-менеджмент учит нас: ставь цели, добивайся их — и ты придешь к успеху. Но в бесконечной гонке к новым свершениям мы не становимся счастливее. Даже если основные цели достигнуты, появляются новые желания.`,

        bookInfoTwo: `Как радоваться каждому дню? Как правильно планировать свою деятельность в зависимости от эмоционального и физического состояния?

        В книге Марии Хайнц объединено лучшее из того, что есть в позитивной психологии и в тайм-менеджменте, чтобы сделать людей более счастливыми вне зависимости от степени их занятости и успешности. Позитивный тайм-менеджмент ставит в центр внимания счастье — и настоящее, и будущее.
        
        Читайте, выполняйте упражнения — и будьте счастливы!`,
        bookPrice: "204 000 so’m",
        audioTime: "6:01 soat",
        electron: "pdf, bepub",
      },
    ],
  },
];

export default obj;
