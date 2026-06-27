#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B1 0x8B1 ();
extern void Func08B2 0x8B2 ();
extern void Func08AF 0x8AF ();
extern void Func08AD 0x8AD ();
extern void Func08B0 0x8B0 ();

void Func048D object#(0x48D) ()
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

	if (!(event == 0x0001)) goto labelFunc048D_033E;
	if (!(!gflags[0x01B5])) goto labelFunc048D_001E;
	UI_show_npc_face(0xFF73, 0x0000);
	message("你試圖與這不死生物說話，但它沒有任何反應。*");
	say();
	abort;
labelFunc048D_001E:
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF70);
	var0003 = false;
	if (!gflags[0x01A3]) goto labelFunc048D_004D;
	if (!(!gflags[0x01AB])) goto labelFunc048D_004A;
	Func08B1();
	goto labelFunc048D_004D;
labelFunc048D_004A:
	Func08B2();
labelFunc048D_004D:
	if (!gflags[0x0198]) goto labelFunc048D_0056;
	Func08AF();
labelFunc048D_0056:
	if (!gflags[0x01AA]) goto labelFunc048D_0062;
	Func08AD();
	goto labelFunc048D_006C;
labelFunc048D_0062:
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_006C:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF73);
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc048D_00A3;
	if (!(var0005 == 0x000E)) goto labelFunc048D_009F;
	Func08B0();
	goto labelFunc048D_00A3;
labelFunc048D_009F:
	var0003 = true;
labelFunc048D_00A3:
	if (!(!gflags[0x01C5])) goto labelFunc048D_0164;
	if (!var0003) goto labelFunc048D_00B4;
	message("巫妖幾乎在發光，力量明顯在它不死的血管中湧動。");
	say();
labelFunc048D_00B4:
	message("你走上前去面對這個看起來很邪惡的生物，他慢慢地轉向你。當他那強烈的目光鎖定你的身形時，你幾乎希望自己沒有這麼大膽。~~「");
	message(var0000);
	message("。」一個諷刺的表情出現在他不死的特徵上。「我能幫你什麼忙嗎？」你有一種明確的感覺，幫忙是你最不可能從巫妖那裡得到的東西。");
	say();
	var0006 = Func08F7(0xFFFD);
	var0007 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc048D_00FE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("Shamino 走到你身邊，低聲說道。~~「不要相信這傢伙，");
	message(var0001);
	message("。我想他只會帶來邪惡。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0129;
labelFunc048D_00FE:
	if (!var0007) goto labelFunc048D_0129;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 走到你身邊，低聲說道。~~「不要相信這傢伙，");
	message(var0001);
	message("。我想他只會帶來邪惡。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0129:
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc048D_015D;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「呃，");
	message(var0001);
	message("？我準備好要走了，」他對你說，畏縮地躲避著這個不死生物。*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_015D:
	gflags[0x01C5] = true;
	goto labelFunc048D_0168;
labelFunc048D_0164:
	message("巫妖露出一個近乎微笑的表情，並帶著諷刺的口吻說道。~~「啊，奇妙的聖者回來了。我做了什麼事值得這般榮幸？」『榮幸』這個詞在這個生物的舌尖上變了味。");
	say();
labelFunc048D_0168:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc048D_0178:
	converse attend labelFunc048D_033D;
	case "姓名" attend labelFunc048D_019B:
	message("巫妖乾燥的面容呈現出一種傲慢的神情。「你可以叫我 Lord Horance。這樣做是明智的，因為我總有一天會統治整個不列顛尼亞。~~「驚訝嗎，聖者？拜託。你當然不會認為不列顛王會阻礙我。我知道該怎麼對付他那種人。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["Lord Horance", "不列顛王"]);
labelFunc048D_019B:
	case "Lord Horance" attend labelFunc048D_01BB:
	message("「啊，很高興能從聖者那裡聽到這樣的敬意。或許你在我的新秩序中會有一席之地。」巫妖用一種介於惡意與幽默之間的表情看著你。");
	say();
	UI_remove_answer("Lord Horance");
	UI_add_answer(["敬意", "新秩序"]);
labelFunc048D_01BB:
	case "敬意" attend labelFunc048D_01CE:
	message("「怎麼，不然你會怎麼稱呼它？你肯定是真的被我『莊嚴的』存在給折服了。」");
	say();
	UI_remove_answer("敬意");
labelFunc048D_01CE:
	case "新秩序" attend labelFunc048D_01F8:
	message("一種狂熱的表情點亮了巫妖死寂的面龐。~~「是的，");
	message(var0000);
	message("。死者將會統治！我將成為他們的領袖，而你可以成為一個聖者……為我服務！」");
	say();
	UI_remove_answer("新秩序");
	UI_push_answers();
	UI_add_answer(["休想！", "很好！"]);
labelFunc048D_01F8:
	case "休想！" attend labelFunc048D_020E:
	message("「哎呀，");
	message(var0000);
	message("。我以為這是理所當然的。我很樂意幫助你進入死者的領域。」");
	say();
	UI_pop_answers();
labelFunc048D_020E:
	case "很好！" attend labelFunc048D_021E:
	message("「是的，我就知道你會看出我願景中的智慧。」他看著你，就像貓在玩弄老鼠一樣。");
	say();
	UI_pop_answers();
labelFunc048D_021E:
	case "不列顛王" attend labelFunc048D_023E:
	message("『邪惡』都不足以形容巫妖乾裂嘴唇上出現的冷笑。「我最近注意到，在不列顛尼亞地表發現的某種礦石，如果經過適當的鍛造，可以成為那備受推崇的不列顛王的剋星。~~「我了解這種礦石，並且以前曾將它用於其他用途。我將再次利用它來毀滅那個所謂的君王。」");
	say();
	UI_add_answer(["礦石", "其他用途"]);
	UI_remove_answer("不列顛王");
labelFunc048D_023E:
	case "其他用途" attend labelFunc048D_025F:
	if (!(!gflags[0x0003])) goto labelFunc048D_0254;
	message("他指著塔牆。「不然你以為我的塔是怎麼抵擋住以太對我魔法造成的破壞性影響的？」");
	say();
	goto labelFunc048D_0258;
labelFunc048D_0254:
	message("他指著塔牆。「它成了抵擋被干擾的以太所造成的破壞性影響的有效屏障。」");
	say();
labelFunc048D_0258:
	UI_remove_answer("其他用途");
labelFunc048D_025F:
	case "職業" attend labelFunc048D_0297:
	message("一陣刺耳的笑聲從他乾燥的喉嚨中逸出。「我是赫赫有名的死者之王，很快就會成為整個不列顛尼亞之王。你知道這裡有多少死人和生物嗎？我想你不知道。~~「歷代的死者都任我召喚和控制。敬愛祖先的墳墓將會噴吐出它們的內容物，組成一支軍隊。這將是我給生者的特別款待，我的不死怪物們。想像一條殺不死的骷髏龍。考慮一個永遠受我奴役的永生法師集團。~~「而我這項計畫最美妙的部分是，當生者在這些戰鬥中死去時——他們一定會死的——他們將會壯大不死大軍的行列。我將擁有至高無上的統治權——一個死者的世界！」這對他病態且扭曲的未來的一瞥，讓你不禁微微發抖。~~「而且我會有一位女王，美麗的 Rowena 。」");
	say();
	UI_add_answer("Rowena");
	if (!var0002) goto labelFunc048D_0297;
	UI_show_npc_face(0xFF70, 0x0000);
	message("「是的，我的大人。我一定是全大陸最幸福的女士。」她的目光從未離開過巫妖那張可怕的臉。");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0297:
	case "Rowena" attend labelFunc048D_02B7:
	if (!var0002) goto labelFunc048D_02AC;
	message("「她難道不是你見過最美麗的女士嗎？~~「她將在我的身邊擁有永恆的美麗，我們將共同統治。」");
	say();
	goto labelFunc048D_02B0;
labelFunc048D_02AC:
	message("「她是我見過最美麗的女士。她將在我的身邊擁有永恆的美麗，我們將共同統治。」在聽他說完他對未來的計畫後，你覺得這是一句非常不可靠的陳述。");
	say();
labelFunc048D_02B0:
	UI_remove_answer("Rowena");
labelFunc048D_02B7:
	case "礦石" attend labelFunc048D_02CA:
	message("「好了，好了，聖者，那樣就洩露機密了。那樣的話我就對你沒有秘密了，不是嗎？」");
	say();
	UI_remove_answer("礦石");
labelFunc048D_02CA:
	case "告辭" attend labelFunc048D_033A:
	message("「看著你離開真的很令人難過。」他帶著諷刺的微笑說道。*");
	say();
	var0009 = Func08F7(0xFFFC);
	var0007 = Func08F7(0xFFFF);
	if (!var0009) goto labelFunc048D_0310;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是啊，當然。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF73, 0x0000);
	goto labelFunc048D_0335;
labelFunc048D_0310:
	if (!var0007) goto labelFunc048D_0335;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「是啊，當然。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF73, 0x0000);
labelFunc048D_0335:
	message("「請隨意探索我簡陋的居所。不過，要小心。我的守衛們不太聰明，很可能會攻擊任何活著的東西。」他帶著骷髏般的笑容微笑著。*");
	say();
	abort;
labelFunc048D_033A:
	goto labelFunc048D_0178;
labelFunc048D_033D:
	endconv;
labelFunc048D_033E:
	return;
}


