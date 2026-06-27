#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042E object#(0x42E) ()
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

	if (!(event == 0x0001)) goto labelFunc042E_0305;
	UI_show_npc_face(0xFFD2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD2));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0092]) goto labelFunc042E_004A;
	UI_add_answer("Cynthia 的話");
labelFunc042E_004A:
	if (!(!gflags[0x00AF])) goto labelFunc042E_005C;
	message("你看見一位板著臉的旅店老闆，他看著你的眼神彷彿他所有的問題都是你造成的一樣。");
	say();
	gflags[0x00AF] = true;
	goto labelFunc042E_0066;
labelFunc042E_005C:
	message("「現在我必須為你做些什麼，");
	message(var0000);
	message("？」 James 問。");
	say();
labelFunc042E_0066:
	converse attend labelFunc042E_0300;
	case "姓名" attend labelFunc042E_007C:
	message("「我的名字是 James 。」");
	say();
	UI_remove_answer("姓名");
labelFunc042E_007C:
	case "職業" attend labelFunc042E_0095:
	message("「我是這家旅店的老闆。」");
	say();
	UI_add_answer(["老闆", "旅店"]);
labelFunc042E_0095:
	case "老闆" attend labelFunc042E_00B5:
	message("「這只是另一種說法，意思是我是那個當櫃檯人員的人。你可能會認為這是一份輕鬆的工作，但我向你保證，事實並非如此。」");
	say();
	UI_remove_answer("老闆");
	UI_add_answer(["櫃檯人員", "不輕鬆"]);
labelFunc042E_00B5:
	case "旅店" attend labelFunc042E_00C8:
	message("「這個地方叫做『旅人旅館』。它在不列顛城有著悠久而豐富的歷史。如果你的祖父母曾經來過這個城鎮，他們很可能就是住在這兒。」");
	say();
	UI_remove_answer("旅店");
labelFunc042E_00C8:
	case "櫃檯人員" attend labelFunc042E_00E8:
	message("「當然，當櫃檯人員不是我唯一做的事。我必須整天聽人們談論他們的問題，好像我應該解決它們一樣！」");
	say();
	UI_remove_answer("櫃檯人員");
	UI_add_answer(["聽人抱怨", "解決"]);
labelFunc042E_00E8:
	case "聽人抱怨" attend labelFunc042E_0101:
	message("「沒錯，");
	message(var0000);
	message("。所以如果你有問題，請出於禮貌不要讓我知道這一切。我剛說到哪了？」");
	say();
	UI_remove_answer("聽人抱怨");
labelFunc042E_0101:
	case "解決" attend labelFunc042E_011B:
	message("「也許解決人們的問題對其他旅店老闆來說是件輕鬆的任務，但我不僅不擅長，我自己也有問題。」");
	say();
	UI_remove_answer("解決");
	UI_add_answer("問題");
labelFunc042E_011B:
	case "問題" attend labelFunc042E_013B:
	message("「我不喜歡我的工作！我從來沒想過要當旅店老闆，我只是想在我父親去世後繼續經營這個地方。現在我跟 Cynthia 結婚了，我被綁得比以前更緊了！」");
	say();
	UI_remove_answer("問題");
	UI_add_answer(["旅店老闆", "Cynthia"]);
labelFunc042E_013B:
	case "旅店老闆" attend labelFunc042E_015B:
	message("「我一直暗自希望能成為一名海盜，而不是旅店老闆！當我沒有在海上航行時，我就會住在海盜巢穴 (Buccaneer's Den) 。」");
	say();
	UI_remove_answer("旅店老闆");
	UI_add_answer(["海盜", "海盜巢穴"]);
labelFunc042E_015B:
	case "海盜巢穴" attend labelFunc042E_016E:
	message("「據我所知，那裡有一流的賭坊，還有豪華的浴池。至少我是聽賣炸魚薯條的 Gordon 這麼說的。」");
	say();
	UI_remove_answer("海盜巢穴");
labelFunc042E_016E:
	case "Cynthia" attend labelFunc042E_018E:
	message("「別誤會我的意思，");
	message(var0000);
	message("。我全心全意地愛著 Cynthia 。但有時候我覺得我還太年輕，不該結婚。此外，我知道我無法成為她的一個好丈夫。」");
	say();
	UI_remove_answer("Cynthia");
	UI_add_answer("好丈夫");
labelFunc042E_018E:
	case "海盜" attend labelFunc042E_01A1:
	message("「你很清楚，幾乎沒有人會對海盜傾吐煩惱。如果我是海盜，我還可以把這隻壞腳換成木腿！」");
	say();
	UI_remove_answer("海盜");
labelFunc042E_01A1:
	case "好丈夫" attend labelFunc042E_01C1:
	message("「當 Cynthia 整天在造幣廠數著那些錢時，我怎麼能用旅店老闆微薄的收入讓她開心呢？我知道我做不到。」");
	say();
	UI_remove_answer("好丈夫");
	UI_add_answer(["開心", "造幣廠"]);
labelFunc042E_01C1:
	case "造幣廠" attend labelFunc042E_01D4:
	message("「我了解人心的本質，我的好朋友。在接觸了這麼大筆的錢之後，她將開始貪圖它。既然我無法提供，她就會離開我，把心交給一個有錢人。也許是個商人或貴族。一想到這個，我的血液就沸騰了。」");
	say();
	UI_remove_answer("造幣廠");
labelFunc042E_01D4:
	case "不輕鬆" attend labelFunc042E_01F4:
	message("「當一個旅店老闆，必須整天跑來跑去。如果任何人想要任何東西，你就是必須為他們處理的那個人！」");
	say();
	UI_remove_answer("不輕鬆");
	UI_add_answer(["跑來跑去", "客房"]);
labelFunc042E_01F4:
	case "跑來跑去" attend labelFunc042E_0207:
	message("「我花太多時間跑來跑去了，以至於我的腳出了毛病。」");
	say();
	UI_remove_answer("跑來跑去");
labelFunc042E_0207:
	case "開心" attend labelFunc042E_021A:
	message("「我已經感覺到她對我們的婚姻感到擔憂。我知道我們之間出了問題。」");
	say();
	UI_remove_answer("開心");
labelFunc042E_021A:
	case "客房" attend labelFunc042E_02DF:
	if (!(var0002 == 0x0007)) goto labelFunc042E_02CE;
	message("「喔，我想你現在想要一間客房了吧！看吧，我就是這個意思！每人每晚十枚金幣。你想要客房，對吧？」");
	say();
	if (!Func090A()) goto labelFunc042E_02C7;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	enum();
labelFunc042E_0244:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc042E_025C;
	var0004 = (var0004 + 0x0001);
	goto labelFunc042E_0244;
labelFunc042E_025C:
	var0008 = (var0004 * 0x000A);
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 >= var0008)) goto labelFunc042E_02C0;
	var000A = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000A)) goto labelFunc042E_02A5;
	message("「你帶了太多東西了，拿不下房間鑰匙！」");
	say();
	goto labelFunc042E_02BD;
labelFunc042E_02A5:
	message("「這是你的房間鑰匙。它只有在你離開旅店前有效。」");
	say();
	var000B = UI_remove_party_items(var0008, 0x0284, 0xFE99, 0xFE99, true);
labelFunc042E_02BD:
	goto labelFunc042E_02C4;
labelFunc042E_02C0:
	message("「你沒有足夠的金幣在這裡開房間。現在我想你肯定要告訴我你是怎麼落得這般可憐的境地。好吧，我可不聽你說！」");
	say();
labelFunc042E_02C4:
	goto labelFunc042E_02CB;
labelFunc042E_02C7:
	message("James 擦了擦額頭。「呼！好險！」");
	say();
labelFunc042E_02CB:
	goto labelFunc042E_02D8;
labelFunc042E_02CE:
	message("「拜託，");
	message(var0000);
	message("。請給我一些自己的時間！目前我沒有在處理旅店的生意，而且我希望能保持這樣。你必須在營業時間來光顧旅店。」");
	say();
labelFunc042E_02D8:
	UI_remove_answer("客房");
labelFunc042E_02DF:
	case "Cynthia 的話" attend labelFunc042E_02F2:
	message("你向他轉述 Cynthia 對你說過關於他的話。他臉上露出了笑容。「噢，反正誰想當海盜？我會討厭那樣的！」說完他又回去擦拭吧檯，但你注意到那笑容依然掛在臉上。");
	say();
	UI_remove_answer("Cynthia");
labelFunc042E_02F2:
	case "告辭" attend labelFunc042E_02FD:
	goto labelFunc042E_0300;
labelFunc042E_02FD:
	goto labelFunc042E_0066;
labelFunc042E_0300:
	endconv;
	message("「喔，你肯定還會再回來找我要別的東西！我就知道！」*");
	say();
labelFunc042E_0305:
	if (!(event == 0x0000)) goto labelFunc042E_0313;
	Func092E(0xFFD2);
labelFunc042E_0313:
	return;
}


