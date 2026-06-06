#game "blackgate"
// externs
extern void Func087D 0x87D ();
extern var Func0881 0x881 ();

void Func0696 object#(0x696) ()
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

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_get_object_position(item);
	UI_set_schedule_type(item, 0x000F);
	if (!gflags[0x0003]) goto labelFunc0696_00D8;
	if (!(!gflags[0x032B])) goto labelFunc0696_0095;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F8, 0xFE99))) goto labelFunc0696_005F;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_005F:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 對你的問題感到惱火，「對於一個敏銳到能感覺出墨水在書頁上所形成凸起的人來說，這並不是什麼障礙。");
	say();
	message("你以為我是個殘廢嗎？你要知道，在我的探索中，我所面臨的危險，甚至能讓像你這樣的人嚇得渾身發抖。」");
	say();
	message("這位法師的眼睛開始閃爍著柔和的光芒。「我的魔法強大到足以撕裂現實的結構，並按照我的意願重建它。");
	say();
	message("為了證明這一點，我將化身為一只有翅膀的石像鬼貴族……」");
	say();
	message("他的雙手在半空中揮舞出你認得的魔法手勢，然後他輕聲唸出魔法咒語：");
	say();
	message("「Rel An-Quas Ailem In Garge」。*");
	say();
	var0000 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0095:
	if (!(!gflags[0x032C])) goto labelFunc0696_00B8;
	UI_show_npc_face(0xFEE2, 0x0003);
	message("「即使是巨大巨龍的形態，也沒有超出我的能力範圍。」Erethian 開始輕聲說話，然後聲音越來越大：");
	say();
	message("「Rel An-Quas Ailem In BAL-ZEN」！*");
	say();
	var0001 = true;
	goto labelFunc0696_01A8;
	goto labelFunc0696_00D5;
labelFunc0696_00B8:
	UI_show_npc_face(0xFEE2, 0x0002);
	message("巨龍威脅性地低下口鼻，看著你猜測應該是你所在的位置。即使在這種強大的形態下，Erethian 似乎仍然是盲目的，然而，你有一種印象，他非常有能力照顧自己。");
	say();
	message("「夠了，這些愚蠢的把戲，我的研究真的很忙。」他吟唱著咒語：");
	say();
	message("「An Ort Rel」！*");
	say();
	var0005 = true;
	goto labelFunc0696_01A8;
labelFunc0696_00D5:
	goto labelFunc0696_01A8;
labelFunc0696_00D8:
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032B])) goto labelFunc0696_013F;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F4, 0x0000))) goto labelFunc0696_0113;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_0113:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	message("Erethian 對你的問題感到惱火，「對於一個敏銳到能感覺出墨水在書頁上所形成凸起的人來說，這並不是什麼障礙。");
	say();
	message("你以為我是個殘廢嗎？你要知道，在我的探索中，我所面臨的危險，甚至能讓像你這樣的人嚇得渾身發抖。」");
	say();
	message("這位法師的眼睛開始閃爍著柔和的光芒。「我的魔法強大到足以撕裂現實的結構，並按照我的意願重建它。」");
	say();
	message("為了證明這一點，我將化身為一只有翅膀的石像鬼貴族……」");
	say();
	message("他的雙手在半空中揮舞出你認得的魔法手勢，然後他輕聲唸出魔法咒語：");
	say();
	message("「Rel An-Quas Ailem In Bet-Zen」。*");
	say();
	var0002 = true;
	goto labelFunc0696_01A8;
labelFunc0696_013F:
	if (!(!gflags[0x032C])) goto labelFunc0696_0159;
	message("這位年邁的法師在經歷了變成囓齒動物的經驗後，顯得有些困惑。「那個法術以前總是很有效，但是有了這些該死的以太波，我記不起正確的咒語了？");
	say();
	message("沒關係，我將化身為一條巨龍來證明我的力量……」他開始輕聲說話，然後聲音越來越大：");
	say();
	message("「Rel An-Quas Ailem In MOO」！*");
	say();
	var0003 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0159:
	message("這位年邁的法師看起來相當尷尬，「夠了，這些愚蠢的把戲，我的研究真的很忙。」他轉過身去，臉漲得通紅。*");
	say();
	UI_set_schedule_type(item, 0x001D);
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var0008 = Func0881();
	var0009 = UI_delayed_execute_usecode_array(var0008, [(byte)0x2C, (byte)0x2D], 0x000E);
	var000A = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000C, (byte)0x55, 0x069D]);
labelFunc0696_01A8:
	if (!var0000) goto labelFunc0696_01EB;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x61, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_01EB:
	if (!var0001) goto labelFunc0696_0224;
	var0000 = UI_find_nearest(item, 0x0112, 0x0001);
	var000C = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x0697]);
labelFunc0696_0224:
	if (!var0002) goto labelFunc0696_0260;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_0260:
	if (!var0003) goto labelFunc0696_02A3;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02A3:
	if (!var0005) goto labelFunc0696_02F1;
	var0001 = UI_find_nearest(item, 0x01F8, 0x0001);
	var000D = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0003, (byte)0x68, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02F1:
	if (!var0004) goto labelFunc0696_0322;
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032A])) goto labelFunc0696_030F;
	message("這位老法師似乎想說些什麼，停了下來，然後說：「如果這裡的空間沒有那麼狹小，我就會讓你看看我的失明絲毫沒有妨礙我的能力。」他的缺陷似乎是這位法師的一個敏感話題。*");
	say();
	goto labelFunc0696_0313;
labelFunc0696_030F:
	message("「除了打擾一個老人，你沒有更好的事可做嗎？！」他似乎對這種對話感到相當不滿。*");
	say();
labelFunc0696_0313:
	UI_set_schedule_type(var0005, 0x001D);
	gflags[0x032A] = true;
	return;
labelFunc0696_0322:
	return;
}


