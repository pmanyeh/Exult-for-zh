#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func046D object#(0x46D) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc046D_01F0;
	UI_show_npc_face(0xFF93, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02CA])) goto labelFunc046D_003A;
	message("You see a monk wandering around apparently without direction.");
	say();
	gflags[0x02CA] = true;
	goto labelFunc046D_0044;
labelFunc046D_003A:
	message("\"Greetings, ");
	message(var0000);
	message(". May I help thee?\" asks Wayne.");
	say();
labelFunc046D_0044:
	converse attend labelFunc046D_01EB;
	case "name" attend labelFunc046D_0060:
	message("\"Thou mayest call me Brother Wayne, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc046D_0060:
	case "job" attend labelFunc046D_007A:
	message("\"My job? Well, I, er, do not truly have one at the moment.\" He looks down at his feet.");
	say();
	UI_remove_answer("job");
	UI_add_answer("at the moment");
labelFunc046D_007A:
	case "at the moment" attend labelFunc046D_00A0:
	message("\"Yes, I am... Well, I am lost, ");
	message(var0000);
	message(". I am from the Abbey to the south of here... or to the north.... Mayhaps the northwest.\" He cradles his chin and looks up.~~\"Southeast?\"");
	say();
	UI_remove_answer("at the moment");
	UI_add_answer(["lost", "Abbey"]);
labelFunc046D_00A0:
	case "lost" attend labelFunc046D_00B3:
	message("\"Well... I am sure it is not permanent.\" He blushes. \"I just need to get my bearings, that's all,\" he says unconvincingly.");
	say();
	UI_remove_answer("lost");
labelFunc046D_00B3:
	case "Abbey" attend labelFunc046D_00D6:
	message("\"I am a monk of the Brotherhood of the Rose. I study geography and nature with a brother named Taylor.\"");
	say();
	UI_remove_answer("Abbey");
	UI_add_answer(["geography", "nature", "Taylor"]);
labelFunc046D_00D6:
	case "geography" attend labelFunc046D_00E9:
	message("\"Well,\" he shrugs, \"I suppose I should have studied a little bit better.\" He smiles sheepishly.");
	say();
	UI_remove_answer("geography");
labelFunc046D_00E9:
	case "nature" attend labelFunc046D_0109:
	message("\"There are so many beautiful things to see in Britannia. Both animals and plants alike offer excitement to the observer.\"");
	say();
	UI_remove_answer("nature");
	UI_add_answer(["animals", "plants"]);
labelFunc046D_0109:
	case "Taylor" attend labelFunc046D_011C:
	message("\"Well, I haven't actually seen him for some time. I assume he is still continuing his studies.\"");
	say();
	UI_remove_answer("Taylor");
labelFunc046D_011C:
	case "plants" attend labelFunc046D_014B:
	message("\"Ah, yes, ");
	message(var0000);
	message(", they are quite wondrous to see. I highly recommend to thee to always observe thy surroundings. Otherwise, ");
	message(var0000);
	message(", thou wilt miss much in life: flowers, trees, birds... landmarks!\"");
	say();
	UI_remove_answer("plants");
	UI_add_answer(["flowers", "trees", "birds"]);
labelFunc046D_014B:
	case "trees" attend labelFunc046D_015E:
	message("\"Ah, my least favorite subject. I find the trees much less interesting than the birds.\"");
	say();
	UI_remove_answer("trees");
labelFunc046D_015E:
	case "birds" attend labelFunc046D_0171:
	message("\"My favorite type of animal! The birds are so free, able to fly vast distances. How I wish I could roam about the open skies... most especially considering my current situation. Thou canst see so much more from the air, I am certain of it!\"");
	say();
	UI_remove_answer("birds");
labelFunc046D_0171:
	case "flowers" attend labelFunc046D_0197:
	message("\"Very, very lovely plants. All the colors of the rainbow, and then some. One of the monks at the Abbey had a lovely flower garden. She may still tend it for all that I know, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("flowers");
	if (!gflags[0x014C]) goto labelFunc046D_0197;
	UI_add_answer("She still does.");
labelFunc046D_0197:
	case "She still does." attend labelFunc046D_01B7:
	message("\"Excellent, ");
	message(var0000);
	message(". I am glad to hear it. 'Twould be a shame were Aimi to give that up for her other... pastime.\"");
	say();
	UI_remove_answer("She still does.");
	UI_add_answer("other pastime");
labelFunc046D_01B7:
	case "other pastime" attend labelFunc046D_01CA:
	message("\"Aimi also paints. Or rather, makes a bold attempt. I must, of course, commend her for her efforts.\"");
	say();
	UI_remove_answer("other pastime");
labelFunc046D_01CA:
	case "animals" attend labelFunc046D_01DD:
	message("\"My favorite ones are the birds, especially the Golden-Cheeked Warbler. I love to follow and watch them. They do not seem to have a very good sense of direction, however.\" He sighs. \"But there is a great variety of species in this land.\"");
	say();
	UI_remove_answer("animals");
labelFunc046D_01DD:
	case "bye" attend labelFunc046D_01E8:
	goto labelFunc046D_01EB;
labelFunc046D_01E8:
	goto labelFunc046D_0044;
labelFunc046D_01EB:
	endconv;
	message("\"May thy good fortune guide thee down the trail of life.\"*");
	say();
labelFunc046D_01F0:
	if (!(event == 0x0000)) goto labelFunc046D_01FE;
	Func092E(0xFF93);
labelFunc046D_01FE:
	return;
}


