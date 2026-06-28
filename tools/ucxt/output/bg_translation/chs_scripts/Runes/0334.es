#game "blackgate"
// externs
extern var Func093D 0x93D (var var0000, var var0001);
extern var Func0908 0x908 ();
extern void Func08FF 0x8FF (var var0000);
extern var Func0932 0x932 (var var0000);
extern void Func08FE 0x8FE (var var0000);
extern void Func08FE 0x8FE (var var0000);
extern var Func090A 0x90A ();
extern void runic_first_click 0x95F ();

void Func0334 shape#(0x334) ()
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
	var var0009;
	var var000A;
	var var_chinese = "";
	var is_runic = true;
	var var000B;

	var0000 = item;
	var0001 = UI_get_item_quality(var0000);
	if (!(event == 0x0003)) goto labelFunc0334_0154;
	if (!(UI_get_item_shape(item) != 0x0334)) goto labelFunc0334_0049;
	var0000 = UI_find_nearby(var0000, 0x0334, 0x0005, 0x00B0);
	var0000 = Func093D(var0000, var0000);
	if (!(!var0000)) goto labelFunc0334_0049;
	abort;
labelFunc0334_0049:
	var0001 = UI_get_item_quality(var0000);
	var0002 = [];
	if (!(var0001 == 0x0007)) goto labelFunc0334_0072;
	var0002 = [0x0258, 0x026F, 0x022D];
labelFunc0334_0072:
	if (!(var0001 == 0x0008)) goto labelFunc0334_0082;
	var0002 = 0x0273;
labelFunc0334_0082:
	if (!(var0001 == 0x0009)) goto labelFunc0334_0092;
	var0002 = 0x0280;
labelFunc0334_0092:
	if (!(var0001 == 0x000A)) goto labelFunc0334_00A2;
	var0002 = 0x028E;
labelFunc0334_00A2:
	if (!(var0001 == 0x000B)) goto labelFunc0334_00BB;
	var0002 = [0x0284, 0x0285, 0x0286];
labelFunc0334_00BB:
	var0003 = false;
	enum();
labelFunc0334_00C0:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0334_014C;
	if (!UI_find_nearby(var0000, var0006, 0x0005, 0x00B0)) goto labelFunc0334_0149;
	if (!(var0001 < 0x000B)) goto labelFunc0334_010D;
	var0001 = (var0001 + 0x0001);
	var0007 = UI_set_item_quality(var0000, var0001);
	UI_close_gumps();
	var0003 = true;
	goto labelFunc0334_014C;
	goto labelFunc0334_0149;
labelFunc0334_010D:
	var0008 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0007, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0044);
	UI_remove_item(var0000);
	UI_close_gumps();
	abort;
labelFunc0334_0149:
	goto labelFunc0334_00C0;
labelFunc0334_014C:
	if (!(!var0003)) goto labelFunc0334_0154;
	abort;
labelFunc0334_0154:
	if (!(event == 0x0002)) goto labelFunc0334_0172;
	UI_kill_npc(0xFFE9);
	UI_halt_scheduled(0xFFE9);
	UI_remove_npc(0xFFE9);
	return;
labelFunc0334_0172:
	var0009 = Func0908();
	if (!(var0001 > 0x0041)) goto labelFunc0334_018B;
	var000A = "This is not a valid plaque ";

	var_chinese = "这不是一个有效的金属牌";

	goto labelFunc0334_09FA;
labelFunc0334_018B:
	if (!(var0001 == 0x0000)) goto labelFunc0334_01AD;
	var000A = ["important", "event", "to|be", "recorded", "here"];

	var_chinese = "将被记录于此的重要事件";

	goto labelFunc0334_09FA;
labelFunc0334_01AD:
	if (!(var0001 == 0x0001)) goto labelFunc0334_01CF;
	var000A = ["tomb|of", "kronos", "forgotten", "but|not", "forgiven"];

	var_chinese = "克罗诺斯之墓被遗忘但不可原谅";

	goto labelFunc0334_09FA;
labelFunc0334_01CF:
	if (!(var0001 == 0x0002)) goto labelFunc0334_01E8;
	var000A = ["royal", "(+tre"];

	var_chinese = "皇家剧院";

	goto labelFunc0334_09FA;
labelFunc0334_01E8:
	if (!(var0001 == 0x0003)) goto labelFunc0334_0201;
	var000A = ["FELLOWSHIP", "HALL"];

	var_chinese = "友谊会大厅";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0201:
	if (!(var0001 == 0x0004)) goto labelFunc0334_021D;
	var000A = ["TEST", "OF", "STRENGTH"];

	var_chinese = "力量测试";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_021D:
	if (!(var0001 == 0x0005)) goto labelFunc0334_0236;
	var000A = ["MEDITATION", "RETREAT"];

	var_chinese = "冥想静修所";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0236:
	if (!(var0001 == 0x0006)) goto labelFunc0334_024F;
	var000A = ["SHRINE OF", "THE CODEX"];

	var_chinese = "法典神殿";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_024F:
	if (!(var0001 == 0x0007)) goto labelFunc0334_026E;
	var000A = ["hammer", "here", "to", "enter"];

	var_chinese = "锻打锤炼，必备之物";

	goto labelFunc0334_09FA;
labelFunc0334_026E:
	if (!(var0001 == 0x0008)) goto labelFunc0334_029C;
	var000A = ["pick|item", "carefully", "to|k)p", "goi*"];
	var_chinese = "无匙之锁，一挑即破";
	Func08FF(["「天啊，我觉得你找到方法了！」", "「铭板似乎变了！」", "快看看吧！"]);
	goto labelFunc0334_09FA;
labelFunc0334_029C:
	if (!(var0001 == 0x0009)) goto labelFunc0334_02BB;
	var000A = ["a|golden", "ring|of", "tru(", "faces|()"];

	var_chinese = "金身圆环，指尖套牢";

	goto labelFunc0334_09FA;
labelFunc0334_02BB:
	if (!(var0001 == 0x000A)) goto labelFunc0334_02DA;
	var000A = ["grasp", "not", "at", "(r+ds"];

	var_chinese = "千丝万缕，绕于木心";

	goto labelFunc0334_09FA;
labelFunc0334_02DA:
	if (!(var0001 == 0x000B)) goto labelFunc0334_02FC;
	var000A = ["(e", "royal|mint", "shall|not", "hold|()", "back"];

	var_chinese = "定价万物，买卖之本";

	goto labelFunc0334_09FA;
labelFunc0334_02FC:
	if (!(var0001 == 0x000C)) goto labelFunc0334_030F;
	var000A = "GO THIS WAY";

	var_chinese = "走这边";

	goto labelFunc0334_09FA;
labelFunc0334_030F:
	if (!(var0001 == 0x000D)) goto labelFunc0334_032B;
	var000A = ["DO NOT", "GO", "THIS WAY"];

	var_chinese = "不要走这边";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_032B:
	if (!(var0001 == 0x000E)) goto labelFunc0334_034A;
	var000A = ["DO NOT GO", "IN", "THE", "WOODEN DOOR"];

	var_chinese = "不要进入木门";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_034A:
	if (!(var0001 == 0x000F)) goto labelFunc0334_036C;
	var000A = ["DO NOT", "GO IN", "THE", "WINDOWED", "DOOR"];

	var_chinese = "不要进入有窗户的门";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_036C:
	if (!(var0001 == 0x0010)) goto labelFunc0334_038E;
	var000A = ["GO", "IN", "THE", "STEEL", "DOOR"];

	var_chinese = "进入钢铁门";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_038E:
	if (!(var0001 == 0x0011)) goto labelFunc0334_03AD;
	var000A = ["DO NOT", "GO", "IN THE", "GREEN DOOR"];

	var_chinese = "不要进入绿色门";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_03AD:
	if (!(var0001 == 0x0012)) goto labelFunc0334_03CF;
	var000A = ["ONLY", "ONE", "OF THESE", "SIGNS", "IS TRUE"];

	var_chinese = "这些招牌中只有一个是真的";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_03CF:
	if (!(var0001 == 0x0013)) goto labelFunc0334_03EE;
	var000A = ["AT LEAST", "TWO SIGNS", "ARE", "FALSE"];

	var_chinese = "至少有两个招牌是假的";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_03EE:
	if (!(var0001 == 0x0014)) goto labelFunc0334_0407;
	var000A = ["NATIONAL", "BRANCH"];

	var_chinese = "总　会";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0407:
	if (!(var0001 == 0x0015)) goto labelFunc0334_0423;
	var000A = ["ART THOU", "AN", "AVATAR?"];

	var_chinese = "你是圣者吗？";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0423:
	if (!(var0001 == 0x0016)) goto labelFunc0334_0442;
	var000A = ["RESERVE", "THY", "SEATS", "NOW!"];

	var_chinese = "现在就预订你的座位！";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0442:
	if (!(var0001 == 0x0017)) goto labelFunc0334_0464;
	var000A = ["THE BONES OF", "ZOG:", "EARLIEST", "BRITANNIAN", "FOSSIL"];

	var_chinese = "佐格之骨：最早的不列颠尼亚化石";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0464:
	if (!(var0001 == 0x0018)) goto labelFunc0334_0483;
	var000A = ["SWAMP BOOTS", "ONCE WORN", "BY THE", "AVATAR"];

	var_chinese = "圣者曾经穿过的沼泽靴";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0483:
	if (!(var0001 == 0x0019)) goto labelFunc0334_04A2;
	var000A = ["MANITTZI'S", "HARPSICORD", "USED WHILE", "COMPOSING"];

	var_chinese = "曼尼兹作曲时使用的羽管键琴";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_04A2:
	if (!(var0001 == 0x001A)) goto labelFunc0334_04BE;
	var000A = ["|ANIA", "OF", "SPRING|"];

	var_chinese = "春天的阿尼亚";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_04BE:
	if (!(var0001 == 0x001B)) goto labelFunc0334_04DD;
	var000A = ["|marney|", "skara|braes", "fine,", "flower"];

	var_chinese = "玛妮史卡拉布莱最美的花朵";

	goto labelFunc0334_09FA;
labelFunc0334_04DD:
	if (!(var0001 == 0x001C)) goto labelFunc0334_04F9;
	var000A = ["(e", "wayfarers", "inn"];

	var_chinese = "旅人旅馆";

	goto labelFunc0334_09FA;
labelFunc0334_04F9:
	if (!(var0001 == 0x001D)) goto labelFunc0334_0515;
	var000A = ["(e", "blue", "boar"];

	var_chinese = "蓝野猪酒馆";

	goto labelFunc0334_09FA;
labelFunc0334_0515:
	if (!(var0001 == 0x001E)) goto labelFunc0334_052E;
	var000A = ["royal", "museum"];

	var_chinese = "皇家博物馆";

	goto labelFunc0334_09FA;
labelFunc0334_052E:
	if (!(var0001 == 0x001F)) goto labelFunc0334_054A;
	var000A = ["(e", "music", "hall"];

	var_chinese = "音乐厅";

	goto labelFunc0334_09FA;
labelFunc0334_054A:
	if (!(var0001 == 0x0020)) goto labelFunc0334_0563;
	var000A = ["town", "hall"];

	var_chinese = "市政厅";

	goto labelFunc0334_09FA;
labelFunc0334_0563:
	if (!(var0001 == 0x0021)) goto labelFunc0334_057C;
	var000A = ["royal", "mint"];

	var_chinese = "皇家铸币厂";

	goto labelFunc0334_09FA;
labelFunc0334_057C:
	if (!(var0001 == 0x0022)) goto labelFunc0334_059E;
	var000A = ["THE", "THRONE", "OF", "MANY", "CHANGES"];

	var_chinese = "万变王座";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_059E:
	if (!(var0001 == 0x0023)) goto labelFunc0334_05BD;
	var000A = ["THE", "THRONE", "OF", "VIRTUE"];

	var_chinese = "美德王座";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_05BD:
	if (!(var0001 == 0x0024)) goto labelFunc0334_05D9;
	var000A = ["LORD", "BRITISH'S", "MUSKET"];

	var_chinese = "不列颠王的火枪";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_05D9:
	if (!(var0001 == 0x0025)) goto labelFunc0334_05F8;
	var000A = ["THE", "STONES", "OF", "VIRTUE"];

	var_chinese = "美德之石";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_05F8:
	if (!(var0001 == 0x0026)) goto labelFunc0334_061A;
	var000A = ["SILVER", "HORN", "ONCE USED", "BY THE", "GARGOYLES"];

	var_chinese = "石像鬼曾经使用过的银号角";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_061A:
	if (!(var0001 == 0x0027)) goto labelFunc0334_0639;
	var000A = ["TO SUMMON", "THE", "SILVER", "SNAKES"];

	var_chinese = "召唤银蛇";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0639:
	if (!(var0001 == 0x0028)) goto labelFunc0334_065B;
	var000A = ["THE ANKH", "", "SYMBOL OF", "THE", "VIRTUES"];

	var_chinese = "十字圣架 —— 美德的象征";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_065B:
	if (!(var0001 == 0x0029)) goto labelFunc0334_0674;
	var000A = ["LORD", "BRITISH"];

	var_chinese = "不列颠王";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0674:
	if (!(var0001 == 0x002A)) goto labelFunc0334_068D;
	var000A = ["THE", "AVATAR"];

	var_chinese = "圣者";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_068D:
	if (!(var0001 == 0x002B)) goto labelFunc0334_06A9;
	var000A = ["THE", "VORTEX", "CUBE"];

	var_chinese = "漩涡方块";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_06A9:
	if (!(var0001 == 0x002C)) goto labelFunc0334_06CB;
	var000A = ["THE", "RUNES", "OF", "THE", "VIRTUES"];

	var_chinese = "美德卢恩石";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_06CB:
	if (!(var0001 == 0x002D)) goto labelFunc0334_06ED;
	var000A = ["(e", "game", "of", "knights", "bridge"];

	var_chinese = "骑士桥游戏";

	goto labelFunc0334_09FA;
labelFunc0334_06ED:
	if (!(var0001 == 0x002E)) goto labelFunc0334_0706;
	var000A = ["DO NOT", "ENTER"];

	var_chinese = "禁止进入";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0706:
	if (!(var0001 == 0x002F)) goto labelFunc0334_0728;
	var000A = ["blow", "horn", "to", "summon", "ferry"];

	var_chinese = "吹响号角以召唤渡船";

	goto labelFunc0334_09FA;
labelFunc0334_0728:
	if (!(var0001 == 0x0030)) goto labelFunc0334_07F7;
	var0008 = UI_get_object_position(item);
	var000B = UI_get_object_position(0xFFE9);
	if (!((Func0932((var0008[0x0001] - var000B[0x0001])) <= 0x0002) && (Func0932((var0008[0x0002] - var000B[0x0002])) <= 0x0002))) goto labelFunc0334_07DC;
	var0007 = UI_execute_usecode_array(item, [(byte)0x55, 0x0609, (byte)0x55, 0x0609, (byte)0x55, 0x0609, (byte)0x2D]);
	var0007 = UI_execute_usecode_array(0xFFE9, [(byte)0x27, 0x0003, (byte)0x58, 0x0013, (byte)0x61, (byte)0x6D, (byte)0x58, 0x0056, (byte)0x01, (byte)0x6E, (byte)0x55, 0x0334]);
	Func08FE(["", "他死了，圣者！", "@Yancey-Hausman 必将付出代价@"]);
	var0007 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x56, 0x001A]);
	return;
	goto labelFunc0334_07F7;
labelFunc0334_07DC:
	var000A = ["THE", "THRONE", "ROOM", "OF", "LORD", "BRITISH"];

	var_chinese = "不列颠王的王座厅";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_07F7:
	if (!(var0001 == 0x0031)) goto labelFunc0334_0819;
	var000A = ["SEE IF", "THOU ART", "THE NEXT", "LORD OF", "BRITANNIA"];

	var_chinese = "你是下一任不列颠尼亚之王吗？";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0819:
	if (!(var0001 == 0x0032)) goto labelFunc0334_083B;
	var000A = ["in", "lovi*", "memory", "of", "mama"];

	var_chinese = "怀着对妈妈的爱与回忆";

	goto labelFunc0334_09FA;
labelFunc0334_083B:
	if (!(var0001 == 0x0033)) goto labelFunc0334_0857;
	var000A = ["BEWARE", "THE", "DRAGON"];

	var_chinese = "小心恶龙";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_0857:
	if (!(var0001 == 0x0034)) goto labelFunc0334_0879;
	var000A = ["for", "(e", "love", "of", "marney"];

	var_chinese = "为了玛妮的爱";

	goto labelFunc0334_09FA;
labelFunc0334_0879:
	if (!(var0001 == 0x0035)) goto labelFunc0334_089B;
	var000A = ["|j|r|r|t|", "a|gr+t", "man", "a|gr+t", "writer"];

	var_chinese = "J.R.R.T. 伟大的人，伟大的作家";

	goto labelFunc0334_09FA;
labelFunc0334_089B:
	if (!(var0001 == 0x0036)) goto labelFunc0334_08B7;
	var000A = ["THE", "BRITANNIAN", "LENS"];

	var_chinese = "不列颠尼亚透镜";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_08B7:
	if (!(var0001 == 0x0037)) goto labelFunc0334_08D3;
	var000A = ["THE", "GARGOYLE", "LENS"];

	var_chinese = "石像鬼透镜";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_08D3:
	if (!(var0001 == 0x0038)) goto labelFunc0334_08EC;
	var000A = ["EX", "POR"];

	var_chinese = "开锁";

	is_runic = false;

	goto labelFunc0334_09FA;
labelFunc0334_08EC:
	if (!(var0001 == 0x0039)) goto labelFunc0334_090B;
	var000A = ["(e", "te,", "of", "love"];

	var_chinese = "爱之测试";

	goto labelFunc0334_09FA;
labelFunc0334_090B:
	if (!(var0001 == 0x003A)) goto labelFunc0334_092A;
	var000A = ["(e", "te,", "of", "courage"];

	var_chinese = "勇气测试";

	goto labelFunc0334_09FA;
labelFunc0334_092A:
	if (!(var0001 == 0x003B)) goto labelFunc0334_0949;
	var000A = ["nor(", "is", "(e", "way"];

	var_chinese = "往北走";

	goto labelFunc0334_09FA;
labelFunc0334_0949:
	if (!(var0001 == 0x003C)) goto labelFunc0334_0965;
	var000A = ["tru(", "is", "tru("];

	var_chinese = "真相就是真相";

	goto labelFunc0334_09FA;
labelFunc0334_0965:
	if (!(var0001 == 0x003D)) goto labelFunc0334_0984;
	var000A = ["only", "app+rances", "are", "deceptive"];

	var_chinese = "只有外表是骗人的";

	goto labelFunc0334_09FA;
labelFunc0334_0984:
	if (!(var0001 == 0x003E)) goto labelFunc0334_099D;
	var000A = ["well", "done"];

	var_chinese = "做得好";

	goto labelFunc0334_09FA;
labelFunc0334_099D:
	if (!(var0001 == 0x003F)) goto labelFunc0334_09BC;
	var000A = ["(e", "keys", "of", "tru("];

	var_chinese = "真相之钥";

	goto labelFunc0334_09FA;
labelFunc0334_09BC:
	if (!(var0001 == 0x0040)) goto labelFunc0334_09DB;
	var000A = ["tru,|not", "always|(e", "obvious", "path"];

	var_chinese = "真相并不总是显而易见的";

	goto labelFunc0334_09FA;
labelFunc0334_09DB:
	if (!(var0001 == 0x0041)) goto labelFunc0334_09FA;
	var000A = ["(ou", "do,|not", "wish|to", "see|(is"];

	var_chinese = "你不会想看这个的";

	goto labelFunc0334_09FA;
labelFunc0334_09FA:
	var has_magic_book = UI_count_objects(0xFE9B, 0x0282, 149, 0);
	
	if (has_magic_book == 0 && var_chinese != "") {
		UI_display_runes(0x0033, var000A);
		if (is_runic) {
			runic_first_click();
		}
	} else if (has_magic_book > 0 && var_chinese != "") {
		UI_show_npc_face(UI_get_avatar_ref(), 0);
		message("铭文悄然消散，化为熟悉文本：「" + var_chinese + "」");
		UI_display_runes(0x0033, var000A);
		UI_remove_npc_face(UI_get_avatar_ref());
	} else {
		UI_display_runes(0x0033, var000A);
	}
	return;
}


