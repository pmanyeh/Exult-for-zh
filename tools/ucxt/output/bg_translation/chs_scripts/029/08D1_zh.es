#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func08D1 0x8D1 ()
{
	var var0000;
	var var0001;

	UI_clear_answers();
	var0000 = UI_is_pc_female();
	UI_show_npc_face(0xFFE5, 0x0000);
	message("Raymundo 递给你一份剧本，你走上了舞台中央。灯光照在你的脸上，让你感到有些燥热。虽然你有些紧张，但你还是清了清喉咙，开始读着纸上的台词。");
	say();
	UI_add_answer(["—我—是圣者！", "我—是—圣者！", "我是—那名—圣者！", "我是—圣者—！"]);
labelFunc08D1_002C:
	converse attend labelFunc08D1_00C5;
	default(0x0001) attend labelFunc08D1_0038:
	message("「不、不、不！完全不对！你是『圣者』！你必须感觉自己就像圣者！你说话的口吻必须像圣者！你必须—成为—圣者！再试一次。」");
	say();
labelFunc08D1_0038:
	UI_clear_answers();
	UI_add_answer(["—我—是圣者！", "我—是—圣者！", "我是—那名—圣者！", "我是—圣者—！"]);
	default(0x0001) attend labelFunc08D1_0058:
	message("「好多了……好多了……但我看你或许需要一件道具。」");
	say();
labelFunc08D1_0058:
	UI_clear_answers();
	var0001 = Func08F7(0xFFE4);
	if (!var0001) goto labelFunc08D1_00A5;
	message("「Jesse，把你的长杖递给我们的朋友。」*");
	say();
	if (!var0000) goto labelFunc08D1_008D;
	UI_show_npc_face(0xFFE4, 0x0001);
	message("「给您，女士。」*");
	say();
	UI_remove_npc_face(0xFFE4);
	goto labelFunc08D1_00A2;
labelFunc08D1_008D:
	UI_show_npc_face(0xFFE4, 0x0000);
	message("「给您，先生。」*");
	say();
	UI_remove_npc_face(0xFFE4);
labelFunc08D1_00A2:
	goto labelFunc08D1_00A9;
labelFunc08D1_00A5:
	message("Raymundo 递给你一根长杖。");
	say();
labelFunc08D1_00A9:
	UI_show_npc_face(0xFFE5, 0x0000);
	message("手里拿着长杖，你再次尝试了台词。这一次，你觉得自己像个真正的演员。台词从你的双唇间流泻而出，仿佛真的是圣者在说话一样。你感受到了一股前所未有的兴奋。你喜欢上了「演戏」这件事。你渴望更多！你焦急地等待着 Raymundo 的讲评……");
	say();
	message("Raymundo 接过长杖并说道：「嗯……是的，很好。谢谢你。很好。我们会再联系的，好吗？谢谢你前来。如果你有履历的话，就把它留在门口旁，好吗？谢谢你。」*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc08D1_002C;
labelFunc08D1_00C5:
	endconv;
	return;
}