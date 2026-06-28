#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0632 object#(0x632) ();

void Func046E object#(0x46E) ()
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

	if (!(event == 0x0000)) goto labelFunc046E_0009;
	abort;
labelFunc046E_0009:
	UI_show_npc_face(0xFF92, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02CA]) goto labelFunc046E_0030;
	UI_add_answer("Wayne 兄弟");
labelFunc046E_0030:
	if (!(!gflags[0x02CE])) goto labelFunc046E_0054;
	if (!(!gflags[0x0003])) goto labelFunc046E_0049;
	message("你看到一个眼神狂野的法师。");
	say();
	gflags[0x02CE] = true;
	goto labelFunc046E_0051;
labelFunc046E_0049:
	message("你看到一个眼神平静的法师。");
	say();
	gflags[0x02CE] = true;
labelFunc046E_0051:
	goto labelFunc046E_0058;
labelFunc046E_0054:
	message("「你在跟我说话？」 Garok 怀疑地问。");
	say();
labelFunc046E_0058:
	converse attend labelFunc046E_02EE;
	case "姓名" attend labelFunc046E_009B:
	message("法师盯着你看了一会儿。「你是不列颠尼亚税务委员会 (Tax Council) 的人吗？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc046E_007B;
	message("「那我就不是任何人！」*");
	say();
	abort;
	goto labelFunc046E_008D;
labelFunc046E_007B:
	if (!(!gflags[0x0003])) goto labelFunc046E_0089;
	message("「算你好运。不然我就得杀了你。我是 Garok Al-Mat 。至少，我上次照镜子时是这么觉得的！」");
	say();
	goto labelFunc046E_008D;
labelFunc046E_0089:
	message("「我已经喜欢上你了！我是 Garok Al-Mat 。」");
	say();
labelFunc046E_008D:
	UI_remove_answer("姓名");
	UI_add_answer("税务委员会");
labelFunc046E_009B:
	case "职业" attend labelFunc046E_00CF:
	if (!(!gflags[0x0003])) goto labelFunc046E_00BE;
	message("Garok 看起来好像会突然扯下自己的头发，但他克制住了。~~「我是……『曾经』是……一个法师。直到一切都出了差错。我正在试图纠正这些事。」");
	say();
	UI_add_answer(["法师", "纠正"]);
	goto labelFunc046E_00CF;
labelFunc046E_00BE:
	message("「我一直都是一个法师。我来到这里试图找出以太波到底出了什么问题，但现在它们似乎已经恢复正常了。」");
	say();
	UI_add_answer(["法师", "以太波"]);
labelFunc046E_00CF:
	case "法师" attend labelFunc046E_0104:
	if (!(!gflags[0x0003])) goto labelFunc046E_00F2;
	message("Garok 突然打了自己的头侧。~~「出去！该死的你！从那里出来！没人邀请你进我的脑袋！滚开！」~~ Garok 又打了自己一下，像只湿透的狗一样摇着头，并用嘴唇发出噗噗的声音。~~ Garok 看着你并微笑了。「好多了。现在，我们说到哪里了……喔对了，我想起来了。你不相信我是个法师？嗯，我是。我住在山里。但现在我迷失在这个该死的地城里了。」");
	say();
	UI_add_answer(["你的脑袋", "迷路"]);
	goto labelFunc046E_00FD;
labelFunc046E_00F2:
	message("「我通常住在山里，但我迷失在这个地城里了。」");
	say();
	UI_add_answer("迷路");
labelFunc046E_00FD:
	UI_remove_answer("法师");
labelFunc046E_0104:
	case "纠正", "以太波" attend labelFunc046E_0132:
	if (!(!gflags[0x0003])) goto labelFunc046E_011D;
	message("「我的魔法失灵了！");
	say();
	goto labelFunc046E_0121;
labelFunc046E_011D:
	message("「我的魔法失灵了！");
	say();
labelFunc046E_0121:
	message("「我把它归咎于以太波的干扰！我必须查明发生了什么事。所以我来到这里！」");
	say();
	UI_remove_answer(["纠正", "以太波"]);
labelFunc046E_0132:
	case "你的脑袋" attend labelFunc046E_014C:
	message("「我脑海里有一个声音。某种恶魔之类的。它总是祝贺我做了某些事。然后其他时候又因为某些事骂我。我『知道』那不是我的良心。我『知道』『他』听起来像什么！这是……另一个人。」");
	say();
	UI_remove_answer("你的脑袋");
	UI_add_answer("声音");
labelFunc046E_014C:
	case "声音" attend labelFunc046E_015F:
	message("「大约在我的魔法开始失效时，我开始听到这个声音。我觉得这不好玩。」");
	say();
	UI_remove_answer("声音");
labelFunc046E_015F:
	case "迷路" attend labelFunc046E_0194:
	if (!(!gflags[0x0003])) goto labelFunc046E_0175;
	message("「我的水晶球告诉我，问题的根源在一个地城里，但没说是哪一个。这是我探索的第一个地城。我还没找到任何可以帮助我的东西，而且我找不到出路了！」");
	say();
	goto labelFunc046E_0179;
labelFunc046E_0175:
	message("「我下来这里是为了寻找我问题的根源。我的水晶球告诉我它在一个地城里，但没说是哪一个。这是我第一次探险地城，现在我迷路了。」");
	say();
labelFunc046E_0179:
	UI_remove_answer("迷路");
	if (!gflags[0x0000]) goto labelFunc046E_018D;
	UI_add_answer("错的地城");
labelFunc046E_018D:
	UI_add_answer("出路");
labelFunc046E_0194:
	case "错的地城" attend labelFunc046E_01A7:
	message("你向 Garok 解释四面体产生器位于 Deceit 地城。~~「嗯。方向正确。但走错了地城。」");
	say();
	UI_remove_answer("错的地城");
labelFunc046E_01A7:
	case "出路" attend labelFunc046E_02BA:
	message("「你知道出路吗？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc046E_02AF;
	message("你告诉 Garok 如何离开地城。~~「哎呀，听起来真简单！我一定是脑袋不清楚了！~~我感谢你！现在我必须上路了。事实上，既然我知道了路，我就可以用我所剩无几的魔法来发送。如果想发送，必须知道自己要前进的方向！~~对了，为了感谢你的帮助，你想要一些没用的秘药吗？我说的没用，是指对我来说没用。它们很可能是非常好的秘药。欢迎你拿走。你想要吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046E_029F;
	var0003 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0000, false);
	var0004 = UI_add_party_items(0x0004, 0x034A, 0xFE99, 0x0001, false);
	var0005 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0004, false);
	var0006 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0005, false);
	var0007 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0003, false);
	var0008 = UI_add_party_items(0x0007, 0x034A, 0xFE99, 0x0002, false);
	var0009 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0006, false);
	var000A = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0007, false);
	if (!(var0003 && (var0004 && (var0005 && (var0006 && (var0007 && (var0008 && (var0009 && var000A)))))))) goto labelFunc046E_0298;
	message("「很好。我少带一样东西了。」");
	say();
	goto labelFunc046E_029C;
labelFunc046E_0298:
	message("「喔。你没有空间。太可惜了。」");
	say();
labelFunc046E_029C:
	goto labelFunc046E_02A3;
labelFunc046E_029F:
	message("Garok 耸耸肩。「随你便。无论如何还是谢谢你。」");
	say();
labelFunc046E_02A3:
	message("你看着 Garok 转身，念了个法术，然后消失了。*");
	say();
	item->Func0632();
	abort;
	goto labelFunc046E_02B3;
labelFunc046E_02AF:
	message("「喔。你跟我一样迷路了，是吧？那我们肯定会死在这里。」");
	say();
labelFunc046E_02B3:
	UI_remove_answer("出路");
labelFunc046E_02BA:
	case "税务委员会" attend labelFunc046E_02CD:
	message("「哼！他们是我的眼中钉！过去三年他们一直在找我！我忘了申报一笔分配秘药的收入，不知怎么被他们发现了。顺带一提，如果你有兴趣来山里找我，我可以打折卖给你秘药！」");
	say();
	UI_remove_answer("税务委员会");
labelFunc046E_02CD:
	case "Wayne 兄弟" attend labelFunc046E_02E0:
	message("「是的，我记得他！他也迷路了！你知道他找到出路了吗？你跟他说话时代我向他问好。」");
	say();
	UI_remove_answer("Wayne 兄弟");
labelFunc046E_02E0:
	case "告辞" attend labelFunc046E_02EB:
	goto labelFunc046E_02EE;
labelFunc046E_02EB:
	goto labelFunc046E_0058;
labelFunc046E_02EE:
	endconv;
	message("「再见。」*");
	say();
	return;
}


