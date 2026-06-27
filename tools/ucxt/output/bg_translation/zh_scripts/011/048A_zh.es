#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func048A object#(0x48A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc048A_0009;
	abort;
labelFunc048A_0009:
	UI_show_npc_face(0xFF76, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFD);
	var0004 = Func08F7(0xFFFC);
	var0005 = UI_wearing_fellowship();
	if (!gflags[0x02CC]) goto labelFunc048A_004E;
	UI_add_answer("Iriale");
labelFunc048A_004E:
	if (!(!gflags[0x02BB])) goto labelFunc048A_0060;
	message("你看到一張熟悉的臉，是個嚴肅的大鬍子戰士，你曾在上一次前往不列顛尼亞的旅途中見過他。");
	say();
	gflags[0x02BB] = true;
	goto labelFunc048A_0064;
labelFunc048A_0060:
	message("「嗨喲，聖者！」 Gorn 說道。「你想跟我說話嗎？」");
	say();
labelFunc048A_0064:
	if (!gflags[0x02D2]) goto labelFunc048A_006F;
	message("「 Brom 的聲音告訴我不能信任你，聖者，」 Gorn 說道。「我以為我們是朋友，我也不想傷害你。但我警告你，不要再跟我說話！」*");
	say();
	abort;
labelFunc048A_006F:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc048A_007F:
	converse attend labelFunc048A_0355;
	case "姓名" attend labelFunc048A_0095:
	message("那戰士瞇起眼睛。「我是 Gorn ，好像你不記得了一樣！很高興再次見到你。」他大笑著拍了你的肩膀。");
	say();
	UI_remove_answer("姓名");
labelFunc048A_0095:
	case "職業" attend labelFunc048A_00AE:
	message("「我的職業是永無止境的壯闊冒險之旅。打從我還是個孩子，從我的家鄉 Balema 被帶走，我就用一生在追尋可以執行的英雄壯舉。」");
	say();
	UI_add_answer(["Balema", "英雄壯舉"]);
labelFunc048A_00AE:
	case "Balema" attend labelFunc048A_00C8:
	message("「嗨， Balema 就是我的出生地。我小時候在那裡。那是個由白雪覆蓋的山脈和黑暗森林組成的奇妙之地。那不是輕鬆的生活，但那是個把男孩鍛造成強壯英雄的地方。那是我來到不列顛尼亞之前的事了。」");
	say();
	UI_remove_answer("Balema");
	UI_add_answer("不列顛尼亞");
labelFunc048A_00C8:
	case "不列顛尼亞" attend labelFunc048A_00DB:
	message("「嗨！我穿過一道月之門（Moongate）來到不列顛尼亞，就像你一樣。那是很多很多年前的事了。」");
	say();
	UI_remove_answer("不列顛尼亞");
labelFunc048A_00DB:
	case "英雄壯舉" attend labelFunc048A_00F5:
	message("「我以 Brom 的名義執行英雄壯舉。我做的每一件事都是為了服侍他。」");
	say();
	UI_remove_answer("英雄壯舉");
	UI_add_answer("Brom");
labelFunc048A_00F5:
	case "Brom" attend labelFunc048A_0115:
	message("「他是我的主人，也是所有 Balema 人的主人。 Brom 無所不能，如果我夠強壯，他就會幫助我。有時候我能在腦海中聽到 Brom 的聲音。」");
	say();
	UI_remove_answer("Brom");
	UI_add_answer(["主人", "聲音"]);
labelFunc048A_0115:
	case "主人" attend labelFunc048A_0128:
	message("「嗨！ Brom 是我的主人。如果他希望我做某事，我就必須做！如果他不想讓我做某事，我就不能做！」");
	say();
	UI_remove_answer("主人");
labelFunc048A_0128:
	case "聲音" attend labelFunc048A_014B:
	message("「嗨！最近我才開始在腦海中聽到他的聲音。他的聲音告訴我該怎麼做！當我走向這個洞穴時， Brom 的聲音變得更清晰了。」");
	say();
	UI_remove_answer("聲音");
	UI_add_answer(["命令", "洞穴", "更清晰"]);
labelFunc048A_014B:
	case "命令" attend labelFunc048A_0165:
	message("「當我第一次聽到 Brom 的聲音時，他告訴我應該跟隨他。但當聲音是從你腦海裡傳來時，要怎麼跟隨一個你看不見的人的聲音呢？」");
	say();
	UI_remove_answer("命令");
	UI_add_answer("跟隨");
labelFunc048A_0165:
	case "跟隨" attend labelFunc048A_0182:
	message("「這對我來說非常、非常困難，但過了一段時間我找到了方法。當我越靠近這個洞穴周圍的營地，聲音就越大。當我遠離時，聲音就越小。」");
	say();
	UI_remove_answer("跟隨");
	UI_add_answer(["營地"]);
labelFunc048A_0182:
	case "營地" attend labelFunc048A_01CB:
	message("「對像我這樣訓練有素的戰士來說，溜進那些關押 Brom 的人的營地非常簡單。他們根本不構成任何威脅。所以危險一定是在下面等著。但我找不到它！」");
	say();
	if (!var0005) goto labelFunc048A_0198;
	message("「我看到你戴著那個徽章，你是偽裝成他們其中之一潛入這裡的。非常聰明，聖者！」");
	say();
labelFunc048A_0198:
	if (!var0002) goto labelFunc048A_01BD;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 悄悄對你說：「這個人腦袋很靈光，是吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_01BD:
	UI_remove_answer("營地");
	UI_add_answer("危險");
labelFunc048A_01CB:
	case "危險" attend labelFunc048A_021F:
	message("「迄今為止我在這裡找到的唯一危險，是一個女戰士。她很漂亮。當我去和她說話時，她用劍的劍柄打了我的頭。我醒來後她已經不見了。我打賭她以為已經殺了我，但我的頭比那個硬多了。我甚至沒有受傷。」");
	say();
	if (!var0003) goto labelFunc048A_0218;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 悄聲對你說：「幸好 Gorn 是被打在他唯一沒有感覺的地方——他的腦袋！」*");
	say();
	UI_show_npc_face(0xFF76, 0x0000);
	message("「嗨，你們在那邊竊竊私語什麼？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「哦，沒什麼。完全沒什麼。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_0218:
	UI_remove_answer("危險");
labelFunc048A_021F:
	case "洞穴" attend labelFunc048A_0239:
	message("「我知道 Brom 在這個洞穴的某處，在我找到他之前我不會離開這裡！」");
	say();
	UI_remove_answer("洞穴");
	UI_add_answer("找到Brom");
labelFunc048A_0239:
	case "更清晰" attend labelFunc048A_0253:
	message("「我越靠近這個洞穴，就越常聽到 Brom 的聲音。但最近他說的話對我來說非常、非常奇怪！」");
	say();
	UI_remove_answer("更清晰");
	UI_add_answer("奇怪");
labelFunc048A_0253:
	case "奇怪" attend labelFunc048A_026D:
	message("「他說的第一件奇怪的事是『致力合一（Strive For Unity）』。我說，嗨，這正是我在執行英雄壯舉的原因。然後 Brom 又說了另一件奇怪的事。」");
	say();
	UI_remove_answer("奇怪");
	UI_add_answer("更奇怪的事");
labelFunc048A_026D:
	case "更奇怪的事" attend labelFunc048A_0287:
	message("「接下來 Brom 的聲音對我說『信任我的兄弟們（Trust My Brothers）』。這很奇怪，因為我所有的兄弟都在 Balema ，而且我無論如何都不會信任他們。他們都比我大，而且老是欺負我。但就連那個都比不上下一件奇怪的事。」");
	say();
	UI_remove_answer("更奇怪的事");
	UI_add_answer("下一件奇怪的事");
labelFunc048A_0287:
	case "下一件奇怪的事" attend labelFunc048A_02CC:
	message("「 Brom 的聲音告訴我『價值先行於報償（Worldliness Receives Award）』。我思考那句話很長時間了，還是沒想通。但我不會放棄，直到找到 Brom 。」");
	say();
	if (!var0004) goto labelFunc048A_02BE;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「一個神秘的聲音在某人的腦海中說話，宣揚友誼會的理念。聽起來是否很熟悉，");
	message(var0000);
	message("？」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF76, 0x0000);
labelFunc048A_02BE:
	UI_remove_answer("下一件奇怪的事");
	UI_add_answer("找到Brom");
labelFunc048A_02CC:
	case "找到Brom" attend labelFunc048A_0308:
	message("「你願意幫我找到 Brom 嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc048A_02F0;
	message("Gorn 若有所思地愣了一下。他把手放到耳邊，像是在聆聽什麼。他回過頭看著你，臉上露出震驚的表情。「我剛剛聽到了 Brom 的聲音，他告訴我不能信任你！你從我身邊走開，聖者！我以為你是我的朋友！我不想再和你說話了！」*");
	say();
	gflags[0x02D2] = true;
	abort;
	goto labelFunc048A_0301;
labelFunc048A_02F0:
	message("Gorn 臉上帶著困惑的表情。「你為什麼不幫我找 Brom ？你是覺得這全是某種把戲，還是說我應該繼續獨自尋找 Brom ？」");
	say();
	UI_add_answer(["繼續找Brom", "這全是某種把戲"]);
labelFunc048A_0301:
	UI_remove_answer("找到Brom");
labelFunc048A_0308:
	case "繼續找Brom" attend labelFunc048A_0323:
	message("「如果你這樣想的話。那我就繼續獨自一人搜尋 Brom 了。祝你在你的任務上好運，聖者。再會！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF76), 0x000C);
	abort;
labelFunc048A_0323:
	case "這全是某種把戲" attend labelFunc048A_0334:
	message("Gorn 若有所思地愣了一下。他把手放到耳邊，像是在聆聽什麼。他帶著震驚的表情看著你。「我剛剛聽到了 Brom 的聲音，他說我不該信任你！我以為你是我的朋友，聖者！走開！我不想再和你說話了！」*");
	say();
	gflags[0x02D2] = true;
	abort;
labelFunc048A_0334:
	case "Iriale" attend labelFunc048A_0347:
	message("「那是一直守衛這個地方的那個女戰士的名字。我已經和她打了一仗。她是個強悍的戰士！我必須找到她，讓她告訴我 Brom 在哪裡！」");
	say();
	UI_remove_answer("Iriale");
labelFunc048A_0347:
	case "告辭" attend labelFunc048A_0352:
	goto labelFunc048A_0355;
labelFunc048A_0352:
	goto labelFunc048A_007F;
labelFunc048A_0355:
	endconv;
	message("「直到我們再次相遇，聖者。」*");
	say();
	return;
}


