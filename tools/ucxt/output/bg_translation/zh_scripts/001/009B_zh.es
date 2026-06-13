#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0882 0x882 (var var0000);

void Func009B shape#(0x9B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc009B_028C;
	UI_show_npc_face(0xFEE3, 0x0000);
	var0000 = Func08F7(0xFFFE);
	var0001 = Func08F7(0xFFFD);
	var0002 = Func0908();
	if (!(!gflags[0x01B3])) goto labelFunc009B_0036;
	message("船上戴著兜帽的人完全無視了你。*");
	say();
	abort;
labelFunc009B_0036:
	if (!gflags[0x0198]) goto labelFunc009B_0043;
	UI_add_answer("犧牲");
labelFunc009B_0043:
	if (!(!gflags[0x01C3])) goto labelFunc009B_0055;
	message("站在你面前的是一個高大、骨瘦如柴的身影，身處一艘幽靈船中。他向你伸出手，用陰森的聲音說：「我是 Skara Brae 的擺渡人……你必須支付兩枚硬幣……才能渡過迷霧海峽。」");
	say();
	gflags[0x01C3] = true;
	goto labelFunc009B_0078;
labelFunc009B_0055:
	if (!(!gflags[0x0197])) goto labelFunc009B_0063;
	message("Skara Brae 的擺渡人站在他幽靈般的船上，向任何願意支付代價的人伸出手。");
	say();
	goto labelFunc009B_006E;
labelFunc009B_0063:
	message("Skara Brae 的擺渡人站在他幽靈般的船上，將撐篙橫在胸前。他注意到了你的靠近。「要回到大陸……你不需要付費。」");
	say();
	UI_add_answer("返回");
labelFunc009B_006E:
	if (!gflags[0x01A3]) goto labelFunc009B_0078;
	message("他似乎有點不滿。「我告訴過你我會在這裡……直到永恆的盡頭。」");
	say();
labelFunc009B_0078:
	UI_add_answer(["姓名", "職業", "擺渡人", "迷霧海峽", "Skara Brae", "告辭"]);
	if (!(!gflags[0x0197])) goto labelFunc009B_009F;
	UI_add_answer("付費");
labelFunc009B_009F:
	converse attend labelFunc009B_028B;
	case "姓名" attend labelFunc009B_00B5:
	message("「我是……擺渡人。」他的聲音像船的搖晃聲一樣嘎吱作響。");
	say();
	UI_remove_answer("姓名");
labelFunc009B_00B5:
	case "職業" attend labelFunc009B_00C1:
	message("擺渡人一開始沒有回應，困惑地搖了搖頭。「我是……擺渡人。」");
	say();
labelFunc009B_00C1:
	case "擺渡人" attend labelFunc009B_00D4:
	message("「是的，如果你付錢給我……我可以帶你渡過迷霧海峽。」");
	say();
	UI_remove_answer("擺渡人");
labelFunc009B_00D4:
	case "迷霧海峽" attend labelFunc009B_00E7:
	message("他轉向一側，揮動著他骨瘦如柴的手，在船停泊的水面上劃過。「這……就是迷霧海峽。」");
	say();
	UI_remove_answer("迷霧海峽");
labelFunc009B_00E7:
	case "Skara Brae" attend labelFunc009B_019A:
	if (!(!gflags[0x0197])) goto labelFunc009B_018F;
	message("他完全轉過身，指著西邊的水面。「那裡……」");
	say();
	if (!(var0001 && var0000)) goto labelFunc009B_018C;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「呃……");
	message(var0002);
	message("，你確定我們需要去那邊嗎？」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「怎麼了， Shamino ？你『害怕』了嗎？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「當然沒有！我只是……好吧，我……噢，算了！我們走吧！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc009B_0182;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 瞇起眼睛，臉上帶著一種居高臨下的神情。~~「我想你應該一點都不怕吧？」他對 Spark 說。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「不，先生。我不怕骷髏，」他說。然而，當他看著擺渡人時，卻嚥了一口口水。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc009B_0182:
	UI_show_npc_face(0xFEE3, 0x0000);
labelFunc009B_018C:
	goto labelFunc009B_0193;
labelFunc009B_018F:
	message("這憔悴的身影環顧四周，彷彿感到困惑。「這裡……就是 Skara Brae 。」");
	say();
labelFunc009B_0193:
	UI_remove_answer("Skara Brae");
labelFunc009B_019A:
	case "付費", "返回" attend labelFunc009B_024F:
	if (!(!gflags[0x0197])) goto labelFunc009B_01EF;
	message("「你願意支付我的代價……以獲得前往 Skara Brae 的通行權嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_01E8;
	var0005 = UI_remove_party_items(0x0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc009B_01E1;
	message("你將硬幣放在這幽靈的手掌中，他骨瘦如柴的手指將它們握住。「上船吧……如果你想去……死者之島的話。」");
	say();
	Func0882(item);
	goto labelFunc009B_01E5;
labelFunc009B_01E1:
	message("「沒有適當的報酬……我不會渡河。」");
	say();
labelFunc009B_01E5:
	goto labelFunc009B_01EC;
labelFunc009B_01E8:
	message("「那好吧。」他似乎有點失望。");
	say();
labelFunc009B_01EC:
	goto labelFunc009B_0242;
labelFunc009B_01EF:
	message("「你希望……返回大陸嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_023E;
	var0006 = UI_get_npc_object(0xFF70);
	var0007 = UI_get_party_list();
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0006 in var0007) || (var0008 in var0007))) goto labelFunc009B_0233;
	message("「我不能載運靈魂前往大陸。」他將撐篙擋在身前，阻擋了你上船的路。");
	say();
	goto labelFunc009B_023B;
labelFunc009B_0233:
	message("擺渡人在兜帽下似乎笑了笑，示意你再次登上他那幽靈般的船。");
	say();
	Func0882(item);
labelFunc009B_023B:
	goto labelFunc009B_0242;
labelFunc009B_023E:
	message("你覺得你看到在他兜帽深處，眼睛本該在的位置有蒼白的火焰閃爍。當他嘆息時，火焰消退了，「無妨……」");
	say();
labelFunc009B_0242:
	UI_remove_answer(["付費", "返回"]);
labelFunc009B_024F:
	case "犧牲" attend labelFunc009B_027B:
	if (!(!gflags[0x0199])) goto labelFunc009B_0270;
	message("就在那一瞬間，你覺得你看到擺渡人骷髏般的臉龐上閃過一絲短暫的希望神情，然後就消失了。「我必須履行我的職責……直到永恆的盡頭。」");
	say();
	UI_remove_answer("犧牲");
	gflags[0x0199] = true;
	goto labelFunc009B_027B;
labelFunc009B_0270:
	message("「不要用解脫的希望……來嘲弄我。我必須履行我的職責……直到永恆的盡頭。」");
	say();
	UI_remove_answer("犧牲");
labelFunc009B_027B:
	case "告辭" attend labelFunc009B_0288:
	message("擺渡人沒有回應你的告別，低下了頭，將撐篙橫在胸前。*");
	say();
	abort;
labelFunc009B_0288:
	goto labelFunc009B_009F;
labelFunc009B_028B:
	endconv;
labelFunc009B_028C:
	if (!(event == 0x0000)) goto labelFunc009B_0295;
	abort;
labelFunc009B_0295:
	return;
}


