#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func080E 0x80E ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0994 0x994 ();

void Func0440 object#(0x440) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_find_nearby(0xFFC0, 0x013E, 0x001E, 0x0000);
	var0001 = UI_get_item_flag(0xFFC0, 0x001C);
	var0002 = Func0954();
	if (!(gflags[0x008B] && ((event == 0x0000) && (!gflags[0x02E2])))) goto labelFunc0440_011B;
	UI_set_npc_id(0xFFC0, (UI_get_npc_id(0xFFC0) + 0x0001));
	if (!(UI_get_npc_id(0xFFC0) == 0x0005)) goto labelFunc0440_005A;
	Func080E();
labelFunc0440_005A:
	if (!(UI_get_npc_id(0xFFC0) == 0x0004)) goto labelFunc0440_0080;
	Func097F(0xFFC0, "@Never!@", 0x0002);
	Func097F(var0000, "@Give me thy powers!@", 0x0000);
labelFunc0440_0080:
	if (!(UI_get_npc_id(0xFFC0) == 0x0003)) goto labelFunc0440_00A6;
	Func097F(0xFFC0, "@I am only a little girl...@", 0x0002);
	Func097F(var0000, "@I know thee!@", 0x0000);
labelFunc0440_00A6:
	if (!(UI_get_npc_id(0xFFC0) == 0x0002)) goto labelFunc0440_00CC;
	Func097F(0xFFC0, "@Leave me alone!@", 0x0000);
	Func097F(var0000, "@Stop, fiend!@", 0x0002);
labelFunc0440_00CC:
	if (!(UI_get_npc_id(0xFFC0) == 0x0001)) goto labelFunc0440_011A;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	Func097F(0xFFC0, "@Help!@", 0x0000);
	UI_play_music(0x0034, Func09A0(0x0005, 0x0001));
	if (!var0000) goto labelFunc0440_0113;
	UI_set_schedule_type(var0000, 0x001D);
labelFunc0440_0113:
	UI_ambient_light(0x0000);
labelFunc0440_011A:
	abort;
labelFunc0440_011B:
	if (!(gflags[0x008B] && ((event == 0x0002) && (!gflags[0x02E2])))) goto labelFunc0440_020D;
	UI_ambient_light(0x0001);
	UI_set_time_palette();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_camera(0xFE9C);
	gflags[0x008B] = false;
	UI_run_schedule(0xFF33);
	UI_run_schedule(0xFF35);
	UI_run_schedule(0xFF34);
	UI_run_schedule(0xFEDB);
	UI_remove_npc(0xFFC0);
	if (!(gflags[0x0095] && (!gflags[0x005B]))) goto labelFunc0440_01D4;
	UI_move_object(0xFFBD, [0x0345, 0x0A8B, 0x0000]);
	Func09AC(0xFFBD, 0xFFFF, 0xFFFF, 0x000F);
	UI_clear_item_flag(0xFFBD, 0x0001);
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x59, 0x0002]);
	var0003 = UI_delayed_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x55, 0x0443], 0x001E);
labelFunc0440_01D4:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_npc_id(0xFFC0, 0x0000);
	gflags[0x002A] = false;
labelFunc0440_020D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFC0) == 0x0009))) goto labelFunc0440_025B;
	if (!(UI_get_random(0x000A) < 0x0007)) goto labelFunc0440_0230;
	abort;
labelFunc0440_0230:
	var0004 = ["@Hello, there!@", "@May I watch?@", "@Art thou a hero?@", "@Where are we going?@", "@May I come?@", "@I'm a warrior, too.@"];
	Func097F(0xFFC0, var0004[UI_get_random(0x0006)], 0x0000);
labelFunc0440_025B:
	if (!(event == 0x0001)) goto labelFunc0440_033D;
	if (!UI_get_item_flag(0xFFC0, 0x001E)) goto labelFunc0440_02F3;
	Func097F(0xFE9C, "Hello, Cantra.", 0x0000);
	var0005 = UI_get_random(0x0006);
	if (!(var0005 == 0x0001)) goto labelFunc0440_0296;
	var0006 = "@I want thy flesh!@";
labelFunc0440_0296:
	if (!(var0005 == 0x0002)) goto labelFunc0440_02A6;
	var0006 = "@I want thy blood!@";
labelFunc0440_02A6:
	if (!(var0005 == 0x0003)) goto labelFunc0440_02B6;
	var0006 = "@Come pleasure me!@";
labelFunc0440_02B6:
	if (!(var0005 == 0x0004)) goto labelFunc0440_02C6;
	var0006 = "@How hungry I am!@";
labelFunc0440_02C6:
	if (!(var0005 == 0x0005)) goto labelFunc0440_02D6;
	var0006 = "@Blood! Blood everywhere!@";
labelFunc0440_02D6:
	if (!(var0005 == 0x0006)) goto labelFunc0440_02E6;
	var0006 = "@I desire thee!@";
labelFunc0440_02E6:
	Func097F(0xFFC0, var0006, 0x0002);
	abort;
labelFunc0440_02F3:
	if (!(!var0001)) goto labelFunc0440_0315;
	Func097F(0xFE9C, "Hello, little girl.", 0x0000);
	Func097F(0xFFC0, "@Zounds!@", 0x0002);
	goto labelFunc0440_032D;
labelFunc0440_0315:
	Func097F(0xFE9C, "Hello, Cantra.", 0x0000);
	Func097F(0xFFC0, "@Glad to see thee!@", 0x0002);
labelFunc0440_032D:
	0xFFC0->Func07D1();
	UI_set_schedule_type(0xFFC0, 0x0003);
labelFunc0440_033D:
	if (!(event == 0x0009)) goto labelFunc0440_056E;
	UI_run_schedule(0xFFC0);
	UI_clear_item_say(0xFFC0);
	UI_show_npc_face0(0xFFC0, 0x0000);
	if (!(!var0001)) goto labelFunc0440_0379;
	message("\"I am not as young as I look! Dost thou know how hard it is to be small for one's age? I am fourteen years old, nearly old enough to be a Knight of Monitor. But everyone thinks that I'm a little girl...\"");
	say();
	message("\"Um, sorry. I mean, welcome to Monitor! My name is Cantra.\"");
	say();
	UI_set_item_flag(0xFFC0, 0x001C);
	goto labelFunc0440_038A;
labelFunc0440_0379:
	if (!gflags[0x0047]) goto labelFunc0440_0386;
	message("\"I feel tired, but I am all right! My mind was full of awful dreams. Thou hast saved me! I shall remember thee always!\"");
	say();
	goto labelFunc0440_038A;
labelFunc0440_0386:
	message("\"Hast thou decided to become a Knight yet? It is so exciting! I am practicing to become one myself.\"");
	say();
labelFunc0440_038A:
	UI_add_answer(["Knight"]);
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc0440_03A6;
	UI_add_answer("Marsten");
labelFunc0440_03A6:
	UI_add_answer("bye");
labelFunc0440_03AD:
	converse attend labelFunc0440_056D;
	case "Marsten" attend labelFunc0440_03EA:
	UI_remove_answer("Marsten");
	if (!gflags[0x0038]) goto labelFunc0440_03C9;
	message("\"I am amazed to hear that Marsten hath betrayed us. I cannot believe it.\"");
	say();
labelFunc0440_03C9:
	if (!((gflags[0x003C] == false) && (gflags[0x0038] == false))) goto labelFunc0440_03DF;
	message("\"To become a Knight of Monitor, thou must first ask permission of the Lord of Monitor.\"");
	say();
	gflags[0x003C] = true;
labelFunc0440_03DF:
	if (!(!gflags[0x0038])) goto labelFunc0440_03EA;
	message("\"Marsten is the Lord of Monitor. One day he will give a banquet in mine honor to celebrate my becoming a Knight.\"");
	say();
labelFunc0440_03EA:
	case "permission" attend labelFunc0440_0401:
	UI_remove_answer("permission");
	message("\"If thou dost wish to take Knight's Test, thou must ask Lord Marsten for his permission.\"");
	say();
	gflags[0x003C] = true;
labelFunc0440_0401:
	case "Knight" attend labelFunc0440_042C:
	UI_remove_answer("Knight");
	message("\"I have trained for a long time to become a Knight. There is nothing in the world so wonderful as being a Knight!\"");
	say();
	message("\"My father was a Knight, and a very good one. But he is dead now.\"");
	say();
	message("\"When I turn fifteen, I can take the Test of Knighthood and become a grand warrior!\"");
	say();
	UI_add_answer(["father", "training", "Test of Knighthood"]);
labelFunc0440_042C:
	case "father" attend labelFunc0440_0447:
	UI_remove_answer("father");
	message("\"Everyone says that he might be alive, but it hath been weeks since he disappeared. I am old enough to face the truth.\"");
	say();
	message("\"He was on patrol near Monitor. He told the pikemen that he had found something suspicious, and he went to look... and he never returned.\"");
	say();
	message("\"It must have been the Goblins! I refuse to weep. But I vow that the first dozen Goblins I slay shall be for him!\"");
	say();
labelFunc0440_0447:
	case "training" attend labelFunc0440_0466:
	UI_remove_answer("training");
	message("\"I am strong. I am ready. The Goblins will be no match for me! I have trained well.\"");
	say();
	message("\"If thou dost need a trainer, I can recommend one. Everyone says that Shazzana is the best trainer, but she is such a tyrant!\"");
	say();
	message("\"Ever since my father died, Caladin hath been my trainer. He is big and loud, and sometimes dumb, but he doth have a good heart.\"");
	say();
	gflags[0x00BC] = true;
labelFunc0440_0466:
	case "Test of Knighthood" attend labelFunc0440_04A6:
	UI_remove_answer("Test of Knighthood");
	UI_push_answers();
	message("\"I have been training for the Test for mine entire life! Anything that thou needest to know, I can tell thee.\"");
	say();
	message("\"It truly isn't so dangerous if thou dost know the secrets. And Shmed is nothing to worry about.\"");
	say();
	message("\"What wouldst thou like to know?\"");
	say();
	UI_add_answer(["location", "secrets", "Shmed", "nothing more"]);
	if (!(!gflags[0x002F])) goto labelFunc0440_04A6;
	UI_add_answer("permission");
labelFunc0440_04A6:
	case "location" attend labelFunc0440_04BD:
	UI_remove_answer("location");
	message("\"The Test of Knighthood takes place in the Knight Mountains, just north of the city. Thou must follow the trail that leads west from the highway.\"");
	say();
	message("\"But beware of Goblins! They come ever closer to the city of late. Even the bravest warrior can be slain if ambushed...\"");
	say();
labelFunc0440_04BD:
	case "secrets" attend labelFunc0440_04E4:
	UI_remove_answer("secrets");
	message("\"These actually are not secrets, since everyone in Monitor knows how Knight's Test doth operate. To become a Knight, thou must survive the dungeon there. Simply remember these tips:\"");
	say();
	message("\"Do not look back, or the explosions will overcome thee. Move swiftly at first.\"");
	say();
	message("\"Look upwards, as well as from side to side. There are clues that would otherwise escape thee. Be prepared to climb.\"");
	say();
	message("\"Timing is essential. The fiery missiles can be outrun, if thou dost watch carefully.\"");
	say();
	message("\"Use thine hands to search as well as thine eyes, for some things are invisible.\"");
	say();
	message("\"The last chamber is kept a secret! But I would wager that it is as easy as the rest of the dungeon, if thou dost keep a calm head and steady nerves.\"");
	say();
labelFunc0440_04E4:
	case "Shmed" attend labelFunc0440_04FF:
	UI_remove_answer("Shmed");
	message("\"Oh, he is the old man who administers the Test. I do not like him much. He looks at me oddly sometimes...\"");
	say();
	message("\"He will not let thee into the dungeon until thou dost give him the password. Only Lord Marsten can give the password to thee.\"");
	say();
	message("\"Shmed also disarms thee, since thou canst only enter the Knight's Test with a mace and leather armour. And no companions may accompany thee.\"");
	say();
labelFunc0440_04FF:
	case "nothing more" attend labelFunc0440_0516:
	UI_remove_answer("nothing more");
	message("\"Very well!\"");
	say();
	UI_pop_answers();
labelFunc0440_0516:
	case "bye" attend labelFunc0440_056A:
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	if (!gflags[0x0047]) goto labelFunc0440_053F;
	Func097F(0xFFC0, "@Bless thee!@", 0x0002);
	goto labelFunc0440_054F;
labelFunc0440_053F:
	message("\"Oh, I hope that thou dost attempt the Knight's Test! And when thou dost, please come back to tell me about it!\"");
	say();
	Func097F(0xFFC0, "@Slay a Goblin!@", 0x0002);
labelFunc0440_054F:
	if (!(UI_get_schedule_type(0xFFC0) == 0x0009)) goto labelFunc0440_0567;
	UI_set_schedule_type(0xFFC0, 0x0014);
labelFunc0440_0567:
	goto labelFunc0440_056D;
labelFunc0440_056A:
	goto labelFunc0440_03AD;
labelFunc0440_056D:
	endconv;
labelFunc0440_056E:
	if (!(event == 0x0007)) goto labelFunc0440_05A0;
	if (!gflags[0x0047]) goto labelFunc0440_0587;
	UI_clear_item_flag(0xFFC0, 0x001D);
	abort;
labelFunc0440_0587:
	if (!gflags[0x0079]) goto labelFunc0440_0596;
	var0003 = 0x0000;
	goto labelFunc0440_05A0;
labelFunc0440_0596:
	UI_set_attack_mode(0xFFC0, 0x0007);
labelFunc0440_05A0:
	if (!(event == 0x0003)) goto labelFunc0440_05D1;
	var0007 = Func0994();
	if (!((var0007 == 0x001F) && (gflags[0x004A] == true))) goto labelFunc0440_05D1;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("\"Iieeeee.... Help me, Avatar! Help me! I can't escape... It will catch me and devour me!\" *\"Heelllp!\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc0440_05D1:
	return;
}


