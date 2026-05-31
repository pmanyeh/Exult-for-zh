#game "blackgate"
// externs
extern var Func081B 0x81B (var var0000);
extern void Func08FF 0x8FF (var var0000);
extern void Func081C 0x81C (var var0000, var var0001);

void Func0815 0x815 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = Func081B(var0000);
	var0002 = UI_get_item_quality(item);
	var0003 = 0xFFFF;
	if (!(var0001 == 0x0000)) goto labelFunc0815_0043;
	if (!(var0002 == 0x00E4)) goto labelFunc0815_002F;
	gflags[0x02E1] = false;
labelFunc0815_002F:
	if (!(var0002 == 0x00F7)) goto labelFunc0815_003D;
	gflags[0x02E2] = false;
labelFunc0815_003D:
	var0003 = 0x0002;
labelFunc0815_0043:
	if (!(var0001 == 0x0001)) goto labelFunc0815_005D;
	var0004 = ("@Excuse me, the door is already open. " + "Is it not rather futile to lock it now?@");
	Func08FF(var0004);
labelFunc0815_005D:
	if (!(var0001 == 0x0002)) goto labelFunc0815_0089;
	if (!(var0002 == 0x00E4)) goto labelFunc0815_0075;
	gflags[0x02E1] = true;
labelFunc0815_0075:
	if (!(var0002 == 0x00F7)) goto labelFunc0815_0083;
	gflags[0x02E2] = true;
labelFunc0815_0083:
	var0003 = 0x0000;
labelFunc0815_0089:
	if (!(var0001 == 0x0003)) goto labelFunc0815_00B4;
	if (!(UI_die_roll(0x0001, 0x000A) == 0x0001)) goto labelFunc0815_00B4;
	var0004 = ("@Excuse me, the door appears magically locked. " + "Is it not rather difficult to unlock it with a key?@");
	Func08FF(var0004);
labelFunc0815_00B4:
	if (!(var0003 != 0xFFFF)) goto labelFunc0815_00C7;
	Func081C(var0000, var0003);
labelFunc0815_00C7:
	return;
}


