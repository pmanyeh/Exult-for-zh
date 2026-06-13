#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04F7 object#(0x4F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F7_0399;
	UI_show_npc_face(0xFF09, 0x0000);
	if (!(!gflags[0x01B2])) goto labelFunc04F7_001E;
	message("The non-corporeal man stares past you, seemingly past the confines of the building, and, perhaps, of the world. Then, he suddenly shudders, as if he is filled with pain.*");
	say();
	abort;
labelFunc04F7_001E:
	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01C2])) goto labelFunc04F7_0052;
	message("The ghostly man displays a face filled with pain.");
	say();
	gflags[0x01C2] = true;
	goto labelFunc04F7_008A;
labelFunc04F7_0052:
	message("\"Greetings, ");
	message(var0003);
	message(".\" Caine breathes deeply, apparently forcing back his torment.");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_0072;
	UI_add_answer("questions");
	var0002 = true;
labelFunc04F7_0072:
	if (!(!gflags[0x01BF])) goto labelFunc04F7_008A;
	if (!gflags[0x01C0]) goto labelFunc04F7_008A;
	UI_add_answer("need formula");
	var0001 = true;
labelFunc04F7_008A:
	if (!gflags[0x01BF]) goto labelFunc04F7_009E;
	if (!(!gflags[0x01D0])) goto labelFunc04F7_009E;
	UI_add_answer("instructions");
labelFunc04F7_009E:
	if (!gflags[0x0198]) goto labelFunc04F7_00B2;
	if (!(!gflags[0x01A1])) goto labelFunc04F7_00B2;
	UI_add_answer("sacrifice");
labelFunc04F7_00B2:
	converse attend labelFunc04F7_038E;
	case "name" attend labelFunc04F7_0103:
	message("\"I,\" he gasps, \"am called Caine. But I have also been given an alias by my... fellow townspeople. To them, I am known as `the Tortured One.'\" He moves his hands in a sweeping gesture, but seems to indicate nothing. \"And thou canst see why.\"");
	say();
	if (!(gflags[0x017C] && (!gflags[0x0196]))) goto labelFunc04F7_00DA;
	if (!(!var0002)) goto labelFunc04F7_00DA;
	UI_add_answer("questions");
labelFunc04F7_00DA:
	UI_remove_answer("name");
	UI_add_answer("why?");
	if (!(!var0001)) goto labelFunc04F7_0103;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0103;
	if (!gflags[0x01C0]) goto labelFunc04F7_0103;
	UI_add_answer("need formula");
labelFunc04F7_0103:
	case "why?" attend labelFunc04F7_0116:
	message("\"The flames, fool! The flames!\" Again he gasps.");
	say();
	UI_remove_answer("why?");
labelFunc04F7_0116:
	case "job" attend labelFunc04F7_0150:
	message("He smirks at your comment.~~\"Thou wishest to know my job? I will tell thee my job!\" he shouts.~\"To burn here in eternal flames for my crime against the fair city of Skara Brae! That,\" he pauses for emphasis, \"is my job!\"~After a moment, he calms down.~\"I apologize, ");
	message(var0003);
	message(". I realize thy question was not intended to further torment me,\" he sighs, and turns his face away from you. \"At one time, I was the alchemist here.\"");
	say();
	UI_add_answer(["flames", "Skara Brae"]);
	if (!(!var0001)) goto labelFunc04F7_0150;
	if (!(!gflags[0x01BF])) goto labelFunc04F7_0150;
	if (!gflags[0x01C0]) goto labelFunc04F7_0150;
	UI_add_answer("need formula");
labelFunc04F7_0150:
	case "flames" attend labelFunc04F7_0171:
	message("He looks down at the ground, a remorseful expression on his face.~~\"The flames are my punishment. Years ago, when the evil Liche first exerted his reign of death over Skara Brae, the healer, Mordra, conceived of a plan to remove the creature most foul.~~\"She designed a concoction that would destroy the magical bonds that form the Liche. The formula was presented to our mayor, who passed it on to me.~~\"But,\" he scowls, \"something went wrong when I was preparing the potion. The proportions were mixed improperly, or... I don't know!\" he shouts, fists clenched.~~\"All I remember is the shop exploding, and the fire! The fire! All those people dead... because of me... because of my mistake....\"");
	say();
	UI_remove_answer("flames");
	if (!(!var0000)) goto labelFunc04F7_0171;
	UI_add_answer("mayor");
labelFunc04F7_0171:
	case "Skara Brae" attend labelFunc04F7_018B:
	message("\"'Twas a thriving town -- before I destroyed it!\" His jaw tightens and his face clenches. \"Why? Why, why, why!\" He again gasps in agony, but quickly regains control.~~\"There were so many innocent people,\" he says, staring directly at you. \"I cannot believe I am responsible for all their deaths.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("Skara Brae");
labelFunc04F7_018B:
	case "sacrifice" attend labelFunc04F7_01A8:
	message("\"I am sorry, ");
	message(var0003);
	message(", but I must spend my eternity here in constant memory of those whom I have destroyed.\"");
	say();
	gflags[0x01A1] = true;
	UI_remove_answer("sacrifice");
labelFunc04F7_01A8:
	case "mayor", "Forsythe" attend labelFunc04F7_01C8:
	message("\"Forsythe is the mayor. Perhaps thou canst find him in the Town Hall, shouldst thou wish to speak with him.\"");
	say();
	var0000 = true;
	UI_remove_answer(["Forsythe", "mayor"]);
labelFunc04F7_01C8:
	case "need formula" attend labelFunc04F7_01FD:
	message("\"Thou trusts me to tell thee the formula! After what I have done to this town? Art thou mad? I hope at least, that thou hast checked with Mordra for the correct proportions, yes?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F7_01F2;
	message("He shakes his head in disbelief.~~\"Thou art truly insane. But,\" he shrugs, \"thou hast nothing to lose but thine own life....\"");
	say();
	UI_add_answer("instructions");
	gflags[0x01BF] = true;
	goto labelFunc04F7_01F6;
labelFunc04F7_01F2:
	message("\"That is better. Thou hadst me wondering.\" His tone is a mixture of both relief and disappointment.");
	say();
labelFunc04F7_01F6:
	UI_remove_answer("need formula");
labelFunc04F7_01FD:
	case "instructions" attend labelFunc04F7_0210:
	message("\"First thou wilt need the three potions. Then, thou must place each one just below a connecting tube -- the order matters not. Take an empty vial -- I should have one here in my lab -- and set it below the nozzle. Then, turn on the burner. After but a few minutes, the mixture will form, and the filled vial will be ready for thee.\"");
	say();
	UI_remove_answer("instructions");
labelFunc04F7_0210:
	case "people" attend labelFunc04F7_0238:
	message("\"Thou wishest to know whom I killed? I can only assume that all perished in the blaze: Markham and his Barmaid, Paulette; Trent and Forsythe; and, of course, Mordra the healer.\"");
	say();
	UI_add_answer("Trent");
	if (!(!var0000)) goto labelFunc04F7_0231;
	UI_add_answer("Forsythe");
labelFunc04F7_0231:
	UI_remove_answer("people");
labelFunc04F7_0238:
	case "Trent" attend labelFunc04F7_0258:
	message("\"He is -- was -- the blacksmith. Mine one consolation lay with him, for I thought there would be at least one advantage to his death. Sadly,\" he inhales quickly, \"even that did not occur.\"");
	say();
	UI_add_answer(["blacksmith", "advantage"]);
	UI_remove_answer("Trent");
labelFunc04F7_0258:
	case "blacksmith" attend labelFunc04F7_0272:
	message("\"He was once a master of all things metal. Now all he does, so I am told, is work endlessly on that blasted cage!\"");
	say();
	UI_remove_answer("blacksmith");
	UI_add_answer("cage");
labelFunc04F7_0272:
	case "cage" attend labelFunc04F7_0285:
	message("\"I know nothing about it other than that it was necessary to put the liche in it before my... potion could work on him.\"");
	say();
	UI_remove_answer("cage");
labelFunc04F7_0285:
	case "advantage" attend labelFunc04F7_02A5:
	message("\"The liche took from Trent the one most valuable thing in the blacksmith's life -- his wife, Rowena. I had hoped his death would at least extinguish his pain.\" He smiles sardonically.~~\"Well, it did end his pain, in a manner of speaking.\"");
	say();
	UI_remove_answer("advantage");
	UI_add_answer(["Rowena", "end"]);
labelFunc04F7_02A5:
	case "end" attend labelFunc04F7_02B8:
	message("\"The pain is gone, but only to be replaced by his obsessive anger. The poor fool does not even realize he is dead! He thrives on his anger.\"");
	say();
	UI_remove_answer("end");
labelFunc04F7_02B8:
	case "Rowena" attend labelFunc04F7_02D2:
	message("\"She was all he lived for. When the liche tried to take her from him, he was consumed by the emptiness of her death. But, after his own demise,\" he stares directly at you, \"his bitter feelings soured even further.~~\"I suspect there is no reasoning with him now.\"");
	say();
	UI_remove_answer("Rowena");
	UI_add_answer("reasoning");
labelFunc04F7_02D2:
	case "reasoning" attend labelFunc04F7_02E5:
	message("\"I doubt he would believe even his own death, let alone care.\"");
	say();
	UI_remove_answer("reasoning");
labelFunc04F7_02E5:
	case "questions" attend labelFunc04F7_0350:
	if (!(!gflags[0x01BC])) goto labelFunc04F7_031B;
	message("The ghost looks at you with a hint of amusement. \"Thou art looking for the answers to the questions of life and death?\"");
	say();
	if (!Func090A()) goto labelFunc04F7_0313;
	message("The Tortured One looks hard at you. After a pause, he speaks. \"I will tell thee what I know if thou dost agree to help me. Free me. Free all of us. Free us from the evil Liche.\"");
	say();
	UI_add_answer("Liche");
	UI_remove_answer("questions");
	goto labelFunc04F7_0318;
labelFunc04F7_0313:
	message("\"Then I have no answers for thee.\"*");
	say();
	abort;
labelFunc04F7_0318:
	goto labelFunc04F7_0349;
labelFunc04F7_031B:
	if (!gflags[0x01AA]) goto labelFunc04F7_0345;
	message("\"Thou hast freed us from the Liche. Thou art entitled to mine half of the bargain.~~\"So thou dost want to know the answers to the questions of life and death?\"");
	say();
	if (!Func090A()) goto labelFunc04F7_033D;
	message("The Tortured One looks hard at you. Then, smiling, he shakes his head. \"I have no secrets, my foolish friend. Thou art a fool. There are -no- answers. Only questions.\"~~He looks as if he might cry out in pain. And then Caine turns away from you. \"Go away now. Leave me to mine eternity.\"*");
	say();
	gflags[0x0196] = true;
	Func0911(0x02BC);
	abort;
	goto labelFunc04F7_0342;
labelFunc04F7_033D:
	message("\"Then why hast thou wasted thy time? Go away, fool!\"*");
	say();
	abort;
labelFunc04F7_0342:
	goto labelFunc04F7_0349;
labelFunc04F7_0345:
	message("\"Thou hast not rid us of the evil Liche yet. Fulfill this quest as thou hast agreed and I shall give thee the answers thou dost seek.\"");
	say();
labelFunc04F7_0349:
	UI_remove_answer("questions");
labelFunc04F7_0350:
	case "Liche" attend labelFunc04F7_0380:
	message("\"He is an evil spirit who inhabits poor dead Horance's body. He has a hold on every being in this town -- even me. He sucks the life forces -- the little that remain -- from our souls. Please, thou must free us from his power. Wilt thou try?\"");
	say();
	if (!Func090A()) goto labelFunc04F7_0374;
	message("The Tortured One's eyes brighten somewhat, as he sees the light at the end of a long, dark tunnel. \"Then thou hast given me hope. To begin, speak with Mistress Mordra. She can tell thee how to accomplish this feat.\"");
	say();
	UI_remove_answer("Liche");
	gflags[0x01BC] = true;
	goto labelFunc04F7_0379;
labelFunc04F7_0374:
	message("\"Then thou shalt never know the answers to the questions of life and death. An eye for an eye, my friend.\"*");
	say();
	abort;
labelFunc04F7_0379:
	UI_remove_answer("Liche");
labelFunc04F7_0380:
	case "bye" attend labelFunc04F7_038B:
	goto labelFunc04F7_038E;
labelFunc04F7_038B:
	goto labelFunc04F7_00B2;
labelFunc04F7_038E:
	endconv;
	message("\"Goodbye, ");
	message(var0003);
	message(".\" He suppresses a pained scream as you depart.*");
	say();
labelFunc04F7_0399:
	if (!(event == 0x0000)) goto labelFunc04F7_03A2;
	abort;
labelFunc04F7_03A2:
	return;
}


