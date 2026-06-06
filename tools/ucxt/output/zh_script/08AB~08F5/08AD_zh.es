#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08AE 0x8AE (var var0000);
extern void Func08AF 0x8AF ();

void Func08AD 0x8AD ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0909();
	var0001 = Func0908();
	if (!(!gflags[0x01AD])) goto labelFunc08AD_0039;
	gflags[0x01AD] = true;
	message("「感謝你，");
	message(var0000);
	message("。那個黑暗靈魂壓抑我的意志太久了，以至於我不確定自己是否還擁有意志。你為 Skara Brae、為我，甚至為整個 Britannia 做了一件偉大的事，不過我想對你這樣的人來說，這只是理所當然。我對你充滿感激。」他深深地向你鞠躬。");
	say();
	if (!(!gflags[0x0003])) goto labelFunc08AD_0036;
	message("「但現在，我擔心世界還沒有完全恢復正常。這座黑暗高塔之外的以太正混亂地攪動著。如果不是因為牆內有某些特性，我恐怕我的心智會受到這股力量的摧殘。」");
	say();
labelFunc08AD_0036:
	goto labelFunc08AD_005E;
labelFunc08AD_0039:
	if (!gflags[0x01D1]) goto labelFunc08AD_0048;
	var0002 = "你重新考慮過我的請求了嗎？";
	goto labelFunc08AD_004E;
labelFunc08AD_0048:
	var0002 = "";
labelFunc08AD_004E:
	message("「很高興再次見到你，");
	message(var0001);
	message("。");
	message(var0002);
	message("」");
	say();
labelFunc08AD_005E:
	if (!gflags[0x01D1]) goto labelFunc08AD_0070;
	var0003 = "啊，我明白了。沒關係";
	Func08AE(var0003);
labelFunc08AD_0070:
	if (!(!gflags[0x01AC])) goto labelFunc08AD_0098;
	if (!(!gflags[0x01D1])) goto labelFunc08AD_0098;
	message("「現在，");
	message(var0000);
	message("。我必須請求你幫這個忙。這座塔底下的靈魂之井(Well of Souls)困住了許多受折磨的靈魂，並將 Skara Brae 的精靈束縛在這座島上。它必須被摧毀。」Horance 專注地看著你。~「我只能希望你會試著釋放他們。」");
	say();
	message("「那麼，你願意嗎？」他滿懷期待地看著你。");
	say();
	var0003 = "我明白了。別擔心";
	Func08AE(var0003);
labelFunc08AD_0098:
	if (!(!gflags[0x01AE])) goto labelFunc08AD_00AA;
	message("Horance 思考了片刻，然後說：「當井被摧毀時，裡面的靈魂將會被釋放，在以太中漫無目的地飄浮一段時間。我嚴重虧欠 Rowena 女士和她的丈夫，我想彌補這個錯誤。請帶她離開這個黑暗的地方，並確保她能與 Trent 重聚。這樣當他們被釋放時，他們就能在一起。當你完成這個任務時，我會知道，然後我們就可以繼續摧毀這口井。」");
	say();
	gflags[0x01AE] = true;
	goto labelFunc08AD_00D2;
labelFunc08AD_00AA:
	if (!(!gflags[0x01A6])) goto labelFunc08AD_00BE;
	message("「但請，");
	message(var0000);
	message("，我懇求你快點。帶 Rowena 去找 Trent！時間緊迫！跟她談談，並帶她去見她丈夫！井裡的靈魂不斷地在受苦，有些靈魂變得如此枯竭，以至於像蠟燭的火焰一樣熄滅，從存在中消失。」他看起來彷彿自己也感受到了那種痛苦。");
	say();
	goto labelFunc08AD_00D2;
labelFunc08AD_00BE:
	if (!gflags[0x0198]) goto labelFunc08AD_00CA;
	Func08AF();
	goto labelFunc08AD_00D2;
labelFunc08AD_00CA:
	message("「很好，現在我們可以繼續解放 Skara Brae 的其餘部分。靈魂之井(Well of Souls)的摧毀只能透過一個精靈的無私犧牲來達成。活著的生物是不行的，因為靈魂與身體是相連的。~~去鎮上找一個願意為了整個 Skara Brae 的利益而做出犧牲的精靈。我建議你先去問鎮長 Mayor Forsythe，因為在其他人之前，他有優先被考慮的權利。」當你離開時，他沉思地撫摸著下巴。");
	say();
	gflags[0x0198] = true;
labelFunc08AD_00D2:
	abort;
	return;
}