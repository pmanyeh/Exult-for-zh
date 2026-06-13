#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07F7 object#(0x7F7) ();

void Func04B3 object#(0x4B3) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc04B3_0048;
	var0003 = ("@I like this place!@" & ("@Pleasure me, woman!@" & ("@Dance, dance, dance!@" & ("@Now!@" & ("@Come to me!@" & "@Thou art beautiful...@")))));
	UI_item_say(item, var0003[UI_get_random(UI_get_array_size(var0003))]);
labelFunc04B3_0048:
	if (!(event == 0x0001)) goto labelFunc04B3_0076;
	UI_item_say(0xFE9C, "@Old friend...@");
	0xFF4D->Func07D1();
	Func097F(0xFF4D, "@What dost thou wish?@", 0x0002);
	UI_set_schedule_type(0xFF4D, 0x0003);
labelFunc04B3_0076:
	if (!(event == 0x0009)) goto labelFunc04B3_0339;
	UI_clear_item_say(0xFF4D);
	if (!UI_get_item_flag(0xFE9C, 0x0010)) goto labelFunc04B3_010D;
	var0004 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x061E], 0x0002);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0006 = UI_find_nearby(0xFE9C, 0x010E, 0x001E, 0x0000);
	if (!var0006) goto labelFunc04B3_010D;
	var0007 = UI_get_object_position(var0006);
	var0008 = UI_create_new_object(0x0178);
	if (!var0008) goto labelFunc04B3_010D;
	UI_remove_item(var0006);
	UI_set_item_frame(var0008, 0x0016);
	var0005 = UI_update_last_created(var0007);
labelFunc04B3_010D:
	UI_set_schedule_type(0xFF4D, 0x000F);
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"We feared for thee when thou didst disappear from between the pillars. While searching, I became trapped here. I cannot seem to find the way out. Though I suspect that those buttons on the wall might be part of the answer.\"");
	say();
	UI_add_answer(["disappear", "trapped", "buttons", "bye"]);
labelFunc04B3_0138:
	converse attend labelFunc04B3_0338;
	case "bye" attend labelFunc04B3_0163:
	UI_run_schedule(0xFF4D);
	Func097F(0xFE9C, "@Thanks...@", 0x0000);
	Func097F(0xFF4D, "@Try the left button!@", 0x0002);
	abort;
labelFunc04B3_0163:
	case "disappear" attend labelFunc04B3_0181:
	message("\"Thou didst examine the fiery pillar, as Zhelkas instructed thee... And then thou wert gone!\"");
	say();
	message("\"I think the Gargoyle hath tricked us, Avatar. Never trust their type...\"");
	say();
	UI_remove_answer("disappear");
	UI_add_answer("tricked");
labelFunc04B3_0181:
	case "tricked" attend labelFunc04B3_019F:
	message("\"When we sought to question him about thy disappearance, he was nowhere to be found. So we divided to look for thee...\"");
	say();
	message("\"I became confused when trying to return to the pillars. And here I am... With all these lovely people.\"");
	say();
	UI_remove_answer("tricked");
	UI_add_answer("people");
labelFunc04B3_019F:
	case "people" attend labelFunc04B3_01BD:
	message("\"They seem to be trapped here as well.\"");
	say();
	message("\"They have been trying to discourage me from using the button on the left... but there are powerful rewards for pressing that button!\"");
	say();
	UI_remove_answer("people");
	UI_add_answer("rewards");
labelFunc04B3_01BD:
	case "rewards" attend labelFunc04B3_01D4:
	message("\"Well, these people seem to have been here a very long time. They are... lonely... for company.\"");
	say();
	message("\"There is much that we could do to make them feel less lonely, Avatar, if thou dost know what I mean...\"");
	say();
	UI_remove_answer("rewards");
labelFunc04B3_01D4:
	case "trapped" attend labelFunc04B3_01F2:
	message("\"Thou canst see for thyself... There is no way out of here. I can find no concealed doors.\"");
	say();
	message("\"It is only reasonable that these buttons hold the way out. Though they also hold much more...\"");
	say();
	UI_remove_answer("trapped");
	UI_add_answer("what else");
labelFunc04B3_01F2:
	case "what else" attend labelFunc04B3_0210:
	message("\"Apparently the buttons also control the doors to the private chambers.\"");
	say();
	message("\"And also the private passions of these people! This is such fun, Avatar.\"");
	say();
	UI_remove_answer("what else");
	UI_add_answer("private chambers");
labelFunc04B3_0210:
	case "private chambers" attend labelFunc04B3_02DA:
	UI_remove_answer("private chambers");
	message("\"I can show thee, if thou wouldst like... Or thou canst press the button on the left post and see for thyself.\"");
	say();
	message("\"Wouldst thou like me to do it?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04B3_02D6;
	UI_remove_npc_face0();
	Func097F(0xFF4D, "@Watch this!@", 0x0000);
	gflags[0x01EE] = true;
	var0009 = UI_find_nearby(0xFE9C, 0x0314, 0x0014, 0x0000);
	enum();
labelFunc04B3_0257:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04B3_02D2;
	var000D = UI_get_item_quality(var000C);
	if (!(var000D == 0x0017)) goto labelFunc04B3_02CF;
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	var000E = UI_get_distance(0xFF4D, var000C);
	var0007 = UI_get_object_position(var000C);
	var0007[0x0001] = (var0007[0x0001] + 0x0001);
	UI_set_npc_id(0xFF4D, 0x0001);
	UI_si_path_run_usecode(0xFF4D, var0007, 0x000D, UI_get_npc_object(0xFF4D), 0x04B3, true);
labelFunc04B3_02CF:
	goto labelFunc04B3_0257;
labelFunc04B3_02D2:
	abort;
	goto labelFunc04B3_02DA;
labelFunc04B3_02D6:
	message("\"Perhaps later, when thou art more relaxed, eh?\"");
	say();
labelFunc04B3_02DA:
	case "buttons" attend labelFunc04B3_02F8:
	message("\"There are two buttons on the posts behind me.\"");
	say();
	message("\"When I went to press the one on the left, these comely folks begged me not to.\"");
	say();
	UI_remove_answer("buttons");
	UI_add_answer("begged");
labelFunc04B3_02F8:
	case "begged" attend labelFunc04B3_031A:
	message("\"Yes, begged. But they would not explain, and I was certain they were hiding something from me...\"");
	say();
	message("\"What could I do?\"");
	say();
	message("\"I pressed the button on the left... And made a rather fascinating discovery.\"");
	say();
	UI_remove_answer("begged");
	UI_add_answer("discovery");
labelFunc04B3_031A:
	case "discovery" attend labelFunc04B3_0335:
	message("\"I found out how very lonely certain of these folks have been -- particularly the women...\"");
	say();
	message("\"They have been very convincing.\"");
	say();
	message("\"Press the button, and thou canst see for thyself!\"");
	say();
	UI_remove_answer("discovery");
labelFunc04B3_0335:
	goto labelFunc04B3_0138;
labelFunc04B3_0338:
	endconv;
labelFunc04B3_0339:
	if (!(event == 0x0002)) goto labelFunc04B3_0457;
	if (!gflags[0x01EE]) goto labelFunc04B3_043C;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"See, Avatar? When I press this button, the women become so friendly towards me...\"");
	say();
	message("\"Now I and one of my new friends shall go to a private chamber for some socializing... if thou knowest what I mean...\"");
	say();
	message("\"I do not think I'll be back for quite a while, Avatar. Thou shalt have to find the way out thyself.\"");
	say();
	message("\"If thou wishest to...\"");
	say();
	UI_remove_npc_face0();
	var000F = UI_find_nearby(0xFF4D, 0x028C, 0x001E, 0x0004);
	if (!var000F) goto labelFunc04B3_0428;
	Func097F(0xFF4D, "@I think 'tis THY turn...@", 0x0001);
	UI_set_schedule_type(var000F, 0x000F);
	UI_clear_item_say(0xFF54);
	Func097F(0xFF54, "@Yes, Shamino...@", 0x0002);
	var0006 = UI_find_nearby(0xFF4D, 0x0178, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04B3_0428;
	var0007 = UI_get_object_position(var0006);
	UI_set_npc_id(0xFF4D, 0x0000);
	UI_si_path_run_usecode(0xFF4D, [(var0007[0x0001] + 0x0001), var0007[0x0002], var0007[0x0003]], 0x000A, item, 0x04B3, true);
	UI_si_path_run_usecode(0xFF54, [(var0007[0x0001] + 0x0001), (var0007[0x0002] + 0x0002), var0007[0x0003]], 0x000A, item, 0x04B3, true);
labelFunc04B3_0428:
	Func097F(0xFE9C, "@Hey, come back!@", 0x0003);
	gflags[0x01EE] = false;
	abort;
	goto labelFunc04B3_0456;
labelFunc04B3_043C:
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"See, their desire to please thee hath clouded their minds...\"");
	say();
	message("\"Open the door to their private chambers and let them show thee how much they'd like thee to stay...\"");
	say();
	message("\"They can be... very... persuasive.\"");
	say();
	UI_remove_npc_face0();
labelFunc04B3_0456:
	abort;
labelFunc04B3_0457:
	if (!(event == 0x000E)) goto labelFunc04B3_04CB;
	var0010 = UI_get_item_shape(item);
	if (!(var0010 == 0x0378)) goto labelFunc04B3_0475;
	event = 0x0007;
labelFunc04B3_0475:
	if (!((var0010 == 0x02D1) && (gflags[0x0202] == true))) goto labelFunc04B3_0489;
	event = 0x0007;
labelFunc04B3_0489:
	if (!((var0010 == 0x01E7) && (UI_get_npc_id(0xFF4D) == 0x0001))) goto labelFunc04B3_04A3;
	event = 0x000D;
labelFunc04B3_04A3:
	if (!((var0010 == 0x01E7) && (UI_get_npc_id(0xFF4D) == 0x0000))) goto labelFunc04B3_04BD;
	event = 0x000A;
labelFunc04B3_04BD:
	if (!(var0010 == 0x028C)) goto labelFunc04B3_04CB;
	event = 0x000A;
labelFunc04B3_04CB:
	if (!(event == 0x000D)) goto labelFunc04B3_04E6;
	var0005 = UI_execute_usecode_array(0xFF4D, [(byte)0x55, 0x072A]);
	abort;
labelFunc04B3_04E6:
	if (!(event == 0x000A)) goto labelFunc04B3_0570;
	if (!gflags[0x0202]) goto labelFunc04B3_056B;
	var0011 = UI_get_object_position(0xFF4D);
	var0012 = UI_get_object_position(0xFF54);
	Func09AC(0xFF4D, 0x001C, 0x066C, 0x0004);
	Func09AC(0xFF54, 0x0018, 0x066C, 0x0004);
	UI_sprite_effect(0x001A, var0011[0x0001], var0011[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0202] = false;
	goto labelFunc04B3_056F;
labelFunc04B3_056B:
	gflags[0x0202] = true;
labelFunc04B3_056F:
	abort;
labelFunc04B3_0570:
	if (!(event == 0x0007)) goto labelFunc04B3_065E;
	if (!gflags[0x0202]) goto labelFunc04B3_05EA;
	var0013 = UI_get_object_position(0xFE9C);
	var0012 = UI_get_object_position(0xFF53);
	UI_remove_npc(0xFF53);
	UI_sprite_effect(0x001A, var0013[0x0001], var0013[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_clear_item_flag(0xFE9C, 0x0010);
	0x0000->Func07F7();
	goto labelFunc04B3_065D;
labelFunc04B3_05EA:
	Func097F(0xFF53, "@Come, Avatar...@", 0x0002);
	var0006 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04B3_0659;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0007 = UI_get_object_position(var0006);
	var0007[0x0001] = (var0007[0x0001] + 0x0001);
	var0007[0x0002] = (var0007[0x0002] - 0x0002);
	UI_si_path_run_usecode(0xFE9C, var0007, 0x0007, UI_get_npc_object(0xFE9C), 0x04B3, true);
labelFunc04B3_0659:
	gflags[0x0202] = true;
labelFunc04B3_065D:
	abort;
labelFunc04B3_065E:
	if (!(event == 0x000B)) goto labelFunc04B3_0717;
	var0014 = UI_get_npc_number(item);
	var0007 = UI_get_object_position(var0014);
	UI_remove_npc(var0014);
	UI_sprite_effect(0x0007, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!(gflags[0x01EC] == true)) goto labelFunc04B3_0717;
	var0007 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_find_nearby(0xFE9C, 0x01E7, 0x0014, 0x0000)) goto labelFunc04B3_06F4;
	UI_show_npc_face0(0xFF4D, 0x0000);
	message("\"The slaves, Avatar! Thou didst release them all! Damn thee!\"");
	say();
	UI_remove_npc_face0();
labelFunc04B3_06F4:
	var0015 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0015, [(byte)0x23, (byte)0x55, 0x07F7], 0x000F);
labelFunc04B3_0717:
	return;
}


