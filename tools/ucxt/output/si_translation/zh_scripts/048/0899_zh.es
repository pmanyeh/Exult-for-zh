#game "serpentisle"
var Func0899 0x899 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = ("dicot" & ("*" & ("conifer" & ("*" & ("slug" & ("*" & ("sloth" & ("*" & ("mole-person" & ("mole-people" & ("pod-person" & ("pod-people" & ("Saxon" & ("*" & ("Dominican" & ("*" & ("Basque" & "*")))))))))))))))));
	var0000 = (var0000 & ("Gypsy" & ("Gypsies" & ("Jute" & ("*" & ("Norman" & ("*" & ("Mongol" & ("*" & ("Slav" & ("*" & ("Hindu" & ("*" & ("Christian" & ("*" & ("Albigensian" & ("*" & ("cephalopod" & ("*" & ("rock critic" & "*"))))))))))))))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0002));
	var0002 = var0000[((var0001 * 0x0002) - 0x0001)];
	var0003 = var0000[(var0001 * 0x0002)];
	if (!(var0003 == "*")) goto labelFunc0899_00E7;
	var0003 = (var0002 + "s");
labelFunc0899_00E7:
	return [var0002, var0003];
	return 0;
}


