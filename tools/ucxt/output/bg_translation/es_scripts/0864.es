#game "blackgate"
void Func0864 0x864 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_npc_object(0xFF03);
	var0001 = UI_get_schedule_type(var0000);
	var0002 = "";
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x000B)) goto labelFunc0864_0071;
	if (!(var0003 == 0x0001)) goto labelFunc0864_0041;
	var0002 = "@It should not be much longer!@";
labelFunc0864_0041:
	if (!(var0003 == 0x0002)) goto labelFunc0864_0051;
	var0002 = "@Love will show the way.@";
labelFunc0864_0051:
	if (!(var0003 == 0x0003)) goto labelFunc0864_0061;
	var0002 = "@Me? Thou brought it!@";
labelFunc0864_0061:
	if (!(var0003 == 0x0004)) goto labelFunc0864_0071;
	var0002 = "@I am sorry, truly!@";
labelFunc0864_0071:
	UI_item_say(var0000, var0002);
	return;
}


