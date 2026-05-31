#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);

void Func092E 0x92E (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_object(var0000);
	if (!(!Func0937(var0001))) goto labelFunc092E_0015;
	return;
labelFunc092E_0015:
	var0002 = UI_get_schedule_type(var0001);
	var0003 = "";
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000B)) goto labelFunc092E_007C;
	if (!(var0004 == 0x0001)) goto labelFunc092E_004C;
	var0003 = "@Looks like rain...@";
labelFunc092E_004C:
	if (!(var0004 == 0x0002)) goto labelFunc092E_005C;
	var0003 = "@Greetings.@";
labelFunc092E_005C:
	if (!(var0004 == 0x0003)) goto labelFunc092E_006C;
	var0003 = "@Oh, my aching back...@";
labelFunc092E_006C:
	if (!(var0004 == 0x0004)) goto labelFunc092E_007C;
	var0003 = "@Ho hum...@";
labelFunc092E_007C:
	if (!(var0002 == 0x000E)) goto labelFunc092E_008C;
	var0003 = "@Z-z-z-z...@";
labelFunc092E_008C:
	if (!(var0002 == 0x0017)) goto labelFunc092E_00D6;
	if (!(var0004 == 0x0001)) goto labelFunc092E_00A6;
	var0003 = "@Try the wine.@";
labelFunc092E_00A6:
	if (!(var0004 == 0x0002)) goto labelFunc092E_00B6;
	var0003 = "@The bread is fresh.@";
labelFunc092E_00B6:
	if (!(var0004 == 0x0003)) goto labelFunc092E_00C6;
	var0003 = "@Try the mutton.@";
labelFunc092E_00C6:
	if (!(var0004 == 0x0004)) goto labelFunc092E_00D6;
	var0003 = "@I recommend the ale.@";
labelFunc092E_00D6:
	if (!(var0002 == 0x001C)) goto labelFunc092E_0120;
	if (!(var0004 == 0x0001)) goto labelFunc092E_00F0;
	var0003 = "@Strive For Unity.@";
labelFunc092E_00F0:
	if (!(var0004 == 0x0002)) goto labelFunc092E_0100;
	var0003 = "@Trust Thy Brother.@";
labelFunc092E_0100:
	if (!(var0004 == 0x0003)) goto labelFunc092E_0110;
	var0003 = "@Worthiness Precedes Reward.@";
labelFunc092E_0110:
	if (!(var0004 == 0x0004)) goto labelFunc092E_0120;
	var0003 = "@Join The Fellowship!@";
labelFunc092E_0120:
	if (!(var0002 == 0x001A)) goto labelFunc092E_016A;
	if (!(var0004 == 0x0001)) goto labelFunc092E_013A;
	var0003 = "@Mmmm! Good!@";
labelFunc092E_013A:
	if (!(var0004 == 0x0002)) goto labelFunc092E_014A;
	var0003 = "@Tasty!@";
labelFunc092E_014A:
	if (!(var0004 == 0x0003)) goto labelFunc092E_015A;
	var0003 = "@This is good!@";
labelFunc092E_015A:
	if (!(var0004 == 0x0004)) goto labelFunc092E_016A;
	var0003 = "@Waiter! Waiter!@";
labelFunc092E_016A:
	if (!(var0002 == 0x0006)) goto labelFunc092E_01B4;
	if (!(var0004 == 0x0001)) goto labelFunc092E_0184;
	var0003 = "@Whew! 'Tis hot!@";
labelFunc092E_0184:
	if (!(var0004 == 0x0002)) goto labelFunc092E_0194;
	var0003 = "@Ouch! Cut myself!@";
labelFunc092E_0194:
	if (!(var0004 == 0x0003)) goto labelFunc092E_01A4;
	var0003 = "@Work...work...work...@";
labelFunc092E_01A4:
	if (!(var0004 == 0x0004)) goto labelFunc092E_01B4;
	var0003 = "@We need rain...@";
labelFunc092E_01B4:
	if (!(var0002 == 0x0019)) goto labelFunc092E_01FE;
	if (!(var0004 == 0x0001)) goto labelFunc092E_01CE;
	var0003 = "@Tag! Thou art it!@";
labelFunc092E_01CE:
	if (!(var0004 == 0x0002)) goto labelFunc092E_01DE;
	var0003 = "@Cannot catch me!@";
labelFunc092E_01DE:
	if (!(var0004 == 0x0003)) goto labelFunc092E_01EE;
	var0003 = "@Nyah nyah! Thou art it!@";
labelFunc092E_01EE:
	if (!(var0004 == 0x0004)) goto labelFunc092E_01FE;
	var0003 = "@Catch me if thou can!@";
labelFunc092E_01FE:
	UI_item_say(var0001, var0003);
	return;
}


