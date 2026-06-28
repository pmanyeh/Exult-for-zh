#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0445 object#(0x445) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0445_0009;
	abort;
labelFunc0445_0009:
	UI_show_npc_face(0xFFBB, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = UI_find_nearest(0xFE9C, 0x018A, 0xFFFF);
	if (!(!gflags[0x00C6])) goto labelFunc0445_004B;
	message("你看见一个彻底灰心丧志的年轻人，正在铁窗后痛苦地憔悴着。");
	say();
	gflags[0x00C6] = true;
	goto labelFunc0445_0055;
labelFunc0445_004B:
	message("「又见面了，");
	message(var0000);
	message("，」 Weston 说。");
	say();
labelFunc0445_0055:
	converse attend labelFunc0445_032F;
	case "姓名" attend labelFunc0445_006B:
	message("「我是 Weston 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0445_006B:
	case "职业" attend labelFunc0445_00A3:
	message("「只要我还被留在这座监狱里等死，我就没有工作。」");
	say();
	if (!var0001) goto labelFunc0445_009C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「你的工作就是为你犯下的罪行付出代价。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_009C:
	UI_add_answer("监狱");
labelFunc0445_00A3:
	case "监狱" attend labelFunc0445_00E8:
	message("「我的罪行是从皇家果园偷苹果。这是我做的，我也坦白承认。如果在同样的情况下，我还会再做一次。」");
	say();
	if (!var0001) goto labelFunc0445_00D4;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「啊哈！不仅是个不知悔改的罪犯，还是个潜在的职业小偷！看来这家伙来对了地方，而且正是时候。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_00D4:
	UI_remove_answer("监狱");
	UI_add_answer(["偷苹果", "情况"]);
labelFunc0445_00E8:
	case "偷苹果" attend labelFunc0445_012D:
	message("「我一开始有提议要买，但是果园管理员 Figg 开出了一个天价，我敢肯定他会把那笔钱中饱私囊。所以，是的，我承认我偷了它们。」");
	say();
	if (!var0001) goto labelFunc0445_0119;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「看看这种普通罪犯如何将自己不道德的行为怪罪到别人身上，同时还不承认自己的错！这家伙已经无可救药了。」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0119:
	UI_remove_answer("偷苹果");
	UI_add_answer(["Figg", "承认"]);
labelFunc0445_012D:
	case "Figg" attend labelFunc0445_016F:
	message("「我相当肯定，他未经不列颠王的同意，就免费把一篮篮的水果送给友谊会。」");
	say();
	gflags[0x0094] = true;
	if (!var0001) goto labelFunc0445_0168;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「你不应该听信这种明显的诽谤，");
	message(var0000);
	message("！这全是道听途说！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0168:
	UI_remove_answer("Figg");
labelFunc0445_016F:
	case "承认" attend labelFunc0445_0182:
	message("「我唯一的遗憾是没有试着偷更大点的东西，而且我没有成功逃脱。」");
	say();
	UI_remove_answer("承认");
labelFunc0445_0182:
	case "情况" attend labelFunc0445_01C7:
	message("「我不是不列颠城人，");
	message(var0000);
	message("。我来自 Paws ，这也是他们认为我可以被随便对待的另一个原因。」");
	say();
	if (!var0001) goto labelFunc0445_01B9;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「这个囚犯来自 Paws ！我他妈的早就知道了！值得赞赏的是，他在镇上待了将近一整天才偷东西。对一个 Paws 的公民来说，这已经是尽可能地诚实了！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_01B9:
	UI_remove_answer("情况");
	UI_add_answer("Paws");
labelFunc0445_01C7:
	case "Paws" attend labelFunc0445_020C:
	message("「Paws 是一个会让你感到贫穷如冰冷之手般紧紧揪住你心脏的小镇。」");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["小镇", "贫穷"]);
	if (!var0001) goto labelFunc0445_020C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔该死！现在我猜他又要开始告诉我们他那可悲的一生了！你能不能等我拿出我的手帕，免得我嚎啕大哭打断了你啊！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_020C:
	case "小镇" attend labelFunc0445_021F:
	message("「不久前， Paws 还是一个繁荣的乡村沿海村庄。但随着不列颠城的扩张，我们大部分的当地企业都搬到了那里。我们变成了一个农业小镇，而那场七年的干旱给了我们沉重的打击，我们至今仍未恢复过来。」");
	say();
	UI_remove_answer("小镇");
labelFunc0445_021F:
	case "贫穷" attend labelFunc0445_0264:
	message("「我并不想哀叹我的命运，但我的家人住在 Paws ——我的妻子 Alina 和我的孩子 Cassie 。他们快饿死了，我来不列颠城是为了给他们找食物。」");
	say();
	if (!var0001) goto labelFunc0445_0250;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔，得了吧！别把贫穷当作你犯罪的借口！我父亲穷到他和他的家人必须吃土。但他还是把我教得好好的。我告诉你，如果他觉得我做错了什么事，他绝对会把我揍得屁滚尿流！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0250:
	UI_remove_answer("贫穷");
	UI_add_answer(["家人", "饿死"]);
labelFunc0445_0264:
	case "家人" attend labelFunc0445_0277:
	message("「我不求对我自己的任何怜悯。我已经认罪了。但我的生命不只属于我自己。它也属于我的妻子和家人。没有我，他们将遭受难以忍受的苦难，他们可能无法活下去。」");
	say();
	UI_remove_answer("家人");
labelFunc0445_0277:
	case "饿死" attend labelFunc0445_02BC:
	message("「尽管有些愚人会说出相反的话，但不列颠尼亚的人民正被阶级制度的恶毒暴政所压榨。当少数人拥有比他们能享受的还多更多的东西时，有许多人每晚却只能饿着肚子入睡。我的妻子和女儿就是其中两个。」");
	say();
	if (!var0001) goto labelFunc0445_02A8;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「喔，这提醒我快到我的用餐时间了！听说今天农夫市集的鳟鱼很美味。」");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_02A8:
	UI_remove_answer("饿死");
	UI_add_answer(["愚人", "阶级制度"]);
labelFunc0445_02BC:
	case "愚人" attend labelFunc0445_02CF:
	message("「像我们这位好朋友守卫这样的愚人，会想让我们相信不列颠尼亚在两百多年来什么都没变。我们可以装作所有的问题都不存在一样地过日子。我告诉你，一开始就是像那样的人制造了我们的问题。」");
	say();
	UI_remove_answer("愚人");
labelFunc0445_02CF:
	case "阶级制度" attend labelFunc0445_0321:
	message("「虽然我肯定不列颠王是一位公正公平的统治者，但他必定对他的王国里发生的一切相当不知情。他绝对不会容忍这种不平等的。」");
	say();
	if (!var0001) goto labelFunc0445_0300;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("「好了！你的废话够多了！整天唧唧歪歪地抱怨那可怕糟糕的阶级制度！怎么，接下来你是不是要说社会该为你的罪行负责？没有任何人对维持法律和秩序表达任何感谢。没错，当然没有！反而全世界的怜悯都给了那些对社会造成真正威胁的危险违法者！」*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0300:
	message("「你愿意跟不列颠王谈谈我的事吗？我敢打赌他对我的案子完全不知情！拜托！你愿意跟他谈谈吗？」");
	say();
	if (!Func090A()) goto labelFunc0445_0315;
	message("「喔，感谢你，圣者！我的命运，以及我妻子和女儿的命运都掌握在你手中了！」");
	say();
	gflags[0x00CD] = true;
	goto labelFunc0445_031A;
labelFunc0445_0315:
	message("Weston 低下头。「那你为什么要跟我说话？走开，让我一个人痛苦吧。」*");
	say();
	abort;
labelFunc0445_031A:
	UI_remove_answer("阶级制度");
labelFunc0445_0321:
	case "告辞" attend labelFunc0445_032C:
	goto labelFunc0445_032F;
labelFunc0445_032C:
	goto labelFunc0445_0055;
labelFunc0445_032F:
	endconv;
	message("「感谢你来看我。」*");
	say();
	return;
}


