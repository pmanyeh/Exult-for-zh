#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08B9 0x8B9 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E7 object#(0x4E7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc04E7_04AC;
	UI_show_npc_face(0xFF19, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF19));
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0001 == 0x0017)) goto labelFunc04E7_005A;
	UI_add_answer(["食物", "饮料", "房间", "买卖"]);
labelFunc04E7_005A:
	if (!(!gflags[0x02B4])) goto labelFunc04E7_006C;
	message("你看到一位五十多岁的女人，她早年可能是个海盗侍女。虽然她很粗野，但她有一种特别的母性特质。");
	say();
	gflags[0x02B4] = true;
	goto labelFunc04E7_0070;
labelFunc04E7_006C:
	message("「又见面了，」 Mandy 说。");
	say();
labelFunc04E7_0070:
	converse attend labelFunc04E7_04A7;
	case "姓名" attend labelFunc04E7_0086:
	message("「我是 Mandy 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E7_0086:
	case "职业" attend labelFunc04E7_0159:
	message("「我经营堕落处女 (Fallen Virgin) 旅店和酒馆。我们在早餐、晚餐和深夜时段营业。");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc04E7_014E;
	message("「如果你想要食物或饮料，或者也许是一个房间，请说出来。」");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04E7_0138;
	message("Mandy 看着 Dupre 说：「我认识你吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是的，女士。我几个月前来过这里。」*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("「我记得了！你在为 Brommer 的不列颠尼亚旅游指南工作！你是个酒馆评论家！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「没错，女士。」*");
	say();
	UI_show_npc_face(0xFF19, 0x0000);
	message("「欢迎回来！请尝尝菜单上的任何东西。它们都还是很好吃。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我谢谢妳，女士。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF19, 0x0000);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E7_012E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你是头猪， Dupre 。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E7_012E:
	UI_show_npc_face(0xFF19, 0x0000);
labelFunc04E7_0138:
	UI_add_answer(["食物", "饮料", "房间", "买卖"]);
	goto labelFunc04E7_0152;
labelFunc04E7_014E:
	message("「那就请来酒馆，我会很乐意为你服务。」");
	say();
labelFunc04E7_0152:
	UI_add_answer("堕落处女 (Fallen Virgin)");
labelFunc04E7_0159:
	case "食物" attend labelFunc04E7_0173:
	message("「如果我自己说的话，我们提供一盘很棒的馊水！那道银树叶 真的很特别。你应该尝尝看。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer("银树叶");
labelFunc04E7_0173:
	case "饮料" attend labelFunc04E7_0186:
	message("「我可以提供你葡萄酒和麦酒。」");
	say();
	UI_remove_answer("饮料");
labelFunc04E7_0186:
	case "房间" attend labelFunc04E7_023A:
	message("「我们的房间是每人 10 金币。现在唯一空着的是西南方的房间。其他两间已经有人住了。你想要一间吗？」");
	say();
	if (!Func090A()) goto labelFunc04E7_022F;
	var0005 = UI_get_party_list();
	var0006 = 0x0000;
	enum();
labelFunc04E7_01A6:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc04E7_01BE;
	var0006 = (var0006 + 0x0001);
	goto labelFunc04E7_01A6;
labelFunc04E7_01BE:
	var000A = (var0006 * 0x000A);
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc04E7_0222;
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000C)) goto labelFunc04E7_0207;
	message("「你看看。你带太多包袱了，拿不下房间钥匙！」");
	say();
	goto labelFunc04E7_021F;
labelFunc04E7_0207:
	message("「这是房间钥匙。它只在你离开旅店之前有效。」");
	say();
	var000D = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04E7_021F:
	goto labelFunc04E7_022C;
labelFunc04E7_0222:
	message("「看起来你似乎短缺了一点，");
	message(var0002);
	message("。」");
	say();
labelFunc04E7_022C:
	goto labelFunc04E7_0233;
labelFunc04E7_022F:
	message("「好吧。下次再说。」");
	say();
labelFunc04E7_0233:
	UI_remove_answer("房间");
labelFunc04E7_023A:
	case "买卖" attend labelFunc04E7_0245:
	Func08B9();
labelFunc04E7_0245:
	case "银树叶" attend labelFunc04E7_0258:
	message("「这是你在地球表面上能吃到最他妈赞的馊水！」");
	say();
	UI_remove_answer("银树叶");
labelFunc04E7_0258:
	case "堕落处女 (Fallen Virgin)" attend labelFunc04E7_0318:
	message("「是的，自从我当侍女的日子以来，我就一直经营这家酒馆和旅店。」 Mandy 笑了。「我当时是个相当美丽的人，但你现在看不出来了。我认识镇上的每个人，他们也都认识我。如果你需要知道关于任何人的事，让我知道。」");
	say();
	UI_remove_answer("堕落处女 (Fallen Virgin)");
	if (!gflags[0x02A9]) goto labelFunc04E7_0278;
	UI_add_answer("Danag");
labelFunc04E7_0278:
	if (!gflags[0x02AF]) goto labelFunc04E7_0285;
	UI_add_answer("Blacktooth");
labelFunc04E7_0285:
	if (!gflags[0x02B0]) goto labelFunc04E7_0292;
	UI_add_answer("Mole");
labelFunc04E7_0292:
	if (!gflags[0x02B2]) goto labelFunc04E7_029F;
	UI_add_answer("Budo");
labelFunc04E7_029F:
	if (!gflags[0x02AB]) goto labelFunc04E7_02AC;
	UI_add_answer("Glenno");
labelFunc04E7_02AC:
	if (!gflags[0x02AA]) goto labelFunc04E7_02B9;
	UI_add_answer("Wench");
labelFunc04E7_02B9:
	if (!gflags[0x02AC]) goto labelFunc04E7_02C6;
	UI_add_answer("Martine");
labelFunc04E7_02C6:
	if (!gflags[0x02AD]) goto labelFunc04E7_02D3;
	UI_add_answer("Roberto");
labelFunc04E7_02D3:
	if (!gflags[0x02B1]) goto labelFunc04E7_02E0;
	UI_add_answer("Lucky");
labelFunc04E7_02E0:
	if (!gflags[0x02B3]) goto labelFunc04E7_02ED;
	UI_add_answer("Gordy");
labelFunc04E7_02ED:
	if (!gflags[0x02AE]) goto labelFunc04E7_02FA;
	UI_add_answer("Sintag");
labelFunc04E7_02FA:
	if (!gflags[0x02B5]) goto labelFunc04E7_0307;
	UI_add_answer("Smithy");
labelFunc04E7_0307:
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E7_0318;
	UI_add_answer("Hook");
labelFunc04E7_0318:
	case "Danag" attend labelFunc04E7_032B:
	message("「他在那个友谊会的地方帮忙。不知为何他总是代理分会领袖。真正的领袖，一个名叫 Abraham 的家伙，从来不在这里。 Danag 还好。有点容易受骗。」");
	say();
	UI_remove_answer("Danag");
labelFunc04E7_032B:
	case "Blacktooth" attend labelFunc04E7_033E:
	message("「他是个前海盗和恶棍，而且他可以相当刻薄。如果他没有马上对你产生好感，他可能永远也不会。但一旦他这么做了，你会发现他其实是个相当敏感的男人。」");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E7_033E:
	case "Mole" attend labelFunc04E7_0351:
	message("「在……嗯，似乎是一个世纪以前，我是 Mole 那帮海盗里的侍女。 Mole 粗野强悍，是个麻烦制造者。直到他加入友谊会。那把他变成……，」 Mandy 耸耸肩。「我不知道，一个中年的前海盗之类的。」");
	say();
	UI_remove_answer("Mole");
labelFunc04E7_0351:
	case "Budo" attend labelFunc04E7_0364:
	message("「他的家族在海盗巢穴 (Buccaneer's Den)已经好几代了。如果你问我的话，我觉得他叫卖商品的方式有点太强势了。」");
	say();
	UI_remove_answer("Budo");
labelFunc04E7_0364:
	case "Glenno" attend labelFunc04E7_0377:
	message("「他让我发笑。他是个宝贝。你在岛上找不到比他更令人愉快、更渴望取悦别人的男人了。他出乎意料地是个好人。」 Mandy 停顿了一下，然后补充道：「对一个皮条客来说。」");
	say();
	UI_remove_answer("Glenno");
labelFunc04E7_0377:
	case "Wench" attend labelFunc04E7_038A:
	message("「她是个非常注重隐私的人。在澡堂工作。我听说她赢得了某种比赛——这就是为什么她有幸在那里。我了解 Glenno 在那里给他们的薪水很高。」");
	say();
	UI_remove_answer("Wench");
labelFunc04E7_038A:
	case "Martine" attend labelFunc04E7_039D:
	message("「她是个非常注重隐私的人。在澡堂工作。我这辈子跟她说的话不超过三句。」");
	say();
	UI_remove_answer("Martine");
labelFunc04E7_039D:
	case "Roberto" attend labelFunc04E7_03B0:
	message("「他是个非常注重隐私的人，但是，喔，我必须说他是个有魅力的男人！他在澡堂工作。我承认我是他的客户之一。他确实在帮我『洗盘子』，如果你懂我的意思。」");
	say();
	UI_remove_answer("Roberto");
labelFunc04E7_03B0:
	case "Lucky" attend labelFunc04E7_03C3:
	message("「他是个前恶棍，我可以告诉你这点！想到他现在竟然靠教导别人成为恶棍维生！」 Mandy 耸耸肩。「人各有志。」");
	say();
	UI_remove_answer("Lucky");
labelFunc04E7_03C3:
	case "Gordy" attend labelFunc04E7_03D6:
	message("「我跟他没那么熟，虽然他看起来是个真诚的男人。他像经营一艘船一样经营着游戏之屋。他也是个前海盗。一定当过船长。」");
	say();
	UI_remove_answer("Gordy");
labelFunc04E7_03D6:
	case "Smithy" attend labelFunc04E7_03E9:
	message("「他是另一个海盗。我知道他在赌坊 (House of Games) 工作。我想他是负责实际游戏的人。我跟他不熟。」");
	say();
	UI_remove_answer("Smithy");
labelFunc04E7_03E9:
	case "Sintag" attend labelFunc04E7_03FC:
	message("「布噜噜！他是个可怕的男人。你可以看出他杀过人。他是赌坊 (House of Games) 的守卫。你绝对不会想被他抓到作弊！」");
	say();
	UI_remove_answer("Sintag");
labelFunc04E7_03FC:
	case "Hook" attend labelFunc04E7_0439:
	var000E = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var000E) goto labelFunc04E7_0423;
	message("你感觉到方块在震动，但不知为何你知道就算没有它， Mandy 也会告诉你实话。");
	say();
labelFunc04E7_0423:
	message("Mandy 向你低语。「我知道你说的是谁。他住在岛上某处，但我不确定在哪里。他很少来酒馆，但我偶尔见过他。」");
	say();
	message("「他吓死我了。」");
	say();
	UI_remove_answer("Hook");
	UI_add_answer("惊吓");
labelFunc04E7_0439:
	case "惊吓" attend labelFunc04E7_0459:
	message("「嗯，他是个杀手。有些人认为他要为去年发生的谋杀案负责。」");
	say();
	UI_remove_answer("惊吓");
	UI_add_answer(["杀手", "谋杀案"]);
labelFunc04E7_0459:
	case "杀手" attend labelFunc04E7_046C:
	message("「这个他们称为 Hook 的男人身上有一种杀手的气息。你可以从他的眼神里看出来。如果我得罪了他，我会非常小心。」");
	say();
	UI_remove_answer("杀手");
labelFunc04E7_046C:
	case "谋杀案" attend labelFunc04E7_0486:
	message("「有一个名叫 Duncan 的小偷，他从游戏之屋和澡堂偷了资金。我相信他也闯入了友谊会会堂。总之，他被逮捕了。但有一天早上，当守卫给他送早餐时，他不见了！每个人都以为他逃跑了，直到在老 Blacktooth 住的房子里发现了他的尸体。这是在 Blacktooth 住那里之前发生的事。」");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer("尸体");
labelFunc04E7_0486:
	case "尸体" attend labelFunc04E7_0499:
	message("「他被肢解了——他的手臂和腿被砍断，而且他真的失去了他的头！直到今天，没人知道是谁做的。但当 Hook 在附近时，人们会在他背后议论。他绝对有能力做出这种事！」");
	say();
	UI_remove_answer("尸体");
labelFunc04E7_0499:
	case "告辞" attend labelFunc04E7_04A4:
	goto labelFunc04E7_04A7;
labelFunc04E7_04A4:
	goto labelFunc04E7_0070;
labelFunc04E7_04A7:
	endconv;
	message("「很高兴和你谈话。我希望晚点能再见到你。」*");
	say();
labelFunc04E7_04AC:
	if (!(event == 0x0000)) goto labelFunc04E7_04BA;
	Func092E(0xFF19);
labelFunc04E7_04BA:
	return;
}


