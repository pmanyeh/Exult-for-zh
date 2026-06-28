#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04B2 object#(0x4B2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B2_02C5;
	UI_show_npc_face(0xFF4E, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF4E));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0212]) goto labelFunc04B2_004A;
	if (!(!gflags[0x0218])) goto labelFunc04B2_004A;
	UI_add_answer("小偷");
labelFunc04B2_004A:
	if (!gflags[0x021C]) goto labelFunc04B2_005E;
	if (!(!gflags[0x0218])) goto labelFunc04B2_005E;
	UI_add_answer("毒液");
labelFunc04B2_005E:
	if (!(!gflags[0x022B])) goto labelFunc04B2_0074;
	message("你看到一个生闷气的小伙子，他似乎不想直视你的眼睛。");
	say();
	message("「正合我意。又一个圣者。」他小声地咕哝着。");
	say();
	gflags[0x022B] = true;
	goto labelFunc04B2_0085;
labelFunc04B2_0074:
	if (!gflags[0x0218]) goto labelFunc04B2_0081;
	message("「什么事，圣者？」Tobias 问道。");
	say();
	goto labelFunc04B2_0085;
labelFunc04B2_0081:
	message("「你想要什么？」Tobias 问道。");
	say();
labelFunc04B2_0085:
	converse attend labelFunc04B2_02B3;
	case "姓名" attend labelFunc04B2_00A8:
	if (!gflags[0x0218]) goto labelFunc04B2_009D;
	message("「我还是 Tobias！」");
	say();
	goto labelFunc04B2_00A1;
labelFunc04B2_009D:
	message("「我是 Tobias。我想我应该相信你是个重要人物。」");
	say();
labelFunc04B2_00A1:
	UI_remove_answer("姓名");
labelFunc04B2_00A8:
	case "职业" attend labelFunc04B2_00C1:
	message("「我还太小，不能工作。我只是在农场里帮我母亲的忙。」");
	say();
	UI_add_answer(["母亲", "农场"]);
labelFunc04B2_00C1:
	case "母亲" attend labelFunc04B2_00F5:
	message("「她的名字是 Camille。她谈起过你。或者应该说，她谈起过圣者，这才是我要说的。镇上有些人认为她疯了，因为她仍然相信八大美德。」");
	say();
	if (!gflags[0x022A]) goto labelFunc04B2_00D7;
	message("「你已经见过她了。」");
	say();
labelFunc04B2_00D7:
	if (!gflags[0x0218]) goto labelFunc04B2_00E1;
	message("「但多亏了你，我对她的信仰有了更多尊重。」");
	say();
labelFunc04B2_00E1:
	UI_remove_answer("母亲");
	UI_add_answer(["圣者", "八大美德"]);
labelFunc04B2_00F5:
	case "圣者" attend labelFunc04B2_0139:
	message("「你真的是圣者吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B2_0121;
	if (!gflags[0x0218]) goto labelFunc04B2_011A;
	message("「是的，我真的相信你是真正的圣者！」Tobias 短暂地笑了笑。");
	say();
	goto labelFunc04B2_011E;
labelFunc04B2_011A:
	message("「你不是圣者！」Tobias 皱起眉头。");
	say();
labelFunc04B2_011E:
	goto labelFunc04B2_0132;
labelFunc04B2_0121:
	if (!gflags[0x0218]) goto labelFunc04B2_012E;
	message("「我想你身上可能有一点圣者之道的影子。每个人身上都有一点圣者的影子，或者至少我母亲是这么说的。」");
	say();
	goto labelFunc04B2_0132;
labelFunc04B2_012E:
	message("「我就知道你不过是个冒牌货。」");
	say();
labelFunc04B2_0132:
	UI_remove_answer("圣者");
labelFunc04B2_0139:
	case "八大美德" attend labelFunc04B2_0153:
	message("「我母亲在我小时候曾带我去过牺牲神殿。那是在我父亲死后不久，所以我记不太清楚了。~~我想它已经不在那里了，因为她从没说过要回去。~~我想也许她不想提起，是因为镇上有那么多人属于友谊会。而且也因为那会让她伤心。」");
	say();
	UI_remove_answer("八大美德");
	UI_add_answer("友谊会");
labelFunc04B2_0153:
	case "农场" attend labelFunc04B2_019A:
	message("「我母亲种植谷物。」");
	say();
	if (!(var0001 == 0x0006)) goto labelFunc04B2_016D;
	message("「你看到农场都认不出来吗？」");
	say();
labelFunc04B2_016D:
	if (!(var0001 == 0x001A)) goto labelFunc04B2_017B;
	message("「你一定找得到农场。它就在庇护所的北边。」");
	say();
labelFunc04B2_017B:
	if (!(!gflags[0x0218])) goto labelFunc04B2_0186;
	message("Tobias 看着你，好像觉得你有点迟钝。");
	say();
labelFunc04B2_0186:
	UI_remove_answer("农场");
	UI_add_answer(["谷物", "庇护所"]);
labelFunc04B2_019A:
	case "谷物" attend labelFunc04B2_01BA:
	message("「她有时会把谷物卖给磨坊主人 Thurston，这样我们偶尔就可以去酒馆，或者在乳制品厂买牛奶，但我们通常只是种农作物来养活自己。」");
	say();
	UI_add_answer(["Thurston", "乳制品厂"]);
	UI_remove_answer("谷物");
labelFunc04B2_01BA:
	case "庇护所" attend labelFunc04B2_01D4:
	message("「就是这里南边的那个地方。是友谊会经营的。」");
	say();
	UI_remove_answer("庇护所");
	UI_add_answer("友谊会");
labelFunc04B2_01D4:
	case "Thurston" attend labelFunc04B2_01E7:
	message("「他是我在镇上少数喜欢的人之一。他对我们很好。」");
	say();
	UI_remove_answer("Thurston");
labelFunc04B2_01E7:
	case "乳制品厂" attend labelFunc04B2_01FA:
	message("「乳制品厂在庇护所的南边。Andrew ——经营乳制品厂的人——他父亲是我父亲的朋友。」");
	say();
	UI_remove_answer("乳制品厂");
labelFunc04B2_01FA:
	case "友谊会" attend labelFunc04B2_021A:
	message("他第一次直视你的眼睛。「我讨厌友谊会！镇上唯一和我同年纪的人就是那个白痴 Garritt，而他嘴里总是挂着这个！他总是试图说服我母亲加入。」他愤怒地握紧拳头。「请不要再提他们了。」");
	say();
	UI_add_answer(["Garritt", "母亲加入？"]);
	UI_remove_answer("友谊会");
labelFunc04B2_021A:
	case "母亲加入？" attend labelFunc04B2_022D:
	message("「那些该死的友谊会的人知道每个人距离身无分文永远只有一餐之遥。他们说要我们立刻加入，因为庇护所是为了帮助友谊会成员而设的。如果我们有一天需要住在那里，他们可能会为了其他友谊会成员而把我们拒之门外。」");
	say();
	UI_remove_answer("母亲加入？");
labelFunc04B2_022D:
	case "小偷" attend labelFunc04B2_0244:
	message("「Paws 有个逍遥法外的小偷！他从屠宰场老板 Morfin 那里偷了银蛇毒液。没有人知道他是谁。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
labelFunc04B2_0244:
	case "毒液" attend labelFunc04B2_025E:
	message("「我对被偷的毒液一无所知。我是被诬陷的！」");
	say();
	UI_remove_answer("毒液");
	UI_add_answer("被诬陷");
labelFunc04B2_025E:
	case "被诬陷" attend labelFunc04B2_0271:
	message("「没错！是 Garritt 干的。我就是知道。那天我从田里回来时他在我房间里。他说他在找一颗球，但我不相信他。你信不信我，我不在乎。但如果你真的是圣者，你就会知道我说的是实话。」");
	say();
	UI_remove_answer("被诬陷");
labelFunc04B2_0271:
	case "Garritt" attend labelFunc04B2_02A5:
	if (!gflags[0x0218]) goto labelFunc04B2_028C;
	message("你告诉 Tobias 你是如何发现 Garritt 是小偷的。「谢谢你，");
	message(var0000);
	message("，谢谢你没有相信我是有罪的。我不确定你是否真的是圣者，但你身上确实有圣者之道的影子。」");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_028C:
	if (!(!gflags[0x0213])) goto labelFunc04B2_029A;
	message("「他是镇上唯一和我年纪相仿的男孩。他父母不想让他和我玩，因为他们认为『和那种人交往』会『阻碍他的教育』之类的废话。我受不了那个小混蛋。我讨厌他吹那种臭排笛的样子！」");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_029A:
	message("「那个被宠坏的臭小子 Garritt 一定是把毒液栽赃到我房间了！他通常都在闲逛，即使他父母反对他和我玩。我知道他不怀好意！你应该去搜他的房间！」");
	say();
labelFunc04B2_029E:
	UI_remove_answer("Garritt");
labelFunc04B2_02A5:
	case "告辞" attend labelFunc04B2_02B0:
	goto labelFunc04B2_02B3;
labelFunc04B2_02B0:
	goto labelFunc04B2_0085;
labelFunc04B2_02B3:
	endconv;
	if (!gflags[0x0218]) goto labelFunc04B2_02C1;
	message("「再见，圣者。祝你好运。」*");
	say();
	goto labelFunc04B2_02C5;
labelFunc04B2_02C1:
	message("「那就上路吧，伟大又充满智能的圣者。」*");
	say();
labelFunc04B2_02C5:
	if (!(event == 0x0000)) goto labelFunc04B2_02D3;
	Func092E(0xFF4E);
labelFunc04B2_02D3:
	return;
}


