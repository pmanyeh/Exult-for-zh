#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0908 0x908 ();

void Func08CE 0x8CE ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08F7(0xFF48);
	var0001 = Func08F7(0xFF44);
	var0002 = Func08F7(0xFF46);
	var0003 = Func08F7(0xFFFE);
	var0004 = Func0908();
	message("The winged gargoyle begins his sermon.");
	say();
	if (!var0000) goto labelFunc08CE_0038;
	message("You see the gargoyle clerk taking notes in the corner.");
	say();
labelFunc08CE_0038:
	message("\"To talk tonight about why The Fellowship is important to your lives. To know that each of us sought The Fellowship to feel complete. To have had dreams and longings.\"*");
	say();
	if (!var0002) goto labelFunc08CE_0061;
	UI_show_npc_face(0xFF46, 0x0000);
	message("\"To be very true.\"*");
	say();
	UI_remove_npc_face(0xFF46);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_0061:
	message("\"To know that others who are not members have given up their dreams. To see that they succumb to the mediocrity of their lives to find stability.\"*");
	say();
	if (!var0003) goto labelFunc08CE_008A;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"This is truly boring. Let us get some food -- I am hungry!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_008A:
	message("\"To see them begin to produce unreal ideas and become misaligned. To stray from the true path to what they seek. To lose contact with reality.\" He sighs. \"To find failure, not success in what they do.\"*");
	say();
	if (!var0001) goto labelFunc08CE_00B3;
	UI_show_npc_face(0xFF44, 0x0000);
	message("\"To be very sad.\"*");
	say();
	UI_remove_npc_face(0xFF44);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_00B3:
	message("\"To know,\" he smiles, \"that each of the members present has faced such an awakening into the real world. To find in the order a clear path to reach what we seek!\"~~ The members present all stand and shout.*");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc08CE_00E2;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"'Tis time for us to depart, ");
	message(var0004);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	abort;
labelFunc08CE_00E2:
	return;
}


