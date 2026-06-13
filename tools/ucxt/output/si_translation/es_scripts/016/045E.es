#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func045E object#(0x45E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc045E_000F;
	Func0809();
	abort;
labelFunc045E_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc045E_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFFA2->Func07D1();
	Func097F(0xFFA2, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFA2, 0x0003);
labelFunc045E_0051:
	if (!(event == 0x0009)) goto labelFunc045E_01A4;
	UI_run_schedule(0xFFA2);
	UI_clear_item_say(0xFFA2);
	UI_show_npc_face0(0xFFA2, 0x0000);
	if (!gflags[0x0233]) goto labelFunc045E_0089;
	message("\"That hath made good use of thy Logic, ");
	message(var0000);
	message(". I would not have believed that one of our fellowship could have done such a thing. I thank thee for finding the traitor in our midst.\"");
	say();
	message("\"Use the key to obtain the waters of Logic. Thou hast well earned that honor.\"");
	say();
	abort;
	goto labelFunc045E_01A4;
labelFunc045E_0089:
	message("\"I am Number 1, ");
	message(var0000);
	message(". And I am sorry. Thou must postpone thy meditations, for the key to the fountain room cannot be found.\"");
	say();
	message("\"I fear that someone hath destroyed Number 7, the keeper of the key!\"");
	say();
	UI_add_answer(["meditations", "destroyed", "accuse", "bye"]);
labelFunc045E_00AA:
	converse attend labelFunc045E_01A3;
	case "meditations" attend labelFunc045E_00C0:
	UI_remove_answer("meditations");
	message("\"Thy search for Logic can go no further until thou canst drink of the waters of Logic. And until the key to the fountain room is found, no one may taste the pure waters of Logic.\"");
	say();
labelFunc045E_00C0:
	case "destroyed" attend labelFunc045E_00DB:
	UI_remove_answer("destroyed");
	message("\"I cannot make any accusations, but we are incapable of leaving our post. Something dire must have happened to Number 7.\"");
	say();
	message("\"I am restricted from taking action against any of my fellows, so it is up to thee to determine what hath befallen the keeper of the key.\"");
	say();
	message("\"For my part, I can say that I was with Number 2 and Number 6 when last we saw Number 7.\"");
	say();
labelFunc045E_00DB:
	case "accuse" attend labelFunc045E_016F:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc045E_0165;
	message("\"Thou hast no proof! Both Number 2 and Number 6 can attest that I was with them when Number 7 disappeared!\"");
	say();
	Func094E(0xFFA1, "@Number 1 was with me!@");
	Func094E(0xFF9D, "@It cannot be! I was with Number 1!@");
	UI_set_conversation_slot(0x0000);
	message("\"Thou hast wronged me!\"");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc045E_0135:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc045E_0161;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc045E_0135;
labelFunc045E_0161:
	abort;
	goto labelFunc045E_016F;
labelFunc045E_0165:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc045E_016F:
	case "bye" attend labelFunc045E_01A0:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	Func097F(0xFFA2, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFFA2, 0x000B);
	goto labelFunc045E_01A3;
labelFunc045E_01A0:
	goto labelFunc045E_00AA;
labelFunc045E_01A3:
	endconv;
labelFunc045E_01A4:
	return;
}


