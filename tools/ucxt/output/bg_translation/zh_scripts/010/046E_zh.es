#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0632 object#(0x632) ();

void Func046E object#(0x46E) ()
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

	if (!(event == 0x0000)) goto labelFunc046E_0009;
	abort;
labelFunc046E_0009:
	UI_show_npc_face(0xFF92, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02CA]) goto labelFunc046E_0030;
	UI_add_answer("Wayne 兄弟");
labelFunc046E_0030:
	if (!(!gflags[0x02CE])) goto labelFunc046E_0054;
	if (!(!gflags[0x0003])) goto labelFunc046E_0049;
	message("你看到一個眼神狂野的法師。");
	say();
	gflags[0x02CE] = true;
	goto labelFunc046E_0051;
labelFunc046E_0049:
	message("你看到一個眼神平靜的法師。");
	say();
	gflags[0x02CE] = true;
labelFunc046E_0051:
	goto labelFunc046E_0058;
labelFunc046E_0054:
	message("「你在跟我說話？」 Garok 懷疑地問。");
	say();
labelFunc046E_0058:
	converse attend labelFunc046E_02EE;
	case "姓名" attend labelFunc046E_009B:
	message("法師盯著你看了一會兒。「你是不列顛尼亞稅務委員會 (Tax Council) 的人嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc046E_007B;
	message("「那我就不是任何人！」*");
	say();
	abort;
	goto labelFunc046E_008D;
labelFunc046E_007B:
	if (!(!gflags[0x0003])) goto labelFunc046E_0089;
	message("「算你好運。不然我就得殺了你。我是 Garok Al-Mat 。至少，我上次照鏡子時是這麼覺得的！」");
	say();
	goto labelFunc046E_008D;
labelFunc046E_0089:
	message("「我已經喜歡上你了！我是 Garok Al-Mat 。」");
	say();
labelFunc046E_008D:
	UI_remove_answer("姓名");
	UI_add_answer("稅務委員會");
labelFunc046E_009B:
	case "職業" attend labelFunc046E_00CF:
	if (!(!gflags[0x0003])) goto labelFunc046E_00BE;
	message("Garok 看起來好像會突然扯下自己的頭髮，但他克制住了。~~「我是……『曾經』是……一個法師。直到一切都出了差錯。我正在試圖糾正這些事。」");
	say();
	UI_add_answer(["法師", "糾正"]);
	goto labelFunc046E_00CF;
labelFunc046E_00BE:
	message("「我一直都是一個法師。我來到這裡試圖找出以太波到底出了什麼問題，但現在它們似乎已經恢復正常了。」");
	say();
	UI_add_answer(["法師", "以太波"]);
labelFunc046E_00CF:
	case "法師" attend labelFunc046E_0104:
	if (!(!gflags[0x0003])) goto labelFunc046E_00F2;
	message("Garok 突然打了自己的頭側。~~「出去！該死的你！從那裡出來！沒人邀請你進我的腦袋！滾開！」~~ Garok 又打了自己一下，像隻溼透的狗一樣搖著頭，並用嘴唇發出噗噗的聲音。~~ Garok 看著你並微笑了。「好多了。現在，我們說到哪裡了……喔對了，我想起來了。你不相信我是個法師？嗯，我是。我住在山裡。但現在我迷失在這個該死的地城裡了。」");
	say();
	UI_add_answer(["你的腦袋", "迷路"]);
	goto labelFunc046E_00FD;
labelFunc046E_00F2:
	message("「我通常住在山裡，但我迷失在這個地城裡了。」");
	say();
	UI_add_answer("迷路");
labelFunc046E_00FD:
	UI_remove_answer("法師");
labelFunc046E_0104:
	case "糾正", "以太波" attend labelFunc046E_0132:
	if (!(!gflags[0x0003])) goto labelFunc046E_011D;
	message("「我的魔法失靈了！");
	say();
	goto labelFunc046E_0121;
labelFunc046E_011D:
	message("「我的魔法失靈了！");
	say();
labelFunc046E_0121:
	message("「我把它歸咎於以太波的干擾！我必須查明發生了什麼事。所以我來到這裡！」");
	say();
	UI_remove_answer(["糾正", "以太波"]);
labelFunc046E_0132:
	case "你的腦袋" attend labelFunc046E_014C:
	message("「我腦海裡有一個聲音。某種惡魔之類的。它總是祝賀我做了某些事。然後其他時候又因為某些事罵我。我『知道』那不是我的良心。我『知道』『他』聽起來像什麼！這是……另一個人。」");
	say();
	UI_remove_answer("你的腦袋");
	UI_add_answer("聲音");
labelFunc046E_014C:
	case "聲音" attend labelFunc046E_015F:
	message("「大約在我的魔法開始失效時，我開始聽到這個聲音。我覺得這不好玩。」");
	say();
	UI_remove_answer("聲音");
labelFunc046E_015F:
	case "迷路" attend labelFunc046E_0194:
	if (!(!gflags[0x0003])) goto labelFunc046E_0175;
	message("「我的水晶球告訴我，問題的根源在一個地城裡，但沒說是哪一個。這是我探索的第一個地城。我還沒找到任何可以幫助我的東西，而且我找不到出路了！」");
	say();
	goto labelFunc046E_0179;
labelFunc046E_0175:
	message("「我下來這裡是為了尋找我問題的根源。我的水晶球告訴我它在一個地城裡，但沒說是哪一個。這是我第一次探險地城，現在我迷路了。」");
	say();
labelFunc046E_0179:
	UI_remove_answer("迷路");
	if (!gflags[0x0000]) goto labelFunc046E_018D;
	UI_add_answer("錯的地城");
labelFunc046E_018D:
	UI_add_answer("出路");
labelFunc046E_0194:
	case "錯的地城" attend labelFunc046E_01A7:
	message("你向 Garok 解釋四面體產生器位於 Deceit 地城。~~「嗯。方向正確。但走錯了地城。」");
	say();
	UI_remove_answer("錯的地城");
labelFunc046E_01A7:
	case "出路" attend labelFunc046E_02BA:
	message("「你知道出路嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc046E_02AF;
	message("你告訴 Garok 如何離開地城。~~「哎呀，聽起來真簡單！我一定是腦袋不清楚了！~~我感謝你！現在我必須上路了。事實上，既然我知道了路，我就可以用我所剩無幾的魔法來傳送。如果想傳送，必須知道自己要前進的方向！~~對了，為了感謝你的幫助，你想要一些沒用的秘藥嗎？我說的沒用，是指對我來說沒用。它們很可能是非常好的秘藥。歡迎你拿走。你想要嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046E_029F;
	var0003 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0000, false);
	var0004 = UI_add_party_items(0x0004, 0x034A, 0xFE99, 0x0001, false);
	var0005 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0004, false);
	var0006 = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0005, false);
	var0007 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0003, false);
	var0008 = UI_add_party_items(0x0007, 0x034A, 0xFE99, 0x0002, false);
	var0009 = UI_add_party_items(0x0006, 0x034A, 0xFE99, 0x0006, false);
	var000A = UI_add_party_items(0x0008, 0x034A, 0xFE99, 0x0007, false);
	if (!(var0003 && (var0004 && (var0005 && (var0006 && (var0007 && (var0008 && (var0009 && var000A)))))))) goto labelFunc046E_0298;
	message("「很好。我少帶一樣東西了。」");
	say();
	goto labelFunc046E_029C;
labelFunc046E_0298:
	message("「喔。你沒有空間。太可惜了。」");
	say();
labelFunc046E_029C:
	goto labelFunc046E_02A3;
labelFunc046E_029F:
	message("Garok 聳聳肩。「隨你便。無論如何還是謝謝你。」");
	say();
labelFunc046E_02A3:
	message("你看著 Garok 轉身，念了個法術，然後消失了。*");
	say();
	item->Func0632();
	abort;
	goto labelFunc046E_02B3;
labelFunc046E_02AF:
	message("「喔。你跟我一樣迷路了，是吧？那我們肯定會死在這裡。」");
	say();
labelFunc046E_02B3:
	UI_remove_answer("出路");
labelFunc046E_02BA:
	case "稅務委員會" attend labelFunc046E_02CD:
	message("「哼！他們是我的眼中釘！過去三年他們一直在找我！我忘了申報一筆分配秘藥的收入，不知怎麼被他們發現了。順帶一提，如果你有興趣來山裡找我，我可以打折賣給你秘藥！」");
	say();
	UI_remove_answer("稅務委員會");
labelFunc046E_02CD:
	case "Wayne 兄弟" attend labelFunc046E_02E0:
	message("「是的，我記得他！他也迷路了！你知道他找到出路了嗎？你跟他說話時代我向他問好。」");
	say();
	UI_remove_answer("Wayne 兄弟");
labelFunc046E_02E0:
	case "告辭" attend labelFunc046E_02EB:
	goto labelFunc046E_02EE;
labelFunc046E_02EB:
	goto labelFunc046E_0058;
labelFunc046E_02EE:
	endconv;
	message("「再見。」*");
	say();
	return;
}


