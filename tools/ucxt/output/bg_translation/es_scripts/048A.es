#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func048A object#(0x48A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc048A_0009;
	abort;
labelFunc048A_0009:
	UI_show_npc_face(0xFF76, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	var0005 = UI_wearing_fellowship();
	if (!gflags[0x02CC]) goto labelFunc048A_004E;
	UI_add_answer("Iriale");
labelFunc048A_004E:
	if (!(!gflags[0x02BB])) goto labelFunc048A_0060;
	message("You see a familiar face, a stern-looking bearded warrior whom you have met on one of your previous journeys to Britannia.");
	say();
	gflags[0x02BB] = true;
	goto labelFunc048A_0064;
labelFunc048A_0060:
	message("\"Ho, Avatar!\" says Gorn. \"Thou dost vish to speak mit me?\"");
	say();
labelFunc048A_0064:
	if (!gflags[0x02D2]) goto labelFunc048A_006F;
	message("\"De voice ov Brom has told me not to trust thee, Avatar,\" says Gorn. \"I tought dat ve vere friends and I do not vish to cause thee harm. But I varn thee, do not speak mit me anymore!\"*");
	say();
	abort;
labelFunc048A_006F:
	UI_add_answer(["name", "job", "bye"]);
labelFunc048A_007F:
	converse attend labelFunc048A_0355;
	case "name" attend labelFunc048A_0095:
	message("The warrior's eyes narrow. \"I am Gorn, as if thou didst not remember! It is good to see thee again.\" He laughs and slaps you on the shoulder.");
	say();
	UI_remove_answer("name");
labelFunc048A_0095:
	case "job" attend labelFunc048A_00AE:
	message("\"My job is a never-ending qvest of high adventure. Ever since I vas a child und vas taken from mine homeland of Balema, I haf spent my life in search of heroic deeds to perform.\"");
	say();
	UI_add_answer(["Balema", "heroic deeds"]);
labelFunc048A_00AE:
	case "Balema" attend labelFunc048A_00C8:
	message("\"Yah, Balema is vere I vas born. I vas a child dere. It is a vonderland ov snow-covered mountains und dark forests. It vas not an easy life, but it vas a place dat made young boys into strong heroic men. Dat vas long before I came to Britannia.\"");
	say();
	UI_remove_answer("Balema");
	UI_add_answer("Britannia");
labelFunc048A_00C8:
	case "Britannia" attend labelFunc048A_00DB:
	message("\"Yah! I came to Britannia t'rough vone ov de Moongates, de same as thee. Dat vas many, many years ago.\"");
	say();
	UI_remove_answer("Britannia");
labelFunc048A_00DB:
	case "heroic deeds" attend labelFunc048A_00F5:
	message("\"I perform heroic deeds in honor ov Brom. Everyting I do is in service to him.\"");
	say();
	UI_remove_answer("heroic deeds");
	UI_add_answer("Brom");
labelFunc048A_00F5:
	case "Brom" attend labelFunc048A_0115:
	message("\"He is my master, und de master ov all ov de people ov Balema. Brom is all powerful und if I am strong he vill aid me. Sometimes I hear de voice ov Brom inside ov mine head.\"");
	say();
	UI_remove_answer("Brom");
	UI_add_answer(["master", "voice"]);
labelFunc048A_0115:
	case "master" attend labelFunc048A_0128:
	message("\"Ya! Brom he is my master. If he vishes me to do someting, I must do it! If he does not vant me to do someting, I must not do it!\"");
	say();
	UI_remove_answer("master");
labelFunc048A_0128:
	case "voice" attend labelFunc048A_014B:
	message("\"Ya! Only recently I haf begun to hear his voice in mine head. His voice tells me vat to do! As I came tovard dis cave de voice ov Brom became clearer.\"");
	say();
	UI_remove_answer("voice");
	UI_add_answer(["what to do", "cave", "clearer"]);
labelFunc048A_014B:
	case "what to do" attend labelFunc048A_0165:
	message("\"Vhen I first heard de voice ov Brom, he told me dat I should follow him. But how does one follow de voice ov someone dat thou cannot see vhen de voice is coming from inside ov thine head?\"");
	say();
	UI_remove_answer("what to do");
	UI_add_answer("follow");
labelFunc048A_0165:
	case "follow" attend labelFunc048A_0182:
	message("\"Dis vas very, very difficult for me but after a vhile I vas able to figure out how to do it. Vhen I came nearer to da camp surrounding dis cave da voice vould get louder. Vhen I vould move avay de voice vould be qvieter.\"");
	say();
	UI_remove_answer("follow");
	UI_add_answer(["camp"]);
labelFunc048A_0182:
	case "camp" attend labelFunc048A_01CB:
	message("\"It vas very simple for a trained varrior like myself to slip into de camp ov dose who are holding Brom prisoner. Dey posed no threat vatsoever. So dat means dat de danger must be vaiting down here. But I cannot find it!\"");
	say();
	if (!var0005) goto labelFunc048A_0198;
	message("\"I can see by dat medallion thou dost vear dat thou hast snuck into dis place by disguising thyself as vone of dem. Very clever, Avatar!\"");
	say();
labelFunc048A_0198:
	if (!var0002) goto labelFunc048A_01BD;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you, \"This fellow is quite sharp, is he not?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_01BD:
	UI_remove_answer("camp");
	UI_add_answer("danger");
labelFunc048A_01CB:
	case "danger" attend labelFunc048A_021F:
	message("\"Zo far de only danger I haf found down here has been a female fighter. She vas beautiful. Vhen I vent to talk to her she hit me over de head mit her svord. Vhen I voke up she vas gone. I bet she tought she had killed me but mine head is harder dan dat. I vas not even vounded.\"");
	say();
	if (!var0003) goto labelFunc048A_0218;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino whispers to you. \"Luckily, Gorn was hit in the one spot where he has no feeling whatsoever -- his head!\"*");
	say();
	UI_show_npc_face(0xFF76, 0x0000);
	message("\"Hey, vhat are you vhispering about over dere?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Oh, nothing. Nothing at all.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_0218:
	UI_remove_answer("danger");
labelFunc048A_021F:
	case "cave" attend labelFunc048A_0239:
	message("\"I know dat Brom is somevhere down in dis cave, und I vill not leave dis place until I find him!\"");
	say();
	UI_remove_answer("cave");
	UI_add_answer("find Brom");
labelFunc048A_0239:
	case "clearer" attend labelFunc048A_0253:
	message("\"The nearer I haf come to dis cave, the more times I haf been hearing de voice ov Brom. But lately he has been saying tings to me dat are very, very strange!\"");
	say();
	UI_remove_answer("clearer");
	UI_add_answer("strange");
labelFunc048A_0253:
	case "strange" attend labelFunc048A_026D:
	message("\"De first strange ting dat he says to me is \"Strive For Unity\". I say, yah, dat is vhy I am performing mine heroic deeds. Den Brom says someting else dat is strange.\"");
	say();
	UI_remove_answer("strange");
	UI_add_answer("something else strange");
labelFunc048A_026D:
	case "something else strange" attend labelFunc048A_0287:
	message("\"Next de voice ov Brom says to me \"Trust My Brothers\". Dis is strange because all ov my brothers are back in Balema, und I vould never trust dem anyvays. Dey vere all bigger den me and vere alvays beating me. But even dat vas not as strange as da next strange ting.\"");
	say();
	UI_remove_answer("something else strange");
	UI_add_answer("next strange thing");
labelFunc048A_0287:
	case "next strange thing" attend labelFunc048A_02CC:
	message("\"De voice ov Brom tells me dat \"Worldliness Receives Avard\". I haf been tinking about dat von for a long time und I still haf not figured it out. But I vill not give up until I find Brom.\"");
	say();
	if (!var0004) goto labelFunc048A_02BE;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"A mysterious voice speaking inside someone's head, suggesting the philosophy of The Fellowship. Does this sound familiar, ");
	message(var0000);
	message("?\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_02BE:
	UI_remove_answer("next strange thing");
	UI_add_answer("find Brom");
labelFunc048A_02CC:
	case "find Brom" attend labelFunc048A_0308:
	message("\"Wouldst thou help me find Brom?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc048A_02F0;
	message("Gorn seems distracted for a moment. He places his hand to his ear as if he is listening to something. He looks back at you and there is a shocked look on his face. \"I haf just heard de voice ov Brom and he has told me not to trust thee! Go avay from me, Avatar! I tought dat thou vert my friend! I do not vish to speak vith thee anymore!\"*");
	say();
	gflags[0x02D2] = true;
	abort;
	goto labelFunc048A_0301;
labelFunc048A_02F0:
	message("Gorn has a confused look on his face. \"Vhy vill thou not help me find Brom? Dost thou tink dat dis is all some kind ov trick, or should I go on looking for Brom by myself?\"");
	say();
	UI_add_answer(["look for Brom", "it's a trick"]);
labelFunc048A_0301:
	UI_remove_answer("find Brom");
labelFunc048A_0308:
	case "look for Brom" attend labelFunc048A_0323:
	message("\"If dat is how thou vants it. Den I shall go on searching for Brom mit no vone else but myself. Good luck in vhatever qvest thou art on, Avatar. Farewell to thee!\"*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF76), 0x000C);
	abort;
labelFunc048A_0323:
	case "it's a trick" attend labelFunc048A_0334:
	message("Gorn seems distracted for a moment. He puts his hand to his ear as if he is listening to something. He looks back at you with a shocked expression on his face. \"I haf just heard de voice ov Brom and he says dat I should not trust thee! I tought dat thou vert my friend, Avatar! Go avay! I do not vish to speak vith thee again!\"*");
	say();
	gflags[0x02D2] = true;
	abort;
labelFunc048A_0334:
	case "Iriale" attend labelFunc048A_0347:
	message("\"Dat is de name ov de female fighter who has been guarding dis place. I haf fought her vonce already. She is a strong fighter! I haf to find her so I can make her to tell me vhere is Brom!\"");
	say();
	UI_remove_answer("Iriale");
labelFunc048A_0347:
	case "bye" attend labelFunc048A_0352:
	goto labelFunc048A_0355;
labelFunc048A_0352:
	goto labelFunc048A_007F;
labelFunc048A_0355:
	endconv;
	message("\"Until ve meet again, Avatar.\"*");
	say();
	return;
}


