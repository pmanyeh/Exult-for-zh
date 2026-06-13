#game "blackgate"
// DID NOT FIND ALL OPCODE PARAMETERS.
// externs
extern var Func083A 0x83A ();
extern var Func083C 0x83C (var var0000);
extern void Func0933 0x933 (var var0000, var var0001, var var0002);

void Func0329 shape#(0x329) ()
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
	var var0009;
	var var000A;
	var var000B;

	if (!((event == 0x0001) && (!UI_in_usecode(item)))) goto labelFunc0329_010A;
	UI_close_gumps();
	Func083C(0x0000/*stack underflow*/);
	var0000 = Func083A();
	if (!((UI_game_hour() >= 0x000F) || (UI_game_hour() <= 0x0003))) goto labelFunc0329_0053;
	enum();
labelFunc0329_0031:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0329_0049;
	UI_clear_item_flag(var0003, 0x000B);
	goto labelFunc0329_0031;
labelFunc0329_0049:
	UI_set_schedule_type(0xFF18, 0x0009);
labelFunc0329_0053:
	var0004 = UI_find_nearby_avatar(0x032E);
	var0005 = UI_find_nearby_avatar(0x0329);
	var0006 = UI_find_nearby_avatar(0x0332);
	if (!(UI_get_array_size(var0006) > 0x0000)) goto labelFunc0329_010A;
	if (!(UI_get_array_size(var0005) == 0x0003)) goto labelFunc0329_010A;
	if (!(UI_get_array_size(var0004) >= 0x0001)) goto labelFunc0329_010A;
	gflags[0x001F] = false;
	gflags[0x0020] = false;
	gflags[0x0021] = false;
	Func0933(0xFE9C, "@轉吧，寶貝！@", 0x0000);
	enum();
labelFunc0329_00B4:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0329_010A;
	var000A = (UI_die_roll(0x0000, 0x0002) * 0x0008);
	UI_halt_scheduled(var0009);
	var000B = UI_execute_usecode_array(var0009, [(byte)0x4E, (byte)0x58, 0x001D, (byte)0x0B, 0xFFFD, 0x0016, (byte)0x4E, (byte)0x58, 0x001D, (byte)0x0B, 0xFFFD, var000A, (byte)0x55, 0x060B]);
	goto labelFunc0329_00B4;
labelFunc0329_010A:
	return;
}


