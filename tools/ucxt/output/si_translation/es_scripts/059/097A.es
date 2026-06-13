#game "serpentisle"
// externs
extern var Func0983 0x983 (var var0000);

void Func097A 0x97A (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_object(var0000);
	if (!(!Func0983(var0001))) goto labelFunc097A_0015;
	return;
labelFunc097A_0015:
	var0002 = UI_get_schedule_type(var0001);
	var0003 = "";
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000B)) goto labelFunc097A_007C;
	if (!(var0004 == 0x0001)) goto labelFunc097A_004C;
	var0003 = "@It doth seem as it would rain...@";
labelFunc097A_004C:
	if (!(var0004 == 0x0002)) goto labelFunc097A_005C;
	var0003 = "@Greetings.@";
labelFunc097A_005C:
	if (!(var0004 == 0x0003)) goto labelFunc097A_006C;
	var0003 = "@Oh, mine aching back...@";
labelFunc097A_006C:
	if (!(var0004 == 0x0004)) goto labelFunc097A_007C;
	var0003 = "@Ho hum...@";
labelFunc097A_007C:
	if (!(var0002 == 0x000E)) goto labelFunc097A_008C;
	var0003 = "@Z-z-z-z...@";
labelFunc097A_008C:
	if (!(var0002 == 0x0017)) goto labelFunc097A_00D6;
	if (!(var0004 == 0x0001)) goto labelFunc097A_00A6;
	var0003 = "@Thou shouldst try the wine.@";
labelFunc097A_00A6:
	if (!(var0004 == 0x0002)) goto labelFunc097A_00B6;
	var0003 = "@The bread is fresh.@";
labelFunc097A_00B6:
	if (!(var0004 == 0x0003)) goto labelFunc097A_00C6;
	var0003 = "@Try the mutton.@";
labelFunc097A_00C6:
	if (!(var0004 == 0x0004)) goto labelFunc097A_00D6;
	var0003 = "@I recommend the ale.@";
labelFunc097A_00D6:
	if (!(var0002 == 0x001C)) goto labelFunc097A_0120;
	if (!(var0004 == 0x0001)) goto labelFunc097A_00F0;
	var0003 = "@Strive For Unity.@";
labelFunc097A_00F0:
	if (!(var0004 == 0x0002)) goto labelFunc097A_0100;
	var0003 = "@Trust Thy Brother.@";
labelFunc097A_0100:
	if (!(var0004 == 0x0003)) goto labelFunc097A_0110;
	var0003 = "@Worthiness Precedes Reward.@";
labelFunc097A_0110:
	if (!(var0004 == 0x0004)) goto labelFunc097A_0120;
	var0003 = "@Join The Fellowship!@";
labelFunc097A_0120:
	if (!(var0002 == 0x001A)) goto labelFunc097A_016A;
	if (!(var0004 == 0x0001)) goto labelFunc097A_013A;
	var0003 = "@Mmmm! Good!@";
labelFunc097A_013A:
	if (!(var0004 == 0x0002)) goto labelFunc097A_014A;
	var0003 = "@Tasty!@";
labelFunc097A_014A:
	if (!(var0004 == 0x0003)) goto labelFunc097A_015A;
	var0003 = "@This is good!@";
labelFunc097A_015A:
	if (!(var0004 == 0x0004)) goto labelFunc097A_016A;
	var0003 = "@Waiter! Waiter!@";
labelFunc097A_016A:
	if (!(var0002 == 0x0006)) goto labelFunc097A_01B4;
	if (!(var0004 == 0x0001)) goto labelFunc097A_0184;
	var0003 = "@Whew! 'Tis hot!@";
labelFunc097A_0184:
	if (!(var0004 == 0x0002)) goto labelFunc097A_0194;
	var0003 = "@Ouch! I did cut myself!@";
labelFunc097A_0194:
	if (!(var0004 == 0x0003)) goto labelFunc097A_01A4;
	var0003 = "@Work... work... work...@";
labelFunc097A_01A4:
	if (!(var0004 == 0x0004)) goto labelFunc097A_01B4;
	var0003 = "@We need rain...@";
labelFunc097A_01B4:
	if (!(var0002 == 0x0019)) goto labelFunc097A_01FE;
	if (!(var0004 == 0x0001)) goto labelFunc097A_01CE;
	var0003 = "@Tag! Thou art it!@";
labelFunc097A_01CE:
	if (!(var0004 == 0x0002)) goto labelFunc097A_01DE;
	var0003 = "@Cannot catch me!@";
labelFunc097A_01DE:
	if (!(var0004 == 0x0003)) goto labelFunc097A_01EE;
	var0003 = "@Nyah nyah! Thou art it!@";
labelFunc097A_01EE:
	if (!(var0004 == 0x0004)) goto labelFunc097A_01FE;
	var0003 = "@Catch me if thou canst!@";
labelFunc097A_01FE:
	UI_item_say(var0001, var0003);
	return;
}


