const movieData = [
    {
        "rank": 1,
        "title": "Gintama: The Final",
        "rating": 9.0,
        "releasedate": "Jan 2021",
        "image": "/1245/116760.jpg",
        "desc": "New Gintama movie. The concluding film to the Gintama anime series, adapting the final chapters of the manga series of the same name written by Hideaki Sorachi. The film covers chapters 699-704 of the original manga, with original material added in.",
        "link": "https://myanimelist.net/anime/39486/Gintama__The_Final",
        "uniqueKey": "633c5f1d213558bb276acb5eae37b0e4"
    },
    {
        "rank": 2,
        "title": "Koe no Katachi (A Silent Voice)",
        "rating": 8.9,
        "releasedate": "Sep 2016",
        "image": "/1122/96435.jpg",
        "desc": "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun.",
        "link": "https://myanimelist.net/anime/28851/Koe_no_Katachi",
        "uniqueKey": "03c213bc6b76847093af47f30d3e02bd"
    },
    {
        "rank": 3,
        "title": "Violet Evergarden Movie",
        "rating": 8.9,
        "releasedate": "Sep 2020",
        "image": "/1825/110716.jpg",
        "desc": "Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for 'Auto Memory Dolls.' Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters.",
        "link": "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie",
        "uniqueKey": "c908e6e3c70c206e2a3b1edd9b0a3560"
    },
    {
        "rank": 4,
        "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
        "rating": 8.9,
        "releasedate": "Jul 2013",
        "image": "/10/51723.jpg",
        "desc": "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the 'White Plague' has ravished the world's population.",
        "link": "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
        "uniqueKey": "dbb00716fb5fe04b075506728a02a86d"
    },
    {
        "rank": 5,
        "title": "Kimi no Na wa. (Your Name.)",
        "rating": 8.8,
        "releasedate": "Aug 2016",
        "image": "/5/87048.jpg",
        "desc": "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.",
        "link": "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
        "uniqueKey": "28c7b3d60ec1ebb275787f082f6a74e8"
    },
    {
        "rank": 6,
        "title": "Kizumonogatari III: Reiketsu-hen",
        "rating": 8.8,
        "releasedate": "Jan 2017",
        "image": "/1084/112813.jpg",
        "desc": "After helping revive the legendary vampire Kiss-shot Acerola-orion Heart-under-blade, Koyomi Araragi has become a vampire himself and her servant. Kiss-shot is certain she can turn him back into a human, but only once regaining her full power. Araragi has hunted down the three vampire hunters that defeated Kiss-shot and retrieved her limbs to return her to full strength.",
        "link": "https://myanimelist.net/anime/31758/Kizumonogatari_III__Reiketsu-hen",
        "uniqueKey": "c6533c49a09dd5b77be6c4088f0491e2"
    },
    {
        "rank": 7,
        "title": "Sen to Chihiro no Kamikakushi (Spirited Away)",
        "rating": 8.8,
        "releasedate": "Jul 2001",
        "image": "/6/79597.jpg",
        "desc": "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls.",
        "link": "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi",
        "uniqueKey": "228574dcb36070fd0379f51d48f473ca"
    },
    {
        "rank": 8,
        "title": "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
        "rating": 8.7,
        "releasedate": "Aug 2020",
        "image": "/1142/112957.jpg",
        "desc": "The Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is.",
        "link": "https://myanimelist.net/anime/33050/Fate_stay_night_Movie__Heavens_Feel_-_III_Spring_Song",
        "uniqueKey": "6b7fa54d4568b98c0f165f74d87c8e4f"
    },
    {
        "rank": 9,
        "title": "Kimetsu no Yaiba Movie: Mugen Ressha-hen (Mugen Train)",
        "rating": 8.7,
        "releasedate": "Oct 2020",
        "image": "/1704/106947.jpg",
        "desc": "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the flame pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand.",
        "link": "https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen",
        "uniqueKey": "0f02ff1c3b00a7f3622e195e797d7bca"
    },
    {
        "rank": 10,
        "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
        "rating": 8.7,
        "releasedate": "Mar 2021",
        "image": "/1422/113533.jpg",
        "desc": "Shinji Ikari is still adrift after losing his will to live, but the place he arrives at teaches him what it means to hope. Finally, the Instrumentality Project is set in motion and Wille make one last grueling stand to prevent the Final Impact.",
        "link": "https://myanimelist.net/anime/3786/Evangelion__30_10_Thrice_Upon_a_Time",
        "uniqueKey": "c7c82c2026816b84ff67804c484b0a9e"
    },
    {
        "rank": 11,
        "title": "Made in Abyss Movie 3: Fukaki Tamashii no Reimei",
        "rating": 8.7,
        "releasedate": "Jan 2020",
        "image": "/1502/110723.jpg",
        "desc": "Continuing their perilous descent down the Abyss, Riko, Regu, and newfound friend Nanachi reach the Abyss' fifth layer, The Sea of Corpses. Upon arriving at the research station known as Idofront, the main trio encounter the mysterious Prushka, the alleged daughter of Bondrewd, who leads them to the White Whistle responsible for Nanachi's dark past.",
        "link": "https://myanimelist.net/anime/36862/Made_in_Abyss_Movie_3__Fukaki_Tamashii_no_Reimei",
        "uniqueKey": "a68cca7b0f7459700a33e1365058cedb"
    },
    {
        "rank": 12,
        "title": "Mononoke Hime (Princess Mononoke)",
        "rating": 8.6,
        "releasedate": "Jul 1997",
        "image": "/7/75919.jpg",
        "desc": "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict.",
        "link": "https://myanimelist.net/anime/164/Mononoke_Hime",
        "uniqueKey":"43ed60516188fe3835ba9a24a9d89311"
    },
    {
        "rank": 13,
        "title": "Howl no Ugoku Shiro (Howl's Moving Castle)",
        "rating": 8.6,
        "releasedate": "Nov 2004",
        "image": "/5/75810.jpg",
        "desc": "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop.",
        "link": "https://myanimelist.net/anime/431/Howl_no_Ugoku_Shiro",
        "uniqueKey": "cd429222c98e6f57929c032002838624"
    },
    {
        "rank": 14,
        "title": "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
        "rating": 8.6,
        "releasedate": "Jun 2019",
        "image": "/1613/102179.jpg",
        "desc": "Six months ago, Sakuta Azusagawa had a chance encounter with a bunny girl in a library. Ever since then, he's been blissfully happy with his girlfriend: Mai Sakurajima, that same bunny girl. However, the reappearance of his mysterious first crush, the now-adult Shouko Makinohara, adds a new complication to his relationship with Mai. To make matters worse, he then encounters a middle school Shouko in the hospital, suffering from a grave illness.",
        "link": "https://myanimelist.net/anime/38329/Seishun_Buta_Yarou_wa_Yumemiru_Shoujo_no_Yume_wo_Minai",
        "uniqueKey": "cb983d76d8b53c97d41aec7d46f44c21"
    },
    {
        "rank": 15,
        "title": "Suzumiya Haruhi no Shoushitsu (The Disappearance of Haruhi Suzumiya)",
        "rating": 8.6,
        "releasedate": "Feb 2010",
        "image": "/1248/112352.jpg",
        "desc": "One cold Christmas day, Kyon heads over to school and the SOS Brigade's holiday celebration, only to realize that Haruhi Suzumiya seems to have disappeared. Moreover, no one even remembers her or the SOS Brigade; Mikuru Asahina knows nothing and is now afraid of him, and Itsuki Koizumi has also gone missing. The Literature Club, formed only by an uncharacteristically shy Yuki Nagato, now occupies the old SOS club room.",
        "link": "https://myanimelist.net/anime/7311/Suzumiya_Haruhi_no_Shoushitsu",
        "uniqueKey": "cc035e29a9bdb4c4980755c26e9a9671"
    },
    {
        "rank": 16,
        "title": "Mushishi Zoku Shou: Suzu no Shizuku",
        "rating": 8.6,
        "releasedate": "May 2015",
        "image": "/9/72689.jpg",
        "desc": "On a warm summer day, a boy heard the sound of bells ringing, as if in celebration, in the mountain near his home. Several years later in that same mountain, the mushishi Ginko encounters a strange girl with weeds growing out of her body. Soon after, Ginko coincidentally runs into the now grown-up boy Yoshiro on his way off the mountain. With Yoshiro’s help, Ginko soon begins to uncover who this mysterious girl is and what happened to her.",
        "link": "https://myanimelist.net/anime/28957/Mushishi_Zoku_Shou__Suzu_no_Shizuku",
        "uniqueKey": "09b68b9b6fe32408907e5a67487c06f5"
    },
    {
        "rank": 17,
        "title": "Ookami Kodomo no Ame to Yuki (Wolf Children)",
        "rating": 8.6,
        "releasedate": "Jul 2012",
        "image": "/9/35721.jpg",
        "desc": "Hana, a hard-working college student, falls in love with a mysterious man who attends one of her classes though he is not an actual student. As it turns out, he is not truly human either. On a full moon night, he transforms, revealing that he is the last werewolf alive. Despite this, Hana's love remains strong, and the two ultimately decide to start a family. Hana gives birth to two healthy children—Ame, born during rainfall, and Yuki, born during snowfall—both possessing the ability to turn into wolves, a trait inherited from their father.",
        "link": "https://myanimelist.net/anime/12355/Ookami_Kodomo_no_Ame_to_Yuki",
        "uniqueKey": "f72b195ea07ad998deaa55dc2021f571"
    },
    {
        "rank": 18,
        "title": "Kizumonogatari II: Nekketsu-hen",
        "rating": 8.6,
        "releasedate": "Aug 2016",
        "image": "/8/80930.jpg",
        "desc": "No longer truly human, Koyomi Araragi decides to retrieve Kiss-shot Acerola-orion Heart-under-blade's severed body parts that were stolen by three powerful vampire hunters. Awaiting him are Dramaturgie, a vampire hunter who is a vampire himself; Episode, a half-vampire with the ability to transform into mist; and Guillotinecutter, a human priest who is the most dangerous of them all. Unbeknownst to Araragi, each minute he spends trying to retrieve Kiss-shot's limbs makes him less of a human and more of a vampire.",
        "link": "https://myanimelist.net/anime/31757/Kizumonogatari_II__Nekketsu-hen",
        "uniqueKey":"bc776b470c00e65d478072f281b51613"
    },
    {
        "rank": 19,
        "title": "Kimi no Suizou wo Tabetai (I want to eat your pancreas)",
        "rating": 8.5,
        "releasedate": "Sep 2018",
        "image": "/1768/93291.jpg",
        "desc": "The aloof protagonist: a bookworm who is deeply detached from the world he resides in. He has no interest in others and is firmly convinced that nobody has any interest in him either. His story begins when he stumbles across a handwritten book, titled 'Living with Dying.' He soon identifies it as a secret diary belonging to his popular, bubbly classmate Sakura Yamauchi. She then confides in him about the pancreatic disease she is suffering from and that her time left is finite.",
        "link": "https://myanimelist.net/anime/36098/Kimi_no_Suizou_wo_Tabetai",
        "uniqueKey":"5d425529e7643f253c70af075ecefd91"
    },
    {
        "rank": 20,
        "title": "Tengen Toppa Gurren Lagann Movie 2: Lagann-hen",
        "rating": 8.5,
        "releasedate": "Apr 2009",
        "image": "/12/19698.jpg",
        "desc": "Humans have enjoyed their lavish, peaceful, and prosperous lives for seven years since the day the almighty Spiral King was defeated—the day they reclaimed their homeland, Earth. However, the boon of this lifestyle leaves them unprepared when an unknown, hostile threat arises due to the ever-growing human population. This calamity is the Anti-Spiral—a fearsome enemy with unparalleled power. As the Spiral King's prognosis postulating the destruction of 'The Spiral's World' begins to come true, the pieces are in place, and Team Dai-Gurren is ready.",
        "link": "https://myanimelist.net/anime/4565/Tengen_Toppa_Gurren_Lagann_Movie_2__Lagann-hen",
        "uniqueKey": "6ac2b7c7363247c2182be6367a637cc6"
    }
]

export const IMAGE_URL = "https://cdn.myanimelist.net/images/anime";
export default movieData;