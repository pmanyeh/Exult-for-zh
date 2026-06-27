#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func08E5 0x8E5 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0407 object#(0x407) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0407_040E;
	talked_book = false;
	UI_show_npc_face(0xFFF9, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_party_list();
	var0003 = UI_get_npc_object(0xFFF9);
	var0004 = Func0908();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0003 in var0002)) goto labelFunc0407_0066;
	UI_add_answer("離隊");
labelFunc0407_0066:
	if (!(!gflags[0x001A])) goto labelFunc0407_0078;
	message("你看到一個瀟灑、苗條、穿著時髦且非常有品味的男人。");
	say();
	gflags[0x001A] = true;
	goto labelFunc0407_0082;
labelFunc0407_0078:
	message("「我有什麼能幫你的嗎，");
	message(var0004);
	message("？」 Sentri 問。");
	say();
labelFunc0407_0082:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文譯本");
	}
	converse attend labelFunc0407_0409;
	case "古文譯本" attend labelFunc0407_TransBook:
	message("「作為一名劍術教練，我一直告訴學生：了解敵人的意圖和揮劍一樣重要。」");
	say();
	message("「這本寶典能讓你在不列顛尼亞的各個角落暢行無阻，掌握第一手情報。」");
	say();
	message("「知識，就像一把磨得鋒利的劍，永遠不嫌多！」");
	say();
	talked_book = true;
	UI_remove_answer("古文譯本");
labelFunc0407_TransBook:
	case "姓名" attend labelFunc0407_0098:
	message("「你不記得我了嗎？我是 Sentri ！我們過去曾經一起冒險過！」");
	say();
	UI_remove_answer("姓名");
labelFunc0407_0098:
	case "職業" attend labelFunc0407_00D4:
	message("「當我不和老朋友去冒險時，我是不列顛城的一名教練。我專精於劍術戰鬥。如你所記，我對那方面相當在行。」");
	say();
	var0002 = UI_get_party_list();
	if (!(!(var0003 in var0002))) goto labelFunc0407_00C1;
	message("「但如果你們的隊伍沒有太多負擔，我會放下一切加入你們。」");
	say();
	UI_add_answer("加入");
labelFunc0407_00C1:
	UI_add_answer(["不列顛城", "劍術", "訓練", "朋友們"]);
labelFunc0407_00D4:
	case "朋友們" attend labelFunc0407_00F7:
	message("「我不常看到我們的老朋友 Iolo 、 Shamino 或 Dupre 。」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0407_00F7:
	case "劍術" attend labelFunc0407_010A:
	message("Sentri 拔劍的速度快如閃電。他做了幾個花俏的動作，用劍刃劈開空氣。「在我的手下，沒有敵人能站著！」");
	say();
	UI_remove_answer("劍術");
labelFunc0407_010A:
	case "加入" attend labelFunc0407_0166:
	var0006 = 0x0000;
	var0002 = UI_get_party_list();
	enum();
labelFunc0407_0120:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc0407_0138;
	var0006 = (var0006 + 0x0001);
	goto labelFunc0407_0120;
labelFunc0407_0138:
	if (!(var0006 < 0x0006)) goto labelFunc0407_015B;
	message("Sentri 鞠了一躬。「我很高興能加入你的隊伍。」");
	say();
	gflags[0x00DB] = true;
	UI_add_to_party(0xFFF9);
	UI_add_answer("離隊");
	goto labelFunc0407_015F;
labelFunc0407_015B:
	message("「我喜歡小團體，聖者。你這隊伍人數太多了，不合我的胃口。如果你在路上失去了哪個人，再回來找我，我會很樂意加入你們的。」");
	say();
labelFunc0407_015F:
	UI_remove_answer("加入");
labelFunc0407_0166:
	case "離隊" attend labelFunc0407_01D4:
	message("「你是想讓我在這裡等，還是想讓我回家？」");
	say();
	UI_clear_answers();
	var000A = Func090B(["在這裡等", "回家"]);
	if (!(var000A == "在這裡等")) goto labelFunc0407_01B0;
	message("「很好。我會在這裡等你回來。」*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000F);
	abort;
	goto labelFunc0407_01D4;
labelFunc0407_01B0:
	message("「再會了，");
	message(var0004);
	message("。如果你再需要我的服務，我會非常樂意效勞。」*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000B);
	abort;
labelFunc0407_01D4:
	case "不列顛城" attend labelFunc0407_01EE:
	message("「我開始對這個地方感到厭倦了。它正經歷著資產階級未曾察覺的成長痛。一切並不像貴族們所呈現的那麼寧靜。」");
	say();
	UI_remove_answer("不列顛城");
	UI_add_answer("不寧靜");
labelFunc0407_01EE:
	case "不寧靜" attend labelFunc0407_0208:
	message("「嗯，舉例來說，試著去其中一個小鎮看看，比方說 Paws 。那是個窮人的地方。而且還很臭。它就位在不列顛城鎮界之外。應該投入更多資金來改善整個地區的環境，而不僅僅是在首都建造新建築。我不知道不列顛王在想什麼！」");
	say();
	UI_remove_answer("不寧靜");
	UI_add_answer("不列顛王");
labelFunc0407_0208:
	case "訓練" attend labelFunc0407_0277:
	if (!(!gflags[0x00DB])) goto labelFunc0407_026A;
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	if (!((var0005 == 0x001B) || ((var0005 == 0x000B) || (var0005 == 0x000F)))) goto labelFunc0407_025C;
	message("「我的一次訓練課程收費 30 枚金幣。這樣可以嗎？」");
	say();
	if (!Func090A()) goto labelFunc0407_0255;
	Func08E5(0x0001, 0x001E);
	goto labelFunc0407_0259;
labelFunc0407_0255:
	message("「那我只好去搶劫別人了！」 Sentri 大笑起來。");
	say();
labelFunc0407_0259:
	goto labelFunc0407_0267;
labelFunc0407_025C:
	message("「恐怕我必須堅持只在營業時間內提供訓練的原則。這對我『所有』的朋友都適用。」");
	say();
	UI_remove_answer("訓練");
labelFunc0407_0267:
	goto labelFunc0407_0277;
labelFunc0407_026A:
	message("「既然我是你們隊伍的一員，我就免費訓練你！」");
	say();
	Func08E5(0x0001, 0x0000);
labelFunc0407_0277:
	case "Iolo" attend labelFunc0407_02C3:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0407_02B8;
	message("「你好嗎，朋友？你看起來好像也需要一點訓練！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「這算什麼？每個人都在取笑我的體格！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「我不是在開玩笑， Iolo 。我是認真的！」 Sentri 笑著。");
	say();
	goto labelFunc0407_02BC;
labelFunc0407_02B8:
	message("「我懷念那傢伙！」");
	say();
labelFunc0407_02BC:
	UI_remove_answer("Iolo");
labelFunc0407_02C3:
	case "Shamino" attend labelFunc0407_0335:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0407_032A;
	message("「我說， Shamino ，你還在花時間穿女裝嗎？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『什麼』？！？！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「還是說，既然你現在已經步入中年了，你正把生命虛度在治療師的窩裡？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「小心點，朋友。你這是想找碴啊！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri 友善地揍了 Shamino 一拳。「就只是說說而已，我親愛的朋友。說說而已！很高興見到你！」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_032E;
labelFunc0407_032A:
	message("「能跟他開個一兩個玩笑也不錯！」");
	say();
labelFunc0407_032E:
	UI_remove_answer("Shamino");
labelFunc0407_0335:
	case "Dupre" attend labelFunc0407_03E8:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0407_03DD;
	message("「啊，我的好朋友 Dupre ！你身上有帶些好麥酒嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	var000E = Func0931(0xFFFC, 0x0001, 0x0268, 0xFE99, 0x0003);
	if (!var000E) goto labelFunc0407_03B7;
	message("「你在開玩笑嗎？我『總是』帶著麥酒！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「那我們應該在別人喝掉之前先喝一點！」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那將是我的榮幸。不過，我必須謹慎行事，把麥酒留到我們需要的時候再喝。」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri 摸了摸 Dupre 的頭。「你覺得還好嗎， Dupre ？還是說騎士頭銜對你的大腦造成了什麼影響？」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_03DA;
labelFunc0407_03B7:
	message("「不，但我很樂意在酒吧停下來，跟你喝上幾杯！」*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("「嗯！聽起來不錯！下次我們經過酒吧時，我們就停下來！」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
labelFunc0407_03DA:
	goto labelFunc0407_03E1;
labelFunc0407_03DD:
	message("「我想見見那個沒用的麻煩製造者！我聽說他現在是騎士了！還真的是 Dupre 爵士呢！」");
	say();
labelFunc0407_03E1:
	UI_remove_answer("Dupre");
labelFunc0407_03E8:
	case "不列顛王" attend labelFunc0407_03FB:
	message("「我不常看到他。他一直待在他那座城堡裡。他從來不出來。難怪他對這個國家正在發生的事情一無所知。」");
	say();
	UI_remove_answer("不列顛王");
labelFunc0407_03FB:
	case "告辭" attend labelFunc0407_0406:
	goto labelFunc0407_0409;
labelFunc0407_0406:
	goto labelFunc0407_0082;
labelFunc0407_0409:
	endconv;
	message("「晚點見。」*");
	say();
labelFunc0407_040E:
	if (!(event == 0x0000)) goto labelFunc0407_041C;
	Func092E(0xFFF9);
labelFunc0407_041C:
	return;
}


