#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08B9 0x8B9 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E7 object#(0x4E7) ()
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

	if (!(event == 0x0001)) goto labelFunc04E7_04AC;
	UI_show_npc_face(0xFF19, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF19));
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0001 == 0x0017)) goto labelFunc04E7_005A;
	UI_add_answer(["food", "drink", "room", "buy"]);
labelFunc04E7_005A:
	if (!(!gflags[0x02B4])) goto labelFunc04E7_006C;
	message("You see a woman in her fifties who might have been a pirate wench in her earlier years. Though she is coarse, she has a certain motherly quality.");
	say();
	gflags[0x02B4] = true;
	goto labelFunc04E7_0070;
labelFunc04E7_006C:
	message("\"Hello, again,\" Mandy says.");
	say();
labelFunc04E7_0070:
	converse attend labelFunc04E7_04A7;
	case "name" attend labelFunc04E7_0086:
	message("\"I am Mandy.\"");
	say();
	UI_remove_answer("name");
labelFunc04E7_0086:
	case "job" attend labelFunc04E7_0159:
	message("\"I run the Fallen Virgin Inn and Tavern. We are open for breakfast, dinner, and late night hours.");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc04E7_014E;
	message("\"If thou dost want food or drink, or perhaps a room, please say so.\"");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04E7_0138;
	message("Mandy looks at Dupre and says, \"Don't I know thee?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Yes, milady. I was here a few months ago.\"*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("\"I remember! Thou art working for Brommer's Britannian travel guides! Thou art a pub critic!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"That is right, milady.\"*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("\"Welcome back! Please try anything on the menu. It is all still very good.\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I thank thee, milady.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF19, 0x0000);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E7_012E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Thou art a swine, Dupre.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E7_012E:
	UI_show_npc_face(0xFF19, 0x0000);
labelFunc04E7_0138:
	UI_add_answer(["food", "drink", "room", "buy"]);
	goto labelFunc04E7_0152;
labelFunc04E7_014E:
	message("\"Please come to the Tavern then and I will be happy to serve thee.\"");
	say();
labelFunc04E7_0152:
	UI_add_answer("Fallen Virgin");
labelFunc04E7_0159:
	case "food" attend labelFunc04E7_0173:
	message("\"We serve a good plate of slop, if I do say so myself! That Silverleaf is something. Thou shouldst try that.\"");
	say();
	UI_remove_answer("food");
	UI_add_answer("Silverleaf");
labelFunc04E7_0173:
	case "drink" attend labelFunc04E7_0186:
	message("\"I can offer thee wine and ale.\"");
	say();
	UI_remove_answer("drink");
labelFunc04E7_0186:
	case "room" attend labelFunc04E7_023A:
	message("\"Our rooms are 10 gold per person. The only one available now is the southwest room. The other two already have occupants. Dost thou want one?\"");
	say();
	if (!Func090A()) goto labelFunc04E7_022F;
	var0005 = UI_get_party_list();
	var0006 = 0x0000;
	enum();
labelFunc04E7_01A6:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc04E7_01BE;
	var0006 = (var0006 + 0x0001);
	goto labelFunc04E7_01A6;
labelFunc04E7_01BE:
	var000A = (var0006 * 0x000A);
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc04E7_0222;
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000C)) goto labelFunc04E7_0207;
	message("\"Look there now. Thou hast too many bundles to take the room key!\"");
	say();
	goto labelFunc04E7_021F;
labelFunc04E7_0207:
	message("\"Here is the room key. It is good only until thou dost leave the inn.\"");
	say();
	var000D = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04E7_021F:
	goto labelFunc04E7_022C;
labelFunc04E7_0222:
	message("\"It doth seem that thou art a trifle short, ");
	message(var0002);
	message(".\"");
	say();
labelFunc04E7_022C:
	goto labelFunc04E7_0233;
labelFunc04E7_022F:
	message("\"All right. Some other time.\"");
	say();
labelFunc04E7_0233:
	UI_remove_answer("room");
labelFunc04E7_023A:
	case "buy" attend labelFunc04E7_0245:
	Func08B9();
labelFunc04E7_0245:
	case "Silverleaf" attend labelFunc04E7_0258:
	message("\"Best bloody swill thou wilt eat on the face of the earth!\"");
	say();
	UI_remove_answer("Silverleaf");
labelFunc04E7_0258:
	case "Fallen Virgin" attend labelFunc04E7_0318:
	message("\"Yes, I have run this tavern and inn since my wenching days.\" Mandy laughs. \"I was quite a beauty back then, but thou canst not tell it now. I know everyone in town and they all know me. If thou dost need to know something about anyone, let me know.\"");
	say();
	UI_remove_answer("Fallen Virgin");
	if (!gflags[0x02A9]) goto labelFunc04E7_0278;
	UI_add_answer("Danag");
labelFunc04E7_0278:
	if (!gflags[0x02AF]) goto labelFunc04E7_0285;
	UI_add_answer("Blacktooth");
labelFunc04E7_0285:
	if (!gflags[0x02B0]) goto labelFunc04E7_0292;
	UI_add_answer("Mole");
labelFunc04E7_0292:
	if (!gflags[0x02B2]) goto labelFunc04E7_029F;
	UI_add_answer("Budo");
labelFunc04E7_029F:
	if (!gflags[0x02AB]) goto labelFunc04E7_02AC;
	UI_add_answer("Glenno");
labelFunc04E7_02AC:
	if (!gflags[0x02AA]) goto labelFunc04E7_02B9;
	UI_add_answer("Wench");
labelFunc04E7_02B9:
	if (!gflags[0x02AC]) goto labelFunc04E7_02C6;
	UI_add_answer("Martine");
labelFunc04E7_02C6:
	if (!gflags[0x02AD]) goto labelFunc04E7_02D3;
	UI_add_answer("Roberto");
labelFunc04E7_02D3:
	if (!gflags[0x02B1]) goto labelFunc04E7_02E0;
	UI_add_answer("Lucky");
labelFunc04E7_02E0:
	if (!gflags[0x02B3]) goto labelFunc04E7_02ED;
	UI_add_answer("Gordy");
labelFunc04E7_02ED:
	if (!gflags[0x02AE]) goto labelFunc04E7_02FA;
	UI_add_answer("Sintag");
labelFunc04E7_02FA:
	if (!gflags[0x02B5]) goto labelFunc04E7_0307;
	UI_add_answer("Smithy");
labelFunc04E7_0307:
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E7_0318;
	UI_add_answer("Hook");
labelFunc04E7_0318:
	case "Danag" attend labelFunc04E7_032B:
	message("\"He helps out at that Fellowship place. He is always interim branch leader for some reason. The real leader, a fellow named Abraham, is never here. Danag is all right. Kind of gullible.\"");
	say();
	UI_remove_answer("Danag");
labelFunc04E7_032B:
	case "Blacktooth" attend labelFunc04E7_033E:
	message("\"He is a former pirate and rogue, and he can be fairly mean. If he does not warm up to thee immediately, he may not at all. But once he does, thou wilt learn he is quite a sensitive man.\"");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E7_033E:
	case "Mole" attend labelFunc04E7_0351:
	message("\"I was a wench with Mole's gang of pirates back in... well, it seems a century ago. Mole was rough and tough and a trouble-maker. Until he joined The Fellowship. That changed him into...,\" Mandy shrugs. \"I know not, a middle-aged former pirate or some such.\"");
	say();
	UI_remove_answer("Mole");
labelFunc04E7_0351:
	case "Budo" attend labelFunc04E7_0364:
	message("\"His family has been on Buccaneer's Den for generations. Comes on a trifle too strong with the barking of wares, if thou dost ask me.\"");
	say();
	UI_remove_answer("Budo");
labelFunc04E7_0364:
	case "Glenno" attend labelFunc04E7_0377:
	message("\"He makes me laugh. He is a dear. Thou wouldst not find a more pleasant, and eager-to-please, man on the island. He is a surprisingly good person.\" Mandy pauses then adds, \"For a pimp.\"");
	say();
	UI_remove_answer("Glenno");
labelFunc04E7_0377:
	case "Wench" attend labelFunc04E7_038A:
	message("\"She is a very private person. Works at The Baths. I hear she won some kind of competition -- that is why she is fortunate to be there. I understand Glenno pays them well over there.\"");
	say();
	UI_remove_answer("Wench");
labelFunc04E7_038A:
	case "Martine" attend labelFunc04E7_039D:
	message("\"She is a very private person. Works at The Baths. I have not spoken three words to her in my life.\"");
	say();
	UI_remove_answer("Martine");
labelFunc04E7_039D:
	case "Roberto" attend labelFunc04E7_03B0:
	message("\"He is a very private person, but, oh, is he an attractive man, I must say! He works at The Baths. I will admit I am one of his clients. He doth truly clean my dishes, if thou dost know what I mean.\"");
	say();
	UI_remove_answer("Roberto");
labelFunc04E7_03B0:
	case "Lucky" attend labelFunc04E7_03C3:
	message("\"He is a former rogue, I can tell thee that! And to think he makes a living now by teaching others to be the same!\" Mandy shrugs. \"To each their own.\"");
	say();
	UI_remove_answer("Lucky");
labelFunc04E7_03C3:
	case "Gordy" attend labelFunc04E7_03D6:
	message("\"I do not know him that well, although he seems to be a sincere man. He runs the House of Games like a ship. He is a former pirate as well. Must have been a captain.\"");
	say();
	UI_remove_answer("Gordy");
labelFunc04E7_03D6:
	case "Smithy" attend labelFunc04E7_03E9:
	message("\"He was another pirate. I know he works at the House of Games. I suppose he is the man in charge of the actual games. I do not know him well.\"");
	say();
	UI_remove_answer("Smithy");
labelFunc04E7_03E9:
	case "Sintag" attend labelFunc04E7_03FC:
	message("\"Brrrr! He is a scary man. Thou canst tell that he has killed. He is the guard at the House of Games. Thou dost not want to be caught cheating by him!\"");
	say();
	UI_remove_answer("Sintag");
labelFunc04E7_03FC:
	case "Hook" attend labelFunc04E7_0439:
	var000E = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var000E) goto labelFunc04E7_0423;
	message("You feel your Cube vibrate, but somehow you know that Mandy would have told you the truth without it.");
	say();
labelFunc04E7_0423:
	message("Mandy whispers to you. \"I know who thou dost mean. He lives somewhere on the island, but I am not sure where. He rarely comes in to the tavern, but I have seen him on occasion.\"");
	say();
	message("\"He scares me to death.\"");
	say();
	UI_remove_answer("Hook");
	UI_add_answer("scares");
labelFunc04E7_0439:
	case "scares" attend labelFunc04E7_0459:
	message("\"Well, he is a killer. Some think he is the one responsible for the murder that happened last year.\"");
	say();
	UI_remove_answer("scares");
	UI_add_answer(["killer", "murder"]);
labelFunc04E7_0459:
	case "killer" attend labelFunc04E7_046C:
	message("\"This man they call Hook has the way of the killer about him. Thou canst see it in his eyes. I would be extremely careful if I were to run afoul of him.\"");
	say();
	UI_remove_answer("killer");
labelFunc04E7_046C:
	case "murder" attend labelFunc04E7_0486:
	message("\"There was a thief named Duncan who had stolen funds from the House of Games and The Baths. I believe he may have broken into the Fellowship Hall as well. Anyway, he was arrested. But one morning, when the guard brought the man his breakfast, he was gone! Everyone thought he had escaped until his body was found in the house where old Blacktooth lives. This was before Blacktooth lived there.\"");
	say();
	UI_remove_answer("murder");
	UI_add_answer("body");
labelFunc04E7_0486:
	case "body" attend labelFunc04E7_0499:
	message("\"It was mutilated -- his arms and legs had been cut off, and he had literally lost his head! To this day, no one knows who did it. But when Hook is around, people talk behind his back. He is certainly capable of doing it!\"");
	say();
	UI_remove_answer("body");
labelFunc04E7_0499:
	case "bye" attend labelFunc04E7_04A4:
	goto labelFunc04E7_04A7;
labelFunc04E7_04A4:
	goto labelFunc04E7_0070;
labelFunc04E7_04A7:
	endconv;
	message("\"Nice talking with thee. I shall see thee later, I hope.\"*");
	say();
labelFunc04E7_04AC:
	if (!(event == 0x0000)) goto labelFunc04E7_04BA;
	Func092E(0xFF19);
labelFunc04E7_04BA:
	return;
}


