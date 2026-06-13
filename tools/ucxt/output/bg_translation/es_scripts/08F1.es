#game "blackgate"
var Func08F1 0x8F1 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = ["viper", "deceiver", "wretch", "scoundrel", "snake", "toad", "coward"];
	var0002 = var0000;
labelFunc08F1_0021:
	if (!(var0002 == var0000)) goto labelFunc08F1_0042;
	var0002 = var0001[UI_die_roll(0x0001, UI_get_array_size(var0001))];
	goto labelFunc08F1_0021;
labelFunc08F1_0042:
	return var0002;
	return 0;
}


