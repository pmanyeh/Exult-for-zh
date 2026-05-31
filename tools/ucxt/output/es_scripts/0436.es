#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0863 0x863 ();
extern void Func092E 0x92E (var var0000);

void Func0436 object#(0x436) ()
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

	if (!(event == 0x0001)) goto labelFunc0436_0289;
	UI_show_npc_face(0xFFCA, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	if (!(var0002 == 0x0007)) goto labelFunc0436_00C2;
	var0004 = Func08F7(0xFFD9);
	var0005 = Func08F7(0xFFD8);
	if (!(var0004 && var0005)) goto labelFunc0436_00BD;
	message("Coop is onstage with The Avatars. He sees you and says, \"Uhm, there is someone special listening tonight, and this next tune is dedicated to them.\"");
	say();
	message("He signals to his partners and they begin to play. He sings the following lyrics:");
	say();
	message("\"Across the country we do fly -- ~Best to heed our battle cry!");
	say();
	message("\"We fight for virtues, far and wide, ~And we cause the damsel's sigh.\"");
	say();
	message("Then Neno and Judith join in on the chorus:");
	say();
	message("\"Oh, Avatars are we ~And virtuous we doth be!");
	say();
	message("\"Beware ye ogre and ye beast ~Lest thou be served at our next feast!");
	say();
	message("\"We rescue damsels, oh so fair, ~And battle pirates on a dare!");
	say();
	message("\"No evil liche doth daunt or sway! ~Against them all we win the day!");
	say();
	message("\"We are the Av-atars! ~We are the Av-atars! ~We are the Aaaa-Vaaa-Taaars!\"");
	say();
	message("The applause is tumultuous.*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Hmmm. They must have seen thee coming, ");
	message(var0001);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	abort;
labelFunc0436_00BA:
	goto labelFunc0436_00C2;
labelFunc0436_00BD:
	message("\"Must not stop to speak now! I am late for a performance of The Avatars! Come and hear us play at The Blue Boar!\"*");
	say();
	abort;
labelFunc0436_00C2:
	UI_add_answer(["name", "job", "bye"]);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00E8;
	UI_add_answer("Iolo");
labelFunc0436_00E8:
	if (!(!gflags[0x00B7])) goto labelFunc0436_0141;
	message("You see a young, wiry teen.");
	say();
	if (!var0006) goto labelFunc0436_013A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Hello, lad! This is ");
	message(var0000);
	message(", the Avatar! This is my young apprentice, Coop. How go things, Coop?\"*");
	say();
	UI_show_npc_face(0xFFCA, 0x0000);
	message("\"Not too badly, milord. I sold a triple crossbow this morning.\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Lovely! Lovely! Keep that gold coming in, that's what I always say!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_013A:
	gflags[0x00B7] = true;
	goto labelFunc0436_0145;
labelFunc0436_0141:
	message("\"Hello!\" Coop says.");
	say();
labelFunc0436_0145:
	converse attend labelFunc0436_0284;
	case "name" attend labelFunc0436_015B:
	message("\"My name is Coop.\"");
	say();
	UI_remove_answer("name");
labelFunc0436_015B:
	case "job" attend labelFunc0436_0196:
	message("\"I am the manager of Iolo's Bows! Master Iolo has entrusted me with this responsibility!");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0436_0185;
	message("\"If there is anything thou dost want in the way of bows and arrows, please say so!\"");
	say();
	UI_add_answer(["bows and arrows", "buy"]);
	goto labelFunc0436_0189;
labelFunc0436_0185:
	message("\"Thou must come by the shoppe when it is open!\"");
	say();
labelFunc0436_0189:
	UI_add_answer(["Iolo's Bows", "responsibility"]);
labelFunc0436_0196:
	case "Iolo's Bows" attend labelFunc0436_01A9:
	message("\"Iolo opened this shoppe many, many years ago. He opened Iolo's South in Serpent's Hold more recently. He is becoming quite an entrepreneur!\"");
	say();
	UI_remove_answer("Iolo's Bows");
labelFunc0436_01A9:
	case "responsibility" attend labelFunc0436_01F5:
	message("\"I sell many goods but I also plan to perpetuate the good name of Iolo by becoming a master archer! Iolo has taught me well!\"*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_01E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Yes, the lad is good! He was good before I taught him the first lesson.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_01E3:
	message("\"What I would not give to join thy group and go adventuring! But, then there would be no one to run the shoppe. So I cannot go. But someday... Anyway, I please myself in the evenings by singing with a musical group.\"");
	say();
	UI_remove_answer("responsibility");
	UI_add_answer("singing");
labelFunc0436_01F5:
	case "Iolo" attend labelFunc0436_022B:
	message("\"Hello, boss!\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Greetings, lad. Thou art looking well.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	message("\"The same to thee, milord!\"*");
	say();
	UI_remove_answer("Iolo");
labelFunc0436_022B:
	case "singing" attend labelFunc0436_0245:
	message("\"My group is called... well, it is called 'The Avatars'. I hope that does not offend thee.\"");
	say();
	UI_remove_answer("singing");
	UI_add_answer("The Avatars");
labelFunc0436_0245:
	case "The Avatars" attend labelFunc0436_0258:
	message("\"The band is just me and two musicians from The Music Hall. We play at the Blue Boar every night. I sing and write lyrics. The other two play the instruments. Please come to hear us!\"");
	say();
	UI_remove_answer("The Avatars");
labelFunc0436_0258:
	case "bows and arrows" attend labelFunc0436_026B:
	message("\"We sell all kinds of bows, along with arrows and bolts. If thou dost wish to buy something, please say so!\"");
	say();
	UI_remove_answer("bows and arrows");
labelFunc0436_026B:
	case "buy" attend labelFunc0436_0276:
	Func0863();
labelFunc0436_0276:
	case "bye" attend labelFunc0436_0281:
	goto labelFunc0436_0284;
labelFunc0436_0281:
	goto labelFunc0436_0145;
labelFunc0436_0284:
	endconv;
	message("\"Goodbye!\"*");
	say();
labelFunc0436_0289:
	if (!(event == 0x0000)) goto labelFunc0436_0310;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0436_030A;
	if (!(var0007 == 0x0001)) goto labelFunc0436_02CD;
	var0008 = "@Arrows? Bows?@";
labelFunc0436_02CD:
	if (!(var0007 == 0x0002)) goto labelFunc0436_02DD;
	var0008 = "@Iolo's is open!@";
labelFunc0436_02DD:
	if (!(var0007 == 0x0003)) goto labelFunc0436_02ED;
	var0008 = "@Bolts? Arrows?@";
labelFunc0436_02ED:
	if (!(var0007 == 0x0004)) goto labelFunc0436_02FD;
	var0008 = "@Archery equipment!@";
labelFunc0436_02FD:
	UI_item_say(0xFFCA, var0008);
	goto labelFunc0436_0310;
labelFunc0436_030A:
	Func092E(0xFFCA);
labelFunc0436_0310:
	return;
}


