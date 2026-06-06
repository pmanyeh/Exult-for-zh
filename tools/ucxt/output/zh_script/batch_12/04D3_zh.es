#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092F 0x92F (var var0000);

void Func04D3 object#(0x4D3) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04D3_01CD;
	UI_show_npc_face(0xFF2D, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0290])) goto labelFunc04D3_0034;
	message("這隻石像鬼以微笑迎接你。");
	say();
	gflags[0x0290] = true;
	goto labelFunc04D3_0038;
labelFunc04D3_0034:
	message("「很高興再次見到你，人類。」 Lap-Lem 微笑著。");
	say();
labelFunc04D3_0038:
	var0000 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0003);
	if (!(gflags[0x0281] || var0000)) goto labelFunc04D3_0065;
	if (!(!gflags[0x02DF])) goto labelFunc04D3_0065;
	UI_add_answer("給護身符");
labelFunc04D3_0065:
	converse attend labelFunc04D3_01C8;
	case "姓名" attend labelFunc04D3_0094:
	message("「被你稱為 Lap-Lem 。」");
	say();
	UI_add_answer("Lap-Lem");
	UI_remove_answer("姓名");
	if (!(gflags[0x0280] && (!gflags[0x02DF]))) goto labelFunc04D3_0094;
	UI_add_answer("Blorn");
labelFunc04D3_0094:
	case "Lap-Lem" attend labelFunc04D3_00A7:
	message("「意思是『岩石之人 (rock one) 』。」");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04D3_00A7:
	case "職業" attend labelFunc04D3_00C3:
	message("「是礦工。現在是這個鎮上我族唯一的礦工。」");
	say();
	UI_add_answer(["唯一的礦工", "種族", "城鎮"]);
labelFunc04D3_00C3:
	case "種族" attend labelFunc04D3_00D6:
	message("「知道許多石像鬼在其他礦區工作，但看到 Vesper 的礦區現在只有人類。」");
	say();
	UI_remove_answer("種族");
labelFunc04D3_00D6:
	case "城鎮" attend labelFunc04D3_00F6:
	message("「被稱作 Vesper 。是除了 Britain 的部分地區之外，唯一一個石像鬼和人類共同生活的地方。告訴你這裡有更多的衝突。」他嘆了口氣。~~「想知道 Terfin 是否會是維持家園更好的選擇。」");
	say();
	UI_remove_answer("城鎮");
	UI_add_answer(["衝突", "Terfin"]);
labelFunc04D3_00F6:
	case "衝突" attend labelFunc04D3_0109:
	message("「看到人類對我們的敵意增加。可悲的是，也看到許多石像鬼開始表現出同樣的情緒。希望情況永遠不會演變成暴力。」");
	say();
	UI_remove_answer("衝突");
labelFunc04D3_0109:
	case "Terfin" attend labelFunc04D3_011C:
	message("「是石像鬼的家鄉城市。在兩百年前法典 (Codex) 被放置在虛空中，石像鬼無處居住時所建立。雖然沒有禁止，但沒有人類居住在那裡。」");
	say();
	UI_remove_answer("Terfin");
labelFunc04D3_011C:
	case "唯一的礦工" attend labelFunc04D3_012F:
	message("「告訴你還有另一個—— Anmanivas 。因為種族仇恨而離開了。現在整天和兄弟 Foranamo 坐在酒館裡。為 Anmanivas 和他兄弟感到難過，但需要工作。」他聳聳肩。~~「忍受仇恨。」");
	say();
	UI_remove_answer("唯一的礦工");
labelFunc04D3_012F:
	case "Blorn" attend labelFunc04D3_0161:
	message("「知道這起事件？");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04D3_014F;
	message("「對攻擊感到非常抱歉，但那是為了保護所有物。」他低下頭，彷彿感到羞愧。");
	say();
	goto labelFunc04D3_0153;
labelFunc04D3_014F:
	message("「感到羞恥。只希望能從人類那裡要回我的所有物。」");
	say();
labelFunc04D3_0153:
	UI_add_answer("所有物");
	UI_remove_answer("Blorn");
labelFunc04D3_0161:
	case "所有物" attend labelFunc04D3_0178:
	message("「曾擁有一個有情感價值的護身符。被人類偷走了。」他低頭看著腳。「想要拿回來。」");
	say();
	UI_remove_answer("所有物");
	gflags[0x0282] = true;
labelFunc04D3_0178:
	case "給護身符" attend labelFunc04D3_01BA:
	message("「帶著護身符回來了？」");
	say();
	var0002 = UI_remove_party_items(0x0001, 0x03BB, 0xFE99, 0x0003, false);
	if (!var0002) goto labelFunc04D3_01AF;
	Func0911(0x0032);
	message("當你把珠寶還給他時，他咧嘴大笑。~~「感謝你，人類！成為你們種族的榜樣！」");
	say();
	gflags[0x02DF] = true;
	goto labelFunc04D3_01B3;
labelFunc04D3_01AF:
	message("「哦。沒有把護身符帶在身上。」他振作起來並笑了。「稍後帶著護身符回來！」");
	say();
labelFunc04D3_01B3:
	UI_remove_answer("給護身符");
labelFunc04D3_01BA:
	case "告辭" attend labelFunc04D3_01C5:
	goto labelFunc04D3_01C8;
labelFunc04D3_01C5:
	goto labelFunc04D3_0065;
labelFunc04D3_01C8:
	endconv;
	message("「希望能很快再見到你。」*");
	say();
labelFunc04D3_01CD:
	if (!(event == 0x0000)) goto labelFunc04D3_01DB;
	Func092F(0xFF2D);
labelFunc04D3_01DB:
	return;
}


