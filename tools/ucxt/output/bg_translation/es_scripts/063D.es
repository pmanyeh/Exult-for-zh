#game "blackgate"
// externs
extern var Func086F 0x86F ();

void Func063D object#(0x63D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc063D_0051;
	var0000 = UI_get_npc_number(item);
	if (!(var0000 < 0x0100)) goto labelFunc063D_0051;
	UI_show_npc_face(var0000, 0x0000);
	var0001 = 0x0000;
labelFunc063D_002A:
	if (!(var0001 < 0x000A)) goto labelFunc063D_0051;
	var0002 = Func086F();
	message("\"");
	message(var0002);
	message("\"");
	say();
	var0001 = (var0001 + 0x0001);
	goto labelFunc063D_002A;
labelFunc063D_0051:
	if (!(event == 0x0000)) goto labelFunc063D_0061;
	UI_item_say(item, "@Oink@");
labelFunc063D_0061:
	return;
}


