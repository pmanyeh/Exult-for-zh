#game "blackgate"
// externs
extern void Func0925 0x925 (var var0000);
extern void Func08FE 0x8FE (var var0000);

void Func0336 shape#(0x336) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0336_00E1;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0336_0071;
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!((var0002 == 0x02DA) || (var0002 == 0x0360))) goto labelFunc0336_0048;
	UI_set_item_frame(item, 0x0001);
	goto labelFunc0336_0071;
labelFunc0336_0048:
	if (!(UI_get_item_shape(var0001) == 0x0336)) goto labelFunc0336_006B;
	if (!(UI_get_item_frame(var0001) == 0x0002)) goto labelFunc0336_0068;
	Func0925(item);
labelFunc0336_0068:
	goto labelFunc0336_0071;
labelFunc0336_006B:
	Func08FE("@那是給嬰兒用的。@");
labelFunc0336_0071:
	if (!(var0000 == 0x0001)) goto labelFunc0336_00D1;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0336_00B1;
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_attack_mode(var0001, 0x0007);
	UI_set_oppressor(var0001, 0xFE9C);
	Func0925(item);
	goto labelFunc0336_00D1;
labelFunc0336_00B1:
	if (!(UI_get_item_shape(var0001) == 0x0336)) goto labelFunc0336_00D1;
	if (!(UI_get_item_frame(var0001) == 0x0002)) goto labelFunc0336_00D1;
	Func0925(item);
labelFunc0336_00D1:
	if (!(var0000 == 0x0002)) goto labelFunc0336_00E1;
	Func08FE("@那是用來裝髒尿布的。@");
labelFunc0336_00E1:
	return;
}


