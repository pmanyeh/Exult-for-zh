#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0487 object#(0x487) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0487_0266;
	UI_show_npc_face(0xFF79, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF78);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017D]) goto labelFunc0487_004E;
	UI_add_answer("吊飾盒");
labelFunc0487_004E:
	if (!(!gflags[0x0190])) goto labelFunc0487_006D;
	message("你面前的男人用狡詐的眼神打量著你。他微微彎著腰，彷彿隨時準備對周圍的世界發動攻擊。");
	say();
	gflags[0x0190] = true;
	if (!gflags[0x0180]) goto labelFunc0487_006A;
	UI_add_answer("陌生人");
labelFunc0487_006A:
	goto labelFunc0487_0071;
labelFunc0487_006D:
	message("「什麼事？」Battles 問道。");
	say();
labelFunc0487_0071:
	converse attend labelFunc0487_0261;
	case "姓名" attend labelFunc0487_008E:
	message("「Battles。我自己對 New Magincia 來說也是個陌生人。」");
	say();
	UI_add_answer("New Magincia");
	UI_remove_answer("姓名");
labelFunc0487_008E:
	case "職業" attend labelFunc0487_00A7:
	message("「我被僱來當 Robin 少爺的保鑣，我的夥伴 Leavell 也是。這份差事薪水很不錯。」");
	say();
	UI_add_answer(["Robin", "Leavell"]);
labelFunc0487_00A7:
	case "Robin" attend labelFunc0487_00FA:
	message("「Robin 是個玩大賭注的賭客，他在海盜巢穴 (Buccaneer's Den)的賭場裡討生活。」");
	say();
	if (!var0002) goto labelFunc0487_00E6;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「如果沒有你出色的工作，這份營生可就沒這麼賺錢了，Battles。」*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("「謝謝您，少爺。」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_00E6:
	UI_remove_answer("Robin");
	UI_add_answer(["賭客", "賭場"]);
labelFunc0487_00FA:
	case "賭客" attend labelFunc0487_0132:
	message("「Robin 靠賭博維生。我想他這輩子從來沒有過一份正經的工作！」");
	say();
	if (!var0002) goto labelFunc0487_012B;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「哎呀，謝謝你的誇獎，Battles！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_012B:
	UI_remove_answer("賭客");
labelFunc0487_0132:
	case "賭場" attend labelFunc0487_0145:
	message("「海盜巢穴 (Buccaneer's Den) 的賭坊 (House of Games)，那是我這輩子見過最棒的地方。我永遠不會忘記 Robin 第一次帶我去那裡的情景。他不到一個小時就帶著一百枚金幣離開了！」");
	say();
	UI_remove_answer("賭場");
labelFunc0487_0145:
	case "Leavell" attend labelFunc0487_0198:
	message("「他是個萬人迷，真的。但別以為他不會打架。那會是你犯的最後一個錯誤。」");
	say();
	if (!var0003) goto labelFunc0487_0184;
	UI_show_npc_face(0xFF78, 0x0000);
	message("「我幾乎能把你摔倒，Battles，你這老狗！」*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("「哈！哈！哈！哈！」");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_0184:
	UI_remove_answer("Leavell");
	UI_add_answer(["萬人迷", "打架"]);
labelFunc0487_0198:
	case "萬人迷" attend labelFunc0487_01D0:
	message("「哎呀，我估計 Leavell 傷透的心，跟我讓其停止跳動的心臟差不多一樣多！」");
	say();
	if (!var0003) goto labelFunc0487_01C9;
	UI_show_npc_face(0xFF78, 0x0000);
	message("「這麼多！」*");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_01C9:
	UI_remove_answer("萬人迷");
labelFunc0487_01D0:
	case "打架" attend labelFunc0487_01E3:
	message("「光是 Leavell 在應付那些嫉妒的丈夫們時所受的訓練，就足以讓任何人成為戰鬥大師了！」");
	say();
	UI_remove_answer("打架");
labelFunc0487_01E3:
	case "陌生人" attend labelFunc0487_01F6:
	message("「陌生人？～～你說的肯定是我們！」Battles 大聲地哼了一聲。");
	say();
	UI_remove_answer("陌生人");
labelFunc0487_01F6:
	case "New Magincia" attend labelFunc0487_0216:
	message("「我們正想離開這塊無聊的破石頭，New Magincia，回到海盜巢穴 (Buccaneer's Den)去。如果你有辦法帶我們去那裡，遠離這些鄉巴佬，Robin 少爺會付你豐厚的報酬的。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer(["無聊的破石頭", "鄉巴佬"]);
labelFunc0487_0216:
	case "無聊的破石頭" attend labelFunc0487_0229:
	message("「你能想像一輩子待在這裡，日復一日什麼事都沒發生嗎？這足以把人逼瘋！」");
	say();
	UI_remove_answer("無聊的破石頭");
labelFunc0487_0229:
	case "鄉巴佬" attend labelFunc0487_023C:
	message("「這裡的人太沒見識了，他們甚至從沒聽過賭博！沒聽過賭博？那可是人生的全部啊！」");
	say();
	UI_remove_answer("鄉巴佬");
labelFunc0487_023C:
	case "吊飾盒" attend labelFunc0487_0253:
	message("「我看到 Robin 少爺手裡有一個就像你描述的那樣的吊飾盒。我最後一次看到它是在……讓我想想……就在我們三個去端莊少女(Modest Damsel)酒館喝酒之前。」");
	say();
	gflags[0x0185] = true;
	UI_remove_answer("吊飾盒");
labelFunc0487_0253:
	case "告辭" attend labelFunc0487_025E:
	goto labelFunc0487_0261;
labelFunc0487_025E:
	goto labelFunc0487_0071;
labelFunc0487_0261:
	endconv;
	message("「回頭見。」*");
	say();
labelFunc0487_0266:
	if (!(event == 0x0000)) goto labelFunc0487_0274;
	Func092E(0xFF79);
labelFunc0487_0274:
	return;
}


