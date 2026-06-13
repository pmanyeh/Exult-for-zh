#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func0922 0x922 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();

void Func0175 shape#(0x175) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0953();
	if (!(event == 0x0002)) goto labelFunc0175_0103;
	var0001 = UI_get_object_position(item);
	if (!(UI_get_npc_id(item) == 0x0000)) goto labelFunc0175_0061;
	Func0922(0x0001);
	UI_set_npc_id(item, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Farewell...@", (byte)0x6F, (byte)0x70, (byte)0x27, 0x0002, (byte)0x55, 0x0175, (byte)0x55, 0x07D2, (byte)0x6C, (byte)0x6D, (byte)0x6E], 0x0008);
	goto labelFunc0175_0103;
labelFunc0175_0061:
	if (!(UI_get_npc_id(item) == 0x000C)) goto labelFunc0175_00B5;
	var0003 = UI_create_new_object(0x037F);
	if (!var0003) goto labelFunc0175_0087;
	var0002 = UI_update_last_created(var0001);
labelFunc0175_0087:
	var0003 = UI_create_new_object(0x0231);
	if (!var0003) goto labelFunc0175_00A1;
	var0002 = UI_update_last_created(var0001);
labelFunc0175_00A1:
	UI_remove_item(item);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	abort;
labelFunc0175_00B5:
	UI_sprite_effect(0x000C, (var0001[0x0001] + UI_get_npc_id(item)), (var0001[0x0002] - UI_get_npc_id(item)), 0x0000, 0x0000, UI_get_npc_id(item), 0xFFFF);
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0175]);
	abort;
labelFunc0175_0103:
	if (!(event == 0x0009)) goto labelFunc0175_0356;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFEF5, 0x0000);
	gflags[0x0279] = true;
	message("\"At last, I am awakened from the slumber of death. I know thee, for the Great Earth Serpent hath whispered to me of thee. Welcome, noble Avatar! Thou hast arrived on the very brink of disaster. It is up to thee to restore the land to its needful Balance.\"");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x0280, 0xFE99, 0x0000) && (Func097D(0xFE9B, 0x0001, 0x027E, 0xFE99, 0x0000) && Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0002)))) goto labelFunc0175_016F;
	message("\"I see that thou art equipped with the Serpent Staff, the Serpent Armour and the Serpent Crown.\" *\"Now I must tell thee what must be done...\"");
	say();
	goto labelFunc0175_0187;
labelFunc0175_016F:
	message("\"But first, thou must arm thyself with the symbols of my authority --\"");
	say();
	message("\"the Staff, Armour, and Crown of the Great Earth Serpent.\"");
	say();
	UI_add_answer(["Staff", "Armour", "Crown"]);
labelFunc0175_0187:
	UI_add_answer(["Great Earth Serpent", "quest", "bye"]);
labelFunc0175_0197:
	converse attend labelFunc0175_0355;
	case "Great Earth Serpent" attend labelFunc0175_01B5:
	UI_remove_answer("Great Earth Serpent");
	message("\"Dost thou not recognize Him? 'Twas he whom thou didst free from the tyranny of Exodus, in thine adventurings of long, long ago. It is he who speaks to thee now, in his whisperings from the deeps.\"");
	say();
	message("\"It was the Great Serpent who maintained Balance in the land, but when Exodus stole him, the Serpents of Chaos and Order were left unto themselves.\"");
	say();
	message("\"Thus came the War of Imbalance, and when the Great Earth Serpent did return, it was too late! Order had won, and Chaos was divided into the crippled Banes!\"");
	say();
labelFunc0175_01B5:
	case "Staff" attend labelFunc0175_01EC:
	UI_remove_answer("Staff");
	if (!Func097D(0xFE9B, 0x0001, 0x0280, 0xFE99, 0x0000)) goto labelFunc0175_01E4;
	message("\"Good. Thou hast my Serpent Staff... It was both a support and a weapon to smite those who would unseat the delicate balance.\"");
	say();
	message("\"Alas, it did me little good in the end...\"");
	say();
	goto labelFunc0175_01EC;
labelFunc0175_01E4:
	message("\"Thou dost not have my Serpent Staff... Thou must travel to the fiery depths to find where it now lies.\"");
	say();
	gflags[0x0278] = true;
labelFunc0175_01EC:
	case "Armour" attend labelFunc0175_021F:
	UI_remove_answer("Armour");
	if (!Func097D(0xFE9B, 0x0001, 0x027E, 0xFE99, 0x0000)) goto labelFunc0175_021B;
	message("\"Thou dost possess the Serpent Armour... fine, fine. It is more than a symbol of the Great Earth Serpent's power.\"");
	say();
	message("\"The Serpent Armour wilt help thee to surmount the final challenges at the Grand Shrine of balance. Unfortunately, it proved to be little protection against treachery...\"");
	say();
	goto labelFunc0175_021F;
labelFunc0175_021B:
	message("\"Before thou canst complete thy quest, thou must have the Serpent Armour. Thou must ease the troubled heart of Love before thou canst hope to obtain it. She was once Beauty herself, but Chaos hath painted her with ugliness...\"");
	say();
labelFunc0175_021F:
	case "Crown" attend labelFunc0175_0252:
	UI_remove_answer("Crown");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0002)) goto labelFunc0175_024A;
	message("\"I see that thou dost possess my Serpent Crown. Well done! This is the crown my people set upon mine head, recognizing the power of the Great Earth Serpent through me.\" *\"Though I had no wish for crowns, it will aid thee in restoring the land's balance.\"");
	say();
	goto labelFunc0175_0252;
labelFunc0175_024A:
	message("\"Seek out the resting place of the Serpent Crown... Without the symbol of the Great Earth Serpent's power in the land, thou canst not hope to complete thy quest.\"");
	say();
	message("\"Thou didst know he who held this treasure, but he hath been killed by the Banes of Chaos. Yet he left clues which shall show thee the way...\"");
	say();
labelFunc0175_0252:
	case "quest" attend labelFunc0175_0283:
	UI_remove_answer("quest");
	message("\"Be warned, ");
	message(var0000);
	message(". None but thou can prevail against the Imbalance. And time grows short...\"");
	say();
	message("\"Alas, I must give thee bitter news! Before thou canst restore Balance, thou must reunite the Chaos Serpent.\"");
	say();
	message("\"I grieve that I cannot tell thee how this is done... Such knowledge was for the Chaos Hierophant only.\"");
	say();
	UI_add_answer(["Chaos Hierophant", "Chaos Serpent", "Balance"]);
labelFunc0175_0283:
	case "Chaos Hierophant" attend labelFunc0175_029A:
	UI_remove_answer("Chaos Hierophant");
	message("\"As with me, thou must wrest him from his last slumber to reveal his truths to thee... but alas, he was killed in the War, and I know not where his remains lie.\"");
	say();
	message("\"Yet I must hope that thou shalt find his burial site... or all is lost.\"");
	say();
labelFunc0175_029A:
	case "Chaos Serpent" attend labelFunc0175_02B5:
	UI_remove_answer("Chaos Serpent");
	message("\"Hear wisdom! The Banes of Chaos are not thine enemy, nor are they evil in themselves. It is their disunity which hath driven them into cruel insanity.\"");
	say();
	message("\"Before the land can again live in Balance, the Banes must once more become the Chaos Serpent, united and intelligent.\"");
	say();
	message("\"The way to do this is the secret held by the Chaos Hierophant. Now thou must seek him out!\"");
	say();
labelFunc0175_02B5:
	case "Balance" attend labelFunc0175_02CC:
	UI_remove_answer("Balance");
	message("\"If by some miracle thou art able to make the Chaos Serpent whole, then hasten to the Grand Shrine of Balance. Only there canst thou complete thy work, and end the plagues which afflict this land.\"");
	say();
	message("\"Remember to bear each of the symbols of power upon thy person, or thou shalt not enter the most sacred precincts therein.\"");
	say();
labelFunc0175_02CC:
	case "bye" attend labelFunc0175_0352:
	message("\"Do not be hasty, Avatar! I can only speak to thee this once! Art thou sure that thou dost understand all that I have said?\"");
	say();
	if (!Func0955()) goto labelFunc0175_032F;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	message("\"I must go now -- into the Void! My blessings are given to thee, Hero from Another World!\"");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x52, "@Hail to Balance!@", (byte)0x27, 0x0007, (byte)0x55, 0x0175], 0x0008);
	abort;
	goto labelFunc0175_0352;
labelFunc0175_032F:
	message("\"Then ask of me once more.\"");
	say();
	UI_add_answer(["Crown", "Armour", "Staff", "quest", "Chaos Hierophant", "Chaos Serpent", "Balance", "bye"]);
labelFunc0175_0352:
	goto labelFunc0175_0197;
labelFunc0175_0355:
	endconv;
labelFunc0175_0356:
	return;
}


