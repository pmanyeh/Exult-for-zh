#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func04D0 object#(0x4D0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04D0_0185;
	UI_show_npc_face(0xFF30, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x028D])) goto labelFunc04D0_003A;
	message("你面前的男人看到你时，眼睛瞇成了一条缝。");
	say();
	gflags[0x028D] = true;
	goto labelFunc04D0_0050;
labelFunc04D0_003A:
	message("Blorn 沉重地叹了口气。「你现在为什么要来烦我？」");
	say();
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_0050;
	UI_add_answer("石像鬼");
labelFunc04D0_0050:
	if (!gflags[0x0281]) goto labelFunc04D0_005E;
	gflags[0x0282] = false;
	gflags[0x0299] = false;
labelFunc04D0_005E:
	if (!gflags[0x0282]) goto labelFunc04D0_006E;
	UI_add_answer("归还护身符");
	goto labelFunc04D0_007B;
labelFunc04D0_006E:
	if (!gflags[0x0299]) goto labelFunc04D0_007B;
	UI_add_answer("Lap-Lem");
labelFunc04D0_007B:
	converse attend labelFunc04D0_0180;
	case "姓名" attend labelFunc04D0_00A3:
	message("「Blorn ，如果你非得知道的话。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x0283] && (!gflags[0x0280]))) goto labelFunc04D0_00A3;
	UI_add_answer("石像鬼");
labelFunc04D0_00A3:
	case "职业" attend labelFunc04D0_00AF:
	message("「我想我不想告诉你。」");
	say();
labelFunc04D0_00AF:
	case "石像鬼" attend labelFunc04D0_010B:
	message("他喉咙里发出一声低吼。~~「那些该死的石像鬼怎么了？别告诉我你是个热爱石像鬼的人。」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04D0_00CF;
	message("「你真恶心，猪猡！」他吐痰在你的靴子上。*");
	say();
	abort;
	goto labelFunc04D0_0104;
labelFunc04D0_00CF:
	message("「那很好，我的朋友。」~~突然间，他脸上似乎闪过一丝灵感。~~「也许你能帮我。如你毫无疑问所知，不久前我遭到了一只残忍石像鬼的攻击。他差点要了我的命！~~这将是极大的荣幸，");
	message(var0000);
	message("，如果你同意为我报仇！你愿意吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04D0_00F6;
	message("「谢谢你，");
	message(var0000);
	message("，谢谢你。但我必须警告你，他是一只非常暴力的石像鬼。他的名字是 Lap-Lem ，意思是『人类杀手』。而且，不要提到我的名字，因为他比任何人类都更恨我，如果你提到我的名字，他肯定会无故攻击你。」");
	say();
	gflags[0x0299] = true;
	goto labelFunc04D0_0100;
labelFunc04D0_00F6:
	message("「好吧，");
	message(var0000);
	message("。你不过是个懦夫。」他摇了摇头。");
	say();
labelFunc04D0_0100:
	gflags[0x0280] = true;
labelFunc04D0_0104:
	UI_remove_answer("石像鬼");
labelFunc04D0_010B:
	case "归还护身符" attend labelFunc04D0_0148:
	message("他瞪了你一会儿，然后耸耸肩，嘟囔着：「又不是他诚实赚来的什么的……」");
	say();
	var0003 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, true);
	if (!var0003) goto labelFunc04D0_013C;
	message("「拿去！我希望这勒死他！」他把护身符塞进你手里。「我也希望他该死地勒死你！」");
	say();
	gflags[0x0281] = true;
	goto labelFunc04D0_0141;
labelFunc04D0_013C:
	message("「你甚至没有空间放它！走开，你这个豺狼之子！」*");
	say();
	abort;
labelFunc04D0_0141:
	UI_remove_answer("归还护身符");
labelFunc04D0_0148:
	case "Lap-Lem" attend labelFunc04D0_0172:
	message("「你杀了那只豺狼？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04D0_0167;
	message("「太棒了！你真的是值得信赖的朋友。谢谢你的协助！」他对你咧嘴一笑。");
	say();
	goto labelFunc04D0_016B;
labelFunc04D0_0167:
	message("「嗯，我相信你很快就会有时间的，因为他肯定会再朝这边来攻击我。」");
	say();
labelFunc04D0_016B:
	UI_remove_answer("Lap-Lem");
labelFunc04D0_0172:
	case "告辞" attend labelFunc04D0_017D:
	goto labelFunc04D0_0180;
labelFunc04D0_017D:
	goto labelFunc04D0_007B;
labelFunc04D0_0180:
	endconv;
	message("他微微点头并低哼了一声，然后回到他的事情上。*");
	say();
labelFunc04D0_0185:
	if (!(event == 0x0000)) goto labelFunc04D0_018E;
	abort;
labelFunc04D0_018E:
	return;
}


