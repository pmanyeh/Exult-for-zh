#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void runic_first_click 0x95F ();

void Func017B shape#(0x17B) ()
{
	var var0000;
	var var0001;
	var var000A;
	var var_chinese = "";
	var is_runic = true;

	if (!(event != 0x0001)) goto labelFunc017B_0009;
	return;
labelFunc017B_0009:
	var0000 = Func0908();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0097)) goto labelFunc017B_003A;
	var000A = ["THIS IS", "NOT A", "VALID", "SIGN"];

	var_chinese = "这不是一个有效的招牌";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_003A:
	if (!(var0001 == 0x0000)) goto labelFunc017B_005D;
	var000A = ["drink", "at|(e", "gilded", "lizard"];

	var_chinese = "来金蜥蜴客栈喝一杯";
	goto labelFunc017B_105D;
labelFunc017B_005D:
	if (!(var0001 == 0x0001)) goto labelFunc017B_0080;
	var000A = ["skara", "brae~", "~population", "47"];

	var_chinese = "史卡拉布莱人口 47";
	goto labelFunc017B_105D;
labelFunc017B_0080:
	if (!(var0001 == 0x0002)) goto labelFunc017B_009A;
	var000A = ["trinsic"];

	var_chinese = "特林西克";
	goto labelFunc017B_105D;
labelFunc017B_009A:
	if (!(var0001 == 0x0003)) goto labelFunc017B_00BA;
	var000A = ["(e", "honorable", "hound"];

	var_chinese = "荣耀猎犬客栈";
	goto labelFunc017B_105D;
labelFunc017B_00BA:
	if (!(var0001 == 0x0004)) goto labelFunc017B_00D7;
	var000A = ["FELLOWSHIP", "HALL"];

	var_chinese = "友谊会大厅";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_00D7:
	if (!(var0001 == 0x0005)) goto labelFunc017B_00F1;
	var000A = ["britain"];

	var_chinese = "不列颠城";
	goto labelFunc017B_105D;
labelFunc017B_00F1:
	if (!(var0001 == 0x0006)) goto labelFunc017B_0114;
	var000A = ["COMING:", "RAYMUNDO'S", "@TRIALS OF", "THE AVATAR@"];

	var_chinese = "即将上演：雷蒙多《圣者的试炼》";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0114:
	if (!(var0001 == 0x0007)) goto labelFunc017B_0137;
	var000A = ["RESERVE", "THY", "SEATS", "NOW"];

	var_chinese = "现在就预订你的座位";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0137:
	if (!(var0001 == 0x0008)) goto labelFunc017B_0154;
	var000A = ["royal", "museum"];

	var_chinese = "皇家博物馆";
	goto labelFunc017B_105D;
labelFunc017B_0154:
	if (!(var0001 == 0x0009)) goto labelFunc017B_0174;
	var000A = ["(e", "music", "hall"];

	var_chinese = "音乐厅";
	goto labelFunc017B_105D;
labelFunc017B_0174:
	if (!(var0001 == 0x000B)) goto labelFunc017B_0194;
	var000A = ["(e", "wayfarer's", "inn"];

	var_chinese = "旅人客栈";
	goto labelFunc017B_105D;
labelFunc017B_0194:
	if (!(var0001 == 0x000C)) goto labelFunc017B_01B1;
	var000A = ["iolos", "bows"];

	var_chinese = "伊奥洛弓箭店";
	goto labelFunc017B_105D;
labelFunc017B_01B1:
	if (!(var0001 == 0x000D)) goto labelFunc017B_01D1;
	var000A = ["(e", "blue", "boar"];

	var_chinese = "蓝野猪酒馆";
	goto labelFunc017B_105D;
labelFunc017B_01D1:
	if (!(var0001 == 0x000E)) goto labelFunc017B_01EE;
	var000A = ["gayes", "clo(iers"];

	var_chinese = "盖伊服装店";
	goto labelFunc017B_105D;
labelFunc017B_01EE:
	if (!(var0001 == 0x000F)) goto labelFunc017B_020E;
	var000A = ["nor(", ",ar", "armoury"];

	var_chinese = "北极星军械库";
	goto labelFunc017B_105D;
labelFunc017B_020E:
	if (!(var0001 == 0x0010)) goto labelFunc017B_022E;
	var000A = ["(e", "oaken", "oar"];

	var_chinese = "橡木桨造船厂";
	goto labelFunc017B_105D;
labelFunc017B_022E:
	if (!(var0001 == 0x0011)) goto labelFunc017B_0248;
	var000A = ["bakery"];

	var_chinese = "烘焙坊";
	goto labelFunc017B_105D;
labelFunc017B_0248:
	if (!(var0001 == 0x0012)) goto labelFunc017B_0262;
	var000A = ["jeweler"];

	var_chinese = "珠宝店";
	goto labelFunc017B_105D;
labelFunc017B_0262:
	if (!(var0001 == 0x0013)) goto labelFunc017B_027F;
	var000A = ["farmers", "market"];

	var_chinese = "农夫市集";
	goto labelFunc017B_105D;
labelFunc017B_027F:
	if (!(var0001 == 0x0014)) goto labelFunc017B_0299;
	var000A = ["apo(ecary"];

	var_chinese = "药剂师";
	goto labelFunc017B_105D;
labelFunc017B_0299:
	if (!(var0001 == 0x0015)) goto labelFunc017B_02B6;
	var000A = ["royal", "mint"];

	var_chinese = "皇家铸币厂";
	goto labelFunc017B_105D;
labelFunc017B_02B6:
	if (!(var0001 == 0x0016)) goto labelFunc017B_02D6;
	var000A = ["csil", "(e", "h+ler"];

	var_chinese = "治疗师 西斯尔";
	goto labelFunc017B_105D;
labelFunc017B_02D6:
	if (!(var0001 == 0x0017)) goto labelFunc017B_02F0;
	var000A = ["provisions"];

	var_chinese = "补给品店";
	goto labelFunc017B_105D;
labelFunc017B_02F0:
	if (!(var0001 == 0x0018)) goto labelFunc017B_030D;
	var000A = ["royal", "orchards"];

	var_chinese = "皇家果园";
	goto labelFunc017B_105D;
labelFunc017B_030D:
	if (!(var0001 == 0x0019)) goto labelFunc017B_032D;
	var000A = ["TEST OF STRENGTH", " -- ", "ART THOU AN AVATAR?"];

	var_chinese = "力量测试 —— 你是圣者吗？";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_032D:
	if (!(var0001 == 0x001A)) goto labelFunc017B_034D;
	var000A = ["punch and", "judy", "show"];

	var_chinese = "潘奇和茱蒂人偶秀";
	goto labelFunc017B_105D;
labelFunc017B_034D:
	if (!(var0001 == 0x001B)) goto labelFunc017B_0367;
	var000A = ["fish|n|chips"];

	var_chinese = "炸鱼薯条";
	goto labelFunc017B_105D;
labelFunc017B_0367:
	if (!(var0001 == 0x001C)) goto labelFunc017B_0381;
	var000A = ["cove"];

	var_chinese = "库夫";
	goto labelFunc017B_105D;
labelFunc017B_0381:
	if (!(var0001 == 0x001D)) goto labelFunc017B_039E;
	var000A = ["(e", "emerald"];

	var_chinese = "绿宝石客栈";
	goto labelFunc017B_105D;
labelFunc017B_039E:
	if (!(var0001 == 0x001E)) goto labelFunc017B_03B8;
	var000A = ["out|n|inn"];

	var_chinese = "进进出出客栈";
	goto labelFunc017B_105D;
labelFunc017B_03B8:
	if (!(var0001 == 0x001F)) goto labelFunc017B_03D5;
	var000A = ["lovers", "walk"];

	var_chinese = "情人步道";
	goto labelFunc017B_105D;
labelFunc017B_03D5:
	if (!(var0001 == 0x0020)) goto labelFunc017B_03F2;
	var000A = ["buccaneers", "den"];

	var_chinese = "海盗巢穴";
	goto labelFunc017B_105D;
labelFunc017B_03F2:
	if (!(var0001 == 0x0021)) goto labelFunc017B_0409;
	var000A = "(e|ba(s";

	var_chinese = "澡堂";
	goto labelFunc017B_105D;
labelFunc017B_0409:
	if (!(var0001 == 0x0022)) goto labelFunc017B_0429;
	var000A = ["house", "of", "games"];

	var_chinese = "赌　坊";
	goto labelFunc017B_105D;
labelFunc017B_0429:
	if (!(var0001 == 0x0023)) goto labelFunc017B_0449;
	var000A = ["(e", "fallen", "virgin"];

	var_chinese = "堕落处女酒馆";
	goto labelFunc017B_105D;
labelFunc017B_0449:
	if (!(var0001 == 0x0024)) goto labelFunc017B_0460;
	var000A = "budos";

	var_chinese = "布多";
	goto labelFunc017B_105D;
labelFunc017B_0460:
	if (!(var0001 == 0x0025)) goto labelFunc017B_047D;
	var000A = ["MEDITATION", "RETREAT"];

	var_chinese = "冥想静修所";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_047D:
	if (!(var0001 == 0x002C)) goto labelFunc017B_0497;
	var000A = ["GO THIS WAY"];

	var_chinese = "走这边";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0497:
	if (!(var0001 == 0x0034)) goto labelFunc017B_04B1;
	var000A = ["lycaeum"];

	var_chinese = "学术城";
	goto labelFunc017B_105D;
labelFunc017B_04B1:
	if (!(var0001 == 0x0035)) goto labelFunc017B_04D1;
	var000A = ["(e", "hallowed", "dock"];

	var_chinese = "神圣码头";
	goto labelFunc017B_105D;
labelFunc017B_04D1:
	if (!(var0001 == 0x0036)) goto labelFunc017B_04F1;
	var000A = ["(e", "friendly", "knave"];

	var_chinese = "友善恶棍客栈";
	goto labelFunc017B_105D;
labelFunc017B_04F1:
	if (!(var0001 == 0x0037)) goto labelFunc017B_0511;
	var000A = ["(e", "gilded", "lizard"];

	var_chinese = "金蜥蜴客栈";
	goto labelFunc017B_105D;
labelFunc017B_0511:
	if (!(var0001 == 0x0038)) goto labelFunc017B_052B;
	var000A = ["h+ler"];

	var_chinese = "治疗师";
	goto labelFunc017B_105D;
labelFunc017B_052B:
	if (!(var0001 == 0x0039)) goto labelFunc017B_0548;
	var000A = ["eldro(s", "provisions"];

	var_chinese = "埃尔德罗斯补给品店";
	goto labelFunc017B_105D;
labelFunc017B_0548:
	if (!(var0001 == 0x003A)) goto labelFunc017B_0568;
	var000A = ["house", "of", "items"];

	var_chinese = "物品之屋";
	goto labelFunc017B_105D;
labelFunc017B_0568:
	if (!(var0001 == 0x003B)) goto labelFunc017B_0588;
	var000A = ["britannian", "mini*", "company"];

	var_chinese = "不列颠尼亚矿业公司";
	goto labelFunc017B_105D;
labelFunc017B_0588:
	if (!(var0001 == 0x003C)) goto labelFunc017B_05A5;
	var000A = ["minoc", "branch"];

	var_chinese = "米诺克分部";
	goto labelFunc017B_105D;
labelFunc017B_05A5:
	if (!(var0001 == 0x003D)) goto labelFunc017B_05BF;
	var000A = ["trainer"];

	var_chinese = "训练师";
	goto labelFunc017B_105D;
labelFunc017B_05BF:
	if (!(var0001 == 0x003E)) goto labelFunc017B_05D9;
	var000A = ["scholar"];

	var_chinese = "学者";
	goto labelFunc017B_105D;
labelFunc017B_05D9:
	if (!(var0001 == 0x003F)) goto labelFunc017B_05F3;
	var000A = ["town|hall"];

	var_chinese = "市政厅";
	goto labelFunc017B_105D;
labelFunc017B_05F3:
	if (!(var0001 == 0x0040)) goto labelFunc017B_0610;
	var000A = ["wis-surs", "magics"];

	var_chinese = "威斯-苏尔魔法店";
	goto labelFunc017B_105D;
labelFunc017B_0610:
	if (!(var0001 == 0x0041)) goto labelFunc017B_062A;
	var000A = ["observatory"];

	var_chinese = "天文台";
	goto labelFunc017B_105D;
labelFunc017B_062A:
	if (!(var0001 == 0x0042)) goto labelFunc017B_0644;
	var000A = ["vesper"];

	var_chinese = "维斯帕";
	goto labelFunc017B_105D;
labelFunc017B_0644:
	if (!(var0001 == 0x0043)) goto labelFunc017B_065E;
	var000A = ["moo*low"];

	var_chinese = "月光城";
	goto labelFunc017B_105D;
labelFunc017B_065E:
	if (!(var0001 == 0x0044)) goto labelFunc017B_0678;
	var000A = ["terfin"];

	var_chinese = "特芬";
	goto labelFunc017B_105D;
labelFunc017B_0678:
	if (!(var0001 == 0x0045)) goto labelFunc017B_0695;
	var000A = ["serpents", "hold"];

	var_chinese = "巨蛇要塞";
	goto labelFunc017B_105D;
labelFunc017B_0695:
	if (!(var0001 == 0x0046)) goto labelFunc017B_06B2;
	var000A = ["empa(", "abbey"];

	var_chinese = "人神修道院";
	goto labelFunc017B_105D;
labelFunc017B_06B2:
	if (!(var0001 == 0x0047)) goto labelFunc017B_06CC;
	var000A = ["jhelom"];

	var_chinese = "杰洛姆";
	goto labelFunc017B_105D;
labelFunc017B_06CC:
	if (!(var0001 == 0x0048)) goto labelFunc017B_06E6;
	var000A = ["minoc"];

	var_chinese = "米诺克";
	goto labelFunc017B_105D;
labelFunc017B_06E6:
	if (!(var0001 == 0x0049)) goto labelFunc017B_0700;
	var000A = ["undertaker"];

	var_chinese = "礼仪师";
	goto labelFunc017B_105D;
labelFunc017B_0700:
	if (!(var0001 == 0x004A)) goto labelFunc017B_0723;
	var000A = ["high", "court", "of", "britannia"];

	var_chinese = "不列颠尼亚最高法院";
	goto labelFunc017B_105D;
labelFunc017B_0723:
	if (!(var0001 == 0x004B)) goto labelFunc017B_073D;
	var000A = ["prison"];

	var_chinese = "监狱";
	goto labelFunc017B_105D;
labelFunc017B_073D:
	if (!(var0001 == 0x004C)) goto labelFunc017B_075D;
	var000A = ["(e", "mode,", "damsel"];

	var_chinese = "谦逊少女客栈";
	goto labelFunc017B_105D;
labelFunc017B_075D:
	if (!(var0001 == 0x004D)) goto labelFunc017B_0777;
	var000A = ["armoury"];

	var_chinese = "军械库";
	goto labelFunc017B_105D;
labelFunc017B_0777:
	if (!(var0001 == 0x004E)) goto labelFunc017B_0791;
	var000A = ["blacksmi("];

	var_chinese = "铁匠";
	goto labelFunc017B_105D;
labelFunc017B_0791:
	if (!(var0001 == 0x004F)) goto labelFunc017B_07AE;
	var000A = ["recr+tion", "center"];

	var_chinese = "休闲中心";
	goto labelFunc017B_105D;
labelFunc017B_07AE:
	if (!(var0001 == 0x0050)) goto labelFunc017B_07CE;
	var000A = ["hall", "of", "knowledge"];

	var_chinese = "知识大厅";
	goto labelFunc017B_105D;
labelFunc017B_07CE:
	if (!(var0001 == 0x0051)) goto labelFunc017B_07EE;
	var000A = ["hello", "(ere", "avatar"];

	var_chinese = "你好，圣者";
	goto labelFunc017B_105D;
labelFunc017B_07EE:
	if (!(var0001 == 0x0052)) goto labelFunc017B_080E;
	var000A = ["tonight|9-12", "in|person", "the|avatars"];

	var_chinese = "今晚 9-12 點
聖者親自蒞臨";
	goto labelFunc017B_105D;
labelFunc017B_080E:
	if (!(var0001 == 0x0053)) goto labelFunc017B_082E;
	var000A = ["why", "ask", "why?"];

	var_chinese = "何必问为什么？";
	goto labelFunc017B_105D;
labelFunc017B_082E:
	if (!(var0001 == 0x0054)) goto labelFunc017B_084E;
	var000A = [",r)t", "of", "honor"];

	var_chinese = "荣誉街";
	goto labelFunc017B_105D;
labelFunc017B_084E:
	if (!(var0001 == 0x0055)) goto labelFunc017B_086B;
	var000A = ["paladins", "pa("];

	var_chinese = "圣骑士之路";
	goto labelFunc017B_105D;
labelFunc017B_086B:
	if (!(var0001 == 0x0056)) goto labelFunc017B_088E;
	var000A = ["AVENUE", "OF", "THE", "FELLOWSHIP"];

	var_chinese = "友谊会大道";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_088E:
	if (!(var0001 == 0x0057)) goto labelFunc017B_08AB;
	var000A = ["widows", "walk"];

	var_chinese = "寡妇步道";
	goto labelFunc017B_105D;
labelFunc017B_08AB:
	if (!(var0001 == 0x0058)) goto labelFunc017B_08C8;
	var000A = ["harolds", "hallway"];

	var_chinese = "哈罗德走廊";
	goto labelFunc017B_105D;
labelFunc017B_08C8:
	if (!(var0001 == 0x0059)) goto labelFunc017B_08E2;
	var000A = ["fools|way"];

	var_chinese = "愚人之路";
	goto labelFunc017B_105D;
labelFunc017B_08E2:
	if (!(var0001 == 0x005A)) goto labelFunc017B_08FF;
	var000A = ["whitsaber", "road"];

	var_chinese = "白军刀路";
	goto labelFunc017B_105D;
labelFunc017B_08FF:
	if (!(var0001 == 0x005B)) goto labelFunc017B_0919;
	var000A = [",rand"];

	var_chinese = "史特兰德街";
	goto labelFunc017B_105D;
labelFunc017B_0919:
	if (!(var0001 == 0x005C)) goto labelFunc017B_0936;
	var000A = ["chalice", "avenue"];

	var_chinese = "圣杯大道";
	goto labelFunc017B_105D;
labelFunc017B_0936:
	if (!(var0001 == 0x005D)) goto labelFunc017B_0953;
	var000A = ["two", "coves"];

	var_chinese = "双湾街";
	goto labelFunc017B_105D;
labelFunc017B_0953:
	if (!(var0001 == 0x005E)) goto labelFunc017B_0973;
	var000A = ["we,", "wall", "road"];

	var_chinese = "西墙路";
	goto labelFunc017B_105D;
labelFunc017B_0973:
	if (!(var0001 == 0x005F)) goto labelFunc017B_0993;
	var000A = ["+,", "wall", "road"];

	var_chinese = "东墙路";
	goto labelFunc017B_105D;
labelFunc017B_0993:
	if (!(var0001 == 0x0060)) goto labelFunc017B_09B3;
	var000A = ["nor(", "wall", "road"];

	var_chinese = "北墙路";
	goto labelFunc017B_105D;
labelFunc017B_09B3:
	if (!(var0001 == 0x0061)) goto labelFunc017B_09D3;
	var000A = ["sou(", "wall", "road"];

	var_chinese = "南墙路";
	goto labelFunc017B_105D;
labelFunc017B_09D3:
	if (!(var0001 == 0x0062)) goto labelFunc017B_09F0;
	var000A = ["heroes", "way"];

	var_chinese = "英雄之路";
	goto labelFunc017B_105D;
labelFunc017B_09F0:
	if (!(var0001 == 0x0063)) goto labelFunc017B_0A0D;
	var000A = ["iolos", "sou("];

	var_chinese = "伊奥洛南路";
	goto labelFunc017B_105D;
labelFunc017B_0A0D:
	if (!(var0001 == 0x0064)) goto labelFunc017B_0A27;
	var000A = ["paws"];

	var_chinese = "普斯";
	goto labelFunc017B_105D;
labelFunc017B_0A27:
	if (!(var0001 == 0x0065)) goto labelFunc017B_0A44;
	var000A = ["(e", "salty|dog"];

	var_chinese = "老海狗酒馆";
	goto labelFunc017B_105D;
labelFunc017B_0A44:
	if (!(var0001 == 0x0066)) goto labelFunc017B_0A61;
	var000A = ["FELLOWSHIP", "SHELTER"];

	var_chinese = "友谊会庇护所";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0A61:
	if (!(var0001 == 0x0067)) goto labelFunc017B_0A7E;
	var000A = ["vesper", "branch"];

	var_chinese = "维斯帕分部";
	goto labelFunc017B_105D;
labelFunc017B_0A7E:
	if (!(var0001 == 0x0068)) goto labelFunc017B_0A9E;
	var000A = ["(e", "checquered", "cork"];

	var_chinese = "方格软木塞客栈";
	goto labelFunc017B_105D;
labelFunc017B_0A9E:
	if (!(var0001 == 0x0069)) goto labelFunc017B_0ABB;
	var000A = ["artists", "guild"];

	var_chinese = "艺术家公会";
	goto labelFunc017B_105D;
labelFunc017B_0ABB:
	if (!(var0001 == 0x006A)) goto labelFunc017B_0ADB;
	var000A = ["(e bunk", "and", ",ool"];

	var_chinese = "木铺与矮凳客栈";
	goto labelFunc017B_105D;
labelFunc017B_0ADB:
	if (!(var0001 == 0x006B)) goto labelFunc017B_0AFE;
	var000A = ["(e", "library", "of", "scars"];

	var_chinese = "伤痕图书馆";
	goto labelFunc017B_105D;
labelFunc017B_0AFE:
	if (!(var0001 == 0x006C)) goto labelFunc017B_0B1B;
	var000A = ["carlyns", "clo(es"];

	var_chinese = "卡琳服装店";
	goto labelFunc017B_105D;
labelFunc017B_0B1B:
	if (!(var0001 == 0x006D)) goto labelFunc017B_0B3E;
	var000A = ["wi(in|(ese", "walls", "lies|ma,er", "richard"];

	var_chinese = "這些牆內
躺著理查大師";
	goto labelFunc017B_105D;
labelFunc017B_0B3E:
	if (!(var0001 == 0x006E)) goto labelFunc017B_0B58;
	var000A = ["ca,le|way"];

	var_chinese = "城堡路";
	goto labelFunc017B_105D;
labelFunc017B_0B58:
	if (!(var0001 == 0x006F)) goto labelFunc017B_0B78;
	var000A = ["lord", "british", "lane"];

	var_chinese = "不列颠王巷";
	goto labelFunc017B_105D;
labelFunc017B_0B78:
	if (!(var0001 == 0x0070)) goto labelFunc017B_0B92;
	var000A = ["noble|road"];

	var_chinese = "贵族路";
	goto labelFunc017B_105D;
labelFunc017B_0B92:
	if (!(var0001 == 0x0071)) goto labelFunc017B_0BAF;
	var000A = ["we,|end", "avenue"];

	var_chinese = "西端大道";
	goto labelFunc017B_105D;
labelFunc017B_0BAF:
	if (!(var0001 == 0x0072)) goto labelFunc017B_0BC9;
	var000A = ["hazle|lane"];

	var_chinese = "榛树巷";
	goto labelFunc017B_105D;
labelFunc017B_0BC9:
	if (!(var0001 == 0x0073)) goto labelFunc017B_0BE9;
	var000A = ["park", "square", "nor("];

	var_chinese = "公园广场北";
	goto labelFunc017B_105D;
labelFunc017B_0BE9:
	if (!(var0001 == 0x0074)) goto labelFunc017B_0C09;
	var000A = ["park", "square", "sou("];

	var_chinese = "公园广场南";
	goto labelFunc017B_105D;
labelFunc017B_0C09:
	if (!(var0001 == 0x0075)) goto labelFunc017B_0C26;
	var000A = ["market", ",r)t"];

	var_chinese = "市场街";
	goto labelFunc017B_105D;
labelFunc017B_0C26:
	if (!(var0001 == 0x0076)) goto labelFunc017B_0C43;
	var000A = ["golden", "way"];

	var_chinese = "黄金路";
	goto labelFunc017B_105D;
labelFunc017B_0C43:
	if (!(var0001 == 0x0077)) goto labelFunc017B_0C60;
	var000A = ["center", "avenue"];

	var_chinese = "中央大道";
	goto labelFunc017B_105D;
labelFunc017B_0C60:
	if (!(var0001 == 0x0078)) goto labelFunc017B_0C7D;
	var000A = ["spike", "lane"];

	var_chinese = "尖刺巷";
	goto labelFunc017B_105D;
labelFunc017B_0C7D:
	if (!(var0001 == 0x0079)) goto labelFunc017B_0C9A;
	var000A = ["avatar", "avenue"];

	var_chinese = "圣者大道";
	goto labelFunc017B_105D;
labelFunc017B_0C9A:
	if (!(var0001 == 0x007A)) goto labelFunc017B_0CB7;
	var000A = [",able", "lane"];

	var_chinese = "马厩巷";
	goto labelFunc017B_105D;
labelFunc017B_0CB7:
	if (!(var0001 == 0x007B)) goto labelFunc017B_0CD7;
	var000A = ["+,", "end", "avenue"];

	var_chinese = "东端大道";
	goto labelFunc017B_105D;
labelFunc017B_0CD7:
	if (!(var0001 == 0x007C)) goto labelFunc017B_0CF4;
	var000A = ["farm", "road"];

	var_chinese = "农场路";
	goto labelFunc017B_105D;
labelFunc017B_0CF4:
	if (!(var0001 == 0x007D)) goto labelFunc017B_0D11;
	var000A = ["nugget", ",r)t"];

	var_chinese = "金块街";
	goto labelFunc017B_105D;
labelFunc017B_0D11:
	if (!(var0001 == 0x007E)) goto labelFunc017B_0D2E;
	var000A = ["cool", "cove"];

	var_chinese = "凉爽小湾";
	goto labelFunc017B_105D;
labelFunc017B_0D2E:
	if (!(var0001 == 0x007F)) goto labelFunc017B_0D4E;
	var000A = ["nor(", "end", "avenue"];

	var_chinese = "北端大道";
	goto labelFunc017B_105D;
labelFunc017B_0D4E:
	if (!(var0001 == 0x0080)) goto labelFunc017B_0D6E;
	var000A = ["golden", "eye", "way"];

	var_chinese = "金眼路";
	goto labelFunc017B_105D;
labelFunc017B_0D6E:
	if (!(var0001 == 0x0081)) goto labelFunc017B_0D91;
	var000A = ["to", "(e", "dark", "tower"];

	var_chinese = "往黑暗之塔";
	goto labelFunc017B_105D;
labelFunc017B_0D91:
	if (!(var0001 == 0x0082)) goto labelFunc017B_0DB1;
	var000A = ["BEWARE", "OF", "LANDSLIDES"];

	var_chinese = "小心落石";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0DB1:
	if (!(var0001 == 0x0083)) goto labelFunc017B_0DD4;
	var000A = ["DANGER:", "DO", "NOT", "ENTER"];

	var_chinese = "危险：禁止进入";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0DD4:
	if (!(var0001 == 0x0084)) goto labelFunc017B_0DF4;
	var000A = ["old", "number", "one"];

	var_chinese = "老一号";
	goto labelFunc017B_105D;
labelFunc017B_0DF4:
	if (!(var0001 == 0x0085)) goto labelFunc017B_0E17;
	var000A = ["do|not", "free", "(e", "liche"];

	var_chinese = "不要释放巫妖";
	goto labelFunc017B_105D;
labelFunc017B_0E17:
	if (!(var0001 == 0x0086)) goto labelFunc017B_0E37;
	var000A = ["beware", "mon,ers", "wi(in"];

	var_chinese = "内有怪物，请小心";
	goto labelFunc017B_105D;
labelFunc017B_0E37:
	if (!(var0001 == 0x0087)) goto labelFunc017B_0E54;
	var000A = ["paupers", "graves"];

	var_chinese = "穷人墓地";
	goto labelFunc017B_105D;
labelFunc017B_0E54:
	if (!(var0001 == 0x0088)) goto labelFunc017B_0E77;
	var000A = ["|manrik|", "a|soul", "of|a", "soul"];

	var_chinese = "曼瑞克
靈魂中的靈魂";
	goto labelFunc017B_105D;
labelFunc017B_0E77:
	if (!(var0001 == 0x0089)) goto labelFunc017B_0E9A;
	var000A = ["here|lies", "jules|no", "words|for", "(e|loss"];

	var_chinese = "長眠於此的茱兒
無法言語的痛失";
	goto labelFunc017B_105D;
labelFunc017B_0E9A:
	if (!(var0001 == 0x008A)) goto labelFunc017B_0EBD;
	var000A = ["|morgan|", "her", "dea(|a", "tragedy"];

	var_chinese = "摩根
她的死是一場悲劇";
	goto labelFunc017B_105D;
labelFunc017B_0EBD:
	if (!(var0001 == 0x008B)) goto labelFunc017B_0EE0;
	var000A = ["here|lies", "ke(ian", "friend|to", "many"];

	var_chinese = "長眠於此的凱西恩
許多人的朋友";
	goto labelFunc017B_105D;
labelFunc017B_0EE0:
	if (!(var0001 == 0x008C)) goto labelFunc017B_0F03;
	var000A = ["|wadley|", "his|soul", "deeper|(an", "his|body"];

	var_chinese = "瓦德利
他的靈魂比肉體更深邃";
	goto labelFunc017B_105D;
labelFunc017B_0F03:
	if (!(var0001 == 0x008D)) goto labelFunc017B_0F26;
	var000A = ["here|lies", "jenna", "kindred", "spirit"];

	var_chinese = "長眠於此的珍娜
氣味相投的靈魂";
	goto labelFunc017B_105D;
labelFunc017B_0F26:
	if (!(var0001 == 0x008E)) goto labelFunc017B_0F43;
	var000A = ["d+d", "end"];

	var_chinese = "死路";
	goto labelFunc017B_105D;
labelFunc017B_0F43:
	if (!(var0001 == 0x008F)) goto labelFunc017B_0F63;
	var000A = ["to", "skara", "brae"];

	var_chinese = "往史卡拉布莱";
	goto labelFunc017B_105D;
labelFunc017B_0F63:
	if (!(var0001 == 0x0090)) goto labelFunc017B_0F86;
	var000A = ["THE", "THRONE", "OF|THE", "GUARDIAN"];

	var_chinese = "守护者王座";

	is_runic = false;
	goto labelFunc017B_105D;
labelFunc017B_0F86:
	if (!(var0001 == 0x0091)) goto labelFunc017B_0FA6;
	var000A = ["nor(", "to", "britain"];

	var_chinese = "往北去不列颠城";
	goto labelFunc017B_105D;
labelFunc017B_0FA6:
	if (!(var0001 == 0x0092)) goto labelFunc017B_0FC3;
	var000A = ["pull", "lever"];

	var_chinese = "拉下控制杆";
	goto labelFunc017B_105D;
labelFunc017B_0FC3:
	if (!(var0001 == 0x0093)) goto labelFunc017B_0FE3;
	var000A = ["round", "and", "round"];

	var_chinese = "转呀转";
	goto labelFunc017B_105D;
labelFunc017B_0FE3:
	if (!(var0001 == 0x0094)) goto labelFunc017B_1000;
	var000A = ["way", "out"];

	var_chinese = "出口";
	goto labelFunc017B_105D;
labelFunc017B_1000:
	if (!(var0001 == 0x0095)) goto labelFunc017B_1020;
	var000A = ["keep", "doors", "open"];

	var_chinese = "保持门敞开";
	goto labelFunc017B_105D;
labelFunc017B_1020:
	if (!(var0001 == 0x0096)) goto labelFunc017B_103D;
	var000A = ["selwyns", "tower"];

	var_chinese = "塞尔温之塔";
	goto labelFunc017B_105D;
labelFunc017B_103D:
	if (!(var0001 == 0x0097)) goto labelFunc017B_105D;
	var000A = ["follow", "(e", "fire"];

	var_chinese = "跟随火光";
	goto labelFunc017B_105D;
labelFunc017B_105D:
	var has_magic_book = UI_count_objects(0xFE9B, 0x0282, 149, 0);
	
	if (has_magic_book == 0 && var_chinese != "") {
		UI_display_runes(0x0031, var000A);
		if (is_runic) {
			runic_first_click();
		}
	} else if (has_magic_book > 0 && var_chinese != "") {
		UI_show_npc_face(UI_get_avatar_ref(), 0);
		message("文本碎裂重组，呢喃指引方向：「" + var_chinese + "」");
		UI_display_runes(0x0031, var000A);
		UI_remove_npc_face(UI_get_avatar_ref());
	} else {
		UI_display_runes(0x0031, var000A);
	}
	return;
}


