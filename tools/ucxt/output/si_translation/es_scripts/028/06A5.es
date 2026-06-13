#game "serpentisle"
// externs
extern void Func0998 0x998 (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06A5 object#(0x6A5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0003) && (!gflags[0x021C]))) goto labelFunc06A5_011E;
	var0000 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0000) goto labelFunc06A5_004F;
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x0178]);
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x46, 0x000E], 0x0002);
labelFunc06A5_004F:
	var0002 = UI_find_nearby(item, 0x0331, 0x000A, 0x0000);
	var0003 = UI_find_nearby(item, 0x0314, 0x0014, 0x0000);
	if (!var0002) goto labelFunc06A5_0080;
	Func0998(var0002, 0x037F);
labelFunc06A5_0080:
	if (!var0003) goto labelFunc06A5_008F;
	Func0998(var0003, 0x037F);
labelFunc06A5_008F:
	if (!var0002) goto labelFunc06A5_011E;
	UI_set_npc_id(var0002, 0x0000);
	var0001 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x06A6], 0x0005);
	var0001 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x06A6], 0x0014);
	var0001 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x06A6], 0x002D);
	var0001 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x06A6], 0x003C);
	var0004 = Func09A0(0x0000, 0x0001);
	var0001 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x07D9], 0x005A);
labelFunc06A5_011E:
	return;
}


