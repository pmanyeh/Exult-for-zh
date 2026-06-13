#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func048C object#(0x48C) ()
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

	if (!(event == 0x0001)) goto labelFunc048C_02D6;
	UI_show_npc_face(0xFF74, 0x0000);
	if (!(!gflags[0x01B4])) goto labelFunc048C_001E;
	message("這名不死生物空洞的目光，望向了你。顯然它察覺到了你的存在，但是你非常確定它並未看見你。*");
	say();
	abort;
labelFunc048C_001E:
	if (!gflags[0x01CA]) goto labelFunc048C_002D;
	var0000 = "Paulette";
	goto labelFunc048C_0033;
labelFunc048C_002D:
	var0000 = "酒館女侍";
labelFunc048C_0033:
	var0001 = "這不能全怪他";
	var0002 = false;
	if (!gflags[0x0198]) goto labelFunc048C_004A;
	UI_add_answer("犧牲");
labelFunc048C_004A:
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(0xFF74);
	if (!(!gflags[0x01AA])) goto labelFunc048C_0096;
	if (!((var0003 == 0x0000) || (var0003 == 0x0001))) goto labelFunc048C_0096;
	if (!(var0004 == 0x000E)) goto labelFunc048C_0086;
	message("你試著與那肥胖的鬼魂攀談，但他似乎對你、以及周遭的一切都顯得極為疏離。*");
	say();
	abort;
	goto labelFunc048C_0096;
labelFunc048C_0086:
	if (!(!(var0004 == 0x0010))) goto labelFunc048C_0096;
	message("這位發福的幽靈看起來有些不安，他說話有點含糊不清，「不好意思，大人。但我頭痛得厲害。你介意我們晚點，再繼續這個小小的談話嗎？」~~他開始用雙手揉著太陽穴。*");
	say();
	abort;
labelFunc048C_0096:
	var0005 = Func08F7(0xFF70);
	if (!var0005) goto labelFunc048C_00C8;
	message("「喔，你好，Rowena 女士。很高興再次見到妳。看到妳美麗的容顏，讓我這老頭子的心裡照進了一縷陽光。」他微笑著說。*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("她優雅地屈膝行禮並報以微笑。~~「你好， Markham 。很高興看到這些可怕的事情都無法阻止你對一位女士的讚美。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_00C8:
	var0006 = Func08F7(0xFF6D);
	if (!var0006) goto labelFunc048C_00FE;
	message("「喔，呃，你好啊，鎮長。我還以為你一直躲在鎮政廳裡呢。嗯，呃，很高興再次見到你。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「是的，嗯，也很高興再次見到你。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF74, 0x0000);
	gflags[0x01BD] = true;
labelFunc048C_00FE:
	if (!(!gflags[0x01C4])) goto labelFunc048C_0110;
	message("這名肥胖的不死酒保帶著一個寬闊、可怕的笑容向你打招呼。「來吧，陌生人。坐在老 Markham 旁邊，告訴我你的旅行見聞。我這裡已經很少有訪客了。」");
	say();
	gflags[0x01C4] = true;
	goto labelFunc048C_0114;
labelFunc048C_0110:
	message("Markham 向你打招呼，喝下了一大杯店裡的烈酒。「歡迎，我的朋友。跟我坐一會兒，用你那奇妙的機智來點綴我永恆的時光吧。」他帶著只有半腐爛的人才能擁有的迷人笑容微笑著。");
	say();
labelFunc048C_0114:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc048C_0124:
	converse attend labelFunc048C_02D5;
	case "姓名" attend labelFunc048C_018A:
	message("這位發福的殭屍用手背擦了擦嘴。「我是 Markham 。酒桶的 Markham 。」他拍了拍自己帶著的一大桶酒。");
	say();
	var0007 = Func08F7(0xFF6F);
	if (!(var0007 && gflags[0x01B9])) goto labelFunc048C_0183;
	if (!var0002) goto labelFunc048C_0153;
	UI_remove_npc_face(0xFF6E);
labelFunc048C_0153:
	if (!(!gflags[0x01A4])) goto labelFunc048C_0183;
	UI_show_npc_face(0xFF6F, 0x0000);
	message("可愛的 ");
	message(var0000);
	message(" 走了過來，拍了拍 Markham 相當大的肚子。「是的，他就是酒桶的 Markham ，沒錯。」她對著這位老先生甜甜地微笑。*");
	say();
	UI_remove_npc_face(0xFF6F);
	UI_show_npc_face(0xFF74, 0x0000);
	message("「夠了！」 Markham 拍了拍這位漂亮年輕女子的幽靈臀部。~~ 「做點有用的事，給我拿條鹿腿來。」她轉身，咯咯地笑著。他用一種歡樂的表情看著你，「我真不知道該拿那女孩怎麼辦。」");
	say();
labelFunc048C_0183:
	UI_remove_answer("姓名");
labelFunc048C_018A:
	case "職業" attend labelFunc048C_01A3:
	message("「為什麼，我經營這家優良的場所，烈酒之桶（Keg O' Spirits）。」有那麼一瞬間他變得嚴肅起來。「這個地方曾經吸引了來自不列顛尼亞各地的客人，石像鬼和人類都有。直到那場大火為止。」");
	say();
	UI_add_answer(["烈酒之桶", "大火"]);
labelFunc048C_01A3:
	case "大火" attend labelFunc048C_0209:
	message("他看起來很不自在，「 Caine 把鎮上炸得七零八落，現在我們都被困在這裡，成了那個混蛋 Horance 的奴隸。」他呆滯的瞳孔中出現了微小的藍色火焰，當他恢復鎮定時又熄滅了。");
	say();
	UI_add_answer(["Caine", "Horance"]);
	var0008 = Func08F7(0xFF6E);
	if (!(var0008 && gflags[0x01BA])) goto labelFunc048C_01F8;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「拜託， Markham 。對 Caine 有點同情心吧。當他犯下那個致命的錯誤時，他正試圖創造一些東西來拯救這個鎮。」這個蒼白的幽靈看起來深受困擾。");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
	var0002 = true;
	var0001 = "你說得對， Quen，";
labelFunc048C_01F8:
	message("「喔，我想");
	message(var0001);
	message("當他把傳說中的地獄之火召喚到我們頭上時，他其實是想幫我們。但年紀輕輕就死掉，真的讓我感到很氣憤。」他流氓般的微笑再次照亮了他那幽靈般的面孔。");
	say();
	UI_remove_answer("大火");
labelFunc048C_0209:
	case "Caine" attend labelFunc048C_0223:
	message("他那毀容的面孔上露出了厭惡的神情。「那個受折磨的靈魂在他愚蠢錯誤造成的坑洞裡遊蕩。不過我不會靠近他，他有點瘋瘋癲癲的，你知道的。」他從身邊的酒桶裡重新倒滿了他的馬克杯，並一口氣喝下了大部分的酒。");
	say();
	UI_add_answer("受折磨的靈魂");
	UI_remove_answer("Caine");
labelFunc048C_0223:
	case "受折磨的靈魂" attend labelFunc048C_023D:
	message("「這只是我們其他在 Skara Brae 的人對他的稱呼——受折磨者（The Tortured One），」他尷尬地笑了笑。");
	say();
	UI_remove_answer("受折磨的靈魂");
	UI_add_answer("Skara Brae");
labelFunc048C_023D:
	case "Skara Brae" attend labelFunc048C_0250:
	message("「這就是你所在的島嶼的名字。」他搖了搖頭。");
	say();
	UI_remove_answer("Skara Brae");
labelFunc048C_0250:
	case "Horance" attend labelFunc048C_028C:
	message("「我在 Skara Brae 的這些年裡，他一直都是個瘋子。伴隨著他那些愚蠢的押韻詩和他瘋狂的笑聲。~~「有一天晚上，我們所有人都聽到了雷聲，儘管星空中連一朵雲都沒有，我似乎還記得有滿月……」他的臉上露出深思的表情。「但我剛才說到，先是一陣雷聲，然後從北面岬角的那座塔裡傳來低沉、黑暗的笑聲—— Horance 的黑暗塔。」說完這段話後，他沉默了片刻。");
	say();
	if (!var0002) goto labelFunc048C_0281;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("這個蒼白的幽靈向前移動，並低聲說道：「當這些事件發生時，我已經生活在死者的半世界裡了，從那以後，我感覺到有一股奇怪的拉力從塔裡傳來。*」");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_0281:
	message("稍微喝了一口後，他繼續說：「然後，更糟的是……我出去查看母牛時，聽到了一種類似呻吟的聲音。聲音從東邊傳來，所以我朝那邊看，你知道的，那裡是墓地，你猜我看到了什麼？~~「我來告訴你我看到了什麼。墳墓裂開了，就像裡面的人有地方要去一樣。」他睜大眼睛，又喝了一口酒。");
	say();
	UI_remove_answer("Horance");
labelFunc048C_028C:
	case "烈酒之桶" attend labelFunc048C_029F:
	message("他看起來真的很傷心地說：「這個地方曾經是我的驕傲和喜悅。這酒桶在不列顛尼亞各地都很出名，甚至在其他一些地方也是。嗯，現在它看起來不怎麼樣了，但在它的全盛時期，它接待過貴族、騎士、吟遊詩人和商人。當然，也少不了一些流氓地痞。」他對你眨了眨眼。他的精神似乎是不屈不撓的。");
	say();
	UI_remove_answer("烈酒之桶");
labelFunc048C_029F:
	case "犧牲" attend labelFunc048C_02C5:
	if (!(!gflags[0x019A])) goto labelFunc048C_02B9;
	message("你敘述了進入靈魂之井需要一個犧牲者。聽完後， Markham 似乎陷入了長時間的沉思。~~「所以，你是想讓我像隻三月兔一樣發瘋，直接跳進那個……靈魂之井？」他難以置信地看著你。~~「聽著。自從我還是個小夥子以來，我就沒有過那種勇氣了。從那以後我也長了點腦子。你得去別處尋找你的犧牲者了。」");
	say();
	gflags[0x019A] = true;
	goto labelFunc048C_02BE;
labelFunc048C_02B9:
	message("「好了。我已經告訴過你了。我不感興趣。」他對你的堅持看起來有點不高興。*");
	say();
	abort;
labelFunc048C_02BE:
	UI_remove_answer("犧牲");
labelFunc048C_02C5:
	case "告辭" attend labelFunc048C_02D2:
	message("「喔，你這就要走了嗎？那好吧，保重。小心那些行走的死者。他們中有些人對自己的狀態不太滿意，而且對於向誰抱怨也不太挑剔。」*");
	say();
	abort;
labelFunc048C_02D2:
	goto labelFunc048C_0124;
labelFunc048C_02D5:
	endconv;
labelFunc048C_02D6:
	if (!(event == 0x0000)) goto labelFunc048C_02DF;
	abort;
labelFunc048C_02DF:
	return;
}


