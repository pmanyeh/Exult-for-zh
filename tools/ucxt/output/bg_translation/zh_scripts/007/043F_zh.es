#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043F object#(0x43F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc043F_019A;
	UI_show_npc_face(0xFFC1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc043F_005F;
	var0003 = Func08FC(0xFFC1, 0xFFE6);
	if (!var0003) goto labelFunc043F_004A;
	message("Millie 無視你想引起她注意的舉動，並回去全神貫注地觀看友誼會儀式。*");
	say();
	abort;
	goto labelFunc043F_005F;
labelFunc043F_004A:
	if (!gflags[0x00DA]) goto labelFunc043F_005A;
	message("Millie 看起來有些不安。「Batlin 以前從未錯過任何一次集會。他想怎樣？難道他想要『我』來主持這場集會嗎？」");
	say();
	goto labelFunc043F_005F;
	goto labelFunc043F_005F;
labelFunc043F_005A:
	message("「抱歉，我現在不能和你說話！我參加友誼會集會要遲到了！」*");
	say();
	abort;
labelFunc043F_005F:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0141]) goto labelFunc043F_007C;
	UI_add_answer("Thad");
labelFunc043F_007C:
	if (!(!gflags[0x00C0])) goto labelFunc043F_008E;
	message("你看見一位長相可愛的女人，當她注意到你在看她時，她綻放出了燦爛的笑容。");
	say();
	gflags[0x00C0] = true;
	goto labelFunc043F_0092;
labelFunc043F_008E:
	message("「很高興能再次與你交談，」 Millie 說。");
	say();
labelFunc043F_0092:
	converse attend labelFunc043F_0195;
	case "姓名" attend labelFunc043F_00A8:
	message("「我的名字是 Millie，」她靦腆地咯咯笑著。");
	say();
	UI_remove_answer("姓名");
labelFunc043F_00A8:
	case "職業" attend labelFunc043F_00C1:
	message("「我想我沒有工作，但這真的很糟嗎？我是友誼會的成員，我整天都在跟別人談論他們。」");
	say();
	UI_add_answer(["友誼會", "談談"]);
labelFunc043F_00C1:
	case "友誼會" attend labelFunc043F_010F:
	if (!var0001) goto labelFunc043F_00D6;
	message("「看來我們有同樣的工作！」她為自己開的玩笑笑了起來。「你也把所有的時間都花在跟別人談論友誼會嗎？如果你真的是做這行的，那你得給自己找另外一個角落去！」 Millie 不悅地皺起眉頭。");
	say();
	goto labelFunc043F_010F;
labelFunc043F_00D6:
	message("「你知道友誼會是什麼嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc043F_00FE;
	message("「喔，我想你其實並不知道！」");
	say();
	Func0919();
	UI_remove_answer("友誼會");
	UI_add_answer("理念");
	goto labelFunc043F_010F;
labelFunc043F_00FE:
	Func0919();
	UI_remove_answer("友誼會");
	UI_add_answer("理念");
labelFunc043F_010F:
	case "理念" attend labelFunc043F_0125:
	Func091A();
	message("「如果你願意的話，你可以參加今晚在友誼會堂的集會。九點準時開始。只要告訴他們你是我的客人就行了。希望我能在那裡見到你。」 Millie 咯咯笑著，害羞地別過頭去。");
	say();
	UI_remove_answer("理念");
labelFunc043F_0125:
	case "談談" attend labelFunc043F_013F:
	message("「我把所有的時間都花在試圖招募，呃……傳播友誼會的福音上。這比擁有一份工作好多了！我是在冥想營學會怎麼做這些的。」");
	say();
	UI_remove_answer("談談");
	UI_add_answer("冥想營");
labelFunc043F_013F:
	case "冥想營" attend labelFunc043F_015D:
	message("「它位於南 Britannia 靠近巨蛇據點（Serpent's Hold）的一座島上。大多數新加入的友誼會成員都會花些時間在那裡學習這個團體的教義。在營隊裡還可以學習如何聆聽『那聲音』。」");
	say();
	UI_add_answer("那聲音");
	UI_remove_answer("冥想營");
	gflags[0x008B] = true;
labelFunc043F_015D:
	case "那聲音" attend labelFunc043F_0174:
	message("「友誼會成員有一種會對他們說話的內在聲音。我還沒聽見過，但我正在努力。為了達到這點，我可能需要再去冥想營待個幾天。不過，Batlin 告訴我不要灰心。他說當我證明了自己的價值時，我就會聽見它了。」");
	say();
	UI_remove_answer("那聲音");
	gflags[0x008A] = true;
labelFunc043F_0174:
	case "Thad" attend labelFunc043F_0187:
	message("Millie 翻了個白眼。「你見過我哥哥了？真可憐！要我說，他真的該被送進瘋人院！他認為是友誼會綁架了我，並用魔法迷惑我追隨他們。聽著，我是出於自由意志加入的，連想都沒想，而且這純粹是件好玩的事！沒有人強迫我！去他的 Thad ！媽媽總是說他是家裡最衝動的人！」");
	say();
	UI_remove_answer("Thad");
labelFunc043F_0187:
	case "告辭" attend labelFunc043F_0192:
	goto labelFunc043F_0195;
labelFunc043F_0192:
	goto labelFunc043F_0092;
labelFunc043F_0195:
	endconv;
	message("「我們晚點見！也許在今晚的友誼會集會上見！」*");
	say();
labelFunc043F_019A:
	if (!(event == 0x0000)) goto labelFunc043F_0221;
	var0002 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFC1));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x000C)) goto labelFunc043F_021B;
	if (!(var0006 == 0x0001)) goto labelFunc043F_01DE;
	var0007 = "Fellowship meeting tonight!@";
labelFunc043F_01DE:
	if (!(var0006 == 0x0002)) goto labelFunc043F_01EE;
	var0007 = "@追求團結！@";
labelFunc043F_01EE:
	if (!(var0006 == 0x0003)) goto labelFunc043F_01FE;
	var0007 = "@信任你的兄弟！@";
labelFunc043F_01FE:
	if (!(var0006 == 0x0004)) goto labelFunc043F_020E;
	var0007 = "@有價值才有回報！@";
labelFunc043F_020E:
	UI_item_say(0xFFC1, var0007);
	goto labelFunc043F_0221;
labelFunc043F_021B:
	Func092E(0xFFC1);
labelFunc043F_0221:
	return;
}


