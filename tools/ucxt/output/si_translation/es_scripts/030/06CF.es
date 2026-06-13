#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06CF object#(0x6CF) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc06CF_0029;
	UI_item_say(0xFED9, "@Help me...@");
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06CF], 0x000A);
labelFunc06CF_0029:
	if (!(event == 0x0002)) goto labelFunc06CF_00C1;
	UI_show_npc_face0(0xFEDF, 0x0000);
	message("\"Oh, the pain... The end is near...\"");
	say();
	UI_add_answer(["Who art thou?", "What happened?"]);
labelFunc06CF_004C:
	converse attend labelFunc06CF_00C0;
	case "Who art thou?" attend labelFunc06CF_0062:
	message("\"Me name's Fitch. Me and me mates were trappers for Hazard.\"");
	say();
	UI_remove_answer("Who art thou?");
labelFunc06CF_0062:
	case "What happened?" attend labelFunc06CF_0080:
	message("\"Several days ago we were camped in a nearby cave when we were attacked by a terrible sorceress.\"");
	say();
	message("Evil she was, striking men dead before we knew what was upon us. We slew her, though she took many men with her even as she fell. Only I survived, though I fear not for long.\"");
	say();
	UI_remove_answer("What happened?");
	UI_add_answer("Rest easy.");
labelFunc06CF_0080:
	case "Rest easy." attend labelFunc06CF_00BD:
	message("\"I am glad thou didst find me. I'd have hated to have died out here alone...\"");
	say();
	Func097F(0xFED9, "@The pain!@", 0x0000);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	var0000 = UI_delayed_execute_usecode_array(0xFED9, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x0005);
	goto labelFunc06CF_00C0;
labelFunc06CF_00BD:
	goto labelFunc06CF_004C;
labelFunc06CF_00C0:
	endconv;
labelFunc06CF_00C1:
	return;
}


