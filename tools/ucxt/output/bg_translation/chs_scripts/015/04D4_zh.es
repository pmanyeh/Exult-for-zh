#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04D4 object#(0x4D4) ()
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
	var var000B;

	if (!(event == 0x0001)) goto labelFunc04D4_02F6;
	UI_show_npc_face(0xFF2C, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF35));
	var0004 = "圣者";
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!(gflags[0x027E] && (!gflags[0x0285]))) goto labelFunc04D4_005B;
	UI_add_answer("中午的 Catherine");
labelFunc04D4_005B:
	if (!gflags[0x0286]) goto labelFunc04D4_0067;
	var0005 = var0000;
labelFunc04D4_0067:
	if (!gflags[0x0287]) goto labelFunc04D4_0073;
	var0005 = var0001;
labelFunc04D4_0073:
	if (!(!gflags[0x0291])) goto labelFunc04D4_00D6;
	message("你看到的这位主妇脸上带着担忧的表情。~~「日安，");
	message(var0001);
	message("。我是 Yvella 。」她屈膝行礼。「我能知道你的名字吗？」");
	say();
	var0006 = Func090B([var0000, var0004]);
	if (!(var0006 == var0000)) goto labelFunc04D4_00B1;
	message("「很高兴认识你，");
	message(var0000);
	message("。」");
	say();
	gflags[0x0286] = true;
	var0005 = var0000;
labelFunc04D4_00B1:
	if (!(var0006 == var0004)) goto labelFunc04D4_00CF;
	message("「好了，好了，");
	message(var0001);
	message("，你不应该这样撒谎。」");
	say();
	gflags[0x0287] = true;
	var0005 = var0001;
labelFunc04D4_00CF:
	gflags[0x0291] = true;
	goto labelFunc04D4_00E0;
labelFunc04D4_00D6:
	message("「日安，");
	message(var0005);
	message("。」");
	say();
labelFunc04D4_00E0:
	converse attend labelFunc04D4_02EB;
	case "姓名" attend labelFunc04D4_00FC:
	message("「我是 Yvella ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D4_00FC:
	case "职业" attend labelFunc04D4_011D:
	message("「在 Cador 工作的时候，我照顾我的女儿 Catherine 。」");
	say();
	if (!(!var0002)) goto labelFunc04D4_0116;
	UI_add_answer("Cador");
labelFunc04D4_0116:
	UI_add_answer("Catherine");
labelFunc04D4_011D:
	case "友谊会" attend labelFunc04D4_013E:
	message("「你没听过友谊会吗？它是个很棒的组织。他们举办游行和节庆，甚至为全不列颠尼亚的无家可归者建造了庇护所。我的丈夫一段时间前得知了他们，从那之后我们就一直是快乐的成员。」");
	say();
	if (!(!var0002)) goto labelFunc04D4_0137;
	UI_add_answer("丈夫");
labelFunc04D4_0137:
	UI_remove_answer("友谊会");
labelFunc04D4_013E:
	case "Cador", "丈夫" attend labelFunc04D4_0196:
	if (!var0003) goto labelFunc04D4_0156;
	message("「Cador 是我的丈夫。他是这里 Vesper 的不列颠尼亚矿业公司的监督。我不敢相信他已经走了，」她啜泣着。~~「我一次又一次地告诉他，酒馆不是个消磨夜晚的好地方。而现在，他死了，留下我和 Catherine 没有丈夫也没有父亲！」");
	say();
	goto labelFunc04D4_017E;
labelFunc04D4_0156:
	message("「Cador 是我的丈夫。他是这里 Vesper 的不列颠尼亚矿业公司的监督。」");
	say();
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04D4_017E;
	message("「这个时间他通常在酒馆。我真的希望他不要每晚都和那个……那个……女人去那里！」");
	say();
	UI_add_answer("女人");
labelFunc04D4_017E:
	UI_remove_answer(["Cador", "丈夫"]);
	UI_add_answer("Vesper");
	var0002 = true;
labelFunc04D4_0196:
	case "女人" attend labelFunc04D4_01A9:
	message("「她的名字是 Mara 。她是一位矿工同僚。她人很好，但也非常美丽。我不喜欢我的丈夫花那么多时间和她在一起。」");
	say();
	UI_remove_answer("女人");
labelFunc04D4_01A9:
	case "Vesper" attend labelFunc04D4_01C9:
	message("「嗯，如果没有那些……那些……石像鬼，这会是个可爱的城镇。他们是令人作呕的生物。我认为 Auston 应该把他们赶出城镇。」");
	say();
	UI_add_answer(["Auston", "石像鬼"]);
	UI_remove_answer("Vesper");
labelFunc04D4_01C9:
	case "Auston" attend labelFunc04D4_0200:
	message("「他是我们的镇长。 Eldroth 建议我们选他，所以我们当然选了。然而，我们私下说，如果 Auston 不赶快做点什么，我认为我们应该换个新人。事实上，你应该竞选镇长，");
	message(var0001);
	message("。你觉得如何？你想竞选镇长吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04D4_01EE;
	message("「我同意，你应该考虑一下。」");
	say();
	goto labelFunc04D4_01F2;
labelFunc04D4_01EE:
	message("「太可惜了。我相信你会非常适合这个职位。」");
	say();
labelFunc04D4_01F2:
	UI_add_answer("Eldroth");
	UI_remove_answer("Auston");
labelFunc04D4_0200:
	case "Eldroth" attend labelFunc04D4_0213:
	message("「他是我们的城镇顾问。 Eldroth 是个非常有智能的人。他也卖物资。」");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D4_0213:
	case "石像鬼" attend labelFunc04D4_0244:
	message("「绝对可悲的野兽。谢天谢地，他们大多数人都留在绿洲的他们那一侧。我不知道 Cador 怎么受得了和他们一起工作。嗯，对他来说是这样。那里现在只有一个还在工作。」");
	say();
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0009) goto labelFunc04D4_023D;
	message("「给，」她说着在她的长袍里摸索。最后，她找到了一张羊皮纸递给你。");
	say();
labelFunc04D4_023D:
	UI_remove_answer("石像鬼");
labelFunc04D4_0244:
	case "Catherine" attend labelFunc04D4_025B:
	message("「我担心她。每天中午，她似乎都会消失几个小时。她有这些愚蠢的想法，认为石像鬼是友善和可敬的。我怕她可能去了绿洲的另一边。哦，我真希望不是。」");
	say();
	gflags[0x027E] = true;
	UI_remove_answer("Catherine");
labelFunc04D4_025B:
	case "中午的 Catherine" attend labelFunc04D4_02DD:
	message("「你知道我女儿中午去哪里了吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04D4_02D9;
	message("「你会告诉我吗？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc04D4_02C4;
	if (!gflags[0x027D]) goto labelFunc04D4_02B7;
	message("在你告诉她之后，她回答：「我就知道！必须教那女孩一些常识。和那些卑劣的生物混在一起。想想看！」她摇了摇头。");
	say();
	if (!var0003) goto labelFunc04D4_029A;
	message("「如果她父亲今天在这里就好了，他会让那个可恶的生物知道他的本分的！」");
	say();
	goto labelFunc04D4_02A5;
labelFunc04D4_029A:
	message("「等着瞧，我这就去告诉她父亲这件事！他和 Mara 肯定会处理这个情况的！」");
	say();
	UI_remove_npc(0xFF2A);
labelFunc04D4_02A5:
	message("「谢谢你，");
	message(var0005);
	message("。我会立刻制止这件事！」*");
	say();
	gflags[0x0285] = true;
	abort;
	goto labelFunc04D4_02C1;
labelFunc04D4_02B7:
	message("在你告诉她之后，她回答：「我怀疑那是真的，");
	message(var0001);
	message("，但我会调查这件事。我感谢你的关心。」");
	say();
labelFunc04D4_02C1:
	goto labelFunc04D4_02CF;
labelFunc04D4_02C4:
	message("「走开，停止嘲弄我！你太残忍了，");
	message(var0005);
	message("!\"*");
	say();
	abort;
labelFunc04D4_02CF:
	UI_remove_answer("中午的 Catherine");
	goto labelFunc04D4_02DD;
labelFunc04D4_02D9:
	message("「哦，好吧。我感谢你的关心。」");
	say();
labelFunc04D4_02DD:
	case "告辞" attend labelFunc04D4_02E8:
	goto labelFunc04D4_02EB;
labelFunc04D4_02E8:
	goto labelFunc04D4_00E0;
labelFunc04D4_02EB:
	endconv;
	message("「旅途愉快，");
	message(var0001);
	message("。」*");
	say();
labelFunc04D4_02F6:
	if (!(event == 0x0000)) goto labelFunc04D4_0304;
	Func092E((long)0xFF2C);
labelFunc04D4_0304:
	return;
}


