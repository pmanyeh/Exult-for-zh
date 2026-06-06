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
	var0002 = "暫時不用";
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
	message("「祝您身體健康，先生。您的眉宇間顯露著飽經沙場的風霜，這真是我的榮幸。」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「聖者，我對這位陌生人是越看越順眼。他肯定能成為一位極好的旅伴。」");
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
	message("「噢，拜託。」");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	var000E = Func090F(var000D);
	message("「安靜，");
	message(var000E);
	message("。」");
	say();
labelFunc08F5_010C:
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_011E:
	if (!(var000B == 0xFFFD)) goto labelFunc08F5_014C;
	message("「你好嗎，Shamino？你的荒野求生本領在 Britannia 可是赫赫有名。」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「名聲總是伴隨著與聖者同行的人。謝謝你。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
	var0007 = true;
labelFunc08F5_014C:
	if (!(var000B == 0xFFFE)) goto labelFunc08F5_0192;
	message("「你好，年輕人。像你這麼年輕的孩子，怎麼會加入這樣的隊伍？」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我是個孤兒！我的父親慘遭謀殺，屍體在 Trinsic 的馬廄裡被殘忍肢解。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「那真是個悲慘的故事！但悲慟的時間想必已經過去。你現在與一群偉大的同伴同行。」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「你說得對。我一定要將殺害我父親的兇手繩之以法，否則誓不罷休。」");
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
	var000F = ["你今天看起來氣色真好。", "祝你身體健康。", "願好運與你同在。"];
	var0010 = var000F[UI_die_roll(0x0001, 0x0003)];
	message("「");
	message(var0010);
	message("」");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("「很高興認識你。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	var000C = true;
labelFunc08F5_01F1:
	if (!(var0007 && (!gflags[0x0161]))) goto labelFunc08F5_0220;
	message("「不過，我剛才是不是聽見你們提到『聖者』？可別告訴我，你們的首領就是那位——真正的——聖者！」");
	say();
	UI_show_npc_face(var000B, 0x0000);
	message("「這的確是真的。」");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("「能見到您真是我的榮幸，聖者。」");
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