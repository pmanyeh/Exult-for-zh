#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04A0 object#(0x4A0) ()
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

	if (!(event == 0x0001)) goto labelFunc04A0_01FB;
	UI_show_npc_face(0xFF60, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "聖者";
	var0003 = UI_is_pc_female();
	var0004 = false;
	var0005 = Func08F7(0xFF61);
	if (!var0003) goto labelFunc04A0_004D;
	var0006 = "女人";
	var0007 = "她";
	goto labelFunc04A0_0059;
labelFunc04A0_004D:
	var0006 = "男人";
	var0007 = "他";
labelFunc04A0_0059:
	if (!gflags[0x01F4]) goto labelFunc04A0_0068;
	var0008 = var0000;
	goto labelFunc04A0_006E;
labelFunc04A0_0068:
	var0008 = var0001;
labelFunc04A0_006E:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0202])) goto labelFunc04A0_0090;
	message("「你看到一個臉上帶著苦瓜臉的男人正抱著一個男嬰。當他看到你時，他的臉色亮了起來。」");
	say();
	gflags[0x0202] = true;
	goto labelFunc04A0_009A;
labelFunc04A0_0090:
	message("「又見面了，");
	message(var0008);
	message("。我像往常一樣在這裡照顧小 Mikhail。」Effrem 皺了皺眉頭。");
	say();
labelFunc04A0_009A:
	converse attend labelFunc04A0_01E2;
	case "姓名" attend labelFunc04A0_012C:
	message("「我是 Effrem，");
	message(var0001);
	message("。我只是 Moonglow 的一個普通居民。」");
	say();
	if (!(!gflags[0x01F4])) goto labelFunc04A0_0118;
	message("「你叫什麼名字？」");
	say();
	var0009 = Func090B([var0000, var0002, var0001]);
	if (!(var0009 == var0000)) goto labelFunc04A0_00EA;
	message("「你好，");
	message(var0000);
	message("。」他轉向嬰兒。~~「跟 ");
	message(var0000);
	message(" 說『你好』，Mikhail。」");
	say();
	gflags[0x01F4] = true;
labelFunc04A0_00EA:
	if (!(var0009 == var0001)) goto labelFunc04A0_010A;
	message("「好吧，");
	message(var0001);
	message("，如果你想被這樣稱呼的話。」他看著嬰兒。「這個");
	message(var0006);
	message("真是個勢利眼，不是嗎，Mikhail？」");
	say();
labelFunc04A0_010A:
	if (!(var0009 == var0002)) goto labelFunc04A0_0118;
	message("「啊哈，聖者，你是這麼說的。隨你怎麼想……」他轉向嬰兒。~~「這個可憐人想當聖者。可惜聖者只有一個，對吧 Mikhail？」");
	say();
labelFunc04A0_0118:
	UI_add_answer(["Mikhail", "Moonglow"]);
	UI_remove_answer("姓名");
labelFunc04A0_012C:
	case "職業" attend labelFunc04A0_0146:
	message("「我？我沒有職業。沒有像我妻子那樣真正的職業。我整天做的就是照顧我的小 Mikhail。」他轉過頭看著嬰兒，用一種居高臨下的語氣說。「是的，我在照顧你，不是嗎？是的，沒錯。我當然在照顧你。」他親了親男孩，然後抬頭看著你，感到有些尷尬。~~「我剛說到哪了？哦，對了。我整天都在照顧這孩子。我應該出去工作，而不是待在家裡。那應該是 Jillian 的工作。她才屬於家裡，而不是我。」");
	say();
	if (!(!var0004)) goto labelFunc04A0_0146;
	UI_add_answer("Jillian");
labelFunc04A0_0146:
	case "Mikhail" attend labelFunc04A0_0159:
	message("\"That is the name of my son. 'Tis a good name, yes?\"");
	say();
	UI_remove_answer("Mikhail");
labelFunc04A0_0159:
	case "妻子", "Jillian" attend labelFunc04A0_01A8:
	message("「我妻子？Jillian？她是個學者。而且是個非常優秀的學者。雖然我也不差。我可以做得更好，事實上。但現在爭論這個沒有意義。她有她的職業，即使我沒有。不過，我應該找份工作的。你不同意嗎，");
	message(var0001);
	message("？這不是一個男人該做的事。像這樣待在家裡帶孩子。簡直是恥辱！」~~他開始撫摸嬰兒頭上的一小撮頭髮。*");
	say();
	if (!var0005) goto labelFunc04A0_0197;
	UI_show_npc_face(0xFF61, 0x0000);
	message("「好了，Effrem！你很清楚小 Mikhail 出生時我們是怎麼約定的。你應該感到羞恥，說這種胡話。」*");
	say();
	UI_remove_npc_face(0xFF61);
	UI_show_npc_face(0xFF60, 0x0000);
	message("「他聳了聳肩，看起來相當難為情。」");
	say();
labelFunc04A0_0197:
	UI_remove_answer(["妻子", "Jillian"]);
	var0004 = true;
labelFunc04A0_01A8:
	case "Moonglow" attend labelFunc04A0_01D4:
	message("「Moonglow 怎麼了？」他聳了聳肩，「這是一個美麗的城鎮，但最近有點太擁擠了。我聽說在 Moonglow 和 Lycaeum 分開之前，這裡曾經是個好得多、也小得多的地方。~~「這個地方太大了，根本無法真正認識任何人。不過我也沒有太多機會，因為我得待在家裡照顧兒子。」他低頭看著男孩，笑了笑，並搔了搔嬰兒的鼻子。");
	say();
	if (!(!var0005)) goto labelFunc04A0_01BF;
	message("「這不是男人該做的工作。我妻子應該在家陪孩子，而不是我。我應該出去賺錢養家。那才是我想做的事！」");
	say();
labelFunc04A0_01BF:
	if (!(!var0004)) goto labelFunc04A0_01CD;
	UI_add_answer("妻子");
labelFunc04A0_01CD:
	UI_remove_answer("Moonglow");
labelFunc04A0_01D4:
	case "告辭" attend labelFunc04A0_01DF:
	goto labelFunc04A0_01E2;
labelFunc04A0_01DF:
	goto labelFunc04A0_009A;
labelFunc04A0_01E2:
	endconv;
	if (!UI_is_pc_female()) goto labelFunc04A0_01F1;
	message("「這麼快就要走了？好吧，留下我跟寶寶。走吧，離開我。就像我妻子一樣！」*");
	say();
	goto labelFunc04A0_01FB;
labelFunc04A0_01F1:
	message("「這麼快就要走了？啊，沒關係，");
	message(var0001);
	message("。我理解，你還有『真正的男人』該做的事。」*");
	say();
labelFunc04A0_01FB:
	if (!(event == 0x0000)) goto labelFunc04A0_0209;
	Func092E(0xFF60);
labelFunc04A0_0209:
	return;
}


