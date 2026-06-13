#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04B7 object#(0x4B7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04B7_02B5;
	UI_show_npc_face(0xFF49, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0248])) goto labelFunc04B7_003A;
	message("You see a winged gargoyle in his physical prime.~~\"Hail, human! To be welcome to the house of the altars. To be helpful to you in any way?\"");
	say();
	gflags[0x0248] = true;
	goto labelFunc04B7_003E;
labelFunc04B7_003A:
	message("\"To have returned! To be glad to see you again, human,\" says Teregus. \"To be welcome to the house of the altars. To be helpful to you?\"");
	say();
labelFunc04B7_003E:
	if (!gflags[0x023F]) goto labelFunc04B7_004B;
	UI_add_answer("evidence");
labelFunc04B7_004B:
	if (!gflags[0x0254]) goto labelFunc04B7_005E;
	if (!gflags[0x0239]) goto labelFunc04B7_005E;
	UI_add_answer("Inamo");
labelFunc04B7_005E:
	converse attend labelFunc04B7_02B0;
	case "name" attend labelFunc04B7_0085:
	message("\"To be called Teregus.\"");
	say();
	gflags[0x0254] = true;
	if (!gflags[0x0239]) goto labelFunc04B7_007E;
	UI_add_answer("Inamo");
labelFunc04B7_007E:
	UI_remove_answer("name");
labelFunc04B7_0085:
	case "job" attend labelFunc04B7_009E:
	message("\"To be caring for the altars of Control, Passion, and Diligence. To be a position of great responsibility. To be especially important in these times of trouble.\"");
	say();
	UI_add_answer(["trouble", "altars"]);
labelFunc04B7_009E:
	case "trouble" attend labelFunc04B7_00BE:
	message("\"To have been many disagreements in town lately. To be much tension between the followers of the principles of the altars and the followers of The Fellowship. To have heard rumors of threats to the altars.\"");
	say();
	UI_add_answer(["Fellowship", "rumors"]);
	UI_remove_answer("trouble");
labelFunc04B7_00BE:
	case "Fellowship" attend labelFunc04B7_00F5:
	var0001 = UI_is_dead(0xFF48);
	if (!var0001) goto labelFunc04B7_00DD;
	message("\"To be glad that Quan is now running our branch. To believe that he is misguided, but to be a much more reasonable gargoyle to deal with now that Runeb is gone.\"");
	say();
	goto labelFunc04B7_00E1;
labelFunc04B7_00DD:
	message("\"To be wary of Fellowship ideals. To be ignoring the altars in their search for unity, and to be losing respect for the old ways. To be not bad. To tell you our branch is run by Quan and Runeb.\"");
	say();
labelFunc04B7_00E1:
	UI_add_answer(["Quan", "Runeb"]);
	UI_remove_answer("Fellowship");
labelFunc04B7_00F5:
	case "rumors" attend labelFunc04B7_0127:
	var0001 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0001) goto labelFunc04B7_0118;
	message("\"To be sorry that we have lost Runeb. Perhaps to be for the best. To be certainly overjoyed to have avoided damage to the altars.\"");
	say();
	goto labelFunc04B7_0120;
labelFunc04B7_0118:
	message("\"To have heard that someone in town is planning to destroy the physical representations of the altars. To be not the same, of course, as actually destroying the basic principles of Control, Passion, and Diligence, but to be bad for us nonetheless. To be finding out for us who is planning this, if there is time, perhaps. To return to me with evidence when you determine course of action. To be very grateful for your assistance.\"");
	say();
	gflags[0x0253] = true;
labelFunc04B7_0120:
	UI_remove_answer("rumors");
labelFunc04B7_0127:
	case "evidence" attend labelFunc04B7_0155:
	message("\"To have brought me something, some evidence about the rumors?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_014A;
	message("\"To be wonderful! To see it, please.\"~~You hand him the note from Runeb that you found in Sarpling's shop.~~\"Ah. Runeb. To have suspected as much. To be always reaching for more by the most violent means.\"~~He sighs.~~\"To ask that you confront him with this evidence. To suggest that anything less will not reveal truth. To be prepared for anything, please, human, for to know not how he will react.\"~~He shakes his head.~~\"To be not hopeful for a peaceful solution. To thank you for your assistance.\"");
	say();
	var0003 = false;
	goto labelFunc04B7_014E;
labelFunc04B7_014A:
	message("\"To have found nothing yet? Ah, well. To return, please, when anything unusual is found. To suggest that you confront the suspect as soon as you have a clue. To wish to stop him before any damage is done to the altars.\"");
	say();
labelFunc04B7_014E:
	UI_remove_answer("evidence");
labelFunc04B7_0155:
	case "Quan" attend labelFunc04B7_0168:
	message("\"To be sad to have lost Quan to The Fellowship, human. To have been a good gargoyle when young, but to have fallen into bad company later. To have concentrated mostly on self-aggrandizement and hedonism in the last few years. To be a shame.\"");
	say();
	UI_remove_answer("Quan");
labelFunc04B7_0168:
	case "Runeb" attend labelFunc04B7_017B:
	message("\"To have been a sad case. To have wished to have been able to save him. To always have been uncontrollable, but to have gotten worse in the last few years. To have seemed to want to start as many fights as possible. To have found a reason for using his strength against all those weaker when to have joined The Fellowship.\"");
	say();
	UI_remove_answer("Runeb");
labelFunc04B7_017B:
	case "Inamo" attend labelFunc04B7_01D4:
	message("He smiles sadly, but with obvious pride.~");
	say();
	if (!gflags[0x023A]) goto labelFunc04B7_0194;
	message("\"To have been a fine young gargoyle. The pride of us all. To wish to know who was responsible for his dishonorable end.\"");
	say();
	goto labelFunc04B7_01CD;
labelFunc04B7_0194:
	message("\"To miss him greatly. To have raised him from an egg. To have been rather vocal in his disagreements with The Fellowship. To have felt it safer for him to leave.\"~~He sighs, then looks up hopefully.~~\"To have news of him?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_01C9;
	message("\"To be well?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04B7_01BB;
	message("\"To be good. To be hoping to hear from him soon.\"");
	say();
	goto labelFunc04B7_01C6;
labelFunc04B7_01BB:
	message("\"To be not well? To be terrible! To think there is anything to do to help?\"");
	say();
	UI_add_answer("too late");
labelFunc04B7_01C6:
	goto labelFunc04B7_01CD;
labelFunc04B7_01C9:
	message("\"Ah. Too bad. To be waiting long for news from him.\"");
	say();
labelFunc04B7_01CD:
	UI_remove_answer("Inamo");
labelFunc04B7_01D4:
	case "too late" attend labelFunc04B7_01EE:
	message("\"To be too late? To mean what by too late? To tell me what has happened!\"~~He seems very distraught.");
	say();
	UI_add_answer("murdered");
	UI_remove_answer("too late");
labelFunc04B7_01EE:
	case "murdered" attend labelFunc04B7_0206:
	message("\"To be murdered?\"~~He takes a step back, stunned by the news.~~\"To be murdered? To be unbelievable. To have no real enemies!\"~~He sighs heavily.~~\"To tell me, please, exactly what happened.\"~~You relate to him the particulars of Inamo's death. He sighs again.~~\"To be such a waste of gargoyle life. To be grateful if you would send news if you discover who was responsible for wanting him dead.\"~~ He is quiet for a few moments, getting accustomed to the situation.~~\"To apologize. To need some time to grieve. Please to come back later.\"~~He turns away.");
	say();
	UI_remove_answer("murdered");
	gflags[0x023A] = true;
	abort;
labelFunc04B7_0206:
	case "altars" attend labelFunc04B7_0244:
	UI_remove_answer("altars");
	message("\"To be caretaker and group leader for the altars of the three principles. To wish to make a donation?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_0240;
	message("\"Excellent. To which altar do you wish to donate?\"");
	say();
	UI_push_answers();
	UI_add_answer(["Control", "Passion", "Diligence"]);
	goto labelFunc04B7_0244;
labelFunc04B7_0240:
	message("\"Ah. To donate next time, perhaps.\"");
	say();
labelFunc04B7_0244:
	case "Control", "Passion", "Diligence" attend labelFunc04B7_02A2:
	message("\"To be an excellent choice. To meditate at the shrine for you for a donation of 5 gold. To be willing to donate 5 gold?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B7_028A;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04B7_0283;
	message("\"To meditate for you this evening, human. To wish you well in your journeys.\"");
	say();
	goto labelFunc04B7_0287;
labelFunc04B7_0283:
	message("\"To not have 5 gold? To return\tlater when you have the gold. To meditate for your success on your journeys.\"~~He smiles kindly.");
	say();
labelFunc04B7_0287:
	goto labelFunc04B7_028E;
labelFunc04B7_028A:
	message("\"Ah. To have misunderstood. To apologize. To let me know if you change your mind.\"~~He looks disappointed.");
	say();
labelFunc04B7_028E:
	UI_remove_answer(["Control", "Passion", "Diligence"]);
	UI_pop_answers();
labelFunc04B7_02A2:
	case "bye" attend labelFunc04B7_02AD:
	goto labelFunc04B7_02B0;
labelFunc04B7_02AD:
	goto labelFunc04B7_005E;
labelFunc04B7_02B0:
	endconv;
	message("\"To tell you goodbye for now, human. To return and be welcome.\"*");
	say();
labelFunc04B7_02B5:
	if (!(event == 0x0000)) goto labelFunc04B7_02C3;
	Func092F(0xFF49);
labelFunc04B7_02C3:
	return;
}


