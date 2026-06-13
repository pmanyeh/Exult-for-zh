#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04E1 object#(0x4E1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E1_01FC;
	UI_show_npc_face(0xFF1F, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E1_005D;
	UI_add_answer("Hook");
labelFunc04E1_005D:
	if (!(!gflags[0x02AE])) goto labelFunc04E1_006F;
	message("你看到你在 Britannia 見過最兇惡、最難纏的守衛。");
	say();
	gflags[0x02AE] = true;
	goto labelFunc04E1_0073;
labelFunc04E1_006F:
	message("「什麼？」 Sintag 咕噥著。");
	say();
labelFunc04E1_0073:
	converse attend labelFunc04E1_01F7;
	case "姓名" attend labelFunc04E1_0089:
	message("「Sintag ，」男人咕噥著。");
	say();
	UI_remove_answer("姓名");
labelFunc04E1_0089:
	case "職業" attend labelFunc04E1_00A2:
	message("「我是賭坊 (House of Games) 的守衛。我替這地方清除麻煩製造者。」");
	say();
	UI_add_answer(["賭坊 (House of Games)", "麻煩製造者"]);
labelFunc04E1_00A2:
	case "賭坊 (House of Games)" attend labelFunc04E1_00BC:
	message("「自從老闆 (The Mister) 同意付我錢並要我留下後，我就一直在賭坊 (House of Games) 工作。我知道所有進出的人。我看到了一切。」");
	say();
	UI_remove_answer("賭坊 (House of Games)");
	UI_add_answer("老闆 (The Mister)");
labelFunc04E1_00BC:
	case "老闆 (The Mister)" attend labelFunc04E1_00CF:
	message("「那會是 Gordy 先生，賭坊 (House of Games) 的監督。你或許可以在營業時間去他的辦公室找他。」");
	say();
	UI_remove_answer("老闆 (The Mister)");
labelFunc04E1_00CF:
	case "麻煩製造者" attend labelFunc04E1_00EF:
	message("「我們在這裡看到各種製造麻煩的人。我特別不喜歡自稱是聖者 的人。我覺得那是褻瀆。上一個自稱是聖者 的傢伙因為作弊被抓到了。他以後不會再那樣做了！」");
	say();
	UI_remove_answer("麻煩製造者");
	UI_add_answer(["各種各樣的人", "不會再犯"]);
labelFunc04E1_00EF:
	case "各種各樣的人" attend labelFunc04E1_0102:
	message("「有一個叫 Robin 的人過去常來這裡並在遊戲中作弊。他有兩個名叫 Battles 和 Leavell 的惡棍，會恐嚇任何試圖阻止他的人。有一天我的兄弟們來拜訪，我們把 Robin 、 Battles 和 Leavell 一路趕出了這座島！從那之後我們就沒見過他們了！」");
	say();
	UI_remove_answer("各種各樣的人");
labelFunc04E1_0102:
	case "不會再犯" attend labelFunc04E1_0133:
	if (!var0002) goto labelFunc04E1_0124;
	message("方塊微微震動。「他在洞穴裡，在刑求室。他還剩下的那部分。」");
	say();
	UI_add_answer(["刑求室", "他剩下的部分"]);
	goto labelFunc04E1_012C;
labelFunc04E1_0124:
	message("「你不需要知道更多了。」");
	say();
	message("Sintag 瞪著你。");
	say();
labelFunc04E1_012C:
	UI_remove_answer("不會再犯");
labelFunc04E1_0133:
	case "刑求室" attend labelFunc04E1_0153:
	if (!var0002) goto labelFunc04E1_0148;
	message("方塊震動了。「那是友誼會審問他們囚犯的地方。」");
	say();
	goto labelFunc04E1_014C;
labelFunc04E1_0148:
	message("「什麼刑求室？我有說刑求室嗎？」");
	say();
labelFunc04E1_014C:
	UI_remove_answer("刑求室");
labelFunc04E1_0153:
	case "他剩下的部分" attend labelFunc04E1_0166:
	message("「他在我們的照顧下已經有一段時間了。」 Sintag 帶著神秘的微笑說。");
	say();
	UI_remove_answer("他剩下的部分");
labelFunc04E1_0166:
	case "Hook" attend labelFunc04E1_019E:
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0193;
	if (!var0002) goto labelFunc04E1_018C;
	message("當 Sintag 說話時方塊震動了。「Hook 住在賭坊 (House of Games) 後面的洞穴裡。遊戲室有一扇上鎖的門通向那裡。我有鑰匙。 Gordy 的辦公室裡也有一扇暗門，那是 Hook 用來回家的。」");
	say();
	UI_add_answer("鑰匙");
	goto labelFunc04E1_0190;
labelFunc04E1_018C:
	message("「我不認識符合那描述的人。」");
	say();
labelFunc04E1_0190:
	goto labelFunc04E1_0197;
labelFunc04E1_0193:
	message("「我現在看起來像在工作嗎？別煩我。在正常營業時間來賭坊 (House of Games) 吧。」");
	say();
labelFunc04E1_0197:
	UI_remove_answer("Hook");
labelFunc04E1_019E:
	case "鑰匙" attend labelFunc04E1_01E9:
	message("「你想要鑰匙嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E1_01DE;
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00EA, 0x000A, false);
	if (!var0003) goto labelFunc04E1_01D7;
	message("「在這裡。」");
	say();
	Func0911(0x012C);
	goto labelFunc04E1_01DB;
labelFunc04E1_01D7:
	message("「你攜帶了太多東西！」");
	say();
labelFunc04E1_01DB:
	goto labelFunc04E1_01E2;
labelFunc04E1_01DE:
	message("「隨你的便。」");
	say();
labelFunc04E1_01E2:
	UI_remove_answer("鑰匙");
labelFunc04E1_01E9:
	case "告辭" attend labelFunc04E1_01F4:
	goto labelFunc04E1_01F7;
labelFunc04E1_01F4:
	goto labelFunc04E1_0073;
labelFunc04E1_01F7:
	endconv;
	message("Sintag 咕噥了一聲。*");
	say();
labelFunc04E1_01FC:
	if (!(event == 0x0000)) goto labelFunc04E1_0277;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1F));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E1_0276;
	if (!(var0004 == 0x0001)) goto labelFunc04E1_0239;
	var0005 = "@我盯著你的手！@";
labelFunc04E1_0239:
	if (!(var0004 == 0x0002)) goto labelFunc04E1_0249;
	var0005 = "@不准作弊！@";
labelFunc04E1_0249:
	if (!(var0004 == 0x0003)) goto labelFunc04E1_0259;
	var0005 = "@把手放在我看得到的地方。@";
labelFunc04E1_0259:
	if (!(var0004 == 0x0004)) goto labelFunc04E1_0269;
	var0005 = "@別在遊戲上搗鬼。@";
labelFunc04E1_0269:
	UI_item_say(0xFF1F, var0005);
	goto labelFunc04E1_0277;
labelFunc04E1_0276:
	abort;
labelFunc04E1_0277:
	return;
}


