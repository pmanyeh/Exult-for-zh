#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04AC object#(0x4AC) ()
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

	if (!(event == 0x0001)) goto labelFunc04AC_0604;
	UI_show_npc_face(0xFF54, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "圣者";
	var0003 = "关你屁事！";
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF54));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x022F]) goto labelFunc04AC_005B;
	var0006 = var0000;
labelFunc04AC_005B:
	if (!gflags[0x0230]) goto labelFunc04AC_0067;
	var0006 = var0001;
labelFunc04AC_0067:
	if (!gflags[0x0214]) goto labelFunc04AC_0081;
	var0006 = var0001;
	if (!(!gflags[0x0235])) goto labelFunc04AC_0081;
	UI_add_answer("道歉");
labelFunc04AC_0081:
	if (!(gflags[0x0213] && (!gflags[0x0218]))) goto labelFunc04AC_0093;
	UI_add_answer("Tobias 偷了毒液");
labelFunc04AC_0093:
	if (!gflags[0x0233]) goto labelFunc04AC_00A0;
	UI_add_answer("帐本");
labelFunc04AC_00A0:
	var0007 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0007) goto labelFunc04AC_00C2;
	UI_add_answer("归还毒液");
labelFunc04AC_00C2:
	if (!(!gflags[0x0225])) goto labelFunc04AC_0138;
	message("你看到一个男人，他的眼珠慢慢地转来转去，嘴角挂着狡黠的微笑。他走到你面前，上下打量着你。「喔，镇上一定有巡回表演！」他窃笑着说。「那是一件非常棒的小丑装！你是谁？」*");
	say();
	var0008 = Func090B([var0000, var0002, var0003]);
	if (!(var0008 == var0000)) goto labelFunc04AC_00FD;
	message("「很好，");
	message(var0000);
	message("。你想要什么？」");
	say();
	gflags[0x022F] = true;
	var0006 = var0000;
labelFunc04AC_00FD:
	if (!(var0008 == var0003)) goto labelFunc04AC_0114;
	message("「无礼的狗！」*");
	say();
	gflags[0x0230] = true;
	gflags[0x0225] = true;
	abort;
labelFunc04AC_0114:
	if (!(var0008 == var0002)) goto labelFunc04AC_0131;
	message("「你是个卑鄙的傻瓜，拼命想让别人喜欢你。要不是我更讨厌你，我还会可怜你！」*");
	say();
	gflags[0x0214] = true;
	var0006 = var0002;
	gflags[0x0225] = true;
	abort;
labelFunc04AC_0131:
	gflags[0x0225] = true;
	goto labelFunc04AC_0142;
labelFunc04AC_0138:
	message("「你好，");
	message(var0006);
	message("。」Morfin 说道。");
	say();
labelFunc04AC_0142:
	converse attend labelFunc04AC_05FF;
	case "姓名" attend labelFunc04AC_0158:
	message("「我的名字是 Morfin。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AC_0158:
	case "职业" attend labelFunc04AC_0174:
	message("「我是一个商人，在 Paws 经营着最兴旺的生意之一，其中包括屠宰场。」");
	say();
	UI_add_answer(["商人", "Paws", "屠宰场"]);
labelFunc04AC_0174:
	case "商人" attend labelFunc04AC_0194:
	message("「哦，我到处卖一点这个，卖一点那个。哪里有需求，我就尽量供应。」");
	say();
	UI_add_answer(["需求", "供应"]);
	UI_remove_answer("商人");
labelFunc04AC_0194:
	case "需求" attend labelFunc04AC_01A7:
	message("「例如，在某些地区对银蛇的毒液有相当大的需求。」");
	say();
	UI_remove_answer("需求");
labelFunc04AC_01A7:
	case "供应" attend labelFunc04AC_01C7:
	message("「我不时会保留少量银蛇毒液库存，卖给不列颠尼亚的药剂师以赚取微薄利润。官方正试图控制它的销售，直到他们能够确定它的影响有多危险。」");
	say();
	UI_remove_answer("供应");
	UI_add_answer(["药剂师", "影响"]);
labelFunc04AC_01C7:
	case "药剂师" attend labelFunc04AC_01DA:
	message("「他的名字是 Kessler。」");
	say();
	UI_remove_answer("药剂师");
labelFunc04AC_01DA:
	case "Paws" attend labelFunc04AC_01FB:
	message("「我想我的生意赚的钱足够让我搬到不列颠城了，但这里的东西便宜多了。当然，这起窃盗案让我有点警惕。~~『如果你想多了解这里的人，可以去跟经营友谊会庇护所的那对夫妇 Feridwyn 和 Brita 谈谈。』」");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04AC_01FB;
	UI_add_answer("窃盗案");
labelFunc04AC_01FB:
	case "屠宰场" attend labelFunc04AC_0215:
	message("「我想你已经注意到这个味道了。如果是的话，我道歉。」他耸耸肩，咧嘴笑着，手掌向上摊开。~~「我认为这是成功的味道。如果你愿意，你可以买些肉。」");
	say();
	UI_add_answer("买肉");
	UI_remove_answer("屠宰场");
labelFunc04AC_0215:
	case "买肉" attend labelFunc04AC_0250:
	if (!(var0005 == 0x0007)) goto labelFunc04AC_0245;
	message("「我卖羊肉、牛肉和火腿。你想要哪一种？」");
	say();
	UI_push_answers();
	UI_add_answer(["再看看", "羊肉", "牛肉", "火腿"]);
	goto labelFunc04AC_0249;
labelFunc04AC_0245:
	message("「屠宰场关门了。等营业的时候再来，我就卖肉给你。」");
	say();
labelFunc04AC_0249:
	UI_remove_answer("买肉");
labelFunc04AC_0250:
	case "再看看" attend labelFunc04AC_0260:
	message("「也许下次吧。」");
	say();
	UI_pop_answers();
labelFunc04AC_0260:
	case "羊肉" attend labelFunc04AC_0307:
	message("「每块要 3 枚金币。还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc04AC_02F6;
	message("「你想要多少？」");
	say();
	var0009 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var000A = (var0009 * 0x0003);
	var000B = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000B) goto labelFunc04AC_02E9;
	var000C = UI_add_party_items(var0009, 0x0179, 0xFE99, 0x0008, true);
	if (!var000C) goto labelFunc04AC_02CE;
	message("「在这里。」");
	say();
	goto labelFunc04AC_02E6;
labelFunc04AC_02CE:
	message("「你没有空间放这个肉了。」");
	say();
	var000D = UI_add_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_02E6:
	goto labelFunc04AC_02F3;
labelFunc04AC_02E9:
	message("「你没有足够的金币买这个，");
	message(var0006);
	message("。也许看看别的。」");
	say();
labelFunc04AC_02F3:
	goto labelFunc04AC_0300;
labelFunc04AC_02F6:
	message("「也许下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_0300:
	UI_remove_answer("羊肉");
labelFunc04AC_0307:
	case "牛肉" attend labelFunc04AC_03AE:
	message("「每块要 2 枚金币。还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc04AC_039D;
	message("「你想要多少？」");
	say();
	var000E = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var000F = (var000E * 0x0002);
	var0010 = UI_remove_party_items(var000F, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0010) goto labelFunc04AC_0390;
	var0011 = UI_add_party_items(var000E, 0x0179, 0xFE99, 0x0009, true);
	if (!var0011) goto labelFunc04AC_0375;
	message("「在这里。」");
	say();
	goto labelFunc04AC_038D;
labelFunc04AC_0375:
	message("「你没有空间放这个肉了。」");
	say();
	var0012 = UI_add_party_items(var000F, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_038D:
	goto labelFunc04AC_039A;
labelFunc04AC_0390:
	message("「你没有足够的金币买这个，");
	message(var0006);
	message("。也许看看别的。」");
	say();
labelFunc04AC_039A:
	goto labelFunc04AC_03A7;
labelFunc04AC_039D:
	message("「也许下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_03A7:
	UI_remove_answer("牛肉");
labelFunc04AC_03AE:
	case "火腿" attend labelFunc04AC_0455:
	message("「每块要 4 枚金币。还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc04AC_0444;
	message("「你想要多少？」");
	say();
	var0013 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var0014 = (var0013 * 0x0004);
	var0015 = UI_remove_party_items(var0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0015) goto labelFunc04AC_0437;
	var0016 = UI_add_party_items(var0013, 0x0179, 0xFE99, 0x000B, true);
	if (!var0016) goto labelFunc04AC_041C;
	message("「在这里。」");
	say();
	goto labelFunc04AC_0434;
labelFunc04AC_041C:
	message("「你没有空间放这个肉了。」");
	say();
	var0017 = UI_add_party_items(var0014, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_0434:
	goto labelFunc04AC_0441;
labelFunc04AC_0437:
	message("「你没有足够的金币买这个，");
	message(var0006);
	message("。也许看看别的。」");
	say();
labelFunc04AC_0441:
	goto labelFunc04AC_044E;
labelFunc04AC_0444:
	message("「也许下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_044E:
	UI_remove_answer("火腿");
labelFunc04AC_0455:
	case "毒液" attend labelFunc04AC_0497:
	message("「这是一起可怕的犯罪，让我遭受了不小的经济损失。它也引起了周围社区对他们财产的担忧。」");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AC_048C;
	message("「如果你能帮忙调查这件事，我将成为你谦卑的仆人。你愿意吗？」");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc04AC_0485;
	message("「那么我将全力配合，");
	message(var0001);
	message("。」他鞠了个躬。");
	say();
	goto labelFunc04AC_0489;
labelFunc04AC_0485:
	message("「那我希望罪犯能通过其他方法被揪出来。」");
	say();
labelFunc04AC_0489:
	goto labelFunc04AC_0490;
labelFunc04AC_048C:
	message("「感谢你解开了幕后黑手是谁的谜团。」");
	say();
labelFunc04AC_0490:
	UI_remove_answer("毒液");
labelFunc04AC_0497:
	case "窃盗案" attend labelFunc04AC_04B5:
	message("「你是 Paws 的陌生人。小心在这个镇上游荡的小偷！罪犯偷了我一批珍贵的银蛇毒液！」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("窃盗案");
	UI_add_answer("毒液");
labelFunc04AC_04B5:
	case "道歉" attend labelFunc04AC_04D2:
	message("「我为我先前的无礼道歉，");
	message(var0006);
	message("。我已经意识到你是个诚实的人。请原谅我的侮辱。」他鞠了个躬，充满了虚伪。");
	say();
	UI_remove_answer("道歉");
	gflags[0x0235] = true;
labelFunc04AC_04D2:
	case "帐本" attend labelFunc04AC_04F8:
	message("你告诉 Morfin 你看过他的帐本。「等等，");
	message(var0006);
	message("！我承认除了药剂师之外，我也卖银蛇毒液给其他地方。但我所做的并不是——严格来说——违法的！」");
	say();
	UI_add_answer(["贩卖", "法律"]);
	UI_remove_answer("帐本");
labelFunc04AC_04F8:
	case "贩卖" attend labelFunc04AC_050B:
	message("「我的货源来自海盗巢穴 (Buccaneer's Den)的一些老朋友。他们从哪里弄来的，谁知道呢？」");
	say();
	UI_remove_answer("贩卖");
labelFunc04AC_050B:
	case "法律" attend labelFunc04AC_0525:
	message("「我和不列颠尼亚n 矿业公司签了经过公证的合约。他们用它来让他们的石像鬼工作更长的时间。看来石像鬼对银蛇毒液的影响有较强的抵抗力。可怜的家伙们。」他对自己的笑话恶意地咧嘴一笑。");
	say();
	UI_remove_answer("法律");
	UI_add_answer("影响");
labelFunc04AC_0525:
	case "影响" attend labelFunc04AC_053F:
	message("「这是众所周知的。银蛇毒液是一种试剂，当少量摄入时，会暂时增强体力、耐力和敏捷度，并带来欣快感。~~「当效果消退后，服用者会感到非常疲惫。这往往会让他们想要再次服用。~~「以这种方式长期使用会导致皮肤恶化，最终腐烂。~~「最后，过大的剂量或累积过多剂量是致命的，因为毒液是一种致命的毒药。~~「当以我们尚未发现的其他方式使用时，它很可能具有一些治愈的特性，但任何毒液的用户，都应该非常谨慎地使用它。」");
	say();
	UI_remove_answer("影响");
	UI_add_answer("用户");
labelFunc04AC_053F:
	case "用户", "Tobias 偷了毒液" attend labelFunc04AC_0577:
	if (!gflags[0x0213]) goto labelFunc04AC_056C;
	message("「我不太确定 Tobias 是偷毒液的人。我没有在 Tobias 身上看到任何使用毒液的迹象，而且我对它的症状非常熟悉。但是，现在我想起来，我注意到 Garritt 最近显得很疲倦。他前一刻看起来很过动，下一刻又不健康。」");
	say();
	if (!(!gflags[0x0237])) goto labelFunc04AC_0562;
	UI_add_answer("Garritt");
labelFunc04AC_0562:
	UI_remove_answer("Tobias 偷了毒液");
	goto labelFunc04AC_0570;
labelFunc04AC_056C:
	message("「我不相信我注意到镇上有任何人表现出使用毒液的症状。从现在开始我会保持观察，所以你稍后再问吧。」");
	say();
labelFunc04AC_0570:
	UI_remove_answer("用户");
labelFunc04AC_0577:
	case "Garritt" attend labelFunc04AC_05B3:
	message("「或许你应该搜查 Garritt 的物品！这提醒了我——我早些时候看到他在屠宰场附近玩耍。他掉了这把钥匙。也许它能打开什么……重要的东西。」");
	say();
	var0019 = UI_add_party_items(0x0001, 0x0281, 0x00E0, 0x0006, false);
	if (!var0019) goto labelFunc04AC_05A8;
	message("「在这里。」");
	say();
	gflags[0x0237] = true;
	goto labelFunc04AC_05AC;
labelFunc04AC_05A8:
	message("「等你的双手不那么忙碌时，我再把它交给你。」");
	say();
labelFunc04AC_05AC:
	UI_remove_answer("Garritt");
labelFunc04AC_05B3:
	case "归还毒液" attend labelFunc04AC_05F1:
	var001A = UI_remove_party_items(0x0001, 0x0289, 0xFE99, 0xFE99, true);
	if (!var001A) goto labelFunc04AC_05E6;
	message("「我感谢你揪出小偷并归还我的蛇毒。」");
	say();
	if (!gflags[0x0218]) goto labelFunc04AC_05E3;
	message("「所以 Garritt 是罪犯，嗯？现在想起来我并不惊讶。从现在开始，我必须更密切地关注我的毒液。」");
	say();
labelFunc04AC_05E3:
	goto labelFunc04AC_05EA;
labelFunc04AC_05E6:
	message("「当然，如果你找到了，我确实希望你能把我的毒液还给我。」");
	say();
labelFunc04AC_05EA:
	UI_remove_answer("归还毒液");
labelFunc04AC_05F1:
	case "告辞" attend labelFunc04AC_05FC:
	goto labelFunc04AC_05FF;
labelFunc04AC_05FC:
	goto labelFunc04AC_0142;
labelFunc04AC_05FF:
	endconv;
	message("「祝你有个美好的一天。」*");
	say();
labelFunc04AC_0604:
	if (!(event == 0x0000)) goto labelFunc04AC_0612;
	Func092E(0xFF54);
labelFunc04AC_0612:
	return;
}


