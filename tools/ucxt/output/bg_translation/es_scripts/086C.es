#game "blackgate"
var Func086C 0x86C ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = ("armadillo" & ("*" & ("octopus" & ("octopi" & ("ungulate" & ("*" & ("cockatoo" & ("*" & ("ferret" & ("*" & ("weasel" & ("*" & ("bassalope" & "*")))))))))))));
	var0000 = (var0000 & ("platypus" & ("platypuses" & ("no-see-um" & ("*" & ("alpaca" & ("*" & ("mooncow" & ("*" & ("thundermoose" & ("*" & ("llama" & "*"))))))))))));
	var0000 = (var0000 & ("iguana" & ("*" & ("reptile" & ("*" & ("amphibian" & ("*" & ("mammal" & ("*" & ("invertebrate" & "*"))))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0002));
	var0002 = var0000[((var0001 * 0x0002) - 0x0001)];
	var0003 = var0000[(var0001 * 0x0002)];
	if (!(var0003 == "*")) goto labelFunc086C_00E5;
	var0003 = (var0002 + "s");
labelFunc086C_00E5:
	return [var0002, var0003];
	return 0;
}


