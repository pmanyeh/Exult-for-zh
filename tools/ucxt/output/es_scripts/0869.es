#game "blackgate"
var Func0869 0x869 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = ("collate" & ("collated" & ("collating" & ("sear" & ("*" & ("*" & ("croak" & ("*" & ("*" & ("power-nap" & ("power-napped" & ("power-napping" & ("network" & ("*" & ("*" & ("conjure" & ("conjured" & "conjuring")))))))))))))))));
	var0000 = (var0000 & ("campaign" & ("*" & ("*" & ("protest" & ("*" & ("*" & ("spew" & ("*" & ("*" & ("inhabit" & ("*" & ("*" & ("censor" & ("*" & "*")))))))))))))));
	var0000 = (var0000 & ("lay off" & ("laid off" & ("laying off" & ("irradiate" & ("irradiated" & ("irradiating" & ("martinize" & ("martinized" & "martinizing")))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0003));
	var0002 = var0000[((var0001 * 0x0003) - 0x0002)];
	var0003 = var0000[((var0001 * 0x0003) - 0x0001)];
	var0004 = var0000[(var0001 * 0x0003)];
	if (!(var0003 == "*")) goto labelFunc0869_010E;
	var0003 = (var0002 + "ed");
labelFunc0869_010E:
	if (!(var0004 == "*")) goto labelFunc0869_0122;
	var0004 = (var0002 + "ing");
labelFunc0869_0122:
	return [var0002, var0003, var0004];
	return 0;
}


