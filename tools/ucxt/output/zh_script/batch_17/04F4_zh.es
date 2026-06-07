#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern void Func085B 0x85B ();

void Func04F4 object#(0x4F4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04F4_01A5;
	UI_show_npc_face(0xFF0C, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF04);
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02C8])) goto labelFunc04F4_004C;
	message("這名戰士舉止充滿自信。");
	say();
	gflags[0x02C8] = true;
	goto labelFunc04F4_0056;
labelFunc04F4_004C:
	message("「你好，");
	message(var0002);
	message("，」Cairbre 說。");
	say();
labelFunc04F4_0056:
	converse attend labelFunc04F4_019A;
	case "姓名" attend labelFunc04F4_0072:
	message("「你可以叫我 Cairbre，");
	message(var0002);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc04F4_0072:
	case "職業" attend labelFunc04F4_0092:
	message("「我是一名傭兵。但目前，我正在努力幫助我的朋友恢復理智。」");
	say();
	UI_remove_answer("職業");
	UI_add_answer(["朋友", "理智"]);
labelFunc04F4_0092:
	case "朋友" attend labelFunc04F4_00B9:
	message("「我不打算讓 Cosmo 獨自來這裡冒險。所以，我主動提出陪他，Kallibrus 也是。」");
	say();
	if (!var0001) goto labelFunc04F4_00AB;
	message("他指著石像鬼。");
	say();
	goto labelFunc04F4_00B2;
labelFunc04F4_00AB:
	UI_add_answer("Kallibrus");
labelFunc04F4_00B2:
	UI_remove_answer("朋友");
labelFunc04F4_00B9:
	case "Kallibrus" attend labelFunc04F4_00CC:
	message("「他是我的戰友，也是 Cosmo 的朋友。我還沒遇過比他更值得信賴的同伴，他徹底打破了所有關於石像鬼的謠言。」");
	say();
	UI_remove_answer("Kallibrus");
labelFunc04F4_00CC:
	case "理智" attend labelFunc04F4_0119:
	message("「說來話長。Cosmo 正在尋找據說棲息在這個洞穴裡的獨角獸。」他看著你的眼睛聳了聳肩。~~「他是個傻瓜。」");
	say();
	if (!var0000) goto labelFunc04F4_0101;
	message("*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("「我聽到了，Cairbre！」*");
	say();
	UI_remove_npc_face(0xFF03);
	UI_show_npc_face(0xFF0C, 0x0000);
labelFunc04F4_0101:
	gflags[0x02E0] = true;
	UI_remove_answer("理智");
	UI_add_answer(["獨角獸", "傻瓜"]);
labelFunc04F4_0119:
	case "獨角獸" attend labelFunc04F4_012C:
	message("「獨角獸傳統上是證明年輕少女純潔的一種方式。然而，較少人知道的是，牠也能揭示一個年輕男子的，呃，缺乏，嗯，狂野的過去。」");
	say();
	UI_remove_answer("獨角獸");
labelFunc04F4_012C:
	case "傻瓜" attend labelFunc04F4_014C:
	message("「Ophelia 不愛他！她只是派他去執行這個任務好擺脫他。我懷疑她是否指望他能找到獨角獸，更別說回到她身邊了。」");
	say();
	UI_remove_answer("傻瓜");
	UI_add_answer(["Ophelia", "擺脫"]);
labelFunc04F4_014C:
	case "Ophelia" attend labelFunc04F4_015F:
	message("「他在 Jhelom 遇見她。她當時在 Bunk and Stool 工作。顯然那就是他所說的『一見鍾情』。」");
	say();
	UI_remove_answer("Ophelia");
labelFunc04F4_015F:
	case "擺脫" attend labelFunc04F4_0179:
	message("「她要求的本質相當諷刺，因為我認為獨角獸早就會避開她了。我想他不是她喜歡的類型，而且如果他真的了解她，她也不會是他喜歡的類型。但是，唉，正如俗話所說，愛情是盲目的。」");
	say();
	UI_add_answer("俗話");
	UI_remove_answer("擺脫");
labelFunc04F4_0179:
	case "俗話" attend labelFunc04F4_018C:
	message("「我不知道『俗話』是誰說的，但大家都是這麼說的，不是嗎？」");
	say();
	UI_remove_answer("俗話");
labelFunc04F4_018C:
	case "告辭" attend labelFunc04F4_0197:
	goto labelFunc04F4_019A;
labelFunc04F4_0197:
	goto labelFunc04F4_0056;
labelFunc04F4_019A:
	endconv;
	message("「下次見，");
	message(var0002);
	message("。」*");
	say();
labelFunc04F4_01A5:
	if (!(event == 0x0000)) goto labelFunc04F4_01B0;
	Func085B();
labelFunc04F4_01B0:
	return;
}


