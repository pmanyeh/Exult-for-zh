#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func083B 0x83B (var var0000);
extern var Func0994 0x994 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func036A shape#(0x36A) ()
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

	if (!(event == 0x0007)) goto labelFunc036A_0046;
	var0000 = UI_die_roll(0x0001, 0x0002);
	UI_clear_item_say(item);
	if (!(var0000 == 0x0001)) goto labelFunc036A_002C;
	UI_item_say(item, "@Yipe, yipe, yipe!@");
labelFunc036A_002C:
	if (!(var0000 == 0x0002)) goto labelFunc036A_003E;
	UI_item_say(item, "@Aoaaoouuu!@");
labelFunc036A_003E:
	UI_set_attack_mode(item, 0x0007);
labelFunc036A_0046:
	if (!(event == 0x0001)) goto labelFunc036A_007D;
	UI_item_say(0xFE9C, "@Come here, boy!@");
	0xFEF3->Func07D1();
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Woof!@"], 0x0002);
	UI_set_schedule_type(0xFEF3, 0x0003);
labelFunc036A_007D:
	if (!(event == 0x0002)) goto labelFunc036A_02E8;
	if (!(item == Func09A0(0x0005, 0x0001))) goto labelFunc036A_00B7;
	var0002 = UI_find_nearby(0xFE9C, 0x036A, 0x0028, 0x0000);
	if (!var0002) goto labelFunc036A_00B6;
	UI_set_schedule_type(var0002, 0x0009);
labelFunc036A_00B6:
	abort;
labelFunc036A_00B7:
	var0003 = UI_click_on_item();
	var0004 = UI_get_item_shape(var0003);
	var0005 = UI_get_item_frame(var0003);
	var0006 = UI_get_item_quality(var0003);
	UI_play_music(0x0012, Func09A0(0x0005, 0x0001));
	if (!((var0004 == 0x03BB) && ((var0005 == 0x0005) && (gflags[0x01B1] && (!gflags[0x0212]))))) goto labelFunc036A_0116;
	Func083B([0x0619, 0x05B9, 0x0000]);
labelFunc036A_0116:
	if (!((var0004 == 0x0208) && (gflags[0x005B] && (!gflags[0x02E2])))) goto labelFunc036A_0158;
	gflags[0x0000] = true;
	if (!(Func0994() == 0x0010)) goto labelFunc036A_0149;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_0158;
labelFunc036A_0149:
	Func083B([0x0762, 0x03E7, 0x0000]);
labelFunc036A_0158:
	if (!((var0004 == 0x03BB) && ((var0005 == 0x0004) && (gflags[0x02E2] && (!gflags[0x0004]))))) goto labelFunc036A_01A2;
	gflags[0x025D] = true;
	if (!(Func0994() == 0x0018)) goto labelFunc036A_0193;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_01A2;
labelFunc036A_0193:
	Func083B([0x0768, 0x02E3, 0x0000]);
labelFunc036A_01A2:
	if (!((var0004 == 0x03BB) && ((var0005 == 0x0008) && (gflags[0x0004] && (!gflags[0x00D5]))))) goto labelFunc036A_01E8;
	if (!(Func0994() == 0x0000)) goto labelFunc036A_01D9;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_01E8;
labelFunc036A_01D9:
	Func083B([0x0709, 0x05B2, 0x0000]);
labelFunc036A_01E8:
	if (!((var0004 == 0x02B4) && ((var0005 == 0x0002) && (gflags[0x0004] && (!gflags[0x00D5]))))) goto labelFunc036A_022E;
	if (!(Func0994() == 0x0000)) goto labelFunc036A_021F;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_022E;
labelFunc036A_021F:
	Func083B([0x0709, 0x05B2, 0x0000]);
labelFunc036A_022E:
	if (!((var0004 == 0x01EA) && (gflags[0x0004] && (!gflags[0x00D3])))) goto labelFunc036A_026C;
	if (!(Func0994() == 0x0000)) goto labelFunc036A_025D;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_026C;
labelFunc036A_025D:
	Func083B([0x0709, 0x05B2, 0x0000]);
labelFunc036A_026C:
	if (!((var0004 == 0x0282) && ((var0006 == 0x003E) && (gflags[0x0004] && (!gflags[0x00D4]))))) goto labelFunc036A_02B2;
	if (!(Func0994() == 0x0000)) goto labelFunc036A_02A3;
	Func083B([0xFFFF, 0x0000, 0x0000]);
	goto labelFunc036A_02B2;
labelFunc036A_02A3:
	Func083B([0x0709, 0x05B2, 0x0000]);
labelFunc036A_02B2:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Woof woof?@"]);
	var0007 = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_clear_item_say(var0007);
	Func097F(var0007, "@The hound looks confused.@", 0x0004);
	abort;
labelFunc036A_02E8:
	if (!(event == 0x0009)) goto labelFunc036A_0432;
	UI_set_schedule_type(0xFEF3, 0x0009);
	UI_show_npc_face0(0xFEE9, 0x0000);
	message("\"Woof!\"");
	say();
	UI_add_answer(["trick", "track", "attack", "bye"]);
labelFunc036A_031B:
	converse attend labelFunc036A_0431;
	case "track" attend labelFunc036A_0339:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x036A]);
	abort;
labelFunc036A_0339:
	case "trick" attend labelFunc036A_035C:
	UI_set_schedule_type(item, 0x0004);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Ruff ruff ruff!@"]);
	abort;
labelFunc036A_035C:
	case "attack" attend labelFunc036A_040F:
	var0003 = UI_click_on_item();
	if (!((!var0003) || ((UI_get_alignment(var0003) == 0x0001) || (!UI_is_npc(var0003))))) goto labelFunc036A_038E;
	message("\"Woof?\"");
	say();
	goto labelFunc036A_040F;
labelFunc036A_038E:
	if (!(UI_get_alignment(var0003) == 0x0000)) goto labelFunc036A_03B9;
	message("\"Woof.\"");
	say();
	UI_set_schedule_type(item, 0x0000);
	UI_set_opponent(item, var0003);
	UI_set_oppressor(item, var0003);
	abort;
labelFunc036A_03B9:
	if (!(UI_get_alignment(var0003) == 0x0003)) goto labelFunc036A_03E4;
	message("\"Woof!\"");
	say();
	UI_set_schedule_type(item, 0x0000);
	UI_set_opponent(item, var0003);
	UI_set_oppressor(item, var0003);
	abort;
labelFunc036A_03E4:
	if (!(UI_get_alignment(var0003) == 0x0002)) goto labelFunc036A_040F;
	message("\"Woof!!\"");
	say();
	UI_set_schedule_type(item, 0x0000);
	UI_set_opponent(item, var0003);
	UI_set_oppressor(item, var0003);
	abort;
labelFunc036A_040F:
	case "bye" attend labelFunc036A_042E:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Woof! Woof!@"]);
	UI_remove_npc_face0();
	abort;
labelFunc036A_042E:
	goto labelFunc036A_031B;
labelFunc036A_0431:
	endconv;
labelFunc036A_0432:
	if (!(event == 0x000D)) goto labelFunc036A_0454;
	UI_set_schedule_type(item, 0x0009);
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Ruff!@"]);
labelFunc036A_0454:
	if (!(event == 0x000E)) goto labelFunc036A_0464;
	UI_set_schedule_type(item, 0x0009);
labelFunc036A_0464:
	if (!(event == 0x0000)) goto labelFunc036A_04A1;
	var0008 = UI_die_roll(0x0001, 0x0002);
	if (!(var0008 == 0x0001)) goto labelFunc036A_048D;
	UI_item_say(0xFEF3, "@Woof!@");
labelFunc036A_048D:
	if (!(var0008 == 0x0002)) goto labelFunc036A_04A1;
	UI_item_say(0xFEF3, "@Bark!@");
labelFunc036A_04A1:
	return;
}


