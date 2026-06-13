#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern void Func09B8 0x9B8 ();

void Func06E8 object#(0x6E8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc06E8_006C;
	var0002 = UI_find_nearby(item, 0x00C8, 0x0028, 0x0010);
	enum();
labelFunc06E8_0041:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc06E8_0064;
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x49, 0x0002, 0x000F]);
	goto labelFunc06E8_0041;
labelFunc06E8_0064:
	Func09B8();
	UI_remove_item(item);
labelFunc06E8_006C:
	return;
}


