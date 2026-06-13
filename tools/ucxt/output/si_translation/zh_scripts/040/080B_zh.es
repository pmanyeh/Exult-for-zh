#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func080B 0x80B ()
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

	var0000 = Func0954();
	var0001 = true;
	message("\"To exchange coins, I ask for a small percentage of the money bartered. Dost thou agree to this charge?\"");
	say();
	if (!Func0955()) goto labelFunc080B_0F13;
labelFunc080B_0014:
	if (!var0001) goto labelFunc080B_0F10;
	message("\"What coinage dost thou desire?\"");
	say();
	var0002 = Func0956(["Monetari", "Guilders", "Filari", "Gold Coins"]);
	if (!(var0002 == "Monetari")) goto labelFunc080B_03C9;
	message("\"Which coin dost thou care to exchange for monetari?\"");
	say();
	var0003 = 0x03B7;
	var0004 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_006F;
	var0004 = (var0004 & "Guilders");
labelFunc080B_006F:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_008E;
	var0004 = (var0004 & "Filari");
labelFunc080B_008E:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_00AD;
	var0004 = (var0004 & "Gold Coins");
labelFunc080B_00AD:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_00CC;
	var0004 = (var0004 & "Gold Nuggets");
labelFunc080B_00CC:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_00EB;
	var0004 = (var0004 & "Jewelry");
labelFunc080B_00EB:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_010A;
	var0004 = (var0004 & "Gold Bars");
labelFunc080B_010A:
	var0005 = Func0956(var0004);
	if (!(var0005 == "Nothing")) goto labelFunc080B_012E;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_012E:
	if (!(var0005 == "Guilders")) goto labelFunc080B_0142;
	message("\"I can give thee 1 monetari for every 3 guilders thou hast.\"");
	say();
	var0006 = 0x03B8;
labelFunc080B_0142:
	if (!(var0005 == "Filari")) goto labelFunc080B_0156;
	message("\"I can give thee 1 monetari for every 4 filari thou hast.\"");
	say();
	var0006 = 0x03B4;
labelFunc080B_0156:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_016A;
	message("\"I can give thee 1 monetari for every 2 gold coins thou hast.\"");
	say();
	var0006 = 0x0284;
labelFunc080B_016A:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_017E;
	message("\"I can give thee 10 monetari for every 1 gold nugget thou hast.\"");
	say();
	var0006 = 0x0285;
labelFunc080B_017E:
	if (!(var0005 == "Jewelry")) goto labelFunc080B_0198;
	message("\"I can give thee 100 monetari for any piece of jewelry thou hast.\"");
	say();
	var0006 = 0x03A9;
	var0005 = "pieces of jewelry";
labelFunc080B_0198:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_01B2;
	message("\"I can give thee 200 monetari for every gold bar thou hast.\"");
	say();
	var0006 = 0x0286;
	var0005 = "Gold Bars";
labelFunc080B_01B2:
	message("\"Wilt thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_03C5;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_01E1;
	var0007 = 0x01F4;
labelFunc080B_01E1:
	if (!(var0007 != 0x0000)) goto labelFunc080B_03B2;
	message("\"How many ");
	message(var0005);
	message(" wouldst thou like to exchange?\"");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_021F;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_021F:
	if (!(var0005 == "Guilders")) goto labelFunc080B_0239;
	var0009 = (var0008 / 0x0003);
	var000A = 0x0006;
labelFunc080B_0239:
	if (!(var0005 == "Filari")) goto labelFunc080B_0253;
	var0009 = (var0008 / 0x0004);
	var000A = 0x0008;
labelFunc080B_0253:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_026D;
	var0009 = (var0008 / 0x0002);
	var000A = 0x0004;
labelFunc080B_026D:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_0291;
	var0009 = (var0008 * 0x000A);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0291;
	var0005 = "Gold Nugget";
labelFunc080B_0291:
	if (!(var0005 == "pieces of jewelry")) goto labelFunc080B_02BB;
	var0009 = (var0008 * 0x0064);
	var0005 = "pieces of jewelry";
	if (!(var0008 == 0x0001)) goto labelFunc080B_02BB;
	var0005 = "piece of jewelry";
labelFunc080B_02BB:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_02DF;
	var0009 = (var0008 * 0x00C8);
	if (!(var0008 == 0x0001)) goto labelFunc080B_02DF;
	var0005 = "Gold Bar";
labelFunc080B_02DF:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	if (!(var0009 == 0x0000)) goto labelFunc080B_0316;
	message("\"Thou must offer at least ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0316:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0327;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0327:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0341;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0341:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_03A5;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("\"Let me think...\"~\"I will take thy ");
	message(var0008);
	message(" ");
	message(var0005);
	message(" and in exchange give thee ");
	message(var0009);
	message(" Monetari, subtracting my charge of ");
	message(var000B);
	message(" Monetari, for a final sum of ");
	message(var000C);
	message(" Monetari given to thee.\"");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("\"'Tis done, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc080B_03AF;
labelFunc080B_03A5:
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
labelFunc080B_03AF:
	goto labelFunc080B_03C2;
labelFunc080B_03B2:
	message("\"Thou dost not have any ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
labelFunc080B_03C2:
	goto labelFunc080B_03C9;
labelFunc080B_03C5:
	message("\"Perhaps another time then...\"");
	say();
labelFunc080B_03C9:
	if (!(var0002 == "Guilders")) goto labelFunc080B_0799;
	message("\"Which coin dost thou care to exchange for guilders?\"");
	say();
	var0003 = 0x03B8;
	var0004 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_0405;
	var0004 = (var0004 & "Monetari");
labelFunc080B_0405:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_0424;
	var0004 = (var0004 & "Filari");
labelFunc080B_0424:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_0443;
	var0004 = (var0004 & "Gold Coins");
labelFunc080B_0443:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0462;
	var0004 = (var0004 & "Gold Nuggets");
labelFunc080B_0462:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0481;
	var0004 = (var0004 & "Jewelry");
labelFunc080B_0481:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_04A0;
	var0004 = (var0004 & "Gold Bars");
labelFunc080B_04A0:
	var0005 = Func0956(var0004);
	if (!(var0005 == "Nothing")) goto labelFunc080B_04C4;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_04C4:
	if (!(var0005 == "Monetari")) goto labelFunc080B_04D8;
	message("\"I can give thee 3 guilders for every 1 monetari thou hast.\"");
	say();
	var0006 = 0x03B7;
labelFunc080B_04D8:
	if (!(var0005 == "Filari")) goto labelFunc080B_04EC;
	message("\"I can give thee 3 guilders for every 4 filari thou hast.\"");
	say();
	var0006 = 0x03B4;
labelFunc080B_04EC:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_0500;
	message("\"I can give thee 3 guilders for every 2 gold coins thou hast.\"");
	say();
	var0006 = 0x0284;
labelFunc080B_0500:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_0514;
	message("\"I can give thee 30 guilders for every 1 gold nugget thou hast.\"");
	say();
	var0006 = 0x0285;
labelFunc080B_0514:
	if (!(var0005 == "Jewelry")) goto labelFunc080B_052E;
	message("\"I can give thee 300 guilders for any piece of jewelry thou hast.\"");
	say();
	var0006 = 0x03A9;
	var0005 = "pieces of jewelry";
labelFunc080B_052E:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0548;
	message("\"I can give thee 600 guilders for every gold bar thou hast.\"");
	say();
	var0006 = 0x0286;
	var0005 = "Gold Bars";
labelFunc080B_0548:
	message("\"Wilt thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0795;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0577;
	var0007 = 0x01F4;
labelFunc080B_0577:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0782;
	message("\"How many ");
	message(var0005);
	message(" wouldst thou like to exchange?\"");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_05B5;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_05B5:
	if (!(var0005 == "Monetari")) goto labelFunc080B_05C9;
	var0009 = (var0008 * 0x0003);
labelFunc080B_05C9:
	if (!(var0005 == "Filari")) goto labelFunc080B_05E7;
	var0009 = ((var0008 * 0x0003) / 0x0004);
	var000A = 0x0003;
labelFunc080B_05E7:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_0605;
	var0009 = ((var0008 * 0x0003) / 0x0002);
	var000A = 0x0002;
labelFunc080B_0605:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_0629;
	var0009 = (var0008 * 0x001E);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0629;
	var0005 = "Gold Nugget";
labelFunc080B_0629:
	if (!(var0005 == "pieces of jewelry")) goto labelFunc080B_0653;
	var0009 = (var0008 * 0x012C);
	var0005 = "pieces of jewelry";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0653;
	var0005 = "piece of jewelry";
labelFunc080B_0653:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0677;
	var0009 = (var0008 * 0x0258);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0677;
	var0005 = "Gold Bar";
labelFunc080B_0677:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	var000F = "Guilders";
	var0010 = "Guilders";
	if (!(var0009 == 0x0000)) goto labelFunc080B_06BA;
	message("\"Thou must offer at least ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_06BA:
	if (!(var0009 == 0x0001)) goto labelFunc080B_06CB;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_06CB:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_06E5;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_06E5:
	if (!(var000C == 0x0001)) goto labelFunc080B_06F5;
	var000F = "Guilder";
labelFunc080B_06F5:
	if (!(var000B == 0x0001)) goto labelFunc080B_0705;
	var0010 = "Guilder";
labelFunc080B_0705:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0775;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("\"Let me think...\"~\"I will take thy ");
	message(var0008);
	message(" ");
	message(var0005);
	message(" and in exchange give thee ");
	message(var0009);
	message(" Guilders, subtracting my charge of ");
	message(var000B);
	message(" ");
	message(var0010);
	message(", for a final sum of ");
	message(var000C);
	message(" ");
	message(var000F);
	message(" given to thee.\"");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("\"'Tis done, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc080B_077F;
labelFunc080B_0775:
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
labelFunc080B_077F:
	goto labelFunc080B_0792;
labelFunc080B_0782:
	message("\"Thou dost not have any ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
labelFunc080B_0792:
	goto labelFunc080B_0799;
labelFunc080B_0795:
	message("\"Perhaps another time then...\"");
	say();
labelFunc080B_0799:
	if (!(var0002 == "Filari")) goto labelFunc080B_0B37;
	message("\"Which coin dost thou care to exchange for filari?\"");
	say();
	var0003 = 0x03B4;
	var0004 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_07D5;
	var0004 = (var0004 & "Monetari");
labelFunc080B_07D5:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_07F4;
	var0004 = (var0004 & "Guilders");
labelFunc080B_07F4:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_0813;
	var0004 = (var0004 & "Gold Coins");
labelFunc080B_0813:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0832;
	var0004 = (var0004 & "Gold Nuggets");
labelFunc080B_0832:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0851;
	var0004 = (var0004 & "Jewelry");
labelFunc080B_0851:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_0870;
	var0004 = (var0004 & "Gold Bars");
labelFunc080B_0870:
	var0005 = Func0956(var0004);
	if (!(var0005 == "Nothing")) goto labelFunc080B_0894;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_0894:
	if (!(var0005 == "Monetari")) goto labelFunc080B_08A8;
	message("\"I can give thee 4 filari for every 1 monetari thou hast.\"");
	say();
	var0006 = 0x03B7;
labelFunc080B_08A8:
	if (!(var0005 == "Guilders")) goto labelFunc080B_08BC;
	message("\"I can give thee 4 filari for every 3 guilders thou hast.\"");
	say();
	var0006 = 0x03B8;
labelFunc080B_08BC:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_08D0;
	message("\"I can give thee 2 filari for every 1 gold coin thou hast.\"");
	say();
	var0006 = 0x0284;
labelFunc080B_08D0:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_08E4;
	message("\"I can give thee 40 filari for every 1 gold nugget thou hast.\"");
	say();
	var0006 = 0x0285;
labelFunc080B_08E4:
	if (!(var0005 == "Jewelry")) goto labelFunc080B_08FE;
	message("\"I can give thee 400 filari for any piece of jewelry thou hast.\"");
	say();
	var0006 = 0x03A9;
	var0005 = "pieces of jewelry";
labelFunc080B_08FE:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0918;
	message("\"I can give thee 800 filari for every gold bar thou hast.\"");
	say();
	var0006 = 0x0286;
	var0005 = "Gold Bars";
labelFunc080B_0918:
	message("\"Wilt thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0B33;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0947;
	var0007 = 0x01F4;
labelFunc080B_0947:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0B20;
	message("\"How many ");
	message(var0005);
	message(" wouldst thou like to exchange?\"");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_0985;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0985:
	if (!(var0005 == "Monetari")) goto labelFunc080B_0999;
	var0009 = (var0008 * 0x0004);
labelFunc080B_0999:
	if (!(var0005 == "Guilders")) goto labelFunc080B_09B7;
	var0009 = ((var0008 * 0x0004) / 0x0003);
	var000A = 0x0002;
labelFunc080B_09B7:
	if (!(var0005 == "Gold Coins")) goto labelFunc080B_09DB;
	var0009 = (var0008 * 0x0002);
	if (!(var0008 == 0x0001)) goto labelFunc080B_09DB;
	var0005 = "Gold Coin";
labelFunc080B_09DB:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_09FF;
	var0009 = (var0008 * 0x0028);
	if (!(var0008 == 0x0001)) goto labelFunc080B_09FF;
	var0005 = "Gold Nugget";
labelFunc080B_09FF:
	if (!(var0005 == "pieces of jewelry")) goto labelFunc080B_0A29;
	var0009 = (var0008 * 0x0190);
	var0005 = "pieces of jewelry";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0A29;
	var0005 = "piece of jewelry";
labelFunc080B_0A29:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0A4D;
	var0009 = (var0008 * 0x0320);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0A4D;
	var0005 = "Gold Bar";
labelFunc080B_0A4D:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	if (!(var0009 == 0x0000)) goto labelFunc080B_0A84;
	message("\"Thou must offer at least ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0A84:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0A95;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0A95:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0AAF;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0AAF:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0B13;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("\"Let me think...\"~\"I will take thy ");
	message(var0008);
	message(" ");
	message(var0005);
	message(" and in exchange give thee ");
	message(var0009);
	message(" Filari, subtracting my charge of ");
	message(var000B);
	message(" Filari, for a final sum of ");
	message(var000C);
	message(" Filari given to thee.\"");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("\"'Tis done, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc080B_0B1D;
labelFunc080B_0B13:
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
labelFunc080B_0B1D:
	goto labelFunc080B_0B30;
labelFunc080B_0B20:
	message("\"Thou dost not have any ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
labelFunc080B_0B30:
	goto labelFunc080B_0B37;
labelFunc080B_0B33:
	message("\"Perhaps another time then...\"");
	say();
labelFunc080B_0B37:
	if (!(var0002 == "Gold Coins")) goto labelFunc080B_0F03;
	message("\"Which coin dost thou care to exchange for gold?\"");
	say();
	var0003 = 0x0284;
	var0004 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_0B73;
	var0004 = (var0004 & "Monetari");
labelFunc080B_0B73:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_0B92;
	var0004 = (var0004 & "Filari");
labelFunc080B_0B92:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_0BB1;
	var0004 = (var0004 & "Guilders");
labelFunc080B_0BB1:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0BD0;
	var0004 = (var0004 & "Gold Nuggets");
labelFunc080B_0BD0:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0BEF;
	var0004 = (var0004 & "Jewelry");
labelFunc080B_0BEF:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_0C0E;
	var0004 = (var0004 & "Gold Bars");
labelFunc080B_0C0E:
	var0005 = Func0956(var0004);
	if (!(var0005 == "Nothing")) goto labelFunc080B_0C32;
	message("\"Perhaps another time, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_0C32:
	if (!(var0005 == "Monetari")) goto labelFunc080B_0C46;
	message("\"I can give thee 2 gold coins for every 1 monetari thou hast.\"");
	say();
	var0006 = 0x03B7;
labelFunc080B_0C46:
	if (!(var0005 == "Guilders")) goto labelFunc080B_0C5A;
	message("\"I can give thee 2 gold coins for every 3 guilders thou hast.\"");
	say();
	var0006 = 0x03B8;
labelFunc080B_0C5A:
	if (!(var0005 == "Filari")) goto labelFunc080B_0C6E;
	message("\"I can give thee 1 gold coin for every 2 filari thou hast.\"");
	say();
	var0006 = 0x03B4;
labelFunc080B_0C6E:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_0C82;
	message("\"I can give thee 20 gold coins for every 1 gold nugget thou hast.\"");
	say();
	var0006 = 0x0285;
labelFunc080B_0C82:
	if (!(var0005 == "Jewelry")) goto labelFunc080B_0C9C;
	message("\"I can give thee 200 gold coins for any piece of jewelry thou hast.\"");
	say();
	var0006 = 0x03A9;
	var0005 = "pieces of jewelry";
labelFunc080B_0C9C:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0CB6;
	message("\"I can give thee 400 gold coins for every gold bar thou hast.\"");
	say();
	var0006 = 0x0286;
	var0005 = "Gold Bars";
labelFunc080B_0CB6:
	message("\"Wilt thou agree to my rate?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0EFF;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0CE5;
	var0007 = 0x01F4;
labelFunc080B_0CE5:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0EEC;
	message("\"How many ");
	message(var0005);
	message(" wouldst thou like to exchange?\"");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_0D23;
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0D23:
	if (!(var0005 == "Monetari")) goto labelFunc080B_0D37;
	var0009 = (var0008 * 0x0002);
labelFunc080B_0D37:
	if (!(var0005 == "Guilders")) goto labelFunc080B_0D55;
	var0009 = ((var0008 * 0x0002) / 0x0003);
	var000A = 0x0003;
labelFunc080B_0D55:
	if (!(var0005 == "Filari")) goto labelFunc080B_0D6F;
	var0009 = (var0008 / 0x0002);
	var000A = 0x0004;
labelFunc080B_0D6F:
	if (!(var0005 == "Gold Nuggets")) goto labelFunc080B_0D93;
	var0009 = (var0008 * 0x0014);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0D93;
	var0005 = "Gold Nugget";
labelFunc080B_0D93:
	if (!(var0005 == "pieces of jewelry")) goto labelFunc080B_0DBD;
	var0009 = (var0008 * 0x00C8);
	var0005 = "pieces of jewelry";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0DBD;
	var0005 = "piece of jewelry";
labelFunc080B_0DBD:
	if (!(var0005 == "Gold Bars")) goto labelFunc080B_0DE1;
	var0009 = (var0008 * 0x0190);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0DE1;
	var0005 = "Gold Bar";
labelFunc080B_0DE1:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	var000F = "Gold Coins";
	var0010 = "Gold Coins";
	if (!(var0009 == 0x0000)) goto labelFunc080B_0E24;
	message("\"Thou must offer at least ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0E24:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0E35;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0E35:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0E4F;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0E4F:
	if (!(var000C == 0x0001)) goto labelFunc080B_0E5F;
	var000F = "Gold Coin";
labelFunc080B_0E5F:
	if (!(var000B == 0x0001)) goto labelFunc080B_0E6F;
	var0010 = "Gold Coin";
labelFunc080B_0E6F:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0EDF;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("\"Let me think...\"~\"I will take thy ");
	message(var0008);
	message(" ");
	message(var0005);
	message(" and in exchange give thee ");
	message(var0009);
	message(" Gold Coins, subtracting my charge of ");
	message(var000B);
	message(" ");
	message(var0010);
	message(", for a final sum of ");
	message(var000C);
	message(" ");
	message(var000F);
	message(" given to thee.\"");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("\"'Tis done, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc080B_0EE9;
labelFunc080B_0EDF:
	message("\"Perhaps another time, ");
	message(var0000);
	message("...\"");
	say();
labelFunc080B_0EE9:
	goto labelFunc080B_0EFC;
labelFunc080B_0EEC:
	message("\"Thou dost not have any ");
	message(var0005);
	message(" to exchange for ");
	message(var0002);
	message("!\"");
	say();
labelFunc080B_0EFC:
	goto labelFunc080B_0F03;
labelFunc080B_0EFF:
	message("\"Perhaps another time then...\"");
	say();
labelFunc080B_0F03:
	message("\"Dost thou care to exchange more coins?\"");
	say();
	var0001 = Func0955();
	goto labelFunc080B_0014;
labelFunc080B_0F10:
	goto labelFunc080B_0F17;
labelFunc080B_0F13:
	message("\"If that is what thou dost desire...\"");
	say();
labelFunc080B_0F17:
	return;
}


