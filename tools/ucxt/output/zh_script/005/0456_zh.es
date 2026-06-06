#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0456 object#(0x456) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0456_01A0;
	UI_show_npc_face(0xFFAA, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x0111])) goto labelFunc0456_002A;
	message("你看到一位開朗的女人，有著明亮的眼睛和金色的頭髮。");
	say();
	gflags[0x0111] = true;
	goto labelFunc0456_0034;
labelFunc0456_002A:
	message("「又見面了，");
	message(var0000);
	message("。」Xanthia 說。");
	say();
labelFunc0456_0034:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0456_0044:
	converse attend labelFunc0456_0195;
	case "姓名" attend labelFunc0456_005A:
	message("「你好，我的名字是 Xanthia 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0456_005A:
	case "職業" attend labelFunc0456_008E:
	if (!gflags[0x011F]) goto labelFunc0456_007F;
	message("「我是 Minoc 藝術家公會的成員。我製作並販售燭台。」");
	say();
	UI_add_answer(["藝術家公會", "Minoc", "燭台"]);
	goto labelFunc0456_008E;
labelFunc0456_007F:
	message("「如果你不介意的話，也許我們可以在更有交際氣氛的場合互相認識！最近有兩個人在 William 的鋸木廠被謀殺了！這可不是認識新朋友的時候！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0456_008E:
	case "藝術家公會" attend labelFunc0456_00A1:
	message("「我們是一個由藝術家和工匠組成的公會，為了共同利益而團結一致，致力於藝術的發展，並向其他藝術家展示，完全靠自己的努力生存而不犧牲創造力是可能的。」");
	say();
	UI_remove_answer("藝術家公會");
labelFunc0456_00A1:
	case "燭台" attend labelFunc0456_00BB:
	message("「我製作簡單的燭台，但有時我也會接委託工作，製作更特別的款式。我受僱於友誼會，為他們所有的友誼會大廳製作燭台。」");
	say();
	UI_remove_answer("燭台");
	UI_add_answer("友誼會");
labelFunc0456_00BB:
	case "友誼會" attend labelFunc0456_00E2:
	message("「當地友誼會分會的負責人 Elynor 給我看了一張友誼會標誌的圖片，我就是根據那個來設計我的燭台。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("Elynor");
	if (!gflags[0x0122]) goto labelFunc0456_00E2;
	UI_add_answer("謀殺現場的燭台");
labelFunc0456_00E2:
	case "Elynor" attend labelFunc0456_00FC:
	message("「是的，她很擅長招募。怎麼說呢，她讓我們的鎮長 Burnside 加入了，還有不列顛尼亞礦業公司當地負責人 Gregor ，以及我們的造船匠 Owen 。很遺憾地說，他很快就會出名了。謝天謝地，她從來沒邀請過我加入。」");
	say();
	UI_remove_answer("Elynor");
	UI_add_answer("Owen");
labelFunc0456_00FC:
	case "謀殺現場的燭台" attend labelFunc0456_012A:
	message("你向 Xanthia 描述在謀殺現場發現的燭台。她認了出來，睜大了眼睛。「是的，那是我做的其中一個燭台。它在謀殺現場的鋸木廠裡？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0456_011B;
	message("Xanthia 看起來很震驚。「太可怕了！我發誓我不知道它是怎麼到那裡的！你一定要去問 Elynor 這件事！」");
	say();
	goto labelFunc0456_011F;
labelFunc0456_011B:
	message("她略帶怒意地看了你一眼。「好吧，我希望你不是從 Elynor 那裡偷來的。」");
	say();
labelFunc0456_011F:
	gflags[0x0125] = true;
	UI_remove_answer("謀殺現場的燭台");
labelFunc0456_012A:
	case "Minoc" attend labelFunc0456_014A:
	message("「隨著礦業的成功， Minoc 是個繁榮的城市。不是一個人們習慣發生謀殺案的地方。是個很適合我們藝術家公會發展的好地方。但我們這裡的情況一直很艱難。現在我擔心情況可能會變得更糟。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["更糟", "謀殺案"]);
labelFunc0456_014A:
	case "更糟" attend labelFunc0456_015D:
	message("「這就是 Gladstone 說的。你最好去問他這件事。」");
	say();
	UI_remove_answer("更糟");
labelFunc0456_015D:
	case "謀殺案" attend labelFunc0456_0174:
	message("「這太可怕了！我個人並不認識 Frederico 或 Tania ，但我確實見過他們的兒子 Sasha 一次。他是個好男孩，如果沒有誤入歧途的話。他曾作為 Seara 的客人，在我們藝術家公會住過一晚。」");
	say();
	gflags[0x00FE] = true;
	UI_remove_answer("謀殺案");
labelFunc0456_0174:
	case "Owen" attend labelFunc0456_0187:
	message("「他們出於某種原因要為 Owen 建造一座紀念碑。 Owen 和 Elynor 拒絕使用公會的任何人來幫忙建造它！他們相當無禮，你不覺得嗎？」");
	say();
	UI_remove_answer("Owen");
labelFunc0456_0187:
	case "告辭" attend labelFunc0456_0192:
	goto labelFunc0456_0195;
labelFunc0456_0192:
	goto labelFunc0456_0044;
labelFunc0456_0195:
	endconv;
	message("「再會，");
	message(var0000);
	message("。希望我對你有所幫助。」*");
	say();
labelFunc0456_01A0:
	if (!(event == 0x0000)) goto labelFunc0456_01AE;
	Func092E(0xFFAA);
labelFunc0456_01AE:
	return;
}


