#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CF 0x8CF ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04FA object#(0x4FA) ()
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

	if (!(event == 0x0001)) goto labelFunc04FA_04C6;
	UI_show_npc_face(0xFF06, 0x0000);
	var0000 = Func0908();
	var0001 = false;
	var0002 = Func08F7(0xFF64);
	var0003 = UI_part_of_day();
	var0004 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0003 == 0x0007)) goto labelFunc04FA_0064;
	if (!gflags[0x01FC]) goto labelFunc04FA_005C;
	message("Rankin is unable to speak with you now, for he is conducting the Fellowship meeting.*");
	say();
	Func08CF();
	abort;
	goto labelFunc04FA_0064;
labelFunc04FA_005C:
	message("The man is too busy to speak with you now, for he is conducting the Fellowship meeting.*");
	say();
	Func08CF();
	abort;
labelFunc04FA_0064:
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!gflags[0x0284]) goto labelFunc04FA_0084;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04FA_0084:
	if (!(!gflags[0x01FC])) goto labelFunc04FA_0096;
	message("The man greets you with a pleasant smile.");
	say();
	gflags[0x01FC] = true;
	goto labelFunc04FA_00B8;
labelFunc04FA_0096:
	message("Rankin smiles. \"Please tell me how I may be of assistance, ");
	message(var0000);
	message(".\"");
	say();
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_00B8;
	if (!gflags[0x020B]) goto labelFunc04FA_00B8;
	UI_add_answer("Balayna's accusation");
labelFunc04FA_00B8:
	if (!gflags[0x020F]) goto labelFunc04FA_00C5;
	UI_add_answer("merchant");
labelFunc04FA_00C5:
	if (!(gflags[0x020A] && (!gflags[0x0210]))) goto labelFunc04FA_00D7;
	UI_add_answer("Balayna");
labelFunc04FA_00D7:
	converse attend labelFunc04FA_04A8;
	case "name" attend labelFunc04FA_0110:
	message("\"Thou mayest call me Rankin, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x020B] = true;
	UI_remove_answer("name");
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0110;
	if (!(!var0001)) goto labelFunc04FA_0110;
	UI_add_answer("Balayna's accusation");
labelFunc04FA_0110:
	case "job" attend labelFunc04FA_014F:
	message("\"I am the new branch leader of The Fellowship here in Moonglow.\"");
	say();
	if (!gflags[0x01F5]) goto labelFunc04FA_0129;
	UI_add_answer("voice");
labelFunc04FA_0129:
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0142;
	if (!(!var0001)) goto labelFunc04FA_0142;
	UI_add_answer("Balayna's accusation");
labelFunc04FA_0142:
	UI_add_answer(["new", "Moonglow"]);
labelFunc04FA_014F:
	case "Balayna" attend labelFunc04FA_01E0:
	Func0911(0x0032);
	if (!gflags[0x020D]) goto labelFunc04FA_0177;
	message("\"What dost thou want to know about her, ");
	message(var0000);
	message("?\"");
	say();
	UI_add_answer("liqueur");
	goto labelFunc04FA_01D9;
labelFunc04FA_0177:
	if (!gflags[0x020C]) goto labelFunc04FA_01B0;
	var0005 = UI_get_timer(0x0008);
	if (!(var0005 > 0x0006)) goto labelFunc04FA_0198;
	message("\"She has left for Britain on important business,\" he smiles. \"I do not expect her return any time soon.\"");
	say();
	goto labelFunc04FA_01AD;
labelFunc04FA_0198:
	message("\"Oh? Thou hast not seen her lately, either? I wonder what she has been up to.\" He gives a slight smile.");
	say();
	if (!var0004) goto labelFunc04FA_01AD;
	message("The Cube vibrates. \"Actually, I know exactly where she is.\"");
	say();
	UI_add_answer("where");
labelFunc04FA_01AD:
	goto labelFunc04FA_01D9;
labelFunc04FA_01B0:
	if (!var0002) goto labelFunc04FA_01BD;
	message("\"She is right there,\" he says, pointing to Balayna.");
	say();
	goto labelFunc04FA_01D9;
labelFunc04FA_01BD:
	message("\"I have not seen her in some time, ");
	message(var0000);
	message(". Perhaps thou mayest find her in her house.\"");
	say();
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
	UI_set_timer(0x0008);
labelFunc04FA_01D9:
	UI_remove_answer("Balayna");
labelFunc04FA_01E0:
	case "where" attend labelFunc04FA_01F3:
	message("\"She has conveniently stopped breathing!\" Rankin laughs.");
	say();
	UI_remove_answer("where");
labelFunc04FA_01F3:
	case "liqueur" attend labelFunc04FA_0227:
	message("\"Yes, I told thee the merchant brought it from Britain. Didst thou give it to her?");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04FA_0223;
	message("\"What then,\" he asks, \"is the problem?\"");
	say();
	UI_push_answers();
	UI_add_answer(["she died", "no problem"]);
	goto labelFunc04FA_0227;
labelFunc04FA_0223:
	message("\"Ah, well. Then I hope thou wilt have the chance later.\" He stares at you oddly for a moment, and then smiles again.");
	say();
labelFunc04FA_0227:
	case "no problem" attend labelFunc04FA_023E:
	message("\"Excellent, then.\"");
	say();
	UI_remove_answer("no problem");
	UI_pop_answers();
labelFunc04FA_023E:
	case "she died" attend labelFunc04FA_0268:
	gflags[0x0210] = true;
	UI_remove_answer(["no problem", "she died"]);
	message("\"What!\" he appears stunned. \"Died? How is that possible?\"");
	say();
	UI_add_answer(["don't know", "liqueur"]);
labelFunc04FA_0268:
	case "don't know" attend labelFunc04FA_027B:
	message("\"Well this is truly a tragedy! Please, ");
	message(var0000);
	message(", I would prefer to be alone now. If thou wouldst be so kind...\"*");
	say();
	abort;
labelFunc04FA_027B:
	case "liqueur" attend labelFunc04FA_02B4:
	UI_remove_answer(["liqueur", "don't know"]);
	UI_pop_answers();
	message("\"The liqueur? Why, art thou implying that the merchant had cause to kill her? That is absurd!\" He appears thoughtful.~ \"Or perhaps not. Mayhaps we will look into that, what sayest thou?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04FA_02AF;
	message("\"Excellent. Let me know if thou dost find any information. Meanwhile, I will make arrangements for her funeral.\" He shakes his head sadly.");
	say();
	gflags[0x020F] = true;
	goto labelFunc04FA_02B4;
labelFunc04FA_02AF:
	message("\"Very well, then I must conduct the search on mine own, -after- I have arranged for the funeral.\"*");
	say();
	abort;
labelFunc04FA_02B4:
	case "merchant" attend labelFunc04FA_02F5:
	message("\"Dost thou have any news of the travelling merchant who killed Balayna?");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04FA_02EA;
	message("\"Very good, ");
	message(var0000);
	message(". What is thy news?\"");
	say();
	UI_push_answers();
	UI_add_answer(["not ready", "dead"]);
	goto labelFunc04FA_02EE;
labelFunc04FA_02EA:
	message("\"Ah, well. Keep searching. I am positive thou wilt come across some information soon!\"");
	say();
labelFunc04FA_02EE:
	UI_remove_answer("merchant");
labelFunc04FA_02F5:
	case "not ready" attend labelFunc04FA_0312:
	message("\"Very well, ");
	message(var0000);
	message(", I can wait until thou hast learned more.\"");
	say();
	UI_remove_answer("not ready");
	UI_pop_answers();
labelFunc04FA_0312:
	case "dead" attend labelFunc04FA_032D:
	message("\"Really!\" he seems genuinely surprised. \"How, ah, wonderful.\" Then I guess the murder has been avenged.\"");
	say();
	gflags[0x020F] = false;
	UI_remove_answer("dead");
	UI_pop_answers();
labelFunc04FA_032D:
	case "new" attend labelFunc04FA_0340:
	message("\"He grins, obviously embarrassed. \"I am sorry. Though the branch opened here several years ago, it is the newest branch on Britannia. I still consider myself a new branch head here.\"");
	say();
	UI_remove_answer("new");
labelFunc04FA_0340:
	case "Moonglow" attend labelFunc04FA_035A:
	message("\"Ah, yes, Moonglow. It is a pleasant town. It is possible to find all sorts of people here.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("Moonglow");
labelFunc04FA_035A:
	case "people" attend labelFunc04FA_036D:
	message("\"I am sorry, but I prefer not to gossip.\"");
	say();
	UI_remove_answer("people");
labelFunc04FA_036D:
	case "Fellowship" attend labelFunc04FA_03AB:
	var0009 = UI_wearing_fellowship();
	if (!var0009) goto labelFunc04FA_0396;
	if (!gflags[0x0006]) goto labelFunc04FA_038F;
	message("\"As is customary, our meetings are at 9 p.m. Please feel free to join us.\"");
	say();
	goto labelFunc04FA_0393;
labelFunc04FA_038F:
	message("\"Thou shouldst really return thy medallion to the person from whom it came. Only Fellowship members are permitted to wear them.\"");
	say();
labelFunc04FA_0393:
	goto labelFunc04FA_03A4;
labelFunc04FA_0396:
	Func0919();
	message("\"If thou hast a free moment, I would be quite happy to discuss our philosophy with thee.\"");
	say();
	UI_add_answer("philosophy");
labelFunc04FA_03A4:
	UI_remove_answer("Fellowship");
labelFunc04FA_03AB:
	case "philosophy" attend labelFunc04FA_03BD:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc04FA_03BD:
	case "voice" attend labelFunc04FA_03DD:
	if (!gflags[0x0006]) goto labelFunc04FA_03D2;
	message("\"Relax, friend, thou wilt hear when the time is right.\"");
	say();
	goto labelFunc04FA_03D6;
labelFunc04FA_03D2:
	message("\"There is an inner voice that exists within each and every one of us. This voice is our companion and guide.~~\"The deeper one's involvement with The Fellowship, the more often one is able to hear one's inner voice.\"");
	say();
labelFunc04FA_03D6:
	UI_remove_answer("voice");
labelFunc04FA_03DD:
	case "Elizabeth and Abraham" attend labelFunc04FA_0402:
	if (!(!gflags[0x0243])) goto labelFunc04FA_03F7;
	message("\"What dear people! They were just here in order to give me my training session. I was just appointed branch leader. This is a new branch, thou knowest. Anyway, Elizabeth and Abraham left to travel all the way to the gargoyle island, Terfin.\"");
	say();
	gflags[0x01EF] = true;
	goto labelFunc04FA_03FB;
labelFunc04FA_03F7:
	message("\"I have not seen them since they gave me my training session, many days ago.\"");
	say();
labelFunc04FA_03FB:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04FA_0402:
	case "Balayna's accusation" attend labelFunc04FA_049A:
	if (!var0002) goto labelFunc04FA_0417;
	message("\"Shhh! Talk to me about it later,\" he whispers, gesturing subtly towards Balayna, \"when she is not around.\"");
	say();
	goto labelFunc04FA_048F;
labelFunc04FA_0417:
	message("He begins to look amused.~~\"I would not let it worry thee too much, ");
	message(var0000);
	message(". I am afraid Balayna is a bit too ambitious. I would expect she overheard one of my conversion speeches and misunderstood my words. I will have to discuss this with her when I have more time so I may allay her fears.\" His eyes widen, as if he is remembering something.~~\"I had forgotten, she requested a small vial of liqueur from an itinerant merchant who would be passing through Britain. He brought it here a few days ago and I have not had a chance to give it to her. Wouldst thou be willing to deliver it to her for me, ");
	message(var0000);
	message("?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04FA_0475;
	message("\"Excellent, my friend.\"");
	say();
	var000B = UI_add_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var000B) goto labelFunc04FA_045C;
	message("\"I thank thee.\" He gives you the vial of liquor.");
	say();
	gflags[0x020E] = true;
	goto labelFunc04FA_0472;
labelFunc04FA_045C:
	message("\"Ah, well, thou art carrying too much. I will simply have to save it for when I have time to talk with her. Thank thee anyway.\"");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_0472:
	goto labelFunc04FA_048B;
labelFunc04FA_0475:
	message("\"Very well. I will have to save it for when I have time to talk with her. Thank thee anyway.\"");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_048B:
	gflags[0x020A] = true;
labelFunc04FA_048F:
	UI_remove_answer("Balayna's accusation");
	var0001 = true;
labelFunc04FA_049A:
	case "bye" attend labelFunc04FA_04A5:
	goto labelFunc04FA_04A8;
labelFunc04FA_04A5:
	goto labelFunc04FA_00D7;
labelFunc04FA_04A8:
	endconv;
	if (!gflags[0x0006]) goto labelFunc04FA_04B6;
	message("\"May the triad guide thy life.\"*");
	say();
	goto labelFunc04FA_04C6;
labelFunc04FA_04B6:
	message("\"Shouldst thou find an interest in The Fellowship, ");
	message(var0000);
	message(", seek Batlin in Britain. Farewell, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04FA_04C6:
	if (!(event == 0x0000)) goto labelFunc04FA_04D4;
	Func092E(0xFF06);
labelFunc04FA_04D4:
	return;
}


