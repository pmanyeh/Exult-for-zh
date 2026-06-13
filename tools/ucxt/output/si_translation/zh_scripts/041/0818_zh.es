#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();
extern var Func0819 0x819 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0818 0x818 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "bag", "bucket", "fishing pole", "candle", "torch", "bedroll", "fur boots", "backpack", "stockings", "great helm", "crossbow", "bolts", "sextant", "mirror"];
	var0003 = [0x0000, 0x0322, 0x032A, 0x0296, 0x0150, 0x0253, 0x0247, 0x024B, 0x0321, 0x02A5, 0x021D, 0x0256, 0x02D3, 0x028A, 0x02A3];
	var0004 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0003, 0x0000, 0x0001, 0x0000, 0x0000, 0x0007, 0x0000, 0x0010];
	var0005 = 0x03B4;
	var0006 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001];
	var0007 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000];
	if (!((gflags[0x01A1] == true) && (gflags[0x01A2] == false))) goto labelFunc0818_018E;
	var0008 = [0x0000, 0x000F, 0x0012, 0x000C, 0x0002, 0x0004, 0x004B, 0x0032, 0x0064, 0x0019, 0x0096, 0x0113, 0x0026, 0x0032, 0x003C];
	var0009 = [0x0000, 0x000F, 0x0012, 0x000C, 0x0002, 0x0004, 0x004B, 0x0032, 0x0064, 0x0019, 0x0096, 0x0113, 0x0026, 0x0032, 0x003C];
	gflags[0x01A2] = true;
	goto labelFunc0818_01F4;
labelFunc0818_018E:
	var0008 = [0x0000, 0x001E, 0x0023, 0x0019, 0x0004, 0x0008, 0x0096, 0x0064, 0x00C8, 0x0019, 0x012C, 0x0226, 0x004B, 0x0064, 0x0078];
	var0009 = [0x0000, 0x0011, 0x0013, 0x000D, 0x0002, 0x0004, 0x005A, 0x003C, 0x0073, 0x000F, 0x00BE, 0x015E, 0x002D, 0x0032, 0x0046];
labelFunc0818_01F4:
	if (!var0001) goto labelFunc0818_07A6;
	if (!((gflags[0x01A1] == true) && (gflags[0x01A2] == false))) goto labelFunc0818_0212;
	message("\"Remember, ");
	message(var0000);
	message(", I have lowered all of my prices by half just this one time!\"");
	say();
labelFunc0818_0212:
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0818_02BC;
	var000B = UI_die_roll(0x0001, 0x0003);
	if (!(var000B == 0x0001)) goto labelFunc0818_0242;
	var000C = "Hmmm... ah,";
labelFunc0818_0242:
	if (!(var000B == 0x0002)) goto labelFunc0818_0252;
	var000C = "Ah... er,";
labelFunc0818_0252:
	if (!(var000B == 0x0003)) goto labelFunc0818_0262;
	var000C = "Hmmm... I see,";
labelFunc0818_0262:
	var000B = UI_die_roll(0x0001, 0x0003);
	if (!(var000B == 0x0001)) goto labelFunc0818_027F;
	var000D = "perhaps later,";
labelFunc0818_027F:
	if (!(var000B == 0x0002)) goto labelFunc0818_028F;
	var000D = "another time then,";
labelFunc0818_028F:
	if (!(var000B == 0x0003)) goto labelFunc0818_029F;
	var000D = "come again,";
labelFunc0818_029F:
	message("\"");
	message(var000C);
	message(" ");
	message(var000D);
	message(" ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc0818_07A3;
labelFunc0818_02BC:
	var000E = var0008[var000A];
	var000F = 0x0000;
	var000B = UI_die_roll(0x0001, 0x0006);
	if (!(var000B == 0x0001)) goto labelFunc0818_02E8;
	var0010 = "Dost thou accept?";
labelFunc0818_02E8:
	if (!(var000B == 0x0002)) goto labelFunc0818_02F8;
	var0010 = "Dost thou find this price acceptable?";
labelFunc0818_02F8:
	if (!(var000B == 0x0003)) goto labelFunc0818_0308;
	var0010 = "Let me see... ah, yes! Dost thou find the price agreeable?";
labelFunc0818_0308:
	if (!(var000B == 0x0004)) goto labelFunc0818_0318;
	var0010 = "Dost thou agree?";
labelFunc0818_0318:
	if (!(var000B == 0x0005)) goto labelFunc0818_0328;
	var0010 = "Is the price acceptable?";
labelFunc0818_0328:
	if (!(var000B == 0x0006)) goto labelFunc0818_0338;
	var0010 = "Ah, hmmm... Is the price acceptable?";
labelFunc0818_0338:
	if (!(var000A == 0x0002)) goto labelFunc0818_0395;
	message("\"Let me think... ah, that will be 300 filari.\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_0375;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Father! Leather bags sell for ");
	message(var000E);
	message(" filari!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, er... thou art right, my dear!\"");
	say();
	goto labelFunc0818_0385;
labelFunc0818_0375:
	message("\"Er, that's not right... oh, I am sorry, ");
	message(var0000);
	message(", I sell my bags for ");
	message(var000E);
	message(" filari!\"");
	say();
labelFunc0818_0385:
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "bags";
labelFunc0818_0395:
	if (!(var000A == 0x0003)) goto labelFunc0818_03B3;
	message("\"I stock the finest buckets in Fawn! Hmmm... I sell them for ");
	message(var000E);
	message(" filari each.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0818_03B3:
	if (!(var000A == 0x0004)) goto labelFunc0818_03D7;
	message("\"Thou wilt surely require one if thou dost remain in Fawn, ");
	message(var0000);
	message(". Ah... hmmm, I will sell one to thee for the fair price of ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0818_03D7:
	if (!(var000A == 0x0005)) goto labelFunc0818_03F7;
	message("\"That will be ");
	message(var000E);
	message(" filari each for a fine wax candle. ");
	message(var0010);
	message("\"");
	say();
	var0011 = "candles";
labelFunc0818_03F7:
	if (!(var000A == 0x0006)) goto labelFunc0818_041B;
	message("\"A torch?  Ah, yes... My torches are of the finest quality! I can sell one to thee for ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "torches";
labelFunc0818_041B:
	if (!(var000A == 0x0007)) goto labelFunc0818_0439;
	message("\"Ah, I can sell this to thee for ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
labelFunc0818_0439:
	if (!(var000A == 0x0008)) goto labelFunc0818_0463;
	message("\"I have a few fur boots left, ");
	message(var0000);
	message(". I can sell a pair to thee for ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "pairs of fur boots";
labelFunc0818_0463:
	if (!(var000A == 0x0009)) goto labelFunc0818_04C6;
	message("\"These are the finest packs made, ");
	message(var0000);
	message("! For one of these backpacks I ask 15 filari.\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_04A6;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Father! We sell those packs for ");
	message(var000E);
	message(" filari!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, thou art correct, daughter...\"");
	say();
	goto labelFunc0818_04B6;
labelFunc0818_04A6:
	message("\"Uh, hmmm... I do believe I made a mistake, ");
	message(var0000);
	message(". I sell my backpacks for ");
	message(var000E);
	message(" filari.\"");
	say();
labelFunc0818_04B6:
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "backpacks";
labelFunc0818_04C6:
	if (!(var000A == 0x000A)) goto labelFunc0818_0574;
	message("\"Ah, Alyssand makes these stockings, ");
	message(var0000);
	message(".\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0818_04EE;
	message("\"Ahem... I am sure that thou wouldst enjoy wearing a pair, ");
	message(var0000);
	message(".  I am assured that they are most comfortable.\"");
	say();
	goto labelFunc0818_055A;
labelFunc0818_04EE:
	message("\"If thou dost wish a pair for a loved one or a mistress, I am certain they would appreciate the fine quality, ");
	message(var0000);
	message("!\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_055A;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Father! Watch thy tongue!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"But, dear... he is a customer...\"");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"'Tis rude of thee, father, to discuss such matters in public!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, hmmm... she is very shrewish today, ");
	message(var0000);
	message(". I... er, apologize to thee for her behavior.\"");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"FATHER!!!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0818_055A:
	message("\"Ah, where was I? Oh, yes... For a pair of these fine stockings I ask ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "stockings";
labelFunc0818_0574:
	if (!(var000A == 0x000B)) goto labelFunc0818_0598;
	message("\"I can sell a great helm to thee for ");
	message(var000E);
	message(" filari.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "great helms";
labelFunc0818_0598:
	if (!(var000A == 0x000C)) goto labelFunc0818_05C2;
	message("\"If thou wishest to fend off the Goblins, ");
	message(var0000);
	message(", thou couldst not do better than to own one of my crossbows! For ");
	message(var000E);
	message(" filari it is thine.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crossbows";
labelFunc0818_05C2:
	if (!(var000A == 0x000D)) goto labelFunc0818_05E6;
	message("\"Ah, thou wilt need bolts for thy crossbow. Let me think... oh, that will be ");
	message(var000E);
	message(" filari for twenty bolts.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "crossbow bolts, in bundles of twenty,";
labelFunc0818_05E6:
	if (!(var000A == 0x000E)) goto labelFunc0818_0610;
	message("\"Hmmm... er, even though there are no sailing ships available, ");
	message(var0000);
	message(", I can give thee a good deal on a reliable sextant! For ");
	message(var000E);
	message(" filari one can be thine.\"");
	say();
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "sextants";
labelFunc0818_0610:
	if (!(var000A == 0x000F)) goto labelFunc0818_064E;
	if (!UI_is_pc_female()) goto labelFunc0818_0634;
	message("\"Oh, ");
	message(var0000);
	message(", thou shouldst purchase a hand mirror if thou dost not already own one. A lady of thy beauty doubtless needs one. For a mere ");
	message(var000E);
	message(" filari I can sell thee one.\"");
	say();
	goto labelFunc0818_063E;
labelFunc0818_0634:
	message("\"Perhaps a gift for a sweetheart? Ah, no, that would not be prudent of me to ask... For ");
	message(var000E);
	message(" filari I can sell thee a finely crafted hand mirror.\"");
	say();
labelFunc0818_063E:
	message("\"");
	message(var0010);
	message("\"");
	say();
	var0011 = "hand mirror";
labelFunc0818_064E:
	if (!(var000E == var0009[var000A])) goto labelFunc0818_0673;
	if (!Func0955()) goto labelFunc0818_066A;
	var0012 = var000E;
	goto labelFunc0818_0670;
labelFunc0818_066A:
	var0012 = 0x0000;
labelFunc0818_0670:
	goto labelFunc0818_0685;
labelFunc0818_0673:
	var0012 = Func0819(var0008[var000A], var0009[var000A]);
labelFunc0818_0685:
	if (!(var0012 > 0x0000)) goto labelFunc0818_06F0;
	if (!(var0007[var000A] == 0x0001)) goto labelFunc0818_06CE;
	message("\"How many ");
	message(var0011);
	message(" wouldst thou like?\"");
	say();
	var000F = Func0943(var0003[var000A], var0004[var000A], var0006[var000A], var0005, var0012, 0x0005, 0x0001, false);
	goto labelFunc0818_06F0;
labelFunc0818_06CE:
	var000F = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0005, var0012, 0x0000, 0x0001, false);
labelFunc0818_06F0:
	if (!(var000F == 0x0001)) goto labelFunc0818_0707;
	message("\"I am certain that thou wilt enjoy thy purchase, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0818_0799;
labelFunc0818_0707:
	if (!(var000F == 0x0002)) goto labelFunc0818_071E;
	message("\"Ah, er...\" ~\"I believe that thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0818_0799;
labelFunc0818_071E:
	if (!(var000F == 0x0003)) goto labelFunc0818_0799;
	var000B = Func0992(0x0001, (("@But " + var0000) + ", we haven't the coins to purchase this.@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0818_0761;
	UI_show_npc_face0(0xFFD1, 0x0000);
	message("\"Ah... it doth appear that thy purse is empty, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0818_0765;
labelFunc0818_0761:
	message("\"'Twould appear thou dost not have enough money for that...\"");
	say();
labelFunc0818_0765:
	if (!(0x001F < (UI_get_npc_id(0xFFD1) + 0x0006))) goto labelFunc0818_0784;
	UI_set_npc_id(0xFFD1, 0x001F);
	goto labelFunc0818_0796;
labelFunc0818_0784:
	UI_set_npc_id(0xFFD1, (UI_get_npc_id(0xFFD1) + 0x0006));
labelFunc0818_0796:
	goto labelFunc0818_0799;
labelFunc0818_0799:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc0818_07A3:
	goto labelFunc0818_01F4;
labelFunc0818_07A6:
	UI_pop_answers();
	return;
}


