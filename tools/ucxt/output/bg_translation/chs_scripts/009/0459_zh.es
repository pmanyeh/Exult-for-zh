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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0124]) goto labelFunc0459_004E;
	if (!gflags[0x00F8]) goto labelFunc0459_004E;
	UI_add_answer(["兄弟"]);
	var0001 = true;
labelFunc0459_004E:
	if (!(!gflags[0x0114])) goto labelFunc0459_0060;
	message("你看到一个似乎在荒野中待了很长一段时间的山里人。他盯着你看了很久，然后哼了一声，把头转开。");
	say();
	gflags[0x0114] = true;
	goto labelFunc0459_0064;
labelFunc0459_0060:
	message("「你想要什么？别来烦我！」");
	say();
labelFunc0459_0064:
	converse attend labelFunc0459_020A;
	case "姓名" attend labelFunc0459_009C:
	message("「我没有和陌生人说话的习惯，但看在你似乎不是很聪明的份上，我暂且迁就你一下。我的名字是 Karl ，以前住在 Minoc 。」");
	say();
	gflags[0x0124] = true;
	if (!gflags[0x00F8]) goto labelFunc0459_008E;
	if (!(!var0001)) goto labelFunc0459_008E;
	UI_add_answer(["兄弟"]);
labelFunc0459_008E:
	UI_remove_answer("姓名");
	UI_add_answer("Minoc");
labelFunc0459_009C:
	case "职业" attend labelFunc0459_00AF:
	message("「工作？！你疯了吗，");
	message(var0000);
	message("？！首先，如果你想提供我工作机会，我没兴趣。其次，如果你想因为任何原因雇用我做任何事，那我极度热烈地拒绝你的提议。第三，如果你想知道我的职业是什么，别想了，因为我没有。第四也是最后一点，如果你想知道我为什么没有工作，现在就给我打住，因为那不关你的事！」*");
	say();
	abort;
labelFunc0459_00AF:
	case "Minoc" attend labelFunc0459_00D2:
	message("「别问我关于 Minoc 的事，那个充满友谊会傻瓜、随机谋杀案和无能纪念碑的肮脏小镇。我甚至不住在这里，就算你付钱给我我也不会住！」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["谋杀案", "纪念碑", "友谊会"]);
labelFunc0459_00D2:
	case "谋杀案" attend labelFunc0459_00E5:
	message("「哼。那干我什么事？每天都有人互相残杀。哦，你在调查这起犯罪！好吧，别让我妨碍你。等你抓到凶手后，你可以为他建个雕像。」");
	say();
	UI_remove_answer("谋杀案");
labelFunc0459_00E5:
	case "友谊会" attend labelFunc0459_0100:
	if (!var0002) goto labelFunc0459_00FB;
	message("「老天！你想让我加入！离我远点，你这笨蛋！」*");
	say();
	abort;
	goto labelFunc0459_0100;
labelFunc0459_00FB:
	message("「我看起来像友谊会的成员吗？我甚至不知道友谊会是什么！而且我也不在乎！」*");
	say();
	abort;
labelFunc0459_0100:
	case "纪念碑" attend labelFunc0459_010D:
	message("「造船匠 Owen 确实值得为他建造一座纪念碑。它的形状应该是一座绞刑架，而且还得把他吊在上面。」*");
	say();
	abort;
labelFunc0459_010D:
	case "兄弟" attend labelFunc0459_012D:
	message("「我的兄弟——我在世上唯一的亲人——曾在 Owen 建造的一艘船上服役。那艘船是三年前在遇到第一场风暴时沉没的几艘船之一。我的兄弟和船一起沉没，再也没有人见过他。」");
	say();
	UI_remove_answer("兄弟");
	UI_add_answer(["Owen", "几艘船"]);
labelFunc0459_012D:
	case "Owen" attend labelFunc0459_014D:
	message("「我为这件事和 Owen 对质，但他否认这和他的手艺有任何关系。那天晚上我回去偷了他起草的设计图，至少这样就不会再有像那样的船被建造出来了。但这让我对这个世界感到非常愤怒，我知道我再也无法在人群中生活了。我离开并去山里生活。我唯一会回来的时候就是为了拿些补给品，也许偶尔喝一杯 Rutherford 酿的好麦酒。」");
	say();
	UI_remove_answer("Owen");
	UI_add_answer(["设计图", "好麦酒"]);
labelFunc0459_014D:
	case "几艘船" attend labelFunc0459_0160:
	message("「其他三艘根据 Owen 的基本设计建造的船，都在下水的第一年内沉没了。有超过十二条生命因为那个虚荣的混蛋而丧生！」");
	say();
	UI_remove_answer("几艘船");
labelFunc0459_0160:
	case "好麦酒" attend labelFunc0459_0173:
	message("「如果不是为了 Rutherford 酿的好麦酒，文明的存在就没有任何意义了。」");
	say();
	UI_remove_answer("好麦酒");
labelFunc0459_0173:
	case "设计图" attend labelFunc0459_01C5:
	message("「我还把那些设计图留在我的小屋里。每隔一段时间我就会试着弄懂它们。我怀疑镇上除了 Owen 本人之外，没有人能看懂它们。也许修补匠 Julia 能够看出一点端倪。但她绝对不会听我这个住在山里的老头子的话。」");
	say();
	var0003 = Func08F7(0xFFF8);
	if (!var0003) goto labelFunc0459_01AD;
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「我会听的， Karl ！你太看轻自己了！请振作起来！」");
	say();
	UI_remove_npc_face(0xFFF8);
	UI_show_npc_face(0xFFA7, 0x0000);
labelFunc0459_01AD:
	gflags[0x010B] = true;
	UI_remove_answer("设计图");
	UI_add_answer(["Julia", "山里的老头"]);
labelFunc0459_01C5:
	case "山里的老头" attend labelFunc0459_01D8:
	message("「远离当今社会的泥沼才是我该待的地方。在荒野中，你才能认清事物的本质。」");
	say();
	UI_remove_answer("山里的老头");
labelFunc0459_01D8:
	case "Julia" attend labelFunc0459_01EF:
	message("「如果你想把设计图给 Julia 看，我会把它们给你。它们在不列颠尼亚矿业公司办公室东南方的我的小屋里。」");
	say();
	gflags[0x0120] = true;
	UI_remove_answer("Julia");
labelFunc0459_01EF:
	case "跟随" attend labelFunc0459_01FC:
	message("「下定决心吧！你到底跟不跟着我？！如果你要跟着我，那就闭上嘴，迈开脚步，我们继续走。」");
	say();
	abort;
labelFunc0459_01FC:
	case "告辞" attend labelFunc0459_0207:
	goto labelFunc0459_020A;
labelFunc0459_0207:
	goto labelFunc0459_0064;
labelFunc0459_020A:
	endconv;
	if (!gflags[0x00F7]) goto labelFunc0459_0218;
	message("「我知道我有时候很难相处。我想这就是我那倔强混蛋的本性吧。但我确实很感激我为数不多的几个朋友，而且我知道你一直对我很好。好好保重，圣者。」*");
	say();
	goto labelFunc0459_021C;
labelFunc0459_0218:
	message("「在我发脾气之前，停止你的喧闹声吧！」*");
	say();
labelFunc0459_021C:
	return;
}


