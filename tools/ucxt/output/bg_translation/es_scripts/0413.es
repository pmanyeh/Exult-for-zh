#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0842 0x842 ();
extern void Func092E 0x92E (var var0000);

void Func0413 object#(0x413) ()
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
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc0413_024E;
	var0000 = UI_part_of_day();
	var0001 = Func0908();
	var0002 = Func0909();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFED));
	var0004 = UI_is_pc_female();
	UI_show_npc_face(0xFFED, 0x0000);
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!(var0003 == 0x0017)) goto labelFunc0413_006A;
	UI_add_answer(["food", "drink", "room", "buy"]);
labelFunc0413_006A:
	if (!(!gflags[0x0051])) goto labelFunc0413_007C;
	message("You see a gorgeous and voluptuous woman in her thirties.");
	say();
	gflags[0x0051] = true;
	goto labelFunc0413_0080;
labelFunc0413_007C:
	message("\"Hello again!\" Apollonia says, her eyes twinkling.");
	say();
labelFunc0413_0080:
	converse attend labelFunc0413_023B;
	case "name" attend labelFunc0413_00B2:
	if (!(!var0004)) goto labelFunc0413_009B;
	var0005 = "as her tongue licks her upper lip.";
	goto labelFunc0413_00A1;
labelFunc0413_009B:
	var0005 = "as she sizes you up.";
labelFunc0413_00A1:
	message("\"My name is Apollonia,\" she says, ");
	message(var0005);
	message("");
	say();
	UI_remove_answer("name");
labelFunc0413_00B2:
	case "job" attend labelFunc0413_00EF:
	message("\"Why, I run the Honorable Hound Pub and Inn,\" she purrs.");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0413_00E1;
	message("\"Wouldst thou like a room? Or wouldst thou like something to eat or drink? Just say so and I shall try and please thee with my delicacies.\"");
	say();
	if (!(!var0004)) goto labelFunc0413_00DE;
	message("~~You realize she is flirting with you.");
	say();
	UI_add_answer("flirt");
labelFunc0413_00DE:
	goto labelFunc0413_00E5;
labelFunc0413_00E1:
	message("\"I shall be happy to serve thee during business hours!\"");
	say();
labelFunc0413_00E5:
	UI_add_answer(["Honorable Hound"]);
labelFunc0413_00EF:
	case "Honorable Hound" attend labelFunc0413_0102:
	message("\"I can think of no better place in all of Trinsic to lay thine head to rest or to nibble upon treats to satisfy thine appetite.\"");
	say();
	UI_remove_answer("Honorable Hound");
labelFunc0413_0102:
	case "murder" attend labelFunc0413_0115:
	message("Apollonia shuts her eyes and shakes her head as if she had just bitten into a very sour lemon. \"Oooh. That was so... hideous! How could anyone do something so horrible? Art thou searching for information? I do hope thou dost find the person responsible.\"");
	say();
	UI_remove_answer("murder");
labelFunc0413_0115:
	case "food" attend labelFunc0413_012F:
	message("\"We serve the finest meat, fish, and cake. Our specialty is a Silverleaf meal. If thou wouldst like to buy something, please say so!\"");
	say();
	UI_add_answer("Silverleaf");
	UI_remove_answer("food");
labelFunc0413_012F:
	case "drink" attend labelFunc0413_0142:
	message("\"I can offer thee mead, wine and ale.\"");
	say();
	UI_remove_answer("drink");
labelFunc0413_0142:
	case "room" attend labelFunc0413_01F6:
	message("\"Our rooms are cheap. Only 6 gold per person per night. Want a room?\"");
	say();
	if (!Func090A()) goto labelFunc0413_01EB;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0413_0162:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0413_017A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0413_0162;
labelFunc0413_017A:
	var000B = (var0007 * 0x0006);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0413_01DE;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000D)) goto labelFunc0413_01C3;
	message("\"Oh dear. Thou art carrying too much to take the room key.\"");
	say();
	goto labelFunc0413_01DB;
labelFunc0413_01C3:
	message("\"Here is thy room key. It is good only until thou dost leave.\"");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
labelFunc0413_01DB:
	goto labelFunc0413_01E8;
labelFunc0413_01DE:
	message("\"Thou dost not have enough gold, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0413_01E8:
	goto labelFunc0413_01EF;
labelFunc0413_01EB:
	message("\"Some other night, then.\"");
	say();
labelFunc0413_01EF:
	UI_remove_answer("room");
labelFunc0413_01F6:
	case "Silverleaf" attend labelFunc0413_0209:
	message("\"Mmmm. What a delicacy! It is the most wonderful delicacy that thou shalt ever eat! It is worth every gold piece spent.\"");
	say();
	UI_remove_answer("Silverleaf");
labelFunc0413_0209:
	case "flirt" attend labelFunc0413_0222:
	message("Apollonia blushes and bats her eyelashes. \"Oh, ");
	message(var0001);
	message("! I would wager that thou dost say that to all the barmaids!\"");
	say();
	UI_remove_answer("flirt");
labelFunc0413_0222:
	case "buy" attend labelFunc0413_022D:
	Func0842();
labelFunc0413_022D:
	case "bye" attend labelFunc0413_0238:
	goto labelFunc0413_023B;
labelFunc0413_0238:
	goto labelFunc0413_0080;
labelFunc0413_023B:
	endconv;
	if (!(!var0004)) goto labelFunc0413_024A;
	message("Apollonia blows a kiss at you. \"Do come again!\"*");
	say();
	goto labelFunc0413_024E;
labelFunc0413_024A:
	message("Apollonia waves at you. \"Do come again!\"*");
	say();
labelFunc0413_024E:
	if (!(event == 0x0000)) goto labelFunc0413_025C;
	Func092E(0xFFED);
labelFunc0413_025C:
	return;
}


