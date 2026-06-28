#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func093C 0x93C (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08F2 0x8F2 (var var0000, var var0001);
extern void Func08F4 0x8F4 (var var0000, var var0001);
extern var Func08F5 0x8F5 (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func08F3 0x8F3 (var var0000);

void Func040A object#(0x40A) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc040A_0A8C;
	talked_book = false;
	UI_show_npc_face(0xFFF6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_party_list();
	var0003 = Func093C(UI_get_npc_object(0xFE9C), var0002);
	var0004 = UI_get_npc_object(0xFFF6);
	var0005 = UI_get_npc_object(0xFFFA);
	if (!(UI_is_pc_female() == 0x0000)) goto labelFunc040A_005D;
	var0006 = "Abraham";
	goto labelFunc040A_0063;
labelFunc040A_005D:
	var0006 = "Elizabeth";
labelFunc040A_0063:
	var0007 = UI_get_array_size(var0002);
	var0008 = "";
	if (!(var0007 > 0x0001)) goto labelFunc040A_0083;
	var0008 = "s";
labelFunc040A_0083:
	var0009 = 0x0000;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = false;
	var000E = false;
	var000F = false;
	var0010 = false;
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = UI_find_nearby(var0004, 0x0211, 0x000D, 0x0000);
	var0018 = UI_find_nearby(var0004, 0x01FE, 0x000D, 0x0000);
	var0019 = UI_find_nearby(var0004, 0x0214, 0x000D, 0x0000);
	var001A = UI_find_nearby(var0004, 0x01EE, 0x0014, 0x0000);
	var001B = false;
	if (!(Func08F7(0x00E5) || Func08F7(0x00E4))) goto labelFunc040A_0121;
	var001B = true;
labelFunc040A_0121:
	var001C = "英勇的战士";
	if (!gflags[0x015E]) goto labelFunc040A_0133;
	var001C = "高贵的附魔师";
labelFunc040A_0133:
	if (!((!gflags[0x001D]) && gflags[0x015D])) goto labelFunc040A_0148;
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_0148:
	if (!(var0004 in var0002)) goto labelFunc040A_01AE;
	Func08F4(var0000, var0007);
	if (!var001B) goto labelFunc040A_0168;
	UI_add_answer("隐士");
labelFunc040A_0168:
	if (!var0017) goto labelFunc040A_0175;
	UI_add_answer("黏怪");
labelFunc040A_0175:
	if (!var0018) goto labelFunc040A_0182;
	UI_add_answer("狐狸");
labelFunc040A_0182:
	if (!var0019) goto labelFunc040A_018F;
	UI_add_answer("鸟身女妖");
labelFunc040A_018F:
	if (!var001A) goto labelFunc040A_01A0;
	message("「我们不必担心这些蜜蜂，只要我们有几支我可靠的箭。」");
	say();
	UI_add_answer("蜜蜂");
labelFunc040A_01A0:
	UI_add_answer("友谊会");
	var0013 = true;
	goto labelFunc040A_01B8;
labelFunc040A_01AE:
	message("「向你致意，旅行者");
	message(var0008);
	message("。」");
	say();
labelFunc040A_01B8:
	if (!gflags[0x015D]) goto labelFunc040A_01C4;
	var001C = "卑劣的骗子";
labelFunc040A_01C4:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x001D] && (var0007 == 0x0001))) goto labelFunc040A_01E6;
	gflags[0x015F] = true;
labelFunc040A_01E6:
	if (!(gflags[0x0162] && (!(var0004 in var0002)))) goto labelFunc040A_01FC;
	UI_add_answer(var0006);
labelFunc040A_01FC:
	if (!((!gflags[0x015F]) && ((var0007 > 0x0001) && gflags[0x001D]))) goto labelFunc040A_0216;
	UI_add_answer("介绍");
labelFunc040A_0216:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc040A_0A8B;
	var0002 = UI_get_party_list();
	var001D = "";
	case "古文译本" attend labelFunc040A_TransBook:
	message("「哼，友谊会的家伙们总是满口谎言，但那些刻在石头上的古老卢恩文却不会骗人。」");
	say();
	message("「如果这本宝典能帮我们更快找到被隐藏的真相，或者揭露那些伪君子的阴谋，那它就是我们最好的武器。」");
	say();
	message("「让我看看这玩意儿怎么用。」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc040A_TransBook:
	case "姓名" attend labelFunc040A_0277:
	UI_remove_answer("姓名");
	if (!(gflags[0x001D] == true)) goto labelFunc040A_024A;
	message("「我是 Tseramed。一名『游侠』，而你是");
	message(var001C);
	message("。」");
	say();
	goto labelFunc040A_0277;
labelFunc040A_024A:
	message("「我叫 Tseramed 。你们是友谊会成员吗？你们叫什么名字？」");
	say();
	UI_push_answers();
	var0009 = (var0009 + 0x0001);
	UI_add_answer([var0000, "友谊会"]);
	if (!(!gflags[0x0161])) goto labelFunc040A_0277;
	UI_add_answer("圣者");
labelFunc040A_0277:
	case "圣者" attend labelFunc040A_028E:
	UI_remove_answer("圣者");
	gflags[0x0161] = true;
	message("「圣者！这真是个奇妙的机缘。告诉我，圣者，你的名字是什么？」");
	say();
labelFunc040A_028E:
	case var0000 attend labelFunc040A_02D9:
	UI_remove_answer(var0000);
	gflags[0x001D] = true;
	message("「幸会了，");
	message(var0000);
	message("」");
	say();
	if (!gflags[0x0161]) goto labelFunc040A_02B5;
	message("你的举止很高贵。");
	say();
labelFunc040A_02B5:
	if (!(var0007 == 0x0001)) goto labelFunc040A_02C3;
	gflags[0x015F] = true;
labelFunc040A_02C3:
	UI_pop_answers();
	if (!(!gflags[0x015F])) goto labelFunc040A_02D9;
	message("也许你可以向我介绍你的同伴们？」");
	say();
	UI_add_answer("介绍");
labelFunc040A_02D9:
	case "友谊会" attend labelFunc040A_0328:
	UI_remove_answer("友谊会");
	if (!gflags[0x001D]) goto labelFunc040A_0317;
	if (!((var0004 in var0002) || gflags[0x0162])) goto labelFunc040A_0310;
	message("「我不信任友谊会，尤其是");
	message(var0006);
	message("。」");
	say();
	UI_add_answer(var0006);
	goto labelFunc040A_0314;
labelFunc040A_0310:
	message("「我对友谊会没有好感。等我对你了解多一点时，我们再来谈这个。」");
	say();
labelFunc040A_0314:
	goto labelFunc040A_0328;
labelFunc040A_0317:
	message("「是的。也许我正在对杰出的");
	message(var0006);
	message("？」");
	say();
	UI_add_answer(var0006);
labelFunc040A_0328:
	case var0006 attend labelFunc040A_03AC:
	UI_remove_answer(var0006);
	if (!gflags[0x001D]) goto labelFunc040A_037A;
	message("「不久前，友谊会开始在整个不列颠尼亚扩展其影响力。");
	say();
	message("「在他们早期，他们吸引了许多聪明热情的年轻人，其中就包括我的爱人， M 女士。");
	say();
	message("像她这么聪明的女人，难免会在他们的队伍中晋升。她的直属上司是");
	message(var0006);
	message(".");
	say();
	message("一个黑暗的夜晚，她病得很重。根据我的朋友们所说，");
	message(var0006);
	message(" 禁止她去看当地的治疗师。等我得知此事时，她已经过世了。");
	say();
	message("她现在长眠在 Yew 的墓地里，愿她安息。我在这片土地上到处寻找");
	message(var0006);
	message("，但从未找到我的猎物。事实上，似乎每次我接近我的猎物时，他们就已经消失了！我的搜索将永远不会真正结束。」");
	say();
	UI_remove_answer(var0006);
	UI_add_answer(["Yew", "M 女士"]);
	goto labelFunc040A_03AC;
labelFunc040A_037A:
	UI_pop_answers();
	gflags[0x015D] = true;
	var001E = "";
	if (!gflags[0x0161]) goto labelFunc040A_0394;
	var001E = "你玷污了圣者的头衔！";
labelFunc040A_0394:
	message("「无赖，");
	message(var001E);
	message("我还没忘记你的恶行，以及随之而来的邪恶罪行。");
	say();
	message("噢，黑如沥青的灵魂！」");
	say();
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_03AC:
	case "M 女士" attend labelFunc040A_03BF:
	UI_remove_answer("M 女士");
	message("「青春永远属于她。」");
	say();
labelFunc040A_03BF:
	case "职业" attend labelFunc040A_041B:
	if (!(!var000A)) goto labelFunc040A_0409;
	var000A = true;
	if (!(var0004 in var0002)) goto labelFunc040A_03F0;
	message("「我与你同行，");
	message(var001C);
	message("，用我在森林里习得的技能来帮助你。」");
	say();
	UI_add_answer("森林");
	goto labelFunc040A_0406;
labelFunc040A_03F0:
	message("「在 Yew，我只是个卑微的樵夫。我靠森林维生，并在它的深处寻找知识。");
	say();
	message("我已经探索了这整个区域。」");
	say();
	UI_add_answer("知识");
	UI_add_answer("森林");
labelFunc040A_0406:
	goto labelFunc040A_041B;
labelFunc040A_0409:
	message("「正如我所说，我的丛林技能涵盖了这整片森林，甚至包括山里的洞穴。」");
	say();
	UI_add_answer("森林");
	UI_add_answer("洞穴");
labelFunc040A_041B:
	case "介绍" attend labelFunc040A_0436:
	var0003 = Func08F5(var0002, var0003);
	UI_remove_answer("介绍");
labelFunc040A_0436:
	if (!(gflags[0x001D] && (!var0013))) goto labelFunc040A_0462;
	if (!((var0004 in var0002) || (UI_get_array_size(var0003) == 0x0000))) goto labelFunc040A_0462;
	UI_add_answer("友谊会");
	var0013 = true;
labelFunc040A_0462:
	var001F = 0x0000;
	case "森林" attend labelFunc040A_0476:
	var001F = 0x0001;
labelFunc040A_0476:
	case "洞穴", "秘密地点" attend labelFunc040A_0487:
	var001F = 0x0002;
labelFunc040A_0487:
	case "知识" attend labelFunc040A_0495:
	var001F = 0x0003;
labelFunc040A_0495:
	if (!(var001F > 0x0000)) goto labelFunc040A_04E2;
	if (!((!gflags[0x015F]) || (!gflags[0x001D]))) goto labelFunc040A_04E2;
	var0020 = ["我们可能要在介绍完之后再多聊...", "也许先自我介绍一下比较好。"];
	var0021 = var0020[UI_die_roll(0x0001, UI_get_array_size(var0020))];
	message("「");
	message(var0021);
	message("」");
	say();
	var001F = 0x0000;
	UI_add_answer("介绍");
labelFunc040A_04E2:
	if (!(var001F == 0x0001)) goto labelFunc040A_0501;
	var000D = true;
	message("「森林是个狂野的地方，但近年来稍微被驯服了些。在里面，");
	message(var001C);
	message("，你可能仍然会发现只在传说中被提及的生物。」");
	say();
	UI_add_answer("生物");
labelFunc040A_0501:
	if (!(var001F == 0x0002)) goto labelFunc040A_0527;
	var000C = true;
	message("「在我的小屋北边，有一个通往山中的深孔。里面住着体型堪比绵羊或猎犬的蜜蜂。牠们飞翔时翅膀会卷起树叶，发出的嗡嗡声会让人恐惧地逃跑。」");
	say();
	message("「有些人进去后就再也没有回来过。也许他们还在那里……死亡是贪婪的，并为那些有同样意图的人准备了命运。」");
	say();
	UI_add_answer(["群山", "蜜蜂", "死亡"]);
labelFunc040A_0527:
	if (!(var001F == 0x0003)) goto labelFunc040A_054C;
	UI_remove_answer("知识");
	message("「我在群山旁住了许多年。我的足迹踏过了无数的地方。我曾深入黑暗的沼泽，也曾攀上群山的高处。我了解森林里的树木，也知道地底下的秘密地点。」");
	say();
	UI_add_answer(["群山", "沼泽", "秘密地点"]);
labelFunc040A_054C:
	case "沼泽" attend labelFunc040A_057A:
	UI_remove_answer("沼泽");
	message("「在山嘴的北边是一片茂密的沼泽。致命的史莱姆潜伏在里面，守护着一口清澈的泉水。周围的水都又臭又令人作呕。");
	say();
	message("这种恶臭的混合物会渗入你的靴子，带来恶心和头晕。明智的旅行者在这种地方会穿着沼泽靴。");
	say();
	message("这片泥沼向东、北和西排干。向西流的河水穿过 Yew ，经过修道院。其他的都向北弯入海中。」");
	say();
	UI_add_answer(["史莱姆", "Yew", "修道院", "海"]);
labelFunc040A_057A:
	case "修道院" attend labelFunc040A_059A:
	UI_remove_answer("修道院");
	message("「人神修道院(Empath Abbey) 是它的全名，");
	message(var0001);
	message("。他们在那里实践古老的技艺，最古老的是烈酒的发酵和蒸馏。在 Yew ，人们对他们产品的需求量很大。」");
	say();
	UI_add_answer("Yew");
labelFunc040A_059A:
	case "Yew" attend labelFunc040A_05B1:
	UI_remove_answer("Yew");
	message("「隐居性格的居民在那里感到平静。它的建筑位于森林之中，许多都被植物覆盖，看起来就像是森林的一部分。」");
	say();
	message("「在我的住处东边，树林很茂密，但擅长丛林技能的旅行者可能会在那里找到房子。」");
	say();
labelFunc040A_05B1:
	case "海" attend labelFunc040A_05E0:
	UI_remove_answer("海");
	message("「海！它的波浪能抚平烦躁的心情，但它的狂怒也是无与伦比的。问问那些靠海维生的人就知道了！能住在海边并收获它的大自然餽赠，是一份礼物。可以的话我也会去钓钓鱼。");
	say();
	message("你会不会好奇海里藏着什么谜团？」");
	say();
	if (!Func090A()) goto labelFunc040A_05DC;
	message("「我也很好奇。但我对那些在海上航行的人的所作所为比较熟悉。我见过海盗在北海岸登陆。」");
	say();
	UI_add_answer("海盗");
	goto labelFunc040A_05E0;
labelFunc040A_05DC:
	message("「或许你不想我一样喜欢海……」");
	say();
labelFunc040A_05E0:
	case "海盗" attend labelFunc040A_05F3:
	UI_remove_answer("海盗");
	message("「或许他们登陆是为了把战利品藏在森林里。我从来没有跟踪过他们。」");
	say();
labelFunc040A_05F3:
	case "群山" attend labelFunc040A_0610:
	var000B = true;
	message("「从海岸延伸过来，隐约可见一条狭窄的山脊。那些群山的峭壁危险而陡峭。那里的洞穴充满了危险，对于不小心的人来说就是死亡。」");
	say();
	UI_add_answer(["洞穴", "死亡"]);
labelFunc040A_0610:
	case "死亡" attend labelFunc040A_062A:
	UI_remove_answer("死亡");
	message("「贪婪者的死亡。任何偷窃洞穴居民的人的死亡。」");
	say();
	UI_add_answer("洞穴");
labelFunc040A_062A:
	case "生物" attend labelFunc040A_0654:
	UI_remove_answer("生物");
	message("「是的。比如那些会吞噬不小心的人，把骨头啃得一干二净的生物。森林里有鸟身女妖，沼泽边缘有史莱姆，洞穴里有蜜蜂。");
	say();
	message("「森林里也有很好的猎物：狐狸之类的。」");
	say();
	UI_add_answer(["史莱姆", "狐狸", "鸟身女妖 (harpies)", "蜜蜂"]);
labelFunc040A_0654:
	case "鸟身女妖 (harpies)" attend labelFunc040A_0674:
	UI_remove_answer("鸟身女妖 (harpies)");
	if (!var0019) goto labelFunc040A_0670;
	message("「鸟身女妖！准备战斗！我们立刻杀了牠们！」");
	say();
	goto labelFunc040A_0674;
labelFunc040A_0670:
	message("「一种畸形的飞行怪物。你不会想遇到牠们的。」");
	say();
labelFunc040A_0674:
	case "史莱姆" attend labelFunc040A_0692:
	var000E = true;
	message("「一种危险的生物，呈现绿色的史莱姆。触摸起来有酸性，牠会从三步之外向猎物投掷伪足。");
	say();
	message("「牠从不睡觉，没有思想，主要由有毒物质组成。牠会贪婪地吞噬不幸的动物。」");
	say();
	if (!var0017) goto labelFunc040A_0692;
	message("「用火攻击它！史莱姆对火毫无防御能力。」");
	say();
labelFunc040A_0692:
	case "狐狸" attend labelFunc040A_06C1:
	var000F = true;
	if (!UI_find_nearby(var0004, 0x01FE, 0x000A, 0x0000)) goto labelFunc040A_06B7;
	var001D = "  看看那只狐狸的毛皮多么有光泽。";
labelFunc040A_06B7:
	message("「狐狸很狡猾，而且怕人。我们永远无法像牠们那样属于这片森林。");
	message(var001D);
	message("\"");
	say();
labelFunc040A_06C1:
	case "蜜蜂" attend labelFunc040A_0705:
	var0011 = true;
	if (!var001A) goto labelFunc040A_06E1;
	message("「像这种蜜蜂可以用我特殊的箭来驯服！」");
	say();
	UI_add_answer("箭");
	goto labelFunc040A_0705;
labelFunc040A_06E1:
	message("「你从未见过这种蜜蜂！牠们大得像狼，翅膀展开超过一跨长。");
	say();
	message("被牠们螫到的生物会陷入一种深沉、死亡般的睡眠中。」");
	say();
	if (!(!(var0004 in var0002))) goto labelFunc040A_0705;
	message("「我已经猎杀过牠们很多次了，因为我把牠们的毒液用在我的箭上。而且我喜欢牠们的蜂蜜。也许我们可以一起去洞穴里弄点？」");
	say();
	UI_add_answer(["加入", "箭"]);
labelFunc040A_0705:
	case "箭" attend labelFunc040A_0818:
	UI_remove_answer("箭");
	message("「我用巨蜂的毒刺制作箭。用它们可以让敌人入睡。」");
	say();
	var0022 = "";
	var0023 = 0x0000;
	if (!gflags[0x0153]) goto labelFunc040A_0783;
	var0023 = UI_count_objects(0xFE9B, 0x03B3, 0xFE99, 0xFE99);
	if (!(var0023 > 0x0006)) goto labelFunc040A_074D;
	var0023 = 0x0006;
labelFunc040A_074D:
	var0024 = UI_count_objects(0xFE9B, 0x0238, 0xFE99, 0xFE99);
	if (!((var0004 in var0002) && ((var0024 < 0x0006) && (var0023 > 0x0000)))) goto labelFunc040A_0780;
	var0022 = "需要我把这些毒刺做成箭吗？";
labelFunc040A_0780:
	goto labelFunc040A_078F;
labelFunc040A_0783:
	var0022 = "如果你想要，我很乐意给你一打我特制的箭。你有兴趣吗？";
	var0023 = 0x000C;
labelFunc040A_078F:
	if (!(var0022 != "")) goto labelFunc040A_0818;
	message(var0022);
	message("");
	say();
	if (!Func090A()) goto labelFunc040A_080E;
	var0025 = UI_add_party_items(var0023, 0x0238, 0xFE99, 0xFE99, false);
	if (!var0025) goto labelFunc040A_0807;
	var0026 = "";
	if (!(var0023 > 0x0001)) goto labelFunc040A_07D6;
	var0026 = "s";
labelFunc040A_07D6:
	message("「小心使用，因为即使是擦伤也可能让人入睡！」他说着，递给你");
	message(var0023);
	message(" 支箭");
	message(var0026);
	message(".");
	say();
	if (!gflags[0x0153]) goto labelFunc040A_0800;
	var001F = UI_remove_party_items(var0023, 0x03B3, 0xFE99, 0xFE99, true);
labelFunc040A_0800:
	gflags[0x0153] = true;
	goto labelFunc040A_080B;
labelFunc040A_0807:
	message("「或许等你身上东西少一点的时候我再给你。」");
	say();
labelFunc040A_080B:
	goto labelFunc040A_0818;
labelFunc040A_080E:
	message("「很好，");
	message(var0001);
	message("。」");
	say();
labelFunc040A_0818:
	case "加入" attend labelFunc040A_0856:
	UI_remove_answer("加入");
	if (!(var0007 < 0x0008)) goto labelFunc040A_084C;
	UI_add_to_party(0xFFF6);
	message("「我很荣幸，");
	message(var0001);
	message("。」");
	say();
	UI_add_answer("友谊会");
	goto labelFunc040A_0856;
labelFunc040A_084C:
	message("「看来，");
	message(var0001);
	message("，你已经有足够多的旅行同伴了。」");
	say();
labelFunc040A_0856:
	case "离队" attend labelFunc040A_08C0:
	var0027 = true;
	message("「你是想让我在这里等，还是想让我回家？」");
	say();
	UI_clear_answers();
	var0028 = Func090B(["在这里等", "回家"]);
	if (!(var0028 == "在这里等")) goto labelFunc040A_08A0;
	message("「很好！我会等你的！」*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000F);
	abort;
	goto labelFunc040A_08C0;
labelFunc040A_08A0:
	message("「很好，");
	message(var0001);
	message("。祝你好运。」*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000B);
	abort;
labelFunc040A_08C0:
	var0029 = false;
	case "隐士" attend labelFunc040A_08D0:
	var0029 = true;
labelFunc040A_08D0:
	if (!((var000C && var000B) && (!var0012))) goto labelFunc040A_08F2;
	message("「说到洞穴和群山，有些人住在蜜蜂洞穴附近，或者可能就在里面。他们是隐士。」");
	say();
	var0029 = true;
	var0012 = true;
	UI_add_answer("蜜蜂");
labelFunc040A_08F2:
	if (!var0029) goto labelFunc040A_0937;
	UI_remove_answer("隐士");
	if (!(!gflags[0x0152])) goto labelFunc040A_0922;
	message("「有一天我在打猎时，瞥见一男一女在洞穴深处。从那之后我又见过他们两次。我相信他们是 Yew 的前居民，虽然我不知道他们是如何与蜜蜂和平相处的。」");
	say();
	if (!var001B) goto labelFunc040A_0914;
	message("「这就是我看到的人！」");
	say();
labelFunc040A_0914:
	gflags[0x0152] = true;
	UI_add_answer("蜜蜂");
	goto labelFunc040A_0933;
labelFunc040A_0922:
	if (!var001B) goto labelFunc040A_092F;
	message("「这些人就是我之前说过的隐士。」");
	say();
	goto labelFunc040A_0933;
labelFunc040A_092F:
	message("「或许那些隐士还住在洞穴里。」");
	say();
labelFunc040A_0933:
	var0012 = true;
labelFunc040A_0937:
	if (!((var000E && var000F) && (!var0010))) goto labelFunc040A_0967;
	message("「这让我想起了一个故事。你想听吗？」");
	say();
	if (!Func090A()) goto labelFunc040A_095F;
	message("「有一天，当我沿着沼泽边缘散步时，我偶然看到了一个奇怪的景象。一只狐狸被困在沼泽中央的一个小土丘上，土丘周围都是蠕动的绿色史莱姆。");
	say();
	message("史莱姆慢慢地向狐狸爬去，突然狐狸直接从软泥表面跑了过去！");
	say();
	message("狐狸毫发无伤地冲进了树林，把蠕动的史莱姆抛在后头。由此我猜测，史莱姆的受害者是那些在睡梦中，或是毫无防备的人。」");
	say();
	goto labelFunc040A_0963;
labelFunc040A_095F:
	message("「也许下次吧。」");
	say();
labelFunc040A_0963:
	var0010 = true;
labelFunc040A_0967:
	if (!var000E) goto labelFunc040A_0974;
	UI_remove_answer("史莱姆");
labelFunc040A_0974:
	if (!var000F) goto labelFunc040A_0981;
	UI_remove_answer("狐狸");
labelFunc040A_0981:
	if (!var0011) goto labelFunc040A_098E;
	UI_remove_answer("蜜蜂");
labelFunc040A_098E:
	if (!var000C) goto labelFunc040A_09A9;
	UI_remove_answer("洞穴");
	UI_remove_answer("秘密地点");
	UI_remove_answer("死亡");
labelFunc040A_09A9:
	if (!var000B) goto labelFunc040A_09B6;
	UI_remove_answer("群山");
labelFunc040A_09B6:
	if (!var000D) goto labelFunc040A_09C3;
	UI_remove_answer("森林");
labelFunc040A_09C3:
	if (!(gflags[0x0161] && ((var0004 in var0002) && (!gflags[0x0162])))) goto labelFunc040A_09E0;
	Func08F3(var0002);
	gflags[0x0162] = true;
labelFunc040A_09E0:
	if (!(var0004 in var0002)) goto labelFunc040A_09F1;
	UI_remove_answer("加入");
labelFunc040A_09F1:
	case "告辞" attend labelFunc040A_0A88:
	if (!((var0004 in var0002) || var0027)) goto labelFunc040A_0A0B;
	var0016 = true;
labelFunc040A_0A0B:
	if (!(gflags[0x001D] && (!var0016))) goto labelFunc040A_0A7B;
	if (!(!gflags[0x0161])) goto labelFunc040A_0A63;
	message("「请原谅，");
	message(var0001);
	message("，但你的容貌让我想起我曾经看过的一座雕像。那是被称为圣者的古代英雄的雕像。");
	say();
	message("你难道不就是那位高尚的灵魂吗？」");
	say();
	if (!Func090A()) goto labelFunc040A_0A59;
	var002A = "那位雕刻家把你刻得很好。";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc040A_0A48;
	var002A = "你远比任何石头雕像所能描绘的还要好看得多。";
labelFunc040A_0A48:
	message("「高贵的英雄，很荣幸能认识你。");
	message(var002A);
	message("\"");
	say();
	gflags[0x0161] = true;
	goto labelFunc040A_0A60;
labelFunc040A_0A59:
	message("「我一定是认错人了。再会。」");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A60:
	goto labelFunc040A_0A78;
labelFunc040A_0A63:
	message("\"^");
	message(var0001);
	message("，如果你愿意，我很荣幸能与你同行。我精通武器，也能为你提供我的知识和丛林技能……」");
	say();
	UI_add_answer("加入");
	var0016 = true;
labelFunc040A_0A78:
	goto labelFunc040A_0A88;
labelFunc040A_0A7B:
	message("「下次见，");
	message(var0001);
	message(".\"*");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A88:
	goto labelFunc040A_0216;
labelFunc040A_0A8B:
	endconv;
labelFunc040A_0A8C:
	if (!(event == 0x0000)) goto labelFunc040A_0A95;
	abort;
labelFunc040A_0A95:
	return;
}


