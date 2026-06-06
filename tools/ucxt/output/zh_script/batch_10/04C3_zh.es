#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04C3 object#(0x4C3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04C3_0385;
	UI_show_npc_face(0xFF3D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF3B);
	var0003 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x026C])) goto labelFunc04C3_0075;
	message("這位非常嚴肅的男人在向你問候時露出了一絲微笑。");
	say();
	var0004 = UI_get_distance(0xFF3D, 0xFF3B);
	if (!(var0004 < 0x000A)) goto labelFunc04C3_006E;
	if (!gflags[0x026E]) goto labelFunc04C3_006A;
	message("Horffe 正在他身後立正站好。");
	say();
	goto labelFunc04C3_006E;
labelFunc04C3_006A:
	message("在他身後立正站好的是一隻有翼的石像鬼。");
	say();
labelFunc04C3_006E:
	gflags[0x026C] = true;
	goto labelFunc04C3_0079;
labelFunc04C3_0075:
	message("「祝你有個美好的一天，」 John-Paul 領主說。");
	say();
labelFunc04C3_0079:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C3_0092;
	if (!(!gflags[0x0261])) goto labelFunc04C3_0092;
	UI_add_answer("Horffe 爵士要負責");
labelFunc04C3_0092:
	if (!(gflags[0x025D] && (!gflags[0x0261]))) goto labelFunc04C3_00AB;
	UI_add_answer("Pendaran 爵士要負責");
	UI_remove_answer("Horffe 爵士要負責");
labelFunc04C3_00AB:
	converse attend labelFunc04C3_037A;
	case "姓名" attend labelFunc04C3_010F:
	message("「我是 Serpent's Hold 的 John-Paul 領主。你是");
	message(var0000);
	message("，是聖者，對吧？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04C3_00F7;
	if (!(gflags[0x025E] && (!gflags[0x0260]))) goto labelFunc04C3_00DE;
	message("「我記得你。」");
	say();
	goto labelFunc04C3_00F4;
labelFunc04C3_00DE:
	message("「太棒了。」");
	say();
	if (!(!gflags[0x0263])) goto labelFunc04C3_00ED;
	message("「我有個你可能會感興趣的東西。」");
	say();
labelFunc04C3_00ED:
	UI_add_answer("我感興趣");
labelFunc04C3_00F4:
	goto labelFunc04C3_0101;
labelFunc04C3_00F7:
	message("他看起來很驚訝。「請原諒我，");
	message(var0001);
	message("，我敢發誓……啊，算了，沒關係。」");
	say();
labelFunc04C3_0101:
	UI_remove_answer("姓名");
	UI_add_answer("Serpent's Hold");
labelFunc04C3_010F:
	case "職業" attend labelFunc04C3_0122:
	message("「我負責監督這座堡壘。」");
	say();
	UI_add_answer("監督");
labelFunc04C3_0122:
	case "監督" attend labelFunc04C3_0142:
	message("「這不是一份困難的工作。 Richter 爵士和 Horffe 爵士確保事情盡可能順利進行。」");
	say();
	UI_remove_answer("監督");
	UI_add_answer(["Sir Richter", "Sir Horffe"]);
labelFunc04C3_0142:
	case "Sir Richter" attend labelFunc04C3_015C:
	message("「當我忙於其他事務時，他負責管理這座堡壘。他最近似乎有些改變，但我仍然信任他。」");
	say();
	UI_remove_answer("Sir Richter");
	UI_add_answer("改變");
labelFunc04C3_015C:
	case "改變" attend labelFunc04C3_017C:
	message("「那是從他加入友誼會時開始的。他變得更加……該怎麼說呢……有條理。」~~他笑了。「我想友誼會內部有某種嚴格的結構對他有好處，不是嗎？」");
	say();
	UI_remove_answer("改變");
	UI_add_answer(["有條理", "友誼會"]);
labelFunc04C3_017C:
	case "友誼會" attend labelFunc04C3_0193:
	message("「恐怕我對他們了解不多。他們似乎幫助了很多人。然而，我注意到自從 Richter 加入後， Horffe 爵士變得相當憂慮。」");
	say();
	var0003 = true;
	UI_remove_answer("友誼會");
labelFunc04C3_0193:
	case "有條理" attend labelFunc04C3_01A6:
	message("「這很難解釋。他似乎更有紀律了，」他短促地笑了一聲，「這當然相當適合這座堡壘。」");
	say();
	UI_remove_answer("有條理");
labelFunc04C3_01A6:
	case "Sir Horffe" attend labelFunc04C3_01E8:
	message("「他是衛兵隊長。他的職位無人能取代。他是我見過最尊貴的戰士。」");
	say();
	if (!var0002) goto labelFunc04C3_01D7;
	UI_show_npc_face(0xFF3B, 0x0000);
	message("「感謝你，爵士！」");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_01D7:
	if (!var0003) goto labelFunc04C3_01E1;
	message("「不過，他似乎對友誼會感到反感。我注意到他在 Richter 爵士身邊不願提起這件事。」他聳了聳肩。");
	say();
labelFunc04C3_01E1:
	UI_remove_answer("Sir Horffe");
labelFunc04C3_01E8:
	case "Serpent's Hold" attend labelFunc04C3_0208:
	message("「自從你上次來訪後，這裡幾乎沒什麼改變，");
	message(var0000);
	message("。當然，所有的人都是新面孔。」");
	say();
	UI_add_answer("人們");
	UI_remove_answer("Serpent's Hold");
labelFunc04C3_0208:
	case "人們" attend labelFunc04C3_021B:
	message("「恐怕我等一下必須處理其他事務，無法帶你四處看看。但我建議你去參觀神聖碼頭 (Hallowed Dock) 。許多堡壘的騎士晚上會在那裡出沒。」");
	say();
	UI_remove_answer("人們");
labelFunc04C3_021B:
	case "我感興趣" attend labelFunc04C3_026C:
	if (!(!gflags[0x0260])) goto labelFunc04C3_0254;
	message("他感激地對你微笑，並開始踱步。~~「最近發生了一起可怕的罪行。看起來在堡壘公共廣場的 Lord British 雕像，被一個不知名的破壞者給損毀了。~~或許，」他滿懷希望地看著你，「你可以幫忙追查這個惡徒？」");
	say();
	gflags[0x0263] = true;
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C3_0245;
	message("「非常好。最好的開始方式是跟神聖碼頭的酒館老闆 Denton 爵士談談。他解決謎題和問題的能力非常卓越。當你解開這個小謎團後，請將你的發現告訴我。」");
	say();
	goto labelFunc04C3_024D;
labelFunc04C3_0245:
	message("「當然。我明白。你確實有更重要的事情要解決。我會請 Yew 的官員來處理這件事。」");
	say();
	gflags[0x0260] = true;
labelFunc04C3_024D:
	gflags[0x025E] = true;
	goto labelFunc04C3_0265;
labelFunc04C3_0254:
	message("「哦，對了，我忘了。非常抱歉就這件事兩次打擾你。請原諒我的健忘，");
	message(var0000);
	message("。這件事正在處理中。」");
	say();
	UI_add_answer("處理好了？");
labelFunc04C3_0265:
	UI_remove_answer("我感興趣");
labelFunc04C3_026C:
	case "處理好了？" attend labelFunc04C3_0286:
	message("「我已經派人去請 Yew 高等法院的法官了。我明白你沒有時間處理這些瑣事。」");
	say();
	UI_add_answer("我有時間");
	UI_remove_answer("處理好了？");
labelFunc04C3_0286:
	case "我有時間" attend labelFunc04C3_02A0:
	message("「是的，是的，你太好了，但我相信你肯定有更重要的事情要處理。我還是要謝謝你。」");
	say();
	UI_remove_answer("我有時間");
	UI_add_answer("我—想—要—做—！");
labelFunc04C3_02A0:
	case "我—想—要—做—！" attend labelFunc04C3_02B3:
	message("「哦，我明白了。好吧，既然如此。最好的開始方式是去跟神聖碼頭的酒館老闆 Denton 爵士談談。他解決謎題和問題的能力非常卓越。解開這個小謎團後，請帶著你的發現來找我。」");
	say();
	UI_remove_answer("我—想—要—做—！");
labelFunc04C3_02B3:
	case "Pendaran 爵士要負責" attend labelFunc04C3_02CD:
	message("他顯得很困惑。~~「我明白了。那你是怎麼得出這個結論的？」");
	say();
	UI_add_answer("Jehanne 女士");
	UI_remove_answer("Pendaran 爵士要負責");
labelFunc04C3_02CD:
	case "Jehanne 女士" attend labelFunc04C3_0329:
	Func0911(0x0064);
	message("他笑著伸出手。~~「幹得好，");
	message(var0000);
	message("。我無法充分表達我的感激。我會確保 Pendaran 爵士受到適當的懲戒。感謝你，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x0262]) goto labelFunc04C3_031E;
	message("「現在我必須向 Horffe 爵士道歉！」");
	say();
	if (!var0002) goto labelFunc04C3_031E;
	message("*");
	say();
	UI_show_npc_face(0xFF3B, 0x0000);
	message("「不需要！很高興找到了真正的破壞者。」*");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_031E:
	gflags[0x0261] = true;
	UI_remove_answer("Jehanne 女士");
labelFunc04C3_0329:
	case "Horffe 爵士要負責" attend labelFunc04C3_0343:
	message("他顯得很驚訝。~~「我明白了。那你是怎麼得出這個結論的？」");
	say();
	UI_add_answer("碎片上的石像鬼血跡");
	UI_remove_answer("Horffe 爵士要負責");
labelFunc04C3_0343:
	case "碎片上的石像鬼血跡" attend labelFunc04C3_036C:
	message("「那好吧。」他顯然很苦惱。");
	say();
	if (!var0002) goto labelFunc04C3_035D;
	message("他轉身訓斥身旁的石像鬼。*");
	say();
	abort;
	goto labelFunc04C3_0361;
labelFunc04C3_035D:
	message("「我會立刻處理這件事！」");
	say();
labelFunc04C3_0361:
	gflags[0x0262] = true;
	UI_remove_answer("碎片上的石像鬼血跡");
labelFunc04C3_036C:
	case "告辭" attend labelFunc04C3_0377:
	goto labelFunc04C3_037A;
labelFunc04C3_0377:
	goto labelFunc04C3_00AB;
labelFunc04C3_037A:
	endconv;
	message("「繼續，");
	message(var0000);
	message("。」*");
	say();
labelFunc04C3_0385:
	if (!(event == 0x0000)) goto labelFunc04C3_038E;
	abort;
labelFunc04C3_038E:
	return;
}


