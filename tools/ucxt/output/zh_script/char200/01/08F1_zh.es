#game "blackgate"
var Func08F1 0x8F1 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = ["毒蛇", "騙子", "可憐蟲", "惡棍", "蛇", "癩蛤蟆", "懦夫"];
	var0002 = var0000;
labelFunc08F1_0021:
	if (!(var0002 == var0000)) goto labelFunc08F1_0042;
	var0002 = var0001[UI_die_roll(0x0001, UI_get_array_size(var0001))];
	goto labelFunc08F1_0021;
labelFunc08F1_0042:
	return var0002;
	return 0;
}


