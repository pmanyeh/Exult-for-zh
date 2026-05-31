#game "blackgate"
// externs
extern void Func0710 object#(0x710) ();
extern var Func0908 0x908 ();

void Func031D shape#(0x31D) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x002D)) goto labelFunc031D_0017;
	item->Func0710();
	return;
labelFunc031D_0017:
	UI_play_sound_effect2(0x000E, item);
	UI_book_mode(item);
	if (!(var0000 > 0x0033)) goto labelFunc031D_0035;
	message("This is not a valid scroll");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0035:
	if (!(var0000 == 0x0000)) goto labelFunc031D_0046;
	message("From the Desk of Lord British");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0046:
	if (!(var0000 == 0x0001)) goto labelFunc031D_008B;
	message("How to keep the Avatar busy for hours looking for a clue--");
	say();
	message("(please scroll forward)*");
	say();
	message("How to keep the Avatar very busy for hours looking for a clue--");
	say();
	message("(please scroll forward)*");
	say();
	message("How to keep the Avatar very very busy for hours looking for a clue --");
	say();
	message("(please scroll forward)*");
	say();
	message("How to keep the Avatar very -very- very busy for hours looking for a clue --");
	say();
	message("(please scroll forward)*");
	say();
	message("How to keep the Avatar so very -very- very incredibly busy for hours looking for a clue --");
	say();
	message("(please scroll forward)*");
	say();
	message("How to keep the Avatar so very -very- absolutely unbelievably and incredibly busy for hours looking for a clue --");
	say();
	message("(please scroll forward)*");
	say();
	message("When thou art not so busy, thou shouldst seek out Margareta the gypsy in Minoc and have thy fortune told!");
	say();
	message("Signed -  Chuckles");
	say();
	goto labelFunc031D_0487;
labelFunc031D_008B:
	if (!(var0000 == 0x0002)) goto labelFunc031D_009C;
	message("KEEP BRITANNIA CLEAN -- SEND THE GARGOYLES BACK! ~~ ~~ ~~ Paid for by the Britannian Purity League");
	say();
	goto labelFunc031D_0487;
labelFunc031D_009C:
	if (!(var0000 == 0x0003)) goto labelFunc031D_00BA;
	if (!gflags[0x012B]) goto labelFunc031D_00B3;
	message("The cutting down of Silverleaf Trees will be done no longer by you. Your compliance is desired. You are thanked, Woodsman.~~Salamon~~ ~~Ben, the logger");
	say();
	goto labelFunc031D_00B7;
labelFunc031D_00B3:
	message("The cutting down of Silverleaf Trees will be done no longer by you. Your compliance is desired. You are thanked, Woodsman.~~Salamon");
	say();
labelFunc031D_00B7:
	goto labelFunc031D_0487;
labelFunc031D_00BA:
	if (!(var0000 == 0x0004)) goto labelFunc031D_00CF;
	message("Bill of Punative Action for the Distribution of Waste Products in Lock Lake~~78934979.S3, section 835~~");
	say();
	message("Whereby the members of the offending party shall be immersed in the lake, heretofore refered to as Lock Lake, up to their necks for not more than three consecutive days and not fewer than...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00CF:
	if (!(var0000 == 0x0005)) goto labelFunc031D_00E0;
	message("\"Thou hast received payment. Make the delivery tonight.\"");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00E0:
	if (!(var0000 == 0x0006)) goto labelFunc031D_00F1;
	message("Once the construction is complete, store the blackrock in the hold of The Crown Jewel.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_00F1:
	if (!(var0000 == 0x0007)) goto labelFunc031D_0127;
	var0001 = Func0908();
	message("Finster - Britain (x)");
	say();
	message("Duncan - Buccaneer's Den (x)");
	say();
	message("Christopher - Trinsic (x)");
	say();
	message("Frederico - Minoc (x)");
	say();
	message("Tania - Minoc (x)");
	say();
	message("Alagner - New Magincia  (x)");
	say();
	message("Lord British - Britain ( )");
	say();
	message(var0001);
	message(", the Avatar - ( )");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0127:
	if (!(var0000 == 0x0008)) goto labelFunc031D_0138;
	message("The stone pedestal should be four feet high, three feet wide and two feet deep. Atop each of the three pedestals shall be set the three receptacles: the tetrahedron, the sphere, and the cube.~~All of these items for the defense mechanism of the portal have already been constructed by the Trinsic blacksmith.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0138:
	if (!(var0000 == 0x0009)) goto labelFunc031D_0149;
	message("Crown Jewel~~Sunrise tomorrow - sail for the Isle of the Avatar!");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0149:
	if (!(var0000 == 0x000A)) goto labelFunc031D_015E;
	gflags[0x023F] = true;
	message("To tell you the amount of explosives is quite adequate to destroy the altars. To remind you of the need for silence, and of the punishment it will help you avoid.~~--Runeb");
	say();
	goto labelFunc031D_0487;
labelFunc031D_015E:
	if (!(var0000 == 0x000B)) goto labelFunc031D_016F;
	message("The Narwhal shall be a fine, fine vessel, measuring 100 cubits from bow to stern. She shall be constructed of the finest Yew wood, with a ballast of thirty-seven cubits. After the planks are retrograded, I shall preceriprocate the bottom decks to insure their verbosity.~Each bunk shall fit exactly within the 3 foot by four 14 cubit cabin, except for the first mate and sergeant's quarters, which will be octagnal the size...~~ ~~Owen of Minoc");
	say();
	goto labelFunc031D_0487;
labelFunc031D_016F:
	if (!(var0000 == 0x000C)) goto labelFunc031D_0188;
	message("BRITANNIAN TAX COUNCIL");
	say();
	message("TAX DECLARATION");
	say();
	message("To insure the proper record-keeping of thine income and spending, first replicate in triplicate the files numbered 37-A through 1204-W of the forms. Following each copy, compile the aggregate number of expenditures and multiply by tables 3, 69, 106. The next involves...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0188:
	if (!(var0000 == 0x000D)) goto labelFunc031D_0199;
	message("First thou must needs fill a crucible with metal. Then, using the bellows, make the fire as hot as possible. When the flame no longer continues to glow, thou art ready to proceed by setting the crucible on the fire to melt the metal.~~ Afterwards, pour the molten metal into the blade mold and let it cool. Be warned! The crucible is at an extremely high temperature. Do not burn thyself.~~ With the tongs, lift the cooled blade from the mold. Again heat up the fire and set the blade within. Be careful not to let it lose its shape though. Just set it in there long enough to become malleable.~~ When it is ready, take it to the anvil and finish shaping it with the hammer. When thou hast the desired blade, find the quenching barrel and plunge the sword in the cool water. It will quickly harden.~~ All that thou must needs do now is to put the pommel over the tang. It takes some doing to make a fine, sturdy sword, but the finished weapon is well worth it!");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0199:
	if (!(var0000 == 0x000E)) goto labelFunc031D_01AE;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Scaly Eel~~COMPLETION DATE: 7-21-0355~~ INSPECTION DATE: 8-2-0355~~SHIPWRIGHT: Gargan of Trinsic");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01AE:
	if (!(var0000 == 0x000F)) goto labelFunc031D_01C3;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Beast~~COMPLETION DATE: 3-12-0358~~ INSPECTION DATE: 3-19-0358~~SHIPWRIGHT: Clint of Britain");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01C3:
	if (!(var0000 == 0x0010)) goto labelFunc031D_01D8;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Excellencia~~COMPLETION DATE:~~ INSPECTION DATE:~~SHIPWRIGHT: Owen of Minoc");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01D8:
	if (!(var0000 == 0x0011)) goto labelFunc031D_01ED;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Nymphet~~COMPLETION DATE: 12-22-0357~~ INSPECTION DATE: 1-3-0358~~SHIPWRIGHT: Russell of New Magincia");
	say();
	goto labelFunc031D_0487;
labelFunc031D_01ED:
	if (!(var0000 == 0x0012)) goto labelFunc031D_0202;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Lusty Wench~~COMPLETION DATE: 6-14-0327~~ INSPECTION DATE: 6-24-0359~~SHIPWRIGHT: Kethron of Moonglow");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0202:
	if (!(var0000 == 0x0013)) goto labelFunc031D_0217;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: The Dragon's Breath~~COMPLETION DATE: 5-18-0342~~ INSPECTION DATE: 5-23-0342~~SHIPWRIGHT: Rohden of Britain");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0217:
	if (!(var0000 == 0x0014)) goto labelFunc031D_0228;
	message("       ZARA's DANCE~For the lute.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0228:
	if (!(var0000 == 0x0015)) goto labelFunc031D_0239;
	message("       WINDY NIGHT~For the harp.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0239:
	if (!(var0000 == 0x0016)) goto labelFunc031D_024A;
	message("       ONE OF THE BEAST~For the harpsichord.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_024A:
	if (!(var0000 == 0x0017)) goto labelFunc031D_025B;
	message("       SPRING FIRE~For the xylophone.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_025B:
	if (!(var0000 == 0x0018)) goto labelFunc031D_0270;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME:~~COMPLETION DATE:~~INSPECTION DATE:~~ SHIPWRIGHT:");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0270:
	if (!(var0000 == 0x0019)) goto labelFunc031D_0281;
	message("Bill of Underwater Scavenging and Cricket Playing~~23568976.Y7, section 069~~Whereby the participants belonging to the first party of the first team may also engage in supplementary treasure seeking within the bounds of two-hundred and thirty-nine feet from the docks. ~~Whereby the participants belonging to the second party of the second team may follow accordingly provided they use no handkerchiefs within the bounds of seven and one-half feet of the first party of the first part. ~~Be it known the second party of the first part may not involve outside...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0281:
	if (!(var0000 == 0x001A)) goto labelFunc031D_0292;
	message("   G.J.'S SKETCH PAD");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0292:
	if (!(var0000 == 0x001B)) goto labelFunc031D_02A3;
	message("~~Between these columns, upon this pedestal, once sat the CODEX OF ULTIMATE WISDOM.~~Now it lies in the infinite darkness of the Void, forever shining as a beacon of knowledge to the races of man and gargoyle.~~Those who would seek the wisdom contained therein must unite the mystic lenses in the same manner as the Avatar did more than two hundred years ago.~Lord British~~To search for Singularity through Control, Passion, and Dilligence.~~Lord Draxinusom");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02A3:
	if (!(var0000 == 0x001C)) goto labelFunc031D_02B4;
	message("~     Ownership of Horse and Carriage~~This writ entitles the bearer to ownership and use of the wagon and its accompanying horse, Fletcher. Misuse of this writ by those not in full ownership of aforementioned wagon and horse is punishable under section 7890.3D5 of the Private Ownership of Goods and Livestock Act, as enforced by the Britannian Tax Council.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02B4:
	if (!(var0000 == 0x001D)) goto labelFunc031D_02C5;
	message("~     Ownership of Horse and Carriage~~This writ entitles the bearer to ownership and use of the wagon and its accompanying horse, Brikabrak. Misuse of this writ by those not in full ownership of aforementioned wagon and horse is punishable under section 7890.3D5 of the Private Ownership of Goods and Livestock Act, as enforced by the Britannian Tax Council.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02C5:
	if (!(var0000 == 0x001E)) goto labelFunc031D_02DA;
	message("Bill of Indoor Animal Housing~~89634510.P4, section 402~~");
	say();
	message("Whereby the participants belonging to the owning party are permitted to store both animal and goods related to the care of said animal indoors, providing...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02DA:
	if (!(var0000 == 0x001F)) goto labelFunc031D_02EF;
	message("Bill of Carriage Construction ~~48382745.F3, section 058~~");
	say();
	message("Whereby wood-builders and metal-workers may cross skills without the need for guild officiation limited by the following principles...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_02EF:
	if (!(var0000 == 0x0020)) goto labelFunc031D_0304;
	message("Bill of Cabin Construction Near Granite Zoned Districts~~ 48923013.Q4, section 193~~");
	say();
	message("Whereby the participants belonging to the Stone Masons's Guild may register compliants unto the party of the Cabin Builders, represented here as and/or by members for the Wood-Builders Guild with the intent of...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0304:
	if (!(var0000 == 0x0021)) goto labelFunc031D_0319;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: Anne's Revenge~~COMPLETION DATE:11-23-0198 ~~INSPECTION DATE: 1-17-0199~~SHIPWRIGHT: Alluria of New Magincia");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0319:
	if (!(var0000 == 0x0022)) goto labelFunc031D_032E;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: Golden Hinde~~COMPLETION DATE: 7-08-0105 ~~INSPECTION DATE: 7-12-0105~~SHIPWRIGHT: Gendra of Trinsic");
	say();
	goto labelFunc031D_0487;
labelFunc031D_032E:
	if (!(var0000 == 0x0023)) goto labelFunc031D_0343;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: Bounty~~COMPLETION DATE: 5-27-0185 ~~INSPECTION DATE: 6-04-0185~~SHIPWRIGHT: Gibson of Minoc");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0343:
	if (!(var0000 == 0x0024)) goto labelFunc031D_0360;
	var0001 = Func0908();
	message("Dearest Iolo,~     In Buccaneer's Den I came across an old pirate who told me he had sailed across the waters of Britannia more times than I was summers old. On a gamble, I asked if he had ever heard of the legendary Serpent Isle. He had! And he even had a map that would tell how to locate the island. I bought the map and have already begun my search. However, I made a copy so that thou mayest follow me after thy current adventures have ended. I have left the copy with Lord British, but he promised he wouldst not give it to thee until thou hast completed thy explorations with ");
	message(var0001);
	message(".~~     'Til I see thee again, my love!~     Gwenno");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0360:
	if (!(var0000 == 0x0025)) goto labelFunc031D_0371;
	message("~~All is not as it seems...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0371:
	if (!(var0000 == 0x0026)) goto labelFunc031D_0382;
	message("~     Ownership of Horse and Carriage~~This writ entitles the bearer to ownership and use of the wagon and its accompanying horse, ____________. Misuse of this writ by those not in full ownership of aforementioned wagon and horse is punishable under section 7890.3D5 of the Private Ownership of Goods and Livestock Act, as enforced by the Britannian Tax Council.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0382:
	if (!(var0000 == 0x0027)) goto labelFunc031D_0393;
	message("~Very well. It is agreed that we attack Lord British's castle at the dawning of the seventh day.~~Fransisa~Corwin~ Brax~Athelas");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0393:
	if (!(var0000 == 0x0028)) goto labelFunc031D_03B0;
	message("~     Selwyn's Last Will:~~");
	say();
	message("     I do hearby bequeath my firedoom staff to anyone who is mighty and cunning enough to penetrate the defenses of my fortress and slay my pet.~~");
	say();
	message("     May all who read this rot in death!~");
	say();
	message("          Selwyn");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03B0:
	if (!(var0000 == 0x0029)) goto labelFunc031D_03C1;
	message("     Throne of `Change' keeps thee at bay, but `Virtue' shall show the way!");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03C1:
	if (!(var0000 == 0x002A)) goto labelFunc031D_03D3;
	message("     I have been here for more days than I am able to remember, though I have not forgotten the day I entered this forsaken cave which has become my tomb. That was 2-29-0227. But my food ran out long ago, and the rats are more interested in eating me than letting me eat them. My strength is gone, as is my will. If thou dost find this, please tell Mythra I love her.");
	say();
	message("     --Denyel");
	say();
labelFunc031D_03D3:
	if (!(var0000 == 0x002B)) goto labelFunc031D_03EC;
	message("~     Lord British's Last Will and Testament:~~");
	say();
	message("     Being of sound mind and body, I hereby bequeath all of my belongings to... Nell, my beloved chambermaid. She has kept me warm so many nights, which is more than I can say for most of my bloody subjects! And to our unborn child, I bequeath my crown. Long live the king. Or queen, whichever it shall be!~~");
	say();
	message("          Lord British");
	say();
	goto labelFunc031D_0487;
labelFunc031D_03EC:
	if (!(var0000 == 0x002C)) goto labelFunc031D_0401;
	message("By proclamation of Lord British this is an official document denoting ownership of the heretofore mentioned sailing vessel. Forgery of this title is prohibited under law no. 1989832.A5, section 809.");
	say();
	message("     DEED~~SHIP NAME: Golden Ankh~~COMPLETION DATE: 3-8-0338~~ INSPECTION DATE: 3-18-0338~~SHIPWRIGHT: Clint of Britain");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0401:
	if (!(var0000 == 0x002D)) goto labelFunc031D_0412;
	item->Func0710();
	goto labelFunc031D_0487;
labelFunc031D_0412:
	if (!(var0000 == 0x002F)) goto labelFunc031D_0437;
	message("Day 1: I circumvented the living statues and made it through the gate. Despite the long boat ride, I feel no weakness. I suspect the excitement of the quest gives my strength. I will rest soon.");
	say();
	message("Day 2: In the large room I encountered the lightening at the \"X.\" Very clever that -- predicting I would not trust  the marking. I will not be so foolish  again.");
	say();
	message("Day 3: I found a large chamber, one in which I can see fully its entire contents. Yet, there are invisible barriers that prevent me from entering.");
	say();
	message("Day 4: The barriers are not what I first suspected. They are walls. I can see the exit, and yet I cannot reach it. This is maddening!");
	say();
	message("Day 5: I wish I had brought more rations. I did not expect to be caught like this. I will starve soon if I do not find the way out... and food and water!");
	say();
	message("Day: I am still without food and whales... I seee but cannot... well hilp arrive in time!? I think but am thoughtful...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0437:
	if (!(var0000 == 0x0030)) goto labelFunc031D_0448;
	message("... I have been in this wretched place for more weeks than I care to remember -- than I COULD remember were I to try. I have seen far too much in the way of deception and falsehood. I am forced to wonder how this maze of tunnels can demonstrate Truth. There is one lesson I can claim to have learned, thou I wonder with whom I can ever share it: I am not the Avatar. I wish with my last breath good luck to he... or she...  who can truly claim the Avatarhood. As I lay here dying, I ask but one request of the finder:  remember well my strug...");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0448:
	if (!(var0000 == 0x0031)) goto labelFunc031D_045D;
	message("... I write this with what little hope I have left. Frenke has now died -- killed by shooting balls of flame. I will attempt to navigate the treacherous tunnel of fire alone. Should my quest succeed, I will emerge the Avatar. I relflect not upon my other destiny...");
	say();
	message("     This will be my last entry. My ink is all but gone, much like my will. I no longer marvel at how a man can give up, like the poor fool we found at the end of the invisible maze. But I refuse to succumb to the call of my weary bones. I will trudge on.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_045D:
	if (!(var0000 == 0x0032)) goto labelFunc031D_046E;
	message("       SCROLL OF INFINITY~~ artifact TalismanOfInfinity -~ if Reality is Magic -~ if Locale(Artifact) is Void -~ Convex is FindInBritannia(ConvexLens)~ Concave is FindInBritannia(ConcaveLens)~ ~ if DoLightTest(Concave, Convex) -~ TalismanList is BritanniaSearch(Talisman)~ ~~ Counter is 0~ foreach Talisman in TalismanList -~ if KnowType(Talisman) is Truth -~ Counter is Counter and 1~ --~ if KnowType(Talisman) is Love -~ Counter is Counter and 1~ --~ if KnowType(Talisman) is Courage -~ Counter is Counter and 1~ --~ ~ if Counter is 3 -~ DoVoidAccess()~ ~~ InifinityAction is Action(Instance,~ aPlanarTravel, Britannia,~ aCallBack, TalismanOfInfinity)~ --~ if Reality is PseudoScience -~ EvilEntity is EntitySearch(All, Powerful, Evil)~ if EvilEntity -~ Check is PushReality(EvilEntity)~ if not Check -~ Test(\"Thou shalt never see this!\")");
	say();
	goto labelFunc031D_0487;
labelFunc031D_046E:
	if (!(var0000 == 0x0033)) goto labelFunc031D_0487;
	message("The Diary of Erethian:~~");
	say();
	message("Entry #1:");
	say();
	message("     Perhaps someday I shall have the time and inclination to write on this parchment, but for now it pleases me not to.");
	say();
	goto labelFunc031D_0487;
labelFunc031D_0487:
	return;
}


