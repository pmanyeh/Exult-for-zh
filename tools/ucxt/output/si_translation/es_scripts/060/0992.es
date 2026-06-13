#game "serpentisle"
// externs
extern var Func098E 0x98E ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func098D 0x98D ();

var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003)
{
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

	var0004 = Func098E();
	if (!(Func097D(0xFE9B, 0x0001, 0x031F, 0xFE99, 0x0012) && (!var0003))) goto labelFunc0992_002A;
	var0004 = (var0004 & 0xFED3);
labelFunc0992_002A:
	var0005 = UI_get_array_size(var0004);
	if (!(var0005 == 0x0001)) goto labelFunc0992_006B;
	if (!(var0002 != 0x0000)) goto labelFunc0992_0066;
	if (!var0003) goto labelFunc0992_005D;
	Func097F(0xFE9C, var0002, 0x0000);
	goto labelFunc0992_0066;
labelFunc0992_005D:
	Func094E(0xFE9C, var0002);
labelFunc0992_0066:
	return 0xFE9C;
	abort;
labelFunc0992_006B:
	var0006 = Func098D();
	var0007 = UI_get_array_size(var0006);
	var0008 = [0x0001, 0x0007, 0x0002, 0x0008, 0x0005, 0x0006, 0x0002, 0x000B, 0x0003, 0x0009, 0x000A];
	var0009 = [0x0002, 0x000A, 0x000B, 0x0004, 0x0005, 0x0008, 0x0006, 0x0003, 0x0001, 0x0007, 0x0009];
	var000A = [0x0003, 0x0008, 0x000B, 0x0004, 0x0006, 0x0009, 0x0002, 0x0007, 0x0005, 0x0001, 0x000A];
	var000B = [0x0004, 0x0005, 0x0009, 0x0003, 0x000B, 0x0006, 0x0008, 0x0001, 0x0002, 0x0007, 0x000A];
	var000C = [0x0005, 0x0006, 0x000A, 0x0004, 0x0009, 0x000B, 0x0008, 0x0003, 0x0002, 0x0001, 0x0007];
	var000D = [0x0006, 0x000A, 0x0008, 0x000B, 0x0005, 0x0003, 0x0004, 0x0009, 0x0007, 0x0002, 0x0001];
	var000E = [0x0007, 0x0001, 0x0002, 0x0008, 0x0006, 0x000B, 0x0005, 0x0004, 0x0003, 0x0009, 0x000A];
	var000F = [0x0008, 0x000A, 0x0006, 0x0005, 0x000B, 0x0003, 0x0004, 0x0009, 0x0007, 0x0002, 0x0001];
	var0010 = [0x0009, 0x0004, 0x0005, 0x0008, 0x000A, 0x0003, 0x0006, 0x000B, 0x0007, 0x0002, 0x0001];
	var0011 = [0x000A, 0x0004, 0x0006, 0x0002, 0x0008, 0x0005, 0x0009, 0x000B, 0x0001, 0x0007, 0x0003];
	var0012 = [0x000B, 0x0003, 0x0008, 0x0006, 0x0004, 0x0009, 0x0007, 0x0005, 0x0001, 0x000A, 0x0002];
	if (!(!(var0000 in var0006))) goto labelFunc0992_0239;
	var0000 = 0x0001;
labelFunc0992_0239:
	if (!(var0000 == 0x0001)) goto labelFunc0992_02C4;
	var0013 = false;
labelFunc0992_0247:
	if (!(var0013 == false)) goto labelFunc0992_0271;
	var0014 = UI_get_random(var0005);
	if (!(UI_get_npc_number(var0004[var0014]) != 0xFE9C)) goto labelFunc0992_026E;
	var0013 = true;
labelFunc0992_026E:
	goto labelFunc0992_0247;
labelFunc0992_0271:
	if (!(var0004[var0014] == 0xFED3)) goto labelFunc0992_0287;
	var0000 = 0xFED3;
	goto labelFunc0992_0294;
labelFunc0992_0287:
	var0000 = UI_get_npc_number(var0004[var0014]);
labelFunc0992_0294:
	if (!(var0001 != 0x0000)) goto labelFunc0992_02BC;
	if (!var0003) goto labelFunc0992_02B3;
	Func097F(var0000, var0001, 0x0000);
	goto labelFunc0992_02BC;
labelFunc0992_02B3:
	Func094E(var0000, var0001);
labelFunc0992_02BC:
	return var0000;
	abort;
	goto labelFunc0992_0322;
labelFunc0992_02C4:
	if (!(UI_get_npc_object(var0000) in var0004)) goto labelFunc0992_0302;
	if (!(var0001 != 0x0000)) goto labelFunc0992_02FA;
	if (!var0003) goto labelFunc0992_02F1;
	Func097F(var0000, var0001, 0x0000);
	goto labelFunc0992_02FA;
labelFunc0992_02F1:
	Func094E(var0000, var0001);
labelFunc0992_02FA:
	return var0000;
	abort;
	goto labelFunc0992_0322;
labelFunc0992_0302:
	var0014 = 0x0001;
labelFunc0992_0308:
	if (!(var0006[var0014] != var0000)) goto labelFunc0992_0322;
	var0014 = (var0014 + 0x0001);
	goto labelFunc0992_0308;
labelFunc0992_0322:
	if (!(var0008[0x0001] == var0014)) goto labelFunc0992_0335;
	var0015 = var0008;
labelFunc0992_0335:
	if (!(var0009[0x0001] == var0014)) goto labelFunc0992_0348;
	var0015 = var0009;
labelFunc0992_0348:
	if (!(var000A[0x0001] == var0014)) goto labelFunc0992_035B;
	var0015 = var000A;
labelFunc0992_035B:
	if (!(var000B[0x0001] == var0014)) goto labelFunc0992_036E;
	var0015 = var000B;
labelFunc0992_036E:
	if (!(var000C[0x0001] == var0014)) goto labelFunc0992_0381;
	var0015 = var000C;
labelFunc0992_0381:
	if (!(var000D[0x0001] == var0014)) goto labelFunc0992_0394;
	var0015 = var000D;
labelFunc0992_0394:
	if (!(var000E[0x0001] == var0014)) goto labelFunc0992_03A7;
	var0015 = var000E;
labelFunc0992_03A7:
	if (!(var000F[0x0001] == var0014)) goto labelFunc0992_03BA;
	var0015 = var000F;
labelFunc0992_03BA:
	if (!(var0010[0x0001] == var0014)) goto labelFunc0992_03CD;
	var0015 = var0010;
labelFunc0992_03CD:
	if (!(var0011[0x0001] == var0014)) goto labelFunc0992_03E0;
	var0015 = var0011;
labelFunc0992_03E0:
	if (!(var0012[0x0001] == var0014)) goto labelFunc0992_03F3;
	var0015 = var0012;
labelFunc0992_03F3:
	var0014 = 0x0002;
	var0016 = (var0007 + 0x0001);
labelFunc0992_0403:
	if (!(var0014 != var0016)) goto labelFunc0992_0491;
	var0000 = var0006[var0015[var0014]];
	if (!(UI_get_npc_object(var0000) in var0004)) goto labelFunc0992_0457;
	if (!(var0001 != 0x0000)) goto labelFunc0992_044F;
	if (!var0003) goto labelFunc0992_0446;
	Func097F(var0000, var0001, 0x0000);
	goto labelFunc0992_044F;
labelFunc0992_0446:
	Func094E(var0000, var0001);
labelFunc0992_044F:
	return var0000;
	abort;
	goto labelFunc0992_0484;
labelFunc0992_0457:
	if (!((var0000 == 0xFFDE) && (0xFED3 in var0004))) goto labelFunc0992_0484;
	var0000 = 0xFED3;
	if (!(!var0003)) goto labelFunc0992_047F;
	Func094E(var0000, var0001);
labelFunc0992_047F:
	return var0000;
	abort;
labelFunc0992_0484:
	var0014 = (var0014 + 0x0001);
	goto labelFunc0992_0403;
labelFunc0992_0491:
	UI_error_message("OrderList or NotThereList improperly maintained - see\r\n\t\t~PartyUtters function");
	var0017 = "";
	var0018 = UI_get_party_list();
	enum();
labelFunc0992_04A6:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc0992_04C6;
	var0017 = (var0017 & (var001B & UI_get_npc_name(var001B)));
	goto labelFunc0992_04A6;
labelFunc0992_04C6:
	if (!(Func097D(0xFE9B, 0x0001, 0x031F, 0xFE99, 0x0012) && (!var0003))) goto labelFunc0992_04EE;
	var0017 = (var0017 & (0xFED3 & "Boydon's head in party"));
labelFunc0992_04EE:
	UI_error_message("Copy down this information with the error");
	UI_error_message(var0017);
	return 0;
}


