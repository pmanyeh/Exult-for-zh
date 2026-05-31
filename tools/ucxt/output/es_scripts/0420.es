#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func0420 object#(0x420) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0420_0108;
	UI_show_npc_face(0xFFE0, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A1])) goto labelFunc0420_0034;
	message("This toddler is full of energy and is playing hard when he sees you. He stops what he is doing.");
	say();
	gflags[0x00A1] = true;
	goto labelFunc0420_0038;
labelFunc0420_0034:
	message("\"Hi!\" Max grins at you.");
	say();
labelFunc0420_0038:
	converse attend labelFunc0420_0103;
	case "name" attend labelFunc0420_007C:
	message("\"Makth.\"");
	say();
	var0000 = Func08F7(0xFFDE);
	if (!var0000) goto labelFunc0420_0075;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"He says his name is Max.\"");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE0, 0x0000);
labelFunc0420_0075:
	UI_remove_answer("name");
labelFunc0420_007C:
	case "job" attend labelFunc0420_00B5:
	var0001 = UI_get_schedule_type(0xFFE0);
	if (!(var0001 == 0x0019)) goto labelFunc0420_00A4;
	message("\"Playing tag!\"");
	say();
	message("The boy runs away from you to catch another child.*");
	say();
	abort;
	goto labelFunc0420_00B5;
labelFunc0420_00A4:
	message("\"I'm a funny boy!\" Max laughs hysterically. \"Makth sing too!\"");
	say();
	UI_add_answer(["funny boy", "sing"]);
labelFunc0420_00B5:
	case "funny boy" attend labelFunc0420_00CF:
	message("\"Thou funny boy, -too-!\" Max laughs madly as he throws his pacifier at you. He points at it and says, \"Binky!\"");
	say();
	UI_add_answer("Binky");
	UI_remove_answer("funny boy");
labelFunc0420_00CF:
	case "Binky" attend labelFunc0420_00E2:
	message("Max nods furiously. \"Binky! Get Binky! Get Binky!\" ~~You realize that the boy wants you to pick it up. Apparently it is some kind of game that only toddlers understand. You pick it up and hand it to him. He immediately plugs it into his mouth.");
	say();
	UI_remove_answer("Binky");
labelFunc0420_00E2:
	case "sing" attend labelFunc0420_00F5:
	message("Max stands upright and bellows, \"Old Lord British had a farm, -e-i-e-i-o-! On this farm he had a drake, -e-i-e-i-o-! With a -roar- -roar- here, a -roar- -roar- there, here a -roar-, there a -roar-, everywhere a -roar- -roar-!    Old Lord British had a farm, -e-i-e-i-o-!\"");
	say();
	UI_remove_answer("sing");
labelFunc0420_00F5:
	case "bye" attend labelFunc0420_0100:
	goto labelFunc0420_0103;
labelFunc0420_0100:
	goto labelFunc0420_0038;
labelFunc0420_0103:
	endconv;
	message("\"Bye bye!\"*");
	say();
labelFunc0420_0108:
	if (!(event == 0x0000)) goto labelFunc0420_017F;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE0));
	if (!(var0001 == 0x0019)) goto labelFunc0420_017F;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc0420_0145;
	var0003 = "@Tag! Thou art it!@";
labelFunc0420_0145:
	if (!(var0002 == 0x0002)) goto labelFunc0420_0155;
	var0003 = "@Cannot catch me!@";
labelFunc0420_0155:
	if (!(var0002 == 0x0003)) goto labelFunc0420_0165;
	var0003 = "@Nyah nyah! Thou art it!@";
labelFunc0420_0165:
	if (!(var0002 == 0x0004)) goto labelFunc0420_0175;
	var0003 = "@Catch me if thou can!@";
labelFunc0420_0175:
	UI_item_say(0xFFE0, var0003);
labelFunc0420_017F:
	return;
}


