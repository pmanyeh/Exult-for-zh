#game "blackgate"
void Func08A5 0x8A5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_npc_object(0xFF04);
	var0001 = UI_get_schedule_type(var0000);
	var0002 = "";
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x000B)) goto labelFunc08A5_0071;
	if (!(var0003 == 0x0001)) goto labelFunc08A5_0041;
	var0002 = "@對愛感到好奇。@";
labelFunc08A5_0041:
	if (!(var0003 == 0x0002)) goto labelFunc08A5_0051;
	var0002 = "@找到了嗎？@";
labelFunc08A5_0051:
	if (!(var0003 == 0x0003)) goto labelFunc08A5_0061;
	var0002 = "@沒有火把。@";
labelFunc08A5_0061:
	if (!(var0003 == 0x0004)) goto labelFunc08A5_0071;
	var0002 = "@很高興能幫忙。@";
labelFunc08A5_0071:
	UI_item_say(var0000, var0002);
	return;
}


