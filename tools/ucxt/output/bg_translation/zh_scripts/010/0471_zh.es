#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0471 object#(0x471) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0471_02BA;
	UI_show_npc_face(0xFF8F, 0x0000);
	var0000 = Func0908();
	var0001 = Func08F7(0xFFFF);
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x014B])) goto labelFunc0471_0047;
	message("你看到一匹馬。「你還期待看到什麼？」");
	say();
	gflags[0x014B] = true;
	goto labelFunc0471_0051;
labelFunc0471_0047:
	message("「現在又怎麼了， ");
	message(var0000);
	message("？」 Smith 問。");
	say();
labelFunc0471_0051:
	converse attend labelFunc0471_02B9;
	case "姓名" attend labelFunc0471_00A1:
	message("「是的，我有名字。」");
	say();
	UI_remove_answer("姓名");
	if (!var0001) goto labelFunc0471_009A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「無賴！當別人問你名字時，你應該禮貌且準確地回答！聖者剛剛問的是『你的』名字。」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「我的名字？你想怎麼叫我都行，但我只會回應 Smith 。」");
	say();
	UI_add_answer("Smith");
	UI_remove_npc_face(0xFFFF);
	goto labelFunc0471_00A1;
labelFunc0471_009A:
	UI_add_answer("你的名字");
labelFunc0471_00A1:
	case "你的名字" attend labelFunc0471_00BB:
	message("「我的名字？你想怎麼叫我都行，但我只會回應 Smith 。」");
	say();
	UI_add_answer("Smith");
	UI_remove_answer("你的名字");
labelFunc0471_00BB:
	case "職業" attend labelFunc0471_00F0:
	message("「職業？『職業』？我是一匹馬，我能有什麼工作？」他望向遠方。「我現在都能想像了： Smith ——非凡的麵包師傅。~~其實，我在室內裝潢方面變得相當不錯了。看到我怎麼佈置我的住所了嗎？你很喜歡吧？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0471_00EB;
	message("「很好。那我就讓你繼續跟我說話吧！你比較喜歡哪個，我的客廳還是臥室？」");
	say();
	UI_push_answers();
	UI_add_answer(["客廳", "臥室"]);
	goto labelFunc0471_00F0;
labelFunc0471_00EB:
	message("「真有趣，我對你也有同感！」*");
	say();
	abort;
labelFunc0471_00F0:
	case "客廳", "臥室" attend labelFunc0471_0110:
	message("「你的品味還是一樣差！」");
	say();
	UI_remove_answer(["客廳", "臥室"]);
	UI_pop_answers();
labelFunc0471_0110:
	case "Smith" attend labelFunc0471_0165:
	if (!var0002) goto labelFunc0471_0127;
	var0004 = "still want";
	goto labelFunc0471_012D;
labelFunc0471_0127:
	var0004 = "want";
labelFunc0471_012D:
	message("「對，這就是我告訴你怎麼叫我的名字。喔，我懂了！你」");
	message(var0004);
	message("，你想從我這裡得到什麼，對吧？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0471_0160;
	message("「我就知道。你一直都是個自私的人。你想要什麼？讓我想想……金錢？建議？幸福？不，你通常想要某種線索，對吧。當然，在過去兩百年間你也許變得無私了……~~我知道了！你想要拯救 Britannia ！」");
	say();
	UI_add_answer(["金錢", "建議", "線索", "幸福", "拯救 Britannia"]);
	goto labelFunc0471_0165;
labelFunc0471_0160:
	message("「那你跟我說話做什麼？」*");
	say();
	abort;
labelFunc0471_0165:
	case "金錢" attend labelFunc0471_0187:
	message("「從一匹馬身上？對！說得好像我有錢給你一樣。」");
	say();
	UI_remove_answer(["金錢", "建議", "線索", "幸福", "拯救 Britannia"]);
labelFunc0471_0187:
	case "建議" attend labelFunc0471_0194:
	message("「別跟馬說話！」*");
	say();
	abort;
labelFunc0471_0194:
	case "幸福" attend labelFunc0471_01B6:
	message("「誰不想？」");
	say();
	UI_remove_answer(["金錢", "建議", "線索", "幸福", "拯救 Britannia"]);
labelFunc0471_01B6:
	case "拯救 Britannia" attend labelFunc0471_01D8:
	message("「你真的以為我會相信嗎？你做這些只是為了錢。」");
	say();
	UI_remove_answer(["金錢", "建議", "線索", "幸福", "拯救 Britannia"]);
labelFunc0471_01D8:
	case "線索" attend labelFunc0471_020D:
	message("「現在我們進入正題了。好吧，我給你一個線索，但我能得到什麼好處？讓我猜猜。金錢？愛情？不，以我對你的了解，大概什麼都沒有。如果我運氣好，你會走開別煩我。」");
	say();
	UI_remove_answer(["金錢", "建議", "線索", "幸福", "拯救 Britannia"]);
	UI_add_answer(["金錢", "愛情", "什麼都沒有", "不會把你做成膠水"]);
labelFunc0471_020D:
	case "什麼都沒有" attend labelFunc0471_021A:
	message("「我已經有了！」*");
	say();
	abort;
labelFunc0471_021A:
	case "金錢" attend labelFunc0471_0227:
	message("「當然！好像我用得著那個一樣！」*");
	say();
	abort;
labelFunc0471_0227:
	case "愛情" attend labelFunc0471_0234:
	message("「抱歉，我不搞那一套。」*");
	say();
	abort;
labelFunc0471_0234:
	case "不會把你做成膠水" attend labelFunc0471_0260:
	message("「威脅，是嗎？你期望我怎麼回應？彬彬有禮地張開蹄子歡迎你？~~這樣吧：你走開別煩我，我就告訴你一個線索。公平吧？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0471_0254;
	message("「這才像話！成交。聽好。」他環顧四周，確保沒人偷聽。「石像鬼 (gargoyles) ，」他停頓了一下，「並不邪惡。~~還有， Rasputin 是個卑鄙的火星人。好了，就這樣！現在滾！」*");
	say();
	abort;
	goto labelFunc0471_0259;
labelFunc0471_0254:
	message("「很好。反正我也不打算跟你說話！」*");
	say();
	abort;
labelFunc0471_0259:
	UI_remove_answer("不會把你做成膠水");
labelFunc0471_0260:
	case "告辭" attend labelFunc0471_02B6:
	message("「那正好。反正我也開始厭煩你了。」");
	say();
	if (!var0001) goto labelFunc0471_02B1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，你怎麼敢用這種態度跟聖者說話， Smith ！」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「你又是誰？我的主人嗎？」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「哎呀，事實上……」");
	say();
	UI_show_npc_face(0xFF8F, 0x0000);
	message("「好喔，隨便。」");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0471_02B1:
	message("*");
	say();
	abort;
labelFunc0471_02B6:
	goto labelFunc0471_0051;
labelFunc0471_02B9:
	endconv;
labelFunc0471_02BA:
	if (!(event == 0x0000)) goto labelFunc0471_02C3;
	abort;
labelFunc0471_02C3:
	return;
}


