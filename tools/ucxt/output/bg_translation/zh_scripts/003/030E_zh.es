#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern void Func0925 0x925 (var var0000);

void Func030E shape#(0x30E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc030E_000E;
	Func08FF("@或許你該用它來攻擊。@");
labelFunc030E_000E:
	if (!(event == 0x0004)) goto labelFunc030E_00C3;
	var0000 = UI_click_on_item();
	var0001 = [var0000[0x0002], var0000[0x0003], var0000[0x0004]];
	var0002 = UI_create_new_object(0x037F);
	if (!var0002) goto labelFunc030E_00A4;
	UI_set_item_flag(var0002, 0x0012);
	var0003 = UI_update_last_created(var0001);
	if (!var0003) goto labelFunc030E_0073;
	var0003 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x2D], 0x0064);
labelFunc030E_0073:
	if (!(var0000[0x0004] == 0x0000)) goto labelFunc030E_00A4;
	var0004 = UI_create_new_object(0x00E0);
	if (!var0004) goto labelFunc030E_00A4;
	UI_set_item_flag(var0004, 0x0012);
	var0003 = UI_update_last_created(var0001);
labelFunc030E_00A4:
	var0005 = UI_find_nearby(var0000, 0x030E, 0x0002, 0x0000);
	if (!var0005) goto labelFunc030E_00C3;
	Func0925(var0005);
labelFunc030E_00C3:
	return;
}


