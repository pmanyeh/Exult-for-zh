#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0955 0x955 ();
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func0836 0x836 ()
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

	var0000 = Func0953();
	var0001 = 0x03B7;
	var0002 = UI_count_objects(0xFE9B, var0001, 0xFE99, 0xFE99);
	var0003 = false;
	var0004 = false;
	var0005 = true;
	if (!(!gflags[0x005B])) goto labelFunc0836_01F3;
	message("\"I charge 30 monetari, and no less, to perform mine healing. Is this acceptable?\"");
	say();
	if (!Func0955()) goto labelFunc0836_01EC;
	if (!(var0002 < 0x001E)) goto labelFunc0836_004B;
	message("\"Thou dost not have the monetari to pay me!\"");
	say();
	abort;
labelFunc0836_004B:
	message("\"Whom dost thou wish to heal?\"");
	say();
labelFunc0836_004F:
	if (!var0005) goto labelFunc0836_01E9;
labelFunc0836_0055:
	var0006 = 0x001E;
	if (!(var0003 == true)) goto labelFunc0836_0069;
	var0006 = 0x0000;
labelFunc0836_0069:
	var0007 = Func098E();
	var0007 = (0x0000 & var0007);
	var0008 = ["nobody"];
	enum();
labelFunc0836_0083:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc0836_00AA;
	if (!(!(var000B == 0x0000))) goto labelFunc0836_00A7;
	var0008 = (var0008 & UI_get_npc_name(var000B));
labelFunc0836_00A7:
	goto labelFunc0836_0083;
labelFunc0836_00AA:
	var000C = Func0957(var0008);
	var000C = var0007[var000C];
	if (!(var000C == 0x0000)) goto labelFunc0836_00C9;
	goto labelFunc0836_0208;
labelFunc0836_00C9:
	var000D = UI_get_npc_number(var000C);
	var000E = UI_get_item_flag(var000C, 0x0008);
	var000F = Func095C(var000C, 0x0000);
	var0010 = Func095C(var000C, 0x0003);
	var0011 = UI_get_npc_name(var000C);
	if (!(var000F > var0010)) goto labelFunc0836_0141;
	var0012 = (var000F - var0010);
	Func095E(var000D, 0x0003, var0012);
	var0013 = UI_remove_party_items(var0006, var0001, 0xFE99, 0xFE99, true);
	var0004 = true;
	message("\"The bodily wounds have been healed.\"");
	say();
	goto labelFunc0836_0197;
labelFunc0836_0141:
	if (!(var000E == false)) goto labelFunc0836_0167;
	if (!(var000D == 0xFE9C)) goto labelFunc0836_015A;
	message("\"Thou seemest quite healthy!\"");
	say();
	goto labelFunc0836_0164;
labelFunc0836_015A:
	message("\"");
	message(var0011);
	message(" is already healthy!\"");
	say();
labelFunc0836_0164:
	goto labelFunc0836_0197;
labelFunc0836_0167:
	if (!(var000D == 0xFE9C)) goto labelFunc0836_018D;
	if (!(gflags[0x0098] && (!gflags[0x005A]))) goto labelFunc0836_0186;
	message("\"Before I can cure this affliction, thou must needs bring me five Varo leaves from Delphynia, the horticulturist in Fawn!\"");
	say();
	goto labelFunc0836_0208;
	goto labelFunc0836_018A;
labelFunc0836_0186:
	message("\"Thou art poisoned! Fortunately, the poison can easily be removed from thy body.\"");
	say();
labelFunc0836_018A:
	goto labelFunc0836_0197;
labelFunc0836_018D:
	message("\"");
	message(var0011);
	message(" is poisoned! At least it is a simple venom to cure.\"");
	say();
labelFunc0836_0197:
	if (!((var000D == 0xFE9C) && ((gflags[0x0098] == true) && (gflags[0x005A] == false)))) goto labelFunc0836_01B4;
	message("\"I have healed thy body of the ravages of the poison, but the effects shall keep occurring until thou art dead. Thou must bring me five Varo leaves from Delphynia, the horticulturist in Fawn, before I can permanently cure thee of this affliction!\"");
	say();
	goto labelFunc0836_0208;
labelFunc0836_01B4:
	if (!(var000E == true)) goto labelFunc0836_01E6;
	if (!(var0004 == false)) goto labelFunc0836_01D8;
	var0013 = UI_remove_party_items(var0006, var0001, 0xFE99, 0xFE99, true);
labelFunc0836_01D8:
	UI_clear_item_flag(var000C, 0x0008);
	message("\"The poisoning hath been healed.\"");
	say();
labelFunc0836_01E6:
	goto labelFunc0836_004F;
labelFunc0836_01E9:
	goto labelFunc0836_01F0;
labelFunc0836_01EC:
	message("\"Some other time, then.\"");
	say();
labelFunc0836_01F0:
	goto labelFunc0836_0208;
labelFunc0836_01F3:
	message("\"As thou hast aided me so shall I help thee, ");
	message(var0000);
	message(". I will perform mine healing free of charge.\"");
	say();
	message("\"Whom dost thou wish to heal?\"");
	say();
	var0003 = true;
	goto labelFunc0836_0055;
labelFunc0836_0208:
	return;
}


