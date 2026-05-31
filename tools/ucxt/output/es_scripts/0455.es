#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0455 object#(0x455) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0455_01D9;
	UI_show_npc_face(0xFFAB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0110])) goto labelFunc0455_0041;
	message("You see a handsome craftsman with an intense, piercing gaze.");
	say();
	gflags[0x0110] = true;
	goto labelFunc0455_0045;
labelFunc0455_0041:
	message("Gladstone shakes your hand and you can feel just a trace of sculptor's clay clinging to his palm. Although he hardly knows you, he treats you like an old friend.");
	say();
labelFunc0455_0045:
	converse attend labelFunc0455_01D4;
	case "name" attend labelFunc0455_0061:
	message("\"My name is Gladstone, ");
	message(var0000);
	message(". At thy service.\"");
	say();
	UI_remove_answer("name");
labelFunc0455_0061:
	case "job" attend labelFunc0455_0095:
	if (!gflags[0x011F]) goto labelFunc0455_0086;
	message("\"I am a glassblower and a sculptor. I make mostly bottles and bowls. But in my time I have constructed all manners of statuary out of glass as well.\"");
	say();
	UI_add_answer(["glass", "Artist's Guild", "Minoc"]);
	goto labelFunc0455_0095;
labelFunc0455_0086:
	message("The man's eyes study you for a moment. \"Thou dost not know what has happened? William, our local Sawyer found two gypsies murdered in his sawmill.\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0455_0095:
	case "Minoc" attend labelFunc0455_00BB:
	message("\"There is active commerce here in Minoc sufficient to keep the Artist's Guild financially solvent. But in recent weeks I have come to fear we may not keep it going for very much longer. Unlike The Fellowship or Owen's monument, we do not have much political power. Now other events make our troubles seem less important.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["Fellowship", "monument", "power", "events"]);
labelFunc0455_00BB:
	case "power" attend labelFunc0455_00CE:
	message("\"The Artist's Guild is taxed mercilessly by the Britannian Tax Council. Even in our best year it is a struggle to make ends meet. It seems that we are not considered important enough to be given an even chance.\"");
	say();
	UI_remove_answer("power");
labelFunc0455_00CE:
	case "events" attend labelFunc0455_00E8:
	message("\"Surely thou hast heard about the murders of Frederico and Tania?!\"");
	say();
	UI_remove_answer("events");
	UI_add_answer("murders");
labelFunc0455_00E8:
	case "Artist's Guild" attend labelFunc0455_00FB:
	message("\"The Artist's Guild is a group of local craftsmen. We sell our wares here in Minoc. While we are organized as a guild of equal members, I am tentatively the Guild head.\"");
	say();
	UI_remove_answer("Artist's Guild");
labelFunc0455_00FB:
	case "murders" attend labelFunc0455_0115:
	message("\"I shudder to think such foul deeds are so freely committed in our fair town. Art thou investigating it? I wish thee all success in tracking the culprit. I barely knew Frederico or Tania, but I did meet their son Sasha once.\"");
	say();
	UI_add_answer("Sasha");
	UI_remove_answer("murders");
labelFunc0455_0115:
	case "Sasha" attend labelFunc0455_0128:
	message("\"He befriended Seara and stayed the night with us once. He seemed like a nice young man, but misguided.\"");
	say();
	UI_remove_answer("Sasha");
labelFunc0455_0128:
	case "Fellowship" attend labelFunc0455_015D:
	message("\"We do not get along very well with those people. I believe we have been unofficially marked as enemies of The Fellowship ever since all of the members of the Artist's Guild refused Elynor's invitation to join. They dislike us because they consider us to be indisposed toward Unity.\"");
	say();
	if (!var0001) goto labelFunc0455_0156;
	message("\"Dost thou think of us as thine enemy?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0455_0152;
	message("\"Then get out of my sight! I do not wish to speak with thee!\"");
	say();
	abort;
	goto labelFunc0455_0156;
labelFunc0455_0152:
	message("\"Then I shall give thee the benefit of the doubt for now. But know that I do what I must to protect our Guild.\"");
	say();
labelFunc0455_0156:
	UI_remove_answer("Fellowship");
labelFunc0455_015D:
	case "monument" attend labelFunc0455_0186:
	if (!(!gflags[0x00F7])) goto labelFunc0455_017A;
	message("\"Owen the shipwright is commissioning a statue of himself to be built in the center of town. The Artist's Guild decided to have nothing to do with this foolishness, of course. But just the word of this statue has spread and now orders are coming in from all over Britannia. Merchants want to have a ship built by the 'famous' Owen, master shipwright of Minoc.\"");
	say();
	UI_add_answer("statue");
	goto labelFunc0455_017F;
labelFunc0455_017A:
	message("\"Oh, yes, that reminds me! I cannot speak for long, I'm afraid. There is, after all, that barren slab in the center of town with nothing for it now. The Mayor has commissioned us to create something to fill the empty space. I don't want to say anything about it other than it's going to be wonderful. It will not be ready for quite a while but once it is, I hope thou wilt be able to return to Minoc then and see it. In better times perhaps. Farewell, then.\"*");
	say();
	abort;
labelFunc0455_017F:
	UI_remove_answer("monument");
labelFunc0455_0186:
	case "statue" attend labelFunc0455_01A0:
	message("\"I fear we have grievously miscalculated by thinking that if we boycotted the statue, it would not be built. It seems all the talk of it has made Owen into some sort of bizarre legend around this area, and the bloody statue hasn't even gone up yet! But that, I fear, is not the worst of the situation.\"");
	say();
	UI_remove_answer("statue");
	UI_add_answer("worst");
labelFunc0455_01A0:
	case "worst" attend labelFunc0455_01B3:
	message("\"Once the statue is built, orders for ship-building are bound to increase even more! It won't take long before all local commerce will become affected by it. Owen will be purchasing more of the local resources, which will cause prices to rise, especially at the sawmill, and that will surely force the Artist's Guild into bankruptcy.\"");
	say();
	UI_remove_answer("worst");
labelFunc0455_01B3:
	case "glass" attend labelFunc0455_01C6:
	message("\"I regret that I do not have any of my work for sale at present. Like our other artists I have a backlog of orders that will keep me busy for the foreseeable future. But there are several examples of my work, of which I am most proud, in the Guild Hall on display. If thou art interested, please have a look at them.\"");
	say();
	UI_remove_answer("glass");
labelFunc0455_01C6:
	case "bye" attend labelFunc0455_01D1:
	goto labelFunc0455_01D4;
labelFunc0455_01D1:
	goto labelFunc0455_0045;
labelFunc0455_01D4:
	endconv;
	message("\"Good journey, my friend.\"*");
	say();
labelFunc0455_01D9:
	if (!(event == 0x0000)) goto labelFunc0455_01E7;
	Func092E(0xFFAB);
labelFunc0455_01E7:
	return;
}


