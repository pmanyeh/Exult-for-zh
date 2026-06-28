#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0471 object#(0x471) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0471_02BA;
	UI_show_npc_face(0xFF8F, 0x0000);
	var0000 = Func0908();
	var0001 = Func08F7(0xFFFF);
	var0002 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x014B])) goto labelFunc0471_0047;
	message("你看到一匹马。「你还期待看到什么？」");
	say();
	gflags[0x014B] = true;
	goto labelFunc0471_0051;
labelFunc0471_0047:
	message("「现在又怎么了， ");
	message(var0000);
	message("？」 Smith 问。");
	say();
labelFunc0471_0051:
	converse attend labelFunc0471_02B9;
	case "姓名" attend labelFunc0471_00A1:
	message("「是的，我有名字。」");
	say();
	UI_remove_answer("姓名");
	if (!var0001) goto labelFunc0471_009A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「无赖！当别人问你名字时，你应该礼貌且准确地回答！圣者刚刚问的是『你的』名字。」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「我的名字？你想怎么叫我都行，但我只会回应 Smith 。」");
	say();
	UI_add_answer("Smith");
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0471_00A1;
labelFunc0471_009A:
	UI_add_answer("你的名字");
labelFunc0471_00A1:
	case "你的名字" attend labelFunc0471_00BB:
	message("「我的名字？你想怎么叫我都行，但我只会回应 Smith 。」");
	say();
	UI_add_answer("Smith");
	UI_remove_answer("你的名字");
labelFunc0471_00BB:
	case "职业" attend labelFunc0471_00F0:
	message("「职业？『职业』？我是一匹马，我能有什么工作？」他望向远方。「我现在都能想像了： Smith ——非凡的面包师傅。~~其实，我在室内装潢方面变得相当不错了。看到我怎么布置我的住所了吗？你很喜欢吧？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0471_00EB;
	message("「很好。那我就让你继续跟我说话吧！你比较喜欢哪个，我的客厅还是卧室？」");
	say();
	UI_push_answers();
	UI_add_answer(["客厅", "卧室"]);
	goto labelFunc0471_00F0;
labelFunc0471_00EB:
	message("「真有趣，我对你也有同感！」*");
	say();
	abort;
labelFunc0471_00F0:
	case "客厅", "卧室" attend labelFunc0471_0110:
	message("「你的品味还是一样差！」");
	say();
	UI_remove_answer(["客厅", "卧室"]);
	UI_pop_answers();
labelFunc0471_0110:
	case "Smith" attend labelFunc0471_0165:
	if (!var0002) goto labelFunc0471_0127;
	var0004 = "仍然想要";
	goto labelFunc0471_012D;
labelFunc0471_0127:
	var0004 = "想要";
labelFunc0471_012D:
	message("「对，这就是我的『名字』。喔～我懂了！你");
	message(var0004);
	message("从我这里得到什么，对吧？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0471_0160;
	message("「我就知道。你一直都是个自私的人。你想要什么？让我想想……金钱？建议？幸福？不，你通常想要某种线索，对吧。当然，在过去两百年间你也许变得无私了……~~我知道了！你想要拯救不列颠尼亚！」");
	say();
	UI_add_answer(["金钱", "建议", "线索", "幸福", "拯救不列颠尼亚"]);
	goto labelFunc0471_0165;
labelFunc0471_0160:
	message("「那你跟我说话做什么？」*");
	say();
	abort;
labelFunc0471_0165:
	case "金钱" attend labelFunc0471_0187:
	message("「从一匹马身上？对！说得好像我有钱给你一样。」");
	say();
	UI_remove_answer(["金钱", "建议", "线索", "幸福", "拯救不列颠尼亚"]);
labelFunc0471_0187:
	case "建议" attend labelFunc0471_0194:
	message("「别跟马说话！」*");
	say();
	abort;
labelFunc0471_0194:
	case "幸福" attend labelFunc0471_01B6:
	message("「谁不想？」");
	say();
	UI_remove_answer(["金钱", "建议", "线索", "幸福", "拯救不列颠尼亚"]);
labelFunc0471_01B6:
	case "拯救不列颠尼亚" attend labelFunc0471_01D8:
	message("「你真的以为我会相信吗？你做这些只是为了钱。」");
	say();
	UI_remove_answer(["金钱", "建议", "线索", "幸福", "拯救不列颠尼亚"]);
labelFunc0471_01D8:
	case "线索" attend labelFunc0471_020D:
	message("「现在我们进入正题了。好吧，我给你一个线索，但我能得到什么好处？让我猜猜。金钱？爱情？不，以我对你的了解，大概什么都没有。如果我运气好，你会走开别烦我。」");
	say();
	UI_remove_answer(["金钱", "建议", "线索", "幸福", "拯救不列颠尼亚"]);
	UI_add_answer(["金钱", "爱情", "什么都没有", "不会把你做成胶水"]);
labelFunc0471_020D:
	case "什么都没有" attend labelFunc0471_021A:
	message("「我已经有了！」*");
	say();
	abort;
labelFunc0471_021A:
	case "金钱" attend labelFunc0471_0227:
	message("「当然！好像我用得着那个一样！」*");
	say();
	abort;
labelFunc0471_0227:
	case "爱情" attend labelFunc0471_0234:
	message("「抱歉，我不搞那一套。」*");
	say();
	abort;
labelFunc0471_0234:
	case "不会把你做成胶水" attend labelFunc0471_0260:
	message("「威胁，是吗？你期望我怎么回应？彬彬有礼地张开蹄子欢迎你？~~这样吧：你走开别烦我，我就告诉你一个线索。公平吧？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0471_0254;
	message("「这才像话！成交。听好。」他环顾四周，确保没人偷听。「石像鬼 (gargoyles) ，」他停顿了一下，「并不邪恶。~~还有， Rasputin 是个卑鄙的火星人。好了，就这样！现在滚！」*");
	say();
	abort;
	goto labelFunc0471_0259;
labelFunc0471_0254:
	message("「很好。反正我也不打算跟你说话！」*");
	say();
	abort;
labelFunc0471_0259:
	UI_remove_answer("不会把你做成胶水");
labelFunc0471_0260:
	case "告辞" attend labelFunc0471_02B6:
	message("「那正好。反正我也开始厌烦你了。」");
	say();
	if (!var0001) goto labelFunc0471_02B1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，你怎么敢用这种态度跟圣者说话， Smith ！」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「你又是谁？我的主人吗？」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，事实上……」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「好喔，随便。」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0471_02B1:
	message("*");
	say();
	abort;
labelFunc0471_02B6:
	goto labelFunc0471_0051;
labelFunc0471_02B9:
	endconv;
labelFunc0471_02BA:
	if (!(event == 0x0000)) goto labelFunc0471_02C3;
	abort;
labelFunc0471_02C3:
	return;
}


