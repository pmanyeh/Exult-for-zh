#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08C3 0x8C3 ()
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
labelFunc08C3_0026:
	if (!var0000) goto labelFunc08C3_02C0;
	message("「你想研究哪一環的法術？」");
	say();
	var0002 = Func090C(["再看看", "First (第一環)", "Second (第二環)", "Third (第三環)", "Fourth (第四環)", "Fifth (第五環)", "Sixth (第六環)", "Seventh (第七環)", "Eighth (第八環)"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08C3_006B;
	goto labelFunc08C3_02C0;
labelFunc08C3_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08C3_00A2;
	var0003 = ["再看看", "Cure (醫療)", "Detect Trap (偵測陷阱)", "Great Ignite (大點燃術)", "Locate (定位術)"];
	var0004 = [0x0000, 0x0009, 0x000A, 0x000C, 0x000E];
	goto labelFunc08C3_0216;
labelFunc08C3_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08C3_00D9;
	var0003 = ["再看看", "Destroy Trap (摧毀陷阱)", "Enchant (著魔術)", "Protection (保護術)", "Wizard Eye (巫師眼)"];
	var0004 = [0x0000, 0x0010, 0x0011, 0x0015, 0x0017];
	goto labelFunc08C3_0216;
labelFunc08C3_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08C3_0110;
	var0003 = ["再看看", "Swarm (招蟲術)", "Paralyze (麻痺術)", "Peer (靈視術)", "Poison (撒毒術)"];
	var0004 = [0x0000, 0x001A, 0x001C, 0x001D, 0x001E];
	goto labelFunc08C3_0216;
labelFunc08C3_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08C3_0147;
	var0003 = ["再看看", "Mark (標記術)", "Recall (喚回術)", "Seance (降神術)", "Unlock Magic (開鎖術)"];
	var0004 = [0x0000, 0x0022, 0x0024, 0x0026, 0x0027];
	goto labelFunc08C3_0216;
labelFunc08C3_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08C3_017E;
	var0003 = ["再看看", "Dispel Field (祛除力場)", "Explosion (爆炸術)", "Invisibility (隱身術)", "Mass Sleep (大催眠術)"];
	var0004 = [0x0000, 0x002A, 0x002B, 0x002D, 0x002F];
	goto labelFunc08C3_0216;
labelFunc08C3_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08C3_01B5;
	var0003 = ["再看看", "Fire Ring (火環術)", "Magic Storm (魔法風暴)", "Poison Field (毒性力場)", "Tremor (大地震)"];
	var0004 = [0x0000, 0x0032, 0x0034, 0x0035, 0x0037];
	goto labelFunc08C3_0216;
labelFunc08C3_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08C3_01EC;
	var0003 = ["再看看", "Death Bolt (死亡之矢)", "Delayed Blast (延遲爆炸術)", "Energy Field (能量力場)", "Energy Mist (能量之矢)"];
	var0004 = [0x0000, 0x0039, 0x003A, 0x003B, 0x003C];
	goto labelFunc08C3_0216;
labelFunc08C3_01EC:
	var0003 = ["再看看", "Death Vortex (死亡漩渦)", "Mass Death (大死亡術)", "Summon (招喚術)", "Swordstrike (劍擊術)"];
	var0004 = [0x0000, 0x0041, 0x0042, 0x0045, 0x0046];
labelFunc08C3_0216:
	message("「你想買什麼法術？」");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc08C3_0234;
	message("「好的。」");
	say();
	goto labelFunc08C3_02C0;
labelFunc08C3_0234:
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
	if (!(var0009 == 0x0001)) goto labelFunc08C3_027C;
	message("「完成！」");
	say();
	goto labelFunc08C3_02B3;
labelFunc08C3_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08C3_0291;
	message("「你沒有法術書。」");
	say();
	var0000 = false;
	goto labelFunc08C3_02C0;
labelFunc08C3_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08C3_02A2;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc08C3_02B3;
labelFunc08C3_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08C3_02B3;
	message("「你已經擁有那個法術了！」");
	say();
	goto labelFunc08C3_02B3;
labelFunc08C3_02B3:
	message("「你還想要其他的法術嗎？」");
	say();
	var0000 = Func090A();
	goto labelFunc08C3_0026;
labelFunc08C3_02C0:
	UI_pop_answers();
	return;
}


