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

	message("Elynor 站在聚集的友誼會成員面前，儀式開始了。「我在友誼會的弟兄們，我在此場合向你們致意，並感謝你們的出席。鎮上發生的事件威脅著要將我們拆散。我不需要提醒你們，內在力量三位一體的首要價值觀指出我們必須『團結一致』。現在正是那些仇恨和恐懼我們的人可能密謀反對我們的時候。」");
	say();
	message("「有些人害怕覺醒，因為那會暴露他們自身的局限。有些人鄙視朝好的方向改變，因為他們一生都在教導自己去愛他們周遭的平庸。這些人將我們的友誼會視為威脅。」");
	say();
	message("「還有一些人對我們友誼會的優點感到非常不確定。那些聽到反對我們之人的言論，但又親眼目睹友誼會所做的實質善舉，以及它每天為成員生活帶來的改變的人。那些猶豫不決的人仍然可能被帶入我們的大家庭。我們必須『信任未來的兄弟』。但最重要的是，我們必須阻止我們的敵人散播對我們的偏見。為此，我們必須證明他們的信念是不真實的。」");
	say();
	message("「我們必須證明自己配得上我們希望同胞對我們的信任。一旦我們充分展現了這種價值，獲得信任的獎賞只是時間問題。這就像黑夜跟隨白天一樣不可避免。正如我們的敵人總有一天也會得到他們自己應得的、不可避免的報應。」");
	say();
	message("「現在我想聽聽今晚聚集在這裡的成員的意見。與我們分享友誼會是如何幫助你的！」");
	say();
	var0000 = Func08F7(0xFFAE);
	if (!var0000) goto labelFunc087B_0038;
	UI_show_npc_face(0xFFAE, 0x0000);
	message("「友誼會提升了我經營事業的能力，」Gregor 說。*");
	say();
	UI_remove_npc_face(0xFFAE);
labelFunc087B_0038:
	var0001 = Func08F7(0xFFA6);
	if (!var0001) goto labelFunc087B_006A;
	UI_show_npc_face(0xFFA6, 0x0000);
	message("「友誼會教會了我如何毫不懷疑地面對我自身成就偉大的潛力，」Owen 說。*");
	say();
	UI_show_npc_face(0xFFAF, 0x0000);
	message("「感謝你的分享，兄弟！」*");
	say();
	UI_remove_npc_face(0xFFA6);
labelFunc087B_006A:
	var0002 = Func08F7(0xFFA5);
	if (!var0002) goto labelFunc087B_008E;
	UI_show_npc_face(0xFFA5, 0x0000);
	message("你注意到 Burnside 顯然打瞌睡了。被旁邊的人推了一下後，他猛然睜開眼睛。「嗯……剛才的問題是什麼……？」他難為情地問。*");
	say();
	UI_remove_npc_face(0xFFA5);
labelFunc087B_008E:
	var0003 = Func08F7(0xFFA3);
	if (!var0003) goto labelFunc087B_00B2;
	UI_show_npc_face(0xFFA3, 0x0000);
	message("「友誼會幫助我擁有更多的勇氣去應對生活中意想不到的恐懼，」William 說。*");
	say();
	UI_remove_npc_face(0xFFA3);
labelFunc087B_00B2:
	var0004 = Func08F7(0xFF9F);
	if (!var0004) goto labelFunc087B_00D6;
	UI_show_npc_face(0xFF9F, 0x0000);
	message("「友誼會幫助我擁有作為礦坑主管所必需的鐵腕，」Mikos 說。*");
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
	message("「Elynor 顯然在竭盡全力讓他們覺得自己受到了迫害，」Iolo 說。*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc087B_011E:
	var0007 = Func08F7(0xFFFD);
	if (!var0007) goto labelFunc087B_0142;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「這些友誼會成員似乎只關注他們個人的利益，很少關心其他事情，」Shamino 說。*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc087B_0142:
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc087B_0166;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「為什麼這些人對友誼會如此著迷？我真不明白。」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc087B_0166:
	UI_show_npc_face(0xFFAF, 0x0000);
	message("隨著 Elynor 再次成為會議的焦點。「現在讓我們開始今晚的冥想。」在幾分鐘的沉默之後，你開始意識到這種冥想將持續很長一段時間，現在或許是個不引人注意地離開的好時機。*");
	say();
	abort;
	return;
}


