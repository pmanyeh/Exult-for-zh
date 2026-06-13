#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func06F7 object#(0x6F7) ()
{
	var var0000;

	if (!((event == 0x0003) && UI_get_item_flag(0xFFFE, 0x0006))) goto labelFunc06F7_003B;
	Func097F(0xFFFE, "@I know this place!@", 0x0002);
	UI_remove_item(item);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06F7], 0x000C);
labelFunc06F7_003B:
	if (!(event == 0x0002)) goto labelFunc06F7_0096;
	UI_clear_item_say(0xFFFE);
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("\"I never thought to see this again!\"");
	say();
	message("\"Avatar, this castle thou dost see before thee was once mine home. This was once my kingdom -- And once, so long ago that mine heart alone remembers, within these walls dwelt the fairest lady who ever lived... Oh, my poor Beatrix! Left alone so very long ago...\"");
	say();
	message("\"But such remorse doth do us no good now... She is long since dust, I fear, and our peril now is real. If thou wishest, I can draw thee a map of mine home, as once I knew it.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc06F7_0086;
	message("\"I do not know what changes were made after I left, Avatar. But perhaps this will help.\"");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x00B2, 0xFE99, 0x0004, false, true);
	goto labelFunc06F7_008A;
labelFunc06F7_0086:
	message("\"'Tis just as well... I do not know what changes were made after I left. It probably would not help.\"");
	say();
labelFunc06F7_008A:
	message("\"I seem to recall that there was a secret entrance to the west...\"");
	say();
	message("\"But that was a long time ago. I doubt that the two great trees near the illusionary mountain entrance are still there. The secret entrance would be most difficult to find should its landmarks be gone.\"");
	say();
	message("\"'Tis a pity that so much hath changed without my being here...\"");
	say();
labelFunc06F7_0096:
	return;
}


