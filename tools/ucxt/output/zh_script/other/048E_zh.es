#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func08F0 0x8F0 ();
extern void Func08EF 0x8EF ();

void Func048E object#(0x48E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc048E_025C;
	UI_show_npc_face(0xFF72, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0127, 0x0000, 0xFE99);
	var0001 = Func0909();
	var0002 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0003 = false;
	if (!gflags[0x01CE]) goto labelFunc048E_0050;
	message("Trent 瞪著你，他的眼神中透露出一種強烈的情感，讓你對他的態度毫不懷疑。「如果我認為你會在接到通知的那一刻就跑掉，我就不會請求你幫我救出我的摯愛了。~~「現在，請拿著這個籠子去找 Mordra 。她會教你如何使用它。」他的態度變得溫和起來，「我已經把與 Rowena 重聚的唯一機會交到你可靠的手中了。」*");
	say();
	gflags[0x01CE] = false;
	abort;
labelFunc048E_0050:
	if (!(gflags[0x01CF] && (!gflags[0x01A8]))) goto labelFunc048E_0060;
	message("「拜託，當我建造這個籠子時不要打擾我，因為我滿腦子想的都是要摧毀那個邪惡的 Horance ！」他繼續建造著靈魂籠。*");
	say();
	abort;
labelFunc048E_0060:
	if (!(!gflags[0x01B6])) goto labelFunc048E_0079;
	if (!var0002) goto labelFunc048E_0074;
	message("這個憤怒的高大幽靈無視你的存在，繼續在一個奇怪的鐵籠上敲打著。*");
	say();
	goto labelFunc048E_0078;
labelFunc048E_0074:
	message("這個憤怒的高大幽靈無視你的存在，顯然正在尋找某樣東西。*");
	say();
labelFunc048E_0078:
	abort;
labelFunc048E_0079:
	if (!var0000) goto labelFunc048E_0086;
	UI_add_answer("戒指");
labelFunc048E_0086:
	if (!gflags[0x0198]) goto labelFunc048E_0093;
	UI_add_answer("犧牲");
labelFunc048E_0093:
	if (!gflags[0x01A6]) goto labelFunc048E_00A6;
	UI_show_npc_face(0xFF72, 0x0001);
	Func08F0();
labelFunc048E_00A6:
	if (!gflags[0x01A5]) goto labelFunc048E_00BD;
	UI_show_npc_face(0xFF72, 0x0001);
	gflags[0x01C1] = false;
	Func08EF();
labelFunc048E_00BD:
	if (!(!gflags[0x01C7])) goto labelFunc048E_00CF;
	message("你在幽靈鍛造爐的火光中看到一個肌肉發達、留著大鬍子的高大幽靈。他沒有注意到你的靠近。");
	say();
	gflags[0x01C7] = true;
	goto labelFunc048E_00EE;
labelFunc048E_00CF:
	if (!var0002) goto labelFunc048E_00E3;
	message("Trent 繼續在那個形狀奇怪的鐵籠上工作著。");
	say();
	UI_add_answer("鐵籠");
	goto labelFunc048E_00EE;
labelFunc048E_00E3:
	message("Trent 似乎在尋找某樣東西。");
	say();
	UI_add_answer("某樣東西");
labelFunc048E_00EE:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc048E_00FE:
	converse attend labelFunc048E_025B;
	case "姓名" attend labelFunc048E_012C:
	message("一道由濃密眉毛突顯的深深皺紋，刻畫在幽靈疲憊的額頭上。他沒有從工作中移開視線。「我是 Trent 。現在，請讓我繼續工作。」");
	say();
	if (!var0002) goto labelFunc048E_0125;
	message("他繼續在一個形狀奇怪的鐵籠上敲打著。");
	say();
	if (!(!var0003)) goto labelFunc048E_0125;
	UI_add_answer("鐵籠");
labelFunc048E_0125:
	UI_remove_answer("姓名");
labelFunc048E_012C:
	case "某樣東西" attend labelFunc048E_0139:
	message("「我找不到那個鐵籠了！」他大喊著。「一定是哪個笨蛋把它拿走了！當我查出是誰做的，還有它在哪裡時，那個笨蛋一定會為了把它從我的店裡拿走而後悔莫及！」*");
	say();
	abort;
labelFunc048E_0139:
	case "職業" attend labelFunc048E_014C:
	message("「你瞎了嗎！你看不出我是個鐵匠嗎？」他似乎不是那種喜歡閒聊的人。");
	say();
	UI_remove_answer("職業");
labelFunc048E_014C:
	case "鐵籠" attend labelFunc048E_0170:
	message("憤怒幾乎以實體的形式從這個高大的幽靈身上散發出來。他從籠子上抬起頭，你看到火光不是從鍛造爐裡發出的，而是從他的眼睛裡發出的。「我造這個籠子是為了摧毀那個混蛋 Horance ，他從我身邊奪走了我的妻子。」~~有一瞬間，你以為他要向你撲過來，然後他伴隨著一聲沉重的嘆息鬆開了拳頭，又回到了他的工作中。");
	say();
	var0003 = true;
	UI_remove_answer("鐵籠");
	UI_add_answer(["Horance", "妻子"]);
labelFunc048E_0170:
	case "Horance" attend labelFunc048E_0183:
	message("當你說話時，他全身都繃緊了。~~「 Horance ……」這個詞聽起來就像一句詛咒。「我會親眼看著他那邪惡的靈魂燃燒。然後當他可憐地哭喊著求饒時，我會大笑。」出於某種原因，你覺得你寧願不要聽到那種笑聲。");
	say();
	UI_remove_answer("Horance");
labelFunc048E_0183:
	case "妻子" attend labelFunc048E_01A3:
	message("一滴滾燙的眼淚從幽靈的眼角滑落，掉在鐵籠一塊燒紅的鐵上。它發出嘶嘶聲，然後就消失了。~~「 Rowena 是我的生命，我在這個世界上唯一的快樂。」他的聲音幾乎是溫柔的，但他隨後又恢復了粗啞的語調。「他殺了她，從我這裡奪走了那份快樂。現在我只是一個空殼，燃燒著仇恨。」");
	say();
	UI_remove_answer("妻子");
	UI_add_answer(["Rowena", "被殺"]);
labelFunc048E_01A3:
	case "被殺" attend labelFunc048E_01B6:
	message("「為了試圖將她從我身邊偷走，那個邪惡的惡魔派出了他的不死僕從，將她帶到黑暗塔。當她掙扎時，那些沒有大腦的生物殺害了她。」幽靈痛苦地轉向你，「我無能為力……當她失去生命時，數量龐大的骷髏戰士將我壓倒在地。」~~瘋狂的決心在這位高大幽靈的眼中閃爍，「為此，我永遠不會原諒，也永遠不會忘記。");
	say();
	UI_remove_answer("被殺");
labelFunc048E_01B6:
	case "Rowena" attend labelFunc048E_01E3:
	message("當你說出他已故妻子的名字時，他舉起了一隻手。「請不要說那個名字。那會帶走我的一點點仇恨，而這也是我現在僅有的東西了。你難道想奪走唯一能讓我活下去的東西嗎？」他似乎沒有意識到自己其實已經不在人世了。一個奇怪的表情閃過他的臉龐。~~「我送了一個音樂盒給她作為我們的結婚禮物，現在它是我用來懷念她的唯一東西了。」他的語氣變了。~~「你看到你做了什麼嗎？！當我想起她時，我就無法工作了！」他帶著更新的熱情回到了他的工作中。");
	say();
	var0004 = UI_find_nearest(0xFE9C, 0x02F0, 0xFFFF);
	if (!var0004) goto labelFunc048E_01DC;
	message("你注意到他提到的那個音樂盒就放在附近。");
	say();
labelFunc048E_01DC:
	UI_remove_answer("Rowena");
labelFunc048E_01E3:
	case "戒指" attend labelFunc048E_024B:
	var0005 = UI_remove_party_items(0x0001, 0x0127, 0x0000, 0xFE99, false);
	message("你把戒指遞給 Trent 。一開始他沒理你。接著，認出這枚戒指後，他從你手中接過它，並將它舉在面前。他體內的某種東西崩潰了，他龐大的身軀向前癱倒。~~你讓幽靈哭了一會兒，當他結束時，你看到他的外表發生了顯著的變化。");
	say();
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF72, 0x0001);
	message("曾經在他眼中燃燒的火焰現在已經消失，取而代之的是深沉的藍色。他看起來像個全新的人，或者說，一個全新的幽靈。~~「原諒我的行為，");
	message(var0001);
	message("。我不知道我是怎麼了。我記得有火焰，但它們沒有我自己的仇恨來得猛烈。」他對這段記憶感到痛苦。~~ 「你見過她了？你見過 Rowena 了？她還在乎我。好吧，這更是完成這個靈魂籠的理由了。我們必須將她從 Horance 邪惡的魔法中解救出來。」");
	say();
	gflags[0x01A5] = true;
	UI_remove_answer(["鐵籠", "姓名", "職業", "Horance", "妻子", "Rowena", "被殺", "戒指", "告辭"]);
	gflags[0x01C1] = true;
	Func08EF();
labelFunc048E_024B:
	case "告辭" attend labelFunc048E_0258:
	message("如果他聽到了你的話，當你告辭時他忽略了這個事實。你真的對這個受了重傷的靈魂感到憐憫。*");
	say();
	abort;
labelFunc048E_0258:
	goto labelFunc048E_00FE;
labelFunc048E_025B:
	endconv;
labelFunc048E_025C:
	if (!(event == 0x0000)) goto labelFunc048E_0265;
	abort;
labelFunc048E_0265:
	return;
}


