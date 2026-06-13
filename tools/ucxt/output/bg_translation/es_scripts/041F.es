#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func041F object#(0x41F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc041F_013F;
	UI_show_npc_face(0xFFE1, 0x0000);
	var0000 = Func08F7(0xFFDE);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A0])) goto labelFunc041F_003D;
	message("This is a cute toddler holding a baby doll.");
	say();
	gflags[0x00A0] = true;
	goto labelFunc041F_0041;
labelFunc041F_003D:
	message("\"Hi!\" Kristy exclaims.");
	say();
labelFunc041F_0041:
	converse attend labelFunc041F_013A;
	case "name" attend labelFunc041F_007C:
	message("\"Kwisty.\"");
	say();
	if (!var0000) goto labelFunc041F_0075;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"Kristy, like Nicholas, is one of our orphans. She was found in an abandoned home in Paws by one of the Great Council members.\"");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE1, 0x0000);
labelFunc041F_0075:
	UI_remove_answer("name");
labelFunc041F_007C:
	case "job" attend labelFunc041F_00BB:
	var0001 = UI_get_schedule_type(0xFFE1);
	if (!(var0001 == 0x0019)) goto labelFunc041F_00A4;
	message("\"Tag! Playing tag!\"");
	say();
	message("The toddler runs off in search of a nursery-mate.*");
	say();
	abort;
	goto labelFunc041F_00BB;
labelFunc041F_00A4:
	message("Kristy looks confused. \"Sing. Horsey. Rosa. Winner.\"");
	say();
	UI_add_answer(["sing", "horsey", "Rosa", "winner"]);
labelFunc041F_00BB:
	case "sing" attend labelFunc041F_00CE:
	message("Kristy is more than happy to do so. \"A-B-C-D-E-F-G! H-I-K-M-M-M-O-P! Q-T-W-Y-X-Z!\" She is proud of her song, although she didn't get it quite right.");
	say();
	UI_remove_answer("sing");
labelFunc041F_00CE:
	case "horsey" attend labelFunc041F_00E1:
	message("\"I love horsey!\" She rocks hard on the rocking horse.");
	say();
	UI_remove_answer("horsey");
labelFunc041F_00E1:
	case "Rosa" attend labelFunc041F_00F4:
	message("Kristy hugs her baby doll tight. \"Rosa!\"");
	say();
	UI_remove_answer("Rosa");
labelFunc041F_00F4:
	case "winner" attend labelFunc041F_012C:
	message("\"I am winner!\" she proclaims loudly.");
	say();
	if (!var0000) goto labelFunc041F_0125;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"She keeps saying that. I am not sure what it means. Something to do with a competition.\"");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE1, 0x0000);
labelFunc041F_0125:
	UI_remove_answer("winner");
labelFunc041F_012C:
	case "bye" attend labelFunc041F_0137:
	goto labelFunc041F_013A;
labelFunc041F_0137:
	goto labelFunc041F_0041;
labelFunc041F_013A:
	endconv;
	message("\"Bye bye!\"*");
	say();
labelFunc041F_013F:
	if (!(event == 0x0000)) goto labelFunc041F_01B6;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE1));
	if (!(var0001 == 0x0019)) goto labelFunc041F_01B6;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc041F_017C;
	var0003 = "@Tag! Thou art it!@";
labelFunc041F_017C:
	if (!(var0002 == 0x0002)) goto labelFunc041F_018C;
	var0003 = "@Cannot catch me!@";
labelFunc041F_018C:
	if (!(var0002 == 0x0003)) goto labelFunc041F_019C;
	var0003 = "@Nyah nyah! Thou art it!@";
labelFunc041F_019C:
	if (!(var0002 == 0x0004)) goto labelFunc041F_01AC;
	var0003 = "@Catch me if thou can!@";
labelFunc041F_01AC:
	UI_item_say(0xFFE1, var0003);
labelFunc041F_01B6:
	return;
}


