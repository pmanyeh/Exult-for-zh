#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func044B object#(0x44B) ()
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

	if (!(event == 0x0000)) goto labelFunc044B_0009;
	abort;
labelFunc044B_0009:
	if (!(event == 0x0001)) goto labelFunc044B_0030;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0001, (byte)0x01, (byte)0x55, 0x044B, (byte)0x21]);
	return;
labelFunc044B_0030:
	UI_show_npc_face(0xFFB5, 0x0000);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = UI_is_pc_female();
	var0005 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00E0]) goto labelFunc044B_0083;
	if (!(!gflags[0x00E2])) goto labelFunc044B_0083;
	UI_add_answer(["Ariana", "Julius", "Nadia", "Yew"]);
labelFunc044B_0083:
	if (!gflags[0x0129]) goto labelFunc044B_0090;
	UI_add_answer("你父親的消息");
labelFunc044B_0090:
	if (!(!var0004)) goto labelFunc044B_00A4;
	if (!gflags[0x00E6]) goto labelFunc044B_00A4;
	UI_add_answer("親吻");
labelFunc044B_00A4:
	if (!(!gflags[0x00E8])) goto labelFunc044B_00C7;
	if (!var0004) goto labelFunc044B_00B8;
	message("這是一位年輕迷人的女性，但神情似乎有些哀傷。");
	say();
	goto labelFunc044B_00C0;
labelFunc044B_00B8:
	message("看到如此美麗的年輕女子顯得如此悲傷，你的心立刻揪了一下。");
	say();
	message("當你介紹自己時，她抬起了頭。");
	say();
labelFunc044B_00C0:
	gflags[0x00E8] = true;
	goto labelFunc044B_00D1;
labelFunc044B_00C7:
	message("「再次問候，");
	message(var0005);
	message("！」Nastassia 說。");
	say();
labelFunc044B_00D1:
	converse attend labelFunc044B_0332;
	case "姓名" attend labelFunc044B_00E7:
	message("「我是 Nastassia。」");
	say();
	UI_remove_answer("姓名");
labelFunc044B_00E7:
	case "職業" attend labelFunc044B_00FA:
	message("她想了一會兒。「我想我的工作是保持慈悲神殿的整潔，雖然這不是個正式的職位。」");
	say();
	UI_add_answer("神殿");
labelFunc044B_00FA:
	case "神殿" attend labelFunc044B_011A:
	message("「慈悲神殿和不列顛尼亞的所有神殿一樣，已經存在好幾代了。我的高祖母 Ariana 在遺囑中要求她的家族世世代代照料這座神殿。」");
	say();
	UI_add_answer(["所有神殿", "照料"]);
	UI_remove_answer("神殿");
labelFunc044B_011A:
	case "所有神殿" attend labelFunc044B_012D:
	message("「許多神殿已經荒廢，或者被雜草淹沒到幾乎消失的地步。這很可悲。」");
	say();
	UI_remove_answer("所有神殿");
labelFunc044B_012D:
	case "照料" attend labelFunc044B_014D:
	message("「恐怕你會發現其他神殿的狀況很糟。我把這座保持得……很好。我這麼做不僅是為了延續我高祖母的傳統，還有……其他原因。」");
	say();
	UI_remove_answer("照料");
	UI_add_answer(["傳統", "原因"]);
labelFunc044B_014D:
	case "傳統" attend labelFunc044B_0160:
	message("「有些人可能會覺得一個年輕人如此堅持舊習很奇怪。但這給了我極大的安慰。這讓我覺得在這個世界上有我所歸屬的東西。」");
	say();
	UI_remove_answer("傳統");
labelFunc044B_0160:
	case "原因" attend labelFunc044B_0181:
	if (!(!gflags[0x00E0])) goto labelFunc044B_0176;
	message("「我……我寧願不說。請別問。」");
	say();
	goto labelFunc044B_017A;
labelFunc044B_0176:
	message("「你知道原因的。」");
	say();
labelFunc044B_017A:
	UI_remove_answer("原因");
labelFunc044B_0181:
	case "Ariana" attend labelFunc044B_01B6:
	if (!var0004) goto labelFunc044B_0198;
	var0006 = "她";
	goto labelFunc044B_019E;
labelFunc044B_0198:
	var0006 = "他";
labelFunc044B_019E:
	message("「是的，她是我的高祖母。我聽說她曾見過聖者，而且」");
	message(var0006);
	message("對她的一生產生了深遠的影響。~~「說來奇怪，但你長得很像我看過的聖者畫像。」");
	say();
	UI_remove_answer("Ariana");
	UI_add_answer("我是聖者");
labelFunc044B_01B6:
	case "Julius" attend labelFunc044B_01CD:
	message("「你知道我父親？我想鎮民們又在談論了。我希望我認識他。我內心深處渴望得到他的消息。任何消息都好。」");
	say();
	UI_remove_answer("Julius");
	gflags[0x00E1] = true;
labelFunc044B_01CD:
	case "Nadia" attend labelFunc044B_01E0:
	message("「我母親。她死得很慘，而且是死在自己手裡。這才是我向這座神殿致敬的真正原因。我希望有一天能讓她安息。」");
	say();
	UI_remove_answer("Nadia");
labelFunc044B_01E0:
	case "Yew" attend labelFunc044B_0259:
	message("「我父親死在那裡的巨大森林裡。被野獸或什麼東西殺死了。你也許要去 Yew 嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc044B_024E;
	message("「喔，");
	message(var0005);
	message(", 我真的希望你能試著找出關於我父親的事。他是怎麼死的？發生了什麼事？拜託！你願意尋找真相並回來告訴我嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc044B_0231;
	message("「祝福你！我會在這裡等你。」");
	say();
	if (!var0004) goto labelFunc044B_021F;
	message("「我知道我們現在有著強烈的親切感。我們將會像姐妹一樣。」");
	say();
	goto labelFunc044B_022A;
labelFunc044B_021F:
	message("出乎意料地，Nastassia 把你的頭拉向她，親吻了你的嘴唇。");
	say();
	UI_add_answer("親吻");
labelFunc044B_022A:
	gflags[0x00E2] = true;
	goto labelFunc044B_024B;
labelFunc044B_0231:
	message("Nastassia 轉過身去，看起來好像快哭了。「好吧。請讓我一個人靜一靜。」*");
	say();
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	abort;
labelFunc044B_024B:
	goto labelFunc044B_0252;
labelFunc044B_024E:
	message("「不嗎？好吧，如果未來有機會請讓我知道。也許你可以幫我。」");
	say();
labelFunc044B_0252:
	UI_remove_answer("Yew");
labelFunc044B_0259:
	case "親吻" attend labelFunc044B_02A4:
	if (!(gflags[0x00E6] && var0003)) goto labelFunc044B_026F;
	message("你親吻了 Nastassia，她發出了輕聲呻吟。");
	say();
labelFunc044B_026F:
	if (!(gflags[0x00E6] && (!var0003))) goto labelFunc044B_0282;
	message("你們衝進彼此的懷抱，雙唇交會。你都忘了她的雙唇貼著你的感覺有多好。");
	say();
	var0003 = true;
labelFunc044B_0282:
	if (!(!(gflags[0x00E6] && (!var0001)))) goto labelFunc044B_02A4;
	message("你再次親吻 Nastassia 迷人的嘴唇。她回應了。~~「沒有男人能做得像你這麼好。」~~她睜大眼睛看著你。~~「再來一次，大人。」");
	say();
	var0001 = true;
	UI_remove_answer("親吻");
	UI_add_answer("再次親吻");
labelFunc044B_02A4:
	case "再次親吻" attend labelFunc044B_02C6:
	if (!(!var0002)) goto labelFunc044B_02C2;
	message("你再次親吻了 Nastassia。這次你們的身體緊緊貼在一起，你知道這絕不是與某個酒館女孩短暫的逢場作戲。");
	say();
	var0002 = true;
	gflags[0x00E6] = true;
	goto labelFunc044B_02C6;
labelFunc044B_02C2:
	message("你親吻了 Nastassia，她發出了輕聲呻吟。");
	say();
labelFunc044B_02C6:
	case "我是聖者" attend labelFunc044B_02D9:
	message("Nastassia 仔細端詳你的五官。~~「不知怎麼地，我就知道。傳說你會回來的。」");
	say();
	UI_remove_answer("我是聖者");
labelFunc044B_02D9:
	case "你父親的消息" attend labelFunc044B_030F:
	message("你把從 Trellek 那裡得知的消息告訴 Nastassia。她閉上雙眼，似乎卸下了肩上的重擔。~~這名女子向天空舉起雙臂，大喊道：「妳聽到了嗎，母親？妳的丈夫只是想養活他的家人！而他死得……像個英雄！他不是流浪漢！妳聽到了嗎？妳受盡折磨的靈魂現在可以安息了。拜託，母親，原諒他。這樣一來，我現在也能原諒妳了。」~~她擦去臉上的淚水，看著你。");
	say();
	if (!var0004) goto labelFunc044B_02F8;
	message("「我感謝你，");
	message(var0005);
	message("。你讓我非常快樂。我會永遠記住你。」");
	say();
	goto labelFunc044B_0302;
labelFunc044B_02F8:
	message("她輕輕吻了你一下。「謝謝你，");
	message(var0005);
	message("。你讓我非常快樂。如果你厭倦了冒險，我會在這裡等你。歡迎你來和我一起生活，分享你的人生。現在去吧。完成你必須完成的工作。但請把我留在你的心中。」");
	say();
labelFunc044B_0302:
	Func0911(0x0032);
	UI_remove_answer("你父親的消息");
labelFunc044B_030F:
	case "告辭" attend labelFunc044B_032F:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x001A, 0x0000]);
	goto labelFunc044B_0332;
labelFunc044B_032F:
	goto labelFunc044B_00D1;
labelFunc044B_0332:
	endconv;
	if (!(!var0004)) goto labelFunc044B_0354;
	if (!var0002) goto labelFunc044B_0347;
	message("「再見。」她再次吻了你，然後轉過身去，以免看到你離開。*");
	say();
	goto labelFunc044B_0351;
labelFunc044B_0347:
	message("「再見，");
	message(var0005);
	message("。」*");
	say();
labelFunc044B_0351:
	goto labelFunc044B_035E;
labelFunc044B_0354:
	message("「再見，");
	message(var0005);
	message("。」*");
	say();
labelFunc044B_035E:
	return;
}


