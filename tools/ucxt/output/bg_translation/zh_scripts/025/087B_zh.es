#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func087B 0x87B ()
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

	message("隨著 Elynor 站在聚集的友誼會 (The Fellowship) 成員面前，儀式開始了。「我在友誼會的弟兄們，我在此場合向你們致意，並感謝你們的出席。在這個城鎮發生的事件正威脅著要使我們分裂。我不需要提醒你們，『內在力量的三位一體(Triad of Inner Strength)』的第一個價值觀是我們必須『致力合一』(Strive For Unity)。現在正是所有那些憎恨和恐懼我們的人可能正在密謀反對我們的時候。」");
	say();
	message("「有些人害怕覺知，因為那會照亮他們自身的侷限。有些人鄙視更好的改變，因為他們花了一輩子的時間在教導自己去愛他們周遭的平庸。這些人將我們的友誼會視為一種威脅。」");
	say();
	message("「還有一些人對我們友誼會的價值感到非常不確定。那些聽過反對我們的人的言論，但卻親眼看見友誼會所做的實質善舉，以及它每天為成員的生活帶來的改變的人。那些猶豫不決的人仍然可能被帶入我們的大家庭。我們必須『信賴未來的弟兄』(Trust Our Brothers-yet-to-be)。但最重要的是，我們必須阻止我們的敵人散播對我們的偏見。為了做到這一點，我們必須證明他們的信念是不真實的。」");
	say();
	message("「我們必須證明自己配得上我們希望同胞們寄託在我們身上的信任。一旦我們充分展現了這種價值，我們獲得信任的獎賞只是時間問題。這就像黑夜跟隨著白天一樣不可避免。正如我們的敵人總有一天會得到他們自己咎由自取、無可避免的報應一樣。」");
	say();
	message("「現在我想聽聽今晚聚集在這裡的成員們的說法。與我們分享友誼會是如何幫助你的吧！」");
	say();
	var0000 = Func08F7(0xFFAE);
	if (!var0000) goto labelFunc087B_0038;
	UI_show_npc_face(0xFFAE, 0x0000);
	message("「友誼會提升了我經營生意的能力，」Gregor 說。*");
	say();
	UI_remove_npc_face(0xFFAE);
labelFunc087B_0038:
	var0001 = Func08F7(0xFFA6);
	if (!var0001) goto labelFunc087B_006A;
	UI_show_npc_face(0xFFA6, 0x0000);
	message("「友誼會教會了我如何毫不懷疑地面對我自身成就偉大的潛力，」Owen 說。*");
	say();
	UI_show_npc_face(0xFFAF, 0x0000);
	message("「感謝你的分享，弟兄！」*");
	say();
	UI_remove_npc_face(0xFFA6);
labelFunc087B_006A:
	var0002 = Func08F7(0xFFA5);
	if (!var0002) goto labelFunc087B_008E;
	UI_show_npc_face(0xFFA5, 0x0000);
	message("你注意到 Burnside 顯然已經打瞌睡了。在被旁邊的人推了一下之後，他猛然睜開眼睛。「嗯……剛才的問題是什麼來著……？」他不好意思地問。*");
	say();
	UI_remove_npc_face(0xFFA5);
labelFunc087B_008E:
	var0003 = Func08F7(0xFFA3);
	if (!var0003) goto labelFunc087B_00B2;
	UI_show_npc_face(0xFFA3, 0x0000);
	message("「友誼會幫助我擁有更多勇氣去應對生活中意想不到的恐懼，」William 說。*");
	say();
	UI_remove_npc_face(0xFFA3);
labelFunc087B_00B2:
	var0004 = Func08F7(0xFF9F);
	if (!var0004) goto labelFunc087B_00D6;
	UI_show_npc_face(0xFF9F, 0x0000);
	message("「友誼會幫助我擁有了身為礦場主管所必須的堅定手腕，」Mikos 說。*");
	say();
	UI_remove_npc_face(0xFF9F);
labelFunc087B_00D6:
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc087B_00FA;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這個友誼會的一切都讓我毛骨悚然！」Spark 說。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc087B_00FA:
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc087B_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「Elynor 顯然是在竭盡全力讓他們覺得自己正受到迫害，」Iolo 說。*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc087B_011E:
	var0007 = Func08F7(0xFFFD);
	if (!var0007) goto labelFunc087B_0142;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「這些友誼會成員似乎只專注於他們自己的個人利益，對其他事漠不關心，」Shamino 說。*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc087B_0142:
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc087B_0166;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「為什麼這些人會對友誼會如此著迷？我真是不明白。」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc087B_0166:
	UI_show_npc_face(0xFFAF, 0x0000);
	message("就這樣，Elynor 再次成為會議的焦點。「現在讓我們開始今晚的冥想吧。」在幾分鐘的沉默之後，你開始意識到這場冥想會持續相當長的一段時間，而現在可能是悄悄離開的好時機。*");
	say();
	abort;
	return;
}


