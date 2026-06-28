#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04DC object#(0x4DC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04DC_02FC;
	UI_show_npc_face(0xFF24, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF66);
	var0004 = false;
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!gflags[0x02E2]) goto labelFunc04DC_0055;
	message("「你把我从牢房里放出来真是太好了。我现在要回到我以前的生活。日安！」*");
	say();
	abort;
	goto labelFunc04DC_0069;
labelFunc04DC_0055:
	var0005 = UI_get_npc_object(0xFF24);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04DC_0069:
	if (!(!gflags[0x02C2])) goto labelFunc04DC_0077;
	message("监狱里的男人带着相当灿烂的笑容向你问候。");
	say();
	goto labelFunc04DC_0081;
labelFunc04DC_0077:
	message("「哎呀，哈啰，");
	message(var0000);
	message("。在这美好的一天，我能如何帮助你？」");
	say();
labelFunc04DC_0081:
	converse attend labelFunc04DC_02F1;
	case "姓名" attend labelFunc04DC_00F1:
	message("「我是 Sullivan ，");
	message(var0000);
	message("，」他愉快地说。「你是谁？」*");
	say();
	var0006 = "the Avatar";
	var0007 = Func090B([var0001, var0006, var0000]);
	if (!(var0007 == var0001)) goto labelFunc04DC_00C8;
	message("「很高兴认识你，");
	message(var0001);
	message("。」他伸出手想与你握手，却被铁栏杆挡住了。~~「啊，好吧，抱歉，");
	message(var0000);
	message("。就当作你已经被好好地握过手了吧。」");
	say();
labelFunc04DC_00C8:
	if (!(var0007 == var0000)) goto labelFunc04DC_00DC;
	message("「当然，");
	message(var0000);
	message("。我明白。」他笑了。");
	say();
labelFunc04DC_00DC:
	if (!(var0007 == var0006)) goto labelFunc04DC_00F1;
	message("「哦，我明白了。糟糕……」他耸耸肩。");
	say();
	UI_add_answer("糟糕");
labelFunc04DC_00F1:
	case "职业" attend labelFunc04DC_010A:
	message("「嗯，老实说，");
	message(var0000);
	message("，我没有职业。虽然，有一段时间，我是个偷窃的无赖。」");
	say();
	UI_add_answer("无赖");
labelFunc04DC_010A:
	case "友谊会" attend labelFunc04DC_015C:
	message("「这真是一群很棒的人，");
	message(var0000);
	message("。我们向居住在这片美丽土地上的人们传播指引与繁荣。当然，目前我的同伴们对我有点……不满。」");
	say();
	if (!var0002) goto labelFunc04DC_0145;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「那真是轻描淡写了！」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
labelFunc04DC_0145:
	UI_remove_answer("友谊会");
	UI_add_answer(["指引", "繁荣", "不满"]);
labelFunc04DC_015C:
	case "指引" attend labelFunc04DC_016F:
	message("「友谊会教导人们像羊一样跟随他们的领袖。你能想到更好的指引吗？」");
	say();
	UI_remove_answer("指引");
labelFunc04DC_016F:
	case "繁荣" attend labelFunc04DC_0182:
	message("「当一个会员表现得体并听从指示等等时，他——或她——就能听到教导人如何在游戏中获胜的『内在声音 (inner voice) 』。这正是我加入的原因！」他笑得很开怀。~~「然而，我还没有听到那个声音。」");
	say();
	UI_remove_answer("繁荣");
labelFunc04DC_0182:
	case "不满" attend labelFunc04DC_01A2:
	message("「嗯，显然我不够努力，不配得到我……从楼上的钱箱里『取得』的贷款。」");
	say();
	UI_remove_answer("不满");
	UI_add_answer(["应得的", "借款"]);
labelFunc04DC_01A2:
	case "应得的" attend labelFunc04DC_01C3:
	message("他尽可能地向你倾斜。这也许是他一生中第一次变得如此严肃。「实际上，应得是一个相对的词。我终于意识到——白天在刑架上待了好几个小时，让我有很多时间去体会——友谊会的真实本质。巴特林、 Abraham 和 Danag ，他们都错了。~~当守护者 (Guardian) 在不列颠尼亚出现时，我毫不怀疑他会简单地消灭所有人，包括友谊会的领袖们。」他恢复了笑容。~~「这就是为什么我决定现在就从友谊会和不列颠尼亚榨取一切，在我们全部被杀之前。」");
	say();
	UI_remove_answer("应得的");
	if (!(!var0004)) goto labelFunc04DC_01C3;
	UI_add_answer("刑架");
labelFunc04DC_01C3:
	case "借款" attend labelFunc04DC_01D6:
	message("「嗯……我本来是打算迟早要还钱的。我只是需要它在游戏中赢更多。」");
	say();
	UI_remove_answer("借款");
labelFunc04DC_01D6:
	case "糟糕" attend labelFunc04DC_0242:
	if (!var0002) goto labelFunc04DC_020A;
	UI_show_npc_face(0xFF10, 0x0000);
	message("「这傻瓜的意思是，他过去常穿着装扮，假装是你，试图从店主那里骗取货物。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「非常正确，圣者 。这个诡计太过成功了。老实说，这真是个耻辱。我不该逃脱惩罚，而确实，我现在正受到适当的惩戒。」");
	say();
	goto labelFunc04DC_023B;
labelFunc04DC_020A:
	message("「哦，只是我已经冒充你一段时间了，为了从店主那里拿走物品而不付钱。嗯，确切地说是『曾经』。现在我正为此受到适当的惩罚。」");
	say();
	if (!var0003) goto labelFunc04DC_023B;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("「谢谢你。」*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「不客气。」他点点头。*");
	say();
labelFunc04DC_023B:
	UI_remove_answer("糟糕");
labelFunc04DC_0242:
	case "无赖" attend labelFunc04DC_0298:
	message("「嗯，在我被抓到之前，我会在全不列颠尼亚的商店里游走，冒充『圣者 』。店主们都很乐意送我许多礼物。你确实过着美好的生活，");
	message(var0000);
	message("。」");
	say();
	if (!var0002) goto labelFunc04DC_028A;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「问问他关于他税金的事，");
	message(var0000);
	message("。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	UI_add_answer("税");
labelFunc04DC_028A:
	UI_add_answer("礼物");
	UI_remove_answer("无赖");
labelFunc04DC_0298:
	case "礼物" attend labelFunc04DC_02AB:
	message("「哦，就是我要求任何的东西——武器、护甲、物资、法术。当然，我对法术没什么真正的用途，但不管怎样，能免费获得它们还是很不错的。」");
	say();
	UI_remove_answer("礼物");
labelFunc04DC_02AB:
	case "税" attend labelFunc04DC_02CC:
	message("他笑了。~~「不列颠尼亚税务委员会为了替官府筹措资金而设立了一项税收。我不想付给他们，」他耸耸肩，「所以我没付。而且，当然，」他咧着嘴笑，「现在他们经常把我放在那个精美的刑架上。」~~他伸长脖子，盯着那块木板。~~「非常精细的作工。」他点点头。「的确，那是我见过最棒的刑架！」");
	say();
	UI_remove_answer("税");
	if (!(!var0004)) goto labelFunc04DC_02CC;
	UI_add_answer("刑架");
labelFunc04DC_02CC:
	case "刑架" attend labelFunc04DC_02E3:
	message("「那不是你见过最精美的刑架吗？精湛的工艺，美丽的细节。」");
	say();
	var0004 = true;
	UI_remove_answer("刑架");
labelFunc04DC_02E3:
	case "告辞" attend labelFunc04DC_02EE:
	goto labelFunc04DC_02F1;
labelFunc04DC_02EE:
	goto labelFunc04DC_0081;
labelFunc04DC_02F1:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。很快在地表世界见！」*");
	say();
labelFunc04DC_02FC:
	if (!(event == 0x0000)) goto labelFunc04DC_030A;
	Func092E(0xFF24);
labelFunc04DC_030A:
	return;
}


