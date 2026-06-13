#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0804 0x804 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0803 0x803 ()
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

	var0000 = Func0954();
	var0001 = Func0942(0xFFD2);
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "bag", "bucket", "fishing pole", "candle", "torch", "bedroll", "fur boots", "backpack", "stockings", "great helm", "crossbow", "bolts", "sextant", "mirror"];
	var0004 = [0x0000, 0x0322, 0x032A, 0x0296, 0x0150, 0x0253, 0x0247, 0x024B, 0x0321, 0x02A5, 0x021D, 0x0256, 0x02D3, 0x028A, 0x02A3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0003, 0x0000, 0x0001, 0x0000, 0x0000, 0x0007, 0x0000, 0x0010];
	var0006 = 0x03B4;
	var0007 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001];
	var0008 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000];
	var0009 = [0x0000, 0x001E, 0x0023, 0x0019, 0x0004, 0x0008, 0x0096, 0x0064, 0x00C8, 0x0019, 0x012C, 0x0226, 0x004B, 0x0064, 0x0078];
	var000A = [0x0000, 0x0011, 0x0013, 0x000D, 0x0002, 0x0004, 0x005A, 0x003C, 0x0073, 0x000F, 0x00BE, 0x015E, 0x002D, 0x0032, 0x0046];
	if (!UI_is_pc_female()) goto labelFunc0803_0192;
	var000B = "Milady";
	goto labelFunc0803_0198;
labelFunc0803_0192:
	var000B = "Milord";
labelFunc0803_0198:
	if (!var0002) goto labelFunc0803_0584;
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0803_01BC;
	message("\"Some other time, then.\"");
	say();
	var0002 = false;
	goto labelFunc0803_0581;
labelFunc0803_01BC:
	var000D = var0009[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0004);
	if (!(var000F == 0x0001)) goto labelFunc0803_01E8;
	var0010 = "Dost thou accept?";
labelFunc0803_01E8:
	if (!(var000F == 0x0002)) goto labelFunc0803_01F8;
	var0010 = "Wilt thou accept the price?";
labelFunc0803_01F8:
	if (!(var000F == 0x0003)) goto labelFunc0803_0208;
	var0010 = "Wilt thou agree to this price?";
labelFunc0803_0208:
	if (!(var000F == 0x0004)) goto labelFunc0803_021C;
	var0010 = (var000B + ", dost thou agree?");
labelFunc0803_021C:
	if (!(var000C == 0x0002)) goto labelFunc0803_023C;
	message("\"That will be ");
	message(var000D);
	message(" filari. ");
	message(var0010);
	message("\"");
	say();
	var0011 = "bags";
labelFunc0803_023C:
	if (!(var000C == 0x0003)) goto labelFunc0803_025A;
	message("\"Father stocks finely crafted buckets. He sells them for ");
	message(var000D);
	message(" filari each.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0803_025A:
	if (!(var000C == 0x0004)) goto labelFunc0803_0278;
	message("\"I will sell one to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0803_0278:
	if (!(var000C == 0x0005)) goto labelFunc0803_0298;
	message("\"That will be ");
	message(var000D);
	message(" filari. ");
	message(var0010);
	message("\"");
	say();
	var0011 = "candles";
labelFunc0803_0298:
	if (!(var000C == 0x0006)) goto labelFunc0803_02BC;
	message("\"I can sell one to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "torches";
labelFunc0803_02BC:
	if (!(var000C == 0x0007)) goto labelFunc0803_02DA;
	message("\"I can sell this to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0803_02DA:
	if (!(var000C == 0x0008)) goto labelFunc0803_02FE;
	message("\"I can sell a pair of fine fur-lined boots to thee for ");
	message(var000D);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of fur-lined boots";
labelFunc0803_02FE:
	if (!(var000C == 0x0009)) goto labelFunc0803_0328;
	message("\"These backpacks are made by the women of Fawn, ");
	message(var0000);
	message(". For ");
	message(var000D);
	message("\tfilari, one can be thine.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "backpacks";
labelFunc0803_0328:
	if (!(var000C == 0x000A)) goto labelFunc0803_0352;
	message("\"I make these stockings, ");
	message(var0000);
	message(". Thou canst not find any finer! For ");
	message(var000D);
	message(" filari I can sell thee a pair.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "stockings";
labelFunc0803_0352:
	if (!(var000C == 0x000B)) goto labelFunc0803_0376;
	message("\"For ");
	message(var000D);
	message(" filari I can sell thee a great helm.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "great helms";
labelFunc0803_0376:
	if (!(var000C == 0x000C)) goto labelFunc0803_03A0;
	message("\"The crossbows father stocks are well-kept, ");
	message(var0000);
	message(", and will do thee good against the vile goblins. ");
	message(var000D);
	message(" filari is what father charges for one.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crossbows";
labelFunc0803_03A0:
	if (!(var000C == 0x000D)) goto labelFunc0803_03C4;
	message("\"Crossbow bolts sell for ");
	message(var000D);
	message(" filari for a bundle of twenty.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crossbow bolts, in bundles of twenty,";
labelFunc0803_03C4:
	if (!(var000C == 0x000E)) goto labelFunc0803_03EE;
	message("\"I am not certain if thou wishest to own a sextant, ");
	message(var0000);
	message(", seeing that there now is no sea travel. Father sells them for the low cost of ");
	message(var000D);
	message(" filari each.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "sextants";
labelFunc0803_03EE:
	if (!(var000C == 0x000F)) goto labelFunc0803_0426;
	if (!UI_is_pc_female()) goto labelFunc0803_040C;
	message("\"I suppose I can sell thee one, though I have no idea why thou wouldst want one. We sell hand mirrors at ");
	message(var000D);
	message(" filari each.\"");
	say();
	goto labelFunc0803_0416;
labelFunc0803_040C:
	message("\"What dost thou need a hand mirror for? Surely, thou dost not believe in the virtue of @Beauty@? Well, 'tis not my place to say either way. We sell them for ");
	message(var000D);
	message(" filari each.\"");
	say();
labelFunc0803_0416:
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "hand mirror";
labelFunc0803_0426:
	if (!(var000D == var000A[var000C])) goto labelFunc0803_044B;
	if (!Func0955()) goto labelFunc0803_0442;
	var0012 = var000D;
	goto labelFunc0803_0448;
labelFunc0803_0442:
	var0012 = 0x0000;
labelFunc0803_0448:
	goto labelFunc0803_045D;
labelFunc0803_044B:
	var0012 = Func0804(var0009[var000C], var000A[var000C]);
labelFunc0803_045D:
	if (!(var0012 > 0x0000)) goto labelFunc0803_04C8;
	if (!(var0008[var000C] == 0x0001)) goto labelFunc0803_04A6;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0007[var000C], var0006, var0012, 0x0005, 0x0001, false);
	goto labelFunc0803_04C8;
labelFunc0803_04A6:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0006, var0012, 0x0000, 0x0001, false);
labelFunc0803_04C8:
	if (!(var000E == 0x0001)) goto labelFunc0803_04DF;
	message("\"I am sure that thou wilt enjoy thy purchase, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0803_0571;
labelFunc0803_04DF:
	if (!(var000E == 0x0002)) goto labelFunc0803_04F6;
	message("\"Thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0803_0571;
labelFunc0803_04F6:
	if (!(var000E == 0x0003)) goto labelFunc0803_0571;
	var0013 = Func0992(0x0001, (("@But " + var0000) + ", we haven't the coins to purchase this.@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0803_0539;
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("\"It doth appear that thy purse is empty, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0803_053D;
labelFunc0803_0539:
	message("\"If thou canst not pay for our goods, please say so...\"");
	say();
labelFunc0803_053D:
	if (!(0x001F < (UI_get_npc_id(0xFFD2) + 0x0006))) goto labelFunc0803_055C;
	UI_set_npc_id(0xFFD2, 0x001F);
	goto labelFunc0803_056E;
labelFunc0803_055C:
	UI_set_npc_id(0xFFD2, (UI_get_npc_id(0xFFD2) + 0x0006));
labelFunc0803_056E:
	goto labelFunc0803_0571;
labelFunc0803_0571:
	message("\"Perhaps another purchase, ");
	message(var0000);
	message("?\"");
	say();
	var0002 = Func0955();
labelFunc0803_0581:
	goto labelFunc0803_0198;
labelFunc0803_0584:
	UI_pop_answers();
	return;
}


