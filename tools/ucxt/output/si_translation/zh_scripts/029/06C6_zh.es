#game "serpentisle"
// externs
extern void Func0922 0x922 (var var0000);

void Func06C6 object#(0x6C6) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0001)) goto labelFunc06C6_0018;
	var0001 = 0x03A1;
labelFunc06C6_0018:
	if (!(var0000 == 0x0002)) goto labelFunc06C6_0028;
	var0001 = 0x01C8;
labelFunc06C6_0028:
	if (!(var0000 == 0x0003)) goto labelFunc06C6_0038;
	var0001 = 0x022B;
labelFunc06C6_0038:
	if (!(var0000 == 0x0004)) goto labelFunc06C6_0048;
	var0001 = 0x022F;
labelFunc06C6_0048:
	if (!(var0000 == 0x0005)) goto labelFunc06C6_0058;
	var0001 = 0x0289;
labelFunc06C6_0058:
	var0002 = UI_find_nearby(item, var0001, 0x0001, 0x0000);
	if (!(UI_get_array_size(var0002) == 0x0000)) goto labelFunc06C6_00EC;
	if (!(var0000 == 0x0001)) goto labelFunc06C6_008A;
	gflags[0x023D] = true;
	UI_remove_item(item);
labelFunc06C6_008A:
	if (!(var0000 == 0x0002)) goto labelFunc06C6_009D;
	gflags[0x023C] = true;
	UI_remove_item(item);
labelFunc06C6_009D:
	if (!(var0000 == 0x0003)) goto labelFunc06C6_00B0;
	gflags[0x01BD] = true;
	UI_remove_item(item);
labelFunc06C6_00B0:
	if (!(var0000 == 0x0004)) goto labelFunc06C6_00D3;
	UI_error_message(["WARNING: remove this egg at ", UI_get_object_position(item)]);
	abort;
	gflags[0x025E] = true;
	UI_remove_item(item);
labelFunc06C6_00D3:
	if (!(var0000 == 0x0005)) goto labelFunc06C6_00EC;
	UI_remove_item(item);
	Func0922(0x000B);
	gflags[0x02E1] = true;
labelFunc06C6_00EC:
	return;
}


