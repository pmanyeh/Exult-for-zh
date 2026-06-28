#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func0879 0x879 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func04A2 object#(0x4A2) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04A2_01EC;
	UI_show_npc_face(0xFF5E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0204])) goto labelFunc04A2_003C;
	message("「这个男人用微笑的眼睛看着你。」");
	say();
	goto labelFunc04A2_0040;
labelFunc04A2_003C:
	message("Elad 朝你鞠了个躬。~「很高兴再次见到你。」");
	say();
labelFunc04A2_0040:
	converse attend labelFunc04A2_01DB;
	case "姓名" attend labelFunc04A2_005C:
	message("「我叫 Elad，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A2_005C:
	case "职业" attend labelFunc04A2_0078:
	message("「我是这个社区居民的治疗师。」");
	say();
	UI_add_answer(["居民", "治疗", "社区"]);
labelFunc04A2_0078:
	case "社区" attend labelFunc04A2_00A4:
	message("「Moonglow 是我的家。我一辈子都住这个城镇。但我对这里的生活感到厌倦。我想，是时候离开了。要是我在这里没有这么深的羁绊就好了。」~他悲伤地叹了口气。");
	say();
	if (!(!gflags[0x01ED])) goto labelFunc04A2_0096;
	message("「有一位从 Yew 来拜访的旅行者。他在不列颠尼亚见过许多令人兴奋的事物。我很喜欢听他讲述许多冒险的故事。」");
	say();
	UI_add_answer("旅行者");
labelFunc04A2_0096:
	UI_add_answer("羁绊");
	UI_remove_answer("社区");
labelFunc04A2_00A4:
	case "旅行者" attend labelFunc04A2_00B7:
	message("「他的名字是 Addom。他在镇上的时候，我让他在我的一张床上休息。」");
	say();
	UI_remove_answer("旅行者");
labelFunc04A2_00B7:
	case "治疗" attend labelFunc04A2_00D1:
	message("「是的，我向需要的人出售我的治疗服务。」");
	say();
	UI_add_answer("服务");
	UI_remove_answer("治疗");
labelFunc04A2_00D1:
	case "服务" attend labelFunc04A2_011C:
	var0002 = UI_part_of_day();
	if (!((var0002 == 0x0002) || ((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0006))))) goto labelFunc04A2_0111;
	Func0879(0x0019, 0x000A, 0x01A9);
	goto labelFunc04A2_0115;
labelFunc04A2_0111:
	message("「也许等我在店里工作的时候，你可以过来治疗。」");
	say();
labelFunc04A2_0115:
	UI_remove_answer("服务");
labelFunc04A2_011C:
	case "羁绊" attend labelFunc04A2_012F:
	message("「我在 Moonglow 的病人们。如果不是我，谁来帮助他们呢？」");
	say();
	UI_remove_answer("羁绊");
labelFunc04A2_012F:
	case "居民" attend labelFunc04A2_015B:
	message("「Moonglow 有很多人。我父亲曾经告诉我，在他那个年代，这个城镇要小得多。事实上，他说 Moonglow 以前和 Lycaeum 是分开的！~~「不过，我扯远了。你问起了这里的人。我认识这里的大多数居民。你想了解 Lycaeum、天文台、友谊会、农夫们、训练师，还是酒馆？」");
	say();
	UI_add_answer(["Lycaeum", "天文台", "友谊会", "农夫们", "训练师", "酒馆"]);
	UI_remove_answer("居民");
labelFunc04A2_015B:
	case "Lycaeum" attend labelFunc04A2_016E:
	message("「Lycaeum 由一位名叫 Nelson 的好心人管理。他的顾问是 Zelda。不要在她面前违反任何规定，否则你会受到严厉的斥责！~「Jillian 也在那里学习。她可以教你很多东西。不用担心 Mariah。如果你不去惹她，她是无害的。」");
	say();
	UI_remove_answer("Lycaeum");
labelFunc04A2_016E:
	case "天文台" attend labelFunc04A2_0181:
	message("「那里的负责人是 Brion。他是 Lycaeum 负责人的双胞胎兄弟。我很喜欢他，尽管他和他的兄弟都有点古怪。」");
	say();
	UI_remove_answer("天文台");
labelFunc04A2_0181:
	case "友谊会" attend labelFunc04A2_0194:
	message("「我最不了解这些人。这个分会大约在五年前在一个名叫 Rankin 的男人的领导下开设。几个月前，一名书记加入了他的行列。她的名字叫 Balayna。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04A2_0194:
	case "农夫们" attend labelFunc04A2_01A7:
	message("「Cubolt 拥有那个农场。他和他的弟弟 Tolemac 以及他们的朋友 Morz 一起管理它。我不是很确定，但我相信 Tolemac 最近加入了友谊会。」");
	say();
	UI_remove_answer("农夫们");
labelFunc04A2_01A7:
	case "酒馆" attend labelFunc04A2_01BA:
	message("「Phearcy 在那里当酒保。他是另一个你可以去打听镇民消息的好人。不过，他喜欢八卦，而且可能有点死脑筋。」");
	say();
	UI_remove_answer("酒馆");
labelFunc04A2_01BA:
	case "训练师" attend labelFunc04A2_01CD:
	message("「训练师叫 Chad。我相信他专精于敏捷、技巧性的战斗，使用刀剑之类的武器。如果你想提高你的技能，去见见他。」");
	say();
	UI_remove_answer("训练师");
labelFunc04A2_01CD:
	case "告辞" attend labelFunc04A2_01D8:
	goto labelFunc04A2_01DB;
labelFunc04A2_01D8:
	goto labelFunc04A2_0040;
labelFunc04A2_01DB:
	endconv;
	message("「这么快就要走了，");
	message(var0001);
	message("？很好，祝你的旅程充满繁荣。」~他叹了口气。突然，他的脸色亮了起来。~「等等！也许我可以加入你？」~他迅速站起来，面带微笑。然后，同样突然地，他的笑容消失了。~「不。我不能。我有太多事情要做，有太多人要照顾。也许以后吧？」~他勉强挤出一丝笑容。~「希望下次见面时，");
	message(var0001);
	message("，我能有机会加入你。旅途愉快，我的朋友。」*");
	say();
labelFunc04A2_01EC:
	if (!(event == 0x0000)) goto labelFunc04A2_01FA;
	Func092E(0xFF5E);
labelFunc04A2_01FA:
	return;
}


