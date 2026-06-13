#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func031D shape#(0x31D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event != 0x0001)) goto labelFunc031D_0009;
	return;
labelFunc031D_0009:
	var0000 = UI_is_pc_female();
	var0001 = "him";
	var0002 = "his";
	if (!var0000) goto labelFunc031D_002E;
	var0001 = "her";
	var0002 = "her";
labelFunc031D_002E:
	var0003 = UI_get_item_quality(item);
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	if (!(var0003 == 0x0000)) goto labelFunc031D_0054;
	message("One bird in thine hand is better than two birds in the bush.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0054:
	if (!(var0003 == 0x0001)) goto labelFunc031D_0065;
	message("To the adventurer actively looking for me treasure:~~ Yes, thou be looking for me gold, I ken that much.~~Beware!~~ All is not as easy as it seems. All is not as it appears. Thou may not see what is there and what thou do not see can harm ye. Nevertheless, what thou do not see may save thy life.~ Thy rewards will make ye rich. In order to go there, thou hast to find the entrance. Obvious, yes? Yes, but the entrance is not to be found easily, for it is a hidden one.~ Good luck to ye!~~Silverpate.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0065:
	if (!(var0003 == 0x0002)) goto labelFunc031D_00D6;
	var0004 = Func0953();
	message("To Gustacio, wisest of Mages --");
	say();
	message("The Mundane outsider, ");
	message(var0004);
	message(", carried with ");
	message(var0001);
	message(" a very rare and powerful weapon. The blade gained its considerable power from a Daemon bound within the blade by a most puissant enchantment.");
	say();
	message("I would very much like to study the Mundane's blade. Unfortunately, ");
	message(var0004);
	message(" released the Daemon from the sword in order to escape from the Mountains of Freedom.");
	say();
	message("I wonder... how doth a mere Mundane obtain such a weapon?");
	say();
	message("Now the blade needs to have its sorcerous energies realigned if it is to ever contain another bound spirit.");
	say();
	message("I could repair it if I coud use thy flux analyzer. I know that the device was stolen from thee years ago. Hast thou ever recovered it?");
	say();
	message("-- Melino");
	say();
	if (!(!gflags[0x00CE])) goto labelFunc031D_00D3;
	if (!gflags[0x023C]) goto labelFunc031D_00C3;
	var0005 = Func0992(0x0001, "@We found it in Skullcrusher!@", "@I found it in Skullcrusher!@", true);
	goto labelFunc031D_00D3;
labelFunc031D_00C3:
	var0005 = Func0992(0x0001, "@We must seek this flux analyzer!@", "@I must find this flux analyzer!@", true);
labelFunc031D_00D3:
	goto labelFunc031D_0A44;
labelFunc031D_00D6:
	if (!(var0003 == 0x0003)) goto labelFunc031D_00F3;
	message("I See the @Hero From Another Land@ in the frozen lands of the North. The Hero seeks the wife of ");
	message(var0002);
	message(" oldest companion. A wall of ice doth prevent the Hero from reaching the woman. The Hero lifts a horn -- the Horn of the Gwani -- to ");
	message(var0002);
	message(" lips and blows. The sound of the horn is deafening! The wall of ice is shattered!");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_00F3:
	if (!(var0003 == 0x0004)) goto labelFunc031D_0104;
	message("Dearest Delphynia,~~ The enchanted afternoon when I first saw thy precious face, thou wert in the full bloom of thy beauty and I was blinded. I forgot everything, everyone. I forgot all about Batlin standing next to me and the reagents we were supposed to purchase. That day I fell in love with thee, my Delphynia. But I fear thou wert blinded by my physical appearance as well. Alas! The scars that twist my face are not a pretty sight.~ Look beyond mine appearance, Delphynia. Let thy mind's eye see my soul. Thy mind is less deceitful than thine eyes which only glance at the surface of things and people. If thou wilt but look, thou wouldst see the hidden treasures of thy\tscarred Ruggs. For I am a good man. My heart is pure and so is my mind, Delphynia. I beg of thee, look at me. 'Til I see thee again,~~Ruggs.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0104:
	if (!(var0003 == 0x0005)) goto labelFunc031D_0115;
	message("  Oh, Great Captains, my Great Captains! So powerful you were yesterday, so pitiful you are today. Rulers of the City are now prisoners of the Oracle. What a fate you might have met! Iolo is pleased that such powerful creatures as you, Great Captains, have lost power, herein uncovering the fools in them... ~~Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0115:
	if (!(var0003 == 0x0006)) goto labelFunc031D_012A;
	message("Everyone is in search of The Lady of Fawn. For The Lady hath been lost since dawn. Barking their strange tune throughout the city, All of them, townsfolk and priests. Iolo did it, enjoying such feasts. Avatar, is it not pretty?~~");
	say();
	message("      Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_012A:
	if (!(var0003 == 0x0007)) goto labelFunc031D_013F;
	message("   I must seek out Voldin. He will know what can be done against the power that this \"Mad\" Iolo doth exhibit. I still can hardly believe what hath befallen me, Zulith, Chancellor of Fawn -- the most clever man on Serpent Isle: forced to flee from an insane mage!~ ~Still, all is not lost: the treasure room is well hidden and I have one of its two keys. Lady Yelinda doth have the other, though I doubt she remembers it. ~The so-called Serpent Armour is safe from that devil Iolo, and I still have my freedom and my life. Yet I cannot leave Fawn till I have secured all of the treasure!~ ~Hah! 'Tis laughable to think about the titular ruler of Fawn -- Lady Yelinda -- a woman that hath the intelligence of a fish. 'Tis best that she spend the rest of her days trapped in Gorlab, the fool! She thought that I was merely redecorating her throneroom when in sooth I had constructed (with the help of a Moonshadian mage) an illusionary wall in the southeast room of the palace! ~That is where I had to store the Serpent Armour. 'Tis safe from all, I tell you!~~");
	say();
	message("PS: I must incorporate these writings into my diary lest I forget!");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_013F:
	if (!(var0003 == 0x0008)) goto labelFunc031D_0150;
	message("Kylista needs must speak with thee, Avatar, now that is interesting... Heretofore, she was in communication with the Oracle and now she wants thee. Is there any hidden meaning to this change of heart? Thou shouldst know the answer to that, Avatar. When a woman needs to speak to one such as thee, thou dost not want her to wait, Avatar, or dost thou? Is there anything we should be aware of?~ Thy good old friend Iolo wants to know, Avatar...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0150:
	if (!(var0003 == 0x0009)) goto labelFunc031D_016F;
	message("  Journey to the mint; ambush the hero there. Succeed in thy mission and thou shalt be richly rewarded. There is but one penalty for failure -- death!");
	say();
	message("~  Remember, the Avatar often travels with accursed companions, and they may be with ");
	message(var0001);
	message(". Ignore the companions -- direct thine energies to one goal: the destruction of the Avatar! Destroy this note.~");
	say();
	message("   No evidence should be left behind thee. ~~  Batlin");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_016F:
	if (!(var0003 == 0x000A)) goto labelFunc031D_0188;
	message("  Honor be to thee, dear reader. This piece of parchment is mine only means of communication with thee. Mad Iolo cruelly removed my tongue, that I might lead by example and not by words!");
	say();
	message("  I am so disenchanted... I cannot bear the fact that I could not save the city from further plagues. Moreover, there is absolutely no sign of the return of Batlin.");
	say();
	message("  What is going to happen? Thou shouldst tell me, I beg of thee. ~~   Leon.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0188:
	if (!(var0003 == 0x000B)) goto labelFunc031D_01A1;
	message("Right adventurous Avatar,~");
	say();
	message("   I greet thee well, Avatar, sending thee my blessings and letting thee know that it appears that thou art not paying due attention to my clues.");
	say();
	message("   I require thee that thou dost so. ~~Faithfully thine, ~~                  Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01A1:
	if (!(var0003 == 0x000C)) goto labelFunc031D_01B2;
	message("Thou art required at the temple for the trial");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01B2:
	if (!(var0003 == 0x000D)) goto labelFunc031D_01C7;
	message("Order be to thee, my right good reader!~~ Beware that when the virtues are in imbalance, a whole new system is set in motion. The Chaos Forces without the Order Forces create the Chaos Anti-Forces. I hope thou dost understand what the implications of such a change mean.~ A virtue like Tolerance without Ethicality creates a lack of standards of conduct and would lead, without a doubt, to Anarchy.~ Enthusiasm without Discipline promises actions without self-restraint that is Wantonness.~ Emotion deprived of Logic would foster an inability to overcome emotional impulses with rational thoughts, which augurs Insanity.~~");
	say();
	message("On the other hand, the Order Forces without the Chaos Forces create the Order Anti-Forces.~ In this case, it means that Ethicality without Tolerance would bring about disrespect for the beliefs and rights of others.~ Discipline without Enthusiasm would foster a spirit of hopelessness which retards positive action. That is called Apathy.~ Logic without Emotion leads to self-advancing actions taken without regard to the wants or needs of others. That is called Ruthlessness. Hence, it is now obvious that only Discipline can correct Gwenno.~ Have this in remembrance and take care of thyself,~~Karnax");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01C7:
	if (!(var0003 == 0x000E)) goto labelFunc031D_01D8;
	message("Through darkness and despair~ The land was bare~ Looking for Thee, Mondain~ Alas, but in vain~ My soul and mine heart~ Pierced by Cupid's dart~ Will never heal~ Without Mondain's will~ Love is a desolate land~ Unless Thou, Mondain~ Takest me by the hand~ To thy youth fountain ~~Minax");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01D8:
	if (!(var0003 == 0x0014)) goto labelFunc031D_01ED;
	message("Notes to myself~~by Erstam~");
	say();
	message("Methinks I knowest now why the blink spell no longer works. These cursed teleportation storms disturb the ether in such a way that the spell often ceases to function. Other times, it is partially successful, as when I cast it on Vasel's predecessor. Nasty business, that.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01ED:
	if (!(var0003 == 0x0015)) goto labelFunc031D_01FE;
	message("After many weeks of fruitless study, I can only conclude that the blink spell simply no longer works correctly. Nine times out of ten, nothing at all happens, while the results of the tenth occurrence are best not pondered. The most obvious reason for these failures is this blasted weather we have been experiencing. Maybe when the storms lessen, I can divine the answer. Until then, I will continue in mine attempts to find the answer.~ Notes this day, by Gustacio.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01FE:
	if (!(var0003 == 0x001B)) goto labelFunc031D_0213;
	message("Most esteemed Ruggs,");
	say();
	message("  I cannot forget the day I first beheld thy face, for it is never far from my mind. As thou art never far from mine heart. I will admit that to thee, though it may shame me. I cannot promise when, or if, we can ever be together, dear Ruggs. For thou art in exile, and I am the only healer in Fawn. I cannot dwell outside of the gates with thee, no matter how much mine heart may wish it. But someday, if the heavens smile upon us, I shall be able to cast aside my doubts and come to thee as thy love. Until then, I remain ever thine.~~Delphynia");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0213:
	if (!(var0003 == 0x001F)) goto labelFunc031D_0228;
	message("The Magic Compass~~This is said to be the legendary artifact which guided Erstam the Mad during the voyage to Serpent Isle. ~ To use it, thou must set the Compass upon the ground, and then chant the mantra 'Yleg Ort.' ~According to legend, the compass will show thee the way to travel, but only if thou art worthy.~~As for myself, I have never been able to make the damn thing work. Hence, I am donating it to the Seminarium.~~Filbercio the MageLord");
	say();
	gflags[0x012A] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0228:
	if (!(var0003 == 0x0025)) goto labelFunc031D_0239;
	message("~~All is not as it seems...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0239:
	if (!(var0003 == 0x0026)) goto labelFunc031D_024A;
	message("   This shall be the last of my writings. The freakish storms have continued to worsen. The laborers have all fled in terror, despite mine offer of greater remuneration. It seems fate hath decreed my country estate shall never be completed...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_024A:
	if (!(var0003 == 0x002A)) goto labelFunc031D_025F;
	message("     I have been here for more days than I am able to remember, though I have not forgotten the day I entered this forsaken cave which has become my tomb. That was 2-29-0227. But my food was depleted long ago, and the rats are more interested in eating me than letting me eat them. My strength is gone, as is my will. If thou dost find this, please tell Mythra I love her.~~");
	say();
	message("     --Denyel");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_025F:
	if (!(var0003 == 0x002B)) goto labelFunc031D_0278;
	message("Welcome, travellers, and be at ease.~ This rest house is open to all who Walk in Beauty.~");
	say();
	message("Feel free to take whatever food thou mayest need.~");
	say();
	message("As a courtesy to other travellers, please leave the rest house in the manner that thou didst find it...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0278:
	if (!(var0003 == 0x002C)) goto labelFunc031D_0291;
	message("Welcome to the Broken Oar, the finest inn in the known world!~");
	say();
	message("While thou art staying at our fine inn, thou mayest like to try our fine food. Inquire downstairs with the bartender, Jendon.~");
	say();
	message("We hope that thou dost enjoy thy stay at our establishment...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0291:
	if (!(var0003 == 0x002D)) goto labelFunc031D_02A2;
	message("Dearest Devra,~~ I hate having to leave thee for even a moment, but my father is as unmovable as a mountain!~ The months that we shared have been unforgettable.~ I will miss thee so much! I will miss thy wondrous red hair, thy silken skin, and thy lovely voice.~ I will miss all of thee. Please write to me. As thou knowest, I shall be going back to our inn, the Sleeping Bull.~~ Love, Angus");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02A2:
	if (!(var0003 == 0x002E)) goto labelFunc031D_02B7;
	message("ERAX'S JOURNAL~~");
	say();
	message("I alone have managed to safely return to the surface. Mine arrogant curiosity was almost mine undoing. The ruined Ophidian structure in the caverns below the swamp is very dangerous. My companions fell to the blows of the undead. No monk should ever return there. I have taken the key that opens the gate to the area and hidden it in the hollow tree near the southeastern portion of the ruin\tin the swamp. I pray that no one shall ever find that key...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02B7:
	if (!(var0003 == 0x002F)) goto labelFunc031D_02D0;
	message("XENKA'S PROPHECIES~");
	say();
	message("Scattered Verses, Part I~~");
	say();
	message("Madness! Madness is all I can see! The world hath turned inside out. The stars shine blood red... Men are beasts... Beasts are men... Ashes... Ashes. The End is upon us all... Snakes leering in the void... Dancing a dance of death.~~ The vision is over. I am without Sight...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02D0:
	if (!(var0003 == 0x0030)) goto labelFunc031D_02F5;
	message("XENKA'S PROPHECIES~");
	say();
	message("Scattered Verses, Part II~~");
	say();
	message("I see the Hero From Another World ringing the bells!");
	say();
	message("I am not there. I am dead. Ring the bells. Oh, joy!");
	say();
	message("What sweet music the bells make");
	say();
	message("I am dreaming. I hear the bells and I wake...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02F5:
	if (!(var0003 == 0x0031)) goto labelFunc031D_031E;
	message("XENKA'S PROPHECIES~");
	say();
	message("Scattered Verses, Part III~~");
	say();
	message("I See the frozen waste...");
	say();
	message("The Hero From Another World is there...");
	say();
	message("I See men who are not men covered in fur...");
	say();
	message("I See the Hero From Another World strike...");
	say();
	message("No! The world is collapsing! I cannot breathe!");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_031E:
	if (!(var0003 == 0x0032)) goto labelFunc031D_0337;
	message("XENKA'S VISIONS~");
	say();
	message("Scattered Verses, Part IV~~");
	say();
	message("The Hero From Another World will meet the descendants of the Silver Captain under the\tsign of the Bull. The Hero From Another World will be betrayed by a follower of the Other...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0337:
	if (!(var0003 == 0x0033)) goto labelFunc031D_0350;
	message("HORTICULTURAL NOTES~~");
	say();
	message("The Mandrake Root, by Trexin the Gardener~");
	say();
	message("The mandrake root is a short-stemmed plant that hath a fleshy, often forked root, somewhat resembling a man. This tuber, though not particularly pleasant to gaze upon, doth have useful qualities. The root seems to add power to certain spells of the greater circles. The mandrake root, contrary to what my colleague Moxa thinks, can indeed be found on our lonely isle. The root can be found growing in the swamp that is located on the northern part of the island. Most peculiarly, the root doth seemingly appear at random times...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0350:
	if (!(var0003 == 0x0034)) goto labelFunc031D_0369;
	message("HORTICULTURAL NOTES~~");
	say();
	message("The Berry Bush, by Trexin the Gardener~");
	say();
	message("I have discovered a wonderful plant that I have named the Berry Bush.\tThe fruit of this plant hath a wonderfully bittersweet, tangy taste. Furthermore, the bush doth grow well in our intemperate clime and needs little maintenance to produce an abundant crop.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0369:
	if (!(var0003 == 0x0036)) goto labelFunc031D_0392;
	message("XENKA'S VISIONS~");
	say();
	message("Scattered Verses, Part V~~");
	say();
	message("In the City of Mages, on the Isle of Beyond,~");
	say();
	message("Doth the Hero walk~");
	say();
	message("Mages with two faces prance about~");
	say();
	message("To prove his worth, The Hero From Another World");
	say();
	message("Must survive the perils of Freedom...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0392:
	if (!(var0003 == 0x0039)) goto labelFunc031D_03A3;
	message("I returned home to the Bull as soon as I received Mother's letter. It was not easy to relinquish my command, but Mother needed me, and so here I am.~ I have examined the grounds and found nothing. Mother says she heard noises from the cellar the night Father disappeared. When I investigated, I found crates overturned, but nothing else. I feel so\tuseless! If only I had something, some shred of evidence indicating what became of Father...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03A3:
	if (!(var0003 == 0x003A)) goto labelFunc031D_03B4;
	message("   Welcome to the Sleeping Bull Inn! Our inn hath been owned by the same family for four generations. We have a long tradition of service. We will do our best to ensure that thy stay at the inn will be most enjoyable.~ If thou hast any questions, please inquire of Mistress Devra or Master Angus.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03B4:
	if (!(var0003 == 0x003B)) goto labelFunc031D_03CD;
	message("This day Silverpate came to see me. The black-harted demon came to glote, and to give me scroll and kwill.~");
	say();
	message("He said that I could rite whate'er I wanted, fer I would never see daylite agin. I fear he is rite.~ Silverpate beleves that I stole from him, the paranoid old coot! I ne'er woud beleve me mates when they spoke of the \"littel demons\" in the cap'in's pate, tellin him what to do.~ Corse, I beleved em rite enuf when ol' Pate tole me these things hisself!~ Alas, I lerned too late to prevent me imprisonment.~ I figure ol' Pate will ne'er read me words, and if he do, then so be it.~ Whomever ye be that reads me words, be warned aginst Cap'in Silverpate. He uses majic wardrobes to spy on his own mates! The littel swiches at the Bull don't work, the cap'in said, unless the \"Master Wardrobe\" is used. This \"Master Wardrobe\" be sichuated down in these here catacomes.~ I also herd the evil-harted bastard yammer bout sum Serpint Gate. Ol' Pate said the gate was hidden. It be rite hard to be thinkin strate, but I think the cap'n said something bout too torches markin the hidden entrans.");
	say();
	message("Maybe this Serpint Gate cood help thee. Corse, it be likely that no bloke will e'er read me scribling...~ Pate thinks everyone be after his trezhure. So distrustful be ol' Pate, he even spies on his own famly!~ Let it be nown that I, Bren, cheef bosun on the Black Gull, were a pirate who ne'er turned aginst one o' his own...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03CD:
	if (!(var0003 == 0x003C)) goto labelFunc031D_03E2;
	message("MAGIC SCROLLS -- A Primer~");
	say();
	message("   The process of inscribing scrolls with mystic runes is beyond the scope of this primer. Using these enchanted scrolls, however, is a trivial matter. To unleash the power of the spell, simply unroll the parchment. The Runes of Power, and the scroll itself, will be totally consumed by the energies that are released.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03E2:
	if (!(var0003 == 0x003D)) goto labelFunc031D_03F7;
	message("Beloved Shamino:~");
	say();
	message("   Right beloved Sir, I recommend me to thee, greeting thee well and sending thee my blessings. I have to confess and apologize to thee for I have\tlooted the King's private arms. I beg of thee not to condemn me too hastily for I committed that horrible action when the castle was under siege. Danger was everywhere and so were the goblins. Thou wert not here and I had to take action. We need thee at the castle, prithee, when art thou returning? Life without thee is an endless torment. The goblins seemed to be a deliverance more than a threat to me. I am right sorry for this and wish it hath been otherwise. I wait daily for thee to come hither.~~Faithfully, thy Beatrix");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03F7:
	if (!(var0003 == 0x003E)) goto labelFunc031D_0408;
	message("Come in and join the party...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0408:
	if (!(var0003 == 0x003F)) goto labelFunc031D_0421;
	message("   I know I did evil things whilst I was under the control of the Bane. In order to atone for the harm I have caused, I shall sacrifice myself to the Crematorium. If mine ashes can help restore the balance, then I might be partially redeemed for mine evil acts.~~");
	say();
	message("    Farewell,~");
	say();
	message("             Dupre");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0421:
	if (!(var0003 == 0x0040)) goto labelFunc031D_0442;
	message("Me Map, but I don't need to say that, because if it's anybody but me what's looking at this, I don't want to tell where me treasure is, so read no further, ye dog, lest I leave yer fate to the briny deep! This is dead-reckoning right, but I'm awfully drunk and mebbe I'm holdin' this thing upside-down.");
	say();
	message("98S,28W");
	say();
	message("33 Paces past the rock, excludin' that break I took fer drinkin'.");
	say();
	message("11 Paces east of the whatever that blasted thing is.");
	say();
	message("30 Paces, I think, because I was staggerin' about a bit and I stumbled and lost me count a couple o' times, past whatever me stinkin' map says is supposed to be there; I was sober when I drew that beauty. Unless this is me what's readin' this, I hope the treasure's already gone, ye thief!");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0442:
	if (!(var0003 == 0x0042)) goto labelFunc031D_0463;
	message("I have paid thee -- and paid thee well -- to fulfill the contract.");
	say();
	message("Only fools would pay a great sum for an easy task... And I am no fool.");
	say();
	message("Remember, I have chosen thee because thou art the best weapon available to me at the moment. Make no mistake, the Avatar is not an easy target and certainly the most challenging thou hast ever had.");
	say();
	message("Dispose of the Avatar quickly. Destroy this note. No evidence should be left behind thee.");
	say();
	message("X");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0463:
	if (!(var0003 == 0x0043)) goto labelFunc031D_047A;
	message("My dearest,~~ I beg thy forgiveness for my behavior last night. This difficulty with the Avatar hath disrupted my performance, but I assure thee that once we have taken care of ");
	message(var0001);
	message(", I will hold a private celebration thou shalt not soon forget...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_047A:
	if (!(var0003 == 0x0045)) goto labelFunc031D_04DF;
	message("Parting Verses: by Vasculio~~ As they lower me down,~ To this hole in the ground,~ I scream for help,~ But they can't hear a sound.~ I scratch on this lid,~ My fingers they bleed.~ They plant me deep,~ Like an evil seed.~ Now my bones decompose,~ My flesh doth rot,~ But soon I will rise,~ And torture the lot.");
	say();
	var0006 = UI_find_nearby(0xFE9C, 0x00F3, 0x0028, 0x0000);
	if (!var0006) goto labelFunc031D_04DC;
	if (!(!gflags[0x0248])) goto labelFunc031D_04DC;
	gflags[0x0248] = true;
	var0007 = UI_direction_from(0xFE9C, var0006);
	var0008 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, var0007, (byte)0x27, 0x0005, (byte)0x55, 0x0526]);
	UI_remove_item(item);
labelFunc031D_04DC:
	goto labelFunc031D_0A44;
labelFunc031D_04DF:
	if (!(var0003 == 0x0046)) goto labelFunc031D_04F0;
	message("Right Heartily and Beloved Father,~~ I recommend me to thee, letting thee know I am doing exceedingly well! Though I miss thee and my beloved sister, Alyssand, I am so excited. I have been learning so much magic, thou wouldst not believe thine eyes. I am good. Honest. I swear to thee, that's what the Mages here are saying. 'Tis fun, but frightening as well.~ I am a dedicated student, Father, thou canst be proud of me. And Alyssand, too. I miss thee so much. Thou shouldst visit. The Palace is a sight to see. Gorgeous! These Mages are incredible!~ Learning how to be a Mage is not easy, but I love it as much as I miss thee.~ Thou art on my mind everyday. I hope to see thee soon.~~ Eternal love,~~ Freli");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_04F0:
	if (!(var0003 == 0x0047)) goto labelFunc031D_0511;
	message("   To thee, fine warrior, who hast made it this far:");
	say();
	message("If thou seekest to be a Knight of Monitor, thou must be willing");
	say();
	message("to shed thy blood for the defense of others. To prove thy resolve,");
	say();
	message("take this claw and use it upon thy person. Let thy blood be thine oath.~~");
	say();
	message("   --Shmed, Master of Knight's Test");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0511:
	if (!(var0003 == 0x0048)) goto labelFunc031D_0536;
	message("   To thee, fine warrior, who hast made it this far:");
	say();
	message("If thou seekest to be a Knight of Monitor, thou must mingle thy");
	say();
	message("blood with the ashes of our ancient foe, Gurnordir the goblin king.");
	say();
	message("Thy blood pledges vengeance against our enemies, and will give thee");
	say();
	message("thy totem animal, the key to thy soul.~~");
	say();
	message("  --Shmed, Master of Knight's Test");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0536:
	if (!(var0003 == 0x0049)) goto labelFunc031D_0553;
	message("   I love thee, father. I hope thou dost kill more than thy share of");
	say();
	message("goblins. Come home soon.~~");
	say();
	message("     Cantra");
	say();
	gflags[0x00C6] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0553:
	if (!(var0003 == 0x004A)) goto labelFunc031D_0574;
	message("   Note to myself for further exploration of the North:");
	say();
	message("I seem to have lost the Serpent Tooth I took from the Mad Mage.");
	say();
	message("Need to check the area near the savages, as that was where I last");
	say();
	message("remember having it with me.~~");
	say();
	message("     Frigidazzi");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0574:
	if (!(var0003 == 0x0050)) goto labelFunc031D_05C1;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	message("Dearest Drogeni,~");
	say();
	message("   What follows is an excerpt from my translation of an ancient manuscript. The translation is crude since I do not as yet fully understand the Serpent Runes, but I think thou wilt find this very exciting.~ Until we meet again,~~-- Erstam, thy devoted servant~~");
	say();
	message("   I write this in great haste, for I can already hear the forces of Order breaching the keep walls. I know not how this missive will survive to reach the outside lands, or for that matter, future generations. Mine only hope is that this speedily-drafted work");
	say();
	message(" will offer record of our hallowed philosophy. For our culture to have any chance of enduring the ages, someone, somewhere must find this.~ Please, reader, I beseech thee, spread the word of our peoples. Release the spirit of our word and learn from the wisdom of the past.~~");
	say();
	message("   Balance -- The harmony between the Principles of Order and Chaos -- is the one pure axiom we hold true.  All three Principles are symbolized in our hieroglyphs: The Great Earth Serpent, keeper of Balance, lies on a vertical plane, around which the two opposing serpents of Chaos and Order wrap themselves.~~");
	say();
	message("   Chaos and Order each embrace three Forces. These six Forces, when combined, form the three Principles of Balance. The Forces of Chaos are Tolerance, Enthusiasm, and Emotion; the Forces of Order are Ethicality, Discipline, and Logic.~~");
	say();
	message("CHAOS~Tolerance is that which encourages the acceptance of all things. Enthusiasm is the energy that allows one to perform great tasks. Emotion is the ability to perceive those feelings that come from the heart, as opposed to coming from the mind.~~");
	say();
	message("ORDER~Ethicality is the belief that there is great value in abiding by rules of conduct. Discipline is the drive to complete a task and avoid the distractions that will prevent its completion. Logic permits clear, reasoned thought, free from any instinctual biases.~~");
	say();
	message("BALANCE~From the marriage between two Forces, one each from Chaos and Order, come the Principles.~ Tolerance and Ethicality combine to form Harmony, the ability to be at peace with the self, the individual, and the world.~ From the union of Enthusiasm and Discipline springs Dedication, that which permits one to surmount obstacles and lead others.~");
	say();
	message("And finally, Emotion tempered by Logic results in Rationality, the ability to comprehend life and understand the world around us.~~");
	say();
	message("   The Forces of Chaos and Order must ever remain in Balance, for imbalance leads to disaster. Witness the war-torn state of our world today! ~~As thou canst surely see, my world hath been torn asunder by disregard for Balance -- our dearest axiom! If thou dost thrive");
	say();
	message("in a time less violent, I can do no more than plead with thee to help restore Balance to the Serpent Isle! I must end this brief explication here, for I can hear mine attackers pounding upon the oaken door downstairs. I wish thee and thy world better fortune than mine own.~~ -- Ssithnos, the Great Hierophant");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05C1:
	if (!(var0003 == 0x0064)) goto labelFunc031D_05D2;
	message("My darling Rotoluncia,~~ I know thy feelings about my letters, but I cannot help myself -- I think of thee day and night! Thou art the light of my miserable existence. Thou art like the sun, blinding all who doth gaze upon thy beauty. Thy lips are more luscious than the sweetest fruit. Thy skin is smoother than the most glorious rose. Thou art the essence of womanhood; none can surpass thee!~ Please, I beg of thee, say that thou wilt be mine!~~ Anxiously awaiting thy reply,~~ Filbercio ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05D2:
	if (!(var0003 == 0x0065)) goto labelFunc031D_05E0;
	message("My darling Rotoluncia,~~ I know that thou dost love me as much as I love thee. Let us forget all of the intrigue that plagues this city and flee to the mainland! I can have built for us a modest love nest where we may spend the rest of our days in bliss!~ Thy servant,~~ Filbercio ");
	say();
labelFunc031D_05E0:
	if (!(var0003 == 0x0066)) goto labelFunc031D_05F1;
	message("My darling Rotoluncia,~~ I tried to sleep after our dalliance this night, yet I cannot. The feel of thy silken hair and the sweet taste of thy lips linger. Oh, my darling, I cannot wait until I see thee again. I feel that I shall go mad if I cannot make thee mine!~~ Thy lover,~~ Filbercio ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05F1:
	if (!(var0003 == 0x0067)) goto labelFunc031D_0602;
	message("Rotoluncia,~~ I saw thee staring at that pig Torrissio at the banquet last night and I know now that thine affections shown toward me were false. Thou art a cow and a shabby sorceress as well!~ Do not try to pretend otherwise, for I know the truth now. I want nothing more from thee ever again!~~ Filbercio ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0602:
	if (!(var0003 == 0x0078)) goto labelFunc031D_0621;
	message("Marsten, Lord of Monitor:~~ The destruction of thine enemies is certain. My brave Goblin warriors have already plundered the Fawn Tower, and the Wolves which guarded it.~ Next, we shall strike the Bull Tower, and the Bears which serve there. Hail to victory! Soon, the Wolves and Bears shall cease to trouble thee. Then Monitor and the Goblins shall live in peace, and thou shalt be King of the Monitorians.~~ Do not let this messenger fall into the hands of our enemies.~~ Pomdirgun,~Chieftain of the Goblin Horde");
	say();
	UI_set_item_flag(0xFFBB, 0x001D);
	gflags[0x0093] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0621:
	if (!(var0003 == 0x0079)) goto labelFunc031D_064E;
	message("   Honor be to thee, Pomdirgun, Chieftain of the Goblin Horde:~~ Letting thee know that all of our plans in these parts fare well. I have learned from the Wolves that they plan to launch a patrol in the early morning hours of the seventh day of the new moon.~ If thou dost ambush the patrol, then it shall be easy for thee to overrun Fawn Tower itself.~ The Wolves shall be critically weakened, and the City of Fawn shall quake in fear!~ But if thou canst, spare the life of the leader of the patrol. She is a favorite of my liege.~~ We beg of thee not to let this messenger fall into the hands of our enemies, the Wolves.~~ Spektor, writing on behalf of Lord Marsten");
	say();
	gflags[0x0093] = true;
	UI_set_item_flag(0xFFBB, 0x001D);
	gflags[0x0094] = true;
	UI_set_item_flag(0xFFB3, 0x001D);
	goto labelFunc031D_0A44;
labelFunc031D_064E:
	if (!(var0003 == 0x007A)) goto labelFunc031D_066D;
	message("   Honor be to thee, Pomdirgun, Chieftain of the Goblin Horde:~~ Letting thee know that all of our plans in these parts fare well. Having learned from our successful experience with Fawn Tower, we have decided to withdraw, on the fourth night of the coming moon, as many troops as possible from Bull Tower.~ The Bears shall be marching westward on the plains, and shall be easily slaughtered.~ Then thou canst take the Tower, and plunder the Inn of the Sleeping Bull.~~ We want to remind thee of the supreme importance not to let this messenger fall into the hands of our enemies, the Wolves and the Bears.~~ Marsten, King of Monitor");
	say();
	gflags[0x0093] = true;
	UI_set_item_flag(0xFFBB, 0x001D);
	goto labelFunc031D_0A44;
labelFunc031D_066D:
	if (!(var0003 == 0x007B)) goto labelFunc031D_0682;
	message("   Old man, if thou dost truly wish to survive Freedom, but dost feel that thou canst live to tell the tale of Lorthondo's final test, thou hast only to serve in my slave pit. Tend to my pets and I shall personally show thee to the door and to the blue skies of daylight and freedom. Guard my nightmare and care for him well.~ He is a treasure and a daemon in one. Take him through the teleporter once each day and let him feel the grass beneath his hooves.~ Take care, for one strike of his hoof could kill an old fool such as thou.~ Be thou sure to keep Sabrina from him. I fear that she doth frighten him. I find it strange that such a wild, untamed creature such as that should be frightened of her touch. Then again, mayhaps I can fathom why. ~");
	say();
	message("   Lastly, take great care of my small furry prize. Do not be fooled by its diminutive size, it hath taken the lives of many a foolhardy man who dared to approach thinking it might make a tasty morsel.~ Thou shouldst treat it with as much respect as thou wouldst bestow upon me. If thou dost not, either one of us could end thy miserable existence.~ In the supply room, thou wilt find a year's worth of carrots for Buggs. Feed him but one per day. Place the carrots upon his golden plate -- 'tis the only way that he will feed. He is of royal lineage -- a born predator. If thou dost not, thou mayest find that thou art his next meal.~ Serve me well, old man, and thou mayest live to see the outside of this prison some year...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0682:
	if (!(var0003 == 0x007F)) goto labelFunc031D_0697;
	message("To me fellow trappers:~~ Greetings to ye.~~ I will be heading north when ye be reading this message. Make sure ye guard the cave and protect our goods well. If I find out ye let some ne'er-do-well steal our goods, I'll personally skin every one of ye bastards, hang yer hide on me walls, and eat yer black hearts for supper!~ By the way, don't be lookin fer the wonderful glass sword that appeared after the last storm, for I took it with me. I be headin' back to the North.~ This fancy sword should be mighty handy for slaying some dragon or other fearsome beast...~ Slaughter a beast in mine honor.~~Hazard");
	say();
	gflags[0x028C] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0697:
	if (!(var0003 == 0x0082)) goto labelFunc031D_06AC;
	message("Virtues ----------------------------- ~ Tolerance, Enthusiasm, and Emotion Ethicality, Discipline, and Logic ~ ----------------------------- ~~");
	say();
	message("Anti-Virtues ----------------------------- ~ Anarchy, Wantonness, and Insanity Prejudice, Apathy, and Ruthlessness ~ ----------------------------- ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06AC:
	if (!(var0003 == 0x0087)) goto labelFunc031D_06C5;
	message("I, Purlonio, merchant of Moonshade, am about to tell my tale.~~ Back in the early days of the Sosarian colonization of Serpent Isle, I had accumulated -- I have to tell thee -- a massive fortune in the city. After a most unusual dream, I called upon an enchantress for help. She was expensive, but of good and right advice. Drogeni, the Wizard, warned me that I was about to lose all of my cherished wealth in the near future and that there was nothing she could do to prevent this from happening.~");
	say();
	message("I thought I could outsmart Fate... I took all of my possessions, all of my gold, in a ship to this cave in the far northern reaches for safe storage.~ I hired Drogeni to create a series of tunnels in the rear of the cave so that a magic map would be required and no one could survive without it.~ Thereupon, I had the wizard conjure an Ice Dragon to guard my riches. Once this was done, we sailed back to the southern plains where I rid myself of the enchantress so that no one would ever know the secret to my riches.~");
	say();
	message("Unfortunately, upon the death of the wizard, the magical map disintegrated. Fearing that the prophecy had come true, I went back to the cave and tried to find the route to my riches. To this day, I have not found my treasure.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06C5:
	if (!(var0003 == 0x008D)) goto labelFunc031D_06D6;
	message("   In my life as a criminal, as they call me, I have had many a task to overcome. None before was as hard as the ones I am about to describe. This is done so that thou mayest save thy time and thy life.~ Of all the traps I had to overcome, the most interesting ones were the spear traps.~ First of all, thou needest to enter the caretaker's room. After many an observation and many more days than thou wouldst think, I discovered the routine of the caretaker.~ He usually is on patrol during the whole afternoon. He makes his rounds at noon and midnight.~ In his storehouse, thou shouldst find barrels and chests. Rummaging through the barrels I found a hidden lever. That lever, I came to realize later, turns off the spear traps in the corridor.~ Make good use of that, my friend. Blessings upon thee.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06D6:
	if (!(var0003 == 0x0095)) goto labelFunc031D_06EB;
	message("To My Good Brethren and Comrades In Arms,~~");
	say();
	message("After many long, arduous and harrowing adventures I have collected this considerable treasure. While this fair measure of wealth would be enough to keep a man happy for the rest of his days, I cannot possess it without remembering my good fellow knights -- many to whom I owe my very life. It is to thee that I leave this bountiful reward. It is secured by the soundest means that I currently have at my disposal. To obtain it, one need only use THE KEY.~~ Ever-faithful,~~   Pendar-");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06EB:
	if (!(var0003 == 0x0096)) goto labelFunc031D_0704;
	message("Hark, adventurer, and read these words well.~~ Many know me as Gannt the Bard, singer of songs, and writer of fine poetry for all to enjoy. Though many know of me, most do not know of my life, or at least of how I came to this end. Read, and read well, dear adventurer.~ If thou hast any justice in thine heart, or any pity in thy soul, then thou wilt seek vengeance for mine untimely death. If thou, hearty adventurer, hast any sense of duty to avenge evils, then thou must seek out the craven and cowardly Captain Stokes of the rusty old bucket 'The Mustang' and exact just payment, for alas, since I am not of this world, I cannot.~~ One day as I was at the Inn of Sleeping Bull, plucking my lute, not bothering anyone, but practicing my trade, in walked the swine, Captain Stokes, billowing foul fog upon us with his ill-smelling fag.~");
	say();
	message("Seeing that no one in the fair establishment could stomach the pungent smell of his tobacco-like rot, I dared to ask him to put it out, for the sake of all our healths. He stared at me, then turned a blind eye. I went back to strumming my lute, 'til again the smell began to bring tears to mine eyes. Again I asked him, begged him to stop, but again he turned away.~ Finally, as gentle ladies began to leave for air, and good children began to cough and cry from the Captain's reeking root, I tried once more. This time, though, he answered with the blade of his dagger. He thrust well through my lute and into mine entrails, stuffing it deep into my belly.~");
	say();
	message("He grinned and twisted the blade, not once nor twice, but thrice! Being but a humble bard and quite mortal, I had little choice but to expire. I fell in a pool of mine own blood, mine hand strumming my last chord as I fell.~ I ask thee, I beg of thee to give me peace, and exact vengeance for my death. Before thee is the key to his rotten hovel which thou mayest find to the west of Fawn, above the forest of Knight's Test. Many ill-begotten instruments doth he hide in his house of ill-wares. Beware them! Please, noble adventurer, exact justice for my death, and exact the toll from that evil Captain Stokes.  Do this and let my spirit rest peacefully...~~Gannt...");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0704:
	if (!(var0003 == 0x00B5)) goto labelFunc031D_0715;
	message("The Art of Winemaking~~ The art of winemaking is not a difficult trade; indeed, making fine wine is the simplest of tasks. There are those laymen, however, who doth think making wine is some great secret. Nothing could be further from the truth!~ Sorcery hath made the process of making wine very easy, but sorcery cannot make the wine taste good. To make great wine, thou needest but one commodity -- great grapes! That is the secret to making a truly great vintage, one that shall be remembered by all who partake. ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0715:
	if (!(var0003 == 0x00BC)) goto labelFunc031D_073A;
	var0004 = Func0953();
	message("Dear ");
	message(var0004);
	message(", ~All of the portents indicate that this Quest to Find Batlin shall severely tax thine abilities. Consequently, I have ordered the armouries of the kingdom opened in order to equip thee and thy good companions. ~~Thou shalt be given these things -- ~~The Glass Sword, which can slay any foe (but which is destroyed in the act of such slaughter). ~~The MageBane, a fabled weapon which thou didst recover in thy previous encounter with Batlin. It steals the magic from sorcerers who oppose thee. ~~The Daemon Sword which thou didst obtain at the Forge of Virtue. It is truly a terrible weapon, but thou wilt surely need it. Beware the Daemon within!");
	say();
	message("Rudyom's Wand, which doth make blackrock to explode. ~~The strange Serpent of Blackrock, which thou didst obtain from netherworlds during thy most recent adventure. Its powers are unknown, but those who gave it thee promised that it would be useful to thee soon. ~~A spellbook, to which hath been added every spell that could be speedily obtained. ~~For thee to wear, a set of armour of the best enchantments: breastplate, helm, and gauntlets. ~~For Iolo the Bard: a crossbow, which he doth wield so well. ~~For noble Dupre: a Magic Shield which I have prepared for him. ~~For Shamino the Ranger: a Magic Bow, and a goodly supply of Burst Arrows, which he shall no doubt use to good purpose. ~~As well as such common items as torches, a pair of swamp boots, a good dagger, and much food for an extended journey.");
	say();
	message("~~Travel in safety, and may the villain Batlin soon fall into thine hands! Also, I hope that thou shalt soon find Iolo's lost wife, the goodwoman Gwenno. ~~~-- Lord British, thy liege.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_073A:
	if (!(var0003 == 0x00BD)) goto labelFunc031D_0941;
	message("The list of items which we found ourselves with after the storm:~~");
	say();
	message("Prepared by Shamino.");
	say();
	if (!gflags[0x00B7]) goto labelFunc031D_0756;
	message("With additional notes by Dupre.");
	say();
labelFunc031D_0756:
	if (!gflags[0x0078]) goto labelFunc031D_0760;
	message("And further comments by Iolo, since being freed from that vile Monitorian prison cell!");
	say();
labelFunc031D_0760:
	message("~~");
	say();
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc031D_0773;
	message("A pinecone (or, at least, it appears to be one).");
	say();
labelFunc031D_0773:
	if (!gflags[0x028C]) goto labelFunc031D_077D;
	message("A pinecone from the northern woods.");
	say();
labelFunc031D_077D:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc031D_078C;
	message("A fine pair of sheer stockings, probably women's attire.");
	say();
labelFunc031D_078C:
	if (!gflags[0x028D]) goto labelFunc031D_0796;
	message("A pair of moonsilk stockings, such as the enchantress Columna doth wear.");
	say();
labelFunc031D_0796:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc031D_07A5;
	message("Some sort of vase, with soot inside.");
	say();
labelFunc031D_07A5:
	if (!gflags[0x028E]) goto labelFunc031D_07AF;
	message("A funerary urn containing the Ashes of the Dead, taken from the Caves of Monitor.");
	say();
labelFunc031D_07AF:
	if (!(gflags[0x027D] && (!gflags[0x0110]))) goto labelFunc031D_07BE;
	message("A strange apparatus of glass and copper.");
	say();
labelFunc031D_07BE:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc031D_07CD;
	message("A specimen of laboratory apparatus from a mage's laboratory.");
	say();
labelFunc031D_07CD:
	if (!(gflags[0x0110] && gflags[0x028F])) goto labelFunc031D_07DB;
	message("The missing apparatus from the laboratory of Erstam, the so-called Mad Mage.");
	say();
labelFunc031D_07DB:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc031D_07EA;
	message("A rock.");
	say();
labelFunc031D_07EA:
	if (!gflags[0x0290]) goto labelFunc031D_07F4;
	message("A pumice rock from the fiery depths of some dungeon.");
	say();
labelFunc031D_07F4:
	if (!(gflags[0x027F] && (!gflags[0x014C]))) goto labelFunc031D_0803;
	message("A finely crafted ring, of silver, of a size to fit a small woman or a child.");
	say();
labelFunc031D_0803:
	if (!(gflags[0x014C] && (!gflags[0x0291]))) goto labelFunc031D_0812;
	message("A finely crafted silver ring, probably the lost engagement ring of a lass named Alyssand.");
	say();
labelFunc031D_0812:
	if (!gflags[0x0291]) goto labelFunc031D_081C;
	message("The engagement ring belonging to Alyssand of Fawn.");
	say();
labelFunc031D_081C:
	if (!(gflags[0x0280] && (!gflags[0x02A0]))) goto labelFunc031D_082B;
	message("A ridiculous fur cap.");
	say();
labelFunc031D_082B:
	if (!(gflags[0x02A0] && (!gflags[0x0292]))) goto labelFunc031D_083A;
	message("An expensive fur cap, which the MageLord of Moonshade obtained for one of his many lovers.");
	say();
labelFunc031D_083A:
	if (!gflags[0x0292]) goto labelFunc031D_0844;
	message("The elegant fur cap which Filbercio the MageLord purchased for his favorite, the sorceress Frigidazzi.");
	say();
labelFunc031D_0844:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc031D_0853;
	message("Some very old and worn slippers, such as might be worn in the privacy of one's home.");
	say();
labelFunc031D_0853:
	if (!gflags[0x0293]) goto labelFunc031D_085D;
	message("The well-worn slippers belonging to Devra, the mistress of the Inn of the Sleeping Bull.");
	say();
labelFunc031D_085D:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc031D_086C;
	message("An enameled breastplate, suitable for ceremonial occasions.");
	say();
labelFunc031D_086C:
	if (!gflags[0x0294]) goto labelFunc031D_0876;
	message("The ceremonial breastplate of the Priestess of Beauty, who is Kylista of Fawn. A very attractive lady, I should add.");
	say();
labelFunc031D_0876:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc031D_0885;
	message("A strange blue egg.");
	say();
labelFunc031D_0885:
	if (!gflags[0x0295]) goto labelFunc031D_088F;
	message("A penguin egg, such as may be found in the ice fields of the distant north.");
	say();
labelFunc031D_088F:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc031D_089E;
	message("A crude brush.");
	say();
labelFunc031D_089E:
	if (!gflags[0x0296]) goto labelFunc031D_08A8;
	message("A grisly brush made from the bones of some poor victim of the Goblins. How foul!");
	say();
labelFunc031D_08A8:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc031D_08B7;
	message("A bottle of ice wine -- whatever that is!");
	say();
labelFunc031D_08B7:
	if (!gflags[0x0297]) goto labelFunc031D_08C1;
	message("A bottle of that excellent vintage of wine sold by the Rangers of Moonshade. Why, I should sample some now...");
	say();
labelFunc031D_08C1:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc031D_08D0;
	message("Strange baubles -- silver disks with jewels in the center.");
	say();
labelFunc031D_08D0:
	if (!gflags[0x0299]) goto labelFunc031D_08DA;
	message("Jeweled coins from the City of Beauty, Fawn.");
	say();
labelFunc031D_08DA:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc031D_08E9;
	message("A large skull, no doubt belonging to some large and dead animal.");
	say();
labelFunc031D_08E9:
	if (!gflags[0x029A]) goto labelFunc031D_08F3;
	message("The skull of a great mountain bear.");
	say();
labelFunc031D_08F3:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc031D_0902;
	message("A bloody hand, severed from its corpse. It shows no sign of decay, yet...");
	say();
labelFunc031D_0902:
	if (!gflags[0x029B]) goto labelFunc031D_090C;
	message("The severed hand from one of the Mad Mage's experiments. It is not dead, yet not living -- it doth not decay.");
	say();
labelFunc031D_090C:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc031D_091B;
	message("An inexpensive shield, sturdy and suitable for battle.");
	say();
labelFunc031D_091B:
	if (!gflags[0x029C]) goto labelFunc031D_0925;
	message("One of the common shields used by the Pikemen of Monitor.");
	say();
labelFunc031D_0925:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc031D_0934;
	message("A red hunk of stone.");
	say();
labelFunc031D_0934:
	if (!gflags[0x029D]) goto labelFunc031D_093E;
	message("The dangerous mineral known as Stoneheart, which is used to produce the illegal reagent Bloodspawn.");
	say();
labelFunc031D_093E:
	goto labelFunc031D_0A44;
labelFunc031D_0941:
	if (!(var0003 == 0x00BE)) goto labelFunc031D_0952;
	message(" Inventory swap list as updated by Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0952:
	if (!(var0003 == 0x00BF)) goto labelFunc031D_0963;
	message("Inventory swap list as updated by Dupre");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0963:
	if (!(var0003 == 0x00C9)) goto labelFunc031D_0974;
	message("This certificate entitles the bearer to commit thievery up to a maximum of one hour.~~Shamino the Anarch.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0974:
	if (!(var0003 == 0x00CA)) goto labelFunc031D_0985;
	message("This is an invitation for thee and thy friends to dine at the MageLord's Palace.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0985:
	if (!(var0003 == 0x00CB)) goto labelFunc031D_0996;
	message("Dearest Avatar,~~ I would like to congratulate thee from the bottom of mine heart, on obtaining thy spellbook. That was not an easy task. Thou didst accomplish it most admirably.~ Also, I have been told that thou art asking questions about me. I think I would be the best person from whom to obtain the ultimate answers to thy questions. That is, the ones concerning myself.~ For all those reasons and so many more, I would like for thee to come to my manor. ~~Frigidazzi.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0996:
	if (!(var0003 == 0x00CC)) goto labelFunc031D_09A7;
	message("Dearest Avatar,~~ ~Love and Honor be to thee. Letting thee know that I cannot wait to see thee again. I cannot think of time far from thy strong person and handsome body. Thy broad shoulders and great arms are such an open invitation for a woman like me. Thine eyes, Avatar, so piercing yet so full of love. I could feel that love during thy last visit.~ I beg of thee, come visit me tonight. Thou dost remember where my manor is, dost thou not? I have a very rare spell (a true tongue-twister) I could teach thee and thou wouldst be the only one enjoying that treasured spell of mine. Once more, I beg of thee, do come tonight and do come alone.~~ Thy love,      ~~Frigidazzi.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09A7:
	if (!(var0003 == 0x00CD)) goto labelFunc031D_09B8;
	message("Dearest Avatar,~~ A thousand apologies is what I present thee with. I am the one who caused thee to be arrested and I cannot forgive myself.~ Thou hauntest my dreams. Memories of thee flash in front of mine eyes and the only way I can solve this nightmare is by presenting thee with a very special gift.~ I beg of thee to accept these Serpent Earrings, a token of mine affection for thee, Avatar. ~~Frigidazzi.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09B8:
	if (!(var0003 == 0x00CE)) goto labelFunc031D_09C9;
	message("   Fedabiblio, this is a message to let thee know that all is not well.~ I desperately need thine help. I beg of thee to answer my call.~ Thou must needs use the Crystal Ball.~~Gustacio.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09C9:
	if (!(var0003 == 0x00CF)) goto labelFunc031D_09DA;
	message("To the right good Avatar,~~ Thou must not think thy quest is done. For I offer ye a great challenge. To ye I leave my treasure -- if thou canst find it.~ Within this booty lies a Serpent Crown, waiting for ye to discover its hiding place.~~Captain Hawk.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09DA:
	if (!(var0003 == 0x00D0)) goto labelFunc031D_09EB;
	message("Avatar,~~ I have in my possession something extremely valuable which would be even more vital to thee. Thou couldst make good use of it, believe me.~ If thou art interested (and thou shouldst be), come to the cabin in the forest.~~Stefano.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09EB:
	if (!(var0003 == 0x00D1)) goto labelFunc031D_09FC;
	message("From Flindo~~ To Torrissio:~~ Dearest and most Powerful Mage,~~ I recommend me to thee as well as the bearer of this message.~ This letter of introduction entitles the bearer to a chat with thee. Trust thy righteous friend, Torrissio, the bearer is worth thy time.~ I thank thee for thine understanding. Treat the bearer the way thou wouldst treat me.~~ With a right good will, sincerely thy,~~Flindo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09FC:
	if (!(var0003 == 0x00D2)) goto labelFunc031D_0A0D;
	message("To Melino and Columna:~~ Dearest and most Powerful Mages,~~ I recommend me to thee as well as the bearer of this message. This letter of introduction entitles the bearer to a chat with you. Trust thy righteous friend, the bearer is worth your time.~ I thank you for your understanding. Treat the bearer the way you would treat me.~~ With a right good will, faithfully,~~Flindo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A0D:
	if (!(var0003 == 0x00D3)) goto labelFunc031D_0A1E;
	message("Dearest Avatar,~~ Love and Honor be to thee. Letting thee know that I cannot wait to see thee again. I cannot think of time far from thy strong and good-hearted person.~ Thine eyes, Avatar, so piercing yet so full of love. I could feel that love during thy last visit. I beg of thee, come visit me tonight.~ I have a very rare spell I could teach thee and thou wouldst be the only one learning it.~ Once more, I beg of thee, do come tonight and do come alone.~~ Sincerely thy,\t~~Frigidazzi.");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A1E:
	if (!(var0003 == 0x00D4)) goto labelFunc031D_0A2F;
	message("   I have made the most wonderful discovery about the Comb that I took from that empty-headed ruler of Fawn! No longer shall I be forced to content myself with the bumbling attentions of Melino, my pitiful excuse for a husband!~ For upon using the Comb on myself, I have become beautiful and desirable! No one will ever guess now that Mosh and I are twins! Now I may use my wits for better things... like the Adept Torrissio!~~Columna");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A2F:
	if (!(var0003 == 0x00D5)) goto labelFunc031D_0A40;
	message("Know, adventurer, that to proceed onward thou must pass three puzzles. At the first test, throw two down. At the second test: throw three down to get eight. At the third test: throw four down to get twelve.\tIf the levers are not in the correct position when the button is depressed, thou wilt surely be destroyed.~ Aram-Dol ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A40:
	message("     QA, report this scroll.");
	say();
labelFunc031D_0A44:
	return;
}


