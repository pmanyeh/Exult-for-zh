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
	message("「你想研究哪一环的法术？」");
	say();
	var0002 = Func090C(["再看看", "First (第一环)", "Second (第二环)", "Third (第三环)", "Fourth (第四环)", "Fifth (第五环)", "Sixth (第六环)", "Seventh (第七环)", "Eighth (第八环)"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08DB_006B;
	goto labelFunc08DB_02C0;
labelFunc08DB_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08DB_00A2;
	var0003 = ["再看看", "Cure (医疗)", "Detect Trap (侦测陷阱)", "Light (亮光术)", "Awaken (唤醒众人)"];
	var0004 = [0x0000, 0x0009, 0x000A, 0x000D, 0x000F];
	goto labelFunc08DB_0216;
labelFunc08DB_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08DB_00D9;
	var0003 = ["再看看", "Destroy Trap (摧毁陷阱)", "Fire Blast (火焰术)", "Great Light (大光亮术)", "Telekinesis (遥控术)"];
	var0004 = [0x0000, 0x0010, 0x0012, 0x0013, 0x0016];
	goto labelFunc08DB_0216;
labelFunc08DB_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08DB_0110;
	var0003 = ["再看看", "Curse (诅咒术)", "Heal (医疗术)", "Paralyze (麻痹术)", "Poison (撒毒术)"];
	var0004 = [0x0000, 0x0018, 0x0019, 0x001C, 0x001E];
	goto labelFunc08DB_0216;
labelFunc08DB_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08DB_0147;
	var0003 = ["再看看", "Lightning (霹雳闪电)", "Mark (标记术)", "Recall (唤回术)", "Seance (降神术)"];
	var0004 = [0x0000, 0x0021, 0x0022, 0x0024, 0x0026];
	goto labelFunc08DB_0216;
labelFunc08DB_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08DB_017E;
	var0003 = ["再看看", "Charm (迷惑术)", "Dance (狂舞术)", "Explosion (爆炸术)", "Great Heal (大治疗术)"];
	var0004 = [0x0000, 0x0028, 0x0029, 0x002B, 0x002C];
	goto labelFunc08DB_0216;
labelFunc08DB_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08DB_01B5;
	var0003 = ["再看看", "Clone (拷贝队员)", "Magic Storm (魔法风暴)", "Poison Field (毒性力场)", "Sleep Field (催眠力场)"];
	var0004 = [0x0000, 0x0031, 0x0034, 0x0035, 0x0036];
	goto labelFunc08DB_0216;
labelFunc08DB_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08DB_01EC;
	var0003 = ["再看看", "Create Gold (制金术)", "Delayed Blast (延迟爆炸术)", "Mass Charm (大迷惑术)", "Restoration (回复术)"];
	var0004 = [0x0000, 0x0038, 0x003A, 0x003D, 0x003F];
	goto labelFunc08DB_0216;
labelFunc08DB_01EC:
	var0003 = ["再看看", "Armageddon (末日决战)", "Resurrect (复活术)", "Summon (招唤术)", "Swordstrike (剑击术)"];
	var0004 = [0x0000, 0x0040, 0x0044, 0x0045, 0x0046];
labelFunc08DB_0216:
	message("「你想买什么法术？」");
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
	message(" 法术需要花费 ");
	message(var0007);
	message(" 枚金币。\"");
	say();
	var0009 = Func0923(var0006, var0007);
	if (!(var0009 == 0x0001)) goto labelFunc08DB_027C;
	message("「完成！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08DB_0291;
	message("「你没有法术书。」");
	say();
	var0000 = false;
	goto labelFunc08DB_02C0;
labelFunc08DB_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08DB_02A2;
	message("「你没有足够的金币！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08DB_02B3;
	message("「你已经拥有那个法术了！」");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02B3:
	message("「你还想要其他的法术吗？」");
	say();
	var0000 = Func090A();
	goto labelFunc08DB_0026;
labelFunc08DB_02C0:
	UI_pop_answers();
	return;
}


