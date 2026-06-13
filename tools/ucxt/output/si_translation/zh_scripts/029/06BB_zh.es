#game "serpentisle"
// externs
extern var Func089D 0x89D (var var0000);

void Func06BB object#(0x6BB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc06BB_0061;
	if (!(gflags[0x0174] || (gflags[0x0173] || gflags[0x0175]))) goto labelFunc06BB_0034;
	var0000 = UI_find_nearby_avatar(0x0366);
	if (!UI_get_array_size(var0000)) goto labelFunc06BB_0033;
	var0001 = Func089D(var0000);
labelFunc06BB_0033:
	abort;
labelFunc06BB_0034:
	var0000 = UI_find_nearby_avatar(0x0366);
	var0002 = UI_find_nearby_avatar(0x0203);
	var0000 = (var0000 & var0002);
	var0002 = [];
	var0001 = Func089D(var0000);
labelFunc06BB_0061:
	return;
}


