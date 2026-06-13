#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0677 object#(0x677) ()
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
	var var000C;

	if (!(event == 0x0001)) goto labelFunc0677_004F;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Por Ylem@");
	if (!Func0906()) goto labelFunc0677_0039;
	var0000 = UI_execute_usecode_array(item, [(byte)0x68, (byte)0x61, (byte)0x6D, (byte)0x58, 0x0043, (byte)0x55, 0x0677]);
	goto labelFunc0677_004F;
labelFunc0677_0039:
	var0000 = UI_execute_usecode_array(item, [(byte)0x68, (byte)0x61, (byte)0x6D, (byte)0x55, 0x0606]);
labelFunc0677_004F:
	if (!(event == 0x0002)) goto labelFunc0677_0265;
	var0001 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	var0002 = UI_get_party_list();
	var0003 = 0x000C;
	var0004 = UI_get_item_flag(item, 0x0006);
	enum();
labelFunc0677_0081:
	for (var0007 in var0001 with var0005 to var0006) attend labelFunc0677_025A;
	if (!((!var0004) || (!(var0007 in var0002)))) goto labelFunc0677_0257;
	var0008 = 0x0000;
	var0009 = "";
labelFunc0677_00A8:
	if (!(var0008 < var0003)) goto labelFunc0677_0243;
	var000A = UI_die_roll(0x0000, 0x0008);
	if (!(var000A == 0x0000)) goto labelFunc0677_00E1;
	var000B = [(byte)0x6D, (byte)0x6C, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_00E1:
	if (!(var000A == 0x0001)) goto labelFunc0677_0103;
	var000B = [(byte)0x6D, (byte)0x61, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_0103:
	if (!(var000A == 0x0002)) goto labelFunc0677_0125;
	var000B = [(byte)0x6C, (byte)0x6E, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_0125:
	if (!(var000A == 0x0003)) goto labelFunc0677_0147;
	var000B = [(byte)0x61, (byte)0x61, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_0147:
	if (!(var000A == 0x0004)) goto labelFunc0677_0169;
	var000B = [(byte)0x6D, (byte)0x64, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_0169:
	if (!(var000A == 0x0005)) goto labelFunc0677_018B;
	var000B = [(byte)0x64, (byte)0x6D, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_018B:
	if (!(var000A == 0x0006)) goto labelFunc0677_01C4;
	var000C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000B = [(byte)0x59, var000C, (byte)0x6C, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_01C4:
	if (!(var000A == 0x0007)) goto labelFunc0677_01FD;
	var000C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000B = [(byte)0x59, var000C, (byte)0x6D, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_01FD:
	if (!(var000A == 0x0008)) goto labelFunc0677_0236;
	var000C = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000B = [(byte)0x59, var000C, (byte)0x64, (byte)0x61];
	var0009 = [var0009, var000B];
labelFunc0677_0236:
	var0008 = (var0008 + 0x0001);
	goto labelFunc0677_00A8;
labelFunc0677_0243:
	UI_halt_scheduled(var0007);
	var0000 = UI_execute_usecode_array(var0007, var0009);
labelFunc0677_0257:
	goto labelFunc0677_0081;
labelFunc0677_025A:
	UI_earthquake((var0003 * 0x0003));
labelFunc0677_0265:
	return;
}


