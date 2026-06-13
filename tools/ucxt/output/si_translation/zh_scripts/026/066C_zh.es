#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();

void Func066C object#(0x66C) ()
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

	if (!(event == 0x0001)) goto labelFunc066C_01A6;
	var0000 = UI_click_on_item();
	UI_halt_scheduled(item);
	var0001 = Func0979(var0000);
	UI_item_say(item, "@Kal Frio Grav@");
	if (!Func0951()) goto labelFunc066C_0189;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x58, 0x0014, (byte)0x66, (byte)0x67, (byte)0x65]);
	var0003 = [0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF, 0xFFFE, 0xFFFE, 0xFFFE];
	var0004 = [0xFFFE, 0xFFFE, 0xFFFE, 0xFFFF, 0x0000, 0x0001, 0x0002, 0x0002, 0x0002, 0x0001, 0x0000, 0xFFFF];
	var0005 = 0x0000;
labelFunc066C_00A2:
	if (!(var0005 < 0x000C)) goto labelFunc066C_0186;
	var0005 = (var0005 + 0x0001);
	var0006 = (var0000[0x0002] + var0003[var0005]);
	var0007 = (var0000[0x0003] + var0004[var0005]);
	var0008 = var0000[0x0004];
	var0009 = [var0006, var0007, var0008];
	var000A = [var0006, var0007, (var0008 + 0x0001)];
	if (!(!UI_is_not_blocked(var0009, 0x026D, 0x0000))) goto labelFunc066C_0118;
	var0009 = var000A;
labelFunc066C_0118:
	if (!UI_is_not_blocked(var0009, 0x026D, 0x0000)) goto labelFunc066C_0183;
	var000B = UI_create_new_object(0x026D);
	if (!var000B) goto labelFunc066C_0183;
	UI_set_item_flag(var000B, 0x0012);
	UI_set_item_flag(var000B, 0x0000);
	var0002 = UI_update_last_created(var0009);
	if (!var0002) goto labelFunc066C_0183;
	var0002 = UI_set_npc_prop(var000B, 0x0003, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x55, 0x066C], var0005);
labelFunc066C_0183:
	goto labelFunc066C_00A2;
labelFunc066C_0186:
	goto labelFunc066C_01A6;
labelFunc066C_0189:
	var000C = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0001, (byte)0x66, (byte)0x67, (byte)0x65, (byte)0x55, 0x0606]);
labelFunc066C_01A6:
	if (!(event == 0x0002)) goto labelFunc066C_0223;
	var0009 = UI_get_object_position(item);
	var0002 = UI_set_last_created(item);
	if (!var0002) goto labelFunc066C_01CE;
	var0002 = UI_update_last_created(0xFE9A);
labelFunc066C_01CE:
	var000B = UI_create_new_object(0x0231);
	if (!var000B) goto labelFunc066C_0223;
	UI_set_item_flag(var000B, 0x0012);
	var0002 = UI_update_last_created(var0009);
	if (!var0002) goto labelFunc066C_0223;
	var000D = 0x001E;
	var000D = (var000D + UI_die_roll(0x0001, 0x0005));
	var0002 = UI_delayed_execute_usecode_array(var000B, [(byte)0x23, (byte)0x2D], var000D);
labelFunc066C_0223:
	return;
}


