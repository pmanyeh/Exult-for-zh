#game "serpentisle"
// externs
extern void Func062E object#(0x62E) ();
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func028E shape#(0x28E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc028E_0094;
	var0000 = UI_get_container(item);
	if (!(var0000 == UI_get_npc_object(0xFE9C))) goto labelFunc028E_002A;
	event = 0x000A;
	item->Func062E();
	return;
	goto labelFunc028E_006E;
labelFunc028E_002A:
	if (!var0000) goto labelFunc028E_006E;
	var0001 = UI_set_last_created(item);
	if (!var0001) goto labelFunc028E_006D;
	var0001 = UI_give_last_created(0xFE9C);
	if (!(!var0001)) goto labelFunc028E_0061;
	var0001 = UI_give_last_created(var0000);
	UI_flash_mouse(0x0004);
	abort;
labelFunc028E_0061:
	event = 0x000A;
	item->Func062E();
	return;
	goto labelFunc028E_006E;
labelFunc028E_006D:
	return;
labelFunc028E_006E:
	var0002 = 0xFFFF;
	var0003 = 0xFFFF;
	var0004 = 0xFFFF;
	Func090D(item, var0002, var0003, var0004, 0x062E, item, 0x000A);
labelFunc028E_0094:
	return;
}


