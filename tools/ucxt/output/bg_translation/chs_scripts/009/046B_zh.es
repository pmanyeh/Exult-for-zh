#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);

void Func046B object#(0x46B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc046B_0009;
	abort;
labelFunc046B_0009:
	UI_show_npc_face(0xFF95, 0x0000);
	var0000 = Func0908();
	var0001 = "圣者";
	var0002 = Func0909();
	if (!(!gflags[0x02CF])) goto labelFunc046B_0037;
	message("你看到一个巨大的独眼巨人。牠看着你，恼怒地眨着眼睛。");
	say();
	gflags[0x02CF] = true;
	goto labelFunc046B_003B;
labelFunc046B_0037:
	message("「你要做什么？」 Iskander 说。");
	say();
labelFunc046B_003B:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02DB]) goto labelFunc046B_0058;
	UI_add_answer("Eiko 和 Amanda");
labelFunc046B_0058:
	converse attend labelFunc046B_02B3;
	case "姓名" attend labelFunc046B_006E:
	message("「我是铁心氏族 (Ironheart) 的人，是 Valador 的第十一个儿子。他们叫我 Iskander 。」");
	say();
	UI_remove_answer("姓名");
labelFunc046B_006E:
	case "职业" attend labelFunc046B_0087:
	message("「我的独眼巨人族人说我是个英雄。你们许多人类说我是个怪物。毫无疑问，真相介于两者之间。」");
	say();
	UI_add_answer(["英雄", "怪物"]);
labelFunc046B_0087:
	case "英雄" attend labelFunc046B_00AA:
	message("「一百八十九年前，当那七位凝视者 (Gazer) 王子用魔法偷走我们部落首领的眼睛时，我杀了他们，但这些事现在已经是古老的历史，不再重要了。」");
	say();
	UI_remove_answer("英雄");
	UI_add_answer(["部落", "眼睛", "古老的历史"]);
labelFunc046B_00AA:
	case "怪物" attend labelFunc046B_00C4:
	message("「在无数次的情况下，我让那些误以为我们种族只配被掠夺的人类入侵者落得悲惨的下场。但我跟你无冤无仇。」他停下来仔细端详你。「目前是这样。」");
	say();
	UI_remove_answer("怪物");
	UI_add_answer("你");
labelFunc046B_00C4:
	case "你" attend labelFunc046B_0110:
	message("「你知道我的名字，但我还不知道你的名字。我喜欢知道我在跟谁说话。你的名字是什么？」");
	say();
	var0003 = Func090B([var0001, var0000]);
	if (!(var0003 == var0001)) goto labelFunc046B_00F1;
	message("「我听过你的事，圣者。我知道你以前曾与我们同类发生过冲突。但我也听过关于你的英雄事迹和精神探索的故事，我相信你是一个公正高尚的人。你可以称我为朋友。」");
	say();
	gflags[0x02D6] = true;
labelFunc046B_00F1:
	if (!(var0003 == var0000)) goto labelFunc046B_0109;
	message("「很高兴认识你， ");
	message(var0000);
	message("。」");
	say();
	gflags[0x02D5] = true;
labelFunc046B_0109:
	UI_remove_answer("你");
labelFunc046B_0110:
	case "部落" attend labelFunc046B_012A:
	message("「我部落的人是安静的人民。他们在岩石土壤上耕作，同时也是非常好的工具制造者。我被派去为他们寻找新的家园。」");
	say();
	UI_remove_answer("部落");
	UI_add_answer("家园");
labelFunc046B_012A:
	case "眼睛" attend labelFunc046B_013D:
	message("「独眼巨人的眼睛对不列颠尼亚一些不那么文明的种族来说，被视为一种珍馐。曾经有两次邪恶的生物试图夺取我的眼睛，而我也两次吃了他们的心脏。」");
	say();
	UI_remove_answer("眼睛");
labelFunc046B_013D:
	case "古老的历史" attend labelFunc046B_0157:
	message("「然后他们叫我『神奇男孩 (Wonder Boy) 』。近一百年来，那都是我的绰号。当他们不再那么叫我时，我非常感激！」");
	say();
	UI_remove_answer("古老的历史");
	UI_add_answer("神奇男孩");
labelFunc046B_0157:
	case "神奇男孩" attend labelFunc046B_016A:
	message("Iskander 瞇着眼睛看你。「别再提那个了！」");
	say();
	UI_remove_answer("神奇男孩");
labelFunc046B_016A:
	case "家园" attend labelFunc046B_018A:
	message("「我的村庄在很多天的路程之外。那里的人们渴望一个能与周遭环境和平共处的地方。我还没找到这样的地方，但我会到处寻找，直到我找到为止。」");
	say();
	UI_remove_answer("家园");
	UI_add_answer(["和平", "到处"]);
labelFunc046B_018A:
	case "和平" attend labelFunc046B_019D:
	message("「虽然我两百零六岁了，这对我们种族来说并不算老，但我已经有一颗老人的心。英雄的冒险对我已经没有吸引力了。我渴望和我的族人安定下来，在田里耕种，或在我的工坊里制作东西度日。」");
	say();
	UI_remove_answer("和平");
labelFunc046B_019D:
	case "到处" attend labelFunc046B_01BD:
	message("「我的寻找把我带到了这个可怕的地方。我错误地以为既然魔法失效了，这里会相对安全。但在这里，我被一个可怕的谜团困惑住了。」");
	say();
	UI_remove_answer("到处");
	UI_add_answer(["魔法", "谜团"]);
labelFunc046B_01BD:
	case "谜团" attend labelFunc046B_01DD:
	message("「站在这个地方其中一个房间的门口，我看到了一个巨大的四面体影像。当我试图靠近它时，一阵失忆的感觉袭来。我又回到了门口。我什么都不记得了。」");
	say();
	UI_remove_answer("谜团");
	UI_add_answer(["四面体", "失忆"]);
labelFunc046B_01DD:
	case "四面体" attend labelFunc046B_01F0:
	message("「我相信那是你们人类用来描述有四个面的多面体的词。」");
	say();
	UI_remove_answer("四面体");
labelFunc046B_01F0:
	case "失忆" attend labelFunc046B_020A:
	message("「每次我试图靠近四面体时，这种失忆的感觉都会袭来。我不知道这是什么邪恶的魔法。」");
	say();
	UI_remove_answer("失忆");
	UI_add_answer("邪恶的魔法");
labelFunc046B_020A:
	case "邪恶的魔法" attend labelFunc046B_023A:
	if (!gflags[0x0003]) goto labelFunc046B_021F;
	message("「既然你已经摧毁了神秘的四面体，我将完成我对这个地方的探索。我有一种感觉，我寻找的家园非常遥远，但谁知道下一个能指引我找到它的线索会在哪里呢。」");
	say();
	goto labelFunc046B_0233;
labelFunc046B_021F:
	if (!gflags[0x02D6]) goto labelFunc046B_0229;
	message("「或许你能解开这个谜团。我到目前为止都无法解开。但我会留在这里，直到它的秘密被揭开。」");
	say();
labelFunc046B_0229:
	if (!gflags[0x02D5]) goto labelFunc046B_0233;
	message("「我警告你这个地方不安全。它潜藏着未知的危险。或许你离开这里会比较好。」");
	say();
labelFunc046B_0233:
	UI_remove_answer("邪恶的魔法");
labelFunc046B_023A:
	case "魔法" attend labelFunc046B_025B:
	if (!(!gflags[0x0003])) goto labelFunc046B_0250;
	message("「你肯定知道魔法不再像以前那样有效了。有人说魔法的时代已经结束了。如果是这样，我担心这个世界上可能没有我族人的容身之处了。」");
	say();
	goto labelFunc046B_0254;
labelFunc046B_0250:
	message("「当然，既然你已经摧毁了四面体，所有的魔法都已经恢复了。我祝贺你的英雄事迹！」");
	say();
labelFunc046B_0254:
	UI_remove_answer("魔法");
labelFunc046B_025B:
	case "Eiko 和 Amanda" attend labelFunc046B_027B:
	message("「是的，我以前听过这些名字。那是两名一直追着我寻仇的战士的名字。她们说我杀了她们的父亲，我必须向你承认这是真的。我确实杀了她们的父亲。」");
	say();
	UI_remove_answer("Eiko 和 Amanda");
	UI_add_answer(["复仇", "杀了她们的父亲"]);
labelFunc046B_027B:
	case "复仇" attend labelFunc046B_028E:
	message("「我知道 Eiko 和 Amanda 一直在追捕我寻求复仇。我说让她们来吧。我不会站在原地等她们，也不会逃避她们。当她们找到我时，欢迎她们试着从我这里讨回她们的正义。如果她们赢了，那也是命中注定。如果她们输了，我也没有遗憾。」");
	say();
	UI_remove_answer("复仇");
labelFunc046B_028E:
	case "杀了她们的父亲" attend labelFunc046B_02A5:
	message("「她们父亲的名字是 Kalideth 。他患有法师的疯狂症。他对我的攻击是毫无理由的。出于某种原因，他把我族人归咎于魔法失效的原因。他自己的魔法依然相当强大，我勉强在战斗中活了下来。我出于自卫杀了 Kalideth ，但我并不想杀他。我希望这个世界上还留存一些魔法，我和其他人一样哀悼他的离世。」");
	say();
	var0004 = true;
	UI_remove_answer("杀了她们的父亲");
labelFunc046B_02A5:
	case "告辞" attend labelFunc046B_02B0:
	goto labelFunc046B_02B3;
labelFunc046B_02B0:
	goto labelFunc046B_0058;
labelFunc046B_02B3:
	endconv;
	if (!gflags[0x02D6]) goto labelFunc046B_02BF;
	message("「再见，圣者。」*");
	say();
	abort;
labelFunc046B_02BF:
	if (!gflags[0x02D5]) goto labelFunc046B_02D2;
	message("「再见， ");
	message(var0000);
	message("。」*");
	say();
	goto labelFunc046B_02D6;
labelFunc046B_02D2:
	message("「再见。」*");
	say();
labelFunc046B_02D6:
	return;
}


