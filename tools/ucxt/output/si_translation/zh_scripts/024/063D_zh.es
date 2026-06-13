#game "serpentisle"
// externs
extern var Func089B 0x89B ();

void Func063D object#(0x63D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc063D_0057;
	var0000 = UI_get_npc_number(item);
	if (!(var0000 < 0x0100)) goto labelFunc063D_0057;
	UI_show_npc_face(var0000, 0x0000);
	var0001 = 0x0000;
labelFunc063D_0030:
	if (!(var0001 < 0x000A)) goto labelFunc063D_0057;
	var0002 = Func089B();
	message("\"");
	message(var0002);
	message("\"");
	say();
	var0001 = (var0001 + 0x0001);
	goto labelFunc063D_0030;
labelFunc063D_0057:
	if (!(event == 0x0000)) goto labelFunc063D_0067;
	UI_item_say(item, "@Oink@");
labelFunc063D_0067:
	return;
}


