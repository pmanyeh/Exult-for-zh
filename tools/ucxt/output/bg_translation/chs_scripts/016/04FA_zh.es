#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CF 0x8CF ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04FA object#(0x4FA) ()
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

	if (!(event == 0x0001)) goto labelFunc04FA_04C6;
	UI_show_npc_face(0xFF06, 0x0000);
	var0000 = Func0908();
	var0001 = false;
	var0002 = Func08F7(0xFF64);
	var0003 = UI_part_of_day();
	var0004 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0003 == 0x0007)) goto labelFunc04FA_0064;
	if (!gflags[0x01FC]) goto labelFunc04FA_005C;
	message("Rankin 现在无法与你交谈，因为他正在主持友谊会的聚会。*");
	say();
	Func08CF();
	abort;
	goto labelFunc04FA_0064;
labelFunc04FA_005C:
	message("这名男子现在太忙无法与你交谈，因为他正在主持友谊会的聚会。*");
	say();
	Func08CF();
	abort;
labelFunc04FA_0064:
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!gflags[0x0284]) goto labelFunc04FA_0084;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04FA_0084:
	if (!(!gflags[0x01FC])) goto labelFunc04FA_0096;
	message("这名男子带着愉快的微笑向你问好。");
	say();
	gflags[0x01FC] = true;
	goto labelFunc04FA_00B8;
labelFunc04FA_0096:
	message("Rankin 微笑。「请告诉我有什么我可以帮忙的，");
	message(var0000);
	message("。」");
	say();
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_00B8;
	if (!gflags[0x020B]) goto labelFunc04FA_00B8;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_00B8:
	if (!gflags[0x020F]) goto labelFunc04FA_00C5;
	UI_add_answer("商人");
labelFunc04FA_00C5:
	if (!(gflags[0x020A] && (!gflags[0x0210]))) goto labelFunc04FA_00D7;
	UI_add_answer("Balayna");
labelFunc04FA_00D7:
	converse attend labelFunc04FA_04A8;
	case "姓名" attend labelFunc04FA_0110:
	message("「你可以叫我 Rankin ，");
	message(var0000);
	message("。」");
	say();
	gflags[0x020B] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0110;
	if (!(!var0001)) goto labelFunc04FA_0110;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_0110:
	case "职业" attend labelFunc04FA_014F:
	message("「我是 Moonglow 这里友谊会的新分会会长。」");
	say();
	if (!gflags[0x01F5]) goto labelFunc04FA_0129;
	UI_add_answer("声音");
labelFunc04FA_0129:
	if (!(gflags[0x01D8] && (!gflags[0x020A]))) goto labelFunc04FA_0142;
	if (!(!var0001)) goto labelFunc04FA_0142;
	UI_add_answer("Balayna 的指控");
labelFunc04FA_0142:
	UI_add_answer(["新的", "Moonglow"]);
labelFunc04FA_014F:
	case "Balayna" attend labelFunc04FA_01E0:
	Func0911(0x0032);
	if (!gflags[0x020D]) goto labelFunc04FA_0177;
	message("「你想了解关于她的什么事，");
	message(var0000);
	message("？」");
	say();
	UI_add_answer("利口酒");
	goto labelFunc04FA_01D9;
labelFunc04FA_0177:
	if (!gflags[0x020C]) goto labelFunc04FA_01B0;
	var0005 = UI_get_timer(0x0008);
	if (!(var0005 > 0x0006)) goto labelFunc04FA_0198;
	message("「她因为重要公事前往不列颠了，」他笑着说。「我不认为她短期内会回来。」");
	say();
	goto labelFunc04FA_01AD;
labelFunc04FA_0198:
	message("「喔？你最近也没见过她？我想知道她最近在忙些什么。」他微微一笑。");
	say();
	if (!var0004) goto labelFunc04FA_01AD;
	message("立方体震动了。「事实上，我确切地知道她在哪里。」");
	say();
	UI_add_answer("哪里");
labelFunc04FA_01AD:
	goto labelFunc04FA_01D9;
labelFunc04FA_01B0:
	if (!var0002) goto labelFunc04FA_01BD;
	message("「她就在那里，」他指着 Balayna 说。");
	say();
	goto labelFunc04FA_01D9;
labelFunc04FA_01BD:
	message("「我有一段时间没见到她了，");
	message(var0000);
	message("。也许你可以在她家找到她。」");
	say();
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
	UI_set_timer(0x0008);
labelFunc04FA_01D9:
	UI_remove_answer("Balayna");
labelFunc04FA_01E0:
	case "哪里" attend labelFunc04FA_01F3:
	message("「她刚好停止了呼吸！」Rankin 笑了。");
	say();
	UI_remove_answer("哪里");
labelFunc04FA_01F3:
	case "利口酒" attend labelFunc04FA_0227:
	message("「是的，我告诉过你那是商人从不列颠带来的。你把酒给她了吗？");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04FA_0223;
	message("「那么，」他问道，「有什么问题？」");
	say();
	UI_push_answers();
	UI_add_answer(["她死了", "没问题"]);
	goto labelFunc04FA_0227;
labelFunc04FA_0223:
	message("「啊，好吧。那我希望你之后有机会。」他奇怪地盯着你看了一会儿，然后又笑了。");
	say();
labelFunc04FA_0227:
	case "没问题" attend labelFunc04FA_023E:
	message("「太好了，那就这样。」");
	say();
	UI_remove_answer("没问题");
	UI_pop_answers();
labelFunc04FA_023E:
	case "她死了" attend labelFunc04FA_0268:
	gflags[0x0210] = true;
	UI_remove_answer(["没问题", "她死了"]);
	message("「什么！」他显得很震惊。「死了？这怎么可能？」");
	say();
	UI_add_answer(["不知道", "利口酒"]);
labelFunc04FA_0268:
	case "不知道" attend labelFunc04FA_027B:
	message("「嗯，这真是一场悲剧！拜托，");
	message(var0000);
	message("，我现在想一个人静一静。如果你愿意的话……」*");
	say();
	abort;
labelFunc04FA_027B:
	case "利口酒" attend labelFunc04FA_02B4:
	UI_remove_answer(["利口酒", "不知道"]);
	UI_pop_answers();
	message("「利口酒？怎么，你的意思是商人有杀她的动机？这太荒谬了！」他似乎陷入了沉思。~「或者可能不是。也许我们会调查一下，你说呢？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04FA_02AF;
	message("「太好了。如果你找到任何情报，请让我知道。同时，我会安排她的葬礼。」他悲伤地摇了摇头。");
	say();
	gflags[0x020F] = true;
	goto labelFunc04FA_02B4;
labelFunc04FA_02AF:
	message("「很好，那么我必须自己进行调查，『在』我安排好葬礼之后。」*");
	say();
	abort;
labelFunc04FA_02B4:
	case "商人" attend labelFunc04FA_02F5:
	message("「你有那个杀了 Balayna 的旅行商人的消息吗？");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04FA_02EA;
	message("「很好，");
	message(var0000);
	message("。你有什么消息？」");
	say();
	UI_push_answers();
	UI_add_answer(["还没准备好", "死了"]);
	goto labelFunc04FA_02EE;
labelFunc04FA_02EA:
	message("「啊，好吧。继续找。我肯定你很快就会得到一些情报的！」");
	say();
labelFunc04FA_02EE:
	UI_remove_answer("商人");
labelFunc04FA_02F5:
	case "还没准备好" attend labelFunc04FA_0312:
	message("「很好，");
	message(var0000);
	message("，我可以等到你了解到更多再说。」");
	say();
	UI_remove_answer("还没准备好");
	UI_pop_answers();
labelFunc04FA_0312:
	case "死了" attend labelFunc04FA_032D:
	message("「真的吗！」他似乎真的很惊讶。「这，啊，太好了。那我猜这起谋杀案已经报仇了。」");
	say();
	gflags[0x020F] = false;
	UI_remove_answer("死了");
	UI_pop_answers();
labelFunc04FA_032D:
	case "新的" attend labelFunc04FA_0340:
	message("他咧嘴笑着，明显感到尴尬。「我很抱歉。虽然这里的分会几年前就开设了，但它是不列颠尼亚最新设立的分会。我仍然认为自己是这里的新分会会长。」");
	say();
	UI_remove_answer("新的");
labelFunc04FA_0340:
	case "Moonglow" attend labelFunc04FA_035A:
	message("「啊，是的，Moonglow。这是一个令人愉快的城镇。你可以在这里找到各式各样的人。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04FA_035A:
	case "人" attend labelFunc04FA_036D:
	message("「对不起，但我不喜欢闲聊八卦。」");
	say();
	UI_remove_answer("人");
labelFunc04FA_036D:
	case "友谊会" attend labelFunc04FA_03AB:
	var0009 = UI_wearing_fellowship();
	if (!var0009) goto labelFunc04FA_0396;
	if (!gflags[0x0006]) goto labelFunc04FA_038F;
	message("「按照惯例，我们的聚会是在晚上 9 点。请随意加入我们。」");
	say();
	goto labelFunc04FA_0393;
labelFunc04FA_038F:
	message("「你真的应该把你的奖章还给那个给你的人。只有友谊会成员才被允许佩戴。」");
	say();
labelFunc04FA_0393:
	goto labelFunc04FA_03A4;
labelFunc04FA_0396:
	Func0919();
	message("「如果你有空的话，我很乐意和你讨论我们的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04FA_03A4:
	UI_remove_answer("友谊会");
labelFunc04FA_03AB:
	case "理念" attend labelFunc04FA_03BD:
	Func091A();
	UI_remove_answer("理念");
labelFunc04FA_03BD:
	case "声音" attend labelFunc04FA_03DD:
	if (!gflags[0x0006]) goto labelFunc04FA_03D2;
	message("「放轻松，朋友，当时机成熟时你就会听到。」");
	say();
	goto labelFunc04FA_03D6;
labelFunc04FA_03D2:
	message("「我们每个人内心都存在着一个内在的声音。这个声音是我们的伴侣和向导。~~参与友谊会越深的人，就越常能听到自己的内在声音。」");
	say();
labelFunc04FA_03D6:
	UI_remove_answer("声音");
labelFunc04FA_03DD:
	case "Elizabeth 和 Abraham" attend labelFunc04FA_0402:
	if (!(!gflags[0x0243])) goto labelFunc04FA_03F7;
	message("「多好的人啊！他们刚才还在这里给我进行训练课程。我才刚被任命为分会长。你知道的，这是一个新分会。总之，Elizabeth 和 Abraham 离开去往石像鬼岛 Terfin 了。」");
	say();
	gflags[0x01EF] = true;
	goto labelFunc04FA_03FB;
labelFunc04FA_03F7:
	message("「自从很多天前他们给我进行了训练之后，我就没见过他们了。」");
	say();
labelFunc04FA_03FB:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04FA_0402:
	case "Balayna 的指控" attend labelFunc04FA_049A:
	if (!var0002) goto labelFunc04FA_0417;
	message("「嘘！等一下再跟我说这件事，」他低声说着，并暗中指着 Balayna，「等她不在的时候。」");
	say();
	goto labelFunc04FA_048F;
labelFunc04FA_0417:
	message("他开始看起来觉得很有趣。~~「我不会让你太担心这件事的，");
	message(var0000);
	message("。恐怕 Balayna 有点太野心勃勃了。我猜她可能是无意中听到了我的一场演讲，并且误解了我的话。等我有更多时间时，我必须和她谈谈这件事，以便消除她的恐惧。」他睁大眼睛，仿佛想起了什么。~~「我忘了，她曾向一位会经过不列颠的旅行商人要求了一小瓶利口酒。他几天前把酒带来了，而我一直没有机会给她。你愿意帮我把酒送给她吗，");
	message(var0000);
	message("？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04FA_0475;
	message("「太好了，我的朋友。」");
	say();
	var000B = UI_add_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var000B) goto labelFunc04FA_045C;
	message("「我感谢你。」他把那瓶利口酒给了你。");
	say();
	gflags[0x020E] = true;
	goto labelFunc04FA_0472;
labelFunc04FA_045C:
	message("「啊，好吧，你带的东西太多了。我只好把它留到我有时间跟她谈的时候再说。总之还是谢谢你。」");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_0472:
	goto labelFunc04FA_048B;
labelFunc04FA_0475:
	message("「很好。我只好把它留到我有时间跟她谈的时候再说。总之还是谢谢你。」");
	say();
	UI_set_timer(0x0008);
	UI_remove_npc(0xFF64);
	gflags[0x020C] = true;
labelFunc04FA_048B:
	gflags[0x020A] = true;
labelFunc04FA_048F:
	UI_remove_answer("Balayna 的指控");
	var0001 = true;
labelFunc04FA_049A:
	case "告辞" attend labelFunc04FA_04A5:
	goto labelFunc04FA_04A8;
labelFunc04FA_04A5:
	goto labelFunc04FA_00D7;
labelFunc04FA_04A8:
	endconv;
	if (!gflags[0x0006]) goto labelFunc04FA_04B6;
	message("「愿三位一体 (Triad) 指引你的生活。」*");
	say();
	goto labelFunc04FA_04C6;
labelFunc04FA_04B6:
	message("「如果你对友谊会感兴趣，");
	message(var0000);
	message("，去不列颠找巴特林。再见，");
	message(var0000);
	message("。」*");
	say();
labelFunc04FA_04C6:
	if (!(event == 0x0000)) goto labelFunc04FA_04D4;
	Func092E(0xFF06);
labelFunc04FA_04D4:
	return;
}


