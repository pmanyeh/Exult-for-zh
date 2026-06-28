#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0480 object#(0x480) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0480_0009;
	abort;
labelFunc0480_0009:
	UI_show_npc_face(0xFF80, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02BB]) goto labelFunc0480_0036;
	UI_add_answer("Gorn");
labelFunc0480_0036:
	if (!(!gflags[0x02CC])) goto labelFunc0480_004C;
	message("你看到一位穿着战士装备的迷人女子。她凶狠地看着你。");
	say();
	message("「站住！」");
	say();
	gflags[0x02CC] = true;
	goto labelFunc0480_0050;
labelFunc0480_004C:
	message("「你想要什么？」 Iriale 质问道。");
	say();
labelFunc0480_0050:
	converse attend labelFunc0480_0151;
	case "姓名" attend labelFunc0480_0091:
	message("「我叫 Iriale Silvermist 。你是谁？」");
	say();
	var0001 = Func090B([var0000, "圣者"]);
	if (!(var0001 == var0000)) goto labelFunc0480_007C;
	message("「我不认识你！」");
	say();
labelFunc0480_007C:
	if (!(var0001 == "圣者")) goto labelFunc0480_008A;
	message("「我不赞成开玩笑。」");
	say();
labelFunc0480_008A:
	UI_remove_answer("姓名");
labelFunc0480_0091:
	case "职业" attend labelFunc0480_00AA:
	message("Iriale 露出恶魔般的微笑。~~「我禁止人们进入。你违反了冥想静修院 (Meditation Retreat) 的规定。 Ian 会非常不高兴。你最好现在就离开。」");
	say();
	UI_add_answer(["规定", "冥想静修院"]);
labelFunc0480_00AA:
	case "规定" attend labelFunc0480_00F1:
	message("「你心知肚明。修院的参加者必须远离这个洞穴。」");
	say();
	UI_remove_answer("规定");
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0480_00F1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「来吧，");
	message(var0000);
	message("，我们最好离开。我相信这位女士是认真的。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF80, 0x0000);
labelFunc0480_00F1:
	case "Gorn" attend labelFunc0480_0104:
	message("「那是刚才在这里的那个臭蛮人的名字吗？如果你在『出去的路上』看到他，告诉他如果他再靠近我，我就砍下他的头！」");
	say();
	UI_remove_answer("Gorn");
labelFunc0480_0104:
	case "冥想静修院" attend labelFunc0480_0143:
	message("「是的，我为冥想静修院工作。~~而且我为『他』工作。『他』不希望你在这里。我只给你一次转身离开的机会。」");
	say();
	message("「你要离开吗？」");
	say();
	if (!Func090A()) goto labelFunc0480_0130;
	message("「照做我就饶了你！」她看着你转身离开。*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	abort;
	goto labelFunc0480_0143;
labelFunc0480_0130:
	message("她看到你下定决心的样子，点了点头。「那就死吧，愚蠢的家伙！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0000);
	abort;
labelFunc0480_0143:
	case "告辞" attend labelFunc0480_014E:
	goto labelFunc0480_0151;
labelFunc0480_014E:
	goto labelFunc0480_0050;
labelFunc0480_0151:
	endconv;
	message("「快滚！」*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	return;
}


