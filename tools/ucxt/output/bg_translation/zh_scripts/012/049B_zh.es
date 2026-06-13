#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func049B object#(0x49B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc049B_0183;
	UI_show_npc_face(0xFF65, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049B_004A;
	message("\"");
	message(var0001);
	message("？你，也加入了這個邪惡組織？但這怎麼可能？你難道看不出他們的教義與美德本身背道而馳嗎？你難道不覺得自己更像一隻羊而不是一個人嗎？我真的很遺憾，因為如果連不列顛尼亞最偉大的英雄之一都與這種污穢同流合污，那麼我們這片偉大的土地就沒有希望了！」他厭惡地轉過身去。*");
	say();
	abort;
labelFunc049B_004A:
	if (!(!gflags[0x01FF])) goto labelFunc049B_005C;
	message("你看到一個臉上帶著不悅表情的男人。");
	say();
	gflags[0x01FF] = true;
	goto labelFunc049B_0066;
labelFunc049B_005C:
	message("Cubolt 抬起頭。「是的，");
	message(var0001);
	message("？」");
	say();
labelFunc049B_0066:
	converse attend labelFunc049B_0178;
	case "姓名" attend labelFunc049B_0083:
	message("「我是 Moonglow 的 Cubolt。」");
	say();
	UI_add_answer("Moonglow");
	UI_remove_answer("姓名");
labelFunc049B_0083:
	case "職業" attend labelFunc049B_00A2:
	message("「我是一名農夫，");
	message(var0001);
	message("。我在弟弟 Tolemac 和家庭友人 Morz 的幫助下管理我的農場。」");
	say();
	UI_add_answer(["Tolemac", "Morz"]);
labelFunc049B_00A2:
	case "Moonglow" attend labelFunc049B_00BC:
	message("「現在這座城市佔據了整個島嶼，包括 Lycaeum。不過，大多數居民仍然住在南部。我們在 Britain 本島的正東方。」");
	say();
	UI_add_answer("居民");
	UI_remove_answer("Moonglow");
labelFunc049B_00BC:
	case "Morz" attend labelFunc049B_00D6:
	message("「我和弟弟認識 Morz 大半輩子了。當他不忙著為自己的口吃煩惱時，他非常友善。不幸的是，他太常聽 Tolemac 的話了。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("Morz");
labelFunc049B_00D6:
	case "口吃" attend labelFunc049B_00E9:
	message("Cubolt 低下頭看著地面，悲傷地搖搖頭。「他五歲時就開始口吃了。他和弟弟在他父母駕駛的馬車後面摔跤。他們撞到一個顛簸，他掉了出去——頭部著地。從那時起，他就有了口吃。」他抬頭看著你。「奇怪的是，他和 Tolemac 都不記得那場意外了。或者至少，Tolemac 不記得。我無法說服 Morz 談論這件事。」");
	say();
	UI_remove_answer("口吃");
labelFunc049B_00E9:
	case "居民" attend labelFunc049B_010A:
	message("「Lycaeum 的辦事員 Zelda 應該是談論 Moonglow 居民的最佳人選。或者是酒保，雖然我不知道他的名字。我知道天文台台長和 Lycaeum 負責人是雙胞胎，但我從未見過他們任何一個。我確實知道你不想和友誼會的 Rankin 或 Balayna 說話。他們對我們曾經宜人的城市來說是個壞消息。」");
	say();
	if (!(!var0002)) goto labelFunc049B_0103;
	UI_add_answer("友誼會");
labelFunc049B_0103:
	UI_remove_answer("居民");
labelFunc049B_010A:
	case "Tolemac" attend labelFunc049B_0132:
	message("「他是我的弟弟。我還需要多說什麼嗎？不過我有點擔心他。我已經習慣他叛逆的行為了，但他最近加入了友誼會。那讓我感到害怕。他們讓我感到害怕。我試著讓他清醒過來，但他太忙於享受讓我擔心的過程而聽不進去。而且，他還試圖讓 Morz 也加入。我希望我能讓他重新考慮。」");
	say();
	if (!(!var0002)) goto labelFunc049B_0124;
	UI_add_answer("友誼會");
labelFunc049B_0124:
	UI_add_answer("重新考慮");
	UI_remove_answer("Tolemac");
labelFunc049B_0132:
	case "友誼會" attend labelFunc049B_0149:
	message("他朝地上吐了口口水。「友誼會根本就是不列顛尼亞的毒瘤。他們有一種奇怪的理念，教導你忘記自己是誰並跟隨他們。這個過程使人失去人性，而且我認為這與八大美德背道而馳。不僅如此，他們在 Moonglow 的領導人還說服了 Tolemac 加入。」");
	say();
	var0002 = true;
	UI_remove_answer("友誼會");
labelFunc049B_0149:
	case "重新考慮" attend labelFunc049B_016A:
	message("「不幸的是，Tolemac 不會聽我的。不過，」他開始滿懷希望地微笑，「他或許會聽你的，");
	message(var0001);
	message("。也許你能說服他回心轉意。我會非常感激的！或許，」他補充道，「你也可以要求 Morz 不要加入。」");
	say();
	gflags[0x01D6] = true;
	gflags[0x01D7] = true;
	UI_remove_answer("重新考慮");
labelFunc049B_016A:
	case "告辭" attend labelFunc049B_0175:
	goto labelFunc049B_0178;
labelFunc049B_0175:
	goto labelFunc049B_0066;
labelFunc049B_0178:
	endconv;
	message("「保重，");
	message(var0001);
	message("。」*");
	say();
labelFunc049B_0183:
	if (!(event == 0x0000)) goto labelFunc049B_0191;
	Func092E(0xFF65);
labelFunc049B_0191:
	return;
}


