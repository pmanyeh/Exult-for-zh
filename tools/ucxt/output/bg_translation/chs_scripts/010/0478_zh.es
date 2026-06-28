#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func0478 object#(0x478) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0478_0278;
	UI_show_npc_face(0xFF88, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0217]) goto labelFunc0478_003C;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc0478_003C:
	if (!gflags[0x0170]) goto labelFunc0478_0049;
	UI_add_answer("Sprellic");
labelFunc0478_0049:
	if (!(!gflags[0x0172])) goto labelFunc0478_005B;
	message("你看到一个男人散发着精明管理者的外在举止，与他年轻的外表形成对比。");
	say();
	gflags[0x0172] = true;
	goto labelFunc0478_005F;
labelFunc0478_005B:
	message("Joseph 恭敬地对你点头。「我能为你效劳吗？」");
	say();
labelFunc0478_005F:
	converse attend labelFunc0478_0273;
	case "姓名" attend labelFunc0478_0075:
	message("「我的名字是 Joseph 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0478_0075:
	case "职业" attend labelFunc0478_008E:
	message("「目前，我是 Jhelom 的市长。」");
	say();
	UI_add_answer(["市长", "Jhelom"]);
labelFunc0478_008E:
	case "市长" attend labelFunc0478_00A1:
	message("「我做这份工作可能看起来有点年轻，但在这样一个城镇，我不仅要管理行政，也经常被要求帮忙维持秩序。我剑与笔并用。」");
	say();
	UI_remove_answer("市长");
labelFunc0478_00A1:
	case "Jhelom" attend labelFunc0478_00BB:
	message("「这座城镇是个粗犷的地方。对于战斗的男男女女来说是个好住处。或许你已经看过我们当地的运动了？」");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer("运动");
labelFunc0478_00BB:
	case "运动" attend labelFunc0478_00DB:
	message("「哎呀，就是决斗！每天中午十二点，城镇广场就会变成战场。」");
	say();
	UI_add_answer(["决斗", "战场"]);
	UI_remove_answer("运动");
labelFunc0478_00DB:
	case "决斗" attend labelFunc0478_00EE:
	message("「嗯，听起来比实际情况糟。这其实只是一种训练和运动的形式。战士们用标靶等东西练习。那就是能找到我的地方，我也在那里保持我自己的技术敏锐。」");
	say();
	UI_remove_answer("决斗");
labelFunc0478_00EE:
	case "战场" attend labelFunc0478_010E:
	message("「我夸张了。镇上许多战士会聚在一起和训练假人对打，练习各种战斗方法。有时候也会有一些无害的比赛。偶尔会有点粗暴。有些人会为此下注并从中获利。」");
	say();
	UI_remove_answer("战场");
	UI_add_answer(["对打", "下注"]);
labelFunc0478_010E:
	case "对打" attend labelFunc0478_0121:
	message("「咳嗯……当然，大多数的决斗只是点到为止，不是生死决斗。这种做法有助于克制路过的无赖和流氓。」");
	say();
	UI_remove_answer("对打");
labelFunc0478_0121:
	case "下注" attend labelFunc0478_0134:
	message("「去跟我们镇上酒馆兼旅馆的 Daphne 或 Ophelia 谈谈。」");
	say();
	UI_remove_answer("下注");
labelFunc0478_0134:
	case "友谊会" attend labelFunc0478_0154:
	message("「这就是许多决斗的原因！有人说友谊会是一堆垃圾，有人说它是唯一的真理。其他人则说那是愚蠢的。当然，作为市长，我在这些事情上保持中立。」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["真理", "愚蠢"]);
labelFunc0478_0154:
	case "Elizabeth 和 Abraham" attend labelFunc0478_0180:
	if (!(!gflags[0x0088])) goto labelFunc0478_016E;
	message("「Elizabeth 和 Abraham ？」 Joseph 抓了抓头。「喔，对了！他们就是刚刚来过的友谊会成员！他们试图在 Jhelom 创建分会。我还没决定要怎么回复他们。我们可能需要召开镇民大会来决定是否要在这里设立分会。这对夫妇说他们要回不列颠城几天。」");
	say();
	gflags[0x016B] = true;
	goto labelFunc0478_0172;
labelFunc0478_016E:
	message("「Elizabeth 和 Abraham ？」 Joseph 抓了抓头。「喔，对了！他们是来过这里的友谊会成员——哎呀，那一定是上个礼拜左右的事了。从那之后我就没见过他们了。」");
	say();
labelFunc0478_0172:
	UI_add_answer("友谊会");
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc0478_0180:
	case "真理" attend labelFunc0478_01A0:
	message("「伤疤图书馆的领导人 De Snel 要求他的成员参与许多决斗。这个礼拜他们可能为某个理念而战，下个礼拜又为相反的立场而战。」");
	say();
	UI_remove_answer("真理");
	UI_add_answer(["De Snel", "伤疤图书馆"]);
labelFunc0478_01A0:
	case "愚蠢" attend labelFunc0478_01C6:
	if (!var0001) goto labelFunc0478_01BB;
	message("Joseph 看起来有点尴尬。「作为友谊会的一员，我无意冒犯你， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0478_01BF;
labelFunc0478_01BB:
	message("「如果你非得知道我的意见，」他自信地小声对你说，「我同意那些说友谊会是一堆愚蠢玩意的人。」");
	say();
labelFunc0478_01BF:
	UI_remove_answer("愚蠢");
labelFunc0478_01C6:
	case "De Snel" attend labelFunc0478_01D9:
	message("「De Snel 说他只希望他的学校能有最好的人才。如果他的战士被打败了，他会把他们踢出去，并招募胜利者加入伤疤图书馆。」");
	say();
	UI_remove_answer("De Snel");
labelFunc0478_01D9:
	case "伤疤图书馆" attend labelFunc0478_01EC:
	message("「它吸引了来自全不列颠尼亚想要向 De Snel 学习的战士。他们是一群不守规矩的人。你最好离他们远点。」");
	say();
	UI_remove_answer("伤疤图书馆");
labelFunc0478_01EC:
	case "Sprellic" attend labelFunc0478_020C:
	message("「是的，我听说过关于 Sprellic 这个人和对抗伤疤图书馆决斗的事，但坦白说，我的官方政策是不介入这种私人争端。」");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer(["介入", "私人争端"]);
labelFunc0478_020C:
	case "介入" attend labelFunc0478_022C:
	message("「De Snel 和我有一种默契。他管他的，我管我的。要在这座城镇维持秩序已经够难了，我不想破坏这种平衡。如果我介入， De Snel 就会向我挑战决斗，如果我被杀了，他对这座城镇的控制将会是绝对的。」");
	say();
	UI_remove_answer("介入");
	UI_add_answer(["挑战", "默契"]);
labelFunc0478_022C:
	case "私人争端" attend labelFunc0478_023F:
	message("「作为市长和维和者，我必须非常谨慎地选择我的战斗。我和伤疤图书馆的成员之间没有任何好感，但他们可以合理地声称自己受了委屈。我在这件事上必须保持中立。就我所见， Sprellic 拿走荣誉旗是自找麻烦。如果你想阻止这场决斗，你只需要说服他把旗子还回去。」");
	say();
	UI_remove_answer("私人争端");
labelFunc0478_023F:
	case "默契" attend labelFunc0478_0252:
	message("「相信我，我们经常在一起并不是因为我们是朋友。我们这么做是为了仔细监视对方。亲近你的朋友，但更要亲近你的敌人。这是 Jhelom 的生存法则。」");
	say();
	UI_remove_answer("默契");
labelFunc0478_0252:
	case "挑战" attend labelFunc0478_0265:
	message("「当我说 De Snel 会向我挑战决斗时，我并不是在暗示那会是一场公平或光荣的比赛——更可能是我走在某条暗巷时，被他手下的某个恶霸从背后捅一刀。所谓的决斗只是他用来让暗杀我这件事听起来光荣一点的说词。」");
	say();
	UI_remove_answer("挑战");
labelFunc0478_0265:
	case "告辞" attend labelFunc0478_0270:
	goto labelFunc0478_0273;
labelFunc0478_0270:
	goto labelFunc0478_005F;
labelFunc0478_0273:
	endconv;
	message("「祝你在我的城市玩得愉快。但如果你没有战斗的胆量，你不该久留。」*");
	say();
labelFunc0478_0278:
	if (!(event == 0x0000)) goto labelFunc0478_0286;
	Func092E(0xFF88);
labelFunc0478_0286:
	return;
}


