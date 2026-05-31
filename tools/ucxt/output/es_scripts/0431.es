#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0875 0x875 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0431 object#(0x431) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0431_0106;
	UI_show_npc_face(0xFFCF, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFCF));
	if (!(!gflags[0x00B2])) goto labelFunc0431_0049;
	message("You see a fighter with intense eyes and a serious disposition.");
	say();
	gflags[0x00B2] = true;
	goto labelFunc0431_004D;
labelFunc0431_0049:
	message("\"Yes, Avatar?\" Denby asks.");
	say();
labelFunc0431_004D:
	converse attend labelFunc0431_0101;
	case "name" attend labelFunc0431_0063:
	message("\"I am Denby.\"");
	say();
	UI_remove_answer("name");
labelFunc0431_0063:
	case "job" attend labelFunc0431_007F:
	message("\"I am a trainer. I specialize in a form of combat which relies on one's ability to use intelligence and physical ability to activate minor magical effects. But I am not a mage. I am a fighter.\"");
	say();
	UI_add_answer(["magical effects", "fighter", "train"]);
labelFunc0431_007F:
	case "magical effects" attend labelFunc0431_009D:
	message("\"For example, I simply teach a combination of physical and mental exercises which increases one's intelligence. This, in turn, gives one an advantage if one desires to practice magic.\"");
	say();
	if (!(!gflags[0x0003])) goto labelFunc0431_0096;
	message("\"Thou shouldst be aware, however, that magic is not working in Britannia these days. It is a dying phenomenon. No one understands why. Nevertheless, my training should increase any magic user's primary chances for casting a spell, as well as their fighting skill.\"");
	say();
labelFunc0431_0096:
	UI_remove_answer("magical effects");
labelFunc0431_009D:
	case "fighter" attend labelFunc0431_00B0:
	message("\"Although I am a fighter, I have dedicated my life to peace. There has been too much fighting in the world as it is. Let history take care of the adversarial qualities which exist in man. I believe in using my skills as a deterrent.\"");
	say();
	UI_remove_answer("fighter");
labelFunc0431_00B0:
	case "train" attend labelFunc0431_00F3:
	if (!(var0001 == 0x0007)) goto labelFunc0431_00E8;
	message("\"My fee for training is 75 gold. Does this meet with the approval of thy purse strings?\"");
	say();
	if (!Func090A()) goto labelFunc0431_00E1;
	Func0875([0x0001, 0x0002, 0x0006], 0x004B);
	goto labelFunc0431_00E5;
labelFunc0431_00E1:
	message("Denby bows. \"I am sorry my fee is too high for thee. Perhaps at another time thou wilt realize the value of my services.\"");
	say();
labelFunc0431_00E5:
	goto labelFunc0431_00F3;
labelFunc0431_00E8:
	message("\"Please return during daylight hours if thou dost wish to train.\"");
	say();
	UI_remove_answer("train");
labelFunc0431_00F3:
	case "bye" attend labelFunc0431_00FE:
	goto labelFunc0431_0101;
labelFunc0431_00FE:
	goto labelFunc0431_004D;
labelFunc0431_0101:
	endconv;
	message("Denby puts his palms together and bows.*");
	say();
labelFunc0431_0106:
	if (!(event == 0x0000)) goto labelFunc0431_0114;
	Func092E(0xFFCF);
labelFunc0431_0114:
	return;
}


