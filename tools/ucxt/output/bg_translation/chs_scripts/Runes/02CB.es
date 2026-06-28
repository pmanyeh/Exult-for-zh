#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void runic_first_click 0x95F ();

void Func02CB shape#(0x2CB) ()
{
	var var0000;
	var var0001;
	var var000A;
	var var_chinese = "";
	var is_runic = true;

	if (!(event != 0x0001)) goto labelFunc02CB_0009;
	return;
labelFunc02CB_0009:
	var0000 = Func0908();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0066)) goto labelFunc02CB_0034;
	var000A = ["IS", "SIGN ZERO"];

	var_chinese = "零号招牌";

	is_runic = false;

	goto labelFunc02CB_0D71;
	goto labelFunc02CB_0D71;
labelFunc02CB_0034:
	if (!(var0001 == 0x0000)) goto labelFunc02CB_0057;
	var000A = ["here|lies", "john|doe", "buried", "where", "he|died"];

	var_chinese = "长眠于此的无名氏葬于他死去的所在";

	goto labelFunc02CB_0D71;
labelFunc02CB_0057:
	if (!(var0001 == 0x0001)) goto labelFunc02CB_0077;
	var000A = ["|garth|", "sorry", "about", "thy|(umb"];

	var_chinese = "加斯，对你的拇指感到抱歉";

	goto labelFunc02CB_0D71;
labelFunc02CB_0077:
	if (!(var0001 == 0x0002)) goto labelFunc02CB_0097;
	var000A = ["LADY M:", "YOUTH IS", "HERS", "FOREVER"];

	var_chinese = "M女士：青春永驻";

	is_runic = false;

	goto labelFunc02CB_0D71;
labelFunc02CB_0097:
	if (!(var0001 == 0x0003)) goto labelFunc02CB_00BA;
	var000A = ["|julius|", "may|his", "spirit", "re,", "forever"];

	var_chinese = "朱利叶斯，愿他的灵魂永远安息";

	goto labelFunc02CB_0D71;
labelFunc02CB_00BA:
	if (!(var0001 == 0x0004)) goto labelFunc02CB_00DD;
	var000A = ["here", "lies", "argent", "died|a", "sargeant"];

	var_chinese = "长眠于此的阿金特死时是个中士";

	goto labelFunc02CB_0D71;
labelFunc02CB_00DD:
	if (!(var0001 == 0x0005)) goto labelFunc02CB_0100;
	var000A = ["|darek|", "his", "days", "were", "numbered"];

	var_chinese = "达雷克，来日无多";

	goto labelFunc02CB_0D71;
labelFunc02CB_0100:
	if (!(var0001 == 0x0006)) goto labelFunc02CB_0123;
	var000A = ["|malc|", "his", "words", "remain", "wi(|us"];

	var_chinese = "马尔克，他的话语与我们同在";

	goto labelFunc02CB_0D71;
labelFunc02CB_0123:
	if (!(var0001 == 0x0007)) goto labelFunc02CB_0146;
	var000A = ["|nina|", "may", "her", "spirit", "soar"];

	var_chinese = "妮娜，愿她的灵魂高飞";

	goto labelFunc02CB_0D71;
labelFunc02CB_0146:
	if (!(var0001 == 0x0008)) goto labelFunc02CB_0166;
	var000A = ["|bart|", "he|never", "finished", "(e|joke"];

	var_chinese = "巴特，他从未讲完那个笑话";

	goto labelFunc02CB_0D71;
labelFunc02CB_0166:
	if (!(var0001 == 0x0009)) goto labelFunc02CB_0186;
	var000A = ["|ann|", "a", "delicate", "flower"];

	var_chinese = "安，一朵娇弱的花";

	goto labelFunc02CB_0D71;
labelFunc02CB_0186:
	if (!(var0001 == 0x000A)) goto labelFunc02CB_01A9;
	var000A = ["|dallas|", "went", "down", "wi(|(e", "ship"];

	var_chinese = "达拉斯，与船同沉";

	goto labelFunc02CB_0D71;
labelFunc02CB_01A9:
	if (!(var0001 == 0x000B)) goto labelFunc02CB_01C9;
	var000A = ["|alan|", "looked", "great|in", "pink"];

	var_chinese = "艾伦，穿粉红色很好看";

	goto labelFunc02CB_0D71;
labelFunc02CB_01C9:
	if (!(var0001 == 0x000C)) goto labelFunc02CB_01EC;
	var000A = ["here", "lies", "ken", "killed|by", "a pen"];

	var_chinese = "长眠于此的肯，被一枝笔杀死";

	goto labelFunc02CB_0D71;
labelFunc02CB_01EC:
	if (!(var0001 == 0x000D)) goto labelFunc02CB_020C;
	var000A = ["|jeff|d|", "died|wi(", "a|pencil", "in|hand"];

	var_chinese = "杰夫·D，死时手中握着铅笔";

	goto labelFunc02CB_0D71;
labelFunc02CB_020C:
	if (!(var0001 == 0x000E)) goto labelFunc02CB_022C;
	var000A = ["|martin|", "(e|notes", "were|too", "sharp"];

	var_chinese = "马丁音符太过刺耳";

	goto labelFunc02CB_0D71;
labelFunc02CB_022C:
	if (!(var0001 == 0x000F)) goto labelFunc02CB_024C;
	var000A = ["|tony|b|", "a|credit", "to|his", "name"];

	var_chinese = "东尼·B，无愧于他的名声";

	goto labelFunc02CB_0D71;
labelFunc02CB_024C:
	if (!(var0001 == 0x0010)) goto labelFunc02CB_026C;
	var000A = ["|philip|", "spells", "ma,ered", "him"];

	var_chinese = "菲利浦，魔法掌控了他";

	goto labelFunc02CB_0D71;
labelFunc02CB_026C:
	if (!(var0001 == 0x0011)) goto labelFunc02CB_028C;
	var000A = ["|chuckles|", "laughed", "till|(e", "end"];

	var_chinese = "查克尔斯，笑到最后";

	goto labelFunc02CB_0D71;
labelFunc02CB_028C:
	if (!(var0001 == 0x0012)) goto labelFunc02CB_02AC;
	var000A = ["|art|d|", "bit|(e|rump", "of|a|big|", "bad|gump"];

	var_chinese = "亚特·D，咬了一只大坏甘普的屁股";

	goto labelFunc02CB_0D71;
labelFunc02CB_02AC:
	if (!(var0001 == 0x0013)) goto labelFunc02CB_02CC;
	var000A = ["|jim|g|", "he|was", "a|wonder", "to|us|all"];

	var_chinese = "吉姆·G，对我们所有人来说他都是个奇迹";

	goto labelFunc02CB_0D71;
labelFunc02CB_02CC:
	if (!(var0001 == 0x0014)) goto labelFunc02CB_02EC;
	var000A = ["|will|", "he|was|a", "rebel|and", "a|runner"];

	var_chinese = "威尔，他是个叛逆者也是个逃跑者";

	goto labelFunc02CB_0D71;
labelFunc02CB_02EC:
	if (!(var0001 == 0x0015)) goto labelFunc02CB_030C;
	var000A = ["|mr|mike|", "lost|early", "from|a|bout", "with|gumps"];

	var_chinese = "迈克先生，在与甘普的搏斗中英年早逝";

	goto labelFunc02CB_0D71;
labelFunc02CB_030C:
	if (!(var0001 == 0x0016)) goto labelFunc02CB_032F;
	var000A = ["|paul|", "odd|how", "awake", "sleep", "made|him"];

	var_chinese = "保罗，真奇怪，睡眠竟让他如此清醒";

	goto labelFunc02CB_0D71;
labelFunc02CB_032F:
	if (!(var0001 == 0x0017)) goto labelFunc02CB_0352;
	var000A = ["|zack|", "he", "demanded", "atomic", "d+("];

	var_chinese = "柴克，他要求原子核毁灭";

	goto labelFunc02CB_0D71;
labelFunc02CB_0352:
	if (!(var0001 == 0x0018)) goto labelFunc02CB_0375;
	var000A = ["|phil|s|", "a|victim", "of", "venomous", "fate"];

	var_chinese = "菲尔·S，有毒命运的受害者";

	goto labelFunc02CB_0D71;
labelFunc02CB_0375:
	if (!(var0001 == 0x0019)) goto labelFunc02CB_0392;
	var000A = ["|jeff|w|", "danger", "radiation"];

	var_chinese = "杰夫·W，小心辐射";

	goto labelFunc02CB_0D71;
labelFunc02CB_0392:
	if (!(var0001 == 0x001A)) goto labelFunc02CB_03B2;
	var000A = ["|tony|z|", "a|good", "source", "for|gumps"];

	var_chinese = "东尼·Z，甘普的好来源";

	goto labelFunc02CB_0D71;
labelFunc02CB_03B2:
	if (!(var0001 == 0x001B)) goto labelFunc02CB_03D2;
	var000A = ["|bill|b|", "we|(ought", "he|was|only", "winged"];

	var_chinese = "比尔·B，我们以为他只是受了轻伤";

	goto labelFunc02CB_0D71;
labelFunc02CB_03D2:
	if (!(var0001 == 0x001C)) goto labelFunc02CB_03EF;
	var000A = ["|charles|c|", "guest", "victim"];

	var_chinese = "查尔斯·C，客串受害者";

	goto labelFunc02CB_0D71;
labelFunc02CB_03EF:
	if (!(var0001 == 0x001D)) goto labelFunc02CB_040C;
	var000A = ["|danny|", "dearly", "depainted"];

	var_chinese = "丹尼，深切哀悼";

	goto labelFunc02CB_0D71;
labelFunc02CB_040C:
	if (!(var0001 == 0x001E)) goto labelFunc02CB_042C;
	var000A = ["|bob|", "he|makes", "(e|grass", "greener"];

	var_chinese = "鲍勃，他让草地更绿了";

	goto labelFunc02CB_0D71;
labelFunc02CB_042C:
	if (!(var0001 == 0x001F)) goto labelFunc02CB_044C;
	var000A = ["here|lies", "donna", "she|is|a", "gonna"];

	var_chinese = "长眠于此的唐娜，她已经不在了";

	goto labelFunc02CB_0D71;
labelFunc02CB_044C:
	if (!(var0001 == 0x0020)) goto labelFunc02CB_046C;
	var000A = ["|karl|", "a|portrait", "of", "talent"];

	var_chinese = "卡尔，才华的写照";

	goto labelFunc02CB_0D71;
labelFunc02CB_046C:
	if (!(var0001 == 0x0021)) goto labelFunc02CB_048C;
	var000A = ["|chris|d|", "an", "explosive", "character"];

	var_chinese = "克里斯·D，一个爆炸性的角色";

	goto labelFunc02CB_0D71;
labelFunc02CB_048C:
	if (!(var0001 == 0x0022)) goto labelFunc02CB_04AC;
	var000A = ["|glen|", "went", "with|a", "smile"];

	var_chinese = "葛伦，带着微笑离去";

	goto labelFunc02CB_0D71;
labelFunc02CB_04AC:
	if (!(var0001 == 0x0023)) goto labelFunc02CB_04CC;
	var000A = ["|bruce|l|", "had|a", "fantastic", "ending"];

	var_chinese = "布鲁斯·L，有着奇幻的结局";

	goto labelFunc02CB_0D71;
labelFunc02CB_04CC:
	if (!(var0001 == 0x0024)) goto labelFunc02CB_04EC;
	var000A = ["|loubet|", "his", "last", "br+("];

	var_chinese = "卢贝特，他的最后一口气";

	goto labelFunc02CB_0D71;
labelFunc02CB_04EC:
	if (!(var0001 == 0x0025)) goto labelFunc02CB_050C;
	var000A = ["|micael|p|", "lo*|time", "comi*|gone", "for|good"];

	var_chinese = "麦可·P，等待许久，一去不返";

	goto labelFunc02CB_0D71;
labelFunc02CB_050C:
	if (!(var0001 == 0x0026)) goto labelFunc02CB_052C;
	var000A = ["|jake|", "(e|party", "is", "over"];

	var_chinese = "杰克，派对结束了";

	goto labelFunc02CB_0D71;
labelFunc02CB_052C:
	if (!(var0001 == 0x0027)) goto labelFunc02CB_054C;
	var000A = ["|gary|w|", "man|of|a", "(ousand", "faces"];

	var_chinese = "盖瑞·W，千面人";

	goto labelFunc02CB_0D71;
labelFunc02CB_054C:
	if (!(var0001 == 0x0028)) goto labelFunc02CB_056C;
	var000A = ["|(e|b+,|", "it|was|a", "full", "life"];

	var_chinese = "比恩，这是充实的一生";

	goto labelFunc02CB_0D71;
labelFunc02CB_056C:
	if (!(var0001 == 0x0029)) goto labelFunc02CB_058C;
	var000A = ["here|lies", "kirk|died", "from|too", "much|work"];

	var_chinese = "长眠于此的柯克，过劳而死";

	goto labelFunc02CB_0D71;
labelFunc02CB_058C:
	if (!(var0001 == 0x002A)) goto labelFunc02CB_05AC;
	var000A = ["|targ|", "a", "wor(y", "opponent"];

	var_chinese = "塔格，一个可敬的对手";

	goto labelFunc02CB_0D71;
labelFunc02CB_05AC:
	if (!(var0001 == 0x002B)) goto labelFunc02CB_05CF;
	var000A = ["here|lies", "my,ral", "shined", "like|a", "crystal"];

	var_chinese = "长眠于此的米斯特拉，闪耀如水晶";

	goto labelFunc02CB_0D71;
labelFunc02CB_05CF:
	if (!(var0001 == 0x002C)) goto labelFunc02CB_05EF;
	var000A = ["here|lies", "marc", "and|why", "not"];

	var_chinese = "长眠于此的马克，有何不可";

	goto labelFunc02CB_0D71;
labelFunc02CB_05EF:
	if (!(var0001 == 0x002D)) goto labelFunc02CB_060F;
	var000A = ["|nenad|", "(e", "music", "maker"];

	var_chinese = "内纳德，音乐创作者";

	goto labelFunc02CB_0D71;
labelFunc02CB_060F:
	if (!(var0001 == 0x002E)) goto labelFunc02CB_0632;
	var000A = ["here|lies", "john", "his", "work|was", "never|done"];

	var_chinese = "长眠于此的约翰，他的工作永远做不完";

	goto labelFunc02CB_0D71;
labelFunc02CB_0632:
	if (!(var0001 == 0x002F)) goto labelFunc02CB_0652;
	var000A = ["|bruce|a|", "we", "killed", "him"];

	var_chinese = "布鲁斯·A，我们杀了他";

	goto labelFunc02CB_0D71;
labelFunc02CB_0652:
	if (!(var0001 == 0x0030)) goto labelFunc02CB_0675;
	var000A = ["|eric|", "unaware", "(e|game", "was", "loaded"];

	var_chinese = "艾瑞克，没发现游戏已经加载了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0675:
	if (!(var0001 == 0x0031)) goto labelFunc02CB_0695;
	var000A = ["|raymond|", "(e|world", "is|not", "enough"];

	var_chinese = "雷蒙德，世界还不够";

	goto labelFunc02CB_0D71;
labelFunc02CB_0695:
	if (!(var0001 == 0x0032)) goto labelFunc02CB_06B5;
	var000A = ["|Beth|", "died", "by", "garriot"];

	var_chinese = "贝丝，死于加略特(Garriott)之手";

	goto labelFunc02CB_0D71;
labelFunc02CB_06B5:
	if (!(var0001 == 0x0033)) goto labelFunc02CB_06D5;
	var000A = ["|jack|", "+ten", "by", "di*os"];

	var_chinese = "杰克，被野狗吃掉";

	goto labelFunc02CB_0D71;
labelFunc02CB_06D5:
	if (!(var0001 == 0x0034)) goto labelFunc02CB_06F5;
	var000A = ["|michelle|", "hu*|for", "poisoni*", "lover"];

	var_chinese = "蜜雪儿，因毒杀情人而被绞死";

	goto labelFunc02CB_0D71;
labelFunc02CB_06F5:
	if (!(var0001 == 0x0035)) goto labelFunc02CB_0718;
	var000A = ["|scott|h|", "gone", "today", "gone", "tomorrow"];

	var_chinese = "史考特·H，今日离去，明日不再";

	goto labelFunc02CB_0D71;
labelFunc02CB_0718:
	if (!(var0001 == 0x0036)) goto labelFunc02CB_073B;
	var000A = ["|brian|", "swallowed", "by", "(e", "mon,er"];

	var_chinese = "布莱恩，被怪物吞噬";

	goto labelFunc02CB_0D71;
labelFunc02CB_073B:
	if (!(var0001 == 0x0037)) goto labelFunc02CB_075B;
	var000A = ["|sherry|c|", "managed", "until", "(e|end"];

	var_chinese = "雪莉·C，坚持到了最后";

	goto labelFunc02CB_0D71;
labelFunc02CB_075B:
	if (!(var0001 == 0x0038)) goto labelFunc02CB_077B;
	var000A = ["|karen|", "quality", "was|job", "one"];

	var_chinese = "凯伦，品质第一";

	goto labelFunc02CB_0D71;
labelFunc02CB_077B:
	if (!(var0001 == 0x0039)) goto labelFunc02CB_079B;
	var000A = ["|j|shelton", "here|i|lie", "but|,ill", "i|roam"];

	var_chinese = "J·谢尔顿，我长眠于此，但我依然徘徊";

	goto labelFunc02CB_0D71;
labelFunc02CB_079B:
	if (!(var0001 == 0x003A)) goto labelFunc02CB_07BB;
	var000A = ["|marco|", "underfed", "under|gun", "undergrnd"];

	var_chinese = "马可，吃不饱，受威胁，葬地下";

	goto labelFunc02CB_0D71;
labelFunc02CB_07BB:
	if (!(var0001 == 0x003B)) goto labelFunc02CB_07DB;
	var000A = ["|lynn|", "she|had", "(e|grace", "of|a|swan"];

	var_chinese = "琳恩，她有着天鹅般的优雅";

	goto labelFunc02CB_0D71;
labelFunc02CB_07DB:
	if (!(var0001 == 0x003C)) goto labelFunc02CB_07FB;
	var000A = ["|chenault|", "me|puergo", "canus|meus", "urit"];

	var_chinese = "薛诺特，我的狗咬了我";

	goto labelFunc02CB_0D71;
labelFunc02CB_07FB:
	if (!(var0001 == 0x003D)) goto labelFunc02CB_081B;
	var000A = ["|j|crippen|", "to|dizzy", "and|tc", "cocopuff"];

	var_chinese = "J·克里彭，给 Dizzy 和 TC Cocopuff";

	goto labelFunc02CB_0D71;
labelFunc02CB_081B:
	if (!(var0001 == 0x003E)) goto labelFunc02CB_0838;
	var000A = ["|tim|", "(e|unknown", "tomb,one"];

	var_chinese = "提姆，无名墓碑";

	goto labelFunc02CB_0D71;
labelFunc02CB_0838:
	if (!(var0001 == 0x003F)) goto labelFunc02CB_0858;
	var000A = ["|na(an|", "blown|away", "by|grogs", "fireball"];

	var_chinese = "南森，被格罗格的火球炸飞";

	goto labelFunc02CB_0D71;
labelFunc02CB_0858:
	if (!(var0001 == 0x0040)) goto labelFunc02CB_0878;
	var000A = ["|james|n|", "last|words", "i|drank", "what"];

	var_chinese = "詹姆士·N，遗言：我喝了什么？";

	goto labelFunc02CB_0D71;
labelFunc02CB_0878:
	if (!(var0001 == 0x0041)) goto labelFunc02CB_0898;
	var000A = ["here|lies", "Ben", "all|te,ed", "out"];

	var_chinese = "长眠于此的班，已经筋疲力尽";

	goto labelFunc02CB_0D71;
labelFunc02CB_0898:
	if (!(var0001 == 0x0042)) goto labelFunc02CB_08B8;
	var000A = ["|scott|", "buried|an", "axe|in", "his|h+d"];

	var_chinese = "史考特，头上插了一把斧头";

	goto labelFunc02CB_0D71;
labelFunc02CB_08B8:
	if (!(var0001 == 0x0043)) goto labelFunc02CB_08D8;
	var000A = ["|duke|", "veni", "vidi", "exii"];

	var_chinese = "公爵，我来，我见，我离去";

	goto labelFunc02CB_0D71;
labelFunc02CB_08D8:
	if (!(var0001 == 0x0044)) goto labelFunc02CB_08F8;
	var000A = ["|mike|h|", "every(i*", "fit|to", "print"];

	var_chinese = "迈克·H，一切都适合印刷";

	goto labelFunc02CB_0D71;
labelFunc02CB_08F8:
	if (!(var0001 == 0x0045)) goto labelFunc02CB_0918;
	var000A = ["|robin|", "she|gave", "sunshine", "to|us|all"];

	var_chinese = "罗宾，她给了我们所有人阳光";

	goto labelFunc02CB_0D71;
labelFunc02CB_0918:
	if (!(var0001 == 0x0046)) goto labelFunc02CB_093B;
	var000A = ["|andrew|", "|m|", "never", "got", "clued|in"];

	var_chinese = "安德鲁·M，永远搞不清楚状况";

	goto labelFunc02CB_0D71;
labelFunc02CB_093B:
	if (!(var0001 == 0x0047)) goto labelFunc02CB_095B;
	var000A = ["|wayne|s|", "(e|food", "was", "gr+t"];

	var_chinese = "韦恩·S，食物很棒";

	goto labelFunc02CB_0D71;
labelFunc02CB_095B:
	if (!(var0001 == 0x0048)) goto labelFunc02CB_0978;
	var000A = ["|craig|c|", "was", "delivered"];

	var_chinese = "克雷格·C，被送走了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0978:
	if (!(var0001 == 0x0049)) goto labelFunc02CB_0998;
	var000A = ["|jeff|f|", "fed|but", "never", "ate"];

	var_chinese = "杰夫·F，被喂食却从未吃下";

	goto labelFunc02CB_0D71;
labelFunc02CB_0998:
	if (!(var0001 == 0x004A)) goto labelFunc02CB_09B8;
	var000A = ["|w|hagy", "food", "for", "(ought"];

	var_chinese = "W·哈吉，精神粮食";

	goto labelFunc02CB_0D71;
labelFunc02CB_09B8:
	if (!(var0001 == 0x004B)) goto labelFunc02CB_09D8;
	var000A = ["|m|", "|stevens|", "arrived", "wi(|gifts"];

	var_chinese = "M·史蒂文斯，带着礼物到来";

	goto labelFunc02CB_0D71;
labelFunc02CB_09D8:
	if (!(var0001 == 0x004C)) goto labelFunc02CB_09FB;
	var000A = ["|michelle|", "|g|", "bringer", "of", "dinner"];

	var_chinese = "蜜雪儿·G，晚餐带来者";

	goto labelFunc02CB_0D71;
labelFunc02CB_09FB:
	if (!(var0001 == 0x004D)) goto labelFunc02CB_0A1B;
	var000A = ["|brian|s|", "food", "was", "him"];

	var_chinese = "布莱恩·S，他就是食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A1B:
	if (!(var0001 == 0x004E)) goto labelFunc02CB_0A3E;
	var000A = ["|jackie|", "d|", "as|in|d|", "for", "dinner"];

	var_chinese = "洁姬，D 代表晚餐";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A3E:
	if (!(var0001 == 0x004F)) goto labelFunc02CB_0A61;
	var000A = ["|b|adams|", "spained", "a", "perfect", "record"];

	var_chinese = "B·亚当斯，保持着完美记录";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A61:
	if (!(var0001 == 0x0050)) goto labelFunc02CB_0A84;
	var000A = ["|hal|", "a|nice", "fellow", "who|is", "now|below"];

	var_chinese = "哈尔，一个现在在地下的大好人";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A84:
	if (!(var0001 == 0x0051)) goto labelFunc02CB_0AA7;
	var000A = ["|rover|", "mans|best", "friend", "over|and", "over"];

	var_chinese = "罗孚，人类永远最好的朋友";

	goto labelFunc02CB_0D71;
labelFunc02CB_0AA7:
	if (!(var0001 == 0x0052)) goto labelFunc02CB_0ACA;
	var000A = ["|felcore|", "age|old", "love", "never", "dies"];

	var_chinese = "费尔科尔，旧爱永生不灭";

	goto labelFunc02CB_0D71;
labelFunc02CB_0ACA:
	if (!(var0001 == 0x0053)) goto labelFunc02CB_0AED;
	var000A = ["heres", "tony", "morse", "hes|d+d", "of|course"];

	var_chinese = "东尼·莫尔斯在此，他当然死了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0AED:
	if (!(var0001 == 0x0054)) goto labelFunc02CB_0B10;
	var000A = ["heres", "larry", "salamon", "|", "gross"];

	var_chinese = "拉里·萨拉蒙在此，真恶心";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B10:
	if (!(var0001 == 0x0055)) goto labelFunc02CB_0B30;
	var000A = ["darren", "mcdonald", "who|is", "faltran"];

	var_chinese = "达伦·麦当劳，谁是法尔特兰";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B30:
	if (!(var0001 == 0x0056)) goto labelFunc02CB_0B53;
	var000A = ["|kevin|b|", "died", "away", "from|(e", "chiltons"];

	var_chinese = "凯文·B，死在远离奇尔顿家的地方";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B53:
	if (!(var0001 == 0x0057)) goto labelFunc02CB_0B76;
	var000A = ["|beth", "and", "michael|", "worm", "food"];

	var_chinese = "贝丝和迈克尔，虫子的食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B76:
	if (!(var0001 == 0x0058)) goto labelFunc02CB_0B93;
	var000A = ["|a|h|", "died", "honorably"];

	var_chinese = "A.H.，光荣地死去";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B93:
	if (!(var0001 == 0x0059)) goto labelFunc02CB_0BB3;
	var000A = ["|john|t|", "gone", "and", "went"];

	var_chinese = "约翰·T，一去不复返";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BB3:
	if (!(var0001 == 0x005A)) goto labelFunc02CB_0BD3;
	var000A = ["|rey|", "", "installed", "here"];

	var_chinese = "雷，安装于此";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BD3:
	if (!(var0001 == 0x005B)) goto labelFunc02CB_0BF6;
	var000A = ["|rhoode|", "a|more", "deservi*", "man|never", "died"];

	var_chinese = "罗德，从没有比他更该死的人";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BF6:
	if (!(var0001 == 0x005C)) goto labelFunc02CB_0C19;
	var000A = ["|jasner|", "every", "moment", "she|is", "missed"];

	var_chinese = "贾斯纳，每时每刻都被思念着";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C19:
	if (!(var0001 == 0x005D)) goto labelFunc02CB_0C3C;
	var000A = ["|wampol|", "here|he", "lied", "now|here", "he|lays"];

	var_chinese = "万波尔，他曾在这说谎，现在他躺在这";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C3C:
	if (!(var0001 == 0x005E)) goto labelFunc02CB_0C5F;
	var000A = ["|destra|", "wounded", "by|a", "lovers", "spurni*"];

	var_chinese = "德斯特拉，被爱人的拒绝所伤";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C5F:
	if (!(var0001 == 0x005F)) goto labelFunc02CB_0C7F;
	var000A = ["|mendar|", "buried", "wi(|his", "boots|on"];

	var_chinese = "门达，穿着靴子下葬";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C7F:
	if (!(var0001 == 0x0060)) goto labelFunc02CB_0CA2;
	var000A = ["|greghim|", "old|age", "never", "looked|so", "good"];

	var_chinese = "格雷格金，衰老从未看起来如此美好";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CA2:
	if (!(var0001 == 0x0061)) goto labelFunc02CB_0CC5;
	var000A = ["|sarnan|", "was|not", "missed", "but|is", "now"];

	var_chinese = "萨尔南，过去没被想念，但现在有了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CC5:
	if (!(var0001 == 0x0062)) goto labelFunc02CB_0CE8;
	var000A = ["|erlemar|", "gr+te,", "enchanter", "of|his", "day"];

	var_chinese = "埃尔勒马，他那个时代最伟大的附魔师";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CE8:
	if (!(var0001 == 0x0063)) goto labelFunc02CB_0D0B;
	var000A = ["|galler|", "came|", "saw|", "was", "conquered"];

	var_chinese = "加勒，我来，我见，我被征服";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D0B:
	if (!(var0001 == 0x0064)) goto labelFunc02CB_0D2E;
	var000A = ["|elgele(|", "queen", "for|a|day", "worm|food", "forever"];

	var_chinese = "艾尔盖莱丝，当了一天女王，永远做虫子的食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D2E:
	if (!(var0001 == 0x0065)) goto labelFunc02CB_0D4E;
	var000A = ["|pantor|", "(e|si*i*", "never", "stops"];

	var_chinese = "潘托，歌声永不停息";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D4E:
	if (!(var0001 == 0x0066)) goto labelFunc02CB_0D71;
	var000A = ["here|lies", "beloved", "fa(er", "and", "ma,er"];

	var_chinese = "长眠于此的是敬爱的父亲与大师";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D71:
	var has_magic_book = UI_count_objects(0xFE9B, 0x0282, 149, 0);
	
	if (has_magic_book == 0 && var_chinese != "") {
		UI_display_runes(0x0032, var000A);
		if (is_runic) {
			runic_first_click();
		}
	} else if (has_magic_book > 0 && var_chinese != "") {
		UI_show_npc_face(UI_get_avatar_ref(), 0);
		message("墓碑载负逝者之叹，化为新文跃然脑海：「" + var_chinese + "」");
		UI_display_runes(0x0032, var000A);
		UI_remove_npc_face(UI_get_avatar_ref());
	} else {
		UI_display_runes(0x0032, var000A);
	}
	return;
}


