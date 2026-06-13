#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0858 0x858 ()
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
	var0002 = ["nothing", "sleeping", "healing", "light", "curing", "awakening", "protection", "invisibility"];
	var0003 = [0x0000, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154];
	var0004 = [0xFE99, 0x0000, 0x0001, 0x0006, 0x0002, 0x0004, 0x0005, 0x0007];
	var0005 = [0x0000, 0x0055, 0x0064, 0x0032, 0x004B, 0x0041, 0x0096, 0x00F0];
	var0006 = [0x0000, 0x0028, 0x0032, 0x0019, 0x002D, 0x001E, 0x004B, 0x0087];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0858_00E6:
	if (!var0001) goto labelFunc0858_0334;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0858_0110;
	message("\"Later then, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc0858_0331;
labelFunc0858_0110:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc0858_013D;
	message("\"That will be ");
	message(var000B);
	message(" guilders. If thou dost sleep poorly, this is the perfect solution, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Wilt thou accept?\"");
	say();
labelFunc0858_013D:
	if (!(var000A == 0x0003)) goto labelFunc0858_0155;
	message("\"I sell mine healing potions for ");
	message(var000B);
	message(" guilders each.\"");
	say();
	message("\"How doth that sound?\"");
	say();
labelFunc0858_0155:
	if (!(var000A == 0x0004)) goto labelFunc0858_016D;
	message("\"I will sell a potion of illumination to thee for the fair price of ");
	message(var000B);
	message(" guilders.\"");
	say();
	message("\"Dost thou agree?\"");
	say();
labelFunc0858_016D:
	if (!(var000A == 0x0005)) goto labelFunc0858_018B;
	message("\"");
	message(var000B);
	message(" guilders is a small price to pay if thou art in need of removing poisons from thy body, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Is the price acceptable?\"");
	say();
labelFunc0858_018B:
	if (!(var000A == 0x0006)) goto labelFunc0858_01A9;
	message("\"This potion, of course, will awaken anyone... or anything... from the deepest slumber. ");
	message(var000B);
	message(" guilders is the price.\"");
	say();
	message("\"Is the price acceptable to thee, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0858_01A9:
	if (!(var000A == 0x0007)) goto labelFunc0858_01CD;
	message("\"I can sell this to thee for ");
	message(var000B);
	message(" guilders. The efficacy of this potion is guaranteed, ");
	message(var0000);
	message("!\"");
	say();
	message("\"Dost thou agree, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0858_01CD:
	if (!(var000A == 0x0008)) goto labelFunc0858_01EB;
	message("\"Needless to say, this is a very useful potion, ");
	message(var0000);
	message(". ");
	message(var000B);
	message(" guilders is an excellent price, if I do say so myself.\"");
	say();
	message("\"What dost thou say?\"");
	say();
labelFunc0858_01EB:
	if (!(var000B == var0006[var000A])) goto labelFunc0858_0210;
	if (!Func0955()) goto labelFunc0858_0207;
	var000D = var000B;
	goto labelFunc0858_020D;
labelFunc0858_0207:
	var000D = 0x0000;
labelFunc0858_020D:
	goto labelFunc0858_0222;
labelFunc0858_0210:
	var000D = Func085B(var0005[var000A], var0006[var000A]);
labelFunc0858_0222:
	if (!(var000D > 0x0000)) goto labelFunc0858_0284;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc0858_0262;
	message("\"How many wouldst thou like?\"");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x000A, 0x0001, false);
	goto labelFunc0858_0284;
labelFunc0858_0262:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0000, 0x0001, false);
labelFunc0858_0284:
	if (!(var000C == 0x0001)) goto labelFunc0858_029B;
	message("\"Good luck with thy purchase, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0858_0327;
labelFunc0858_029B:
	if (!(var000C == 0x0002)) goto labelFunc0858_02B2;
	message("\"Thine hands are full, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0858_0327;
labelFunc0858_02B2:
	if (!(var000C == 0x0003)) goto labelFunc0858_0327;
	var000A = Func0992(0x0001, (("@But " + var0000) + ", we have not the guilders to purchase this.@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0858_02EF;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("\"I do not give my merchandise away!\"");
	say();
	goto labelFunc0858_02F3;
labelFunc0858_02EF:
	message("\"I am sorry, but thou dost not have enough guilders to purchase this!\"");
	say();
labelFunc0858_02F3:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc0858_0312;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc0858_0324;
labelFunc0858_0312:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc0858_0324:
	goto labelFunc0858_0327;
labelFunc0858_0327:
	message("\"Dost thou desire another purchase?\"");
	say();
	var0001 = Func0955();
labelFunc0858_0331:
	goto labelFunc0858_00E6;
labelFunc0858_0334:
	UI_pop_answers();
	return;
}


