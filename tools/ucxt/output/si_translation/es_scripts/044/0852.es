#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0854 0x854 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0852 0x852 ()
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
	if (!UI_is_pc_female()) goto labelFunc0852_00CC;
	var000A = "Milady";
	goto labelFunc0852_00D2;
labelFunc0852_00CC:
	var000A = "Milord";
labelFunc0852_00D2:
	message("\"What art thou hungry for, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0852_00DC:
	if (!var0001) goto labelFunc0852_035C;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc0852_0100;
	message("\"Thou dost not know what thou art missing...\"");
	say();
	var0001 = false;
	goto labelFunc0852_0359;
labelFunc0852_0100:
	var000C = var0005[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0005);
	if (!(var000E == 0x0001)) goto labelFunc0852_012C;
	var000F = "Wilt thou have some?";
labelFunc0852_012C:
	if (!(var000E == 0x0002)) goto labelFunc0852_013C;
	var000F = "Will this be fine with thee?";
labelFunc0852_013C:
	if (!(var000E == 0x0003)) goto labelFunc0852_014C;
	var000F = "Dost thou find the price agreeable?";
labelFunc0852_014C:
	if (!(var000E == 0x0004)) goto labelFunc0852_0160;
	var000F = (var000A + ", dost thou agree?");
labelFunc0852_0160:
	if (!(var000E == 0x0005)) goto labelFunc0852_0174;
	var000F = (var000A + ", is the price acceptable?");
labelFunc0852_0174:
	if (!(var000B == 0x0002)) goto labelFunc0852_0198;
	message("\"");
	message(var000C);
	message(" guilders will buy thee two strips of jerky.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "strips of jerky, in bunches of two,";
labelFunc0852_0198:
	if (!(var000B == 0x0003)) goto labelFunc0852_01C0;
	message("\"Most people in Moonshade think that my fish is excellent. But have a care! When last I prepared a meal of fish it was stolen away by Mosh, the rat catcher! So I daresay she enjoys it greatly.\"");
	say();
	message("\"The dinner costs ");
	message(var000C);
	message(" guilders.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "fish dinners";
labelFunc0852_01C0:
	if (!(var000B == 0x0004)) goto labelFunc0852_01E4;
	message("\"My sausage is very good. ");
	message(var000C);
	message(" guilders is my price.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "sausages";
labelFunc0852_01E4:
	if (!(var000B == 0x0005)) goto labelFunc0852_0208;
	message("\"I believe thou wilt find the taste to thy liking. I charge ");
	message(var000C);
	message(" guilders for my lamb roast.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "lamb roasts";
labelFunc0852_0208:
	if (!(var000B == 0x0006)) goto labelFunc0852_0232;
	message("\"If thou dost crave something sweet, ");
	message(var0000);
	message(", thou shouldst try mine honey cake. ");
	message(var000C);
	message(" guilders will buy thee a treat.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "honey cakes";
labelFunc0852_0232:
	if (!(var000C == var0006[var000B])) goto labelFunc0852_0257;
	if (!Func0955()) goto labelFunc0852_024E;
	var0011 = var000C;
	goto labelFunc0852_0254;
labelFunc0852_024E:
	var0011 = 0x0000;
labelFunc0852_0254:
	goto labelFunc0852_0269;
labelFunc0852_0257:
	var0011 = Func0854(var0005[var000B], var0006[var000B]);
labelFunc0852_0269:
	if (!(var0011 > 0x0000)) goto labelFunc0852_02D7;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0852_02B2;
	message("\"How many ");
	message(var0010);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0014, 0x0001, false);
	goto labelFunc0852_02D7;
labelFunc0852_02B2:
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0000, 0x0001, false);
labelFunc0852_02D7:
	if (!(var000D == 0x0001)) goto labelFunc0852_02EE;
	message("\"Enjoy thy meal, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0852_034F;
labelFunc0852_02EE:
	if (!(var000D == 0x0002)) goto labelFunc0852_0305;
	message("\"Thou canst not carry so much food, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0852_034F;
labelFunc0852_0305:
	if (!(var000D == 0x0003)) goto labelFunc0852_034F;
	var0012 = Func0992(0x0001, (("@But " + var0000) + ", we have not the guilders to pay for this.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0852_0348;
	UI_show_npc_face0(0xFFE4, 0x0000);
	message("\"I am sorry, but Rocco cannot afford to feed thee for free, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0852_034C;
labelFunc0852_0348:
	message("\"Thou dost not have enough money for that...\"");
	say();
labelFunc0852_034C:
	goto labelFunc0852_034F;
labelFunc0852_034F:
	message("\"Wouldst thou care for more?\"");
	say();
	var0001 = Func0955();
labelFunc0852_0359:
	goto labelFunc0852_00DC;
labelFunc0852_035C:
	UI_pop_answers();
	return;
}


