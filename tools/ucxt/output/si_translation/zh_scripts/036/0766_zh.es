#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func09A6 0x9A6 (var var0000);

void Func0766 object#(0x766) ()
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

	if (!(event == 0x0002)) goto labelFunc0766_0013;
	UI_clear_item_flag(0xFE9C, 0x0010);
	abort;
labelFunc0766_0013:
	if (!(event == 0x0003)) goto labelFunc0766_020A;
	var0000 = UI_get_party_list2();
	var0001 = UI_get_npc_object(0xFE9C);
	var0002 = false;
	enum();
labelFunc0766_0031:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0766_00C1;
	if (!(var0005 != var0001)) goto labelFunc0766_00BE;
	var0002 = true;
	var0006 = ["@I'm not going in there!@", "@I shall wait here...@", "@Thou must continue alone, Avatar.@", "@Good luck, Avatar!@", "@I will stay here, Avatar.@", "@Be brave, Avatar!@"];
	Func097F(var0005[UI_get_random(UI_get_array_size(var0005))], var0006[UI_get_random(UI_get_array_size(var0006))], 0x0002);
	UI_remove_from_party(var0005);
	UI_set_npc_id(var0005, 0x001F);
	var0007 = UI_get_object_position(var0005);
	UI_set_schedule_type(var0005, 0x001D);
	Func09AC(var0005, var0007[0x0001], var0007[0x0002], 0x001D);
labelFunc0766_00BE:
	goto labelFunc0766_0031;
labelFunc0766_00C1:
	if (!var0002) goto labelFunc0766_00E8;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0766], 0x0032);
labelFunc0766_00E8:
	var0009 = false;
	var000A = UI_find_nearby(item, 0x0129, 0x0032, 0x0000);
	if (!(var000A != 0x0000)) goto labelFunc0766_011F;
	enum();
labelFunc0766_0108:
	for (var000D in var000A with var000B to var000C) attend labelFunc0766_011C;
	var0009 = var000D;
	goto labelFunc0766_0108;
labelFunc0766_011C:
	goto labelFunc0766_0156;
labelFunc0766_011F:
	var000E = UI_create_new_object(0x0320);
	UI_clear_item_flag(var000E, 0x0012);
	UI_set_item_frame(var000E, 0x0004);
	var0008 = UI_update_last_created([0x0A0B, 0x0AB4, 0x0000]);
	var0009 = var000E;
labelFunc0766_0156:
	if (!var0009) goto labelFunc0766_020A;
	UI_clear_item_flag(0xFE9C, 0x0000);
	var000F = 0x0000;
	var000A = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc0766_017F:
	if (!(var000F < 0x0002)) goto labelFunc0766_020A;
	enum();
labelFunc0766_018A:
	for (var000D in var000A with var0010 to var0011) attend labelFunc0766_01EA;
	if (!(Func09A6(var000D) || (var000F == 0x0001))) goto labelFunc0766_01E7;
	var0008 = UI_get_item_shape(var000D);
	if (!(!((var0008 == 0x01E6) || (var0008 == 0x025F)))) goto labelFunc0766_01E7;
	if (!(!UI_set_last_created(var000D))) goto labelFunc0766_01D5;
	UI_error_message("Tell Team Error 1");
labelFunc0766_01D5:
	if (!(!UI_give_last_created(var0009))) goto labelFunc0766_01E7;
	UI_error_message("Tell Team Error 2");
labelFunc0766_01E7:
	goto labelFunc0766_018A;
labelFunc0766_01EA:
	var000F = (var000F + 0x0001);
	var000A = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc0766_017F;
labelFunc0766_020A:
	return;
}


