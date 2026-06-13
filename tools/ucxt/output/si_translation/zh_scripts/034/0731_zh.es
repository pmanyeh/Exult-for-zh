#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func0731 object#(0x731) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc0731_003A;
	var0000 = UI_get_object_position(item);
	var0001 = UI_create_new_object2(0x0175, var0000);
	Func09AD(var0001);
	var0002 = UI_add_cont_items(var0001, 0x0001, 0x02C3, 0x003D, 0x0002, true);
labelFunc0731_003A:
	return;
}


