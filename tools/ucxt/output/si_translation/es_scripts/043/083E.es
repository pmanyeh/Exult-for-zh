#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func083F 0x83F (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func083E 0x83E ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "ale"];
	var0004 = [0x0000, 0x0268];
	var0005 = [0xFE99, 0x0009];
	var0006 = [0x0000, 0x000C];
	var0007 = [0x0000, 0x0006];
	var0008 = 0x03B4;
	var0009 = [0x0000, 0x0001];
	var000A = [0x0000, 0x0001];
	message("\"What can I get ye?\"");
	say();
labelFunc083E_0072:
	if (!var0002) goto labelFunc083E_0201;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc083E_0096;
	message("\"Then why'dst thou ask in the first place?\"");
	say();
	var0002 = false;
	goto labelFunc083E_01FE;
labelFunc083E_0096:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc083E_00B9;
	message("\"That'll be ");
	message(var000C);
	message(" filari for a bottle of fine Fawn ale. Wouldst thou care for any?\"");
	say();
labelFunc083E_00B9:
	if (!(var000C == var0007[var000B])) goto labelFunc083E_00DE;
	if (!Func0955()) goto labelFunc083E_00D5;
	var000E = var000C;
	goto labelFunc083E_00DB;
labelFunc083E_00D5:
	var000E = 0x0000;
labelFunc083E_00DB:
	goto labelFunc083E_00F0;
labelFunc083E_00DE:
	var000E = Func083F(var0006[var000B], var0007[var000B]);
labelFunc083E_00F0:
	if (!(var000E > 0x0000)) goto labelFunc083E_0155;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc083E_0130;
	message("\"How many bottles wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var0008, var000E, 0x0014, 0x0001, false);
	goto labelFunc083E_0155;
labelFunc083E_0130:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000E, 0x0000, 0x0001, false);
labelFunc083E_0155:
	if (!(var000D == 0x0001)) goto labelFunc083E_016C;
	message("\"Cheers, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc083E_01F4;
labelFunc083E_016C:
	if (!(var000D == 0x0002)) goto labelFunc083E_017D;
	message("\"Thou shouldst not travel so heavily burdened -- I do not think that thou canst bear the bottles that thou desirest!\"");
	say();
	goto labelFunc083E_01F4;
labelFunc083E_017D:
	if (!(var000D == 0x0003)) goto labelFunc083E_01F4;
	var000F = Func0992(0x0001, (("@But " + var0000) + ", we do not have the filari to pay for this.@"), 0x0000, false);
	if (!(var000F != 0xFE9C)) goto labelFunc083E_01BB;
	UI_show_npc_face0(0xFFCC, 0x0000);
	message("\"I don't allow no beggars in here!\"");
	say();
	abort;
	goto labelFunc083E_01C0;
labelFunc083E_01BB:
	message("\"If thou canst not pay, then thou canst leave!\"");
	say();
	abort;
labelFunc083E_01C0:
	if (!(0x001F < (UI_get_npc_id(0xFFCC) + 0x0006))) goto labelFunc083E_01DF;
	UI_set_npc_id(0xFFCC, 0x001F);
	goto labelFunc083E_01F1;
labelFunc083E_01DF:
	UI_set_npc_id(0xFFCC, (UI_get_npc_id(0xFFCC) + 0x0006));
labelFunc083E_01F1:
	goto labelFunc083E_01F4;
labelFunc083E_01F4:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc083E_01FE:
	goto labelFunc083E_0072;
labelFunc083E_0201:
	UI_pop_answers();
	return;
}


