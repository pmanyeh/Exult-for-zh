#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0461 object#(0x461) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0461_000F;
	Func0809();
	abort;
labelFunc0461_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0461_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFF9F->Func07D1();
	Func097F(0xFF9F, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF9F, 0x0003);
labelFunc0461_0051:
	if (!(event == 0x0009)) goto labelFunc0461_01B9;
	UI_run_schedule(0xFF9F);
	UI_clear_item_say(0xFF9F);
	UI_show_npc_face0(0xFF9F, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0461_009D;
	message("\"Thou hast ruined it all! Die!\"");
	say();
	UI_set_alignment(0xFF9F, 0x0003);
	UI_set_schedule_type(0xFF9F, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFF9F);
	abort;
	goto labelFunc0461_01B9;
labelFunc0461_009D:
	message("\"Number 7 hath abandoned his post! The key is gone!\"");
	say();
	message("\"None shall seek the fountain to meditate again!\"");
	say();
	UI_add_answer(["abandoned", "fountain", "accuse", "name", "bye"]);
labelFunc0461_00BB:
	converse attend labelFunc0461_01B8;
	case "abandoned" attend labelFunc0461_00D5:
	UI_remove_answer("abandoned");
	message("\"Why else would Number 7 not be here, unless someone hath destroyed him? If Number 7 were fulfilling his duties, we would have the key to allow thee to meditate... as is our sworn duty.\"");
	say();
	message("\"The last time any of us saw Number 7, I was with Number 2... And that was some time ago.\"");
	say();
labelFunc0461_00D5:
	case "fountain" attend labelFunc0461_00E8:
	UI_remove_answer("fountain");
	message("\"The fountain contains the precious waters of Logic, pure and sweet and crystal clear. It is our duty to protect it from all who would muddy its waters.\"");
	say();
labelFunc0461_00E8:
	case "name" attend labelFunc0461_0101:
	UI_remove_answer("name");
	message("\"Thou mayest call me Number 4, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0461_0101:
	case "accuse" attend labelFunc0461_0184:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc0461_017A;
	message("\"What art thou saying?! I was with Number 2 when Number 7 disappeared!\"");
	say();
	Func094E(0xFFA1, "@That is a lie! I was with Number 1 and Number 6, not Number 4!@");
	UI_set_conversation_slot(0x0000);
	message("\"Thou hast caught me! Very well... the key is thine.\"");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0046, 0x0005, false, true);
	message("\"I confess. It was I that destroyed Number 7... as I shall destroy thee! I should have been the keeper of the key all along! Number 7 was wrong not to give it to me!\"");
	say();
	UI_set_alignment(0xFF9F, 0x0003);
	UI_set_schedule_type(0xFF9F, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFF9F);
	gflags[0x0233] = true;
	abort;
	goto labelFunc0461_0184;
labelFunc0461_017A:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc0461_0184:
	case "bye" attend labelFunc0461_01B5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Until later...@", 0x0000);
	Func097F(0xFF9F, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFF9F, 0x000B);
	goto labelFunc0461_01B8;
labelFunc0461_01B5:
	goto labelFunc0461_00BB;
labelFunc0461_01B8:
	endconv;
labelFunc0461_01B9:
	return;
}


