#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0870 0x870 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func0423 object#(0x423) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0423_01DF;
	UI_show_npc_face(0xFFDD, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFDD));
	UI_add_answer(["姓名", "職業", "服務", "告辭"]);
	if (!(!gflags[0x00A4])) goto labelFunc0423_0049;
	message("你看見一位看起來睿智而誠實的治療師。");
	say();
	message("「我一直期待你的到來，聖者。消息傳得很快。很高興見到你！」");
	say();
	gflags[0x00A4] = true;
	goto labelFunc0423_004D;
labelFunc0423_0049:
	message("「又見面了，聖者！」 Csil 微笑著說。");
	say();
labelFunc0423_004D:
	converse attend labelFunc0423_01DA;
	case "姓名" attend labelFunc0423_006A:
	message("「我是治療師 Csil ，雖然在過去的生活中我被稱為 Abrams 。當我晉升時我變成了 Csil 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("晉升");
labelFunc0423_006A:
	case "職業" attend labelFunc0423_0076:
	message("「我是 Britain 的治療師，已經很多年了。如果你希望雇用我的服務，請告訴我。我非常樂意幫忙。」");
	say();
labelFunc0423_0076:
	case "晉升" attend labelFunc0423_0096:
	message("「當我的名字是 Abrams 時，我住在 New Magincia 島並在那裡做學徒。我的診所發展壯大，很快我就乘船去 Moonglow 看那裡的病人了。」");
	say();
	UI_remove_answer("晉升");
	UI_add_answer(["病人", "診所"]);
labelFunc0423_0096:
	case "病人" attend labelFunc0423_00B0:
	message("「很快我在三個島上都有了病人。就在那時， Lord British 聽說了我的診所。」");
	say();
	UI_remove_answer("病人");
	UI_add_answer("Lord British");
labelFunc0423_00B0:
	case "診所" attend labelFunc0423_012A:
	message("「我的診所發展迅速。我是個謙虛的人，但我不介意說我是一個受歡迎的治療師。」");
	say();
	UI_remove_answer("診所");
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc0423_012A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「他可能是全 Britannia 最好的治療師。哎呀，他立刻治好了我的一個，呃，特殊問題。」*");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0423_0119;
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「喔？什麼問題？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「別在意。全世界不需要知道這件事。」*");
	say();
labelFunc0423_0119:
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFDD, 0x0000);
labelFunc0423_012A:
	case "Lord British" attend labelFunc0423_014A:
	message("「嗯，Lord British 自己也感染了某種疾病。他派人找我。我一離開病人就趕到城堡檢查了國王。在我看來，似乎有什麼東西侵入了他的血液。我對此有一個理論，我堅信它是正確的。然而，其他人並不認同我的觀點。」");
	say();
	UI_remove_answer("Lord British");
	UI_add_answer(["理論", "其他人"]);
labelFunc0423_014A:
	case "理論" attend labelFunc0423_0174:
	message("「我相信大多數疾病是由微小的生物引起的。我們無法用肉眼看到這些東西。然而，我正在致力於開發一種儀器，可以 -看到- 這些生物。我相信總有一天，治療將完全不依賴魔法，而是依賴某種形式的治療，使人不容易受到這些生物的感染。由於這些動物是生物，我稱這種理論上的治療為『抗生素療法』。你覺得呢，聖者？我走在正確的道路上嗎？」");
	say();
	UI_remove_answer("理論");
	var0003 = Func090A();
	if (!var0003) goto labelFunc0423_0170;
	message("「很好。我也這麼認為。」");
	say();
	goto labelFunc0423_0174;
labelFunc0423_0170:
	message("「不？嗯。」 Csil 看起來很憂慮。「好吧，我無法相信傳統的放血療法，直到疾病離開他的身體。一定有另一種方法……」~~Csil 看著他的筆記，擔心他的理論是無效的。");
	say();
labelFunc0423_0174:
	case "其他人" attend labelFunc0423_01A5:
	message("「有一群人不鼓勵我的研究。我們完全合不來。我認為他們對治療師有一種超越單純不信任的反感。你知道我指誰嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0423_0193;
	message("Csil 點點頭。「我也這麼想。友誼會並不……像他們看起來的那樣。」");
	say();
	goto labelFunc0423_0197;
labelFunc0423_0193:
	message("「不知道？」 Csil 壓低聲音說。「是友誼會。」");
	say();
labelFunc0423_0197:
	UI_remove_answer("其他人");
	UI_add_answer("友誼會");
labelFunc0423_01A5:
	case "友誼會" attend labelFunc0423_01B8:
	message("「他們有一套概述其信仰的教義。他們相信如果一個人面臨痛苦，那麼他別無選擇，只能經歷它才能成為一個『更好的人』。我不同意這點。沒有人應該經歷不必要的痛苦。但是……他們有權保留自己的意見。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0423_01B8:
	case "服務" attend labelFunc0423_01CC:
	Func0870(0x0028, 0x001E, 0x01C2);
labelFunc0423_01CC:
	case "告辭" attend labelFunc0423_01D7:
	goto labelFunc0423_01DA;
labelFunc0423_01D7:
	goto labelFunc0423_004D;
labelFunc0423_01DA:
	endconv;
	message("「再見，聖者。」*");
	say();
labelFunc0423_01DF:
	if (!(event == 0x0000)) goto labelFunc0423_01ED;
	Func092E(0xFFDD);
labelFunc0423_01ED:
	return;
}


