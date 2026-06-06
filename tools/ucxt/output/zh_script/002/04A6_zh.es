#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A6 object#(0x4A6) ()
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

	if (!(event == 0x0001)) goto labelFunc04A6_0301;
	UI_show_npc_face(0xFF5A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF5A));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A6_0056;
	UI_add_answer("小偷");
labelFunc04A6_0056:
	if (!gflags[0x021A]) goto labelFunc04A6_006A;
	if (!(!gflags[0x021D])) goto labelFunc04A6_006A;
	UI_add_answer("送貨");
labelFunc04A6_006A:
	if (!gflags[0x021B]) goto labelFunc04A6_0077;
	UI_add_answer("Polly");
labelFunc04A6_0077:
	if (!(!gflags[0x021F])) goto labelFunc04A6_0089;
	message("「你看到一個因為一天辛勤工作而渾身是汗的男人。」");
	say();
	gflags[0x021F] = true;
	goto labelFunc04A6_0093;
labelFunc04A6_0089:
	message("「你好，");
	message(var0000);
	message("～」Thurston 說。");
	say();
labelFunc04A6_0093:
	converse attend labelFunc04A6_02F6;
	case "姓名" attend labelFunc04A6_00A9:
	message("「我是 Thurston。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A6_00A9:
	case "職業" attend labelFunc04A6_00C2:
	message("「我在 Paws 這裡經營磨坊。」");
	say();
	UI_add_answer(["磨坊", "Paws"]);
labelFunc04A6_00C2:
	case "磨坊" attend labelFunc04A6_00E2:
	message("「當地經濟依賴磨坊提供麵粉。所以我確保磨坊運轉。有時候，我覺得保持輪子轉動是活著的唯一理由。」");
	say();
	UI_add_answer(["麵粉", "活著的理由"]);
	UI_remove_answer("磨坊");
labelFunc04A6_00E2:
	case "麵粉" attend labelFunc04A6_0197:
	if (!(var0002 == 0x0007)) goto labelFunc04A6_018C;
	message("「一袋要價 12 枚金幣。你有興趣買一些嗎？」");
	say();
	if (!Func090A()) goto labelFunc04A6_017F;
labelFunc04A6_00FE:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x000C)) goto labelFunc04A6_0172;
	var0005 = UI_add_party_items(0x0001, 0x035F, 0xFE99, 0x000E, true);
	if (!var0005) goto labelFunc04A6_016B;
	var0006 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc04A6_0168;
	message("「給你，」他說著，把袋子遞給你。「你還想要一袋嗎？」*");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04A6_0165;
	goto labelFunc04A6_00FE;
	goto labelFunc04A6_0168;
labelFunc04A6_0165:
	goto labelFunc04A6_02F6;
labelFunc04A6_0168:
	goto labelFunc04A6_016F;
labelFunc04A6_016B:
	message("「你沒有空間放這個袋子了。」");
	say();
labelFunc04A6_016F:
	goto labelFunc04A6_017C;
labelFunc04A6_0172:
	message("「你沒有足夠的金幣買這個，");
	message(var0000);
	message("。也許下次吧。」");
	say();
labelFunc04A6_017C:
	goto labelFunc04A6_0189;
labelFunc04A6_017F:
	message("「也許下次，");
	message(var0000);
	message("。」");
	say();
labelFunc04A6_0189:
	goto labelFunc04A6_0190;
labelFunc04A6_018C:
	message("「磨坊目前關閉了。如果你願意等它重新開張時再來，我很樂意賣給你所有你能拿得動的麵粉。」");
	say();
labelFunc04A6_0190:
	UI_remove_answer("麵粉");
labelFunc04A6_0197:
	case "Paws" attend labelFunc04A6_01B8:
	message("「如果你沒注意到，住在這兒的人沒有他們住在 Britain 的親戚那麼富裕。事實上，我們最近甚至發生了一起竊盜案。」");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04A6_01B8;
	UI_add_answer("竊盜案");
labelFunc04A6_01B8:
	case "小偷", "竊盜案" attend labelFunc04A6_01E5:
	message("「的確，你應該小心，");
	message(var0000);
	message("。這鎮上有個小偷！一位名叫 Morfin 的商人，被偷了幾瓶珍貴的銀蛇毒液。」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer(["竊盜案", "小偷"]);
	UI_add_answer("蛇毒");
labelFunc04A6_01E5:
	case "蛇毒" attend labelFunc04A6_01F8:
	message("「它是從銀蛇身上取得的。我相信在過去，石像鬼習慣性地使用它。我不太確定它對人類會有什麼影響。也許 Morfin 可以告訴你更多。」");
	say();
	UI_remove_answer("蛇毒");
labelFunc04A6_01F8:
	case "送貨" attend labelFunc04A6_025B:
	if (!gflags[0x021D]) goto labelFunc04A6_020D;
	message("「我已經付過你一次送貨費了。我不會再付一次的。」");
	say();
	goto labelFunc04A6_0254;
labelFunc04A6_020D:
	var0008 = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04A6_0250;
	message("「你把袋子交給 Thurston。他打開它，把手伸進去。他的手拿出來時抓滿了小麥。他用手指篩了篩。『我知道 Camille 經營農場經常很忙。謝謝你幫忙送貨。』」");
	say();
	var0009 = UI_add_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04A6_024D;
	message("「這應該能補償你的辛勞。」他遞給你十枚金幣。");
	say();
	gflags[0x021D] = true;
labelFunc04A6_024D:
	goto labelFunc04A6_0254;
labelFunc04A6_0250:
	message("「這真是個謎！Camille 答應今天某個時候送小麥給我，而且已經晚了。我想知道它會在哪裡。」");
	say();
labelFunc04A6_0254:
	UI_remove_answer("送貨");
labelFunc04A6_025B:
	case "活著的理由" attend labelFunc04A6_027B:
	message("「我沒有妻子或家人。我曾經考慮過加入友誼會，但我拒絕了。我除了工作，就只有偶爾在 Salty Dog 喝杯酒。」");
	say();
	UI_remove_answer("活著的理由");
	UI_add_answer(["友誼會", "Salty Dog"]);
labelFunc04A6_027B:
	case "友誼會" attend labelFunc04A6_029E:
	message("「我知道他們在鎮上做了很好的工作，但他們身上就是有些東西讓我感到不舒服。」");
	say();
	if (!var0003) goto labelFunc04A6_0297;
	message("「他注意到你的友誼會徽章，急忙清了清嗓子。『無意冒犯，");
	message(var0000);
	message("。」");
	say();
labelFunc04A6_0297:
	UI_remove_answer("友誼會");
labelFunc04A6_029E:
	case "Salty Dog" attend labelFunc04A6_02C3:
	if (!(!gflags[0x0216])) goto labelFunc04A6_02B8;
	message("「說實話，我去那裡更多是為了靠近旅館老闆 Polly，而不是為了喝酒。但我肯定她總是在忙著照顧酒吧，沒有時間理我。」");
	say();
	gflags[0x0216] = true;
	goto labelFunc04A6_02BC;
labelFunc04A6_02B8:
	message("「我應該去 Salty Dog 看看 Polly。」Thurston 茫然地盯著半空幾秒鐘，他的眼睛睜得大大的，臉上帶著癡情的表情。突然，他回過神來。「對不起，你剛才說什麼？」");
	say();
labelFunc04A6_02BC:
	UI_remove_answer("Salty Dog");
labelFunc04A6_02C3:
	case "Polly" attend labelFunc04A6_02E8:
	if (!(!gflags[0x0231])) goto labelFunc04A6_02DD;
	message("「你向 Thurston 轉述了 Polly 對他說的話。他帶著驚喜的表情看著你。『Polly 真的這麼說嗎？！她認為我對她來說太好了，這太荒謬了！』突然他忘記了工作，興奮地四處走動。『多年來我一直遠遠地愛著這個女人。我會立刻開始追求她！』」");
	say();
	gflags[0x0231] = true;
	goto labelFunc04A6_02E1;
labelFunc04A6_02DD:
	message("「我想感謝你告訴我關於 Polly 對我感覺的真相。我一直經營這個該死的磨坊，真是個死腦筋，如果她背上貼著告示，我可能也永遠不會注意到！這正是我開始享受生活所需要的幫助！」");
	say();
labelFunc04A6_02E1:
	UI_remove_answer("Polly");
labelFunc04A6_02E8:
	case "告辭" attend labelFunc04A6_02F3:
	goto labelFunc04A6_02F6;
labelFunc04A6_02F3:
	goto labelFunc04A6_0093;
labelFunc04A6_02F6:
	endconv;
	message("「祝你有個美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc04A6_0301:
	if (!(event == 0x0000)) goto labelFunc04A6_030F;
	Func092E(0xFF5A);
labelFunc04A6_030F:
	return;
}


