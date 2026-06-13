#game "blackgate"
var Func0866 0x866 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = ("batting cage" & ("*" & ("flagstaff" & ("*" & ("digit" & ("*" & ("nail" & ("*" & ("epaphite" & ("*" & ("sycophant" & ("*" & ("demagouge" & "*")))))))))))));
	var0000 = (var0000 & ("prophet" & ("*" & ("profit" & ("*" & ("pus" & ("pus" & ("mulch" & ("mulch" & ("Garden Gnome" & "*"))))))))));
	var0000 = (var0000 & ("personal crisis" & ("personal crises" & ("wit" & ("*" & ("bathysphere" & ("*" & ("jello-flavoring" & ("*" & ("origami ball" & ("*" & ("communion wafer" & ("*" & ("armageddon" & ("*" & ("baloon payment" & "*"))))))))))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0002));
	var0002 = var0000[((var0001 * 0x0002) - 0x0001)];
	var0003 = var0000[(var0001 * 0x0002)];
	if (!(var0003 == "*")) goto labelFunc0866_00F5;
	var0003 = (var0002 + "s");
labelFunc0866_00F5:
	return [var0002, var0003];
	return 0;
}


