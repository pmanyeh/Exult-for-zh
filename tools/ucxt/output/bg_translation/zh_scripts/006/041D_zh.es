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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x009E])) goto labelFunc041D_0034;
	message("這位男演員極具舞台魅力，聲音宏亮。");
	say();
	gflags[0x009E] = true;
	goto labelFunc041D_0038;
labelFunc041D_0034:
	message("Stuart 傲慢地看著你。「是？」");
	say();
labelFunc041D_0038:
	converse attend labelFunc041D_014F;
	case "姓名" attend labelFunc041D_0055:
	message("「我的真名是 Stuart 。我的藝名是 Laurence 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Laurence");
labelFunc041D_0055:
	case "職業" attend labelFunc041D_0068:
	message("「我是有史以來最偉大的演員，」他毫不謙虛地宣布。「我在新戲裡扮演『Iolo』這個角色。」");
	say();
	UI_add_answer("Iolo");
labelFunc041D_0068:
	case "Laurence" attend labelFunc041D_007B:
	message("「這是我心目中一位特定英雄的名字。」");
	say();
	UI_remove_answer("Laurence");
labelFunc041D_007B:
	case "Iolo" attend labelFunc041D_0101:
	message("Stuart 明顯被激怒了。「是的。我又被選為配角了！我更適合扮演聖者，但 Raymundo 有選我嗎？沒——有！」");
	say();
	var0000 = Func08F7(0xFFFF);
	if (!var0000) goto labelFunc041D_00ED;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「但你一點都不像我！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「請問你是哪位？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，我是 -真正的- Iolo ！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「你當然是。而我真的是不列顛王。你一定把我當成笨蛋，以為我會相信那種事。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你的朋友對你耳語。「這些演員類型。一群敏感的傢伙，對吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE3, 0x0000);
labelFunc041D_00ED:
	UI_add_answer(["Raymundo", "聖者"]);
	UI_remove_answer("Iolo");
labelFunc041D_0101:
	case "Raymundo" attend labelFunc041D_0114:
	message("「我想他是個好導演。不過他從來沒讓我演過合適的角色。想想我還和他一起上過學呢！我們曾在同一個舞台幕後工作！」");
	say();
	UI_remove_answer("Raymundo");
labelFunc041D_0114:
	case "聖者" attend labelFunc041D_012E:
	message("Stuart 對你耳語：「Jesse 完全不對！哎呀，-你- 都比他更適合演聖者！而 -你- 可能連演個裝藥材的袋子都不行！這不是在說你，而是在說 Jesse 。」");
	say();
	UI_add_answer("演戲");
	UI_remove_answer("聖者");
labelFunc041D_012E:
	case "演戲" attend labelFunc041D_0141:
	message("「演戲是最高形式的藝術。它讓人能夠走出自我，成為另一個人。就像一場遊戲！」");
	say();
	UI_remove_answer("演戲");
labelFunc041D_0141:
	case "告辭" attend labelFunc041D_014C:
	goto labelFunc041D_014F;
labelFunc041D_014C:
	goto labelFunc041D_0038;
labelFunc041D_014F:
	endconv;
	message("「再見。開演時一定要來看戲喔！」*");
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
	var0004 = "@我聽到東邊有動靜！@";
labelFunc041D_01A8:
	if (!(var0003 == 0x0003)) goto labelFunc041D_01B8;
	var0004 = "@這裡是鄙視地城！@";
labelFunc041D_01B8:
	if (!(var0003 == 0x0004)) goto labelFunc041D_01C8;
	var0004 = "@準備好使用弓箭！@";
labelFunc041D_01C8:
	UI_item_say(0xFFE3, var0004);
	goto labelFunc041D_01DB;
labelFunc041D_01D5:
	Func092E(0xFFE3);
labelFunc041D_01DB:
	return;
}


