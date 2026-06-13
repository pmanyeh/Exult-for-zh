#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func084E 0x84E (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func07AB object#(0x7AB) ()
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

	if (!(event == 0x0003)) goto labelFunc07AB_00F6;
	if (!(!gflags[0x0273])) goto labelFunc07AB_0010;
	abort;
labelFunc07AB_0010:
	var0000 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2A, 0xFF30, 0xFF2E];
	if (!UI_get_item_flag(0xFF29, 0x001C)) goto labelFunc07AB_0042;
	var0000 = (var0000 & 0xFF29);
labelFunc07AB_0042:
	var0001 = 0x0005;
	var0002 = Func09A0(0x0005, 0x0001);
	var0003 = UI_set_item_quality(var0002, var0001);
	enum();
labelFunc07AB_0062:
	for (var0006 in var0000 with var0004 to var0005) attend labelFunc07AB_009D;
	var0007 = Func084E(var0006, var0001);
	UI_move_object(var0006, var0007);
	UI_set_new_schedules(var0006, 0x0000, 0x0010, var0007);
	UI_run_schedule(var0006);
	goto labelFunc07AB_0062;
labelFunc07AB_009D:
	var0008 = UI_get_object_position(item);
	UI_move_object(0xFF2B, var0008);
	UI_set_schedule_type(0xFF2B, 0x000F);
	var0003 = UI_execute_usecode_array(0xFF2B, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x2B, 0x000A, (byte)0x52, "@Now is the Time of Visions!@"]);
	Func09AC(0xFF2B, var0008[0x0001], var0008[0x0002], 0x000F);
	UI_play_music(0x003F, var0002);
labelFunc07AB_00F6:
	return;
}


