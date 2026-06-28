#game "blackgate"
/*
 * [翻譯註解] 關於 Chuckles (查克斯) 的「遊戲」對話在地化策略：
 * 
 * 原版英文的規則是「Words of one syllable」（只能說單音節的字）。
 * 由於中文每個字皆為單音節，若直譯會讓解謎失去意義。
 * 因此，在中文版中採用了「創譯 (Transcreation)」手法，
 * 將規則改為「四字遊戲」（每次開口只能說剛好四個字）。
 *
 * 玩家的正確選項皆為四個字。為了還原英文版中小丑也嚴格遵守規則的巧思，
 * 小丑進入遊戲後的所有台詞，也全部改寫成了「四言絕句」。
 * 若後續需修改對話字串，請務必維持此「四字限制」以保持謎題的一致性。
 */
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func0861 0x861 ();
extern void Func0911 0x911 (var var0000);

void Func0862 0x862 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func08F7(0xFFFF);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	message("「那就证明。跟我说话。」");
	say();
	UI_clear_answers();
	var0005 = Func090B(["你好呀小丑", "你好啊傻瓜", "小丑先生你好", "小丑你好"]);
	if (!(var0005 == "小丑你好")) goto labelFunc0862_004F;
	message("「你想说啥？」");
	say();
	var0001 = true;
	UI_clear_answers();
	goto labelFunc0862_0052;
labelFunc0862_004F:
	Func0861();
labelFunc0862_0052:
	if (!(var0001 == true)) goto labelFunc0862_008B;
	var0005 = Func090B(["遇到大麻烦", "问题太多", "我有很多问题", "我需要答案"]);
	if (!(var0005 == "问题太多")) goto labelFunc0862_0088;
	message("「原来如此！你需要我！需要帮忙？」");
	say();
	var0002 = true;
	UI_clear_answers();
	goto labelFunc0862_008B;
labelFunc0862_0088:
	Func0861();
labelFunc0862_008B:
	if (!(var0002 == true)) goto labelFunc0862_00F1;
	var0005 = Func090B(["我需要你", "绝对是这样", "请你帮忙", "我非常肯定"]);
	if (!((var0005 == "我需要你") || (var0005 == "请你帮忙"))) goto labelFunc0862_00EE;
	message("「嗯。我也许能，给你线索。」");
	say();
	if (!var0000) goto labelFunc0862_00E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「真想给 Chuckles 一拳让他眼眶发黑！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE7, 0x0000);
labelFunc0862_00E3:
	var0003 = true;
	UI_clear_answers();
	goto labelFunc0862_00F1;
labelFunc0862_00EE:
	Func0861();
labelFunc0862_00F1:
	if (!(var0003 == true)) goto labelFunc0862_0132;
	var0005 = Func090B(["对你极好", "我立刻需要它", "那会很值得", "望你帮忙"]);
	if (!((var0005 == "对你极好") || (var0005 == "望你帮忙"))) goto labelFunc0862_012F;
	message("「拿啥来换？换取线索？」");
	say();
	var0004 = true;
	UI_clear_answers();
	goto labelFunc0862_0132;
labelFunc0862_012F:
	Func0861();
labelFunc0862_0132:
	if (!(var0004 == true)) goto labelFunc0862_01F5;
	var0005 = Func090B(["我保证绝对不杀你", "一枚金币", "我永远的友谊", "赏你一笑", "什么都没有"]);
	if (!(var0005 == "一枚金币")) goto labelFunc0862_0195;
	message("Chuckles 举起手。「不对不对。免费给你，一个线索。就在卷里。」");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_0190;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("「再会了我的朋友！千万不要忘记……我是说，别忘游戏！」*");
	say();
	abort;
	goto labelFunc0862_0195;
labelFunc0862_0190:
	message("「喔！没有空间！放下东西，我就给你！」*");
	say();
	abort;
labelFunc0862_0195:
	if (!(var0005 == "赏你一笑")) goto labelFunc0862_01D8;
	message("「这太好了！免费给你，一个线索。就在卷里。」");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_01D3;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("「再会了我的朋友！千万不要忘记……我是说，别忘游戏！」*");
	say();
	abort;
	goto labelFunc0862_01D8;
labelFunc0862_01D3:
	message("「喔！没有空间！放下东西，我就给你！」*");
	say();
	abort;
labelFunc0862_01D8:
	if (!((var0005 == "我保证绝对不杀你") || ((var0005 == "我永远的友谊") || (var0005 == "什么都没有")))) goto labelFunc0862_01F5;
	Func0861();
labelFunc0862_01F5:
	return;
}


