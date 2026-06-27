#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func04B4 object#(0x4B4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04B4_027B;
	UI_show_npc_face(0xFF4C, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0239]) goto labelFunc04B4_003C;
	if (!(!gflags[0x0238])) goto labelFunc04B4_003C;
	UI_add_answer("Inamo");
labelFunc04B4_003C:
	if (!gflags[0x0004]) goto labelFunc04B4_0049;
	UI_add_answer("月之門");
labelFunc04B4_0049:
	if (!(!gflags[0x0245])) goto labelFunc04B4_005B;
	message("你看到一位年邁的石像鬼，身軀彎曲枯槁，卻帶著一種王者的風範。他溫和地笑了笑。");
	say();
	gflags[0x0245] = true;
	goto labelFunc04B4_005F;
labelFunc04B4_005B:
	message("「很高興再次見到你，老朋友。這麼快又需要 Draxinusom 了？」");
	say();
labelFunc04B4_005F:
	converse attend labelFunc04B4_0276;
	case "姓名" attend labelFunc04B4_007B:
	message("「很多年了。是你的老熟人，");
	message(var0000);
	message("，Draxinusom。」");
	say();
	UI_remove_answer("姓名");
labelFunc04B4_007B:
	case "職業" attend labelFunc04B4_0094:
	message("「問起職業？目前無法說我真的有一份職業。注意到年輕人不再向我尋求指導了。更多是去找 Teregus ，或者，更常見的是去找友誼會裡的人。」");
	say();
	UI_add_answer(["Teregus", "友誼會"]);
labelFunc04B4_0094:
	case "Terfin" attend labelFunc04B4_00AE:
	message("「對我們的需求來說相當舒適。然而，不幸的是，人類認為有必要將我們隔離起來。這在我們的年輕一代中引發了怨恨和緊張。他們不記得過去的日子，我的朋友——我們必須共同努力才能生存的日子。」他笑了笑，重溫著往昔的記憶，然後搖了搖頭。~~「我們搬遷時不得不放棄很多東西。」");
	say();
	UI_add_answer("放棄");
	UI_remove_answer("Terfin");
labelFunc04B4_00AE:
	case "放棄" attend labelFunc04B4_00D8:
	message("「有很多最喜歡的財產。搬運這麼多東西太麻煩了。」他嘆了口氣。");
	say();
	if (!gflags[0x01E0]) goto labelFunc04B4_00D1;
	message("~「特別後悔賣掉了我的以太戒指 (Ethereal Ring) 。」");
	say();
	UI_add_answer(["販賣", "以太戒指 (Ethereal Ring)"]);
labelFunc04B4_00D1:
	UI_remove_answer("放棄");
labelFunc04B4_00D8:
	case "以太戒指 (Ethereal Ring)" attend labelFunc04B4_00EB:
	message("「啊。確實是一件可愛的寶物。曾經非常有用。真的，不得不賣掉它真是個遺憾。曾經是我最喜歡的寶物之一。」");
	say();
	UI_remove_answer("以太戒指 (Ethereal Ring)");
labelFunc04B4_00EB:
	case "販賣" attend labelFunc04B4_0105:
	message("「當我們被……呃……可以說是被要求搬到這座島上時，賣掉了我大部分的寶物。這一切都發生得相當快，你看。大部分都賣給了 Spektran 的蘇丹。」");
	say();
	UI_add_answer("Sultan");
	UI_remove_answer("販賣");
labelFunc04B4_0105:
	case "Sultan" attend labelFunc04B4_0129:
	message("「對人類來說，他看起來夠好。即使以人類的標準來看，他也有點瘋狂。告訴你，他住在我們西邊的一個島上。至少我知道，我珍貴的財產在他手上會很安全。」");
	say();
	UI_add_answer("安全");
	gflags[0x023B] = true;
	Func0911(0x0032);
	UI_remove_answer("Sultan");
labelFunc04B4_0129:
	case "安全" attend labelFunc04B4_013C:
	message("他點點頭。「據說擁有全不列顛尼亞防守最嚴密的金庫之一。據說是被附魔過的。不知道細節。」");
	say();
	UI_remove_answer("安全");
labelFunc04B4_013C:
	case "Inamo" attend labelFunc04B4_017E:
	UI_remove_answer("Inamo");
	message("「是個優秀的年輕石像鬼。由祭壇看守者 Teregus 撫養長大。因為祭壇崇拜者與友誼會之間的緊張關係而離開了城鎮。對友誼會感到憤怒且不信任。有他的消息嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc04B4_017A;
	message("「太好了！你見過他？知道他過得怎樣嗎？好嗎？」");
	say();
	gflags[0x0238] = true;
	UI_push_answers();
	UI_add_answer(["被謀殺", "不好", "好"]);
	goto labelFunc04B4_017E;
labelFunc04B4_017A:
	message("「啊。太糟糕了。告訴你， Teregus 想知道他過得怎樣。」");
	say();
labelFunc04B4_017E:
	case "好" attend labelFunc04B4_018E:
	message("「非常好。知道 Teregus 聽到這個消息也會很高興的！」");
	say();
	UI_pop_answers();
labelFunc04B4_018E:
	case "被謀殺" attend labelFunc04B4_019E:
	message("「真是個壞消息！他是個這麼好的石像鬼。知道 Teregus 一定會心碎。希望他不要太傷心，但你應該立刻把消息帶給他。由你來告訴他會比較好。」");
	say();
	UI_pop_answers();
labelFunc04B4_019E:
	case "月之門" attend labelFunc04B4_01B1:
	message("「我自己擁有的月之寶珠 (Orb of the Moons) 最近爆炸了！再也無法透過月之門旅行了。真奇怪！」");
	say();
	UI_remove_answer("月之門");
labelFunc04B4_01B1:
	case "不好" attend labelFunc04B4_01C1:
	message("「真是個遺憾。會把這個消息帶給 Teregus 。還在納悶為什麼最近都沒聽到 Inamo 的消息。」");
	say();
	UI_pop_answers();
labelFunc04B4_01C1:
	case "Teregus" attend labelFunc04B4_01EA:
	message("「確實是個優秀的年輕石像鬼。也是最明理的之一。選擇堅持古老的方式，祭壇的方式。看到一些最年輕的仍然仰慕他，但大多數似乎都被友誼會的魅力吸引走了。」");
	say();
	if (!(!gflags[0x0238])) goto labelFunc04B4_01E3;
	message("「告訴你他的孩子， Inamo ，現在在 Trinsic 。」");
	say();
	gflags[0x0239] = true;
	UI_add_answer("Inamo");
labelFunc04B4_01E3:
	UI_remove_answer("Teregus");
labelFunc04B4_01EA:
	case "友誼會" attend labelFunc04B4_020A:
	message("「不知道該如何看待他們和他們的教義。似乎不危險，但沒有遵循古老的方式，也就是熱情、勤勉和控制的方式。當然，假裝崇拜 Terfin 的神殿，特別是控制神殿，但還不能信任他們。等著瞧吧。有著強勢的領袖擁護著屈服的教義。」他聳了聳肩。~~「也許真的受到了啟發，也許沒有。」");
	say();
	UI_add_answer(["Terfin", "領袖"]);
	UI_remove_answer("友誼會");
labelFunc04B4_020A:
	case "領袖" attend labelFunc04B4_022A:
	message("「通知你，友誼會由兩位有翼弟兄領導。叫做 Runeb 和 Quan 。」");
	say();
	UI_add_answer(["Runeb", "Quan"]);
	UI_remove_answer("領袖");
labelFunc04B4_022A:
	case "Runeb" attend labelFunc04B4_0255:
	message("「在你們的語言中，意思是『紅色迷霧』。之所以被賦予這個名字，是因為這就是他在戰鬥後留給對手的一切。在被友誼會改變之前，被認為是個特別殘忍且危險的石像鬼。」");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0002) goto labelFunc04B4_024E;
	message("「已經不在了——現在已經死了。」");
	say();
labelFunc04B4_024E:
	UI_remove_answer("Runeb");
labelFunc04B4_0255:
	case "Quan" attend labelFunc04B4_0268:
	message("「啊，是個有趣的人。擁有強大有力的性格，來自我們社會中最能宣稱擁有高貴血統的家族之一。一直都非常自私，只努力為自己獲取地位和財富。自從加入友誼會後，他的態度的確改變了。然而，我懷疑他的目標是否也改變了。」");
	say();
	UI_remove_answer("Quan");
labelFunc04B4_0268:
	case "告辭" attend labelFunc04B4_0273:
	goto labelFunc04B4_0276;
labelFunc04B4_0273:
	goto labelFunc04B4_005F;
labelFunc04B4_0276:
	endconv;
	message("「道別了，老朋友。如果還有什麼我能為你做的，請毫不猶豫地回來。對於一個致力於古老傳統的老石像鬼來說，這裡現在很孤單……」*");
	say();
labelFunc04B4_027B:
	if (!(event == 0x0000)) goto labelFunc04B4_0284;
	abort;
labelFunc04B4_0284:
	return;
}


