#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0906 0x906 (var var0000);
extern void Func07D2 object#(0x7D2) ();
extern var Func0942 0x942 (var var0000);
extern void Func092B 0x92B ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0977 0x977 (var var0000);
extern void Func09B4 0x9B4 (var var0000);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0994 0x994 ();

void Func0403 object#(0x403) ()
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

	var0000 = UI_get_npc_id(0xFFFD);
	var0001 = Func0954();
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0403_005A;
	if (!gflags[0x0083]) goto labelFunc0403_005A;
	var0003 = UI_get_oppressor(0xFFFD);
	var0003 = (0x0000 - var0003);
	if (!(!gflags[0x0007])) goto labelFunc0403_0055;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0003), UI_get_npc_object(0xFFFD));
	return;
labelFunc0403_0055:
	Func092E(item);
	return;
labelFunc0403_005A:
	if (!(event == 0x0001)) goto labelFunc0403_01D4;
	Func097F(0xFE9C, "@Dear friend...@", 0x0000);
	0xFFFD->Func07D1();
	if (!(!UI_get_item_flag(0xFFFD, 0x001E))) goto labelFunc0403_0172;
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0159;
	var0004 = false;
	var0005 = UI_find_nearby(0xFFFD, 0x0178, 0x000F, 0x0000);
	enum();
labelFunc0403_00A5:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0403_00D0;
	if (!((UI_get_item_quality(var0008) == 0x0068) && (Func0906(var0008) != 0x0002))) goto labelFunc0403_00CD;
	var0004 = true;
labelFunc0403_00CD:
	goto labelFunc0403_00A5;
labelFunc0403_00D0:
	var0005 = UI_find_nearby(0xFFFD, 0x010E, 0x000F, 0x0000);
	enum();
labelFunc0403_00E4:
	for (var0008 in var0005 with var0009 to var000A) attend labelFunc0403_0104;
	if (!(UI_get_item_quality(var0008) == 0x0068)) goto labelFunc0403_0101;
	var0004 = true;
labelFunc0403_0101:
	goto labelFunc0403_00E4;
labelFunc0403_0104:
	if (!var0004) goto labelFunc0403_0123;
	Func097F(0xFFFD, "@I am free!@", 0x0002);
	UI_set_schedule_type(0xFFFD, 0x0003);
	goto labelFunc0403_0156;
labelFunc0403_0123:
	0xFFFD->Func07D2();
	Func097F(0xFFFD, "@Help me, Avatar!@", 0x0002);
	var000B = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x0007);
	UI_set_schedule_type(0xFFFD, 0x000F);
labelFunc0403_0156:
	goto labelFunc0403_016F;
labelFunc0403_0159:
	Func097F(0xFFFD, "@Yes?@", 0x0002);
	UI_set_schedule_type(0xFFFD, 0x0003);
labelFunc0403_016F:
	goto labelFunc0403_01D4;
labelFunc0403_0172:
	var000C = UI_get_random(0x0004);
	if (!(var000C == 0x0001)) goto labelFunc0403_0192;
	Func097F(0xFFFD, "@Wrong is right!@", 0x0002);
labelFunc0403_0192:
	if (!(var000C == 0x0002)) goto labelFunc0403_01A8;
	Func097F(0xFFFD, "@Life is a farce!@", 0x0002);
labelFunc0403_01A8:
	if (!(var000C == 0x0003)) goto labelFunc0403_01BE;
	Func097F(0xFFFD, "@Sing the dirge of love...@", 0x0002);
labelFunc0403_01BE:
	if (!(var000C == 0x0004)) goto labelFunc0403_01D4;
	Func097F(0xFFFD, "@Futility is the answer!@", 0x0002);
labelFunc0403_01D4:
	if (!(event == 0x0009)) goto labelFunc0403_0A12;
	UI_clear_item_say(0xFFFD);
	UI_clear_item_say(0xFE9C);
	if (!(!gflags[0x0003])) goto labelFunc0403_02AF;
	UI_init_conversation();
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"'Twas a fearsome passage, ");
	message(var0002);
	message(". After we sailed between the Serpent Pillars, I could have sworn that we were flying...\"");
	say();
	message("\"Yet here we are on the ship. I wonder if I lost anything...\"");
	say();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"We may be on the ship, but the ship is upon dry land! I think that thou art correct, Iolo. We did fly!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Brrr. Dost thou notice the chill in the air? 'Tis much colder here than at home.\"");
	say();
	message("\"I hope Gwenno brought enough warm clothing...\"");
	say();
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Do not worry so, old friend. We shall find thy wife soon enough.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"And that fiend, Batlin, I hope!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Look, ");
	message(var0002);
	message("! A strange storm is nearly upon us. This is certainly not Britannia!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@Where are we?@", 0x0005);
	Func097F(0xFFFF, "@Let us find Batlin!@", 0x000F);
	Func097F(0xFFFD, "@Do not forget about Gwenno...@", 0x0023);
	UI_add_to_party(0xFFFD);
	UI_add_to_party(0xFFFF);
	UI_add_to_party(0xFFFE);
	gflags[0x0003] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	abort;
labelFunc0403_02AF:
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0351;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"I thank thee for freeing me from this hellhole! The natives of this place are ignorant sots. Imagine, thinking me to be a sorcerer!\"");
	say();
	message("\"Hast thou looked in thy packs since the storm, ");
	message(var0001);
	message("? Nothing in my backpack is as it was when Lord British gave us the list, Avatar!\"");
	say();
	if (!Func0942(0xFFFE)) goto labelFunc0403_02FB;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"I am making a list of the strange items which the storm gave us.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Then I shall add to it.\"");
	say();
	goto labelFunc0403_0328;
labelFunc0403_02FB:
	if (!Func0942(0xFFFF)) goto labelFunc0403_0324;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"I have a list of the strange items which the storm gave us.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I shall add to it.\"");
	say();
	goto labelFunc0403_0328;
labelFunc0403_0324:
	message("\"I shall make a list of the strange things I have found in my packs. Perhaps these are clues to where our real belongings have gone.\"");
	say();
labelFunc0403_0328:
	UI_add_to_party(0xFFFD);
	UI_set_new_schedules(0xFFFD, 0x0000, 0x001A, [0x097C, 0x0464]);
	gflags[0x0019] = true;
	Func092B();
	gflags[0x0078] = true;
	abort;
labelFunc0403_0351:
	UI_show_npc_face0(0xFFFD, 0x0000);
	if (!UI_get_item_flag(0xFFFD, 0x0006)) goto labelFunc0403_037C;
	UI_set_schedule_type(0xFFFD, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0403_038A;
labelFunc0403_037C:
	UI_run_schedule(0xFFFD);
	UI_add_answer("join");
labelFunc0403_038A:
	if (!(var0000 == 0x001E)) goto labelFunc0403_03F8;
	UI_remove_answer("join");
	message("\"Thank the Virtues! Thou art whole and hale, ");
	message(var0001);
	message("!\"");
	say();
	message("\"I feared that I had lost both thee and my beloved wife, but thou hast survived the depths even as Dupre assured me that thou wouldst...\"");
	say();
	if (!Func0942(0xFFEA)) goto labelFunc0403_03CB;
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("\"'Tis said that only a superb Mage can leave the Mountains of Freedom alive.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0403_03CB:
	message("\"The Sorcerer Gustacio hath been instructing me somewhat in the magic of this land, ");
	message(var0001);
	message(". I think that he doth have information that shall interest thee.\"");
	say();
	gflags[0x0135] = true;
	UI_set_npc_id(0xFFFD, 0x0000);
	UI_add_to_party(0xFFFD);
	gflags[0x0019] = true;
	UI_add_answer("leave");
	goto labelFunc0403_0409;
labelFunc0403_03F8:
	message("\"Wouldst thou enjoy some idle conversation, ");
	message(var0001);
	message(", or shall I embrace my lute and provide a musical interlude?\"");
	say();
	UI_add_answer("a song");
labelFunc0403_0409:
	if (!(UI_get_npc_id(0xFFFE) == 0x001E)) goto labelFunc0403_041E;
	UI_add_answer("Shamino's whereabouts");
labelFunc0403_041E:
	if (!(UI_get_npc_id(0xFFFF) == 0x001E)) goto labelFunc0403_0433;
	UI_add_answer("Dupre's whereabouts");
labelFunc0403_0433:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0403_0448;
	UI_add_answer("Boydon's whereabouts");
labelFunc0403_0448:
	if (!(gflags[0x0019] && (UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99) && (!UI_get_item_flag(0xFFFD, 0x0006))))) goto labelFunc0403_0472;
	UI_add_answer("belongings");
labelFunc0403_0472:
	UI_show_npc_face0(0xFFFD, 0x0000);
	UI_add_answer(["Gwenno", "bye"]);
labelFunc0403_0489:
	converse attend labelFunc0403_0A11;
	case "belongings" attend labelFunc0403_05C3:
	UI_remove_answer("belongings");
	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0403_05C3;
	message("\"I am carrying many items, some of which may be of use to thee. Wouldst thou care to have these?\"");
	say();
	if (!Func0955()) goto labelFunc0403_05BB;
	message("\"Here they are.\"");
	say();
	gflags[0x0019] = false;
	var000D = [false, 0x0000];
	var000E = UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0403_04DE:
	for (var0011 in var000E with var000F to var0010) attend labelFunc0403_0570;
	if (!(!((UI_get_item_shape(var0011) == 0x0128) && (UI_get_item_frame(var0011) == 0x0002)))) goto labelFunc0403_056D;
	var000B = Func099B(0xFE9C, UI_get_item_quantity(var0011, 0x0000), UI_get_item_shape(var0011), UI_get_item_quality(var0011), UI_get_item_frame(var0011), UI_get_item_flag(var0011, 0x0012), false);
	if (!(var000D[0x0001] == 0x0000)) goto labelFunc0403_0550;
	var000D[0x0001] = var000B[0x0001];
labelFunc0403_0550:
	var000D[0x0002] = (var000D[0x0002] + var000B[Func0977(var000B)]);
	UI_remove_item(var0011);
labelFunc0403_056D:
	goto labelFunc0403_04DE;
labelFunc0403_0570:
	var000B = var000D;
	if (!(var000B[0x0001] != 0x0000)) goto labelFunc0403_0587;
	message("\"Thy friends will have to help carry these things.\"");
	say();
labelFunc0403_0587:
	if (!(var000B[0x0002] > 0x0000)) goto labelFunc0403_05B8;
	var000B = var000B[0x0002];
	if (!(var000B > 0x0001)) goto labelFunc0403_05B4;
	message("\"Since thou canst not carry these remaining ");
	message(var000B);
	message(" items, I will place them at thy feet.\"");
	say();
	goto labelFunc0403_05B8;
labelFunc0403_05B4:
	message("\"Since thou dost not have enough room for this last item, I will place it at thy feet.\"");
	say();
labelFunc0403_05B8:
	goto labelFunc0403_05C3;
labelFunc0403_05BB:
	gflags[0x0019] = true;
	message("\"If thou changest thy mind, thou hast but to return and ask again.\"");
	say();
labelFunc0403_05C3:
	case "join" attend labelFunc0403_065E:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0403_061B;
	if (!Func0942(0xFFB5)) goto labelFunc0403_060A;
	message("\"But ");
	message(var0001);
	message(", the Guardian of the Test is standing right here. If thou desirest to cheat, thou shouldst at least do so\tcovertly...\"");
	say();
	UI_show_npc_face1(0xFFB5, 0x0000);
	message("\"No cheating, stranger!\"");
	say();
	UI_remove_npc_face1();
	Func097F(0xFFB5, "@No cheating!@", 0x0002);
	goto labelFunc0403_060E;
labelFunc0403_060A:
	message("\"I cannot join thee, friend. Even if thou wouldst cheat at the Test, I cannot aid thee in so doing. I am thy true friend.\"");
	say();
labelFunc0403_060E:
	Func097F(0xFFFD, "@Sorry...@", 0x0000);
	abort;
labelFunc0403_061B:
	UI_remove_answer("join");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0403_0650;
	UI_add_answer("leave");
	message("\"'Tis always an adventure to travel with thee, ");
	message(var0002);
	message("! I shall be proud to accompany thee.\"");
	say();
	UI_add_to_party(0xFFFD);
	gflags[0x0019] = true;
	goto labelFunc0403_065E;
labelFunc0403_0650:
	message("\"I would be glad to accompany thee, ");
	message(var0001);
	message(". However, I am an old man, and I can see that thou hast many companions at thy side.\"");
	say();
	message("\"I think that perhaps I should remain where I am...\"");
	say();
labelFunc0403_065E:
	case "leave" attend labelFunc0403_07BB:
	UI_remove_answer("leave");
	if (!(!gflags[0x0006])) goto labelFunc0403_067B;
	message("\"Thy concern for an old man is appreciated, my old friend. However, we have barely begun this adventure, and I am spry enough to keep up with thee!\"");
	say();
	goto labelFunc0403_07BB;
labelFunc0403_067B:
	UI_add_answer("join");
	message("\"Whatever thou dost wish, Avatar.\"");
	say();
	UI_remove_from_party(0xFFFD);
	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0403_07B5;
	message("\"I am carrying many items, some of which may be of use to thee. Wouldst thou care to have these before I depart?\"");
	say();
	if (!Func0955()) goto labelFunc0403_07AD;
	message("\"Here they are.\"");
	say();
	gflags[0x0019] = false;
	var000D = [false, 0x0000];
	var000E = UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0403_06D0:
	for (var0011 in var000E with var0012 to var0013) attend labelFunc0403_0762;
	if (!(!((UI_get_item_shape(var0011) == 0x0128) && (UI_get_item_frame(var0011) == 0x0002)))) goto labelFunc0403_075F;
	var000B = Func099B(0xFE9C, UI_get_item_quantity(var0011, 0x0000), UI_get_item_shape(var0011), UI_get_item_quality(var0011), UI_get_item_frame(var0011), UI_get_item_flag(var0011, 0x0012), false);
	if (!(var000D[0x0001] == 0x0000)) goto labelFunc0403_0742;
	var000D[0x0001] = var000B[0x0001];
labelFunc0403_0742:
	var000D[0x0002] = (var000D[0x0002] + var000B[Func0977(var000B)]);
	UI_remove_item(var0011);
labelFunc0403_075F:
	goto labelFunc0403_06D0;
labelFunc0403_0762:
	var000B = var000D;
	if (!(var000B[0x0001] != 0x0000)) goto labelFunc0403_0779;
	message("\"Thy friends will have to help carry these things.\"");
	say();
labelFunc0403_0779:
	if (!(var000B[0x0002] > 0x0000)) goto labelFunc0403_07AA;
	var000B = var000B[0x0002];
	if (!(var000B > 0x0001)) goto labelFunc0403_07A6;
	message("\"Since thou canst not carry these remaining ");
	message(var000B);
	message(" items, I will place them at thy feet.\"");
	say();
	goto labelFunc0403_07AA;
labelFunc0403_07A6:
	message("\"Since thou dost not have enough room for this last item, I will place it at thy feet.\"");
	say();
labelFunc0403_07AA:
	goto labelFunc0403_07B5;
labelFunc0403_07AD:
	gflags[0x0019] = true;
	message("\"If thou changest thy mind, thou hast but to return and ask again.\"");
	say();
labelFunc0403_07B5:
	Func09B4(0xFFFD);
labelFunc0403_07BB:
	case "Gwenno" attend labelFunc0403_0844:
	UI_remove_answer("Gwenno");
	var000B = Func0942(0xFF6B);
	if (!(UI_get_item_flag(0xFF6B, 0x0006) || (var000B && (!UI_get_item_flag(0xFF6B, 0x001E))))) goto labelFunc0403_07FD;
	message("\"No truer friend have I had in all of my life than thee, ");
	message(var0002);
	message(". With my lady love Gwenno returned to my side where she doth belong, my life is once again complete.\"");
	say();
	goto labelFunc0403_0844;
labelFunc0403_07FD:
	if (!(!gflags[0x0262])) goto labelFunc0403_080B;
	message("\"I miss Gwenno so much, Avatar. I hope that it is not long before we find her and I may hold her in mine arms again.\"");
	say();
	goto labelFunc0403_0844;
labelFunc0403_080B:
	if (!(!gflags[0x025F])) goto labelFunc0403_081F;
	message("\"Mine heart is broken! My life hath no meaning without my lady love! Oh, ");
	message(var0002);
	message(", how could our good and noble quest have ended in such tragedy!\"");
	say();
	goto labelFunc0403_0844;
labelFunc0403_081F:
	if (!gflags[0x026A]) goto labelFunc0403_082C;
	message("\"Now that we have succeeded in freeing Gwenno's body, perhaps the Monks of Monk Isle -- the self-professed masters of life and death -- may be able to help her.\"");
	say();
	goto labelFunc0403_0844;
labelFunc0403_082C:
	if (!UI_get_item_flag(0xFF6B, 0x001E)) goto labelFunc0403_0840;
	message("\"We must find some way of restoring Gwenno's mind! Unless we can do that her precious spirit is lost to me.\"");
	say();
	goto labelFunc0403_0844;
labelFunc0403_0840:
	message("\"My soul is at peace. Joy is to know Gwenno, and to have her once more in thriving good health.\"");
	say();
labelFunc0403_0844:
	case "a song" attend labelFunc0403_0999:
	UI_remove_answer("a song");
	var0014 = UI_get_item_flag(0xFFD9, 0x001C);
	if (!var0014) goto labelFunc0403_098F;
	message("\"Dost thou wish me to repeat a song thou hast already heard? Or dost thou wish to hear a new song?\"");
	say();
	var0015 = [];
	if (!(Func0957(["old song", "new song"]) == 0x0001)) goto labelFunc0403_08F2;
	if (!(gflags[0x01D3] == true)) goto labelFunc0403_0895;
	var0015 = (var0015 & 0x0001);
labelFunc0403_0895:
	if (!(gflags[0x01D4] == true)) goto labelFunc0403_08A7;
	var0015 = (var0015 & 0x0002);
labelFunc0403_08A7:
	if (!(gflags[0x01D5] == true)) goto labelFunc0403_08B9;
	var0015 = (var0015 & 0x0003);
labelFunc0403_08B9:
	if (!(gflags[0x01D6] == true)) goto labelFunc0403_08CB;
	var0015 = (var0015 & 0x0004);
labelFunc0403_08CB:
	if (!(gflags[0x01D7] == true)) goto labelFunc0403_08DD;
	var0015 = (var0015 & 0x0005);
labelFunc0403_08DD:
	if (!(gflags[0x01D8] == true)) goto labelFunc0403_08EF;
	var0015 = (var0015 & 0x0006);
labelFunc0403_08EF:
	goto labelFunc0403_095E;
labelFunc0403_08F2:
	if (!(gflags[0x01D3] == false)) goto labelFunc0403_0904;
	var0015 = (var0015 & 0x0001);
labelFunc0403_0904:
	if (!(gflags[0x01D4] == false)) goto labelFunc0403_0916;
	var0015 = (var0015 & 0x0002);
labelFunc0403_0916:
	if (!(gflags[0x01D5] == false)) goto labelFunc0403_0928;
	var0015 = (var0015 & 0x0003);
labelFunc0403_0928:
	if (!(gflags[0x01D6] == false)) goto labelFunc0403_093A;
	var0015 = (var0015 & 0x0004);
labelFunc0403_093A:
	if (!(gflags[0x01D7] == false)) goto labelFunc0403_094C;
	var0015 = (var0015 & 0x0005);
labelFunc0403_094C:
	if (!(gflags[0x01D8] == false)) goto labelFunc0403_095E;
	var0015 = (var0015 & 0x0006);
labelFunc0403_095E:
	if (!(var0015 == [])) goto labelFunc0403_096F;
	message("\"I'm sorry... Thou hast heard all of my songs.\"");
	say();
	goto labelFunc0403_098C;
labelFunc0403_096F:
	var0016 = UI_get_random(UI_get_array_size(var0015));
	var0017 = var0015[var0016];
	Func09B0(var0017);
labelFunc0403_098C:
	goto labelFunc0403_0999;
labelFunc0403_098F:
	message("\"I cannot think of anything to sing at the moment, ");
	message(var0001);
	message(". Perhaps if thou didst ask me later...\"");
	say();
labelFunc0403_0999:
	case "Shamino's whereabouts" attend labelFunc0403_09C1:
	UI_remove_answer("Shamino's whereabouts");
	if (!gflags[0x012B]) goto labelFunc0403_09B9;
	message("\"Thou hast no doubt heard by now the news? That Shamino doth live again! The monks brought him to us.\"");
	say();
	message("\"I think he was more disturbed by thy departure than he cared to show. Or else they have told him something...\"");
	say();
	goto labelFunc0403_09BD;
labelFunc0403_09B9:
	message("\"I think he was more disturbed by thine abrupt departure than he cared to show.\"");
	say();
labelFunc0403_09BD:
	message("\"He went west into the woods, to be alone.\"");
	say();
labelFunc0403_09C1:
	case "Dupre's whereabouts" attend labelFunc0403_09D4:
	UI_remove_answer("Dupre's whereabouts");
	message("\"At the nearest tavern, of course!\"");
	say();
labelFunc0403_09D4:
	case "Boydon's whereabouts" attend labelFunc0403_09E7:
	UI_remove_answer("Boydon's whereabouts");
	message("\"Um... well, I am not sure. Perhaps Dupre or Shamino might know.\"");
	say();
labelFunc0403_09E7:
	case "bye" attend labelFunc0403_0A0E:
	Func097F(0xFE9C, "@Thanks!@", 0x0000);
	Func097F(0xFFFD, "@A pleasure!@", 0x0002);
	UI_remove_npc_face0();
	goto labelFunc0403_0A11;
labelFunc0403_0A0E:
	goto labelFunc0403_0489;
labelFunc0403_0A11:
	endconv;
labelFunc0403_0A12:
	if (!(event == 0x0003)) goto labelFunc0403_0AFB;
	var0018 = Func0994();
	var0019 = UI_get_item_quality(item);
	if (!(var0018 == 0x001F)) goto labelFunc0403_0AA9;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"Avatar! Why art thou in my dream? I was looking for Gwenno...\"");
	say();
	message("\"Oh. Perhaps I have intruded upon thy dream.\"");
	say();
	message("\"Forgive me. I shall go seeking my wife and leave thee to thy dream.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@Pleasant dreams!@", 0x0002);
	var001A = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var001A[0x0001], var001A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var000B = UI_set_item_quality(item, 0x0003);
	var000B = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x000A);
	abort;
labelFunc0403_0AA9:
	if (!(var0018 == 0x0016)) goto labelFunc0403_0AD2;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"More snakes! Destroy the vile creatures, Avatar!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@I hate snakes!@", 0x0002);
	abort;
labelFunc0403_0AD2:
	if (!(var0018 == 0x0008)) goto labelFunc0403_0AFB;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("\"Oh, my poor Gwenno!\" *\"Now she is truly frigid.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@My love hath now departed!@", 0x0002);
	abort;
labelFunc0403_0AFB:
	if (!(event == 0x0000)) goto labelFunc0403_0B4B;
	if (!(UI_get_schedule_type(0xFFFD) == 0x001D)) goto labelFunc0403_0B4B;
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0B4B;
	var001B = ["@Woe is me!@", "@I feel cold.@", "@I am hungry.@", "@Release me!@", "@I'm innocent!@", "@Pity an old man...@"];
	Func097F(0xFFFD, var001B[UI_get_random(UI_get_array_size(var001B))], 0x0000);
labelFunc0403_0B4B:
	return;
}


