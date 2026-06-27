#game "blackgate"
var Func0886 0x886 ()
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
	var var001B;
	var var001C;
	var var001D;
	var var001E;

	var0000 = [0x0000, 0x0000, 0x0000];
	var0001 = [0x0001, 0x0002, 0x0003];
	var0002 = false;
	if (!((!gflags[0x002A]) && ((!gflags[0x002B]) && ((!gflags[0x002C]) && ((!gflags[0x002D]) && ((!gflags[0x002E]) && ((!gflags[0x002F]) && ((!gflags[0x0030]) && (!gflags[0x0031]))))))))) goto labelFunc0886_0184;
	enum();
labelFunc0886_004D:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0886_0081;
labelFunc0886_0058:
	var0006 = UI_die_roll(0x0001, 0x0008);
	if (!(var0006 in var0000)) goto labelFunc0886_0075;
	goto labelFunc0886_0058;
	goto labelFunc0886_007E;
labelFunc0886_0075:
	var0000[var0005] = var0006;
labelFunc0886_007E:
	goto labelFunc0886_004D;
labelFunc0886_0081:
	enum();
labelFunc0886_0082:
	for (var0005 in var0001 with var0007 to var0008) attend labelFunc0886_00A1;
	if (!(var0000[var0005] == 0x0001)) goto labelFunc0886_009E;
	gflags[0x002A] = true;
labelFunc0886_009E:
	goto labelFunc0886_0082;
labelFunc0886_00A1:
	enum();
labelFunc0886_00A2:
	for (var0005 in var0001 with var0009 to var000A) attend labelFunc0886_00C1;
	if (!(var0000[var0005] == 0x0002)) goto labelFunc0886_00BE;
	gflags[0x002B] = true;
labelFunc0886_00BE:
	goto labelFunc0886_00A2;
labelFunc0886_00C1:
	enum();
labelFunc0886_00C2:
	for (var0005 in var0001 with var000B to var000C) attend labelFunc0886_00E1;
	if (!(var0000[var0005] == 0x0003)) goto labelFunc0886_00DE;
	gflags[0x002C] = true;
labelFunc0886_00DE:
	goto labelFunc0886_00C2;
labelFunc0886_00E1:
	enum();
labelFunc0886_00E2:
	for (var0005 in var0001 with var000D to var000E) attend labelFunc0886_0101;
	if (!(var0000[var0005] == 0x0004)) goto labelFunc0886_00FE;
	gflags[0x002D] = true;
labelFunc0886_00FE:
	goto labelFunc0886_00E2;
labelFunc0886_0101:
	enum();
labelFunc0886_0102:
	for (var0005 in var0001 with var000F to var0010) attend labelFunc0886_0121;
	if (!(var0000[var0005] == 0x0005)) goto labelFunc0886_011E;
	gflags[0x002E] = true;
labelFunc0886_011E:
	goto labelFunc0886_0102;
labelFunc0886_0121:
	enum();
labelFunc0886_0122:
	for (var0005 in var0001 with var0011 to var0012) attend labelFunc0886_0141;
	if (!(var0000[var0005] == 0x0006)) goto labelFunc0886_013E;
	gflags[0x002F] = true;
labelFunc0886_013E:
	goto labelFunc0886_0122;
labelFunc0886_0141:
	enum();
labelFunc0886_0142:
	for (var0005 in var0001 with var0013 to var0014) attend labelFunc0886_0161;
	if (!(var0000[var0005] == 0x0007)) goto labelFunc0886_015E;
	gflags[0x0030] = true;
labelFunc0886_015E:
	goto labelFunc0886_0142;
labelFunc0886_0161:
	enum();
labelFunc0886_0162:
	for (var0005 in var0001 with var0015 to var0016) attend labelFunc0886_0181;
	if (!(var0000[var0005] == 0x0008)) goto labelFunc0886_017E;
	gflags[0x0031] = true;
labelFunc0886_017E:
	goto labelFunc0886_0162;
labelFunc0886_0181:
	goto labelFunc0886_0253;
labelFunc0886_0184:
	enum();
labelFunc0886_0185:
	for (var0005 in var0001 with var0017 to var0018) attend labelFunc0886_0253;
	if (!(gflags[0x002A] && (!(0x0001 in var0000)))) goto labelFunc0886_01A8;
	var0000[var0005] = 0x0001;
labelFunc0886_01A8:
	if (!(gflags[0x002B] && (!(0x0002 in var0000)))) goto labelFunc0886_01C0;
	var0000[var0005] = 0x0002;
labelFunc0886_01C0:
	if (!(gflags[0x002C] && (!(0x0003 in var0000)))) goto labelFunc0886_01D8;
	var0000[var0005] = 0x0003;
labelFunc0886_01D8:
	if (!(gflags[0x002D] && (!(0x0004 in var0000)))) goto labelFunc0886_01F0;
	var0000[var0005] = 0x0004;
labelFunc0886_01F0:
	if (!(gflags[0x002E] && (!(0x0005 in var0000)))) goto labelFunc0886_0208;
	var0000[var0005] = 0x0005;
labelFunc0886_0208:
	if (!(gflags[0x002F] && (!(0x0006 in var0000)))) goto labelFunc0886_0220;
	var0000[var0005] = 0x0006;
labelFunc0886_0220:
	if (!(gflags[0x0030] && (!(0x0007 in var0000)))) goto labelFunc0886_0238;
	var0000[var0005] = 0x0007;
labelFunc0886_0238:
	if (!(gflags[0x0031] && (!(0x0008 in var0000)))) goto labelFunc0886_0250;
	var0000[var0005] = 0x0008;
labelFunc0886_0250:
	goto labelFunc0886_0185;
labelFunc0886_0253:
	var0019 = ["Spektran 島最北端的緯度是多少？", "穿過海盜巢穴 (Buccaneer's Den) 島中心的經度是多少？", "穿過 Terfin 島中心的經度是多少？", "穿過匕首島 (Dagger Isle) 中心的緯度是多少？", "穿過 Skara Brae 中心的緯度是多少？", "穿過深邃森林 (Deep Forest) 中心的緯度是多少？", "穿過海盜巢穴 (Buccaneer's Den) 中心的緯度是多少？", "穿過 Skara Brae 中心的經度是多少？"];
	var001A = [0x0078, 0x003C, 0x0078, 0x0000, 0x001E, 0x003C, 0x003C, 0x003C];
	message("「在我給你口令之前，我必須承認，我一直對你是否真的是聖者抱有懷疑。為了解除我天生的疑心病，我必須請你配合一下。我將問你幾個關於不列顛尼亞地理的問題。請根據你布地圖上的經度或緯度數字來回答。記住——經度是指南北走向的線，它們由地圖底部的數字決定。緯度是指東西走向的線，它們由地圖左側的數字決定。如果這些問題你都回答正確，那麼我將拋開我所有的疑慮。」");
	say();
	enum();
labelFunc0886_0294:
	for (var0005 in var0001 with var001B to var001C) attend labelFunc0886_02E0;
	var001D = var0019[var0000[var0005]];
	message("「");
	message(var001D);
	message("」");
	say();
	var001E = UI_input_numeric_value(0x0000, 0x00D2, 0x0005, 0x0000);
	if (!(!(var001E == var001A[var0000[var0005]]))) goto labelFunc0886_02DD;
	var0002 = true;
labelFunc0886_02DD:
	goto labelFunc0886_0294;
labelFunc0886_02E0:
	if (!var0002) goto labelFunc0886_02EB;
	return false;
	goto labelFunc0886_02ED;
labelFunc0886_02EB:
	return true;
labelFunc0886_02ED:
	return 0;
}
