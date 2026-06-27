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
	var0002 = "聖者";
	var0003 = "關你屁事！";
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF54));
	UI_add_answer(["姓名", "職業", "告辭"]);
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
	UI_add_answer("帳本");
labelFunc04AC_00A0:
	var0007 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0007) goto labelFunc04AC_00C2;
	UI_add_answer("歸還毒液");
labelFunc04AC_00C2:
	if (!(!gflags[0x0225])) goto labelFunc04AC_0138;
	message("你看到一個男人，他的眼珠慢慢地轉來轉去，嘴角掛著狡黠的微笑。他走到你面前，上下打量著你。「喔，鎮上一定有巡迴表演！」他竊笑著說。「那是一件非常棒的小丑裝！你是誰？」*");
	say();
	var0008 = Func090B([var0000, var0002, var0003]);
	if (!(var0008 == var0000)) goto labelFunc04AC_00FD;
	message("「很好，");
	message(var0000);
	message("。你想要什麼？」");
	say();
	gflags[0x022F] = true;
	var0006 = var0000;
labelFunc04AC_00FD:
	if (!(var0008 == var0003)) goto labelFunc04AC_0114;
	message("「無禮的狗！」*");
	say();
	gflags[0x0230] = true;
	gflags[0x0225] = true;
	abort;
labelFunc04AC_0114:
	if (!(var0008 == var0002)) goto labelFunc04AC_0131;
	message("「你是個卑鄙的傻瓜，拼命想讓別人喜歡你。要不是我更討厭你，我還會可憐你！」*");
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
	message("。」Morfin 說道。");
	say();
labelFunc04AC_0142:
	converse attend labelFunc04AC_05FF;
	case "姓名" attend labelFunc04AC_0158:
	message("「我的名字是 Morfin。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AC_0158:
	case "職業" attend labelFunc04AC_0174:
	message("「我是一個商人，在 Paws 經營著最興旺的生意之一，其中包括屠宰場。」");
	say();
	UI_add_answer(["商人", "Paws", "屠宰場"]);
labelFunc04AC_0174:
	case "商人" attend labelFunc04AC_0194:
	message("「哦，我到處賣一點這個，賣一點那個。哪裡有需求，我就盡量供應。」");
	say();
	UI_add_answer(["需求", "供應"]);
	UI_remove_answer("商人");
labelFunc04AC_0194:
	case "需求" attend labelFunc04AC_01A7:
	message("「例如，在某些地區對銀蛇的毒液有相當大的需求。」");
	say();
	UI_remove_answer("需求");
labelFunc04AC_01A7:
	case "供應" attend labelFunc04AC_01C7:
	message("「我不時會保留少量銀蛇毒液庫存，賣給不列顛尼亞的藥劑師以賺取微薄利潤。官方正試圖控制它的銷售，直到他們能夠確定它的影響有多危險。」");
	say();
	UI_remove_answer("供應");
	UI_add_answer(["藥劑師", "影響"]);
labelFunc04AC_01C7:
	case "藥劑師" attend labelFunc04AC_01DA:
	message("「他的名字是 Kessler。」");
	say();
	UI_remove_answer("藥劑師");
labelFunc04AC_01DA:
	case "Paws" attend labelFunc04AC_01FB:
	message("「我想我的生意賺的錢足夠讓我搬到不列顛城了，但這裡的東西便宜多了。當然，這起竊盜案讓我有點警惕。~~『如果你想多了解這裡的人，可以去跟經營友誼會庇護所的那對夫婦 Feridwyn 和 Brita 談談。』」");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04AC_01FB;
	UI_add_answer("竊盜案");
labelFunc04AC_01FB:
	case "屠宰場" attend labelFunc04AC_0215:
	message("「我想你已經注意到這個味道了。如果是的話，我道歉。」他聳聳肩，咧嘴笑著，手掌向上攤開。~~「我認為這是成功的味道。如果你願意，你可以買些肉。」");
	say();
	UI_add_answer("買肉");
	UI_remove_answer("屠宰場");
labelFunc04AC_0215:
	case "買肉" attend labelFunc04AC_0250:
	if (!(var0005 == 0x0007)) goto labelFunc04AC_0245;
	message("「我賣羊肉、牛肉和火腿。你想要哪一種？」");
	say();
	UI_push_answers();
	UI_add_answer(["再看看", "羊肉", "牛肉", "火腿"]);
	goto labelFunc04AC_0249;
labelFunc04AC_0245:
	message("「屠宰場關門了。等營業的時候再來，我就賣肉給你。」");
	say();
labelFunc04AC_0249:
	UI_remove_answer("買肉");
labelFunc04AC_0250:
	case "再看看" attend labelFunc04AC_0260:
	message("「也許下次吧。」");
	say();
	UI_pop_answers();
labelFunc04AC_0260:
	case "羊肉" attend labelFunc04AC_0307:
	message("「每塊要 3 枚金幣。還有興趣嗎？」");
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
	message("「在這裡。」");
	say();
	goto labelFunc04AC_02E6;
labelFunc04AC_02CE:
	message("「你沒有空間放這個肉了。」");
	say();
	var000D = UI_add_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_02E6:
	goto labelFunc04AC_02F3;
labelFunc04AC_02E9:
	message("「你沒有足夠的金幣買這個，");
	message(var0006);
	message("。也許看看別的。」");
	say();
labelFunc04AC_02F3:
	goto labelFunc04AC_0300;
labelFunc04AC_02F6:
	message("「也許下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_0300:
	UI_remove_answer("羊肉");
labelFunc04AC_0307:
	case "牛肉" attend labelFunc04AC_03AE:
	message("「每塊要 2 枚金幣。還有興趣嗎？」");
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
	message("「在這裡。」");
	say();
	goto labelFunc04AC_038D;
labelFunc04AC_0375:
	message("「你沒有空間放這個肉了。」");
	say();
	var0012 = UI_add_party_items(var000F, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_038D:
	goto labelFunc04AC_039A;
labelFunc04AC_0390:
	message("「你沒有足夠的金幣買這個，");
	message(var0006);
	message("。也許看看別的。」");
	say();
labelFunc04AC_039A:
	goto labelFunc04AC_03A7;
labelFunc04AC_039D:
	message("「也許下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_03A7:
	UI_remove_answer("牛肉");
labelFunc04AC_03AE:
	case "火腿" attend labelFunc04AC_0455:
	message("「每塊要 4 枚金幣。還有興趣嗎？」");
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
	message("「在這裡。」");
	say();
	goto labelFunc04AC_0434;
labelFunc04AC_041C:
	message("「你沒有空間放這個肉了。」");
	say();
	var0017 = UI_add_party_items(var0014, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_0434:
	goto labelFunc04AC_0441;
labelFunc04AC_0437:
	message("「你沒有足夠的金幣買這個，");
	message(var0006);
	message("。也許看看別的。」");
	say();
labelFunc04AC_0441:
	goto labelFunc04AC_044E;
labelFunc04AC_0444:
	message("「也許下次吧，");
	message(var0006);
	message("。」");
	say();
labelFunc04AC_044E:
	UI_remove_answer("火腿");
labelFunc04AC_0455:
	case "毒液" attend labelFunc04AC_0497:
	message("「這是一起可怕的犯罪，讓我遭受了不小的經濟損失。它也引起了周圍社區對他們財產的擔憂。」");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AC_048C;
	message("「如果你能幫忙調查這件事，我將成為你謙卑的僕人。你願意嗎？」");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc04AC_0485;
	message("「那麼我將全力配合，");
	message(var0001);
	message("。」他鞠了個躬。");
	say();
	goto labelFunc04AC_0489;
labelFunc04AC_0485:
	message("「那我希望罪犯能透過其他方法被揪出來。」");
	say();
labelFunc04AC_0489:
	goto labelFunc04AC_0490;
labelFunc04AC_048C:
	message("「感謝你解開了幕後黑手是誰的謎團。」");
	say();
labelFunc04AC_0490:
	UI_remove_answer("毒液");
labelFunc04AC_0497:
	case "竊盜案" attend labelFunc04AC_04B5:
	message("「你是 Paws 的陌生人。小心在這個鎮上遊蕩的小偷！罪犯偷了我一批珍貴的銀蛇毒液！」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("竊盜案");
	UI_add_answer("毒液");
labelFunc04AC_04B5:
	case "道歉" attend labelFunc04AC_04D2:
	message("「我為我先前的無禮道歉，");
	message(var0006);
	message("。我已經意識到你是個誠實的人。請原諒我的侮辱。」他鞠了個躬，充滿了虛偽。");
	say();
	UI_remove_answer("道歉");
	gflags[0x0235] = true;
labelFunc04AC_04D2:
	case "帳本" attend labelFunc04AC_04F8:
	message("你告訴 Morfin 你看過他的帳本。「等等，");
	message(var0006);
	message("！我承認除了藥劑師之外，我也賣銀蛇毒液給其他地方。但我所做的並不是——嚴格來說——違法的！」");
	say();
	UI_add_answer(["販賣", "法律"]);
	UI_remove_answer("帳本");
labelFunc04AC_04F8:
	case "販賣" attend labelFunc04AC_050B:
	message("「我的貨源來自海盜巢穴 (Buccaneer's Den)的一些老朋友。他們從哪裡弄來的，誰知道呢？」");
	say();
	UI_remove_answer("販賣");
labelFunc04AC_050B:
	case "法律" attend labelFunc04AC_0525:
	message("「我和不列顛尼亞n 礦業公司簽了經過公證的合約。他們用它來讓他們的石像鬼工作更長的時間。看來石像鬼對銀蛇毒液的影響有較強的抵抗力。可憐的傢伙們。」他對自己的笑話惡意地咧嘴一笑。");
	say();
	UI_remove_answer("法律");
	UI_add_answer("影響");
labelFunc04AC_0525:
	case "影響" attend labelFunc04AC_053F:
	message("「這是眾所周知的。銀蛇毒液是一種試劑，當少量攝入時，會暫時增強體力、耐力和敏捷度，並帶來欣快感。~~「當效果消退後，服用者會感到非常疲憊。這往往會讓他們想要再次服用。~~「以這種方式長期使用會導致皮膚惡化，最終腐爛。~~「最後，過大的劑量或累積過多劑量是致命的，因為毒液是一種致命的毒藥。~~「當以我們尚未發現的其他方式使用時，它很可能具有一些治癒的特性，但任何毒液的使用者，都應該非常謹慎地使用它。」");
	say();
	UI_remove_answer("影響");
	UI_add_answer("使用者");
labelFunc04AC_053F:
	case "使用者", "Tobias 偷了毒液" attend labelFunc04AC_0577:
	if (!gflags[0x0213]) goto labelFunc04AC_056C;
	message("「我不太確定 Tobias 是偷毒液的人。我沒有在 Tobias 身上看到任何使用毒液的跡象，而且我對它的症狀非常熟悉。但是，現在我想起來，我注意到 Garritt 最近顯得很疲倦。他前一刻看起來很過動，下一刻又不健康。」");
	say();
	if (!(!gflags[0x0237])) goto labelFunc04AC_0562;
	UI_add_answer("Garritt");
labelFunc04AC_0562:
	UI_remove_answer("Tobias 偷了毒液");
	goto labelFunc04AC_0570;
labelFunc04AC_056C:
	message("「我不相信我注意到鎮上有任何人表現出使用毒液的症狀。從現在開始我會保持觀察，所以你稍後再問吧。」");
	say();
labelFunc04AC_0570:
	UI_remove_answer("使用者");
labelFunc04AC_0577:
	case "Garritt" attend labelFunc04AC_05B3:
	message("「或許你應該搜查 Garritt 的物品！這提醒了我——我早些時候看到他在屠宰場附近玩耍。他掉了這把鑰匙。也許它能打開什麼……重要的東西。」");
	say();
	var0019 = UI_add_party_items(0x0001, 0x0281, 0x00E0, 0x0006, false);
	if (!var0019) goto labelFunc04AC_05A8;
	message("「在這裡。」");
	say();
	gflags[0x0237] = true;
	goto labelFunc04AC_05AC;
labelFunc04AC_05A8:
	message("「等你的雙手不那麼忙碌時，我再把它交給你。」");
	say();
labelFunc04AC_05AC:
	UI_remove_answer("Garritt");
labelFunc04AC_05B3:
	case "歸還毒液" attend labelFunc04AC_05F1:
	var001A = UI_remove_party_items(0x0001, 0x0289, 0xFE99, 0xFE99, true);
	if (!var001A) goto labelFunc04AC_05E6;
	message("「我感謝你揪出小偷並歸還我的蛇毒。」");
	say();
	if (!gflags[0x0218]) goto labelFunc04AC_05E3;
	message("「所以 Garritt 是罪犯，嗯？現在想起來我並不驚訝。從現在開始，我必須更密切地關注我的毒液。」");
	say();
labelFunc04AC_05E3:
	goto labelFunc04AC_05EA;
labelFunc04AC_05E6:
	message("「當然，如果你找到了，我確實希望你能把我的毒液還給我。」");
	say();
labelFunc04AC_05EA:
	UI_remove_answer("歸還毒液");
labelFunc04AC_05F1:
	case "告辭" attend labelFunc04AC_05FC:
	goto labelFunc04AC_05FF;
labelFunc04AC_05FC:
	goto labelFunc04AC_0142;
labelFunc04AC_05FF:
	endconv;
	message("「祝你有個美好的一天。」*");
	say();
labelFunc04AC_0604:
	if (!(event == 0x0000)) goto labelFunc04AC_0612;
	Func092E(0xFF54);
labelFunc04AC_0612:
	return;
}


