#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042C object#(0x42C) ()
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

	if (!(event == 0x0001)) goto labelFunc042C_0287;
	UI_show_npc_face(0xFFD4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x007A]) goto labelFunc042C_005A;
	UI_add_answer("Nell 懷孕");
labelFunc042C_005A:
	if (!gflags[0x0089]) goto labelFunc042C_0067;
	UI_add_answer("Charles 很生氣");
labelFunc042C_0067:
	if (!(!gflags[0x00AD])) goto labelFunc042C_0079;
	message("你看見一位打扮浮誇的紳士。他非常開朗外向，面帶微笑揮手向你致意。");
	say();
	gflags[0x00AD] = true;
	goto labelFunc042C_008B;
labelFunc042C_0079:
	if (!(!var0003)) goto labelFunc042C_0087;
	message("「眨眼間，一句話，~向您致意，大人哪。」");
	say();
	goto labelFunc042C_008B;
labelFunc042C_0087:
	message("「在此吉日，向您致意，~這是我的榮幸，女士。」");
	say();
labelFunc042C_008B:
	converse attend labelFunc042C_0282;
	case "姓名" attend labelFunc042C_00A1:
	message("「從破曉時分，太陽初升起，~直到隔日清晨，月亮漸隱去，~我聽候您的吩咐與呼喚，~您卑微的僕人， Carrocio ！」");
	say();
	UI_remove_answer("姓名");
labelFunc042C_00A1:
	case "職業" attend labelFunc042C_00CC:
	message("「我揭開木偶戲的布幕，~故事從我手中娓娓道出，~為男孩女孩帶來歡樂，~觀賞只需一枚金幣付。~要衡量你的力量多大，~在美德之心的烈火中鍛打，~此時此刻來敲響那鐘，~測試你的力氣直到肌肉痠痛。」");
	say();
	if (!(!var0003)) goto labelFunc042C_00B8;
	message("「或許還能讓你的心上人印象深刻！」 Carrocio 向你眨眼。");
	say();
labelFunc042C_00B8:
	message("「或者你想要成為國王？~那邊有把插在石中的劍。~只要你能把它拔出來，~你就會是下一個登上王座的人！」");
	say();
	UI_add_answer(["木偶戲", "看戲", "力量測試"]);
labelFunc042C_00CC:
	case "木偶戲" attend labelFunc042C_00EC:
	message("「我童年的眼看著父親辛勤工作，~一場華麗如皇家的木偶戲。~時光飛逝，父親已離去，~孩子已長大，懊悔不已，~齒輪與飛輪如今轉動著木偶，不再需要任何人，~所以我獨自讓他的嘉年華之歌一直播送下去。」");
	say();
	UI_remove_answer("木偶戲");
	UI_add_answer(["懊悔", "齒輪與飛輪"]);
labelFunc042C_00EC:
	case "力量測試" attend labelFunc042C_0111:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_0106;
	message("「很抱歉地說~我今天已經打烊。~請到場地來測試你的體能~當我，是的的確，開門營業時。」");
	say();
	goto labelFunc042C_010A;
labelFunc042C_0106:
	message("「拿起槌子往地上敲一擊，~如果你的雙臂充滿力量，你就會聽到清脆的鐘聲。~如果你敲擊後什麼也沒聽到，你就知道你的力氣正在衰退。~但如果你贏了力量測試遊戲，你將會得到一隻絨毛龍。」");
	say();
labelFunc042C_010A:
	UI_remove_answer("力量測試");
labelFunc042C_0111:
	case "齒輪與飛輪" attend labelFunc042C_0124:
	message("「我擔心我的家族手藝會終結，那是用心來經營的表演，~但骨頭會老化，機器則不會，而我們不能輕易地更換零件。~我盡我所能地繼續下去，用機器來扮演我父親的角色，~在看不見的地方控制著懸絲木偶，努力為它們注入靈魂。」");
	say();
	UI_remove_answer("齒輪與飛輪");
labelFunc042C_0124:
	case "懊悔" attend labelFunc042C_0147:
	message("「那些壓向我的臉孔，轉瞬即逝的歡樂時光，從低賤的乞丐到王座上的居民，~每個人都知道自己的位置，並讓我去尋找那個屬於我的人，那個可以分享我生命的女人，這顆孤獨等待的心。」");
	say();
	UI_remove_answer("懊悔");
	UI_add_answer(["低賤乞丐", "王座居民", "女人"]);
labelFunc042C_0147:
	case "低賤乞丐" attend labelFunc042C_015A:
	message("「一個名叫 Snaz 的乞丐會來看我的表演，~偷走並賣掉我所有最好的笑話，他是我個人的宿敵。」");
	say();
	UI_remove_answer("低賤乞丐");
labelFunc042C_015A:
	case "王座居民" attend labelFunc042C_016D:
	message("「你的無知讓我感到不安，~你肯定聽說過睿智的不列顛王。」");
	say();
	UI_remove_answer("王座居民");
labelFunc042C_016D:
	case "女人" attend labelFunc042C_0187:
	message("「我心中田園詩的覺醒，~就在我身下，因為我依然看著她，~沒有任何吟遊詩人能描述或訴說，~我美麗 Nell 的溫柔。」");
	say();
	UI_remove_answer("女人");
	UI_add_answer("Nell");
labelFunc042C_0187:
	case "Nell" attend labelFunc042C_01A7:
	message("「據說愛是位熾熱的天使，~乘著純粹救贖的柔軟絲翼，~我木偶般的心靜如鐵砧，~在她關注的邪惡刺激下顫動。~我被我的天使 Nell 膏抹，~卑微的懦弱被激情的利刃擊倒，~我因此被指定為她的愛人，~或許是命運促成了這段婚姻。」");
	say();
	UI_remove_answer("Nell");
	UI_add_answer(["邪惡刺激", "婚姻"]);
labelFunc042C_01A7:
	case "邪惡刺激" attend labelFunc042C_01BA:
	message("Carrocio 看起來彷彿陷入了回憶。過了一會兒，他回過神來。~~「如果我再多說這件事，我就不是個紳士了，請原諒我敞開心扉的坦率。」~他顯得有些尷尬，並大聲清了幾次喉嚨。");
	say();
	UI_remove_answer("邪惡刺激");
labelFunc042C_01BA:
	case "婚姻" attend labelFunc042C_01DA:
	message("「我的硬幣是急於兌現的箭，~直到珠寶商賣出戒指的那天，~因為我堅定的心並非木頭雕刻，~而她卻在照顧國王的床鋪。」");
	say();
	UI_remove_answer("婚姻");
	if (!gflags[0x007A]) goto labelFunc042C_01DA;
	UI_add_answer("Nell 懷孕");
labelFunc042C_01DA:
	case "Nell 懷孕" attend labelFunc042C_0215:
	message("Carrocio 震驚地看著你，並跪在你面前。「我懇求你，");
	message(var0000);
	message("，~請保持沉默，~我的 Nell 從未傷害過任何人，~透過城裡喋喋不休的嘴唇傳開我們的秘密，將會對她的名譽造成嚴重的傷害，~那將會永久終結我的職業，~並扼殺我們對幸福生活的希望。」他用懇求的眼神看著你。「我必須將我的希望和信任寄託在你身上，~全部的一切。~永遠不要再談論我慾望的戰利品，~你絕對不能告訴任何人！」");
	say();
	if (!(!gflags[0x0089])) goto labelFunc042C_020E;
	message("你看著他，等待某種指示。你會為他保守秘密嗎？");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc042C_020A;
	message("「你與榮耀同行，~我知道你不會說出去，~我不介意尊嚴受損，~我唯一關心的是 Nell 。」");
	say();
	goto labelFunc042C_020E;
labelFunc042C_020A:
	message("「重新考慮吧，我必須堅持，你太不顧及別人了，~如果他知道， Nell 的哥哥會殺了我，~而我不願看到 Nell 在有機會成為新娘前就成了寡婦。」");
	say();
labelFunc042C_020E:
	UI_remove_answer("Nell 懷孕");
labelFunc042C_0215:
	case "Charles 很生氣" attend labelFunc042C_0222:
	message("「我很感激你誠實地表達了你的不在乎，~但你為何要把自己置於我們這段感情的中心？~為了 Nell 的緣故，我無法忍心傷害她的哥哥，~我會說服他我的意圖，~我只愛 Nell ，別無他人。~現在請離開，我必須利用這段時間好好準備。」");
	say();
	abort;
labelFunc042C_0222:
	case "看戲" attend labelFunc042C_0274:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_023C;
	message("「很抱歉地說~我今天已經打烊。~請在破曉時分來到場地~當木偶們，是的的確，已經起床並清醒時。」");
	say();
	goto labelFunc042C_026C;
labelFunc042C_023C:
	message("「來看看愚蠢的驕傲與愛、殘暴與罪惡， Carrocio 的微小木偶世界，~足以讓你倒抽一口氣、哭泣或咧嘴笑，~所有想看的人，現在是聽我呼喚的時候了，~因為現在木偶戲即將開始！」*");
	say();
	var0006 = UI_find_nearby_avatar(0x01F7);
	UI_halt_scheduled(var0006[0x0001]);
	var0007 = UI_delayed_execute_usecode_array(var0006[0x0001], [(byte)0x55, 0x01F7], 0x000F);
labelFunc042C_026C:
	UI_remove_answer("看戲");
	abort;
labelFunc042C_0274:
	case "告辭" attend labelFunc042C_027F:
	goto labelFunc042C_0282;
labelFunc042C_027F:
	goto labelFunc042C_008B;
labelFunc042C_0282:
	endconv;
	message("「或許能在慈悲之耳中，找到一個如溫柔朋友般的聲音，~祝你一切順利，但也請記得回來，如果你想再次觀賞木偶戲或測試你的力量。」");
	say();
labelFunc042C_0287:
	if (!(event == 0x0000)) goto labelFunc042C_0330;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc042C_032A;
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc042C_0327;
	if (!(var0008 == 0x0001)) goto labelFunc042C_02ED;
	var0009 = "@來看看木偶！@";
labelFunc042C_02ED:
	if (!(var0008 == 0x0002)) goto labelFunc042C_02FD;
	var0009 = "@你能敲響鐘嗎？@";
labelFunc042C_02FD:
	if (!(var0008 == 0x0003)) goto labelFunc042C_030D;
	var0009 = "@下場表演即將開始！@";
labelFunc042C_030D:
	if (!(var0008 == 0x0004)) goto labelFunc042C_031D;
	var0009 = "@來衡量你的力量！@";
labelFunc042C_031D:
	UI_item_say(0xFFD4, var0009);
labelFunc042C_0327:
	goto labelFunc042C_0330;
labelFunc042C_032A:
	Func092E(0xFFD4);
labelFunc042C_0330:
	return;
}


