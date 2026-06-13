#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0665 object#(0x665) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0665_0075;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Zu@");
	if (!Func0951()) goto labelFunc0665_0059;
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0014, (byte)0x61, (byte)0x65, (byte)0x6F, (byte)0x67, (byte)0x6A, (byte)0x55, 0x0665]);
	goto labelFunc0665_0075;
labelFunc0665_0059:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x61, (byte)0x65, (byte)0x6F, (byte)0x67, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0665_0075:
	if (!(event == 0x0002)) goto labelFunc0665_00C6;
	var0001 = 0x0019;
	var0002 = UI_find_nearby(item, 0xFFFF, var0001, 0x0004);
	var0003 = UI_get_party_list();
	enum();
labelFunc0665_009C:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0665_00C6;
	if (!(!(var0006 in var0003))) goto labelFunc0665_00C3;
	UI_halt_scheduled(var0006);
	UI_set_item_flag(var0006, 0x0001);
labelFunc0665_00C3:
	goto labelFunc0665_009C;
labelFunc0665_00C6:
	return;
}


