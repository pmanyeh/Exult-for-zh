#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func09B1 0x9B1 ();

void Func09B0 0x9B0 (var var0000)
{
	var var0001;

	if (!(var0000 == 0x0001)) goto labelFunc09B0_006E;
	var0001 = Func0994();
	UI_play_music(0x003B, 0x0000);
	message("\"Long ago, there lived a maid As fair as a summer morn.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	message("\"She loved a King, a noble king, Who left her all forlorn.\"");
	say();
	UI_play_music(0x003D, 0x0000);
	message("\"He pledged his heart and sailed away Never to return again.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	message("\"Her heart did break and fade away Into the icy northern wind.\"");
	say();
	UI_play_music(0x003D, 0x0000);
	gflags[0x01D3] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_006E;
	Func09B1();
labelFunc09B0_006E:
	if (!(var0000 == 0x0002)) goto labelFunc09B0_00DC;
	var0001 = Func0994();
	UI_play_music(0x003E, 0x0000);
	message("\"I will tell thee a tale of vaulting ambition laid low by the hands of time.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	message("\"Far away, near where the sun doth rise, there once a mountain stood.\"");
	say();
	UI_play_music(0x003B, 0x0000);
	message("\"It called itself the pinnacle of earth, until the earthquakes came.\"");
	say();
	UI_play_music(0x003D, 0x0000);
	message("\"And now that mountain, tried by fire and ice, lies crushed beneath another's dream.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	gflags[0x01D4] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_00DC;
	Func09B1();
labelFunc09B0_00DC:
	if (!(var0000 == 0x0003)) goto labelFunc09B0_014A;
	var0001 = Func0994();
	UI_play_music(0x003C, 0x0000);
	message("\"Far away, in the cold white north, There lives a vicious band.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	message("\"With soft grey fur, they walk about On two legs just like men.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	message("\"Do not fool thyself to think that they Might be a pretty robe.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	message("\"For if thou dost go a-hunting them, Thou shalt never return home again.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	gflags[0x01D5] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_014A;
	Func09B1();
labelFunc09B0_014A:
	if (!(var0000 == 0x0004)) goto labelFunc09B0_01AA;
	var0001 = Func0994();
	UI_play_music(0x003D, 0x0000);
	message("\"Within the great wide forest, Hard on the snow and ice, There dwells a man called the Forest Master Who rules both plant and beast.\"");
	say();
	UI_play_music(0x003B, 0x0000);
	message("\"His power, by cruel thieves, One day from him was stolen. And now the one great tree doth wilt Without his tender care.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	message("\"So if thou dost seek favors, From the Forest Master fierce, Thou shouldst be prepared to return to him The Orb of Elerion.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	gflags[0x01D6] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_01AA;
	Func09B1();
labelFunc09B0_01AA:
	if (!(var0000 == 0x0005)) goto labelFunc09B0_01FC;
	var0001 = Func0994();
	UI_play_music(0x003B, 0x0000);
	message("\"Walk carefully when thou art dreaming. Never stray too far. For there is one who is waiting To trap thy very soul.\"");
	say();
	UI_play_music(0x003D, 0x0000);
	message("\"See the balance slipping In the fight between ill and good. Thou shalt walk the beam To find the treasure thou seekest.\"");
	say();
	UI_play_music(0x003B, 0x0000);
	gflags[0x01D7] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_01FC;
	Func09B1();
labelFunc09B0_01FC:
	if (!(var0000 == 0x0006)) goto labelFunc09B0_026A;
	var0001 = Func0994();
	UI_play_music(0x003E, 0x0000);
	message("\"Once this land was ruled by kings, One old, one young, but friends true.\"");
	say();
	UI_play_music(0x003D, 0x0000);
	message("\"Then one day, the young king sailed away, And the old king lost his mind.\"");
	say();
	UI_play_music(0x003B, 0x0000);
	message("\"Plagued by goblins and treachery vile, The old king went too far.\"");
	say();
	UI_play_music(0x003C, 0x0000);
	message("\"He killed those he would protect, And threw himself from the White Dragon tower.\"");
	say();
	UI_play_music(0x003E, 0x0000);
	gflags[0x01D8] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_026A;
	Func09B1();
labelFunc09B0_026A:
	return;
}


