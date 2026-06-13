#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0719 object#(0x719) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_party_list();
	var0001 = 0x0000;
	var0002 = ["Goblins!!!", "Arrgh, snakes!", "God in heaven! 'Tis Hook...", "Kill the wolves!", "Dragons!", "Pray by the virtues! 'Tis the Guardian!", "Mother Of Invention!", "Reapers by the score!", "...", "...", "...", "..."];
	enum();
labelFunc0719_0038:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0719_006F;
	var0001 = (var0001 + 0x0001);
	if (!(var0001 < 0x000C)) goto labelFunc0719_005D;
	var0001 = 0x0001;
labelFunc0719_005D:
	Func097F(var0005, var0002[var0001], var0001);
	goto labelFunc0719_0038;
labelFunc0719_006F:
	return;
}


