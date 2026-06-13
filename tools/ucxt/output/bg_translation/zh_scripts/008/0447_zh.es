#game "blackgate"
// externs
extern void Func092F 0x92F (var var0000);

void Func0447 object#(0x447) ()
{
	if (!(event == 0x0001)) goto labelFunc0447_018B;
	UI_show_npc_face(0xFFB9, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00C8])) goto labelFunc0447_0038;
	message("一隻有翼石像鬼帶著興趣和明顯的智慧看著你。");
	say();
	message("「歡迎你來到 Britain ，聖者！」");
	say();
	gflags[0x00C8] = true;
	goto labelFunc0447_003C;
labelFunc0447_0038:
	message("「再次向你問好，聖者！」 Inwisloklem 微笑著。");
	say();
labelFunc0447_003C:
	converse attend labelFunc0447_0186;
	case "姓名" attend labelFunc0447_0059:
	message("「我是 Inwisloklem 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Inwisloklem");
labelFunc0447_0059:
	case "Inwisloklem" attend labelFunc0447_006C:
	message("「在你們的語言中是『翻譯官』的意思。」");
	say();
	UI_remove_answer("Inwisloklem");
labelFunc0447_006C:
	case "職業" attend labelFunc0447_0085:
	message("「確實在我的家鄉是名翻譯官。現在在大議會服侍我們最尊貴的統治者 Lord British 。很榮幸能成為議會中的兩名石像鬼之一。」");
	say();
	UI_add_answer(["石像鬼", "大議會"]);
labelFunc0447_0085:
	case "石像鬼" attend labelFunc0447_00A5:
	message("「作為倖存的石像鬼之一，保存我們的遺產是我一生的工作。告訴你，我們的種族在很多很多年前移民到了 Britannia 。並定居在被稱為 Terfin 的島嶼上。」");
	say();
	UI_add_answer(["倖存", "Terfin"]);
	UI_remove_answer("石像鬼");
labelFunc0447_00A5:
	case "倖存" attend labelFunc0447_00B8:
	message("「兩百年前，我的許多同胞在『假先知之戰』中被殺害。是你為我們兩個種族帶來了和平，結束了那場戰爭。」");
	say();
	UI_remove_answer("倖存");
labelFunc0447_00B8:
	case "Terfin" attend labelFunc0447_00D8:
	message("「是個孤寂的地方。很荒涼。不是人類所謂的『舒適家園』。渴望在 Britannia 為石像鬼建立一種新的生活方式，並消除人類對我們種族的仇恨和誤解。知道無知會滋生偏見。而我是正在糾正這點的其中一人。」");
	say();
	UI_add_answer(["生活方式", "其中一人"]);
	UI_remove_answer("Terfin");
labelFunc0447_00D8:
	case "生活方式" attend labelFunc0447_00EB:
	message("「渴望一個人類和石像鬼能在 Britannia 社會中作為平等個體和平共處的世界。」");
	say();
	UI_remove_answer("生活方式");
labelFunc0447_00EB:
	case "其中一人" attend labelFunc0447_0105:
	message("「那被稱為友誼會。」");
	say();
	UI_add_answer("友誼會");
	UI_remove_answer("其中一人");
labelFunc0447_0105:
	case "友誼會" attend labelFunc0447_0118:
	message("「致力於在這片土地上促進善意與信任。正考慮盡快加入這個團體！」");
	say();
	UI_remove_answer("友誼會");
labelFunc0447_0118:
	case "大議會" attend labelFunc0447_0138:
	message("「為了制定這片土地的法律。告訴你，我的同事 Miranda 可以告訴你更多關於我們現在在做的事。不幸的是，目前大多數議會成員都不在。」");
	say();
	UI_add_answer(["Miranda", "不在"]);
	UI_remove_answer("大議會");
labelFunc0447_0138:
	case "Miranda" attend labelFunc0447_014B:
	message("「告訴你， Miranda 是一位聰明的女性，她非常關心所有 Britannia 公民的福祉。她是 Lord British 最信任的顧問之一。」");
	say();
	UI_remove_answer("Miranda");
labelFunc0447_014B:
	case "不在" attend labelFunc0447_0165:
	message("「目前在休假中。現在只有 Miranda 和我在場頒布這項新法律。」");
	say();
	UI_add_answer("法律");
	UI_remove_answer("不在");
labelFunc0447_0165:
	case "法律" attend labelFunc0447_0178:
	message("「告訴你去問 Miranda ，因為她知道得比我多。」");
	say();
	UI_remove_answer("法律");
labelFunc0447_0178:
	case "告辭" attend labelFunc0447_0183:
	goto labelFunc0447_0186;
labelFunc0447_0183:
	goto labelFunc0447_003C;
labelFunc0447_0186:
	endconv;
	message("「告辭了。」*");
	say();
labelFunc0447_018B:
	if (!(event == 0x0000)) goto labelFunc0447_0199;
	Func092F(0xFFB9);
labelFunc0447_0199:
	return;
}


