#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0859 0x859 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "black pearls", "mandrake", "garlic", "spider silk", "ash", "worm heart"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0004 = [0xFE99, 0x0000, 0x0003, 0x0004, 0x0006, 0x0007, 0x000A];
	var0005 = [0x0000, 0x0032, 0x004B, 0x0008, 0x0023, 0x0024, 0x0064];
	var0006 = [0x0000, 0x0019, 0x002D, 0x0005, 0x0013, 0x0014, 0x003C];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0859_00D1:
	if (!var0001) goto labelFunc0859_02FB;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0859_00FB;
	message("\"As thou dost wish, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc0859_02F8;
labelFunc0859_00FB:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc0859_0122;
	message("\"My black pearls are sought after from across Serpent Isle for their potency. Surely ");
	message(var000B);
	message(" guilders is an equitable price?\"");
	say();
	message("\"Dost thou accept?\"");
	say();
labelFunc0859_0122:
	if (!(var000A == 0x0003)) goto labelFunc0859_013A;
	message("\"");
	message(var000B);
	message(" guilders each for a mandrake root, which is a most excellent reagent for powerful spells.\"");
	say();
	message("\"Dost thou find this price acceptable?\"");
	say();
labelFunc0859_013A:
	if (!(var000A == 0x0004)) goto labelFunc0859_0152;
	message("\"For the fair price of ");
	message(var000B);
	message(" guilders, I can sell thee garlic that is most efficacious for spellcasting.\"");
	say();
	message("\"Dost thou agree?\"");
	say();
labelFunc0859_0152:
	if (!(var000A == 0x0005)) goto labelFunc0859_0170;
	message("\"");
	message(var000B);
	message(" guilders for the finest spun silk thou canst find, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Is the price acceptable?\"");
	say();
labelFunc0859_0170:
	if (!(var000A == 0x0006)) goto labelFunc0859_0188;
	message("\"I went to great lengths to acquire the ash from Furnace itself! ");
	message(var000B);
	message(" guilders is the asking price.\"");
	say();
	message("\"Wilt thou accept this price?\"");
	say();
labelFunc0859_0188:
	if (!(var000A == 0x0007)) goto labelFunc0859_01AC;
	message("\"Ah, these worm hearts are most precious, ");
	message(var0000);
	message(", and needless to say, they are very difficult to procure! I am asking ");
	message(var000B);
	message(" guilders each for these fine jewels.\"");
	say();
	message("\"What dost thou think, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0859_01AC:
	if (!(var000B == var0006[var000A])) goto labelFunc0859_01D1;
	if (!Func0955()) goto labelFunc0859_01C8;
	var000D = var000B;
	goto labelFunc0859_01CE;
labelFunc0859_01C8:
	var000D = 0x0000;
labelFunc0859_01CE:
	goto labelFunc0859_01E3;
labelFunc0859_01D1:
	var000D = Func085B(var0005[var000A], var0006[var000A]);
labelFunc0859_01E3:
	if (!(var000D > 0x0000)) goto labelFunc0859_0245;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc0859_0223;
	message("\"How many wouldst thou like?\"");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0014, 0x0001, false);
	goto labelFunc0859_0245;
labelFunc0859_0223:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0000, 0x0001, false);
labelFunc0859_0245:
	if (!(var000C == 0x0001)) goto labelFunc0859_025C;
	message("\"Best of luck with thy purchase, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0859_02EE;
labelFunc0859_025C:
	if (!(var000C == 0x0002)) goto labelFunc0859_0273;
	message("\"I believe that thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0859_02EE;
labelFunc0859_0273:
	if (!(var000C == 0x0003)) goto labelFunc0859_02EE;
	var000A = Func0992(0x0001, (("@But " + var0000) + ", we have not the guilders to purchase this.@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0859_02B6;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("\"Ah... it dost appear that thy purse is empty, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0859_02BA;
labelFunc0859_02B6:
	message("\"I do not give my merchandise away! Thou dost not have the guilders to purchase this!\"");
	say();
labelFunc0859_02BA:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc0859_02D9;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc0859_02EB;
labelFunc0859_02D9:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc0859_02EB:
	goto labelFunc0859_02EE;
labelFunc0859_02EE:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc0859_02F8:
	goto labelFunc0859_00D1;
labelFunc0859_02FB:
	UI_pop_answers();
	return;
}


