#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern var Func089D 0x89D (var var0000);

void Func017D shape#(0x17D) ()
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

	var0000 = Func0953();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc017D_001C;
	UI_set_schedule_type(item, 0x0000);
labelFunc017D_001C:
	if (!(event == 0x0007)) goto labelFunc017D_00A5;
	var0001 = UI_get_object_position(item);
	if (!(var0001[0x0003] > 0x0000)) goto labelFunc017D_0069;
	var0001[0x0001] = (var0001[0x0001] - 0x0001);
	var0001[0x0002] = (var0001[0x0002] - 0x0001);
	var0001[0x0003] = (var0001[0x0003] - 0x0002);
labelFunc017D_0069:
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0001), (var0001[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(item, 0x017D);
	UI_clear_item_flag(item, 0x001D);
	UI_kill_npc(item);
labelFunc017D_00A5:
	if (!(event == 0x0008)) goto labelFunc017D_00D0;
	var0002 = UI_find_nearby(0xFE9C, 0x017D, 0x001E, 0x0008);
	if (!var0002) goto labelFunc017D_00D0;
	UI_set_polymorph(var0002, 0x01CC);
labelFunc017D_00D0:
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == 0x0000)) goto labelFunc017D_00FA;
	UI_set_npc_id(item, (UI_get_random(0x0004) + 0x0002));
	var0003 = UI_get_npc_id(item);
labelFunc017D_00FA:
	if (!(var0003 == 0x0007)) goto labelFunc017D_014F;
	UI_show_npc_face0(0xFEF3, 0x0000);
	message("\"Thou art a dog, to have brutalized an innocent townsperson. Thy place is behind stout iron bars!!!\"");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x03DC, 0x0625, 0x0000]);
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
labelFunc017D_014F:
	if (!(var0003 == 0x0001)) goto labelFunc017D_047E;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!(event == 0x0002)) goto labelFunc017D_0186;
	Func097F(item, "@Stand and be recognized, stranger!@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_0186:
	if (!(event == 0x0001)) goto labelFunc017D_01A0;
	Func097F(item, "@Stand and be recognized, stranger!@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_01A0:
	if (!(event == 0x0009)) goto labelFunc017D_047E;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	if (!(gflags[0x014F] == true)) goto labelFunc017D_02D2;
	if (!(gflags[0x0168] == false)) goto labelFunc017D_0256;
	var0008 = UI_get_schedule_type(0xFFC5);
	if (!(var0008 != 0x0003)) goto labelFunc017D_0253;
	message("\"There hath been trouble of late here in Fawn...\"");
	say();
	message("\"...And here comes part of it now.\"");
	say();
	var0009 = UI_get_object_position(item);
	var0009[0x0002] = (var0009[0x0002] + 0x0014);
	UI_move_object(0xFFC5, [var0009[0x0001], var0009[0x0002], 0x0000]);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFFC5, 0x0003);
	UI_set_new_schedules(0xFFC5, [0x0000], [0x0003], [var0009[0x0001], var0009[0x0002]]);
	abort;
labelFunc017D_0253:
	goto labelFunc017D_02CF;
labelFunc017D_0256:
	message("\"Be careful of that one. He is nothing but trouble.\"");
	say();
	message("\"Thou must state thy name and business, before thou canst pass, ");
	message(var0005);
	message(".\"");
	say();
	var000A = Func0956([("I am " + var0000), "I am the Avatar.", "It is not thy business."]);
	if (!(var000A == ("I am " + var0000))) goto labelFunc017D_02A2;
	message("\"Pleased to meet thee, ");
	message(var0007);
	message(". What is thy business here in Fawn?\"");
	say();
	UI_add_answer(["I am merely visiting.", "I am missing a companion.", "It is not thy business."]);
labelFunc017D_02A2:
	if (!(var000A == "I am the Avatar.")) goto labelFunc017D_02C0;
	message("\"And I am the Lady of Fawn! Thou wilt not go far with such here, stranger.\" *\"What is thy business here in Fawn?\"");
	say();
	UI_add_answer(["I am merely visiting.", "I am missing a companion.", "It is not thy business."]);
labelFunc017D_02C0:
	if (!(var000A == "It is not thy business.")) goto labelFunc017D_02CF;
	message("\"If thou wilt not tell me thy name and business, thou canst not enter the city. Come back when thou art feeling more talkative.\"");
	say();
	abort;
labelFunc017D_02CF:
	goto labelFunc017D_02FD;
labelFunc017D_02D2:
	message("\"Thou shouldst avoid trouble whilst thou art here.\"");
	say();
	if (!UI_find_nearby_avatar(0x0203)) goto labelFunc017D_02F0;
	UI_add_answer(["duty", "pass"]);
	goto labelFunc017D_02FD;
labelFunc017D_02F0:
	UI_add_answer(["duty", "bye"]);
labelFunc017D_02FD:
	converse attend labelFunc017D_047D;
	case "I am merely visiting." attend labelFunc017D_0333:
	message("\"Welcome to Fawn, then! Keep away from trouble whilst thou art here.\" *\"We have enough to worry about, what with storms, goblins, and Fellowship troublemakers.\"");
	say();
	gflags[0x014F] = false;
	UI_remove_answer(["I am merely visiting.", "I am missing a companion.", "It is not thy business."]);
	UI_add_answer(["storms", "goblins", "Fellowship troublemakers", "pass"]);
labelFunc017D_0333:
	case "storms" attend labelFunc017D_034C:
	message("\"They start without warning, ");
	message(var0005);
	message(". So do not stray too far from shelter.\" *\"Be warned, we have orders to close the gate during a storm. So if thou art caught outside of the gate, thine only choice is the traveller's shelter.\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_034C:
	case "goblins" attend labelFunc017D_036E:
	if (!(gflags[0x014E] == false)) goto labelFunc017D_0363;
	message("\"Now that those savages have overtaken the Pikeman tower, the gates must be closed at night. We cannot open them for anyone until morning. So have a care if thou dost venture outside near dark.\"");
	say();
	goto labelFunc017D_0367;
labelFunc017D_0363:
	message("\"If those foul savages would dare attack the Pikemen, we cannot leave the gates open at night. Fawn's gates are now closed at night. They cannot be opened for anyone until morning.\" *\"So have a care if thou dost venture outside near dark.\"");
	say();
labelFunc017D_0367:
	UI_remove_answer("goblins");
labelFunc017D_036E:
	case "Fellowship troublemakers" attend labelFunc017D_038E:
	message("\"I should not have said that, ");
	message(var0005);
	message(".\" ~\"Be assured that the Captain is quick with the Wand of Detainment.\"");
	say();
	UI_remove_answer("Fellowship troublemakers");
	UI_add_answer("Wand of Detainment");
labelFunc017D_038E:
	case "duty" attend labelFunc017D_03A1:
	message("\"I am a Fawn Guardsman! Thou wouldst do well to stay out of mischief while visiting our city!\"");
	say();
	UI_remove_answer("duty");
labelFunc017D_03A1:
	case "Wand of Detainment" attend labelFunc017D_03B4:
	message("\"The Wand of Detainment is a fine gift from the people of Moonshade. With the Wand, the Captain can capture any criminal.\" *\"Keep that in mind if thou shouldst feel mischievous...\"");
	say();
	UI_remove_answer("Wand of Detainment");
labelFunc017D_03B4:
	case "I am missing a companion." attend labelFunc017D_03EA:
	message("\"Thou shouldst try inquiring at The Broken Oar. Keep away from trouble whilst thou art here.\" *\"We have enough to worry about, what with storms, goblins, and Fellowship troublemakers.\"");
	say();
	gflags[0x014F] = false;
	UI_remove_answer(["I am merely visiting.", "I am missing a companion.", "It is not thy business."]);
	UI_add_answer(["The Broken Oar", "storms", "goblins", "Fellowship troublemakers", "pass"]);
labelFunc017D_03EA:
	case "The Broken Oar" attend labelFunc017D_03FD:
	message("\"The Broken Oar is a tavern. It is the only establishment in Fawn that offers rooms to rent.\" *\"Most strangers stay there.\"");
	say();
	UI_remove_answer("The Broken Oar");
labelFunc017D_03FD:
	case "It is not thy business." attend labelFunc017D_040A:
	message("\"If thou wilt not tell me thy name and business, thou canst not enter the city. Come back when thou art feeling more talkative.\"");
	say();
	abort;
labelFunc017D_040A:
	case "pass" attend labelFunc017D_0442:
	UI_remove_npc_face0();
	Func097F(item, (("@Pass through, " + var0005) + ".@"), 0x0000);
	gflags[0x014F] = false;
	var000B = UI_find_nearby_avatar(0x0203);
	var0004 = Func089D(var000B);
	goto labelFunc017D_0964;
labelFunc017D_0442:
	case "bye" attend labelFunc017D_047A:
	UI_remove_npc_face0();
	Func097F(item, (("@Pass through, " + var0005) + ".@"), 0x0005);
	gflags[0x014F] = false;
	var000B = UI_find_nearby_avatar(0x0203);
	var0004 = Func089D(var000B);
	goto labelFunc017D_0964;
labelFunc017D_047A:
	goto labelFunc017D_02FD;
labelFunc017D_047D:
	endconv;
labelFunc017D_047E:
	if (!(var0003 == 0x0002)) goto labelFunc017D_06A8;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!((event == 0x0000) && (UI_get_schedule_type(item) == 0x0009))) goto labelFunc017D_04E5;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc017D_04BC;
	abort;
labelFunc017D_04BC:
	var000C = ["@A tattooed woman!@", "@I'll show thee mine...@", "@A painted lady!@", "@Want a good time?@", "@I'll protect thee.@", "@Buy thee a drink?@"];
	Func097F(item, var000C[UI_get_random(0x0006)], 0x0000);
labelFunc017D_04E5:
	if (!(event == 0x0001)) goto labelFunc017D_0511;
	UI_item_say(0xFE9C, "@Thou... guard!@");
	Func097F(item, (("@Yes, " + var0005) + "?@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_0511:
	if (!(event == 0x0009)) goto labelFunc017D_06A8;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var000D == 0x0001)) goto labelFunc017D_0567;
	message("\"Thou shouldst address me by rank while I am on duty, ");
	message(var0005);
	message(". I am a Private in Fawn's Guard.\" *\"Dost thou require some assistance?\"");
	say();
	var000E = "Private";
	UI_add_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
labelFunc017D_0567:
	if (!(var000D == 0x0002)) goto labelFunc017D_0591;
	message("\"I am on duty now, ");
	message(var0005);
	message(". Thou mayest address me as Corporal.\" *\"Dost thou require some assistance?\"");
	say();
	var000E = "Corporal";
	UI_add_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
labelFunc017D_0591:
	if (!(var000D == 0x0003)) goto labelFunc017D_05BB;
	message("\"While I am on duty, ");
	message(var0005);
	message(", thou must address me as Sergeant.\" *\"Dost thou require some assistance?\"");
	say();
	var000E = "Sergeant";
	UI_add_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
labelFunc017D_05BB:
	if (!(var000D == 0x0004)) goto labelFunc017D_05E5;
	message("\"I am a Lieutenant in Fawn's Guard. Thou must address me as such, ");
	message(var0005);
	message(".\" *\"Dost thou require some assistance?\"");
	say();
	var000E = "Lieutenant";
	UI_add_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
labelFunc017D_05E5:
	converse attend labelFunc017D_06A7;
	case "Why art thou following me?" attend labelFunc017D_0611:
	message("\"Forgive me, ");
	message(var0005);
	message(". But, by Law, I must follow thee.\"");
	say();
	UI_remove_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
	UI_add_answer("Law");
labelFunc017D_0611:
	case "Law" attend labelFunc017D_0631:
	message("\"By Law, all Beauty must be protected, ");
	message(var0005);
	message(". Therefore, I am to ensure that thou dost not endanger thyself.\"");
	say();
	UI_remove_answer("Law");
	UI_add_answer("endanger");
labelFunc017D_0631:
	case "endanger" attend labelFunc017D_063E:
	message("\"Thou shouldst not provoke arguments, or stray too close to the docks where thou couldst be injured. I must intervene in any situation in which thy Beauty might be marred. That is my duty.\"");
	say();
	abort;
labelFunc017D_063E:
	case "Stop following me!" attend labelFunc017D_0667:
	message("\"I am sorry, ");
	message(var0005);
	message(", thou art not my Captain. I may only take orders from the Captain of the Guard.\"");
	say();
	UI_remove_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
	UI_add_answer("Captain of the Guard");
labelFunc017D_0667:
	case "Captain of the Guard" attend labelFunc017D_0681:
	message("\"His name is Jorvin. Thou canst ask him to reassign me, if thou wishest. But by Law he must assign another guard to the job.\"");
	say();
	UI_remove_answer("Captain of the Guard");
	UI_add_answer("Law");
labelFunc017D_0681:
	case "Never mind." attend labelFunc017D_06A4:
	message("\"I am ever at thy service, ");
	message(var0005);
	message(". Call on me any time.\"");
	say();
	UI_remove_answer(["Why art thou following me?", "Stop following me!", "Never mind."]);
	abort;
labelFunc017D_06A4:
	goto labelFunc017D_05E5;
labelFunc017D_06A7:
	endconv;
labelFunc017D_06A8:
	if (!((var0003 > 0x0002) && (var0003 < 0x0007))) goto labelFunc017D_0965;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!(event == 0x0001)) goto labelFunc017D_06F9;
	UI_item_say(0xFE9C, "@Might I speak with thee, guard?@");
	Func097F(item, (("@What dost thou need, " + var0005) + "?@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_06F9:
	if (!(event == 0x0009)) goto labelFunc017D_0965;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0003)) goto labelFunc017D_074F;
	message("\"Thou shouldst address me by rank while I am on duty, ");
	message(var0005);
	message(". I am a Private in Fawn's Guard.\"");
	say();
	var000E = "Private";
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc017D_074F:
	if (!(var0003 == 0x0004)) goto labelFunc017D_0779;
	message("\"I am on duty now, ");
	message(var0005);
	message(". Thou mayest address me as Corporal.\"");
	say();
	var000E = "Corporal";
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc017D_0779:
	if (!(var0003 == 0x0005)) goto labelFunc017D_07A3;
	message("\"While I am on duty, ");
	message(var0005);
	message(", thou must address me as Sergeant.\"");
	say();
	var000E = "Sergeant";
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc017D_07A3:
	if (!(var0003 == 0x0006)) goto labelFunc017D_07CD;
	message("\"I am a Lieutenant in Fawn's Guard. Thou must address me as such, ");
	message(var0005);
	message(".\"");
	say();
	var000E = "Lieutenant";
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc017D_07CD:
	converse attend labelFunc017D_0964;
	case "storms" attend labelFunc017D_087B:
	var000F = UI_die_roll(0x0001, 0x0006);
	if (!(var000F == 0x0001)) goto labelFunc017D_0800;
	message("\"Be thou careful to stay close to shelter, ");
	message(var0005);
	message(". Thou dost never know when one of these freak storms will appear.\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_0800:
	if (!(var000F == 0x0002)) goto labelFunc017D_081B;
	message("\"'Tis unnatural, for sure. I wouldn't wander too far from safety, if I were thee, ");
	message(var0005);
	message(".\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_081B:
	if (!(var000F == 0x0003)) goto labelFunc017D_0836;
	message("\"The storms are no great cause for alarm. Remain in sight of shelter and thou shouldst be fine, ");
	message(var0005);
	message(".\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_0836:
	if (!(var000F == 0x0004)) goto labelFunc017D_0851;
	message("\"Between thee and me, ");
	message(var0005);
	message(", I would not be out here if I weren't on duty. These storms are not natural.\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_0851:
	if (!(var000F == 0x0005)) goto labelFunc017D_0866;
	message("\"I tell thee, we are all cursed! These storms are a punishment for our transgressions against the heavens!\" *\"Thou canst run to shelter all thou wishest, but if thou hast transgressed, it will avail thee not!\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_0866:
	if (!(var000F == 0x0006)) goto labelFunc017D_087B;
	message("\"Use the sense that the heavens gave thee... If a storm starts, seek shelter. 'Tis simple enough.\"");
	say();
	UI_remove_answer("storms");
labelFunc017D_087B:
	case "goblins" attend labelFunc017D_092C:
	var0010 = UI_die_roll(0x0001, 0x0006);
	if (!(var0010 == 0x0001)) goto labelFunc017D_08A5;
	message("\"The goblins have been nothing but trouble of late. Thou shouldst remain within the city gates.\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_08A5:
	if (!(var0010 == 0x0002)) goto labelFunc017D_08C0;
	message("\"Goblins are filthy savages, ");
	message(var0005);
	message(". I yearn for the day when we are allowed to kill them all!\" *\"'Tis unsafe to venture outside the city with them out there.\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_08C0:
	if (!(var0010 == 0x0003)) goto labelFunc017D_08DB;
	message("\"Make no mistake, ");
	message(var0005);
	message(". Those goblins would sooner make a meal out of us as look at us. No one is safe as long as one goblin is left alive!\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_08DB:
	if (!(var0010 == 0x0004)) goto labelFunc017D_08F6;
	message("\"Don't go out of the city gates, ");
	message(var0005);
	message("! 'Tis not safe even in broad daylight!\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_08F6:
	if (!(var0010 == 0x0005)) goto labelFunc017D_0911;
	message("\"Thou hast nothing to fear from the goblins, ");
	message(var0005);
	message(", as long as thou stayest within the confines of the city.\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_0911:
	if (!(var0010 == 0x0006)) goto labelFunc017D_092C;
	message("\"Fawn is caught between the storms and the goblins, ");
	message(var0005);
	message(". 'Tis not a safe place to be!\"");
	say();
	UI_remove_answer("goblins");
labelFunc017D_092C:
	case "bye" attend labelFunc017D_0961:
	UI_remove_npc_face0();
	Func097F(0xFE9C, (("@Goodbye, " + var000E) + ".@"), 0x0000);
	Func097F(item, (("@Walk in Beauty, " + var0005) + ".@"), 0x0005);
	goto labelFunc017D_0964;
labelFunc017D_0961:
	goto labelFunc017D_07CD;
labelFunc017D_0964:
	endconv;
labelFunc017D_0965:
	return;
}


