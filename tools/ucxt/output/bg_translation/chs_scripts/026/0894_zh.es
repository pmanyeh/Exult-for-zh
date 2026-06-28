#game "blackgate"
// externs
extern void Func0896 0x896 ();
extern void Func0895 0x895 ();
extern void Func08FF 0x8FF (var var0000);

void Func0894 0x894 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!gflags[0x031B]) goto labelFunc0894_0010;
	UI_set_schedule_type(var0000, 0x000B);
labelFunc0894_0010:
	if (!(event == 0x0001)) goto labelFunc0894_02D0;
	UI_show_npc_face(0xFEDF, 0x0000);
	if (!(gflags[0x0324] && (!gflags[0x031C]))) goto labelFunc0894_0031;
	message("「我『必须』把生命还给他。他『一定』会有一颗新的心脏！」他强而有力的凝视和站姿，显然表露出他的决心。");
	say();
labelFunc0894_0031:
	if (!gflags[0x0328]) goto labelFunc0894_003A;
	Func0896();
labelFunc0894_003A:
	if (!gflags[0x031B]) goto labelFunc0894_0043;
	Func0895();
labelFunc0894_0043:
	if (!(!gflags[0x0315])) goto labelFunc0894_00A9;
	gflags[0x0315] = true;
	message("石像低着头站着。尽管它有着花岗岩的特征，但脸上明显带着沮丧的神情。令人惊讶的是，它转过身来对你说话。");
	say();
	Func08FF("@天哪，群星在上，我相信这是一只生物！@");
	message("慢慢地，仿佛费了很大的力气，它擡起了头。");
	say();
	UI_show_npc_face(0xFEDF, 0x0000);
	var0001 = UI_get_item_frame(UI_find_nearest(0xFE9C, 0x019E, 0x0028));
	if (!(!((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc0894_0094;
	message("「你……想要什么？」它缓慢地问道。");
	say();
	goto labelFunc0894_009F;
labelFunc0894_0094:
	message("「帮助他？」它小心翼翼地问，指着躺在它旁边的倒塌雕像。");
	say();
	UI_add_answer("帮助");
labelFunc0894_009F:
	UI_add_answer("生物？");
	goto labelFunc0894_00AD;
labelFunc0894_00A9:
	message("「我能如何协助你？」");
	say();
labelFunc0894_00AD:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0002 = false;
	var0003 = false;
labelFunc0894_00C5:
	converse attend labelFunc0894_02CF;
	UI_show_npc_face(0xFEDF, 0x0000);
	case "姓名" attend labelFunc0894_0104:
	UI_remove_answer("姓名");
	if (!gflags[0x031D]) goto labelFunc0894_00EE;
	message("他歪着头，疑惑地看着你。~「我道歉。我不是已经告诉过你我的主人叫我 Bollux 了吗？」");
	say();
	goto labelFunc0894_00F6;
labelFunc0894_00EE:
	message("「我的主人为我命名为 Bollux。");
	say();
	gflags[0x031D] = true;
labelFunc0894_00F6:
	if (!(!var0003)) goto labelFunc0894_0104;
	UI_add_answer("主人");
labelFunc0894_0104:
	case "职业" attend labelFunc0894_0117:
	message("「我是原则神殿的守护者。」");
	say();
	UI_add_answer("守护者");
labelFunc0894_0117:
	case "守护者" attend labelFunc0894_012A:
	UI_remove_answer("守护者");
	message("「我们被……创造出来保护原则神殿。只有……圣者应该使用它们的力量。Adjhar 和我正在……守卫……这时墙壁砸在了 Adjhar 身上。然后传来了巨大的声响……我把他带到这里，这样我就可以修复他，但我不知道……怎么做。」");
	say();
labelFunc0894_012A:
	case "生物？" attend labelFunc0894_0156:
	UI_remove_answer("生物？");
	message("「我们被称为石魔像……因为我们是由石头和岩石制成的。」");
	say();
	if (!(!var0002)) goto labelFunc0894_014F;
	UI_add_answer("制成");
	var0002 = true;
labelFunc0894_014F:
	UI_add_answer("石头");
labelFunc0894_0156:
	case "主人", "Astelleron" attend labelFunc0894_0188:
	UI_remove_answer(["Astelleron", "主人"]);
	var0003 = true;
	message("「Astelleron 制造了我们。他是我们的主人。」");
	say();
	if (!(!var0002)) goto labelFunc0894_0188;
	UI_add_answer("制成");
	var0002 = true;
labelFunc0894_0188:
	case "石头" attend labelFunc0894_019B:
	UI_remove_answer("石头");
	message("「我们是……用这个小岛上采石场的岩石……塑造而成的。」");
	say();
labelFunc0894_019B:
	case "制成" attend labelFunc0894_01CD:
	var0002 = true;
	UI_remove_answer("制成");
	message("「我对这个过程一无所知，但 Astelleron 曾经告诉我，他使用了一种叫做……魔法的东西赋予我们生命和……活力。」魔像停顿了一下，显然意识到了他接下来的想法。~「他不喜欢他的……孤独。他说他很……寂寞。」");
	say();
	UI_add_answer(["魔法", "寂寞"]);
	if (!(!var0003)) goto labelFunc0894_01CD;
	UI_add_answer("Astelleron");
labelFunc0894_01CD:
	case "魔法" attend labelFunc0894_01E7:
	UI_remove_answer("魔法");
	message("「我不知道那……是什么，但他房子里有很多书。也许……那里有关于……魔法的东西。」");
	say();
	UI_add_answer("书籍");
labelFunc0894_01E7:
	case "书籍" attend labelFunc0894_0231:
	UI_remove_answer("书籍");
	if (!(!gflags[0x0323])) goto labelFunc0894_022D;
	message("「我这里有一本书，Adjhar 说里面讲述了关于……我们被……创造的故事。这可能有助于让 Adjhar 复活。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_0226;
	message("他递给你一本非常古老的书。很明显这本书已经被翻阅过很多次，因为皮革封面已经磨损，露出了下面的木头，而且书页也卷角了。~「我已经把石头放好了，」他补充说，「就像……书上说的那样。」");
	say();
	gflags[0x0323] = true;
	goto labelFunc0894_022A;
labelFunc0894_0226:
	message("「你……带了太多东西了。放下一些东西，我就可以把这个给你。」");
	say();
labelFunc0894_022A:
	goto labelFunc0894_0231;
labelFunc0894_022D:
	message("「房子里散落着好几本……其他的书。我不知道……它们是关于什么的。Adjhar 读过它们。」");
	say();
labelFunc0894_0231:
	case "寂寞" attend labelFunc0894_0244:
	UI_remove_answer("寂寞");
	message("「Astelleron 说那是一个……人在周围没有人时的感觉。他告诉我们在我们……出生后他有多……高兴。~ 他称我为……儿子。」");
	say();
labelFunc0894_0244:
	case "帮助" attend labelFunc0894_0299:
	UI_remove_answer("帮助");
	message("「我的同伴……Adjhar……他快死了。你必须帮忙修复他。拜托，我恳求……你。」");
	say();
	if (!(!gflags[0x0323])) goto labelFunc0894_0292;
	message("「我这里有一本书，Adjhar 说里面讲述了关于……我们被……创造的故事。这可能有助于让他复活。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_028E;
	message("他递给你一本非常古老的书。很明显这本书已经被翻阅过很多次，因为皮革封面已经磨损，露出了下面的木头，而且书页也卷角了。「我已经放好了五块……石头来标记……血液的位置。」");
	say();
	UI_add_answer("血液");
	gflags[0x0323] = true;
	goto labelFunc0894_0292;
labelFunc0894_028E:
	message("「你……带了太多东西了。放下一些东西，我就可以把这个给你。」");
	say();
labelFunc0894_0292:
	UI_add_answer("Adjhar");
labelFunc0894_0299:
	case "Adjhar" attend labelFunc0894_02AC:
	UI_remove_answer("Adjhar");
	message("「他是我的兄弟……也是我的朋友。我们一起保护了……神殿。我们不能让他……一直这样下去。帮我……协助他。」");
	say();
labelFunc0894_02AC:
	case "血液" attend labelFunc0894_02BF:
	UI_remove_answer("血液");
	message("「我不……懂那本书，但我记得……血液……」");
	say();
labelFunc0894_02BF:
	case "告辞" attend labelFunc0894_02CC:
	message("「再……见。」*");
	say();
	abort;
labelFunc0894_02CC:
	goto labelFunc0894_00C5;
labelFunc0894_02CF:
	endconv;
labelFunc0894_02D0:
	return;
}


