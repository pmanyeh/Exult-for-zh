#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08D0 0x8D0 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func044C object#(0x44C) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc044C_0156;
	UI_show_npc_face(0xFFB4, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFB4));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00E4]) goto labelFunc044C_004A;
	if (!gflags[0x00EE]) goto labelFunc044C_004A;
	UI_add_answer("Pamela");
labelFunc044C_004A:
	if (!(!gflags[0x00E9])) goto labelFunc044C_006A;
	message("You startle a fighter who seems lost in thought.");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0063;
	message("His dog seemed to be meditating as well.");
	say();
labelFunc044C_0063:
	gflags[0x00E9] = true;
	goto labelFunc044C_006E;
labelFunc044C_006A:
	message("\"Hello again,\" Rayburt says.");
	say();
labelFunc044C_006E:
	converse attend labelFunc044C_014D;
	case "name" attend labelFunc044C_00AA:
	message("\"I am Rayburt.\"");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0092;
	message("He turns to the dog. \"And this is Regal.\"");
	say();
	UI_add_answer("Regal");
labelFunc044C_0092:
	UI_remove_answer("name");
	if (!gflags[0x00E4]) goto labelFunc044C_00A6;
	UI_add_answer("Pamela");
labelFunc044C_00A6:
	gflags[0x00EE] = true;
labelFunc044C_00AA:
	case "job" attend labelFunc044C_00C3:
	message("\"I am a trainer. I specialize in a style of combat that relies on concentration and meditation. It shall boost thy dexterity and intelligence, as well as thy combat skill.\"");
	say();
	UI_add_answer(["meditation", "train"]);
labelFunc044C_00C3:
	case "Regal" attend labelFunc044C_00D6:
	message("\"He is an exceptionally smart animal. He understands the meditative way of life.\"~~Rayburt throws the dog a cookie, which is snarfed up in the blink of an eye. \"He is cute, too,\" Rayburt says with complete seriousness.");
	say();
	UI_remove_answer("Regal");
labelFunc044C_00D6:
	case "Pamela" attend labelFunc044C_00E9:
	message("You see a hint of a smile on Rayburt's face. \"She and I are one person.\"");
	say();
	UI_remove_answer("Pamela");
labelFunc044C_00E9:
	case "meditation" attend labelFunc044C_00FC:
	message("\"Most of all combat occurs in the mind before the first blow is ever struck. The key to victory is to first win the inner battle in the mind. Winning that inner battle is what I help my students to learn.\"");
	say();
	UI_remove_answer("meditation");
labelFunc044C_00FC:
	case "train" attend labelFunc044C_013F:
	if (!(var0001 == 0x001B)) goto labelFunc044C_0134;
	message("\"I charge 60 gold for a session, but thou wilt benefit greatly. Is this agreeable?\"");
	say();
	if (!Func090A()) goto labelFunc044C_012D;
	Func08D0([0x0001, 0x0002, 0x0004], 0x003C);
	goto labelFunc044C_0131;
labelFunc044C_012D:
	message("\"It is not the first time I have been accused of being too expensive.\"");
	say();
labelFunc044C_0131:
	goto labelFunc044C_013F;
labelFunc044C_0134:
	message("\"Please come to my studio during business hours if thou wishest to train.\"");
	say();
	UI_remove_answer("train");
labelFunc044C_013F:
	case "bye" attend labelFunc044C_014A:
	goto labelFunc044C_014D;
labelFunc044C_014A:
	goto labelFunc044C_006E;
labelFunc044C_014D:
	endconv;
	message("Rayburt bows.*");
	say();
	gflags[0x00EE] = true;
labelFunc044C_0156:
	if (!(event == 0x0000)) goto labelFunc044C_0164;
	Func092E(0xFFB4);
labelFunc044C_0164:
	return;
}


