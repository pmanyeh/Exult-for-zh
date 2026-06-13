#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049C object#(0x49C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc049C_02BF;
	UI_show_npc_face(0xFF64, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = false;
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!(var0002 == 0x0007)) goto labelFunc049C_0065;
	var0004 = Func08FC(0xFF64, 0xFF06);
	if (!var0004) goto labelFunc049C_0060;
	message("她瞪著眼，將一根手指放在唇邊，示意你安靜。*");
	say();
	abort;
	goto labelFunc049C_0065;
labelFunc049C_0060:
	message("「我現在不能說話，我必須趕去參加友誼會的會議。」*");
	say();
	abort;
labelFunc049C_0065:
	if (!(!gflags[0x01FD])) goto labelFunc049C_0077;
	message("你看到一位表情非常嚴肅的女人。");
	say();
	gflags[0x01FD] = true;
	goto labelFunc049C_0081;
labelFunc049C_0077:
	message("「我能幫你什麼忙，");
	message(var0000);
	message("？」");
	say();
labelFunc049C_0081:
	if (!gflags[0x020E]) goto labelFunc049C_008E;
	UI_add_answer("利口酒");
labelFunc049C_008E:
	converse attend labelFunc049C_02A1;
	case "姓名" attend labelFunc049C_00A4:
	message("她懷疑地看著你。「我的名字是 Balayna。」");
	say();
	UI_remove_answer("姓名");
labelFunc049C_00A4:
	case "職業" attend labelFunc049C_00BD:
	message("「我是友誼會 Moonglow 分會的書記。」");
	say();
	UI_add_answer(["書記", "Moonglow"]);
labelFunc049C_00BD:
	case "書記" attend labelFunc049C_00D7:
	message("「我的工作是在會議期間做記錄，並管理這個分會的決策。」");
	say();
	UI_remove_answer("書記");
	UI_add_answer("會議");
labelFunc049C_00D7:
	case "利口酒" attend labelFunc049C_011B:
	var0005 = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var0005) goto labelFunc049C_0110;
	message("「這是什麼？」她問著，從你手中接過小瓶。她打開並聞了聞。「品質非常好。我納悶為什麼他……」她抓住自己的喉嚨喘息著。你注意到一縷輕煙從現在已從她手中掉落的小瓶頂端升起。她窒息著倒在地上，死了。*");
	say();
	gflags[0x020D] = true;
	UI_kill_npc(UI_get_npc_object(0xFF64));
	abort;
	goto labelFunc049C_011B;
labelFunc049C_0110:
	message("「恐怕我必須先看看你指的是什麼，才能回答你的問題。」");
	say();
	UI_remove_answer("利口酒");
labelFunc049C_011B:
	case "會議" attend labelFunc049C_014D:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_0134;
	message("她懷疑地盯著你。");
	say();
labelFunc049C_0134:
	message("「我們在晚上 9 點開會——這是慣例時間。在 Rankin 講道之後，我們都會討論友誼會讓我們生活中變得多麼美好的方方面面。」");
	say();
	if (!(!var0003)) goto labelFunc049C_0146;
	UI_add_answer("Rankin");
labelFunc049C_0146:
	UI_remove_answer("會議");
labelFunc049C_014D:
	case "Moonglow" attend labelFunc049C_016D:
	message("「這裡似乎是個……建立分會的合適地點。Moonglow 這裡有許多好市民。」");
	say();
	UI_add_answer(["好", "市民"]);
	UI_remove_answer("Moonglow");
labelFunc049C_016D:
	case "好" attend labelFunc049C_018D:
	message("她對這句話似乎感到驚訝。「好吧，我相信許多人都擁有堅強的意志和性格。他們正是友誼會所需要的那種人，能走出去並在整個不列顛尼亞傳播指導與繁榮。」");
	say();
	UI_remove_answer("好");
	UI_add_answer(["指導", "繁榮"]);
labelFunc049C_018D:
	case "指導" attend labelFunc049C_01A0:
	message("「許多人缺乏達到最高潛力所需的紀律。」");
	say();
	UI_remove_answer("指導");
labelFunc049C_01A0:
	case "繁榮" attend labelFunc049C_01B3:
	message("「友誼會的宗旨是豐富所有居住在這片美麗土地上的人們的生活。」");
	say();
	UI_remove_answer("繁榮");
labelFunc049C_01B3:
	case "市民" attend labelFunc049C_01C6:
	message("「我忙於職責，在這裡認識的人很少。酒保 Phearcy 是社區的傑出成員，農夫 Tolemac 也是。Tolemac 的朋友 Morz 雖然害羞，但口碑很好。還有，Morz 有個兄弟。」她抬起頭若有所思。「或者他是 Tolemac 的兄弟？~~「我不確定他是誰的兄弟，但我確實知道我對他了解不多，」她哼了一聲。");
	say();
	UI_remove_answer("市民");
labelFunc049C_01C6:
	case "友誼會" attend labelFunc049C_0202:
	var0007 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_01F0;
	message("「我們的分會在 Moonglow 這裡已經開設大約五年了。Rankin 一直都在這裡，但我幾個月前才開始在這個分會工作。」");
	say();
	if (!(!var0003)) goto labelFunc049C_01ED;
	UI_add_answer("Rankin");
labelFunc049C_01ED:
	goto labelFunc049C_01FB;
labelFunc049C_01F0:
	message("「友誼會是一個追求精神層面的社會，致力於達到人類潛力的最高境界。我們透過內在力量的三位一體 (Triad of Inner Strength) 來支持新現實主義。此外，我們管理和組織許多節慶，還經營著一個為有需要的人提供庇護的場所。~「Rankin 是 Moonglow 分會的負責人。他可以回答你的問題。」");
	say();
	UI_add_answer("三位一體 (Triad)");
labelFunc049C_01FB:
	UI_remove_answer("友誼會");
labelFunc049C_0202:
	case "三位一體 (Triad)" attend labelFunc049C_021C:
	message("「三位一體 (Triad) 基本上是三個原則，當它們被統一起來運用時，能使個人更好地達到生活中的創造力、滿足感和成功。」");
	say();
	UI_add_answer("原則");
	UI_remove_answer("三位一體 (Triad)");
labelFunc049C_021C:
	case "原則" attend labelFunc049C_023F:
	message("「三個原則是：致力合一 (Strive For Unity)、信賴你的兄弟 (Trust Thy Brother)——與姐妹——以及價值先行於報償 (Worthiness Precedes Reward)。」");
	say();
	UI_add_answer(["致力合一", "信賴", "價值"]);
	UI_remove_answer("原則");
labelFunc049C_023F:
	case "致力合一" attend labelFunc049C_0252:
	message("「本質上，這意味著人與人之間的合作不僅本身是達到人類潛力的理想手段，它還能促進整個過程。」");
	say();
	UI_remove_answer("致力合一");
labelFunc049C_0252:
	case "信賴" attend labelFunc049C_0265:
	message("「這個信條說明了，身為人我們都是一樣的，對彼此的仇恨或恐懼都沒有建設性。事實上，那是具有破壞性的。」");
	say();
	UI_remove_answer("信賴");
labelFunc049C_0265:
	case "價值" attend labelFunc049C_0278:
	message("「這基本上意味著個人應該努力讓自己配得上他們生活中想要的事物。這常被誤引為『你得到你應得的』，但這往往帶有負面意涵。」");
	say();
	UI_remove_answer("價值");
labelFunc049C_0278:
	case "Rankin" attend labelFunc049C_0293:
	message("「他是 Moonglow 這裡的分會負責人。」~她謹慎地環顧四周。「你在城市裡旅行，對吧？最後或許還會去另一座城市——Britain？」她又看了一眼，顯然在檢查什麼。最後，她傾身向前，小聲地說。~「我不確定 Rankin 是否配得上他的職位。就在 Rankin 說服新成員 Tolemac 加入之前，我聽到他和 Tolemac 的談話。他承認自己對友誼會抱有懷疑。他告訴 Tolemac 他認為，或許，友誼會只是在鼓勵其成員成為綿羊，而那些真正『掌權』的人都是騙子，只是為了錢。你對這件事有什麼看法？」她靠向椅背。");
	say();
	gflags[0x01D8] = true;
	var0003 = true;
	UI_remove_answer("Rankin");
labelFunc049C_0293:
	case "告辭" attend labelFunc049C_029E:
	goto labelFunc049C_02A1;
labelFunc049C_029E:
	goto labelFunc049C_008E;
labelFunc049C_02A1:
	endconv;
	if (!gflags[0x01D8]) goto labelFunc049C_02B5;
	message("「再見，");
	message(var0000);
	message("。記住我告訴你的話。」*");
	say();
	goto labelFunc049C_02BF;
labelFunc049C_02B5:
	message("「再見，");
	message(var0000);
	message("。」*");
	say();
labelFunc049C_02BF:
	if (!(event == 0x0000)) goto labelFunc049C_02CD;
	Func092E(0xFF64);
labelFunc049C_02CD:
	return;
}


