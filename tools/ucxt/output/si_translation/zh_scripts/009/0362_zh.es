#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0362 shape#(0x362) ()
{
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc0362_003A;
	Func097F(0xFE9C, "@Iolo, about that gold...@", 0x0000);
	Func097F(0xFE9C, "@thou dost owe me...@", 0x0010);
	Func097F(0xFFFD, "@Avatar, what gold?@", 0x0020);
	Func097F(0xFE9C, "@Just kidding...@", 0x0030);
labelFunc0362_003A:
	return;
}


