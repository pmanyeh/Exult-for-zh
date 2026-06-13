#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0491 object#(0x491) ()
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
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc0491_0347;
	UI_show_npc_face(0xFF6F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF6F);
	var0004 = false;
	var0005 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017C]) goto labelFunc0491_0055;
	UI_add_answer("受折磨的人");
labelFunc0491_0055:
	if (!(!gflags[0x01B9])) goto labelFunc0491_0061;
	message("美麗的幻影繼續她的工作，沒有提供任何回應。*");
	say();
	abort;
labelFunc0491_0061:
	if (!(!gflags[0x01AA])) goto labelFunc0491_009C;
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0491_009C;
	if (!(var0003 == 0x000E)) goto labelFunc0491_008C;
	message("美麗的酒館女侍凝視著虛無，完全沒有意識到她的位置和狀態。*");
	say();
	abort;
	goto labelFunc0491_009C;
labelFunc0491_008C:
	if (!(!(var0003 == 0x000B))) goto labelFunc0491_009C;
	message("美麗的酒館女侍看起來好像快要倒下了一會兒，然後迅速地站穩了。「哦，我覺得有點……頭暈。」她轉過身，心神不寧。*");
	say();
	abort;
labelFunc0491_009C:
	if (!gflags[0x01A4]) goto labelFunc0491_00A7;
	message("「走開！你殘酷又冷酷。」她轉過身，但在那之前你看到了她眼中的淚水。*");
	say();
	abort;
labelFunc0491_00A7:
	var0006 = Func08F7(0xFF70);
	if (!var0006) goto labelFunc0491_00E8;
	if (!(!gflags[0x01BE])) goto labelFunc0491_00E8;
	message("Paulette 看到 Rowena 時精神一振。~~「妳好，女士。很高興再次見到妳。妳好嗎？」*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("「我很好， Paulette 。謝謝妳的關心。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("「那真是個好消息，女士。」");
	say();
	gflags[0x01BE] = true;
labelFunc0491_00E8:
	var0007 = Func08F7(0xFF6D);
	if (!var0007) goto labelFunc0491_0129;
	if (!(!gflags[0x01BD])) goto labelFunc0491_0129;
	message("「你好，市長。我們已經有很長一段時間沒在酒館裡看到你了。我記得曾經有一段時間，我們根本無法讓你離開這裡。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("市長很快變得尷尬，試圖讓相當友善的 Paulette 安靜下來。~~「我，呃，曾經算是個品酒專家，」他對你說。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("「你可不只是這方面的專家，」Paulette 補充道，眼睛閃爍著。「我似乎記得你對紅髮女郎很有品味。」");
	say();
	gflags[0x01BD] = true;
labelFunc0491_0129:
	if (!gflags[0x0198]) goto labelFunc0491_0136;
	UI_add_answer("犧牲");
labelFunc0491_0136:
	if (!(!gflags[0x01CA])) goto labelFunc0491_0161;
	if (!var0001) goto labelFunc0491_0150;
	message("你看到一個留著黑色長髮、漂亮的幽靈女孩。「你好，");
	message(var0000);
	message("。我叫做 Paulette 。有什麼我可以幫你的嗎？」");
	say();
	goto labelFunc0491_015A;
labelFunc0491_0150:
	message("站在你面前，一手插腰的，是一位留著黑色長髮的可愛年輕女子。「哦……你真高大，");
	message(var0000);
	message("。」她描摹著你二頭肌的線條。~~「我敢打賭你能把我舉過頭頂。」她迷人地笑著。不過，你懷疑在她這種幽靈狀態下，你甚至無法觸摸到她。~~「你可以叫我 Paulette ，帥哥。我能為你做什麼？」她對你眨了眨眼。");
	say();
labelFunc0491_015A:
	gflags[0x01CA] = true;
	goto labelFunc0491_0178;
labelFunc0491_0161:
	if (!var0001) goto labelFunc0491_0174;
	message("「是的，");
	message(var0000);
	message("？」她甜甜地問。");
	say();
	goto labelFunc0491_0178;
labelFunc0491_0174:
	message("Paulette 轉向你，賣弄風情地笑著，「我就知道你可能會回來。」她的眼睛淘氣地對著你閃爍。");
	say();
labelFunc0491_0178:
	converse attend labelFunc0491_032F;
	case "姓名" attend labelFunc0491_0194:
	message("「哎呀，");
	message(var0000);
	message("，你已經忘了嗎？我是 Paulette 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0491_0194:
	case "職業" attend labelFunc0491_01DC:
	if (!var0001) goto labelFunc0491_01AF;
	message("「嗯，");
	message(var0000);
	message("，在火災之前，」她發抖著說，「我以前是這裡的酒館女侍。」");
	say();
	goto labelFunc0491_01B9;
labelFunc0491_01AF:
	message("「嗯，");
	message(var0000);
	message("。我以前在這裡清理桌子……」她說著，彎下腰假裝在擦桌子。你注意到她的馬甲領口開得有多低。~~「……並為像你這樣的人服務。當然，沒有像你這麼帥的。」她幽靈般的臉龐泛起美麗的紅暈。~~「但那是在……」她發抖著說，「火災之前。」");
	say();
labelFunc0491_01B9:
	UI_add_answer("買");
	if (!(!var0005)) goto labelFunc0491_01CE;
	UI_add_answer("這裡");
labelFunc0491_01CE:
	if (!(!var0004)) goto labelFunc0491_01DC;
	UI_add_answer("大火");
labelFunc0491_01DC:
	case "買" attend labelFunc0491_0244:
	message("「你想買點什麼嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0491_0233;
	message("「很抱歉，");
	message(var0000);
	message("，」她咯咯笑著，「但我們這裡只供應……靈魂！」*");
	say();
	var0009 = Func08F7(0xFF74);
	if (!(var0009 && gflags[0x01B4])) goto labelFunc0491_0230;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「這笑話不錯，丫頭，」胖幽靈笑著說。*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6F, 0x0000);
labelFunc0491_0230:
	goto labelFunc0491_023D;
labelFunc0491_0233:
	message("「很好，");
	message(var0000);
	message("。」");
	say();
labelFunc0491_023D:
	UI_remove_answer("買");
labelFunc0491_0244:
	case "受折磨的人" attend labelFunc0491_0265:
	message("她困惑了一瞬間，但隨後點了點頭。~~「哦，你一定是指 Caine 。他是對這場火災負有責任的鍊金術士。」");
	say();
	UI_remove_answer("受折磨的人");
	if (!(!var0004)) goto labelFunc0491_0265;
	UI_add_answer("大火");
labelFunc0491_0265:
	case "大火" attend labelFunc0491_0291:
	message("「哦，是的。太可怕了！酒館起火了。我跑到我的房間，希望能逃離火焰。但後來我開始咳嗽。我無法呼吸。」她的胸口快速起伏，彷彿正在重溫那段經歷。~~「最後，我再也受不了了。」她戲劇性地將手背放在額頭上。「我暈倒了。然後我又在這裡了，就像你現在看到我這樣。」她的笑容像個孩子一樣。");
	say();
	var0004 = true;
	UI_remove_answer("大火");
	UI_add_answer("又在這裡");
	if (!(!var0005)) goto labelFunc0491_0291;
	UI_add_answer("酒館");
labelFunc0491_0291:
	case "又在這裡" attend labelFunc0491_02A4:
	message("「是的，這很奇怪。當我醒來時，就好像火災開始時我從未離開過一樣。事實上，如果不是到處都有燒焦的痕跡，我會懷疑火災是否真的發生過。」");
	say();
	UI_remove_answer("又在這裡");
labelFunc0491_02A4:
	case "酒館", "這裡" attend labelFunc0491_02DF:
	if (!var0001) goto labelFunc0491_02BE;
	var000A = "害羞地";
	goto labelFunc0491_02C4;
labelFunc0491_02BE:
	var000A = "";
labelFunc0491_02C4:
	message("「哎呀，這裡叫做『魂靈烈酒桶』 。對一家酒館來說，這名字很不錯吧？」她");
	message(var000A);
	message("笑著說。");
	say();
	UI_remove_answer(["這裡", "酒館"]);
	var0005 = true;
labelFunc0491_02DF:
	case "犧牲" attend labelFunc0491_0321:
	if (!(!gflags[0x019B])) goto labelFunc0491_0311;
	message("「你要我……跳進井裡？」她驚訝地瞪大了眼睛。");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0491_030A;
	message("「哼，你怎麼不自己去跳湖！」她將雙臂交叉在豐滿的胸前，生氣地轉過身去。*");
	say();
	gflags[0x019B] = true;
	abort;
	goto labelFunc0491_030E;
labelFunc0491_030A:
	message("她恢復了鎮定，「哦。有一瞬間，我以為你要我成為你的……祭品。」");
	say();
labelFunc0491_030E:
	goto labelFunc0491_031A;
labelFunc0491_0311:
	message("「拜託，別管我！」她看起來好像快哭了。*");
	say();
	gflags[0x01A4] = true;
	abort;
labelFunc0491_031A:
	UI_remove_answer("犧牲");
labelFunc0491_0321:
	case "告辭" attend labelFunc0491_032C:
	goto labelFunc0491_032F;
labelFunc0491_032C:
	goto labelFunc0491_0178;
labelFunc0491_032F:
	endconv;
	if (!var0001) goto labelFunc0491_0343;
	message("「再見，");
	message(var0000);
	message("。」美麗的幽靈轉過身去。*");
	say();
	goto labelFunc0491_0347;
labelFunc0491_0343:
	message("當你說再見時， Paulette 衝上前來，在你的臉頰上輕輕吻了一下。她慢慢退後，「再見，帥哥。」*");
	say();
labelFunc0491_0347:
	if (!(event == 0x0000)) goto labelFunc0491_0350;
	abort;
labelFunc0491_0350:
	return;
}


