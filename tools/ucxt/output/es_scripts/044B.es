#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func044B object#(0x44B) ()
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

	if (!(event == 0x0000)) goto labelFunc044B_0009;
	abort;
labelFunc044B_0009:
	if (!(event == 0x0001)) goto labelFunc044B_0030;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0001, (byte)0x01, (byte)0x55, 0x044B, (byte)0x21]);
	return;
labelFunc044B_0030:
	UI_show_npc_face(0xFFB5, 0x0000);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = UI_is_pc_female();
	var0005 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00E0]) goto labelFunc044B_0083;
	if (!(!gflags[0x00E2])) goto labelFunc044B_0083;
	UI_add_answer(["Ariana", "Julius", "Nadia", "Yew"]);
labelFunc044B_0083:
	if (!gflags[0x0129]) goto labelFunc044B_0090;
	UI_add_answer("News of your father");
labelFunc044B_0090:
	if (!(!var0004)) goto labelFunc044B_00A4;
	if (!gflags[0x00E6]) goto labelFunc044B_00A4;
	UI_add_answer("kiss");
labelFunc044B_00A4:
	if (!(!gflags[0x00E8])) goto labelFunc044B_00C7;
	if (!var0004) goto labelFunc044B_00B8;
	message("This is an attractive young woman who seems sad.");
	say();
	goto labelFunc044B_00C0;
labelFunc044B_00B8:
	message("Emotion immediately grips your heart to see such a beautiful young woman seem so sad.");
	say();
	message("She looks up as you introduce yourself.");
	say();
labelFunc044B_00C0:
	gflags[0x00E8] = true;
	goto labelFunc044B_00D1;
labelFunc044B_00C7:
	message("\"Hello again, ");
	message(var0005);
	message("!\" Nastassia says.");
	say();
labelFunc044B_00D1:
	converse attend labelFunc044B_0332;
	case "name" attend labelFunc044B_00E7:
	message("\"I am Nastassia.\"");
	say();
	UI_remove_answer("name");
labelFunc044B_00E7:
	case "job" attend labelFunc044B_00FA:
	message("She thinks a moment. \"I suppose my job is to keep the Shrine of Compassion pristine, though it is not an official position.\"");
	say();
	UI_add_answer("Shrine");
labelFunc044B_00FA:
	case "Shrine" attend labelFunc044B_011A:
	message("\"The Shrine of Compassion has been here for many generations, as have all the shrines in Britannia. My great-great-grandmother Ariana made a request in her will that her family line take care of this particular shrine.\"");
	say();
	UI_add_answer(["all shrines", "take care"]);
	UI_remove_answer("Shrine");
labelFunc044B_011A:
	case "all shrines" attend labelFunc044B_012D:
	message("\"Many of the shrines have fallen into disuse or have been overgrown to the point of being lost. It is sad.\"");
	say();
	UI_remove_answer("all shrines");
labelFunc044B_012D:
	case "take care" attend labelFunc044B_014D:
	message("\"I am afraid that thou mightest find the other shrines in poor condition. I keep this one... well, nice. And I do it not only to keep alive my great-great-grandmother's tradition, but... for other reasons, too.\"");
	say();
	UI_remove_answer("take care");
	UI_add_answer(["tradition", "reasons"]);
labelFunc044B_014D:
	case "tradition" attend labelFunc044B_0160:
	message("\"Some people may think it odd that a young person would cling to the old ways so. But it is something that gives me great comfort. It gives me the feeling that there is something in this world that I belong to.\"");
	say();
	UI_remove_answer("tradition");
labelFunc044B_0160:
	case "reasons" attend labelFunc044B_0181:
	if (!(!gflags[0x00E0])) goto labelFunc044B_0176;
	message("\"I... I'd rather not say. Please do not ask.\"");
	say();
	goto labelFunc044B_017A;
labelFunc044B_0176:
	message("\"Thou dost know the reasons.\"");
	say();
labelFunc044B_017A:
	UI_remove_answer("reasons");
labelFunc044B_0181:
	case "Ariana" attend labelFunc044B_01B6:
	if (!var0004) goto labelFunc044B_0198;
	var0006 = "she";
	goto labelFunc044B_019E;
labelFunc044B_0198:
	var0006 = "he";
labelFunc044B_019E:
	message("\"Yes, she was my great-great-grandmother. I understand that she actually met the Avatar and ");
	message(var0006);
	message(" made a profound impact on her life.~~\"It is odd, but thou dost resemble the portraits I have seen of the Avatar.\"");
	say();
	UI_remove_answer("Ariana");
	UI_add_answer("I am the Avatar");
labelFunc044B_01B6:
	case "Julius" attend labelFunc044B_01CD:
	message("\"Thou dost know of my father? I suppose the townsfolk have been talking again. I wish I had known him. There is something within me that yearns for some news of him. Anything at all.\"");
	say();
	UI_remove_answer("Julius");
	gflags[0x00E1] = true;
labelFunc044B_01CD:
	case "Nadia" attend labelFunc044B_01E0:
	message("\"My mother. She died horribly, and by her own hand. That is the true reason I pay homage to this Shrine. I hope someday to provide her with the means to rest in peace.\"");
	say();
	UI_remove_answer("Nadia");
labelFunc044B_01E0:
	case "Yew" attend labelFunc044B_0259:
	message("\"My father died in the Great Forest there. Some wild animal or something killed him. Art thou perhaps travelling to Yew?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc044B_024E;
	message("\"Oh, ");
	message(var0005);
	message(", I do wish thou wouldst try to find out something about my father. How did he die? What happened? Please! Wilt thou search for the truth and come back and tell me?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc044B_0231;
	message("\"Bless thee! I shall be waiting here for thee.\"");
	say();
	if (!var0004) goto labelFunc044B_021F;
	message("\"I know we have a strong kinship now. We shall be like sisters.\"");
	say();
	goto labelFunc044B_022A;
labelFunc044B_021F:
	message("Unexpectedly, Nastassia pulls your head down to hers and kisses you on the mouth.");
	say();
	UI_add_answer("kiss");
labelFunc044B_022A:
	gflags[0x00E2] = true;
	goto labelFunc044B_024B;
labelFunc044B_0231:
	message("Nastassia turns away and looks as if she might cry. \"Very well. Please leave me alone.\"*");
	say();
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	abort;
labelFunc044B_024B:
	goto labelFunc044B_0252;
labelFunc044B_024E:
	message("\"No? Well, let me know if thou art in the future. Perhaps thou couldst help me.\"");
	say();
labelFunc044B_0252:
	UI_remove_answer("Yew");
labelFunc044B_0259:
	case "kiss" attend labelFunc044B_02A4:
	if (!(gflags[0x00E6] && var0003)) goto labelFunc044B_026F;
	message("You kiss Nastassia and she moans.");
	say();
labelFunc044B_026F:
	if (!(gflags[0x00E6] && (!var0003))) goto labelFunc044B_0282;
	message("The two of you rush into each other's arms and your mouths meet. You had forgotten how good her lips felt against yours.");
	say();
	var0003 = true;
labelFunc044B_0282:
	if (!(!(gflags[0x00E6] && (!var0001)))) goto labelFunc044B_02A4;
	message("You kiss Nastassia's lovely mouth again. She responds.~~\"No man hath done that as well as thee.\"~~ She looks at you with wide eyes.~~\"Do it again, milord.\"");
	say();
	var0001 = true;
	UI_remove_answer("kiss");
	UI_add_answer("kiss again");
labelFunc044B_02A4:
	case "kiss again" attend labelFunc044B_02C6:
	if (!(!var0002)) goto labelFunc044B_02C2;
	message("You kiss Nastassia yet again. This time your bodies press together tightly, and you know this promises to be more than a fleeting fling with some tavern wench.");
	say();
	var0002 = true;
	gflags[0x00E6] = true;
	goto labelFunc044B_02C6;
labelFunc044B_02C2:
	message("You kiss Nastassia and she moans.");
	say();
labelFunc044B_02C6:
	case "I am the Avatar" attend labelFunc044B_02D9:
	message("Nastassia studies your features.~~\"Somehow I knew it. It hath been said that thou wouldst return.\"");
	say();
	UI_remove_answer("I am the Avatar");
labelFunc044B_02D9:
	case "News of your father" attend labelFunc044B_030F:
	message("You tell Nastassia what you learned from Trellek. She closes her eyes and it seems a great weight has lifted from her shoulders.~~The woman raises her arms to the sky and cries out, \"Didst thou hear that, mother? Thine husband was only trying to provide for his family! And he died... a hero! He was not a vagabond! Dost thou hear? Thou canst rest thy tortured soul now. Please, mother, forgive him. Do so, so that I can now forgive thee.\"~~She wipes the tears from her face and looks at you.");
	say();
	if (!var0004) goto labelFunc044B_02F8;
	message("\"I thank thee, ");
	message(var0005);
	message(". Thou hast made me very happy. I shall always remember thee.\"");
	say();
	goto labelFunc044B_0302;
labelFunc044B_02F8:
	message("She kisses you once lightly. \"Thank thee, ");
	message(var0005);
	message(". Thou hast made me very happy. Shouldst thou become weary of adventuring, I shall be waiting here for thee. Thou art welcome to live and share thy life with me. Go now. Finish the job thou must needs do. But keep me in thy thoughts.\"");
	say();
labelFunc044B_0302:
	Func0911(0x0032);
	UI_remove_answer("News of your father");
labelFunc044B_030F:
	case "bye" attend labelFunc044B_032F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	goto labelFunc044B_0332;
labelFunc044B_032F:
	goto labelFunc044B_00D1;
labelFunc044B_0332:
	endconv;
	if (!(!var0004)) goto labelFunc044B_0354;
	if (!var0002) goto labelFunc044B_0347;
	message("\"Goodbye.\" She kisses you again, and then turns so that she will not see you leave.*");
	say();
	goto labelFunc044B_0351;
labelFunc044B_0347:
	message("\"Goodbye, ");
	message(var0005);
	message(".\"*");
	say();
labelFunc044B_0351:
	goto labelFunc044B_035E;
labelFunc044B_0354:
	message("\"Goodbye, ");
	message(var0005);
	message(".\"*");
	say();
labelFunc044B_035E:
	return;
}


