#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0402 object#(0x402) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0402_0659;
	talked_book = false;
	var0000 = Func0908();
	var0001 = "圣者";
	var0002 = UI_get_party_list();
	var0003 = UI_is_pc_female();
	var0004 = UI_get_npc_object(0xFFFE);
	var0005 = false;
	var0006 = false;
	var0007 = false;
	if (!(!gflags[0x0015])) goto labelFunc0402_004C;
	UI_show_npc_face(0xFFFE, 0x0001);
	goto labelFunc0402_006D;
labelFunc0402_004C:
	if (!(var0004 in var0002)) goto labelFunc0402_0063;
	UI_show_npc_face(0xFFFE, 0x0000);
	goto labelFunc0402_006D;
labelFunc0402_0063:
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_006D:
	if (!gflags[0x0046]) goto labelFunc0402_0079;
	var0008 = var0000;
labelFunc0402_0079:
	if (!gflags[0x0047]) goto labelFunc0402_0085;
	var0008 = var0001;
labelFunc0402_0085:
	var0009 = Func0909();
	if (!(!gflags[0x0015])) goto labelFunc0402_012B;
	message("你看到一个看起来只有十几岁的男孩。他浑身脏兮兮，不修边幅。他看起来好像刚哭过，但一看到你，他立刻坐直身子，眼神变得锐利起来。");
	say();
	message("「你是谁？你想要什么？」 你意识到男孩手里拿着一把弹弓。");
	say();
	message("你面对着男孩，告诉他你是谁。");
	say();
	var000A = Func090B([var0000, var0001]);
	if (!(var000A == var0000)) goto labelFunc0402_00C8;
	message("「所以呢？这有什么了不起的？」");
	say();
	var0008 = var0000;
	gflags[0x0046] = true;
	goto labelFunc0402_00D6;
labelFunc0402_00C8:
	message("「我上次听到『这个』的时候，我还从 Eodon 的史前生物身上摔了下来呢！」");
	say();
	var0008 = var0001;
	gflags[0x0047] = true;
labelFunc0402_00D6:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0116;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「孩子，这位可是圣者！ ");
	say();
	if (!(!var0003)) goto labelFunc0402_0101;
	message("我保证他是！他可是来帮你的！」");
	say();
	goto labelFunc0402_0105;
labelFunc0402_0101:
	message("我保证她是！她可是来帮你的！」");
	say();
labelFunc0402_0105:
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_0116:
	message("男孩瞇起眼睛，打量着你。他慢慢放下武器，准备随时应付可能的陷阱。你很欣赏这个男孩与陌生人打交道的明显经验。");
	say();
	message("你和 Spark 互相盯着对方。他不知道该怎么办。最后，他点了点头。「好吧。我相信你。你长得像我看过的画像。对不起， ");
	message(var0009);
	message("。」");
	say();
	gflags[0x0015] = true;
	goto labelFunc0402_0135;
labelFunc0402_012B:
	message("「什么事？ ");
	message(var0008);
	message("？」 Spark 问道。「你想要什么？」");
	say();
labelFunc0402_0135:
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!gflags[0x0048]) goto labelFunc0402_0155;
	UI_add_answer("钥匙");
labelFunc0402_0155:
	if (!gflags[0x003E]) goto labelFunc0402_0162;
	UI_remove_answer("钥匙");
labelFunc0402_0162:
	if (!(var0004 in var0002)) goto labelFunc0402_0173;
	UI_add_answer("离队");
labelFunc0402_0173:
	if (!(gflags[0x0049] && (!(var0004 in var0002)))) goto labelFunc0402_0189;
	UI_add_answer("加入");
labelFunc0402_0189:
	if (!(gflags[0x003E] && (!gflags[0x0064]))) goto labelFunc0402_01A4;
	UI_add_answer(["金币", "徽章", "卷轴"]);
labelFunc0402_01A4:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0402_0642;
	case "古文译本" attend labelFunc0402_TransBook:
	message("「哇！古文译本！这听起来好厉害！我以前看那些招牌上的符号总觉得像是一堆奇怪的虫子在爬。」");
	say();
	message("「有了这个，我就能知道那些无聊的镇民都在写些什么了！你下次用它的时候可以让我也看看吗？」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0402_TransBook:
	case "姓名" attend labelFunc0402_01BA:
	message("「大家一直都叫我 Spark。」");
	say();
	UI_remove_answer("姓名");
labelFunc0402_01BA:
	case "职业" attend labelFunc0402_01D6:
	message("「我没有工作。我才十四岁，所以我正在学怎么在铁匠铺里成为父亲最好的帮手，」 他骄傲地说。但随后他突然意识到了什么，这让他感到恐惧。「现在父亲死了，我成了孤儿！」");
	say();
	UI_add_answer(["铁匠铺", "父亲", "孤儿"]);
labelFunc0402_01D6:
	case "铁匠铺" attend labelFunc0402_01E9:
	message("「父亲是不列颠尼亚最好的铁匠。总是有来自四面八方的人找他打造各种东西。」");
	say();
	UI_remove_answer("铁匠铺");
labelFunc0402_01E9:
	case "孤儿" attend labelFunc0402_01FC:
	message("「我母亲很久以前就过世了。我对她只有一点点印象。」");
	say();
	UI_remove_answer("孤儿");
labelFunc0402_01FC:
	case "谋杀" attend labelFunc0402_0252:
	if (!(!gflags[0x0043])) goto labelFunc0402_0222;
	message("「我不敢相信父亲死了。还有可怜的 Inamo 也是。太奇怪了。我『梦见』了这件事。嗯，从某种意义上来说。~~昨晚我做了一个关于父亲的恶梦。我梦见他尖叫，这把我吵醒了。我环顾屋内，但他不在床上。我完全清醒了，所以我出去找他。」");
	say();
	UI_add_answer(["Inamo", "恶梦", "寻找"]);
	goto labelFunc0402_024B;
labelFunc0402_0222:
	message("「我相信你一定能找到杀死父亲的凶手！」");
	say();
	message("「你想让我重复，我所知道关于谋杀案的所有事吗？」");
	say();
	if (!Func090A()) goto labelFunc0402_0247;
	message("「你想知道什么？」");
	say();
	UI_add_answer(["我的故事", "钥匙", "箱子"]);
	goto labelFunc0402_024B;
labelFunc0402_0247:
	message("「好吧。」");
	say();
labelFunc0402_024B:
	UI_remove_answer("谋杀");
labelFunc0402_0252:
	case "箱子" attend labelFunc0402_0272:
	if (!gflags[0x003E]) goto labelFunc0402_0267;
	message("「我不确定是不是同一个，但我一两天前好像看到父亲拿着一个和箱子里一模一样的卷轴。我知道他在为某人制作特别的东西。我相当肯定是他在铁匠铺里做的。至于那个徽章，他平时都戴着。我不知道为什么它会在箱子里。还有那些金币——我这辈子从没见过这么多金币。我想像不出父亲为什么会有这些钱。」");
	say();
	goto labelFunc0402_026B;
labelFunc0402_0267:
	message("「你应该试着打开那个箱子。」");
	say();
labelFunc0402_026B:
	UI_remove_answer("箱子");
labelFunc0402_0272:
	case "我的故事" attend labelFunc0402_0292:
	message("「太奇怪了。我『梦见』了这件事。嗯，从某种意义上来说。~~昨晚我做了一个关于父亲的恶梦。我梦见他尖叫，这把我吵醒了。我环顾屋内，但他不在床上。我完全清醒了，所以我出去找他。」");
	say();
	UI_remove_answer("我的故事");
	UI_add_answer(["寻找", "恶梦"]);
labelFunc0402_0292:
	case "恶梦" attend labelFunc0402_02A5:
	message("「我知道这听起来很傻，但是...我梦见一个满脸通红的巨大男人俯视着一切，然后...他往下看...并且注意到了父亲...这就是我记得的全部。」");
	say();
	UI_remove_answer("恶梦");
labelFunc0402_02A5:
	case "寻找" attend labelFunc0402_02BF:
	message("「不，我没有找到他。至少没有马上找到。但我确实看到了一些东西。」");
	say();
	UI_add_answer("一些东西");
	UI_remove_answer("寻找");
labelFunc0402_02BF:
	case "一些东西" attend labelFunc0402_02DF:
	message("「我当时在马厩前面。我看到一个男人和一只没有翅膀的石像鬼从建筑物后面跑出来。他们朝着码头跑去。然后我走进去，发现了...父亲。」~~Spark 声音发抖，并开始低声啜泣。");
	say();
	UI_add_answer(["男人", "石像鬼"]);
	UI_remove_answer("一些东西");
labelFunc0402_02DF:
	case "男人" attend labelFunc0402_02F9:
	message("「关于他我只看到，那个男人的右手是个钩子。」");
	say();
	UI_add_answer("钩子");
	UI_remove_answer("男人");
labelFunc0402_02F9:
	case "石像鬼" attend labelFunc0402_030C:
	message("「我分不清石像鬼的长相。除了他没有翅膀以外，我无法认出他。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc0402_030C:
	case "钩子" attend labelFunc0402_03DD:
	if (!(!gflags[0x0043])) goto labelFunc0402_03D2;
	if (!(!(var0004 in var0002))) goto labelFunc0402_03CB;
	message("「你会去找出那个带钩子的男人吗？让我帮你吧！」男孩恳求道。他的泪水止住了，脸上露出坚定而充满力量的表情。");
	say();
	gflags[0x0043] = true;
	message("「带我一起去！拜托！我必须为父亲报仇！如果你不带我去，我也会跟着你的！」");
	say();
	message("男孩现在非常兴奋。「我是弹弓专家！我几乎每发都能打中下水道老鼠！而且我很小只，所以...我吃得不多！拜托带我走！拜托让我加入你！」");
	say();
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0378;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你低声说。「我不知道在路上带着一个孩子好不好， ");
	message(var0009);
	message("...」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("突然间，Spark 发射了他的弹弓。他的目标，一只在 Iolo 头顶盘旋的小苍蝇，被硬生生地击落了。你大笑，而 Iolo 吓得惊叫、跳开，一边咒骂一边用手指梳理头发。 ");
	say();
	UI_play_sound_effect(0x0001);
	goto labelFunc0402_037C;
labelFunc0402_0378:
	message("突然间，Spark 发射了他的弹弓。他的目标，一只在你头顶盘旋的小苍蝇，被硬生生地击落了。 ");
	say();
labelFunc0402_037C:
	message("「我告诉过你我很厉害的！我可以加入吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0402_03B2;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「万岁！」 男孩高兴地跳了起来。");
	say();
	UI_add_answer("离队");
	UI_add_to_party(0xFFFE);
	goto labelFunc0402_03C4;
labelFunc0402_03B2:
	message("「好吧。」 男孩看起来很生气。「但我还是会跟着你。」");
	say();
	UI_add_to_party(0xFFFE);
	UI_add_answer("离队");
labelFunc0402_03C4:
	gflags[0x0049] = true;
	goto labelFunc0402_03CF;
labelFunc0402_03CB:
	message("「我知道你一定会找到那个男人的。」");
	say();
labelFunc0402_03CF:
	goto labelFunc0402_03D6;
labelFunc0402_03D2:
	message("「我知道你一定会找到那个男人的。」");
	say();
labelFunc0402_03D6:
	UI_remove_answer("钩子");
labelFunc0402_03DD:
	case "加入" attend labelFunc0402_0443:
	message("「你总算又问我一次了！」");
	say();
	var000D = 0x0000;
	enum();
labelFunc0402_03F0:
	for (var0010 in var0002 with var000E to var000F) attend labelFunc0402_0408;
	var000D = (var000D + 0x0001);
	goto labelFunc0402_03F0;
labelFunc0402_0408:
	if (!(var000D < 0x0008)) goto labelFunc0402_0431;
	UI_add_to_party(0xFFFE);
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「万岁！」");
	say();
	goto labelFunc0402_0435;
labelFunc0402_0431:
	message("「嗯，我想了想，你们那边人好像太多了。我不喜欢人挤人。」");
	say();
labelFunc0402_0435:
	UI_remove_answer("加入");
	UI_add_answer("离队");
labelFunc0402_0443:
	case "离队" attend labelFunc0402_04CB:
	message("「别让我走！」 Spark 哭喊道。「你真的要我走吗？」 他用无辜的小狗眼神看着你。");
	say();
	var0011 = Func090A();
	if (!var0011) goto labelFunc0402_04C7;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("「好吧，那我是要在这里等你，还是你要我回 Trinsic 的家？」");
	say();
	UI_clear_answers();
	var000A = Func090B(["在这里等", "回家"]);
	if (!(var000A == "在这里等")) goto labelFunc0402_04AA;
	message("「好吧。我会在这里等你回来，等你再次邀请我加入。」");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000F);
	abort;
	goto labelFunc0402_04C4;
labelFunc0402_04AA:
	message("Spark 低下头咕哝着，「那么，再见了。」");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000B);
	abort;
labelFunc0402_04C4:
	goto labelFunc0402_04CB;
labelFunc0402_04C7:
	message("「你不会后悔的！」");
	say();
labelFunc0402_04CB:
	case "父亲" attend labelFunc0402_04E5:
	message("「父亲是铁匠。我不敢相信他被谋杀了！我不知道他有什么敌人。除非是友谊会。」");
	say();
	UI_add_answer("友谊会");
	UI_remove_answer("父亲");
labelFunc0402_04E5:
	case "友谊会" attend labelFunc0402_0503:
	message("「嗯，一开始他们跑来要我们加入时，还骚扰了父亲和我。我想他们也是在做好事。很多人喜欢他们。父亲去了一趟不列颠城并且参加了他们的一项测验后，最终也加入了他们。」");
	say();
	UI_add_answer("测验");
	gflags[0x003F] = true;
	UI_remove_answer("友谊会");
labelFunc0402_0503:
	case "测验" attend labelFunc0402_0523:
	message("「我对这些测验一无所知。我从来没有参加过。也许你应该去问问友谊会分会的人。Klog。」");
	say();
	UI_add_answer(["分会", "Klog"]);
	UI_remove_answer("测验");
labelFunc0402_0523:
	case "分会" attend labelFunc0402_0536:
	message("「友谊会在整个不列颠尼亚都有分会。」");
	say();
	UI_remove_answer("分会");
labelFunc0402_0536:
	case "Klog" attend labelFunc0402_0556:
	message("「他是这里 Trinsic 友谊会分会的负责人。一个星期前，当 Klog 和他的两个朋友过来找父亲谈话时，他和父亲吵了起来。」");
	say();
	UI_add_answer(["争执", "朋友"]);
	UI_remove_answer("Klog");
labelFunc0402_0556:
	case "争执" attend labelFunc0402_0569:
	message("「我不知道他们在吵什么。也许你应该去问 Klog。」");
	say();
	UI_remove_answer("争执");
labelFunc0402_0569:
	case "朋友" attend labelFunc0402_057C:
	message("「我不记得他们长什么样子了。我没认出他们。\t他们很可能也是友谊会的其他成员。」");
	say();
	UI_remove_answer("朋友");
labelFunc0402_057C:
	case "钥匙" attend labelFunc0402_05BE:
	if (!gflags[0x003E]) goto labelFunc0402_0591;
	message("「那把钥匙打开了我父亲的箱子，对吧？」");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_0591:
	var0012 = Func0931(0xFE9B, 0x0001, 0x0281, 0x00FD, 0xFE99);
	if (!var0012) goto labelFunc0402_05B3;
	message("「那看起来像是我父亲箱子的钥匙。我还在想它去哪了！」");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_05B3:
	message("「什么钥匙？你有我父亲箱子的钥匙吗？在哪里？」");
	say();
labelFunc0402_05B7:
	UI_remove_answer("钥匙");
labelFunc0402_05BE:
	case "金币" attend labelFunc0402_05D9:
	message("男孩睁大了眼睛。「我根本不知道父亲藏了这么多钱！」");
	say();
	message("「如果你要去寻找那些杀死我父亲的人，我想我可以把它交给你！」");
	say();
	UI_remove_answer("金币");
	var0006 = true;
labelFunc0402_05D9:
	case "徽章" attend labelFunc0402_05F0:
	message("「父亲是友谊会的成员。我不知道为什么徽章会在箱子里——他平时都戴着它。」");
	say();
	UI_remove_answer("徽章");
	var0007 = true;
labelFunc0402_05F0:
	case "卷轴" attend labelFunc0402_060E:
	message("「我不确定是不是同一个，但我一两天前好像看到父亲拿着一个跟那个一模一样的卷轴。我知道他在为某人制作特别的东西。我相当肯定是他在铁匠铺里做的。」");
	say();
	UI_add_answer("铁匠铺");
	UI_remove_answer("卷轴");
	var0005 = true;
labelFunc0402_060E:
	case "铁匠铺" attend labelFunc0402_0621:
	message("「它在城镇的西南角。」");
	say();
	UI_remove_answer("铁匠铺");
labelFunc0402_0621:
	case "Inamo" attend labelFunc0402_0634:
	message("「他是个非常好的石像鬼。他帮了父亲很多忙，还在马厩里帮忙做事。我想不通为什么会有人想要杀他！」");
	say();
	UI_remove_answer("Inamo");
labelFunc0402_0634:
	case "告辞" attend labelFunc0402_063F:
	goto labelFunc0402_0642;
labelFunc0402_063F:
	goto labelFunc0402_01A4;
labelFunc0402_0642:
	endconv;
	message("「好吧，我晚点再跟你说。」");
	say();
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0402_0659;
	gflags[0x0064] = true;
labelFunc0402_0659:
	if (!(event == 0x0000)) goto labelFunc0402_0662;
	abort;
labelFunc0402_0662:
	return;
}


