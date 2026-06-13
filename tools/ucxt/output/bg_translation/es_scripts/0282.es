#game "blackgate"
void Func0282 shape#(0x282) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0282_08B2;
	var0000 = 0x0089;
	UI_play_sound_effect2(0x000E, item);
	UI_book_mode(item);
	var0001 = item;
	var0002 = UI_get_item_quality(var0001);
	if (!(var0002 > var0000)) goto labelFunc0282_0037;
	message("This is @not a @valid book");
	say();
labelFunc0282_0037:
	if (!(var0002 == 0x0000)) goto labelFunc0282_004D;
	message("~~ ~~MORGAN'S GUIDE TO UNIFINISHED NOVELS~~  ~~by Morgan*");
	say();
	message("~~     An enlightening discourse on the enigma of blank tomes.");
	say();
	message("~Beginning with the heretofore unresolved mysteries of empty...*Page 2*Page 3*Page 4*Page 5*Page 6*Page7");
	say();
labelFunc0282_004D:
	if (!(var0002 == 0x0001)) goto labelFunc0282_006F;
	message("~~ ~~ \"HOW DEATH AFFECTS THOSE WHO WORK AROUND IT WITH REGULARITY\"*");
	say();
	message("Day 1: Subject (Tiery) seems friendly enough and willing to accept my company.~");
	say();
	message("Day 2: Subject exhibiting strange sense of humor, very morbid.~");
	say();
	message("Day 3:  No contact with subject.~");
	say();
	message("Day 4: Subject makes continual references to recent conversations with cemetery occupants.~");
	say();
	message("Day 5: ...");
	say();
labelFunc0282_006F:
	if (!(var0002 == 0x0002)) goto labelFunc0282_00A9;
	message("MY NOTEBOOK by Alagner~~");
	say();
	message("     These are my observations concerning the organization known as The Fellowship.");
	say();
	message("Although The Fellowship portends to be a group of optimists with a philosophy called `Triad of Inner Strength', there are many fallacies which can be gleaned by careful examination of the group's `values'.");
	say();
	message("The first `value' is Strive For Unity. This implies that that we should all work together in harmony and towards one goal in life. However, careful examination of this tenet reveals that members of The Fellowship consider themselves an elite group, and a prejudicial one at that. They tend to believe that if one is not for them, then they are indeed against them! And if one is against them, then may fortune be with that person, for he/she may very well come to a bad end!");
	say();
	message("The second `value' is Trust Thy Brother. This implies that each member trusts implicitly other Fellowship members, and that each will do favors or deeds for another without question. On the other hand, this might mean that a member should do what another says REGARDLESS of the implications of the act. In other words, `do as I say and do not question it!' seems to be the underlying subtext of this tenet.");
	say();
	message("The third `value' is Worthiness Precedes Reward. If one does good deeds for The Fellowship, then one will be rewarded. The other side of the coin, of course, is that if one does NOT do good deeds for The Fellowship, then one will get his JUST reward! In The Fellowship, a `reward' can be either `good' or `bad'!");
	say();
	message("The Fellowship has been duping the masses of Britannia now for twenty years. They are becoming stronger and stronger. After careful study, I have come to the conclusion that the group is serving some higher, malevolent entity, referred to by the organization's inner circle as `The Guardian'. More information needs to be obtained about The Guardian, but I am certain that he is very dangerous.");
	say();
	message("The Fellowship seems to be organized into three distinct grades of members. Grade One consists of the general masses of naive innocents who have joined, thinking that their pathetic little lives will be helped in some way. Grade Two consists of the various branch leaders who make up the inner circle of Fellowship leaders.");
	say();
	message("There is also a Grade Three -- those Fellowship leaders who are in administrative positions within the group: men such as Batlin, and the mysterious couple Elizabeth and Abraham who travel the country distributing The Fellowship's funds. (Not much is known about these two -- it is said they are twins -- brother and sister.) I believe that the few Grade Three members are in direct communication with The Guardian and believe they will be serving as his lieutenants should The Guardian ultimately gain power in the land.");
	say();
	message("Already, The Guardian is promising to be a powerful threat. Magic in Britannia has taken a turn for the worse in the past few years. I believe that The Guardian has done something to cause this malady. Not many people have noticed that Britannia's problem with Moongates -- they're being so unreliable -- occurred around the same time. It follows that The Guardian is most likely responsible for this serious plague.");
	say();
	message("The Guardian also possesses some kind of power which allows him to speak to and `charm' naive innocents so that they will gladly join The Fellowship and become Grade One members. These unfortunate lambs will most likely become The Guardian's slaves should he ever come into power.");
	say();
	message("After I have obtained enough proof of my theories concerning The Fellowship, I shall present this notebook to Lord British himself and rid Britannia of these very dangerous, lying fascists.");
	say();
labelFunc0282_00A9:
	if (!(var0002 == 0x0003)) goto labelFunc0282_00D3;
	message("OBSERVATIONS OF BLACK ROCK, by Rudyom The Mage~~");
	say();
	message("     The mysterious substance known as Black Rock is completely indestructible. Only by magical means can it be molded and shaped.");
	say();
	message("Black Rock can be found in small quantities beneath the ground, sometimes near lodes of iron ore or lead.");
	say();
	message("Black Rock can be excavated by conventional means, but melting it down into a malleable substance is impossible, except by magic.");
	say();
	message("I have found that a combination of electrical energy and magnetic energy has a profound effect upon the substance. Together, these properties cause Black Rock to become permeable, that is, one can put one's hand through the substance as if it were water!");
	say();
	message("Further study reveals that Black Rock might work as a teleportation device if magic, electrical energy, magnetic energy, and the correct alignment of heavenly bodies act together upon the substance. This theory still needs to be tested.");
	say();
	message("The Black Rock transmuter I created out of an old wand does not work. It was meant to shoot electrical and magnetic charges into Black Rock, but all it does is make the substance explode! (I must be careful not to let the transmuter get into the wrong hands. Pointing it at a large quantity of Black Rock might produce a devastating explosion!)");
	say();
	message("I must quit for the day. The headaches that have been plaguing me have gotten worse. I am forgetting more and more. Very soon, I am afraid, I will forget how to cast simple spells. I believe something might be affecting the magical ether. But I cannot be sure...");
	say();
labelFunc0282_00D3:
	if (!(var0002 == 0x0004)) goto labelFunc0282_00E5;
	message("~~ ~~ STRANGER IN A STRANGE LAND~~ ~~by Robert Heinlein~~First Edition*");
	say();
	message("  The struggles of an individual from another planet who finds difficutly assimilating into his new society and culture.");
	say();
labelFunc0282_00E5:
	if (!(var0002 == 0x0005)) goto labelFunc0282_00F7;
	message("~~ ~~CHITTY-CHITTY-BANG-BANG~~ ~~by Ian Fleming*");
	say();
	message("    This wonderful childrens's story of a car that could fly has been pleasing youths and adults alike for many generations.");
	say();
labelFunc0282_00F7:
	if (!(var0002 == 0x0006)) goto labelFunc0282_0109;
	message("~~ ~~THE WIZARD OF OZ ~~ ~~by Frank L. Baum*");
	say();
	message("     The tale of a little girl, Dorthy, who, with her dog, Toto, travels through whirlwinds and magic to a fanciful land called Oz. Dorothy's search for ideals in this land win her three new friends. The first, a brainless scarecrow, whose ultimate wisdom teaches her the principle of Truth.  The second, a heartless tin-man, whose undying devotion shows her the principle of Love.  Finally, Dorothy encounters a cowardly lion, who, facing all perils to save her, demonstrates the principle of Courage.");
	say();
labelFunc0282_0109:
	if (!(var0002 == 0x0007)) goto labelFunc0282_0123;
	message("~~ ~~ HUBERT'S HAIR-RAISING ADVENTURE ~~ ~~by Bill Peet*");
	say();
	message("Hubert the Lion was haughty and vain And especially proud of his elegant mane. ~But conceit of this sort isn't proper at all And Hubert the Lion was due for a fall. ~One day as he sharpened his claws on a rock He received a most horrible, terrible shock.");
	say();
	message("~A flaming hot spark flew up into the air, Came down on his head and ignited his hair. ~With a roar of surprise he took off like a streak, Away through the jungle to Zamboozi Creek. ~He leaped in kersplash! with a shower of bubbles, And came bobbing up with a head full of stubbles. ~At first he just stared with a wide-open mouth At the cloud of black smoke drifting off to the south.");
	say();
	message("Then he felt with his paws just in back of his ears And he suddenly realized the worst of his fears. ~'I'm ruined,' he shouted, 'oh what'll I do! I'd rather be dead or go live in a zoo! ~And if anyone sees me, oh what a disgrace, So I'd better discover a good hiding place!'");
	say();
labelFunc0282_0123:
	if (!(var0002 == 0x0008)) goto labelFunc0282_0149;
	message("~~RECORDS OF THE HIGH COURT OF YEW~~ ~~ ~~");
	say();
	gflags[0x0126] = true;
	message("... Hook -- Hook is known to be an extremely dangerous killer, a pirate who left his own band of scalliwags to become a freelance assassin for whomever might meet his price. It is believed that he is linked to at least fourteen murders in Britannia. All of the victims had been mutilated with a sharp object believed to be the handiwork of a hook-hand.");
	say();
	message("     It is not known where Hook resides, but many believe he has a secret hideout on Buccaneer's Den. His most recent sighting confirmed that he is travelling with a warrior gargoyle named Forskis.~~");
	say();
	message("... Kellin... is wanted in several townships for thievery. He uses many aliases, including Tervis, Kreg, and Hodge. He was last seen near the forest of Yew and is believed to have gone into hiding.~~");
	say();
	message("... Sullivan... is wanted in several townships for fraud, thievery, and other petty crimes. He is known to be a member of The Fellowship, though The Fellowship has denied any knowledge of such a member. In many reports of the man's crimes, victims have stated that he claimed to be the Avatar.");
	say();
	gflags[0x0159] = true;
labelFunc0282_0149:
	if (!(var0002 == 0x0009)) goto labelFunc0282_015F;
	gflags[0x0233] = true;
	message("Morfin of Paws, Ledger of Venom Sales*");
	say();
	message("~~ ~~...July, 0359:~Sale - 3 vials - 300~Sale - 5 vials - 480~ August, 0359:~Sale - 12 vials - 1100~October, 0359:~Sale - 9 vials - 880~December, 0359:~Sale - 10 vials - 1000~Sale - 5 vials - 500~ February, 0360:~Sale - 6 vials - 590~Sale - 4 vials - 400~Sale - 5 vials - 500~April, 0360:~Sale - 6 vials - 620~September, 0360~ Sale - 5 vials - 500~Sale - 5 vials - 480~November, 0360:~ Sale - 10 vials - 990~January, 0361:~Sale - 12 vials - 1200... ");
	say();
labelFunc0282_015F:
	if (!(var0002 == 0x000A)) goto labelFunc0282_0171;
	message("~~ ~~ULTIMA: THE AVATAR ADVENTURES ~~ ~~by Rusel DeMaria and Caroline Spector*");
	say();
	message("Within the pages of this tome are the details of the many adventurous exploits  of the Avatar, beginning with after the destruction of Exodus. The details within this book are amazingly accurate, and the descriptions should prove to be surprisingly vivid.");
	say();
labelFunc0282_0171:
	if (!(var0002 == 0x000B)) goto labelFunc0282_0187;
	message("~~ ~~ ~~ ~~ EVERYTHING AN AVATAR SHOULD KNOW ABOUT SEX:*");
	say();
	message("*");
	say();
	message("*");
	say();
labelFunc0282_0187:
	if (!(var0002 == 0x000C)) goto labelFunc0282_0199;
	message("~~ ~~ENCYCLOPEDIA BRITANNIA ~~ ~~Volume I. A - E.*");
	say();
	message("     Another volume in a long series of books detailing every known geographical location and historical personage. This work covers Aakara, the first mayor of Trinsic, through Exodus, the vile offspring of Mondain and Minax.");
	say();
labelFunc0282_0199:
	if (!(var0002 == 0x000D)) goto labelFunc0282_01AB;
	message("~~ ~~ENCYCLOPEDIA BRITANNIA ~~ ~~Volume II. F - L.*");
	say();
	message("     Here is another volume in a long series of books detailing every known geographical location and historical personage. This work covers Faalga, the ancient sage of reptiles, through Lyceaum, the reknowned library that is now a part of Moonglow.");
	say();
labelFunc0282_01AB:
	if (!(var0002 == 0x000E)) goto labelFunc0282_01BD;
	message("~~ ~~ENCYCLOPEDIA BRITANNIA~~ ~~Volume III. M - P.*");
	say();
	message("     Here is another volume in a long series of books detailing every known geographical location and historical personage. This tome covers Kanos, an historical tower in ancient Yew, through Pusmoran, the orginator of the rarely-used fourth person point of view.");
	say();
labelFunc0282_01BD:
	if (!(var0002 == 0x000F)) goto labelFunc0282_01CF;
	message("~~ ~~ENCYCLOPEDIA BRITANNIA~~ ~~Volume IV. Q - U.*");
	say();
	message("     Here is another volume in a long series of books detailing every known geographical location and historical personage. This book covers Quaaxetlornicom, the mythilogical snow beast of the North, through, Utopia, the proposed manifestation of the time-honored concept of a perfect society.");
	say();
labelFunc0282_01CF:
	if (!(var0002 == 0x0010)) goto labelFunc0282_01E1;
	message("~~ ~~ENCYCLOPEDIA BRITANNIA~~ ~~Volume V. V - Z.*");
	say();
	message("     Here is another volume in a long series of books detailing every known geographical location and historical personage. This tome covers Vargaz, contemporary storyteller and compiler of legendary parables, through Zyand, a prehistoric island.");
	say();
labelFunc0282_01E1:
	if (!(var0002 == 0x0011)) goto labelFunc0282_01F3;
	message("~~ ~~KEY TO THE BLACK GATE.*");
	say();
	message("~~ ~~ ~~The pages bound within this book contain well-documented clue information from the invaluable sources at Origin Systems.");
	say();
labelFunc0282_01F3:
	if (!(var0002 == 0x0012)) goto labelFunc0282_0205;
	message("~~ ~~COLLECTED PLAYS ~~ ~~by Raymundo.*");
	say();
	message("     Housed inside this anthology of stage works are such greats as \"Three on a Codpiece\", \"The Trials of the Avatar\", \"The Plagiarist\", \"Clue\", \"Thumbs Down\", and several other prize-winning pieces. For convenience in production, several suggested costumes and make-up techniques are listed in the back.");
	say();
labelFunc0282_0205:
	if (!(var0002 == 0x0013)) goto labelFunc0282_0217;
	message("~~ ~~NO TIME TO DANCE~~ ~~by B.A. Morler.*");
	say();
	message("     The wonderful depiction of the busy life of two industrious scholars, caught betwixt the demands of a forceful taskmaster and the pressure of time.");
	say();
labelFunc0282_0217:
	if (!(var0002 == 0x0014)) goto labelFunc0282_0231;
	message("~~ ~~THE SILENCE OF CHASTITY ~~by I.M. Munk.~~");
	say();
	message("The treatise on the monks of the Brotherhood of the Rose, including how they compare to their stereotypes.*");
	say();
	message("     ...One common misconception is that monks still hold on to the outdated notion that \"silence is golden.\" While this was, perhaps, a tenet they supported as late as 0103, no longer do the monks of the renowned Empath Abbey care to remain speechless...*");
	say();
	message("     ...There is no doubt that monks love wine. Not only are there more monk stories centering on the creation of wine, but any visit to the Abbey will reveal just how much of the entire building is devoted to the formation the delicious mixture...");
	say();
labelFunc0282_0231:
	if (!(var0002 == 0x0015)) goto labelFunc0282_0243;
	message("~~ ~~MURDER BY MONGBAT~~ ~~by J. Dial.*");
	say();
	message("     This extraordianary work depicts an enthralling, but far too gory thriller. Chapter after chapter describes innovative and impressive ways to disembowel people and animals.");
	say();
labelFunc0282_0243:
	if (!(var0002 == 0x0016)) goto labelFunc0282_0255;
	message("~~ ~~DOLPHIN IN THE DUNES~~ ~~by Pietre Hueman.*");
	say();
	message("     Contained within the pages of this book is what seems to be an allegory for human familial relations. The work is obviously fiction, but the understones suggest extensive study on Hueman's part. Halfway through the work, the point of view shifts, permitting the reader to see multiple sides of each issue.");
	say();
labelFunc0282_0255:
	if (!(var0002 == 0x0017)) goto labelFunc0282_0267;
	message("~~ ~~MANDIBLES~~ ~~by Peter Munchley.*");
	say();
	message("     Held between the covers of this book is an action-adventure novel about a man-eating sea creature who terrorizes a small coastal town for several months.");
	say();
labelFunc0282_0267:
	if (!(var0002 == 0x0018)) goto labelFunc0282_0279;
	message("~~ ~~THE BOOK OF THE FELLOWSHIP~~ ~~by Batlin of Britain.*");
	say();
	message("     Good morning to thee, gentle friend and traveller! No matter what time of day it might be when thou art reading this- no matter what the hour of the clock- I say good morning to thee because this very moment brings to thee the coming of the dawn. The dawn, as everyone knows, is the moment when illumination comes. The dawn marks the end of the long dark night. It is the moment that marks a new beginning. It is my humble hope that these words may be for thee a dawning, or at least, a sort of awakening...");
	say();
labelFunc0282_0279:
	if (!(var0002 == 0x0019)) goto labelFunc0282_029B;
	message("~~ ~~LORD BRITISH~~The biography of Britannia's longtime ruler~~ ~~ by K.Bennos*");
	say();
	message("     ...While many may remember that Lord British was once but one of eight monarchs (back when the lands were known as Sosaria), few are aware that he is not even a native of our own lovely Britannia. His origin is from another world, one from which he entered ours by way of a red moongate (In fact, it is through this same type of gate that the Avatar of legend purportedly enters Britannia.) As ruler of one of the eight kingdoms, he was instrumental in selecting a champion to face Mondain, Minax, and Exodus.~");
	say();
	message("     When the terrible machine, Exodus, was defeated, 'twas Lord British behind whom all the people of Sosaria rallied. The unified land become known as Britannia, with Lord British as the sole monarch. Though never let it be said he rules with a tyrannical hand. His reign has always been one of Truth, Love, and Courage, supported by his utmost belief in the eight virtues.~");
	say();
	message("     It was Lord British who had the insight to call forth a quest for the Avatar (whom also happened to be the champion from the days of Sosaria), and who gave prosperity and happiness unto the people.~");
	say();
	message("     Then came his mysterious disappearance, when the Stranger who became the Avatar was called by his companions to aid in the search for the lost monarch. Note how Lord Blackthorn, affected by the Shadowlords, quickly turned Britannia's fair lands into a place of terror. But find our noble Lord the Avatar did, and Britannia was restored its former, peaceful state.~");
	say();
	message("     Then came the gargoyles, and our honorable sovereign thoughtfully requested the return of the Avatar...");
	say();
labelFunc0282_029B:
	if (!(var0002 == 0x001A)) goto labelFunc0282_02B5;
	message("~~ ~~GARGOYLE LIKE ME~~ ~~by Darok.*");
	say();
	message("     Within this work lies a fascinating novel of a human who poses as a Gargoyle to view what life is like from the Gargish point of view. The story is a remarkable mix of historical and entertaining facts from encounters with many gargoyles.~");
	say();
	message("     A particular emphasis of the work is the importance of the gargoyle family structure. As there is no evidence of gargoyles having a gender, it is odd how close \"father\" gargoyles maintain a relationship with their (presumably) adopted sons.~");
	say();
	message("     The attitudes seems similar to that of how the more intelligent, winged gargoyles treat the wingless. There is an air of condescension, but the feelings of care still exist, as if the wingless were children to be protect and watched over by the winged.");
	say();
labelFunc0282_02B5:
	if (!(var0002 == 0x001B)) goto labelFunc0282_02C7;
	message("~~ ~~TO BE OR NOT TO BE~~ ~~by Wislem.*");
	say();
	message("     To be the words comprising the complete Gargish primer, designed to educate the young gargoyle mind, both winged and wingless.");
	say();
labelFunc0282_02C7:
	if (!(var0002 == 0x001C)) goto labelFunc0282_02F5;
	message("~~ ~~BOOK OF PROPHECY~~ ~~by Naxatilor the Seer*");
	say();
	message("     An ancient prophecy tells of the final days. When the end of our world shall come. Three signs will precede the end. Thrice shall a being of great evil come into our land, and by this it shall be known that the end is nigh.~");
	say();
	message("     This evil one is of another race, who consider the evil one a great prophet. Yet this false prophet follows not the principles of Control, Passion and Diligence.~");
	say();
	message("     One day the false prophet will come and desecrate our most holy shrine. And the false prophet will steal our most holy artifact, the Codex of Ultimate Wisdom.~");
	say();
	message("     This shall be the first sign of the end.~");
	say();
	message("     Then, it is written, the false prophet shall descend deep into the bowels of the earth. And the false prophet will cause the underworld to collapse. This will cause great earthquakes to tear our world asunder, and there will be a time of plague and famine.~");
	say();
	message("     This shall be the second sign of the end.~");
	say();
	message("     One last time shall the prophet come. This time, the false prophet will come with a band of warriors. And they will destroy all that remains of the gargoyle race.~");
	say();
	message("     There is only one way that this prophecy may be averted: That is by the sacrifice of the false prophet.");
	say();
labelFunc0282_02F5:
	if (!(var0002 == 0x001D)) goto labelFunc0282_0307;
	message("~~ ~~THE BOOK OF FORGOTTEN MANTRAS.*");
	say();
	message("akk~hor~kra~maow~detra~sa~nok~spank~a~mi~ah~xiop~yof~ow~ta~goo~ si~yam~vil~wez~forat~asg~sem~tex~as~hiy~eyac~hodis~ni~ baw~fes~upa~yuit~swer~xes~led~zep~bok~mar~sak~ces~blah~swu...");
	say();
labelFunc0282_0307:
	if (!(var0002 == 0x001E)) goto labelFunc0282_0319;
	message("~~ ~~STRUCK COMMANDER~~ ~~by Gilberto.*");
	say();
	message("     This tome is the fanciful story of a man who, along with several comrades, gains access to a flying vehicle -- much like a cart -- and uses his abilities to fight terrorists and despotic monarchs who employ mercenaries using their own flying carts.");
	say();
labelFunc0282_0319:
	if (!(var0002 == 0x001F)) goto labelFunc0282_032B;
	message("~~ ~~GONE WITH THE WISP~~ ~~by Margareta Mitchellino.*");
	say();
	message("     This novel, purportedly written by a young gypsy woman, depicts the golden days of Britannia. Filled with short anecdotes Mitchellino claims came from her people, the piece is quite amusing.");
	say();
labelFunc0282_032B:
	if (!(var0002 == 0x0020)) goto labelFunc0282_033D;
	message("~~ ~~KARENNA'S WORKOUT~~ ~~by Karenna.*");
	say();
	message("     Found within this plain-bound volume is a combat and exercise training manual. The work provides simple yet complete illustrations demonstrating a variety of steps that will not only disable an opponent, but also aids in good cardiovascular circulation.");
	say();
labelFunc0282_033D:
	if (!(var0002 == 0x0021)) goto labelFunc0282_034F;
	message("~~ ~~KARENNA'S PREGNANCY WORKOUT~~ ~~by Karenna.*");
	say();
	message("     Herein are many words of wisdom for use within the realm of combat and exercise for pregnant women. The drawings included perfectly illustrate in explicit detail how these forms differ from more conventional styles, and how pregnancy truly affects fighting skills.");
	say();
labelFunc0282_034F:
	if (!(var0002 == 0x0022)) goto labelFunc0282_0361;
	message("~~ ~~KARENNA'S TOTAL BODY WORKOUT~~ ~~by Karenna.*");
	say();
	message("     Found upon the pages of this combat and exercise training manual are words that expand upon the original edition. Sadly, this work has recieved much less attention than Karenna's other two.");
	say();
labelFunc0282_0361:
	if (!(var0002 == 0x0023)) goto labelFunc0282_0373;
	message("~~ ~~THE FIVE STAGES OF LAWN CARE~~ ~~by A.P. Berk.*");
	say();
	message("     This is the brilliant and witty depiction of the humorous antics of two young boys during one very hot summer in Britannia. From courting to practicing sword-play, the duo never seem to be able to avoid trouble. Though the boys grow up by the end of the story, they don't quite seem to lose all of their youthful instinct.");
	say();
labelFunc0282_0373:
	if (!(var0002 == 0x0024)) goto labelFunc0282_0385;
	message("~~ ~~AND THEN THERE WAS KAREN... ~~ ~~by B. MacDae*");
	say();
	message("     Within the pages of this tome are words that relate the story of how one man's life was changed by a woman, both during their relationship and after. The tale is bittersweet, but both survive to to become happier people with better outlooks on their lives.");
	say();
labelFunc0282_0385:
	if (!(var0002 == 0x0025)) goto labelFunc0282_0397;
	message("~~ ~~THE INTRINSIC COMPLEXITIES OF INVESTIGATING A NEW SPECIES OF FLORA IN THE LAND OF BRITANNIA~~ ~~by Perrin*");
	say();
	message("     This scientific journal describes, with examples, the process by which one studies plant life. The book is divided into multiple sections, one for the layman, one for the hobbyist, and one for the learned scholar, and includes a warning about the difficulties of gathering specimens from the poisonous swamps.");
	say();
labelFunc0282_0397:
	if (!(var0002 == 0x0026)) goto labelFunc0282_03A9;
	message("~~ ~~RINGWORLD ~~ ~~by Larry Niven*");
	say();
	message("     Herein lie the words that tell of adventures to be had in the space between Britannia and the heavens. The work, although fictional, preposes that there are many undiscovered lands that lie between Britannia and other suns.");
	say();
labelFunc0282_03A9:
	if (!(var0002 == 0x0027)) goto labelFunc0282_03C3;
	message("~~ ~~THE APOTHECARY'S DESK REFERENCE~~ ~~by Fetoau*");
	say();
	message("     It is the author's expectation that thou art reading this to familiarize thyself with the effects of various potions based on their color. The first part of this work will discuss such aspects, with the remaining pages covering the materials and steps required to make such alchemal creations.*");
	say();
	message("     Definitions:~~Black potion: Drinking this will render the individual invisible for several minutes.~Blue potion: This mixture will put the imbiber into a deep sleep.~Orange potion: This potion will awaken an individual who was magically put to sleep.~Purple potion: This concoction will provide magical protection for several minutes of hard fighting.~White potion: This potion will provide a small bit of illumination, much like a candle, for a few minutes.~ Yellow potion: This powerful mixture will give healing aid to the imbiber's wounds.~~WARNING: Green potion: This potion is a dangerous toxin, and will poison the imbiber, possibly killing the individual.~ Red potion: This fabulous drink will cure most poisons, including those acquired from the slugs in the swamps and that gained from drinking a GREEN potion.*");
	say();
	message("     This next section details how one can best recreate these uncanny concoctions...");
	say();
labelFunc0282_03C3:
	if (!(var0002 == 0x0028)) goto labelFunc0282_03D9;
	message("~~ ~~MAGIC AND THE ART OF HORSE-AND-WAGON MAINTENANCE*");
	say();
	message("     This lengthy tome contains wonderous jewels of wisdom concerning all aspects of life. The words exalt the value of basic, common pleasures and denounce the relevance that material possesions have to happiness. The philosophy is simple enough to be easily grasped, yet complete enough to be quite comprehensive.~");
	say();
	message("     The main irony of the title is apparent to anyone who has ever cared for a horse, for, as any stablemaster or horse owner can attest, horses need no food or rest.");
	say();
labelFunc0282_03D9:
	if (!(var0002 == 0x0029)) goto labelFunc0282_03EF;
	message("~~ ~~JESSE'S BOOK OF PERFORMANCE ART~~ ~~by Jesse.*");
	say();
	message("     This anthology is filled with many performance art scripts. The author, a controversial and eccentric Britannian actor, maintains that many aspects of both acting and performance art are quite similar.~");
	say();
	message("     ...Consider the actor. He uses dialogue, facial changes, and movement to convey his lines. His actions, called a PERFORMANCE, combined with the playwrite's script, express an emotion or a message. The performance artist uses the very same techniques. The one possible exception is that he is both the writer AND the performer. In fact, the practice of many facets of performance art can better an actor's skill...");
	say();
labelFunc0282_03EF:
	if (!(var0002 == 0x002A)) goto labelFunc0282_0401;
	message("~~ ~~THE WRITE STUFF~~ ~~by Perrin*");
	say();
	message("     Within these pages is found a treatise on the value of literacy and proper writing skills. The first few chapters briefly discuss the various elements of good literature. The subsequent text analyzes the qualities of the elements to determine -why- they are integral to quality literature. The essay ends with a description of the process by which a promising writer can apply what has been learned to construct better prose.");
	say();
labelFunc0282_0401:
	if (!(var0002 == 0x002B)) goto labelFunc0282_0413;
	message("~~ ~~THAT BEER NEEDS A HEAD ON IT! ~~ ~~by Yongi*");
	say();
	message("     Found within are many a recipe for the most delicious of alcoholic beverages. Not only are the pages filled with descriptions of the various processes by which one produces these drinks, but also with a great number of suggestions for serving methods. In addition, the back index references each drink by type -and- color.");
	say();
labelFunc0282_0413:
	if (!(var0002 == 0x002C)) goto labelFunc0282_042D;
	message("~~ ~~THE PROVISIONER'S GUIDE TO USEFUL EQUIPMENT~~ ~~by Dell*");
	say();
	message("     While most suppliers will rave about the effectiveness of a good sword or specially fitted armour, I personally feel that proper exploring gear is much more necessary.~");
	say();
	message("     Consider this, dear reader. While thou might happen to encouter a wild bear in thy travels, or, even less likely, a troll, thou art doubtless going to be in need of much more mundane equipment.~");
	say();
	message("     With thou possibly be outside city walls when darkness comes? Then buy a torch. And how wilt thou carry thy provisions? A backpack wilt prove necessary. And what about a container for thy refreshment? Purchase a jug or bucket. As for...");
	say();
labelFunc0282_042D:
	if (!(var0002 == 0x002D)) goto labelFunc0282_043F;
	message("~~ ~~THE ACCEDENS OF ARMOURY~~ ~~by Legh*");
	say();
	message("     This book on heraldry not only describes various houses for ease of recognition, but also demonstrates elements used in their concepton. Thus, this book will also permit the reader to formalize an heraldric symbol of his own.");
	say();
labelFunc0282_043F:
	if (!(var0002 == 0x002E)) goto labelFunc0282_0455;
	message("~~ ~~THE BIOPARAPHYSICS OF THE HEALING ARTS~~ ~~by Lady Leigh*");
	say();
	message("     Within this rather in-depth and complex look at healing are the ideas considered to be -the- definitive text on healing wounds, curing poison, and resurrecting the recently dead. Within can be found suggested remedies for any known sickness in Britannia, including the dreaded Zoradin's Disease, which causes a loss of vision followed by an extreme sensitivity to noise.~");
	say();
	message("     In addition, the book lists a few of the after-effects of healing and curing, such as an increase in appetite, intense restlessness, and slight dizzy spells. Though not for good as an introduction to healing for beginners, the tome is perfect for the seasoned healer.");
	say();
labelFunc0282_0455:
	if (!(var0002 == 0x002F)) goto labelFunc0282_0473;
	message("~~ ~~WHAT COLOR IS THY BLADE? ~~ ~~by Menion*");
	say();
	message("The first step in effective sword-forging is to fill a crucible with metal. Then, with the bellows, the fire should be made extrememly hot When the flame no longer continues to grow in its glow, set the crucible on the fire to melt the metal.~");
	say();
	message("     Afterwards, pour the molten metal\tinto the blade mold and let it cool. Be warned! The crucible is at an extremely high temperature. Lift the cooled blade from the mold. Again heat up the fire and set the blade within. Be careful not to let it lose its shape though. Just set it in there long enough for the blade to become malleable.~");
	say();
	message("     When it is ready, finish shaping it on the anvil with the hammer. When thou hast formed a blade of the desired shape, use the quenching barrel to cool the metal. It will harden quickly, so make sure the blade is as sharp as thou dost want it to be.~");
	say();
	message("     All that thou is left to do now is to put the pommel over the tang. It takes some doing to make a fine, sturdy sword, but the finished weapon is well worth it!");
	say();
labelFunc0282_0473:
	if (!(var0002 == 0x0030)) goto labelFunc0282_0485;
	message("~~ ~~THE BLACKSMITH'S HANDBOOK~~ ~~by Christopher*");
	say();
	message("     Within this book can be found the details of fine metal-working. The chapters are broken down into sections related to the specific type of smithy. Armourers need only read the chapters on armour, weapon smiths need only read the chapters on weapon forging, and blacksmiths have the remaining chapters which discuss horseshoes to iron gates.");
	say();
labelFunc0282_0485:
	if (!(var0002 == 0x0031)) goto labelFunc0282_0497;
	message("~~ ~~THIRTEEN MONTHS IN A YEAR~~ ~~by Euralyn*");
	say();
	message("     This epic details a long, fierce war between swords and spells in a fictional land called Corellethra. The story revolves around a family of sorcerers. In an attempt to usurp his father's power, the youngest brother forms an evil plot of patricide, and must be stopped by an outside group of sell-swords.");
	say();
labelFunc0282_0497:
	if (!(var0002 == 0x0032)) goto labelFunc0282_04A9;
	message("~~ ~~THE DAY IT DIDN'T WORK~~ ~~by R. Allen G.*");
	say();
	message("     This collection of essays details the difficulties in overseeing a group of well-meaning misfits in a mechanical environment --  especially when the overseer is a misfit, as well!");
	say();
labelFunc0282_04A9:
	if (!(var0002 == 0x0033)) goto labelFunc0282_04BF;
	message("~~ ~~NO ONE LEAVES~~ ~~by R. Allen G.");
	say();
	message("~~ ~~The sequel to THE DAY IT DIDN'T WORK.*");
	say();
	message("     This short tome offers insight to why new mechanical contraptions don't always function at the time agreed upon between mechanician and overseer, despite how constructed they may appear. In addition, the work discusses how to handle presenting the complaints to the tinkerers who worked on them, and how to persuade them to finish the work regardless of how tired they are and how late in the evening it is.");
	say();
labelFunc0282_04BF:
	if (!(var0002 == 0x0034)) goto labelFunc0282_04DD;
	message("~~ ~~A COMPLETE GUIDE TO BRITANNIAN MINERALS, PRECIOUS, AND SEMI-PRECIOUS STONES~~ ~~by B. Ledbetter*");
	say();
	message("     Herein one can find the descriptions of a plethora of rocks and gems.~");
	say();
	message("     ...One can find lead in a variety of veins. While a common ore, lead is used with such frequency in items such as horse shoes that it is a valuable metal to procure.~");
	say();
	message("     ...Gold is quite rare. Though generally without function, gold has maintained its worth by its very rarity. The refined form is so full of shine that many give it to their lovers as tokens of affection. It is a well-known rumor that one who loves enough to give gold loves enough to remain true.~");
	say();
	message("     ...Blackrock is an odd substance, only recently discovered. The there seems to be little interest in it, and even less use for it, a small handful of experimenters have noticed it has a profound effect on magic (though these same researches refuse to comment on what, exactly, the material does)...");
	say();
labelFunc0282_04DD:
	if (!(var0002 == 0x0035)) goto labelFunc0282_0507;
	message("~~ ~~TREES, AND THEN SOME! ~~ ~~by Ben*");
	say();
	message("     Previously titled: MY LIFE AS A WOODCUTTER, this classic volume pleased readers more than two centuries ago. Much of it reads like a journal, with humorous commentary added by the author between groups of entries.~");
	say();
	message("     Day seven: Today received yet another order for more logs.~~");
	say();
	message("     Day eleven: I am amazed at how frequently people are requesting my services. There is no longer any doubt to the rumors of the rapid growth in Britannia's urban areas.~~");
	say();
	message("     Day sixteen: Found new species of tree. Has silver looking leaves that sparkle and grow quite large. Size indicates that the trees live very long, but grow slowly.~~");
	say();
	message("     Day twenty-eight: Had an odd request for a few of these new \"Silverleaf\" trees.~~");
	say();
	message("     Day Forty: Number of requests for Silverleaf has nearly matched that of \"ordinary\" trees. Wonder what they could want them for.~~");
	say();
	message("     I wonder why everyone has become so crazy for these special trees. I doubt even one so insane as Lord British's Chuckles would pass these off as any sort of precious metal, though if anyone would, we all know it would be the man who carries so much weight with Lord British (the weight of wine bottles, that is).");
	say();
labelFunc0282_0507:
	if (!(var0002 == 0x0036)) goto labelFunc0282_0519;
	message("~~ ~~BLOODIED BLADES AND BUXOM BEAUTIES~~ ~~A.G. Fishmor*");
	say();
	message("     This illustrious tome depicts the life of the romantic pirate, Roguerre, as he sails the Northeast Sea. As he travels from port to port, his adventures become increasingly dangerous, and as equally lucrative. The climax of the novel finds Roguerre in the clutches of a despotic island ruler, from whom he must escape -and- save the beautiful native princess.");
	say();
labelFunc0282_0519:
	if (!(var0002 == 0x0037)) goto labelFunc0282_052B;
	message("~~ ~~THE HUNDRED AND ELEVEN YEAR, THREE-MONTH, SEVEN-DAY WAR~~ ~~ by Perrin*");
	say();
	message("     Within this work of fiction is written the renowned historical treatise that describes an intense and bloody civil war in the land of Britannia. The parable is designed to strike home the advantages the people of Britannia have by remaining unified under the rule of Lord British.");
	say();
labelFunc0282_052B:
	if (!(var0002 == 0x0038)) goto labelFunc0282_053D;
	message("~~ ~~BLACK MOON, RED DAY~~ ~~by Euralyn*");
	say();
	message("     This novel is set in THIRTEEN MONTHS IN A YEAR's Corellethra. The story describes an epic struggle of man against nature as shifting celestial bodies cause violent changes in the land. In the end, only the mighty, supernatural abilities of a sorcerous family can prevent global destruction.");
	say();
labelFunc0282_053D:
	if (!(var0002 == 0x0039)) goto labelFunc0282_054F;
	message("~~ ~~TWO IN THE FOLD~~ ~~by Morian*");
	say();
	message("     Herein lies a fable of treachery in the fair city of Britain. A despicable guild of thieves who seek political power in the government sends two of its best members to infiltrate the Royal castle. The true conflict arises when two of the Royal gaurds begin to bicker so violently with each other that they miss important pieces if evidence that lead to the two thieves.");
	say();
labelFunc0282_054F:
	if (!(var0002 == 0x003A)) goto labelFunc0282_0571;
	message("~~ ~~THE FOREST OF YEW~~ ~~by Taylor*");
	say();
	message("     Though once the large, prosperous city of Justice, Yew has been swallowed by the Deep Forest. However, let not it be said that this turn of events was not by the will of the people.~");
	say();
	message("     As the cities grew throughout the land, many found it difficult to continue peaceful existances as simple farmers and herders. More and more it became necessary to learn trades involving the exchange of goods and services, and the was considerably less instances of of self-sufficiency. While most Britannian found this pleasing, there were those who wanted a return to the less mechanical side of life.~");
	say();
	message("     And those same people, many of whom came from Yew, began to populate the Deep Forest. Though it will not be long before the growing cities and towns catch up to them, for now, many are able to lose themselves amongst the trees, the deer, and the Emps.~");
	say();
	message("     Oddly enough, very few people have actually encountered these ape-like creatures. Little is known about them, they seem to shun human contact. However, observations have revealed that they are definitely herbivores, nevering eating meat. The Emps forge homes from the wood of dead trees, and built shelters high up in the limbs of Silverleaf trees.~");
	say();
	message("     Of course, Emps are not the only creatures who...");
	say();
labelFunc0282_0571:
	if (!(var0002 == 0x003B)) goto labelFunc0282_0583;
	message("~~ ~~THIS OLDE SHIP~~ ~~by Owen of Minoc*");
	say();
	message("     This tome contains much more than just the fundamentals for building ships and other assorted sailing vessels, it has everything any shipwright could ever need. The text is aimed at amateurs (which is what most of thou are in comparison) but holds jewels of wisdom for even the almost skilled shipwright. The latter part of this fine manual is dedicated to the repair of damaged ships, and makes a distinction between working on one's own ships and those crafted by others.");
	say();
labelFunc0282_0583:
	if (!(var0002 == 0x003C)) goto labelFunc0282_0595;
	message("~~ ~~THE CARVER CHRONICLES~~ ~~by Morfin*");
	say();
	message("     Here, finally in one volume are the details of the skills necessary for butchering. The work discusses several contemporary styles, including the author's own. Be warned, noble reader, that Morfin leads into a graphic level of detail that would turn the stomach of all but the toughest meat carvers.");
	say();
labelFunc0282_0595:
	if (!(var0002 == 0x003D)) goto labelFunc0282_05A7;
	message("~~ ~~HERO FERTILIZER~~ ~~by Werdron*");
	say();
	message("     A warrior's handbook, depicting several esoteric\tfighting styles. Each step is accompanied by a short piece of fiction, permitting the reader better visualization of the detailed style.");
	say();
labelFunc0282_05A7:
	if (!(var0002 == 0x003E)) goto labelFunc0282_05B9;
	message("~~ ~~WHAT COULD BE LEFT BUT THE ASHES~~ ~~by N. Flaims*");
	say();
	message("     Herein are the many essays covering an indepth study of the aftermath of a volcanic eruption. The work was extensively researched, and is filled with testamonials from many a survivor. The most interesting story is told by Fendora, a young woman from Minoc, who claims to have experienced a volcanic eruption near every one of the five towns in which she has lived.");
	say();
labelFunc0282_05B9:
	if (!(var0002 == 0x003F)) goto labelFunc0282_05CB;
	message("~~ ~~THE SUMMER OF MY SATISFACTION~~ ~~by Plexes*");
	say();
	message("     The story within this novel relates the tale of Good King Kettle, who rules a great land without any troubles.");
	say();
labelFunc0282_05CB:
	if (!(var0002 == 0x0040)) goto labelFunc0282_05DD;
	message("~~ ~~HITHER COMES THE RAIN~~ ~~by Perrin*");
	say();
	message("     Within the pages of this book are descriptions of the various effects of Spring weather on plants and animals in Britannia, explaining that Britannia seems to see an increase in the amount of rainfall each year.");
	say();
labelFunc0282_05DD:
	if (!(var0002 == 0x0041)) goto labelFunc0282_05EF;
	message("~~ ~~WHITE RAIN~~ ~~by Perrin*");
	say();
	message("     This detailed tome is filled with descriptions of the various effects Winter weather has on plants and animals in Britannia.");
	say();
labelFunc0282_05EF:
	if (!(var0002 == 0x0042)) goto labelFunc0282_0601;
	message("~~ ~~MILORD CONDUCT~~ ~~by Aleina*");
	say();
	message("     Found within is a description of the proper behavior for courtiers and courted individuals. The book reveals many different techniques for both polite and impolite seduction.");
	say();
labelFunc0282_0601:
	if (!(var0002 == 0x0043)) goto labelFunc0282_0613;
	message("~~ ~~TO THE DEATH!~~ ~~by Zaksam*");
	say();
	message("     This book is an in-depth manual of the fighting styles prevalent in Britannia. The author distinguishes between contemporary and historical styles, and comments on the value of each.");
	say();
labelFunc0282_0613:
	if (!(var0002 == 0x0044)) goto labelFunc0282_0625;
	message("~~ ~~BLADE OF THE GRYPHON BARONY~~ ~~by Pebrogdy*");
	say();
	message("     This novel is about a knight's fight against the doctrines of his society to win the love of a common maiden.");
	say();
labelFunc0282_0625:
	if (!(var0002 == 0x0045)) goto labelFunc0282_0637;
	message("~~ ~~THE WINNING NUMBER~~ ~~by A.P. Berk*");
	say();
	message("     Herein is the sequel to THE FIVE STAGES OF LAWN CARE. This novel, which focuses on the same two men, is set ten years after the former work.");
	say();
labelFunc0282_0637:
	if (!(var0002 == 0x0046)) goto labelFunc0282_0649;
	message("~~ ~~THE SCENT OF VALOR~~ ~~by Wetterson*");
	say();
	message("     Herein can be found the definitive word on chivalry and the duties to a knight's liege.");
	say();
labelFunc0282_0649:
	if (!(var0002 == 0x0047)) goto labelFunc0282_065B;
	message("~~ ~~HOW THE WEST WAS~~ ~~by Yuclydia*");
	say();
	message("     This tome of history tracks the geography of Britannia from the early centuries to more recent times. The included maps provide a level of detail never before seen in a work of this nature. In addition, the short chapter on the once-important virtues reveals their source from the broader tenets of Truth, Love, and Courage.");
	say();
labelFunc0282_065B:
	if (!(var0002 == 0x0048)) goto labelFunc0282_0681;
	message("~~ ~~THY MESSAGE RECEIVED! ~~ ~~by For-Lem. Translated by Jillian*");
	say();
	message("     Within this diary is revealed the poor treatment of the gargoyle race since the return of the Codex two centuries ago.~~");
	say();
	message("     To have noticed that humans remain uncomfortable with us. They have given us our own island to populate, but is this gift designed to keep us segregated?~");
	say();
	message("     To have wondered why so few gargoyles leave Terfin. To have no more doubts, having lived in Vesper. To see the hatred for our race. To see, to FEEL, the disgust. To understand not, for it was humans who destroyed OUR land, not gargoyles.~");
	say();
	message("     To seek communication. To seek friendship. To seek trust. To speculate that none are forthcoming. To ask the humans, \"Why?\" To see the terror and loathing and to know there will be no answer given.~");
	say();
	message("     To hope for a future of harmony, but to realize that with, segregation, there can be none. To hope for education of both races, for our children and ourselves.*");
	say();
	message("     To hope, and to live...");
	say();
labelFunc0282_0681:
	if (!(var0002 == 0x0049)) goto labelFunc0282_0693;
	message("~~ ~~RIBALD ENCOUNTERS~~ ~~by Madden*");
	say();
	message("     Within the pages of this anthology are many stories full of suggestive prose.");
	say();
labelFunc0282_0693:
	if (!(var0002 == 0x004A)) goto labelFunc0282_06A5;
	message("~~ ~~THE KNIGHT AND THE THIEF~~ ~~by Hobbs*");
	say();
	message("     This novel describes the life of an heroic warrior suffering from delusions of an alternate life as a rogue and cutpurse.");
	say();
labelFunc0282_06A5:
	if (!(var0002 == 0x004B)) goto labelFunc0282_06B7;
	message("~~ ~~THE TRIO~~ ~~by  Leepeartson*");
	say();
	message("     Compiled from the music of three master bards, this full volume contains a collection of songs for a variety of stringed and percussion instruments.");
	say();
labelFunc0282_06B7:
	if (!(var0002 == 0x004C)) goto labelFunc0282_06D5;
	message("~~ ~~THE BLACK COMPENDIUM ~~ ~~Written by Mondain, with annotations by the enchantress Minax and magical formulae by the hellspawn Exodus.*");
	say();
	message("     To extend one's life is a complicated procedure, taking years to complete. However, there is an additional side effect: invulnerability. I have broken this work down into chapters based on each individual ritual. It is very important that these steps are performed in the order presented.*");
	say();
	message("     First, thou must procure a five stone's of the dust of crushed rubies. This must be mixed thoroughly with the ooze of a slime, enough to make the rubies into a thick paste. After thou hast created the paste, set it in an ivory jar and place the entire container in a bucket of olive oil for three years.*");
	say();
	message("     The next step is too procure 10 newborn babes, none more than six days old. With a knife cut from the bone of a harpy, thou must remove of the blood from each newborn. To be kept fresh, the blood must be stored in an onyx flask, though mixing of each baby's blood is quite permissible.*");
	say();
	message("     Now thou shalt seek out...");
	say();
labelFunc0282_06D5:
	if (!(var0002 == 0x004D)) goto labelFunc0282_06E7;
	message("~~ ~~NO WAY TO JUMP~~ ~~by Desmonth*");
	say();
	message("     Herein lies the compilation that discusses various elements found in adventure stories. In addition to an evaluation of their literary worth, one essay demonstrates how to apply such elements in other styles.");
	say();
labelFunc0282_06E7:
	if (!(var0002 == 0x004E)) goto labelFunc0282_06F9;
	message("~~ ~~STEALING THE WIND~~ ~~by Brianna*");
	say();
	message("     Kite-building techniques thou hast never seen before, from the simple box kite to the mind-numbing criscross butterfly. Each kite is presented in several forms, from beginning to end. At the end of the essay is a listing of wind variables and flying styles.");
	say();
labelFunc0282_06F9:
	if (!(var0002 == 0x004F)) goto labelFunc0282_0713;
	message("~~ ~~BROMMER'S FLORA~~ ~~by Brommer*");
	say();
	message("     This large tome describes most of common plants indigenous to Britannia.~~");
	say();
	message("  ...The Greer plant is especially fascinating, for it spends most of its life huddled with its leaves wrapperd up in a tight ball. However, every so often, the leaves will unfurl, radiating out from the stem...~~");
	say();
	message("  ...The Reaper is unique in that it is both plant and animal. Resembling a large tree, the Reaper is able capable of self-animation as well as self-locomotion. Reapers have been known to attack those who cause harm to their home (i.e. the forests), but seldom reveal themselves otherwise...");
	say();
labelFunc0282_0713:
	if (!(var0002 == 0x0050)) goto labelFunc0282_072D;
	message("~~ ~~BROMMER'S FAUNA~~ ~~by Brommer*");
	say();
	message("     Betwixt the covers of this book can be found details on the most prevalent animals that inhabit the lands of Britannia.~~");
	say();
	message("  ...Deer are quite prevalent in the forested areas of Britannia. They are shy creatures, generally shunning the presence of man, whom they know hunt them. Atop their head sit a pair of antlers...~~");
	say();
	message("  ...The fox is a small animal, akin to a dog or a wolf. It is an omnivore, and more than willing to make off with a farmer's chicken when it tires of other foods...");
	say();
labelFunc0282_072D:
	if (!(var0002 == 0x0051)) goto labelFunc0282_0756;
	message("~~ ~~BROMMER'S BRITANNIA~~ ~~by Brommer*");
	say();
	message("     Betwixt the covers of this atlas is a detailed description of the entire continent of Britannia and the nearby islands.*");
	say();
	if (!(event == 0x0001)) goto labelFunc0282_074E;
	var0003 = UI_display_map();
labelFunc0282_074E:
	message("~~ ~~BROMMER'S BRITANNIA~~ ~~by Brommer*");
	say();
	message("     Betwixt the covers of this atlas is a detailed description of the entire continent of Britannia and the nearby islands.");
	say();
labelFunc0282_0756:
	if (!(var0002 == 0x0052)) goto labelFunc0282_0768;
	message("~~ ~~UP IS OUT~~ ~~by Goodefellow*");
	say();
	message("     Herein is discussed the most current theories on gravity and mass. After years of study and research, the author finally put the fruits of his labor down in the pages of this tome, which includes his discussion on falling apples.");
	say();
labelFunc0282_0768:
	if (!(var0002 == 0x0053)) goto labelFunc0282_077E;
	message("~~ ~WEAVING~~ ~~by Carlyn*");
	say();
	message("     This is a complete sourcebook for a variety of patterns. Included are patterns for clothing, blankets, quilts, and sheets. The introduction even includes a section on weaving one's own cloth.~");
	say();
	message("     ...take the bale of wool and stretch it out across the wheel to make the thread. Once that is done, pull the thread across the loom and begin weaving. Shortly thou wilt have a nice stretch of cloth from which canst make a variety of useful things. For variation, use different colored threads on the loom to create exciting patterns.");
	say();
labelFunc0282_077E:
	if (!(var0002 == 0x0054)) goto labelFunc0282_0790;
	message("~~ ~~FOLLOW THE STARS~~ ~~by Laurnen*");
	say();
	message("     This is a guidebook for navigation, with most of the pages illustrating various constellations and heavenly bodies. The final sections contain maps useful to any ship mate or captain.");
	say();
labelFunc0282_0790:
	if (!(var0002 == 0x0055)) goto labelFunc0282_07A6;
	message("~~ ~~HOW TO CONQUER THE WORLD IN THREE EASY STEPS~~ ~~by Maximillian the Amazingly Mean*");
	say();
	message("     Found within are the ravings of a deranged meglomaniac cleric, describing his plans for the domination of Britannia.");
	say();
	message("     ...and after I have acquired the Vas Corp spell, there will be no one to defy me, for all will fear my casting of the spell. Even the loft Lord Brit, himself, will offer his obeisance to me...");
	say();
labelFunc0282_07A6:
	if (!(var0002 == 0x0056)) goto labelFunc0282_07B8;
	message("~~ ~~TREN I, II, III, IV . . . XVII*");
	say();
	message("     This autobiography, penned by the obtuse mage, reveals Tren's life in all of his incarnations as he continually strove to possess more powerful beings.");
	say();
labelFunc0282_07B8:
	if (!(var0002 == 0x0057)) goto labelFunc0282_07CA;
	message("~~ ~~SIR KILROY~~ ~~Anonymous*");
	say();
	message("     This novel details the rise of a shining white knight, driven to madness by the women in his life.");
	say();
labelFunc0282_07CA:
	if (!(var0002 == 0x0058)) goto labelFunc0282_07DC;
	message("~~ ~~MY CUP RUNNETH OVER~~ ~~by Marseine*");
	say();
	message("     This illustrious volume holds many detailed instructions for neophyte vintners. The books even includes tips on selecting choice grapes and proper labeling techiniques. The tome lists several monks from the Brotherhood of the Rose as sources.");
	say();
labelFunc0282_07DC:
	if (!(var0002 == 0x0059)) goto labelFunc0282_07EE;
	message("~~ ~~SPRING PLANTING, AUTUMNM HARVEST*");
	say();
	message("     Held within these pages is the explaination of agriculture in detail, including the much misunderstood mulching process. The middle section is an illustrated guide to many gardening implements.");
	say();
labelFunc0282_07EE:
	if (!(var0002 == 0x005A)) goto labelFunc0282_0800;
	message("~~ ~~SHOOT THE MOON~~ ~~by Oswauld*");
	say();
	message("     Herein can be found the guidebook for druidic culture. Details on rituals, spells, and the organizational structure fill the rather large number of pages that make up this fine well-spring of knowledge. ");
	say();
labelFunc0282_0800:
	if (!(var0002 == 0x005B)) goto labelFunc0282_0816;
	message("~~ ~~OUTPOST~~ ~~by Gasreth*");
	say();
	message("     Betwixt the covers of this volume is invaluable reading for all soldiers. This manual details the tactics and strategies of siege warfare, from the point of view of the attacker -and- the defender.~");
	say();
	message("     ...and remember, a soldier's best line of active defense is the cannon. After thy comrades have already loaded the cannon, simply aim the cannon at thy target and fire away!");
	say();
labelFunc0282_0816:
	if (!(var0002 == 0x005C)) goto labelFunc0282_0828;
	message("~~ ~~LANDSHIPS~~ ~~by Equinestra*");
	say();
	message("     Not only does this extensive tome describe the many riding beasts in Britannia, but it also discusses riding styles and techniques. In addition, it addresses the reasons for the popularity of carts, explaining why so few people choose to continue riding horses. The final chapter covers flying carpets, and how they will ultimately replace all non-magical means of travel.");
	say();
labelFunc0282_0828:
	if (!(var0002 == 0x005D)) goto labelFunc0282_083E;
	message("~~ ~~LANDSHIPS OF WAR~~ ~~by Equinestra*");
	say();
	message("     An illustrated guide to jousting and barding. This work builds upon the concepts presented in the prequel, LANDSHIPS.");
	say();
	message("     ...a preferred tactic of veterans such as Hillard the Mighty was to center themselves atop their carts and fire missiles unto their foes who were unable to surmount the vehicle.");
	say();
labelFunc0282_083E:
	if (!(var0002 == 0x005E)) goto labelFunc0282_0850;
	message("~~ ~~WHY GOOD MAGES LIKE BLACK MAGIC~~ ~~by Magus*");
	say();
	message("     Despite the rather frivolous title, this complete tome explains the value of applying magic for the benefit of society, as opposed to selfish, personal gain. The concepts presented herein mesh quite well with those exemplified by the virtues.");
	say();
labelFunc0282_0850:
	if (!(var0002 == 0x005F)) goto labelFunc0282_0862;
	message("~~ ~~WHEN STARTS THE ADVENTURE~~ ~~by Sabra*");
	say();
	message("     Herein can be found a novel relating the travels of a fledgling warrior, struggling to gain skill and respect in a treacherous world. As the warrior gains experience in dealing with opposition, he begins to notice how well the land is balanced in ideaology:  for every evil, there seems to be a good, and vice-versa.");
	say();
labelFunc0282_0862:
	if (!(var0002 == 0x0060)) goto labelFunc0282_0874;
	message("~~ ~~WHAT A FOOL BELIEVES~~ ~~by P. Nolan*");
	say();
	message("     Within the pages of this book is the story of a bard, a blonde, and a bottle -- the perfect combination for a classic tale of the war between the sexes.");
	say();
labelFunc0282_0874:
	if (!(var0002 == 0x0061)) goto labelFunc0282_088A;
	message("~~ ~~THE COMPLEATE HISTORY OF THE LUTE~~ ~~by Devonaillion, with foreword by the Master Bard, Iolo*");
	say();
	message("     Herein are the words penned by the illustrious master lute-player, himself. The voluminous work begins with a description of the building process and carefully leads into the music theory. I heartfully and willingly share my title with this young and very talented virtuoso, and recommend that thee follow his words of wisdom well~");
	say();
	message("          -- Iolo Arbalest");
	say();
labelFunc0282_088A:
	if (!(var0002 == 0x0062)) goto labelFunc0282_08A0;
	message("~~ ~~BIRDS OF BRITANNIA~~ ~~by Brother Wayne*");
	say();
	message("     Bound here is the comprehensive guide to the avian species, beautifully and colorfully illustrated by many different artists.");
	say();
	message("     ...Surprising to many is that the Silver-Winged Pharcelot is not the most prevelent bird in Britannia, though arguably the most visible. Far more popular is the Black-Tipped Grackle, but it's predilection for dark, cool areas make is considerable less visible.");
	say();
labelFunc0282_08A0:
	if (!(var0002 == 0x0063)) goto labelFunc0282_08B2;
	message("~~ ~~I AM NOT A DRAGON~~ ~~by Thomson*");
	say();
	message("     Within these pages is a bawdy tale of Belnarth, fictional lord of Serpent's Hold. This volume is part one of a great trilogy involving the humorous exploits of the lord and his fellow knights.");
	say();
labelFunc0282_08B2:
	return;
}


