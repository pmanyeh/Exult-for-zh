#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D2 object#(0x7D2) ();
extern void Func0901 0x901 ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AF 0x9AF (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);
extern var Func098D 0x98D ();
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();

void Func01C7 shape#(0x1C7) ()
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
	var var001C;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "his";
	var0003 = "him";
	var0004 = "he";
	var0005 = "man";
	if (!UI_is_pc_female()) goto labelFunc01C7_0044;
	var0002 = "her";
	var0004 = "she";
	var0003 = "her";
	var0005 = "woman";
labelFunc01C7_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!((UI_get_npc_id(0xFFEC) > 0x0006) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_0077;
	var0008 = 0x0002;
labelFunc01C7_0077:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc01C7_0092;
	var0007 = "day";
	goto labelFunc01C7_0098;
labelFunc01C7_0092:
	var0007 = "evening";
labelFunc01C7_0098:
	if (!(event == 0x000E)) goto labelFunc01C7_0215;
	if (!((UI_get_npc_id(0xFFEE) == 0x000D) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_0137;
	var0009 = UI_get_object_position(0xFE9C);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFE9C);
	UI_move_object(0xFE9C, [0x0937, 0x0733, 0x0001]);
	UI_play_sound_effect(0x0082);
	event = 0x000D;
labelFunc01C7_0137:
	if (!((UI_get_npc_id(0xFFEE) == 0x000C) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_01CE;
	var0009 = UI_get_object_position(0xFE9C);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFE9C);
	UI_move_object(0xFE9C, [0x093C, 0x0740, 0x0000]);
	UI_play_sound_effect(0x0082);
	event = 0x000D;
labelFunc01C7_01CE:
	if (!((UI_get_npc_id(0xFFEE) == 0x0001) && (item == UI_get_npc_object(0xFFEE)))) goto labelFunc01C7_0215;
	if (!(UI_get_distance(0xFFEE, 0xFE9C) > 0x0002)) goto labelFunc01C7_0215;
	0xFFEE->Func07D2();
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x0008);
	abort;
labelFunc01C7_0215:
	if (!((event == 0x000D) && gflags[0x00E2])) goto labelFunc01C7_0372;
	if (!((UI_get_npc_id(0xFFEE) == 0x000D) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_023D;
	Func0901();
	abort;
labelFunc01C7_023D:
	if (!((UI_get_npc_id(0xFFEE) == 0x000C) && (UI_get_npc_number(item) == 0xFE9C))) goto labelFunc01C7_0372;
	var000B = [0x0178, 0x010E, 0x01B0, 0x01B1];
	var000C = [];
	enum();
labelFunc01C7_026E:
	for (var000F in var000B with var000D to var000E) attend labelFunc01C7_0293;
	var000C = (var000C & UI_find_nearby(0xFE9C, var000F, 0x000A, 0x0000));
	goto labelFunc01C7_026E;
labelFunc01C7_0293:
	var0010 = false;
	enum();
labelFunc01C7_0298:
	for (var000F in var000C with var0011 to var0012) attend labelFunc01C7_02EA;
	if (!(UI_get_item_quality(var000F) == 0x00D4)) goto labelFunc01C7_02E7;
	var0010 = var000F;
	var0009 = UI_get_object_position(var000F);
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0040);
labelFunc01C7_02E7:
	goto labelFunc01C7_0298;
labelFunc01C7_02EA:
	if (!var0010) goto labelFunc01C7_0308;
	var0013 = (UI_get_item_frame(var0010) - 0x0001);
	UI_set_item_frame(var0010, var0013);
labelFunc01C7_0308:
	var000A = (UI_find_nearby(0xFE9C, 0x010E, 0x0028, 0x0000) & UI_find_nearby(0xFE9C, 0x01B0, 0x0028, 0x0000));
	enum();
labelFunc01C7_032D:
	for (var000F in var000A with var0014 to var0015) attend labelFunc01C7_035B;
	if (!(UI_get_item_quality(var000F) == 0x00D3)) goto labelFunc01C7_0358;
	UI_set_item_frame(var000F, (UI_get_item_frame(var000F) - 0x0002));
labelFunc01C7_0358:
	goto labelFunc01C7_032D;
labelFunc01C7_035B:
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x0001);
labelFunc01C7_0372:
	if (!((event == 0x0002) && gflags[0x00E2])) goto labelFunc01C7_1563;
	if (!(UI_get_npc_id(0xFFEE) == 0x000C)) goto labelFunc01C7_03B8;
	UI_set_npc_id(0xFFEE, 0x000D);
	UI_si_path_run_usecode(0xFE9C, [0x0937, 0x0733, 0x0001], 0x000D, UI_get_npc_object(0xFE9C), 0x01C7, false);
	abort;
labelFunc01C7_03B8:
	if (!(UI_get_npc_id(0xFFEE) == 0x000B)) goto labelFunc01C7_0444;
	UI_set_npc_id(0xFFEE, 0x000C);
	UI_play_sound_effect(0x0040);
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000D, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = ["@What's going on?@", "@Cannot stop...@", "@Where am I going?@"];
	Func094F(0xFE9C, var000A);
	UI_si_path_run_usecode(0xFE9C, [0x093C, 0x0740, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x01C7, false);
	UI_set_npc_id(0xFFEC, 0x0000);
	abort;
labelFunc01C7_0444:
	if (!(UI_get_npc_id(0xFFEE) == 0x000A)) goto labelFunc01C7_05C5;
	UI_set_npc_id(0xFFEE, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("\"Not that place! ");
	message(var0004);
	message(" shall never be seen alive again!\"");
	say();
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("\"It shall be with this criminal as with all others -- if ");
	message(var0004);
	message(" can find ");
	message(var0002);
	message(" way back to the surface world, then ");
	message(var0004);
	message(" shall be a free ");
	message(var0005);
	message(".\"");
	say();
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"Enough of this jabbering. Let justice be done!\"");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0004, (byte)0x52, "@Oh, cease thy prattle!@"]);
	Func097F(0xFFEA, "@Poor fool...@", 0x0014);
	Func097F(0xFFFF, "@Keep thy wits, Avatar!@", 0x0019);
	Func097F(0xFFFD, "@Do not despair!@", 0x0014);
	Func097F(0xFFFE, "@We shall wait for thee!@", 0x000C);
	Func097F(0xFFDE, (((("@" + var0004) + " is a dead ") + var0005) + "!@"), 0x0000);
	Func097F(0xFFD6, "@He made me do it...@", 0x000C);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x59, 0x0006]);
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B, (byte)0x52, (("@" + var0004) + " is doomed...@")]);
	var000A = UI_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B]);
	var000A = UI_set_to_attack(0xFFEE, 0xFE9C, 0x0118);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x69, (byte)0x6A, (byte)0x7A, (byte)0x58, 0x0039, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_05C5:
	if (!(UI_get_npc_id(0xFFEE) == 0x0009)) goto labelFunc01C7_067D;
	UI_set_npc_id(0xFFEE, 0x000A);
	UI_init_conversation();
	UI_show_npc_face0(0xFFE6, 0x0000);
	message("\"As with all who offend the MageLord, this criminal must be sent to the hellhole known as Dungeon Freedom.\"");
	say();
	UI_play_music(0x0017, Func09A0(0x0005, 0x0001));
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x52, "@Oh, no!@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x64, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0002]);
	abort;
labelFunc01C7_067D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0008)) goto labelFunc01C7_0712;
	UI_set_npc_id(0xFFEE, 0x0009);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("\"For the crime of entering the bedchamber of the MageLord's mistress, we must find ");
	message(var0003);
	message(" guilty, MageLord.\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Guilty!\"");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@And the sentence?@", 0x0000);
	Func09AF(0xFFEA, 0xFFE6, 0x0004, 0x01C7);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x27, 0x0001, (byte)0x59, 0x0004]);
	abort;
labelFunc01C7_0712:
	if (!(UI_get_npc_id(0xFFEE) == 0x0007)) goto labelFunc01C7_07AA;
	UI_set_npc_id(0xFFEE, 0x0008);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"Lords and Adepts, you have heard the evidence! ");
	message(var0006);
	message(" did come amongst us like a disease, to bring destruction upon us all.\"");
	say();
	message("\"Worst of all, ");
	message(var0004);
	message(" hath dared to tamper with the affections of she whom I hold most dear, the good sorceress Frigidazzi.\"");
	say();
	message("\"How do you judge ");
	message(var0003);
	message("?\"");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0000]);
	var000A = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0000]);
	abort;
labelFunc01C7_07AA:
	if (!(UI_get_npc_id(0xFFEE) == 0x0006)) goto labelFunc01C7_08A3;
	UI_set_npc_id(0xFFEE, 0x0007);
	UI_init_conversation();
	UI_show_npc_face0(0xFFD6, 0x0000);
	message("\"I did travel with this person upon my recent voyage from the Inn of the Sleeping Bull, and I had many long talks with ");
	message(var0003);
	message(".\"");
	say();
	message("\"I must report that ");
	message(var0002);
	message(" character is not to be trusted. ");
	message(var0004);
	message(" is a liar, a fraud, and is known to consort with people of the lowest type.\"");
	say();
	var0016 = Func0956(["Oh, like thyself?", "I deny this charge", "say nothing"]);
	if (!(var0016 == "Oh, like thyself?")) goto labelFunc01C7_082D;
	message("\"See, lords? ");
	message(var0004);
	message(" doth have a wicked tongue, which is why ");
	message(var0006);
	message(" is so often in great trouble...\"");
	say();
	message("\"The only reason ");
	message(var0004);
	message(" came to Moonshade was to flee justice at the hands of the Knights of Monitor!\"");
	say();
	message("\"They accuse ");
	message(var0003);
	message(" of bribing the Tower guards in order to release one of their prisoners...\"");
	say();
	goto labelFunc01C7_084E;
labelFunc01C7_082D:
	if (!(var0016 == "I deny this charge")) goto labelFunc01C7_0844;
	message("\"Denial will do thee no good, ");
	message(var0006);
	message(". Dost thou not understand that the MageLord will have his way?\"");
	say();
	goto labelFunc01C7_084E;
labelFunc01C7_0844:
	message("\"Yet ");
	message(var0004);
	message(" was a good travelling companion, able with sword and bow -- so I ask for thy leniency, MageLord.\"");
	say();
labelFunc01C7_084E:
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Thanks for thy witness, good merchant.\"");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@Thou mayest be seated.@", 0x0000);
	var000A = UI_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x000C, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0006]);
	abort;
labelFunc01C7_08A3:
	if (!(UI_get_npc_id(0xFFEE) == 0x0005)) goto labelFunc01C7_09BD;
	UI_set_npc_id(0xFFEE, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("\"This stranger came into my shop and asked many strange and personal questions concerning the Sorceress Frigidazzi.\"");
	say();
	var0016 = Func0956(["That's a lie", "I was only curious", "say nothing"]);
	if (!(var0016 == "That's a lie")) goto labelFunc01C7_08FE;
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"How darest thou defame the good lady Bucia, my good and dear friend!\"");
	say();
	message("\"Adepts, be sure to remember this offensive behavior when it comes time to render your verdict.\"");
	say();
	goto labelFunc01C7_095C;
labelFunc01C7_08FE:
	if (!(var0016 == "I was only curious")) goto labelFunc01C7_0942;
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("\"Such curiosity seems most impudent, considering that thou art a stranger in this land...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"And ");
	message(var0004);
	message(" did ask many questions about many other people, and about strange objects which I was not familiar with...\"");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Hardly the act of the casual adventurer ");
	message(var0004);
	message(" pretends to be...\"");
	say();
	goto labelFunc01C7_095C;
labelFunc01C7_0942:
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("\"Aha! The cad doth not even rise in ");
	message(var0002);
	message(" own defense -- ");
	message(var0004);
	message(" must be guilty!\"");
	say();
labelFunc01C7_095C:
	message("\"Let us hear from the next witness.\"");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@Merchant Flindo!@", 0x0000);
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var000A = UI_delayed_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x52, "@Lord Filbercio...@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C7], 0x0005);
	abort;
labelFunc01C7_09BD:
	if (!(UI_get_npc_id(0xFFEE) == 0x0004)) goto labelFunc01C7_0AC5;
	UI_set_npc_id(0xFFEE, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("\"I beg of thee, MageLord Filbercio, to spare this person's life. It was all my fault.\"");
	say();
	if (!((UI_get_npc_id(0xFFEC) > 0x000B) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_0A05;
	message("\"After all, no mortal can resist the Dance of Passion.\"");
	say();
labelFunc01C7_0A05:
	var0016 = Func0956(["It's her fault", "It's my fault", "Nothing happened", "say nothing"]);
	UI_show_npc_face1(0xFFEE, 0x0000);
	if (!(var0016 == "It's her fault")) goto labelFunc01C7_0A35;
	message("\"What a cad! This whoreson thinks to escape punishment for the crime by blaming it all on dear Frigidazzi.\"");
	say();
	goto labelFunc01C7_0A64;
labelFunc01C7_0A35:
	if (!(var0016 == "It's my fault")) goto labelFunc01C7_0A4C;
	message("\"See -- you have heard it from ");
	message(var0002);
	message(" own mouth!\"");
	say();
	goto labelFunc01C7_0A64;
labelFunc01C7_0A4C:
	if (!(var0016 == "Nothing happened")) goto labelFunc01C7_0A64;
	message("\"My fellow wizards, I am sure that you are able to see beyond this criminal's denials!\"");
	say();
	message("\"After all, I caught ");
	message(var0003);
	message(" in the bedchamber of dear Frigidazzi...\"");
	say();
labelFunc01C7_0A64:
	message("\"Please be seated, Frigidazzi. We shall now hear from the character witnesses.\"");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var000A = UI_delayed_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x52, "@MageLord...@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C7], 0x0005);
	Func097F(0xFFEE, "@The good lady Bucia...@", 0x0000);
	abort;
labelFunc01C7_0AC5:
	if (!(UI_get_npc_id(0xFFEE) == 0x0003)) goto labelFunc01C7_0B61;
	UI_set_npc_id(0xFFEE, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"Order in the court!\"");
	say();
	message("\"We have convened this day to hear the case of ");
	message(var0006);
	message(", who hath committed treason. This criminal is charged with lusting after the mistress of the MageLord.\"");
	say();
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc01C7_0B20;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Since when is this a crime? What doth the lady say?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Be silent, or thou too wilt be sentenced to the Pit -- for thine insolence!\"");
	say();
labelFunc01C7_0B20:
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0004, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x52, "@Let me speak...@", (byte)0x27, 0x0007, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_0B61:
	if (!(UI_get_npc_id(0xFFEE) == 0x0002)) goto labelFunc01C7_1291;
	UI_set_npc_id(0xFFEE, 0x0003);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x0027, Func09A0(0x0005, 0x0001));
	var0017 = Func098D();
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	var0018 = 0x0000;
	enum();
labelFunc01C7_0BC7:
	for (var0016 in var0017 with var0019 to var001A) attend labelFunc01C7_0C2A;
	if (!UI_npc_nearby2(var0016)) goto labelFunc01C7_0C27;
	UI_set_schedule_type(var0016, 0x000F);
	UI_move_object(var0016, [0x0938, (0x074A + var0018), 0x0000]);
	var000A = UI_execute_usecode_array(var0016, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6B]);
	UI_set_npc_id(var0016, 0x001E);
	var0018 = (var0018 + 0x0002);
labelFunc01C7_0C27:
	goto labelFunc01C7_0BC7;
labelFunc01C7_0C2A:
	var000A = UI_get_object_position(0xFFDE);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0D48;
	UI_set_npc_id(0xFFDE, 0x001E);
labelFunc01C7_0D48:
	var000A = UI_get_object_position(0xFFFD);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0E66;
	UI_set_npc_id(0xFFFD, 0x001E);
labelFunc01C7_0E66:
	var000A = UI_get_object_position(0xFFFF);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0F84;
	UI_set_npc_id(0xFFFF, 0x001E);
labelFunc01C7_0F84:
	UI_set_npc_id(0xFFFE, 0x001E);
	var000A = UI_get_object_position(0xFFFE);
	if (!(!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8))))))))))) goto labelFunc01C7_10B5;
	if (!(!UI_get_item_flag(0xFFFE, 0x0004))) goto labelFunc01C7_10B5;
	gflags[0x013A] = true;
labelFunc01C7_10B5:
	Func097F(var0016, "@Hush...@", 0x0007);
	UI_move_object(0xFE9C, [0x0930, 0x074E, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x55, 0x0636, (byte)0x54, 0x0020], 0x000A);
	UI_move_object(0xFFEE, [0x0925, 0x074F, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B, (byte)0x58, 0x0038, (byte)0x27, 0x0008, (byte)0x0B, 0xFFFC, 0x0003, (byte)0x6C, (byte)0x61, (byte)0x52, "@Order!@", (byte)0x27, 0x0008, (byte)0x55, 0x01C7], 0x000C);
	UI_set_schedule_type(0xFFEA, 0x000F);
	UI_move_object(0xFFEA, [0x092F, 0x0746, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFE6, 0x000F);
	UI_move_object(0xFFE6, [0x092F, 0x0758, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x000A, (byte)0x52, "@Let us finish this matter...@"], 0x000C);
	UI_move_object(0xFFEC, [0x0938, 0x0751, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFF3, 0x000F);
	UI_move_object(0xFFF3, [0x0938, 0x0756, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x52, "@This should be interesting...@", (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFD6, 0x000F);
	UI_move_object(0xFFD6, [0x0938, 0x0754, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0008, (byte)0x52, (("@" + var0004) + "'s guilty!@")], 0x000C);
	UI_set_polymorph(0xFFEC, 0x028C);
	UI_set_polymorph(0xFE9C, 0x02D1);
	abort;
labelFunc01C7_1291:
	if (!(UI_get_npc_id(0xFFEE) == 0x0001)) goto labelFunc01C7_1506;
	UI_set_npc_id(0xFFEE, 0x0002);
	var000A = UI_find_nearby(item, 0x01FD, 0x0014, 0x0000);
	if (!var000A) goto labelFunc01C7_12CA;
	UI_set_schedule_type(var000A, 0x0014);
labelFunc01C7_12CA:
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("\"What!? Frigidazzi, why is this stranger in thy chambers?!\"");
	say();
	if (!((UI_get_npc_id(0xFFEC) > 0x0006) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_12FA;
	message("\"And where are thy clothes?\"");
	say();
labelFunc01C7_12FA:
	UI_show_npc_face1(0xFFEC, var0008);
	message("\"Darling! This is such a surprise... I have an explanation for everything...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I am not daft, sorceress. I can see very well what hath been happening here.\"");
	say();
	message("\"What dost thou have to say in thy defense, ");
	message(var0006);
	message("?\"");
	say();
	var0016 = Func0956(["I'm guilty", "I'm innocent", "I'm leaving"]);
	if (!(var0016 == "I'm guilty")) goto labelFunc01C7_1363;
	message("\"I knew it!\"");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("\"Oh, ");
	message(var0006);
	message("! Thou shouldst not have said such a thing -- the wrath of the MageLord is legendary!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc01C7_1405;
labelFunc01C7_1363:
	if (!(var0016 == "I'm innocent")) goto labelFunc01C7_13E2;
	if (!(UI_get_npc_id(0xFFEC) == 0x000C)) goto labelFunc01C7_139B;
	message("\"Idiot! Dost thou not think that I recognize the after-effects of the Dance of Passion?!\"");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("\"Oh, no...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc01C7_13DF;
labelFunc01C7_139B:
	if (!((UI_get_npc_id(0xFFEC) > 0x000C) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_13BC;
	message("\"Thou dost stand there without clothes, and claim to be innocent? Ha!\"");
	say();
	goto labelFunc01C7_13DF;
labelFunc01C7_13BC:
	message("\"A likely story! Listen here, swine -- thou art not the first to try to steal my favorite mistress...\"");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("\"No! Do not do to ");
	message(var0003);
	message(" what thou didst to the others...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc01C7_13DF:
	goto labelFunc01C7_1405;
labelFunc01C7_13E2:
	message("\"Not so fast, peasant! I have a special punishment reserved for those who dare to play games with my mistresses...\"");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("\"No! Do not, Filbercio! Spare this one from thy wrath! Do not send ");
	message(var0003);
	message(" into the Pit...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc01C7_1405:
	message("\"I demand that this criminal be punished by the Council of Mages. Let the quorum of Mages be convened instantly!\"");
	say();
	UI_play_sound_effect(0x0082);
	UI_end_conversation();
	var0017 = ([0xFE9C, 0xFFEC, 0xFFEE] & Func098D());
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	enum();
labelFunc01C7_144C:
	for (var0016 in var0017 with var001B to var001C) attend labelFunc01C7_1497;
	var000A = UI_get_npc_name(var0016);
	if (!UI_npc_nearby(var0016)) goto labelFunc01C7_1494;
	var0009 = UI_get_object_position(var0016);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc01C7_1494:
	goto labelFunc01C7_144C;
labelFunc01C7_1497:
	Func097F(0xFFEE, "@Vas Ibex Ort!@", 0x0000);
	UI_set_schedule_type(0xFFEE, 0x000F);
	Func097F(0xFE9C, "@Hey!@", 0x0009);
	Func097F(0xFFEC, (("@Do not hurt " + var0003) + "!@"), 0x000B);
	if (!(UI_get_npc_id(0xFFEC) == 0x0010)) goto labelFunc01C7_14EE;
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x61]);
labelFunc01C7_14EE:
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x000F);
	abort;
labelFunc01C7_1506:
	UI_set_npc_id(0xFFEE, 0x0001);
	Func097F(0xFFEE, "@What is happening?!@", 0x0000);
	var0009 = UI_get_object_position(0xFE9C);
	UI_si_path_run_usecode(0xFFEE, var0009, 0x0003, UI_get_npc_object(0xFFEE), 0x01C7, true);
	0xFFEE->Func07D1();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x2B, 0x0002, (byte)0x27, 0x0002, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_1563:
	return;
}


