#game "blackgate"
var Func086D 0x86D ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = ("dicot" & ("*" & ("conifer" & ("*" & ("slug" & ("*" & ("sloth" & ("*" & ("mole-person" & ("mole-people" & ("pod-person" & ("pod-people" & ("Canadian" & ("*" & ("Dominican" & ("*" & ("Basque" & "*")))))))))))))))));
	var0000 = (var0000 & ("Gypsy" & ("Gypsies" & ("Serb" & ("*" & ("Croat" & ("*" & ("Mongol" & ("*" & ("Slav" & ("*" & ("Hindu" & ("*" & ("Christian" & ("*" & ("Christian Scientist" & ("*" & ("cephalopod" & ("*" & ("rock critic" & "*"))))))))))))))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0002));
	var0002 = var0000[((var0001 * 0x0002) - 0x0001)];
	var0003 = var0000[(var0001 * 0x0002)];
	if (!(var0003 == "*")) goto labelFunc086D_00E7;
	var0003 = (var0002 + "s");
labelFunc086D_00E7:
	return [var0002, var0003];
	return 0;
}


