#game "blackgate"
void Func08F3 0x8F3 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	UI_push_answers();
	var0001 = false;
	var0002 = false;
	UI_add_answer(["魔法附魔", "战斗武勇", "告辞"]);
	message("「请告诉我一件事，如果您方便的话。自从我首次学习荒野求生技能以来，已经过去许多年了。这种技能也包括了动用武力的技巧，而我必须知道……圣者究竟是偏好以神秘的魔法附魔来克敌制胜，还是更倾向于肢体力量与战斗武勇呢？」");
	say();
	var0003 = false;
labelFunc08F3_0024:
	converse attend labelFunc08F3_0156;
	case "魔法附魔" attend labelFunc08F3_003A:
	message("「我早就猜到了！我对如此深奥的事情一窍不通，但或许等我们的任务完成后，我们可以聊聊关于魔法附魔的话题。」");
	say();
	gflags[0x015E] = true;
	goto labelFunc08F3_0157;
labelFunc08F3_003A:
	case "战斗武勇" attend labelFunc08F3_006C:
	message("「我常常这样猜想！能与您一同旅行是我的荣幸。我会努力向您学习，因为您无疑是有史以来最伟大的战士。」");
	say();
	message("「等我们的任务完成后，我们一定要互相分享各自的英雄事迹。告诉我，您更喜欢近身肉搏，还是远程武器？」");
	say();
	UI_remove_answer(["魔法附魔", "战斗武勇"]);
	UI_add_answer(["近身肉搏", "远程武器"]);
	gflags[0x015E] = false;
	var0001 = false;
labelFunc08F3_006C:
	case "近身肉搏" attend labelFunc08F3_00A8:
	UI_remove_answer("近身肉搏");
	var0004 = "而且你看起来很有男子气概，足以应付这种近身战";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc08F3_0096;
	var0004 = "特别是在女性身上。不列颠尼亚的女性很少具备这些特质";
	var0002 = true;
labelFunc08F3_0096:
	message("「这种武器需要力量与胆识！我很欣赏这样的特质，");
	message(var0004);
	message("。」");
	say();
	message("「但我更偏爱弓箭。这是一种古老而优雅的武器，一把优秀的 Yew 弓能比剑更快击倒猎物。」");
	say();
	var0003 = true;
labelFunc08F3_00A8:
	case "远程武器" attend labelFunc08F3_00C3:
	UI_remove_answer("远程武器");
	message("「这也是我的选择。在箭术方面，很少有人能与我并驾齐驱。这需要敏锐的眼神与沉稳的双手，这在现今的男人之中相当罕见。在女人之中更是少之又少。真是悲哀，不列颠尼亚的女性竟然对这种技艺一无所知！」");
	say();
	var0002 = true;
	var0003 = true;
labelFunc08F3_00C3:
	if (!var0002) goto labelFunc08F3_012F;
	var0002 = false;
	var0005 = false;
	enum();
labelFunc08F3_00D2:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc08F3_00F8;
	if (!(UI_get_npc_prop(var0008, 0x000A) == 0x0001)) goto labelFunc08F3_00F5;
	var0005 = true;
	goto labelFunc08F3_0156;
labelFunc08F3_00F5:
	goto labelFunc08F3_00D2;
labelFunc08F3_00F8:
	if (!var0005) goto labelFunc08F3_012F;
	UI_show_npc_face(var0008, 0x0000);
	message("「说话注意点，向导大师。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「我不是指在座的诸位优秀同伴！妳无疑是不列颠尼亚的菁英，更是世间罕见的奇女子。」");
	say();
	UI_show_npc_face(var0008, 0x0000);
	message("「算你会说话。唉！学习武艺的女性实在太少了。」");
	say();
	UI_remove_npc_face(var0008);
labelFunc08F3_012F:
	if (!var0003) goto labelFunc08F3_0138;
	goto labelFunc08F3_0157;
labelFunc08F3_0138:
	case "告辞" attend labelFunc08F3_0153:
	if (!(!var0001)) goto labelFunc08F3_014E;
	message("「请告诉我吧，圣者，我真的很想知道。」");
	say();
	goto labelFunc08F3_014F;
labelFunc08F3_014E:
	abort;
labelFunc08F3_014F:
	var0001 = true;
labelFunc08F3_0153:
	goto labelFunc08F3_0024;
labelFunc08F3_0156:
	endconv;
labelFunc08F3_0157:
	UI_pop_answers();
	return;
}
