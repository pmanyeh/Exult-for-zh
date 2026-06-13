#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func040B object#(0x40B) ()
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

	if (!(event == 0x0001)) goto labelFunc040B_026C;
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_is_pc_female();
	UI_add_answer(["name", "job", "bye"]);
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!(!gflags[0x0014])) goto labelFunc040B_005D;
	if (!var0002) goto labelFunc040B_004C;
	var0003 = "woman";
	goto labelFunc040B_0052;
labelFunc040B_004C:
	var0003 = "man";
labelFunc040B_0052:
	message("The peasant looks at you as if he has seen a ghost! \"Iolo! This ");
	message(var0003);
	message(" did appear from thin air! Help me!\"*");
	say();
	abort;
labelFunc040B_005D:
	if (!(!gflags[0x004B])) goto labelFunc040B_009B;
	message("You see a distraught peasant. \"Art thou really the Avatar?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc040B_008F;
	message("Petre bows before you. \"^");
	message(var0000);
	message(".\"");
	say();
	gflags[0x004B] = true;
	UI_set_schedule_type(0xFFF5, 0x000B);
	goto labelFunc040B_0098;
labelFunc040B_008F:
	message("Petre looks confused. \"Thou shouldst not make fun of me!\" He turns away.*");
	say();
	gflags[0x004B] = true;
	abort;
labelFunc040B_0098:
	goto labelFunc040B_00A5;
labelFunc040B_009B:
	message("\"What is it, ");
	message(var0000);
	message("?\" Petre asks.");
	say();
labelFunc040B_00A5:
	if (!gflags[0x003C]) goto labelFunc040B_00B8;
	UI_add_answer(["murder", "footprints"]);
labelFunc040B_00B8:
	if (!gflags[0x003F]) goto labelFunc040B_00CE;
	UI_add_answer(["Fellowship", "Klog", "Spark"]);
labelFunc040B_00CE:
	converse attend labelFunc040B_0267;
	if (!(!gflags[0x003C])) goto labelFunc040B_00E0;
	message("\"Look in the stables! 'Tis horrible! I will answer thy questions, but first look in the stables!\"*");
	say();
	abort;
	goto labelFunc040B_0264;
labelFunc040B_00E0:
	case "name" attend labelFunc040B_00F3:
	message("\"I am called Petre,\" the man sniffs.");
	say();
	UI_remove_answer("name");
labelFunc040B_00F3:
	case "job" attend labelFunc040B_0106:
	message("\"I am the stables caretaker.\"");
	say();
	UI_add_answer("stables");
labelFunc040B_0106:
	case "stables" attend labelFunc040B_0132:
	message("\"I have worked here for years. I can sell thee a nice horse and carriage if thou dost want one. The animal and the carriage are located in a small shelter just outside the north gate of the town.\"");
	say();
	if (!(!gflags[0x0057])) goto labelFunc040B_0120;
	message("\"Right now the place gives me the creeps!\"~~His eyes are wild with fright.");
	say();
	goto labelFunc040B_0124;
labelFunc040B_0120:
	message("\"The Mayor did not let me clean in there until twenty-four hours after thou didst leave Trinsic. He thought we had to keep the place of the crime unsullied. Well, if thou dost ask me, I can tell thee that it still stinks like the end of the world in there!\"");
	say();
labelFunc040B_0124:
	UI_remove_answer("stables");
	UI_add_answer("carriage");
labelFunc040B_0132:
	case "murder" attend labelFunc040B_0152:
	message("\"I discovered poor Christopher and Inamo earlier this morning. I did not touch a thing. Made me sick, it did!\"");
	say();
	UI_remove_answer("murder");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc040B_0152:
	case "Christopher" attend labelFunc040B_0165:
	message("\"Nice man. He made the shoes for mine horses.\"");
	say();
	UI_remove_answer("Christopher");
labelFunc040B_0165:
	case "Inamo" attend labelFunc040B_0178:
	message("\"He worked for very little money. Did basic chores around the stables and the pub. I let him sleep in the little back room. He must have been in the wrong place at the wrong time.\"");
	say();
	UI_remove_answer("Inamo");
labelFunc040B_0178:
	case "carriage" attend labelFunc040B_01FB:
	message("\"The horse and carriage combination sells for 60 gold. Dost thou want a title?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040B_01F0;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x003C)) goto labelFunc040B_01E9;
	var0007 = UI_add_party_items(0x0001, 0x031D, 0x001C, 0xFE99, false);
	if (!var0007) goto labelFunc040B_01E2;
	message("\"Very good. Nothing like a little business transaction to take my mind off the ghastly scene in the stables.\"");
	say();
	var0008 = UI_remove_party_items(0x003C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc040B_01E6;
labelFunc040B_01E2:
	message("\"Oh, my. Thine hands are too full to take the title!\"");
	say();
labelFunc040B_01E6:
	goto labelFunc040B_01ED;
labelFunc040B_01E9:
	message("\"Oh. Thou dost not have enough gold to buy the title.\"");
	say();
labelFunc040B_01ED:
	goto labelFunc040B_01F4;
labelFunc040B_01F0:
	message("\"Some other time, then.\"");
	say();
labelFunc040B_01F4:
	UI_remove_answer("carriage");
labelFunc040B_01FB:
	case "footprints" attend labelFunc040B_020E:
	message("\"They doth lead out the back way, yes? They must be the tracks of the murderer!\"~~His eyes widen a bit more.~~\"Or... murderers!\"");
	say();
	UI_remove_answer("footprints");
labelFunc040B_020E:
	case "Fellowship" attend labelFunc040B_0221:
	message("\"I do not want to join them, but they seem all right.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc040B_0221:
	case "Klog" attend labelFunc040B_0234:
	message("\"I do not know the man too well. I have no dealings with him.\"");
	say();
	UI_remove_answer("Klog");
labelFunc040B_0234:
	case "Spark" attend labelFunc040B_0259:
	if (!(!(0xFFFE in var0001))) goto labelFunc040B_024E;
	message("\"That be Christopher's son. Nice lad.\"");
	say();
	goto labelFunc040B_0252;
labelFunc040B_024E:
	message("Petre ruffles the boy's hair.~~\"This here is Christopher's son. He's a good lad, is Spark, when he's not pilfering things from honest shopkeepers.\"");
	say();
labelFunc040B_0252:
	UI_remove_answer("Spark");
labelFunc040B_0259:
	case "bye" attend labelFunc040B_0264:
	goto labelFunc040B_0267;
labelFunc040B_0264:
	goto labelFunc040B_00CE;
labelFunc040B_0267:
	endconv;
	message("\"Goodbye,\" the man sniffs.*");
	say();
labelFunc040B_026C:
	if (!(event == 0x0000)) goto labelFunc040B_027A;
	Func092E(0xFFF5);
labelFunc040B_027A:
	return;
}


