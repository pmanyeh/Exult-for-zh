#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08BB 0x8BB (var var0000);
extern void Func08BC 0x8BC (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0499 object#(0x499) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0499_026E;
	UI_show_npc_face(0xFF67, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01FB])) goto labelFunc0499_0040;
	message("You see your old friend Mariah.");
	say();
	gflags[0x01FB] = true;
	goto labelFunc0499_005D;
labelFunc0499_0040:
	if (!gflags[0x0003]) goto labelFunc0499_0053;
	message("\"Yes, ");
	message(var0001);
	message("? How may I help thee?\" Mariah greets you.");
	say();
	goto labelFunc0499_005D;
labelFunc0499_0053:
	message("\"Yes, ");
	message(var0000);
	message("?\" Mariah smiles, a trifle too sweetly.");
	say();
labelFunc0499_005D:
	if (!gflags[0x0003]) goto labelFunc0499_0136;
labelFunc0499_0063:
	converse attend labelFunc0499_0132;
	case "name" attend labelFunc0499_00B0:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_009F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Surely thou dost recognize thine old companion, Mariah?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	goto labelFunc0499_00A9;
labelFunc0499_009F:
	message("\"Hast thou already forgotten me, ");
	message(var0001);
	message("? I am Mariah.\"");
	say();
labelFunc0499_00A9:
	UI_remove_answer("name");
labelFunc0499_00B0:
	case "job" attend labelFunc0499_00D5:
	message("\"I sell spells, reagents, and sometimes a few potions here at the Lycaeum. Dost thou wish to buy any of these, ");
	message(var0001);
	message("?\"");
	say();
	UI_add_answer(["spells", "reagents", "potions", "Lycaeum"]);
labelFunc0499_00D5:
	case "spells" attend labelFunc0499_00E3:
	Func08BB(0xFF67);
labelFunc0499_00E3:
	case "reagents" attend labelFunc0499_00F1:
	Func08BC("Reagents");
labelFunc0499_00F1:
	case "potions" attend labelFunc0499_0109:
	message("\"I am afraid, ");
	message(var0001);
	message(", that I have a very meager selection.\"");
	say();
	Func08BC("Potions");
labelFunc0499_0109:
	case "Lycaeum" attend labelFunc0499_011C:
	message("She shakes her head sadly. \"I have not been `myself' for so long that I no longer recognize this town.\" Her eyes widen.~~ \"There are so many buildings around the Lycaeum now, hast thou seen them?\"~~She pauses, looking at you.~~\"By the way, old friend. I assume thou art responsible for returning the ether to its normal state. I thank thee.\"");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0499_011C:
	case "bye" attend labelFunc0499_012F:
	message("\"Fair days ahead, friend ");
	message(var0001);
	message(".\"*");
	say();
	abort;
labelFunc0499_012F:
	goto labelFunc0499_0063;
labelFunc0499_0132:
	endconv;
	goto labelFunc0499_026E;
labelFunc0499_0136:
	converse attend labelFunc0499_026D;
	case "name" attend labelFunc0499_0181:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0499_0176;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Surely thou dost recognize thine old companion, Mariah?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF67, 0x0000);
	message("\"Yes, dost thou not recognize me?\" She pauses, glaring at you. \"But who art thou, and where are my pastries?\"");
	say();
	goto labelFunc0499_017A;
labelFunc0499_0176:
	message("\"Yes, thou mayest tell me thy name,\" she says, glancing around the building. \"Are not the many books beautiful?\"");
	say();
labelFunc0499_017A:
	UI_remove_answer("name");
labelFunc0499_0181:
	case "job" attend labelFunc0499_019D:
	message("She smiles. \"I have a very important job, I do. My, are not those shelves lovely? So neat and orderly.\" She looks back at you.~~\"Be careful! The ink wells are full, and the quills so sharp.\" She giggles.");
	say();
	UI_add_answer(["shelves", "ink wells", "quills"]);
labelFunc0499_019D:
	case "shelves" attend labelFunc0499_01B7:
	message("\"Are not they the neatest, most orderly, and well-kept shelves thou hast seen? They do an excellent job of maintaining them!\"");
	say();
	UI_add_answer("they");
	UI_remove_answer("shelves");
labelFunc0499_01B7:
	case "ink wells" attend labelFunc0499_01D1:
	message("\"They are always so full and ready for use. They are so good about keeping them filled and clean!\"");
	say();
	UI_add_answer("they");
	UI_remove_answer("ink wells");
labelFunc0499_01D1:
	case "quills" attend labelFunc0499_01EB:
	message("\"Oh, yes, they are quite sharp! Always there when one needs to scribe a missive. They do an excellent job of having many ready at a moment's notice!\"");
	say();
	UI_add_answer("they");
	UI_remove_answer("quills");
labelFunc0499_01EB:
	case "they" attend labelFunc0499_0205:
	message("\"Yes, they do!\" Her face turns sad. \"But I only sell.\"");
	say();
	UI_add_answer("sell");
	UI_remove_answer("they");
labelFunc0499_0205:
	case "sell" attend labelFunc0499_0228:
	message("\"Yes,\" she agrees, \"I do indeed sell. I even spell. In fact, I even sell spells! But, if thou desirest reagents, thou art out of luck, for I only sell those during one of the seven weekdays. Wouldst thou like to know which day?~~\"What a lovely set of books thou must have! I have just the item for thee to match thy shelves -- a potion. If thou wilt buy a spell or reagent from me, I will sell thee a potion for only its normal price!\"");
	say();
	UI_add_answer(["which day", "reagents", "potions"]);
	UI_remove_answer("sell");
labelFunc0499_0228:
	case "which day" attend labelFunc0499_0241:
	message("\"Why, today. Thou art in luck. Buy a spell.\"");
	say();
	Func08BB(0xFF67);
	UI_remove_answer("which day");
labelFunc0499_0241:
	case "reagents" attend labelFunc0499_024F:
	Func08BC("Reagents");
labelFunc0499_024F:
	case "potions" attend labelFunc0499_025D:
	Func08BC("Potions");
labelFunc0499_025D:
	case "bye" attend labelFunc0499_026A:
	message("\"Certainly, come back anytime and buy.\"*");
	say();
	abort;
labelFunc0499_026A:
	goto labelFunc0499_0136;
labelFunc0499_026D:
	endconv;
labelFunc0499_026E:
	if (!(event == 0x0000)) goto labelFunc0499_02F5;
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF67));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x000B)) goto labelFunc0499_02EF;
	if (!(!gflags[0x0003])) goto labelFunc0499_02EC;
	if (!(var0004 == 0x0001)) goto labelFunc0499_02B2;
	var0005 = "@Where -are- those pastries!@";
labelFunc0499_02B2:
	if (!(var0004 == 0x0002)) goto labelFunc0499_02C2;
	var0005 = "@Lovely, lovely shelves!@";
labelFunc0499_02C2:
	if (!(var0004 == 0x0003)) goto labelFunc0499_02D2;
	var0005 = "@Lovely, lovely ink wells!@";
labelFunc0499_02D2:
	if (!(var0004 == 0x0004)) goto labelFunc0499_02E2;
	var0005 = "@Magic is in the air...@";
labelFunc0499_02E2:
	UI_item_say(0xFF67, var0005);
labelFunc0499_02EC:
	goto labelFunc0499_02F5;
labelFunc0499_02EF:
	Func092E(0xFF67);
labelFunc0499_02F5:
	return;
}


