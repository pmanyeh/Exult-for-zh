#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func087A 0x87A ();

void Func04CE object#(0x4CE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04CE_01BA;
	UI_show_npc_face(0xFF32, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x028B])) goto labelFunc04CE_0048;
	message("一個非常整潔、修飾整齊、和藹可親的男人站在你面前。");
	say();
	gflags[0x028B] = true;
	goto labelFunc04CE_0052;
labelFunc04CE_0048:
	message("「你好，");
	message(var0000);
	message("。我能怎麼幫助你？」");
	say();
labelFunc04CE_0052:
	converse attend labelFunc04CE_01AF;
	case "姓名" attend labelFunc04CE_006E:
	message("他對你微笑。「啊，太好了。你不害怕問問題。記住，沒有愚蠢的問題，只有笨問題。我的名字是 Eldroth ，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04CE_006E:
	case "職業" attend labelFunc04CE_008D:
	message("「我的朋友，我是物資商人。而且，恕我直言，我也是 Vesper 的顧問。或許有一天我能給你一些建議，");
	message(var0000);
	message("。請記住，那些殺不死我們的，會讓我們受傷。」");
	say();
	UI_add_answer(["Vesper", "購買"]);
labelFunc04CE_008D:
	case "Vesper" attend labelFunc04CE_00B3:
	message("「是的，");
	message(var0000);
	message("，這個鎮上充滿了我曾給予建議的出色人們。」");
	say();
	UI_add_answer(["人們", "建議"]);
	UI_remove_answer("Vesper");
labelFunc04CE_00B3:
	case "建議" attend labelFunc04CE_00C6:
	message("「早睡早起，讓傑克變成一個無聊的男孩。」");
	say();
	UI_remove_answer("建議");
labelFunc04CE_00C6:
	case "購買" attend labelFunc04CE_00F3:
	UI_remove_answer("購買");
	if (!(var0001 == 0x0007)) goto labelFunc04CE_00E9;
	message("「你想買點東西。很好。但記住，省下一枚金幣就是不花一枚金幣。」");
	say();
	Func087A();
	goto labelFunc04CE_00F3;
labelFunc04CE_00E9:
	message("「也許你可以等到我店鋪營業的時候，");
	message(var0000);
	message("。」");
	say();
labelFunc04CE_00F3:
	case "人們" attend labelFunc04CE_0123:
	message("「你想知道誰的事？Auston？石像鬼們？Liana？Cador？或許是 Yongi？」");
	say();
	UI_push_answers();
	UI_add_answer(["Auston", "石像鬼", "Liana", "Yongi", "Cador", "先這樣吧"]);
	UI_remove_answer("人們");
labelFunc04CE_0123:
	case "Liana" attend labelFunc04CE_0136:
	message("「Liana 是位非常好的年輕女子，在市政廳擔任書記員。」");
	say();
	UI_remove_answer("Liana");
labelFunc04CE_0136:
	case "Yongi" attend labelFunc04CE_0149:
	message("「他是 Glided Gizzard 的酒保。」他停了下來，搖搖頭，然後糾正自己。「我是說 Lilded Lizard ，」他皺著眉頭。「不，是鍍金蜥蜴 (Gilded Lizard) 。對，就是那個！」");
	say();
	UI_remove_answer("Yongi");
labelFunc04CE_0149:
	case "Cador" attend labelFunc04CE_015C:
	message("「Cador 監督礦區。他和他的妻子 Yvella 有個可愛的女兒叫 Catherine 。」");
	say();
	UI_remove_answer("Cador");
labelFunc04CE_015C:
	case "Auston" attend labelFunc04CE_0175:
	message("「鎮長？我以為你現在應該已經見過他了，");
	message(var0000);
	message("。他做得非常好。你可能沒有意識到，」他紅著臉說，「但當初是我建議他去競選這個職位的。」");
	say();
	UI_remove_answer("Auston");
labelFunc04CE_0175:
	case "石像鬼" attend labelFunc04CE_018E:
	message("「我擔心他們會發動暴動。我知道 Auston 也有同樣的想法，因為最近他找我尋求準備這種事件的指導。我會像警告他一樣警告你。永遠記住，");
	message(var0000);
	message("，最好的防禦就是好的防禦！」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04CE_018E:
	case "先這樣吧" attend labelFunc04CE_01A1:
	UI_pop_answers();
	UI_remove_answer("人們");
labelFunc04CE_01A1:
	case "告辭" attend labelFunc04CE_01AC:
	goto labelFunc04CE_01AF;
labelFunc04CE_01AC:
	goto labelFunc04CE_0052;
labelFunc04CE_01AF:
	endconv;
	message("「再會，");
	message(var0000);
	message("。永遠別忘了，下雨時草總是比較綠。」");
	say();
labelFunc04CE_01BA:
	if (!(event == 0x0000)) goto labelFunc04CE_0252;
	var0002 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 >= 0x0002) || (var0002 <= 0x0006))) goto labelFunc04CE_0252;
	if (!((var0001 == 0x0007) || (var0001 == 0x0005))) goto labelFunc04CE_0248;
	if (!(var0003 == 0x0001)) goto labelFunc04CE_0218;
	var0004 = "@及時縫補省九針。@";
labelFunc04CE_0218:
	if (!(var0003 == 0x0002)) goto labelFunc04CE_0228;
	var0004 = "@別打倒地的人。@";
labelFunc04CE_0228:
	if (!(var0003 == 0x0003)) goto labelFunc04CE_0238;
	var0004 = "@早起的鳥兒有蟲吃。@";
labelFunc04CE_0238:
	if (!(var0003 == 0x0004)) goto labelFunc04CE_0248;
	var0004 = "@一鳥在手勝過雙鳥在林。@";
labelFunc04CE_0248:
	UI_item_say(0xFF32, var0004);
labelFunc04CE_0252:
	return;
}


