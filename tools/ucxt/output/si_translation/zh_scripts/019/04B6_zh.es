#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern void Func07D7 object#(0x7D7) ();
extern var Func08B6 0x8B6 ();
extern void Func095D 0x95D (var var0000);
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func04B6 object#(0x4B6) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000A);
	var0004 = UI_get_item_flag(0xFFF0, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04B6_0065;
	Func097F(0xFE9C, "@Hello, there!@", 0x0000);
	Func097F(0xFF4A, "@Yes?@", 0x0002);
	UI_set_schedule_type(0xFF4A, 0x0003);
	0xFF4A->Func07D1();
labelFunc04B6_0065:
	if (!(event == 0x0002)) goto labelFunc04B6_0323;
	if (!gflags[0x0211]) goto labelFunc04B6_0151;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x0016, Func09A0(0x0005, 0x0001));
	var0005 = Func09A0(0x0002, 0x0001);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0636], 0x000C);
	var0007 = Func095C(0xFE9C, 0x0000);
	var0008 = Func095C(0xFE9C, 0x0003);
	if (!(var0007 > var0008)) goto labelFunc04B6_00EB;
	var0009 = (var0007 - var0008);
	Func095E(0xFE9C, 0x0003, var0009);
labelFunc04B6_00EB:
	item->Func07D7();
	var000A = Func08B6();
	enum();
labelFunc04B6_00F6:
	for (var000D in var000A with var000B to var000C) attend labelFunc04B6_0129;
	UI_clear_item_flag(var000D, 0x0001);
	UI_set_schedule_type(var000D, 0x001F);
	var0006 = UI_execute_usecode_array(var000D, [(byte)0x23, (byte)0x61]);
	goto labelFunc04B6_00F6;
labelFunc04B6_0129:
	if (!var000D) goto labelFunc04B6_013B;
	Func097F(var000D, "@What dreams!@", 0x000E);
labelFunc04B6_013B:
	UI_move_object(0xFE9C, [0x05B4, 0x0652, 0x0000]);
	goto labelFunc04B6_0322;
labelFunc04B6_0151:
	UI_show_npc_face0(0xFF4A, 0x0000);
	message("\"Edrin! Thou hast come...\"");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("\"Siranush! I had despaired of seeing thee again! How I wish I could be with thee always...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Thou hast filled my world with the love I never knew while my body lived. For that, I have called thee here for one last sight of thee...\"");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("\"Then the Hero hath succeeded in destroying the Dream Crystal?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"No, dear one, only I can undo what Rabindrinath hath done... The Hero hath defeated Rabindrinath and brought me the Crystal.\" *\"It is mine to destroy it.\"");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("\"Although I know it would be wrong, I wish with all mine heart that thou wouldst not. If I could join thee, I would gladly.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I know that, dear Edrin. But thou hast life yet to live.\" *\"I must destroy the Crystal. My people and I must move on to what lies beyond... I will look for thee, and hope that thou dost join me in what waits ahead.\"");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("\"I have no wish to bind thee here, for all that I love thee. I will live my life and pray to meet thee beyond this world.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Thou canst add my prayers to thine, Edrin. I love thee, now and always.\" *\"Although we will not meet here again, dream of me... Farewell, my love.\"");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("\"I love thee... And I shall dream of thee all the rest of my days.\" *\"Farewell...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc(0xFFF0);
	message("\"Thou hast freed the tormented souls of my people, Avatar. Thy good deed shall be rewarded as promised.\" *\"I wish thee luck in thy quest. May thy sleep be peaceful...\"");
	say();
	UI_remove_npc_face0();
	Func095D(0x0190);
	gflags[0x02DB] = true;
	var0006 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
	var000E = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc04B6_0236:
	for (var0011 in var000E with var000F to var0010) attend labelFunc04B6_0266;
	if (!(!((UI_get_item_shape(var0011) == 0x01E6) || (UI_get_item_shape(var0011) == 0x025F)))) goto labelFunc04B6_0263;
	UI_remove_item(var0011);
labelFunc04B6_0263:
	goto labelFunc04B6_0236;
labelFunc04B6_0266:
	var0006 = UI_add_cont_items(0xFE9C, 0x0001, 0x03BB, 0xFE99, 0x0002, 0x0000);
	var0012 = 0x0000;
	var000E = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
labelFunc04B6_0298:
	if (!(var0012 < 0x0002)) goto labelFunc04B6_030A;
	enum();
labelFunc04B6_02A3:
	for (var0011 in var000E with var0013 to var0014) attend labelFunc04B6_02EA;
	if (!(Func09A6(var0011) || (var0012 == 0x0001))) goto labelFunc04B6_02E7;
	if (!(!UI_set_last_created(var0011))) goto labelFunc04B6_02D3;
	Func092F(0xFE9C, 0x000D);
labelFunc04B6_02D3:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc04B6_02E7;
	Func092F(0xFE9C, 0x000E);
labelFunc04B6_02E7:
	goto labelFunc04B6_02A3;
labelFunc04B6_02EA:
	var0012 = (var0012 + 0x0001);
	var000E = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc04B6_0298;
labelFunc04B6_030A:
	gflags[0x0211] = true;
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x55, 0x04B6]);
labelFunc04B6_0322:
	abort;
labelFunc04B6_0323:
	if (!(event == 0x0009)) goto labelFunc04B6_099B;
	UI_run_schedule(0xFF4A);
	UI_clear_item_say(0xFF4A);
	UI_show_npc_face0(0xFF4A, 0x0000);
	var0015 = UI_get_item_flag(0xFF4A, 0x001C);
	if (!(gflags[0x020D] == true)) goto labelFunc04B6_046F;
	if (!var0003) goto labelFunc04B6_0450;
	message("\"Hast thou reconsidered my request, Avatar? Wilt thou give to me the Dream Crystal?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0448;
	message("\"I knew that Edrin could not be so misled...\"");
	say();
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("\"After all these centuries of waiting... I had almost given up hope.\" *\"But there is one that I must see one last time, before our paths forever separate.\"");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_044D;
labelFunc04B6_0448:
	message("\"Then do not return unless thou hast had a change of heart! I am saddened beyond bearing!\"");
	say();
	abort;
labelFunc04B6_044D:
	goto labelFunc04B6_046F;
labelFunc04B6_0450:
	message("\"Hast thou reconsidered my request, Avatar? Wilt thou bring to me the Dream Crystal?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_046A;
	message("\"I knew that Edrin could not be so misled...\"");
	say();
	UI_add_answer("defeat");
	goto labelFunc04B6_046F;
labelFunc04B6_046A:
	message("\"Then do not return unless thou hast had a change of heart! I am saddened beyond bearing!\"");
	say();
	abort;
labelFunc04B6_046F:
	if (!((var0004 == true) && (!gflags[0x020D]))) goto labelFunc04B6_05E1;
	if (!(var0015 == false)) goto labelFunc04B6_04DD;
	var001A = UI_get_item_flag(0xFF4B, 0x0004);
	if (!var001A) goto labelFunc04B6_04BC;
	message("\"I am Siranush. I have been expecting thee...\"");
	say();
	message("\"Now that the foul mage Rabindrinath is dead, we have some hope of escaping his evil spell.\"");
	say();
	UI_set_item_flag(0xFF4A, 0x001C);
	UI_add_answer(["expecting", "Rabindrinath", "evil spell"]);
	goto labelFunc04B6_04DA;
labelFunc04B6_04BC:
	message("\"Thou hast come at last! I am Siranush. I have been expecting thee... I knew that thou wert the one destined to free us from Rabindrinath's evil spell.\"");
	say();
	UI_set_item_flag(0xFF4A, 0x001C);
	UI_add_answer(["expecting", "Rabindrinath", "evil spell"]);
labelFunc04B6_04DA:
	goto labelFunc04B6_05DE;
labelFunc04B6_04DD:
	message("\"Thou hast returned. Hast thou brought to me the Dream Crystal, ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_05D9;
	if (!(var0003 == true)) goto labelFunc04B6_05D1;
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("\"After all these centuries of waiting... I had almost given up hope.\" *\"But there is one that I must see one last time, before our paths forever separate.\"");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_05D6;
labelFunc04B6_05D1:
	message("\"Perhaps thou wert dreaming, Avatar. I do not see the Dream Crystal.\" *\"Without the Crystal, our souls remain trapped. Bring to me the Dream Crystal and the Serpent Necklace is thine...\"");
	say();
	abort;
labelFunc04B6_05D6:
	goto labelFunc04B6_05DE;
labelFunc04B6_05D9:
	message("\"Without the Crystal, our souls remain trapped. Bring to me the Dream Crystal and the Serpent Necklace is thine...\"");
	say();
	abort;
labelFunc04B6_05DE:
	goto labelFunc04B6_060C;
labelFunc04B6_05E1:
	if (!(!gflags[0x00E6])) goto labelFunc04B6_05F3;
	message("\"Thou must not enter the realm of dreams before thou hast transformed the lost brother! His true form bears not wings.... Seek the answers, for I must have thine aid!\"");
	say();
	message("\"To exit this place, thou must remember that from death a dreamer awakes. Seek the pillar of flame.\"");
	say();
	goto labelFunc04B6_05FB;
labelFunc04B6_05F3:
	message("\"The lost brother hath lost his wings, but thou hast not sought the memories of a bird. Thou must not enter this realm without that knowledge. Seek the answers, for I must have thine aid!\"");
	say();
	message("\"Remember, death is a dreamer's fiery door to life.\"");
	say();
labelFunc04B6_05FB:
	UI_remove_npc_face0();
	Func097F(0xFF4A, "@Go quickly!@", 0x0000);
	abort;
labelFunc04B6_060C:
	converse attend labelFunc04B6_099A;
	case "expecting" attend labelFunc04B6_0629:
	message("\"As Edrin hath told thee of me, he hath dreamed of thee. I knew that thou wouldst come... 'Twas only a matter of time.\"");
	say();
	UI_remove_answer("expecting");
	UI_add_answer("matter of time");
labelFunc04B6_0629:
	case "matter of time" attend labelFunc04B6_0649:
	message("\"In mine own dreams, I saw that thou wouldst need the Serpent Necklace. I knew that thou wouldst have to come here before thou couldst complete thy quest.\"");
	say();
	UI_remove_answer("matter of time");
	UI_add_answer(["Serpent Necklace", "quest"]);
labelFunc04B6_0649:
	case "Serpent Necklace" attend labelFunc04B6_066C:
	message("\"'Tis a thing of power from the people who settled this land after the village of Gorlab existed. It is to be thy reward.\"");
	say();
	UI_remove_answer("Serpent Necklace");
	UI_add_answer(["thing of power", "Gorlab", "reward"]);
labelFunc04B6_066C:
	case "thing of power" attend labelFunc04B6_0686:
	message("\"I do not know what it will do... I only know that it was part of a set of such jewelry. And it was a symbol of authority of some sort.\"");
	say();
	UI_remove_answer("thing of power");
	UI_add_answer("authority");
labelFunc04B6_0686:
	case "authority" attend labelFunc04B6_0699:
	message("\"I have been trapped for a very long time, Avatar.\" *\"All I know is that the Ophidians seemed to worship serpents and that artifacts with the serpent symbol were often of magical origin. I have no idea what it will do.\"");
	say();
	UI_remove_answer("authority");
labelFunc04B6_0699:
	case "Gorlab" attend labelFunc04B6_06B3:
	message("\"The ruins that lie within the swamp are those of my village. Though Gorlab was not always a swamp.\" *'Long ago, Gorlab was once a prosperous community, Avatar.\"");
	say();
	UI_remove_answer("Gorlab");
	UI_add_answer("swamp");
labelFunc04B6_06B3:
	case "swamp" attend labelFunc04B6_06C6:
	message("\"When I was Gorlab's healer, the village stood on firm ground. We held back the swamp and farmed the rich soil.\" *\"But after we became trapped in this forsaken place, the earthworks we had built crumbled and the swamp rose to engulf the village.\"");
	say();
	UI_remove_answer("swamp");
labelFunc04B6_06C6:
	case "reward" attend labelFunc04B6_06F7:
	if (!var001A) goto labelFunc04B6_06EC;
	message("\"Thou wert our only hope, Avatar. Our souls are trapped here, unable to go to what awaits beyond the realm of life.\"");
	say();
	if (!var0003) goto labelFunc04B6_06E5;
	message("\"Thou dost have what will free us... If thou wilt help us, I shall reward thee with the Serpent Necklace.\"");
	say();
	goto labelFunc04B6_06E9;
labelFunc04B6_06E5:
	message("\"If thou wilt undertake the task I ask, I shall reward thee with the Serpent necklace.\"");
	say();
labelFunc04B6_06E9:
	goto labelFunc04B6_06F0;
labelFunc04B6_06EC:
	message("\"Thou art our only hope, Avatar. Our souls are trapped here, unable to go to what awaits beyond the realm of life.\" *\"If thou wilt undertake the task I ask, I shall reward thee with the Serpent necklace.\"");
	say();
labelFunc04B6_06F0:
	UI_remove_answer("reward");
labelFunc04B6_06F7:
	case "quest" attend labelFunc04B6_0719:
	message("\"Thou art the only one that can hope to save the land from tearing itself apart, Avatar.\"");
	say();
	message("\"I do not know what thou must do... I only know that thou must possess the Serpent Necklace before thou hast hope of succeeding.\"");
	say();
	message("\"But first, thou must free us.\"");
	say();
	UI_remove_answer("quest");
	UI_add_answer("free");
labelFunc04B6_0719:
	case "free" attend labelFunc04B6_0748:
	message("\"Although it was Rabindrinath's spell that trapped us within the Dream Realm, it is the Dream Crystal that keeps us from leaving.\"");
	say();
	message("\"It is also the Crystal that traps any who enter the swamp.\"");
	say();
	if (!var0003) goto labelFunc04B6_0736;
	message("\"If thou wilt give me the Dream Crystal, we will all be freed.\"");
	say();
	goto labelFunc04B6_073A;
labelFunc04B6_0736:
	message("\"Bring to me the Dream Crystal and we will all be freed.\"");
	say();
labelFunc04B6_073A:
	UI_remove_answer("free");
	UI_add_answer("Dream Crystal");
labelFunc04B6_0748:
	case "Dream Crystal" attend labelFunc04B6_077B:
	if (!var0003) goto labelFunc04B6_0765;
	message("\"Before thou didst slay Rabindrinath, thou hadst seen a small part of the whole...\"");
	say();
	message("\"The crystal that Edrin wears is a shard of the Dream Crystal. That is how I was able to speak with him.\"");
	say();
	message("\"The entire crystal is what thou didst find in Rabindrinath's Keep when thou didst kill him.\"");
	say();
	goto labelFunc04B6_0774;
labelFunc04B6_0765:
	message("\"Thou hast already seen a small part of the whole... The crystal that Edrin wears is a shard of the Dream Crystal. That is how I was able to speak with him.\"");
	say();
	message("\"To find the Dream Crystal, thou must venture into Rabindrinath's Keep somewhere within the Dream Realm.\"");
	say();
	UI_add_answer("Rabindrinath's Keep");
labelFunc04B6_0774:
	UI_remove_answer("Dream Crystal");
labelFunc04B6_077B:
	case "Rabindrinath's Keep" attend labelFunc04B6_078E:
	message("\"I would go with thee, if I could. But I am all that keeps Rabindrinath's madness at bay. Without mine opposition, all our souls would have been destroyed long ago.\" *\"Rabindrinath will have the Crystal well-hidden, and I doubt that thou canst take it from his keep without killing him. Be wary, Avatar. He is quite mad.\"");
	say();
	UI_remove_answer("Rabindrinath's Keep");
labelFunc04B6_078E:
	case "Rabindrinath" attend labelFunc04B6_07A8:
	message("\"Rabindrinath was a haughty mage who moved into our town shortly after I became the healer there. He was very angry when we did not immediately name him to the village Council.\" *\"Rabindrinath stormed back to his keep, swearing that we would soon see that he was no one to trifle with. I wish I had understood what he was planning when he began collecting the crystals.\"");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("crystals");
labelFunc04B6_07A8:
	case "crystals" attend labelFunc04B6_07C2:
	message("\"Rabindrinath bought a vast quantity of Dream Crystals. I thought them harmless...\" *\"Small Dream Crystals were often exchanged by lovers. So that they might see each other in their dreams. I had no idea that he could pervert them so.\"");
	say();
	UI_remove_answer("crystals");
	UI_add_answer("pervert");
labelFunc04B6_07C2:
	case "pervert" attend labelFunc04B6_07D5:
	message("\"I am no mage, Avatar. The Dream Crystals were little more than hedge magic. I had no idea that Rabindrinath could use them for anything sinister.\" *\"Else I would have brought him before the Judicar... And had his powers riven from him.\"");
	say();
	UI_remove_answer("pervert");
labelFunc04B6_07D5:
	case "evil spell" attend labelFunc04B6_07EF:
	message("\"Rabindrinath thought to harness the villager's dreams, hoping to gain great power. He intended to use that power to make the village submit to his rule.\" *\"But his spell went awry...\"");
	say();
	UI_remove_answer("evil spell");
	UI_add_answer("awry");
labelFunc04B6_07EF:
	case "awry" attend labelFunc04B6_0809:
	message("\"I do not know if Rabindrinath thought that he would tap our dreams and exploit what we feared. Or if he planned to steal some of our essence while we lay dreaming.\" *\"Whatever his true plans, when he cast his spell the power was so great that a rift opened into the Dream Realm. The people of Gorlab, including the spellcaster himself, were trapped within this land of altered reality.\"");
	say();
	UI_remove_answer("awry");
	UI_add_answer("trapped");
labelFunc04B6_0809:
	case "trapped" attend labelFunc04B6_0838:
	message("\"We became trapped here, unable to return to our bodies that still lay within the village. Most of the villagers quickly went insane here -- where things that are not, are.\"");
	say();
	message("\"Those who resisted initially soon joined their neighbors in insanity when their bodies died. I have done what I can for them. But I cannot cure insanity.\"");
	say();
	if (!var001A) goto labelFunc04B6_0826;
	message("\"And it was all I could do to keep Rabindrinath's insanity from destroying us.\"");
	say();
	goto labelFunc04B6_082A;
labelFunc04B6_0826:
	message("\"And I can do little more than keep Rabindrinath's insanity from destroying us.\"");
	say();
labelFunc04B6_082A:
	UI_remove_answer("trapped");
	UI_add_answer("destroying");
labelFunc04B6_0838:
	case "destroying" attend labelFunc04B6_0976:
	message("\"Rabindrinath soon discovered that he could alter the Dream Realm by will alone. I repulsed his attacks until his body at last died too. And with this, what little sanity he had departed.\"");
	say();
	message("\"Rabindrinath blamed the people of Gorlab and swore to destroy us all...\" *\"Our bodies are long moldered away, and our souls remain bound here. If any of us should die here, we will be lost forever.\"");
	say();
	if (!var0003) goto labelFunc04B6_0948;
	message("\"Wilt thou give to me the Dream Crystal so that we may at last find peace?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0934;
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("\"After all these centuries of waiting... I had almost given up hope.\" *\"But there is one that I must see one last time, before our paths forever separate.\"");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_0945;
labelFunc04B6_0934:
	message("\"Edrin hath thought thee kind... I see that he was misled.\"");
	say();
	message("\"Without thine aid we are doomed to eternal limbo, not dead and never to be alive again. Trapped forever in insanity.\"");
	say();
	message("\"Return if thou dost reconsider... I doubt that thou canst finish thine own quest without mine aid.\"");
	say();
	var001B = true;
	abort;
labelFunc04B6_0945:
	goto labelFunc04B6_0976;
labelFunc04B6_0948:
	message("\"Wilt thou bring me the Dream Crystal so that we may at last find peace? I fear that soon my strength will fail, and the people of Gorlab and I will be far worse than dead.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0969;
	message("\"Thou art truly as brave as Edrin pictured thee! I can tell thee how to defeat Rabindrinath...\"");
	say();
	UI_remove_answer("destroying");
	UI_add_answer("defeat");
	goto labelFunc04B6_0976;
labelFunc04B6_0969:
	message("\"Edrin hath thought thee brave... I see that he was misled.\" *\"Without thine aid we are doomed to eternal limbo, not dead and never to be alive again. Trapped forever in insanity.\"");
	say();
	message("\"Return if thou dost reconsider... I doubt that thou canst finish thine own quest without mine aid.\"");
	say();
	var001B = true;
	abort;
labelFunc04B6_0976:
	case "defeat" attend labelFunc04B6_0997:
	message("\"Rabindrinath hath styled himself a god here. He cannot be killed as thou wouldst a normal man. He can only be overpowered by the application of Truth, Love and Courage.\"");
	say();
	message("\"In order to do this, thou must be armed with three artifacts... the Artifact of Courage, the Artifact of Love, and the Artifact of Truth.\"");
	say();
	message("\"Bring to me the Dream Crystal from Rabindrinath's keep and we shall at last be free!\"");
	say();
	gflags[0x020E] = true;
	gflags[0x020F] = true;
	gflags[0x0210] = true;
	abort;
labelFunc04B6_0997:
	goto labelFunc04B6_060C;
labelFunc04B6_099A:
	endconv;
labelFunc04B6_099B:
	return;
}


