#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0946 0x946 ();
extern void Func0947 0x947 ();
extern void Func0948 0x948 ();
extern void Func092E 0x92E (var var0000);

void Func0434 object#(0x434) ()
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
	var var000E;

	if (!(event == 0x0001)) goto labelFunc0434_037C;
	UI_show_npc_face(0xFFCC, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var0003 = UI_part_of_day();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0085]) goto labelFunc0434_0059;
	UI_add_answer("Jeanette");
labelFunc0434_0059:
	if (!gflags[0x00CB]) goto labelFunc0434_0066;
	UI_add_answer("做麵包");
labelFunc0434_0066:
	var0005 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000E);
	var0006 = Func0931(0xFE9B, 0x0001, 0x035F, 0xFE99, 0x000F);
	if (!(var0005 || var0006)) goto labelFunc0434_00A1;
	UI_add_answer("賣麵粉");
labelFunc0434_00A1:
	if (!(!gflags[0x00B5])) goto labelFunc0434_00B3;
	message("你看見一個看起來很愛乾淨、胖乎乎的年輕人，正瘋狂地向你揮手。");
	say();
	gflags[0x00B5] = true;
	goto labelFunc0434_00B7;
labelFunc0434_00B3:
	message("「啊，你好啊！很高興又見到你了！」 Willy 說。");
	say();
labelFunc0434_00B7:
	converse attend labelFunc0434_0371;
	case "姓名" attend labelFunc0434_00CD:
	message("「我的本名是 Wilhelm ，雖然沒人這樣叫我。我比較喜歡別人叫我 Willy 。非常感謝你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0434_00CD:
	case "職業" attend labelFunc0434_0190:
	message("「我是這裡不列顛城的烘焙師，我做的是你嚐過最甜的麵包！");
	say();
	if (!(var0002 == 0x0012)) goto labelFunc0434_018C;
	message("「你有機會嚐過我的麵包了嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0434_0161;
	message("「啊，那麼你也同意它是最甜的，不是嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0434_015A;
	message("「哈！你看到了吧？每個人都同意！這應該就是最好的證明！」");
	say();
	var0004 = Func08F7(0xFFFE);
	if (!var0004) goto labelFunc0434_0157;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我要吃！」*");
	say();
	UI_show_npc_face(0xFFCC, 0x0000);
	message("「給你，小夥子。」 Willy 遞給 Spark 一個糕點，男孩一口就把它吞了下去。*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嗯嗯嗯！我說，");
	message(var0001);
	message("，我想我們路上需要很多這個。我們最好買一些，好嗎？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFCC, 0x0000);
labelFunc0434_0157:
	goto labelFunc0434_015E;
labelFunc0434_015A:
	message("「你不同意？！哎呀，別開玩笑了！你當然同意！」");
	say();
labelFunc0434_015E:
	goto labelFunc0434_017C;
labelFunc0434_0161:
	message("「那給你，你一定要嚐嚐！」他從帶著的幾條麵包上撕下一塊，塞進你嘴裡。「看吧！這不是你嚐過最甜的麵包嗎？是的，對不對？！」你盡快地咀嚼著，以便回答他。");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0434_0178;
	message("他捏住你的臉頰，在你的額頭上印下一個大大的吻。「你真是個有品味的好食客！」");
	say();
	goto labelFunc0434_017C;
labelFunc0434_0178:
	message("Willy 沮喪地低頭看著他拿著的麵包。他嗅了兩下，然後把它扔得遠遠的。");
	say();
labelFunc0434_017C:
	UI_add_answer(["烘焙師", "麵包"]);
	goto labelFunc0434_0190;
labelFunc0434_018C:
	message("「請在白天麵包店營業時來，你可以嚐嚐看！」");
	say();
labelFunc0434_0190:
	case "烘焙師" attend labelFunc0434_01BA:
	message("他點點頭。「是的，我是個烘焙師，我有很多父母傳下來的秘密食譜。哎呀，甚至有人說我是個大師級烘焙師！");
	say();
	message("「而且有些人還叫我……甜甜圈。」他皺著眉頭說。");
	say();
	UI_remove_answer("烘焙師");
	UI_add_answer(["秘密食譜", "父母", "大師級烘焙師", "甜甜圈"]);
labelFunc0434_01BA:
	case "秘密食譜" attend labelFunc0434_01CD:
	message("「噢，天哪。別告訴我你又是另一個想從我這裡套出秘密食譜的人！如果你是為了這個而來，那你一定會失望的！」");
	say();
	UI_remove_answer("秘密食譜");
labelFunc0434_01CD:
	case "父母" attend labelFunc0434_01E7:
	message("Willy 擦去一滴眼淚。「都走了。兩個人都走了。去天上那個偉大的廚房與我的祖先相聚了。我永遠無法像他們那樣烹飪。但我還是堅持著，努力保持家族的名聲，這就是我成為烘焙師的原因。但我想這不是唯一的原因。」");
	say();
	UI_remove_answer("父母");
	UI_add_answer("為什麼");
labelFunc0434_01E7:
	case "大師級烘焙師" attend labelFunc0434_01FE:
	message("「是的，很多人都這麼告訴我。現在你也這麼說。既然你也這麼說，那一定是真的！」");
	say();
	message("Willy 咬了一口自己的麵包。「嗯。我『是』個大師級烘焙師！」");
	say();
	UI_remove_answer("大師級烘焙師");
labelFunc0434_01FE:
	case "甜甜圈" attend labelFunc0434_0211:
	message("他疑惑地看著你好一會兒。過了一會兒，他拿起一條麵包，往你頭上敲下去。");
	say();
	UI_remove_answer("甜甜圈");
labelFunc0434_0211:
	case "為什麼" attend labelFunc0434_022B:
	message("「其實，我當烘焙師有一個很好的理由。」");
	say();
	UI_remove_answer("為什麼");
	UI_add_answer("理由");
labelFunc0434_022B:
	case "理由" attend labelFunc0434_0245:
	message("「因為抓住女人的心，要先抓住她的胃。哎呀，我現在可是有兩個女人愛著我，而且我連追都不用追。」");
	say();
	UI_remove_answer("理由");
	UI_add_answer("兩個女人");
labelFunc0434_0245:
	case "兩個女人" attend labelFunc0434_0265:
	message("他嘆了口氣。「如果你一定要知道，她們的名字是 Jeanette 和 Gaye 。」");
	say();
	UI_remove_answer("兩個女人");
	UI_add_answer(["Jeanette", "Gaye"]);
labelFunc0434_0265:
	case "Jeanette" attend labelFunc0434_0278:
	message("「Jeanette 是個滿討人喜歡的女孩，但說實話，我無法想像自己跟一個酒館女侍在一起。她以為我沒注意到她對我的感覺。坦白說，我真希望她能離我遠一點。」");
	say();
	UI_remove_answer("Jeanette");
labelFunc0434_0278:
	case "Gaye" attend labelFunc0434_028B:
	message("「經營服飾店的 Gaye 比較引起我的興趣。但她是友誼會成員，而我不想加入。我希望這不會妨礙我們交往。」");
	say();
	UI_remove_answer("Gaye");
labelFunc0434_028B:
	case "麵包" attend labelFunc0434_02AB:
	message("「我的麵包是不列顛尼亞最好的。它以美味和合理的價格聞名。但是要做出足夠的數量來滿足不斷的需求是很辛苦的工作。我需要僱用人來幫我。」");
	say();
	UI_remove_answer("麵包");
	UI_add_answer(["買東西", "僱用"]);
labelFunc0434_02AB:
	case "買東西" attend labelFunc0434_02E5:
	if (!(var0002 == 0x0012)) goto labelFunc0434_02DA;
	message("「我不只賣麵包，還有糕點、蛋糕和餐包。你能想像塞進嘴裡最美味的烘焙食品！你想買一些嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0434_02D3;
	Func0946();
	goto labelFunc0434_02D7;
labelFunc0434_02D3:
	message("「如果你是一個真正有品味的人，你就會買一些！」");
	say();
labelFunc0434_02D7:
	goto labelFunc0434_02DE;
labelFunc0434_02DA:
	message("「恐怕麵包店已經打烊了。請在正常營業時間再來。」");
	say();
labelFunc0434_02DE:
	UI_remove_answer("買東西");
labelFunc0434_02E5:
	case "僱用" attend labelFunc0434_033F:
	if (!(var0002 == 0x0012)) goto labelFunc0434_0334;
	message("「你可以在店裡為我工作做麵包。或者我會跟你買幾袋麵粉。你可以在 Paws 批發買，我會以每袋 4 枚金幣向你收購。」");
	say();
	message("「你想在這裡為我工作嗎？」 Willy 滿懷希望地問。");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0434_032D;
	message("「太好了！你可以馬上開始工作！你每做五條麵包，我就付你 5 枚金幣。好嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0434_0326;
	gflags[0x00CB] = true;
	message("「首先你必須用麵粉揉麵團。只要在桌上撒點麵粉，加點水讓它變濃稠，嗯，變成麵團。然後把麵團放進烤箱裡烤。等一會兒，然後——瞧！你就有麵包了！」");
	say();
	goto labelFunc0434_032A;
labelFunc0434_0326:
	message("「很好。但我警告你，現在工作可不好找！」");
	say();
labelFunc0434_032A:
	goto labelFunc0434_0331;
labelFunc0434_032D:
	message("「很可惜你沒空。你看起來像個懂得在廚房裡穿梭的人。」");
	say();
labelFunc0434_0331:
	goto labelFunc0434_0338;
labelFunc0434_0334:
	message("「我很樂意在正常營業時間與你談談在我店裡工作的事。」");
	say();
labelFunc0434_0338:
	UI_remove_answer("僱用");
labelFunc0434_033F:
	case "做麵包" attend labelFunc0434_0351:
	Func0947();
	UI_remove_answer("做麵包");
labelFunc0434_0351:
	case "賣麵粉" attend labelFunc0434_0363:
	Func0948();
	UI_remove_answer("賣麵粉");
labelFunc0434_0363:
	case "告辭" attend labelFunc0434_036E:
	goto labelFunc0434_0371;
labelFunc0434_036E:
	goto labelFunc0434_00B7;
labelFunc0434_0371:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("，祝你胃口大開！」*");
	say();
labelFunc0434_037C:
	if (!(event == 0x0000)) goto labelFunc0434_0403;
	var0003 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCC));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0012)) goto labelFunc0434_03FD;
	if (!(var000D == 0x0001)) goto labelFunc0434_03C0;
	var000E = "@美味的麵包！@";
labelFunc0434_03C0:
	if (!(var000D == 0x0002)) goto labelFunc0434_03D0;
	var000E = "@美味的糕點！@";
labelFunc0434_03D0:
	if (!(var000D == 0x0003)) goto labelFunc0434_03E0;
	var000E = "@國王吃的麵包！@";
labelFunc0434_03E0:
	if (!(var000D == 0x0004)) goto labelFunc0434_03F0;
	var000E = "@新鮮的糕點！@";
labelFunc0434_03F0:
	UI_item_say(0xFFCC, var000E);
	goto labelFunc0434_0403;
labelFunc0434_03FD:
	Func092E(0xFFCC);
labelFunc0434_0403:
	return;
}


