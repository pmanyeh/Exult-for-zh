#game "blackgate"
var Func0868 0x868 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = ("lactate" & ("lactated" & ("lactating" & ("grovel" & ("grovelled" & ("grovelling" & ("brew" & ("*" & ("*" & ("digest" & ("*" & ("*" & ("complain" & ("*" & "*"))))))))))))));
	var0000 = (var0000 & ("gump" & ("*" & ("*" & ("guffaw" & ("*" & ("*" & ("loiter" & ("*" & ("*" & ("solicit" & ("*" & "*"))))))))))));
	var0000 = (var0000 & ("represent" & ("*" & ("*" & ("conjugate" & ("*" & ("*" & ("sink" & ("sank" & ("*" & ("harvest" & ("*" & ("*" & ("gossip" & ("*" & ("*" & ("falsify" & ("falsified" & ("*" & ("sue" & ("sued" & "suing")))))))))))))))))))));
	var0000 = (var0000 & ("gyrate" & ("gyreated" & ("gyrating" & ("outstrech" & ("*" & ("*" & ("deflower" & ("*" & "*")))))))));
	var0001 = UI_die_roll(0x0001, (UI_get_array_size(var0000) / 0x0003));
	var0002 = var0000[((var0001 * 0x0003) - 0x0002)];
	var0003 = var0000[((var0001 * 0x0003) - 0x0001)];
	var0004 = var0000[(var0001 * 0x0003)];
	if (!(var0003 == "*")) goto labelFunc0868_0150;
	var0003 = (var0002 + "ed");
labelFunc0868_0150:
	if (!(var0004 == "*")) goto labelFunc0868_0164;
	var0004 = (var0002 + "ing");
labelFunc0868_0164:
	return [var0002, var0003, var0004];
	return 0;
}


