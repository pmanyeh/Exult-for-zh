#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04BF object#(0x4BF) ()
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

	if (!(event == 0x0001)) goto labelFunc04BF_02A4;
	UI_show_npc_face(0xFF41, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x023B]) goto labelFunc04BF_003F;
	UI_add_answer(["以太戒指"]);
labelFunc04BF_003F:
	if (!(!gflags[0x0256])) goto labelFunc04BF_00A4;
	message("你看到一位贵族，独自一人，眼中闪烁着疯狂的光芒。~~「你到底是谁？」男人问道。他的态度就像是一个刚被从某件极其重要的事情中打断的人。");
	say();
	var0002 = Func090B([var0001, "我是圣者"]);
	if (!(var0002 == var0001)) goto labelFunc04BF_007C;
	message("Martingo 和你握手，但表现得完全不感兴趣。「我真是太激动了。」");
	say();
	message("他转向右边，对着空气说话。");
	say();
	message("「什么？哦，真的吗！我不认为");
	message(var0001);
	message(" 看起来特别没脑子。我们走着瞧，不是吗？」");
	say();
	message("他转过身来对你咧嘴一笑。");
	say();
	goto labelFunc04BF_009D;
labelFunc04BF_007C:
	message("「你当然是！而我是 Mondain 的邪灵，回来对整个不列颠尼亚进行大破坏。好笑，你看起来不像圣者 (Avatar) ——你看起来像个傻瓜。");
	say();
	if (!var0000) goto labelFunc04BF_008D;
	message("「我能为你做什么，傻瓜小姐？」");
	say();
	goto labelFunc04BF_0091;
labelFunc04BF_008D:
	message("「我能为你做什么，傻瓜先生？」");
	say();
labelFunc04BF_0091:
	message("他转向右边，对着空气说话。");
	say();
	message("「什么？哦，真的吗！你觉得这个圣者 (Avatar) 看起来像真的吗？我怀疑， Lucinda 。我非常怀疑。」");
	say();
	message("他转过身来对你咧嘴一笑。");
	say();
labelFunc04BF_009D:
	gflags[0x0256] = true;
	goto labelFunc04BF_00A8;
labelFunc04BF_00A4:
	message("「你想要什么？」 Martingo 好斗地问道。");
	say();
labelFunc04BF_00A8:
	converse attend labelFunc04BF_029F;
	case "姓名" attend labelFunc04BF_00BE:
	message("这位贵族不耐烦地看着你。「我是 Martingo ， Spektran 的苏丹。这有什么问题吗？」他翻了个白眼。他转向右边，再次对着一个想像中的人低语：「我相信我们遇到了一个无知的人。」");
	say();
	UI_remove_answer("姓名");
labelFunc04BF_00BE:
	case "职业" attend labelFunc04BF_00EF:
	message("「我是 Spektran 的苏丹！什么，你的脑袋只有豌豆那么大吗？别回答，这是个修辞问题。」");
	say();
	if (!var0000) goto labelFunc04BF_00D7;
	message("他转向左边，对着空气低语：「你不觉得她的脑袋只有豌豆大吗？我觉得是！」他与他那看不见的朋友神秘地咯咯笑着。");
	say();
	goto labelFunc04BF_00DB;
labelFunc04BF_00D7:
	message("他转向左边，再次对着一个想像中的人低语：「你不觉得他的脑袋只有豌豆大吗？我觉得是！」他与他那看不见的朋友神秘地咯咯笑着。");
	say();
labelFunc04BF_00DB:
	message("Martingo 然后拿出一根香蕉开始剥皮。");
	say();
	UI_add_answer(["苏丹", "Spektran", "香蕉"]);
labelFunc04BF_00EF:
	case "苏丹" attend labelFunc04BF_0145:
	message("「得了吧，别侮辱我的智商。你肯定知道苏丹是什么！难道你没看到我的后宫吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04BF_010E;
	message("「很可爱，不是吗？");
	say();
	goto labelFunc04BF_0112;
labelFunc04BF_010E:
	message("Martingo 看起来很困惑。「那你必须去检查一下眼睛！我被十个……」他迅速环顾四周。「不，是『十一个』美女包围着！」");
	say();
labelFunc04BF_0112:
	message("「每天我都会享受不同的一位。你无法想像当苏丹有多有趣！」他倾身亲吻了一个看不见的脸颊。「今天，我正在享受 Lucinda 。」他咧嘴大笑。");
	say();
	UI_add_answer("Lucinda");
	if (!var0000) goto labelFunc04BF_013E;
	message("Martingo 色瞇瞇地上下打量你。「嗯。你想加入我的后宫吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BF_013A;
	message("你的回答让 Martingo 感到惊讶。「你会？」他紧张地环顾四周。「哦，嗯，我最好先就此事咨询我的占星师。我之后再给你答复，好吗？」");
	say();
	goto labelFunc04BF_013E;
labelFunc04BF_013A:
	message("「真遗憾。」");
	say();
labelFunc04BF_013E:
	UI_remove_answer("苏丹");
labelFunc04BF_0145:
	case "Spektran" attend labelFunc04BF_0186:
	message("「就是你现在站着的这座岛！」他转向左边看不见的人低语：「你说得对——这个人真的是个傻瓜！」~~ Martingo 转回头对你说。「如我所说，我是这里的苏丹。我是所有这些臣民的主人。」他朝房间周围比划了一下。");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc04BF_017F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你低语。「这家伙相当愚蠢。小心点。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF41, 0x0000);
labelFunc04BF_017F:
	UI_remove_answer("Spektran");
labelFunc04BF_0186:
	case "Lucinda" attend labelFunc04BF_0199:
	message("「她很美，不是吗？」 Martingo 倾身，将舌头伸进一个不存在的耳朵里。");
	say();
	UI_remove_answer("Lucinda");
labelFunc04BF_0199:
	case "香蕉" attend labelFunc04BF_0231:
	if (!(!gflags[0x0258])) goto labelFunc04BF_0226;
	message("「哦，原谅我的失礼！你要来根香蕉吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04BF_021F;
	message("「嗯，这将花费你 3 枚金币。还要吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04BF_0218;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0003)) goto labelFunc04BF_0211;
	var0009 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0011, true);
	if (!var0009) goto labelFunc04BF_020A;
	message("「给你。」 Martingo 递给你一根香蕉并收下你的金币。他转向「Lucinda」低语：「那个混蛋拿走了我最后一根香蕉！」");
	say();
	gflags[0x0258] = true;
	goto labelFunc04BF_020E;
labelFunc04BF_020A:
	message("「你的脑袋装的是小麦吗！你连放一根香蕉的空间都没有！」");
	say();
labelFunc04BF_020E:
	goto labelFunc04BF_0215;
labelFunc04BF_0211:
	message("「破产了，是吗？太糟糕了。」 Martingo 哼了一声。「好吧，我必须说，我非常有钱。」");
	say();
labelFunc04BF_0215:
	goto labelFunc04BF_021C;
labelFunc04BF_0218:
	message("「那真是松了一口气。我只剩一个了。」");
	say();
labelFunc04BF_021C:
	goto labelFunc04BF_0223;
labelFunc04BF_021F:
	message("「那真是松了一口气。我只剩一个了。」");
	say();
labelFunc04BF_0223:
	goto labelFunc04BF_022A;
labelFunc04BF_0226:
	message("「我已经把最后一根香蕉卖给你了！」");
	say();
labelFunc04BF_022A:
	UI_remove_answer("香蕉");
labelFunc04BF_0231:
	case "以太戒指" attend labelFunc04BF_024B:
	message("Martingo 看起来很怀疑。「你是想偷我的以太戒指吗？」他转向他想像中的朋友低语：「你说得对。我们的客人看起来像个小偷。」他转回头对你微笑。「是的，我确实有一枚以太戒指。我是从石像鬼国王那里买来的。他叫什么名字来着？」他倾向右边看不见的同伴。「什么？哦，对，Draxinusom。我一直都知道。」他转回头对你说。「它在我的金库里。」");
	say();
	UI_remove_answer("以太戒指");
	UI_add_answer("金库");
labelFunc04BF_024B:
	case "金库" attend labelFunc04BF_026B:
	message("Martingo 的眼睛亮了起来。「我的金库是全不列颠尼亚防护最严密的金库。没有人，我再说一遍，『没有人』能从我的金库偷走任何东西。我那里有很多好宝物。」他转向「Lucinda」并咬了一个不存在的耳垂。");
	say();
	UI_remove_answer("金库");
	UI_add_answer(["宝物", "受保护"]);
labelFunc04BF_026B:
	case "宝物" attend labelFunc04BF_027E:
	message("「我收集魔法物品。金库里装满了这些东西。包含你提到的那枚戒指。」");
	say();
	UI_remove_answer("宝物");
labelFunc04BF_027E:
	case "受保护" attend labelFunc04BF_0291:
	message("「金库的安全是我的秘密。随便你尝试进入。事实上，我还打赌你进不去！如果你成功进去，欢迎你拿走任何东西！」 Martingo 笑了。「你只需要那把钥匙！」他和他想像中的后宫一起笑着，仿佛她们都在陪他笑。「我相信你会找到的！」他笑得前仰后合，笑得眼泪都流下来了。");
	say();
	UI_remove_answer("受保护");
labelFunc04BF_0291:
	case "告辞" attend labelFunc04BF_029C:
	goto labelFunc04BF_029F;
labelFunc04BF_029C:
	goto labelFunc04BF_00A8;
labelFunc04BF_029F:
	endconv;
	message("「好吧。走开吧。这对有好处！」*");
	say();
labelFunc04BF_02A4:
	if (!(event == 0x0000)) goto labelFunc04BF_02B2;
	Func092E(0xFF41);
labelFunc04BF_02B2:
	return;
}


