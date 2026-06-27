#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0430 object#(0x430) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0430_0009;
	abort;
labelFunc0430_0009:
	UI_show_npc_face(0xFFD0, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFF1);
	if (!(!gflags[0x02C5])) goto labelFunc0430_0034;
	message("你看見一位穿著盔甲、帶著一小批武器的迷人女子。");
	say();
	gflags[0x02C5] = true;
	goto labelFunc0430_0038;
labelFunc0430_0034:
	message("「有什麼我能幫你的嗎？」 Amanda 問。");
	say();
labelFunc0430_0038:
	if (!gflags[0x02DC]) goto labelFunc0430_004C;
	if (!(!gflags[0x02DE])) goto labelFunc0430_004C;
	UI_add_answer("住手！");
labelFunc0430_004C:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0430_005C:
	converse attend labelFunc0430_0213;
	case "姓名" attend labelFunc0430_0072:
	message("「我的名字是 Amanda 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0430_0072:
	case "職業" attend labelFunc0430_00A0:
	if (!gflags[0x02DE]) goto labelFunc0430_008E;
	message("「我同父異母的姊妹和我目前沒有工作。既然我們的任務已經終止，我們正在旅行以尋求內心的平靜。」");
	say();
	UI_add_answer("內心平靜");
	goto labelFunc0430_0099;
labelFunc0430_008E:
	message("「除了為我們的任務服務之外，我同父異母的姊妹和我沒有其他工作。」");
	say();
	UI_add_answer("任務");
labelFunc0430_0099:
	UI_add_answer("同父異母姊妹");
labelFunc0430_00A0:
	case "同父異母姊妹" attend labelFunc0430_00F3:
	if (!gflags[0x02DE]) goto labelFunc0430_00B7;
	var0002 = "原本";
	goto labelFunc0430_00BD;
labelFunc0430_00B7:
	var0002 = "未來";
labelFunc0430_00BD:
	message("「我同父異母的姊妹是 Eiko 。她和我一樣，是個受過 Karenna 戰鬥方式訓練的戰士。我們一起長久而艱苦地學習，以掌握");
	message(var0002);
	message("達成我們復仇所需的技能。」");
	say();
	if (!var0001) goto labelFunc0430_00EC;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("「我們兩人在父親去世前甚至沒有見過面。但我們在 Minoc 的訓練員 Karenna 教導我們的嚴格紀律中，像姊妹般結下了不解之緣。」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_00EC:
	UI_remove_answer("同父異母姊妹");
labelFunc0430_00F3:
	case "內心平靜" attend labelFunc0430_00FF:
	message("「是的。我們的生活長期以來一直致力於復仇，以至於沒有它我們會感到漂泊、漫無目的。我們必須找到新的生存理由。~~「我們正在考慮加入友誼會，因為他們為迷失的靈魂提供指引。但我們必須再考慮一下。我們還不確定。」");
	say();
labelFunc0430_00FF:
	case "任務" attend labelFunc0430_0119:
	message("「我們正在追蹤殺害我們父親的兇手。」");
	say();
	UI_remove_answer("任務");
	UI_add_answer("兇手");
labelFunc0430_0119:
	case "兇手" attend labelFunc0430_013F:
	message("「我們的父親被一個兇惡可怕的獨眼巨人以最暴力的手段殺害。他被長矛刺穿。他花了幾個小時才死去。」~~她抬起頭，眼睛閃爍著淚光。「你曾經看過任何人死於腹部傷口嗎，");
	message(var0000);
	message("？那種痛苦是無法想像的。」");
	say();
	UI_remove_answer("兇手");
	UI_add_answer(["獨眼巨人", "刺穿"]);
labelFunc0430_013F:
	case "獨眼巨人" attend labelFunc0430_0177:
	message("「自從我們完成訓練以來，我們已經追蹤這隻怪物好幾年了。我們從不列顛尼亞的一端跟隨他到另一端。有時候他只領先我們一步。但現在我們知道，我們比以前任何時候都更接近他。」");
	say();
	if (!var0001) goto labelFunc0430_0170;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("「當我們找到他時，他將無處可逃。我們要復仇，而且我們一定會得到它！」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_0170:
	UI_remove_answer("獨眼巨人");
labelFunc0430_0177:
	case "刺穿" attend labelFunc0430_01AF:
	message("「我們的父親為了生存勇敢地戰鬥。他並沒有輕易死去。他死得像個英雄。雖然我們可能都會在這場努力中死去，但我們打算給殺他的兇手一個真正惡棍應得的死法。」");
	say();
	if (!var0001) goto labelFunc0430_01A8;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko 邪惡地笑了。*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_01A8:
	UI_remove_answer("刺穿");
labelFunc0430_01AF:
	case "住手！" attend labelFunc0430_0205:
	message("你向 Amanda 解釋你所了解到的事。 Kalideth 在和 Iskander 戰鬥時已經瘋了，而導致魔法和法師心智出現問題的根源——真正殺死 Kalideth 的東西——已經被摧毀了。~~「你剝奪了我應得的復仇！你怎麼敢！」");
	say();
	if (!var0001) goto labelFunc0430_01F5;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko 嘆了口氣，肩膀垮了下來。「算了吧，姊姊。隨著我們父親英年早逝的事情現在得到解決，我們終於可以放下了。現在我們可以把生命奉獻給自己，而不是繼續被困在過去。這是最好的結果，妳必須相信我。」*");
	say();
	UI_show_npc_face(0xFFD0, 0x0000);
	message("Amanda 搖搖頭，茫然且困惑。「也許妳是對的， Eiko 。我必須想一想。」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
	gflags[0x02DE] = true;
	goto labelFunc0430_01FD;
labelFunc0430_01F5:
	message("Amanda 轉身一拳打在牆上，然後伴隨著啜泣倒在上面。過了一會兒，她站直了身體，但沒有轉身面對你。~~「不要害怕我會繼續對獨眼巨人進行復仇。我還沒病態到會殺死一個出於自衛而行動的生物。~「但我現在必須有一些自己的時間。請離開。我必須想一想。」");
	say();
	gflags[0x02DE] = true;
labelFunc0430_01FD:
	abort;
	UI_remove_answer("住手！");
labelFunc0430_0205:
	case "告辭" attend labelFunc0430_0210:
	goto labelFunc0430_0213;
labelFunc0430_0210:
	goto labelFunc0430_005C;
labelFunc0430_0213:
	endconv;
	message("「祝你旅途順利，");
	message(var0000);
	message("。」*");
	say();
	return;
}


