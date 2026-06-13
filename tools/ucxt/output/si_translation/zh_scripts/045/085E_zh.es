#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0860 0x860 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func085E 0x85E ()
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
	var0002 = ["nothing", "jerky", "fish", "sausage", "roast lamb", "honey cake"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000F, 0x000D, 0x0007, 0x000E, 0x0006];
	var0005 = [0x0000, 0x0014, 0x0016, 0x0019, 0x0023, 0x000A];
	var0006 = [0x0000, 0x000C, 0x000D, 0x000A, 0x0013, 0x0006];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0002, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc085E_00CC;
	var000A = "Milady";
	goto labelFunc085E_00D2;
labelFunc085E_00CC:
	var000A = "Milord";
labelFunc085E_00D2:
	message("\"So what hast thou an appetite for, ");
	message(var0000);
	message("?\"");
	say();
labelFunc085E_00DC:
	if (!var0001) goto labelFunc085E_038D;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc085E_0100;
	message("\"Perhaps another time, then.\"");
	say();
	var0001 = false;
	goto labelFunc085E_038A;
labelFunc085E_0100:
	var000C = var0005[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0005);
	if (!(var000E == 0x0001)) goto labelFunc085E_012C;
	var000F = "Dost thou accept?";
labelFunc085E_012C:
	if (!(var000E == 0x0002)) goto labelFunc085E_013C;
	var000F = "Wilt thou have some?";
labelFunc085E_013C:
	if (!(var000E == 0x0003)) goto labelFunc085E_014C;
	var000F = "Wilt thou pay such a charge?";
labelFunc085E_014C:
	if (!(var000E == 0x0004)) goto labelFunc085E_0160;
	var000F = (var000A + ", dost thou agree?");
labelFunc085E_0160:
	if (!(var000E == 0x0005)) goto labelFunc085E_0174;
	var000F = (var000A + ", is this a price that thou canst pay?");
labelFunc085E_0174:
	if (!(var000B == 0x0002)) goto labelFunc085E_0198;
	message("\"I am afraid that the price is ");
	message(var000C);
	message(" guilders for two strips of jerky... these being terrible times and all.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "strips of jerky, in bunches of two,";
labelFunc085E_0198:
	if (!(var000B == 0x0003)) goto labelFunc085E_01C0;
	message("\"No one prepares fish better than my Petra!\"");
	say();
	message("\"The dinner costs ");
	message(var000C);
	message(" guilders, but if I were not such an honest innkeeper I would charge more and make a fortune!\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "fish dinners";
labelFunc085E_01C0:
	if (!(var000B == 0x0004)) goto labelFunc085E_01E4;
	message("\"Petra's sausage is very good. ");
	message(var000C);
	message(" guilders is my price.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "sausages";
labelFunc085E_01E4:
	if (!(var000B == 0x0005)) goto labelFunc085E_020E;
	message("\"Personally, ");
	message(var0000);
	message(", this is my favorite meal that Petra prepares! ");
	message(var000C);
	message(" guilders is what I charge.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "lamb roasts";
labelFunc085E_020E:
	if (!(var000B == 0x0006)) goto labelFunc085E_0232;
	message("\"");
	message(var000C);
	message(" guilders will buy thee the sweetest honey cake thou hast ever tasted.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "honey cakes";
labelFunc085E_0232:
	if (!(var000C == var0006[var000B])) goto labelFunc085E_0257;
	if (!Func0955()) goto labelFunc085E_024E;
	var0011 = var000C;
	goto labelFunc085E_0254;
labelFunc085E_024E:
	var0011 = 0x0000;
labelFunc085E_0254:
	goto labelFunc085E_0269;
labelFunc085E_0257:
	var0011 = Func0860(var0005[var000B], var0006[var000B]);
labelFunc085E_0269:
	if (!(var0011 > 0x0000)) goto labelFunc085E_02D7;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc085E_02B2;
	message("\"How many ");
	message(var0010);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0014, 0x0001, false);
	goto labelFunc085E_02D7;
labelFunc085E_02B2:
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0000, 0x0001, false);
labelFunc085E_02D7:
	if (!(var000D == 0x0001)) goto labelFunc085E_02EE;
	message("\"I'm certain that thou wilt enjoy thy meal, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc085E_0380;
labelFunc085E_02EE:
	if (!(var000D == 0x0002)) goto labelFunc085E_0305;
	message("\"I believe thou canst not carry so much food, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc085E_0380;
labelFunc085E_0305:
	if (!(var000D == 0x0003)) goto labelFunc085E_0380;
	var0012 = Func0992(0x0001, (("@But " + var0000) + ", we have not the guilders to pay for this.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc085E_0348;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"Well, I hate to see thee go hungry, but Petra and I can not afford to feed thee for free. I am sorry, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc085E_034C;
labelFunc085E_0348:
	message("\"Thou dost not have enough guilders for that!\"");
	say();
labelFunc085E_034C:
	if (!(0x001F < (UI_get_npc_id(0xFFE2) + 0x0006))) goto labelFunc085E_036B;
	UI_set_npc_id(0xFFE2, 0x001F);
	goto labelFunc085E_037D;
labelFunc085E_036B:
	UI_set_npc_id(0xFFE2, (UI_get_npc_id(0xFFE2) + 0x0006));
labelFunc085E_037D:
	goto labelFunc085E_0380;
labelFunc085E_0380:
	message("\"Wouldst thou care for more?\"");
	say();
	var0001 = Func0955();
labelFunc085E_038A:
	goto labelFunc085E_00DC;
labelFunc085E_038D:
	UI_pop_answers();
	return;
}


