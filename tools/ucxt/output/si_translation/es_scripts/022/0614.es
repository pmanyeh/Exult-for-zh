#game "serpentisle"
void Func0614 object#(0x614) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_speech_track();
	if (!((var0000 >= 0x0000) && (var0000 < 0x0015))) goto labelFunc0614_006C;
	var0001 = UI_get_readied(0xFE9C, 0x0007);
	var0001 = (var0001 & UI_get_readied(0xFE9C, 0x0008));
	var0002 = 0xFED4;
	enum();
labelFunc0614_003E:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0614_006C;
	if (!((UI_get_item_shape(var0005) == 0x0377) && (UI_get_item_frame(var0005) == 0x0002))) goto labelFunc0614_0069;
	var0002 = 0xFED9;
labelFunc0614_0069:
	goto labelFunc0614_003E;
labelFunc0614_006C:
	if (!(var0000 == 0x0000)) goto labelFunc0614_008C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Hasten! The Imbalance grows stronger...\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_008C:
	if (!(var0000 == 0x0001)) goto labelFunc0614_00AC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"His mission here is finished. He may now depart for the Void.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00AC:
	if (!(var0000 == 0x0002)) goto labelFunc0614_00CC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Look into the Moons' Eye.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00CC:
	if (!(var0000 == 0x0003)) goto labelFunc0614_00EC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Thou hast forgotten something.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00EC:
	if (!(var0000 == 0x0004)) goto labelFunc0614_010C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Place the Staff, Armour, and Crown on the Altar.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_010C:
	if (!(var0000 == 0x0005)) goto labelFunc0614_012C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Return when thou hast the Three Artifacts of the Great Hierophant: Staff, Armour, and Crown.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_012C:
	if (!(var0000 == 0x0006)) goto labelFunc0614_014C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"The Blackrock Serpents... thou must have the three Serpents of Blackrock.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_014C:
	if (!(var0000 == 0x0007)) goto labelFunc0614_016C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Thou art in Balance, having mastered both Chaos and Order. I declare thee worthy to bear the emblems of the Great Hierophant of Balance.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_016C:
	if (!(var0000 == 0x0008)) goto labelFunc0614_018C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Now place the Eyes of the Serpent before my statue.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_018C:
	if (!(var0000 == 0x0009)) goto labelFunc0614_01AC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Slay me! Slay me with the Serpent Sword, and send my soul back into the Void!\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01AC:
	if (!(var0000 == 0x000A)) goto labelFunc0614_01CC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Seek the Temple, and within it, the Eye of the Moon.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01CC:
	if (!(var0000 == 0x000B)) goto labelFunc0614_01EC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Free Gwenno... free her from the ice!\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01EC:
	if (!(var0000 == 0x000C)) goto labelFunc0614_020C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Time is short. Move on.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_020C:
	if (!(var0000 == 0x000D)) goto labelFunc0614_022C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"The wizard... the key is the dead wizard... thou must vanquish him.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_022C:
	if (!(var0000 == 0x000E)) goto labelFunc0614_024C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"The ashes... place the Ashes on the altar.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_024C:
	if (!(var0000 == 0x000F)) goto labelFunc0614_026C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Bane of Chaos... Chaos Bane... twisted her soul...\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_026C:
	if (!(var0000 == 0x0010)) goto labelFunc0614_028C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"A new Hero has entered this world... am I dreaming, or is he real?\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_028C:
	if (!(var0000 == 0x0011)) goto labelFunc0614_02AC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Who art thou, stranger? Why can't I see thee? Curse this Imbalance which veils my mind...\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02AC:
	if (!(var0000 == 0x0012)) goto labelFunc0614_02CC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"I know that we have met before, Stranger. Dost thou not recall?\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02CC:
	if (!(var0000 == 0x0013)) goto labelFunc0614_02EC;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Hero from Another World! Know that it is I, the Great Earth Serpent, whom thou liberated from imprisonment in the days of Exodus the Destroyer. If only thou couldst help me now, Avatar.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02EC:
	if (!(var0000 == 0x0014)) goto labelFunc0614_030C;
	UI_show_npc_face(var0002, 0x0000);
	message("\"Seek the Horn... the Gwani Horn... seek it in the depths beneath the Skullcrusher Mountains.\"");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_030C:
	if (!(var0000 == 0x0015)) goto labelFunc0614_0330;
	UI_show_npc_face(0xFED8, 0x0000);
	message("\"Pleasant dreams, Avatar...\"");
	say();
	message("\"Ha ha hah hah!\"");
	say();
	UI_remove_npc_face(0xFED8);
	return;
labelFunc0614_0330:
	if (!(var0000 == 0x0016)) goto labelFunc0614_0354;
	UI_show_npc_face(0xFED8, 0x0000);
	message("\"See how I reward those who fail me!\"");
	say();
	message("\"Hah hah hah hah!\"");
	say();
	UI_remove_npc_face(0xFED8);
	return;
labelFunc0614_0354:
	if (!(var0000 == 0x0017)) goto labelFunc0614_0374;
	UI_show_npc_face(0xFF00, 0x0000);
	message("\"Hah hah hah hah!\"");
	say();
	UI_remove_npc_face(0xFF00);
	return;
labelFunc0614_0374:
	if (!(var0000 == 0x0018)) goto labelFunc0614_0394;
	UI_show_npc_face(0xFF00, 0x0000);
	message("\"I have paid my debt to thee, and our bargain is concluded. I shall not aid thee again. Beware the Banes of Chaos, Avatar!\"");
	say();
	UI_remove_npc_face(0xFF00);
	return;
labelFunc0614_0394:
	if (!(var0000 == 0x0019)) goto labelFunc0614_03B4;
	UI_show_npc_face(0xFEDB, 0x0000);
	message("\"Avatar! It is I, Dupre! My soul has been fused with the Serpent of Chaos. I am keeping it from attacking thee, but I do not know how much longer I can hold out! Quickly! Thou must go to Sunrise Isle!\"");
	say();
	UI_remove_npc_face(0xFEDB);
	return;
labelFunc0614_03B4:
	if (!(var0000 == 0x001A)) goto labelFunc0614_03D4;
	UI_show_npc_face(0xFEDA, 0x0000);
	message("\"Dost thou think that thou canst chain the Serpent of Order within a prison of Balance? Never! Servants of Order, attack!\"");
	say();
	UI_remove_npc_face(0xFEDA);
	return;
labelFunc0614_03D4:
	return;
}


