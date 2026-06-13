#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0497 object#(0x497) ()
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

	if (!(event == 0x0001)) goto labelFunc0497_0364;
	UI_show_npc_face(0xFF69, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFFFC);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func0909();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0006 = UI_is_pc_female();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02C6])) goto labelFunc0497_0073;
	message("This spritely fairy flutters around you, sprinkling some kind of sparkling dust on your head as she giggles.~~ \"I love thee! Yes, I do! I love thee!\"");
	say();
	gflags[0x02C6] = true;
	goto labelFunc0497_0077;
labelFunc0497_0073:
	message("\"Yes, my love?\" Kissme asks.");
	say();
labelFunc0497_0077:
	converse attend labelFunc0497_035F;
	case "name" attend labelFunc0497_010D:
	message("\"Kissme! Kissme!\" She giggles.");
	say();
	if (!var0000) goto labelFunc0497_00A7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Don't do it, ");
	message(var0004);
	message("! Who knows what evil this strange creature might possess!\" He inspects the sprite more closely. \"Mayhaps I should try it first to be sure it is safe...\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_00A7:
	if (!var0001) goto labelFunc0497_00C2;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Hey, -I'll- kiss her! She doesn't scare me!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_00C2:
	if (!var0003) goto labelFunc0497_00DD;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"She -doth- look rather inviting, doth she not?\"*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_00DD:
	if (!var0002) goto labelFunc0497_00F8;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"My liege has asked thee thy -name-, foul creature!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_00F8:
	UI_show_npc_face(0xFF69, 0x0000);
	message("\"But that -is- my name! Kissme! Kissme! It is true!\"");
	say();
	UI_remove_answer("name");
labelFunc0497_010D:
	case "job" attend labelFunc0497_01CA:
	message("\"My purpose is to spread love dust all around and welcome thee to Ambrosia! I love thee! Yes, I do!\"");
	say();
	if (!var0003) goto labelFunc0497_0142;
	message("She flutters over Shamino's head.~~\"I love -thee-, as well!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"If only thou wert a little larger...\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0142:
	if (!var0001) goto labelFunc0497_016B;
	message("Then she flies around Spark.~~\"Oooh, and I love -thee-, too!\"*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark blushes. \"Aww, cut it out!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_016B:
	if (!var0002) goto labelFunc0497_0194;
	message("Kissme then flies near Dupre.~~\"Handsome man! Handsome man! I love thee! It's true! It's true!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre swats at the fairy. \"Away with thee! Thou dost not love me! Thou dost not even -know- me!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_0194:
	if (!var0000) goto labelFunc0497_01BD;
	message("Kissme glides over to Iolo and plants a big kiss on his cheek.~~\"Yes! I love thee! Yes, I do!\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo makes a sour face and wipes his cheek.~~ \"Avatar, that was the sloppiest, wettest, most... -disgusting- kiss I have ever felt!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01BD:
	UI_add_answer(["Ambrosia", "love dust"]);
labelFunc0497_01CA:
	case "Ambrosia" attend labelFunc0497_020D:
	message("\"That is where thou art! It is true! Oh, yes! Ambrosia!\"");
	say();
	if (!var0000) goto labelFunc0497_01FB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Ambrosia! Then it really does exist!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF69, 0x0000);
labelFunc0497_01FB:
	message("\"Ambrosia, the lost isle of Britannia! Thou art really here!\"");
	say();
	UI_remove_answer("Ambrosia");
	UI_add_answer("lost isle");
labelFunc0497_020D:
	case "love dust" attend labelFunc0497_0220:
	message("\"It does nothing that I know of! But it's pretty!\" Kissme giggles like a child. \"It's how I show thee I love thee! It's true!\"");
	say();
	UI_remove_answer("love dust");
labelFunc0497_0220:
	case "lost isle" attend labelFunc0497_0240:
	message("\"Ambrosia was hit by stones from the sky hundreds of years ago! Oh, yes indeed! The entire island was battered to bits! It is true!\"");
	say();
	UI_remove_answer("lost isle");
	UI_add_answer(["stones", "years ago"]);
labelFunc0497_0240:
	case "stones" attend labelFunc0497_025A:
	message("\"I believe it is called Caddellite. Yes, I believe it's true!~~\"And I -do- love thee, it is so true!\"");
	say();
	UI_remove_answer("stones");
	UI_add_answer("Caddellite");
labelFunc0497_025A:
	case "Caddellite" attend labelFunc0497_0274:
	message("\"Most of it is collected in the pit where the hydra sits. Thou shalt have to ask the hydra about it. It is true!\"");
	say();
	UI_remove_answer("Caddellite");
	UI_add_answer("hydra");
labelFunc0497_0274:
	case "hydra" attend labelFunc0497_0287:
	message("\"The hydra is made up of three brothers -- all dragons! It is true! Thou shalt be careful not to make them angry, for they have a temper! Oh, yes indeed, they do! They are very protective of their Caddellite, so speak to them about it first!\"");
	say();
	UI_remove_answer("hydra");
labelFunc0497_0287:
	case "years ago" attend labelFunc0497_02AB:
	message("\"Ambrosia was once very beautiful! Yes, it was! All of mine ancestors lived here then! Love dust was all around, and every day was like a jewel! Yes, it's true! Yes, thou wilt!~~\"Oh, I must kiss thee again!\"");
	say();
	if (!var0006) goto labelFunc0497_029D;
	message("\"It does not matter whether thou art male or female! No, it does not! I shall kiss thee anyway!\"");
	say();
labelFunc0497_029D:
	UI_remove_answer("years ago");
	UI_add_answer("kiss");
labelFunc0497_02AB:
	case "kiss" attend labelFunc0497_0351:
	if (!var0000) goto labelFunc0497_02D4;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"No! Don't do it, ");
	message(var0004);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0497_02D4:
	if (!var0001) goto labelFunc0497_02EF;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Sheesh, here we go again!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0497_02EF:
	if (!var0003) goto labelFunc0497_030A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Hey, I think she's cute!\"*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0497_030A:
	if (!var0002) goto labelFunc0497_032B;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"If thou wouldst do it, ");
	message(var0004);
	message(", do it quickly. We have not time to waste with such foolishness.\" Dupre looks distinctly disgusted with the whole affair.*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0497_032B:
	UI_show_npc_face(0xFF69, 0x0000);
	message("Do you allow Kissme to kiss you?");
	say();
	if (!Func090A()) goto labelFunc0497_0346;
	message("Kissme places the wettest, sloppiest, oozingest, and mushiest smack you have ever felt on your mouth. ~~\"Oh, yes! That was fun! I love thee! Yes, it's true!\"");
	say();
	goto labelFunc0497_034A;
labelFunc0497_0346:
	message("\"I love thee anyway! It is true!\" Kissme giggles and sprinkles more love dust in your hair.");
	say();
labelFunc0497_034A:
	UI_remove_answer("kiss");
labelFunc0497_0351:
	case "bye" attend labelFunc0497_035C:
	goto labelFunc0497_035F;
labelFunc0497_035C:
	goto labelFunc0497_0077;
labelFunc0497_035F:
	endconv;
	message("\"Goodbye, my love! Oh yes! I love thee! It is true!\"*");
	say();
labelFunc0497_0364:
	if (!(event == 0x0000)) goto labelFunc0497_03E2;
	var0007 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF69));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0004)) goto labelFunc0497_03E2;
	if (!(var0008 == 0x0001)) goto labelFunc0497_03A8;
	var0009 = "@I love thee!@";
labelFunc0497_03A8:
	if (!(var0008 == 0x0002)) goto labelFunc0497_03B8;
	var0009 = "@I want to kiss thee!@";
labelFunc0497_03B8:
	if (!(var0008 == 0x0003)) goto labelFunc0497_03C8;
	var0009 = "@I love thee, yes, I do!@";
labelFunc0497_03C8:
	if (!(var0008 == 0x0004)) goto labelFunc0497_03D8;
	var0009 = "@Thou art my love!@";
labelFunc0497_03D8:
	UI_item_say(0xFF69, var0009);
labelFunc0497_03E2:
	return;
}


