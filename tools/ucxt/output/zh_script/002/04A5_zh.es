#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func04A5 object#(0x4A5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04A5_0250;
	UI_show_npc_face(0xFF5B, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0207]) goto labelFunc04A5_0043;
	message("「我想你問了太多問題。」");
	say();
	var0002 = true;
	goto labelFunc04A5_004B;
labelFunc04A5_0043:
	message("「你看到一隻用後腿站立的狐狸，直直地盯著你。」");
	say();
	gflags[0x0207] = true;
labelFunc04A5_004B:
	converse attend labelFunc04A5_024B;
	case "姓名" attend labelFunc04A5_0079:
	message("「我的名字是 Frank，誠實的虔誠追隨者。」他微微鞠躬。");
	say();
	UI_remove_answer("姓名");
	if (!(!var0002)) goto labelFunc04A5_0079;
	message("「那你又是誰？」");
	say();
	UI_add_answer(["不告訴你", var0000]);
labelFunc04A5_0079:
	case var0000 attend labelFunc04A5_0092:
	message("「你告訴我是件好事。與人交往時，應該始終保持誠實。順帶一提，你的聲音太沙啞了。」");
	say();
	UI_remove_answer(["不告訴你", var0000]);
labelFunc04A5_0092:
	case "不告訴你" attend labelFunc04A5_00AB:
	message("「我很遺憾看到你不夠信任我而透露你的姓名。」他聳聳肩。「順帶一提，你的聲音太沙啞了。」");
	say();
	UI_remove_answer(["不告訴你", var0000]);
labelFunc04A5_00AB:
	case "職業" attend labelFunc04A5_00C4:
	message("「我，」他說，「正在進行一項任務。尋找誠實的任務。」他嗅了嗅空氣，然後轉向你。~~「順帶一提，如果你多洗幾次澡，你可能會交到更多朋友。」");
	say();
	UI_add_answer(["洗澡", "朋友"]);
labelFunc04A5_00C4:
	case "洗澡" attend labelFunc04A5_00D7:
	message("「是的，就像『洗個澡』一樣。我必須通知你，你真的很臭！」");
	say();
	UI_remove_answer("洗澡");
labelFunc04A5_00D7:
	case "朋友" attend labelFunc04A5_0123:
	message("「說到你的朋友，我聽說你的同伴 Dupre 是個醉鬼。」");
	say();
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc04A5_0111;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「嘿，我不認為——」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0111:
	message("「是的，根據我聽到的說法，當 Dupre 面對一杯，呃，任何東西時，他都毫無意志力可言。~~事實上，總的來說，你在挑選同伴的品味相當差。」");
	say();
	UI_add_answer("同伴");
	UI_remove_answer("朋友");
labelFunc04A5_0123:
	case "同伴" attend labelFunc04A5_0175:
	message("「我很高興你問了，");
	message(var0001);
	message("。你的朋友 Iolo 賣的弓收費太高了。或許你可以找他聊聊。」");
	say();
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04A5_0163;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「太多？你是什麼意思，太——」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0163:
	message("「他的弓和弩的品質根本不值他收的那些金幣。」~~他退後了一步。~~「天啊！你的口氣能臭死一頭牛。你應該考慮好好照顧你的牙齒，否則你的同伴會離開你。」");
	say();
	UI_add_answer("牙齒");
	UI_remove_answer("同伴");
labelFunc04A5_0175:
	case "牙齒" attend labelFunc04A5_01D2:
	message("「這就是你口臭的原因。自從你的同伴 Shamino 因恐懼從戰場上逃跑以來，我還沒見過這麼黃的東西。」");
	say();
	var0005 = Func08F7(0xFFFD);
	if (!var0005) goto labelFunc04A5_01C0;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你一定是瘋了！」Shamino 轉向你。「這個無賴需要被教訓一頓。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF5B, 0x0000);
	message("「而你的朋友 Shamino，");
	message(var0000);
	message("，脾氣相當好戰。」");
	say();
	UI_add_answer("好戰");
labelFunc04A5_01C0:
	message("「而且，」他停頓了一下，非常靠近地盯著你的臉，「我從沒注意到你的鼻子有多大。你還能找到足夠的空氣呼吸真是個奇蹟。」");
	say();
	UI_add_answer("鼻子");
	UI_remove_answer("牙齒");
labelFunc04A5_01D2:
	case "好戰" attend labelFunc04A5_01EC:
	message("「是的，好戰、好鬥、憤怒。如果你不知道這一點，我相信你需要提高你的詞彙量。你太缺乏教育了。」");
	say();
	UI_remove_answer("好戰");
	UI_add_answer("缺乏教育");
labelFunc04A5_01EC:
	case "缺乏教育" attend labelFunc04A5_022A:
	message("「相信我，");
	message(var0001);
	message("，你太無知了，無法跟我爭論。」");
	say();
	if (!var0003) goto labelFunc04A5_0223;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「喔，這太過分了！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5B, 0x0000);
labelFunc04A5_0223:
	UI_remove_answer("缺乏教育");
labelFunc04A5_022A:
	case "鼻子" attend labelFunc04A5_023D:
	message("「真的很大，而且一點也不迷人。」");
	say();
	UI_remove_answer("鼻子");
labelFunc04A5_023D:
	case "告辭" attend labelFunc04A5_0248:
	goto labelFunc04A5_024B;
labelFunc04A5_0248:
	goto labelFunc04A5_004B;
labelFunc04A5_024B:
	endconv;
	message("「你的舉止就像一頭豬。這麼唐突地打斷對話是不禮貌的。」*");
	say();
labelFunc04A5_0250:
	if (!(event == 0x0000)) goto labelFunc04A5_0259;
	abort;
labelFunc04A5_0259:
	return;
}


