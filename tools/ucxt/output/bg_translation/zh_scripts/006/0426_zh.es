#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0899 0x899 ();
extern void Func092E 0x92E (var var0000);

void Func0426 object#(0x426) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0426_0223;
	UI_show_npc_face(0xFFDA, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A7])) goto labelFunc0426_0056;
	message("你看見一位滿臉笑容、說話和舉止都很熱情的商人。");
	say();
	gflags[0x00A7] = true;
	goto labelFunc0426_0060;
labelFunc0426_0056:
	message("「哎呀，有什麼我能為你效勞的，");
	message(var0000);
	message("？」 Greg 問。");
	say();
labelFunc0426_0060:
	converse attend labelFunc0426_0218;
	case "姓名" attend labelFunc0426_0076:
	message("「哎呀，我的名字是 Greg 。很高興見到你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0426_0076:
	case "職業" attend labelFunc0426_0092:
	message("「哎呀，我在 Britain 這裡經營雜貨店。這是無畏勇者的第二個家。」");
	say();
	UI_add_answer(["雜貨店", "Britain", "購買"]);
labelFunc0426_0092:
	case "雜貨店" attend labelFunc0426_00AC:
	message("「哎呀，你看起來像是一個對冒險毫不陌生的人。無論你是在爬山、航行在海洋、穿越沙漠、探索地城或在星空下露宿，我都有你可能需要的東西。」");
	say();
	UI_remove_answer("雜貨店");
	UI_add_answer("需要的東西");
labelFunc0426_00AC:
	case "Britain" attend labelFunc0426_00CC:
	message("「我把我的店搬到這裡，是為了服務 Lord British ，他專門委託我為他的各種探險隊提供裝備。這是真的！」");
	say();
	UI_remove_answer("Britain");
	UI_add_answer(["搬家", "Lord British"]);
labelFunc0426_00CC:
	case "搬家" attend labelFunc0426_00DF:
	message("「我以前的店開在 Paws 。但 Paws 沒有人有錢買太多東西。」");
	say();
	UI_remove_answer("搬家");
labelFunc0426_00DF:
	case "需要的東西" attend labelFunc0426_00FF:
	message("「每個冒險家需要的都是好運！這家店、這裡買的物品、關於我和我的店，就是有一種非常幸運的特質。我可以給你舉個例子來說明我的意思。」");
	say();
	UI_remove_answer("需要的東西");
	UI_add_answer(["幸運", "例子"]);
labelFunc0426_00FF:
	case "例子" attend labelFunc0426_011F:
	message("「一個名叫 Gorn 的戰士曾經向我買了一把鏟子，他告訴我這把鏟子救了他的命。」");
	say();
	UI_add_answer(["Gorn", "救了他的命"]);
	UI_remove_answer("例子");
labelFunc0426_011F:
	case "Gorn" attend labelFunc0426_0132:
	message("「或許你認識 Gorn 。他說話帶有非常奇特的口音！」");
	say();
	UI_remove_answer("Gorn");
labelFunc0426_0132:
	case "救了他的命" attend labelFunc0426_0145:
	message("「Gorn 想在某處挖掘埋藏的寶藏，這時他聽到身後有聲響。轉過身時，他驚恐地看到一群不死骷髏正向他衝來！在急於挖出寶藏的過程中，他解開了腰帶並放下了劍。他手裡唯一拿著的東西就是那把鏟子。他立刻開始揮舞它，結果把所有的骷髏都打成了碎片！他現在把它當成他的『幸運鏟子』！」");
	say();
	UI_remove_answer("救了他的命");
labelFunc0426_0145:
	case "Lord British" attend labelFunc0426_0196:
	message("「這是 Lord British 最喜歡的雜貨店。他親口告訴我的。各種著名的冒險家都會走進這扇門。哎呀，就在上週，聖者本人就來過我這家店！」");
	say();
	var0004 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0004) goto labelFunc0426_0177;
	message("「哎呀，既然我都提到了，他的穿著跟你還真像。是的，他真的很像。」");
	say();
	UI_add_answer("穿得像聖者");
labelFunc0426_0177:
	if (!var0003) goto labelFunc0426_0188;
	message("「哎呀，我好像記得那位聖者也戴著一個和你戴的那個一樣的友誼會徽章。嗯。而且他幾乎把我搶個精光。我得小心盯著你，我會的。」");
	say();
	UI_add_answer("搶個精光？");
labelFunc0426_0188:
	UI_add_answer("另一個聖者？");
	UI_remove_answer("Lord British");
labelFunc0426_0196:
	case "另一個聖者？" attend labelFunc0426_01A9:
	message("「嗯，他說他是聖者。但話說回來，遇到一些瘋子或傻瓜自稱是聖者也沒什麼不尋常的！」他看著你，有一瞬間顯得有些尷尬。");
	say();
	UI_remove_answer("另一個聖者？");
labelFunc0426_01A9:
	case "穿得像聖者" attend labelFunc0426_01BC:
	message("「他穿得像聖者，就像你現在的打扮。起初我以為是 Jesse ，就是那位在那個導演的戲裡扮演聖者的演員……他叫什麼名字來著？~~「喔，算了。總之不是他。」");
	say();
	UI_remove_answer("穿得像聖者");
labelFunc0426_01BC:
	case "搶個精光？" attend labelFunc0426_01CF:
	message("「你會以為一個看起來像聖者的人是值得信任的。但是，不。在這個時代，誰也說不準會發生什麼事！」");
	say();
	UI_remove_answer("搶個精光？");
labelFunc0426_01CF:
	case "幸運" attend labelFunc0426_01E2:
	message("「我的顧客都是那些出去展現英勇與大膽冒險的人。但大多數人都會一次又一次地回來購買更多物資。我的顧客做著這麼多危險的事，我居然沒有失去他們所有人並倒閉，這真是個奇蹟！」");
	say();
	UI_remove_answer("幸運");
labelFunc0426_01E2:
	case "購買" attend labelFunc0426_020A:
	if (!(!(var0002 == 0x0007))) goto labelFunc0426_01FC;
	message("「非常抱歉，雜貨店目前休息。請在中午重新營業時再來。」");
	say();
	goto labelFunc0426_0203;
labelFunc0426_01FC:
	message("「就像我說的，我們有你度過一次美妙冒險所需的一切！」");
	say();
	Func0899();
labelFunc0426_0203:
	UI_remove_answer("購買");
labelFunc0426_020A:
	case "告辭" attend labelFunc0426_0215:
	goto labelFunc0426_0218;
labelFunc0426_0215:
	goto labelFunc0426_0060;
labelFunc0426_0218:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0426_0223:
	if (!(event == 0x0000)) goto labelFunc0426_02AA;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFDA));
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0426_02A4;
	if (!(var0005 == 0x0001)) goto labelFunc0426_0267;
	var0006 = "@這裡賣雜貨喔！@";
labelFunc0426_0267:
	if (!(var0005 == 0x0002)) goto labelFunc0426_0277;
	var0006 = "@裡面請進！@";
labelFunc0426_0277:
	if (!(var0005 == 0x0003)) goto labelFunc0426_0287;
	var0006 = "@歡迎光臨！@";
labelFunc0426_0287:
	if (!(var0005 == 0x0004)) goto labelFunc0426_0297;
	var0006 = "@優質好貨在這裡！@";
labelFunc0426_0297:
	UI_item_say(0xFFDA, var0006);
	goto labelFunc0426_02AA;
labelFunc0426_02A4:
	Func092E(0xFFDA);
labelFunc0426_02AA:
	return;
}


