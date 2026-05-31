#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0471 object#(0x471) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0471_02BA;
	UI_show_npc_face(0xFF8F, 0x0000);
	var0000 = Func0908();
	var0001 = Func08F7(0xFFFF);
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x014B])) goto labelFunc0471_0047;
	message("You see a horse. \"What else did you expect to see?\"");
	say();
	gflags[0x014B] = true;
	goto labelFunc0471_0051;
labelFunc0471_0047:
	message("\"What now, ");
	message(var0000);
	message("?\" asks Smith.");
	say();
labelFunc0471_0051:
	converse attend labelFunc0471_02B9;
	case "name" attend labelFunc0471_00A1:
	message("\"Yes, I have a name.\"");
	say();
	UI_remove_answer("name");
	if (!var0001) goto labelFunc0471_009A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Scoundrel! When thou art asked thy name, thou shouldst respond politely and accurately! The Avatar has just asked thee for -thy- name.\"");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("\"My name? You can call\tme what you want, but I will only respond to Smith.\"");
	say();
	UI_add_answer("Smith");
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0471_00A1;
labelFunc0471_009A:
	UI_add_answer("-thy- name");
labelFunc0471_00A1:
	case "-thy- name" attend labelFunc0471_00BB:
	message("\"My name? You can call\tme what you want, but I will only respond to Smith.\"");
	say();
	UI_add_answer("Smith");
	UI_remove_answer("-thy- name");
labelFunc0471_00BB:
	case "job" attend labelFunc0471_00F0:
	message("\"Job? -Job-? I'm a horse, what kind of job could I have?\" He looks off in the distance. \"I can see it now: Smith -- Baker extraordinaire.~~\"Actually, I have gotten quite good at interior decorating. See how I arranged my abode? You like it, don't you?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0471_00EB;
	message("\"Good. I will let you continue talking to me then! Which do you prefer, my living room or my bedroom?\"");
	say();
	UI_push_answers();
	UI_add_answer(["living room", "bedroom"]);
	goto labelFunc0471_00F0;
labelFunc0471_00EB:
	message("\"That's funny, I feel the same way about you!\"*");
	say();
	abort;
labelFunc0471_00F0:
	case "living room", "bedroom" attend labelFunc0471_0110:
	message("\"You always did have bad taste!\"");
	say();
	UI_remove_answer(["living room", "bedroom"]);
	UI_pop_answers();
labelFunc0471_0110:
	case "Smith" attend labelFunc0471_0165:
	if (!var0002) goto labelFunc0471_0127;
	var0004 = "still want";
	goto labelFunc0471_012D;
labelFunc0471_0127:
	var0004 = "want";
labelFunc0471_012D:
	message("\"Yep, that's what I told you to call me. Oh, I get it! You ");
	message(var0004);
	message(" something from me, don't you?");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0471_0160;
	message("\"I thought as much. You've always been a selfish one. What do you want? Now, let's see... Money? Advice?\tHappiness? No, you usually want a clue of some sort, don't you. Of course, you may have become altruistic over the past 200 years....~~\"I know! You want to save Britannia!\"");
	say();
	UI_add_answer(["money", "advice", "a clue", "happiness", "to save Britannia"]);
	goto labelFunc0471_0165;
labelFunc0471_0160:
	message("\"Then what are you talking to me for?\"*");
	say();
	abort;
labelFunc0471_0165:
	case "money" attend labelFunc0471_0187:
	message("\"From a horse? Right! Like I've got some to give you.\"");
	say();
	UI_remove_answer(["money", "advice", "a clue", "happiness", "to save Britannia"]);
labelFunc0471_0187:
	case "advice" attend labelFunc0471_0194:
	message("\"Don't talk to horses!\"*");
	say();
	abort;
labelFunc0471_0194:
	case "happiness" attend labelFunc0471_01B6:
	message("\"Who doesn't?\"");
	say();
	UI_remove_answer(["money", "advice", "a clue", "happiness", "to save Britannia"]);
labelFunc0471_01B6:
	case "to save Britannia" attend labelFunc0471_01D8:
	message("\"You really expect me to believe that? You're just in this for the money.\"");
	say();
	UI_remove_answer(["money", "advice", "a clue", "happiness", "to save Britannia"]);
labelFunc0471_01D8:
	case "a clue" attend labelFunc0471_020D:
	message("\"Now we're getting to the nitty-gritty. O.K., I'll give you a clue, but what's in it for me? Let me guess. Money? Love? No, knowing you it's probably nothing. With any luck, you'll go away and leave me alone.\"");
	say();
	UI_remove_answer(["money", "advice", "a clue", "happiness", "to save Britannia"]);
	UI_add_answer(["money", "love", "nothing", "will not make you glue"]);
labelFunc0471_020D:
	case "nothing" attend labelFunc0471_021A:
	message("\"I've already got that!\"*");
	say();
	abort;
labelFunc0471_021A:
	case "money" attend labelFunc0471_0227:
	message("\"Sure! Like I have a use for that!\"*");
	say();
	abort;
labelFunc0471_0227:
	case "love" attend labelFunc0471_0234:
	message("\"Sorry, I don't get into that.\"*");
	say();
	abort;
labelFunc0471_0234:
	case "will not make you glue" attend labelFunc0471_0260:
	message("\"Threats, huh? And how do you expect me to respond to that? With courtesy and open hooves?~~ \"Tell you what: you go away and leave me alone, and I'll tell you a clue. Fair?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0471_0254;
	message("\"Now we're talking! Done deal. Here we go.\" He checks around to make sure no else is within earshot. \"The gargoyles,\" he pauses, \"are not evil.~~\"And Rasputin is a mean Martian. There, that's it! Now get!\"*");
	say();
	abort;
	goto labelFunc0471_0259;
labelFunc0471_0254:
	message("\"Fine. I'm not going to talk to you anyway!\"*");
	say();
	abort;
labelFunc0471_0259:
	UI_remove_answer("will not make you glue");
labelFunc0471_0260:
	case "bye" attend labelFunc0471_02B6:
	message("\"That's just fine. I was getting tired of you anyway.\"");
	say();
	if (!var0001) goto labelFunc0471_02B1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Why, how dare thou speakest to the Avatar in that manner, Smith!\"");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("\"And who are you? My master?\"");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Why, as a matter of fact...\"");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("\"Sure, whatever.\"");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0471_02B1:
	message("*");
	say();
	abort;
labelFunc0471_02B6:
	goto labelFunc0471_0051;
labelFunc0471_02B9:
	endconv;
labelFunc0471_02BA:
	if (!(event == 0x0000)) goto labelFunc0471_02C3;
	abort;
labelFunc0471_02C3:
	return;
}


