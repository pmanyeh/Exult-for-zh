#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func087B 0x87B ()
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

	var0000 = true;
	message("\"I charge a small amount of the money exchanged. Dost thou accept?\"");
	say();
	if (!Func0955()) goto labelFunc087B_0A4D;
labelFunc087B_000E:
	if (!var0000) goto labelFunc087B_0A4A;
	message("\"What coinage dost thou want?\"");
	say();
	var0001 = Func0956(["Monetari", "Guilders", "Filari", "Gold Coins"]);
	if (!(var0001 == "Monetari")) goto labelFunc087B_028E;
	message("\"What dost thou care to exchange for monetari?\"");
	say();
	var0002 = 0x03B7;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_0069;
	var0003 = (var0003 & "Guilders");
labelFunc087B_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_0088;
	var0003 = (var0003 & "Filari");
labelFunc087B_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_00A7;
	var0003 = (var0003 & "Gold Coins");
labelFunc087B_00A7:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc087B_00BF;
	message("\"Thou shouldst do well not to waste my time so in the future! I am an important man!\"");
	say();
	abort;
labelFunc087B_00BF:
	if (!(var0004 == "Guilders")) goto labelFunc087B_00D3;
	message("\"I can give thee 1 monetari for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc087B_00D3:
	if (!(var0004 == "Filari")) goto labelFunc087B_00E7;
	message("\"I can give thee 1 monetari for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc087B_00E7:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_00FB;
	message("\"I can give thee 1 monetari for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc087B_00FB:
	message("\"Wilt thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_028A;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_012A;
	var0006 = 0x01F4;
labelFunc087B_012A:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0277;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_0162;
	message("\"Couldst thou please decide!?\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0162:
	if (!(var0004 == "Guilders")) goto labelFunc087B_017C;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc087B_017C:
	if (!(var0004 == "Filari")) goto labelFunc087B_0196;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc087B_0196:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_01B0;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc087B_01B0:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc087B_01E7;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_01E7:
	if (!(var0008 == 0x0001)) goto labelFunc087B_01F8;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_01F8:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0212;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0212:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0270;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Hmmm...\"~\"Very well, I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and in exchange give thee ");
	message(var0008);
	message(" Monetari, subtracting my fee of ");
	message(var000A);
	message(" Monetari, for a final sum of ");
	message(var000B);
	message(" Monetari given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The transaction is done!\"");
	say();
	goto labelFunc087B_0274;
labelFunc087B_0270:
	message("\"Couldst thou please make up thy mind!?\"");
	say();
labelFunc087B_0274:
	goto labelFunc087B_0287;
labelFunc087B_0277:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc087B_0287:
	goto labelFunc087B_028E;
labelFunc087B_028A:
	message("\"My rates are the same as every other moneychanger...\"");
	say();
labelFunc087B_028E:
	if (!(var0001 == "Guilders")) goto labelFunc087B_0529;
	message("\"Which coin dost thou care to exchange for guilders?\"");
	say();
	var0002 = 0x03B8;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_02CA;
	var0003 = (var0003 & "Monetari");
labelFunc087B_02CA:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_02E9;
	var0003 = (var0003 & "Filari");
labelFunc087B_02E9:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_0308;
	var0003 = (var0003 & "Gold Coins");
labelFunc087B_0308:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc087B_0320;
	message("\"Thou shouldst do well not to waste my time so in the future! I am an important man!\"");
	say();
	abort;
labelFunc087B_0320:
	if (!(var0004 == "Monetari")) goto labelFunc087B_0334;
	message("\"I can give thee 3 guilders for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc087B_0334:
	if (!(var0004 == "Filari")) goto labelFunc087B_0348;
	message("\"I can give thee 3 guilders for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc087B_0348:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_035C;
	message("\"I can give thee 3 guilders for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc087B_035C:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_0525;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_038B;
	var0006 = 0x01F4;
labelFunc087B_038B:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0512;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_03C3;
	message("\"Couldst thou please make a decision!?\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_03C3:
	if (!(var0004 == "Monetari")) goto labelFunc087B_03D7;
	var0008 = (var0007 * 0x0003);
labelFunc087B_03D7:
	if (!(var0004 == "Filari")) goto labelFunc087B_03F5;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc087B_03F5:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_0413;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc087B_0413:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	var000E = "Guilders";
	var000F = "Guilders";
	if (!(var0008 == 0x0000)) goto labelFunc087B_0456;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0456:
	if (!(var0008 == 0x0001)) goto labelFunc087B_0467;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0467:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0481;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0481:
	if (!(var000B == 0x0001)) goto labelFunc087B_0491;
	var000E = "Guilder";
labelFunc087B_0491:
	if (!(var000A == 0x0001)) goto labelFunc087B_04A1;
	var000F = "Guilder";
labelFunc087B_04A1:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_050B;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Hmmm...\"~\"Very well, I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and in exchange give thee ");
	message(var0008);
	message(" Guilders, subtracting my fee of ");
	message(var000A);
	message(" ");
	message(var000F);
	message(", for a final sum of ");
	message(var000B);
	message(" ");
	message(var000E);
	message(" given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The transaction is done!\"");
	say();
	goto labelFunc087B_050F;
labelFunc087B_050B:
	message("\"Couldst thou please make up thy mind!?\"");
	say();
labelFunc087B_050F:
	goto labelFunc087B_0522;
labelFunc087B_0512:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc087B_0522:
	goto labelFunc087B_0529;
labelFunc087B_0525:
	message("\"My rates are the same as every other moneychanger...\"");
	say();
labelFunc087B_0529:
	if (!(var0001 == "Filari")) goto labelFunc087B_0792;
	message("\"Which coin dost thou care to exchange for filari?\"");
	say();
	var0002 = 0x03B4;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_0565;
	var0003 = (var0003 & "Monetari");
labelFunc087B_0565:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_0584;
	var0003 = (var0003 & "Guilders");
labelFunc087B_0584:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_05A3;
	var0003 = (var0003 & "Gold Coins");
labelFunc087B_05A3:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc087B_05BB;
	message("\"Thou shouldst do well not to waste my time so in the future! I am an important man!\"");
	say();
	abort;
labelFunc087B_05BB:
	if (!(var0004 == "Monetari")) goto labelFunc087B_05CF;
	message("\"I can give thee 4 filari for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc087B_05CF:
	if (!(var0004 == "Guilders")) goto labelFunc087B_05E3;
	message("\"I can give thee 4 filari for for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc087B_05E3:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_05F7;
	message("\"I can give thee 2 filari for every 1 gold coin thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc087B_05F7:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_078E;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_0626;
	var0006 = 0x01F4;
labelFunc087B_0626:
	if (!(var0006 != 0x0000)) goto labelFunc087B_077B;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_065E;
	message("\"Couldst thou please make up thy mind!?\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_065E:
	if (!(var0004 == "Monetari")) goto labelFunc087B_0672;
	var0008 = (var0007 * 0x0004);
labelFunc087B_0672:
	if (!(var0004 == "Guilders")) goto labelFunc087B_0690;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc087B_0690:
	if (!(var0004 == "Gold Coins")) goto labelFunc087B_06B4;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc087B_06B4;
	var0004 = "Gold Coin";
labelFunc087B_06B4:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc087B_06EB;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_06EB:
	if (!(var0008 == 0x0001)) goto labelFunc087B_06FC;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_06FC:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0716;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0716:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0774;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Hmmm...\"~\"Very well, I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and in exchange give thee ");
	message(var0008);
	message(" Filari, subtracting my fee of ");
	message(var000A);
	message(" Filari, for a final sum of ");
	message(var000B);
	message(" Filari given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The transaction is done!\"");
	say();
	goto labelFunc087B_0778;
labelFunc087B_0774:
	message("\"Couldst thou please make up thy mind!?\"");
	say();
labelFunc087B_0778:
	goto labelFunc087B_078B;
labelFunc087B_077B:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc087B_078B:
	goto labelFunc087B_0792;
labelFunc087B_078E:
	message("\"My rates are the same as every other moneychanger...\"");
	say();
labelFunc087B_0792:
	if (!(var0001 == "Gold Coins")) goto labelFunc087B_0A3D;
	message("\"Which coin dost thou care to exchange for gold?\"");
	say();
	var0002 = 0x0284;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_07CE;
	var0003 = (var0003 & "Monetari");
labelFunc087B_07CE:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_07ED;
	var0003 = (var0003 & "Filari");
labelFunc087B_07ED:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_080C;
	var0003 = (var0003 & "Guilders");
labelFunc087B_080C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc087B_0824;
	message("\"Thou shouldst do well not to waste my time so in the future! I am an important man!\"");
	say();
	abort;
labelFunc087B_0824:
	if (!(var0004 == "Monetari")) goto labelFunc087B_0838;
	message("\"I can give thee 2 gold coins for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc087B_0838:
	if (!(var0004 == "Guilders")) goto labelFunc087B_084C;
	message("\"I can give thee 2 gold coins for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc087B_084C:
	if (!(var0004 == "Filari")) goto labelFunc087B_0860;
	message("\"I can give thee 1 gold coin for every 2 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc087B_0860:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc087B_0874;
	message("\"I can give thee 20 gold coins for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc087B_0874:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_0A39;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_08A3;
	var0006 = 0x01F4;
labelFunc087B_08A3:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0A26;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_08DB;
	message("\"Couldst thou please decide!?\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_08DB:
	if (!(var0004 == "Monetari")) goto labelFunc087B_08EF;
	var0008 = (var0007 * 0x0002);
labelFunc087B_08EF:
	if (!(var0004 == "Guilders")) goto labelFunc087B_090D;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc087B_090D:
	if (!(var0004 == "Filari")) goto labelFunc087B_0927;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc087B_0927:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	var000E = "Gold Coins";
	var000F = "Gold Coins";
	if (!(var0008 == 0x0000)) goto labelFunc087B_096A;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_096A:
	if (!(var0008 == 0x0001)) goto labelFunc087B_097B;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_097B:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0995;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0995:
	if (!(var000B == 0x0001)) goto labelFunc087B_09A5;
	var000E = "Gold Coin";
labelFunc087B_09A5:
	if (!(var000A == 0x0001)) goto labelFunc087B_09B5;
	var000F = "Gold Coin";
labelFunc087B_09B5:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0A1F;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Hmmm...\"~\"Very well, I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and in exchange give thee ");
	message(var0008);
	message(" Gold Coins, subtracting my fee of ");
	message(var000A);
	message(" ");
	message(var000F);
	message(", for a final sum of ");
	message(var000B);
	message(" ");
	message(var000E);
	message(" given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The transaction is done!\"");
	say();
	goto labelFunc087B_0A23;
labelFunc087B_0A1F:
	message("\"Couldst thou please make up thy mind!?\"");
	say();
labelFunc087B_0A23:
	goto labelFunc087B_0A36;
labelFunc087B_0A26:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc087B_0A36:
	goto labelFunc087B_0A3D;
labelFunc087B_0A39:
	message("\"My rates are the same as every other moneychanger...\"");
	say();
labelFunc087B_0A3D:
	message("\"Dost thou wish to exchange more coins?\"");
	say();
	var0000 = Func0955();
	goto labelFunc087B_000E;
labelFunc087B_0A4A:
	goto labelFunc087B_0A51;
labelFunc087B_0A4D:
	message("\"Thou wilt find no other moneychangers with such a low fee as mine!\"");
	say();
labelFunc087B_0A51:
	return;
}


