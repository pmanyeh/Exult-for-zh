#game "blackgate"
// externs
extern void Func08FE 0x8FE (var var0000);
extern void Func0925 0x925 (var var0000);

void Func0288 shape#(0x288) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0288_0030;
	var0000 = UI_click_on_item();
	if (!UI_is_npc(var0000)) goto labelFunc0288_0026;
	UI_set_item_flag(var0000, 0x0001);
	goto labelFunc0288_002C;
labelFunc0288_0026:
	Func08FE("@別浪費那個！@");
labelFunc0288_002C:
	Func0925(item);
labelFunc0288_0030:
	return;
}


