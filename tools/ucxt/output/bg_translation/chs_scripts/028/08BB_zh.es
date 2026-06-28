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
	message("「你对哪一环的法术感兴趣？」");
	say();
	var0003 = Func090C(["再看看", "First (第一环)", "Second (第二环)", "Third (第三环)", "Fourth (第四环)", "Fifth (第五环)", "Sixth (第六环)", "Seventh (第七环)", "Eighth (第八环)"]);
	var0003 = (var0003 - 0x0001);
	if (!(var0003 == 0x0000)) goto labelFunc08BB_006B;
	goto labelFunc08BB_02C0;
labelFunc08BB_006B:
	if (!(var0003 == 0x0001)) goto labelFunc08BB_00A2;
	var0004 = ["再看看", "Light (亮光术)", "Create Food (制造食物)", "Cure (医疗)", "Detect Trap (侦测陷阱)"];
	var0005 = [0x0000, 0x000D, 0x0008, 0x0009, 0x000A];
	goto labelFunc08BB_0216;
labelFunc08BB_00A2:
	if (!(var0003 == 0x0002)) goto labelFunc08BB_00D9;
	var0004 = ["再看看", "Wizard Eye (巫师眼)", "Telekinesis (遥控术)", "Protection (保护术)", "Destroy Trap (摧毁陷阱)"];
	var0005 = [0x0000, 0x0017, 0x0016, 0x0015, 0x0010];
	goto labelFunc08BB_0216;
labelFunc08BB_00D9:
	if (!(var0003 == 0x0003)) goto labelFunc08BB_0110;
	var0004 = ["再看看", "Heal (医疗术)", "Peer (灵视术)", "Sleep (催眠术)", "Protect All (保护全体队员)"];
	var0005 = [0x0000, 0x0019, 0x001D, 0x001F, 0x001B];
	goto labelFunc08BB_0216;
labelFunc08BB_0110:
	if (!(var0003 == 0x0004)) goto labelFunc08BB_0147;
	var0004 = ["再看看", "Mark (标记术)", "Recall (唤回术)", "Seance (降神术)", "Unlock Magic (开锁术)"];
	var0005 = [0x0000, 0x0022, 0x0024, 0x0026, 0x0027];
	goto labelFunc08BB_0216;
labelFunc08BB_0147:
	if (!(var0003 == 0x0005)) goto labelFunc08BB_017E;
	var0004 = ["再看看", "Invisibility (隐身术)", "Charm (迷惑术)", "Fire Field (火焰力场)", "Dance (狂舞术)"];
	var0005 = [0x0000, 0x002D, 0x0028, 0x002E, 0x0029];
	goto labelFunc08BB_0216;
labelFunc08BB_017E:
	if (!(var0003 == 0x0006)) goto labelFunc08BB_01B5;
	var0004 = ["再看看", "Clone (拷贝队员)", "Sleep Field (催眠力场)", "Cause Fear (恐惧术)", "Magic Storm (魔法风暴)"];
	var0005 = [0x0000, 0x0031, 0x0036, 0x0030, 0x0034];
	goto labelFunc08BB_0216;
labelFunc08BB_01B5:
	if (!(var0003 == 0x0007)) goto labelFunc08BB_01EC;
	var0004 = ["再看看", "Mass Might (大力术)", "Energy Mist (能量之矢)", "Restoration (回复术)", "Energy Field (能量力场)"];
	var0005 = [0x0000, 0x003E, 0x003C, 0x003F, 0x003B];
	goto labelFunc08BB_0216;
labelFunc08BB_01EC:
	var0004 = ["再看看", "Resurrect (复活术)", "Time Stop (时间暂停)", "Sword Strike (剑击术)", "Invisible All (全体隐形)"];
	var0005 = [0x0000, 0x0044, 0x0047, 0x0046, 0x0043];
labelFunc08BB_0216:
	message("「你想购买什么法术？」");
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
	message("，这法术要花费 ");
	message(var0008);
	message(" 个金币。」");
	say();
	var000A = Func0923(var0007, var0008);
	if (!(var000A == 0x0001)) goto labelFunc08BB_027C;
	message("「成交！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_027C:
	if (!(var000A == 0x0002)) goto labelFunc08BB_0291;
	message("「你没有法术书。」");
	say();
	var0001 = false;
	goto labelFunc08BB_02C0;
labelFunc08BB_0291:
	if (!(var000A == 0x0003)) goto labelFunc08BB_02A2;
	message("「你的金币不足以支付这个！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02A2:
	if (!(var000A == 0x0004)) goto labelFunc08BB_02B3;
	message("「你已经拥有那个法术了！」");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02B3:
	message("「你还需要别的法术吗？」");
	say();
	var0001 = Func090A();
	goto labelFunc08BB_0026;
labelFunc08BB_02C0:
	UI_pop_answers();
	return;
}


