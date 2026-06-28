#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0617 object#(0x617) ();

void Func08EF 0x8EF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0001 = Func0909();
	if (!(!gflags[0x01C1])) goto labelFunc08EF_007C;
	if (!gflags[0x01A8]) goto labelFunc08EF_006A;
	message("Trent 在他那烧毁的店铺残骸旁踱步。当他看到你回来时，他冲了向前，寻找着他的挚爱 Rowena。");
	say();
	var0002 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF70) in var0002)) goto labelFunc08EF_005D;
	message("这对苦命鸳鸯冲向彼此，紧紧拥入幽灵般的怀抱。一时之间，很难分清一个灵魂从何处开始，另一个又在何处结束。你勉强看清 Trent 将戒指重新戴回 Rowena 手指上的画面。~~接着两人缓缓转身面向你。「你为我们做了这么多，我希望在帮助我们的同时，也对你自己的任务有所帮助。」Trent 向你鞠躬，然后转身凝视他可爱的妻子。*");
	say();
	UI_remove_from_party(0xFF70);
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08EF_0067;
labelFunc08EF_005D:
	message("「我该如何帮助你，");
	message(var0001);
	message("？有什么事是我忘记的吗？」他看着你，显得有些困惑。");
	say();
labelFunc08EF_0067:
	goto labelFunc08EF_007C;
labelFunc08EF_006A:
	if (!var0000) goto labelFunc08EF_0077;
	message("那个高大的幽灵继续工作着，但他一边用锤子敲击着铁笼的铁条，一边吹着甜美而忧伤的口哨。");
	say();
	goto labelFunc08EF_007C;
labelFunc08EF_0077:
	message("「哎呀，笼子跑到哪去了？我敢肯定刚才还在这里的。在找到笼子之前，我根本没法继续工作！」*");
	say();
	abort;
labelFunc08EF_007C:
	UI_add_answer(["接下来呢？", "告辞"]);
	if (!gflags[0x01C1]) goto labelFunc08EF_009C;
	UI_add_answer(["灵魂囚笼", "释放"]);
labelFunc08EF_009C:
	converse attend labelFunc08EF_0168;
	case "灵魂囚笼" attend labelFunc08EF_00B2:
	message("「这是一个特殊的笼子，是按照人的体型打造的。Mordra 夫人说，一旦将它放进巫妖 Horance 的灵魂之井，就能把牠关在里面。」他的声音似乎比之前温和了许多。");
	say();
	UI_remove_answer("灵魂囚笼");
labelFunc08EF_00B2:
	case "释放" attend labelFunc08EF_00DD:
	message("「是的，你会帮我释放她，对吧？」his 他的声音里又带了一丝锐气。");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08EF_00D1;
	message("他握着锤柄的手松了开来，感激地微笑着。~~「你无法想像这对我有多重要。谢谢你。」");
	say();
	goto labelFunc08EF_00D6;
labelFunc08EF_00D1:
	message("他紧紧握住锤柄。「最好给我赶快离开！如果你不快点，我就当作你改变主意了！」*");
	say();
	abort;
labelFunc08EF_00D6:
	UI_remove_answer("释放");
labelFunc08EF_00DD:
	case "接下来呢？" attend labelFunc08EF_0145:
	var0004 = Func0931(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99);
	if (!gflags[0x01A8]) goto labelFunc08EF_0107;
	message("「唉，我求求你，请帮帮忙，让我可爱的 Rowena 回到我身边，」他恳求着。");
	say();
	goto labelFunc08EF_0145;
labelFunc08EF_0107:
	if (!(!var0004)) goto labelFunc08EF_011C;
	message("「我需要一根铁条来完成这个笼子。在镇上的墓地里可以找到几根。」");
	say();
	UI_remove_answer("接下来呢？");
	goto labelFunc08EF_0145;
labelFunc08EF_011C:
	message("「啊，我需要你身上带的那根铁条。」他伸出手，从你那里接过铁条。");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x0108, 0xFE99, 0xFE99, false);
	message("「有了这个，我很快就能把它完成。你在这里等一会，我来处理这个笼子。」");
	say();
	message("「把笼子拿去给 Mordra 夫人，她会告诉你更多关于它以及它的用途。」");
	say();
	gflags[0x01CF] = true;
	item->Func0617();
	abort;
labelFunc08EF_0145:
	case "牺牲" attend labelFunc08EF_0158:
	message("「在与我的挚爱重逢之前，我甚至连考虑都不会考虑那件事。」关于这点，他似乎非常坚决。");
	say();
	UI_remove_answer("牺牲");
labelFunc08EF_0158:
	case "告辞" attend labelFunc08EF_0165:
	message("「请快一点。我心爱的人多忍受 Horance 那污秽存在的一秒钟，都像是有一把刀刺在我的肋旁。」他开始在店里踱步。*");
	say();
	abort;
labelFunc08EF_0165:
	goto labelFunc08EF_009C;
labelFunc08EF_0168:
	endconv;
	return;
}