#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04F0 object#(0x4F0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04F0_02F7;
	UI_show_npc_face(0xFF10, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF24);
	var0002 = Func08F7(0xFF66);
	var0003 = false;
	var0004 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02E1]) goto labelFunc04F0_0056;
	message("「我感謝你，");
	message(var0000);
	message("。你真是有著崇高的榮譽感！我希望有一天能報答你的恩情！」*");
	say();
	abort;
	goto labelFunc04F0_006A;
labelFunc04F0_0056:
	var0005 = UI_get_npc_object(0xFF10);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04F0_006A:
	if (!(!gflags[0x02C3])) goto labelFunc04F0_007C;
	message("一個表情陰沉的男人向你打招呼。");
	say();
	gflags[0x02C3] = true;
	goto labelFunc04F0_0080;
labelFunc04F0_007C:
	message("「哼，」Anton 說。");
	say();
labelFunc04F0_0080:
	converse attend labelFunc04F0_02EC;
	case "姓名" attend labelFunc04F0_00D2:
	message("「我，」他抓著鼻子說，「是 Anton，雖然你不會關心我。除非，當然了，你正要把我關進頸手枷。」");
	say();
	if (!var0001) goto labelFunc04F0_00BE;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「放尊重點，Anton。我相信 ");
	message(var0000);
	message(" 是真的對你的名字感興趣。」");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_00BE:
	UI_remove_answer("姓名");
	UI_add_answer(["關心", "頸手枷"]);
labelFunc04F0_00D2:
	case "職業" attend labelFunc04F0_01C3:
	message("「那是什麼該死的愚蠢問題？我在監獄裡！我能有什麼該死的工作？」");
	say();
	if (!var0002) goto labelFunc04F0_00FD;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("「是啊，愚蠢的問題。」");
	say();
	UI_remove_npc_face(0xFF66);
labelFunc04F0_00FD:
	if (!var0001) goto labelFunc04F0_01B9;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「放輕鬆，Anton。我相信你很快又會有工作的。」他轉向你。~~「他拜在賢者 Alagner 門下為徒，賢者吩咐他查明關於友誼會的情報……」");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「安靜，蠢貨！現在他們肯定會殺了我！」他絕望地看著你。*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「你已經忘了嗎，親愛的 Anton？你早些時候就已經把情報洩露給他們了。」*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("「我有嗎？」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("他點點頭。*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	UI_remove_npc_face(0xFF24);
	if (!var0002) goto labelFunc04F0_0187;
	message("Anton 轉向食人妖。~~「我有嗎？」*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("食人妖點點頭。*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_0187:
	message("「喔，好吧。繼續！」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「就像我剛才說的，他的導師派他來觀察友誼會。當然，他被發現並被帶到這裡受刑。」他轉回 Anton。~~「不過別怕，Anton。不用多久你就會重獲自由，能夠回到你的導師 Alagner 身邊，繼續你的學業，」他微笑著說。*");
	say();
	UI_remove_npc_face(0xFF24);
	var0004 = true;
	UI_add_answer("Alagner");
	if (!(!var0003)) goto labelFunc04F0_01B9;
	UI_add_answer("友誼會");
labelFunc04F0_01B9:
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_01C3:
	case "頸手枷" attend labelFunc04F0_0206:
	if (!var0004) goto labelFunc04F0_01E5;
	message("「是的，下次他們很可能會把我關在裡面直到我爛掉。或者，至少直到我被食人妖鞭打致死。」");
	say();
	UI_add_answer(["他們", "鞭打"]);
	goto labelFunc04F0_01FF;
labelFunc04F0_01E5:
	message("「我因為被控從事間諜活動而被關在這裡，");
	message(var0000);
	message("。這是個錯誤的指控，但他們很可能還是會殺了我……」");
	say();
	UI_add_answer(["間諜活動", "錯誤", "他們"]);
labelFunc04F0_01FF:
	UI_remove_answer("頸手枷");
labelFunc04F0_0206:
	case "關心" attend labelFunc04F0_0219:
	message("「嗯，真的很少人會這樣。」");
	say();
	UI_remove_answer("關心");
labelFunc04F0_0219:
	case "錯誤" attend labelFunc04F0_022C:
	message("「嗯，我絕對沒有犯下這樣的罪行！」");
	say();
	UI_remove_answer("錯誤");
labelFunc04F0_022C:
	case "間諜活動" attend labelFunc04F0_023F:
	message("「想到我會為了除了用知識充實自己以外的任何理由去尋找情報，這簡直荒謬至極！這……這……這根本就是荒唐！」");
	say();
	UI_remove_answer("間諜活動");
labelFunc04F0_023F:
	case "他們" attend labelFunc04F0_0266:
	message("「哎呀，就是友誼會，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("他們");
	if (!(!var0003)) goto labelFunc04F0_0266;
	UI_add_answer("友誼會");
labelFunc04F0_0266:
	case "鞭打" attend labelFunc04F0_02A2:
	message("「食人妖每天都要打我好幾次。我撐不了多久了。」");
	say();
	if (!var0001) goto labelFunc04F0_029B;
	message("*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「來吧，來吧，Anton，肯定沒那麼糟。畢竟，友誼會為我們提供了一個住處，還有比我們能……更多的食物……呃，他們還給我們食物！」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
labelFunc04F0_029B:
	UI_remove_answer("鞭打");
labelFunc04F0_02A2:
	case "Alagner" attend labelFunc04F0_02B5:
	message("「他是一位居住在 New Magincia 的賢者。或許是全不列顛尼亞最博學的人！而現在，」他嘆了口氣，「我將不再有機會從他浩瀚的智慧寶庫中汲取知識了。」");
	say();
	UI_remove_answer("Alagner");
labelFunc04F0_02B5:
	case "友誼會" attend labelFunc04F0_02DE:
	message("「哎呀，他們是一群很棒的人，不斷致力於為不列顛尼亞的人民帶來健康、幸福和靈性。」");
	say();
	var0006 = UI_wearing_fellowship();
	if (!(!var0006)) goto labelFunc04F0_02D3;
	message("他用食指示意你靠近，並壓低了聲音。~~「才怪！我一有機會就會離開這個邪惡的巢穴。我建議你也這麼做！」");
	say();
labelFunc04F0_02D3:
	var0003 = true;
	UI_remove_answer("友誼會");
labelFunc04F0_02DE:
	case "告辭" attend labelFunc04F0_02E9:
	goto labelFunc04F0_02EC;
labelFunc04F0_02E9:
	goto labelFunc04F0_0080;
labelFunc04F0_02EC:
	endconv;
	message("「別太匆忙，");
	message(var0000);
	message("，因為我們所知的世界很快就會不復存在了。」*");
	say();
labelFunc04F0_02F7:
	if (!(event == 0x0000)) goto labelFunc04F0_0300;
	abort;
labelFunc04F0_0300:
	return;
}


