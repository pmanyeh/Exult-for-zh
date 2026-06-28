#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08D6 0x8D6 ();
extern void Func08D7 0x8D7 ();
extern void Func08D8 0x8D8 ();
extern void Func08D9 0x8D9 ();
extern void Func08DA 0x8DA ();

void Func0490 object#(0x490) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0490_0176;
	if (!(!gflags[0x01B8])) goto labelFunc0490_0022;
	UI_show_npc_face(0xFF70, 0x0000);
	message("美丽的鬼魂眼神空洞地看着你。你做的任何事似乎都无法引起她的注意。*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc0490_0022:
	if (!gflags[0x0198]) goto labelFunc0490_002F;
	UI_add_answer("牺牲");
labelFunc0490_002F:
	var0000 = UI_is_pc_female();
	var0001 = Func0909();
	if (!gflags[0x01A6]) goto labelFunc0490_004F;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D6();
labelFunc0490_004F:
	if (!gflags[0x01AA]) goto labelFunc0490_0062;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D7();
labelFunc0490_0062:
	if (!gflags[0x01A7]) goto labelFunc0490_007C;
	if (!(!gflags[0x01A9])) goto labelFunc0490_007C;
	UI_show_npc_face(0xFF70, 0x0001);
	Func08D8();
labelFunc0490_007C:
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF70);
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0490_00D1;
	if (!(var0003 == 0x000E)) goto labelFunc0490_00B9;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08D9();
	goto labelFunc0490_00D1;
labelFunc0490_00B9:
	if (!(!(var0003 == 0x0010))) goto labelFunc0490_00D1;
	UI_show_npc_face(0xFF70, 0x0000);
	Func08DA();
labelFunc0490_00D1:
	UI_show_npc_face(0xFF70, 0x0000);
	if (!(!gflags[0x01C9])) goto labelFunc0490_00F3;
	message("你看到一位穿着黑色长袍的幽灵女士。她的样子有点奇怪，但你说不上来。顿了一下，她说：「你好，");
	message(var0001);
	message("。我是 Rowena，这座奇妙高塔的女主人。」她在房间里比划着，指着发霉的墙壁和布满蜘蛛网的屋顶。");
	say();
	gflags[0x01C9] = true;
	goto labelFunc0490_00FD;
labelFunc0490_00F3:
	message("当你走近时， Rowena 露出了一种抽离的微笑。「啊，你回来了，");
	message(var0001);
	message("。高塔的女士能为你提供什么协助吗？」");
	say();
labelFunc0490_00FD:
	UI_add_answer(["姓名", "职业", "高塔", "告辞"]);
labelFunc0490_0110:
	converse attend labelFunc0490_0175;
	case "姓名" attend labelFunc0490_0126:
	message("「我叫做…… Rowena 」");
	say();
	UI_remove_answer("姓名");
labelFunc0490_0126:
	case "职业" attend labelFunc0490_0139:
	message("她茫然地盯着看了一秒钟，然后，仿佛照着剧本一样，「我是高塔的女主人。我照顾 Horance 领主的需求，并保持我们的地方看起来体面。」看来她在后一项职责上已经落后了。");
	say();
	UI_add_answer("Horance");
labelFunc0490_0139:
	case "高塔" attend labelFunc0490_014C:
	message("过了一会儿，「这是一座可爱的高塔，你不觉得吗？」在你回答之前，她继续说道。~~「你看到那美丽的光芒在地板的石板上闪烁吗？喷泉里的水闪闪发光。这真是一个适合居住的美丽地方。」她的眼睛盯着地板。");
	say();
	UI_remove_answer("高塔");
labelFunc0490_014C:
	case "Horance" attend labelFunc0490_015F:
	message("她眨了一次眼，然后说，「Horance ……多么美好的名字。他发现了迷失又孤独的我，并把我带到这里当一位女士。难道他不是最宏伟的领主吗？」");
	say();
	UI_remove_answer("Horance");
labelFunc0490_015F:
	case "告辞" attend labelFunc0490_0172:
	message("她停顿了一下。「再见，");
	message(var0001);
	message("。我希望你喜欢你对我们辉煌高塔的访问。请随时回来。」你觉得自己仿佛在跟一尊雕像说话。*");
	say();
	abort;
labelFunc0490_0172:
	goto labelFunc0490_0110;
labelFunc0490_0175:
	endconv;
labelFunc0490_0176:
	if (!(event == 0x0000)) goto labelFunc0490_017F;
	abort;
labelFunc0490_017F:
	return;
}


