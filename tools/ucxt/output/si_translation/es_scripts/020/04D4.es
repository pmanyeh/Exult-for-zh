#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08F5 0x8F5 (var var0000);

void Func04D4 object#(0x4D4) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = "son";
	var0004 = Func0994();
	if (!var0001) goto labelFunc04D4_002B;
	var0003 = "daughter";
labelFunc04D4_002B:
	if (!(event == 0x0002)) goto labelFunc04D4_0218;
	if (!gflags[0x0004]) goto labelFunc04D4_010E;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_show_npc_face0(0xFF2C, 0x0000);
	message("\"Well done, my ");
	message(var0003);
	message(". I shall take Yelinda back to her rightful place.\"");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("\"Oh, thank thee, kind monk!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"As for thee, ");
	message(var0002);
	message(", thou must continue toward thine union with the Powers...\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Peace.@", 0x0002);
	var0005 = UI_get_object_position(0xFF2C);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_get_object_position(0xFFC9);
	UI_sprite_effect(0x0007, (var0006[0x0001] - 0x0003), (var0006[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2C);
	Func09AC(0xFFC9, 0x0404, 0x06B8, 0x000C);
	UI_play_sound_effect(0x0051);
	goto labelFunc04D4_0217;
labelFunc04D4_010E:
	UI_init_conversation();
	UI_show_npc_face0(0xFF2C, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	message("\"We mourn with thee, Hero From Another World, for this purposeless death of the girl once known as Cantra.\"");
	say();
	message("\"We shall take her lifeless body to Monk Isle, where perhaps we can restore life where death doth now reign.\"");
	say();
	message("\"Continue on thy quest. Trouble not thyself for this girl, as we shall do all that is possible for her.\"");
	say();
	var0007 = UI_remove_party_items(0xFE99, 0x019E, 0xFE99, 0x0015, 0x0000);
	if (!(!var0007)) goto labelFunc04D4_01B5;
	var0008 = UI_find_nearby(item, 0x019E, 0x001E, 0x0000);
	enum();
labelFunc04D4_0161:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04D4_01B5;
	if (!(UI_get_item_frame(var000B) == 0x0015)) goto labelFunc04D4_01B2;
	var0005 = UI_get_object_position(var000B);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var000B);
labelFunc04D4_01B2:
	goto labelFunc04D4_0161;
labelFunc04D4_01B5:
	var0005 = UI_get_object_position(0xFF2C);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2C);
	UI_clear_item_flag(0xFFC0, 0x0004);
	Func09AC(0xFFC0, 0x097D, 0x0469, 0x000C);
	UI_set_item_flag(0xFFC0, 0x001E);
	UI_play_sound_effect(0x0051);
labelFunc04D4_0217:
	abort;
labelFunc04D4_0218:
	if (!(event == 0x0001)) goto labelFunc04D4_0267;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D4_0239;
	UI_item_say(0xFF2C, "@Not now...@");
	abort;
labelFunc04D4_0239:
	UI_item_say(0xFE9C, "@Excuse me...@");
	0xFF2C->Func07D1();
	Func097F(0xFF2C, (("@Yes, my " + var0003) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF2C, 0x0003);
labelFunc04D4_0267:
	if (!(event == 0x0009)) goto labelFunc04D4_0511;
	UI_run_schedule(0xFF2C);
	UI_clear_item_say(0xFF2C);
	UI_show_npc_face0(0xFF2C, 0x0000);
	message("\"I am but a humble monk. I can be of no help to thee in any way, I fear.\"");
	say();
	var000C = false;
	var000D = false;
	if (!(gflags[0x00DE] && (!gflags[0x00DB]))) goto labelFunc04D4_02A5;
	UI_add_answer("Mandrake Root");
labelFunc04D4_02A5:
	if (!gflags[0x026B]) goto labelFunc04D4_02B2;
	UI_add_answer("Xenka");
labelFunc04D4_02B2:
	if (!gflags[0x026E]) goto labelFunc04D4_02BF;
	UI_add_answer("salt tides");
labelFunc04D4_02BF:
	if (!Func08FC()) goto labelFunc04D4_02D4;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be...\"");
	say();
	message("\"If thou art ready to see thy friend again, thou dost have but to ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
labelFunc04D4_02D4:
	UI_add_answer(["name", "duties", "bye"]);
labelFunc04D4_02E4:
	converse attend labelFunc04D4_0510;
	case "resurrection" attend labelFunc04D4_02F9:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04D4_02F9:
	case "name" attend labelFunc04D4_0338:
	UI_remove_answer("name");
	message("\"I no longer believe in names. Doth the corn in the field have a name? Canst thou hear the cry of the corn?\"");
	say();
	var000E = Func0992(0xFFFD, (("@" + var0000) + ", this monk is a mystical man indeed...@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["beliefs", "corn"]);
labelFunc04D4_0338:
	case "beliefs" attend labelFunc04D4_0372:
	UI_remove_answer("beliefs");
	message("\"There are unseen energies which permeate the worlds. A monk within the Order of Xenka seeks to attune himself with these ethereal vapors.\"");
	say();
	message("\"In mine own case -- I being but the least of these, my brethren -- I can draw upon the Power of the Void to foster the growth of plants.\"");
	say();
	if (!gflags[0x0270]) goto labelFunc04D4_035C;
	message("\"Xenka the Seer is the greatest of us all.\"");
	say();
	goto labelFunc04D4_0360;
labelFunc04D4_035C:
	message("\"Xenka was the greatest of us all.\"");
	say();
labelFunc04D4_0360:
	gflags[0x026B] = true;
	if (!(!var000C)) goto labelFunc04D4_0372;
	UI_add_answer("Xenka");
labelFunc04D4_0372:
	case "Xenka" attend labelFunc04D4_03A2:
	UI_remove_answer("Xenka");
	message("\"It was she who mastered the Energies of the Void, until at last she was no longer of this world.\"");
	say();
	message("\"Xenka is our exemplar -- we all would harness\tthe Powers as she did.\"");
	say();
	message("\"I am unable to speak further -- I am incapable of expressing all that Xenka is and was.\"");
	say();
	var000C = true;
	if (!gflags[0x0270]) goto labelFunc04D4_039E;
	message("\"And now she hath returned! The Seer hath come back from beyond the Void.\"");
	say();
	goto labelFunc04D4_03A2;
labelFunc04D4_039E:
	message("\"Thou shouldst speak to Monk Draxta, if thou desirest to perceive the mystery of Xenka.\"");
	say();
labelFunc04D4_03A2:
	case "corn" attend labelFunc04D4_03DC:
	UI_remove_answer("corn");
	message("\"Corn is at the center of the kingdom of vegetables.\"");
	say();
	message("\"Corn is tall and green, king of the grasses, and its fruit is sweet when roasted.\"");
	say();
	message("\"I seek to find union with the corn. I am a Child of the Corn.\"");
	say();
	var000E = Func0992(0xFFFD, (("@As I said, " + var0000) + "...@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc04D4_03DC:
	case "duties" attend labelFunc04D4_03F6:
	UI_remove_answer("duties");
	message("\"In order to become one with the soil, I have been granted the task of nurturing the crops.\"");
	say();
	UI_add_answer("crops");
labelFunc04D4_03F6:
	case "crops" attend labelFunc04D4_0422:
	UI_remove_answer("crops");
	message("\"Our harvest is varied. There are ochre berries in the spring, corn in the summer, and walnuts in the fall.\"");
	say();
	message("\"We also nurture many root crops, and make flour from their tubers.\"");
	say();
	if (!gflags[0x0004]) goto labelFunc04D4_041A;
	message("\"Now the fields are dying, as the blight spreads throughout the land. The storms leach the life from the land, and the crops fail.\"");
	say();
	goto labelFunc04D4_041E;
labelFunc04D4_041A:
	message("\"But the crops have not been healthy, not since the strange storms afflicted the island.\"");
	say();
labelFunc04D4_041E:
	message("\"Thou mayest partake of any of the fruits and vegetables on this island, so long as thou dost not indulge in gluttony.\"");
	say();
labelFunc04D4_0422:
	case "Mandrake Root" attend labelFunc04D4_044A:
	UI_remove_answer("Mandrake Root");
	message("\"Thou art not the first to come to this isle in search of the Mandrakes, for the plant is the source of powerful magic.\"");
	say();
	message("\"There is a supply of roots in mine hut, if thou needest any.\"");
	say();
	message("\"Please take all that thou needest, for Mandrakes grow only in the swamps, and are exceedingly rare elsewhere.\"");
	say();
	UI_add_answer(["swamps", "rare"]);
labelFunc04D4_044A:
	case "swamps" attend labelFunc04D4_047B:
	UI_remove_answer("swamps");
	message("\"The Mandrakes are only found in the swamplands, and only when the salt tides are right.\"");
	say();
	message("\"I have only dried roots in my supply -- if thou desirest fresh roots, thou must go into the swamp when the tides are right.\"");
	say();
	if (!(gflags[0x026E] == false)) goto labelFunc04D4_0470;
	UI_set_timer(0x0001);
labelFunc04D4_0470:
	gflags[0x026E] = true;
	UI_add_answer("salt tides");
labelFunc04D4_047B:
	case "salt tides" attend labelFunc04D4_04C5:
	UI_remove_answer("salt tides");
	if (!((UI_get_timer(0x0001) > 0x0003) && (!gflags[0x026D]))) goto labelFunc04D4_04A8;
	message("\"The tides are in convergence. If thou desirest Mandrake Roots, thou must hasten to the swamplands.\"");
	say();
	gflags[0x026C] = true;
	goto labelFunc04D4_04C1;
labelFunc04D4_04A8:
	if (!gflags[0x026D]) goto labelFunc04D4_04B5;
	message("\"The tides have gone. It will be many days\tbefore the roots can again be gathered.\"");
	say();
	goto labelFunc04D4_04C1;
labelFunc04D4_04B5:
	message("\"The Mandrake Roots only appear when the tides are right -- otherwise, they lay beneath the mud and cannot be seen.\"");
	say();
	message("\"Now is not the time, but the tides will soon be in -- precisely when, I cannot predict.\"");
	say();
	message("\"I could tell thee when the tides were right, if thou dost ask later.\"");
	say();
labelFunc04D4_04C1:
	var000D = true;
labelFunc04D4_04C5:
	case "rare" attend labelFunc04D4_04E8:
	UI_remove_answer("rare");
	message("\"Mandrakes grow only in certain swamps, of which there is one on this isle.\"");
	say();
	message("\"Due to the dangers of the magical storms, the ships no longer come.\"");
	say();
	message("\"Only thou, the Stranger from Another World, canst visit us now.\"");
	say();
	message("\"Therefore, no one can take the Mandrake Roots to the mages of Moonshade.\"");
	say();
	message("\"There is certain to be a grave shortage of reagents in that city soon.\"");
	say();
labelFunc04D4_04E8:
	case "bye" attend labelFunc04D4_050D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell@", 0x0000);
	Func097F(item, "@Peace.@", 0x0002);
	goto labelFunc04D4_0510;
labelFunc04D4_050D:
	goto labelFunc04D4_02E4;
labelFunc04D4_0510:
	endconv;
labelFunc04D4_0511:
	if (!(event == 0x0007)) goto labelFunc04D4_051F;
	Func08F5(0xFF31);
labelFunc04D4_051F:
	return;
}


