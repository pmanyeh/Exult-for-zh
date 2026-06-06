#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08DB 0x8DB ();
extern void Func08DC 0x8DC ();
extern void Func0911 0x911 (var var0000);

void Func044A object#(0x44A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc044A_0009;
	abort;
labelFunc044A_0009:
	UI_show_npc_face(0xFFB6, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0065]) goto labelFunc044A_0036;
	UI_add_answer(["黑石", "月之門"]);
labelFunc044A_0036:
	if (!(!gflags[0x00E7])) goto labelFunc044A_0048;
	message("這位年邁的法師看起來比你上次見到他時還要衰老且更加健忘。");
	say();
	gflags[0x00E7] = true;
	goto labelFunc044A_005A;
labelFunc044A_0048:
	if (!(!gflags[0x0003])) goto labelFunc044A_0056;
	message("「你是誰？」 Rudyom 問道。「喔——我想起來了。」");
	say();
	goto labelFunc044A_005A;
labelFunc044A_0056:
	message("「又見面了，聖者！」 Rudyom 喜笑顏開地說。");
	say();
labelFunc044A_005A:
	converse attend labelFunc044A_01B6;
	case "姓名" attend labelFunc044A_0070:
	message("「這我知道。我的名字叫 Rudyom。」");
	say();
	UI_remove_answer("姓名");
labelFunc044A_0070:
	case "職業" attend labelFunc044A_00A1:
	if (!(!gflags[0x0003])) goto labelFunc044A_008D;
	message("「我也不確定了。我曾經是個強大的法師！現在什麼都不管用了。魔法出錯了！如果你需要的話，我想我可以賣你一些藥材和法術。還有，注意那張地毯——它壞掉了！」");
	say();
	UI_add_answer("魔毯");
	goto labelFunc044A_0091;
labelFunc044A_008D:
	message("「我是一位強大的法師！魔法是我的專長！我可以賣你法術或藥材。」");
	say();
labelFunc044A_0091:
	UI_add_answer(["魔法", "法術", "藥材"]);
labelFunc044A_00A1:
	case "魔法" attend labelFunc044A_00C2:
	if (!(!gflags[0x0003])) goto labelFunc044A_00B7;
	message("「我不明白哪裡出了問題。我的魔法不再那麼靈光了。」");
	say();
	goto labelFunc044A_00BB;
labelFunc044A_00B7:
	message("「以太正自由地流動！魔法再次與我們同在了！」");
	say();
labelFunc044A_00BB:
	UI_remove_answer("魔法");
labelFunc044A_00C2:
	case "魔毯" attend labelFunc044A_00DD:
	message("「那張藍色大地毯。那是一張飛行魔毯。它沒有發揮應有的功用。」");
	say();
	message("Rudyom 四處張望並抓了抓頭。");
	say();
	message("「真好笑。它剛剛還在這裡的。喔！我想起來了。幾週前一些冒險者借走了我的飛行魔毯。當他們回來時，他們說把地毯遺失在巨蛇脊背山脈附近。在失落之河周圍的某個地方。我想如果你想去找它，你可以留著。反正它運作得不是很好。也許你能讓它動起來。不管怎樣，我本來就不喜歡那個顏色！」");
	say();
	UI_remove_answer("魔毯");
labelFunc044A_00DD:
	case "法術" attend labelFunc044A_00FF:
	message("「你想買些法術嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc044A_00FB;
	Func08DB();
	goto labelFunc044A_00FF;
labelFunc044A_00FB:
	message("「喔。那就算了。」");
	say();
labelFunc044A_00FF:
	case "藥材" attend labelFunc044A_0121:
	message("「你想買些藥材嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc044A_011D;
	Func08DC();
	goto labelFunc044A_0121;
labelFunc044A_011D:
	message("「喔。那就算了。」");
	say();
labelFunc044A_0121:
	case "黑石" attend labelFunc044A_013B:
	message("「別跟我提那個骯髒礦物的名字！它讓我感到非常挫折！在我喪失記憶之前，我正用那種地獄般的材料進行實驗。但現在我怎麼也想不起我當時想做什麼了。」");
	say();
	UI_add_answer("實驗");
	UI_remove_answer("黑石");
labelFunc044A_013B:
	case "月之門" attend labelFunc044A_015C:
	if (!(!gflags[0x0004])) goto labelFunc044A_0151;
	message("「它們很煩人，不是嗎？我確實相信黑石是解決問題的方法。我希望我沒有失憶，這樣我就可以繼續我的工作了……」");
	say();
	goto labelFunc044A_0155;
labelFunc044A_0151:
	message("「我明白它們永遠消失了。別怪你自己，聖者。這場災難只會為實驗與發現的新時代鋪平道路。我希望如此。」");
	say();
labelFunc044A_0155:
	UI_remove_answer("月之門");
labelFunc044A_015C:
	case "實驗" attend labelFunc044A_017C:
	message("「我都把它們寫在我的筆記本裡了，就在這附近的某處。歡迎你隨便看。但遠離那個該死的轉換器——那很危險！」");
	say();
	UI_add_answer(["轉換器", "筆記本"]);
	UI_remove_answer("實驗");
labelFunc044A_017C:
	case "筆記本" attend labelFunc044A_018F:
	message("「我用它來記錄我對黑石和黑石轉換器的實驗。」");
	say();
	UI_remove_answer("筆記本");
labelFunc044A_018F:
	case "轉換器" attend labelFunc044A_01A8:
	message("「就是那個像法杖的東西。它本應該能磁化並神奇地轉換黑石，但它無法正常運作。試著把它指向一塊黑石，你就會明白我的意思。但別站得太近！如果你想要一件垃圾，歡迎你拿走！」");
	say();
	Func0911(0x0032);
	UI_remove_answer("轉換器");
labelFunc044A_01A8:
	case "告辭" attend labelFunc044A_01B3:
	goto labelFunc044A_01B6;
labelFunc044A_01B3:
	goto labelFunc044A_005A;
labelFunc044A_01B6:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc044A_01C5;
	message("「這麼快就走？哎呀。希望你回來時我還能認得你。」*");
	say();
	goto labelFunc044A_01C9;
labelFunc044A_01C5:
	message("「再見，聖者。」*");
	say();
labelFunc044A_01C9:
	return;
}


