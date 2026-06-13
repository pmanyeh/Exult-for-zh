#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);

void Func04A0 object#(0x4A0) ()
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

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04A0_000F;
	Func0809();
	abort;
labelFunc04A0_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc04A0_021D;
	var0003 = UI_find_nearby(item, 0x025F, 0x0000, 0x0010);
	enum();
labelFunc04A0_003C:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc04A0_021D;
	var0007 = UI_get_item_frame(var0006);
	if (!((var0007 <= 0x0001) || (var0007 >= 0x0007))) goto labelFunc04A0_01AA;
	var0008 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc04A0_0075:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04A0_00C6;
	if (!((UI_get_item_frame(var000B) == 0x0006) && (UI_get_item_quality(var000B) == 0x0001))) goto labelFunc04A0_00C3;
	if (!(UI_get_distance(var000B, 0xFE9C) < 0x0009)) goto labelFunc04A0_00C3;
	UI_item_say(item, "@Thou shan't steal the gold!@");
	UI_set_schedule_type(item, 0x0000);
	UI_set_alignment(item, 0x0002);
labelFunc04A0_00C3:
	goto labelFunc04A0_0075;
labelFunc04A0_00C6:
	var000C = UI_find_nearest(item, 0x010E, 0x0003);
	if (!var000C) goto labelFunc04A0_0133;
	var000D = UI_get_object_position(var000C);
	var000E = UI_get_item_quality(var000C);
	UI_remove_item(var000C);
	var000F = UI_create_new_object(0x0178);
	if (!var000F) goto labelFunc04A0_0130;
	var0010 = UI_set_item_quality(var000F, var000E);
	UI_set_item_frame(var000F, 0x0005);
	var0010 = UI_update_last_created(var000D);
	UI_play_sound_effect2(0x0020, var000F);
labelFunc04A0_0130:
	goto labelFunc04A0_01AA;
labelFunc04A0_0133:
	if (!(!(UI_get_schedule_type(item) == 0x0000))) goto labelFunc04A0_01AA;
	var000C = UI_find_nearest(item, 0x0178, 0x0005);
	if (!var000C) goto labelFunc04A0_01AA;
	var000D = UI_get_object_position(var000C);
	var000E = UI_get_item_quality(var000C);
	UI_remove_item(var000C);
	var000F = UI_create_new_object(0x010E);
	if (!var000F) goto labelFunc04A0_01AA;
	var0010 = UI_set_item_quality(var000F, var000E);
	UI_set_item_frame(var000F, 0x0006);
	var0010 = UI_update_last_created(var000D);
	UI_play_sound_effect2(0x001F, var000F);
labelFunc04A0_01AA:
	if (!(var0007 == 0x0002)) goto labelFunc04A0_01DD;
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc04A0_01CD;
	UI_item_say(item, "@No new arrivals...@");
labelFunc04A0_01CD:
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x0007]);
labelFunc04A0_01DD:
	if (!(var0007 == 0x0004)) goto labelFunc04A0_021A;
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc04A0_020A;
	UI_item_say(item, "@'Tis as a rubbish heap!@");
	Func097F(item, "Bloody criminals...@", 0x0010);
labelFunc04A0_020A:
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x000A]);
labelFunc04A0_021A:
	goto labelFunc04A0_003C;
labelFunc04A0_021D:
	if (!(event == 0x0002)) goto labelFunc04A0_033E;
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!gflags[0x023B]) goto labelFunc04A0_026E;
	message("\"Yes, felon?\"");
	say();
	message("\"'Tis gratifying to see that I shant have to collect thy skull yet. Such stamina shall be useful to thee here, certainly.\"");
	say();
	message("\"But thou shouldst journey further into the mountain soon, felon. The only source of food and water lies deeper in the heart of Freedom... if thou canst pay for it.\"");
	say();
	message("\"Forgive me if I do not linger. I have many things to attend to before I can begin my rounds. Remember, if thou canst find thy way out, thou wilt be free!\"");
	say();
	if (!(UI_die_roll(0x0001, 0x000A) > 0x0009)) goto labelFunc04A0_025E;
	UI_set_schedule_type(item, 0x001D);
labelFunc04A0_025E:
	UI_remove_npc_face0();
	UI_item_say(item, "@So long, felon!@");
	abort;
	goto labelFunc04A0_0332;
labelFunc04A0_026E:
	message("\"Greetings, felon!\"");
	say();
	message("\"Thou art in the Mountains of Freedom... A magical prison from which none have escaped.\"");
	say();
	message("\"I am the caretaker here. It is my duty to record thy name and crime.\"");
	say();
	var0011 = (("I am " + var0002) + ".");
	var0012 = [var0011, "I am the Avatar.", "None of thy business."];
	var0013 = Func0956(var0012);
	if (!(var0013 == var0011)) goto labelFunc04A0_02B4;
	message("\"My condolences on thy sentence here, ");
	message(var0002);
	message(".\"");
	say();
labelFunc04A0_02B4:
	if (!(var0013 == "I am the Avatar.")) goto labelFunc04A0_02C2;
	message("\"I see... Perhaps thou couldst have pleaded insanity and avoided being sent here, felon.\"");
	say();
labelFunc04A0_02C2:
	if (!(var0013 == "None of thy business.")) goto labelFunc04A0_02D0;
	message("\"With thine attitude, I understand why thou art here.\"");
	say();
labelFunc04A0_02D0:
	message("\"With what crime art thou charged?\"");
	say();
	var0014 = ["I am innocent!", "Angering Filbercio.", "I don't know."];
	var0015 = Func0956(var0014);
	if (!(var0015 == "I am innocent!")) goto labelFunc04A0_02FA;
	message("\"Ahh, thou wouldst be surprised how many innocents come through here, felon. Only yesterday we had another such innocent... Let us see. Stefano was his name.\"");
	say();
labelFunc04A0_02FA:
	if (!(var0015 == "Angering Filbercio.")) goto labelFunc04A0_0308;
	message("\"Ahh, thou art in fine company then, felon. Only yesterday we had another such felon arrive... Let us see. Stefano was his name.\"");
	say();
labelFunc04A0_0308:
	if (!(var0015 == "I don't know.")) goto labelFunc04A0_0316;
	message("\"I am certain that thou wilt discern it while thou art here. Perhaps yesterday's felon is still alive to aid thee in thy search for enlightenment... Let us see. Stefano was his name.\"");
	say();
labelFunc04A0_0316:
	message("\"I will tell thee as I told him. Sleep passes thy time here, and may provide thee with new ideas for winning thy freedom.\"");
	say();
	message("\"Thou shouldst be wary of two rogue mages who roam through these passages. They came here in search of the forbidden reagent, Stoneheart, and never escaped.\"");
	say();
	message("\"Be mindful of the other felons... Most are quite desperate by now and will kill thee for what thou dost possess. In fact, they may prove to be thy greatest danger.\"");
	say();
	message("\"There is another caretaker within the prison with a small supply of food and healing potions for sale, if thou dost need any... And if thou dost make it that far, of course.\"");
	say();
	message("\"I make rounds periodically, to note who hath died for the records. Thou mayest notice later that I take great care to memorialize all who perish here. So thy passing shall not go unremarked...\"");
	say();
	message("\"Remember, if thou canst find thy way out, thou wilt be free!\"");
	say();
	gflags[0x023B] = true;
labelFunc04A0_0332:
	UI_remove_npc_face0();
	UI_item_say(item, "@Goodbye, felon!@");
labelFunc04A0_033E:
	if (!(event == 0x0001)) goto labelFunc04A0_035B;
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x04A0]);
labelFunc04A0_035B:
	if (!(event == 0x0007)) goto labelFunc04A0_0416;
	var000D = UI_get_object_position(item);
labelFunc04A0_036B:
	if (!(var000D[0x0003] > 0x0000)) goto labelFunc04A0_03AB;
	var000D[0x0001] = (var000D[0x0001] - 0x0001);
	var000D[0x0002] = (var000D[0x0002] - 0x0001);
	var000D[0x0003] = (var000D[0x0003] - 0x0002);
	goto labelFunc04A0_036B;
labelFunc04A0_03AB:
	var0016 = UI_get_cont_items(0xFF60, 0xFE99, 0xFE99, 0xFE99);
	if (!var0016) goto labelFunc04A0_03E1;
	var0010 = UI_set_last_created(var0016);
	if (!var0010) goto labelFunc04A0_03DE;
	var0010 = UI_update_last_created(var000D);
labelFunc04A0_03DE:
	goto labelFunc04A0_03AB;
labelFunc04A0_03E1:
	UI_sprite_effect(0x001B, (var000D[0x0001] - 0x0001), (var000D[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_remove_npc(0xFF60);
labelFunc04A0_0416:
	return;
}


