#game "serpentisle"
void Func0612 object#(0x612) ()
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

	if (!(event == 0x0002)) goto labelFunc0612_0257;
	var0000 = [0x03B1, 0x03F7, 0x03B2, 0x03B3, 0x03CF, 0x03BD, 0x03D2];
	var0001 = [0x001E, 0x000C, 0x0008, 0x0018, 0x001E, 0x0017, 0x001E];
	var0002 = [0x001E, 0x000F, 0x000C, 0x0010, 0x001E, 0x001E, 0x0014];
	var0003 = [0x0014, 0x0019, 0x001C, 0x000A, 0x001E, 0x000D, 0x001E];
	var0004 = [0x001E, 0x000D, 0x000B, 0x0012, 0x001E, 0x0012, 0x001E];
	var0005 = [0x001E, 0x000C, 0x0008, 0x0018, 0x0032, 0x0017, 0x001E];
	var0006 = [0x0A79, 0x0A25, 0x0AB0, 0x0AB0, 0x0BE0, 0x09C6, 0x0120];
	var0007 = [0x0ACC, 0x0BA9, 0x0AE9, 0x0BDE, 0x0B4B, 0x0A45, 0x0BD0];
	var0008 = [0x0010, 0x0015, 0x000B, 0x000B, 0x0004, 0x001D, 0x000A];
	var0009 = 0x0000;
	enum();
labelFunc0612_0102:
	for (var000C in var0000 with var000A to var000B) attend labelFunc0612_0257;
	var0009 = (var0009 + 0x0001);
	var000D = UI_create_new_object2(var000C, [var0006[var0009], var0007[var0009], 0x0000]);
	if (!var000D) goto labelFunc0612_024D;
	UI_clear_item_flag(var000D, 0x0012);
	UI_set_alignment(var000D, 0x0000);
	UI_set_schedule_type(var000D, var0008[var0009]);
	UI_set_npc_id(var000D, 0x0000);
	var000E = UI_get_npc_prop(var000D, 0x0000);
	var000F = (var0001[var0009] - var000E);
	var0010 = UI_set_npc_prop(var000D, 0x0000, var000F);
	var000E = UI_get_npc_prop(var000D, 0x0001);
	var000F = (var0002[var0009] - var000E);
	var0010 = UI_set_npc_prop(var000D, 0x0001, var000F);
	var000E = UI_get_npc_prop(var000D, 0x0002);
	var000F = (var0003[var0009] - var000E);
	var0010 = UI_set_npc_prop(var000D, 0x0002, var000F);
	var000E = UI_get_npc_prop(var000D, 0x0004);
	var000F = (var0004[var0009] - var000E);
	var0010 = UI_set_npc_prop(var000D, 0x0004, var000F);
	var000E = UI_get_npc_prop(var000D, 0x0003);
	var000F = (var0005[var0009] - var000E);
	var0010 = UI_set_npc_prop(var000D, 0x0003, var000F);
	if (!(var000C == 0x03B1)) goto labelFunc0612_024A;
	UI_set_item_flag(var000D, 0x001D);
labelFunc0612_024A:
	goto labelFunc0612_0254;
labelFunc0612_024D:
	UI_error_message("Error! Silver Seed Installation.");
labelFunc0612_0254:
	goto labelFunc0612_0102;
labelFunc0612_0257:
	return;
}


