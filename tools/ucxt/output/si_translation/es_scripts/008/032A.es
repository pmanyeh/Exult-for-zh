#game "serpentisle"
// externs
extern void Func062C object#(0x62C) ();
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func032A shape#(0x32A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(UI_get_item_frame(item) == 0x0006)) goto labelFunc032A_000D;
	return;
labelFunc032A_000D:
	if (!(event == 0x0001)) goto labelFunc032A_00CE;
	var0000 = UI_get_container(item);
	if (!(var0000 == UI_get_npc_object(0xFE9C))) goto labelFunc032A_0037;
	event = 0x000A;
	item->Func062C();
	return;
	goto labelFunc032A_007A;
labelFunc032A_0037:
	if (!var0000) goto labelFunc032A_007A;
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc032A_0079;
	var0001 = UI_give_last_created(0xFE9C);
	if (!(!var0001)) goto labelFunc032A_006D;
	var0001 = UI_give_last_created(var0000);
	UI_flash_mouse(0x0000);
labelFunc032A_006D:
	event = 0x000A;
	item->Func062C();
	return;
	goto labelFunc032A_007A;
labelFunc032A_0079:
	return;
labelFunc032A_007A:
	UI_close_gumps();
	var0002 = [0x0001, 0xFFFF, 0x0000, 0x0001, 0xFFFF, 0xFFFF, 0x0000, 0xFFFF];
	var0003 = [0x0000, 0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001];
	Func090D(item, var0002, var0003, 0xFFFF, 0x062C, item, 0x000A);
labelFunc032A_00CE:
	return;
}


