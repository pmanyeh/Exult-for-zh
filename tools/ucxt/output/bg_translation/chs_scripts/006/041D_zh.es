#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func041D object#(0x41D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc041D_0154;
	UI_show_npc_face(0xFFE3, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x009E])) goto labelFunc041D_0034;
	message("这位男演员极具舞台魅力，声音宏亮。");
	say();
	gflags[0x009E] = true;
	goto labelFunc041D_0038;
labelFunc041D_0034:
	message("Stuart 傲慢地看着你。「是？」");
	say();
labelFunc041D_0038:
	converse attend labelFunc041D_014F;
	case "姓名" attend labelFunc041D_0055:
	message("「我的真名是 Stuart 。我的艺名是 Laurence 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Laurence");
labelFunc041D_0055:
	case "职业" attend labelFunc041D_0068:
	message("「我是有史以来最伟大的演员，」他毫不谦虚地宣布。「我在新戏里扮演『Iolo』这个角色。」");
	say();
	UI_add_answer("Iolo");
labelFunc041D_0068:
	case "Laurence" attend labelFunc041D_007B:
	message("「这是我心目中一位特定英雄的名字。」");
	say();
	UI_remove_answer("Laurence");
labelFunc041D_007B:
	case "Iolo" attend labelFunc041D_0101:
	message("Stuart 明显被激怒了。「是的。我又被选为配角了！我更适合扮演圣者，但 Raymundo 有选我吗？没——有！」");
	say();
	var0000 = Func08F7(0xFFFF);
	if (!var0000) goto labelFunc041D_00ED;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「但你一点都不像我！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「请问你是哪位？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，我是 -真正的- Iolo ！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「你当然是。而我真的是不列颠王。你一定把我当成笨蛋，以为我会相信那种事。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你的朋友对你耳语。「这些演员类型。一群敏感的家伙，对吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE3, 0x0000);
labelFunc041D_00ED:
	UI_add_answer(["Raymundo", "圣者"]);
	UI_remove_answer("Iolo");
labelFunc041D_0101:
	case "Raymundo" attend labelFunc041D_0114:
	message("「我想他是个好导演。不过他从来没让我演过合适的角色。想想我还和他一起上过学呢！我们曾在同一个舞台幕后工作！」");
	say();
	UI_remove_answer("Raymundo");
labelFunc041D_0114:
	case "圣者" attend labelFunc041D_012E:
	message("Stuart 对你耳语：「Jesse 完全不对！哎呀，-你- 都比他更适合演圣者！而 -你- 可能连演个装药材的袋子都不行！这不是在说你，而是在说 Jesse 。」");
	say();
	UI_add_answer("演戏");
	UI_remove_answer("圣者");
labelFunc041D_012E:
	case "演戏" attend labelFunc041D_0141:
	message("「演戏是最高形式的艺术。它让人能够走出自我，成为另一个人。就像一场游戏！」");
	say();
	UI_remove_answer("演戏");
labelFunc041D_0141:
	case "告辞" attend labelFunc041D_014C:
	goto labelFunc041D_014F;
labelFunc041D_014C:
	goto labelFunc041D_0038;
labelFunc041D_014F:
	endconv;
	message("「再见。开演时一定要来看戏喔！」*");
	say();
labelFunc041D_0154:
	if (!(event == 0x0000)) goto labelFunc041D_01DB;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFE3));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc041D_01D5;
	if (!(var0003 == 0x0001)) goto labelFunc041D_0198;
	var0004 = "@我是 Iolo，我的君主！@";
labelFunc041D_0198:
	if (!(var0003 == 0x0002)) goto labelFunc041D_01A8;
	var0004 = "@我听到东边有动静！@";
labelFunc041D_01A8:
	if (!(var0003 == 0x0003)) goto labelFunc041D_01B8;
	var0004 = "@这里是鄙视地城！@";
labelFunc041D_01B8:
	if (!(var0003 == 0x0004)) goto labelFunc041D_01C8;
	var0004 = "@准备好使用弓箭！@";
labelFunc041D_01C8:
	UI_item_say(0xFFE3, var0004);
	goto labelFunc041D_01DB;
labelFunc041D_01D5:
	Func092E(0xFFE3);
labelFunc041D_01DB:
	return;
}


