#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern void Func08FE 0x8FE (var var0000);
extern var Func0937 0x937 (var var0000);
extern void Func0925 0x925 (var var0000);

void Func033B shape#(0x33B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc033B_00F1;
	var0000 = UI_click_on_item();
	if (!UI_is_npc(var0000)) goto labelFunc033B_00EB;
	var0001 = UI_get_npc_prop(var0000, 0x0000);
	var0002 = UI_get_npc_prop(var0000, 0x0003);
	if (!(var0002 == var0001)) goto labelFunc033B_0046;
	Func08FF("@看起來似乎不需要包紮。@");
	goto labelFunc033B_00E8;
labelFunc033B_0046:
	if (!(UI_get_npc_number(var0000) == 0xFE9C)) goto labelFunc033B_005D;
	Func08FE("@感覺好多了！@");
	goto labelFunc033B_00AF;
labelFunc033B_005D:
	if (!Func0937(var0000)) goto labelFunc033B_00AF;
	var0003 = UI_die_roll(0x0001, 0x0003);
	if (!(var0003 == 0x0001)) goto labelFunc033B_0087;
	UI_item_say(var0000, "@喔～感覺好多了！@");
labelFunc033B_0087:
	if (!(var0003 == 0x0002)) goto labelFunc033B_009B;
	UI_item_say(var0000, "@感謝你！@");
labelFunc033B_009B:
	if (!(var0003 == 0x0003)) goto labelFunc033B_00AF;
	UI_item_say(var0000, "@看起來好多了！@");
labelFunc033B_00AF:
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 + var0003) > var0001)) goto labelFunc033B_00D4;
	var0003 = (var0001 - var0002);
labelFunc033B_00D4:
	var0003 = UI_set_npc_prop(var0000, 0x0003, var0003);
	Func0925(item);
labelFunc033B_00E8:
	goto labelFunc033B_00F1;
labelFunc033B_00EB:
	Func08FE("@不要弄髒了繃帶。@");
labelFunc033B_00F1:
	return;
}


