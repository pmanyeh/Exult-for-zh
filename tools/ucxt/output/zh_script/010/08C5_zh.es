#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08C5 0x8C5 ()
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
	var0001 = [0x0023, 0x0037, 0x0055, 0x005F, 0x007D, 0x0091, 0x00A5, 0x00C3];
labelFunc08C5_0026:
	if (!var0000) goto labelFunc08C5_02C0;
	message("「你想研究哪一環的法術？」");
	say();
	var0002 = Func090C(["再看看", "First (第一環)", "Second (第二環)", "Third (第三環)", "Fourth (第四環)", "Fifth (第五環)", "Sixth (第六環)", "Seventh (第七環)", "Eighth (第八環)"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08C5_006B;
	goto labelFunc08C5_02C0;
labelFunc08C5_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08C5_00A2;
	var0003 = ["再看看", "Create Food (製造食物)", "Great Douse (大熄滅術)", "Light (亮光術)", "Locate (定位術)"];
	var0004 = [0x0000, 0x0008, 0x000B, 0x000D, 0x000E];
	goto labelFunc08C5_0216;
labelFunc08C5_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08C5_00D9;
	var0003 = ["再看看", "Enchant (著魔術)", "Mass Cure (大治療術)", "Protection (保護術)", "Telekinesis (遙控術)"];
	var0004 = [0x0000, 0x0011, 0x0014, 0x0015, 0x0016];
	goto labelFunc08C5_0216;
labelFunc08C5_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08C5_0110;
	var0003 = ["再看看", "Heal (醫療術)", "Swarm (招蟲術)", "Protect All (保護全體隊員)", "Sleep (催眠術)"];
	var0004 = [0x0000, 0x0019, 0x001A, 0x001B, 0x001F];
	goto labelFunc08C5_0216;
labelFunc08C5_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08C5_0147;
	var0003 = ["再看看", "Conjure (招遣術)", "Mass Curse (大詛咒術)", "Reveal (現形術)", "Unlock Magic (開鎖術)"];
	var0004 = [0x0000, 0x0020, 0x0023, 0x0025, 0x0027];
	goto labelFunc08C5_0216;
labelFunc08C5_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08C5_017E;
	var0003 = ["再看看", "Dispel Field (祛除力場)", "Great Heal (大治療術)", "Invisibility (隱身術)", "Fire Field (火焰力場)"];
	var0004 = [0x0000, 0x002A, 0x002C, 0x002D, 0x002E];
	goto labelFunc08C5_0216;
labelFunc08C5_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08C5_01B5;
	var0003 = ["再看看", "Cause Fear (恐懼術)", "Fire Ring (火環術)", "Flame Strike (火焰之擊)", "Sleep Field (催眠力場)"];
	var0004 = [0x0000, 0x0030, 0x0032, 0x0033, 0x0036];
	goto labelFunc08C5_0216;
labelFunc08C5_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08C5_01EC;
	var0003 = ["再看看", "Death Bolt (死亡之矢)", "Energy Field (能量力場)", "Energy Mist (能量之矢)", "Mass Might (大力術)"];
	var0004 = [0x0000, 0x0039, 0x003B, 0x003C, 0x003E];
	goto labelFunc08C5_0216;
labelFunc08C5_01EC:
	var0003 = ["再看看", "Death Vortex (死亡漩渦)", "Mass Death (大死亡術)", "Invisibility All (全體隱形)", "Time Stop (時間暫停)"];
	var0004 = [0x0000, 0x0041, 0x0042, 0x0043, 0x0047];
labelFunc08C5_0216:
	message("「你想買什麼法術？」");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc08C5_0234;
	message("「好的。」");
	say();
	goto labelFunc08C5_02C0;
labelFunc08C5_0234:
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
	if (!(var0009 == 0x0001)) goto labelFunc08C5_027C;
	message("「完成！」");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08C5_0291;
	message("「你沒有法術書。」");
	say();
	var0000 = false;
	goto labelFunc08C5_02C0;
labelFunc08C5_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08C5_02A2;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08C5_02B3;
	message("「你已經擁有那個法術了！」");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_02B3:
	message("「你還想要其他的法術嗎？」");
	say();
	var0000 = Func090A();
	goto labelFunc08C5_0026;
labelFunc08C5_02C0:
	UI_pop_answers();
	return;
}


