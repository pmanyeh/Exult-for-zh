#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0673 object#(0x673) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0673_00B7;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Vas Por@");
	if (!Func0951()) goto labelFunc0673_009D;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x58, 0x0040, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0673]);
	UI_obj_sprite_effect(item, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_get_party_list();
	enum();
labelFunc0673_005C:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0673_009A;
	var0005 = UI_get_distance(item, var0004);
	var0005 = ((var0005 / 0x0003) + 0x0005);
	var0000 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x0673], var0005);
	goto labelFunc0673_005C;
labelFunc0673_009A:
	goto labelFunc0673_00B7;
labelFunc0673_009D:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0673_00B7:
	if (!(event == 0x0002)) goto labelFunc0673_00C7;
	UI_set_item_flag(item, 0x000C);
labelFunc0673_00C7:
	return;
}


