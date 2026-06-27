#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08B9 0x8B9 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E7 object#(0x4E7) ()
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

	if (!(event == 0x0001)) goto labelFunc04E7_04AC;
	UI_show_npc_face(0xFF19, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF19));
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0001 == 0x0017)) goto labelFunc04E7_005A;
	UI_add_answer(["食物", "飲料", "房間", "買賣"]);
labelFunc04E7_005A:
	if (!(!gflags[0x02B4])) goto labelFunc04E7_006C;
	message("你看到一位五十多歲的女人，她早年可能是個海盜侍女。雖然她很粗野，但她有一種特別的母性特質。");
	say();
	gflags[0x02B4] = true;
	goto labelFunc04E7_0070;
labelFunc04E7_006C:
	message("「又見面了，」 Mandy 說。");
	say();
labelFunc04E7_0070:
	converse attend labelFunc04E7_04A7;
	case "姓名" attend labelFunc04E7_0086:
	message("「我是 Mandy 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E7_0086:
	case "職業" attend labelFunc04E7_0159:
	message("「我經營墮落處女 (Fallen Virgin) 旅店和酒館。我們在早餐、晚餐和深夜時段營業。");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc04E7_014E;
	message("「如果你想要食物或飲料，或者也許是一個房間，請說出來。」");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04E7_0138;
	message("Mandy 看著 Dupre 說：「我認識你嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是的，女士。我幾個月前來過這裡。」*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("「我記得了！你在為 Brommer 的不列顛尼亞旅遊指南工作！你是個酒館評論家！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「沒錯，女士。」*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("「歡迎回來！請嚐嚐菜單上的任何東西。它們都還是很好吃。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我謝謝妳，女士。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF19, 0x0000);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E7_012E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你是頭豬， Dupre 。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E7_012E:
	UI_show_npc_face(0xFF19, 0x0000);
labelFunc04E7_0138:
	UI_add_answer(["食物", "飲料", "房間", "買賣"]);
	goto labelFunc04E7_0152;
labelFunc04E7_014E:
	message("「那就請來酒館，我會很樂意為你服務。」");
	say();
labelFunc04E7_0152:
	UI_add_answer("墮落處女 (Fallen Virgin)");
labelFunc04E7_0159:
	case "食物" attend labelFunc04E7_0173:
	message("「如果我自己說的話，我們提供一盤很棒的餿水！那道銀樹葉 真的很特別。你應該嚐嚐看。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer("銀樹葉");
labelFunc04E7_0173:
	case "飲料" attend labelFunc04E7_0186:
	message("「我可以提供你葡萄酒和麥酒。」");
	say();
	UI_remove_answer("飲料");
labelFunc04E7_0186:
	case "房間" attend labelFunc04E7_023A:
	message("「我們的房間是每人 10 金幣。現在唯一空著的是西南方的房間。其他兩間已經有人住了。你想要一間嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E7_022F;
	var0005 = UI_get_party_list();
	var0006 = 0x0000;
	enum();
labelFunc04E7_01A6:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc04E7_01BE;
	var0006 = (var0006 + 0x0001);
	goto labelFunc04E7_01A6;
labelFunc04E7_01BE:
	var000A = (var0006 * 0x000A);
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc04E7_0222;
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000C)) goto labelFunc04E7_0207;
	message("「你看看。你帶太多包袱了，拿不下房間鑰匙！」");
	say();
	goto labelFunc04E7_021F;
labelFunc04E7_0207:
	message("「這是房間鑰匙。它只在你離開旅店之前有效。」");
	say();
	var000D = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04E7_021F:
	goto labelFunc04E7_022C;
labelFunc04E7_0222:
	message("「看起來你似乎短缺了一點，");
	message(var0002);
	message("。」");
	say();
labelFunc04E7_022C:
	goto labelFunc04E7_0233;
labelFunc04E7_022F:
	message("「好吧。下次再說。」");
	say();
labelFunc04E7_0233:
	UI_remove_answer("房間");
labelFunc04E7_023A:
	case "買賣" attend labelFunc04E7_0245:
	Func08B9();
labelFunc04E7_0245:
	case "銀樹葉" attend labelFunc04E7_0258:
	message("「這是你在地球表面上能吃到最他媽讚的餿水！」");
	say();
	UI_remove_answer("銀樹葉");
labelFunc04E7_0258:
	case "墮落處女 (Fallen Virgin)" attend labelFunc04E7_0318:
	message("「是的，自從我當侍女的日子以來，我就一直經營這家酒館和旅店。」 Mandy 笑了。「我當時是個相當美麗的人，但你現在看不出來了。我認識鎮上的每個人，他們也都認識我。如果你需要知道關於任何人的事，讓我知道。」");
	say();
	UI_remove_answer("墮落處女 (Fallen Virgin)");
	if (!gflags[0x02A9]) goto labelFunc04E7_0278;
	UI_add_answer("Danag");
labelFunc04E7_0278:
	if (!gflags[0x02AF]) goto labelFunc04E7_0285;
	UI_add_answer("Blacktooth");
labelFunc04E7_0285:
	if (!gflags[0x02B0]) goto labelFunc04E7_0292;
	UI_add_answer("Mole");
labelFunc04E7_0292:
	if (!gflags[0x02B2]) goto labelFunc04E7_029F;
	UI_add_answer("Budo");
labelFunc04E7_029F:
	if (!gflags[0x02AB]) goto labelFunc04E7_02AC;
	UI_add_answer("Glenno");
labelFunc04E7_02AC:
	if (!gflags[0x02AA]) goto labelFunc04E7_02B9;
	UI_add_answer("Wench");
labelFunc04E7_02B9:
	if (!gflags[0x02AC]) goto labelFunc04E7_02C6;
	UI_add_answer("Martine");
labelFunc04E7_02C6:
	if (!gflags[0x02AD]) goto labelFunc04E7_02D3;
	UI_add_answer("Roberto");
labelFunc04E7_02D3:
	if (!gflags[0x02B1]) goto labelFunc04E7_02E0;
	UI_add_answer("Lucky");
labelFunc04E7_02E0:
	if (!gflags[0x02B3]) goto labelFunc04E7_02ED;
	UI_add_answer("Gordy");
labelFunc04E7_02ED:
	if (!gflags[0x02AE]) goto labelFunc04E7_02FA;
	UI_add_answer("Sintag");
labelFunc04E7_02FA:
	if (!gflags[0x02B5]) goto labelFunc04E7_0307;
	UI_add_answer("Smithy");
labelFunc04E7_0307:
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E7_0318;
	UI_add_answer("Hook");
labelFunc04E7_0318:
	case "Danag" attend labelFunc04E7_032B:
	message("「他在那個友誼會的地方幫忙。不知為何他總是代理分會領袖。真正的領袖，一個名叫 Abraham 的傢伙，從來不在這裡。 Danag 還好。有點容易受騙。」");
	say();
	UI_remove_answer("Danag");
labelFunc04E7_032B:
	case "Blacktooth" attend labelFunc04E7_033E:
	message("「他是個前海盜和惡棍，而且他可以相當刻薄。如果他沒有馬上對你產生好感，他可能永遠也不會。但一旦他這麼做了，你會發現他其實是個相當敏感的男人。」");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E7_033E:
	case "Mole" attend labelFunc04E7_0351:
	message("「在……嗯，似乎是一個世紀以前，我是 Mole 那幫海盜裡的侍女。 Mole 粗野強悍，是個麻煩製造者。直到他加入友誼會。那把他變成……，」 Mandy 聳聳肩。「我不知道，一個中年的前海盜之類的。」");
	say();
	UI_remove_answer("Mole");
labelFunc04E7_0351:
	case "Budo" attend labelFunc04E7_0364:
	message("「他的家族在海盜巢穴 (Buccaneer's Den)已經好幾代了。如果你問我的話，我覺得他叫賣商品的方式有點太強勢了。」");
	say();
	UI_remove_answer("Budo");
labelFunc04E7_0364:
	case "Glenno" attend labelFunc04E7_0377:
	message("「他讓我發笑。他是個寶貝。你在島上找不到比他更令人愉快、更渴望取悅別人的男人了。他出乎意料地是個好人。」 Mandy 停頓了一下，然後補充道：「對一個皮條客來說。」");
	say();
	UI_remove_answer("Glenno");
labelFunc04E7_0377:
	case "Wench" attend labelFunc04E7_038A:
	message("「她是個非常注重隱私的人。在澡堂工作。我聽說她贏得了某種比賽——這就是為什麼她有幸在那裡。我了解 Glenno 在那裡給他們的薪水很高。」");
	say();
	UI_remove_answer("Wench");
labelFunc04E7_038A:
	case "Martine" attend labelFunc04E7_039D:
	message("「她是個非常注重隱私的人。在澡堂工作。我這輩子跟她說的話不超過三句。」");
	say();
	UI_remove_answer("Martine");
labelFunc04E7_039D:
	case "Roberto" attend labelFunc04E7_03B0:
	message("「他是個非常注重隱私的人，但是，喔，我必須說他是個有魅力的男人！他在澡堂工作。我承認我是他的客戶之一。他確實在幫我『洗盤子』，如果你懂我的意思。」");
	say();
	UI_remove_answer("Roberto");
labelFunc04E7_03B0:
	case "Lucky" attend labelFunc04E7_03C3:
	message("「他是個前惡棍，我可以告訴你這點！想到他現在竟然靠教導別人成為惡棍維生！」 Mandy 聳聳肩。「人各有志。」");
	say();
	UI_remove_answer("Lucky");
labelFunc04E7_03C3:
	case "Gordy" attend labelFunc04E7_03D6:
	message("「我跟他沒那麼熟，雖然他看起來是個真誠的男人。他像經營一艘船一樣經營著遊戲之屋。他也是個前海盜。一定當過船長。」");
	say();
	UI_remove_answer("Gordy");
labelFunc04E7_03D6:
	case "Smithy" attend labelFunc04E7_03E9:
	message("「他是另一個海盜。我知道他在賭坊 (House of Games) 工作。我想他是負責實際遊戲的人。我跟他不熟。」");
	say();
	UI_remove_answer("Smithy");
labelFunc04E7_03E9:
	case "Sintag" attend labelFunc04E7_03FC:
	message("「布嚕嚕！他是個可怕的男人。你可以看出他殺過人。他是賭坊 (House of Games) 的守衛。你絕對不會想被他抓到作弊！」");
	say();
	UI_remove_answer("Sintag");
labelFunc04E7_03FC:
	case "Hook" attend labelFunc04E7_0439:
	var000E = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var000E) goto labelFunc04E7_0423;
	message("你感覺到方塊在震動，但不知為何你知道就算沒有它， Mandy 也會告訴你實話。");
	say();
labelFunc04E7_0423:
	message("Mandy 向你低語。「我知道你說的是誰。他住在島上某處，但我不確定在哪裡。他很少來酒館，但我偶爾見過他。」");
	say();
	message("「他嚇死我了。」");
	say();
	UI_remove_answer("Hook");
	UI_add_answer("驚嚇");
labelFunc04E7_0439:
	case "驚嚇" attend labelFunc04E7_0459:
	message("「嗯，他是個殺手。有些人認為他要為去年發生的謀殺案負責。」");
	say();
	UI_remove_answer("驚嚇");
	UI_add_answer(["殺手", "謀殺案"]);
labelFunc04E7_0459:
	case "殺手" attend labelFunc04E7_046C:
	message("「這個他們稱為 Hook 的男人身上有一種殺手的氣息。你可以從他的眼神裡看出來。如果我得罪了他，我會非常小心。」");
	say();
	UI_remove_answer("殺手");
labelFunc04E7_046C:
	case "謀殺案" attend labelFunc04E7_0486:
	message("「有一個名叫 Duncan 的小偷，他從遊戲之屋和澡堂偷了資金。我相信他也闖入了友誼會會堂。總之，他被逮捕了。但有一天早上，當守衛給他送早餐時，他不見了！每個人都以為他逃跑了，直到在老 Blacktooth 住的房子裡發現了他的屍體。這是在 Blacktooth 住那裡之前發生的事。」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer("屍體");
labelFunc04E7_0486:
	case "屍體" attend labelFunc04E7_0499:
	message("「他被肢解了——他的手臂和腿被砍斷，而且他真的失去了他的頭！直到今天，沒人知道是誰做的。但當 Hook 在附近時，人們會在他背後議論。他絕對有能力做出這種事！」");
	say();
	UI_remove_answer("屍體");
labelFunc04E7_0499:
	case "告辭" attend labelFunc04E7_04A4:
	goto labelFunc04E7_04A7;
labelFunc04E7_04A4:
	goto labelFunc04E7_0070;
labelFunc04E7_04A7:
	endconv;
	message("「很高興和你談話。我希望晚點能再見到你。」*");
	say();
labelFunc04E7_04AC:
	if (!(event == 0x0000)) goto labelFunc04E7_04BA;
	Func092E(0xFF19);
labelFunc04E7_04BA:
	return;
}


