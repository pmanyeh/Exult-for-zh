#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func043E object#(0x43E) ()
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

	var0000 = Func0953();
	var0001 = UI_get_item_flag(0xFFC2, 0x001C);
	if (!(event == 0x0001)) goto labelFunc043E_0043;
	Func097F(0xFE9C, "Hello, sir.", 0x0000);
	0xFFC2->Func07D1();
	Func097F(0xFFC2, "Greetings.", 0x0002);
	UI_set_schedule_type(0xFFC2, 0x0003);
labelFunc043E_0043:
	if (!(event == 0x0009)) goto labelFunc043E_0395;
	UI_run_schedule(0xFFC2);
	UI_clear_item_say(0xFFC2);
	UI_show_npc_face0(0xFFC2, 0x0000);
	if (!(!var0001)) goto labelFunc043E_007B;
	message("\"Hello, stranger. I am Andral of Monitor. Dost thou need the services of a master artist?\"");
	say();
	UI_set_item_flag(0xFFC2, 0x001C);
	goto labelFunc043E_0085;
labelFunc043E_007B:
	message("\"Welcome, ");
	message(var0000);
	message(". How may I be of service to thee?\"");
	say();
labelFunc043E_0085:
	UI_add_answer(["artist", "bye"]);
	if (!(!gflags[0x0058])) goto labelFunc043E_00A4;
	message("\"Perhaps I should not speak with thee... I hope thou art not come to rob me!\"");
	say();
	UI_add_answer("rob");
labelFunc043E_00A4:
	converse attend labelFunc043E_0394;
	case "artist" attend labelFunc043E_00DF:
	UI_remove_answer("artist");
	message("\"I am a sculptor by trade. There is a brisk business to be done in this city, fashioning busts and statues for the Knights.\"");
	say();
	if (!(!gflags[0x0048])) goto labelFunc043E_00CF;
	message("\"But I can make time for thee, if thou dost wish to commission my talents.\"");
	say();
	UI_add_answer("commission");
	goto labelFunc043E_00DF;
labelFunc043E_00CF:
	UI_add_answer(["sculptor", "Knights", "commission"]);
labelFunc043E_00DF:
	case "commission" attend labelFunc043E_010D:
	UI_remove_answer("commission");
	message("\"For a fee I create works of art to honor Knights when they complete great quests -- or when they simply wish to pay me money for a monument to their vanity.\"");
	say();
	message("\"Dost thou wish to commission a work from me?\"");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc043E_0109;
	message("\"I am sorry but I am currently working on a statue of Luther. It may take me some time to complete. I could not begin work on something for thee until then.\"");
	say();
	goto labelFunc043E_010D;
labelFunc043E_0109:
	message("\"I am proud of thee! Thy life and thy deeds are all the testament anyone truly needs, provided one hath truly made something of their life.\"");
	say();
labelFunc043E_010D:
	case "sculptor" attend labelFunc043E_012A:
	UI_remove_answer("sculptor");
	message("\"Thou mayest have noticed the various sculptures around the town. I crafted many of them.\"");
	say();
	if (!gflags[0x0048]) goto labelFunc043E_012A;
	message("\"'Tis our custom to carve sculptures to commemorate the bravery of our finest warriors. Now that thou art a Knight, thou canst live for the day when I shall sculpt a monument for thee.\"");
	say();
labelFunc043E_012A:
	case "Knights" attend labelFunc043E_0152:
	UI_remove_answer("Knights");
	message("\"As thou knowest by now, this is a city of warriors. I myself passed the Knight's Test when I was fifteen, but my true love hath always been art.\"");
	say();
	message("\"The other Knights sometimes mock me, for I am seldom seen at the List Field. Canst thou imagine what a blade could do to my gifted fingers!\"");
	say();
	message("\"But, alas, an artist is always misunderstood.\"");
	say();
	UI_add_answer(["List Field", "misunderstood"]);
labelFunc043E_0152:
	case "List Field" attend labelFunc043E_016D:
	UI_remove_answer("List Field");
	message("\"There is so little time in this life, and 'twould be an utter waste for someone of mine artistic abilities to engage in duels.\"");
	say();
	message("\"Should I spend that hour in profitless combat, solely to please my fellow Knights? I think not.\"");
	say();
	message("\"Instead, I could be crafting another masterpiece, so that my name will be known to future generations. This is true glory.\"");
	say();
labelFunc043E_016D:
	case "misunderstood" attend labelFunc043E_018C:
	UI_remove_answer("misunderstood");
	message("\"I have no friends. The Knights tolerate me and value my services, but they do not share mine interests.\"");
	say();
	message("\"There once was a woman who cared for me, but we quarrelled. She, too, hath art in her soul, but she hides her secret well.\"");
	say();
	message("\"Lucilla would not pay the price that I have, to be so alone. Do not weep for me, my friend -- I am proud of who I am.\"");
	say();
	gflags[0x008F] = true;
labelFunc043E_018C:
	case "rob" attend labelFunc043E_01DD:
	UI_remove_answer("rob");
	message("\"I am not sure that I care to speak about the incident. 'Twas most unpleasant.\"");
	say();
	message("\"There was a stranger in Monitor, one who claimed to be from another land. He was very large, a scholar rather than a warrior.\"");
	say();
	message("\"He travelled with many companions, including a tall, cloaked stranger.\"");
	say();
	message("\"On the night that Batlin the Sage left town, someone stole an ancient relic from mine home. I suspect that he was the thief!\"");
	say();
	var0003 = Func0992(0xFFFF, "@Batlin! Why, he is our enemy, too!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	gflags[0x0058] = true;
	UI_push_answers();
	UI_add_answer(["Batlin", "companions", "artifact", "nothing more"]);
labelFunc043E_01DD:
	case "Batlin" attend labelFunc043E_0206:
	UI_remove_answer("Batlin");
	message("\"He came inquiring about ancient ruins, and was especially interested in the Serpent Stone -- but Renfry can tell thee more of this.\"");
	say();
	message("\"Simon the Innkeeper heard the sage say that he had come here from Fawn.\"");
	say();
	gflags[0x008E] = true;
	if (!(!gflags[0x000B])) goto labelFunc043E_0206;
	UI_add_answer("Fawn");
labelFunc043E_0206:
	case "Fawn" attend labelFunc043E_022F:
	UI_remove_answer("Fawn");
	message("\"The City of Beauty lies due north of here, on the shores of a great bay. Fawn is a city of fishermen.\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc043E_0227;
	message("\"Thou mightest like Fawn, for 'tis a place where members of thy sex are highly regarded. The city is ruled by a Queen, and the Priestess of Beauty is also female.\"");
	say();
	goto labelFunc043E_022F;
labelFunc043E_0227:
	message("\"The women of Fawn are the most beautiful in the land, but they are overly pampered.\"");
	say();
	message("\"Monitorian females, on the other hand, are as strong as oxen!\"");
	say();
labelFunc043E_022F:
	case "companions" attend labelFunc043E_025D:
	UI_remove_answer("companions");
	message("\"There is not much to say! The one in the cloak spent most of his time in the inn, and seldom spoke.\"");
	say();
	if (!(!gflags[0x0044])) goto labelFunc043E_024D;
	message("\"Perhaps Simon could tell thee more.\"");
	say();
labelFunc043E_024D:
	message("\"There was also a warrior named Brunt who travelled with Batlin. He was small in stature, but with incredibly broad shoulders --\"");
	say();
	message("\"Oh! If only he would have posed in my studio! I could have created such art...\"");
	say();
	message("\"Standarr fought him in the List Field, and said that he was an opponent unlike any other!\"");
	say();
	gflags[0x008D] = true;
labelFunc043E_025D:
	case "artifact" attend labelFunc043E_02A6:
	UI_remove_answer("artifact");
	message("\"Mine ancestors found the relic when they first founded this city, and it hath been kept in the family all this time.\"");
	say();
	message("\"To be honest, we were afraid to discard it. It had a demonic appearance, being shaped like a serpent, and composed of a dark rock never before seen.\"");
	say();
	var0003 = Func0992(0x0001, "@Perhaps blackrock, Avatar...@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc043E_0295;
	UI_set_conversation_slot(0x0000);
labelFunc043E_0295:
	message("\"We hated the object, yet we were afraid to be parted from it. I cannot explain this. But it was so.\"");
	say();
	UI_add_answer(["demonic appearance", "serpent-shaped"]);
labelFunc043E_02A6:
	case "demonic appearance" attend labelFunc043E_02C1:
	UI_remove_answer("demonic appearance");
	message("\"Monitorians are not a superstitious people, yet we fear the ancient ruins.\"");
	say();
	message("\"They were once the homes of Daemons who ruled this land in a distant age. They were horned beings with red skins, and they had the power to command molten rock to flow!\"");
	say();
	message("\"The Serpent was their sign.\"");
	say();
labelFunc043E_02C1:
	case "serpent-shaped" attend labelFunc043E_0314:
	UI_remove_answer("serpent-shaped");
	message("\"Indeed, 'twas as if a living serpent had been changed into stone -- a perfect replica!\"");
	say();
	message("\"'Tis not uncommon to see the symbol of the serpent among the ruins, yet I have never seen before or since any such Rock Serpent.\"");
	say();
	var0003 = Func0992(0xFFFE, "@Couldst thou describe the curvings of the serpent?@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc043E_0314;
	UI_set_conversation_slot(0x0000);
	message("\"Umm... why, the head curved to the right, and the body was most sinuous. Why dost thou ask?\"");
	say();
	var0003 = Func0992(var0003, "@Avatar, this man's stolen relic was a\tperfect match for the one thou lost in the Storm, except that it faced the opposite way!", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc043E_0314:
	case "nothing more" attend labelFunc043E_0353:
	message("\"But let me say this -- Batlin shall not rest in peace, for a powerful warrior is on his trail!\"");
	say();
	message("\"Dost thou know of Wilfred the Slayer?\"");
	say();
	if (!Func0955()) goto labelFunc043E_0331;
	message("\"Then I need say no more. Surely, Wilfred shall slay the evil sage and reap my revenge.\"");
	say();
	goto labelFunc043E_033D;
labelFunc043E_0331:
	message("\"Wilfred is a Knight of Monitor, but his home is at the inn of the Sleeping Bull.\"");
	say();
	message("\"Batlin hath been there as well, and Wilfred's father hath mysteriously disappeared. Wilfred suspects the sage of being involved.\"");
	say();
	message("\"Surely, brave Wilfred shall track down the sage and kill him, and I shall enjoy sweet revenge!\"");
	say();
labelFunc043E_033D:
	gflags[0x0059] = true;
	UI_pop_answers();
	if (!(!gflags[0x000C])) goto labelFunc043E_0353;
	UI_add_answer("Sleeping Bull");
labelFunc043E_0353:
	case "Sleeping Bull" attend labelFunc043E_036E:
	UI_remove_answer("Sleeping Bull");
	message("\"Thou canst find the inn of the Sleeping Bull by taking the Serpent Highway north from here.\"");
	say();
	message("\"There is not much there, save for an ancient inn for which the village is named. Wilfred's brother Argus doth operate it.\"");
	say();
	gflags[0x000C] = true;
labelFunc043E_036E:
	case "bye" attend labelFunc043E_0391:
	Func097F(0xFE9C, "@Bye!@", 0x0000);
	Func097F(0xFFC2, "@'Til next we meet...@", 0x0002);
	goto labelFunc043E_0394;
labelFunc043E_0391:
	goto labelFunc043E_00A4;
labelFunc043E_0394:
	endconv;
labelFunc043E_0395:
	if (!(event == 0x0000)) goto labelFunc043E_04D7;
	UI_clear_item_say(0xFFC2);
	if (!(UI_npc_nearby(0xFFB9) && (UI_get_schedule_type(0xFFB9) == 0x0010))) goto labelFunc043E_04A8;
	UI_clear_item_say(0xFFB9);
	var0004 = UI_direction_from(0xFFC2, 0xFFB9);
	var0004 = UI_execute_usecode_array(0xFFC2, [(byte)0x23, (byte)0x59, var0004]);
	var0005 = UI_get_random(0x0006);
	if (!(var0005 == 0x0001)) goto labelFunc043E_040E;
	Func097F(0xFFC2, "@Turn this way...@", 0x0000);
	Func097F(0xFFB9, "@Hurry!@", 0x0003);
labelFunc043E_040E:
	if (!(var0005 == 0x0002)) goto labelFunc043E_0430;
	Func097F(0xFFC2, "@Don't move!@", 0x0000);
	Func097F(0xFFB9, "@Sorry, Andral.@", 0x0003);
labelFunc043E_0430:
	if (!(var0005 == 0x0003)) goto labelFunc043E_0452;
	Func097F(0xFFB9, "@Is it done yet?@", 0x0000);
	Func097F(0xFFC2, "@Art doth take time.@", 0x0003);
labelFunc043E_0452:
	if (!(var0005 > 0x0003)) goto labelFunc043E_04A5;
	Func097F(0xFFC2, "@Aha!@", 0x0000);
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x000A, 0x0000);
	if (!var0006) goto labelFunc043E_04A5;
	UI_si_path_run_usecode(0xFFC2, UI_get_object_position(var0006), 0x000D, item, 0x043E, false);
	UI_set_path_failure([0x043E], item, 0x000E);
labelFunc043E_04A5:
	goto labelFunc043E_04D7;
labelFunc043E_04A8:
	var0007 = ["@Piece by piece...@", "@Art is life!@", "@I have a vision...@", "@Take a chance!@", "@Patience!@", "@Art is not easy...@"];
	Func097F(0xFFC2, var0007[UI_get_random(UI_get_array_size(var0007))], 0x0000);
labelFunc043E_04D7:
	if (!(event == 0x000E)) goto labelFunc043E_0507;
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x0004, 0x0000);
	if (!var0006) goto labelFunc043E_04FF;
	event = 0x000D;
	goto labelFunc043E_0507;
labelFunc043E_04FF:
	UI_run_schedule(0xFFC2);
	abort;
labelFunc043E_0507:
	if (!(event == 0x000D)) goto labelFunc043E_057B;
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x0004, 0x0000);
	if (!var0006) goto labelFunc043E_0573;
	var0008 = UI_direction_from(0xFFC2, var0006);
	UI_set_schedule_type(0xFFC2, 0x000F);
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0008, (byte)0x66, (byte)0x67, (byte)0x01, (byte)0x58, 0x000B, (byte)0x64, (byte)0x27, 0x0002, (byte)0x0B, 0xFFF8, 0x0003, (byte)0x55, 0x043E]);
	goto labelFunc043E_057A;
labelFunc043E_0573:
	UI_run_schedule(0xFFC2);
labelFunc043E_057A:
	abort;
labelFunc043E_057B:
	if (!(event == 0x0002)) goto labelFunc043E_05B9;
	var0007 = ["@Much better!@", "@'Tis taking shape!@", "@Hmmm...@", "@Uh-oh...@", "@Ouch!@", "@A masterpiece!@"];
	Func097F(0xFFC2, var0007[UI_get_random(UI_get_array_size(var0007))], 0x0000);
	UI_run_schedule(0xFFC2);
labelFunc043E_05B9:
	return;
}


