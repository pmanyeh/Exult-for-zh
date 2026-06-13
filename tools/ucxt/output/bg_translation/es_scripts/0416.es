#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0416 object#(0x416) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0416_0117;
	UI_show_npc_face(0xFFEA, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0416_0041;
	var0001 = Func08FC(0xFFEA, 0xFFF0);
	if (!var0001) goto labelFunc0416_003C;
	message("Caroline asks you to keep your voice down. The Fellowship meeting is in progress.*");
	say();
	goto labelFunc0416_0040;
labelFunc0416_003C:
	message("\"Oh! I cannot stop to speak with thee now! I am late for the Fellowship meeting!\"*");
	say();
labelFunc0416_0040:
	abort;
labelFunc0416_0041:
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!(!gflags[0x0056])) goto labelFunc0416_0066;
	message("You see a young woman with a bright smile.");
	say();
	gflags[0x0056] = true;
	goto labelFunc0416_006A;
labelFunc0416_0066:
	message("\"Hello again!\" Caroline says brightly.");
	say();
labelFunc0416_006A:
	converse attend labelFunc0416_0112;
	case "name" attend labelFunc0416_0080:
	message("\"My parents named me Caroline,\" she says proudly.");
	say();
	UI_remove_answer("name");
labelFunc0416_0080:
	case "job" attend labelFunc0416_0093:
	message("\"I have no 'job' per se. I have devoted mine energies to helping The Fellowship. I hope to recruit new members.\"");
	say();
	UI_add_answer("Fellowship");
labelFunc0416_0093:
	case "murder" attend labelFunc0416_00AD:
	message("She looks concerned. \"'Tis awful! Christopher was a nice man. Didst thou know he was one of our members? I cannot believe he is dead...\"");
	say();
	UI_remove_answer("murder");
	UI_add_answer("members");
labelFunc0416_00AD:
	case "members" attend labelFunc0416_00C0:
	message("\"Of The Fellowship. We meet every night at the hall. Thou shouldst visit!\"");
	say();
	UI_remove_answer("members");
labelFunc0416_00C0:
	case "Fellowship" attend labelFunc0416_00DF:
	Func0919();
	UI_remove_answer("Fellowship");
	UI_add_answer(["society", "philosophy"]);
labelFunc0416_00DF:
	case "society" attend labelFunc0416_00F2:
	message("\"Every night at nine o'clock we have a meeting in the Fellowship hall. Thou mayest consider thyself invited to attend.\"");
	say();
	UI_remove_answer("society");
labelFunc0416_00F2:
	case "philosophy" attend labelFunc0416_0104:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc0416_0104:
	case "bye" attend labelFunc0416_010F:
	goto labelFunc0416_0112;
labelFunc0416_010F:
	goto labelFunc0416_006A;
labelFunc0416_0112:
	endconv;
	message("\"Goodbye!\"*");
	say();
labelFunc0416_0117:
	if (!(event == 0x0000)) goto labelFunc0416_0197;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEA));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000C)) goto labelFunc0416_0191;
	if (!(var0003 == 0x0001)) goto labelFunc0416_0154;
	var0004 = "@Come to Fellowship Hall!@";
labelFunc0416_0154:
	if (!(var0003 == 0x0002)) goto labelFunc0416_0164;
	var0004 = "@Strive For Unity!@";
labelFunc0416_0164:
	if (!(var0003 == 0x0003)) goto labelFunc0416_0174;
	var0004 = "@Trust Thy Brother!@";
labelFunc0416_0174:
	if (!(var0003 == 0x0004)) goto labelFunc0416_0184;
	var0004 = "@Worthiness Precedes Reward!@";
labelFunc0416_0184:
	UI_item_say(0xFFEA, var0004);
	goto labelFunc0416_0197;
labelFunc0416_0191:
	Func092E(0xFFEA);
labelFunc0416_0197:
	return;
}


