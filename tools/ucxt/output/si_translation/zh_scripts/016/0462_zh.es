#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0462 object#(0x462) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0462_000F;
	Func0809();
	abort;
labelFunc0462_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0462_0051;
	UI_item_say(0xFE9C, "@May we speak?@");
	0xFF9E->Func07D1();
	Func097F(0xFF9E, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF9E, 0x0003);
labelFunc0462_0051:
	if (!(event == 0x0009)) goto labelFunc0462_01EB;
	UI_run_schedule(0xFF9E);
	UI_clear_item_say(0xFF9E);
	UI_show_npc_face0(0xFF9E, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0462_0089;
	message("\"That hath made good use of thy Logic, ");
	message(var0000);
	message(". I would not have believed that one of our fellowship could have done such a thing. I thank thee for finding the traitor in our midst.\"");
	say();
	message("\"Use the key to obtain the waters of Logic. Thou hast well earned that honor.\"");
	say();
	abort;
	goto labelFunc0462_01EB;
labelFunc0462_0089:
	message("\"Where is the justice in the world when a strange mage comes to destroy our Temple and disrupt our peace?! Where is the keeper of the key?\"");
	say();
	UI_add_answer(["justice", "strange mage", "disrupt", "keeper of the key", "accuse", "bye"]);
labelFunc0462_00A6:
	converse attend labelFunc0462_01EA;
	case "justice" attend labelFunc0462_00C0:
	UI_remove_answer("justice");
	message("\"Thou mayest call me Number 5, for I no longer bear a mortal name. I surrendered that when I swore myself to eternal service at the fountain of Logic.\"");
	say();
	message("\"I am bound for all time and eternity in a body that will never age, and now I cannot fulfill my vows! Where is the justice in living forever with broken vows?\"");
	say();
labelFunc0462_00C0:
	case "strange mage" attend labelFunc0462_00D9:
	UI_remove_answer("strange mage");
	message("\"He was a rude, fat man, ");
	message(var0000);
	message(". I assumed he came seeking Logic, but I should have realized that one such as he would not be interested in the clarity of Logic.\"");
	say();
labelFunc0462_00D9:
	case "disrupt" attend labelFunc0462_00F7:
	UI_remove_answer("disrupt");
	message("\"Long ago, the Order Hierophant bound a force of great evil into a prison and placed it here for us to guard.\"");
	say();
	message("\"What peace is left for us here, guardians of an empty shell now that the mage hath loosed what once was captive?\"");
	say();
	UI_add_answer("force of great evil");
labelFunc0462_00F7:
	case "force of great evil" attend labelFunc0462_0114:
	UI_remove_answer("force of great evil");
	message("\"I do not know what it was, ");
	message(var0000);
	message(". I am sorry. It was not my place to ask if the Hierophant did not choose to tell me.\"");
	say();
	message("\"I can only hope that the failure of my fellows and I hath not endangered the world too greatly.\"");
	say();
labelFunc0462_0114:
	case "keeper of the key" attend labelFunc0462_012B:
	UI_remove_answer("keeper of the key");
	message("\"Perhaps the mage waylaid Number 7 to steal the key...\"");
	say();
	message("\"But no, that cannot be. For Number 7 disappeared the day I was with Number 3, long before the strange mage came.\"");
	say();
labelFunc0462_012B:
	case "accuse" attend labelFunc0462_01B6:
	message("\"I must warn thee, ");
	message(var0000);
	message(", we are each sworn to protect the other. If thou dost accuse me falsely, we shall attack thee.\"");
	say();
	message("\"If thou hast spoken to each of us and hast determined that one of us is guilty, accuse accordingly. But be not hasty in thy judgment.\"");
	say();
	message("\"Dost thou accuse me?\"");
	say();
	if (!Func0955()) goto labelFunc0462_01AC;
	message("\"Lies! Number 3 will remember that we were together when Number 7 disappeared!\"");
	say();
	Func094E(0xFFA0, "@It is true, Number 5 was with me!@");
	UI_set_conversation_slot(0x0000);
	message("\"I shall have thine head for this outrage!\"");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0462_017C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0462_01A8;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0462_017C;
labelFunc0462_01A8:
	abort;
	goto labelFunc0462_01B6;
labelFunc0462_01AC:
	message("\"I hope that thou dost find what hath happened to Number 7, ");
	message(var0000);
	message(". We cannot fulfill our duty without the key.\"");
	say();
labelFunc0462_01B6:
	case "bye" attend labelFunc0462_01E7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	Func097F(0xFF9E, "@Use thy Logic!@", 0x0002);
	UI_set_schedule_type(0xFF9E, 0x000B);
	goto labelFunc0462_01EA;
labelFunc0462_01E7:
	goto labelFunc0462_00A6;
labelFunc0462_01EA:
	endconv;
labelFunc0462_01EB:
	return;
}


