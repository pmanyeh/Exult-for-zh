#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0484 object#(0x484) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0484_0284;
	UI_show_npc_face(0xFF7C, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0180]) goto labelFunc0484_0035;
	UI_add_answer("陌生人");
labelFunc0484_0035:
	if (!(gflags[0x017F] && (!gflags[0x01CD]))) goto labelFunc0484_0047;
	UI_add_answer("找到");
labelFunc0484_0047:
	if (!(!gflags[0x018D])) goto labelFunc0484_0059;
	message("你看到一個衣衫襤褸的年輕人，顯然正在承受失戀之痛。");
	say();
	gflags[0x018D] = true;
	goto labelFunc0484_0063;
labelFunc0484_0059:
	message("Henry 向你打招呼。「很高興再次和你說話，");
	message(var0000);
	message("！」");
	say();
labelFunc0484_0063:
	converse attend labelFunc0484_027F;
	case "姓名" attend labelFunc0484_007F:
	message("「我的名字是 Henry ，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0484_007F:
	case "職業" attend labelFunc0484_00AB:
	if (!(!(gflags[0x017D] || gflags[0x01CD]))) goto labelFunc0484_00A0;
	message("「工作？！誰心碎了還有辦法工作？！」");
	say();
	UI_add_answer("心碎");
	goto labelFunc0484_00AB;
labelFunc0484_00A0:
	message("「雖然我被稱為小販，但我擁有 New Magincia 裡最齊全的商品。」");
	say();
	UI_add_answer("New Magincia");
labelFunc0484_00AB:
	case "New Magincia" attend labelFunc0484_00BE:
	message("「我一輩子都住在這裡，從沒去過其他地方。這裡基本上是個非常美好的地方，人們仍然堅持著古老的傳統和價值觀。世界上的其他人一定認為時代拋棄了我們，但其實是他們失去了曾經擁有的一切。」");
	say();
	UI_remove_answer("New Magincia");
labelFunc0484_00BE:
	case "心碎" attend labelFunc0484_00D8:
	message("「我被我愛的女人拒絕了。」");
	say();
	UI_add_answer("女人");
	UI_remove_answer("心碎");
labelFunc0484_00D8:
	case "女人" attend labelFunc0484_00F8:
	message("他的眼睛亮了起來。「她的名字是 Constance ，她是世界上最美麗的女人，我們曾經相愛過一段時間。」他神色黯然，深深嘆了口氣。「但那是在我犯下一個可怕的錯誤之前……」");
	say();
	UI_add_answer(["Constance", "錯誤"]);
	UI_remove_answer("女人");
labelFunc0484_00F8:
	case "Constance" attend labelFunc0484_010B:
	message("「她是鎮上的挑水工。她將謙卑之井的水送到鎮上的每戶人家。」");
	say();
	UI_remove_answer("Constance");
labelFunc0484_010B:
	case "錯誤" attend labelFunc0484_012B:
	message("「我答應送給她一個非常古老且珍貴的吊飾盒，作為我愛慕的信物。我兒時的朋友 Katrina 把那個吊飾盒送給了我。」");
	say();
	UI_remove_answer("錯誤");
	UI_add_answer(["吊飾盒", "Katrina"]);
labelFunc0484_012B:
	case "吊飾盒" attend labelFunc0484_0145:
	message("「我還來不及把吊飾盒交給她就弄丟了。我找遍了所有地方都找不到。現在， Constance 認為我是個無賴，拋棄了我。」");
	say();
	UI_remove_answer("吊飾盒");
	UI_add_answer("弄丟");
labelFunc0484_0145:
	case "Katrina" attend labelFunc0484_01A2:
	message("「Katrina 是 New Magincia 的牧羊女。她從我小時候就是我的朋友了。」");
	say();
	var0001 = Func08F7(0xFFF7);
	if (!var0001) goto labelFunc0484_019B;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「我們曾有過一些美好的回憶，不是嗎， Henry ？」");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「喔，確實如此！但妳不願做我的愛人，所以我們很久以前就認命當『普通朋友』了，不是嗎？」");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「妳說什麼就是什麼，親愛的 Henry 。」");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_019B:
	UI_remove_answer("Katrina");
labelFunc0484_01A2:
	case "弄丟" attend labelFunc0484_01DC:
	message("「我昨天和那三個陌生人說過話後，就發現我的吊飾盒不見了。你能幫我找到它嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0484_01CB;
	message("「喔，謝謝你，");
	message(var0000);
	message("！如果不是你，我真不知道該怎麼辦。」");
	say();
	gflags[0x017D] = true;
	goto labelFunc0484_01D5;
labelFunc0484_01CB:
	message("「喔，好吧……我知道你忙著自己的任務。謝謝你聽我訴苦，");
	message(var0000);
	message("。」");
	say();
labelFunc0484_01D5:
	UI_remove_answer("弄丟");
labelFunc0484_01DC:
	case "陌生人" attend labelFunc0484_01F3:
	message("「New Magincia 還有三個陌生人。他們比你早幾天到。他們的船沉了，他們好不容易才保住性命來到這裡。」");
	say();
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0484_01F3:
	case "找到" attend labelFunc0484_0271:
	message("「你找到吊飾盒了！」");
	say();
	var0003 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0002, true);
	if (!var0003) goto labelFunc0484_0266;
	Func0911(0x0032);
	message("你把吊飾盒交給 Henry 。「現在我可以把它交給 Constance ，並實現我對她的承諾了！我實在感激不盡，聖者！」");
	say();
	gflags[0x01CD] = true;
	var0004 = Func08F7(0xFFF7);
	if (!var0004) goto labelFunc0484_0263;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「我很高興這件事對你有了好結果，親愛的 Henry 。」");
	say();
	UI_show_npc_face(0xFF7C, 0x0000);
	message("「謝謝妳， Katrina 。」");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7C, 0x0000);
labelFunc0484_0263:
	goto labelFunc0484_026A;
labelFunc0484_0266:
	message("當你沒有要把它交給他時，他看起來心急如焚。「它在哪裡？！我需要它來向我愛的女人證明我的心意！」");
	say();
labelFunc0484_026A:
	UI_remove_answer("找到");
labelFunc0484_0271:
	case "告辭" attend labelFunc0484_027C:
	goto labelFunc0484_027F;
labelFunc0484_027C:
	goto labelFunc0484_0063;
labelFunc0484_027F:
	endconv;
	message("「祝你旅途平安，一切順利。」*");
	say();
labelFunc0484_0284:
	if (!(event == 0x0000)) goto labelFunc0484_0292;
	Func092E(0xFF7C);
labelFunc0484_0292:
	return;
}


