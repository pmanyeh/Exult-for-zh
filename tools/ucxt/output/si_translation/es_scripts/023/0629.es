#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);

void Func0629 object#(0x629) ()
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

	var0000 = UI_create_new_object(0x0390);
	if (!var0000) goto labelFunc0629_013F;
	UI_set_item_flag(var0000, 0x0012);
	UI_set_item_frame(var0000, UI_die_roll(0x0014, 0x0017));
	var0001 = UI_get_object_position(item);
	var0002 = UI_find_nearby(item, 0x032A, 0x0002, 0x0000);
	enum();
labelFunc0629_0045:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0629_00C2;
	var0006 = UI_get_object_position(var0005);
	if (!((var0006[0x0001] == (var0001[0x0001] + 0x0001)) && ((var0006[0x0002] == (var0001[0x0002] - 0x0001)) && (var0006[0x0003] == var0001[0x0003])))) goto labelFunc0629_00BF;
	if (!(UI_get_item_frame(var0005) == 0x0000)) goto labelFunc0629_00BF;
	UI_set_item_frame(var0005, 0x0003);
	UI_halt_scheduled(item);
	var0007 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x0629], 0x0010);
	return;
labelFunc0629_00BF:
	goto labelFunc0629_0045;
labelFunc0629_00C2:
	var0001[0x0001] = (var0001[0x0001] + UI_die_roll(0x0001, 0x0002));
	var0001[0x0002] = (var0001[0x0002] - UI_die_roll(0x0000, 0x0002));
	var0007 = UI_update_last_created(var0001);
	var0008 = UI_die_roll(0x0001, 0x0002);
	if (!(var0008 == 0x0001)) goto labelFunc0629_0117;
	Func0949("@Turn it off!@");
labelFunc0629_0117:
	if (!(var0008 == 0x0002)) goto labelFunc0629_0127;
	Func0949("@Thou art wasting it!@");
labelFunc0629_0127:
	UI_halt_scheduled(item);
	var0007 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x0629], 0x0010);
labelFunc0629_013F:
	return;
}


