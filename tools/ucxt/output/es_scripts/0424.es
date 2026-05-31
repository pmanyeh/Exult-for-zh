#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0950 0x950 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0424 object#(0x424) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0424_0148;
	UI_show_npc_face(0xFFDC, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDC));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A5])) goto labelFunc0424_0049;
	message("You see a lean, young fighter with a rather dashing flair.");
	say();
	gflags[0x00A5] = true;
	goto labelFunc0424_004D;
labelFunc0424_0049:
	message("\"Hello again!\" Zella says.");
	say();
labelFunc0424_004D:
	converse attend labelFunc0424_0143;
	case "name" attend labelFunc0424_0063:
	message("\"My name is Zella.\"");
	say();
	UI_remove_answer("name");
labelFunc0424_0063:
	case "job" attend labelFunc0424_007C:
	message("\"I am a trainer. I specialize in hand-to-hand combat. After all, a fighter never knows when he might encounter an adversary and suddenly realize he is unarmed. I call it 'boxing'. Boxing is not only a method of fighting -- it is an art.\"");
	say();
	UI_add_answer(["combat", "train"]);
labelFunc0424_007C:
	case "combat" attend labelFunc0424_009C:
	message("\"The field of battle contains many arenas. Almost any situation could arise. Every fighter should be knowledgeable and adept at many forms of combat. I have mine own theory of fighting.\"");
	say();
	UI_remove_answer("combat");
	UI_add_answer(["arenas", "theory"]);
labelFunc0424_009C:
	case "arenas" attend labelFunc0424_00AF:
	message("\"All the various arenas of combat, all the various styles one may learn in fighting with various weapons, are not fighting in its purest form. To truly be a great fighter one must go to the source of all fighting knowledge.\"");
	say();
	UI_remove_answer("arenas");
labelFunc0424_00AF:
	case "theory" attend labelFunc0424_00CF:
	message("\"Just as a castle is built from the foundation up, so must a fighter. One cannot simply begin by learning to fight with weapons. Weapons are merely an extension of a person's extremities. A true fighter learns by using those extremities first.\"");
	say();
	UI_remove_answer("theory");
	UI_add_answer(["fighter", "extremities"]);
labelFunc0424_00CF:
	case "fighter" attend labelFunc0424_00E2:
	message("\"Make no mistake. Fighters are made, not born. All the natural talent in the world will avail thee naught if one does not have the heart and the will to win. Part of that will is the courage to seek out thine own limitations and strive to better them.\"");
	say();
	UI_remove_answer("fighter");
labelFunc0424_00E2:
	case "extremities" attend labelFunc0424_00F5:
	message("\"Thine arms. Thy legs. Thy fists. This is what makes 'boxing'.\"");
	say();
	UI_remove_answer("extremities");
labelFunc0424_00F5:
	case "train" attend labelFunc0424_0135:
	if (!(var0001 == 0x001D)) goto labelFunc0424_012A;
	message("\"My price for training is 45 gold. Is this all right?\"");
	say();
	if (!Func090A()) goto labelFunc0424_0123;
	Func0950([0x0001, 0x0004], 0x002D);
	goto labelFunc0424_0127;
labelFunc0424_0123:
	message("\"Then mayest thou find more inexpensive training elsewhere.\"");
	say();
labelFunc0424_0127:
	goto labelFunc0424_0135;
labelFunc0424_012A:
	message("\"Be so kind as to return during normal training hours, wouldst thou?\"");
	say();
	UI_remove_answer("train");
labelFunc0424_0135:
	case "bye" attend labelFunc0424_0140:
	goto labelFunc0424_0143;
labelFunc0424_0140:
	goto labelFunc0424_004D;
labelFunc0424_0143:
	endconv;
	message("\"Good day to thee.\"*");
	say();
labelFunc0424_0148:
	if (!(event == 0x0000)) goto labelFunc0424_0156;
	Func092E(0xFFDC);
labelFunc0424_0156:
	return;
}


