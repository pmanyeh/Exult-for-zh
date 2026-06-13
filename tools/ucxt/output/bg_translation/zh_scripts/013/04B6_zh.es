#game "blackgate"
// externs
extern void Func089D 0x89D (var var0000, var var0001, var var0002);
extern void Func092F 0x92F (var var0000);

void Func04B6 object#(0x4B6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B6_01E6;
	UI_show_npc_face(0xFF4A, 0x0000);
	var0000 = 0xFF4A;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0247])) goto labelFunc04B6_003A;
	message("一位友善的石像鬼向你打招呼。");
	say();
	gflags[0x0247] = true;
	goto labelFunc04B6_003E;
labelFunc04B6_003A:
	message("「看到你過得很好，人類，」 Inmanilem 說。");
	say();
labelFunc04B6_003E:
	converse attend labelFunc04B6_01E1;
	case "姓名" attend labelFunc04B6_0061:
	message("「我叫做 Inmanilem ，人類。想知道關於 Terfin 的情報嗎？」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["情報", "Inmanilem"]);
labelFunc04B6_0061:
	case "Inmanilem" attend labelFunc04B6_0074:
	message("「在石像鬼語中是『治癒者』的意思。」");
	say();
	UI_remove_answer("Inmanilem");
labelFunc04B6_0074:
	case "職業" attend labelFunc04B6_0094:
	message("「是治療師。」");
	say();
	UI_add_answer("治療");
	if (!gflags[0x0244]) goto labelFunc04B6_0094;
	UI_add_answer("衝突");
labelFunc04B6_0094:
	case "治療" attend labelFunc04B6_00DF:
	var0001 = UI_part_of_day();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc04B6_00D4;
	Func089D(0x0019, 0x000A, 0x01AE);
	goto labelFunc04B6_00D8;
labelFunc04B6_00D4:
	message("「感到抱歉，但現在正忙於其他事情。請你有空再來，我才有時間為你治療。」");
	say();
labelFunc04B6_00D8:
	UI_remove_answer("治療");
labelFunc04B6_00DF:
	case "情報" attend labelFunc04B6_0102:
	message("「告訴你去找 Draxinusom ，人類，或是 Forbrak 。他們有許多關於 Terfin 的情報。」");
	say();
	UI_remove_answer("情報");
	UI_add_answer(["Draxinusom", "Forbrak", "Terfin"]);
labelFunc04B6_0102:
	case "Forbrak" attend labelFunc04B6_0115:
	message("「是酒館老闆。身心都非常強壯。」");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B6_0115:
	case "Terfin" attend labelFunc04B6_012F:
	message("「是石像鬼的城市。是許多石像鬼居住的兩個城鎮之一。喜歡這裡，」他笑著補充。");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer("哪一個？");
labelFunc04B6_012F:
	case "哪一個？" attend labelFunc04B6_0142:
	message("「告訴你另一個叫 Vesper 。位於 Britannia 東北方的沙漠中。不像這裡，那裡也有人類居住。」");
	say();
	UI_remove_answer("哪一個？");
labelFunc04B6_0142:
	case "Draxinusom" attend labelFunc04B6_015C:
	message("「是我們的領袖。住在知識大廳 (Hall of Knowledge) 附近。」");
	say();
	UI_remove_answer("Draxinusom");
	UI_add_answer("大廳");
labelFunc04B6_015C:
	case "大廳" attend labelFunc04B6_0176:
	message("「是保存三個單一性祭壇的地方。」");
	say();
	UI_remove_answer("大廳");
	UI_add_answer("祭壇");
labelFunc04B6_0176:
	case "祭壇" attend labelFunc04B6_0196:
	message("「是熱情、控制和勤勉。這是大多數石像鬼視為我們存在關鍵的價值觀。」");
	say();
	UI_remove_answer("祭壇");
	UI_add_answer(["大多數石像鬼", "鑰匙"]);
labelFunc04B6_0196:
	case "鑰匙" attend labelFunc04B6_01A9:
	message("他用力地點點頭。「非常類似於人類美德的概念。」");
	say();
	UI_remove_answer("鑰匙");
labelFunc04B6_01A9:
	case "大多數石像鬼" attend labelFunc04B6_01BC:
	message("「現在有了一個競爭對手——友誼會。不知道它是好是壞，但我知道我不會追隨它！」");
	say();
	UI_remove_answer("大多數石像鬼");
labelFunc04B6_01BC:
	case "衝突" attend labelFunc04B6_01D3:
	message("「只知道一個不滿的石像鬼。一直都是個麻煩，但現在變得充滿敵意和攻擊性。名字叫做園丁 Silamo 。~~建議你去跟 Silamo 談談。」");
	say();
	UI_remove_answer("衝突");
	gflags[0x023D] = true;
labelFunc04B6_01D3:
	case "告辭" attend labelFunc04B6_01DE:
	goto labelFunc04B6_01E1;
labelFunc04B6_01DE:
	goto labelFunc04B6_003E;
labelFunc04B6_01E1:
	endconv;
	message("「祝你身體健康，人類。」*");
	say();
labelFunc04B6_01E6:
	if (!(event == 0x0000)) goto labelFunc04B6_01F4;
	Func092F(0xFF4A);
labelFunc04B6_01F4:
	return;
}


