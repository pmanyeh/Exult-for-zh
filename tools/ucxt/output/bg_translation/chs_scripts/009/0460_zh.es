#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0460 object#(0x460) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0460_0009;
	abort;
labelFunc0460_0009:
	UI_show_npc_face(0xFFA0, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = Func08F7(0xFFAD);
	if (!var0001) goto labelFunc0460_003F;
	UI_add_answer("Margareta");
labelFunc0460_003F:
	if (!gflags[0x01D2]) goto labelFunc0460_004C;
	UI_add_answer("沙漏");
labelFunc0460_004C:
	if (!(!gflags[0x011B])) goto labelFunc0460_005E;
	message("你看到一个有着深情双眼、肤色黝黑的吉普赛人，穿着色彩鲜艳的衣服。他看起来仿佛把整个世界的重担都扛在肩上。");
	say();
	gflags[0x011B] = true;
	goto labelFunc0460_0062;
labelFunc0460_005E:
	message("「再次问候你，」Jergi 说着鞠了个躬，用手做了一个旋转的姿势。");
	say();
labelFunc0460_0062:
	converse attend labelFunc0460_01B4;
	case "姓名" attend labelFunc0460_0078:
	message("「我是 Jergi。很高兴认识你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0460_0078:
	case "职业" attend labelFunc0460_008B:
	message("「我是吉普赛之王。」");
	say();
	UI_add_answer("吉普赛人");
labelFunc0460_008B:
	case "吉普赛人" attend labelFunc0460_00AB:
	message("「我的人民在这个世界上，几乎已经完全灭绝了。既然…我是他们的领袖，我必将他们的福祉，视为我唯一的责任。很快，将决定我们是否要离开 Minoc。」");
	say();
	UI_remove_answer("吉普赛人");
	UI_add_answer(["灭绝", "Minoc"]);
labelFunc0460_00AB:
	case "灭绝" attend labelFunc0460_00BE:
	message("「我们吉普赛人是为了流浪而生的民族。但…欢迎我们的地方越来越少了。我们是自古 Sosaria 时代以来，一直困扰我们族群的古老仇恨的受害者。」");
	say();
	UI_remove_answer("灭绝");
labelFunc0460_00BE:
	case "Minoc" attend labelFunc0460_00DE:
	message("「我们以为会被接受，所以来到这里。而且，很长一段时间以来，似乎的确如此。但…这起野蛮的谋杀案发生之后，看起来…是我们再次流浪的时候了。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["接受", "谋杀案"]);
labelFunc0460_00DE:
	case "接受" attend labelFunc0460_00F1:
	message("「我们总是受到他人的偏见！我们被称为小偷或更糟的称呼！但我们是一个只希望演奏音乐、跳舞、并和平生活的民族。我以为这里的人理解这一点。」");
	say();
	UI_remove_answer("接受");
labelFunc0460_00F1:
	case "谋杀案" attend labelFunc0460_0114:
	message("「Frederico 是我唯一的兄弟，除了 Frederico 本人之外，没有人比我更爱 Tania。发生在他们身上的事令人难以启齿。我希望我能告诉你更多。如果你愿意，你可以和 Sasha 谈谈，但只能简短地谈。现在是他哀悼的时候。」");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer(["Frederico", "Tania", "Sasha"]);
labelFunc0460_0114:
	case "Frederico" attend labelFunc0460_0127:
	message("「有些人觉得…我的兄弟 Frederico 是个严苛无情的人，但咱们这帮懂他的人都瞧得明白——他呀，不过就是被那股支配着全天下吉普赛人的骄傲与激情给推着走罢了。」");
	say();
	UI_remove_answer("Frederico");
labelFunc0460_0127:
	case "Tania" attend labelFunc0460_013A:
	message("「她是我见过最美丽的女人。我兄弟和我两人都爱上了她。我们都试图赢得她的芳心。我失败了，并以为我会在孤独中度过余生。直到去年，我的妻子 Margareta 和我结婚，我暗自破碎的心才得以修复。」");
	say();
	UI_remove_answer("Tania");
labelFunc0460_013A:
	case "Sasha" attend labelFunc0460_015A:
	message("「他是 Frederico 和 Tania 的儿子。他为了解更多关于友谊会的事，离开我们了。当然，他对发生的事情感到自责……」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["自责", "友谊会"]);
labelFunc0460_015A:
	case "自责" attend labelFunc0460_016D:
	message("「我们不怪 Sasha 发生了什么事。我们不会惩罚他。」");
	say();
	UI_remove_answer("自责");
labelFunc0460_016D:
	case "友谊会" attend labelFunc0460_0180:
	message("「Sasha 必须决定他是想留在他的族人身边，还是回到友谊会。我相信他会做出正确的选择。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0460_0180:
	case "Margareta" attend labelFunc0460_0193:
	message("「我的妻子是个有智能的女人，她有一些预见未来的天赋。你应该跟她谈谈。」");
	say();
	UI_remove_answer("Margareta");
labelFunc0460_0193:
	case "沙漏" attend labelFunc0460_01A6:
	message("「我不知道你在说什么。我对一位名叫 Nicodemus 的法师，或是他的沙漏一无所知。要小心——这些天法师们都相当疯狂！」");
	say();
	UI_remove_answer("沙漏");
labelFunc0460_01A6:
	case "告辞" attend labelFunc0460_01B1:
	goto labelFunc0460_01B4;
labelFunc0460_01B1:
	goto labelFunc0460_0062;
labelFunc0460_01B4:
	endconv;
	message("「愿你的努力获得许多好运。」*");
	say();
	return;
}


