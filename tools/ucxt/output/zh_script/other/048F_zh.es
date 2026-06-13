#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08C1 0x8C1 ();
extern void Func08C2 0x8C2 ();
extern void Func091F 0x91F (var var0000, var var0001);
extern void Func08BF 0x8BF (var var0000);
extern var Func090A 0x90A ();
extern void Func08C0 0x8C0 ();

void Func048F object#(0x48F) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!(event == 0x0001)) goto labelFunc048F_03E7;
	UI_show_npc_face(0xFF71, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_part_of_day();
	var0007 = false;
	var0008 = false;
	var0009 = UI_get_schedule_type(0xFF71);
	if (!(!gflags[0x01B7])) goto labelFunc048F_0056;
	message("這位年老的幽靈婦女哼著一首古老民謠的曲調，並抬起頭對你微笑。這位老婦人會讓你想起你見過的每一位祖母。~~顯然，她並沒有完全忽視你的存在。然而，當你跟她說話時，你的話似乎都成了耳邊風。她疑惑了片刻，然後揮動著雙臂施展魔法。你認出那些話語是降神術的變體。");
	say();
	gflags[0x01B7] = true;
labelFunc048F_0056:
	if (!(!gflags[0x01AA])) goto labelFunc048F_0097;
	if (!((var0006 == 0x0000) || (var0006 == 0x0001))) goto labelFunc048F_0097;
	if (!(var0009 == 0x000E)) goto labelFunc048F_0081;
	message("這位年老的幽靈婦女看起來很奇怪。她的眼睛是睜開的，但她似乎沒有醒著，或者至少對周遭環境沒有意識。*");
	say();
	abort;
	goto labelFunc048F_0097;
labelFunc048F_0081:
	if (!(!(var0009 == 0x0010))) goto labelFunc048F_0097;
	message("「我很抱歉，");
	message(var0000);
	message("。請不要見怪，但在我們進一步交談之前，我必須先休息。感謝你的耐心，年輕人。」她轉身時看起來非常疲憊。*");
	say();
	abort;
labelFunc048F_0097:
	if (!(!gflags[0x01D0])) goto labelFunc048F_00AB;
	if (!gflags[0x01C0]) goto labelFunc048F_00AB;
	UI_add_answer("材料");
labelFunc048F_00AB:
	var000A = UI_get_party_list();
	if (!UI_get_item_flag(UI_get_npc_object(0xFF70), 0x0006)) goto labelFunc048F_00C6;
	Func08C1();
labelFunc048F_00C6:
	if (!UI_get_item_flag(UI_get_npc_object(0xFF6D), 0x0006)) goto labelFunc048F_00DA;
	Func08C2();
labelFunc048F_00DA:
	if (!gflags[0x0198]) goto labelFunc048F_00E7;
	UI_add_answer("犧牲");
labelFunc048F_00E7:
	var000B = false;
	var000C = false;
	if (!(!gflags[0x01C8])) goto labelFunc048F_010D;
	message("「你好，");
	message(var0000);
	message("。你可以叫我 Mordra 女士。」她仔細地端詳著你。~~「而你一定是");
	message(var0001);
	message("，聖者。」她從頭到腳打量著你。");
	say();
	gflags[0x01C8] = true;
	goto labelFunc048F_011B;
labelFunc048F_010D:
	message("「再次向你問好，");
	message(var0001);
	message("。」");
	say();
	var0008 = true;
labelFunc048F_011B:
	var000D = UI_get_avatar_ref();
	var000E = UI_find_nearest(var000D, 0x0190, 0x0019);
	if (!(var000E == 0x0000)) goto labelFunc048F_014C;
	var000E = UI_find_nearest(var000D, 0x019E, 0x0019);
labelFunc048F_014C:
	if (!(!(var000E == 0x0000))) goto labelFunc048F_016A;
	var000F = 0x0000;
	Func091F(var000E, var000F);
	var0002 = true;
labelFunc048F_016A:
	var000A = UI_get_party_list2();
	enum();
labelFunc048F_0172:
	for (var0012 in var000A with var0010 to var0011) attend labelFunc048F_0190;
	UI_clear_item_flag(var0012, 0x0008);
	Func08BF(var0012);
	goto labelFunc048F_0172;
labelFunc048F_0190:
	message("她舉起雙臂，你看到她其中一隻手上拿著一個安卡十字架。一些你隱約覺得熟悉的話語從她唇間流瀉而出，安卡十字架閃爍著明亮的光芒。她停止詠唱，安卡的光芒也隨之黯淡。在她完成對你身體狀況的分析後，「啊，很高興看到這個世界對你還不錯。我能為你服務什麼，『美德之尊』？」");
	say();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x01A8] && (!gflags[0x01AA]))) goto labelFunc048F_01B6;
	UI_add_answer("造好的籠子");
labelFunc048F_01B6:
	converse attend labelFunc048F_03E6;
	case "姓名" attend labelFunc048F_01D2:
	message("她對你微笑。「你真健忘，");
	message(var0001);
	message("。就像我告訴過你的，我被稱為 Mordra 。」");
	say();
	UI_remove_answer("姓名");
labelFunc048F_01D2:
	case "職業" attend labelFunc048F_01EE:
	message("「在大火爆發、粉碎這裡人們的生活之前，我是這個鎮上的治療師。我也曾涉獵過一陣子的秘密魔法技藝。」她狡黠地對你眨了眨眼。");
	say();
	UI_add_answer(["生活", "大火", "魔法技藝"]);
labelFunc048F_01EE:
	case "材料" attend labelFunc048F_0201:
	message("「如果我告訴你，你必須確保把它們弄對。否則，我告訴那個該死的鎮長時發生的事就會重演。而且，雖然我們在 Skara Brae 已經沒有更多的生命可以失去了，但你還有一條相當寶貴的生命！~~「能溶解巫妖的混合物所需的材料是：一瓶隱身藥水、一劑解毒藥水，以及一瓶曼德拉草精華——我在我的房子裡存放了一組。記住，只要『一瓶』曼德拉草精華！」");
	say();
	UI_remove_answer("材料");
labelFunc048F_0201:
	case "造好的籠子" attend labelFunc048F_0236:
	UI_remove_answer("造好的籠子");
	message("「這靈魂籠必須被賦予死者的力量。達成這個目標的方法是前往黑暗塔的後方，靈魂之井的所在地。你必須將籠子降入井中，被困在那裡的靈魂會失去自己的一部分，以為它注入所需的力量。~~「我知道這聽起來很殘酷，但如果你想看到他們獲得自由，這就是必要之惡。」她嚴厲地看著你。~~「下一步是等到午夜，然後將籠子罩在巫妖橫躺的身軀上。這正是他為了他的黑暗儀式而吸取鎮民靈魂的時段。」~~片刻後，她繼續說道。「最後，你必須將一種魔法配方倒在籠子裡的巫妖身上。這配方與摧毀這個城鎮的物質相同。~~「在向煉金術士 Caine 取得它時，務必小心。」");
	say();
	UI_add_answer(["黑暗塔", "靈魂之井", "黑暗儀式"]);
	if (!(!gflags[0x01C0])) goto labelFunc048F_0232;
	UI_add_answer("配方");
labelFunc048F_0232:
	var0004 = true;
labelFunc048F_0236:
	case "配方" attend labelFunc048F_0254:
	message("「你必須要有 Caine 的協助才能調製配方，但我可以把材料給你。」");
	say();
	gflags[0x01C0] = true;
	UI_remove_answer("配方");
	UI_add_answer("材料");
labelFunc048F_0254:
	case "黑暗塔" attend labelFunc048F_0279:
	message("「黑暗塔位於 Skara Brae 西北方的岬角上。它的建築有些古怪，因為我發現很難用我的魔法感知穿透它。~在裡面，」她說，「你會找到靈魂之井。」");
	say();
	UI_remove_answer("黑暗塔");
	if (!(!var0007)) goto labelFunc048F_0275;
	UI_add_answer("靈魂之井");
labelFunc048F_0275:
	var0013 = true;
labelFunc048F_0279:
	case "靈魂之井" attend labelFunc048F_0294:
	var0007 = true;
	message("「靈魂之井是一件強大的神器，位於黑暗塔下方，巫妖就是從那裡汲取力量的。死者的靈魂被囚禁在那裡，註定要承受 Horance 貪得無厭的胃口所帶來的折磨。」痛苦的表情出現在她的臉上。");
	say();
	UI_remove_answer("靈魂之井");
	var0007 = true;
labelFunc048F_0294:
	case "黑暗儀式" attend labelFunc048F_02D1:
	if (!(!gflags[0x01AA])) goto labelFunc048F_02B8;
	message("Mordra 憤怒地說：「每天晚上，在午夜鐘聲敲響時， Skara Brae 的靈魂都會前往黑暗塔，並被用來為 Horance 注入力量，以維持他黑暗的存在。其他人都沒有意識到這件事的發生，但我能感覺到，卻無法阻止自己。」");
	say();
	if (!(!var0013)) goto labelFunc048F_02B5;
	UI_add_answer("黑暗塔");
labelFunc048F_02B5:
	goto labelFunc048F_02CA;
labelFunc048F_02B8:
	message("「即使巫妖已經不在了，我們仍然會被吸引到他進行黑暗儀式的地方。他一定是用某種誓約束縛了我們，並將其與靈魂之井的力量聯繫在一起。喔，他真是個狡猾的惡棍。」 Mordra 的表情中混合了對一位熟練法師的勉強敬意以及厭惡。");
	say();
	if (!(!var0007)) goto labelFunc048F_02CA;
	UI_add_answer("靈魂之井");
labelFunc048F_02CA:
	UI_remove_answer("黑暗儀式");
labelFunc048F_02D1:
	case "生活" attend labelFunc048F_030A:
	message("「你想了解 Skara Brae 的鎮民嗎？」");
	say();
	if (!var0008) goto labelFunc048F_02E7;
	message("「我也許有一些關於我鎮民同胞的新情報，可能會對你有用，」她說著，並補充了一個微笑。");
	say();
labelFunc048F_02E7:
	var0014 = Func090A();
	if (!var0014) goto labelFunc048F_02F9;
	Func08C0();
	goto labelFunc048F_0303;
labelFunc048F_02F9:
	message("「很好，");
	message(var0000);
	message("。你想知道關於什麼的事？」");
	say();
labelFunc048F_0303:
	UI_remove_answer("生活");
labelFunc048F_030A:
	case "大火" attend labelFunc048F_033A:
	message("「那是這個鎮的劫數，雖然我不責怪煉金術士 Caine 。因為是我告訴他那個我確信能幫我們除掉巫妖 Horance 的配方的。」");
	say();
	UI_remove_answer("大火");
	if (!(!var0005)) goto labelFunc048F_032B;
	UI_add_answer("Caine");
labelFunc048F_032B:
	UI_add_answer("配方");
	var000B = true;
	var000C = true;
labelFunc048F_033A:
	case "配方" attend labelFunc048F_035B:
	message("「那只是幾種材料的簡單混合。它本來應該會起作用的。」她瞇起了眼睛。~~「我想是我們那位鎮長， Forsythe ，把事情搞砸了！」");
	say();
	UI_remove_answer("配方");
	if (!(!var0003)) goto labelFunc048F_035B;
	UI_add_answer("鎮長");
labelFunc048F_035B:
	case "鎮長" attend labelFunc048F_0380:
	message("「那個人是個笨手笨腳的白痴。這座島被毀滅都是他的錯。我給了他魔法配方中應該使用的精確藥材比例，而他向煉金術士 Caine 轉述了它。從火勢的大小來看，我敢肯定他把曼德拉草根的用量報錯了十倍。該死愚蠢的傢伙！」~~她皺起眉頭，你可以看出這是一個她想避免談論的話題。");
	say();
	var0003 = true;
	UI_remove_answer("鎮長");
	if (!(!var0005)) goto labelFunc048F_0380;
	UI_add_answer("Caine");
labelFunc048F_0380:
	case "Caine" attend labelFunc048F_0397:
	message("「現在住在這裡的人叫他『受折磨者』。那是因為他處於永恆的痛苦之中，被灼熱的火焰舔舐著他的肉體所引起的。~~這痛苦是想像出來的，但對他來說，這就像你或我一樣真實……或者，至少像『你』一樣真實！」");
	say();
	var0005 = true;
	UI_remove_answer("Caine");
labelFunc048F_0397:
	case "魔法技藝" attend labelFunc048F_03AA:
	message("她的眼睛調皮地閃爍著。「如果我向你揭露了它們，它們就不再是秘密了，不是嗎？」");
	say();
	UI_remove_answer("魔法技藝");
labelFunc048F_03AA:
	case "犧牲" attend labelFunc048F_03D0:
	if (!(!gflags[0x01A0])) goto labelFunc048F_03C4;
	message("她一開始微笑著，然後變得嚴肅起來。「我已經將我的靈魂與超越這個凡人領域的力量聯繫在一起。如果我進入靈魂之井，這整個島嶼和很大一部分大陸都將在魔法釋放中被摧毀。你想讓 Skara Brae 鎮永遠消失嗎？」");
	say();
	gflags[0x01A0] = true;
	goto labelFunc048F_03C9;
labelFunc048F_03C4:
	message("「你很清楚我做不到。如果你想看到大規模的毀滅，你只能自己去造成它。」以她這把年紀來說，她轉身得非常快。*");
	say();
	abort;
labelFunc048F_03C9:
	UI_remove_answer("犧牲");
labelFunc048F_03D0:
	case "告辭" attend labelFunc048F_03E3:
	message("「再見了，年輕的");
	message(var0001);
	message("。好好照顧自己，但如果發生了不幸，我希望你能回到這裡，讓我來治療你的病痛。」你離開時，她慈祥地微笑著。*");
	say();
	abort;
labelFunc048F_03E3:
	goto labelFunc048F_01B6;
labelFunc048F_03E6:
	endconv;
labelFunc048F_03E7:
	if (!(event == 0x0000)) goto labelFunc048F_03F0;
	abort;
labelFunc048F_03F0:
	return;
}


