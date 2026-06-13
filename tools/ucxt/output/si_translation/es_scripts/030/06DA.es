#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);

void Func06DA object#(0x6DA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc06DA_0100;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0001)) goto labelFunc06DA_0072;
	var0001 = Func0992(0xFE9C, "@A Software Pirate!@", 0x0000, true);
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc06DA_0040;
	Func097F(0xFFFD, "@Kill him quickly!@", 0x0010);
labelFunc06DA_0040:
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc06DA_0056;
	Func097F(0xFFFE, "@Format his hard drive!@", 0x0020);
labelFunc06DA_0056:
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc06DA_006C;
	Func097F(0xFFFF, "@Die, Wares-thief!@", 0x0030);
labelFunc06DA_006C:
	Func09AD(0xFF3D);
labelFunc06DA_0072:
	if (!(var0000 == 0x0002)) goto labelFunc06DA_0088;
	Func097F(0xFE9C, "@Look at the bones!@", 0x0000);
labelFunc06DA_0088:
	if (!(var0000 == 0x0003)) goto labelFunc06DA_00C4;
	Func097F(0xFE9C, "@Where are we?@", 0x0000);
	var0002 = Func0992(0x0001, 0x0000, 0x0000, true);
	if (!(var0002 != 0xFE9C)) goto labelFunc06DA_00C4;
	Func097F(var0002, "@We are lost, Avatar.@", 0x0020);
labelFunc06DA_00C4:
	if (!(var0000 == 0x0004)) goto labelFunc06DA_00DA;
	Func097F(0xFE9C, "@I don't like this place...@", 0x0000);
labelFunc06DA_00DA:
	if (!(var0000 == 0x0005)) goto labelFunc06DA_0100;
	var0003 = "Batlin must be opening the Wall of Lights!";
	var0004 = "Make haste! Batlin must be opening the Wall of Lights!";
	var0002 = Func0992(0x0001, var0004, var0003, false);
labelFunc06DA_0100:
	return;
}


