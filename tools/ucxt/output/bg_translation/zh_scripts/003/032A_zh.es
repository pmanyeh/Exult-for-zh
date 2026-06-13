#game "blackgate"
// externs
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0944 0x944 (var var0000);
extern var Func0945 0x945 (var var0000);
extern var Func092D 0x92D (var var0000);
extern var Func093C 0x93C (var var0000, var var0001);

void Func032A shape#(0x32A) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;

	if (!(event == 0x0001)) goto labelFunc032A_00E4;
	UI_close_gumps();
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0006)) goto labelFunc032A_001F;
	return;
labelFunc032A_001F:
	if (!(!UI_get_container(item))) goto labelFunc032A_007B;
	var0001 = [0x0000, 0x0001, 0x0001, 0x0001, 0xFFFF, 0xFFFF, 0x0000, 0xFFFF];
	var0002 = [0x0001, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0xFFFF];
	Func0828(item, var0001, var0002, 0xFFFD, 0x032A, item, 0x0003);
	goto labelFunc032A_00E4;
labelFunc032A_007B:
	if (!(!Func0944(item))) goto labelFunc032A_00CB;
	UI_close_gumps();
	var0003 = Func0945(item);
	var0001 = [0x0000, 0x0001, 0xFFFF, 0x0001];
	var0002 = [0x0002, 0x0001, 0x0002, 0x0000];
	Func0828(var0003, var0001, var0002, 0xFFFD, 0x032A, item, 0x0003);
	goto labelFunc032A_00E4;
labelFunc032A_00CB:
	UI_close_gumps();
	var0004 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x032A]);
labelFunc032A_00E4:
	if (!(event == 0x0003)) goto labelFunc032A_0185;
	var0003 = Func0945(item);
	var0005 = Func092D(var0003);
	if (!UI_is_npc(var0003)) goto labelFunc032A_0147;
	var0004 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x64, (byte)0x27, 0x0003, (byte)0x61]);
	var0004 = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x0692, (byte)0x27, 0x0002, (byte)0x55, 0x032A]);
	goto labelFunc032A_0185;
labelFunc032A_0147:
	var0004 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var0004 = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x0692, (byte)0x27, 0x0002, (byte)0x55, 0x032A]);
labelFunc032A_0185:
	if (!(event == 0x0002)) goto labelFunc032A_05F3;
	var0000 = UI_get_item_frame(item);
	var0006 = UI_click_on_item();
	var0007 = UI_get_item_shape(var0006);
	if (!((var0007 == 0x02D1) || (var0007 == 0x03DD))) goto labelFunc032A_020D;
	if (!(var0000 == 0x0002)) goto labelFunc032A_01D3;
	UI_item_say(UI_get_npc_object(0xFE9C), "@不用了，謝謝。@");
	goto labelFunc032A_020C;
labelFunc032A_01D3:
	if (!(var0000 == 0x0000)) goto labelFunc032A_01EE;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
	goto labelFunc032A_020C;
labelFunc032A_01EE:
	UI_item_say(UI_get_npc_object(0xFE9C), "@啊，真清爽。@");
	var0004 = UI_execute_usecode_array(item, [(byte)0x46, 0x0000]);
labelFunc032A_020C:
	return;
labelFunc032A_020D:
	if (!UI_is_npc(var0006)) goto labelFunc032A_0288;
	var0001 = [0x0000, 0x0002, 0x0000, 0xFFFE];
	var0002 = [0x0002, 0x0000, 0xFFFE, 0x0000];
	if (!(var0000 == 0x0000)) goto labelFunc032A_0256;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
	goto labelFunc032A_0288;
labelFunc032A_0256:
	var0004 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x0001, (byte)0x0B, 0xFFFE, 0x0032]);
	Func0828(var0006, var0001, var0002, 0x0000, 0x032A, var0006, 0x0004);
labelFunc032A_0288:
	if (!(var0007 == 0x02E5)) goto labelFunc032A_02E4;
	var0001 = [0xFFFF, 0xFFFE, 0xFFFF, 0xFFFE, 0x0001, 0x0001, 0xFFFC, 0xFFFC];
	var0002 = [0x0001, 0x0001, 0xFFFE, 0xFFFE, 0x0000, 0xFFFF, 0x0000, 0xFFFF];
	Func0828(var0006, var0001, var0002, 0x0000, 0x032A, item, 0x0007);
labelFunc032A_02E4:
	if (!(var0007 == 0x02CF)) goto labelFunc032A_0340;
	var0001 = [0x0001, 0x0001, 0xFFFE, 0xFFFE, 0x0000, 0xFFFF, 0x0000, 0xFFFF];
	var0002 = [0xFFFF, 0xFFFE, 0xFFFF, 0xFFFE, 0x0001, 0x0001, 0xFFFC, 0xFFFC];
	Func0828(var0006, var0001, var0002, 0x0000, 0x032A, item, 0x0007);
labelFunc032A_0340:
	if (!(var0007 == 0x02E3)) goto labelFunc032A_03E9;
	if (!((UI_get_item_frame(var0006) >= 0x0004) && (UI_get_item_frame(var0006) <= 0x0007))) goto labelFunc032A_03E8;
	var0001 = [0xFFFF, 0xFFFE, 0x0001, 0x0001, 0xFFFF, 0xFFFE, 0xFFFC, 0xFFFC];
	var0002 = [0x0001, 0x0001, 0xFFFF, 0xFFFE, 0xFFFC, 0xFFFC, 0xFFFF, 0xFFFE];
	if (!(var0000 == 0x0000)) goto labelFunc032A_03B8;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
labelFunc032A_03B8:
	if (!(var0000 > 0x0001)) goto labelFunc032A_03C3;
	return;
labelFunc032A_03C3:
	if (!(var0000 == 0x0001)) goto labelFunc032A_03E5;
	Func0828(var0006, var0001, var0002, 0x0000, 0x032A, var0006, 0x0008);
labelFunc032A_03E5:
	goto labelFunc032A_03E9;
labelFunc032A_03E8:
	return;
labelFunc032A_03E9:
	if (!((var0007 == 0x0152) || ((var0007 == 0x01B3) || ((var0007 == 0x02BD) || ((var0007 == 0x0292) || (var0007 == 0x0339)))))) goto labelFunc032A_047C;
	var0001 = [0x0002, 0x0000, 0xFFFE, 0x0000];
	var0002 = [0x0000, 0x0002, 0x0000, 0xFFFE];
	if (!(var0000 == 0x0000)) goto labelFunc032A_044F;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
labelFunc032A_044F:
	if (!(var0000 > 0x0001)) goto labelFunc032A_045A;
	return;
labelFunc032A_045A:
	if (!(var0000 == 0x0001)) goto labelFunc032A_047C;
	Func0828(var0006, var0001, var0002, 0xFFFB, 0x032A, var0006, 0x0008);
labelFunc032A_047C:
	if (!(var0007 == 0x02E4)) goto labelFunc032A_04E5;
	if (!(var0000 == 0x0000)) goto labelFunc032A_04D7;
	var0008 = UI_find_nearest(var0006, 0x01D6, 0x0003);
	if (!var0008) goto labelFunc032A_04D4;
	var0001 = [0xFFFB, 0xFFFB];
	var0002 = [0xFFFF, 0xFFFF];
	Func0828(var0008, var0001, var0002, 0x0000, 0x032A, item, 0x0009);
labelFunc032A_04D4:
	goto labelFunc032A_04E5;
labelFunc032A_04D7:
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶滿了。@");
labelFunc032A_04E5:
	if (!(var0007 == 0x01D6)) goto labelFunc032A_0538;
	if (!(var0000 == 0x0000)) goto labelFunc032A_052A;
	var0001 = [0xFFFB, 0xFFFB];
	var0002 = [0xFFFF, 0xFFFF];
	Func0828(var0006, var0001, var0002, 0x0000, 0x032A, item, 0x0009);
	goto labelFunc032A_0538;
labelFunc032A_052A:
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶滿了。@");
labelFunc032A_0538:
	if (!(var0007 == 0x014B)) goto labelFunc032A_059A;
	if (!(var0000 == 0x0000)) goto labelFunc032A_055E;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
	return;
	goto labelFunc032A_059A;
labelFunc032A_055E:
	var0006 = Func093C(var0006[0x0001], var0006);
	var0006[0x0001] = var0006[0x0001];
	var0006[0x0002] = (var0006[0x0002] + 0x0001);
	var0009 = UI_path_run_usecode(var0006, 0x032A, item, 0x000A);
labelFunc032A_059A:
	if (!(var0006[0x0001] == 0x0000)) goto labelFunc032A_05F3;
	if (!(var0000 == 0x0000)) goto labelFunc032A_05C3;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水桶是空的。@");
	return;
	goto labelFunc032A_05F3;
labelFunc032A_05C3:
	var0006 = Func093C(var0006[0x0001], var0006);
	var0006[0x0002] = (var0006[0x0002] + 0x0001);
	var0009 = UI_path_run_usecode(var0006, 0x032A, item, 0x000A);
labelFunc032A_05F3:
	if (!(event == 0x0004)) goto labelFunc032A_06AF;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x032A, 0xFE99, 0xFE99);
	var0000 = UI_get_item_frame(var000A);
	var000B = Func092D(item);
	var000C = ((var000B + 0x0004) % 0x0008);
	if (!(var0000 == 0x0002)) goto labelFunc032A_065D;
	var000D = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0002, (byte)0x52, "@卑劣的惡棍！@", (byte)0x27, 0x0005]);
	goto labelFunc032A_067C;
labelFunc032A_065D:
	var000D = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0002, (byte)0x52, "@嘿，停下來！@", (byte)0x27, 0x0005]);
labelFunc032A_067C:
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var000B, (byte)0x67, (byte)0x64, (byte)0x61]);
	var000F = UI_execute_usecode_array(var000A, [(byte)0x27, 0x0002, (byte)0x46, 0x0000]);
labelFunc032A_06AF:
	if (!(event == 0x0007)) goto labelFunc032A_07DD;
	var0010 = false;
	var0010 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x02E5, 0x0005);
	if (!(!var0010)) goto labelFunc032A_06EA;
	var0010 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x02CF, 0x0005);
labelFunc032A_06EA:
	if (!var0010) goto labelFunc032A_07DD;
	var0000 = UI_get_item_frame(item);
	var0011 = UI_get_item_frame(var0010);
	if (!(var0000 > 0x0001)) goto labelFunc032A_070D;
	return;
labelFunc032A_070D:
	if (!(var0000 == 0x0001)) goto labelFunc032A_074E;
	if (!((var0011 == 0x0003) || (var0011 == 0x0007))) goto labelFunc032A_073B;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水槽滿了。@");
	return;
	goto labelFunc032A_074B;
labelFunc032A_073B:
	var0012 = (var0011 + 0x0001);
	var0013 = 0x0000;
labelFunc032A_074B:
	goto labelFunc032A_0782;
labelFunc032A_074E:
	if (!((var0011 == 0x0000) || (var0011 == 0x0004))) goto labelFunc032A_0772;
	UI_item_say(UI_get_npc_object(0xFE9C), "@這水槽是空的。@");
	return;
	goto labelFunc032A_0782;
labelFunc032A_0772:
	var0012 = (var0011 - 0x0001);
	var0013 = 0x0001;
labelFunc032A_0782:
	var0005 = Func092D(var0010);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var0014 = UI_execute_usecode_array(var0010, [(byte)0x27, 0x0002, (byte)0x46, var0012, (byte)0x01, (byte)0x58, 0x0028]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x46, var0013]);
labelFunc032A_07DD:
	if (!(event == 0x0008)) goto labelFunc032A_0B93;
	var000A = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x032A, 0xFE99, 0x0001);
	var0000 = UI_get_item_frame(var000A);
	var0007 = UI_get_item_shape(item);
	var0015 = UI_get_item_frame(item);
	if (!(var0007 == 0x02E3)) goto labelFunc032A_08C2;
	if (!(var0015 == 0x0004)) goto labelFunc032A_083C;
	UI_item_say(UI_get_npc_object(0xFE9C), "@只有煤炭。@");
	return;
	goto labelFunc032A_08C2;
labelFunc032A_083C:
	if (!(var0015 == 0x0007)) goto labelFunc032A_085E;
	var0016 = UI_execute_usecode_array(item, [(byte)0x55, 0x0693, (byte)0x01, (byte)0x50, (byte)0x50, (byte)0x50]);
labelFunc032A_085E:
	if (!(var0015 == 0x0006)) goto labelFunc032A_087E;
	var0016 = UI_execute_usecode_array(item, [(byte)0x55, 0x0693, (byte)0x01, (byte)0x50, (byte)0x50]);
labelFunc032A_087E:
	if (!(var0015 == 0x0005)) goto labelFunc032A_089C;
	var0016 = UI_execute_usecode_array(item, [(byte)0x55, 0x0693, (byte)0x01, (byte)0x50]);
labelFunc032A_089C:
	var0005 = Func092D(item);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
labelFunc032A_08C2:
	if (!((var0007 == 0x0152) || ((var0007 == 0x01B3) || (var0007 == 0x02BD)))) goto labelFunc032A_0AC7;
	var0017 = UI_get_object_position(item);
	if (!(var0015 == 0x0010)) goto labelFunc032A_0924;
	var0018 = 0x0002;
	var0005 = Func092D(item);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x67, (byte)0x64, (byte)0x61, (byte)0x27, 0x0001, (byte)0x52, "@我無法撲滅它。@"]);
	goto labelFunc032A_09B5;
labelFunc032A_0924:
	var0018 = 0x0003;
	var0019 = UI_get_item_quality(item);
	if (!(var0007 == 0x0152)) goto labelFunc032A_0942;
	var001A = 0x0150;
labelFunc032A_0942:
	if (!(var0007 == 0x01B3)) goto labelFunc032A_0952;
	var001A = 0x01E1;
labelFunc032A_0952:
	if (!(var0007 == 0x02BD)) goto labelFunc032A_0962;
	var001A = 0x0253;
labelFunc032A_0962:
	UI_remove_item(item);
	var001B = UI_create_new_object(var001A);
	var0004 = UI_set_item_quality(var001B, var0019);
	UI_set_item_frame(var001B, var0015);
	var001C = UI_update_last_created(var0017);
	var0005 = Func092D(item);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x67, (byte)0x64, (byte)0x61]);
labelFunc032A_09B5:
	if (!((var0017[0x0003] == 0x0002) || (var0017[0x0003] == 0x0003))) goto labelFunc032A_09D7;
	var0018 = (var0018 + 0x0001);
labelFunc032A_09D7:
	if (!((var0017[0x0003] == 0x0004) || (var0017[0x0003] == 0x0005))) goto labelFunc032A_09F9;
	var0018 = (var0018 + 0x0002);
labelFunc032A_09F9:
	if (!((var0017[0x0003] == 0x0006) || (var0017[0x0003] == 0x0007))) goto labelFunc032A_0A1B;
	var0018 = (var0018 + 0x0003);
labelFunc032A_0A1B:
	if (!((var0017[0x0003] == 0x0008) || (var0017[0x0003] == 0x0009))) goto labelFunc032A_0A3D;
	var0018 = (var0018 + 0x0004);
labelFunc032A_0A3D:
	if (!((var0017[0x0003] == 0x000A) || (var0017[0x0003] == 0x000B))) goto labelFunc032A_0A5F;
	var0018 = (var0018 + 0x0005);
labelFunc032A_0A5F:
	if (!((var0017[0x0003] == 0x000C) || (var0017[0x0003] == 0x000D))) goto labelFunc032A_0A81;
	var0018 = (var0018 + 0x0006);
labelFunc032A_0A81:
	var001D[0x0001] = (var0017[0x0001] - var0018);
	var001D[0x0002] = (var0017[0x0002] - var0018);
	UI_sprite_effect(0x0009, var001D[0x0001], var001D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002E);
labelFunc032A_0AC7:
	if (!(var0007 == 0x0339)) goto labelFunc032A_0B51;
	if (!(var0015 == 0x0000)) goto labelFunc032A_0AED;
	UI_item_say(UI_get_npc_object(0xFE9C), "@只有煤炭。@");
	return;
	goto labelFunc032A_0B51;
labelFunc032A_0AED:
	var001E = UI_execute_usecode_array(item, [(byte)0x46, 0x0000]);
	var0005 = Func092D(item);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var001F = UI_get_object_position(item);
	UI_sprite_effect(0x0009, var001F[0x0001], var001F[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002E);
labelFunc032A_0B51:
	if (!(var0007 == 0x0292)) goto labelFunc032A_0B93;
	if (!(var0015 == 0x0000)) goto labelFunc032A_0B93;
	var0005 = Func092D(item);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, var0005, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	UI_set_item_frame(item, 0x0002);
labelFunc032A_0B93:
	if (!(event == 0x0009)) goto labelFunc032A_0C7B;
	var0020 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x02E4, 0x000A);
	var0021 = UI_get_item_frame(var0020);
	if (!((var0021 >= 0x0000) && (var0021 <= 0x000B))) goto labelFunc032A_0BD1;
	var0021 = 0x0001;
labelFunc032A_0BD1:
	if (!((var0021 >= 0x000C) && (var0021 <= 0x0017))) goto labelFunc032A_0BE9;
	var0021 = 0x000D;
labelFunc032A_0BE9:
	var0022 = UI_execute_usecode_array(var0020, [(byte)0x27, 0x0001, (byte)0x46, var0021, (byte)0x27, 0x0002, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E]);
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, 0x0002, (byte)0x67, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x65, (byte)0x27, 0x0001, (byte)0x66, (byte)0x27, 0x0001, (byte)0x64, (byte)0x27, 0x0001, (byte)0x67, (byte)0x27, 0x0004]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0011, (byte)0x55, 0x0695]);
labelFunc032A_0C7B:
	if (!(event == 0x000A)) goto labelFunc032A_0CB7;
	var000E = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x59, 0x0000, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x61]);
	var000F = UI_execute_usecode_array(item, [(byte)0x27, 0x0003, (byte)0x55, 0x0694]);
labelFunc032A_0CB7:
	return;
}


