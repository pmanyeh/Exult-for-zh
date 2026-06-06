#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func08D1 0x8D1 ()
{
	var var0000;
	var var0001;

	UI_clear_answers();
	var0000 = UI_is_pc_female();
	UI_show_npc_face(0xFFE5, 0x0000);
	message("Raymundo 遞給你一份劇本，你走上了舞台中央。燈光照在你的臉上，讓你感到有些燥熱。雖然你有些緊張，但你還是清了清喉嚨，開始讀著紙上的台詞。");
	say();
	UI_add_answer(["—我—是聖者！", "我—是—聖者！", "我是—那名—聖者！", "我是—聖者—！"]);
labelFunc08D1_002C:
	converse attend labelFunc08D1_00C5;
	default(0x0001) attend labelFunc08D1_0038:
	message("「不、不、不！完全不對！你是『聖者』！你必須感覺自己就像聖者！你說話的口吻必須像聖者！你必須—成為—聖者！再試一次。」");
	say();
labelFunc08D1_0038:
	UI_clear_answers();
	UI_add_answer(["—我—是聖者！", "我—是—聖者！", "我是—那名—聖者！", "我是—聖者—！"]);
	default(0x0001) attend labelFunc08D1_0058:
	message("「好多了……好多了……但我看你或許需要一件道具。」");
	say();
labelFunc08D1_0058:
	UI_clear_answers();
	var0001 = Func08F7(0xFFE4);
	if (!var0001) goto labelFunc08D1_00A5;
	message("「Jesse，把你的長杖遞給我們的朋友。」*");
	say();
	if (!var0000) goto labelFunc08D1_008D;
	UI_show_npc_face(0xFFE4, 0x0001);
	message("「給您，女士。」*");
	say();
	UI_remove_npc_face(0xFFE4);
	goto labelFunc08D1_00A2;
labelFunc08D1_008D:
	UI_show_npc_face(0xFFE4, 0x0000);
	message("「給您，先生。」*");
	say();
	UI_remove_npc_face(0xFFE4);
labelFunc08D1_00A2:
	goto labelFunc08D1_00A9;
labelFunc08D1_00A5:
	message("Raymundo 遞給你一根長杖。");
	say();
labelFunc08D1_00A9:
	UI_show_npc_face(0xFFE5, 0x0000);
	message("手裡拿著長杖，你再次嘗試了台詞。這一次，你覺得自己像個真正的演員。台詞從你的雙唇間流瀉而出，彷彿真的是聖者在說話一樣。你感受到了一股前所未有的興奮。你喜歡上了「演戲」這件事。你渴望更多！你焦急地等待著 Raymundo 的講評……");
	say();
	message("Raymundo 接過長杖並說道：「嗯……是的，很好。謝謝你。很好。我們會再聯絡的，好嗎？謝謝你前來。如果你有履歷的話，就把它留在門口旁，好嗎？謝謝你。」*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc08D1_002C;
labelFunc08D1_00C5:
	endconv;
	return;
}