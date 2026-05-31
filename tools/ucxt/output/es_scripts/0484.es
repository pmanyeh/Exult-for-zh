#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0484 object#(0x484) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0484_0284;
	UI_show_npc_face(0xFF7C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0180]) goto labelFunc0484_0035;
	UI_add_answer("strangers");
labelFunc0484_0035:
	if (!(gflags[0x017F] && (!gflags[0x01CD]))) goto labelFunc0484_0047;
	UI_add_answer("found");
labelFunc0484_0047:
	if (!(!gflags[0x018D])) goto labelFunc0484_0059;
	message("You see a scruffy young man who is obviously suffering from a broken heart.");
	say();
	gflags[0x018D] = true;
	goto labelFunc0484_0063;
labelFunc0484_0059:
	message("Henry greets you. \"It is good to speak with thee again, ");
	message(var0000);
	message("!\"");
	say();
labelFunc0484_0063:
	converse attend labelFunc0484_027F;
	case "name" attend labelFunc0484_007F:
	message("\"My name is Henry, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc0484_007F:
	case "job" attend labelFunc0484_00AB:
	if (!(!(gflags[0x017D] || gflags[0x01CD]))) goto labelFunc0484_00A0;
	message("\"Job?! Who can work when he has a broken heart?!\"");
	say();
	UI_add_answer("broken heart");
	goto labelFunc0484_00AB;
labelFunc0484_00A0:
	message("\"Although I am called a peddler, I have the greatest selection of items to be found in New Magincia.\"");
	say();
	UI_add_answer("New Magincia");
labelFunc0484_00AB:
	case "New Magincia" attend labelFunc0484_00BE:
	message("\"I have lived here all of my life and have never known anyplace else. It is a basically a very nice place where people still adhere to the old ways and values. The rest of the world must think it has passed us by, but it is they who have lost what once was.\"");
	say();
	UI_remove_answer("New Magincia");
labelFunc0484_00BE:
	case "broken heart" attend labelFunc0484_00D8:
	message("\"I have been rejected by the woman I love.\"");
	say();
	UI_add_answer("woman");
	UI_remove_answer("broken heart");
labelFunc0484_00D8:
	case "woman" attend labelFunc0484_00F8:
	message("His eyes light up. \"Her name is Constance, she is the most beautiful woman in the world, and for a time we were in love.\" His face falls, and he sighs deeply. \"But that was before I made a terrible mistake...\"");
	say();
	UI_add_answer(["Constance", "mistake"]);
	UI_remove_answer("woman");
labelFunc0484_00F8:
	case "Constance" attend labelFunc0484_010B:
	message("\"She is the waterbearer of the town. She carries water from the well of Humility to all the homes in town.\"");
	say();
	UI_remove_answer("Constance");
labelFunc0484_010B:
	case "mistake" attend labelFunc0484_012B:
	message("\"I promised to give her a very old and valuable locket as a token of mine affection. My childhood friend, Katrina, had given the locket to me.\"");
	say();
	UI_remove_answer("mistake");
	UI_add_answer(["locket", "Katrina"]);
labelFunc0484_012B:
	case "locket" attend labelFunc0484_0145:
	message("\"Before I could give her the locket, I lost it. I have searched everywhere but I cannot find it. Now, Constance thinks I am a cad and has forsaken me.\"");
	say();
	UI_remove_answer("locket");
	UI_add_answer("lost");
labelFunc0484_0145:
	case "Katrina" attend labelFunc0484_01A2:
	message("\"Katrina is a shepherd here on New Magincia. She has been a friend of mine since I was a boy.\"");
	say();
	var0001 = Func08F7(0xFFF7);
	if (!var0001) goto labelFunc0484_019B;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"We have had some good memories, have we not, Henry?\"");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("\"Oh that we have! But thou wouldst not be my sweetheart, so we resigned ourselves to being 'just friends' a long time ago, is that not true?\"");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"Whatever thou dost say, dear Henry.\"");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_019B:
	UI_remove_answer("Katrina");
labelFunc0484_01A2:
	case "lost" attend labelFunc0484_01DC:
	message("\"I noticed I had lost the locket right after I spoke with those three strangers yesterday. Wouldst thou help me find it?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0484_01CB;
	message("\"Oh, thank thee, ");
	message(var0000);
	message("! If not for thee, I would be lost.\"");
	say();
	gflags[0x017D] = true;
	goto labelFunc0484_01D5;
labelFunc0484_01CB:
	message("\"Oh, well... I know thou art busy on thine own quest. I thank thee for listening to my tale, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0484_01D5:
	UI_remove_answer("lost");
labelFunc0484_01DC:
	case "strangers" attend labelFunc0484_01F3:
	message("\"There are three other strangers in New Magincia. They arrived a few days before thee. Their ship was sunk and they barely made it here with their lives.\"");
	say();
	UI_remove_answer("strangers");
	gflags[0x0180] = true;
labelFunc0484_01F3:
	case "found" attend labelFunc0484_0271:
	message("\"Thou hast found the locket!\"");
	say();
	var0003 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, true);
	if (!var0003) goto labelFunc0484_0266;
	Func0911(0x0032);
	message("You hand the locket to Henry. \"Now I may give it to Constance and keep my promise to her! I cannot thank thee enough, Avatar!\"");
	say();
	gflags[0x01CD] = true;
	var0004 = Func08F7(0xFFF7);
	if (!var0004) goto labelFunc0484_0263;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"I am glad that this situation has concluded in thy favor, dear Henry.\"");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("\"My thanks to thee, Katrina.\"");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_0263:
	goto labelFunc0484_026A;
labelFunc0484_0266:
	message("He looks distraught when you make no move to give it to him. \"Where is it?! I need it if I am to prove myself to the woman I love!\"");
	say();
labelFunc0484_026A:
	UI_remove_answer("found");
labelFunc0484_0271:
	case "bye" attend labelFunc0484_027C:
	goto labelFunc0484_027F;
labelFunc0484_027C:
	goto labelFunc0484_0063;
labelFunc0484_027F:
	endconv;
	message("\"Travel safely and be well.\"*");
	say();
labelFunc0484_0284:
	if (!(event == 0x0000)) goto labelFunc0484_0292;
	Func092E(0xFF7C);
labelFunc0484_0292:
	return;
}


