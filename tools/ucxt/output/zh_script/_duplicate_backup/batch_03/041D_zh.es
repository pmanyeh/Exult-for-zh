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
	message("這個男演員很有舞台魅力，聲音也很宏亮。");
	say();
	gflags[0x009E] = true;
	goto labelFunc041D_0038;
labelFunc041D_0034:
	message("Stuart 傲慢地看著你。「有事嗎？」");
	say();
labelFunc041D_0038:
	converse attend labelFunc041D_014F;
	case "姓名" attend labelFunc041D_0055:
	message("「我的本名是 Stuart 。我的藝名是 Laurence 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Laurence");
labelFunc041D_0055:
	case "職業" attend labelFunc041D_0068:
	message("「我是有史以來最偉大的演員，」他毫不謙虛地宣告。「我在新戲裡扮演『Iolo』這個角色。」");
	say();
	UI_add_answer("Iolo");
labelFunc041D_0068:
	case "Laurence" attend labelFunc041D_007B:
	message("「這是我特別崇拜的一位英雄的名字。」");
	say();
	UI_remove_answer("Laurence");
labelFunc041D_007B:
	case "Iolo" attend labelFunc041D_0101:
	message("Stuart 顯然被激怒了。「是的。我又被分配演配角了！我明明更適合演聖者，但 Raymundo 有選我嗎？沒有！！」");
	say();
	var0000 = Func08F7(0xFFFF);
	if (!var0000) goto labelFunc041D_00ED;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「但你一點都不像我！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「請問，你是誰？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，我可是『貨真價實』的 Iolo ！」*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("「你當然是。而我真的是 Lord British 。你一定是把我當成白痴了，以為我會相信那種話。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你的朋友對你低語。「這些當演員的。真是一群敏感的傢伙，是吧？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE3, 0x0000);
labelFunc041D_00ED:
	UI_add_answer(["Raymundo", "聖者"]);
	UI_remove_answer("Iolo");
labelFunc041D_0101:
	case "Raymundo" attend labelFunc041D_0114:
	message("「我想他是個好導演。但他從來不讓我演合適的角色。想想我還跟他同過校！我們還一起參加過我們第一次的舞台劇組！」");
	say();
	UI_remove_answer("Raymundo");
labelFunc041D_0114:
	case "聖者" attend labelFunc041D_012E:
	message("Stuart 對你低語，「Jesse 完全不對！哎呀，『你』都會是個比他更好的聖者！而『你』的演技大概爛到連裝秘藥的袋子都演不好！這不是在說你，而是在說 Jesse 。」");
	say();
	UI_add_answer("演戲");
	UI_remove_answer("聖者");
labelFunc041D_012E:
	case "演戲" attend labelFunc041D_0141:
	message("「演戲是最高形式的藝術。它能讓人走出自我，成為另一個人。就像一場遊戲！」");
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
	var0004 = "@我是 Iolo ，我的君主！@";
labelFunc041D_0198:
	if (!(var0003 == 0x0002)) goto labelFunc041D_01A8;
	var0004 = "@我聽到東邊有聲音！@";
labelFunc041D_01A8:
	if (!(var0003 == 0x0003)) goto labelFunc041D_01B8;
	var0004 = "@這是 Despise 地城！@";
labelFunc041D_01B8:
	if (!(var0003 == 0x0004)) goto labelFunc041D_01C8;
	var0004 = "@準備好弓來使用它！@";
labelFunc041D_01C8:
	UI_item_say(0xFFE3, var0004);
	goto labelFunc041D_01DB;
labelFunc041D_01D5:
	Func092E(0xFFE3);
labelFunc041D_01DB:
	return;
}


