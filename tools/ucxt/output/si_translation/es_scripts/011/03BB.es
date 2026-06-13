#game "serpentisle"
// externs
extern void Func0916 0x916 ();
extern void Func087C 0x87C ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0994 0x994 ();

void Func03BB shape#(0x3BB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc03BB_005D;
	var0000 = UI_get_readied(0xFE9C, 0x0003);
	if (!(var0000 == item)) goto labelFunc03BB_005D;
	var0001 = UI_get_item_frame(var0000);
	var0002 = UI_get_item_shape(var0000);
	if (!((var0002 == 0x03BB) && (var0001 == 0x0002))) goto labelFunc03BB_0047;
	Func0916();
	abort;
labelFunc03BB_0047:
	if (!((var0002 == 0x03BB) && (var0001 == 0x0009))) goto labelFunc03BB_005D;
	Func087C();
	abort;
labelFunc03BB_005D:
	if (!(event == 0x000A)) goto labelFunc03BB_0107;
	if (!(!gflags[0x02EE])) goto labelFunc03BB_00D3;
	gflags[0x02EE] = true;
	UI_save_pos(item);
	UI_set_item_flag(0xFE9C, 0x0010);
	Func097F(0xFE9C, "@What?@", 0x0023);
	Func097F(0xFE9C, "@Why isn't this working?@", 0x0037);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x0B, 0xFFFF, 0x001E, (byte)0x27, 0x001E, (byte)0x55, 0x07D3]);
	goto labelFunc03BB_0107;
labelFunc03BB_00D3:
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x0B, 0xFFFF, 0x000A, (byte)0x55, 0x03BB]);
labelFunc03BB_0107:
	if (!(event == 0x0002)) goto labelFunc03BB_0141;
	var0004 = Func0994();
	if (!(var0004 == 0x0020)) goto labelFunc03BB_0128;
	UI_teleport_to_saved_pos(item);
	abort;
	goto labelFunc03BB_0141;
labelFunc03BB_0128:
	UI_save_pos(item);
	UI_move_object(0xFE9B, [0x0A87, 0x0B02, 0x0002]);
	abort;
labelFunc03BB_0141:
	return;
}


