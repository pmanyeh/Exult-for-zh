#game "blackgate"
// externs
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF (var var0000);

void Func0247 shape#(0x247) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0001) && (!UI_get_container(item)))) goto labelFunc0247_00CF;
	var0000 = UI_get_object_position(item);
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc0247_00CF;
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc0247_00CF;
	var0002 = UI_is_not_blocked(var0000, 0x03F3, 0x0011);
	var0001 = UI_update_last_created(var0000);
	if (!(var0002 && var0001)) goto labelFunc0247_00B9;
	UI_close_gumps();
	var0003 = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001, 0x0001];
	var0004 = [0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF];
	UI_halt_scheduled(0xFE9C);
	Func0828(item, var0003, var0004, 0xFFFF, 0x0247, item, 0x0007);
	goto labelFunc0247_00CF;
labelFunc0247_00B9:
	var0000[0x0002] = (var0000[0x0002] - 0x0005);
	Func08FF("@那裡沒有空間放你的睡袋。@");
labelFunc0247_00CF:
	if (!(event == 0x0007)) goto labelFunc0247_0101;
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, (byte)0x30, (byte)0x6C, (byte)0x61]);
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x0247]);
labelFunc0247_0101:
	if (!(event == 0x0002)) goto labelFunc0247_0119;
	UI_set_item_shape(item, 0x03F3);
	UI_set_item_frame(item, 0x0011);
labelFunc0247_0119:
	return;
}


