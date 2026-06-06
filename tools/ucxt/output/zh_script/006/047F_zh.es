#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047F object#(0x47F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc047F_019A;
	UI_show_npc_face(0xFF81, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF81);
	var0003 = UI_get_npc_object(0xFF82);
	var0004 = UI_get_npc_object(0xFF83);
	if (!(!gflags[0x0179])) goto labelFunc047F_004F;
	message("你看到一位非常嚴肅的年輕人。他的舉止像個有學問且有教養的紳士。");
	say();
	gflags[0x0179] = true;
	goto labelFunc047F_0053;
labelFunc047F_004F:
	message("「你想和我說話嗎？」Timmons 問道。");
	say();
labelFunc047F_0053:
	if (!gflags[0x0168]) goto labelFunc047F_0068;
	if (!(!gflags[0x0164])) goto labelFunc047F_0065;
	message("「我看到你拿著榮譽旗幟。作為這件事一個稍感興趣的第三方，我要求你把旗幟還給 Syria。請這麼做。」*");
	say();
	abort;
labelFunc047F_0065:
	goto labelFunc047F_00D9;
labelFunc047F_0068:
	if (!gflags[0x0170]) goto labelFunc047F_00D9;
	if (!(var0001 == 0x0004)) goto labelFunc047F_00CC;
	message("「好吧，");
	message(var0000);
	message("，我必須向 De Snel 證明自己。如果你是受苦的人，我會道歉，但我絕不退縮！」");
	say();
	message("「準備受死吧！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047F_00D9;
labelFunc047F_00CC:
	message("「好吧，");
	message(var0000);
	message("，我必須向 De Snel 證明自己。如果你是受苦的人，那也只能這樣了！明天中午在決鬥區見！」*");
	say();
	goto labelFunc047F_00D9;
labelFunc047F_00D9:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc047F_00E9:
	converse attend labelFunc047F_018F;
	case "姓名" attend labelFunc047F_0105:
	message("「我的名字是 Timmons，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc047F_0105:
	case "職業" attend labelFunc047F_011E:
	message("「目前我沒有工作。我把那些都留在新馬金西亞了。我來 Jhelom 是為了在傷痕圖書館跟隨 De Snel 大師學習。」");
	say();
	UI_add_answer(["Jhelom", "傷痕圖書館"]);
labelFunc047F_011E:
	case "Jhelom" attend labelFunc047F_0138:
	message("「恐怕我幫不了你什麼忙。除了決鬥之外，我對這個城鎮所知甚少。我自己也是剛到這裡。也許你應該去問別人。」");
	say();
	UI_add_answer("決鬥");
	UI_remove_answer("Jhelom");
labelFunc047F_0138:
	case "決鬥" attend labelFunc047F_0160:
	if (!(!gflags[0x0164])) goto labelFunc047F_0155;
	message("「我聽說過這個叫 Sprellic 的人，他聲稱自己是比傷痕圖書館裡任何人都偉大的戰士，以及他是如何從他們牆上偷走榮譽旗幟的。所以我找上了這個人，並親自向他挑戰決鬥。」");
	say();
	UI_add_answer("傷痕圖書館");
	goto labelFunc047F_0159;
labelFunc047F_0155:
	message("「不幸的是，在我有機會讓 De Snel 大師留下深刻印象之前，與 Sprellic 的決鬥就被取消了。」");
	say();
labelFunc047F_0159:
	UI_remove_answer("決鬥");
labelFunc047F_0160:
	case "傷痕圖書館" attend labelFunc047F_0181:
	if (!(!gflags[0x0164])) goto labelFunc047F_0176;
	message("「新馬金西亞港口一艘船上的水手第一次告訴我關於傷痕圖書館的事，說它是全不列顛尼亞最偉大的戰鬥公會，以及它的訓練師 De Snel 大師如何創造了完美的戰鬥風格。我立刻花光身上所有的錢來到這裡。但 De Snel 現在拒絕收我為徒。我知道如果我能擊敗一個自稱比公會裡任何人都強的戰士，並在這個過程中幫助恢復公會的榮譽，De Snel 最終就不得不接受我。」");
	say();
	goto labelFunc047F_017A;
labelFunc047F_0176:
	message("「傷痕圖書館的訓練師 De Snel 大師拒絕讓我加入，直到我在戰鬥中證明自己。在 Jhelom 這個城鎮，唯一能在戰鬥中證明自己的方法就是決鬥。但我母親把我教養成一個完美的紳士。到目前為止，我還沒有成功地充分冒犯任何人，以至於讓他們向我挑戰決鬥。嗯。也許我只是不適合成為傷痕圖書館的一員。」");
	say();
labelFunc047F_017A:
	UI_remove_answer("傷痕圖書館");
labelFunc047F_0181:
	case "告辭" attend labelFunc047F_018C:
	goto labelFunc047F_018F;
labelFunc047F_018C:
	goto labelFunc047F_00E9;
labelFunc047F_018F:
	endconv;
	message("「很高興能和你說話，");
	message(var0000);
	message("。」*");
	say();
labelFunc047F_019A:
	if (!(event == 0x0000)) goto labelFunc047F_01A8;
	Func092E(0xFF81);
labelFunc047F_01A8:
	return;
}


