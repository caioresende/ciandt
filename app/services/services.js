form.factory('formService', [function () {

    var service = {};

    service.starWarsMovies = [
        {
            id: 1,
            name: 'Episode IV: New Hope',
            year: '1977',
            poster: 'star_wars_posters_01.jpg'
        },
        {
            id: 2,
            name: 'Episode V: The Empire Strikes Back',
            year: '1980',
            poster: 'star_wars_posters_02.jpg'
        },
        {
            id: 3,
            name: 'Episode VI: Return of The Jedi',
            year: '1983',
            poster: 'star_wars_posters_03.jpg'
        },
        {
            id: 4,
            name: 'Episode I: The Phantom Menace',
            year: '1999',
            poster: 'star_wars_posters_04.jpg'
        },
        {
            id: 5,
            name: 'Episode II: Attack of the Clones',
            year: '2002',
            poster: 'star_wars_posters_05.jpg'
        },
        {
            id: 6,
            name: 'Episode III: Revenge of the Sith',
            year: '2005',
            poster: 'star_wars_posters_06.jpg'
        },
        {
            id: 7,
            name: 'Episode VII: The Force Awakens',
            year: '2015',
            poster: 'star_wars_posters_07.jpg'
        }
    ];

    service.tvShows = [
        "12 Monkeys","19-2 (2014)","2 Broke Girls","24","60 Minutes Australia","60 Minutes US","8 Out of 10 Cats","A D The Bible Continues","A to Z","A Young Doctor's Notebook","About a Boy","Adventure Time","Air Crash Investigation - Mayday","Alaska: The Last Frontier","Alaskan Bush People","Ali G: Rezurection","Allegiance","Almost Human","Almost Royal","Alpha House","Ambassadors","America Declassified","America Unearthed","America's Got Talent","America's Next Top Model","American Crime","American Dad!","American Horror Story","American Idol","American Ninja Warrior","American Odyssey","American Pickers","American Restoration","Ancient Aliens","Anger Management","Another Period","Anthony Bourdain: Parts Unknown","Antiques Roadshow UK","Aqua TV Show Show","Aquarius (US)","Archer (2009)","Arctic Air","Arrow","At Midnight","Atlantis","Attack on Titan","Avengers Assemble (2013)","Awkward.","Axe Cop","Baby Daddy","Babylon","Bachelor in Paradise","Back in the Game","Backstrom","Bad Education","Bad Ink","Bad Judge","Bad Teacher","Ballers","Banished","Banshee","Bar Rescue","Bates Motel","Battle Creek","Beauty and the Beast (2012)","Being Human (US)","Being Mary Jane","Believe","Ben 10: Omniverse","Benched","Bering Sea Gold","Best Ink","Better Call Saul","Between","Big Brother (UK)","Big Brother US","Big School","Big Time in Hollywood, FL","Bitten","Black Box","Black Dynamite","Black Gold","Black Jesus","Black Mirror","Black Sails","Black-ish","Blue Bloods","Bluestone 42","Boardwalk Empire","Bob's Burgers","Bones","Bosch","Boston's Finest","Brain Games","Brew Dogs","Brickleberry","Broad City","Broadchurch","Brooklyn Nine-Nine","Bullseye","Californication","Call the Midwife","Castle (2009)","Casualty","Catastrophe","Catfish: The TV Show","Celebrity Juice","Charlie Brooker's Weekly Wipe","Chasing Life","Chasing Shadows","Chicago Fire","Chicago P.D.","Chickens","Childrens Hospital","China, IL","Chopped","Chozen","Citizen Khan","Clipped","Cockroaches","Comedy Bang! Bang!","Comedy Underground with Dave Attell","Comic Book Men","Community","Complications","Conan (2010)","Constantine","Continuum","Cops","Cosmos: A Spacetime Odyssey","Cougar Town","Covert Affairs","Cracked (2013)","Criminal Minds","Crisis","Cristela","Critical","Crossbones","Crossing Lines","CSI: Crime Scene Investigation","CSI: Cyber","Cuckoo","Curiosity","Da Vinci's Demons","Dads (2013)","Dallas (2012)","Dancing With the Stars","Danger 5","Dara O Briain's Science Club","Dark Matter","DCI Banks","Dead Boss","Deadliest Catch","Death in Paradise","Debbie Macomber's Cedar Cove","Defiance","Degrassi","Derek","Devious Maids","DIG","Doctor Who (2005)","Doctor Who Extra","Doll &amp; Em","Dominion","Downton Abbey","Dracula","Dragons' Den (Canada)","Drifters","Drop Dead Diva","Drugs, Inc.","Drunk History","Duck Dynasty","Duck Quacks Don't Echo","Eagleheart","EastEnders","Elementary","Empire","Enlisted","Episodes","ESPN 30 for 30","Extant","Eye Candy","Face Off","Faking It","Falling Skies","Family Guy","Fargo","Fast N' Loud","Fear Factor","Fear The Walking Dead","Fifth Gear","Finding Bigfoot","Finding Carter","Forever","Forever (US)","Fortitude","Foyle's War","Franklin &amp; Bash","Fresh Meat","Fresh Off the Boat","Friends With Better Lives","From Dusk Till Dawn: The Series","Galavant","Game of Thrones","Gang Related","Garfunkel and Oates","Geordie Shore","Get Out Alive (2013)","Getting On (US)","Ghost Adventures","Ghost Hunters","Girl Meets World","Girlfriends' Guide to Divorce","Girls","Glee","Gogglebox","Gold Rush","Good Witch","Gotham","Graceland","Gracepoint","Grand Designs","Gravity Falls","Grey's Anatomy","Grimm","Ground Floor","Growing Up Fisher","Halt and Catch Fire","Hannibal","HAPPYish","Happyland","Hard Knocks","Hardcore Pawn","Hart of Dixie","Have I Got News for You","Haven","Hawaii Five-0","Heartland (2007) (CA)","Helix","Hell on Wheels","Hell's Kitchen (US)","Hemlock Grove","Heroes of Cosplay","Heston Blumenthal: In Search of Perfection","Highway Thru Hell","Hinterland","Holby City","Homeland","Horizon","Hot In Cleveland","Hotel Hell","House of Cards (2013)","House of Lies","How I Met Your Mother","How It's Made","How to Get Away With Murder","How We Got to Now","Hulk and the Agents of S.M.A.S.H.","Humans","I Can Do That (US)","I Wanna Marry Harry","Ice Road Truckers","If Loving You Is Wrong","Impact Wrestling","Impastor","Impractical Jokers","In the Flesh","Ink Master","Inside Amy Schumer","Inside Comedy","Inside No. 9","Intelligence","Intruders (2014)","It's Always Sunny in Philadelphia","iZombie","Jamie's Comfort Food","Jane the Virgin","Jennifer Falls","Jimmy Kimmel Live","Jonathan Strange &amp; Mr Norrell","Justified","Keeping Up with the Kardashians","Kevin From Work","Key &amp; Peele","Killjoys","King of the Nerds","Kingdom","Kingdom (2014)","Kirstie","Kitchen Nightmares US","Kodiak","Kroll Show","Last Comic Standing","Last Man Standing (2011)","Last Week Tonight with John Oliver","Late Night with Seth Meyers","Late Show with David Letterman","Law &amp; Order: Special Victims Unit","Law &amp; Order: UK","Legends","Legit (2013)","Lewis","Life Below Zero","Line of Duty","Lip Sync Battle","Live at the Apollo","Lizard Lick Towing","Location, Location, Location","Longmire","Looking","Lost Girl","Lost in Transmission","Louie (2010)","Mad Men","Madam Secretary","Major Crimes","Major Lazer","Man Seeking Woman","Manhattan","Manhattan Love Story","Maron","Married","Marry Me!","Marvel's Agent Carter","Marvel's Agents of S.H.I.E.L.D.","Marvel's Daredevil","Masterchef (US)","MasterChef Australia","MasterChef Junior","Masters of Sex","Matador","Match of the Day","Melissa &amp; Joey","Men at Work","Merlin","Midsomer Murders","Mike &amp; Molly","Mike Tyson Mysteries","Mind Games","Mistresses (US)","Mixology","Mob City","Mock the Week","Modern Family","Mom","Moone Boy","Moonshiners","Motive","Mozart in the Jungle","Mr Selfridge","Mr. Pickles","Mr. Robot","Mulaney","Murder in the First","Murdoch Mysteries","My Kitchen Rules","My Kitchen Rules UK","My Little Pony: Friendship is Magic","My Mad Fat Diary","My Tattoo Addiction","MythBusters","Naked and Afraid","Nashville","Nathan for You","NCIS","NCIS: Los Angeles","NCIS: New Orleans","New Girl","New Tricks","Newsreaders","No Offence","Not Going Out","NTSF:SD:SUV::","Nurse Jackie","Odd Mom Out","Offspring","Olympus","Once Upon a Time (2011)","Once Upon a Time in Wonderland","One Big Happy","Opposite Worlds","Orange Is the New Black","Orphan Black","Our Girl","Outlander","Parenthood (2010)","Parks and Recreation","Pawn Stars","Pawnography","Peaky Blinders","Peep Show","Penn and Teller Fool Us","Penny Dreadful","Perception","Person of Interest","Pit Bulls and Parolees","Played","Playing House","Please Like Me","Plebs","Pokémon","Poldark","Portlandia","Power","Powers","Powers (US)","Pretty Little Liars","Project Runway","Project Runway All Stars","Proof","Proof (US)","Psych","Puberty Blues","QI","Railroad Alaska","Raising Hope","Rake (US)","Ray Donovan","Real Husbands of Hollywood","Real Time with Bill Maher","Reckless US","Rectify","Red Band Society","Red Dwarf","Regular Show","Reign","Remedy","Republic of Doyle","Restaurant: Impossible","Resurrection","Revenge","Review With Forrest Macneil","Revolution","Rick and Morty","Ridiculousness","Ripper Street","Rising Star","River Monsters","Rizzoli &amp; Isles","Rob Dyrdek's Fantasy Factory","Robot Chicken","Rogue","Rookie Blue","Royal Marines Commando School","Royal Pains","Rugby Super Rugby","Running Wild with Bears","RuPaul's Drag Race","Rush (US)","Salem","Sam &amp; Cat","Satisfaction (US)","Saturday Night Live","Saving Hope","Scandal (2012)","Schitt's Creek","Scorpion","Scott &amp; Bailey","Scream","Secrets and Lies (US)","See Dad Run","Seed","Selfie","Sense8","Serangoon Road","Sex Sent Me to the ER","Shameless (US)","Shark Tank","Sherlock","Siberia","Signed, Sealed, Delivered","Significant Mother","Silicon Valley","Single Ladies","Sirens (2014)","Slednecks","Sleepy Hollow","So You Think You Can Dance","So You Think You Can Dance US","Sons of Anarchy","Sons of Guns","Sons of Winter","South Park","Stalker","Star Wars Rebels","Star-Crossed","State of Affairs","Stitchers","Storage Wars","Strike Back","Suburgatory","Suits","SunTrap","Super Fun Night","Supernatural","Surviving Jack","Survivor","Survivorman","Swamp People","Switched at Birth","Talking Dead","Tatau","Tattoo Nightmares","Taxi Brooklyn","Teen Wolf","Teenage Mutant Ninja Turtles (1987)","Texas Rising","The 100","The Affair","The After","The Amazing Race","The Amazing Race Canada","The Americans (2013)","The Apprentice UK","The Apprentice US","The Apprentice: You're Fired!","The Arsenio Hall Show (2013)","The Astronaut Wives Club","The Bachelor","The Bachelorette","The Best Laid Plans","The Big Bang Theory","The Biggest Loser","The Birthday Boys","The Blacklist","The Block AU","The Block NZ","The Book of Negroes","The Boondocks","The Bridge (US)","The Brink","The Carbonaro Effect","The Carrie Diaries","The Challenge: Free Agents","The Colbert Report","The Comeback","The Comedians US","The Crazy Ones","The Daily Show with Jon Stewart","The Dead Files","The Devils Ride","The Divide","The Eric Andre Show","The Exes","The Fall","The Flash","The Following","The Fosters (2013)","The Gadget Show","The Game","The Goldbergs (2013)","The Good Wife","The Graham Norton Show","The Honourable Woman","The Interceptor","The Island","The Island with Bear Grylls","The Jim Gaffigan Show","The Jonathan Ross Show","The Knick","The Last Man on Earth","The Last Ship","The Late Late Show with Craig Ferguson","The League","The Leftovers","The Legend of Korra","The Librarians","The Librarians (US)","The Listener","The Lizzie Borden Chronicles","The Lottery","The Man In The High Castle","The Meltdown with Jonah and Kumail","The Mentalist","The Messengers","The Michael McIntyre Chat Show","The Middle","The Midnight Beast","The Millers","The Mindy Project","The Missing","The Musketeers","The Mysteries of Laura","The Neighbors","The Newsroom (2012)","The Night Shift","The Nightly Show with Larry Wilmore","The Odd Couple","The Originals","The Quest","The Real Housewives of Beverly Hills","The Real World","The Rebels","The Red Road","The Restoration Man","The Returned (US)","The Royals","The Simpsons","The Sing Off","The Slap (US)","The Soul Man","The Soup","The Spoils of Babylon","The Strain","The Taste UK","The Tomorrow People (2013)","The Tonight Show Starring Jimmy Fallon","The Tunnel","The Ultimate Fighter","The Universe","The Valleys","The Vampire Diaries","The Venture Bros.","The Voice","The Voice (UK)","The Voice (US)","The Walking Dead","The Whispers","The Wil Wheaton Project","The X Factor","The X Factor (AU)","Those Who Kill","Threesome","Through the Wormhole","Thunderbirds Are Go!","Tim and Eric's Bedtime Stories","Toast of London","Togetherness","Top Chef","Top Gear","Top Gear (US)","Tosh.0","Totally Biased with W. Kamau Bell","Transparent","Transporter","Treehouse Masters","Triptank","Trophy Wife","True Blood","True Detective","Turn","Twisted (2013)","Two and a Half Men","Tyrant","Ultimate Airport Dubai","Ultimate Spider Man Web Warriors","Uncle","Undateable","Under the Dome","Under The Gunn","Underbelly","Undercover Boss","Unforgettable","United Stuff of America","UnREAL","Upper Middle Bogan","Utopia","Utopia (AU) (2014)","Utopia (US)","Veep","Vera","Vice","Vicious","Vikings","W1A","Wallander","Warehouse 13","Wayward Pines","Weird Loners","Welcome to Sweden","Whale Wars","Wheeler Dealers","When Calls the Heart","White Collar","Who Do You Think You Are (UK)","Whose Line Is It Anyway","Wild West Alaska","Wilfred (US)","Wipeout (US)","Witches of East End","Wizard Wars","Wolf Hall","Workaholics","Would I Lie to You?","WWE Countdown","WWE Friday Night SmackDown","WWE Monday Night RAW","WWE NXT","WWE Raw is War","WWE Smackdown","X Company","You're the Worst","Young &amp; Hungry","Younger","Your Family or Mine","Yukon Men","Z Nation","Zoo"];

    service.foods = [
        {
            name: 'Pizza',
            icon: 'pizza-icon.svg'
        },
        {
            name: 'Dessert',
            icon: 'dessert-icon.svg'
        },
        {
            name: 'Meat',
            icon: 'meat-icon.svg'
        },
        {
            name: 'Pasta',
            icon: 'pasta-icon.svg'
        },
        {
            name: 'Vegan',
            icon: 'vegan-icon.svg'
        },
        {
            name: 'Hamburger',
            icon: 'hamburger-icon.svg'
        },
        {
            name: 'Japanese',
            icon: 'japanese-icon.svg'
        }
    ];

    return service
}]);