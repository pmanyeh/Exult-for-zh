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
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049B_004A;
	message("\"");
	message(var0001);
	message("？你，也加入了这个邪恶组织？但这怎么可能？你难道看不出他们的教义与美德本身背道而驰吗？你难道不觉得自己更像一只羊而不是一个人吗？我真的很遗憾，因为如果连不列颠尼亚最伟大的英雄之一都与这种污秽同流合污，那么我们这片伟大的土地就没有希望了！」他厌恶地转过身去。*");
	say();
	abort;
labelFunc049B_004A:
	if (!(!gflags[0x01FF])) goto labelFunc049B_005C;
	message("你看到一个脸上带着不悦表情的男人。");
	say();
	gflags[0x01FF] = true;
	goto labelFunc049B_0066;
labelFunc049B_005C:
	message("Cubolt 擡起头。「是的，");
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
	case "职业" attend labelFunc049B_00A2:
	message("「我是一名农夫，");
	message(var0001);
	message("。我在弟弟 Tolemac 和家庭友人 Morz 的帮助下管理我的农场。」");
	say();
	UI_add_answer(["Tolemac", "Morz"]);
labelFunc049B_00A2:
	case "Moonglow" attend labelFunc049B_00BC:
	message("「现在这座城市占据了整个岛屿，包括 Lycaeum。不过，大多数居民仍然住在南部。我们在不列颠城本岛的正东方。」");
	say();
	UI_add_answer("居民");
	UI_remove_answer("Moonglow");
labelFunc049B_00BC:
	case "Morz" attend labelFunc049B_00D6:
	message("「我和弟弟认识 Morz 大半辈子了。当他不忙着为自己的口吃烦恼时，他非常友善。不幸的是，他太常听 Tolemac 的话了。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("Morz");
labelFunc049B_00D6:
	case "口吃" attend labelFunc049B_00E9:
	message("Cubolt 低下头看着地面，悲伤地摇摇头。「他五岁时就开始口吃了。他和弟弟在他父母驾驶的马车后面摔跤。他们撞到一个颠簸，他掉了出去——头部着地。从那时起，他就有了口吃。」他擡头看着你。「奇怪的是，他和 Tolemac 都不记得那场意外了。或者至少，Tolemac 不记得。我无法说服 Morz 谈论这件事。」");
	say();
	UI_remove_answer("口吃");
labelFunc049B_00E9:
	case "居民" attend labelFunc049B_010A:
	message("「Lycaeum 的办事员 Zelda 应该是谈论 Moonglow 居民的最佳人选。或者是酒保，虽然我不知道他的名字。我知道天文台台长和 Lycaeum 负责人是双胞胎，但我从未见过他们任何一个。我确实知道你不想和友谊会的 Rankin 或 Balayna 说话。他们对我们曾经宜人的城市来说是个坏消息。」");
	say();
	if (!(!var0002)) goto labelFunc049B_0103;
	UI_add_answer("友谊会");
labelFunc049B_0103:
	UI_remove_answer("居民");
labelFunc049B_010A:
	case "Tolemac" attend labelFunc049B_0132:
	message("「他是我的弟弟。我还需要多说什么吗？不过我有点担心他。我已经习惯他叛逆的行为了，但他最近加入了友谊会。那让我感到害怕。他们让我感到害怕。我试着让他清醒过来，但他太忙于享受让我担心的过程而听不进去。而且，他还试图让 Morz 也加入。我希望我能让他重新考虑。」");
	say();
	if (!(!var0002)) goto labelFunc049B_0124;
	UI_add_answer("友谊会");
labelFunc049B_0124:
	UI_add_answer("重新考虑");
	UI_remove_answer("Tolemac");
labelFunc049B_0132:
	case "友谊会" attend labelFunc049B_0149:
	message("他朝地上吐了口口水。「友谊会根本就是不列颠尼亚的毒瘤。他们有一种奇怪的理念，教导你忘记自己是谁并跟随他们。这个过程使人失去人性，而且我认为这与八大美德背道而驰。不仅如此，他们在 Moonglow 的领导人还说服了 Tolemac 加入。」");
	say();
	var0002 = true;
	UI_remove_answer("友谊会");
labelFunc049B_0149:
	case "重新考虑" attend labelFunc049B_016A:
	message("「不幸的是，Tolemac 不会听我的。不过，」他开始满怀希望地微笑，「他或许会听你的，");
	message(var0001);
	message("。也许你能说服他回心转意。我会非常感激的！或许，」他补充道，「你也可以要求 Morz 不要加入。」");
	say();
	gflags[0x01D6] = true;
	gflags[0x01D7] = true;
	UI_remove_answer("重新考虑");
labelFunc049B_016A:
	case "告辞" attend labelFunc049B_0175:
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


