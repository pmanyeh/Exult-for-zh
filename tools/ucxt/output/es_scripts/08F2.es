#game "blackgate"
// externs
extern var Func08F1 0x8F1 (var var0000);
extern var Func090A 0x90A ();

void Func08F2 0x8F2 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	UI_push_answers();
	var0002 = false;
	var0003 = true;
	var0004 = Func08F1("");
	message("\"");
	message(var0001);
	message("! Thou ");
	message(var0004);
	message("!\"");
	say();
	var0005 = ["blood", "head", "life"];
	var0006 = var0005[UI_die_roll(0x0001, UI_get_array_size(var0005))];
	message("\"Shall I have my apology, or thy ");
	message(var0006);
	message("?\"");
	say();
	var0007 = "Forgive me";
	var0008 = "Suffer my wrath";
	UI_add_answer([var0007, var0008]);
labelFunc08F2_006B:
	converse attend labelFunc08F2_0179;
	case var0007 attend labelFunc08F2_00A7:
	var0004 = Func08F1("");
	message("\"Forgive thee! What might I forgive in one such as thee, ");
	message(var0004);
	message("?\"");
	say();
	UI_remove_answer(var0008);
	UI_remove_answer(var0007);
	UI_add_answer(["My lie", "My deed", "My crime"]);
labelFunc08F2_00A7:
	case var0008 attend labelFunc08F2_00B2:
	goto labelFunc08F2_0179;
labelFunc08F2_00B2:
	case "My lie" attend labelFunc08F2_010B:
	UI_remove_answer(["My lie", "My deed", "My crime"]);
	message("\"Of what lie speakest thou? Art thou not ");
	message(var0001);
	message("?\"");
	say();
	if (!Func090A()) goto labelFunc08F2_00DD;
	goto labelFunc08F2_0179;
labelFunc08F2_00DD:
	var0004 = Func08F1("");
	message("\"Perhaps thou art not ");
	message(var0001);
	message(", for I have never seen the ");
	message(var0004);
	message(". Confess now thy true identity!\"");
	say();
	UI_add_answer(var0000);
	if (!(!gflags[0x0161])) goto labelFunc08F2_010B;
	UI_add_answer("Avatar");
labelFunc08F2_010B:
	case "My deed" attend labelFunc08F2_011A:
	message("\"Speak not of thy deed! Such deeds must deeds receive to equal their merit.\"");
	say();
	goto labelFunc08F2_0179;
labelFunc08F2_011A:
	case "My crime" attend labelFunc08F2_012D:
	message("\"Crime most foul, most horrible!\"");
	say();
	var0003 = false;
	goto labelFunc08F2_0179;
labelFunc08F2_012D:
	case "Avatar" attend labelFunc08F2_0148:
	UI_remove_answer("Avatar");
	message("\"I doubt but thou deceivest me further. If true, thou dost shame the title. Admit now thy true name!\"");
	say();
	var0002 = true;
	gflags[0x0161] = true;
labelFunc08F2_0148:
	case var0000 attend labelFunc08F2_0176:
	var0004 = Func08F1("");
	message("\"");
	message(var0000);
	message("! Perhaps honesty shall lift thee above the ");
	message(var0004);
	message(" ");
	message(var0001);
	message("...\"");
	say();
	var0002 = true;
	goto labelFunc08F2_0179;
labelFunc08F2_0176:
	goto labelFunc08F2_006B;
labelFunc08F2_0179:
	endconv;
	if (!(!var0002)) goto labelFunc08F2_01E7;
	var0004 = Func08F1("");
	var0009 = Func08F1(var0004);
	if (!var0003) goto labelFunc08F2_01C0;
	message("\"^");
	message(var0004);
	message("! ^");
	message(var0009);
	message("! Thy soul shall wail in the catacombs of the netherworld!\"");
	say();
	UI_set_schedule_type(0xFFF6, 0x0000);
	UI_set_alignment(0xFFF6, 0x0002);
	goto labelFunc08F2_01E4;
labelFunc08F2_01C0:
	message("\"^");
	message(var0004);
	message("! Fly from this place at once! I shall provide escort for thee with my bow. Return at thy peril, ");
	message(var0009);
	message(".\"");
	say();
	UI_set_schedule_type(0xFFF6, 0x0009);
	UI_set_alignment(0xFFF6, 0x0000);
labelFunc08F2_01E4:
	goto labelFunc08F2_01F9;
labelFunc08F2_01E7:
	message("\"I shall not take this deception lightly.\"");
	say();
	gflags[0x001D] = true;
	UI_set_alignment(0xFFF6, 0x0000);
labelFunc08F2_01F9:
	abort;
	return;
}


