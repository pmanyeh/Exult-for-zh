#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A5 0x8A5 ();

void Func04FC object#(0x4FC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04FC_01BC;
	UI_show_npc_face(0xFF04, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF0C);
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02C9])) goto labelFunc04FC_0050;
	message("你看到一個看起來相當矜持的石像鬼。");
	say();
	gflags[0x02C9] = true;
	goto labelFunc04FC_0054;
labelFunc04FC_0050:
	message("Kallibrus 微笑著對你點頭致意。");
	say();
labelFunc04FC_0054:
	converse attend labelFunc04FC_01B1;
	case "姓名" attend labelFunc04FC_0071:
	message("「被稱為 Kallibrus 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Kallibrus");
labelFunc04FC_0071:
	case "Kallibrus" attend labelFunc04FC_0092:
	message("「那不是我真正的名字。這個名字是 Cairbre 給我的，他發不出我的石像鬼名字。」");
	say();
	UI_remove_answer("Kallibrus");
	if (!(!var0002)) goto labelFunc04FC_0092;
	UI_add_answer("Cairbre");
labelFunc04FC_0092:
	case "職業" attend labelFunc04FC_00B6:
	message("「大部分時間都作為傭兵工作。現在正在待業中。幫助朋友 Cosmo 尋找獨角獸。」");
	say();
	gflags[0x02E0] = true;
	UI_remove_answer("職業");
	UI_add_answer(["Cosmo", "獨角獸"]);
labelFunc04FC_00B6:
	case "Cairbre" attend labelFunc04FC_00F6:
	message("「已經成為夥伴很多、很多年了。而且被束縛的時間更長！」");
	say();
	if (!var0001) goto labelFunc04FC_00EB;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「他，呃，說的束縛是指，我們是非常好的朋友。」他轉向石像鬼。~~「我告訴過你要小心用詞。如果你不說清楚，可能會引發很多虛假的謠言。」~~石像鬼羞怯地點點頭。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_00EB:
	var0002 = true;
	UI_remove_answer("Cairbre");
labelFunc04FC_00F6:
	case "Cosmo" attend labelFunc04FC_0117:
	message("「認識他很多年了，但沒有認識 Cairbre 那麼久。是個好朋友。」");
	say();
	UI_remove_answer("Cosmo");
	if (!(!var0002)) goto labelFunc04FC_0117;
	UI_add_answer("Cairbre");
labelFunc04FC_0117:
	case "獨角獸" attend labelFunc04FC_0137:
	message("「不確定，但認為這和女人有關，而且，該怎麼說……性交？」");
	say();
	UI_remove_answer("獨角獸");
	UI_add_answer(["女人", "性交"]);
labelFunc04FC_0137:
	case "性交" attend labelFunc04FC_0161:
	message("「對這個詞一無所知。是指類似繁殖的意思嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04FC_0156;
	message("「告訴你石像鬼的繁殖方式似乎和人類不同，但解釋得太糟糕了，沒有什麼用。」");
	say();
	goto labelFunc04FC_015A;
labelFunc04FC_0156:
	message("「感到相當困惑。」他聳了聳肩。");
	say();
labelFunc04FC_015A:
	UI_remove_answer("性交");
labelFunc04FC_0161:
	case "女人" attend labelFunc04FC_01A3:
	message("「我知道這與性別差異有關，但在石像鬼中沒有這種事。相信有一個特定的人類……女人……派他來這裡。~~「曾聽 Cosmo 說過『愛』，但 Cairbre 聲稱沒有這種東西。不明白，但無論如何都會幫助朋友。」");
	say();
	if (!var0001) goto labelFunc04FC_019C;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("「這就是我喜歡他的地方，");
	message(var0003);
	message("，忠誠到底！」他說著，拍了拍石像鬼的肩膀。*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_019C:
	UI_remove_answer("女人");
labelFunc04FC_01A3:
	case "告辭" attend labelFunc04FC_01AE:
	goto labelFunc04FC_01B1;
labelFunc04FC_01AE:
	goto labelFunc04FC_0054;
labelFunc04FC_01B1:
	endconv;
	message("「期待下次見面，");
	message(var0003);
	message("，」他說。*");
	say();
labelFunc04FC_01BC:
	if (!(event == 0x0000)) goto labelFunc04FC_01C7;
	Func08A5();
labelFunc04FC_01C7:
	return;
}


