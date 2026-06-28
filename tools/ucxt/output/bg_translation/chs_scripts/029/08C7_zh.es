#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08C7 0x8C7 ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFF17, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	message("当演员们就位并戴上面具时，你坐下来观看演出。*");
	say();
	if (!var0001) goto labelFunc08C7_0045;
	UI_show_npc_face(0xFFFE, 0x0000);
	message(" Spark 对你轻声说道：「我真希望有家糖果店有卖糖苹果！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF17, 0x0000);
labelFunc08C7_0045:
	message("音乐响起，戏剧开演，Paul 走上舞台中央并向观众致意。");
	say();
	message("「欢迎来到我们的故事，~一个如此写实的故事。~这是一个悲剧故事~一个男人失去了他的妻子。");
	say();
	message("「但故事不必悲伤~当友谊会在此。~内在力量的三位一体 (Triad) ~让人毫无理由恐惧。」*");
	say();
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFF15, 0x0000);
	message(" Paul 退下，Dustin 登台。Meryl 躺在他面前的地上，摆出死一般的姿势。");
	say();
	message("「这是宿命！这是绝望！这是死亡！~我心爱的妻子离我而去！~疾病将她夺走~只留给我一首挽歌。」");
	say();
	message(" Dustin 用双手抱头，假装在抽泣。当他抽泣时，Meryl 以幽灵般的方式从她的「死亡」中苏醒，然后对 Dustin 说话。*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("「我的丈夫，我的爱人！~不要绝望！这并非宿命！~你将超越~这一切忧郁与阴霾！」*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("「是谁在对我说话？~难道会是她？~还是我真的疯了？~但除了她——还能——是谁？」*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("「我的丈夫，你必须倾听。~你的救赎就在你的掌握之中。~你只需寻找他们——~那些能够提供帮助的人—— 友谊会！」*");
	say();
	UI_remove_npc_face(0xFF16);
	UI_show_npc_face(0xFF15, 0x0000);
	message(" Meryl 缓缓飘下舞台，留下 Dustin 独自一人。");
	say();
	message("「友谊会，她说？~但我为何会需要它？~我有我的八大美德和我的治疗师~有了这些就再也不需要别的了！」*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message(" Paul 与戴着不同面具的 Meryl 一同登台。");
	say();
	message("「但那就是你错的地方！~ 友谊会的存在就是为了帮助你！~内在力量的三位一体 (Triad)  就在这里~带给你一种团结感！」");
	say();
	message("「现在加入我们，你就会明白。~加入你的兄弟与我们的计划~来推广我们团体的宗旨——~你将会成为一个更好的人。」");
	say();
	message("此时，一段精心编排的默剧揭示了 Dustin 如何加入友谊会，从由 Paul 饰演的「分部领袖」手中接过他的徽章，并接受来自 Meryl 的祝贺。");
	say();
	message("「时刻争取团结，~并在所有逆境中信任你的兄弟，~因为价值先于你自己的回报~听我们的话——这必定会实现！」*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("「我愿将我一半的财富奉献给你！~我会听从你的吩咐然后等待。~我的回报总有一天会到来~并将我从可怕的命运中解脱。」");
	say();
	message("Dustin 假装给了 Paul 一些钱。Paul 退场，接着 Dustin 躺在舞台上假装入睡。");
	say();
	message("片刻之后，Meryl 登台，围绕着 Dustin 的身躯跳舞，并在他身上洒下某种闪闪发光的粉末。*");
	say();
	if (!var0000) goto labelFunc08C7_010D;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message(" Iolo 对你轻声说道：「我特别喜欢这视觉效果。你不觉得剧本有点弱吗？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_010D:
	message(" Meryl 离开舞台，Dustin『醒了过来』。瞧啊！他发现他睡觉的地方旁有一个袋子。打开一看，他发现了一捆金币！");
	say();
	message("「我向不列颠王声明！~这是我的回报！凭空而来！~我晚上听到的声音是对的~我将不再在乎我那悲惨的生活！");
	say();
	message("「那声音在梦中降临于我~那是我那如此美妙的『内在』声音。~我现在有了一位伴侣与供应者，~以及一位我所追随的主人。」");
	say();
	message("演员所挑选的词汇——『伴侣』、『供应者』和『主人』——让你感到震惊。你意识到你以前曾听过这些词。*");
	say();
	if (!var0001) goto labelFunc08C7_0142;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这真的很糟糕。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_0142:
	message(" Paul 和 Meryl 在舞台上与 Dustin 会合，他们一起手拉着手。*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message("「友谊会能赋予你目标~加入是唯一的选择~投身于我们正义的事业~并找到你的内在声音。」");
	say();
	message("此时，演员们鞠躬谢幕，你意识到演出结束了。你给予他们礼貌性的掌声。*");
	say();
	gflags[0x000A] = true;
	if (!var0000) goto labelFunc08C7_017E;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「他们说的那个声音是什么意思？我不确定我听得懂。这真是一出令人困惑的戏。我一点也不喜欢。我们浪费了时间和金钱！这是我最后一次让你来决定我们该怎么娱乐自己了！」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08C7_017E:
	abort;
	return;
}
