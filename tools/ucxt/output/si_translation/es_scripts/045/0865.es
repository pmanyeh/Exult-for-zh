#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0865 0x865 ()
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
	message("\"To barter coins, I charge a small fee of the money exchanged. Dost thou agree?\"");
	say();
	if (!Func0955()) goto labelFunc0865_0A4D;
labelFunc0865_000E:
	if (!var0000) goto labelFunc0865_0A4A;
	message("\"What coinage dost thou desire?\"");
	say();
	var0001 = Func0956(["Monetari", "Guilders", "Filari", "Gold Coins"]);
	if (!(var0001 == "Monetari")) goto labelFunc0865_028E;
	message("\"What dost thou care to exchange for monetari?\"");
	say();
	var0002 = 0x03B7;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_0069;
	var0003 = (var0003 & "Guilders");
labelFunc0865_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_0088;
	var0003 = (var0003 & "Filari");
labelFunc0865_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_00A7;
	var0003 = (var0003 & "Gold Coins");
labelFunc0865_00A7:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc0865_00BF;
	message("\"Thou shouldst not waste my time so! I am a busy man!\"");
	say();
	abort;
labelFunc0865_00BF:
	if (!(var0004 == "Guilders")) goto labelFunc0865_00D3;
	message("\"I can give thee 1 monetari for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc0865_00D3:
	if (!(var0004 == "Filari")) goto labelFunc0865_00E7;
	message("\"I can give thee 1 monetari for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc0865_00E7:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_00FB;
	message("\"I can give thee 1 monetari for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc0865_00FB:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_028A;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_012A;
	var0006 = 0x01F4;
labelFunc0865_012A:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0277;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_0162;
	message("\"Please make up thy mind!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0162:
	if (!(var0004 == "Guilders")) goto labelFunc0865_017C;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc0865_017C:
	if (!(var0004 == "Filari")) goto labelFunc0865_0196;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc0865_0196:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_01B0;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc0865_01B0:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc0865_01E7;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_01E7:
	if (!(var0008 == 0x0001)) goto labelFunc0865_01F8;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_01F8:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0212;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0212:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0270;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and give thee ");
	message(var0008);
	message(" Monetari, subtracting my charge of ");
	message(var000A);
	message(" Monetari, for a final sum of ");
	message(var000B);
	message(" Monetari given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The coins are thine!\"");
	say();
	goto labelFunc0865_0274;
labelFunc0865_0270:
	message("\"Please make up thy mind!\"");
	say();
labelFunc0865_0274:
	goto labelFunc0865_0287;
labelFunc0865_0277:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc0865_0287:
	goto labelFunc0865_028E;
labelFunc0865_028A:
	message("\"Thou wilt find no better rates...\"");
	say();
labelFunc0865_028E:
	if (!(var0001 == "Guilders")) goto labelFunc0865_0529;
	message("\"Which coin dost thou care to exchange for guilders?\"");
	say();
	var0002 = 0x03B8;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_02CA;
	var0003 = (var0003 & "Monetari");
labelFunc0865_02CA:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_02E9;
	var0003 = (var0003 & "Filari");
labelFunc0865_02E9:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_0308;
	var0003 = (var0003 & "Gold Coins");
labelFunc0865_0308:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc0865_0320;
	message("\"Thou shouldst not waste my time so! I am a busy man!\"");
	say();
	abort;
labelFunc0865_0320:
	if (!(var0004 == "Monetari")) goto labelFunc0865_0334;
	message("\"I can give thee 3 guilders for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc0865_0334:
	if (!(var0004 == "Filari")) goto labelFunc0865_0348;
	message("\"I can give thee 3 guilders for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc0865_0348:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_035C;
	message("\"I can give thee 3 guilders for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc0865_035C:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_0525;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_038B;
	var0006 = 0x01F4;
labelFunc0865_038B:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0512;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_03C3;
	message("\"Please make up thy mind!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_03C3:
	if (!(var0004 == "Monetari")) goto labelFunc0865_03D7;
	var0008 = (var0007 * 0x0003);
labelFunc0865_03D7:
	if (!(var0004 == "Filari")) goto labelFunc0865_03F5;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc0865_03F5:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_0413;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc0865_0413:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	var000E = "Guilders";
	var000F = "Guilders";
	if (!(var0008 == 0x0000)) goto labelFunc0865_0456;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0456:
	if (!(var0008 == 0x0001)) goto labelFunc0865_0467;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0467:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0481;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0481:
	if (!(var000B == 0x0001)) goto labelFunc0865_0491;
	var000E = "Guilder";
labelFunc0865_0491:
	if (!(var000A == 0x0001)) goto labelFunc0865_04A1;
	var000F = "Guilder";
labelFunc0865_04A1:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_050B;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and give thee ");
	message(var0008);
	message(" Guilders, subtracting my charge of ");
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
	message("\"The coins are thine!\"");
	say();
	goto labelFunc0865_050F;
labelFunc0865_050B:
	message("\"Please make up thy mind!\"");
	say();
labelFunc0865_050F:
	goto labelFunc0865_0522;
labelFunc0865_0512:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc0865_0522:
	goto labelFunc0865_0529;
labelFunc0865_0525:
	message("\"Thou wilt find no better rates...\"");
	say();
labelFunc0865_0529:
	if (!(var0001 == "Filari")) goto labelFunc0865_0792;
	message("\"Which coin dost thou care to exchange for filari?\"");
	say();
	var0002 = 0x03B4;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_0565;
	var0003 = (var0003 & "Monetari");
labelFunc0865_0565:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_0584;
	var0003 = (var0003 & "Guilders");
labelFunc0865_0584:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_05A3;
	var0003 = (var0003 & "Gold Coins");
labelFunc0865_05A3:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc0865_05BB;
	message("\"Thou shouldst not waste my time so! I am a busy man!\"");
	say();
	abort;
labelFunc0865_05BB:
	if (!(var0004 == "Monetari")) goto labelFunc0865_05CF;
	message("\"I can give thee 4 filari for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc0865_05CF:
	if (!(var0004 == "Guilders")) goto labelFunc0865_05E3;
	message("\"I can give thee 4 filari for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc0865_05E3:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_05F7;
	message("\"I can give thee 2 filari for every 1 gold coin thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc0865_05F7:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_078E;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_0626;
	var0006 = 0x01F4;
labelFunc0865_0626:
	if (!(var0006 != 0x0000)) goto labelFunc0865_077B;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_065E;
	message("\"Please make up thy mind!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_065E:
	if (!(var0004 == "Monetari")) goto labelFunc0865_0672;
	var0008 = (var0007 * 0x0004);
labelFunc0865_0672:
	if (!(var0004 == "Guilders")) goto labelFunc0865_0690;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc0865_0690:
	if (!(var0004 == "Gold Coins")) goto labelFunc0865_06B4;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc0865_06B4;
	var0004 = "Gold Coin";
labelFunc0865_06B4:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc0865_06EB;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_06EB:
	if (!(var0008 == 0x0001)) goto labelFunc0865_06FC;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_06FC:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0716;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0716:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0774;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and give thee ");
	message(var0008);
	message(" Filari, subtracting my charge of ");
	message(var000A);
	message(" Filari, for a final sum of ");
	message(var000B);
	message(" Filari given to thee.\"");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("\"The coins are thine!\"");
	say();
	goto labelFunc0865_0778;
labelFunc0865_0774:
	message("\"Please make up thy mind!\"");
	say();
labelFunc0865_0778:
	goto labelFunc0865_078B;
labelFunc0865_077B:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc0865_078B:
	goto labelFunc0865_0792;
labelFunc0865_078E:
	message("\"Thou wilt find no better rates...\"");
	say();
labelFunc0865_0792:
	if (!(var0001 == "Gold Coins")) goto labelFunc0865_0A3D;
	message("\"Which coin dost thou care to exchange for gold?\"");
	say();
	var0002 = 0x0284;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_07CE;
	var0003 = (var0003 & "Monetari");
labelFunc0865_07CE:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_07ED;
	var0003 = (var0003 & "Filari");
labelFunc0865_07ED:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_080C;
	var0003 = (var0003 & "Guilders");
labelFunc0865_080C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc0865_0824;
	message("\"Thou shouldst not waste my time so! I am a busy man!\"");
	say();
	abort;
labelFunc0865_0824:
	if (!(var0004 == "Monetari")) goto labelFunc0865_0838;
	message("\"I can give thee 2 gold coins for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc0865_0838:
	if (!(var0004 == "Guilders")) goto labelFunc0865_084C;
	message("\"I can give thee 2 gold coins for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc0865_084C:
	if (!(var0004 == "Filari")) goto labelFunc0865_0860;
	message("\"I can give thee 1 gold coin for every 2 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc0865_0860:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc0865_0874;
	message("\"I can give thee 20 gold coins for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc0865_0874:
	message("\"Dost thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_0A39;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_08A3;
	var0006 = 0x01F4;
labelFunc0865_08A3:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0A26;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_08DB;
	message("\"Please make up thy mind!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_08DB:
	if (!(var0004 == "Monetari")) goto labelFunc0865_08EF;
	var0008 = (var0007 * 0x0002);
labelFunc0865_08EF:
	if (!(var0004 == "Guilders")) goto labelFunc0865_090D;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc0865_090D:
	if (!(var0004 == "Filari")) goto labelFunc0865_0927;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc0865_0927:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	var000E = "Gold Coins";
	var000F = "Gold Coins";
	if (!(var0008 == 0x0000)) goto labelFunc0865_096A;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_096A:
	if (!(var0008 == 0x0001)) goto labelFunc0865_097B;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_097B:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0995;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0995:
	if (!(var000B == 0x0001)) goto labelFunc0865_09A5;
	var000E = "Gold Coin";
labelFunc0865_09A5:
	if (!(var000A == 0x0001)) goto labelFunc0865_09B5;
	var000F = "Gold Coin";
labelFunc0865_09B5:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0A1F;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"I will take thy ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" and give thee ");
	message(var0008);
	message(" Gold Coins, subtracting my charge of ");
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
	message("\"The coins are thine!\"");
	say();
	goto labelFunc0865_0A23;
labelFunc0865_0A1F:
	message("\"Please make up thy mind!\"");
	say();
labelFunc0865_0A23:
	goto labelFunc0865_0A36;
labelFunc0865_0A26:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc0865_0A36:
	goto labelFunc0865_0A3D;
labelFunc0865_0A39:
	message("\"Thou wilt find no better rates...\"");
	say();
labelFunc0865_0A3D:
	message("\"Dost thou wish to exchange more coins?\"");
	say();
	var0000 = Func0955();
	goto labelFunc0865_000E;
labelFunc0865_0A4A:
	goto labelFunc0865_0A51;
labelFunc0865_0A4D:
	message("\"Thou wilt find no other moneychangers with such a low fee as mine!\"");
	say();
labelFunc0865_0A51:
	return;
}


