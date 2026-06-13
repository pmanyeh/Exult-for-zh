#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08EC 0x8EC ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09B2 0x9B2 ();
extern var Func0955 0x955 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func098D 0x98D ();
extern var Func0988 0x988 (var var0000, var var0001);

void Func00E6 shape#(0xE6) ()
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
	var var001D;
	var var001E;
	var var001F;
	var var0020;

	var0000 = UI_get_item_flag(0xFFEC, 0x001C);
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc00E6_0042;
	var0004 = "day";
	goto labelFunc00E6_0048;
labelFunc00E6_0042:
	var0004 = "evening";
labelFunc00E6_0048:
	var0005 = "his";
	if (!var0002) goto labelFunc00E6_005A;
	var0005 = "her";
labelFunc00E6_005A:
	var0006 = UI_get_distance(0xFFEC, 0xFE9C);
	var0007 = [0x0975, 0x0748, 0x0000];
	var0008 = UI_get_object_position(0xFFEC);
	var0009 = [0x0986, 0x0766];
	var000A = (var0007[0x0001] - var0008[0x0001]);
	if (!(var000A < 0x0000)) goto labelFunc00E6_00B0;
	var000A = (var000A * 0xFFFF);
labelFunc00E6_00B0:
	var000B = (var0007[0x0002] - var0008[0x0002]);
	if (!(var000B < 0x0000)) goto labelFunc00E6_00D4;
	var000B = (var000B * 0xFFFF);
labelFunc00E6_00D4:
	var000C = (var000A + var000B);
	var000D = Func09A0(0x0005, 0x0003);
	if (!(event == 0x0002)) goto labelFunc00E6_1170;
	if (!(UI_get_npc_id(0xFFEC) == 0x0011)) goto labelFunc00E6_0104;
	Func08EC();
	abort;
labelFunc00E6_0104:
	if (!(UI_get_npc_id(0xFFEC) == 0x0010)) goto labelFunc00E6_0116;
	Func08EC();
	abort;
labelFunc00E6_0116:
	if (!(UI_get_npc_id(0xFFEC) == 0x000F)) goto labelFunc00E6_017B;
	UI_set_npc_id(0xFFEC, 0x0010);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0002);
	message("\"I think that I am falling in love with thee, ");
	message(var0003);
	message("! How did I ever live without thee...\"");
	say();
	UI_end_conversation();
	Func097F(item, "@Kiss me again, love...@", 0x0000);
	Func097F(0xFE9C, "@I cannot resist!@", 0x0002);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000], 0x0008);
	abort;
labelFunc00E6_017B:
	if (!(UI_get_npc_id(0xFFEC) == 0x000E)) goto labelFunc00E6_0225;
	UI_set_npc_id(0xFFEC, 0x000F);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x0027, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFE9C, [0x0976, 0x0745, 0x0000]);
	UI_move_object(0xFFEC, [0x0974, 0x0749, 0x0002]);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x61, (byte)0x59, 0x0004]);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x55, 0x0636, (byte)0x54, 0x001C, (byte)0x27, 0x0004, (byte)0x52, "@Wow...@", (byte)0x27, 0x0006, (byte)0x55, 0x00E6, 0x0000], 0x000F);
	abort;
labelFunc00E6_0225:
	if (!(UI_get_npc_id(0xFFEC) == 0x000D)) goto labelFunc00E6_0315;
	UI_set_npc_id(0xFFEC, 0x000E);
	UI_clear_item_say(0xFFEC);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0002);
	message("\"We need not these blankets...\"");
	say();
	UI_end_conversation();
	var000F = UI_find_nearby(item, 0x02B8, 0x000A, 0x0000);
	enum();
labelFunc00E6_026C:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc00E6_02BE;
	var0009 = UI_get_object_position(var0012);
	if (!(var0009[0x0003] == 0x0001)) goto labelFunc00E6_02BB;
	UI_remove_item(var0012);
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0014);
labelFunc00E6_02BB:
	goto labelFunc00E6_026C;
labelFunc00E6_02BE:
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x52, "@Oh!@"]);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x0002, (byte)0x52, "@Ah!@", (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_0315:
	if (!(UI_get_npc_id(0xFFEC) == 0x000C)) goto labelFunc00E6_039E;
	UI_set_npc_id(0xFFEC, 0x000D);
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func09B2();
	UI_play_sound_effect(0x0039);
	var000E = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@I'm cold...@", (byte)0x59, 0x0006], 0x0002);
	UI_si_path_run_usecode(0xFFEC, [0x0975, 0x0747, 0x0000], 0x000D, item, [0x00E6, 0x0000], false);
	abort;
labelFunc00E6_039E:
	if (!(UI_get_npc_id(0xFFEC) == 0x000B)) goto labelFunc00E6_0469;
	UI_set_npc_id(0xFFEC, 0x000C);
	UI_clear_item_say(0xFE9C);
	UI_clear_item_say(0xFFEC);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0002);
	message("\"No mortal can resist the Dance of Passion! Tell me that thy blood hath been stirred to a frenzy!\"");
	say();
	if (!Func0955()) goto labelFunc00E6_0444;
	UI_end_conversation();
	Func097F(0xFFEC, "@Likewise...@", 0x0004);
	Func097F(0xFE9C, "@I cannot wait!@", 0x0000);
	UI_si_path_run_usecode(0xFE9C, [0x0975, 0x0749, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), [0x00E6, 0x0000], false);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0003, (byte)0x59, 0x0006], 0x0004);
	abort;
	goto labelFunc00E6_0469;
labelFunc00E6_0444:
	message("\"No, thou dost not understand. As I said, no mortal can resist the Dance of Passion...\"");
	say();
	UI_end_conversation();
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x52, "@Uh-oh...@"]);
	Func08EC();
	abort;
labelFunc00E6_0469:
	if (!(UI_get_npc_id(0xFFEC) == 0x000A)) goto labelFunc00E6_04FA;
	0xFFEC->Func07D1();
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x000C, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_npc_id(0xFFEC, 0x000B);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x69, (byte)0x66, (byte)0x6A, (byte)0x66, (byte)0x69, (byte)0x0B, 0xFFFB, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x0B, 0xFFFA, 0x0002, (byte)0x55, 0x07D2, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_04FA:
	if (!(UI_get_npc_id(0xFFEC) == 0x0009)) goto labelFunc00E6_056F;
	UI_set_npc_id(0xFFEC, 0x000A);
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	0xFFEC->Func07D1();
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x27, 0x0004, (byte)0x6D, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_056F:
	if (!(UI_get_npc_id(0xFFEC) == 0x0008)) goto labelFunc00E6_0619;
	UI_set_npc_id(0xFFEC, 0x0009);
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x000D, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	0xFFEC->Func07D1();
	var000E = ["@Vox Erotis!@", "@Vex Nox Flam!@", "@Ort Vos!@", "@Ort Erotis!@"];
	Func094F(0xFFEC, var000E);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x59, 0x0006, (byte)0x6F, (byte)0x70, (byte)0x27, 0x0004, (byte)0x59, 0x0000, (byte)0x63, (byte)0x65, (byte)0x67, (byte)0x27, 0x0005, (byte)0x59, 0x0002, (byte)0x6F, (byte)0x70, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_0619:
	if (!(UI_get_npc_id(0xFFEC) == 0x0007)) goto labelFunc00E6_0705;
	UI_set_npc_id(0xFFEC, 0x0008);
	0xFFEC->Func07D1();
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0002);
	message("\"Beware, ");
	message(var0003);
	message("! I shall now begin the Dance of Passion, which no mortal can resist!\"");
	say();
	UI_end_conversation();
	var0013 = Func09A0(0x0000, 0x0001);
	if (!var0013) goto labelFunc00E6_066F;
	UI_play_music(0x0010, var0013);
labelFunc00E6_066F:
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x000C, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFFEC, "@Vas Flam!@", 0x0008);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6F, (byte)0x65, (byte)0x27, 0x0001, (byte)0x67, (byte)0x27, 0x0001, (byte)0x53, (byte)0x34, (byte)0x53, (byte)0x34, (byte)0x27, 0x0002, (byte)0x0B, 0xFFF3, 0x0003, (byte)0x55, 0x00E6, 0x0000]);
	var000E = ["@Gosh!@", "@Oh, my!@", "@Do not hurt thyself!@", "@Wow!@", "@Hmmm...@", "@Dost thou need help?@", "@Oh!@"];
	Func094F(0xFE9C, var000E);
	abort;
labelFunc00E6_0705:
	if (!(UI_get_npc_id(0xFFEC) == 0x0006)) goto labelFunc00E6_0746;
	UI_set_npc_id(0xFFEC, 0x0007);
	UI_set_polymorph(0xFFEC, 0x00E6);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_0746:
	if (!(UI_get_npc_id(0xFFEC) == 0x0005)) goto labelFunc00E6_0912;
	UI_set_npc_id(0xFFEC, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("\"Now that I have tasted thy lips, I think that mine infatuation with thee doth grow!\"");
	say();
	message("\"Strange -- 'twas so cold in here when thou didst enter, but now I feel suddenly warm...\"");
	say();
	message("\"I have not felt so alive in many months! Perhaps... I am not sure how to say this, but...\"");
	say();
	message("\"Dost thou desire my body, Avatar?\"");
	say();
	var000E = ["yes", "no", "What about Filbercio?"];
	if (!UI_is_pc_female()) goto labelFunc00E6_079C;
	var000E = (var000E & "I'm not that kind of girl!");
labelFunc00E6_079C:
	var000F = Func0956(var000E);
	if (!(var000F == "What about Filbercio?")) goto labelFunc00E6_07F6;
	message("\"The MageLord? Oh, how canst thou think of him when the two of us are here together, becoming intimate...\"");
	say();
	message("\"Perhaps this shall arouse thine interest!\"");
	say();
	UI_end_conversation();
	UI_si_path_run_usecode(0xFFEC, [0x097B, 0x0743, 0x0000], 0x000D, item, [0x00E6, 0x0000], false);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x27, 0x0002, (byte)0x6F, (byte)0x52, "@Est Nudi!@"]);
	abort;
labelFunc00E6_07F6:
	if (!(var000F == "yes")) goto labelFunc00E6_0846;
	message("\"Then watch this, my love...\"");
	say();
	UI_end_conversation();
	UI_si_path_run_usecode(0xFFEC, [0x097B, 0x0743, 0x0000], 0x000D, item, [0x00E6, 0x0000], false);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x27, 0x0002, (byte)0x6F, (byte)0x52, "@Est Nudi!@"]);
	abort;
	goto labelFunc00E6_0912;
labelFunc00E6_0846:
	if (!(var000F == "no")) goto labelFunc00E6_08A2;
	message("\"Oh... this is so embarrassing!\"");
	say();
	UI_end_conversation();
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x68, (byte)0x27, 0x0002, (byte)0x59, 0x0000, (byte)0x52, "@I could just die...@", (byte)0x27, 0x0006, (byte)0x55, 0x00E6, 0x0000, (byte)0x27, 0x0004, (byte)0x59, 0x0002, (byte)0x59, 0x0004]);
	UI_set_npc_id(0xFFEC, 0x0011);
	abort;
	goto labelFunc00E6_0912;
labelFunc00E6_08A2:
	message("\"Do I detect a note of disapproval? Well, I don't have to take that from anyone!\"");
	say();
	UI_end_conversation();
	0xFFEC->Func07D1();
	Func097F(0xFFEC, "@Pig!@", 0x0002);
	Func097F(0xFE9C, "@Ouch!@", 0x0008);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x07D2, (byte)0x53, (byte)0x34, (byte)0x27, 0x0002, (byte)0x66, (byte)0x27, 0x0002, (byte)0x67, (byte)0x58, 0x007F, (byte)0x27, 0x0004, (byte)0x61, (byte)0x27, 0x0008, (byte)0x55, 0x00E6, 0x0000]);
	UI_set_npc_id(0xFFEC, 0x0011);
	abort;
labelFunc00E6_0912:
	if (!(UI_get_npc_id(0xFFEC) == 0x0004)) goto labelFunc00E6_0A9C;
	UI_set_npc_id(0xFFEC, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	if (!UI_is_pc_female()) goto labelFunc00E6_0946;
	message("\"To be blunt, there is something uncommonly... erotic about thee. I am most attracted to thee, woman.\"");
	say();
	goto labelFunc00E6_094A;
labelFunc00E6_0946:
	message("\"To know that thou art a Mage, yet to see that thou art so manly -- this is most uncommon in Moonshade!\"");
	say();
labelFunc00E6_094A:
	message("\"Thou hast come to learn spells, but I can teach thee some true magic...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc00E6_095A;
	message("\"I could die to be taken into thy brawny arms!\"");
	say();
labelFunc00E6_095A:
	message("\"Wouldst thou kiss me, ");
	message(var0003);
	message("?\"");
	say();
	var000E = ["yes", "no"];
	if (!UI_is_pc_female()) goto labelFunc00E6_0981;
	var000E = (var000E & "Of course not!");
labelFunc00E6_0981:
	var000F = Func0956(var000E);
	if (!(var000F == "yes")) goto labelFunc00E6_09DF;
	UI_end_conversation();
	0xFFEC->Func07D1();
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x07D2, (byte)0x53, (byte)0x34, (byte)0x53, (byte)0x34, (byte)0x27, 0x0002, (byte)0x68, (byte)0x58, 0x0024, (byte)0x61, (byte)0x27, 0x0001, (byte)0x62, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000]);
	goto labelFunc00E6_0A9B;
labelFunc00E6_09DF:
	if (!(var000F == "no")) goto labelFunc00E6_0A57;
	UI_end_conversation();
	0xFFEC->Func07D1();
	Func097F(0xFFEC, "@Oh!@", 0x0002);
	Func097F(0xFE9C, "@Ouch!@", 0x0008);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x07D2, (byte)0x53, (byte)0x34, (byte)0x27, 0x0002, (byte)0x66, (byte)0x27, 0x0002, (byte)0x67, (byte)0x58, 0x007F, (byte)0x27, 0x0004, (byte)0x61, (byte)0x27, 0x0008, (byte)0x55, 0x00E6, 0x0000]);
	UI_set_npc_id(0xFFEC, 0x0011);
	goto labelFunc00E6_0A9B;
labelFunc00E6_0A57:
	message("\"Thou dost disappoint me. I had hoped that thou wouldst be more receptive...\"");
	say();
	UI_end_conversation();
	UI_set_npc_id(0xFFEC, 0x0011);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x52, "@Oh, well...@", (byte)0x59, 0x0002, (byte)0x27, 0x0008, (byte)0x55, 0x00E6, 0x0000]);
	Func097F(0xFE9C, "@Sorry...@", 0x0005);
labelFunc00E6_0A9B:
	abort;
labelFunc00E6_0A9C:
	if (!(UI_get_npc_id(0xFFEC) == 0x0003)) goto labelFunc00E6_0D4B;
	UI_set_npc_id(0xFFEC, 0x0004);
	var000E = UI_create_new_object(0x011D);
	if (!var000E) goto labelFunc00E6_0AEB;
	UI_set_item_frame(var000E, 0x0005);
	UI_clear_item_flag(var000E, 0x0012);
	var000E = UI_update_last_created([0x097F, 0x0744, 0x0002]);
labelFunc00E6_0AEB:
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("\"I feel so comfortable around thee. It is as though we have known each other before -- perhaps in some other existence?\"");
	say();
	message("\"Do not be formal with me, ");
	message(var0003);
	message(". Please, come join me here by the pool.\"");
	say();
	var000F = Func0956(["yes", "no", "About those spells..."]);
	if (!(var000F == "About those spells...")) goto labelFunc00E6_0C03;
	message("\"Why art thou in such a rush? In Moonshade, we know to mix pleasure with business.\"");
	say();
	message("\"I am sure that there is time for us to know each other better, before this matter of the spells must be conducted.\"");
	say();
	message("\"Thou shouldst learn to relax.\"");
	say();
	UI_end_conversation();
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0009, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0015, (var0009[0x0001] + 0x0004), (var0009[0x0002] + 0x0004), 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFE9C, "@Yow!@", 0x0000);
	UI_play_sound_effect(0x0039);
	UI_play_sound_effect(0x0028);
	UI_si_path_run_usecode(0xFE9C, [0x0980, 0x0748, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), [0x00E6, 0x0000], false);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6F, (byte)0x52, "@Vex Veni Nox!@", (byte)0x62, (byte)0x2B, 0x0002, (byte)0x27, 0x0004, (byte)0x55, 0x07D2, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_0C03:
	if (!(var000F == "yes")) goto labelFunc00E6_0C72;
	UI_end_conversation();
	Func097F(0xFFEC, "@Do not be shy with me...@", 0x0000);
	UI_si_path_run_usecode(0xFE9C, [0x0980, 0x0748, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), [0x00E6, 0x0000], false);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x2B, 0x0002, (byte)0x27, 0x0004, (byte)0x55, 0x07D2, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000]);
	goto labelFunc00E6_0D4A;
labelFunc00E6_0C72:
	message("\"Ah, but thou art so shy! Perhaps I can encourage thee to join me, by use of a little spell...\"");
	say();
	UI_end_conversation();
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0009, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0015, (var0009[0x0001] + 0x0004), (var0009[0x0002] + 0x0004), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	UI_play_sound_effect(0x0028);
	Func097F(0xFE9C, "@Hey!@", 0x0000);
	UI_si_path_run_usecode(0xFE9C, [0x0980, 0x0748, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), [0x00E6, 0x0000], false);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6F, (byte)0x52, "@Vex Veni Nox!@", (byte)0x62, (byte)0x2B, 0x0002, (byte)0x27, 0x0004, (byte)0x55, 0x07D2, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000]);
	abort;
labelFunc00E6_0D4A:
	abort;
labelFunc00E6_0D4B:
	if (!(UI_get_npc_id(0xFFEC) == 0x0002)) goto labelFunc00E6_0DFA;
	UI_set_npc_id(0xFFEC, 0x0003);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("\"I am so glad that thou hast met me here, sweet Avatar. I find strangers...\"");
	say();
	UI_end_conversation();
	var000E = UI_find_nearby(item, 0x011D, 0x0005, 0x0000);
	enum();
labelFunc00E6_0D8B:
	for (var000F in var000E with var0014 to var0015) attend labelFunc00E6_0DAE;
	if (!(UI_get_item_frame(var000F) == 0x0005)) goto labelFunc00E6_0DAB;
	UI_remove_item(var000E);
labelFunc00E6_0DAB:
	goto labelFunc00E6_0D8B;
labelFunc00E6_0DAE:
	Func097F(0xFFEC, "@...appealing...@", 0x0000);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x68, (byte)0x58, 0x000B, (byte)0x62, (byte)0x27, 0x0002, (byte)0x0B, 0xFFFA, 0x0003, (byte)0x27, 0x0002, (byte)0x55, 0x07D2, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000], 0x0005);
	abort;
labelFunc00E6_0DFA:
	if (!(UI_get_npc_id(0xFFEC) == 0x0001)) goto labelFunc00E6_0E45;
	var000E = ["@I love the night...@", "@so quiet...@", "@so dark...@"];
	Func094F(0xFFEC, var000E);
	UI_si_path_run_usecode(0xFFEC, [0x0980, 0x0746, 0x0000], 0x000D, item, [0x00E6, 0x0000], false);
	abort;
	goto labelFunc00E6_1170;
labelFunc00E6_0E45:
	UI_show_npc_face0(0xFFEC, 0x0000);
	Func09AC(0xFFEC, 0xFFFF, 0x0000, 0x000A);
	UI_set_new_schedules(0xFFEB, 0x0000, 0x000A, [0x0986, 0x0766]);
	UI_run_schedule(0xFFEB);
	UI_clear_item_flag(0xFFEB, 0x0001);
	Func097F(0xFFEB, "@Tar gorlfog!@", 0x0003);
	if (!((var000C < 0x000F) && ((!UI_npc_nearby(0xFFFD)) && ((!UI_npc_nearby(0xFFFF)) && ((!UI_npc_nearby(0xFFFE)) && (!UI_npc_nearby(0xFFDE))))))) goto labelFunc00E6_0F06;
	message("\"I am so glad that thou hast agreed to meet me here.\"");
	say();
	UI_play_music(0x001F, Func09A0(0x0005, 0x0001));
	UI_set_npc_id(0xFFEC, 0x0001);
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000]);
	abort;
	goto labelFunc00E6_1170;
labelFunc00E6_0F06:
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc00E6_1062;
	message("\"Thou didst come! I cannot express how pleased I am to see thee again, ");
	message(var0003);
	message(".\"");
	say();
	message("\"But this matter of the spells, it must be discussed in private. Only Mages may hear the secrets which I am about to reveal.\"");
	say();
	message("\"Wouldst thou please ask thy minions to depart?\"");
	say();
	if (!Func0955()) goto labelFunc00E6_104E;
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_play_music(0x001F, Func09A0(0x0005, 0x0001));
	var0016 = Func0992(0x0001, "@Um, I think I will wait outside...@", 0x0000, false);
	UI_end_conversation();
	var000E = Func098D();
	var0017 = [];
	enum();
labelFunc00E6_0F68:
	for (var000F in var000E with var0018 to var0019) attend labelFunc00E6_0F8A;
	if (!UI_npc_nearby(var000F)) goto labelFunc00E6_0F87;
	var0017 = (var0017 & var000F);
labelFunc00E6_0F87:
	goto labelFunc00E6_0F68;
labelFunc00E6_0F8A:
	var0017 = (var0017 & UI_get_party_list2());
	var0017 = Func0988(UI_get_npc_object(0xFE9C), var0017);
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	enum();
labelFunc00E6_0FCA:
	for (var000F in var0017 with var001A to var001B) attend labelFunc00E6_1003;
	if (!UI_get_item_flag(var000F, 0x0006)) goto labelFunc00E6_0FE9;
	UI_remove_from_party(var000F);
labelFunc00E6_0FE9:
	UI_set_new_schedules(var000F, 0x0000, 0x000A, var0009);
	UI_run_schedule(var000F);
	goto labelFunc00E6_0FCA;
labelFunc00E6_1003:
	Func097F(var000F, "@Have fun...@", 0x0000);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000], 0x000A);
	var000E = UI_set_item_quality(Func09A0(0x0005, 0x0003), UI_get_npc_id(0xFFEC));
	UI_set_npc_id(0xFFEC, 0x0001);
	abort;
	goto labelFunc00E6_105F;
labelFunc00E6_104E:
	message("\"Then I can be of no use to thee.\"");
	say();
	Func097F(0xFFEC, "@Go!@", 0x0000);
	abort;
labelFunc00E6_105F:
	goto labelFunc00E6_1170;
labelFunc00E6_1062:
	message("\"But we must wait, darling, until we are alone...\"");
	say();
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	Func097F(0xFFEC, "@Wait...@", 0x0000);
	var000E = Func098D();
	var0017 = [];
	enum();
labelFunc00E6_108D:
	for (var000F in var000E with var001C to var001D) attend labelFunc00E6_10AF;
	if (!UI_npc_nearby(var000F)) goto labelFunc00E6_10AC;
	var0017 = (var0017 & var000F);
labelFunc00E6_10AC:
	goto labelFunc00E6_108D;
labelFunc00E6_10AF:
	var0017 = (var0017 & UI_get_party_list2());
	var0017 = Func0988(UI_get_npc_object(0xFE9C), var0017);
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	enum();
labelFunc00E6_10EF:
	for (var000F in var0017 with var001E to var001F) attend labelFunc00E6_1128;
	if (!UI_get_item_flag(var000F, 0x0006)) goto labelFunc00E6_110E;
	UI_remove_from_party(var000F);
labelFunc00E6_110E:
	UI_set_new_schedules(var000F, 0x0000, 0x000A, var0009);
	UI_run_schedule(var000F);
	goto labelFunc00E6_10EF;
labelFunc00E6_1128:
	Func097F(var000F, "@Have fun...@", 0x0000);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000], 0x000A);
	var000E = UI_set_item_quality(Func09A0(0x0005, 0x0003), UI_get_npc_id(0xFFEC));
	UI_set_npc_id(0xFFEC, 0x0001);
	abort;
labelFunc00E6_1170:
	if (!(event == 0x000E)) goto labelFunc00E6_1330;
	if (!((UI_get_npc_id(0xFFEC) == 0x000D) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_11D0;
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEC, [0x0975, 0x0747, 0x0000]);
	event = 0x000D;
labelFunc00E6_11D0:
	if (!((UI_get_npc_id(0xFFEC) == 0x000C) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc00E6_1228;
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFE9C, [0x0975, 0x0749, 0x0000]);
	event = 0x000D;
labelFunc00E6_1228:
	if (!((UI_get_npc_id(0xFFEC) == 0x0006) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_1280;
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEC, [0x097B, 0x0743, 0x0000]);
	event = 0x000D;
labelFunc00E6_1280:
	if (!((UI_get_npc_id(0xFFEC) == 0x0004) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc00E6_12D8;
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFE9C, [0x0980, 0x0748, 0x0000]);
	event = 0x000D;
labelFunc00E6_12D8:
	if (!((UI_get_npc_id(0xFFEC) == 0x0001) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_1330;
	var0009 = UI_get_object_position(0xFFEC);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEC, [0x0980, 0x0746, 0x0000]);
	event = 0x000D;
labelFunc00E6_1330:
	if (!(event == 0x000D)) goto labelFunc00E6_15C7;
	if (!((UI_get_npc_id(0xFFEC) == 0x000D) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_13C8;
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x27, 0x0006, (byte)0x52, "@Kiss me again!@", (byte)0x59, 0x0006, (byte)0x27, 0x000A, (byte)0x53, (byte)0x34, (byte)0x53, (byte)0x34, (byte)0x27, 0x0002, (byte)0x68, (byte)0x58, 0x0024, (byte)0x61, (byte)0x27, 0x0001, (byte)0x62, (byte)0x27, 0x0004, (byte)0x59, 0x0006, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000E, (byte)0x52, "@Certainly!@", (byte)0x59, 0x0000]);
	abort;
labelFunc00E6_13C8:
	if (!((UI_get_npc_id(0xFFEC) == 0x000C) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc00E6_144F;
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0002);
	0xFFEC->Func07D1();
	message("\"But wait! Thou hast forgotten this...\"");
	say();
	UI_end_conversation();
	var000E = UI_set_to_attack(0xFFEC, 0xFE9C, 0x0118);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x70, (byte)0x6A, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x00E6, 0x0000], 0x0004);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x61, (byte)0x59, 0x0002, (byte)0x52, "@Huh?@"]);
	abort;
labelFunc00E6_144F:
	if (!((UI_get_npc_id(0xFFEC) == 0x0006) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_14CE;
	0xFFEC->Func07D1();
	var0020 = UI_get_object_position(0xFFEC);
	UI_set_polymorph(0xFFEC, 0x00EF);
	UI_sprite_effect(0x0032, var0020[0x0001], var0020[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0053);
	var000E = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x07D2, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000], 0x0012);
	abort;
labelFunc00E6_14CE:
	if (!((UI_get_npc_id(0xFFEC) == 0x0004) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc00E6_14ED;
	0xFFEC->Func07D1();
	abort;
labelFunc00E6_14ED:
	if (!((UI_get_npc_id(0xFFEC) == 0x0001) && (item == UI_get_npc_object(0xFFEC)))) goto labelFunc00E6_15C7;
	var000E = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x67, (byte)0x27, 0x000C, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x27, 0x000C, (byte)0x6D, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0008, (byte)0x59, 0x0000, (byte)0x27, 0x0004, (byte)0x64, (byte)0x27, 0x0002, (byte)0x55, 0x00E6, 0x0000]);
	UI_set_npc_id(0xFFEC, 0x0002);
	0xFFEC->Func07D1();
	var000E = UI_create_new_object2(0x01FD, [0x0982, 0x0746, 0x0000]);
	UI_sprite_effect(0x0015, 0x0982, 0x0746, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	if (!var000E) goto labelFunc00E6_15BC;
	UI_set_item_frame(var000E, 0x0000);
	UI_set_schedule_type(var000E, 0x0011);
	UI_clear_item_flag(var000E, 0x0012);
labelFunc00E6_15BC:
	UI_set_schedule_type(0xFFEC, 0x000F);
	abort;
labelFunc00E6_15C7:
	return;
}


