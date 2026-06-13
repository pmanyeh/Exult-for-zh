#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045A object#(0x45A) ()
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

	if (!(event == 0x0001)) goto labelFunc045A_0598;
	UI_show_npc_face(0xFFA6, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFA6));
	var0002 = Func0909();
	var0003 = false;
	var0004 = UI_wearing_fellowship();
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc045A_0073;
	if (!(!(var0001 == 0x000F))) goto labelFunc045A_0073;
	var0005 = Func08FC(0xFFA6, 0xFFAF);
	if (!var0005) goto labelFunc045A_006E;
	message("Owen will not interrupt his participation in The Fellowship meeting to talk with you.*");
	say();
	abort;
	goto labelFunc045A_0073;
labelFunc045A_006E:
	message("\"I am late for The Fellowship Meeting! I cannot speak with thee now!\"*");
	say();
	abort;
labelFunc045A_0073:
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0040]) goto labelFunc045A_00A6;
	if (!gflags[0x0123]) goto labelFunc045A_00A6;
	UI_add_answer(["Crown Jewel", "Hook"]);
	var0003 = true;
labelFunc045A_00A6:
	if (!gflags[0x00FB]) goto labelFunc045A_00B3;
	UI_add_answer("ship");
labelFunc045A_00B3:
	if (!gflags[0x00F7]) goto labelFunc045A_00C0;
	UI_add_answer("statue is cancelled");
labelFunc045A_00C0:
	if (!(!gflags[0x0115])) goto labelFunc045A_00E0;
	message("You see a young man dressed in an expensive tunic. He is very serious.");
	say();
	gflags[0x0115] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFA6), 0x000B);
	goto labelFunc045A_00E4;
labelFunc045A_00E0:
	message("Owen looks at you and sniffs. \"It would appear thou dost wish to speak with me again.\"");
	say();
labelFunc045A_00E4:
	converse attend labelFunc045A_0585;
	case "name" attend labelFunc045A_0104:
	message("\"My name, ");
	message(var0002);
	message(", is Owen. It is a name I suspect thou shalt be hearing more of in the future.\"");
	say();
	gflags[0x0123] = true;
	UI_remove_answer("name");
labelFunc045A_0104:
	case "job", "statue is cancelled" attend labelFunc045A_0171:
	if (!gflags[0x011F]) goto labelFunc045A_0162;
	if (!(!gflags[0x00F7])) goto labelFunc045A_014D;
	message("He looks you in the eye and speaks without the slightest trace of modesty. \"I am,\" he says, \"the greatest shipwright in the history of Minoc. I am the greatest shipwright who has ever lived!\"");
	say();
	UI_add_answer(["greatest", "Minoc", "buy"]);
	if (!gflags[0x0040]) goto labelFunc045A_014A;
	if (!(!var0003)) goto labelFunc045A_014A;
	UI_add_answer(["Crown Jewel", "Hook"]);
labelFunc045A_014A:
	goto labelFunc045A_0158;
labelFunc045A_014D:
	message("\"After years of breaking my back trying to make something of this ungrateful little town, I'm giving up. I swear I will never build another ship as long as I live. That will teach them! No matter how they may beg or plead, I will not do it.\"");
	say();
	UI_add_answer("ungrateful");
labelFunc045A_0158:
	UI_remove_answer("statue is cancelled");
	goto labelFunc045A_0171;
labelFunc045A_0162:
	message("\"Well, I shall certainly forgive thy poor manners for I know how privileged thou must feel for meeting me, but thou must know that two people have just been discovered in the sawmill, having been murdered!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc045A_0171:
	case "greatest" attend labelFunc045A_0191:
	message("\"And dost thou know how I became that way? I shall tell thee! I started to hear a voice in mine head! Oh, I know that thou shalt think me mad...\"");
	say();
	UI_remove_answer("greatest");
	UI_add_answer(["mad", "voices"]);
labelFunc045A_0191:
	case "voices" attend labelFunc045A_01A4:
	message("\"These were not the voices of anyone I have ever known. But still these voices had a profound effect on me...\"");
	say();
	UI_remove_answer("voices");
labelFunc045A_01A4:
	case "mad" attend labelFunc045A_01C4:
	message("\"After searching for a meaning to this voice - which proved difficult, for how dost thou tell someone, especially a stranger, that thou art hearing a voice in thine head - I came across The Fellowship. They taught me what the voice was.\"");
	say();
	UI_remove_answer("mad");
	UI_add_answer(["voice", "Fellowship"]);
labelFunc045A_01C4:
	case "voice" attend labelFunc045A_01DE:
	message("\"This was the voice of reason within mine own mind which sought to guide my life in its proper direction. The Fellowship taught me how to trust this voice and heed what it says. And thou canst see the results in mine own life! I have mastered my craft and advanced the techniques of ship-building through the methods I have devised.\"");
	say();
	UI_remove_answer("voice");
	UI_add_answer("methods");
labelFunc045A_01DE:
	case "buy" attend labelFunc045A_02F9:
	if (!(var0001 == 0x0007)) goto labelFunc045A_02EE;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0281;
	message("Owen looks at you and suddenly seems flustered. \"Uh, I have no ships for sale presently. I have been working on a few improvements. But if thou wouldst, thou couldst commission me to build one for thee. A deed to one of the ships I build costs 1000 gold coins. Dost thou wish to buy one?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc045A_027D;
	var0007 = UI_remove_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc045A_0276;
	gflags[0x00FB] = true;
	message("\"'Tis money well spent, thou shalt see! I shall begin work immediately. I will be building based upon some of my more recent designs. I shall give thee thy ship's deed in advance\"");
	say();
	var0008 = UI_add_party_items(0x0001, 0x031D, 0x0010, 0x0002, false);
	if (!var0008) goto labelFunc045A_024A;
	message("\"It will be called the Excellencia.\"");
	say();
	goto labelFunc045A_0273;
labelFunc045A_024A:
	message("\"I would give thee thy deed but thou art carrying too much.\"");
	say();
	var0009 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc045A_026F;
	message("\"Take thy gold back! I cannot in good conscious keep it!\"");
	say();
	goto labelFunc045A_0273;
labelFunc045A_026F:
	message("\"I would give thee thy gold back but I seem to have misplaced it.\"");
	say();
labelFunc045A_0273:
	goto labelFunc045A_027A;
labelFunc045A_0276:
	message("\"I am dreadfully sorry,\" he sniffs, \"but thou dost not have enough gold.\"");
	say();
labelFunc045A_027A:
	goto labelFunc045A_0281;
labelFunc045A_027D:
	message("\"Art thou certain? Thou shalt find no better ships in all of Britannia! Very well, then!\"");
	say();
labelFunc045A_0281:
	message("\"Wouldst thou perhaps be interested in purchasing a fine sextant? I have one which I would be willing to part with for a fine bargain. The price is 150 gold. Art thou interested?\"");
	say();
	if (!Func090A()) goto labelFunc045A_02E7;
	message("\"Excellent! I knew that thou wouldst appreciate owning the sextant of Owen the shipwright. Thou art a fine person, able to discern those quality items which are worth a bit of extra coin.\"");
	say();
	var000A = UI_remove_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000A)) goto labelFunc045A_02B1;
	message("\"Thou knave! To get mine hopes up so, only to cruelly dash them. Thou dost not possess enough gold to buy my treasure. If thou dost return with more coinage, PERHAPS I will allow thee to bid on it again.\"");
	say();
	goto labelFunc045A_02E4;
labelFunc045A_02B1:
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045A_02E4;
	message("\"Thou dost not have enough strength to add my treasure to thy pack. Thou must dispose of some of thy worthless dross to make room for this beauty. I will await thy return to purchase the sextant at this fine, low price.\"");
	say();
	var000C = UI_add_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045A_02E4:
	goto labelFunc045A_02EB;
labelFunc045A_02E7:
	message("\"Hmph. Well, let it be known that thou didst pass up the chance to buy the sextant of the famous Owen the shipwright, and thou shalt be known for the knave and simpleton that thou art.\"");
	say();
labelFunc045A_02EB:
	goto labelFunc045A_02F2;
labelFunc045A_02EE:
	message("\"Mine establishment is presently closed. I do not wish to discuss business at this time.\"");
	say();
labelFunc045A_02F2:
	UI_remove_answer("buy");
labelFunc045A_02F9:
	case "methods" attend labelFunc045A_038E:
	message("\"I have even written a book describing the advances I have made in the methods of ship-building. It is very advanced but I have tried to write it so that it is accessible to the layman. Wouldst thou be interested in purchasing a copy?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045A_0383;
	message("\"Yes, of course thou wouldst.\"");
	say();
	var000E = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc045A_037C;
	var000F = UI_add_party_items(0x0001, 0x0282, 0x003B, 0xFE99, false);
	if (!var000F) goto labelFunc045A_0350;
	message("\"Here it is.\"");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0350:
	message("\"Thou art carrying too much to take thy book.\"");
	say();
	var0010 = UI_add_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0010) goto labelFunc045A_0375;
	message("\"I shall return thy money.\"");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0375:
	message("\"I wouldst give thee back thy gold but thou cannot take it.\"");
	say();
labelFunc045A_0379:
	goto labelFunc045A_0380;
labelFunc045A_037C:
	message("\"Thou dost not have enough money!\"");
	say();
labelFunc045A_0380:
	goto labelFunc045A_0387;
labelFunc045A_0383:
	message("\"Hmph! I suppose that it would be beyond thy comprehension, anyway.\"");
	say();
labelFunc045A_0387:
	UI_remove_answer("methods");
labelFunc045A_038E:
	case "ship" attend labelFunc045A_03ED:
	if (!(!gflags[0x00F7])) goto labelFunc045A_03A5;
	message("\"I can well understand thine impatience but I have just begun work on it. It shall be ready when I am finished with it. Now, until such time, I would appreciate it if thou wouldst not waste my valuable time.\"*");
	say();
	abort;
	goto labelFunc045A_03E6;
labelFunc045A_03A5:
	if (!(!gflags[0x00FC])) goto labelFunc045A_03E2;
	message("\"I cannot build thee a ship as I suspect we both know.\"");
	say();
	if (!gflags[0x00FB]) goto labelFunc045A_03DF;
	message("\"Nor can I take thy money for one. Here, I shall return it to thee.\"");
	say();
	var0011 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc045A_03DB;
	gflags[0x00FC] = true;
	goto labelFunc045A_03DF;
labelFunc045A_03DB:
	message("\"Oh, my, thou art too encumbered to take back thy 1000 gold coins! Come back when thine hands are less full!\"");
	say();
labelFunc045A_03DF:
	goto labelFunc045A_03E6;
labelFunc045A_03E2:
	message("\"I cannot help thee with that.\"");
	say();
labelFunc045A_03E6:
	UI_remove_answer("ship");
labelFunc045A_03ED:
	case "Minoc" attend labelFunc045A_040D:
	message("\"Despite all this business with murders, I must confess that I love it here. This is the place where I was born. They love me. They are going to be building a monument here in mine honor. I suppose I have been worthy of it, but still I can't help but be flattered.\"");
	say();
	UI_add_answer(["murders", "monument"]);
	UI_remove_answer("Minoc");
labelFunc045A_040D:
	case "ungrateful" attend labelFunc045A_0427:
	message("\"Apparently, building the greatest ships to ever set sail in history and all that that has done for Minoc are no longer enough! No! Thanks to that pompous idiot of a mayor I am denied the rightful tribute of which I have proven myself more than worthy. Design flaws, bah! How many ships has Mayor Burnside built in his miserable little life?!\"");
	say();
	UI_add_answer("there were deaths");
	UI_remove_answer("ungrateful");
labelFunc045A_0427:
	case "murders" attend labelFunc045A_0448:
	if (!(!gflags[0x0122])) goto labelFunc045A_043D;
	message("\"That is right. The sawmill is located southeast of town. Almost everyone in town is down there. Thou shouldst probably go down there if thou dost want to find out more. I abhor violence.\"");
	say();
	goto labelFunc045A_0441;
labelFunc045A_043D:
	message("He shakes his head slowly. \"They are going to be unveiling my monument sometime in the near future. Dost thou think that talk of these events will keep people away from the ceremony? That would be a tragedy!\"");
	say();
labelFunc045A_0441:
	UI_remove_answer("murders");
labelFunc045A_0448:
	case "there were deaths" attend labelFunc045A_0466:
	message("You tell him about the many innocent civilians who lost their lives on the ship he built. Owen shakes his head slowly. \"I do not know. I have no idea how it could have happened. It is difficult to conceive of the pain such great loss of life brings into this world. But I did my best when I built those ships. I did not want those men to die. Thou must believe me.\"");
	say();
	message("Owen appears distressed. \"The tribute to me is now no more than a tombstone.\"");
	say();
	UI_remove_answer("there were deaths");
	UI_add_answer("tribute");
labelFunc045A_0466:
	case "Fellowship" attend labelFunc045A_0498:
	if (!(!gflags[0x00F7])) goto labelFunc045A_0486;
	Func0919();
	message("\"The changes it has made in my personal life have helped me tremendously.\"");
	say();
	UI_add_answer("personal life");
	goto labelFunc045A_0491;
labelFunc045A_0486:
	message("\"Thou canst ask Elynor all about it unless she is not speaking to thee either. Perhaps the details of thy personal life will amuse her more than do mine.\"");
	say();
	UI_add_answer("personal life");
labelFunc045A_0491:
	UI_remove_answer("Fellowship");
labelFunc045A_0498:
	case "philosophy" attend labelFunc045A_04AA:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc045A_04AA:
	case "personal life" attend labelFunc045A_04CB:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04C4;
	message("\"My friend, there was a time when I thought that my life was at its end. I felt as though I had been swallowed into a cold, deep hole of darkness.\"");
	say();
	UI_add_answer("darkness");
labelFunc045A_04C4:
	UI_remove_answer("personal life");
labelFunc045A_04CB:
	case "darkness" attend labelFunc045A_04EC:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04E1;
	message("\"My very soul felt as though it had sunk into a place into which no light could enter... Soon after I discovered The Fellowship. The difference that it made in my life was miraculous.\"");
	say();
	goto labelFunc045A_04E5;
labelFunc045A_04E1:
	message("\"I have been having a difficult time lately trying to speak to Elynor. It seems that she has no time for me. Back when I was making preparations for the monument she was always stopping by and willing to have words with me.\"");
	say();
labelFunc045A_04E5:
	UI_remove_answer("darkness");
labelFunc045A_04EC:
	case "monument" attend labelFunc045A_04FF:
	message("\"Oh, thou canst ask anyone in town about it. They all know.\"");
	say();
	UI_remove_answer("monument");
labelFunc045A_04FF:
	case "tribute" attend labelFunc045A_0521:
	message("\"I know! My work will stand as my monument! My name will endure long after any statue has worn away to dust! People will remember -me-, I promise thee that!\"");
	say();
	message("And, with a dramatic flourish, Owen produces a dagger. Before you can stop him, he plunges it into his chest. He coughs loudly as blood spurts from his mouth, soaking his fine linen tunic in wine-red guilt. After a moment, it is all over. Owen, the greatest shipwright who ever lived, is dead.*");
	say();
	UI_kill_npc(UI_get_npc_object(0xFFA6));
	Func0911(0x0064);
	abort;
labelFunc045A_0521:
	case "Crown Jewel" attend labelFunc045A_054C:
	if (!(!gflags[0x00F9])) goto labelFunc045A_053B;
	message("\"The Crown Jewel was in town and left early this morning. It was scheduled to sail for Paws.\"");
	say();
	gflags[0x00F9] = true;
	goto labelFunc045A_0545;
labelFunc045A_053B:
	message("\"I have heard nothing more of the Crown Jewel since we last spoke of it, ");
	message(var0002);
	message(".\"");
	say();
labelFunc045A_0545:
	UI_remove_answer("Crown Jewel");
labelFunc045A_054C:
	case "Hook" attend labelFunc045A_0577:
	if (!(!gflags[0x00FA])) goto labelFunc045A_0566;
	message("\"I saw a man with a hook for a hand wandering around town last night.\"");
	say();
	gflags[0x00FA] = true;
	goto labelFunc045A_0570;
labelFunc045A_0566:
	message("\"I have heard nothing more of this man Hook since we last spoke of him, ");
	message(var0002);
	message(".\"");
	say();
labelFunc045A_0570:
	UI_remove_answer("Hook");
labelFunc045A_0577:
	case "bye" attend labelFunc045A_0582:
	goto labelFunc045A_0585;
labelFunc045A_0582:
	goto labelFunc045A_00E4;
labelFunc045A_0585:
	endconv;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0594;
	message("\"Tired of benefitting from my presence? Very well. I shall see thee again, I hope!\"*");
	say();
	goto labelFunc045A_0598;
labelFunc045A_0594:
	message("\"Be on thy way, then. Time is fleeting, as is fame.\"*");
	say();
labelFunc045A_0598:
	if (!(event == 0x0000)) goto labelFunc045A_05A6;
	Func092E(0xFFA6);
labelFunc045A_05A6:
	return;
}


