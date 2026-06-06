#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08DB 0x8DB ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = [0x0019, 0x002D, 0x0041, 0x0055, 0x0073, 0x0087, 0x009B, 0x00B9];
labelFunc08DB_0026:
	if (!var0000) goto labelFunc08DB_02C0;
	message("「你想研究哪一環的法術？」");
	say();
	var0002 = Func090C(["再看看", "First (第一環)", "Second (第二環)", "Third (第三環)", "Fourth (第四環)", "Fifth (第五環)", "Sixth (第六環)", "Seventh (第七環)", "Eighth (第八環)"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08DB_006B;
	goto labelFunc08DB_02C0;
labelFunc08DB_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08DB_00A2;
	var0003 = ["再看看", "Cure (醫療)", "Detect Trap (偵測陷阱)", "Light (亮光術)", "Awaken (喚醒眾人)"];
	var0004 = [0x0000, 0x0009, 0x000A, 0x000D, 0x000F];
	goto labelFunc08DB_0216;
labelFunc08DB_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08DB_00D9;
	var0003 = ["再看看", "Destroy Trap (摧毀陷阱)", "Fire Blast (火焰術)", "Great Light (大光亮術)", "Telekinesis (遙控術)"];
	var0004 = [0x0000, 0x0010, 0x0012, 0x0013, 0x0016];
	goto labelFunc08DB_0216;
labelFunc08DB_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08DB_0110;
	var0003 = ["再看看", "Curse (詛咒術)", "Heal (醫療術)", "Paralyze (麻痺術)", "Poison (撒毒術)"];
	var0004 = [0x0000, 0x0018, 0x0019, 0x001C, 0x001E];
	goto labelFunc08DB_0216;
labelFunc08DB_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08DB_0147;
	var0003 = ["再看看", "Lightning (霹靂閃電)", "Mark (標記術)", "Recall (喚回術)", "Seance (降神術)"];
	var0004 = [0x0000, 0x0021, 0x0022, 0x0024, 0x0026];
	goto labelFunc08DB_0216;
labelFunc08DB_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08DB_017E;
	var0003 = ["再看看", "Charm (迷惑術)", "Dance (狂舞術)", "Explosion (爆炸術)", "Great Heal (大治療術)"];
	var0004 = [0x0000, 0x0028, 0x0029, 0x002B, 0x002C];
	goto labelFunc08DB_0216;
labelFunc08DB_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08DB_01B5;
	var0003 = ["再看看", "Clone (複製隊員)", "Magic Storm (魔法風暴)", "Poison Field (毒性力場)", "Sleep Field (催眠力場)"];
	var0004 = [0x0000, 0x0031, 0x0034, 0x0035, 0x0036];
	goto labelFunc08DB_0216;
labelFunc08DB_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08DB_01EC;
	var0003 = ["再看看", "Create Gold (製金術)", "Delayed Blast (延遲爆炸術)", "Mass Charm (大迷惑術)", "Restoration (回複術)"];
	var0004 = [0x0000, 0x0038, 0x003A, 0x003D, 0x003F];
	goto labelFunc08DB_0216;
labelFunc08DB_01EC:
	var0003 = ["再看看", "Armageddon (末日決戰)", "Resurrect (復活術)", "Summon (招喚術)", "Swordstrike (劍擊術)"];
	var0004 = [0x0000, 0x0040, 0x0044, 0x0045, 0x0046];
labelFunc08DB_0216:
	message("「你想買什麼法術？」");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc08DB_0234;
	message("「好的。」");
	say();
	goto labelFunc08DB_02C0;
labelFunc08DB_0234:
	var0006 = var0004[var0005];
	var0007 = var0001[var0002];
	var0008 = var0003[var0005];
	message("「");
	message(var0008);
	message(" 法術需要花費 ");
	message(var0007);
	message(" 枚金幣。\"");
	say();
	var0009 = Func0923(var0006, var0007);
	if (!(var0009 == 0x0001)) goto labelFunc08DB_027C;
	message("「完成！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08DB_0291;
	message("「你沒有法術書。」");
	say();
	var0000 = false;
	goto labelFunc08DB_02C0;
labelFunc08DB_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08DB_02A2;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08DB_02B3;
	message("「你已經擁有那個法術了！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02B3:
	message("「你還想要其他的法術嗎？」");
	say();
	var0000 = Func090A();
	goto labelFunc08DB_0026;
labelFunc08DB_02C0:
	UI_pop_answers();
	return;
}


