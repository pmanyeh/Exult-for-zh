#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08C7 0x8C7 ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFF17, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	message("當演員們就位並戴上面具時，你坐下來觀看演出。*");
	say();
	if (!var0001) goto labelFunc08C7_0045;
	UI_show_npc_face(0xFFFE, 0x0000);
	message(" Spark 對你輕聲說道：「我真希望有家糖果店有賣糖蘋果！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF17, 0x0000);
labelFunc08C7_0045:
	message("音樂響起，戲劇開演，Paul 走上舞台中央並向觀眾致意。");
	say();
	message("「歡迎來到我們的故事，~一個如此寫實的故事。~這是一個悲劇故事~一個男人失去了他的妻子。");
	say();
	message("「但故事不必悲傷~當友誼會在此。~內在力量的三位一體 (Triad) ~讓人毫無理由恐懼。」*");
	say();
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFF15, 0x0000);
	message(" Paul 退下，Dustin 登台。Meryl 躺在他面前的地上，擺出死一般的姿勢。");
	say();
	message("「這是宿命！這是絕望！這是死亡！~我心愛的妻子離我而去！~疾病將她奪走~只留給我一首輓歌。」");
	say();
	message(" Dustin 用雙手抱頭，假裝在抽泣。當他抽泣時，Meryl 以幽靈般的方式從她的「死亡」中甦醒，然後對 Dustin 說話。*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("「我的丈夫，我的愛人！~不要絕望！這並非宿命！~你將超越~這一切憂鬱與陰霾！」*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("「是誰在對我說話？~難道會是她？~還是我真的瘋了？~但除了她——還能——是誰？」*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("「我的丈夫，你必須傾聽。~你的救贖就在你的掌握之中。~你只需尋找他們——~那些能夠提供幫助的人—— 友誼會！」*");
	say();
	UI_remove_npc_face(0xFF16);
	UI_show_npc_face(0xFF15, 0x0000);
	message(" Meryl 緩緩飄下舞台，留下 Dustin 獨自一人。");
	say();
	message("「友誼會，她說？~但我為何會需要它？~我有我的八大美德和我的治療師~有了這些就再也不需要別的了！」*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message(" Paul 與戴著不同面具的 Meryl 一同登台。");
	say();
	message("「但那就是你錯的地方！~ 友誼會的存在就是為了幫助你！~內在力量的三位一體 (Triad)  就在這裡~帶給你一種團結感！」");
	say();
	message("「現在加入我們，你就會明白。~加入你的兄弟與我們的計畫~來推廣我們團體的宗旨——~你將會成為一個更好的人。」");
	say();
	message("此時，一段精心編排的默劇揭示了 Dustin 如何加入友誼會，從由 Paul 飾演的「分部領袖」手中接過他的徽章，並接受來自 Meryl 的祝賀。");
	say();
	message("「時刻爭取團結，~並在所有逆境中信任你的兄弟，~因為價值先於你自己的回報~聽我們的話——這必定會實現！」*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("「我願將我一半的財富奉獻給你！~我會聽從你的吩咐然後等待。~我的回報總有一天會到來~並將我從可怕的命運中解脫。」");
	say();
	message("Dustin 假裝給了 Paul 一些錢。Paul 退場，接著 Dustin 躺在舞台上假裝入睡。");
	say();
	message("片刻之後，Meryl 登台，圍繞著 Dustin 的身軀跳舞，並在他身上灑下某種閃閃發光的粉末。*");
	say();
	if (!var0000) goto labelFunc08C7_010D;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message(" Iolo 對你輕聲說道：「我特別喜歡這視覺效果。你不覺得劇本有點弱嗎？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_010D:
	message(" Meryl 離開舞台，Dustin『醒了過來』。瞧啊！他發現他睡覺的地方旁有一個袋子。打開一看，他發現了一捆金幣！");
	say();
	message("「我向 Lord British 宣告！~這是我的回報！憑空而來！~我晚上聽到的聲音是對的~我將不再在乎我那悲慘的生活！");
	say();
	message("「那聲音在夢中降臨於我~那是我那如此美妙的『內在』聲音。~我現在有了一位伴侶與供應者，~以及一位我所追隨的主人。」");
	say();
	message("演員所挑選的詞彙——『伴侶』、『供應者』和『主人』——讓你感到震驚。你意識到你以前曾聽過這些詞。*");
	say();
	if (!var0001) goto labelFunc08C7_0142;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這真的很糟糕。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_0142:
	message(" Paul 和 Meryl 在舞台上與 Dustin 會合，他們一起手拉著手。*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message("「友誼會能賦予你目標~加入是唯一的選擇~投身於我們正義的事業~並找到你的內在聲音。」");
	say();
	message("此時，演員們鞠躬謝幕，你意識到演出結束了。你給予他們禮貌性的掌聲。*");
	say();
	gflags[0x000A] = true;
	if (!var0000) goto labelFunc08C7_017E;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「他們說的那個聲音是什麼意思？我不確定我聽得懂。這真是一齣令人困惑的戲。我一點也不喜歡。我們浪費了時間和金錢！這是我最後一次讓你來決定我們該怎麼娛樂自己了！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08C7_017E:
	abort;
	return;
}