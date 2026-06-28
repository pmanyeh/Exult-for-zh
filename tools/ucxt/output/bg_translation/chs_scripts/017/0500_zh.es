#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0500 object#(0x500) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc0500_0009;
	abort;
labelFunc0500_0009:
	var0000 = UI_get_party_list();
	var0001 = UI_get_schedule_type(UI_get_npc_object(item));
	UI_show_npc_face(0xFF00, 0x0000);
	if (!(!(var0001 == 0x0003))) goto labelFunc0500_0039;
	message("鬼火没有回应。*");
	say();
	abort;
	goto labelFunc0500_009C;
labelFunc0500_0039:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0002 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0002, 0xFE99);
	if (!var0002) goto labelFunc0500_006B;
	UI_add_answer("笔记本");
labelFunc0500_006B:
	if (!gflags[0x0100]) goto labelFunc0500_0078;
	UI_add_answer("时间领主");
labelFunc0500_0078:
	if (!(!gflags[0x0150])) goto labelFunc0500_0098;
	message("一团光球向汝逼近。~~「『汝』并非『吾等』所知的名为『Trellek』的存在。『汝』以森灵族的方式呼唤。原本，『Xorinia』正期待着那名为『Trellek』的存在到来。");
	say();
	message("「但，此事无关紧要。依据『吾』所掌握的信息，此刻现身于『吾』面前的，即为被称为『圣者』的存在。」");
	say();
	message("这只鬼火随之剧烈闪烁了一两秒。~~「『Xorinia』期盼能与眼前的『人类』存在，进行信息交换。」");
	say();
	gflags[0x0150] = true;
	Func0911(0x01F4);
	goto labelFunc0500_009C;
labelFunc0500_0098:
	message("「又一次，某个三维世界的局部投影，向『Xorinite』维度发起了信号。」");
	say();
labelFunc0500_009C:
	converse attend labelFunc0500_022C;
	case "姓名" attend labelFunc0500_00B9:
	message("「最高几率表明，来自『Xorinite』维度的投射，会被那些被称为『人类』的存在冠以『鬼火』之名。此外，在 Xorinite 维度的其他投射之中，『吾』亦被称为『Xorinia』。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("鬼火");
labelFunc0500_00B9:
	case "鬼火" attend labelFunc0500_00CC:
	message("「自从『Xorinite』维度被其自身的投射物所发现以来，人类存在便激活了这个标签，用以命名来自该维度的化现。另一个常见的别名则是『沼泽鬼火』。~~「上述的信息样本为免费提供。通常情况下，获取信息是需要支付费用的。」");
	say();
	UI_remove_answer("鬼火");
labelFunc0500_00CC:
	case "信息" attend labelFunc0500_00EF:
	message("「『Undrian  议会』正设法搜集关于一名被称为『Alagner』之存在的相关信息。而『汝』正掌握着此项信息。与此同时，『吾』亦掌握着『汝』目前正苦苦寻觅之『某个』特定存在的情报。因此，Undrian 议会在此提议一项对等交易。」");
	say();
	UI_remove_answer("信息");
	UI_add_answer(["Undrian 议会", "Alagner", "交易"]);
labelFunc0500_00EF:
	case "Undrian 议会" attend labelFunc0500_0102:
	message("「该议会，即代表了『汝等』的语言中所定义的…『官方』。」");
	say();
	UI_remove_answer("Undrian 议会");
labelFunc0500_0102:
	case "职业" attend labelFunc0500_0115:
	message("「『Xorinia』是穿梭于不同位面，与维度之间的信息信道。同时，『Xorinia』亦负责将所有对其群体成长，不可或缺的信息，进行编目存盘。『汝』手中正掌握着对『吾』而言，可能具备价值的信息。与此同时，『吾』亦掌握着『汝』所渴求的情报。」");
	say();
	UI_add_answer("信息");
labelFunc0500_0115:
	case "Alagner" attend labelFunc0500_0128:
	message("「Undrian 议会掌握了这项信息：在『汝等』的维度中，存在着一个被冠以『不列颠尼亚最睿智之人』称号的人类个体。该个体名为『Alagner』，定居于『汝等』那处名为『New Magincia』的聚落。Alagner 手中握有一件被该个体称为『笔记本』的对象——而这本『笔记本』，即是一项信息的集合体。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0500_0128:
	case "交易" attend labelFunc0500_015F:
	message("「『吾』期盼能『吸收』Alagner 那本『笔记本』中所蕴含的信息。若『汝』将该『笔记本』带至此处，Undrian 议会便可释放对『汝』而言，具备实用价值的情报。『汝』，是否同意此项交易？」");
	say();
	gflags[0x0133] = true;
	var0003 = Func090A();
	if (!var0003) goto labelFunc0500_014B;
	message("「『Xorinia』认可了『汝』的实用价值。『吾』将驻留于此。人类存在通常会将『吾』的这项状态，定义为『等待』。」");
	say();
	goto labelFunc0500_0158;
labelFunc0500_014B:
	message("「『Xorinia』察觉到了『汝』的敌意。若『汝』日后对此项决定有所反思，并决意更改，『吾』仍将驻留于此。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	abort;
labelFunc0500_0158:
	UI_remove_answer("交易");
labelFunc0500_015F:
	case "时间领主" attend labelFunc0500_0187:
	if (!(!gflags[0x0133])) goto labelFunc0500_017C;
	message("「那名被称为『时间领主（Time Lord）』的存在，正请求与『汝』进行面见。但在『吾』能向『汝』透露更多关于此事的进一步信息之前，『吾』必须在此提议一项交易。」");
	say();
	UI_add_answer("信息");
	goto labelFunc0500_0180;
labelFunc0500_017C:
	message("「那名被称为『时间领主』的存在，是一个来自『时空维度』的生命体。自那群被称为『人类』的物种所定义的『数个世纪』前以来，Xorinite 维度便一直与『时间领主』保持着通信对接。」");
	say();
labelFunc0500_0180:
	UI_remove_answer("时间领主");
labelFunc0500_0187:
	case "笔记本" attend labelFunc0500_01B1:
	message("「人类个体得到了『Xorinia』的欢迎。『汝』已将对象『笔记本』带至此处。『吾』现在便开始吸收其中所蕴含的信息。」~~这只鬼火随之剧烈闪烁了数秒。那本笔记本仍留在『汝』的背包之中。~~「『吾』已完成对该信息的吸收。『汝』现在可将对象『笔记本』归还予那名为『Alagner』的存在。~~「而现在，开始进行信息的交换，并向汝传达一则消息。」");
	say();
	gflags[0x0157] = true;
	Func0911(0x02BC);
	UI_remove_answer("笔记本");
	UI_add_answer(["交换", "消息"]);
labelFunc0500_01B1:
	case "消息" attend labelFunc0500_01CF:
	message("「『Xorinia』必须向『汝』传达一则消息。那名为『时间领主』的存在，正请求与『汝』进行面见。『时间领主』目前正被困于那被称为『灵性神殿（Shrine of Spirituality）』的位面之中。若欲抵达『彼』所在之处，『汝』须在正位于『汝』之『西北方』的特定位置，激活『汝』手中被称为『月之宝珠』的对象。」");
	say();
	gflags[0x0134] = true;
	UI_remove_answer("消息");
	UI_add_answer("时间领主");
labelFunc0500_01CF:
	case "交换" attend labelFunc0500_0207:
	message("「现在，开始提供『汝』所寻觅的情报。这处被称为『不列颠尼亚』的维度，目前正遭受一个名为『守护者』之存在的侵袭。~~「『守护者』居于另一个维度之中，『Xorinia』有时亦会与该存在进行信息交易。~~『汝』，是否期盼了解更多关于『守护者』的情报？」");
	say();
	var0004 = Func090A();
	if (!0x0614) goto labelFunc0500_01FC;
	message("「『Xorinia』已消化了关于『守护者』的信息，并可陈述以下事实：~~「『守护者』具备了人类存在定义为『虚荣』、『贪婪』、『极度自恋』以及『恶毒』的特质。该存在以『力量』与『主宰』为养分。侵略其他世界，能为『彼』带来人类所定义的『愉悦』。此时，『彼』的注意力，已全面聚焦于这处被称为『不列颠尼亚』的维度。~~「『守护者』目前正试图借由一项人类存在称之为『月之门』的对象切入这处维度。此座『月之门』并非蓝色或红色——据『Xorinia』所知，此二色，方为该对象之标准规格。该『守护者』目前正在建造一座呈现『黑色』的月之门。」");
	say();
	UI_remove_answer("交换");
	UI_add_answer("黑月之门");
	goto labelFunc0500_0200;
labelFunc0500_01FC:
	message("「『Xorinia』向来对免费信息表示欢迎。交易，已完成。」*");
	say();
labelFunc0500_0200:
	UI_remove_answer("交换");
labelFunc0500_0207:
	case "黑月之门" attend labelFunc0500_021E:
	message("「当下一次发生『天体连接』的现象之时，『黑月之门』便将具备完整的运作功能。~~「尽管『Xorinia』通常并无意图去影响其他投射物的个体行为，但『Xorinia』在此对『汝』发出警告：若让『守护者』进入这处维度，这处被称为『不列颠尼亚』的维度将迎来终结。该『守护者』在『彼』自身的维度中已是力量强大；一旦降临至『汝等』的维度，『彼』将无可阻挡。~~「Undrian 议会由衷期盼，此项信息对汝有所助益。交易，已完成。」*");
	say();
	gflags[0x0127] = true;
	UI_remove_answer("黑月之门");
labelFunc0500_021E:
	case "告辞" attend labelFunc0500_0229:
	goto labelFunc0500_022C;
labelFunc0500_0229:
	goto labelFunc0500_009C;
labelFunc0500_022C:
	endconv;
	message("「『Xorinia』永远欢迎信息的交换。祝『汝』旅途顺遂。」*");
	say();
	UI_set_schedule_type(item, 0x0014);
	return;
}


