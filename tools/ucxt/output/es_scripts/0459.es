#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0459 object#(0x459) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc0459_0009;
	abort;
labelFunc0459_0009:
	UI_show_npc_face(0xFFA7, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	var0002 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0124]) goto labelFunc0459_004E;
	if (!gflags[0x00F8]) goto labelFunc0459_004E;
	UI_add_answer(["brother"]);
	var0001 = true;
labelFunc0459_004E:
	if (!(!gflags[0x0114])) goto labelFunc0459_0060;
	message("You see a mountain man who appears to have been in the wilderness a long time. He gives you a long look, then he snorts and looks away.");
	say();
	gflags[0x0114] = true;
	goto labelFunc0459_0064;
labelFunc0459_0060:
	message("\"What dost thou want? Leave me alone!\"");
	say();
labelFunc0459_0064:
	converse attend labelFunc0459_020A;
	case "name" attend labelFunc0459_009C:
	message("\"I am not in the habit of speakin' to strangers but seein' as how thou dost not appear to be very intelligent, I shall humor thee for now. My name is Karl, formerly of Minoc.\"");
	say();
	gflags[0x0124] = true;
	if (!gflags[0x00F8]) goto labelFunc0459_008E;
	if (!(!var0001)) goto labelFunc0459_008E;
	UI_add_answer(["brother"]);
labelFunc0459_008E:
	UI_remove_answer("name");
	UI_add_answer("Minoc");
labelFunc0459_009C:
	case "job" attend labelFunc0459_00AF:
	message("\"Job?! Art thou mad, ");
	message(var0000);
	message("?! Firstly, if thou dost wish to offer me employment I have no interest in it. Secondly, if thou dost wish to hire my services for anything for any reason, then I reject thine offer most enthusiastically. Thirdly, if thou dost wonder what my job is, then wonder no more for I have not one.\tFourth and lastly, if thou dost wonder why I have no job then stop it right now because it is none of thy business!\"*");
	say();
	abort;
labelFunc0459_00AF:
	case "Minoc" attend labelFunc0459_00D2:
	message("\"Do not ask me of Minoc, the filthy little town of Fellowship fools, casual murders and monuments to incompetence. I do not even live here and I would not if thou didst pay me!\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["murders", "monument", "Fellowship"]);
labelFunc0459_00D2:
	case "murders" attend labelFunc0459_00E5:
	message("\"Hmmph. Why should that be any concern of mine? People kill each other every day. Oh, thou art investigating the crime! Well, do not let me keep thee from it. After thou dost catch the murderer thou canst build a statue of him.\"");
	say();
	UI_remove_answer("murders");
labelFunc0459_00E5:
	case "Fellowship" attend labelFunc0459_0100:
	if (!var0002) goto labelFunc0459_00FB;
	message("\"Gads! Thou dost want me to join! Away from me, thou dolt!\"*");
	say();
	abort;
	goto labelFunc0459_0100;
labelFunc0459_00FB:
	message("\"Do I look like a member of The Fellowship to thee? I do not even know what The Fellowship is! And I do not care!\"*");
	say();
	abort;
labelFunc0459_0100:
	case "monument" attend labelFunc0459_010D:
	message("\"Owen, the shipwright, dost deserve to have a monument built to him. It should be in the shape of a gallows and it should have him hanging from it.\"*");
	say();
	abort;
labelFunc0459_010D:
	case "brother" attend labelFunc0459_012D:
	message("\"My brother - mine only family in the world - served aboard a ship built by Owen. The ship was one of several that sank three years ago during the first storm it ever encountered. My brother went down with it and was never seen again.\"");
	say();
	UI_remove_answer("brother");
	UI_add_answer(["Owen", "several ships"]);
labelFunc0459_012D:
	case "Owen" attend labelFunc0459_014D:
	message("\"I confronted Owen with this and he denied that it had anything to do with his workmanship. I returned that night and stole the plans he had drafted, so at least no other ships would ever be built like them again. But it left me so angry at the world that I knew I could not live among people ever again. I went away to live up in the mountains. The only times I ever come back are to fetch a few supplies and maybe have a drink of Rutherford's fine ale once in a while.\"");
	say();
	UI_remove_answer("Owen");
	UI_add_answer(["plans", "fine ale"]);
labelFunc0459_014D:
	case "several ships" attend labelFunc0459_0160:
	message("\"Three other ships that were built from Owen's basic designs all sunk within the first year of their launch. Over a dozen lives were lost due to that vainglorious bastard!\"");
	say();
	UI_remove_answer("several ships");
labelFunc0459_0160:
	case "fine ale" attend labelFunc0459_0173:
	message("\"If not for Rutherford's fine ale, there would no purpose to the existence of civilization.\"");
	say();
	UI_remove_answer("fine ale");
labelFunc0459_0173:
	case "plans" attend labelFunc0459_01C5:
	message("\"I still have those plans up in my cabin. Every once in a while I try to figure them out. I suspect no one in town, save for Owen himself, could understand them. Maybe Julia, the tinker, would be able to shed some light on them. But she would never listen to an old mountain man like me.\"");
	say();
	var0003 = Func08F7(0xFFF8);
	if (!var0003) goto labelFunc0459_01AD;
	UI_show_npc_face(0xFFF8, 0x0000);
	message("\"Yes I would, Karl! Thou dost have too low opinion of thyself! Raise thy spirits, please!\"");
	say();
	UI_remove_npc_face(0xFFF8);
	UI_show_npc_face(0xFFA7, 0x0000);
labelFunc0459_01AD:
	gflags[0x010B] = true;
	UI_remove_answer("plans");
	UI_add_answer(["Julia", "mountain man"]);
labelFunc0459_01C5:
	case "mountain man" attend labelFunc0459_01D8:
	message("\"Far away from the mire of present day society is where I belong. In the wilderness thou canst know what is what.\"");
	say();
	UI_remove_answer("mountain man");
labelFunc0459_01D8:
	case "Julia" attend labelFunc0459_01EF:
	message("\"If thou dost want to show Julia the plans, I will give them to thee. They are in my cabin southeast of the BMC office.\"");
	say();
	gflags[0x0120] = true;
	UI_remove_answer("Julia");
labelFunc0459_01EF:
	case "follow" attend labelFunc0459_01FC:
	message("\"Make up thy mind! Art thou following me or not?! If thou art following me then close thy mouth, move thy feet and let us get on.\"");
	say();
	abort;
labelFunc0459_01FC:
	case "bye" attend labelFunc0459_0207:
	goto labelFunc0459_020A;
labelFunc0459_0207:
	goto labelFunc0459_0064;
labelFunc0459_020A:
	endconv;
	if (!gflags[0x00F7]) goto labelFunc0459_0218;
	message("\"I know I can be a bear to get along with sometimes. I reckon it is just my nature to be an ornery bastard. But I do appreciate what few friends I have and I know that thou hast been one to me. Take good care of thyself, Avatar.\"*");
	say();
	goto labelFunc0459_021C;
labelFunc0459_0218:
	message("\"Cease thy racket then before I lose my temper!\"*");
	say();
labelFunc0459_021C:
	return;
}


