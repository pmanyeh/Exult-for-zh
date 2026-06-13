#game "serpentisle"
var Func0891 0x891 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = ("soup" & ("*" & ("eruption" & ("*" & ("quagmire" & ("*" & ("bureaucracy" & ("bureaucracies" & ("hoe" & "*")))))))));
	var0000 = (var0000 & ("tyranny" & ("tyrannies" & ("monarchy" & ("monarchies" & ("hammer" & ("*" & ("sickle" & ("*" & ("imperialism" & "*"))))))))));
	var0000 = (var0000 & ("axle" & ("*" & ("wheel" & ("*" & ("Gump" & ("*" & ("lenticular cloud" & ("*" & ("clock" & ("*" & ("sloop" & ("*" & ("barge" & "*"))))))))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0002));
	var0002 = var0000[((var0001 * 0x0002) - 0x0001)];
	var0003 = var0000[(var0001 * 0x0002)];
	if (!(var0003 == "*")) goto labelFunc0891_00DD;
	var0003 = (var0002 + "s");
labelFunc0891_00DD:
	return [var0002, var0003];
	return 0;
}


