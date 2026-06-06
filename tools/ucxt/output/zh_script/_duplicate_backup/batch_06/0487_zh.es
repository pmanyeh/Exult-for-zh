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
	message("你面前的男人用狡詐的眼神打量著你。他微微彎著腰，彷彿隨時準備好向周圍的世界出擊。");
	say();
	gflags[0x0190] = true;
	if (!gflags[0x0180]) goto labelFunc0487_006A;
	UI_add_answer("陌生人");
labelFunc0487_006A:
	goto labelFunc0487_0071;
labelFunc0487_006D:
	message("「幹嘛？」Battles 問道。");
	say();
labelFunc0487_0071:
	converse attend labelFunc0487_0261;
	case "姓名" attend labelFunc0487_008E:
	message("「Battles 。對 New Magincia 來說，我也是個陌生人。」");
	say();
	UI_add_answer("New Magincia");
	UI_remove_answer("姓名");
labelFunc0487_008E:
	case "職業" attend labelFunc0487_00A7:
	message("「我被雇用為 Robin 少爺的保鑣，我的搭檔 Leavell 也是。薪水很不錯。」");
	say();
	UI_add_answer(["Robin", "Leavell"]);
labelFunc0487_00A7:
	case "Robin" attend labelFunc0487_00FA:
	message("「Robin 是個玩很大的賭徒紳士，靠在 Buccaneer's Den 的賭場為生。」");
	say();
	if (!var0002) goto labelFunc0487_00E6;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「如果沒有你～優異的表現， Battles ，這行可沒那麼好賺。」*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("「謝謝您，老爺。」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_00E6:
	UI_remove_answer("Robin");
	UI_add_answer(["賭徒紳士", "賭場"]);
labelFunc0487_00FA:
	case "賭徒紳士" attend labelFunc0487_0132:
	message("「賭博是 Robin 謀生的方式。我想他這輩子從來沒做過正經工作！」");
	say();
	if (!var0002) goto labelFunc0487_012B;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("「唉呀，我謝謝你的誇獎， Battles ！」*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_012B:
	UI_remove_answer("賭徒紳士");
labelFunc0487_0132:
	case "賭場" attend labelFunc0487_0145:
	message("「Buccaneer's Den 的賭場叫遊戲之屋，那是我這輩子見過最棒的地方。我永遠不會忘記 Robin 第一次帶我去那裡的情景。他不到一個小時就贏走了一百枚金幣！」");
	say();
	UI_remove_answer("賭場");
labelFunc0487_0145:
	case "Leavell" attend labelFunc0487_0198:
	message("「他是個萬人迷，真的。但別以為他不會打架。那會是你最後的錯誤。」");
	say();
	if (!var0003) goto labelFunc0487_0184;
	UI_show_npc_face(0xFF78, 0x0000);
	message("「我差點就能把你摔倒了， Battles ，你這老狗！」*");
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
	message("「唉呀，我估計 Leavell 傷過的心，跟我讓它們停止跳動的心一樣多！」");
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
	message("「光是 Leavell 為了應付那些嫉妒的丈夫所受的訓練，就足以讓任何男人成為戰鬥大師！」");
	say();
	UI_remove_answer("打架");
labelFunc0487_01E3:
	case "陌生人" attend labelFunc0487_01F6:
	message("「陌生人？~~你一定是在說我們！」Battles 大聲哼了一聲。");
	say();
	UI_remove_answer("陌生人");
labelFunc0487_01F6:
	case "New Magincia" attend labelFunc0487_0216:
	message("「我們正想離開 New Magincia 這塊無聊的岩石，回到 Buccaneer's Den 。如果你有辦法帶我們去那裡，遠離這些鄉巴佬惡棍， Robin 少爺會付你豐厚的報酬。」");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer(["無聊的岩石", "鄉巴佬惡棍"]);
labelFunc0487_0216:
	case "無聊的岩石" attend labelFunc0487_0229:
	message("「你能想像你一輩子都待在這裡，日復一日什麼事都沒發生嗎？這足以把人逼瘋！」");
	say();
	UI_remove_answer("無聊的岩石");
labelFunc0487_0229:
	case "鄉巴佬惡棍" attend labelFunc0487_023C:
	message("「這裡的人太沒受過教育了，他們以前甚至沒聽說過賭博！沒聽說過賭博？那才是人生的意義啊！」");
	say();
	UI_remove_answer("鄉巴佬惡棍");
labelFunc0487_023C:
	case "吊飾盒" attend labelFunc0487_0253:
	message("「我看到一個就像你描述的吊飾盒在 Robin 少爺手裡。我最後一次看到它是……讓我想想……就在我們三個去謙遜少女酒館喝酒之前。」");
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


