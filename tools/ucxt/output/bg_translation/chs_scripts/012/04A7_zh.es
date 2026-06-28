#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A7 object#(0x4A7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04A7_0478;
	UI_show_npc_face(0xFF59, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(gflags[0x0236] && (!gflags[0x0213]))) goto labelFunc04A7_00B4;
	if (!(!gflags[0x0212])) goto labelFunc04A7_0051;
	message("「圣者！你知道商人 Morfin 被偷了一批银蛇毒液吗？这起窃案给社区带来了不小的困扰。」");
	say();
	goto labelFunc04A7_0055;
labelFunc04A7_0051:
	message("「圣者！喔，圣者！我有消息！」");
	say();
labelFunc04A7_0055:
	message("「我的儿子 Garritt 告诉我 Tobias 身上有一些银蛇毒液。我去调查，发现 Tobias 确实有！」*");
	say();
	var0004 = Func08F7(0xFF56);
	if (!var0004) goto labelFunc04A7_0087;
	UI_show_npc_face(0xFF56, 0x0000);
	message("「没错！我是见证人，Feridwyn 说的是实话！」*");
	say();
	UI_remove_npc_face(0xFF56);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_0087:
	message("「我常说 Tobias 不是好东西。现在有了证据。他就是那个一直掠夺我们诚实商人之一的小偷！想到我居然让他接触我的儿子！我希望他能得到适当的惩处，这对于一个将年轻人引入歧途、偏离友谊会之道的人是应该的。");
	say();
	message("「我建议你立刻去跟他的母亲谈谈！Camille 应该对她的后代严加管教！」*");
	say();
	gflags[0x0213] = true;
	gflags[0x021C] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x0003);
	UI_set_schedule_type(UI_get_npc_object(0xFF59), 0x000B);
	abort;
labelFunc04A7_00B4:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0105]) goto labelFunc04A7_00D1;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04A7_00D1:
	var0005 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0005) goto labelFunc04A7_00FD;
	var0002 = true;
	UI_add_answer(["找到毒液", "结案"]);
labelFunc04A7_00FD:
	if (!gflags[0x0218]) goto labelFunc04A7_0119;
	UI_add_answer(["找到毒液", "抓住 Garritt", "采取行动", "Tobias", "结案"]);
labelFunc04A7_0119:
	if (!(!gflags[0x0220])) goto labelFunc04A7_012F;
	message("「你看到一个身形矮小，姿势扭曲倾斜的男人。他上下打量你后，才决定跟你说话。」");
	say();
	message("「我得到消息说你要来我们的镇上。我一直期待着你。但我必须承认，我很难相信你真的是圣者。」");
	say();
	gflags[0x0220] = true;
	goto labelFunc04A7_0133;
labelFunc04A7_012F:
	message("「你想再跟我说话吗，圣者？」Feridwyn 说。");
	say();
labelFunc04A7_0133:
	converse attend labelFunc04A7_046D;
	case "姓名" attend labelFunc04A7_0149:
	message("「我的名字是 Feridwyn。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A7_0149:
	case "职业" attend labelFunc04A7_016B:
	message("「我和我的妻子 Brita 以及儿子 Garritt 在 Paws 这里经营友谊会的庇护所。」");
	say();
	UI_add_answer(["友谊会", "庇护所", "Brita", "Garritt", "Paws"]);
labelFunc04A7_016B:
	case "友谊会" attend labelFunc04A7_01A8:
	if (!(!(var0001 && (!gflags[0x0006])))) goto labelFunc04A7_019D;
	message("「你想加入吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A7_0196;
	message("「那你必须去见不列颠城的巴特林。他是友谊会的创始人。」");
	say();
	goto labelFunc04A7_019A;
labelFunc04A7_0196:
	message("「你还不明白，通过友谊会的指引，你的生活可以得到多大的改善。」");
	say();
labelFunc04A7_019A:
	goto labelFunc04A7_01A1;
labelFunc04A7_019D:
	message("「温和的圣者，你来我们这个简陋的小镇真是太好了。你很清楚，如果要减轻不列颠尼亚不幸者的痛苦，友谊会还有很多任务作要做。」");
	say();
labelFunc04A7_01A1:
	UI_remove_answer("友谊会");
labelFunc04A7_01A8:
	case "庇护所" attend labelFunc04A7_01BB:
	message("「这是全不列颠尼亚唯一一个为援助和照顾穷人而设的地方。这是一项艰苦的工作，但我们努力使自己配得上我们想要得到的东西。」");
	say();
	UI_remove_answer("庇护所");
labelFunc04A7_01BB:
	case "Brita" attend labelFunc04A7_020A:
	if (!(!gflags[0x0221])) goto labelFunc04A7_01FF;
	message("「一位很棒的女人。你应该见见她。」");
	say();
	var0007 = Func08F7(0xFF58);
	if (!var0007) goto labelFunc04A7_01FC;
	UI_show_npc_face(0xFF58, 0x0000);
	message("「我丈夫真是个马屁精。事实是，我们为友谊会所做的工作让我们更亲近了。」*");
	say();
	UI_remove_npc_face(0xFF58);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_01FC:
	goto labelFunc04A7_0203;
labelFunc04A7_01FF:
	message("「既然你已经认识我的妻子 Brita，我敢肯定你会同意，你找不到比她更致力于友谊会教义的实践者了。」");
	say();
labelFunc04A7_0203:
	UI_remove_answer("Brita");
labelFunc04A7_020A:
	case "Garritt" attend labelFunc04A7_0224:
	message("「幸运的是，通过强调友谊会的教义，我们能够适当地抚养我们的儿子。Garritt 不会被周围的贫困困住。他将在智力、精神和道德上更加优越。他还很有才华呢！」");
	say();
	UI_remove_answer("Garritt");
	UI_add_answer("有才华");
labelFunc04A7_0224:
	case "有才华" attend labelFunc04A7_0237:
	message("「以他这个年纪的男孩来说，他把排笛吹得非常好！Brita 和我都很骄傲。当他长大后，他或许能进入不列颠城的音乐厅！」");
	say();
	UI_remove_answer("有才华");
labelFunc04A7_0237:
	case "Paws" attend labelFunc04A7_025D:
	message("「因为这是一个没有什么特权，也没什么隐私的小镇，我们家对 Paws 的每一个人都相当了解。有你想听听关于谁的事吗？我对这些人很熟悉。」");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["商人们", "农夫们", "庇护所居民", "乞丐们"]);
labelFunc04A7_025D:
	case "商人们" attend labelFunc04A7_0283:
	message("「他们是 Morfin、Andrew、Thurston 和 Beverlea。」");
	say();
	UI_add_answer(["Morfin", "Andrew", "Thurston", "Beverlea"]);
	UI_remove_answer("商人们");
labelFunc04A7_0283:
	case "Beverlea" attend labelFunc04A7_0296:
	message("「她是一位几乎失明的年长妇女，在河东岸经营古董店。」");
	say();
	UI_remove_answer("Beverlea");
labelFunc04A7_0296:
	case "农夫们" attend labelFunc04A7_02B6:
	message("「那就是 Camille 和她的儿子 Tobias。」");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("农夫们");
labelFunc04A7_02B6:
	case "乞丐们" attend labelFunc04A7_02D6:
	message("「喔。他们。Komor 和 Fenn。」Feridwyn 翻了翻白眼。");
	say();
	UI_add_answer(["Komor", "Fenn"]);
	UI_remove_answer("乞丐们");
labelFunc04A7_02D6:
	case "庇护所居民" attend labelFunc04A7_02F6:
	message("「我们的居民包括 Alina 和她的孩子，以及 Merrick。」");
	say();
	UI_add_answer(["Alina", "Merrick"]);
	UI_remove_answer("庇护所居民");
labelFunc04A7_02F6:
	case "Alina" attend labelFunc04A7_0309:
	message("「她的丈夫目前在不列颠城的某个地方。我不知道详情。她有一个小孩子。」");
	say();
	UI_remove_answer("Alina");
labelFunc04A7_0309:
	case "Elizabeth 和 Abraham" attend labelFunc04A7_032E:
	if (!(!gflags[0x016B])) goto labelFunc04A7_0323;
	message("「我很抱歉！你刚好错过他们了！Elizabeth 和 Abraham 在这里递送资金，但他们现在已经去了 Jhelom。那里目前没有友谊会分会，所以他们要把内在力量的三位一体带到西方的土地上！」");
	say();
	gflags[0x0217] = true;
	goto labelFunc04A7_0327;
labelFunc04A7_0323:
	message("「我已经很多天没见过 Elizabeth 和 Abraham 了。」");
	say();
labelFunc04A7_0327:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04A7_032E:
	case "Thurston" attend labelFunc04A7_0341:
	message("「Thurston 拥有磨坊。如果他经营事业时能多着眼于利润，他可以做得更好。」");
	say();
	UI_remove_answer("Thurston");
labelFunc04A7_0341:
	case "Camille" attend labelFunc04A7_0354:
	message("「她是个悲伤的女人——一个寡妇——活在过去。真是可惜。幸运的是她丈夫留给她的农场的确还有盈利。」");
	say();
	UI_remove_answer("Camille");
labelFunc04A7_0354:
	case "Merrick" attend labelFunc04A7_0367:
	message("「这是一个友谊会彻底改变某人生活的好例子。目前他住在我们的庇护所里。」");
	say();
	UI_remove_answer("Merrick");
labelFunc04A7_0367:
	case "Morfin" attend labelFunc04A7_0381:
	message("「Morfin 是一个聪明勤奋的友谊会成员。他经营当地的屠宰场，也是个蛇毒商人。」");
	say();
	UI_add_answer("蛇毒");
	UI_remove_answer("Morfin");
labelFunc04A7_0381:
	case "Andrew" attend labelFunc04A7_0394:
	message("「Andrew 是一个非常快乐的年轻人。他没有注意到自己身上有着无数的个人问题。」");
	say();
	UI_remove_answer("Andrew");
labelFunc04A7_0394:
	case "Tobias" attend labelFunc04A7_03B5:
	if (!(!gflags[0x0218])) goto labelFunc04A7_03AA;
	message("「当地的流氓。我通常不会允许 Garritt 跟这样的麻烦制造者交往，但友谊会教我要做个宽容的父母。此外，跟我的儿子交往可能会对那小伙子有些好处。谁知道呢？」");
	say();
	goto labelFunc04A7_03AE;
labelFunc04A7_03AA:
	message("「不管 Tobias 有没有亲自偷毒液。我儿子就是被他带坏的，因此发生这起窃案。虽然他的行为还不到犯罪的程度，我还是怪罪 Tobias。」");
	say();
labelFunc04A7_03AE:
	UI_remove_answer("Tobias");
labelFunc04A7_03B5:
	case "Fenn" attend labelFunc04A7_03C8:
	message("「Fenn 是一个拒绝友谊会所有援助的乞丐。一个可悲的案例。连他以前的朋友 Merrick 都无法再接触到他。」");
	say();
	UI_remove_answer("Fenn");
labelFunc04A7_03C8:
	case "Komor" attend labelFunc04A7_03DB:
	message("「Komor 是我见过最可恨的人。他就是个满腹怨气的结合体。在我们认识的时间里，Komor 对我说的每一句话，充其量也不过是层薄薄伪装的侮辱。」");
	say();
	UI_remove_answer("Komor");
labelFunc04A7_03DB:
	case "结案" attend labelFunc04A7_03FF:
	if (!(gflags[0x0218] || var0002)) goto labelFunc04A7_03F4;
	message("「幸好有你彻底的努力，我们现在可以把这起蛇毒窃案抛在脑后了。我会处理我儿子的。我们别再谈这件事了。」");
	say();
	goto labelFunc04A7_03F8;
labelFunc04A7_03F4:
	message("「谢天谢地，我那眼尖的男孩 Garritt 查清了这起蛇毒窃案的真相。坦白说，我自己也怀疑过 Tobias。」");
	say();
labelFunc04A7_03F8:
	UI_remove_answer("结案");
labelFunc04A7_03FF:
	case "蛇毒" attend labelFunc04A7_0416:
	message("「当地的商人 Morfin 告诉我，他的一批银蛇毒液被偷了。小偷仍在逃，所以要小心！当然，我不知道为什么会有人想要这种邪恶的物质。这对健康肯定没好处。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("蛇毒");
labelFunc04A7_0416:
	case "采取行动" attend labelFunc04A7_0429:
	message("「我向你保证，我会对我的儿子施加必要的管教，以确保他从当地小混混那里沾染的坏习惯，不会再给这个村子带来麻烦。」");
	say();
	UI_remove_answer("采取行动");
labelFunc04A7_0429:
	case "找到毒液" attend labelFunc04A7_044A:
	if (!(!gflags[0x0218])) goto labelFunc04A7_043F;
	message("「你在 Garritt 的物品中发现了装毒液的小瓶？我很惊讶！我大为震惊！我……很抱歉。」");
	say();
	goto labelFunc04A7_0443;
labelFunc04A7_043F:
	message("「你真是个足智多谋的人。不幸的是，你的发现让我非常难过。」");
	say();
labelFunc04A7_0443:
	UI_remove_answer("找到毒液");
labelFunc04A7_044A:
	case "抓住 Garritt" attend labelFunc04A7_045D:
	message("「你说我儿子承认偷了毒液？！我不知道该说什么。感谢你，圣者，揭开了真相。」");
	say();
	UI_remove_answer("抓住 Garritt");
labelFunc04A7_045D:
	case "告辞" attend labelFunc04A7_046A:
	message("「愿你与友谊会同行。」*");
	say();
	abort;
labelFunc04A7_046A:
	goto labelFunc04A7_0133;
labelFunc04A7_046D:
	endconv;
	if (!var0003) goto labelFunc04A7_0478;
	message("「你意识到这个方块，并没有引出任何 Feridwyn 自己不相信的东西。他是 Guardian 那些天真的追随者之一。」");
	say();
labelFunc04A7_0478:
	if (!(event == 0x0000)) goto labelFunc04A7_0486;
	Func092E(0xFF59);
labelFunc04A7_0486:
	return;
}


