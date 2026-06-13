#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);

void Func092F 0x92F (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_object(var0000);
	if (!(!Func0937(var0001))) goto labelFunc092F_0015;
	return;
labelFunc092F_0015:
	var0002 = UI_get_schedule_type(var0001);
	var0003 = "";
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000B)) goto labelFunc092F_007C;
	if (!(var0004 == 0x0001)) goto labelFunc092F_004C;
	var0003 = "@打招呼！@";
labelFunc092F_004C:
	if (!(var0004 == 0x0002)) goto labelFunc092F_005C;
	var0003 = "@向你問候！@";
labelFunc092F_005C:
	if (!(var0004 == 0x0003)) goto labelFunc092F_006C;
	var0003 = "@希望你有個美好的一天！@";
labelFunc092F_006C:
	if (!(var0004 == 0x0004)) goto labelFunc092F_007C;
	var0003 = "@問你過得如何？@";
labelFunc092F_007C:
	if (!(var0002 == 0x000E)) goto labelFunc092F_008C;
	var0003 = "@Z-z-z-z……@";
labelFunc092F_008C:
	if (!(var0002 == 0x0017)) goto labelFunc092F_00D6;
	if (!(var0004 == 0x0001)) goto labelFunc092F_00A6;
	var0003 = "@建議你嚐嚐葡萄酒。@";
labelFunc092F_00A6:
	if (!(var0004 == 0x0002)) goto labelFunc092F_00B6;
	var0003 = "@提供新鮮的食物。@";
labelFunc092F_00B6:
	if (!(var0004 == 0x0003)) goto labelFunc092F_00C6;
	var0003 = "@推薦這羊肉。@";
labelFunc092F_00C6:
	if (!(var0004 == 0x0004)) goto labelFunc092F_00D6;
	var0003 = "@推薦這麥酒。@";
labelFunc092F_00D6:
	if (!(var0002 == 0x001C)) goto labelFunc092F_0120;
	if (!(var0004 == 0x0001)) goto labelFunc092F_00F0;
	var0003 = "@為團結而努力。@";
labelFunc092F_00F0:
	if (!(var0004 == 0x0002)) goto labelFunc092F_0100;
	var0003 = "@信任你的兄弟。@";
labelFunc092F_0100:
	if (!(var0004 == 0x0003)) goto labelFunc092F_0110;
	var0003 = "@說價值先於回報。@";
labelFunc092F_0110:
	if (!(var0004 == 0x0004)) goto labelFunc092F_0120;
	var0003 = "@加入友誼會！@";
labelFunc092F_0120:
	if (!(var0002 == 0x001A)) goto labelFunc092F_016A;
	if (!(var0004 == 0x0001)) goto labelFunc092F_013A;
	var0003 = "@非常美味！@";
labelFunc092F_013A:
	if (!(var0004 == 0x0002)) goto labelFunc092F_014A;
	var0003 = "@真好吃！@";
labelFunc092F_014A:
	if (!(var0004 == 0x0003)) goto labelFunc092F_015A;
	var0003 = "@這真不錯！@";
labelFunc092F_015A:
	if (!(var0004 == 0x0004)) goto labelFunc092F_016A;
	var0003 = "@呼叫服務！@";
labelFunc092F_016A:
	UI_item_say(var0001, var0003);
	return;
}


