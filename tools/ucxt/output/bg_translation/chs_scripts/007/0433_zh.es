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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00B4])) goto labelFunc0433_004F;
	message("你看见一位看起来很结实的农妇。她给了你一个好客的微笑，然后回到她的杂务上。");
	say();
	gflags[0x00B4] = true;
	goto labelFunc0433_0059;
labelFunc0433_004F:
	message("「是什么风把你今天又吹来了，");
	message(var0000);
	message("？」 Kelly 说。");
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
	case "职业" attend labelFunc0433_0091:
	message("「我丈夫 Fred 和我经营这个农夫市集。」");
	say();
	UI_add_answer(["Fred", "农夫市集", "买东西"]);
labelFunc0433_0091:
	case "Fred" attend labelFunc0433_00B7:
	message("「我的 Fred 是不列颠城最受尊敬的商人之一。他卖 Brownie 和 Mack 种的蔬菜和鸡蛋，还有异国进口水果。」");
	say();
	UI_remove_answer("Fred");
	UI_add_answer(["鸡蛋", "水果和蔬菜", "Brownie", "Mack"]);
labelFunc0433_00B7:
	case "农夫市集" attend labelFunc0433_00D7:
	message("「农夫市集是大部分不列颠城人买食物的地方。哎呀，就连 Paws 的人也会来这里买鸡蛋和蔬菜。自从多年前开设这个市集以来， Fred 从未涨过任何东西的价格。」");
	say();
	UI_remove_answer("农夫市集");
	UI_add_answer(["不列颠城", "Paws"]);
labelFunc0433_00D7:
	case "鸡蛋" attend labelFunc0433_00EA:
	message("「农夫 Mack 的鸡下了很多蛋。这里的人胃口这么好真是件好事！」");
	say();
	UI_remove_answer("鸡蛋");
labelFunc0433_00EA:
	case "水果和蔬菜" attend labelFunc0433_00FD:
	message("「我们主要卖给年纪大的人。我相信你知道小孩子多不喜欢吃蔬菜。有些人不想在家里放太多水果，因为怕招惹果蝇。」");
	say();
	UI_remove_answer("水果和蔬菜");
labelFunc0433_00FD:
	case "Brownie" attend labelFunc0433_0110:
	message("「Brownie 是个好人。我真希望他能再次竞选市长。如果他选了，你一定要投给他。」");
	say();
	UI_remove_answer("Brownie");
labelFunc0433_0110:
	case "Mack" attend labelFunc0433_0123:
	message("「我相信可怜的老 Mack 跟他的鸡关在一起太久了。他是个好人。别被他讲的奇怪故事给吓跑了。他很少睡觉，因为他几乎整晚都在盯着天空看。当然，他的公鸡在黎明时会啼叫，没有哪个农夫能睡到日出之后的。所以他的精神有点不济。」");
	say();
	UI_remove_answer("Mack");
labelFunc0433_0123:
	case "不列颠城" attend labelFunc0433_0136:
	message("「喔，在不列颠城他们会寻找高品质的农产品。我看到在这里买东西的人会仔细检查每颗鸡蛋有没有裂缝，每颗蔬菜有没有腐坏的迹象。」");
	say();
	UI_remove_answer("不列颠城");
labelFunc0433_0136:
	case "Paws" attend labelFunc0433_0149:
	message("「Paws 的人总是缺钱。我对他们深感同情。他们总是在找最便宜的物品来买，因为那是他们唯一负担得起的。」");
	say();
	UI_remove_answer("Paws");
labelFunc0433_0149:
	case "买东西" attend labelFunc0433_0188:
	if (!(!(var0002 == 0x0007))) goto labelFunc0433_0163;
	message("「市集现在打烊了。你必须在我们营业时间再来。」");
	say();
	goto labelFunc0433_0181;
labelFunc0433_0163:
	message("「你想买些鸡蛋、水果或蔬菜吗？我们这里有很多美味新鲜的鸡蛋。而且我们的蔬菜保证能让你保持健康。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0433_017D;
	message("「我相信我们这里一定有你喜欢的东西。」");
	say();
	Func08A7();
	goto labelFunc0433_0181;
labelFunc0433_017D:
	message("「或许下次吧。」");
	say();
labelFunc0433_0181:
	UI_remove_answer("买东西");
labelFunc0433_0188:
	case "告辞" attend labelFunc0433_0193:
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
	var0005 = "@快来农夫市集！@";
labelFunc0433_01E5:
	if (!(var0004 == 0x0002)) goto labelFunc0433_01F5;
	var0005 = "@市集开张啰！@";
labelFunc0433_01F5:
	if (!(var0004 == 0x0003)) goto labelFunc0433_0205;
	var0005 = "@蔬菜！肉品！@";
labelFunc0433_0205:
	if (!(var0004 == 0x0004)) goto labelFunc0433_0215;
	var0005 = "@走过路过不要错过！@";
labelFunc0433_0215:
	UI_item_say(0xFFCD, var0005);
	goto labelFunc0433_0228;
labelFunc0433_0222:
	Func092E(0xFFCD);
labelFunc0433_0228:
	return;
}


