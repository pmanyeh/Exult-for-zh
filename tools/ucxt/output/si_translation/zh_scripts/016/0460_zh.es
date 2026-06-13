#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0460 object#(0x460) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0460_000F;
	Func0809();
	abort;
labelFunc0460_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0460_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFFA0->Func07D1();
	Func097F(0xFFA0, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFA0, 0x0003);
labelFunc0460_0051:
	if (!(event == 0x0009)) goto labelFunc0460_01A7;
	UI_run_schedule(0xFFA0);
	UI_clear_item_say(0xFFA0);
	UI_show_npc_face0(0xFFA0, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0460_0089;
	message("\"That hath made good use of thy Logic, ");
	message(var0000);
	message(". I would not have believed that one of our fellowship could have done such a thing. I thank thee for finding the traitor in our midst.\"");
	say();
	message("\"Use the key to obtain the waters of Logic. Thou hast well earned that honor.\"");
	say();
	abort;
	goto labelFunc0460_01A7;
labelFunc0460_0089:
	message("\"We have failed to protect the Temple! We have failed to provide thee with the solitude to meditate! And no one hath seen Number 7 in ages!\"");
	say();
	message("\"I am not worthy of my Number 3! Where is Number 7, the keeper of the key?!\"");
	say();
	UI_add_answer(["protect", "solitude", "Number 7", "accuse", "bye"]);
labelFunc0460_00A7:
	converse attend labelFunc0460_01A6;
	case "protect" attend labelFunc0460_00BD:
	UI_remove_answer("protect");
	message("\"That is the duty of my fellows and I, to protect the Temple and assist those who come here to meditate on the pure waters of Logic. And we have failed!\"");
	say();
labelFunc0460_00BD:
	case "solitude" attend labelFunc0460_00D0:
	UI_remove_answer("solitude");
	message("\"No one would interfere with thy communion with the waters of Logic.\"");
	say();
labelFunc0460_00D0:
	case "Number 7" attend labelFunc0460_00E7:
	UI_remove_answer("Number 7");
	message("\"Something must have happened to Number 7. Let me think, I was with Number 5 the last time any of us saw Number 7... and that was quite some time ago.\"");
	say();
	message("\"I fear we may never find the key to the fountain room now.\"");
	say();
labelFunc0460_00E7:
	case "accuse" attend labelFunc0460_0172:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc0460_0168;
	message("\"Thou art mad! I was with Number 5 when Number 7 disappeared!\"");
	say();
	Func094E(0xFF9E, "@Number 3 was with me!@");
	UI_set_conversation_slot(0x0000);
	message("\"I shall make thee bleed!\"");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0460_0138:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0460_0164;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0460_0138;
labelFunc0460_0164:
	abort;
	goto labelFunc0460_0172;
labelFunc0460_0168:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc0460_0172:
	case "bye" attend labelFunc0460_01A3:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Fare well!@", 0x0000);
	Func097F(0xFFA0, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFFA0, 0x000B);
	goto labelFunc0460_01A6;
labelFunc0460_01A3:
	goto labelFunc0460_00A7;
labelFunc0460_01A6:
	endconv;
labelFunc0460_01A7:
	return;
}


