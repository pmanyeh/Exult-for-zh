#game "serpentisle"
// externs
extern void Func0971 0x971 (var var0000);
extern void Func0949 0x949 (var var0000);

void Func0336 shape#(0x336) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0336_00D9;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc0336_0069;
	var0001 = UI_click_on_item();
	var0002 = UI_get_item_shape(var0001);
	if (!(var0002 == 0x02DA)) goto labelFunc0336_0040;
	UI_set_item_frame(item, 0x0001);
	goto labelFunc0336_0069;
labelFunc0336_0040:
	if (!(UI_get_item_shape(var0001) == 0x0336)) goto labelFunc0336_0063;
	if (!(UI_get_item_frame(var0001) == 0x0002)) goto labelFunc0336_0060;
	Func0971(item);
labelFunc0336_0060:
	goto labelFunc0336_0069;
labelFunc0336_0063:
	Func0949("@Those are for infants.@");
labelFunc0336_0069:
	if (!(var0000 == 0x0001)) goto labelFunc0336_00C9;
	var0001 = UI_click_on_item();
	if (!UI_is_npc(var0001)) goto labelFunc0336_00A9;
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_attack_mode(var0001, 0x0007);
	UI_set_oppressor(var0001, 0xFE9C);
	Func0971(item);
	goto labelFunc0336_00C9;
labelFunc0336_00A9:
	if (!(UI_get_item_shape(var0001) == 0x0336)) goto labelFunc0336_00C9;
	if (!(UI_get_item_frame(var0001) == 0x0002)) goto labelFunc0336_00C9;
	Func0971(item);
labelFunc0336_00C9:
	if (!(var0000 == 0x0002)) goto labelFunc0336_00D9;
	Func0949("@That is for dirty diapers.@");
labelFunc0336_00D9:
	return;
}


