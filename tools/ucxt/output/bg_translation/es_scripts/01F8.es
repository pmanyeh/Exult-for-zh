#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func01F8 shape#(0x1F8) ()
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

	if (!(event == 0x0001)) goto labelFunc01F8_0009;
	return;
labelFunc01F8_0009:
	if (!(event == 0x0003)) goto labelFunc01F8_0112;
	var0000 = false;
	var0001 = UI_get_item_shape(item);
	if (!(!(var0001 == 0x01F8))) goto labelFunc01F8_0064;
	var0002 = UI_find_nearby(item, 0x01F8, 0x0050, 0x0004);
	enum();
labelFunc01F8_003A:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc01F8_0061;
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F1, 0x0004)) goto labelFunc01F8_005E;
	var0000 = var0005;
labelFunc01F8_005E:
	goto labelFunc01F8_003A;
labelFunc01F8_0061:
	goto labelFunc01F8_0068;
labelFunc01F8_0064:
	var0000 = item;
labelFunc01F8_0068:
	if (!(!UI_get_cont_items(var0000, 0x031D, 0x00F1, 0x0004))) goto labelFunc01F8_007D;
	return;
labelFunc01F8_007D:
	UI_show_npc_face(0xFEDB, 0x0000);
	if (!(!gflags[0x0311])) goto labelFunc01F8_00AA;
	message("\"Well met, seeker. I am Dracothraxus. Thy test, and I fear, thy defeat lies before thee. For thou shouldst know that I am made immortal by the Keeper of Courage. 'Twould take a truly powerful artifact to destroy me... one that does not exist.\" The great dragon paws the earth in expectation of your imminent battle.");
	say();
	UI_remove_npc_face(0xFEDB);
	gflags[0x0311] = true;
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00AA:
	if (!UI_count_objects(0xFE9B, 0x02C3, 0xFE99, 0xFE99)) goto labelFunc01F8_00D5;
	message("Dracothraxus sniffs the air distastefully, \"I sense my doom nearby. Perhaps I am to be released at long last. I wish thee good luck mortal. Defend thyself!\"  With that, the dragon leaps at you.");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00D5:
	if (!UI_find_nearest(var0000, 0x02C3, 0x001E)) goto labelFunc01F8_00FD;
	message("Dracothraxus sniffs the air distastefully, \"I sense my doom nearby. Perhaps I am to be released at long last. I wish thee good luck mortal. Defend thyself!\"  With that, the dragon leaps at you.");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
	goto labelFunc01F8_0112;
labelFunc01F8_00FD:
	message("\"Thou hast returned to test thy mettle, little one. Thy courage does thee honor, however, I think that thou shalt take thine honor to the grave with thee.\"*");
	say();
	UI_remove_npc_face(0xFEDB);
	UI_set_schedule_type(var0000, 0x0000);
labelFunc01F8_0112:
	if (!(event == 0x0002)) goto labelFunc01F8_0280;
	UI_show_npc_face(0xFEDB, 0x0000);
	if (!gflags[0x02EF]) goto labelFunc01F8_0195;
	message("The dragon lets out a searing sigh, \"Released at last. I go now to seek my reward, for this has been a test of my courage as well as thine. Thy reward lies beyond the door to the north. Enter the blue gate and the Amulet of Courage will be thine.\"*");
	say();
	UI_remove_item(item);
	UI_remove_npc_face(0xFEDB);
	var0006 = UI_find_nearby(UI_get_npc_object(0xFE9C), 0x036C, 0x0028, 0x0000);
	enum();
labelFunc01F8_0152:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc01F8_0194;
	if (!(UI_get_item_quality(var0009) == 0x000A)) goto labelFunc01F8_0191;
	var000A = UI_execute_usecode_array(var0009, [(byte)0x46, 0x0004, (byte)0x58, 0x0021, (byte)0x50, (byte)0x0B, 0xFFFF, 0x0003, (byte)0x55, 0x03A7]);
labelFunc01F8_0191:
	goto labelFunc01F8_0152;
labelFunc01F8_0194:
	return;
labelFunc01F8_0195:
	if (!gflags[0x0336]) goto labelFunc01F8_019E;
	goto labelFunc01F8_026C;
labelFunc01F8_019E:
	message("\"Well done, little human. Thou art as powerful as thou art courageous. Do not think that thou hast destroyed me, thou hast merely bested me. And for this wonderous feat, I think thou dost deserve a reward. I have a truly magnificent gem that I would give to thee, if thy courage can but continue for a bit.\" Dracothraxus opens her mouth wide. Within, you can see a multitude of teeth, each one needle sharp. Also, near the back, you see a small but brilliant blue gem. Do you reach in and take it?");
	say();
	if (!Func090A()) goto labelFunc01F8_021B;
	message("As you place your hand in the furnace that is the dragon's maw, you can't help but wonder if a small gem is worth the risk.");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000C = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var000C) goto labelFunc01F8_01DB;
	message("Nevertheless, you persevere and retrieve the lovely little gem.");
	say();
	goto labelFunc01F8_0218;
labelFunc01F8_01DB:
	message("Just as you are about to pluck the gem literally from the jaws of death, the dragon gently places it within her nest. Dracothraxus closes her mouth and winks at you. \"'Twas merely a test of thy courage, little one.\"");
	say();
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_0218;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_0218:
	goto labelFunc01F8_026C;
labelFunc01F8_021B:
	message("\"Tis a pity thy courage goes only so far as bravery in battle, and not to trust of an honorable opponent. However, thou hast earned thy reward, and here it is.\" The dragon pushes the gem forward with her tongue, and removes it from her mouth. She then places it gently within her nest.");
	say();
	var000B = UI_create_new_object(0x02F8);
	UI_set_item_frame(var000B, 0x000C);
	var000D = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0003));
	var000E = UI_find_nearby(var000D, 0x0113, 0x001E, 0x0010);
	if (!var000E) goto labelFunc01F8_026C;
	var000A = UI_update_last_created(UI_get_object_position(var000E));
labelFunc01F8_026C:
	message("\"I go now to rest, but I shall return. The door will not open until thou hast found a way to best me for good and for all. Farewell, little mortal.*");
	say();
	UI_remove_item(item);
	gflags[0x0336] = true;
	UI_remove_npc_face(0xFEDB);
labelFunc01F8_0280:
	return;
}


