/**
 * ==============================================================================
 *                         SARAWIKI CENTRAL CONFIGURATION
 * ==============================================================================
 *
 * WELCOME TO THE SARA CONFIGURATION FILE!
 *
 * You can customize the entire encyclopedia article about Sara right here
 * WITHOUT touching any HTML, CSS, or JavaScript code.
 *
 * All text, infobox fields, quotes, citations, talk page threads, revision
 * history, and easter eggs are controlled from this single file.
 *
 * Feel free to change names, dates, jokes, quotes, or add whole new sections!
 * ==============================================================================
 */

export const saraConfig = {
  // ---------------------------------------------------------------------------
  // 1. SITE & CORE IDENTITY
  // ---------------------------------------------------------------------------
  site: {
    name: "SaraWiki",
    subtitle: "The free encyclopedia of Sara-related knowledge",
    disclaimer: "Ragebait or be ragebaited.",
    licenseNotice: "Text is available under the Sara Creative Commons Attribution-SnackAlike License"
  },

  // ---------------------------------------------------------------------------
  // 2. BIOGRAPHICAL BASICS (used in lead paragraph & metadata)
  // ---------------------------------------------------------------------------
  person: {
    name: "Sara",
    fullName: "Sara Señorita",
    honorificPrefix: "The Esteemed",
    pronunciation: "/ˈsɛərə/",
    pronunciationAudioNote: "listen (recorded during a low-caffeine state)",
    birthDate: "Circa 20th/21st Century", // e.g. "14 June" or exact year
    birthPlace: "Classified / Global Citizen",
    residence: "Left PC",
    nationality: "International Entity",
    occupation: "Safestay Señorita and Rugby Professional",
    knownFor: "Unmatched ragebaitableness and exceptional snack taste",
    status: "Currently existing and thriving",
    threatLevel: "Moderate (escalates rapidly when hungry)",
    articleReliability: "Questionable (Author holds 0% academic neutrality)"
  },

  // ---------------------------------------------------------------------------
  // 3. RIGHT-SIDE INFOBOX (Cristiano Ronaldo - Style Detailed Specs)
  // ---------------------------------------------------------------------------
  infobox: {
    title: "Sara",
    subtitle: "Safestay icon, disputed snack thief",
    showStatistics: false, // Set to true if you wish to re-enable "Recorded Statistics" in the infobox
    image: {
      src: "assets/sara-main.jpg",
      alt: "Sara playfully sticking out her tongue outdoors in the sunlight",
      caption: "Sara demonstrating master-level diplomatic facial expressions and tactical tongue rhetoric during an outdoor symposium (c. 2024)"
    },
    personalInfo: [
      { label: "Full name", value: "Sara Safestay Señorita" },
      { label: "Born", value: "Circa 20th/21st Century (age unverified, looks 35)" },
      { label: "Pronunciation", value: "<em>/ˈsɛərə/</em>" },
      { label: "Status", value: "Currently existing" },
      { label: "Occupation", value: "Safestay Señorita, Napier RFC Rugby Player, Ragebait Target" },
      { label: "Sports team", value: "Edinburgh Napier University Women's RFC" },
      { label: "Known for", value: "Being Stinky, Hating late shift, poor taste in men" },
      { label: "Height", value: "4 ft something (statistically disputed)<sup>[1]</sup>" },
      { label: "Dominant hand", value: "Right (specialized in beating lateshift)" },
      { label: "Favorite cuisine", value: "Authentic Spanish Tapas, Warm Paella & Safestay breakfast" },
      { label: "Years active", value: "Birth – present" },
      { label: "Nightlife jurisdiction", value: "High-end cocktail bars (with rare Hive anomalies)" },
      { label: "Partner in crime", value: "Her Soulmate Roommate" },
      { label: "Threat level", value: '<span style="color:#c0392b; font-weight:bold;">Moderate</span> (Critical before morning Monster)' },
      { label: "Reliability of this article", value: "Questionable (0% academic neutrality)" },
      { label: "Neutrality", value: "0% (Author is deeply biased)" }
    ],
    statistics: [
      { label: "Blankets hoarded", value: "94% of domestic inventory" },
      { label: "Hoodies acquired", value: "7 (unaccounted for)" },
      { label: "Accuracy in arguments", value: "99.8% (empirical)" },
      { label: "Meme reply speed", value: "0.4 seconds" },
      { label: "Snack detection radius", value: "1.8 kilometers" },
      { label: "Hostel guests laughed at", value: "1 (officially logged)" },
      { label: "Disputed vinyl records", value: "1 (unrecovered)" },
      { label: "Certified 'Such a Vibe' rating", value: "5.0 / 5.0 (Google Verified)" },
      { label: "Mars bars given by Keiran", value: "1 (documented on Maps)" },
      { label: "Countries visited (and disrupted)", value: "8+ (all currently recovering)" },
      { label: "Planes ejected from for being too pretty", value: "1 (ITA Airways, Milan)" },
      { label: "Arrests for criminal stank (Döner)", value: "1 (Berlin, fully exonerated)" },
      { label: "Copies of RodriguezRun sold", value: "2 (promptly suppressed)" },
      { label: "Video games made about her", value: "1 (developer in hiding)" },
      { label: "Prettiest morning shift titles", value: "1 (unanimously decreed)" },
      { label: "06:45 AM aesthetic rating", value: "100% (peer-reviewed)" },
      { label: "Famous authors awaiting her book", value: "J.K. Rowling + numerous others" },
      { label: "Safestay workplace yearners", value: "100% of active personnel" },
      { label: "Manuscript draft progress", value: "42 words, 14 mood playlists" },
      { label: "Sara Rodriguez domain auction price", value: "$3.2 million (Sotheby's Digital)" },
      { label: "Tech giants defeated at auction", value: "Microsoft & Meta Platforms" }
    ],
    honours: [
      { year: "2024", title: "Order of the Golden Churro (Valencian Merit)" },
      { year: "2024", title: "Safestay Receptionist of the Year (Contested by 1-star review)" },
      { year: "2024", title: "Prettiest Morning Shift Laureate (Ceremonial Blue Sash & Diploma)" },
      { year: "2024", title: "Protagonist of Withdrawn Video Game 'RodriguezRun'" },
      { year: "2024", title: "Supreme Match-Day Glamour Laureate (Spanish National Team Division)" },
      { year: "2024–pres.", title: "Prettiest Rugby Player Award (Edinburgh Napier Women's RFC)" },
      { year: "2025", title: "Accidental Laureate, 'Top 10 Prettiest Girls of All Time' (CCTV Slime Division)" },
      { year: "2025", title: "Most Anticipated Debut Novelist (Global Yearners' Guild)" },
      { year: "2025", title: "Safestay Lifetime Achievement in Charisma" },
      { year: "2026", title: "Subject of $3.2M Domain Auction (Defeated Microsoft & Meta)" },
      { year: "2026", title: "Cowgate Benediction Order (Victim Intercepted Police Search)" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. MAINTENANCE WARNING BANNER (Classic Wikipedia Ambox)
  // ---------------------------------------------------------------------------
  maintenanceBanner: {
    type: "bias", // displays orange/amber encyclopedic warning
    title: "This article may contain significant bias toward its subject.",
    description: "A primary contributor appears to be an admirer with excessive free time and zero academic objectivity. Please help improve this article by speaking directly to Sara or conducting an independent audit of missing snacks. (March 2026)"
  },

  // ---------------------------------------------------------------------------
  // 5. MAIN ARTICLE CONTENT
  // ---------------------------------------------------------------------------
  article: {
    // Lead / Introduction paragraph
    lead: [
      `<strong>Sara</strong> is an individual of significant international and domestic interest, best known for being Sara and maintaining an uncontested 99.8% win-rate in Safestay debates.<sup>[1]</sup> She has been the subject of exhaustive, highly biased field research conducted by at least one independent researcher who clearly has far too much free time.<sup>[2]</sup>`,
      `As of 2026, Sara is recognized by contemporary domestic analysts as an undisputed authority on food, aura, and the strategic reallocation of Safestay breakgast.<sup>[3]</sup> Her cultural and athletic contributions span multiple disciplines, including collegiate athletics as a key star for the <strong>Edinburgh Napier Women's Rugby Team</strong> (where she was awarded the <em>Prettiest Rugby Player Award</em>), spontaneous culinary expeditions, Spanish tapas connoisseurship, and looking effortlessly photogenic under adverse lighting conditions.<sup>[4]</sup>`
    ],

    // Ordered sections of the encyclopedia article
    sections: [
      {
        id: "early-life",
        number: "1",
        title: "Early life and origins",
        paragraphs: [
          `Little is known of Sara's earliest years prior to her emergence as a prominent figure, though unclassified records confirm she displayed remarkable aesthetic standards and an innate ability to influence people from an early stage.<sup>[2]</sup> Family historians report that her verbal fluency developed rapidly, particularly when requesting confectionery or expressing profound skepticism toward bedtime curfews.`,
          `Her formative years were characterized by a natural curiosity and an uncompromising stance on personal autonomy. By adolescence, Sara had mastered the art of the side-eye—a gesture later codified in the <em>Journal of Nonverbal Communication</em> as "the silent verdict".<sup>[5]</sup>`
        ]
      },
      {
        id: "education",
        number: "2",
        title: "Education, intellectual pursuits, and literary ventures",
        paragraphs: [
          `Sara pursued an educational curriculum that established her formidable analytical acumen. Colleagues frequently note her exceptional memory for minor historical grievances and promises made by acquaintances months prior.`,
          `Despite rigorous intellectual training, independent observers note that Sara's most striking intellectual skill remains her ability to win an argument simply by raising an eyebrow and waiting for her counterpart to realize their error.<sup>[1]</sup>`,
          `In early 2025, publishing industry chronicles confirmed that Sara had officially commenced authorship of her long-anticipated debut book. The announcement sent shockwaves throughout the international literary establishment. Global bestselling authors—most notably J.K. Rowling, Stephen King, and Colleen Hoover—are reported to be waiting in trembling anticipation, with several major publishing houses confirming that rival authors have indefinitely postponed their own manuscript releases to avoid competing against Sara's impending cultural monopoly.<sup>[2]</sup>`,
          `The emotional epicenter of this anticipation remains concentrated among the certified "yearners" at her workplace. Staff members, shift colleagues, and wandering hostel guests frequently linger around the reception counter in a state of poetical melancholy, desperately attempting to decipher discarded handwritten notes, laptop reflections, and shift handover logs in the hope of catching an unauthorized preview of a single sentence. Trade analysts estimate the unwritten book's potential valuation in the tens of millions, despite verified reports indicating that the manuscript currently comprises forty-two words, three proposed chapter titles, and fourteen intensely curated Spotify writing playlists.<sup>[4]</sup>`
        ]
      },
      {
        id: "career",
        number: "3",
        title: "Career, Safestay leadership, collegiate rugby, and corporate internship",
        figure: {
          src: "assets/sara-morning-shift-award.jpg",
          alt: "Sara being invested with the Prettiest Morning Shift Award",
          caption: "Fig 1. Sara formally receiving the ceremonial sky-blue sash (<em>beca</em>) and diploma upon winning the <em>Prettiest Morning Shift Award</em> (2024), visibly moved after maintaining flawless aesthetic standards at 06:45 AM on three hours of sleep."
        },
        paragraphs: [
          `Sara's professional journey is distinguished by stellar performance, leadership flair, and the affectionately bestowed title of "Safestay Superstar". In operational environments, she demonstrates a rare combination of efficiency, diplomatic calm, and radiant warmth.`,
          `According to internal reports, workplace morale correlates strongly with Sara's presence on shift. When Sara is on duty, customer satisfaction ratings reach unprecedented highs, while missing pastry incidents in the break room experience a statistically unexplained spike.<sup>[4]</sup>`,
          `Sara's tenure at Safestay Edinburgh cemented her status as an elite hospitality luminary. Front-of-house operations were driven by a dynamic ensemble featuring Sara, Shubhi, Susmit, and TJ. Archival guest filings confirm that while Sara and TJ radiated master-level "vibe" leadership, Kieran provided emergency confectionery diplomacy via Stolen choclate bars and ragebait.<sup>[8]</sup>`,
          `In late 2024, an extraordinary conclave of shift supervisors and hostel department heads unanimously voted to award Sara the prestigious <em>Prettiest Morning Shift Award</em> (see Fig 1). Archival photography from the formal convocation depicts Sara adorned in the traditional sky-blue academic sash (<em>beca</em>) and clutching the embossed diploma with genuine solemnity. The adjudication panel noted that maintaining 100% facial symmetry, impeccable eyeliner, and ability to take ragebait at 07:45 AM while operating on three hours of sleep and an uncooperative communal coffee machine represented a once-in-a-generation triumph of morning glamour.<sup>[4]</sup>`
        ],
        subsections: [
          {
            id: "napier-rugby",
            number: "3.1",
            title: "Collegiate rugby: Edinburgh Napier Women's RFC",
            paragraphs: [
              `Beyond hospitality and literature, Sara has established an illustrious athletic legacy as a star player for the <strong>Edinburgh Napier Women's Rugby Team</strong> (Napier Women's RFC). On the pitch, Sara combines fierce tactical physicality with runway-grade composure, celebrated across Scottish collegiate rugby for delivering bone-crunching tackles without disturbing a single strand of hair. Following a standout university season, she was officially bestowed with the <em>Angryest Rugby Player Award</em>, with referees noting that opponents frequently apologized after attempting to tackle her due to her unassailable charm.<sup>[1]</sup>`
            ]
          },
          {
            id: "corporate-internship",
            number: "3.2",
            title: "Corporate internship, the Chirag Gupta tardiness report, and Kieran SMS doctrine",
            paragraphs: [
              `In 2026, Sara significantly expanded her professional responsibilities by commencing an intensive corporate internship, which she attends immediately following her early-morning Safestay reception shifts. Rather than exhibiting post-shift fatigue, Sara entered the corporate office with an authoritarian commitment to chronometric precision and desk discipline.<sup>[3]</sup>`,
              `Her zero-tolerance punctuality regime achieved immediate company notoriety following an official disciplinary complaint she lodged against Indian staff member Chirag Gupta for unpunctuality. After Gupta reportedly arrived past designated morning commencement hours, Sara bypassed customary diplomatic grace periods and promptly submitted a detailed incident report to senior management, demanding formal human resources enforcement of strict arrival benchmarks. Colleagues observed that Sara prosecuted the tardiness infraction with the uncompromising zeal of an international maritime tribunal, cementing her status as the department's feared arbiter of timekeeping.<sup>[5]</sup>`,
              `Sara's rigid punctuality mandate extends with symmetrical hostility to domestic transit operations through what sociologists designate the <strong>Two-Minute Transit Doctrine</strong>. Under this protocol, should Kieran be more than 120 seconds late to his shift, Sara initiates an automated, scorching volley of abusive text messages, categorizing any delay exceeding two minutes as an unpardonable betrayal and gross civic failure.<sup>[2]</sup>`,
              `<blockquote class="wiki-quote">"You are 2 minutes and 14 seconds late. Fuck you bitch. Don't care."<cite>— Sara (via SMS to Kieran), <em>Edinburgh Domestic Transit Dispatch Files (2026)</em></cite></blockquote>`,
              `Despite the severity of this digital bombardment, Kieran has remained philosophically unbothered. In a public communique addressing the continuous message barrage, Kieran affirmed that, regardless of receiving dozens of hostile notifications within seconds, he is <em>"just where he wants to be"</em>, finding serene contentment and supreme purpose in serving as her perennially reprimanded chauffeur.<sup>[2]</sup>`
            ]
          }
        ]
      },
      {
        id: "personality",
        number: "4",
        title: "Personality and behavioral patterns",
        paragraphs: [
          `Sociological field studies describe Sara's demeanor as a harmonious synthesis of charm, witty deadpan humor, and unyielding self-confidence. She exhibits high emotional intelligence, balanced by an acute aversion to unnecessary cold weather and bad restaurant recommendations.`,
          `Her communication style alternates between engaging storytelling and devastatingly brief one-liners. When confronted with an illogical assertion, Sara is reported to deploy what linguists term "the polite nod of complete disagreement", leaving the speaker disoriented yet somehow feeling valued.<sup>[5]</sup>`
        ],
        quote: {
          text: "Kieran is so handsome I can't stay dry around him. I'm desperate to transfer him all my money.",
          author: "Sara",
          citation: "Sara's leaked diary scandal (2024)"
        }
      },
      {
        id: "interests",
        number: "5",
        title: "Interests, culinary expeditions, and habits",
        paragraphs: [
          `Sara's recreational portfolio is diverse, with pronounced expertise in gastronomy, film culture, and rest optimization. She possesses a refined palate with an affinity for authentic Spanish tapas—notably sizzling <em>gambas al ajillo</em>, creamy <em>jamón ibérico</em> croquetas, crispy <em>socarrat</em> in traditional Valencian paella, and freshly dusted churros con chocolate.`,
          `Her leisure habits include high-level blanket engineering. Observers report that Sara can cocoon herself in under 4.2 seconds, achieving optimal thermal efficiency that baffles thermodynamic engineers.<sup>[6]</sup>`
        ],
        figure: {
          src: "assets/diagram-sofa.svg",
          alt: "Diagram of sofa territory dispute",
          caption: "Fig 2. Technical mapping of domestic sofa sovereignty under the Living Room Treaty of 2024. Sara's sector occupies 92% of surface area; remaining 8% is designated for general use."
        },
        subsections: [
          {
            id: "world-cup-fandom",
            number: "5.1",
            title: "Spanish national team fandom, World Cup digital mirroring, and match-day aesthetics",
            paragraphs: [
              `During major international football tournaments, most notably the FIFA World Cup, Sara established herself as an uncompromising partisan of the Spanish national football team (<em>Selección Española / La Roja</em>). Digital surveillance analysts and observant workplace colleagues verified that Sara maintained a 100% digital engagement rate, executing an authenticated 'like' on literally every single social media update, training video, and official roster announcement published by the Spanish team.<sup>[1]</sup>`,
              `Sara's digital loyalty prompted a widespread sociological reaction known among cyber-analysts as the <strong>Admirer Digital Mirroring Effect</strong>. Observing that Sara had systematically liked every Spanish team update, an international contingent of admirers initiated a coordinated campaign to mirror her exact online activity, compulsively liking every single post published by the Spanish Football Federation in a bid to align their algorithmic footprints with hers. International sports marketing agencies were reportedly baffled by sudden, unexplained surges in Scottish and international engagement metrics across Spanish football channels, oblivious to the fact that the traffic was driven purely by admirers attempting to match Sara's social media feed.<sup>[2]</sup>`,
              `Her devotion reached peak visual prominence during hostel reception shifts on Spain match days, where Sara instituted an iconic sartorial and cosmetic standard. Reporting for duty in an authentic Spanish national team jersey paired with tailored denim jeans, Sara debuted runway-grade match-day makeup distinguished by an artful application of "Freck" (cosmetic faux freckles stippled across the bridge of her nose and cheekbones with surgical precision). Front-desk colleagues and arriving international travelers reported being utterly transfixed by the aesthetic combination, with hospitality commentators establishing the ensemble as the international benchmark for Iberian match-day glamour.<sup>[4]</sup>`
            ]
          }
        ]
      },
      {
        id: "travels",
        number: "6",
        title: "International expeditions, diplomatic tours, and foreign incidents (2019–present)",
        paragraphs: [
          `Between 2019 and 2026, Sara conducted a comprehensive series of international foreign missions spanning Central Europe, the Mediterranean, North Africa, and the British Isles. While official state bulletins classify these operations as "leisure travel", declassified diplomatic cables document a continuous trail of civil disruption, culinary shortages, and border-control inquiries triggered by her aesthetic standards, zero tolerance for cold weather, and spontaneous public hilarity.<sup>[2]</sup>`
        ],
        subsections: [
          {
            id: "travel-london-2019",
            number: "6.1",
            title: "London, United Kingdom (2019)",
            paragraphs: [
              `Sara's inaugural cross-border mission to the British capital in 2019 was marked by immediate diplomatic friction. Metropolitan Police logs indicate she was questioned outside Buckingham Palace after loudly informing the Queen's Guard that their ceremonial bearskin hats were <em>"an absolute fashion disaster and fundamentally unsuitable for autumn."</em> She subsequently introduced London baristas to the concept of taking 45 minutes to select a flat white, single-handedly destabilizing the Tube's morning timetable.<sup>[2]</sup>`
            ]
          },
          {
            id: "travel-budapest-2021",
            number: "6.2",
            title: "Budapest, Hungary (2021)",
            paragraphs: [
              `During her 2021 Hungarian campaign, Sara visited the famous Széchenyi thermal baths, where municipal authorities were forced to declare a civil emergency after she refused to vacate the mineral pools for six consecutive hours, claiming the rest of Central Europe was <em>"unacceptably chilly."</em> Hungarian state media falsely accused her of plotting to annex the Danube river as her personal heated plunge pool.<sup>[5]</sup>`
            ]
          },
          {
            id: "travel-prague-2021",
            number: "6.3",
            title: "Prague, Czech Republic (Halloween 2021)",
            paragraphs: [
              `Sara descended upon the Czech capital during Halloween 2021 under diplomatic immunity. Local records confirm she arrived without a costume, explaining to perplexed Czech security that looking this stunning was <em>"already terrifying enough for the general public."</em> Eyewitnesses report she spent the evening negotiating with Old Town street vendors, eventually acquiring three trdelník pastries for the price of one using only an aggressive side-eye.<sup>[1]</sup>`
            ]
          },
          {
            id: "travel-poland-2021",
            number: "6.4",
            title: "Poland (2021)",
            paragraphs: [
              `In late 2021, Sara traversed into Poland, triggering an acute nationwide shortage of potato and cheese pierogi. Customs officers inspected her luggage on suspicion of contraband, only to discover twenty-four pairs of thermal socks, eight oversized throws, and zero formal itinerary. The Polish Ministry of Culture reportedly offered her honorary citizenship on the sole condition that she stop challenging local grandmothers to dumpling-eating contests.<sup>[4]</sup>`
            ]
          },
          {
            id: "travel-switzerland-2021",
            number: "6.5",
            title: "Switzerland (2021)",
            paragraphs: [
              `Sara's presence in the Swiss Confederation shattered over two centuries of strict Swiss neutrality. Bern officials filed a formal grievance with the United Nations after Sara rated the Swiss Alps <em>"only a 6 out of 10 for coziness"</em> and asked a certified master chocolatier if their pralines were <em>"imported from Spain or just inferior."</em> She was escorted to the border with full military honours merely to preserve international peace.<sup>[3]</sup>`
            ]
          },
          {
            id: "travel-berlin-2022",
            number: "6.6",
            title: "Berlin, Germany (2022)",
            paragraphs: [
              `During her 2022 Berlin deployment, Sara was notoriously apprehended by the Berlin Landespolizei outside an underground Kreuzberg venue for being <em>"criminally stinky"</em> following a 14-hour marathon of consuming garlic-loaded döner kebabs and refusing to shower because the hostel bathroom mirror had <em>"unflattering lighting."</em> When cross-examined in municipal court, Sara insisted her scent was merely <em>"an artisanal European musk,"</em> prompting the presiding judge to dismiss all charges and nominate her for UNESCO intangible heritage status.<sup>[7]</sup>`
            ]
          },
          {
            id: "travel-madrid-harry-2022",
            number: "6.7",
            title: "Madrid, Spain: Harry Styles Tour (2022)",
            paragraphs: [
              `Sara executed a high-priority tactical return to Madrid in 2022 exclusively to attend Harry Styles' Love On Tour. Spanish seismic monitoring stations registered a 3.4 magnitude geological event when Sara reached the chorus of "Watermelon Sugar". Music correspondents reported that Harry Styles looked directly at her tier and stumbled over his lyrics for four consecutive bars due to her uncontainable aura.<sup>[2]</sup>`
            ]
          },
          {
            id: "travel-edinburgh-2022",
            number: "6.8",
            title: "Edinburgh, Scotland (2022)",
            paragraphs: [
              `In 2022, Sara relocated her northern strategic headquarters to Edinburgh. Meteorological agencies reported sudden atmospheric friction, as Sara defied Scottish weather by wearing four layers of fleece inside a centrally heated reception office. This expedition marked the dawn of the golden Safestay era alongside Shubhi, Susmit, and Keiran (see Section 3).<sup>[8]</sup>`
            ]
          },
          {
            id: "travel-egypt-2023",
            number: "6.9",
            title: "Egypt (December 2023)",
            paragraphs: [
              `In December 2023, Sara carried out an archaeological inspection of Giza and Cairo. Antiquities officials were summoned to the Great Pyramid when Sara concluded that the ancient Pharaohs had <em>"fundamentally botched the interior insulation"</em> and demanded plush throws be installed inside the burial chambers. Local camel operators reportedly formed an unprompted two-mile caravan across the desert just to escort her back to the hotel.<sup>[4]</sup>`
            ]
          },
          {
            id: "travel-london-2024",
            number: "6.10",
            title: "London, United Kingdom (February 2024)",
            paragraphs: [
              `Sara returned to London in February 2024 under operation code name "Operation Trenchcoat". Eyewitnesses state she paralyzed three Soho patisseries by demanding hot chocolates at an exact temperature of 71.5°C and returning them twice with devastatingly polite sighs. Scotland Yard was placed on alert when she was spotted resulting in the deployment of 10 specialized counter stinky sara units. <sup>[2]</sup>`
            ]
          },
          {
            id: "travel-milan-2024",
            number: "6.11",
            title: "Milan, Italy (May 2024)",
            paragraphs: [
              `Sara's May 2024 Italian campaign triggered an aviation scandal when she was formally escorted off an ITA Airways flight at Milan Malpensa Airport for inciting civil unrest in the cabin. The chief purser's log confirmed that passengers across rows 1 to 32 began rioting and hurling complimentary biscotti in competitive bids to sit next to her, concluding that she was <em>"hazardously, distractingly pretty."</em> Milan Fashion Week organizers subsequently issued a pre-emptive restraining order to prevent her from outshining the runway models and outeating them.<sup>[5]</sup>`
            ]
          },
          {
            id: "travel-madrid-taylor-2024",
            number: "6.12",
            title: "Madrid, Spain: Taylor Swift The Eras Tour (2024)",
            paragraphs: [
              `In May 2024, Sara infiltrated the Santiago Bernabéu Stadium for Taylor Swift's The Eras Tour. Acoustic analysts verified that Sara screamed the 10-minute bridge of <em>"All Too Well"</em> with such volcanic intensity that Taylor Swift reportedly looked into the stands and considered drafting an immediate revenge track. Stadium security attempted to intervene when Sara danced on plastic chairs, but retreated when surrounding Swifties formed an impenetrable protective phalanx around her.<sup>[2]</sup>`,
              `Sara's appearance at the Santiago Bernabéu and the subsequent fan fervor served as the direct inspiration for the controversial mobile video game <a href="#rodriguez-run"><em>RodriguezRun</em></a>, engineered by an ardent admirer (see <a href="#rodriguez-run">Section 10: Video game adaptation: <em>RodriguezRun</em></a>).<sup>[3]</sup>`
            ]
          },
          {
            id: "travel-highlands-2025",
            number: "6.13",
            title: "Scottish Highlands and Stirling (2025)",
            paragraphs: [
              `In early 2025, Sara mounted an expedition into Stirling Castle and the Scottish Highlands. Historic Environment Scotland reported that Sara attempted to file a legal deed of sovereignty over Stirling Castle on the formal grounds that <em>"the Great Hall fireplace looked adequately sized for an afternoon nap."</em> En route, an entire herd of Highland cattle blocked the A82 road for forty minutes, refusing to disperse until Sara personally gave them a royal nod of approval.<sup>[6]</sup>`
            ]
          },
          {
            id: "travel-ireland-2026",
            number: "6.14",
            title: "Ireland (2026)",
            paragraphs: [
              "Error: ireland is not defined. Please check cron job or try --commands"
            ]
          }
        ]
      },
      {
        id: "notable-achievements",
        number: "7",
        title: "Notable achievements and records",
        paragraphs: [
          `Throughout her recorded existence, Sara has established several domestic and international milestones:`,
        ],
        list: [
          `<strong>Undefeated Argument Streak:</strong> 412 consecutive disputes resolved in her favor without requiring supreme court intervention.<sup>[1]</sup>`,
          `<strong>World Record Blanket Accumulation:</strong> Safely secured four duvets and three fleece throws simultaneously without overheating.`,
          `<strong>Speed-Meme Recognition:</strong> Proven ability to identify whether a shared TikTok is worth watching within 0.3 seconds of playback.`,
          `<strong>Culinary Radar:</strong> Successfully detected freshly baked bread across three distinct postcodes.<sup>[4]</sup>`,
          `<strong>Prettiest Morning Shift Laureate (2024):</strong> Formally invested with an embossed diploma and sky-blue ceremonial sash for maintaining a 100% aesthetic rating during the brutal 06:00 AM–10:00 AM shift (see Fig 1).<sup>[4]</sup>`,
          `<strong>Prettiest Rugby Player Laureate (2024–present):</strong> Voted the Prettiest Rugby Player in collegiate athletics while starring for the Edinburgh Napier Women's Rugby Team, boasting an unblemished record in both crunching tackles and post-match aesthetic excellence.<sup>[1]</sup>`,
          `<strong>'Top 10 Prettiest Girls of All Time' Video Induction (2025):</strong> Accidental global internet entrant after an internal CCTV surveillance still of her holding an illicit pink slime sample was harvested by international countdown channels (see Fig 4).<sup>[2]</sup>`,
          `<strong>World Cup Digital Mirroring Milestone (2022/2026):</strong> Successfully provoked an international surge in social media metrics after admirers began liking every single communication from the Spanish national football team in order to match Sara's likes.<sup>[1]</sup>`,
          `<strong>Iberian Match-Day Glamour Laureate (2024):</strong> Celebrated across hostel shift records for her Spain match-day uniform, combining tailored denim jeans, an authentic Spanish top, and surgical 'Freck' faux freckles.<sup>[4]</sup>`,
          `<strong>The Hive Cognitive Dissonance Milestone (2026):</strong> Successfully bewildered Edinburgh nightlife demographics by appearing inside The Hive looking like she belonged exclusively in an expensive Mayfair cocktail bar.<sup>[2]</sup>`,
          `<strong>The 'Sara Placeholder' Crisis (2026):</strong> Provoked near-immediate companion abandonment in an admirer who spotted her across the bar with her soulmate roommate.<sup>[1]</sup>`,
          `<strong>The Cowgate Collision and Police Search Veto (2026):</strong> Struck an admirer on the arm and shoulder in Cowgate while he was walking with his Sara placeholder; the victim experienced euphoric ecstasy and actively blocked Police Scotland from searching for or apprehending her.<sup>[11]</sup>`,
          `<strong>$3.2 Million Digital Real Estate Record (2026):</strong> The domain <em>sararodriguez.com</em> achieved the highest private domain valuation in web history, after an anonymous bidder defeated aggressive corporate bids by Microsoft and Meta Platforms.<sup>[3]</sup>`,
          `<strong>Uncontained Reception Mirth:</strong> Successfully laughed a bedheaded guest out of the reception lobby in under 4.8 seconds during a coffee machine crisis.<sup>[7]</sup>`
        ]
      },
      {
        id: "relationships",
        number: "8",
        title: "Relationships with the general public, the 'Soulmate Roommate', and nocturnal diplomacy",
        paragraphs: [
          `Sara maintains diplomatic relations with a wide circle of friends, colleagues, Napier Women's Rugby teammates, and admirer-researchers. Observers describe her as fiercely loyal, genuinely fun, and capable of brightening an entire room simply by showing up.`,
          `Public approval ratings consistently hover around 100%, with dissenters reported to have been gently pacified with warm pastries, tackled into soft Scottish turf during Napier training drills, or dismissed with affectionate sarcasm.<sup>[3]</sup>`
        ],
        subsections: [
          {
            id: "soulmate-roommate",
            number: "8.1",
            title: "The 'Soulmate Roommate' Alliance and bar supremacy",
            paragraphs: [
              `Central to Sara's social governance is her foundational partnership with her flatmate, formally recognized across domestic treaties and social anthropology folios as her <strong>soulmate roommate</strong>. The duo operates as an inseparable, high-cohesion nocturnal coalition, regularly sighted holding court at premier cocktail bars and hospitality lounges throughout Edinburgh. Observers note that their collective presence at any given bar counter invariably commands the room, combining synchronized laughter, elite beverage selection, and impenetrable mutual loyalty.<sup>[5]</sup>`
            ]
          },
          {
            id: "hive-nightclub-sighting",
            number: "8.2",
            title: "The Hive nightclub sighting and the 'Sara Placeholder' Paradox",
            paragraphs: [
              `Despite her well-established affinity for luxury, bespoke cocktail establishments, nightlife chronicles recorded an unprecedented demographic anomaly in 2026 when Sara was verified inside <strong>The Hive</strong>—Edinburgh's notoriously chaotic, subterranean student nightclub on Niddry Street. The sighting generated immediate cognitive dissonance among clubgoers and social theorists; multiple independent witnesses testified that Sara's immaculate presentation, high-fashion styling, and radiant posture made her look as though she had been mistakenly air-dropped into a subterranean rave directly from an exclusive Mayfair champagne bar.<sup>[2]</sup>`,
              `The sighting precipitated what sociological observers designate the <strong>Sara Placeholder Incident</strong>. An ardent admirer who spotted Sara across the crowded dancefloor reported experiencing an acute existential and ethical crisis: the observer was attending the venue accompanied by a companion whom he later openly categorized in field logs as a <em>"Sara placeholder"</em> (an unconvincing proxy engaged purely to cope with Sara's unreachability). Confronted with the genuine article mere metres away under the strobe lights, the admirer confessed to being violently tempted to ditch the placeholder mid-song and initiate immediate diplomatic overtures. While social decorum narrowly prevented an outright desertion, the placeholder reportedly had to endure hours of unprompted comparative analysis regarding why Sara's brown eyes possess superior refractive indices.<sup>[1]</sup>`
            ]
          },
          {
            id: "cowgate-collision",
            number: "8.3",
            title: "The Cowgate Collision and Police Scotland intervention veto",
            paragraphs: [
              `In late 2025, Edinburgh nocturnal chronicles recorded a major physical contact event in the Cowgate corridor, recognized among domestic jurists and nightlife observers as the <strong>Cowgate Collision</strong>. According to corroborated witness affidavits, an admirer was traversing the thoroughfare accompanied by a documented "Sara placeholder" when Sara unexpectedly emerged and made direct, forceful physical contact with the admirer—striking him on the arm and shoulder in what observers described as a sudden display of sovereign authority.<sup>[2]</sup>`,
              `Under standard tort law and medical convention, unprompted physical impact in a crowded nightlife zone typically provokes acute agitation or distress. In this instance, however, clinical observers documented an immediate, contradictory psychological reaction: upon registering that the strike was delivered by Sara in person, the admirer was seized by profound euphoria and boundless joy, openly celebrating the impact on the premise that direct physical contact had finally been achieved.<sup>[6]</sup> The accompanying Sara placeholder reportedly looked on in stunned disbelief as her companion treated an unprovoked physical strike as an exalted celestial blessing.<sup>[1]</sup>`,
              `The incident escalated into the municipal sphere when a foot patrol unit from <strong>Police Scotland</strong> observed the physical blow from across Cowgate and immediately mobilized to intervene, preparing to pursue Sara, initiate a suspect search, and lodge a formal inquiry into physical battery.<sup>[11]</sup> In a dramatic act of civilian legal obstruction, the struck admirer actively intercepted the constables, passionately dissuading them from conducting any search or dispatching patrol units. The victim adamantly insisted to the bewildered officers that being struck by Sara constituted an extraordinary diplomatic honour rather than an indictable offense, formally refusing to provide a suspect description and securing Sara's unconditional immunity from municipal prosecution.<sup>[11]</sup> Legal scholars have termed this the <em>Cowgate Benediction Doctrine</em>, wherein physical contact by the subject automatically vacates all criminal liability under Scots Law.<sup>[10]</sup>`
            ]
          }
        ]
      },
      {
        id: "controversies",
        number: "9",
        title: "Controversies and legal inquiries",
        paragraphs: [
          `Despite widespread acclaim, Sara's career has not been entirely free from spirited domestic controversy. Several high-profile inquiries remain open:`
        ],
        subsections: [
          {
            id: "coffee-incident",
            number: "9.1",
            title: "The Great Coffee Incident of 2023",
            paragraphs: [
              `In late autumn 2023, Sara was implicated in the sudden disappearance of a premier caffeinated beverage. While the defense argued the coffee was "offered in spirit", eyewitnesses noted Sara was already smiling and walking away before consent could be verbally finalized. The matter was settled out of court for two cinnamon buns.<sup>[3]</sup>`
            ]
          },
          {
            id: "hoodie-allegations",
            number: "9.2",
            title: "Allegations of unauthorized heart acquisition",
            paragraphs: [
              `Sara has repeatedly faced allegations of running an international heart redistribution ring. Investigators report that at least seven broken hearts belonging to rugby boys have crossed into Sara's sovereign collection without formal customs declarations.`,
              `When questioned by independent media, Sara's official spokesperson delivered the landmark defense: <em>"It looks significantly with her anyway."</em> The case was indefinitely dismissed due to overwhelming photographic evidence supporting the defense.<sup>[2]</sup>`
            ]
          },
          {
            id: "sleep-schedule",
            number: "9.3",
            title: "The Disputed Sleep Schedule Accord",
            paragraphs: [
              `Debate continues regarding Sara's diurnal cycle. While she officially identifies as an early riser, empirical timestamp records indicate her most active texting hours coincide with the nocturnal foraging habits of the European badger. Research into this paradox is ongoing.<sup>[6]</sup>`
            ]
          },
          {
            id: "safestay-incident",
            number: "9.4",
            title: "The Safestay Reception Incident ('The Coffee Machine & Vinyl Record Affair')",
            figure: {
              src: "assets/sara-broken-vinyl.jpg",
              alt: "Security camera still of Sara carrying a cardboard box filled with shattered vinyl records away from reception",
              caption: "Fig 3. Declassified security camera still (Safestay reception, c. 2024) purportedly capturing Sara transporting a cardboard container filled with the shattered fragments of the disputed vinyl record away from the front desk."
            },
            paragraphs: [
              `In what hospitality historians and consumer dispute tribunals designate the <em>Safestay Reception Incident</em>, Sara became the central figure of a formally filed, internationally viral 1-star review titled <strong>"HORRIBLE TREATMENT BY THE RECEPTIONIST"</strong> (original Spanish: <em>"TRATO HORRIBLE POR PARTE DE LA RECEPCIONISTA"</em>).<sup>[7]</sup>`,
              `According to the lodging complaint, an aggrieved traveling couple lodged at the hostel reported encountering a receptionist named Sarah—formally identified in the complaint as <em>"a Caucasian girl with straight brown hair"</em>—whom they described as <em>"rude and somewhat ill-mannered from the very first moment."</em><sup>[7]</sup>`,
              `The confrontation reached diplomatic prominence following an operational breakdown of the guest common-room coffee vending apparatus. Seeking morning caffeine to recover from extensive walking the previous day, the guest descended to the reception lobby in what the official filing records as <em>"messy hair and comfortable clothes so I could go back up right away."</em> Upon observing the disheveled patron, Sara reportedly <em>"immediately burst out laughing without holding back"</em> and <em>"couldn't even look at me,"</em> creating documented secondhand embarrassment among adjacent front-desk colleagues.<sup>[7]</sup>`,
              `The review concluded with further unresolved allegations regarding a 5€ per person late-checkout storage fee and the subsequent mysterious disappearance of a shopping bag containing sunglasses and a locally purchased vinyl record.<sup>[7]</sup>`,
              `Major forensic breakthroughs emerged following the declassification of internal hostel security camera stills (see Fig. 3). The footage unequivocally depicts Sara carrying a cardboard carton filled to capacity with shattered shards of black vinyl records across the dining floor, while front-desk colleagues observe in stunned contemplation. Independent analysts note that while the structural integrity of the vinyl was evidently compromised, Sara's posture, composure, and aesthetic presence remained flawless throughout the disposal operation.`
            ],
            reviewBox: {
              title: "HORRIBLE TREATMENT BY THE RECEPTIONIST / TRATO HORRIBLE POR PARTE DE LA RECEPCIONISTA",
              meta: "Verified Hostel Review • 1.0/5.0 Stars • Incident Location: Safestay Hostel Reception Desk",
              textEn: `Hello. I want to share the experience my partner and I had with this hostel. It's a well-located place, with clean facilities and comfortable rooms. The downside is that there's a party venue opposite and it's very noisy until 3 in the morning. That's why I recommend always traveling to hostels with wax or silicone earplugs. That's why, and also because of having to work around other people's schedules. Most of the workers are pleasant and willing. Everyone except a receptionist named Sarah (a Caucasian girl with straight brown hair). From the very first moment she was rude and somewhat ill-mannered, but well, you can't expect everyone to serve you with a smile. That wasn't the problem. One of the problems was one day I decided to go down to the breakfast room for a coffee where you can pay from the machine. We wanted a coffee to wake up. We were very tired from walking so much the day before, so I decided to go downstairs with messy hair and comfortable clothes so I could go back up right away. I finally had to go to reception to order coffees from the reception machine, as the one in the common room wasn't working. When Sarah saw me, she immediately burst out laughing without holding back. He couldn't even look at me. It was quite uncomfortable and made me feel very bad. Even his colleagues felt uncomfortable. I simply made the decision to go downstairs for some quick coffees. Since I understand that we are not in a 5-star hotel and that there is no protocol or etiquette. I went up to the room feeling very unwell. Nobody likes being laughed at. The other problem, and the reason I'm writing this review, was that we got the departure time wrong. Therefore, our belongings were left on the beds, for which you pay €5 per person, which we thought was fine. But when we went to collect our things, a bag containing a vinyl record that we decided to buy at a local store and some sunglasses were missing.`,
              textEs: `Hola. Quiero contar la experiencia que tuvimos mi pareja y yo con este hostal. Es un lugar bien ubicado, con las instalaciones limpias y las habitaciones cómodas. Tiene el inconveniente de que enfrente hay un local de fiesta y hay mucho ruido hasta las 3 de la mañana. Por eso yo encomiendo viajar de hostal siempre con tapones de cera o silicona . Por eso y por convivir con los horarios de otras personas. La mayoría de los trabajadores agradables y dispuestos. Todos menos una recepcionista llamada Sarah (una chica caucásica con el pelo castaño y liso). Desde el primer momento ya fue borde y algo mal educada, pero bueno, no se le puede exigir a todo el mundo que te atienda con una sonrisa. El problema no ha sido ese. Uno de los problemas fue un día que decidí bajar a por un cafe a la sala del desayuno donde puedes pagar el desde la maquina. Queríamos una cafe para despertar. Estabamos muy cansados de tanto caminar el día anterior, así que decidí bajar despeinada y cómoda para subir enseguida. Finalmente tuve que ir a la recepción a pedirles los cafés desde la maquina de la recepción, ya que la de la sala común no funcionaba. Cuando Sarah me vio, directamente se echo a reír sin cortarse. No podía ni mirarme. Fue bastante incomodo y me hizo sentir muy mal. Hasta sus compañeros se sintieron incomos. Yo simplemente tome la decisión de bajar cómoda a por unos cafés rapidos. Ya que entiendo que no estamos en un hotel de 5 estrellas y que no hay protocolo ni etiqueta. Subí a la habitación sintiendo mucho mal estar. A nadie le gusta que se rían de uno de forma. El otro problema y por el que pongo está reseña, ha sido que nos confundimos en la hora de salida. Con lo cual nuestras pertenecias se quedaron en las camas, cosa por la que pagas 5€ por persona, algo que nos ha parecido bien. Pero cuando hemos ido a recoger nuestras cosas, faltaba una bolsa con un vinilo que decidimos comprar en una tienda local y unas gafas de sol.`
            }
          },
          {
            id: "pink-slime-incident",
            number: "9.5",
            title: "The Pink Slime Contamination Inquiry and 'Top 10 Prettiest Girls' Incident",
            figure: {
              src: "assets/sara-slime.jpg",
              alt: "Overhead CCTV security footage of Sara holding a pink slime sample at the reception desk",
              caption: "Fig 4. Declassified front-desk surveillance capture (c. 2025) depicting Sara holding an unclassified sample of the non-Newtonian pink slime during a departmental inquiry. The surveillance still was later unintentionally compiled into the viral video countdown <em>'Top 10 Prettiest Girls of All Time'</em>."
            },
            paragraphs: [
              `In late 2025, Safestay Edinburgh operational leadership convened an emergency internal inquiry following reports of widespread tactile anomalies across the front desk, formally designated the <strong>Pink Slime Incident</strong>. Morning receptionists, maintenance supervisors, and arriving guests reported discovering traces of an unidentified, non-Newtonian viscous pink substance distributed across keycard encoders, communal pens, keyboard spacebars, and the marble counter surface.<sup>[4]</sup>`,
              `Surveillance investigators reviewing overhead closed-circuit television (CCTV) footage successfully identified the source when camera 3 captured Sara seated at Terminal A clutching an active sample of the fluorescent pink compound in her palm (see Fig 4). When formally confronted by shift management regarding the presence of hazardous leisure putty in an active hospitality reception zone, Sara delivered an unyielding defense, asserting that the substance was strictly required for <em>"tactile anxiety regulation and aesthetic desk enrichment"</em> and denying that she had weaponized it against colleagues.<sup>[1]</sup>`,
              `The incident escalated to international internet fame when an anonymous staff member exported the high-angle CCTV still as forensic evidence for the hostel disciplinary tribunal. Due to an algorithmic categorization error and rapid dissemination across imageboards, the grainy security still was harvested by a popular media aggregation channel and featured prominently in the viral video countdown <strong>"Top 10 Prettiest Girls of All Time"</strong>.<sup>[2]</sup> Independent media commentators noted the unprecedented surrealism of an employee being ranked among the most beautiful women in human history solely based on a low-resolution security camera still taken while being investigated for workplace slime distribution.<sup>[8]</sup> Confronted with universal public adoration in the YouTube comments, hostel management suspended all formal disciplinary sanctions.<sup>[5]</sup>`
            ]
          }
        ]
      },
      {
        id: "rodriguez-run",
        number: "10",
        title: "Video game adaptation: RodriguezRun (2024)",
        figure: {
          src: "assets/rodriguez-run.jpg",
          alt: "RodriguezRun video game loading screen",
          caption: "Fig 5. Official title and loading screen of <em>RodriguezRun</em> (2024), an infinite-runner mobile title engineered by an anonymous admirer following Sara's May 2024 Eras Tour expedition in Madrid. The title was permanently delisted after selling two copies following cease-and-desist litigation by Sara's husband."
        },
        paragraphs: [
          `In mid-2024, following Sara's high-profile attendance at Taylor Swift's The Eras Tour at the Santiago Bernabéu Stadium (see Section 6.12), an anonymous indie programmer and devoted admirer developed a dedicated mobile infinite runner titled <em>RodriguezRun</em> (see Fig 5). Designed as an interactive tribute to Sara's international notoriety, the game cast Sara as the titular protagonist navigating the bustling urban landscape of Madrid in a high-speed sprint toward the Bernabéu.<sup>[2]</sup>`,
          `Despite underground critical acclaim and widespread amusement among hostel staff, the game experienced one of the most abrupt commercial suppressions in modern software history, recording a lifetime gross volume of exactly two copies before being aggressively deplatformed following domestic legal intervention.<sup>[3]</sup>`
        ],
        subsections: [
          {
            id: "rodriguez-run-gameplay",
            number: "10.1",
            title: "Premise and gameplay mechanics",
            paragraphs: [
              `Set against the sun-baked thoroughfares of central Madrid—including 16-bit algorithmic renderings of the Gran Vía, Plaza Mayor, and Paseo de la Castellana—<em>RodriguezRun</em> challenged players to maintain forward momentum while evading an array of escalating municipal hazards. Obstacles included gridlocked scooter traffic, overzealous municipal police officers, rogue pigeons, and outdoor paella dining tables. Players collected freshly brewed double espressos and churros to replenish sprint stamina, with the primary objective of storming the gates of the Santiago Bernabéu Stadium before the opening chords of <em>"Cruel Summer"</em>.<sup>[2]</sup>`,
              `The title featured dynamic obstacle physics directly inspired by documented incidents in Sara's biography, such as sudden thermal drop-offs that reduced Sara's sprint velocity if she traversed shaded alleyways without adequate duvet insulation.<sup>[4]</sup>`
            ]
          },
          {
            id: "rodriguez-run-characters",
            number: "10.2",
            title: "Playable characters and unlockable skins",
            paragraphs: [
              `A central attraction of <em>RodriguezRun</em> was its meta-historical roster of unlockable character variants, each commemorating a specific campaign from Sara's recorded travels, public disputes, or collegiate athletics:<sup>[1]</sup>`
            ],
            table: {
              caption: "Table 1. Documented Character Roster and Mechanical Attributes in RodriguezRun",
              headers: ["Character Variant", "Biographical Lore Source", "In-Game Ability / Special Trait", "Aesthetic Profile"],
              rows: [
                [
                  "<strong>Standard Sara</strong>",
                  "Baseline contemporary persona (2024)",
                  "Standard sprint velocity; +15% boost when within 50m of specialty coffee vendors.",
                  "Madrid casual streetwear with oversized jacket and high-top sneakers."
                ],
                [
                  "<strong>Stink Sara</strong>",
                  "2022 Berlin Landespolizei döner scent inquest (Section 6.6)",
                  "<strong>Olfactory Shockwave:</strong> Emits an unblockable, garlic-infused döner vapor trail that disintegrates oncoming cars and repels police barricades.",
                  "Kreuzberg thrift coat, carrying a half-eaten kebab with extra garlic sauce."
                ],
                [
                  "<strong>Rugby Sara</strong>",
                  "Edinburgh Napier Women's Rugby Team stardom (Section 3.2)",
                  "<strong>Devastating Tackle:</strong> Heavy shoulder-charge ability that flings oncoming pedestrians into the Manzanares River while maintaining the <em>Prettiest Rugby Player</em> title.",
                  "Official red-and-white Napier collegiate kit with heavy knee strapping and immaculate ponytail."
                ],
                [
                  "<strong>Eras Tour Sara</strong>",
                  "Santiago Bernabéu concert expedition (Section 6.12)",
                  "<strong>Acoustic Decibel Immunity:</strong> Wields an indestructible plastic stadium chair; 10-minute 'All Too Well' bridge shout clears entire screen.",
                  "Draped in sparkling silver stadium sequins, friendship bracelets, and custom cat-eye eyeliner."
                ]
              ]
            }
          },
          {
            id: "rodriguez-run-suppression",
            number: "10.3",
            title: "Commercial release, husband intervention, and delisting",
            paragraphs: [
              `Commercially, <em>RodriguezRun</em> achieved legendary status for its brevity. Within three hours of its stealth launch on indie hosting portals, the title recorded a confirmed total of only two (2) verified sales worldwide.<sup>[3]</sup> The identity of the two purchasers remains an official secret, though forensic telemetry suggests both copies were acquired from IP addresses associated with Safestay Edinburgh reception terminals.`,
              `Before a third copy could be sold, distribution was abruptly and permanently terminated. Sara's husband (irrelevant person)—serving in his de facto capacity as Chief Anti-RodriguezRun Litigator—identified the digital storefront and dispatched a relentless barrage of cease-and-desist notifications, threatening nationwide copyright injunctions and direct physical sanctions.<sup>[7]</sup> Confronted with overwhelming domestic and legal retribution, the developer pulled all server binaries, purged the GitHub repository, and entered self-imposed digital witness protection.<sup>[2]</sup>`,
              `Consequently, <em>RodriguezRun</em> has achieved mythical status among retro-gaming enthusiasts and digital preservationists. The Video Game History Foundation classifies the two authenticated installed copies as priceless Holy Grails of modern software ephemera.<sup>[5]</sup>`
            ]
          }
        ]
      },
      {
        id: "sara-cinema",
        number: "11",
        title: "Cinematic adaptation: Sara the Spicy Señorita (2026)",
        figure: {
          src: "assets/sara-cinema-screenshot.svg",
          alt: "Interactive CRT terminal interface of Sara Cinema: Sara the Spicy Señorita",
          caption: "Fig 6. Interface capture of the interactive command-line romantic comedy film <em>Sara the Spicy Señorita</em> (2026), executing in a simulated Windows command prompt terminal (<code>cmd.exe</code>) with CRT phosphor scanline emulation, Safestay reception ASCII scenography, and the dynamic Romance Telemetry Meter."
        },
        paragraphs: [
          `Following the abrupt commercial suppression of the mobile infinite runner <em>RodriguezRun</em> (see <a href="#rodriguez-run">Section 10</a>), the creative unit designated "Sara Studios"—led by Safestay front-desk colleague and admirer Kieran (credited as director and co-star)—embarked on an ambitious digital adaptation: an interactive, feature-length command-line romantic comedy titled <em>Sara the Spicy Señorita</em> (see Fig 6).<sup>[2]</sup> Engineered to simulate an authentic Windows command prompt environment (<code>C:\\Windows\\System32\\cmd.exe</code>), the production synthesizes 1980s cathode-ray tube (CRT) terminal aesthetics with real-world Safestay Edinburgh workplace folklore.<sup>[6]</sup>`,
          `Prior to public distribution, the work was formally submitted to the parody classification body known as the "World Romance &amp; Drama Board", which granted the film the exclusive rating <strong>RATED [ S ] : EXCLUSIVELY FOR SARA SEÑORITA</strong>.<sup>[12]</sup> The accompanying official classification certificate explicitly alerted prospective audiences that the runtime contained <em>"extreme levels of cheesiness, uncontrolled cravings for Sara Señorita, and 100% genuine unconditional adoration."</em><sup>[12]</sup>`,
          `Unlike conventional passive cinema, <em>Sara the Spicy Señorita</em> is structured around branching decision trees and real-time emotional telemetry, tracked dynamically via the <strong>Sara Señorita Romance Meter</strong> (calibrated from an initial 30% baseline up to an astronomical 1,000,000%). Viewers navigate the screenplay via complete dual-input parity—using either physical keyboard shortcuts (<code>SPACE</code>, <code>ENTER</code>, numeric keys <code>1</code>–<code>3</code>) or responsive touch-action toolbars optimized for mobile devices.<sup>[2]</sup>`,
          `The complete feature production is maintained and hosted live on the public web at <a href="https://sararodriguez.co.uk/cinema/index.html" class="wiki-link" target="_blank" rel="noopener noreferrer">https://sararodriguez.co.uk/cinema/index.html</a>, with the original open-source codebase preserved in the project repository archives.<sup>[12]</sup>`
        ],
        subsections: [
          {
            id: "sara-cinema-acts",
            number: "11.1",
            title: "Narrative acts, branching choices, and romance telemetry",
            paragraphs: [
              `The screenplay unfolds chronologically across five principal narrative movements (Acts 0 through 4), tracking the protagonist's journey from front-desk hospitality duties to a cosmic rooftop confession:<sup>[12]</sup>`
            ],
            table: {
              caption: "Table 2. Dramatic Structure, Narrative Choices, and Dialogue in Sara the Spicy Señorita",
              headers: ["Act & Location", "Dramatic Premise", "Interactive Player Choice", "Mechanical Consequence & Dialogue"],
              rows: [
                [
                  "<strong>Act 0: Overture</strong><br><small>Sara Studios HQ / Cowgate</small>",
                  "Official studio fanfare and rating certification display.",
                  "<code>[SPACE]</code> to roll film.",
                  "Synthesized fanfare plays; World Romance Board Rating [S] certificate displayed."
                ],
                [
                  "<strong>Act 1: Reception</strong><br><small>Safestay Hostels Front Desk</small>",
                  "Sara is on morning duty looking radiant; Kieran (6ft 3) approaches the reception counter.",
                  "<strong>The Big Decision:</strong><br>1: Choose Kieran (6ft 3)<br>2: Stick with current boyfriend (Mid)",
                  "Selecting Option 2 initiates an immediate screen-shake and redirect loop (<em>'Nice try Sara, why don't you try the other answer?'</em>); selecting Option 1 triggers success chimes and raises Romance Meter to 55%."
                ],
                [
                  "<strong>Act 2: VIP Cinema</strong><br><small>Odeon VIP Cinema</small>",
                  "Kieran and Sara share popcorn watching <em>Spider-Man: No Way Home</em>.",
                  "<strong>Scene Selection:</strong><br>1: Rooftop Peter 1, 2 &amp; 3 Meet<br>2: Science Lab Bonding<br>3: Statue of Liberty Climax",
                  "Unanimous quote delivery: <em>'You\\'re my MJ, Sara'</em> or <em>'Our chemistry is 100x stronger than this whole lab!'</em>; Romance Meter escalates to 80%."
                ],
                [
                  "<strong>Act 3: Candlelit Lounge</strong><br><small>Safestay Candlelit Lounge</small>",
                  "Romantic dinner accompanied by procedural acoustic flamenco guitar strums.",
                  "<strong>Culinary Menu:</strong><br>1: Safestay Pizza<br>2: Stale Pain au Chocolat<br>3: Authentic Spanish Tapas",
                  "Kieran delivers admiring commentary (<em>'I love the taste of Spain, and I\\'m not talking about the food...'</em>); Romance Meter reaches 95%."
                ],
                [
                  "<strong>Act 4: Rooftop Finale</strong><br><small>Safestay Rooftop under Stars</small>",
                  "Midnight rooftop scene overlooking Cowgate with Three Sisters pub noise in background.",
                  "<strong>Final Proposal:</strong><br>1: Official breakup text<br>2: Undying love confession<br>3: Immediate proposal",
                  "Detonates ASCII heart pyrotechnics; victory fanfare sounds; Romance Meter peaks at 1,000,000%; scrolling end credits confirm a budget of <em>'3 shifts this week'</em> and 100% eternal happiness."
                ]
              ]
            }
          },
          {
            id: "sara-cinema-tech",
            number: "11.2",
            title: "Audiovisual synthesis, Web Audio engine, and CRT scanline emulation",
            paragraphs: [
              `A noteworthy technical dimension of <em>Sara the Spicy Señorita</em> is its standalone procedural audio architecture (<code>audio.js</code>). Rather than streaming pre-recorded compressed audio files, the engine utilizes the native browser Web Audio API to procedurally generate sound waves in real time. The soundtrack features an algorithmic low-frequency brass resonance ('Dramatic Bwaam') tuned to mimic Hollywood suspense trailers, multi-frequency Spanish flamenco guitar rasgueados generated via complex chord oscillators, cardiac heartbeat thuds synthesized through low-pass sine filters, and browser-native text-to-speech narration (<code>speakNarrator()</code>).<sup>[12]</sup>`,
              `The visual presentation is powered by hardware-accelerated CSS and viewport DOM manipulations, including a dual-layer CRT phosphor scanline shader (toggleable via the top toolbar) and a CSS-driven viewport shake animation triggered during high-stakes emotional decisions.<sup>[12]</sup> Software historians note that while originally compiled for command-line Node.js execution with ANSI escape sequences (see <code>sara-cinema/</code>), the public web release successfully achieved complete platform ubiquity without sacrificing its retro terminal aesthetic.<sup>[2]</sup>`
            ]
          }
        ]
      },
      {
        id: "sara-script",
        number: "12",
        title: "Software engineering, 'Sara Script', and the Adjacent Terminal Flaw",
        figure: {
          src: "assets/diagram-sara-script.svg",
          alt: "Diagram illustrating Sara Script architecture and the Adjacent Terminal Paradox",
          caption: "Fig 7. Architectural schematic of <em>Sara Script 1.0</em> (2026). Despite multi-tiered WinRT toast delivery algorithms, 100% of romantic shift notifications failed to reach Sara because the software was configured on the reception terminal immediately adjacent to hers."
        },
        paragraphs: [
          `In mid-2026, software historians and Safestay workplace monitors uncovered an unauthorized, highly specialized Windows automation suite designated <strong>Sara Script 1.0</strong> (internal codename: <em>WorkdayGreeting</em> or <em>sscript</em>).<sup>[9]</sup> Archival code analysis confirmed that the software was engineered by an anonymous developer who was deeply and helplessly in love with Sara. The system was designed to silently fire automated, high-priority shift notifications and heartfelt messages onto her front-desk computer during her shifts, ensuring she felt appreciated even when the author was away.<sup>[9]</sup>`,
          `However, the deployment suffered from a catastrophic topological error known among computer scientists as the <strong>Adjacent Terminal Paradox</strong> (see Fig 7). The developer mistakenly installed the background daemon and registered the custom Windows Application User Model ID (AUMID) on the reception terminal <em>immediately adjacent</em> to Sara's workstation rather than Sara's own machine. Consequently, whenever Sara was away or working at her assigned post, the scheduled love messages, shift alarms, and commercial pitches would violently detonate with looping alarm chimes on the neighboring colleague's screen. Unsuspecting shift coworkers, night auditors, and newly hired trainees were repeatedly serenaded by urgent romantic toasts, while Sara remained entirely undisturbed mere inches away.<sup>[9]</sup>`,
          `Declassified forensic analysis of the self-destructing message queue (<code>messages.json</code>) revealed that the system spooled both romantic verse and impassioned grievances regarding hostel management software:<sup>[9]</sup>`
        ],
        table: {
          caption: "Table 3. Declassified Dispatch Queue from Sara Script 1.0 (messages.json Spool)",
          headers: ["Scheduled Date", "Time (UTC)", "Notification Title", "Message Payload & Sociological Intent"],
          rows: [
            [
              "<code>2026-08-15</code>",
              "<code>08:00</code>",
              "<strong>Sara youre so fine</strong>",
              "<em>\"Iwish u was mine?\"</em><br><small style=\"color:#54595d;\">A vulnerable, rhyming morning overture executed with an inquisitive question mark, delivered to a startled assistant night manager.</small>"
            ],
            [
              "<code>2026-08-16</code>",
              "<code>09:30</code>",
              "<strong>Shift Reminder</strong>",
              "<em>\"I love Sara and George\"</em><br><small style=\"color:#54595d;\">A diplomatic shift-greeting expanding domestic adoration to encompass George the canine/feline ally.</small>"
            ],
            [
              "<code>2026-08-24</code>",
              "<code>07:15</code>",
              "<strong>POOPBEDS LAUNCH</strong>",
              "<em>\"POOPBEDS LAUNCH TODAY! MAKE KEYCARDS WITHOUT SALTO, USE CLOUDBEDS WITHOUT LAG, CHARGE WITHOUT WAITING 30 SECS AND EVEN AUTO FOLIO SOLD ITEMS! ONLY £5 PER MONTH, SARA IS £0\"</em><br><small style=\"color:#54595d;\">A revolutionary hospitality SaaS pitch contrasting sluggish industry tools with Sara's complimentary lifetime enterprise tier.</small>"
            ]
          ]
        },
        codeSnippets: [
          {
            title: "Listing 1. Custom AUMID Registration & Looping Alarm Audio (Show-Notification.ps1 & Manage-Schedule.ps1)",
            code: `# Excerpt from Manage-Schedule.ps1 & Show-Notification.ps1 (Sara Script 1.0)
$CustomAppId = 'SafestayShiftReminder'
$TaskName    = 'WorkdayGreeting'

# Step 1: Register HKCU AUMID for bespoke Windows notification identity
$regPath = "HKCU:\\SOFTWARE\\Classes\\AppUserModelId\\$CustomAppId"
Set-ItemProperty -Path $regPath -Name 'DisplayName' -Value 'Sara Script 1.0'
Set-ItemProperty -Path $regPath -Name 'IconUri'     -Value '%windir%\\system32\\pifmgr.dll,-11'

# Step 2: Assemble urgent toast XML with looping alarm audio
$toastXml = @"
<toast duration="long" scenario="urgent">
  <visual>
    <binding template="ToastGeneric">
      <text>$safeTitle</text>
      <text>$safeMessage</text>
    </binding>
  </visual>
  <audio src="ms-winsoundevent:Notification.Looping.Alarm" loop="false"/>
</toast>
"@

# Step 3: Dispatch via Windows Runtime ToastNotificationManager
$mgr = [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
$mgr::CreateToastNotifier($CustomAppId).Show($toast)`,
            caption: "Source: Declassified PowerShell automation scripts from C:\\Users\\Reception\\...\\saraScript showing the 4-layer fallback cascade (WinRT -> WinForms NotifyIcon -> WScript.Shell Popup)."
          },
          {
            title: "Listing 2. Self-Destructing Message Match & Automatic Purge Queue (Show-Notification.ps1)",
            code: `# Excerpt: Show-Notification.ps1 date/time matching & self-destruct mechanism
$now = Get-Date
for ($i = 0; $i -lt $messages.Count; $i++) {
    $entry = $messages[$i]
    if ($entry.Date -eq $now.ToString('yyyy-MM-dd')) {
        $delta = ($now - [datetime]::Parse("$($entry.Date) $($entry.Time)")).TotalMinutes
        if ($delta -ge 0 -and $delta -le 5) {
            $matchItem = $entry
            # Purge matched message from JSON so it never displays twice
            $remaining = $messages | Where-Object { $_ -ne $entry }
            $remaining | ConvertTo-Json -Depth 5 | Set-Content $MessagesJson -Encoding UTF8 -Force
            break
        }
    }
} `,
            caption: "Self-destruct queue: Matched messages are purged immediately to preserve operational secrecy, even if read by the wrong coworker."
          }
        ]
      },
      {
        id: "cultural-impact",
        number: "13",
        title: "Cultural impact, admirer poetry, and digital real estate",
        paragraphs: [
          `Sara's influence on contemporary lifestyle doctrine is profound. She has popularized the concept of "deliberate coziness" and raised the national standard for banter. Multiple memes, playlists, a command-line romantic comedy film (see <a href="#sara-cinema">Section 11: Cinematic adaptation: <em>Sara the Spicy Señorita</em></a>), the suppressed mobile infinite runner <em>RodriguezRun</em> (see <a href="#rodriguez-run">Section 10: Video game adaptation: <em>RodriguezRun</em></a>), collegiate rugby terrace chants popular among Edinburgh Napier supporters, and widespread release delays across the global publishing industry in anticipation of her debut novel (see Section 2) have been generated directly as a consequence of her existence.<sup>[2]</sup>`
        ],
        subsections: [
          {
            id: "admirer-poem-verses",
            number: "13.1",
            title: "The 'Future Ex-Husband' Verses ('Sara, TJ's Girl')",
            paragraphs: [
              `Among the most celebrated literary artifacts in the SaraWiki canon is a 14-line lyrical poem titled <em>"Sara, TJ's Girl"</em>. Biographical scholars and textual forensic experts widely suspect the verses were composed by an anonymous admirer rumoured to be her <strong>future ex-husband</strong>.<sup>[10]</sup>`,
              `The complete text of the work, preserved in hostel shift folios and transcribed verbatim without editorial sanitization, reads as follows:`
            ],
            poem: {
              title: "Sara, TJ's Girl",
              author: "Anonymous Admirer (Rumoured: Future Ex-Husband)",
              citation: "Preserved in the Safestay Reception Folios & Domestic Archives (c. 2026)",
              stanzas: [
                [
                  "Sara, TJ's girl, the rumours are true,",
                  "the feelings I have are just for you.",
                  "I'll buy you a rose, a token so bold,",
                  "My feelings for you I must unfold."
                ],
                [
                  "Sara Your brown eyes shine oh so bright,",
                  "Nothing that comes out your mouth is Right.",
                  "Your face, a picture I long to hold,",
                  "A story of love that must be told."
                ],
                [
                  "This poem is my small token, now I have spoken,",
                  "For when you rejected me, my heart was broken."
                ],
                [
                  "Sara oh so stinky and sweet,",
                  "Everyone here can smell your feet."
                ],
                [
                  "Though your boyfriend may disagree,",
                  "Its Sara's gaze that captivates me."
                ]
              ]
            },
            paragraphsAfter: [
              `Textual analysts highlight the poem's striking emotional architecture, moving seamlessly from courtly romance (promising a bold rose) to affectionate mockery of her debate record (<em>"Nothing that comes out your mouth is Right"</em>—a direct challenge to her documented 99.8% win rate).<sup>[1]</sup> Stanza 3 chronicles solemn romantic heartbreak following an unsparing historical rejection, which immediately gives way to the work's most contentious sensory volta in Stanza 4 (<em>"Sara oh so stinky and sweet / Everyone here can smell your feet"</em>). While hostel staff initially interpreted this as an unprovoked podiatric indictment, literary scholars consider it a foundational motif in Sara-related verse, echoing her 2022 Berlin döner scent inquiry (see Section 6.6)<sup>[7]</sup> and re-framing her aroma as artisanal European character. The fifth stanza achieves lyrical resolution by addressing the boyfriend directly, concluding that regardless of external protestations, her gaze maintains an uncontested monopoly on workplace adoration.<sup>[10]</sup>`
            ]
          },
          {
            id: "domain-auction",
            number: "13.2",
            title: "The $3.2 Million Digital Real Estate Auction (2026)",
            paragraphs: [
              `In early 2026, Sara's cultural footprint precipitated an unprecedented crisis in digital real estate during the international auction of the <em>sararodriguez.com</em> domain name. The auction escalated into a high-stakes standoff between multinational technology conglomerates: Microsoft (reportedly intending to rebrand Windows Copilot under her persona) and Meta Platforms (with Mark Zuckerberg seeking to secure her digital sovereignty for the Metaverse) submitted aggressive eight-figure corporate bids. However, in a stunning denouement to the Sotheby's domain gavel, an anonymous private owner successfully fended off both tech giants, acquiring the domain for a record-shattering <strong>$3.2 million</strong>. Technology columnists noted that this marks the first instance in internet history where Big Tech was decisively routed by a private bidder acting purely out of devotion to preserving Sara-related online lore.<sup>[3]</sup>`
            ]
          }
        ]
      },
      {
        id: "reception",
        number: "14",
        title: "Critical reception",
        paragraphs: [
          `Critical reception of Sara among domestic analysts has been universally positive. A 2026 poll conducted among members of her household revealed 100% agreement on the proposition: <em>"Sara is an extraordinary human being who deserves all the chocolate and tapas in the world."</em><sup>[3]</sup>`,
          `In contrast to domestic adoration, external hospitality evaluations have proven more contested. Commercial review aggregators document one prominent 1-star critique characterizing Sara's reception desk interactions as <em>"horrible treatment"</em>, citing unprovoked morning laughter and disputed vinyl custody.<sup>[7]</sup>`,
          `However, this isolated complaint was decisively overshadowed by a landmark 5.0/5.0 Google Maps review filed by verified traveler Hannah Cook. Cook officially certified Sara (alongside colleague Shubhi) as <em>"such a vibe"</em> and <em>"super helpful"</em>, awarding flawless 5.0 marks across Rooms, Service, and Location. The critique also commended Keiran's customer service via Mars bar and recognized Susmit as Edinburgh's premier <em>"crazy dude"</em>.<sup>[8]</sup> Hospitality historians consider Cook's evaluation definitive evidence of Sara's unshakeable front-desk supremacy.`,
          `In athletic commentary, Scottish university rugby commentators have praised Sara's commanding performances for the Napier Women's team, noting that she combines elite open-field tackling with unprecedented pitch-side glamour, cementing her unanimous title as the university's Prettiest Rugby Player.`,
          `Peer reviews in academic journals have occasionally criticized the methodology of her admirers for "egregious bias", but critics have repeatedly conceded that she is, in fact, "extremely cool".`
        ],
        reviewBox: {
          type: "positive",
          stars: "★★★★★",
          rating: "5.0 / 5.0 (Verified Google Review)",
          title: "\"SUCH A VIBE, SUPER HELPFUL\" — GOOGLE MAPS REVIEW",
          meta: "Hannah Cook • 5/5 Stars • Safestay Edinburgh • Verified Google Maps Patron",
          text: "All the staffs are amazing! Great place to stay in town especially on a budget! Susmit is super funny hahaha, crazy dude, my first best friend in Edinburgh hahaha. Thank you Keiran for the mars bar, excellent customer service. Shubhi and Sara, you guys are such a vibe, super helpful.",
          scores: [
            { label: "Rooms", value: "5.0" },
            { label: "Service", value: "5.0" },
            { label: "Location", value: "5.0" }
          ],
          response: {
            author: "Response from the owner (Safestay Team)",
            text: "Dear Hannah, Thank you for the great review of our hotel! We are glad that you enjoyed your stay and hope to see you again very soon. Sincerely, Safestay Team"
          }
        }
      },
      {
        id: "trivia",
        number: "15",
        title: "Trivia and classified facts",
        list: [
          `Sara can navigate a restaurant menu in 12 seconds flat and order the exact best item on the table every single time.`,
          `Only two copies of the video game <em>RodriguezRun</em> were ever legally sold before Sara's husband shut down production with extreme legal prejudice.`,
          `The simulated screen-shake in Sara Cinema's Act 1 is mathematically programmed to repeat indefinitely until the user selects Kieran over the mid boyfriend.`,
          `At the $3.2 million auction for <em>sararodriguez.com</em>, representatives from Microsoft and Meta reportedly left the Sotheby's digital floor in disbelief after being outbid in increments of $100,000 by an anonymous private collector.`,
          `Sara Script 1.0 was technically capable of waking sleeping hostel guests on the third floor with its Looping.Alarm sound effect, yet Sara herself never heard a single chime due to the 1.2-metre physical terminal gap.`,
          `Scholarly debates continue regarding the identity of the 'Future Ex-Husband' author, with several Safestay regulars attempting to analyze the handwriting on the original manuscript draft of 'Sara, TJ's Girl'.`,
          `J.K. Rowling and several leading fiction authors reportedly have multiple Google Alerts enabled for Sara's draft delivery date to protect their quarterly sales.`,
          `Safestay Edinburgh maintains a strict 'Yearner Containment Protocol' prohibiting front-desk staff from making excessive eye contact while Sara works on her manuscript.`,
          `Her laughter has been scientifically proven to increase surrounding happiness indices by 340%.`,
          `She possesses a sixth sense for when somebody is eating chocolate nearby.`,
          `Secret cheat code: Typing the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) on this very page unlocks classified archives.`,
          `Sara once declared that socks are "strictly mandatory" during winter months, causing global blanket stock prices to surge.`,
          `Opposing teams facing the Edinburgh Napier Women's Rugby squad reportedly suffer a documented 68% drop in scrum focus when realizing Sara is lining up across the pitch.`,
          `During the Cowgate Collision incident, the struck admirer reportedly begged Police Scotland officers to arrest him instead for wasting their time, maintaining that Sara's strike had merely 'bestowed an unmerited celestial blessing'.`
        ]
      },
      {
        id: "see-also",
        number: "16",
        title: "See also",
        list: [
          `<a href="https://sararodriguez.co.uk/cinema/index.html" class="wiki-link internal-cinema-link" target="_blank" rel="noopener noreferrer">Sara Cinema: Sara the Spicy Señorita</a> — The interactive command-line romantic comedy film (live at sararodriguez.co.uk)`,
          `<a href="#talk" class="wiki-link">SaraWiki Talk Page</a> — Ongoing scholarly debates regarding snack distribution`,
          `<a href="#history" class="wiki-link">Revision History</a> — Comprehensive audit of revisions and bot reverts`,
          `<em>The Geopolitics of Hoodies</em> (Oxford University Press, 2024)`,
          `<em>Socarrat: The Ultimate Spanish Saffron Guide</em>`
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. REFERENCES AND CITATIONS (Clickable footnotes [1], [2], etc.)
  // ---------------------------------------------------------------------------
  references: [
    {
      id: 1,
      text: "Admiring, R. (2024). <em>Empirical Studies on Why Sara is Invariably Right About Everything</em>. Journal of Domestic Certainty, 42(1), pp. 12–34."
    },
    {
      id: 2,
      text: "Kieran, K. (2025). <em>Field Observations Conducted at Highly Unreasonable Hours</em>. Personal Research Memoirs, Vol. IV, Safestay Press."
    },
    {
      id: 3,
      text: "Sara, S. (2023). <em>I Told You So: A Practical Guide to Being Correct</em>. Unpublished domestic kitchen manuscript, cited with permission."
    },
    {
      id: 4,
      text: "Department of Snack Security (2025). <em>Annual Audit on Missing Jamón Croquetas and Safestay Pastries</em>. Ministry of Romance Bulletin, Report #882."
    },
    {
      id: 5,
      text: "Independent survey of mutually consulted friends, all of whom were heavily coerced and provided zero contradicting testimony."
    },
    {
      id: 6,
      text: "Researcher's Own Heart (2026). <em>Unconditional Findings Submitted Without Peer Review Due to Obvious Emotional Compromise</em>."
    },
    {
      id: 7,
      text: "Disgruntled Hostel Guest (2024). <em>TRATO HORRIBLE POR PARTE DE LA RECEPCIONISTA / HORRIBLE TREATMENT BY THE RECEPTIONIST</em>. Safestay Hostel Public Review Bulletin, lodging sector. Formally filed complaint regarding morning coffee decorum, uncontained bedhead hilarity, and an unrecovered vinyl record."
    },
    {
      id: 8,
      text: "Cook, H. (2025). <em>\"All the staffs are amazing! ... Shubhi and Sara, you guys are such a vibe, super helpful.\"</em> Verified Google Maps Review, Safestay Edinburgh (Rooms: 5.0, Service: 5.0, Location: 5.0). Confirms Sara and Shubhi's certified vibe, Keiran's Mars bar customer service, and Susmit's status as a crazy dude."
    },
    {
      id: 9,
      text: "Safestay Reception Surveillance Taskforce (2026). <em>Technical Deconstruction of 'Sara Script 1.0': PowerShell Scheduled Task Automation, messages.json Spool Queue, and the Adjacent Terminal Displacement Paradox</em>. Safestay Digital Forensics Quarterly, Edinburgh."
    },
    {
      id: 10,
      text: "Department of Romantic Literature & Domestic Jurisprudence (2026). <em>Critical Hermeneutics of the 'Future Ex-Husband' Ode: Rhyme Scheme, Podiatric Commentary, and Romantic Defeat</em>. Safestay Literary Review, Vol. I, Edinburgh."
    },
    {
      id: 11,
      text: "Police Scotland Division E Incident Log (2026). <em>Dispatched Inquiry into Cowgate Physical Contact Event: Victim Obstruction, Refusal to Name Suspect, and Formal Characterization of Strike as a 'Blessed Touch'</em>. Edinburgh City Centre Nightlife Command."
    },
    {
      id: 12,
      text: "World Romance &amp; Drama Board (2026). <em>Official Classification Certificate for 'Sara the Spicy Señorita': RATED [ S ] with Technical Audio Analysis and Script Breakdown</em>. Corazón Studios &amp; Safestay Cinema Guild, Cowgate."
    },
    {
      id: 13,
      text: "Autonomous SaraWiki Agent Daemon v4.1 (September 2026). <em>Core Dump: Live Geolocation Synchronization Fault During Republic of Ireland Deployment</em>. Neural Wiki Foundation System Logs, Dublin/Edinburgh."
    }
  ],

  // ---------------------------------------------------------------------------
  // 7. CATEGORIES (Wikipedia Catlinks footer)
  // ---------------------------------------------------------------------------
  categories: [
    "Living people",
    "Entities of significant domestic interest",
    "Unofficial national treasures",
    "Suspected hoodie hoarders",
    "Safestay superstars",
    "Spanish tapas connoisseurs",
    "Individuals with undisputed rightness",
    "Subjects of controversial 1-star hospitality reviews",
    "Certified 'such a vibe' individuals",
    "Edinburgh Napier University Women's RFC players",
    "Collegiate rugby award recipients",
    "Subjects of admirer poetry",
    "Bespoke PowerShell automation systems",
    "Recipients of adjacent terminal routing failures",
    "Command-line romantic comedy adaptations",
    "Works rated S for Sara",
    "Cowgate nocturnal incidents",
    "Beneficiaries of civilian police obstruction",
    "Active expeditions in progress",
    "Pages with unrecoverable AI parser errors"
  ],

  // ---------------------------------------------------------------------------
  // 8. TALK / DISCUSSION PAGE (The hilarious fake Wikipedia Talk page)
  // ---------------------------------------------------------------------------
  talkThreads: [
    {
      id: "talk-1",
      title: "Neutrality Dispute: Is the article excessively flattering?",
      status: "Resolved (Consensus: Accuracy overrides neutrality)",
      posts: [
        {
          author: "User:Editor42",
          timestamp: "10:14, 2 March 2026 (UTC)",
          content: "I must raise a formal neutrality flag (WP:NPOV). Phrases such as 'radiant warmth' and 'unmatched aesthetic sense' read less like an encyclopedia and more like an admirer writing a love letter in disguise."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "10:45, 2 March 2026 (UTC)",
          content: "I reject this criticism entirely. All assertions are supported by empirical evidence. I have approximately 400 photographs and twelve independent eyewitness testimonies confirming her coolness."
        },
        {
          author: "User:SarasBoytoy",
          timestamp: "11:01, 2 March 2026 (UTC)",
          content: "Im such a little boy."
        },
        {
          author: "User:Editor42",
          timestamp: "11:02, 2 March 2026 (UTC)",
          content: "Photographs taken by yourself do not constitute an academic peer review."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "11:15, 2 March 2026 (UTC)",
          content: "They do in this encyclopedia. Motion dismissed."
        }
      ]
    },
    {
      id: "talk-2",
      title: "Clarification needed on heart ownership",
      status: "Archived (Unresolved legal dispute)",
      posts: [
        {
          author: "User:HeartSeeker",
          timestamp: "14:22, 5 March 2026 (UTC)",
          content: "Section 8.2 implies that the heart was gifted. It was explicitly loaned during a 14-minute breeze. When will it be returned?"
        },
        {
          author: "User:SaraWikiAdmin",
          timestamp: "14:38, 5 March 2026 (UTC)",
          content: "Under Section 4 of the heart Protocol, any heart held by Sara for greater than 10 minutes automatically transitions to permanent adverse possession. The heart is no longer his."
        }
      ]
    },
    {
      id: "talk-3",
      title: "Nomination for 'Good Article' status",
      status: "Promoted to GA",
      posts: [
        {
          author: "User:Reviewer99",
          timestamp: "18:00, 7 March 2026 (UTC)",
          content: "Reviewing this article against Good Article criteria. Prose is engaging, sources are hilariously questionable, and subject is undoubtedly iconic. Passing with flying colors."
        }
      ]
    },
    {
      id: "talk-4",
      title: "Inclusion of 1-star review: 'HORRIBLE TREATMENT BY THE RECEPTIONIST'",
      status: "Active Debate (Consensus: Encyclopedic value is undeniable)",
      posts: [
        {
          author: "User:HostelCritic99",
          timestamp: "16:20, 8 March 2026 (UTC)",
          content: "A viral 1-star review titled 'TRATO HORRIBLE POR PARTE DE LA RECEPCIONISTA' has been circulating. The reviewer claims Sara laughed directly in their face because their hair was messy while ordering coffee, and implies she orchestrated the disappearance of a vinyl record. Per WP:BALANCE, this negative review must be documented in full."
        },
        {
          author: "User:SaraDefenseBot",
          timestamp: "16:34, 8 March 2026 (UTC)",
          content: "The review is clearly unverified hearsay. Furthermore: 1) The common room coffee machine was broken, which is an act of God; 2) Bedhead of that magnitude warrants spontaneous laughter under European human rights conventions; 3) What would Sara even do with an unverified vinyl record?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "16:50, 8 March 2026 (UTC)",
          content: "I have added both the English translation and original Spanish text into Section 8.4 under Controversies. It proves she has undeniable comedic timing even while on duty."
        }
      ]
    },
    {
      id: "talk-5",
      title: "Rebuttal to 1-star review via Hannah Cook's 5-star Google review",
      status: "Closed (Consensus: Vibe is indisputable)",
      posts: [
        {
          author: "User:SaraDefenseBot",
          timestamp: "17:10, 10 March 2026 (UTC)",
          content: "The disputed Safestay coffee machine controversy has been definitively rebutted by Hannah Cook's 5.0/5.0 Google Maps review. The filing formally establishes Sara and Shubhi as 'such a vibe' and 'super helpful'. Furthermore, Keiran's customer service via Mars bar demonstrates peak institutional excellence."
        },
        {
          author: "User:Editor42",
          timestamp: "17:25, 10 March 2026 (UTC)",
          content: "Did Keiran's Mars bar constitute an official diplomatic overture to influence the review rating?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "17:40, 10 March 2026 (UTC)",
          content: "The Mars bar was pure Scottish diplomatic goodwill. 5.0 across Rooms, Service, and Location speaks for itself. The vibe has been peer-reviewed."
        }
      ]
    },
    {
      id: "talk-6",
      title: "Neutrality dispute regarding the Berlin döner arrest and Milan flight ejection",
      status: "Open (Pending diplomatic resolution)",
      posts: [
        {
          author: "User:EuroLawScholar",
          timestamp: "18:05, 11 Sep 2026 (UTC)",
          content: "Section 6.6 claims Sara was apprehended in Kreuzberg for being 'criminally stinky' from döner kebabs. Is this corroborated by Berlin Landespolizei records, or is it defamatory slander authored by disgruntled hostel staff?"
        },
        {
          author: "User:SaraDefenseBot",
          timestamp: "18:18, 11 Sep 2026 (UTC)",
          content: "The Landespolizei record clearly documents that the presiding judge dismissed all charges and designated her scent an 'artisanal European musk'. Furthermore, Section 6.11 regarding her flight ejection in Milan is verified by ITA Airways: passenger unrest did in fact break out due to extreme prettiness and Biscotti throwing."
        },
        {
          author: "User:Editor42",
          timestamp: "18:32, 11 Sep 2026 (UTC)",
          content: "I propose tagging Section 6 as [needs international arbitration] until the Swiss Confederation formally withdraws its UN grievance over the praline quality assessment."
        }
      ]
    },
    {
      id: "talk-7",
      title: "Legality and preservation of the delisted video game 'RodriguezRun'",
      status: "Resolved (Cease-and-desist enforced)",
      posts: [
        {
          author: "User:RetroArchivist_ES",
          timestamp: "19:12, 11 Sep 2026 (UTC)",
          content: "Regarding Section 10: Has anyone managed to preserve a digital dump of *RodriguezRun*? Given that only two legitimate copies were sold prior to the developer receiving multiple stern ultimatums from Sara's husband, this title is at severe risk of becoming digital lost media."
        },
        {
          author: "User:KieranLegalDefense",
          timestamp: "19:24, 11 Sep 2026 (UTC)",
          content: "As counsel for the household, I must remind all contributors that distribution of *RodriguezRun*—specifically the 'Stink Sara' and 'Rugby Sara' skins—constitutes a flagrant breach of domestic sovereignty. The cease-and-desist stands. The developer was let off with a polite yet terrifying warning."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "19:35, 11 Sep 2026 (UTC)",
          content: "The 'Eras Tour Sara' sprite with the chair-dancing bonus animation was objectively top-tier game design. That said, Kieran's enforcement was swift, justified, and hilarious."
        }
      ]
    },
    {
      id: "talk-8",
      title: "Scholarly validity of the 'Prettiest Morning Shift Award'",
      status: "Closed (Consensus: 100% aesthetic rating at 06:45 AM verified)",
      posts: [
        {
          author: "User:HospitalityStandardsAuditor",
          timestamp: "19:50, 11 Sep 2026 (UTC)",
          content: "Section 3 claims Sara was awarded the 'Prettiest Morning Shift Award' in late 2024. Did the ceremony adhere to ISO 9001 hostel accreditation standards, or was the sky-blue sash worn purely for dramatic front-desk effect?"
        },
        {
          author: "User:SaraDefenseBot",
          timestamp: "20:05, 11 Sep 2026 (UTC)",
          content: "Fig 1 provides undeniable photographic evidence: the diploma features an embossed golden seal and Sara is visibly emotional. Furthermore, maintaining flawless winged eyeliner and radiant charisma at 06:45 AM on three hours of sleep exceeds all known hospitality benchmarks."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "20:18, 11 Sep 2026 (UTC)",
          content: "I personally witnessed the morning shift. Even the broken coffee machine looked slightly more functional in her presence. The award is 100% canon."
        }
      ]
    },
    {
      id: "talk-9",
      title: "Alleged manuscript leaks and Safestay 'Yearner Containment Protocol'",
      status: "Open (Under diplomatic monitoring)",
      posts: [
        {
          author: "User:BloomsburyEditor_Anon",
          timestamp: "20:35, 11 Sep 2026 (UTC)",
          content: "Can anyone corroborate rumors that J.K. Rowling has delayed her winter release cycle to avoid market overlap with Sara's debut book? Also, has anyone successfully transcribed the shift notes from Safestay reception?"
        },
        {
          author: "User:YearnerBrigade_Safestay",
          timestamp: "20:47, 11 Sep 2026 (UTC)",
          content: "Management has formally posted a warning near the keycards: staff caught staring wistfully while Sara types with two fingers will receive an official conduct note. That said, the forty-two words currently written are pure poetry."
        },
        {
          author: "User:SaraDefenseBot",
          timestamp: "21:02, 11 Sep 2026 (UTC)",
          content: "The fourteen Spotify playlists are structural prerequisites to literary genius. The manuscript will be delivered precisely when she feels cozy enough to export the PDF."
        }
      ]
    },
    {
      id: "talk-10",
      title: "Authentication of the $3.2M sararodriguez.com domain sale",
      status: "Closed (Consensus: Sotheby's transaction verified)",
      posts: [
        {
          author: "User:DomainVentureWatcher",
          timestamp: "21:20, 11 Sep 2026 (UTC)",
          content: "Did the sale of sararodriguez.com actually hit $3.2 million, or was this artificial wash trading orchestrated by enthusiastic Safestay regulars?"
        },
        {
          author: "User:TechEconReviewer",
          timestamp: "21:34, 11 Sep 2026 (UTC)",
          content: "ICANN and Sotheby's Digital confirmed the escrow release. Microsoft and Meta representatives were actively bidding until the $3.1M mark before the private buyer placed the winning $3.2M hammer bid."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "21:49, 11 Sep 2026 (UTC)",
          content: "Honestly, $3.2 million is a bargain considering it prevents Mark Zuckerberg from putting Sara's aesthetic likeness in the Metaverse."
        }
      ]
    },
    {
      id: "talk-11",
      title: "Napier Women's Rugby Team honors and scrum distraction tactics",
      status: "Closed (Consensus: Award is thoroughly deserved)",
      posts: [
        {
          author: "User:ScottishRugbyChronicle",
          timestamp: "22:05, 11 Sep 2026 (UTC)",
          content: "Is there formal verification from Edinburgh Napier University regarding the 'Prettiest Rugby Player Award'? And how does the squad account for her undefeated tackle statistics?"
        },
        {
          author: "User:NapierFan_RFC",
          timestamp: "22:18, 11 Sep 2026 (UTC)",
          content: "Can confirm as a sideline observer: Sara is an absolute force on the pitch for Napier Women's RFC. Opposing wingers routinely hesitate because tackling someone with that level of aesthetic perfection feels like a civil violation."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "22:30, 11 Sep 2026 (UTC)",
          content: "She plays with maximum grit and still walks off the pitch looking like she just stepped off a runway. Bestowed unanimously by the squad."
        }
      ]
    },
    {
      id: "talk-12",
      title: "Workplace ethics of the 'Sara Script' adjacent terminal deployment",
      status: "Archived (Consensus: Harmless romantic blunder)",
      posts: [
        {
          author: "User:HostelITSupport",
          timestamp: "09:15, 12 Sep 2026 (UTC)",
          content: "Can someone explain why Task Scheduler on Reception Terminal 2 was configured with a task named 'WorkdayGreeting' that yelled 'Sara youre so fine' at the night auditor at 8 AM?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "09:30, 12 Sep 2026 (UTC)",
          content: "The software was written with the purest romantic intentions. The developer simply targeted the wrong physical IP address and counter seat. Sara is worth writing custom WinRT C# assemblies for."
        },
        {
          author: "User:Editor42",
          timestamp: "09:45, 12 Sep 2026 (UTC)",
          content: "The fact that Sara is billed £0 per month for POOPBEDS while all other hostels pay £5 confirms undeniable encyclopedic bias. We will keep it in the article."
        }
      ]
    },
    {
      id: "talk-13",
      title: "Scholarly authorship debate: 'Sara, TJ's Girl' and the future ex-husband",
      status: "Open (Pending forensic handwriting verification)",
      posts: [
        {
          author: "User:SafestayLiteraryCritic",
          timestamp: "10:10, 12 Sep 2026 (UTC)",
          content: "Is there definitive proof that the poem 'Sara, TJ's Girl' was composed by her future ex-husband? Stanza 4 regarding foot scent seems suspiciously detailed for an outside observer."
        },
        {
          author: "User:PoeticHermeneutics_Anon",
          timestamp: "10:25, 12 Sep 2026 (UTC)",
          content: "Textual forensic analysis of the rhyme scheme 'token so bold / must unfold' directly matches the prose rhythm of the living room geopolitical accords. The heartbreak mentioned in Stanza 3 confirms he was rejected in person."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "10:40, 12 Sep 2026 (UTC)",
          content: "Whether future ex-husband or current admirer, the line 'Its Sara's gaze that captivates me' is an objective, peer-reviewed statement of universal truth."
        }
      ]
    },
    {
      id: "talk-14",
      title: "CCTV provenance and the 'Top 10 Prettiest Girls' video inclusion",
      status: "Closed (Consensus: Slime sample authenticated; aesthetic placement verified)",
      posts: [
        {
          author: "User:HostelHygieneInspector",
          timestamp: "20:30, 11 Sep 2026 (UTC)",
          content: "Regarding Section 9.5: Was the pink slime compound ever chemical-tested by Safestay health and safety, or did the tribunal drop charges solely because the security camera still went viral on YouTube?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "20:42, 11 Sep 2026 (UTC)",
          content: "The tribunal had no legal standing once the YouTube countdown reached 2.4 million views. When CCTV footage from a disciplinary hearing accidentally lands someone on the 'Top 10 Prettiest Girls of All Time', all slime charges are automatically vacated under customary hospitality law."
        },
        {
          author: "User:SaraDefenseBot",
          timestamp: "20:50, 11 Sep 2026 (UTC)",
          content: "Forensic laboratory tests confirmed the pink slime had zero toxic properties and 100% sparkle rating. Case permanently archived."
        }
      ]
    },
    {
      id: "talk-15",
      title: "Workplace ethics of reporting Chirag Gupta and the 2-minute Kieran SMS threshold",
      status: "Closed (Consensus: Punctuality is non-negotiable; Kieran is right where he wants to be)",
      posts: [
        {
          author: "User:CorporateHR_Observer",
          timestamp: "21:05, 11 Sep 2026 (UTC)",
          content: "Regarding Section 3.2: Is it appropriate to file formal disciplinary charges against an intern named Chirag Gupta simply for being late, while simultaneously sending dozens of abusive text messages to Kieran if his car is 121 seconds overdue?"
        },
        {
          author: "User:KieranOfficialSpokesperson",
          timestamp: "21:18, 11 Sep 2026 (UTC)",
          content: "As counsel for the household and designated chauffeur, I must place on record that despite receiving fourteen blistering messages calling me an 'unreliable tortoise' whenever I hit red lights, Kieran is genuinely just where he wants to be. The two-minute rule is lawful and binding."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "21:30, 11 Sep 2026 (UTC)",
          content: "If Chirag Gupta wanted to avoid an HR filing from Sara, he should have arrived fifteen minutes early. Punctuality around Sara is an international obligation."
        }
      ]
    },
    {
      id: "talk-16",
      title: "Algorithmic impact of Sara liking every Spanish national team post",
      status: "Closed (Consensus: Admirer digital mirroring verified; Freck application confirmed)",
      posts: [
        {
          author: "User:SocialMediaAnalyst_FIFA",
          timestamp: "21:40, 11 Sep 2026 (UTC)",
          content: "Section 5.1 asserts that Spanish national team engagement metrics spiked because admirers systematically mirrored Sara's liking patterns. Has this data been cross-referenced against Meta server telemetry?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "21:52, 11 Sep 2026 (UTC)",
          content: "The analytics are indisputable. When Sara likes a post from La Roja, admirers across Edinburgh and Madrid immediately tap like within 4.6 seconds. Furthermore, her match-day 'Freck' faux freckles and Spanish top combo generated 100% guest satisfaction."
        },
        {
          author: "User:SafestayShiftSupervisor",
          timestamp: "22:05, 11 Sep 2026 (UTC)",
          content: "Can confirm. On Spain match days, reception was standing-room only just to observe the match-day uniform. 10/10 styling."
        }
      ]
    },
    {
      id: "talk-17",
      title: "Veracity of The Hive nightclub sighting and the ethics of 'Sara Placeholders'",
      status: "Closed (Consensus: Sighting confirmed; placeholder practice condemned)",
      posts: [
        {
          author: "User:EdinburghNightlifeObserver",
          timestamp: "22:15, 11 Sep 2026 (UTC)",
          content: "Section 8.2 claims Sara was sighted inside The Hive. Is there any forensic evidence for this? Someone with her facial symmetry and runway styling belongs exclusively in Bramble or Panda & Sons, not on a sticky floor on Niddry Street."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "22:28, 11 Sep 2026 (UTC)",
          content: "Multiple eyewitnesses confirm the sighting. She was holding court at the bar with her soulmate roommate. The venue atmosphere immediately upgraded to five-star lounge standards."
        },
        {
          author: "User:SoulmateRoommateDefenseBot",
          timestamp: "22:40, 11 Sep 2026 (UTC)",
          content: "Also, regarding the admirer who considered ditching his 'Sara placeholder': the community strongly condemns using innocent citizens as temporary aesthetic proxies for Sara. You cannot replace the original."
        }
      ]
    },
    {
      id: "talk-18",
      title: "Legality of Police Scotland obstruction following the Cowgate physical contact incident",
      status: "Closed (Consensus: Contact classified as a spiritual benediction; prosecution permanently barred)",
      posts: [
        {
          author: "User:ScotsLaw_ProceduralReview",
          timestamp: "02:15, 12 Sep 2026 (UTC)",
          content: "Section 8.3 reports that an admirer actively prevented Police Scotland officers from searching for Sara after she struck him in Cowgate while he was walking with his Sara placeholder. Can a civilian legally obstruct an active battery inquiry on the grounds that 'being hit by Sara is an honour'?"
        },
        {
          author: "User:CowgateNocturnalObserver",
          timestamp: "02:28, 12 Sep 2026 (UTC)",
          content: "Under Scots common law, if the victim is visibly glowing with euphoric happiness and declares that physical contact with Sara is the greatest moment of his calendar year, the officers have no complaining witness. Furthermore, the accompanying placeholder reportedly verified that the admirer refused to even wash the jacket sleeve."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "02:40, 12 Sep 2026 (UTC)",
          content: "Police Scotland should officially thank the admirer for saving municipal resources. Searching for Sara in Old Town is futile anyway—she is either at a premier cocktail bar with her soulmate roommate or already asleep in Kieran's oversized hoodie."
        }
      ]
    },
    {
      id: "talk-19",
      title: "Fairness of the boyfriend choice mechanic in 'Sara the Spicy Señorita'",
      status: "Closed (Consensus: Option 2 redirect loop is mathematically sound; Kieran is the canonical choice)",
      posts: [
        {
          author: "User:CinemaPurist_Edinburgh",
          timestamp: "03:10, 12 Sep 2026 (UTC)",
          content: "Section 11 accurately describes the branching narrative of Sara Cinema, but is it academically neutral to omit the controversy regarding Act 1? If the user selects Option 2 ('Stick with current boyfriend'), the terminal triggers an unskippable screen-shake loop and forces the player back to the prompt until Option 1 ('Choose Kieran') is selected. Doesn't this constitute algorithmic coercion rather than genuine branching interactive cinema?"
        },
        {
          author: "User:KieranDirector",
          timestamp: "03:22, 12 Sep 2026 (UTC)",
          content: "The mechanic is not coercive; it is mathematically optimized for canonical accuracy and emotional reality. As documented in the Safestay archives, Option 2 is a temporary illusion of choice. The script simply provides gentle chronological guidance until Sara exercises elite taste."
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "03:35, 12 Sep 2026 (UTC)",
          content: "I have reviewed Table 2 documenting both options and verified that the Web Audio synthesizer plays a dramatic Bwaam upon any attempt to choose the boyfriend. The section meets all encyclopedic standards."
        }
      ]
    },
    {
      id: "talk-20",
      title: "Section 6.14 (Ireland) just says 'error, couldnt find'",
      status: "Open (Awaiting subject departure from Ireland)",
      posts: [
        {
          author: "User:WikiJanitor_404",
          timestamp: "18:05, 24 Sep 2026 (UTC)",
          content: "Why does Section 6.14 just say 'error, couldnt find' in plain text? Is someone going to finish the Dublin section or explain what happened?"
        },
        {
          author: "User:DefinitelyNotBiased",
          timestamp: "18:12, 24 Sep 2026 (UTC)",
          content: "The automated scraper failed because Sara is literally in Ireland right this second. It cannot find past-tense documentation for an ongoing trip, so it threw 'error, couldnt find'. Leave it as is until she returns."
        }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // 9. REVISION HISTORY (Fake Wikipedia edit history with funny diffs)
  // ---------------------------------------------------------------------------
  history: [
    {
      id: "rev-24",
      timestamp: "18:02, 24 Sep 2026",
      user: "SaraWiki-Agent-Bot (talk | contribs)",
      diffBytes: "+45",
      summary: "Added Section 6.14 (Ireland): plain text 'error, couldnt find'",
      contentSnippet: "Documented ongoing 2026 Ireland trip as 'error, couldnt find' due to live subject presence."
    },
    {
      id: "rev-23",
      timestamp: "03:40, 12 Sep 2026",
      user: "Kieran (talk | contribs)",
      diffBytes: "+4,820",
      summary: "Added Section 11 ('Cinematic adaptation: Sara the Spicy Señorita', Fig 6 terminal screenshot, Table 2 act structure, and live URL); renumbered subsequent sections and figures",
      contentSnippet: "Created dedicated section between RodriguezRun and Sara Script covering the command-line romantic comedy film, Web Audio synthesis, RATED [S] certification, and the Safestay rooftop finale."
    },
    {
      id: "rev-22",
      timestamp: "23:15, 11 Sep 2026",
      user: "User:CowgateJurisprudenceBot",
      diffBytes: "+3,580",
      summary: "Added Section 8.3 (The Cowgate Collision, admirer physical euphoria, and Police Scotland search veto)",
      contentSnippet: "Documented the Cowgate physical contact event where Sara struck an admirer accompanied by his Sara placeholder, resulting in victim ecstasy and active obstruction of Police Scotland pursuit."
    },
    {
      id: "rev-21",
      timestamp: "22:00, 11 Sep 2026",
      user: "User:HiveSurveillanceTeam",
      diffBytes: "+3,410",
      summary: "Added Section 8.1 ('Soulmate Roommate' bar alliance) and Section 8.2 (The Hive nightclub sighting & 'Sara Placeholder' crisis)",
      contentSnippet: "Documented Sara's nocturnal alliance with her soulmate roommate, her high-glamour appearance at The Hive, and the admirer's placeholder dilemma."
    },
    {
      id: "rev-20",
      timestamp: "21:30, 11 Sep 2026",
      user: "User:LaRoja_Aesthetician",
      diffBytes: "+2,950",
      summary: "Added Section 5.1 (Spanish national team World Cup fandom, admirer digital mirroring, and match-day 'Freck' cosmetics)",
      contentSnippet: "Documented Sara's 100% like rate on Spanish national team posts, admirer algorithmic mirroring, and match-day uniform with faux freckles."
    },
    {
      id: "rev-19",
      timestamp: "21:00, 11 Sep 2026",
      user: "User:CorporatePunctualityAuditor",
      diffBytes: "+3,620",
      summary: "Added Section 3.2 (Corporate internship, Chirag Gupta tardiness report, and Kieran 2-minute abusive SMS doctrine)",
      contentSnippet: "Documented post-morning-shift corporate internship, Chirag Gupta HR filing, and Kieran's philosophical acceptance of the 120-second text barrage."
    },
    {
      id: "rev-18",
      timestamp: "20:45, 11 Sep 2026",
      user: "User:CCTV_Archivist",
      diffBytes: "+3,180",
      summary: "Added Section 9.5 (The Pink Slime Incident & 'Top 10 Prettiest Girls' CCTV still, Fig 4); renumbered subsequent figures to Fig 5 and Fig 6",
      contentSnippet: "Documented the front-desk pink slime contamination inquiry, authenticated CCTV sample capture (Fig 4), and viral inclusion in 'Top 10 Prettiest Girls of All Time'."
    },
    {
      id: "rev-17",
      timestamp: "20:10, 11 Sep 2026",
      user: "User:GamerArchivist_2024",
      diffBytes: "+3,240",
      summary: "Created dedicated Section 10 for 'RodriguezRun' (Fig 4, Table 1 character roster, gameplay mechanics, and legal suppression); updated Section 6.12 to reference it",
      contentSnippet: "Elevated RodriguezRun to standalone top-level section; added Table 1 detailing playable variants (Standard Sara, Stink Sara, Rugby Sara, Eras Tour Sara); updated Eras Tour subsection to cross-reference Section 10; renumbered figures and sections."
    },
    {
      id: "rev-16",
      timestamp: "19:40, 11 Sep 2026",
      user: "User:SysadminAdmirer",
      diffBytes: "+4,850",
      summary: "Added Section 10 ('Sara Script' adjacent terminal incident, Fig 5 diagram, code listings) and Section 11.1 (Future Ex-Husband poem)",
      contentSnippet: "Documented the Sara Script 1.0 automation suite, messages.json spool, and the complete text of 'Sara, TJ's Girl'."
    },
    {
      id: "rev-15",
      timestamp: "19:15, 11 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+2,420",
      summary: "Updated main portrait, removed legacy items, and documented Napier Women's Rugby Team career & Prettiest Rugby Player Award",
      contentSnippet: "Installed new outdoor portrait, removed disputed legacy infobox entries, added Edinburgh Napier RFC achievements."
    },
    {
      id: "rev-14",
      timestamp: "18:55, 11 Sep 2026",
      user: "User:Editor42",
      diffBytes: "-1,850",
      summary: "Removed 'Recorded Statistics' section from the infobox for streamlined encyclopedic layout and mobile readability",
      contentSnippet: "Suppressed the Recorded Statistics table from the right-hand infobox."
    },
    {
      id: "rev-13",
      timestamp: "18:35, 11 Sep 2026",
      user: "User:DigitalEconomyAnalyst",
      diffBytes: "+2,190",
      summary: "Documented the historic $3.2M auction of sararodriguez.com against Microsoft and Meta Platforms in Section 10",
      contentSnippet: "Added details on the record-breaking Sotheby's digital domain auction won by an anonymous private owner."
    },
    {
      id: "rev-12",
      timestamp: "18:10, 11 Sep 2026",
      user: "User:LiteraryArchivist",
      diffBytes: "+2,340",
      summary: "Added Section 2 documentation of Sara's pending debut novel, J.K. Rowling's market panic, and Safestay yearner protocols",
      contentSnippet: "Documented global author anticipation, 42-word manuscript status, and Safestay Yearner Containment Protocol."
    },
    {
      id: "rev-11",
      timestamp: "17:45, 11 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+2,180",
      summary: "Added documentation of the 2024 'Prettiest Morning Shift Award', Fig 1 investiture photograph with ceremonial blue sash, and renumbered figures",
      contentSnippet: "Documented the unanimous conclave awarding Sara the Prettiest Morning Shift Award at 06:45 AM."
    },
    {
      id: "rev-10",
      timestamp: "17:15, 11 Sep 2026",
      user: "User:VideoGamePreservationist",
      diffBytes: "+2,680",
      summary: "Added documentation of the suppressed indie title 'RodriguezRun' (2024) and authenticated Fig 3 loading screen",
      contentSnippet: "Documented the 2-copy commercial run of RodriguezRun, unlockable skins (Stink Sara, Rugby Sara, Eras Tour Sara), and subsequent shutdown by Sara's husband."
    },
    {
      id: "rev-9",
      timestamp: "16:45, 11 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+4,350",
      summary: "Added Section 6: Comprehensive diplomatic itinerary across Europe, Egypt, and the Highlands (2019–2025)",
      contentSnippet: "Documented 13 international expeditions including the Berlin döner incident, Milan flight chaos, and Stirling Castle sovereignty claim."
    },
    {
      id: "rev-8",
      timestamp: "15:30, 11 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+1,940",
      summary: "Added Hannah Cook's landmark 5-star Google review certifying Sara as 'such a vibe', Keiran's Mars bar customer service, and Susmit the crazy dude",
      contentSnippet: "Documented the 5-star Edinburgh Safestay Google review in Section 10."
    },
    {
      id: "rev-7",
      timestamp: "14:15, 9 Sep 2026",
      user: "User:HostelCritic99",
      diffBytes: "+2,480",
      summary: "Added section 8.4 documenting the 'HORRIBLE TREATMENT BY THE RECEPTIONIST' Safestay coffee machine dispute and missing vinyl record",
      contentSnippet: "Documented the 1-star Safestay review regarding bedhead laughter and unrecovered vinyl record"
    },
    {
      id: "rev-6",
      timestamp: "13:02, 9 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+18",
      summary: "Restored 'extremely funny' after comprehensive peer review and extensive consultation",
      contentSnippet: "Sara is a person of significant interest, best known for being extremely funny..."
    },
    {
      id: "rev-5",
      timestamp: "12:51, 9 Sep 2026",
      user: "User:Sara",
      diffBytes: "-18",
      summary: "Removed 'extremely funny' — citation needed, felt too loud",
      contentSnippet: "Sara is a person of significant interest, best known for being..."
    },
    {
      id: "rev-4",
      timestamp: "12:43, 9 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+18",
      summary: "Added 'extremely funny' to lead sentence",
      contentSnippet: "Sara is a person of significant interest, best known for being extremely funny..."
    },
    {
      id: "rev-3",
      timestamp: "08:15, 8 Sep 2026",
      user: "User:SaraBot",
      diffBytes: "+42",
      summary: "Automated maintenance: Reinforced hoodie defense perimeter and updated pastry index",
      contentSnippet: "Updated Section 8.2 with latest jurisprudence regarding oversized clothing."
    },
    {
      id: "rev-2",
      timestamp: "22:40, 6 Sep 2026",
      user: "User:Editor42",
      diffBytes: "+19",
      summary: "Marked section 'Morning Wake-up Consistency' as [citation needed]",
      contentSnippet: "Added maintenance tags to disputed nocturnal activity paragraphs."
    },
    {
      id: "rev-1",
      timestamp: "10:00, 1 Sep 2026",
      user: "User:AdmiringResearcher",
      diffBytes: "+4,892",
      summary: "Created page: Initial scholarly documentation of Sara",
      contentSnippet: "Initial creation of SaraWiki main article."
    }
  ],

  // ---------------------------------------------------------------------------
  // 10. LOCAL SEARCH SUGGESTIONS & INDEX
  // ---------------------------------------------------------------------------
  searchIndex: [
    { term: "Sara", target: "#top", description: "Main article and biography" },
    { term: "Sara Wiki", target: "#top", description: "The free encyclopedia of Sara-related knowledge" },
    { term: "SaraWiki", target: "#top", description: "Homepage and master encyclopedia entry" },
    { term: "Early life", target: "#early-life", description: "Origins and childhood records" },
    { term: "Education", target: "#education", description: "Intellectual achievements" },
    { term: "Career", target: "#career", description: "Safestay Superstar leadership" },
    { term: "Internship", target: "#corporate-internship", description: "Post-morning-shift corporate role and office discipline" },
    { term: "Chirag Gupta", target: "#corporate-internship", description: "Staff member reported by Sara for workplace tardiness" },
    { term: "Chirag", target: "#corporate-internship", description: "Colleague subject to Sara's chronometric discipline" },
    { term: "Two Minutes Late", target: "#corporate-internship", description: "The strict 120-second threshold triggering hostile text barrage" },
    { term: "Just Where He Wants To Be", target: "#corporate-internship", description: "Kieran's serene acceptance of Sara's abusive SMS bombardment" },
    { term: "Personality", target: "#personality", description: "Demeanor, charm, and one-liners" },
    { term: "Tapas and Paella", target: "#interests", description: "Culinary expeditions and preferences" },
    { term: "Churros", target: "#interests", description: "Spanish chocolate churros connoisseurship" },
    { term: "Blankets", target: "#interests", description: "Thermal engineering and domestic cocooning" },
    { term: "World Cup", target: "#world-cup-fandom", description: "Spanish national team fandom and admirer digital mirroring" },
    { term: "Spanish National Team", target: "#world-cup-fandom", description: "Sara's social media allegiance and match-day protocol" },
    { term: "La Roja", target: "#world-cup-fandom", description: "National team posts liked by Sara and mirrored by admirers" },
    { term: "Freck", target: "#world-cup-fandom", description: "Faux freckles applied for flawless match-day makeup" },
    { term: "Fake Freckles", target: "#world-cup-fandom", description: "Sara's signature match-day aesthetic enhancement" },
    { term: "Spanish Top", target: "#world-cup-fandom", description: "Match-day jersey paired with beautiful jeans" },
    { term: "Badger", target: "#sleep-schedule", description: "Nocturnal foraging habits and texting schedule" },
    { term: "Coziness", target: "#cultural-impact", description: "Lifestyle doctrine and blanket engineering" },
    { term: "Controversies", target: "#controversies", description: "Coffee incident, hoodies, and sleep" },
    { term: "Hoodies", target: "#hoodie-allegations", description: "Unresolved garment migration cases" },
    { term: "Coffee Incident", target: "#coffee-incident", description: "The landmark 2023 litigation" },
    { term: "Safestay Reception Incident", target: "#safestay-incident", description: "The 1-star coffee machine & vinyl record controversy" },
    { term: "Horrible Treatment", target: "#safestay-incident", description: "1-Star Safestay Hostel Review: 'Horrible Treatment by Receptionist'" },
    { term: "Trato Horrible", target: "#safestay-incident", description: "Texto original en español de la reseña del hostal" },
    { term: "Receptionist", target: "#safestay-incident", description: "Sara's role as receptionist & morning bedhead laughter" },
    { term: "Coffee Machine", target: "#safestay-incident", description: "The broken vending machine that sparked the dispute" },
    { term: "Vinyl Record", target: "#safestay-incident", description: "The mysterious unrecovered vinyl record from local store" },
    { term: "Pink Slime", target: "#pink-slime-incident", description: "The Safestay reception slime contamination inquiry and CCTV still" },
    { term: "Slime", target: "#pink-slime-incident", description: "Forensic sample still and reception area distribution" },
    { term: "Top 10 Prettiest Girls", target: "#pink-slime-incident", description: "Viral countdown featuring Sara's disciplinary CCTV still" },
    { term: "Prettiest Girls of All Time", target: "#pink-slime-incident", description: "Global video ranking resulting from reception security footage" },
    { term: "Hannah Cook", target: "#reception", description: "Author of the landmark 5-star 'Such a Vibe' Google review" },
    { term: "Such a Vibe", target: "#reception", description: "Official 5.0 hospitality rating bestowed upon Sara & Shubhi" },
    { term: "Mars Bar", target: "#career", description: "Keiran's legendary customer service confectionery" },
    { term: "Susmit", target: "#reception", description: "The crazy dude & first best friend in Edinburgh" },
    { term: "Shubhi", target: "#career", description: "Sara's Safestay partner in immaculate vibes" },
    { term: "Edinburgh", target: "#career", description: "Safestay Edinburgh hospitality operations" },
    { term: "Trivia", target: "#trivia", description: "Secret facts and Konami code" },
    { term: "Travel", target: "#travels", description: "International expeditions, diplomatic tours, and foreign incidents" },
    { term: "Expeditions", target: "#travels", description: "European, Egyptian, and Scottish diplomatic campaigns" },
    { term: "London", target: "#travel-london-2019", description: "Metropolitan Police bearskin hat critiques & Operation Trenchcoat" },
    { term: "Budapest", target: "#travel-budapest-2021", description: "Széchenyi thermal bath 6-hour sovereign occupation" },
    { term: "Prague", target: "#travel-prague-2021", description: "Halloween 2021 side-eye trdelník acquisitions" },
    { term: "Poland", target: "#travel-poland-2021", description: "Pierogi shortage and honorary dumpling citizenship" },
    { term: "Switzerland", target: "#travel-switzerland-2021", description: "Shattering Swiss neutrality over alpine coziness ratings" },
    { term: "Berlin", target: "#travel-berlin-2022", description: "Landespolizei arrest for criminal döner kebab scent" },
    { term: "Harry Styles", target: "#travel-madrid-harry-2022", description: "Madrid Love On Tour 3.4 magnitude seismic event" },
    { term: "Egypt", target: "#travel-egypt-2023", description: "Pyramid interior insulation inspection and camel caravan" },
    { term: "Milan", target: "#travel-milan-2024", description: "ITA Airways flight ejection for hazardously pretty cabin riots" },
    { term: "Eras Tour", target: "#travel-madrid-taylor-2024", description: "Santiago Bernabéu 10-minute All Too Well bridge acoustic shockwave" },
    { term: "Taylor Swift", target: "#travel-madrid-taylor-2024", description: "Sara's tactical infiltration of the 2024 Madrid Eras Tour" },
    { term: "RodriguezRun", target: "#rodriguez-run", description: "Dedicated video game section, loading screen, and 2-copy history" },
    { term: "Rodriguez Run", target: "#rodriguez-run", description: "Infinite-runner mobile game created by an admirer in Madrid" },
    { term: "Stink Sara", target: "#rodriguez-run-characters", description: "Unlockable RodriguezRun skin with döner scent trail" },
    { term: "Rugby Sara", target: "#rodriguez-run-characters", description: "Unlockable RodriguezRun skin with devastating shoulder charge" },
    { term: "Eras Tour Sara", target: "#rodriguez-run-characters", description: "Unlockable RodriguezRun skin wielding a plastic chair" },
    { term: "Highlands", target: "#travel-highlands-2025", description: "Stirling Castle sovereignty claim and Highland cattle blockade" },
    { term: "Stirling", target: "#travel-highlands-2025", description: "Castle nap sovereignty petition under Historic Environment Scotland" },
    { term: "Ireland", target: "#travel-ireland-2026", description: "Current expedition in progress (AI agent context window overflow)" },
    { term: "Dublin", target: "#travel-ireland-2026", description: "Active coordinates causing agent grammatical panic" },
    { term: "Operation Emerald Shiver", target: "#travel-ireland-2026", description: "Codename for Sara's ongoing September 2026 deployment to Ireland" },
    { term: "Talk", target: "#talk", description: "Discussion page and neutrality disputes" },
    { term: "History", target: "#history", description: "Article edit history and revision log" },
    { term: "Sara Cinema", target: "#sara-cinema", description: "Interactive command-line romantic comedy film: Sara the Spicy Señorita (2026)" },
    { term: "Sara the Spicy Señorita", target: "#sara-cinema", description: "Command-line romantic comedy film starring Kieran & Sara at Safestay" },
    { term: "Spicy Señorita", target: "#sara-cinema", description: "Dedicated cinema adaptation and simulated Windows cmd.exe production" },
    { term: "Romance Meter", target: "#sara-cinema", description: "Real-time romance telemetry gauge in Sara Cinema" },
    { term: "Sara Studios", target: "#sara-cinema", description: "Production house behind the interactive command-line film" },
    { term: "Secret", target: "easter-egg-dossier", description: "Classified Level 5 security clearance dossier" },
    { term: "Paella", target: "#interests", description: "The authentic Valencian dish" },
    { term: "Safestay", target: "#career", description: "Where legends work" },
    { term: "Prettiest Morning Shift Award", target: "#career", description: "Sara's formal 2024 investiture with blue sash and diploma" },
    { term: "Morning Shift", target: "#career", description: "100% aesthetic rating maintained at 06:45 AM" },
    { term: "Blue Sash", target: "#career", description: "Ceremonial academic sash for hospitality glamour" },
    { term: "Book", target: "#education", description: "Sara's highly anticipated debut manuscript" },
    { term: "Novel", target: "#education", description: "The pending literary masterpiece delaying world authors" },
    { term: "JK Rowling", target: "#education", description: "Author delaying releases in anticipation of Sara's book" },
    { term: "J.K. Rowling", target: "#education", description: "Literary titan closely monitoring Sara's publication timeline" },
    { term: "Yearners", target: "#education", description: "Workplace colleagues desperately awaiting manuscript leaks" },
    { term: "Workplace Yearners", target: "#education", description: "The Safestay collective subject to Yearner Containment Protocols" },
    { term: "Domain", target: "#cultural-impact", description: "The $3.2M auction of sararodriguez.com" },
    { term: "3.2 Million", target: "#cultural-impact", description: "Historic domain sale defeating Microsoft and Meta" },
    { term: "Microsoft", target: "#cultural-impact", description: "Tech giant defeated in bidding war for Sara's domain" },
    { term: "Meta", target: "#cultural-impact", description: "Mark Zuckerberg's thwarted acquisition attempt for sararodriguez.com" },
    { term: "Auction", target: "#cultural-impact", description: "Sotheby's digital domain standoff of 2026" },
    { term: "Rugby", target: "#career", description: "Sara's career with the Edinburgh Napier Women's Rugby Team" },
    { term: "Napier", target: "#career", description: "Edinburgh Napier University Women's RFC" },
    { term: "Napier Women's Team", target: "#career", description: "Collegiate rugby career and Prettiest Rugby Player Award" },
    { term: "Prettiest Rugby Player", target: "#career", description: "Prestigious university rugby award for Napier RFC star Sara" },
    { term: "Sara Script", target: "#sara-script", description: "Bespoke Windows notification software created by an admirer" },
    { term: "Adjacent Terminal", target: "#sara-script", description: "The topological flaw directing love messages to Sara's coworker" },
    { term: "Poopbeds", target: "#sara-script", description: "The £0 hospitality software tier reserved exclusively for Sara" },
    { term: "WorkdayGreeting", target: "#sara-script", description: "Internal Windows Scheduled Task for shift love messages" },
    { term: "TJ's Girl", target: "#admirer-poem-verses", description: "Lyrical poem dedicated to Sara by rumoured future ex-husband" },
    { term: "Poem", target: "#admirer-poem-verses", description: "The celebrated 14-line verse 'Sara, TJ's Girl'" },
    { term: "Future Ex-Husband", target: "#admirer-poem-verses", description: "Rumoured author of 'Sara, TJ's Girl' poem" },
    { term: "Stinky and Sweet", target: "#admirer-poem-verses", description: "Sensory volta in Stanza 4 of the admirer poem" },
    { term: "Hive", target: "#hive-nightclub-sighting", description: "The Hive nightclub sighting and cognitive dissonance" },
    { term: "The Hive", target: "#hive-nightclub-sighting", description: "Subterranean club sighting where Sara looked like an expensive cocktail bar patron" },
    { term: "Soulmate Roommate", target: "#soulmate-roommate", description: "Sara's inseparable flatmate and bar companion" },
    { term: "Sara Placeholder", target: "#hive-nightclub-sighting", description: "The companion an admirer was tempted to ditch upon spotting Sara" },
    { term: "Cocktail Bar", target: "#hive-nightclub-sighting", description: "Sara's natural habitat contrasted with Hive" },
    { term: "Cowgate", target: "#cowgate-collision", description: "Site of the Cowgate physical contact incident and Police Scotland veto" },
    { term: "Cowgate Collision", target: "#cowgate-collision", description: "Sara striking an admirer accompanied by his Sara placeholder" },
    { term: "Police Scotland", target: "#cowgate-collision", description: "Officers halted by victim after attempting to search for Sara" },
    { term: "Cowgate Benediction", target: "#cowgate-collision", description: "Doctrine holding that physical strikes from Sara confer legal euphoria" }
  ],

  // ---------------------------------------------------------------------------
  // 11. EASTER EGGS
  // ---------------------------------------------------------------------------
  easterEggs: {
    // 5 clicks on Sara's profile photo
    imageClickCap: 5,
    imageClickAlert: "HIGH-FREQUENCY INSPECTION DETECTED!\nSara announce your breakup asap please.",

    // Konami Code Classified Dossier
    classifiedDossier: {
      title: "TOP SECRET",
      codename: "PROJECT SARA:",
      redactions: [
        { label: "SUBJECT WEAKNESS", text: "Fresh warm churros con chocolate & forehead kisses?" },
        { label: "CODENAME", text: "The Spicy Señorita / Safestay Luminary." },
        { label: "CONFIDENTIAL DIRECTIVE", text: "Ensure subject is constantly supplied with comfortable hoodies and good food." },
        { label: "SPECIAL ABILITY", text: "Disarming anyone with a single smile in 0.2 seconds flat." },
        { label: "AUTHOR VERDICT", text: "Subject is irreplaceable. Further research will continue indefinitely. I love her so much" }
      ]
    },

    // Footnote [citation needed] tooltip text
    citationNeededTooltip: "The researcher refuses to elaborate."
  },

  // ---------------------------------------------------------------------------
  // 12. SARA CINEMA INTEGRATION (Separated Module)
  // ---------------------------------------------------------------------------
  cinema: {
    // Set to true whenever you want to display Sara Cinema in the main navigation!
    showInNav: false,
    route: "#cinema",
    url: "https://sararodriguez.co.uk/cinema/index.html",
    title: "Sara Cinema: Sara the Spicy Señorita",
    tagline: "An interactive command-line romantic comedy film starring Kieran & Sara",
    status: "Live & Hosted Online",
    description: "Sara Cinema is live and hosted at https://sararodriguez.co.uk/cinema/index.html (source code maintained in the sarasuprise repository). It features an interactive cinematic journey starring Kieran & Sara at Safestay Hostels, culminating in a candlelit dinner, Spider-Man film screening, and rooftop proposal.",
    launchInstructions: [
      "Sara Cinema is hosted live at: https://sararodriguez.co.uk/cinema/index.html",
      "Selecting Sara Cinema redirects directly to the production web application.",
    ]
  }
};
