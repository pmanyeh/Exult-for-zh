#game "blackgate"
void Func0852 0x852 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;

	var0000 = [0x0000, 0x0000];
	var0001 = [0x0001, 0x0002];
	var0002 = false;
	if (!((!gflags[0x0032]) && ((!gflags[0x0033]) && ((!gflags[0x0034]) && ((!gflags[0x0035]) && ((!gflags[0x0036]) && (!gflags[0x0037]))))))) goto labelFunc0852_0134;
	enum();
labelFunc0852_003D:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0852_0071;
labelFunc0852_0048:
	var0006 = UI_die_roll(0x0001, 0x0006);
	if (!(var0006 in var0000)) goto labelFunc0852_0065;
	goto labelFunc0852_0048;
	goto labelFunc0852_006E;
labelFunc0852_0065:
	var0000[var0005] = var0006;
labelFunc0852_006E:
	goto labelFunc0852_003D;
labelFunc0852_0071:
	enum();
labelFunc0852_0072:
	for (var0005 in var0001 with var0007 to var0008) attend labelFunc0852_0091;
	if (!(var0000[var0005] == 0x0001)) goto labelFunc0852_008E;
	gflags[0x0032] = true;
labelFunc0852_008E:
	goto labelFunc0852_0072;
labelFunc0852_0091:
	enum();
labelFunc0852_0092:
	for (var0005 in var0001 with var0009 to var000A) attend labelFunc0852_00B1;
	if (!(var0000[var0005] == 0x0002)) goto labelFunc0852_00AE;
	gflags[0x0033] = true;
labelFunc0852_00AE:
	goto labelFunc0852_0092;
labelFunc0852_00B1:
	enum();
labelFunc0852_00B2:
	for (var0005 in var0001 with var000B to var000C) attend labelFunc0852_00D1;
	if (!(var0000[var0005] == 0x0003)) goto labelFunc0852_00CE;
	gflags[0x0034] = true;
labelFunc0852_00CE:
	goto labelFunc0852_00B2;
labelFunc0852_00D1:
	enum();
labelFunc0852_00D2:
	for (var0005 in var0001 with var000D to var000E) attend labelFunc0852_00F1;
	if (!(var0000[var0005] == 0x0004)) goto labelFunc0852_00EE;
	gflags[0x0035] = true;
labelFunc0852_00EE:
	goto labelFunc0852_00D2;
labelFunc0852_00F1:
	enum();
labelFunc0852_00F2:
	for (var0005 in var0001 with var000F to var0010) attend labelFunc0852_0111;
	if (!(var0000[var0005] == 0x0005)) goto labelFunc0852_010E;
	gflags[0x0036] = true;
labelFunc0852_010E:
	goto labelFunc0852_00F2;
labelFunc0852_0111:
	enum();
labelFunc0852_0112:
	for (var0005 in var0001 with var0011 to var0012) attend labelFunc0852_0131;
	if (!(var0000[var0005] == 0x0006)) goto labelFunc0852_012E;
	gflags[0x0037] = true;
labelFunc0852_012E:
	goto labelFunc0852_0112;
labelFunc0852_0131:
	goto labelFunc0852_01D3;
labelFunc0852_0134:
	enum();
labelFunc0852_0135:
	for (var0005 in var0001 with var0013 to var0014) attend labelFunc0852_01D3;
	if (!(gflags[0x0032] && (!(0x0001 in var0000)))) goto labelFunc0852_0158;
	var0000[var0005] = 0x0001;
labelFunc0852_0158:
	if (!(gflags[0x0033] && (!(0x0002 in var0000)))) goto labelFunc0852_0170;
	var0000[var0005] = 0x0002;
labelFunc0852_0170:
	if (!(gflags[0x0034] && (!(0x0003 in var0000)))) goto labelFunc0852_0188;
	var0000[var0005] = 0x0003;
labelFunc0852_0188:
	if (!(gflags[0x0035] && (!(0x0004 in var0000)))) goto labelFunc0852_01A0;
	var0000[var0005] = 0x0004;
labelFunc0852_01A0:
	if (!(gflags[0x0036] && (!(0x0005 in var0000)))) goto labelFunc0852_01B8;
	var0000[var0005] = 0x0005;
labelFunc0852_01B8:
	if (!(gflags[0x0037] && (!(0x0006 in var0000)))) goto labelFunc0852_01D0;
	var0000[var0005] = 0x0006;
labelFunc0852_01D0:
	goto labelFunc0852_0135;
labelFunc0852_01D3:
	var0015 = ["According to the Book of Archaic Knowledge, how many times must ginseng be reboiled in order for it to be properly used as a magical reagent?", "How many runes are in the archaic script of the outdated Britannian language?", "According to the Book of Archaic Knowledge, how many places may the Mandrake Root naturally be found?", "In the Book of Fellowship, how many bandits can be seen surrounding on the old man in the illustration on page three?", "According to the Traveller's Companion, how many parts of the body should one wish to protect with armour?", "According to the Book of Archaic Knowledge, fewer than how many pearls in 10,000 are black?"];
	var0016 = [0x0028, 0x001F, 0x0002, 0x0006, 0x0006, 0x0001];
	enum();
labelFunc0852_0204:
	for (var0005 in var0001 with var0017 to var0018) attend labelFunc0852_0250;
	var0019 = var0015[var0000[var0005]];
	message("\"");
	message(var0019);
	message("\"");
	say();
	var001A = UI_input_numeric_value(0x0000, 0x003C, 0x0001, 0x0000);
	if (!(!(var001A == var0016[var0000[var0005]]))) goto labelFunc0852_024D;
	var0002 = true;
labelFunc0852_024D:
	goto labelFunc0852_0204;
labelFunc0852_0250:
	if (!var0002) goto labelFunc0852_0265;
	UI_set_item_flag(item, 0x0019);
	gflags[0x0038] = true;
	goto labelFunc0852_0271;
labelFunc0852_0265:
	UI_clear_item_flag(item, 0x0019);
	gflags[0x0038] = false;
labelFunc0852_0271:
	return;
}


