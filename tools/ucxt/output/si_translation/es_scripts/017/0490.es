#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0490 object#(0x490) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0490_0028;
	UI_item_say(0xFE9C, "@Hail there!@");
	Func097F(0xFF70, "@Aruk nok! Raag!@", 0x0003);
	UI_set_schedule_type(0xFF70, 0x0003);
labelFunc0490_0028:
	if (!(event == 0x0009)) goto labelFunc0490_0181;
	UI_run_schedule(0xFF70);
	UI_clear_item_say(0xFF70);
	UI_show_npc_face0(0xFF70, 0x0000);
	var0000 = Func0942(0xFF6F);
	var0001 = Func097D(0xFE9B, 0x0001, 0x03D1, 0xFE99, 0x0008);
	var0002 = Func097D(0xFE9B, 0x0001, 0x0002, 0xFE99, 0x0004);
	var0003 = UI_get_item_flag(item, 0x001C);
	if (!(var0001 || var0002)) goto labelFunc0490_00C6;
	message("\"Botoka na guta!\" *This creature looks at you with eyes so filled with hate that it is painful to look at them.");
	say();
	if (!var0000) goto labelFunc0490_00B3;
	UI_show_npc_face1(0xFF6F, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Umgabar fotuba na Gwani!\" *This one looks at you with eyes that are cold and feral.");
	say();
	UI_remove_npc_face1();
labelFunc0490_00B3:
	var0004 = Func0992(0xFFFD, "@Avatar, they smell the Gwani pelts!@", "@They smell the Gwani pelts!@", false);
	goto labelFunc0490_0181;
labelFunc0490_00C6:
	if (!var0003) goto labelFunc0490_00D3;
	message("\"Be good very much to meet again.\"");
	say();
	goto labelFunc0490_00D7;
labelFunc0490_00D3:
	message("\"Thou... the one... Gwenno spoke.\" ~You can tell the creature obviously has great trouble with your language.");
	say();
labelFunc0490_00D7:
	UI_add_answer(["name", "Gwani", "bye"]);
labelFunc0490_00E7:
	converse attend labelFunc0490_0180;
	case "name" attend labelFunc0490_0105:
	UI_remove_answer("name");
	message("\"Bwundai my name is.\"");
	say();
	UI_set_item_flag(item, 0x001C);
labelFunc0490_0105:
	case "Gwani" attend labelFunc0490_0118:
	UI_remove_answer("Gwani");
	message("\"Our village near. But, thou seek Gwenno...\" ~He pauses thoughtfully before speaking to you again. ~\"Gwani Death Temple on island north. West of Ice dragon caves.\"");
	say();
labelFunc0490_0118:
	case "bye" attend labelFunc0490_017D:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0014);
	UI_set_new_schedules(0xFF70, [0x0001, 0x0003, 0x0006], [0x000B, 0x0010, 0x000E], [0x03A4, 0x0368, 0x0431, 0x0348, 0x0427, 0x034D]);
	Func097F(0xFE9C, "@Farewell, little fellow.@", 0x0000);
	Func097F(0xFF70, "@Fare -- well@", 0x0003);
	abort;
labelFunc0490_017D:
	goto labelFunc0490_00E7;
labelFunc0490_0180:
	endconv;
labelFunc0490_0181:
	return;
}


