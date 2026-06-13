#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0491 object#(0x491) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0491_0028;
	UI_item_say(0xFE9C, "@Hail there!@");
	Func097F(0xFF6F, "@Gruk! Barama tu!@", 0x0003);
	UI_set_schedule_type(0xFF6F, 0x0003);
labelFunc0491_0028:
	if (!(event == 0x0009)) goto labelFunc0491_01B2;
	UI_run_schedule(0xFF6F);
	UI_clear_item_say(0xFF6F);
	UI_show_npc_face0(0xFF6F, 0x0000);
	var0000 = Func0942(0xFF70);
	var0001 = UI_get_item_flag(0xFFFD, 0x0006);
	var0002 = UI_get_item_flag(0xFFFE, 0x0006);
	var0003 = UI_get_item_flag(0xFFFF, 0x0006);
	var0004 = Func097D(0xFE9B, 0x0001, 0x00E3, 0xFE99, 0x0008);
	var0005 = Func097D(0xFE9B, 0x0001, 0x0002, 0xFE99, 0x0004);
	if (!(var0004 || var0005)) goto labelFunc0491_0146;
	message("\"Rrrow! Meteka Gwani adu laseka!\" This creature looks at you with angry eyes.");
	say();
	if (!var0000) goto labelFunc0491_00CF;
	UI_show_npc_face1(0xFF70, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Soko terama dok!\" This one gives you a mean look and spits.");
	say();
	UI_remove_npc_face1();
labelFunc0491_00CF:
	if (!var0001) goto labelFunc0491_00F2;
	UI_show_npc_face1(0xFFFD, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Avatar, 'tis the pelts! They can smell that we have Gwani pelts on us! I suggest we throw them away!\"");
	say();
	UI_remove_npc_face1();
	abort;
	goto labelFunc0491_0143;
labelFunc0491_00F2:
	if (!var0002) goto labelFunc0491_0115;
	UI_show_npc_face1(0xFFFE, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Avatar, 'tis the pelts! They can smell that we have Gwani pelts on us! I suggest we throw them away!\"");
	say();
	UI_remove_npc_face1();
	abort;
	goto labelFunc0491_0143;
labelFunc0491_0115:
	if (!var0003) goto labelFunc0491_0138;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Avatar, 'tis the pelts! They can smell we have Gwani pelts on us! I suggest that we throw them away!\"");
	say();
	UI_remove_npc_face1();
	abort;
	goto labelFunc0491_0143;
labelFunc0491_0138:
	UI_item_say(0xFE9C, "@I have Gwani pelts!@");
	abort;
labelFunc0491_0143:
	goto labelFunc0491_01B2;
labelFunc0491_0146:
	message("\"Thou look like Avatar,\" the Gwani creature says with broken speech.");
	say();
	UI_add_answer(["name", "Gwani", "bye"]);
labelFunc0491_015A:
	converse attend labelFunc0491_01B1;
	case "name" attend labelFunc0491_0170:
	UI_remove_answer("name");
	message("\"Mwaerno. Means 'rain clouds'.\"");
	say();
labelFunc0491_0170:
	case "Gwani" attend labelFunc0491_0183:
	UI_remove_answer("Gwani");
	message("\"Our village near. Speak to Yenani.\"");
	say();
labelFunc0491_0183:
	case "bye" attend labelFunc0491_01AE:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFF6F, "@Atala dak!@", 0x0003);
	goto labelFunc0491_01B1;
labelFunc0491_01AE:
	goto labelFunc0491_015A;
labelFunc0491_01B1:
	endconv;
labelFunc0491_01B2:
	return;
}


