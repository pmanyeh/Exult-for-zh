#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08AB 0x8AB ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0410 object#(0x410) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0410_02A5;
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc0410_003B;
	Func08AB();
labelFunc0410_003B:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!gflags[0x003F]) goto labelFunc0410_0065;
	UI_add_answer(["爭執", "測驗"]);
	var0002 = true;
labelFunc0410_0065:
	if (!gflags[0x0043]) goto labelFunc0410_0072;
	UI_add_answer("Hook");
labelFunc0410_0072:
	if (!gflags[0x003E]) goto labelFunc0410_0088;
	UI_add_answer(["金幣", "徽章", "卷軸"]);
labelFunc0410_0088:
	if (!gflags[0x0040]) goto labelFunc0410_0095;
	UI_add_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0410_0095:
	UI_show_npc_face(0xFFF0, 0x0000);
	if (!(!gflags[0x004F])) goto labelFunc0410_00B1;
	message("這個男人散發著友善和親切的氣息。「啊，聖者！我一眼就認出你了！消息在鎮上傳得很快。我已經聽說你在這裡了。」");
	say();
	gflags[0x004F] = true;
	goto labelFunc0410_00BB;
labelFunc0410_00B1:
	message("「再次你好，");
	message(var0000);
	message("～」 Klog 問道。「我能為你做什麼嗎？」");
	say();
labelFunc0410_00BB:
	converse attend labelFunc0410_029A;
	case "姓名" attend labelFunc0410_00D1:
	message("「我叫 Klog。」");
	say();
	UI_remove_answer("姓名");
labelFunc0410_00D1:
	case "職業" attend labelFunc0410_00EA:
	message("「我是 Trinsic 友誼會分會的領袖。我和我的妻子 Ellen 一起在這裡工作。」");
	say();
	UI_add_answer(["友誼會", "Ellen"]);
labelFunc0410_00EA:
	case "謀殺" attend labelFunc0410_0117:
	if (!var0003) goto labelFunc0410_00FF;
	message("方塊震動著。「 Hook 幹得非常出色，不是嗎？太可惜了我錯過了。為了顧及顏面和製造不在場證明，我必須待在家裡。」");
	say();
	goto labelFunc0410_0103;
labelFunc0410_00FF:
	message("「嗯...」 男人若有所思地說，「我整晚都在家，我的妻子 Ellen 可以證明這一點。但是，正如我們在友誼會中所說，『價值先行於報償』。Christopher 一定是做了什麼壞事。而可憐的石像鬼 Inamo！這真是個遺憾。」");
	say();
labelFunc0410_0103:
	UI_remove_answer("謀殺");
	UI_add_answer(["Christopher", "Inamo"]);
labelFunc0410_0117:
	case "友誼會" attend labelFunc0410_0142:
	if (!(!gflags[0x0006])) goto labelFunc0410_0137;
	message("「友誼會每天晚上九點在 Trinsic 的分會辦公室聚會。歡迎你來參加。」");
	say();
	Func0919();
	UI_add_answer("理念");
	goto labelFunc0410_013B;
labelFunc0410_0137:
	message("「哎呀，你現在應該對我們這個小家庭瞭若指掌了吧！」");
	say();
labelFunc0410_013B:
	UI_remove_answer("友誼會");
labelFunc0410_0142:
	case "Ellen" attend labelFunc0410_0155:
	message("「她是我的妻子，也是我們分會的簿記員。」");
	say();
	UI_remove_answer("Ellen");
labelFunc0410_0155:
	case "理念" attend labelFunc0410_0167:
	Func091A();
	UI_remove_answer("理念");
labelFunc0410_0167:
	case "Christopher" attend labelFunc0410_0188:
	message("「Christopher 曾有一段時間是友誼會的重要成員。不幸的是，我們上週發生了一點小爭執。」");
	say();
	UI_remove_answer("Christopher");
	if (!(!var0002)) goto labelFunc0410_0188;
	UI_add_answer("爭執");
labelFunc0410_0188:
	case "Inamo" attend labelFunc0410_019B:
	message("「我不認識那個石像鬼。聽起來他好像在錯誤的時間出現在錯誤的地點。這真是個遺憾。」");
	say();
	UI_remove_answer("Inamo");
labelFunc0410_019B:
	case "爭執" attend labelFunc0410_01B5:
	message("「上週 Christopher 表示他想離開友誼會！你能想像嗎？嗯，我們只是試圖與他交談並改變他的決定。這個人竟然毫無理由地用言語攻擊我和我的同伴！」");
	say();
	UI_remove_answer("爭執");
	UI_add_answer("同伴");
labelFunc0410_01B5:
	case "測驗" attend labelFunc0410_01C8:
	message("「不列顛城的巴特林很樂意為你進行我們的測驗。你一定要參加。誰知道呢？你可能會發現自己內心有什麼需要改進的地方。」");
	say();
	UI_remove_answer("測驗");
labelFunc0410_01C8:
	case "同伴" attend labelFunc0410_01DF:
	message("「他們已經去了不列顛城的友誼會總部。他們來這裡是為了運送友誼會的資金。他們的名字是 Elizabeth 和 Abraham。」");
	say();
	gflags[0x0041] = true;
	UI_remove_answer("同伴");
labelFunc0410_01DF:
	case "金幣" attend labelFunc0410_0206:
	if (!var0003) goto labelFunc0410_01FB;
	message("方塊震動著。「那是交付黑月之門 (Black Gate) 底座計畫的報酬。」");
	say();
	UI_add_answer("黑月之門 (Black Gate)");
	goto labelFunc0410_01FF;
labelFunc0410_01FB:
	message("「我不知道你在說什麼。」");
	say();
labelFunc0410_01FF:
	UI_remove_answer("金幣");
labelFunc0410_0206:
	case "黑月之門 (Black Gate)" attend labelFunc0410_0219:
	message("「我只知道它正建在聖者之島 (Isle of the Avatar) 上。」");
	say();
	UI_remove_answer("黑月之門 (Black Gate)");
labelFunc0410_0219:
	case "徽章" attend labelFunc0410_022C:
	message("「Christopher 表達了離開友誼會的意願。也許他把它收起來安全保管了。」");
	say();
	UI_remove_answer("徽章");
labelFunc0410_022C:
	case "卷軸" attend labelFunc0410_024C:
	if (!var0003) goto labelFunc0410_0241;
	message("方塊震動著。「 Christopher 在展現他的價值之前就得到了報酬。他背棄了交付底座計畫的承諾。這只是一個警告。」");
	say();
	goto labelFunc0410_0245;
labelFunc0410_0241:
	message("「我對此一無所知。」");
	say();
labelFunc0410_0245:
	UI_remove_answer("卷軸");
labelFunc0410_024C:
	case "皇冠寶石號 (Crown Jewel)" attend labelFunc0410_026C:
	if (!var0003) goto labelFunc0410_0261;
	message("方塊震動著。「那是 Hook 的船。」");
	say();
	goto labelFunc0410_0265;
labelFunc0410_0261:
	message("「我不知道那艘船。」");
	say();
labelFunc0410_0265:
	UI_remove_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0410_026C:
	case "Hook" attend labelFunc0410_028C:
	if (!var0003) goto labelFunc0410_0281;
	message("方塊震動著。「他就是被指派去殺死 Christopher 的人。我不知道他現在在哪裡。」");
	say();
	goto labelFunc0410_0285;
labelFunc0410_0281:
	message("「恐怕我不認識符合這個描述的人。」");
	say();
labelFunc0410_0285:
	UI_remove_answer("Hook");
labelFunc0410_028C:
	case "告辭" attend labelFunc0410_0297:
	goto labelFunc0410_029A;
labelFunc0410_0297:
	goto labelFunc0410_00BB;
labelFunc0410_029A:
	endconv;
	message("「如果還有什麼我可以幫忙的，");
	message(var0000);
	message("，請告訴我。」");
	say();
labelFunc0410_02A5:
	if (!(event == 0x0000)) goto labelFunc0410_02B3;
	Func092E(0xFFF0);
labelFunc0410_02B3:
	return;
}
