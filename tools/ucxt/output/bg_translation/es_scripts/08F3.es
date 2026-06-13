#game "blackgate"
void Func08F3 0x8F3 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	UI_push_answers();
	var0001 = false;
	var0002 = false;
	UI_add_answer(["enchantment", "valor in arms", "bye"]);
	message("\"Tell me something, if thou please. Many years have passed since I first learned my woodcraft. Such craft includes skill in arms, and I must know... Does the Avatar prefer mystical enchantment to overcome enemies, or physical strength and valor in arms?\"");
	say();
	var0003 = false;
labelFunc08F3_0024:
	converse attend labelFunc08F3_0156;
	case "enchantment" attend labelFunc08F3_003A:
	message("\"I have suspected it! No skill have I in such deep matters, but perchance our speech might turn to enchantment when our quest is complete.\"");
	say();
	gflags[0x015E] = true;
	goto labelFunc08F3_0157;
labelFunc08F3_003A:
	case "valor in arms" attend labelFunc08F3_006C:
	message("\"I have often suspected it! I am honored to travel with thee. I shall watch thee diligently, for surely thou art the greatest fighter who ever lived.\"");
	say();
	message("\"When our quest is complete we shall regale each other with our exploits. Tell me, dost thou prefer hand to hand combat or ranged weaponry?\"");
	say();
	UI_remove_answer(["enchantment", "valor in arms"]);
	UI_add_answer(["hand to hand", "ranged weaponry"]);
	gflags[0x015E] = false;
	var0001 = false;
labelFunc08F3_006C:
	case "hand to hand" attend labelFunc08F3_00A8:
	UI_remove_answer("hand to hand");
	var0004 = "and thou seemest man enough for such close work";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc08F3_0096;
	var0004 = "especially in women. The women of Britannia seldom have them";
	var0002 = true;
labelFunc08F3_0096:
	message("\"Such weapons require strength and daring! I admire such qualities, ");
	message(var0004);
	message(".\"");
	say();
	message("\"But my preferences run to the bow. An ancient weapon, and elegant, a fine bow of Yew may bring down game sooner than a sword.\"");
	say();
	var0003 = true;
labelFunc08F3_00A8:
	case "ranged weaponry" attend labelFunc08F3_00C3:
	UI_remove_answer("ranged weaponry");
	message("\"Such is also my choice. Few are my peers in the art of archery. A keen eye and steady hand are required, and that is rare in the men of this day. Even rarer in women. Sad, that the women of Britannia should be innocent of such art!\"");
	say();
	var0002 = true;
	var0003 = true;
labelFunc08F3_00C3:
	if (!var0002) goto labelFunc08F3_012F;
	var0002 = false;
	var0005 = false;
	enum();
labelFunc08F3_00D2:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc08F3_00F8;
	if (!(UI_get_npc_prop(var0008, 0x000A) == 0x0001)) goto labelFunc08F3_00F5;
	var0005 = true;
	goto labelFunc08F3_0156;
labelFunc08F3_00F5:
	goto labelFunc08F3_00D2;
labelFunc08F3_00F8:
	if (!var0005) goto labelFunc08F3_012F;
	UI_show_npc_face(var0008, 0x0000);
	message("\"Take care with thy words, master woodsman.\"");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("\"I do not mean this gracious company! Surely thou art among the elite of Britannia and a rare figure of a woman.\"");
	say();
	UI_show_npc_face(var0008, 0x0000);
	message("\"Thy speech does me service. Alas! Too few are the women who learn skill in arms.\"");
	say();
	UI_remove_npc_face(var0008);
labelFunc08F3_012F:
	if (!var0003) goto labelFunc08F3_0138;
	goto labelFunc08F3_0157;
labelFunc08F3_0138:
	case "bye" attend labelFunc08F3_0153:
	if (!(!var0001)) goto labelFunc08F3_014E;
	message("\"Please, Avatar, I simply must know.\"");
	say();
	goto labelFunc08F3_014F;
labelFunc08F3_014E:
	abort;
labelFunc08F3_014F:
	var0001 = true;
labelFunc08F3_0153:
	goto labelFunc08F3_0024;
labelFunc08F3_0156:
	endconv;
labelFunc08F3_0157:
	UI_pop_answers();
	return;
}


