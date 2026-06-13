#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0463 object#(0x463) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0463_000F;
	Func0809();
	abort;
labelFunc0463_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0463_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFF9D->Func07D1();
	Func097F(0xFF9D, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF9D, 0x0003);
labelFunc0463_0051:
	if (!(event == 0x0009)) goto labelFunc0463_01A8;
	UI_run_schedule(0xFF9D);
	UI_clear_item_say(0xFF9D);
	UI_show_npc_face0(0xFF9D, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0463_0089;
	message("\"That hath made good use of thy Logic, ");
	message(var0000);
	message(". I would not have believed that one of our fellowship could have done such a thing. I thank thee for finding the traitor in our midst.\"");
	say();
	message("\"Use the key to obtain the waters of Logic. Thou hast well earned that honor.\"");
	say();
	abort;
	goto labelFunc0463_01A8;
labelFunc0463_0089:
	message("\"Thou mayest call me Number 6, ");
	message(var0000);
	message(". Long have we searched for the one who held the key to the fountain room, ");
	message(var0000);
	message(". But Number 7 hath disappeared and we are failures.\"");
	say();
	UI_add_answer(["Number 7", "failures", "accuse", "bye"]);
labelFunc0463_00AC:
	converse attend labelFunc0463_01A7;
	case "Number 7" attend labelFunc0463_00CC:
	UI_remove_answer("Number 7");
	message("\"Number 7 was the keeper of the key to the fountain room, ");
	message(var0000);
	message(". His was the greatest duty -- to insure that no one defiled the waters of Logic.\"");
	say();
	message("\"None of us have seen Number 7 since the day that I was with Number 1.\"");
	say();
labelFunc0463_00CC:
	case "failures" attend labelFunc0463_00DF:
	UI_remove_answer("failures");
	message("\"Although the waters of Logic are safe, without the key to the fountain room, we can no longer aid those who come seeking Logic. Therefore, we have failed.\"");
	say();
labelFunc0463_00DF:
	case "accuse" attend labelFunc0463_0173:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc0463_0169;
	message("\"Where is thy Logic?! Both Number 2 and Number 1 can attest that I was with them when Number 7 disappeared!\"");
	say();
	Func094E(0xFFA2, "@Number 1 was with me!@");
	Func094E(0xFFA1, "@It cannot be! I was with Number 1!@");
	UI_set_conversation_slot(0x0000);
	message("\"Thou shalt regret thy words!\"");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0463_0139:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0463_0165;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0463_0139;
labelFunc0463_0165:
	abort;
	goto labelFunc0463_0173;
labelFunc0463_0169:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc0463_0173:
	case "bye" attend labelFunc0463_01A4:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Until later...@", 0x0000);
	Func097F(0xFF9D, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFF9D, 0x000B);
	goto labelFunc0463_01A7;
labelFunc0463_01A4:
	goto labelFunc0463_00AC;
labelFunc0463_01A7:
	endconv;
labelFunc0463_01A8:
	return;
}


