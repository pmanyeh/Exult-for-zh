#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E3 object#(0x4E3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04E3_020D;
	UI_show_npc_face(0xFF1D, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_get_npc_object(0xFF1D);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x02A7]) goto labelFunc04E3_004C;
	if (!gflags[0x02A5]) goto labelFunc04E3_004C;
	UI_add_answer("他想念你");
labelFunc04E3_004C:
	if (!(!gflags[0x02B0])) goto labelFunc04E3_005E;
	message("你看到一位老海盜，他曾經可能看起來極其危險。");
	say();
	gflags[0x02B0] = true;
	goto labelFunc04E3_0062;
labelFunc04E3_005E:
	message("「什麼事？」 Mole 問。");
	say();
labelFunc04E3_0062:
	converse attend labelFunc04E3_0208;
	case "姓名" attend labelFunc04E3_007F:
	message("「我的名字是 Mole ，正是！別問我是怎麼得到這個名字的。說來話長。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("故事");
labelFunc04E3_007F:
	case "職業" attend labelFunc04E3_0098:
	message("「許多年來我在海上遊蕩，掠奪、強姦和製造恐懼。現在我已經年過五十，我想在海盜巢穴 (Buccaneer's Den)這裡相對平靜安寧地度過餘生。」");
	say();
	UI_add_answer(["平靜安寧", "海盜巢穴"]);
labelFunc04E3_0098:
	case "故事" attend labelFunc04E3_00EE:
	message("「你真的想聽嗎？很長喔。」");
	say();
	if (!Func090A()) goto labelFunc04E3_00DF;
	message("「好吧。我出生在一個洞穴裡。所以我母親給我取名叫 Mole (鼴鼠) 。」*");
	say();
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc04E3_00DC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我以為你說這是個很長的故事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF1D, 0x0000);
labelFunc04E3_00DC:
	goto labelFunc04E3_00E3;
labelFunc04E3_00DF:
	message("「很好。那我就說我是出生在一個洞穴裡，所以我母親給我取名叫 Mole (鼴鼠) 怎麼樣？」");
	say();
labelFunc04E3_00E3:
	message("Mole 聳聳肩。「我想我長話短說好了。」");
	say();
	UI_remove_answer("故事");
labelFunc04E3_00EE:
	case "平靜安寧" attend labelFunc04E3_0101:
	message("「這是美好的生活。我對當海盜感到厭倦了。我對鹽水、生肉、甲板上的污水、鸚鵡糞便，以及聽到的每隔一個字就是『哈！』感到厭倦了。」");
	say();
	UI_remove_answer("平靜安寧");
labelFunc04E3_0101:
	case "海盜巢穴" attend labelFunc04E3_011B:
	message("「我把時間花在賭坊 (House of Games) 或墮落處女 (Fallen Virgin) 。我喜歡骰子在氈布上彈跳的聲音。我喜歡溫暖的麥酒滑下喉嚨的味道！而且……我還有友誼會。」");
	say();
	UI_remove_answer("海盜巢穴");
	UI_add_answer("友誼會");
labelFunc04E3_011B:
	case "友誼會" attend labelFunc04E3_0149:
	message("「這個組織給了我新的生命。我以為我在當活躍海盜時有過夥伴，但他們無法與我在友誼會裡的兄弟們相比。");
	say();
	if (!var0001) goto labelFunc04E3_0131;
	message("「嘿，我看到你也是會員！你一定品格高尚！");
	say();
labelFunc04E3_0131:
	message("「我以前的夥伴，像我的朋友 Blacktooth ，已經半途而廢了。」");
	say();
	UI_remove_answer("友誼會");
	UI_add_answer(["Blacktooth", "夥伴"]);
labelFunc04E3_0149:
	case "Blacktooth" attend labelFunc04E3_015C:
	message("「Blacktooth 住在這裡的島上。我們曾經是同一條鍊子上的環節，懂我的意思嗎？但自從我加入友誼會後，他就把我當空氣！他表現得好像我得了瘟疫什麼的。我不明白。讓我想把什麼東西切成肉末！」");
	say();
	UI_remove_answer("Blacktooth");
labelFunc04E3_015C:
	case "夥伴" attend labelFunc04E3_0176:
	message("「Blacktooth 就像我的兄弟。不像我在友誼會裡的兄弟，而是一個『真正』的兄弟，懂我的意思嗎？我們『什麼』都一起做。我們會分享戰利品！我們會分享女人！我們無所不作！」");
	say();
	UI_remove_answer("夥伴");
	UI_add_answer("兄弟");
labelFunc04E3_0176:
	case "兄弟" attend labelFunc04E3_0196:
	message("「嗯，他現在不是兄弟了！他恨我！如果他不想和我扯上關係，那就這樣吧！」但 Mole 很快補充道：「他沒有意識到我為他做了什麼。我讓他能活下去！當他得壞血病時是誰照顧他的？我！當他被屠夫 Silverbeard 砍成碎片時是誰幫他包紮的？我！」");
	say();
	UI_remove_answer("兄弟");
	UI_add_answer(["過去的生活", "Silverbeard"]);
labelFunc04E3_0196:
	case "Silverbeard" attend labelFunc04E3_01A9:
	message("「哦，他是個脾氣暴躁的老海盜。如果他識相的話，他可能已經死了！」");
	say();
	UI_remove_answer("Silverbeard");
labelFunc04E3_01A9:
	case "過去的生活" attend labelFunc04E3_01DC:
	message("「是的，那是與現在不同的生活……」 Mole 眼神短暫地失焦，回想著過去的記憶。最後他說：「我可能對友誼會的事情太過執著了。也許我逼得他太緊了。我很抱歉。如果他願意再給我一次機會，我可能會離開友誼會。他們並不像我說的那麼美好。他們比我以前一起航海的海盜還要狡猾！」 Mole 皺起眉頭。「你讓我的心情變得很糟。」");
	say();
	UI_remove_answer("過去的生活");
	gflags[0x02A7] = true;
	if (!gflags[0x02A5]) goto labelFunc04E3_01D7;
	UI_add_answer("他想念你");
	UI_remove_answer("過去的生活");
	goto labelFunc04E3_01DC;
labelFunc04E3_01D7:
	message("*");
	say();
	abort;
labelFunc04E3_01DC:
	case "他想念你" attend labelFunc04E3_01FA:
	message("你告訴 Mole 關於 Blacktooth 說的話。這個老海盜身上發生了變化，就像你剛給了他一束花一樣。~~「你一定在開玩笑！ Blackie 想我？我以為他恨透我了！我得去散散步，也許會碰上那條老狗！謝謝你，陌生人，告訴我這個消息。」~~說完， Mole 轉身離開了你，邁著輕快的步伐。*");
	say();
	UI_remove_answer("他想念你");
	UI_set_schedule_type(var0002, 0x000C);
	abort;
labelFunc04E3_01FA:
	case "告辭" attend labelFunc04E3_0205:
	goto labelFunc04E3_0208;
labelFunc04E3_0205:
	goto labelFunc04E3_0062;
labelFunc04E3_0208:
	endconv;
	message("「再見，陌生人。」*");
	say();
labelFunc04E3_020D:
	if (!(event == 0x0000)) goto labelFunc04E3_028D;
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF1D));
	if (!(var0004 == 0x000B)) goto labelFunc04E3_0287;
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc04E3_024A;
	var0006 = "@哈！@";
labelFunc04E3_024A:
	if (!(var0005 == 0x0002)) goto labelFunc04E3_025A;
	var0006 = "@快停下！@";
labelFunc04E3_025A:
	if (!(var0005 == 0x0003)) goto labelFunc04E3_026A;
	var0006 = "@該死！@";
labelFunc04E3_026A:
	if (!(var0005 == 0x0004)) goto labelFunc04E3_027A;
	var0006 = "@該死的鸚鵡屎……@";
labelFunc04E3_027A:
	UI_item_say(0xFF1D, var0006);
	goto labelFunc04E3_028D;
labelFunc04E3_0287:
	Func092E(0xFF1D);
labelFunc04E3_028D:
	return;
}


