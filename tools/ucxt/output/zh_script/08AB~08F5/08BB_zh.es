#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08BB 0x8BB (var var0000)
{
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

	UI_push_answers();
	var0001 = true;
	var0002 = [0x0014, 0x0028, 0x003C, 0x0050, 0x0064, 0x0082, 0x0096, 0x00B4];
labelFunc08BB_0026:
	if (!var0001) goto labelFunc08BB_02C0;
	message("「你對哪一環的法術感興趣？」");
	say();
	var0003 = Func090C(["再看看", "First (第一環)", "Second (第二環)", "Third (第三環)", "Fourth (第四環)", "Fifth (第五環)", "Sixth (第六環)", "Seventh (第七環)", "Eighth (第八環)"]);
	var0003 = (var0003 - 0x0001);
	if (!(var0003 == 0x0000)) goto labelFunc08BB_006B;
	goto labelFunc08BB_02C0;
labelFunc08BB_006B:
	if (!(var0003 == 0x0001)) goto labelFunc08BB_00A2;
	var0004 = ["再看看", "Light (亮光術)", "Create Food (製造食物)", "Cure (醫療)", "Detect Trap (偵測陷阱)"];
	var0005 = [0x0000, 0x000D, 0x0008, 0x0009, 0x000A];
	goto labelFunc08BB_0216;
labelFunc08BB_00A2:
	if (!(var0003 == 0x0002)) goto labelFunc08BB_00D9;
	var0004 = ["再看看", "Wizard Eye (巫師眼)", "Telekinesis (遙控術)", "Protection (保護術)", "Destroy Trap (摧毀陷阱)"];
	var0005 = [0x0000, 0x0017, 0x0016, 0x0015, 0x0010];
	goto labelFunc08BB_0216;
labelFunc08BB_00D9:
	if (!(var0003 == 0x0003)) goto labelFunc08BB_0110;
	var0004 = ["再看看", "Heal (醫療術)", "Peer (靈視術)", "Sleep (催眠術)", "Protect All (保護全體隊員)"];
	var0005 = [0x0000, 0x0019, 0x001D, 0x001F, 0x001B];
	goto labelFunc08BB_0216;
labelFunc08BB_0110:
	if (!(var0003 == 0x0004)) goto labelFunc08BB_0147;
	var0004 = ["再看看", "Mark (標記術)", "Recall (喚回術)", "Seance (降神術)", "Unlock Magic (開鎖術)"];
	var0005 = [0x0000, 0x0022, 0x0024, 0x0026, 0x0027];
	goto labelFunc08BB_0216;
labelFunc08BB_0147:
	if (!(var0003 == 0x0005)) goto labelFunc08BB_017E;
	var0004 = ["再看看", "Invisibility (隱身術)", "Charm (迷惑術)", "Fire Field (火焰力場)", "Dance (狂舞術)"];
	var0005 = [0x0000, 0x002D, 0x0028, 0x002E, 0x0029];
	goto labelFunc08BB_0216;
labelFunc08BB_017E:
	if (!(var0003 == 0x0006)) goto labelFunc08BB_01B5;
	var0004 = ["再看看", "Clone (複製隊員)", "Sleep Field (催眠力場)", "Cause Fear (恐懼術)", "Magic Storm (魔法風暴)"];
	var0005 = [0x0000, 0x0031, 0x0036, 0x0030, 0x0034];
	goto labelFunc08BB_0216;
labelFunc08BB_01B5:
	if (!(var0003 == 0x0007)) goto labelFunc08BB_01EC;
	var0004 = ["再看看", "Mass Might (大力術)", "Energy Mist (能量之矢)", "Restoration (回複術)", "Energy Field (能量力場)"];
	var0005 = [0x0000, 0x003E, 0x003C, 0x003F, 0x003B];
	goto labelFunc08BB_0216;
labelFunc08BB_01EC:
	var0004 = ["再看看", "Resurrect (復活術)", "Time Stop (時間暫停)", "Sword Strike (劍擊術)", "Invisible All (全體隱形)"];
	var0005 = [0x0000, 0x0044, 0x0047, 0x0046, 0x0043];
labelFunc08BB_0216:
	message("「你想購買什麼法術？」");
	say();
	var0006 = Func090C(var0004);
	if (!(var0006 == 0x0001)) goto labelFunc08BB_0234;
	message("「好吧。」");
	say();
	goto labelFunc08BB_02C0;
labelFunc08BB_0234:
	var0007 = var0005[var0006];
	var0008 = var0002[var0006];
	var0009 = var0004[var0006];
	message("「");
	message(var0009);
	message("，這法術要花費 ");
	message(var0008);
	message(" 個金幣。」");
	say();
	var000A = Func0923(var0007, var0008);
	if (!(var000A == 0x0001)) goto labelFunc08BB_027C;
	message("「成交！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_027C:
	if (!(var000A == 0x0002)) goto labelFunc08BB_0291;
	message("「你沒有法術書。」");
	say();
	var0001 = false;
	goto labelFunc08BB_02C0;
labelFunc08BB_0291:
	if (!(var000A == 0x0003)) goto labelFunc08BB_02A2;
	message("「你的金幣不足以支付這個！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02A2:
	if (!(var000A == 0x0004)) goto labelFunc08BB_02B3;
	message("「你已經擁有那個法術了！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02B3:
	message("「你還需要別的法術嗎？」");
	say();
	var0001 = Func090A();
	goto labelFunc08BB_0026;
labelFunc08BB_02C0:
	UI_pop_answers();
	return;
}


