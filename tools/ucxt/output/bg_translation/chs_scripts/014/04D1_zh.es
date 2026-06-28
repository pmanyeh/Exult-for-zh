#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D1 object#(0x4D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D1_0224;
	UI_show_npc_face(0xFF2F, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0088]) goto labelFunc04D1_0043;
	UI_add_answer("Elizabeth 与 Abraham");
labelFunc04D1_0043:
	if (!(!gflags[0x028E])) goto labelFunc04D1_0055;
	message("你看到一个眉头紧锁的中年男子，仿佛他一直在担忧。");
	say();
	gflags[0x028E] = true;
	goto labelFunc04D1_005F;
labelFunc04D1_0055:
	message("「我能怎么帮助你，");
	message(var0001);
	message("？」");
	say();
labelFunc04D1_005F:
	converse attend labelFunc04D1_0219;
	case "姓名" attend labelFunc04D1_0075:
	message("「请叫我 Auston。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D1_0075:
	case "职业" attend labelFunc04D1_0088:
	message("他叹了口气才回答。「我是 Vesper 的镇长。」");
	say();
	UI_add_answer("Vesper");
labelFunc04D1_0088:
	case "Vesper" attend labelFunc04D1_00AE:
	message("「过去这里是个宜人的地方。但现在，");
	message(var0001);
	message("，我们的人民和那些石像鬼之间的动乱造成了许多问题。」");
	say();
	UI_add_answer(["问题", "人民"]);
	UI_remove_answer("Vesper");
labelFunc04D1_00AE:
	case "问题" attend labelFunc04D1_00E4:
	message("「我担心石像鬼可能会变得不安并攻击我们。 Blorn 并没有帮上忙。」他指着自己的胸口。「我负责维持这里的秩序。如果没有秩序，那就是我的责任。我已经问过 Eldroth 如果发生暴动该怎么办，我正在尝试制定相应的计划。」");
	say();
	UI_add_answer("石像鬼");
	if (!(!var0003)) goto labelFunc04D1_00CF;
	UI_add_answer("Eldroth");
labelFunc04D1_00CF:
	if (!(!var0002)) goto labelFunc04D1_00DD;
	UI_add_answer("Blorn");
labelFunc04D1_00DD:
	UI_remove_answer("问题");
labelFunc04D1_00E4:
	case "石像鬼" attend labelFunc04D1_00FD:
	message("「我和你一样不信任他们，");
	message(var0000);
	message("，但在官方层面上，他们也是公民。恐怕有一天他们会试图以武力夺取城镇的控制权。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04D1_00FD:
	case "Liana" attend labelFunc04D1_0110:
	message("「她是我的书记员。她非常有效率。没有她，我无法治理 Vesper 。」");
	say();
	UI_remove_answer("Liana");
labelFunc04D1_0110:
	case "人民" attend labelFunc04D1_017F:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0004) goto labelFunc04D1_013C;
	UI_add_answer("羞耻");
	var0005 = " -- 关于他的遭遇，真是令人遗憾。 -- ";
	goto labelFunc04D1_0142;
labelFunc04D1_013C:
	var0005 = " ";
labelFunc04D1_0142:
	message("「我尽可能与尽多市民保持联系，但我并不是非常了解所有人。我认识 Cador");
	message(var0005);
	message("自从不列颠尼亚矿业公司地方分部开设以来，就一直负责该分部。他与 Yvella 结婚了。我相信他们是那个友谊会组织的成员。~~「当然，还有 Eldroth ，还有一位训练师，以及 Yongi 。还有，」他皱着眉头补充最后一个，「Blorn 。另外，你应该跟 Liana 谈谈。她认识一些我不认识的人。恐怕我对每个人的了解不如我应该有的那么多。」");
	say();
	UI_add_answer(["训练师", "Yongi", "Liana"]);
	if (!(!var0003)) goto labelFunc04D1_016A;
	UI_add_answer("Eldroth");
labelFunc04D1_016A:
	if (!(!var0002)) goto labelFunc04D1_0178;
	UI_add_answer("Blorn");
labelFunc04D1_0178:
	UI_remove_answer("人民");
labelFunc04D1_017F:
	case "羞耻" attend labelFunc04D1_0192:
	message("「我以为你会知道。」他抚摸着胡须。~~「Cador 在镀金蜥蜴 (Gilded Lizard) 的一场战斗中被杀。这是 Vesper 首次发生这种行为。相当奇怪。」");
	say();
	UI_remove_answer("羞耻");
labelFunc04D1_0192:
	case "Eldroth" attend labelFunc04D1_01A9:
	message("「Eldroth 担任我们的顾问。他一直在为我们镇上的人们提供建议……嗯，比我能记得的时间还长。他拥有一家物资商店。」");
	say();
	var0003 = true;
	UI_remove_answer("Eldroth");
labelFunc04D1_01A9:
	case "训练师" attend labelFunc04D1_01BC:
	message("「Zaksam 是我们的训练师。他可以教你如何更好地保护自己。如果石像鬼惹事，我很庆幸他会保护我们这边。」");
	say();
	UI_remove_answer("训练师");
labelFunc04D1_01BC:
	case "Yongi" attend labelFunc04D1_01CF:
	message("「他在酒馆供应饮料。许多人称他为沙漠这一侧最好的酒保。来自全不列颠尼亚的人都来找他谈话，」他自豪地说。");
	say();
	UI_remove_answer("Yongi");
labelFunc04D1_01CF:
	case "Blorn" attend labelFunc04D1_01E6:
	message("「我不确定该怎么看他。我不知道他以什么为生，但我知道石像鬼比恨我们其他人更恨他。我很害怕会发生什么事，因为很明显他也对他们抱有同样的感觉。」");
	say();
	var0002 = true;
	UI_remove_answer("Blorn");
labelFunc04D1_01E6:
	case "Elizabeth 与 Abraham" attend labelFunc04D1_020B:
	if (!(!gflags[0x01EF])) goto labelFunc04D1_0200;
	message("「他们是友谊会成员。他们刚刚来到这里是为了看看在 Vesper 设立分部的事。我想我们会允许的。我相信这对夫妇已经前往 Moonglow 了。他们说他们正在前往那里为当地的分部负责人进行培训课程。但我知道他们在出城的路上会停在不列颠尼亚矿业公司的分部。我不知道为什么。」");
	say();
	gflags[0x0284] = true;
	goto labelFunc04D1_0204;
labelFunc04D1_0200:
	message("「我已经很多很多天没见到那对友谊会夫妇了。我不知道他们现在会在哪里。」");
	say();
labelFunc04D1_0204:
	UI_remove_answer("Elizabeth 与 Abraham");
labelFunc04D1_020B:
	case "告辞" attend labelFunc04D1_0216:
	goto labelFunc04D1_0219;
labelFunc04D1_0216:
	goto labelFunc04D1_005F;
labelFunc04D1_0219:
	endconv;
	message("「再见，");
	message(var0001);
	message("。」*");
	say();
labelFunc04D1_0224:
	if (!(event == 0x0000)) goto labelFunc04D1_022D;
	abort;
labelFunc04D1_022D:
	return;
}


