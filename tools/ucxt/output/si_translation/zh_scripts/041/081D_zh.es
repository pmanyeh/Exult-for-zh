#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func081D 0x81D ()
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
	message("\"To barter coins, I ask for a small fee of the money exchanged. Dost thou accept?\"");
	say();
	if (!Func0955()) goto labelFunc081D_0E95;
labelFunc081D_000E:
	if (!var0000) goto labelFunc081D_0E92;
	message("\"What coinage dost thou desire?\"");
	say();
	var0001 = Func0956(["Monetari", "Guilders", "Filari", "Gold Coins"]);
	if (!(var0001 == "Monetari")) goto labelFunc081D_03A5;
	message("\"What dost thou care to exchange for monetari?\"");
	say();
	var0002 = 0x03B7;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_0069;
	var0003 = (var0003 & "Guilders");
labelFunc081D_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0088;
	var0003 = (var0003 & "Filari");
labelFunc081D_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_00A7;
	var0003 = (var0003 & "Gold Coins");
labelFunc081D_00A7:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_00C6;
	var0003 = (var0003 & "Gold Nuggets");
labelFunc081D_00C6:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_00E5;
	var0003 = (var0003 & "Gems");
labelFunc081D_00E5:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_0104;
	var0003 = (var0003 & "Jewelry");
labelFunc081D_0104:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc081D_0122;
	message("\"Very well... perhaps another time.\"");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_0122:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0136;
	message("\"I can give thee 1 monetari for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc081D_0136:
	if (!(var0004 == "Filari")) goto labelFunc081D_014A;
	message("\"I can give thee 1 monetari for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc081D_014A:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_015E;
	message("\"I can give thee 1 monetari for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc081D_015E:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_0172;
	message("\"I can give thee 10 monetari for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc081D_0172:
	if (!(var0004 == "Gems")) goto labelFunc081D_0186;
	message("\"I can give thee 25 monetari for every gem thou dost have.\"");
	say();
	var0005 = 0x02F8;
labelFunc081D_0186:
	if (!(var0004 == "Jewelry")) goto labelFunc081D_01A0;
	message("\"I can give thee 100 monetari for any piece of jewelry thou hast.\"");
	say();
	var0005 = 0x03A9;
	var0004 = "pieces of jewelry";
labelFunc081D_01A0:
	message("\"Dost thou find the rate acceptable?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_03A1;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_01CF;
	var0006 = 0x01F4;
labelFunc081D_01CF:
	if (!(var0006 != 0x0000)) goto labelFunc081D_038E;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0207;
	message("\"Perhaps another time then...\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0207:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0221;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc081D_0221:
	if (!(var0004 == "Filari")) goto labelFunc081D_023B;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc081D_023B:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_0255;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc081D_0255:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_0279;
	var0008 = (var0007 * 0x000A);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0279;
	var0004 = "Gold Nugget";
labelFunc081D_0279:
	if (!(var0004 == "Gems")) goto labelFunc081D_029D;
	var0008 = (var0007 * 0x0019);
	if (!(var0007 == 0x0001)) goto labelFunc081D_029D;
	var0004 = "Gem";
labelFunc081D_029D:
	if (!(var0004 == "pieces of jewelry")) goto labelFunc081D_02C7;
	var0008 = (var0007 * 0x0064);
	var0004 = "pieces of jewelry";
	if (!(var0007 == 0x0001)) goto labelFunc081D_02C7;
	var0004 = "piece of jewelry";
labelFunc081D_02C7:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc081D_02FE;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_02FE:
	if (!(var0008 == 0x0001)) goto labelFunc081D_030F;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_030F:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0329;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0329:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0387;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Very well...\" ~\"I will take thy ");
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
	message("\"'Tis done!\"");
	say();
	goto labelFunc081D_038B;
labelFunc081D_0387:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_038B:
	goto labelFunc081D_039E;
labelFunc081D_038E:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc081D_039E:
	goto labelFunc081D_03A5;
labelFunc081D_03A1:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_03A5:
	if (!(var0001 == "Guilders")) goto labelFunc081D_0757;
	message("\"What dost thou care to exchange for guilders?\"");
	say();
	var0002 = 0x03B8;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_03E1;
	var0003 = (var0003 & "Monetari");
labelFunc081D_03E1:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0400;
	var0003 = (var0003 & "Filari");
labelFunc081D_0400:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_041F;
	var0003 = (var0003 & "Gold Coins");
labelFunc081D_041F:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_043E;
	var0003 = (var0003 & "Gold Nuggets");
labelFunc081D_043E:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_045D;
	var0003 = (var0003 & "Gems");
labelFunc081D_045D:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_047C;
	var0003 = (var0003 & "Jewelry");
labelFunc081D_047C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc081D_049A;
	message("\"Very well... perhaps another time.\"");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_049A:
	if (!(var0004 == "Monetari")) goto labelFunc081D_04AE;
	message("\"I can give thee 3 guilders for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc081D_04AE:
	if (!(var0004 == "Filari")) goto labelFunc081D_04C2;
	message("\"I can give thee 3 guilders for every 4 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc081D_04C2:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_04D6;
	message("\"I can give thee 3 guilders for every 2 gold coins thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc081D_04D6:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_04EA;
	message("\"I can give thee 30 guilders for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc081D_04EA:
	if (!(var0004 == "Gems")) goto labelFunc081D_04FE;
	message("\"I can give thee 75 guilders for every gem thou dost have.\"");
	say();
	var0005 = 0x02F8;
labelFunc081D_04FE:
	if (!(var0004 == "Jewelry")) goto labelFunc081D_0518;
	message("\"I can give thee 300 guilders for any piece of jewelry thou hast.\"");
	say();
	var0005 = 0x03A9;
	var0004 = "pieces of jewelry";
labelFunc081D_0518:
	message("\"Dost thou find the rate acceptable?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0753;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_0547;
	var0006 = 0x01F4;
labelFunc081D_0547:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0740;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_057F;
	message("\"Perhaps another time then...\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_057F:
	if (!(var0004 == "Monetari")) goto labelFunc081D_0593;
	var0008 = (var0007 * 0x0003);
labelFunc081D_0593:
	if (!(var0004 == "Filari")) goto labelFunc081D_05B1;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc081D_05B1:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_05CF;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc081D_05CF:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_05F3;
	var0008 = (var0007 * 0x001E);
	if (!(var0007 == 0x0001)) goto labelFunc081D_05F3;
	var0004 = "Gold Nugget";
labelFunc081D_05F3:
	if (!(var0004 == "Gems")) goto labelFunc081D_0617;
	var0008 = (var0007 * 0x004B);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0617;
	var0004 = "Gem";
labelFunc081D_0617:
	if (!(var0004 == "pieces of jewelry")) goto labelFunc081D_0641;
	var0008 = (var0007 * 0x012C);
	var0004 = "pieces of jewelry";
	if (!(var0007 == 0x0001)) goto labelFunc081D_0641;
	var0004 = "piece of jewelry";
labelFunc081D_0641:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	var000E = "Guilders";
	var000F = "Guilders";
	if (!(var0008 == 0x0000)) goto labelFunc081D_0684;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0684:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0695;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0695:
	if (!(var0008 <= 0x0019)) goto labelFunc081D_06AF;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_06AF:
	if (!(var000B == 0x0001)) goto labelFunc081D_06BF;
	var000E = "Guilder";
labelFunc081D_06BF:
	if (!(var000A == 0x0001)) goto labelFunc081D_06CF;
	var000F = "Guilder";
labelFunc081D_06CF:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0739;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Very well...\" ~\"I will take thy ");
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
	message("\"'Tis done!\"");
	say();
	goto labelFunc081D_073D;
labelFunc081D_0739:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_073D:
	goto labelFunc081D_0750;
labelFunc081D_0740:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc081D_0750:
	goto labelFunc081D_0757;
labelFunc081D_0753:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_0757:
	if (!(var0001 == "Filari")) goto labelFunc081D_0AD7;
	message("\"What dost thou care to exchange for filari?\"");
	say();
	var0002 = 0x03B4;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_0793;
	var0003 = (var0003 & "Monetari");
labelFunc081D_0793:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_07B2;
	var0003 = (var0003 & "Guilders");
labelFunc081D_07B2:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_07D1;
	var0003 = (var0003 & "Gold Coins");
labelFunc081D_07D1:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_07F0;
	var0003 = (var0003 & "Gold Nuggets");
labelFunc081D_07F0:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_080F;
	var0003 = (var0003 & "Gems");
labelFunc081D_080F:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_082E;
	var0003 = (var0003 & "Jewelry");
labelFunc081D_082E:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc081D_084C;
	message("\"Very well... perhaps another time.\"");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_084C:
	if (!(var0004 == "Monetari")) goto labelFunc081D_0860;
	message("\"I can give thee 4 filari for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc081D_0860:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0874;
	message("\"I can give thee 4 filari for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc081D_0874:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_0888;
	message("\"I can give thee 2 filari for every 1 gold coin thou hast.\"");
	say();
	var0005 = 0x0284;
labelFunc081D_0888:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_089C;
	message("\"I can give thee 40 filari for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc081D_089C:
	if (!(var0004 == "Gems")) goto labelFunc081D_08B0;
	message("\"I can give thee 100 filari for every gem thou dost have.\"");
	say();
	var0005 = 0x02F8;
labelFunc081D_08B0:
	if (!(var0004 == "Jewelry")) goto labelFunc081D_08CA;
	message("\"I can give thee 400 filari for any piece of jewelry thou hast.\"");
	say();
	var0005 = 0x03A9;
	var0004 = "pieces of jewelry";
labelFunc081D_08CA:
	message("\"Dost thou find the rate acceptable?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0AD3;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_08F9;
	var0006 = 0x01F4;
labelFunc081D_08F9:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0AC0;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0931;
	message("\"Perhaps another time then...\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0931:
	if (!(var0004 == "Monetari")) goto labelFunc081D_0945;
	var0008 = (var0007 * 0x0004);
labelFunc081D_0945:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0963;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc081D_0963:
	if (!(var0004 == "Gold Coins")) goto labelFunc081D_0987;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0987;
	var0004 = "Gold Coin";
labelFunc081D_0987:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_09AB;
	var0008 = (var0007 * 0x0028);
	if (!(var0007 == 0x0001)) goto labelFunc081D_09AB;
	var0004 = "Gold Nugget";
labelFunc081D_09AB:
	if (!(var0004 == "Gems")) goto labelFunc081D_09CF;
	var0008 = (var0007 * 0x0064);
	if (!(var0007 == 0x0001)) goto labelFunc081D_09CF;
	var0004 = "Gem";
labelFunc081D_09CF:
	if (!(var0004 == "pieces of jewelry")) goto labelFunc081D_09F9;
	var0008 = (var0007 * 0x0190);
	var0004 = "pieces of jewelry";
	if (!(var0007 == 0x0001)) goto labelFunc081D_09F9;
	var0004 = "piece of jewelry";
labelFunc081D_09F9:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc081D_0A30;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0A30:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0A41;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0A41:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0A5B;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0A5B:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0AB9;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Very well...\" ~\"I will take thy ");
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
	message("\"'Tis done!\"");
	say();
	goto labelFunc081D_0ABD;
labelFunc081D_0AB9:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_0ABD:
	goto labelFunc081D_0AD0;
labelFunc081D_0AC0:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc081D_0AD0:
	goto labelFunc081D_0AD7;
labelFunc081D_0AD3:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_0AD7:
	if (!(var0001 == "Gold Coins")) goto labelFunc081D_0E85;
	message("\"What dost thou care to exchange for gold?\"");
	say();
	var0002 = 0x0284;
	var0003 = ["Nothing"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_0B13;
	var0003 = (var0003 & "Monetari");
labelFunc081D_0B13:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0B32;
	var0003 = (var0003 & "Filari");
labelFunc081D_0B32:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_0B51;
	var0003 = (var0003 & "Guilders");
labelFunc081D_0B51:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_0B70;
	var0003 = (var0003 & "Gold Nuggets");
labelFunc081D_0B70:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_0B8F;
	var0003 = (var0003 & "Gems");
labelFunc081D_0B8F:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_0BAE;
	var0003 = (var0003 & "Jewelry");
labelFunc081D_0BAE:
	var0004 = Func0956(var0003);
	if (!(var0004 == "Nothing")) goto labelFunc081D_0BCC;
	message("\"Very well... perhaps another time.\"");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_0BCC:
	if (!(var0004 == "Monetari")) goto labelFunc081D_0BE0;
	message("\"I can give thee 2 gold coins for every 1 monetari thou hast.\"");
	say();
	var0005 = 0x03B7;
labelFunc081D_0BE0:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0BF4;
	message("\"I can give thee 2 gold coins for every 3 guilders thou hast.\"");
	say();
	var0005 = 0x03B8;
labelFunc081D_0BF4:
	if (!(var0004 == "Filari")) goto labelFunc081D_0C08;
	message("\"I can give thee 1 gold coin for every 2 filari thou hast.\"");
	say();
	var0005 = 0x03B4;
labelFunc081D_0C08:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_0C1C;
	message("\"I can give thee 20 gold coins for every 1 gold nugget thou hast.\"");
	say();
	var0005 = 0x0285;
labelFunc081D_0C1C:
	if (!(var0004 == "Gems")) goto labelFunc081D_0C30;
	message("\"I can give thee 50 gold coins for every gem thou dost have.\"");
	say();
	var0005 = 0x02F8;
labelFunc081D_0C30:
	if (!(var0004 == "Jewelry")) goto labelFunc081D_0C4A;
	message("\"I can give thee 200 gold coins for any piece of jewelry thou hast.\"");
	say();
	var0005 = 0x03A9;
	var0004 = "pieces of jewelry";
labelFunc081D_0C4A:
	message("\"Dost thou find the rate acceptable?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0E81;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_0C79;
	var0006 = 0x01F4;
labelFunc081D_0C79:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0E6E;
	message("\"How many ");
	message(var0004);
	message(" wouldst thou like to exchange?\"");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0CB1;
	message("\"Perhaps another time then...\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0CB1:
	if (!(var0004 == "Monetari")) goto labelFunc081D_0CC5;
	var0008 = (var0007 * 0x0002);
labelFunc081D_0CC5:
	if (!(var0004 == "Guilders")) goto labelFunc081D_0CE3;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc081D_0CE3:
	if (!(var0004 == "Filari")) goto labelFunc081D_0CFD;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc081D_0CFD:
	if (!(var0004 == "Gold Nuggets")) goto labelFunc081D_0D21;
	var0008 = (var0007 * 0x0014);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D21;
	var0004 = "Gold Nugget";
labelFunc081D_0D21:
	if (!(var0004 == "Gems")) goto labelFunc081D_0D45;
	var0008 = (var0007 * 0x0032);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D45;
	var0004 = "Gem";
labelFunc081D_0D45:
	if (!(var0004 == "pieces of jewelry")) goto labelFunc081D_0D6F;
	var0008 = (var0007 * 0x00C8);
	var0004 = "pieces of jewelry";
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D6F;
	var0004 = "piece of jewelry";
labelFunc081D_0D6F:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	var000E = "Gold Coins";
	var000F = "Gold Coins";
	if (!(var0008 == 0x0000)) goto labelFunc081D_0DB2;
	message("\"Thou must offer at least ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0DB2:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0DC3;
	message("\"My fee will leave thee with nothing!\"");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0DC3:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0DDD;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0DDD:
	if (!(var000B == 0x0001)) goto labelFunc081D_0DED;
	var000E = "Gold Coin";
labelFunc081D_0DED:
	if (!(var000A == 0x0001)) goto labelFunc081D_0DFD;
	var000F = "Gold Coin";
labelFunc081D_0DFD:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0E67;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("\"Very well...\" ~\"I will take thy ");
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
	message("\"'Tis done!\"");
	say();
	goto labelFunc081D_0E6B;
labelFunc081D_0E67:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_0E6B:
	goto labelFunc081D_0E7E;
labelFunc081D_0E6E:
	message("\"Thou dost not have any ");
	message(var0004);
	message(" to exchange for ");
	message(var0001);
	message("!\"");
	say();
labelFunc081D_0E7E:
	goto labelFunc081D_0E85;
labelFunc081D_0E81:
	message("\"Perhaps another time then...\"");
	say();
labelFunc081D_0E85:
	message("\"Dost thou care to exchange more coins?\"");
	say();
	var0000 = Func0955();
	goto labelFunc081D_000E;
labelFunc081D_0E92:
	goto labelFunc081D_0E99;
labelFunc081D_0E95:
	message("\"If that is what thou dost desire...\"");
	say();
labelFunc081D_0E99:
	return;
}


