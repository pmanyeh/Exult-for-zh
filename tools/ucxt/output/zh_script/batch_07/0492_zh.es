#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0492 object#(0x492) ()
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

	if (!(event == 0x0001)) goto labelFunc0492_03F5;
	UI_show_npc_face(0xFF6E, 0x0000);
	if (!(!gflags[0x01BA])) goto labelFunc0492_001E;
	message("蒼白的幽靈似乎看到了你，但出於某種原因無法對你說話。幽靈沮喪地轉過身去。*");
	say();
	abort;
labelFunc0492_001E:
	var0000 = false;
	var0001 = Func0909();
	var0002 = Func08F7(0xFF74);
	if (!gflags[0x01C4]) goto labelFunc0492_0040;
	var0003 = "Markham";
	goto labelFunc0492_0046;
labelFunc0492_0040:
	var0003 = "酒館老闆";
labelFunc0492_0046:
	if (!gflags[0x0198]) goto labelFunc0492_0053;
	UI_add_answer("犧牲");
labelFunc0492_0053:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF6E);
	if (!(!gflags[0x01AA])) goto labelFunc0492_00A5;
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc0492_00A5;
	if (!(var0005 == 0x000E)) goto labelFunc0492_008F;
	message("當你開始與蒼白的幽靈說話時，你注意到他似乎看穿了你，彷彿你根本不存在。你在他面前揮手，但沒有任何反應。*");
	say();
	abort;
	goto labelFunc0492_00A5;
labelFunc0492_008F:
	if (!(!(var0005 == 0x0010))) goto labelFunc0492_00A5;
	message("「拜託，拜託。我……現在無法和你說話。我不知道我怎麼了。請原諒我，");
	message(var0001);
	message("。」蒼白的幽靈看起來比平常更蒼白。*");
	say();
	abort;
labelFunc0492_00A5:
	var0006 = UI_get_party_list();
	var0007 = UI_get_npc_object(0xFF70);
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0007 in var0006) || (var0008 in var0006))) goto labelFunc0492_0176;
	if (!(var0007 in var0006)) goto labelFunc0492_0122;
	UI_show_npc_face(0xFF70, 0x0000);
	message("「你好，Quenton。我希望你過得好。」Rowena 給了蒼白的幽靈一個迷人的微笑。*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「是的，女士。我過得還算可以。看到妳再次自由，我心裡很高興。妳去見過 Trent 了嗎？」*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("「唉，還沒。這位好心人正要帶我去見他。」她指著你。*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「這真是個好消息，因為他太想念妳了。」*");
	say();
labelFunc0492_0122:
	if (!(var0008 in var0006)) goto labelFunc0492_0172;
	UI_show_npc_face(0xFF6D, 0x0000);
	message("「幸會， Quenton 。」市長微笑時，他的鬍子也跟著展開。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("「你好，市長。你過得好嗎，大人？」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("Forsythe 似乎對 Quenton 聽起來很真誠的詢問感到驚訝。「哎呀，我過得很好， Quenton 。謝謝你的關心。」*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("他微笑著承認了市長的感謝。*");
	say();
labelFunc0492_0172:
	var0009 = true;
labelFunc0492_0176:
	if (!(!var0009)) goto labelFunc0492_0187;
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0187:
	if (!(!gflags[0x01CB])) goto labelFunc0492_019F;
	message("臉色蒼白的幽靈轉向你，給了你一個蒼白的微笑。「你好，我們以前是不是在哪裡見過面，");
	message(var0001);
	message("？」你看到他眼中有著認得你的神情，但隨後就消失了。~~「原諒我。」他搖搖頭，然後笑了笑。「我是 Quenton 的幽影 (shade) 。」");
	say();
	gflags[0x01CB] = true;
	goto labelFunc0492_01B0;
labelFunc0492_019F:
	message("Quenton 轉向你。「你好，");
	message(var0001);
	message("。來吧，在旅途中歇息一下，和我坐一會兒。我只是一個普通的幽影，但我可能有對你有用的情報。」");
	say();
	UI_add_answer("情報");
labelFunc0492_01B0:
	UI_add_answer(["姓名", "職業", "幽影", "告辭"]);
	if (!gflags[0x017C]) goto labelFunc0492_01D0;
	UI_add_answer("受折磨的人");
labelFunc0492_01D0:
	converse attend labelFunc0492_03D7;
	case "姓名" attend labelFunc0492_01EC:
	message("「我叫做 Quenton ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0492_01EC:
	case "職業" attend labelFunc0492_01F8:
	message("他對你的問題笑了笑，「我曾經在海上漫遊，一次好幾天，收穫我的魚獲。」");
	say();
labelFunc0492_01F8:
	case "情報" attend labelFunc0492_020B:
	message("「我已經在這裡很多很多年了。而且，」他笑著說，「這段時間我看過很多很多事情。」");
	say();
	UI_remove_answer("情報");
labelFunc0492_020B:
	case "受折磨的人" attend labelFunc0492_021E:
	message("「Caine ？他是 Skara Brae 這裡的一名鍊金術士。現在他每天都處在無盡的痛苦中，因為他對引起摧毀這座城鎮的大火感到內疚。」");
	say();
	UI_remove_answer("受折磨的人");
labelFunc0492_021E:
	case "幽影" attend labelFunc0492_0242:
	message("「我的故事很長也很悲傷。我希望你有時間。」他似乎沉思了一會兒，然後開始說。~~「當我還是個年輕人的時候，我遇到了一位名叫 Gwen 的可愛女人。我娶了她為妻，我們有一段時間過著快樂無憂的生活。她為這世界帶來了一道光，我們叫她 Marney ，意思是風暴後的涼風。」他對著某些回憶笑了笑，然後皺著眉頭繼續說道。");
	say();
	message("「然後，有一天，我的妻子被從我身邊帶走了。我不知道去哪裡，也不知道被誰帶走，只知道他們是邪惡的人。不久之後，我可愛的 Marney 傷心欲絕，我擔心她的健康。我無法放下捕魚的工作來照顧她，但我需要金幣。所以我跟一個不好惹的男人做了一筆交易。這就是我毀滅的開始，因為當我無法償還他的貸款時，他在某個晚上來找我並殺了我。我沒有機會還手或求救。」他陷入沉默。~~「但那是在把這整個島嶼變成死者之地的大火發生很久以前的事了。」");
	say();
	UI_remove_answer("幽影");
	UI_add_answer(["Marney", "大火"]);
labelFunc0492_0242:
	case "Marney" attend labelFunc0492_0299:
	message("「我被謀殺後，我的好朋友 Yorl 把她當作自己的孩子一樣照顧。他盡了最大努力，但她的病情只會惡化。幾個月後她變得虛弱，然後就死了。」他停在這裡，幽靈般的眼中充滿了淚水，然後他生氣地說：「現在她的靈魂被巫妖 Horance 囚禁著。你必須從那個邪惡的野獸手中救出她！」他試圖抓住你，但他的手毫無阻力地穿了過去。*");
	say();
	if (!var0002) goto labelFunc0492_0288;
	if (!gflags[0x01B4]) goto labelFunc0492_0285;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「好了，好了， Quen 。冷靜點。」");
	message(var0003);
	message("向你靠近並低聲說：「原諒他，");
	message(var0001);
	message("。~~「他談到他女兒時有時會像那樣失去控制。不過我相信你能理解。」*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0285:
	goto labelFunc0492_0292;
labelFunc0492_0288:
	message("Quenton 恢復了控制。「原諒我，");
	message(var0001);
	message("。我沒權利把我的痛苦強加在你身上。想到我可愛的 Marney 在那個……生物的掌控之下，我就心痛。」");
	say();
labelFunc0492_0292:
	UI_remove_answer("Marney");
labelFunc0492_0299:
	case "大火" attend labelFunc0492_02C2:
	message("「看來鎮上的治療師 Mordra 女士認為她有一個阻止巫妖 Horance 的計畫，她把這計畫告訴了市長。我不確定她究竟計畫了什麼，但這牽涉到鎮上的鐵匠 Trent 和鍊金術士 Caine 。在 Caine 開始他的工作後沒多久，一場火風暴席捲了這座島，摧毀了一切。 Skara Brae 燒了好幾天。」");
	say();
	UI_remove_answer("大火");
	UI_add_answer(["Mordra 女士", "巫妖", "市長", "Trent", "Caine"]);
labelFunc0492_02C2:
	case "巫妖" attend labelFunc0492_0338:
	message("「曾經，兩個多世紀前，我認識一位名叫 Horance 的天賦異稟的法師。他一生中的兩個最愛是研究魔法，以及寫優美的詩。 Skara Brae 的人們知道有這樣的法師保護著城鎮，感到很安全。然後他開始改變。~~「首先，他美麗的十四行詩變成了押韻的打油詩。那成為他唯一說話的方式。他在鎮民面前展示的法術變得具有破壞性和暴力。人們開始害怕他。我的死大約就發生在這個時候。那之後沒多久，他變得隱居。他在北端建了一座塔，並且再也沒有離開過那裡。~~「然後，某個晚上，墓地裡的墳墓打開了，死人開始行走。」*");
	say();
	if (!var0002) goto labelFunc0492_02FC;
	if (!gflags[0x01B4]) goto labelFunc0492_02FC;
	UI_show_npc_face(0xFF74, 0x0000);
	message(var0003);
	message("用力地點頭，「沒錯，我看到了，我真的看到了。」*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_02FC:
	message("「他們向他的塔遊行，現在他們在島上到處遊蕩，執行他的命令。」*");
	say();
	if (!var0002) goto labelFunc0492_0331;
	if (!gflags[0x01B4]) goto labelFunc0492_0331;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「現在搞得連鬼都不能安分地過日子了。哼。」");
	message(var0003);
	message(" 看起來有點不高興。*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0331:
	UI_remove_answer("巫妖");
labelFunc0492_0338:
	case "Mordra 女士" attend labelFunc0492_034B:
	message("Quenton 看起來充滿希望，「如果你願意協助我們，她是最好說話的對象。至少，她似乎知道如何讓我們擺脫巫妖。」");
	say();
	UI_remove_answer("Mordra 女士");
labelFunc0492_034B:
	case "市長" attend labelFunc0492_035E:
	message("「市長……」Quenton 謹慎地選擇他的措辭。「……嗯，他認為謹慎是勇氣中更好的一部分。所以，他或許能提供你一些幫助，但你可能首先得說服他你不是來傷害他的。」");
	say();
	UI_remove_answer("市長");
labelFunc0492_035E:
	case "Trent" attend labelFunc0492_0371:
	message("「啊，這個可憐的男人幾乎和我一樣了解那種撕心裂肺的失落感。他的妻子 Rowena 被行屍走肉殺死了。而 Mordra 女士聲稱她看到她坐在巫妖旁邊的王座上。我相信這讓 Trent 有點發瘋了。他日以繼夜地製作某種形狀奇特的籠子。不過奇怪的是，他似乎永遠都做不完。他似乎也不記得自己死於大火，但對 Horance 的強烈仇恨仍然在他心中燃燒。」");
	say();
	UI_remove_answer("Trent");
labelFunc0492_0371:
	case "Caine" attend labelFunc0492_038B:
	message("他看起來好像預料到了你的問題。「唉， Caine 試圖將我們從巫妖手中解救出來，反而讓我們注定成為同一個巫妖的奴隸。」");
	say();
	UI_remove_answer("Caine");
	UI_add_answer("奴隸");
labelFunc0492_038B:
	case "奴隸" attend labelFunc0492_039E:
	message("「是的，我們是他的奴隸。每天午夜，我們必須前往黑塔 (Dark Tower) 並成為他黑彌撒的僕人。我只知道這些，因為 Mordra 告訴我們這是真的。我完全不記得曾經去過黑塔。」他的表情流露出他的恐懼。");
	say();
	UI_remove_answer("奴隸");
labelFunc0492_039E:
	case "犧牲" attend labelFunc0492_03C9:
	if (!(!gflags[0x019C])) goto labelFunc0492_03BE;
	message("你解釋說你需要一個靈魂自願進入靈魂之井以帶來它的毀滅。 Quenton 考慮了一會兒，然後回答說：「請理解，");
	message(var0001);
	message("。我真心希望我有那種勇氣。但我不能冒險做任何可能毀掉 Marney 的事。記住，她的靈魂被關在那個井裡，和墓地裡所有的死者一起。」");
	say();
	gflags[0x019C] = true;
	goto labelFunc0492_03C2;
labelFunc0492_03BE:
	message("「不，我很抱歉。我不能冒這個險。」他看起來非常疲憊。");
	say();
labelFunc0492_03C2:
	UI_remove_answer("犧牲");
labelFunc0492_03C9:
	case "告辭" attend labelFunc0492_03D4:
	goto labelFunc0492_03D7;
labelFunc0492_03D4:
	goto labelFunc0492_01D0;
labelFunc0492_03D7:
	endconv;
	message("「再見，");
	message(var0001);
	message("。」*");
	say();
	if (!Func08F7(0xFF74)) goto labelFunc0492_03F5;
	message("他轉回去找");
	message(var0003);
	message("。*");
	say();
labelFunc0492_03F5:
	if (!(event == 0x0000)) goto labelFunc0492_03FE;
	abort;
labelFunc0492_03FE:
	return;
}


