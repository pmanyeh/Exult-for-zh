#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func088F 0x88F ();
extern void Func092E 0x92E (var var0000);

void Func04DE object#(0x4DE) ()
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

	if (!(event == 0x0001)) goto labelFunc04DE_026C;
	UI_show_npc_face(0xFF22, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02AB])) goto labelFunc04DE_0042;
	message("你看到一位英俊、肌肉發達，帶著些許調皮氣質的男人。");
	say();
	gflags[0x02AB] = true;
	goto labelFunc04DE_0046;
labelFunc04DE_0042:
	message("「是的，我能幫你嗎？」 Glenno 問。");
	say();
labelFunc04DE_0046:
	converse attend labelFunc04DE_0267;
	case "姓名" attend labelFunc04DE_005C:
	message("「 Glenno 為您服務！」");
	say();
	UI_remove_answer("姓名");
labelFunc04DE_005C:
	case "職業" attend labelFunc04DE_01AE:
	message("「我是澡堂的經理。");
	say();
	if (!((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_01AA;
	message("「入場費是 300 金幣。所有的東西都包含在這個固定價格裡了。不需要小費。你想進來嗎？」");
	say();
	if (!Func090A()) goto labelFunc04DE_00EE;
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0002 >= 0x012C)) goto labelFunc04DE_00E6;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FB, 0x0004, false);
	if (!var0003) goto labelFunc04DE_00DE;
	message("「太棒了！這是你的鑰匙！");
	say();
	var0004 = UI_remove_party_items(0x012C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DE_00E3;
labelFunc04DE_00DE:
	message("「你的雙手拿太多東西了，拿不下鑰匙！」*");
	say();
	abort;
labelFunc04DE_00E3:
	goto labelFunc04DE_00EB;
labelFunc04DE_00E6:
	message("「你想搞什麼鬼？你沒有 300 金幣！」*");
	say();
	abort;
labelFunc04DE_00EB:
	goto labelFunc04DE_00F3;
labelFunc04DE_00EE:
	message("「那，下次吧！如果你來了，你不會後悔的！絕對物超所值。」*");
	say();
	abort;
labelFunc04DE_00F3:
	message("「進來吧！請放鬆！享受你自己！讓我們的男士或女士讓你的停留更舒適。");
	say();
	if (!var0001) goto labelFunc04DE_0108;
	message("他注意到你的獎章。「特別歡迎友誼會的成員！」");
	say();
	UI_add_answer("友誼會");
labelFunc04DE_0108:
	message("「請便！把這裡當自己家。如果你想喝點什麼，讓我知道。」");
	say();
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc04DE_019A;
	message("「嗯，等一下。你幾歲，孩子？」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「嗯，十八歲。」*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("「你看起來不像十八歲。」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「好吧，我十六歲。」*");
	say();
	UI_show_npc_face(0xFF22, 0x0000);
	message("「你看起來也不像十六歲。好吧，沒關係。你可以進去。但要確保管理層沒看到你。」 Glenno 抓抓頭。「是的，但是……不！我就是管理層！好吧，進來吧。只要別惹麻煩就好。」*");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「太好了！娘們！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc04DE_0190;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 向你低語：「我覺得年輕的 Spark 和你一起冒險時學到了不少！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04DE_0190:
	UI_show_npc_face(0xFF22, 0x0000);
labelFunc04DE_019A:
	UI_add_answer(["澡堂", "飲料"]);
	goto labelFunc04DE_01AE;
labelFunc04DE_01AA:
	message("「請在深夜時分我們的男士或女士在這裡的時候再來拜訪！」");
	say();
labelFunc04DE_01AE:
	case "澡堂" attend labelFunc04DE_01D4:
	message("「澡堂是為了海盜巢穴 (Buccaneer's Den)的訪客的樂趣而存在的。你可以在我們的溫泉池中沐浴。你可以在我們的交誼廳裡休息，與我們迷人的男士或女士們社交。你可以飲用上好的葡萄酒和麥酒。你可以欣賞我們收藏的精美藝術品。你可以……逃入夢想世界！」");
	say();
	UI_remove_answer("澡堂");
	UI_add_answer(["温況池", "男女䳘", "交誼廳", "精美藝術品"]);
labelFunc04DE_01D4:
	case "飲料" attend labelFunc04DE_01DF:
	Func088F();
labelFunc04DE_01DF:
	case "男女䳘" attend labelFunc04DE_01F2:
	message("「他們來自全不列顛尼亞各地，來滿足你的每一個願望！我， Glenno ，向他們保證澡堂是已知世界中同類場所中最負盛名的。它可能也是已知世界中唯一這種類型的場所！」");
	say();
	UI_remove_answer("男女䳘");
labelFunc04DE_01F2:
	case "温況池" attend labelFunc04DE_0205:
	message("「水保證純淨、溫暖且能洗淨身心。」");
	say();
	UI_remove_answer("温況池");
labelFunc04DE_0205:
	case "交誼廳" attend labelFunc04DE_0218:
	message("「你可以舒適地躺在許多柔軟的坐墊和枕頭中。去了解你的鄰居。去『非常深入地』了解你的鄰居！」");
	say();
	UI_remove_answer("交誼廳");
labelFunc04DE_0218:
	case "精美藝術品" attend labelFunc04DE_022B:
	message("「啊，是的，那些是不列顛尼亞藝術家 Glen Johnson 筆下的色情傑作。注意到那幅畫的曲線有多麼自然嗎，你不同意嗎？」");
	say();
	UI_remove_answer("精美藝術品");
labelFunc04DE_022B:
	case "友誼會" attend labelFunc04DE_0245:
	message("「是的，我是會員。如果不是因為友誼會，我就不會成為澡堂的經理！我為組織盡心盡力，信賴我的眾多弟兄，致力於合一，而且……嗯，我的價值先行於報償！而這一切……就是我的報償！」 Glenno 笑了，就像一隻剛吞下老鼠的公貓。");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer("報償");
labelFunc04DE_0245:
	case "報償" attend labelFunc04DE_0259:
	message("「是的，友誼會給了我這個地方。你知道的，這是他們的財產。」突然， Glenno 摀住嘴，好像說了不該說的話。「我的意思是，友誼會只擁有這座建築所在的『土地』。我用友誼會獎賞給我的錢『建造』了澡堂。所以，不說這些了——享受你自己吧。我必須去忙了！」說完， Glenno 轉身離開了你。*");
	say();
	UI_remove_answer("報償");
	abort;
labelFunc04DE_0259:
	case "告辭" attend labelFunc04DE_0264:
	goto labelFunc04DE_0267;
labelFunc04DE_0264:
	goto labelFunc04DE_0046;
labelFunc04DE_0267:
	endconv;
	message("「這麼快就要走了？」*");
	say();
labelFunc04DE_026C:
	if (!(event == 0x0000)) goto labelFunc04DE_030D;
	var0000 = UI_part_of_day();
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF22));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0007 == 0x000B)) goto labelFunc04DE_0307;
	if (!((var0000 == 0x0005) || ((var0000 == 0x0007) || (var0000 == 0x0000)))) goto labelFunc04DE_0304;
	if (!(var0008 == 0x0001)) goto labelFunc04DE_02CA;
	var0009 = "@酒色人生！@";
labelFunc04DE_02CA:
	if (!(var0008 == 0x0002)) goto labelFunc04DE_02DA;
	var0009 = "@需要女伴嗎，水手？@";
labelFunc04DE_02DA:
	if (!(var0008 == 0x0003)) goto labelFunc04DE_02EA;
	var0009 = "@需要男伴嗎，女士？@";
labelFunc04DE_02EA:
	if (!(var0008 == 0x0004)) goto labelFunc04DE_02FA;
	var0009 = "@在澡堂放鬆一下吧！@";
labelFunc04DE_02FA:
	UI_item_say(0xFF22, var0009);
labelFunc04DE_0304:
	goto labelFunc04DE_030D;
labelFunc04DE_0307:
	Func092E(0xFF22);
labelFunc04DE_030D:
	return;
}


