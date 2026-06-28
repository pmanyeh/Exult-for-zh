#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0857 0x857 ();
extern void Func092E 0x92E (var var0000);

void Func043C object#(0x43C) ()
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

	if (!(event == 0x0001)) goto labelFunc043C_0253;
	UI_show_npc_face(0xFFC4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00CE]) goto labelFunc043C_003C;
	UI_add_answer("南瓜");
labelFunc043C_003C:
	if (!(!gflags[0x00BD])) goto labelFunc043C_004E;
	message("你看见一位农夫，尽管繁重的工作让他看起来相当疲惫，但他显得精力充沛、开朗且友善。");
	say();
	gflags[0x00BD] = true;
	goto labelFunc043C_0058;
labelFunc043C_004E:
	message("「又见面了，");
	message(var0000);
	message("，」 Brownie 向你打招呼。");
	say();
labelFunc043C_0058:
	converse attend labelFunc043C_0248;
	case "姓名" attend labelFunc043C_006E:
	message("「我是 Brownie 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043C_006E:
	case "职业" attend labelFunc043C_0087:
	message("「嗯，我曾经竞选过不列颠城的市长，但我落选了。现在我又回到了我从小就在做的事。在农场工作。」");
	say();
	UI_add_answer(["市长", "农场"]);
labelFunc043C_0087:
	case "市长" attend labelFunc043C_00A7:
	message("「Patterson 赢得了选举。他在竞选上花了很多钱。大部分是用来买票。但我并不怨恨。我只是注定当不了市长。」");
	say();
	UI_remove_answer("市长");
	UI_add_answer(["Patterson", "选举"]);
labelFunc043C_00A7:
	case "Patterson" attend labelFunc043C_00C7:
	message("「Patterson 争取了友谊会的支持。他们强迫所有成员投票给他。一旦消息传开，我的支持者就流失了。没有人想站在输家那边。」 Brownie 叹了口气。");
	say();
	UI_remove_answer("Patterson");
	UI_add_answer(["友谊会", "输家"]);
labelFunc043C_00C7:
	case "选举" attend labelFunc043C_00DA:
	message("「我其实没有任何想在政治上获得成功的愿望。我只是看不惯那些有钱人虐待穷人，然后还得听他们谈论阶级制度已经被废除了。」");
	say();
	UI_remove_answer("选举");
labelFunc043C_00DA:
	case "友谊会" attend labelFunc043C_00FA:
	if (!var0001) goto labelFunc043C_00EF;
	message("Brownie 指着你的徽章。「说实话，我不知道你在那个团体里看到了什么。」");
	say();
	goto labelFunc043C_00F3;
labelFunc043C_00EF:
	message("「如果你不与友谊会同流合污，你就是在反对他们。我想他们把我视为一个必须被阻止的潜在敌人。」");
	say();
labelFunc043C_00F3:
	UI_remove_answer("友谊会");
labelFunc043C_00FA:
	case "输家" attend labelFunc043C_0114:
	message("「当然，如果我想要的话，我本来是可以赢得选举的。我掌握了关于 Patterson 的情报，那会毁掉他所有获胜的机会。」");
	say();
	UI_remove_answer("输家");
	UI_add_answer("情报");
labelFunc043C_0114:
	case "情报" attend labelFunc043C_012E:
	message("「我本来可以揭露一个关于 Patterson 的秘密，但如果我这么做了，会对他身边亲近的人造成很大的伤害。我并没有那么想当市长。」");
	say();
	UI_remove_answer("情报");
	UI_add_answer("秘密");
labelFunc043C_012E:
	case "秘密" attend labelFunc043C_0141:
	message("「Patterson 几乎没有掩饰他的秘密。如果你留意他，你迟早会发现的。」");
	say();
	UI_remove_answer("秘密");
labelFunc043C_0141:
	case "农场" attend labelFunc043C_0161:
	message("「我还是觉得在农场种蔬菜比较自在。还有另一个农夫叫 Mack ，他也在不列颠城附近经营农场。他养鸡。」");
	say();
	UI_remove_answer("农场");
	UI_add_answer(["蔬菜", "Mack"]);
labelFunc043C_0161:
	case "Mack" attend labelFunc043C_0174:
	message("「我喜欢他。他甚至还投票给我。但说实话，关于 Mack ，他是个疯子。」");
	say();
	UI_remove_answer("Mack");
labelFunc043C_0174:
	case "蔬菜" attend labelFunc043C_0194:
	message("「我种南瓜。但我现在遇到了一点麻烦，需要一些帮忙。」");
	say();
	UI_remove_answer("蔬菜");
	UI_add_answer(["麻烦", "帮忙"]);
labelFunc043C_0194:
	case "麻烦" attend labelFunc043C_01A7:
	message("「前几天我搬重南瓜时扭伤了背。我今天连一个小南瓜都搬不动！我需要有人帮忙收成南瓜，这样我才能把它们送到市集去。」");
	say();
	UI_remove_answer("麻烦");
labelFunc043C_01A7:
	case "帮忙" attend labelFunc043C_021B:
	message("「田地北端有一堆南瓜。我需要把它们搬到我的农舍附近。如果你愿意帮我把南瓜搬过来，我很乐意为你的工作付钱。每搬一个南瓜给你一枚金币，听起来如何？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043C_0210;
	message("「太好了！一个帮手！请随时开始工作吧！」");
	say();
	gflags[0x00CE] = true;
	var0003 = UI_find_nearby_avatar(0x0014);
	var0004 = UI_find_nearby_avatar(0x0015);
	enum();
labelFunc043C_01DC:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc043C_01F4;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01DC;
labelFunc043C_01F4:
	enum();
labelFunc043C_01F5:
	for (var0007 in var0004 with var0008 to var0009) attend labelFunc043C_020D;
	UI_set_item_flag(var0007, 0x000B);
	goto labelFunc043C_01F5;
labelFunc043C_020D:
	goto labelFunc043C_0214;
labelFunc043C_0210:
	message("「那么，也许下次吧。」");
	say();
labelFunc043C_0214:
	UI_remove_answer("帮忙");
labelFunc043C_021B:
	case "南瓜" attend labelFunc043C_023A:
	if (!gflags[0x00CE]) goto labelFunc043C_022F;
	Func0857();
	goto labelFunc043C_0233;
labelFunc043C_022F:
	message("「你只要去田地北端，带回尽可能多你能拿的南瓜就行了！」");
	say();
labelFunc043C_0233:
	UI_remove_answer("南瓜");
labelFunc043C_023A:
	case "告辞" attend labelFunc043C_0245:
	goto labelFunc043C_0248;
labelFunc043C_0245:
	goto labelFunc043C_0058;
labelFunc043C_0248:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc043C_0253:
	if (!(event == 0x0000)) goto labelFunc043C_0261;
	Func092E(0xFFC4);
labelFunc043C_0261:
	return;
}


