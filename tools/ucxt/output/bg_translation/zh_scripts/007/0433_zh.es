#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A7 0x8A7 ();
extern void Func092E 0x92E (var var0000);

void Func0433 object#(0x433) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0433_01A1;
	UI_show_npc_face(0xFFCD, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCD));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00B4])) goto labelFunc0433_004F;
	message("你看見一位看起來很結實的農婦。她給了你一個好客的微笑，然後回到她的雜務上。");
	say();
	gflags[0x00B4] = true;
	goto labelFunc0433_0059;
labelFunc0433_004F:
	message("「是什麼風把你今天又吹來了，");
	message(var0000);
	message("？」 Kelly 說。");
	say();
labelFunc0433_0059:
	converse attend labelFunc0433_0196;
	case "姓名" attend labelFunc0433_0075:
	message("「我叫 Kelly ，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc0433_0075:
	case "職業" attend labelFunc0433_0091:
	message("「我丈夫 Fred 和我經營這個農夫市集。」");
	say();
	UI_add_answer(["Fred", "農夫市集", "買東西"]);
labelFunc0433_0091:
	case "Fred" attend labelFunc0433_00B7:
	message("「我的 Fred 是不列顛城最受尊敬的商人之一。他賣 Brownie 和 Mack 種的蔬菜和雞蛋，還有異國進口水果。」");
	say();
	UI_remove_answer("Fred");
	UI_add_answer(["雞蛋", "水果和蔬菜", "Brownie", "Mack"]);
labelFunc0433_00B7:
	case "農夫市集" attend labelFunc0433_00D7:
	message("「農夫市集是大部分不列顛城人買食物的地方。哎呀，就連 Paws 的人也會來這裡買雞蛋和蔬菜。自從多年前開設這個市集以來， Fred 從未漲過任何東西的價格。」");
	say();
	UI_remove_answer("農夫市集");
	UI_add_answer(["不列顛城", "Paws"]);
labelFunc0433_00D7:
	case "雞蛋" attend labelFunc0433_00EA:
	message("「農夫 Mack 的雞下了很多蛋。這裡的人胃口這麼好真是件好事！」");
	say();
	UI_remove_answer("雞蛋");
labelFunc0433_00EA:
	case "水果和蔬菜" attend labelFunc0433_00FD:
	message("「我們主要賣給年紀大的人。我相信你知道小孩子多不喜歡吃蔬菜。有些人不想在家裡放太多水果，因為怕招惹果蠅。」");
	say();
	UI_remove_answer("水果和蔬菜");
labelFunc0433_00FD:
	case "Brownie" attend labelFunc0433_0110:
	message("「Brownie 是個好人。我真希望他能再次競選市長。如果他選了，你一定要投給他。」");
	say();
	UI_remove_answer("Brownie");
labelFunc0433_0110:
	case "Mack" attend labelFunc0433_0123:
	message("「我相信可憐的老 Mack 跟他的雞關在一起太久了。他是個好人。別被他講的奇怪故事給嚇跑了。他很少睡覺，因為他幾乎整晚都在盯著天空看。當然，他的公雞在黎明時會啼叫，沒有哪個農夫能睡到日出之後的。所以他的精神有點不濟。」");
	say();
	UI_remove_answer("Mack");
labelFunc0433_0123:
	case "不列顛城" attend labelFunc0433_0136:
	message("「喔，在不列顛城他們會尋找高品質的農產品。我看到在這裡買東西的人會仔細檢查每顆雞蛋有沒有裂縫，每顆蔬菜有沒有腐壞的跡象。」");
	say();
	UI_remove_answer("不列顛城");
labelFunc0433_0136:
	case "Paws" attend labelFunc0433_0149:
	message("「Paws 的人總是缺錢。我對他們深感同情。他們總是在找最便宜的物品來買，因為那是他們唯一負擔得起的。」");
	say();
	UI_remove_answer("Paws");
labelFunc0433_0149:
	case "買東西" attend labelFunc0433_0188:
	if (!(!(var0002 == 0x0007))) goto labelFunc0433_0163;
	message("「市集現在打烊了。你必須在我們營業時間再來。」");
	say();
	goto labelFunc0433_0181;
labelFunc0433_0163:
	message("「你想買些雞蛋、水果或蔬菜嗎？我們這裡有很多美味新鮮的雞蛋。而且我們的蔬菜保證能讓你保持健康。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0433_017D;
	message("「我相信我們這裡一定有你喜歡的東西。」");
	say();
	Func08A7();
	goto labelFunc0433_0181;
labelFunc0433_017D:
	message("「或許下次吧。」");
	say();
labelFunc0433_0181:
	UI_remove_answer("買東西");
labelFunc0433_0188:
	case "告辭" attend labelFunc0433_0193:
	goto labelFunc0433_0196;
labelFunc0433_0193:
	goto labelFunc0433_0059;
labelFunc0433_0196:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0433_01A1:
	if (!(event == 0x0000)) goto labelFunc0433_0228;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFCD));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0433_0222;
	if (!(var0004 == 0x0001)) goto labelFunc0433_01E5;
	var0005 = "@快來農夫市集！@";
labelFunc0433_01E5:
	if (!(var0004 == 0x0002)) goto labelFunc0433_01F5;
	var0005 = "@市集開張囉！@";
labelFunc0433_01F5:
	if (!(var0004 == 0x0003)) goto labelFunc0433_0205;
	var0005 = "@蔬菜！肉品！@";
labelFunc0433_0205:
	if (!(var0004 == 0x0004)) goto labelFunc0433_0215;
	var0005 = "@走過路過不要錯過！@";
labelFunc0433_0215:
	UI_item_say(0xFFCD, var0005);
	goto labelFunc0433_0228;
labelFunc0433_0222:
	Func092E(0xFFCD);
labelFunc0433_0228:
	return;
}


