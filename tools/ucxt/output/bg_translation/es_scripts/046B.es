#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);

void Func046B object#(0x46B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc046B_0009;
	abort;
labelFunc046B_0009:
	UI_show_npc_face(0xFF95, 0x0000);
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = Func0909();
	if (!(!gflags[0x02CF])) goto labelFunc046B_0037;
	message("You see a large cyclops. It looks at you and blinks its eye in irritation.");
	say();
	gflags[0x02CF] = true;
	goto labelFunc046B_003B;
labelFunc046B_0037:
	message("\"What dost thou want?\" says Iskander.");
	say();
labelFunc046B_003B:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02DB]) goto labelFunc046B_0058;
	UI_add_answer("Eiko and Amanda");
labelFunc046B_0058:
	converse attend labelFunc046B_02B3;
	case "name" attend labelFunc046B_006E:
	message("\"I am of the clan Ironheart, the eleventh son of Valador. They call me Iskander.\"");
	say();
	UI_remove_answer("name");
labelFunc046B_006E:
	case "job" attend labelFunc046B_0087:
	message("\"My cyclopean people say I am a hero. Many of you humans say I am a monster. No doubt, the truth is somewhere in between.\"");
	say();
	UI_add_answer(["hero", "monster"]);
labelFunc046B_0087:
	case "hero" attend labelFunc046B_00AA:
	message("\"One hundred and eighty-nine years ago I slew the seven Gazer Princes when they used their magic to steal the eye from the leader of our tribe, but such things are now ancient history and are no longer of any consequence.\"");
	say();
	UI_remove_answer("hero");
	UI_add_answer(["tribe", "eye", "ancient history"]);
labelFunc046B_00AA:
	case "monster" attend labelFunc046B_00C4:
	message("\"On numerous occasions I have caused the unpleasant end of human interlopers who mistakenly believed our race was fit for nothing save to be plundered. But I have no quarrel with thee.\" He pauses to scrutinize you. \"For the moment.\"");
	say();
	UI_remove_answer("monster");
	UI_add_answer("thee");
labelFunc046B_00C4:
	case "thee" attend labelFunc046B_0110:
	message("\"Thou dost know my name, but I still do not know the name of thee. I like to know to whom I am speaking. What is thy name?\"");
	say();
	var0003 = Func090B([var0001, var0000]);
	if (!(var0003 == var0001)) goto labelFunc046B_00F1;
	message("\"I have heard of thee, Avatar. Thou hast come into conflict against our kind before, I know. But I have also heard the tales of thine heroic and spiritual quests and I believe thee to be a just and noble man. Thou mayest call me friend.\"");
	say();
	gflags[0x02D6] = true;
labelFunc046B_00F1:
	if (!(var0003 == var0000)) goto labelFunc046B_0109;
	message("\"A pleasure to meet thee, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x02D5] = true;
labelFunc046B_0109:
	UI_remove_answer("thee");
labelFunc046B_0110:
	case "tribe" attend labelFunc046B_012A:
	message("\"Those of my tribe are a quiet people. They farm the rocky soil, but are also very good tool makers. I was sent to find them a new homeland.\"");
	say();
	UI_remove_answer("tribe");
	UI_add_answer("homeland");
labelFunc046B_012A:
	case "eye" attend labelFunc046B_013D:
	message("\"The eye of a cyclops is considered quite a delicacy to some of the less genteel races of Britannia. Twice have foul creatures tried to take mine, and twice have I dined on their hearts.\"");
	say();
	UI_remove_answer("eye");
labelFunc046B_013D:
	case "ancient history" attend labelFunc046B_0157:
	message("\"Then they called me 'Wonder Boy'. For nearly a hundred years that was the nickname by which I was known. I was most grateful when they stopped doing that!\"");
	say();
	UI_remove_answer("ancient history");
	UI_add_answer("Wonder Boy");
labelFunc046B_0157:
	case "Wonder Boy" attend labelFunc046B_016A:
	message("Iskander squints his eye at you. \"Do not start that again!\"");
	say();
	UI_remove_answer("Wonder Boy");
labelFunc046B_016A:
	case "homeland" attend labelFunc046B_018A:
	message("\"My village lies a great many days' journey away. The people there desire a place where they can live in peace with their surroundings. I have not found such a place yet, but I will search everywhere until I do.\"");
	say();
	UI_remove_answer("homeland");
	UI_add_answer(["peace", "everywhere"]);
labelFunc046B_018A:
	case "peace" attend labelFunc046B_019D:
	message("\"While I am two hundred and six, not long in years for one of my race, I already have the heart of an old man. A hero's adventures have no more attraction for me. I long to settle down with my people and spend my days tending the fields or in my workshop building things.\"");
	say();
	UI_remove_answer("peace");
labelFunc046B_019D:
	case "everywhere" attend labelFunc046B_01BD:
	message("\"My searches have brought me to this dreadful place. I incorrectly surmised that since magic does not work it would be relatively safe. It is here that I have been perplexed by a terrible riddle.\"");
	say();
	UI_remove_answer("everywhere");
	UI_add_answer(["magic", "riddle"]);
labelFunc046B_01BD:
	case "riddle" attend labelFunc046B_01DD:
	message("\"Standing at the doorway of one room in this place, I saw an enormous image of a tetrahedron. As I tried to near it a wave of amnesia passed over me. Once more I was standing in the doorway. I could remember nothing more.\"");
	say();
	UI_remove_answer("riddle");
	UI_add_answer(["tetrahedron", "amnesia"]);
labelFunc046B_01DD:
	case "tetrahedron" attend labelFunc046B_01F0:
	message("\"I believe that is word you humans use to describe a polyhedron with four faces.\"");
	say();
	UI_remove_answer("tetrahedron");
labelFunc046B_01F0:
	case "amnesia" attend labelFunc046B_020A:
	message("\"This same wave of amnesia struck me every time I tried to approach the tetrahedron. I do not know what sort of foul magic this is.\"");
	say();
	UI_remove_answer("amnesia");
	UI_add_answer("foul magic");
labelFunc046B_020A:
	case "foul magic" attend labelFunc046B_023A:
	if (!gflags[0x0003]) goto labelFunc046B_021F;
	message("\"Now that thou hast destroyed the mysterious tetrahedron I will complete mine exploration of this place. I have a feeling that the homeland I seek is very far away but one never knows where the next clue will be that shall lead me to it.\"");
	say();
	goto labelFunc046B_0233;
labelFunc046B_021F:
	if (!gflags[0x02D6]) goto labelFunc046B_0229;
	message("\"Perhaps thou shalt be able to solve this mystery. I have been unable to as of yet. But I shall remain here until its secret is revealed.\"");
	say();
labelFunc046B_0229:
	if (!gflags[0x02D5]) goto labelFunc046B_0233;
	message("\"I warn thee that this place is not safe. It holds unknown perils. Perhaps thou wouldst do better to leave this place.\"");
	say();
labelFunc046B_0233:
	UI_remove_answer("foul magic");
labelFunc046B_023A:
	case "magic" attend labelFunc046B_025B:
	if (!(!gflags[0x0003])) goto labelFunc046B_0250;
	message("\"Surely, thou dost know that magic no longer functions as it once did. There are those who say that the age of magic is over. If that is so, then I fear that there may be no place left in this world for my people.\"");
	say();
	goto labelFunc046B_0254;
labelFunc046B_0250:
	message("\"Of course, now that thou hast destroyed the tetrahedron all magic has been restored. I congratulate thee for thine heroic deed!\"");
	say();
labelFunc046B_0254:
	UI_remove_answer("magic");
labelFunc046B_025B:
	case "Eiko and Amanda" attend labelFunc046B_027B:
	message("\"Yes, I have heard those names before. Those are the names of two warriors who have been after me for revenge. They say I killed their father and I must admit to thee that it is true. I did kill their father.\"");
	say();
	UI_remove_answer("Eiko and Amanda");
	UI_add_answer(["revenge", "killed their father"]);
labelFunc046B_027B:
	case "revenge" attend labelFunc046B_028E:
	message("\"I know that Eiko and Amanda have been after me for some time looking for vengeance. I say let them come. I will not stand still for them nor shall I run from them. When they find me they are welcome to try and take their justice from me. If they win then it was meant to be. If they do not I will have no regrets.\"");
	say();
	UI_remove_answer("revenge");
labelFunc046B_028E:
	case "killed their father" attend labelFunc046B_02A5:
	message("\"Their father's name was Kalideth. He suffered from the mage madness. His attack on me was unprovoked. For some reason he blamed the failure of magic upon my people. His own magics were still quite potent and I barely survived the encounter. I killed Kalideth in self-defense, but I did not want to kill him. I wish there to still be some magic left in this world and I mourned his passing as much as anyone.\"");
	say();
	var0004 = true;
	UI_remove_answer("killed their father");
labelFunc046B_02A5:
	case "bye" attend labelFunc046B_02B0:
	goto labelFunc046B_02B3;
labelFunc046B_02B0:
	goto labelFunc046B_0058;
labelFunc046B_02B3:
	endconv;
	if (!gflags[0x02D6]) goto labelFunc046B_02BF;
	message("\"Farewell, Avatar.\"*");
	say();
	abort;
labelFunc046B_02BF:
	if (!gflags[0x02D5]) goto labelFunc046B_02D2;
	message("\"Farewell, ");
	message(var0000);
	message(".\"*");
	say();
	goto labelFunc046B_02D6;
labelFunc046B_02D2:
	message("\"Farewell.\"*");
	say();
labelFunc046B_02D6:
	return;
}


