#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08D5 0x8D5 ();

void Func0610 object#(0x610) ()
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
	var var000A;

	UI_fade_palette(0x0024, 0x0001, 0x0001);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0023, 0x0004);
	enum();
labelFunc0610_001F:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0610_0048;
	if (!((UI_get_alignment(var0003) == 0x0000) && (UI_get_schedule_type(var0003) == 0x0000))) goto labelFunc0610_0045;
	return;
labelFunc0610_0045:
	goto labelFunc0610_001F;
labelFunc0610_0048:
	var0004 = Func0909();
	var0005 = Func0908();
	var0006 = Func08F7(0xFF59);
	var0007 = Func08F7(0xFF58);
	var0008 = Func08F7(0xFFFF);
	if (!UI_get_item_flag(0xFFFF, 0x0001)) goto labelFunc0610_0082;
	var0008 = 0x0000;
labelFunc0610_0082:
	var0009 = Func08F7(0xFFFD);
	if (!UI_get_item_flag(0xFFFD, 0x0001)) goto labelFunc0610_009E;
	var0009 = 0x0000;
labelFunc0610_009E:
	var000A = Func08F7(0xFFFC);
	if (!UI_get_item_flag(0xFFFC, 0x0001)) goto labelFunc0610_00BA;
	var000A = 0x0000;
labelFunc0610_00BA:
	if (!var0006) goto labelFunc0610_00D7;
	UI_show_npc_face(0xFF59, 0x0000);
	Func08D5();
	UI_remove_npc_face(0xFF59);
	goto labelFunc0610_00F1;
labelFunc0610_00D7:
	if (!var0007) goto labelFunc0610_00F1;
	UI_show_npc_face(0xFF58, 0x0000);
	Func08D5();
	UI_remove_npc_face(0xFF58);
labelFunc0610_00F1:
	if (!var0008) goto labelFunc0610_010C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I am gladdened to see thee still alive, my good friend. I was sorely grieved at thine apparent demise.~~\"In the midst of our battle I did lose track of thee. It is good to find thee safe.~~\"If thou art feeling up to it, let us then continue our quest.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0610_010C:
	if (!var0009) goto labelFunc0610_0127;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Thy recovery is a miracle! 'Twould have been a severe blow for this world to lose its Avatar.~~\"When at last thou wert found, thy body was being taken to this place in a wagon driven by two hooded Fellowship members.~~\"Thou hast suffered through a terrible ordeal and travelled far. Perhaps thou shouldst rest...\"*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0610_0127:
	if (!var000A) goto labelFunc0610_0142;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"The Fellowship members who brought thee to this place did not speak once during the entire journey.~~\"But it seems they did the right thing in bringing thee here for thou hast been revived!~~\"Let us all have a drink in celebration! We will be ready to leave whenever thou dost wish it.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0610_0142:
	gflags[0x0026] = true;
	gflags[0x003A] = false;
	UI_clear_item_flag(0xFE9C, 0x0001);
	UI_set_schedule_type(0xFE9C, 0x001F);
	return;
}


