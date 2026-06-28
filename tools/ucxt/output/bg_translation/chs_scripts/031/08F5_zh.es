#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func093C 0x93C (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090F 0x90F (var var0000);

var Func08F5 0x8F5 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	UI_push_answers();
	var0002 = "暂时不用";
	var0003 = [];
	enum();
labelFunc08F5_0011:
	for (var0006 in var0001 with var0004 to var0005) attend labelFunc08F5_002D;
	var0003 = (var0003 & UI_get_npc_name(var0006));
	goto labelFunc08F5_0011;
labelFunc08F5_002D:
	var0003 = (var0003 & var0002);
	var0007 = false;
	var0008 = UI_get_array_size(var0003);
labelFunc08F5_0045:
	if (!(var0008 > 0x0001)) goto labelFunc08F5_0234;
	var0009 = Func090C(var0003);
	if (!(var0009 == var0008)) goto labelFunc08F5_0065;
	goto labelFunc08F5_0234;
labelFunc08F5_0065:
	var000A = var0001[var0009];
	var000B = UI_get_npc_number(var000A);
	var0001 = Func093C(var000A, var0001);
	var0003 = Func093C(var0003[var0009], var0003);
	var000C = false;
	if (!(var000B == 0xFFFF)) goto labelFunc08F5_011E;
	message("「祝您身体健康，先生。您的眉宇间显露着饱经沙场的风霜，这真是我的荣幸。」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「圣者，我对这位陌生人是越看越顺眼。他肯定能成为一位极好的旅伴。」");
	say();
	var000D = 0x0000;
	if (!Func08F7(0xFFFD)) goto labelFunc08F5_00C8;
	var000D = 0xFFFD;
labelFunc08F5_00C8:
	if (!Func08F7(0xFFFC)) goto labelFunc08F5_00D7;
	var000D = 0xFFFC;
labelFunc08F5_00D7:
	if (!(var000D != 0x0000)) goto labelFunc08F5_010C;
	UI_show_npc_face(var000D, 0x0000);
	message("「噢，拜托。」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	var000E = Func090F(var000D);
	message("「安静，");
	message(var000E);
	message("。」");
	say();
labelFunc08F5_010C:
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_011E:
	if (!(var000B == 0xFFFD)) goto labelFunc08F5_014C;
	message("「你好吗，Shamino？你的荒野求生本领在不列颠尼亚可是赫赫有名。」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「名声总是伴随着与圣者同行的人。谢谢你。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_014C:
	if (!(var000B == 0xFFFE)) goto labelFunc08F5_0192;
	message("「你好，年轻人。像你这么年轻的孩子，怎么会加入这样的队伍？」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我是个孤儿！我的父亲惨遭谋杀，尸体在 Trinsic 的马厩里被残忍肢解。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「那真是个悲惨的故事！但悲恸的时间想必已经过去。你现在与一群伟大的同伴同行。」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「你说得对。我一定要将杀害我父亲的凶手绳之以法，否则誓不罢休。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
labelFunc08F5_0192:
	if (!(!var000C)) goto labelFunc08F5_01F1;
	var000E = Func090F(var000A);
	message("「你好，");
	message(var000E);
	message("。」");
	say();
	var000F = ["你今天看起来气色真好。", "祝你身体健康。", "愿好运与你同在。"];
	var0010 = var000F[UI_die_roll(0x0001, 0x0003)];
	message("「");
	message(var0010);
	message("」");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("「很高兴认识你。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
labelFunc08F5_01F1:
	if (!(var0007 && (!gflags[0x0161]))) goto labelFunc08F5_0220;
	message("「不过，我刚才是不是听见你们提到『圣者』？可别告诉我，你们的首领就是那位——真正的——圣者！」");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("「这的确是真的。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「能见到您真是我的荣幸，圣者。」");
	say();
	gflags[0x0161] = true;
labelFunc08F5_0220:
	UI_remove_npc_face(var000B);
	var0008 = UI_get_array_size(var0003);
	goto labelFunc08F5_0045;
labelFunc08F5_0234:
	UI_pop_answers();
	if (!(var0008 == 0x0001)) goto labelFunc08F5_0246;
	gflags[0x015F] = true;
labelFunc08F5_0246:
	return var0001;
	return 0;
}
