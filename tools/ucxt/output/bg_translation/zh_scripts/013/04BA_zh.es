#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04BA object#(0x4BA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04BA_023D;
	UI_show_npc_face(0xFF46, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = false;
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!(var0000 == 0x0007)) goto labelFunc04BA_0058;
	var0002 = Func08FC(0xFF46, 0xFF47);
	if (!var0002) goto labelFunc04BA_0053;
	message("「現在沒時間說話。會議結束後再談。」*");
	say();
	goto labelFunc04BA_0057;
labelFunc04BA_0053:
	message("「現在沒時間說話。趕著去友誼會會議。」*");
	say();
labelFunc04BA_0057:
	abort;
labelFunc04BA_0058:
	if (!(!gflags[0x024B])) goto labelFunc04BA_006A;
	message("這位石像鬼臉上帶著滿足的笑容，與你握手打招呼。");
	say();
	gflags[0x024B] = true;
	goto labelFunc04BA_006E;
labelFunc04BA_006A:
	message("「表達對你歸來的喜悅，」 Quaeven 說。");
	say();
labelFunc04BA_006E:
	converse attend labelFunc04BA_0238;
	case "姓名" attend labelFunc04BA_008B:
	message("「叫做 Quaeven ，人類。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Quaeven");
labelFunc04BA_008B:
	case "Quaeven" attend labelFunc04BA_009E:
	message("「意思是『發現問題者』。觀察敏銳。");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BA_009E:
	case "職業" attend labelFunc04BA_00B7:
	message("「是娛樂設施與學習中心的主管。負責掌管對石像鬼種族非常有價值的資訊。」");
	say();
	UI_add_answer(["娛樂設施", "學習中心"]);
labelFunc04BA_00B7:
	case "娛樂設施" attend labelFunc04BA_00CA:
	message("「是個讓石像鬼鍛鍊肌肉的好地方。有許多可用的資源，包含可以用來練習拳擊和戰鬥技巧的沙包。」");
	say();
	UI_remove_answer("娛樂設施");
labelFunc04BA_00CA:
	case "學習中心" attend labelFunc04BA_00DD:
	message("「和娛樂中心位於同一棟建築裡。提供極佳的氛圍來強化石像鬼的心智。有大量的書籍和教育資料。」");
	say();
	UI_remove_answer("學習中心");
labelFunc04BA_00DD:
	case "友誼會" attend labelFunc04BA_0120:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04BA_0100;
	message("「也是一位成員。」他舉起他的獎章。「我需要友誼會才能變得快樂。」");
	say();
	UI_add_answer("需要友誼會");
	goto labelFunc04BA_0119;
labelFunc04BA_0100:
	message("「想了解組織還是教義？」");
	say();
	UI_add_answer("組織");
	if (!(!var0001)) goto labelFunc04BA_0119;
	UI_add_answer("教義");
labelFunc04BA_0119:
	UI_remove_answer("友誼會");
labelFunc04BA_0120:
	case "組織" attend labelFunc04BA_013A:
	message("「是一群努力達到石像鬼最高潛能的精神追求者。與所有石像鬼和人類分享。」");
	say();
	UI_add_answer("分享");
	UI_remove_answer("組織");
labelFunc04BA_013A:
	case "分享" attend labelFunc04BA_0162:
	message("「分享教義與物質福祉。」");
	say();
	UI_add_answer("物質幸福");
	if (!(!var0001)) goto labelFunc04BA_015B;
	UI_add_answer("教義");
labelFunc04BA_015B:
	UI_remove_answer("分享");
labelFunc04BA_0162:
	case "物質幸福" attend labelFunc04BA_017C:
	message("「在財務和個人層面上支持 Paws 的救濟院。在不列顛尼亞舉辦宴會和節慶來提振士氣。是所有石像鬼和人類都非常需要的團體。我自己也需要友誼會！」");
	say();
	UI_add_answer("需要友誼會");
	UI_remove_answer("物質幸福");
labelFunc04BA_017C:
	case "教義" attend labelFunc04BA_019A:
	message("「透過內在力量的三位一體 (Triad of Inner Strength) 應用樂觀的思考秩序。」");
	say();
	UI_add_answer("三位一體 (Triad)");
	var0001 = true;
	UI_remove_answer("教義");
labelFunc04BA_019A:
	case "三位一體 (Triad)" attend labelFunc04BA_01AD:
	message("「就是努力團結、信任你的兄弟，以及善有善報這三個概念。」");
	say();
	UI_remove_answer("三位一體 (Triad)");
labelFunc04BA_01AD:
	case "需要友誼會" attend labelFunc04BA_01CD:
	message("「在加入友誼會之前過著悲慘的生活。曾被許多人傷害、忽視和虐待。~~現在在我的新生活中很快樂，並且希望很快就能聽見那個聲音。」他的眼睛因興奮而睜大。「希望能很快為另一個人的生活帶來幸福。」");
	say();
	UI_add_answer(["聲音", "另一個人"]);
	UI_remove_answer("需要友誼會");
labelFunc04BA_01CD:
	case "聲音" attend labelFunc04BA_01E0:
	message("「是一個能幫助我做選擇的好聲音，還能幫助我在海盜巢穴 (Buccaneer's Den)贏錢。」");
	say();
	UI_remove_answer("聲音");
labelFunc04BA_01E0:
	case "另一個人" attend labelFunc04BA_0204:
	message("他興奮地繼續說。~~「正在處理我的第一個轉化者。知道我將帶來喜悅和幸福。感到滿足與快樂。」");
	say();
	gflags[0x023E] = true;
	UI_add_answer(["職業", "轉變"]);
	UI_remove_answer("另一個人");
labelFunc04BA_0204:
	case "職業" attend labelFunc04BA_0217:
	message("「還需要再稍微說服一下，」他低著頭，「但幾乎準備好要加入了！」");
	say();
	UI_remove_answer("職業");
labelFunc04BA_0217:
	case "轉變" attend labelFunc04BA_022A:
	message("「是物資商人 Betra 。有信心他很快就會加入。」");
	say();
	UI_remove_answer("轉變");
labelFunc04BA_022A:
	case "告辭" attend labelFunc04BA_0235:
	goto labelFunc04BA_0238;
labelFunc04BA_0235:
	goto labelFunc04BA_006E;
labelFunc04BA_0238:
	endconv;
	message("「希望你健康快樂。」*");
	say();
labelFunc04BA_023D:
	if (!(event == 0x0000)) goto labelFunc04BA_024B;
	Func092F(0xFF46);
labelFunc04BA_024B:
	return;
}


