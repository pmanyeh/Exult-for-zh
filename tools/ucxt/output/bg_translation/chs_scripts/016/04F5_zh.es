#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04F5 object#(0x4F5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04F5_024A;
	UI_show_npc_face(0xFF0B, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF0B);
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0002 = UI_get_alignment(var0001);
	if (!(var0002 == 0x0002)) goto labelFunc04F5_0050;
	UI_set_schedule_type(var0001, 0x0000);
labelFunc04F5_0050:
	if (!(gflags[0x0159] && gflags[0x0148])) goto labelFunc04F5_0061;
	UI_add_answer("小偷！");
labelFunc04F5_0061:
	if (!(!gflags[0x0148])) goto labelFunc04F5_0073;
	message("这位看起来很友善的修道士示意你过去。");
	say();
	gflags[0x0148] = true;
	goto labelFunc04F5_008A;
labelFunc04F5_0073:
	message("「你好，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x012F]) goto labelFunc04F5_008A;
	UI_add_answer("给予药水");
labelFunc04F5_008A:
	converse attend labelFunc04F5_0245;
	case "姓名" attend labelFunc04F5_00B3:
	message("他笑了。「我的名字是 Kreg，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x0159]) goto labelFunc04F5_00AC;
	UI_add_answer("小偷！");
labelFunc04F5_00AC:
	UI_remove_answer("姓名");
labelFunc04F5_00B3:
	case "职业" attend labelFunc04F5_00CC:
	message("「我是这座修道院的修道士。我正在研究一种炼金术混合物。」");
	say();
	UI_add_answer(["混合物", "修道院"]);
labelFunc04F5_00CC:
	case "小偷！" attend labelFunc04F5_0124:
	message("「啊！发现我了，是吗？这太糟糕了……对你来说！」*");
	say();
	Func0911(0x0064);
	var0003 = UI_count_objects(0xFF0B, 0x0231, 0xFE99, 0xFE99);
	if (!(var0003 < 0x0001)) goto labelFunc04F5_010F;
	var0004 = UI_create_new_object(0x0231);
	var0005 = UI_give_last_created(0xFF0B);
labelFunc04F5_010F:
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
labelFunc04F5_0124:
	case "修道院" attend labelFunc04F5_0137:
	message("「可悲的是，我如此沉迷于我的研究，以至于我没有时间去参观周围的地区或认识任何新面孔。」");
	say();
	UI_remove_answer("修道院");
labelFunc04F5_0137:
	case "混合物" attend labelFunc04F5_015D:
	message("「嗯，");
	message(var0000);
	message("，我们修道院很快就会发下静默的誓言。然而，我们所有人都需要一些时间来适应沉默的声音。因此，我正在研发一种药水，能让饮用者暂时变得沉默。这个概念与隐形药水非常相似。」");
	say();
	UI_add_answer(["誓言", "隐形药水"]);
	UI_remove_answer("混合物");
labelFunc04F5_015D:
	case "誓言" attend labelFunc04F5_017D:
	message("「嗯，」他看起来很尴尬，「在读了一本关于我们如何与前辈比较的书后，我们得知大多数人都期望我们发下静默的誓言。~~「所以，」他耸耸肩，「我们选择这样做，只要我能做出那种药水。我知道这听起来很愚蠢，但我真的相信这会帮助我们生产更多的葡萄酒。」");
	say();
	UI_remove_answer("誓言");
	UI_add_answer(["前辈", "葡萄酒"]);
labelFunc04F5_017D:
	case "前辈" attend labelFunc04F5_0190:
	message("「你肯定知道我在说什么吧？冥想、沉默、美学、苦行僧等等。」");
	say();
	UI_remove_answer("前辈");
labelFunc04F5_0190:
	case "葡萄酒" attend labelFunc04F5_01A3:
	message("「修道士的葡萄酒在整个不列颠尼亚都很有名，或者至少我是这么认为的。」他脸上露出困惑的表情。~~「啊，好吧，那没关系。无论如何，我真诚地推荐你尝尝我们精致的饮品。」");
	say();
	UI_remove_answer("葡萄酒");
labelFunc04F5_01A3:
	case "隐形药水" attend labelFunc04F5_01DE:
	message("「事实上，我的研究陷入了僵局，因为我无法确定某些关键材料的性质。我需要的是一瓶隐形药水来进行分析。然后我就可以从那里取得进展。」他满怀希望地看着你。「你愿意为了我的研究去弄一瓶药水吗？你很可能可以在法师 Nicodemus 那里轻松找到一瓶。」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04F5_01CC;
	message("他叹了口气，明显松了一口气。「谢谢你，");
	message(var0000);
	message("。」");
	say();
	gflags[0x012F] = true;
	goto labelFunc04F5_01D7;
labelFunc04F5_01CC:
	message("「你确定吗？我会给你情报作为回报。」");
	say();
	UI_add_answer("情报");
labelFunc04F5_01D7:
	UI_remove_answer("隐形药水");
labelFunc04F5_01DE:
	case "情报" attend labelFunc04F5_01F5:
	message("「如果你带给我隐形药水，我会告诉你关于不列颠王、友谊会，或是海盗巢穴 (Buccaneer's Den)的情报。」");
	say();
	gflags[0x012F] = true;
	UI_remove_answer("情报");
labelFunc04F5_01F5:
	case "给予药水" attend labelFunc04F5_0237:
	var0007 = UI_remove_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc04F5_022C;
	message("他从你手中接过药水，并迅速喝下。「谢谢你，");
	message(var0000);
	message("，帮助我逃跑！」当他从视线中消失时，他的笑声充满了你的耳朵。*");
	say();
	UI_remove_npc(0xFF0B);
	abort;
	goto labelFunc04F5_0230;
labelFunc04F5_022C:
	message("「你并没有药水可以给，」他伤心地说。「我的研究又得等了。」");
	say();
labelFunc04F5_0230:
	UI_remove_answer("给予药水");
labelFunc04F5_0237:
	case "告辞" attend labelFunc04F5_0242:
	goto labelFunc04F5_0245;
labelFunc04F5_0242:
	goto labelFunc04F5_008A;
labelFunc04F5_0245:
	endconv;
	message("他向你点头道别。*");
	say();
labelFunc04F5_024A:
	if (!(event == 0x0000)) goto labelFunc04F5_0258;
	Func092E(0xFF0B);
labelFunc04F5_0258:
	return;
}


