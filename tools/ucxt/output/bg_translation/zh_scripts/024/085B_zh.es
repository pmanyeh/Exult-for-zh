#game "blackgate"
void Func085B 0x85B ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_npc_object(0xFF0C);
	var0001 = UI_get_schedule_type(var0000);
	var0002 = "";
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x000B)) goto labelFunc085B_0071;
	if (!(var0003 == 0x0001)) goto labelFunc085B_0041;
	var0002 = "@我們永遠找不到它的！@";
labelFunc085B_0041:
	if (!(var0003 == 0x0002)) goto labelFunc085B_0051;
	var0002 = "@愛。哈！@";
labelFunc085B_0051:
	if (!(var0003 == 0x0003)) goto labelFunc085B_0061;
	var0002 = "@我還以為你有拿！@";
labelFunc085B_0061:
	if (!(var0003 == 0x0004)) goto labelFunc085B_0071;
	var0002 = "@為什麼是我？@";
labelFunc085B_0071:
	UI_item_say(var0000, var0002);
	return;
}


