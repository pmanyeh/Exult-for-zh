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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0212]) goto labelFunc04B2_004A;
	if (!(!gflags[0x0218])) goto labelFunc04B2_004A;
	UI_add_answer("小偷");
labelFunc04B2_004A:
	if (!gflags[0x021C]) goto labelFunc04B2_005E;
	if (!(!gflags[0x0218])) goto labelFunc04B2_005E;
	UI_add_answer("毒液");
labelFunc04B2_005E:
	if (!(!gflags[0x022B])) goto labelFunc04B2_0074;
	message("你看到一個生悶氣的小伙子，他似乎不想直視你的眼睛。");
	say();
	message("「正合我意。又一個聖者。」他小聲地咕噥著。");
	say();
	gflags[0x022B] = true;
	goto labelFunc04B2_0085;
labelFunc04B2_0074:
	if (!gflags[0x0218]) goto labelFunc04B2_0081;
	message("「什麼事，聖者？」Tobias 問道。");
	say();
	goto labelFunc04B2_0085;
labelFunc04B2_0081:
	message("「你想要什麼？」Tobias 問道。");
	say();
labelFunc04B2_0085:
	converse attend labelFunc04B2_02B3;
	case "姓名" attend labelFunc04B2_00A8:
	if (!gflags[0x0218]) goto labelFunc04B2_009D;
	message("「我還是 Tobias！」");
	say();
	goto labelFunc04B2_00A1;
labelFunc04B2_009D:
	message("「我是 Tobias。我想我應該相信你是個重要人物。」");
	say();
labelFunc04B2_00A1:
	UI_remove_answer("姓名");
labelFunc04B2_00A8:
	case "職業" attend labelFunc04B2_00C1:
	message("「我還太小，不能工作。我只是在農場裡幫我母親的忙。」");
	say();
	UI_add_answer(["母親", "農場"]);
labelFunc04B2_00C1:
	case "母親" attend labelFunc04B2_00F5:
	message("「她的名字是 Camille。她談起過你。或者應該說，她談起過聖者，這才是我要說的。鎮上有些人認為她瘋了，因為她仍然相信八大美德。」");
	say();
	if (!gflags[0x022A]) goto labelFunc04B2_00D7;
	message("「你已經見過她了。」");
	say();
labelFunc04B2_00D7:
	if (!gflags[0x0218]) goto labelFunc04B2_00E1;
	message("「但多虧了你，我對她的信仰有了更多尊重。」");
	say();
labelFunc04B2_00E1:
	UI_remove_answer("母親");
	UI_add_answer(["聖者", "八大美德"]);
labelFunc04B2_00F5:
	case "聖者" attend labelFunc04B2_0139:
	message("「你真的是聖者嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04B2_0121;
	if (!gflags[0x0218]) goto labelFunc04B2_011A;
	message("「是的，我真的相信你是真正的聖者！」Tobias 短暫地笑了笑。");
	say();
	goto labelFunc04B2_011E;
labelFunc04B2_011A:
	message("「你不是聖者！」Tobias 皺起眉頭。");
	say();
labelFunc04B2_011E:
	goto labelFunc04B2_0132;
labelFunc04B2_0121:
	if (!gflags[0x0218]) goto labelFunc04B2_012E;
	message("「我想你身上可能有一點聖者之道的影子。每個人身上都有一點聖者的影子，或者至少我母親是這麼說的。」");
	say();
	goto labelFunc04B2_0132;
labelFunc04B2_012E:
	message("「我就知道你不過是個冒牌貨。」");
	say();
labelFunc04B2_0132:
	UI_remove_answer("聖者");
labelFunc04B2_0139:
	case "八大美德" attend labelFunc04B2_0153:
	message("「我母親在我小時候曾帶我去過犧牲神殿。那是在我父親死後不久，所以我記不太清楚了。~~我想它已經不在那裡了，因為她從沒說過要回去。~~我想也許她不想提起，是因為鎮上有那麼多人屬於友誼會。而且也因為那會讓她傷心。」");
	say();
	UI_remove_answer("八大美德");
	UI_add_answer("友誼會");
labelFunc04B2_0153:
	case "農場" attend labelFunc04B2_019A:
	message("「我母親種植穀物。」");
	say();
	if (!(var0001 == 0x0006)) goto labelFunc04B2_016D;
	message("「你看到農場都認不出來嗎？」");
	say();
labelFunc04B2_016D:
	if (!(var0001 == 0x001A)) goto labelFunc04B2_017B;
	message("「你一定找得到農場。它就在庇護所的北邊。」");
	say();
labelFunc04B2_017B:
	if (!(!gflags[0x0218])) goto labelFunc04B2_0186;
	message("Tobias 看著你，好像覺得你有點遲鈍。");
	say();
labelFunc04B2_0186:
	UI_remove_answer("農場");
	UI_add_answer(["穀物", "庇護所"]);
labelFunc04B2_019A:
	case "穀物" attend labelFunc04B2_01BA:
	message("「她有時會把穀物賣給磨坊主人 Thurston，這樣我們偶爾就可以去酒館，或者在乳製品廠買牛奶，但我們通常只是種農作物來養活自己。」");
	say();
	UI_add_answer(["Thurston", "乳製品廠"]);
	UI_remove_answer("穀物");
labelFunc04B2_01BA:
	case "庇護所" attend labelFunc04B2_01D4:
	message("「就是這裡南邊的那個地方。是友誼會經營的。」");
	say();
	UI_remove_answer("庇護所");
	UI_add_answer("友誼會");
labelFunc04B2_01D4:
	case "Thurston" attend labelFunc04B2_01E7:
	message("「他是我在鎮上少數喜歡的人之一。他對我們很好。」");
	say();
	UI_remove_answer("Thurston");
labelFunc04B2_01E7:
	case "乳製品廠" attend labelFunc04B2_01FA:
	message("「乳製品廠在庇護所的南邊。Andrew ——經營乳製品廠的人——他父親是我父親的朋友。」");
	say();
	UI_remove_answer("乳製品廠");
labelFunc04B2_01FA:
	case "友誼會" attend labelFunc04B2_021A:
	message("他第一次直視你的眼睛。「我討厭友誼會！鎮上唯一和我同年紀的人就是那個白痴 Garritt，而他嘴裡總是掛著這個！他總是試圖說服我母親加入。」他憤怒地握緊拳頭。「請不要再提他們了。」");
	say();
	UI_add_answer(["Garritt", "母親加入？"]);
	UI_remove_answer("友誼會");
labelFunc04B2_021A:
	case "母親加入？" attend labelFunc04B2_022D:
	message("「那些該死的友誼會的人知道每個人距離身無分文永遠只有一餐之遙。他們說要我們立刻加入，因為庇護所是為了幫助友誼會成員而設的。如果我們有一天需要住在那裡，他們可能會為了其他友誼會成員而把我們拒之門外。」");
	say();
	UI_remove_answer("母親加入？");
labelFunc04B2_022D:
	case "小偷" attend labelFunc04B2_0244:
	message("「Paws 有個逍遙法外的小偷！他從屠宰場老闆 Morfin 那裡偷了銀蛇毒液。沒有人知道他是誰。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
labelFunc04B2_0244:
	case "毒液" attend labelFunc04B2_025E:
	message("「我對被偷的毒液一無所知。我是被誣陷的！」");
	say();
	UI_remove_answer("毒液");
	UI_add_answer("被誣陷");
labelFunc04B2_025E:
	case "被誣陷" attend labelFunc04B2_0271:
	message("「沒錯！是 Garritt 幹的。我就是知道。那天我從田裡回來時他在我房間裡。他說他在找一顆球，但我不相信他。你信不信我，我不在乎。但如果你真的是聖者，你就會知道我說的是實話。」");
	say();
	UI_remove_answer("被誣陷");
labelFunc04B2_0271:
	case "Garritt" attend labelFunc04B2_02A5:
	if (!gflags[0x0218]) goto labelFunc04B2_028C;
	message("你告訴 Tobias 你是如何發現 Garritt 是小偷的。「謝謝你，");
	message(var0000);
	message("，謝謝你沒有相信我是有罪的。我不確定你是否真的是聖者，但你身上確實有聖者之道的影子。」");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_028C:
	if (!(!gflags[0x0213])) goto labelFunc04B2_029A;
	message("「他是鎮上唯一和我年紀相仿的男孩。他父母不想讓他和我玩，因為他們認為『和那種人交往』會『阻礙他的教育』之類的廢話。我受不了那個小混蛋。我討厭他吹那種臭排笛的樣子！」");
	say();
	goto labelFunc04B2_029E;
labelFunc04B2_029A:
	message("「那個被寵壞的臭小子 Garritt 一定是把毒液栽贓到我房間了！他通常都在閒逛，即使他父母反對他和我玩。我知道他不懷好意！你應該去搜他的房間！」");
	say();
labelFunc04B2_029E:
	UI_remove_answer("Garritt");
labelFunc04B2_02A5:
	case "告辭" attend labelFunc04B2_02B0:
	goto labelFunc04B2_02B3;
labelFunc04B2_02B0:
	goto labelFunc04B2_0085;
labelFunc04B2_02B3:
	endconv;
	if (!gflags[0x0218]) goto labelFunc04B2_02C1;
	message("「再見，聖者。祝你好運。」*");
	say();
	goto labelFunc04B2_02C5;
labelFunc04B2_02C1:
	message("「那就上路吧，偉大又充滿智慧的聖者。」*");
	say();
labelFunc04B2_02C5:
	if (!(event == 0x0000)) goto labelFunc04B2_02D3;
	Func092E(0xFF4E);
labelFunc04B2_02D3:
	return;
}


