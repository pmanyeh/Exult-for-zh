#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0840 0x840 ();
extern void Func092E 0x92E (var var0000);

void Func04F6 object#(0x4F6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04F6_02D2;
	UI_show_npc_face(0xFF0A, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0047;
	UI_add_answer(["Wisps", "notebook"]);
labelFunc04F6_0047:
	if (!gflags[0x0196]) goto labelFunc04F6_0054;
	UI_add_answer("answers");
labelFunc04F6_0054:
	if (!(!gflags[0x0189])) goto labelFunc04F6_0066;
	message("You see a large man with an almost cunning, erudite aura about him.");
	say();
	gflags[0x0189] = true;
	goto labelFunc04F6_006A;
labelFunc04F6_0066:
	message("\"Hello, again,\" Alagner says.");
	say();
labelFunc04F6_006A:
	converse attend labelFunc04F6_02CD;
	case "name" attend labelFunc04F6_00B4:
	message("The sage smiles and nods his head. \"My name is Alagner. And who art thou?\"");
	say();
	UI_push_answers();
	var0002 = Func090B([var0000, "Avatar"]);
	if (!(var0002 == var0000)) goto labelFunc04F6_009B;
	message("\"I see. Nice to meet thee. Go away. I am busy.\"*");
	say();
	abort;
labelFunc04F6_009B:
	if (!(var0002 == "Avatar")) goto labelFunc04F6_00B4;
	message("Alagner's eyes widen.~~\"By the skies above! I do recognize thee! This is quite an honor! What may I do for thee?\"");
	say();
	UI_pop_answers();
	UI_remove_answer("name");
labelFunc04F6_00B4:
	case "job" attend labelFunc04F6_00CD:
	message("\"My profession -- rather, my destiny -- is to learn and know all things. I came to New Magincia to build my workshop and do so.\"");
	say();
	UI_add_answer(["New Magincia", "workshop"]);
labelFunc04F6_00CD:
	case "New Magincia" attend labelFunc04F6_00E7:
	message("The sage sighs. \"I left the Britannian mainland to come to the relative peace and quiet of New Magincia. I am content here because it is isolated and free from... the filth and corruption going on in Britannia. Not many see it.\"");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer("corruption");
labelFunc04F6_00E7:
	case "workshop" attend labelFunc04F6_0101:
	message("\"This is my workshop. I peruse my books and papers here. Occasionally, I invent things, such as this crystal ball.\"");
	say();
	UI_remove_answer("workshop");
	UI_add_answer("crystal ball");
labelFunc04F6_0101:
	case "crystal ball" attend labelFunc04F6_0114:
	message("\"It is a device for recording. If I forget a procedure or a step in an experiment, I may look into the crystal ball and see yesterday's events. Please, feel free to use it. Thou wilt see what I was doing yesterday.\"");
	say();
	UI_remove_answer("crystal ball");
labelFunc04F6_0114:
	case "Wisps" attend labelFunc04F6_0127:
	message("\"They are unusually aloof creatures of another dimension. Thou wilt think they are thy friends, but they could very well be spying on -thee- for someone else! They have no loyalties to good or evil -- all they care about is the acquisition of information -- how they acquire it is sometimes honorable, sometimes not.\"");
	say();
	UI_remove_answer("Wisps");
labelFunc04F6_0127:
	case "corruption" attend labelFunc04F6_0147:
	message("\"The Britannian people are becoming careless and lazy. They do not seek true knowledge. They do not respect their land. They do not respect each other. The resources of our land are being wasted. Miners are experimenting with dangerous reagents. There is an evil in the land, and I am not so sure that it is in the people themselves.\"");
	say();
	UI_remove_answer("corruption");
	UI_add_answer(["true knowledge", "evil"]);
labelFunc04F6_0147:
	case "true knowledge" attend labelFunc04F6_015A:
	message("\"True knowledge is the only way to complete fulfillment.\"");
	say();
	UI_remove_answer("true knowledge");
labelFunc04F6_015A:
	case "evil" attend labelFunc04F6_0193:
	if (!var0001) goto labelFunc04F6_0176;
	message("\"Thou art a member of The Fellowship, I see. Thou must not know everything about them. If thou didst, thou wouldst not be a member!");
	say();
	UI_add_answer("under cover");
	goto labelFunc04F6_0181;
labelFunc04F6_0176:
	message("\"Thou hast heard of The Fellowship by now, I am sure.");
	say();
	UI_add_answer("suspect");
labelFunc04F6_0181:
	message("\"They are cunning and two-faced. I am working on obtaining proof of this.\"");
	say();
	UI_remove_answer("evil");
	UI_add_answer("proof");
labelFunc04F6_0193:
	case "proof" attend labelFunc04F6_01B3:
	message("\"I am documenting this information in my notebook.\"");
	say();
	UI_remove_answer("proof");
	UI_add_answer(["information", "notebook"]);
labelFunc04F6_01B3:
	case "information" attend labelFunc04F6_01C6:
	message("\"It is all contained within the notebook.\"");
	say();
	UI_remove_answer("information");
labelFunc04F6_01C6:
	case "under cover" attend labelFunc04F6_01D9:
	message("\"Thou didst join The Fellowship to study their ways? Thou dost suspect them as well? Perhaps thou hast more substance to thee than I thought. We are working towards the same goal.\"");
	say();
	UI_remove_answer("under cover");
labelFunc04F6_01D9:
	case "suspect" attend labelFunc04F6_01EC:
	message("\"Thou dost suspect The Fellowship of foul deeds? Well then! Thou art perceptive indeed! Perhaps we are working toward the same goal!\"");
	say();
	UI_remove_answer("suspect");
labelFunc04F6_01EC:
	case "notebook" attend labelFunc04F6_0219:
	message("\"It is hidden in a safe place, along with mine other treasured sources of knowledge.\"");
	say();
	if (!(gflags[0x0133] && (!gflags[0x0196]))) goto labelFunc04F6_0212;
	message("Alagner listens as you tell him you would like to borrow the notebook.");
	say();
	message("\"Since thou art on an honorable quest, I suppose I might allow thee to borrow it if thou dost give me thy word that thou wilt return it, and if thou dost offer proof of thine eagerness to learn the true knowledge of the world.\"");
	say();
	UI_add_answer("learn");
labelFunc04F6_0212:
	UI_remove_answer("notebook");
labelFunc04F6_0219:
	case "learn" attend labelFunc04F6_0265:
	message("\"Very well. Dost thou know the answers to the questions of Life and Death?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04F6_0244;
	if (!gflags[0x0196]) goto labelFunc04F6_023D;
	Func0840();
	goto labelFunc04F6_0241;
labelFunc04F6_023D:
	message("\"I do not believe thou dost.");
	say();
labelFunc04F6_0241:
	goto labelFunc04F6_0248;
labelFunc04F6_0244:
	message("\"No, of course thou dost not.");
	say();
labelFunc04F6_0248:
	if (!(!gflags[0x017C])) goto labelFunc04F6_025E;
	message("\"Only those souls who have passed on from this life know these things. Seek out the spirit of The Tortured One. Ask him what the answers are to the questions of life and death. When thou dost return with the correct answer, I will believe that thou art sincere in thy quest for knowledge. Only then will I allow thee to borrow the notebook.\"");
	say();
	UI_add_answer("Tortured One");
	gflags[0x017C] = true;
labelFunc04F6_025E:
	UI_remove_answer("learn");
labelFunc04F6_0265:
	case "Tortured One" attend labelFunc04F6_027F:
	message("\"Alas, he is a poor soul who is doomed to haunt his abode throughout eternity.\"");
	say();
	UI_remove_answer("Tortured One");
	UI_add_answer("abode");
labelFunc04F6_027F:
	case "abode" attend labelFunc04F6_0292:
	message("\"Seek him out in Skara Brae. But be careful. It is a dangerous place. I should also advise thee that thou must use Seance Spells to speak with anyone on that island. They are all undead.\"");
	say();
	UI_remove_answer("abode");
labelFunc04F6_0292:
	case "answers" attend labelFunc04F6_02BF:
	message("\"Thou hast spoken to the Tortured One and learned the answers to the questions of Life and Death?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04F6_02B4;
	message("\"Then what are the answers?\"");
	say();
	Func0840();
	goto labelFunc04F6_02B8;
labelFunc04F6_02B4:
	message("\"Do not return until thou hast done so.\"");
	say();
labelFunc04F6_02B8:
	UI_remove_answer("answers");
labelFunc04F6_02BF:
	case "bye" attend labelFunc04F6_02CA:
	goto labelFunc04F6_02CD;
labelFunc04F6_02CA:
	goto labelFunc04F6_006A;
labelFunc04F6_02CD:
	endconv;
	message("\"Farewell. May thy journeys be profitable.\"*");
	say();
labelFunc04F6_02D2:
	if (!(event == 0x0000)) goto labelFunc04F6_02E0;
	Func092E(0xFF0A);
labelFunc04F6_02E0:
	return;
}


