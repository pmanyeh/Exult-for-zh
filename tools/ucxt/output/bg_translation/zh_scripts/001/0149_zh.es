#game "blackgate"
// externs
extern void Func0828 0x828 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FE 0x8FE (var var0000);

void Func0149 shape#(0x149) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_in_usecode(item)) goto labelFunc0149_0009;
	return;
labelFunc0149_0009:
	if (!(event == 0x0001)) goto labelFunc0149_0086;
	var0000 = UI_get_container(item);
	if (!var0000) goto labelFunc0149_0055;
	var0001 = UI_get_object_position(0xFE9C);
	var0001[0x0001] = (var0001[0x0001] + 0x0001);
	var0002 = UI_set_last_created(item);
	if (!var0002) goto labelFunc0149_0054;
	var0002 = UI_update_last_created(var0001);
	goto labelFunc0149_0055;
labelFunc0149_0054:
	return;
labelFunc0149_0055:
	if (!UI_in_gump_mode()) goto labelFunc0149_0060;
	UI_close_gumps();
labelFunc0149_0060:
	var0003 = 0xFFFF;
	var0004 = 0xFFFF;
	var0005 = 0xFFFE;
	Func0828(item, var0003, var0004, var0005, 0x0149, item, 0x0007);
labelFunc0149_0086:
	if (!(event == 0x0007)) goto labelFunc0149_0112;
	if (!(!UI_is_pc_inside())) goto labelFunc0149_010C;
	var0002 = UI_execute_usecode_array(item, [(byte)0x46, 0x0000, (byte)0x4D, (byte)0x0B, 0xFFFF, 0x000E, (byte)0x27, 0x0005, (byte)0x50, (byte)0x0B, 0xFFFF, 0x0003, (byte)0x27, 0x0002, (byte)0x4D, (byte)0x0B, 0xFFFD, 0x0003, (byte)0x4F, (byte)0x0B, 0xFFFF, 0x000E, (byte)0x46, 0x0000]);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x6C, (byte)0x61, (byte)0x59, 0x0006, (byte)0x65, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x0B, 0xFFFA, 0x0007]);
	goto labelFunc0149_0112;
labelFunc0149_010C:
	Func08FE("@到外面試試！@");
labelFunc0149_0112:
	return;
}


