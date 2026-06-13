#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08C8 0x8C8 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0473 object#(0x473) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0473_0202;
	UI_show_npc_face(0xFF8D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF8D));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x014D])) goto labelFunc0473_0056;
	message("The woman you see in front of you has a concerned expression on her face, as if her thoughts were far away.");
	say();
	gflags[0x014D] = true;
	goto labelFunc0473_006D;
labelFunc0473_0056:
	message("\"Hail, ");
	message(var0000);
	message(". Might I assist thee?\" asks Penni.");
	say();
	if (!gflags[0x01DE]) goto labelFunc0473_006D;
	UI_add_answer("Addom");
labelFunc0473_006D:
	converse attend labelFunc0473_01F7;
	case "name" attend labelFunc0473_009B:
	message("\"My name is Penni, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
	if (!(gflags[0x01DE] && (!var0003))) goto labelFunc0473_009B;
	UI_add_answer("Addom");
labelFunc0473_009B:
	case "job" attend labelFunc0473_00D2:
	message("\"I have no occupation, ");
	message(var0001);
	message(". At least not one I would call work. I do, however, teach skills in close quarter combat.~~She thinks for a moment. \"I suppose a better way to answer thy question would have been to say `Yes, I do have a job.' I'm a trainer. But,\" she smiles, \"I enjoy it too much to call it work.\"");
	say();
	UI_add_answer(["enjoy", "train"]);
	if (!gflags[0x0142]) goto labelFunc0473_00D2;
	if (!(!var0002)) goto labelFunc0473_00D2;
	UI_add_answer("Bradman");
	var0002 = true;
labelFunc0473_00D2:
	case "enjoy" attend labelFunc0473_00F2:
	message("\"I have loved close-quarter fighting since I was old enough to grasp my first spear. That's why I moved to Yew.\"");
	say();
	UI_remove_answer("enjoy");
	UI_add_answer(["spear", "Yew"]);
labelFunc0473_00F2:
	case "spear" attend labelFunc0473_0105:
	message("\"It is my choice in arms. The spear combines the best of both range and power. It is the perfect hunting weapon.\"");
	say();
	UI_remove_answer("spear");
labelFunc0473_0105:
	case "Yew" attend labelFunc0473_0118:
	message("\"I moved here to hunt, of course. The forest is full of game. I would not think of living anywhere else!\"");
	say();
	UI_remove_answer("Yew");
labelFunc0473_0118:
	case "train" attend labelFunc0473_0157:
	if (!(var0004 == 0x0007)) goto labelFunc0473_014D;
	message("\"Art thou interested in training? My price is 35 gold for each training session.\"");
	say();
	if (!Func090A()) goto labelFunc0473_0146;
	Func08C8([0x0000, 0x0004], 0x0023);
	goto labelFunc0473_014A;
labelFunc0473_0146:
	message("\"Perhaps next time.\"");
	say();
labelFunc0473_014A:
	goto labelFunc0473_0157;
labelFunc0473_014D:
	message("\"I am sorry, ");
	message(var0001);
	message(", but I am not training at this moment. Perhaps if thou wert to return between 9 in the morning and 6 in the evening, I will be able to help thee.\"");
	say();
labelFunc0473_0157:
	case "Bradman" attend labelFunc0473_01A3:
	message("\"Yes,\" she nods her head, grinning, \"I know Bradman. We go hunting together. Of course, he rarely catches anything with that toothpick shooter of his.\"");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0473_0198;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I resent that, my friend. Bows and crossbows can be wielded with deadly effect.\"");
	say();
	UI_show_npc_face(0xFF8D, 0x0000);
	message("She smiles, nodding to Iolo. \"Perhaps thou art correct, friend archer, but I prefer more physical challenges.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0473_019C;
labelFunc0473_0198:
	message("\"Although I consider him a true friend and an honorable companion, I wonder about his physical prowess.\"");
	say();
labelFunc0473_019C:
	UI_remove_answer("Bradman");
labelFunc0473_01A3:
	case "Addom" attend labelFunc0473_01E9:
	message("\"Addom is mine husband. But how did...?\" She appears confused, but suddenly directs her gaze at you. \"Hast thou seen him?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0473_01DA;
	message("\"Is he in good health?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0473_01D2;
	message("\"Thank goodness!\" she sighs in relief.");
	say();
	goto labelFunc0473_01D7;
labelFunc0473_01D2:
	message("\"I knew he should not have left this time! I hate it when he leaves!\" She chokes back her tears.*");
	say();
	abort;
labelFunc0473_01D7:
	goto labelFunc0473_01DE;
labelFunc0473_01DA:
	message("\"I do hate it so when he travels so far away for such a long time. I can only hope he returns to mine arms quickly!\" She peers off in the distance, as if searching for Addom.");
	say();
labelFunc0473_01DE:
	UI_remove_answer("Addom");
	var0003 = true;
labelFunc0473_01E9:
	case "bye" attend labelFunc0473_01F4:
	goto labelFunc0473_01F7;
labelFunc0473_01F4:
	goto labelFunc0473_006D;
labelFunc0473_01F7:
	endconv;
	message("\"Good journeying, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc0473_0202:
	if (!(event == 0x0000)) goto labelFunc0473_0210;
	Func092E(0xFF8D);
labelFunc0473_0210:
	return;
}


