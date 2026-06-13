#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0925 0x925 ();
extern void Func0926 0x926 (var var0000);
extern void Func0928 0x928 (var var0000);
extern void Func07FA object#(0x7FA) ();

void Func0815 0x815 (var var0000)
{
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

	if (!(var0000 == 0x0001)) goto labelFunc0815_00A0;
	var0001 = UI_find_nearby(item, 0x0331, 0x0014, 0x0000);
	UI_halt_scheduled(var0001);
	UI_clear_item_say(var0001);
	var0002 = UI_find_nearby(item, 0x037F, 0x001E, 0x0000);
	enum();
labelFunc0815_003B:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0815_005A;
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x2D]);
	goto labelFunc0815_003B;
labelFunc0815_005A:
	gflags[0x021C] = true;
	if (!var0001) goto labelFunc0815_009F;
	var0007 = UI_get_object_position(item);
	UI_si_path_run_usecode(0xFF69, var0007, 0x0007, item, 0x0314, false);
	var0006 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Thou art truly ethical!@"], 0x000A);
	UI_set_npc_id(0xFF69, 0x0005);
labelFunc0815_009F:
	abort;
labelFunc0815_00A0:
	if (!(var0000 == 0x0002)) goto labelFunc0815_0142;
	var0008 = false;
	var0009 = [0x03B4, 0x03B8, 0x03B7, 0x0284, 0x0285, 0x0286];
	enum();
labelFunc0815_00C7:
	for (var000C in var0009 with var000A to var000B) attend labelFunc0815_00EE;
	if (!Func097D(0xFE9C, 0x0001, var000C, 0xFE99, 0xFE99)) goto labelFunc0815_00EB;
	var0008 = true;
labelFunc0815_00EB:
	goto labelFunc0815_00C7;
labelFunc0815_00EE:
	if (!(var0008 == false)) goto labelFunc0815_00FA;
	gflags[0x021D] = true;
labelFunc0815_00FA:
	var0006 = UI_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DA]);
	var000D = UI_find_nearby(item, 0x00C8, 0x00A0, 0x0010);
	enum();
labelFunc0815_011E:
	for (var0010 in var000D with var000E to var000F) attend labelFunc0815_0141;
	var0006 = UI_execute_usecode_array(var0010, [(byte)0x49, 0x0007, 0x0005]);
	goto labelFunc0815_011E;
labelFunc0815_0141:
	abort;
labelFunc0815_0142:
	if (!(var0000 == 0x000A)) goto labelFunc0815_014F;
	Func0925();
labelFunc0815_014F:
	if (!((var0000 > 0x0014) && (var0000 <= 0x0064))) goto labelFunc0815_0167;
	Func0926(var0000);
labelFunc0815_0167:
	if (!((var0000 > 0x0064) && (var0000 < 0x00C8))) goto labelFunc0815_017F;
	Func0928(var0000);
labelFunc0815_017F:
	if (!(var0000 == 0x00C8)) goto labelFunc0815_018D;
	item->Func07FA();
labelFunc0815_018D:
	return;
}


