#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func041E object#(0x41E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc041E_0191;
	UI_show_npc_face(0xFFE2, 0x0000);
	var0000 = UI_part_of_day();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = Func08F7(0xFFFD);
	if (!(gflags[0x006B] || var0001)) goto labelFunc041E_0043;
	UI_add_answer("Shamino");
labelFunc041E_0043:
	if (!(!gflags[0x009F])) goto labelFunc041E_0055;
	message("這位可愛的女演員穿著老鼠裝。");
	say();
	gflags[0x009F] = true;
	goto labelFunc041E_0059;
labelFunc041E_0055:
	message("「嗨，你好！」 Amber 說。");
	say();
labelFunc041E_0059:
	converse attend labelFunc041E_018C;
	case "姓名" attend labelFunc041E_006F:
	message("「我是 Amber 。」");
	say();
	UI_remove_answer("姓名");
labelFunc041E_006F:
	case "職業" attend labelFunc041E_008B:
	message("「我是皇家劇院的女演員。在新戲中我扮演老鼠 Sherry 的角色。」");
	say();
	UI_add_answer(["皇家劇院", "Sherry", "戲劇"]);
labelFunc041E_008B:
	case "皇家劇院" attend labelFunc041E_00AB:
	message("「這是一個很棒的表演空間。你知道的，我把我的一生都奉獻給了演戲。」");
	say();
	UI_remove_answer("皇家劇院");
	UI_add_answer(["空間", "奉獻"]);
labelFunc041E_00AB:
	case "空間" attend labelFunc041E_00BE:
	message("「Raymundo 本人參與了這座劇院的設計。」");
	say();
	UI_remove_answer("空間");
labelFunc041E_00BE:
	case "奉獻" attend labelFunc041E_00D1:
	message("「其實，這將是我的劇場處女作。我一直擔任酒吧女侍，等待我第一次參與劇院演出的機會。」");
	say();
	UI_remove_answer("奉獻");
labelFunc041E_00D1:
	case "戲劇" attend labelFunc041E_00E4:
	message("「在你我之間，我覺得這齣戲爛透了。」她對你眨了眨眼。");
	say();
	UI_remove_answer("戲劇");
labelFunc041E_00E4:
	case "Sherry" attend labelFunc041E_0104:
	message("「你能想像這種胡言亂語嗎？我不相信曾經有過一隻叫 Sherry 的老鼠。誰聽說過會說話的老鼠！尤其是這些台詞！我寧願演個女王。我得說，那對我來說合適多了。」");
	say();
	UI_remove_answer("Sherry");
	UI_add_answer(["台詞", "女王"]);
labelFunc041E_0104:
	case "台詞" attend labelFunc041E_0117:
	message("「我必須背誦這個名為『Hubert 令人毛骨悚然的冒險（Hubert's Hair-Raising Adventure）』的荒謬童話故事。");
	say();
	UI_remove_answer("台詞");
labelFunc041E_0117:
	case "女王" attend labelFunc041E_012A:
	message("「我問了 Raymundo 這件事，他大發脾氣。他說那不符合歷史的準確性。哈！說得好像那有什麼重要意義似的！」");
	say();
	UI_remove_answer("女王");
labelFunc041E_012A:
	case "Shamino" attend labelFunc041E_017E:
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc041E_016B;
	message("「Poo Poo 頭！」她大喊。然後她衝向他，在他的嘴上深深地吻了一下。 Shamino 臉紅了，不安地挪動著雙腳。*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「別在聖者面前這樣，Poo！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFE2, 0x0000);
	message("「去他的聖者！」她又吻了他一次。「聖者是最後一個能說服你安定下來的人。」");
	say();
	goto labelFunc041E_016F;
labelFunc041E_016B:
	message("「你認識我的男朋友嗎？他大概正在藍野豬酒館（Blue Boar）借酒澆愁。這個懶骨頭！我不會讓他去冒險的。是時候讓他安定下來了。你可以去告訴他我說的！」");
	say();
labelFunc041E_016F:
	gflags[0x006D] = true;
	gflags[0x006E] = true;
	UI_remove_answer("Shamino");
labelFunc041E_017E:
	case "告辭" attend labelFunc041E_0189:
	goto labelFunc041E_018C;
labelFunc041E_0189:
	goto labelFunc041E_0059;
labelFunc041E_018C:
	endconv;
	message("「再會！」*");
	say();
labelFunc041E_0191:
	if (!(event == 0x0000)) goto labelFunc041E_0211;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFE2));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc041E_020B;
	if (!(var0003 == 0x0001)) goto labelFunc041E_01CE;
	var0004 = "@獅子 Hubert 是……@";
labelFunc041E_01CE:
	if (!(var0003 == 0x0002)) goto labelFunc041E_01DE;
	var0004 = "@我為什麼要那樣說？@";
labelFunc041E_01DE:
	if (!(var0003 == 0x0003)) goto labelFunc041E_01EE;
	var0004 = "@我的戲服太大了。@";
labelFunc041E_01EE:
	if (!(var0003 == 0x0004)) goto labelFunc041E_01FE;
	var0004 = "@我 -討厭- 我的台詞！@";
labelFunc041E_01FE:
	UI_item_say(0xFFE2, var0004);
	goto labelFunc041E_0211;
labelFunc041E_020B:
	Func092E(0xFFE2);
labelFunc041E_0211:
	return;
}


